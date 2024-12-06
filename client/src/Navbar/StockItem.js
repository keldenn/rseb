import * as React from "react";

export function StockItem({ symbol, value, percentage, isPositive, iconSrc }) {
  return (
    <div className="flex gap-2 items-center bg-red-500">
      {symbol && (
        <>
          <div className="self-stretch my-auto text-sm leading-loose text-black text-opacity-30">|</div>
          <div className="self-stretch my-auto text-sm leading-loose text-black text-opacity-80">
            {symbol}
          </div>
        </>
      )}
      <div className="flex gap-1.5 items-center self-stretch my-auto">
        <div className="self-stretch my-auto text-sm leading-loose text-black text-opacity-50">
          {value}
        </div>
        <div className={`self-stretch my-auto text-sm leading-loose ${isPositive ? 'text-lime-600' : 'text-red-500'}`}>
          <span>{percentage}%</span>
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-2.5">
          <img
            loading="lazy"
            src={iconSrc}
            alt={isPositive ? "Upward trend icon" : "Downward trend icon"}
            className="object-contain w-2.5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}