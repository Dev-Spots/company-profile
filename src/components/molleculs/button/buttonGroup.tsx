import type { MouseEventHandler } from "react";

export interface ButtonGroup {
  onClick?: MouseEventHandler;
  text: string;
}

export interface SimpleButtonGroupProps {
  datas: ButtonGroup[];
}

export default function SimpleButtonGroup({ datas }: SimpleButtonGroupProps) {
  return (
    <div className="flex justify-center mx-auto">
      {datas.map(({ onClick, text }, idx) => (
        <button
          key={idx}
          onClick={onClick}
          className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
