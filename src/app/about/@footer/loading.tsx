import { Spinner } from "@/components/atoms/loader/material-tailwind";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <Spinner className="h-6 w-6" />{" "}
    </div>
  );
}
