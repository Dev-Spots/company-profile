import { useEffect, useRef, useState, useTransition } from "react";

export interface BaseHandlerParams {
  page: number;
  limit: number;
}

export type UseScrollProps<
  state = any,
  handlerParams = BaseHandlerParams & any
> = {
  initialState: state[];
  handler: (param: handlerParams) => Promise<state[]>;
  params?: object;
  fetchLimit?: number;
  filterCond?: (current: state, prev: state[]) => boolean;
};

export default function useScroll<T>({
  initialState,
  handler,
  params,
  fetchLimit = 20,
  filterCond,
}: UseScrollProps<T>) {
  const [data, setData] = useState<typeof initialState>(initialState);
  const [stop, setStop] = useState<boolean>(false);
  const [pending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (stop) return;

    if (!data.length) {
      setStop(true);
      return;
    }
    let newData: T[] = [];
    const observer = new IntersectionObserver(
      (entities) => {
        if (entities[0].isIntersecting)
          startTransition(async () => {
            newData = await handler({
              ...params,
              page: Math.floor(data.length / fetchLimit + 1),
              limit: fetchLimit,
            });
            if (newData.length) {
              if (typeof filterCond === "function")
                setData((prev) => [
                  ...prev,
                  ...newData.filter((el) => filterCond(el, data)),
                ]);
              else setData((prev) => [...prev, ...newData]);
            } else setStop(true);
          });
        if (!newData.length) setStop(true);
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [data, fetchLimit, handler, params, stop]);

  return {
    pending,
    data,
    ref,
  };
}
