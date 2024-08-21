import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const TOTAL_IMAGES = 14;
  const PREFIX = "L";
  const [count, setCount] = useState(0);

  return (
    <div className="relative py-3 flex items-center justify-between gap-3 mt-2">
      <button
        className={`w-[20px] h-[20px] ${count === 0 ? "opacity-50" : "opacity-100"}`}
        disabled={count === 0}
        onClick={() => setCount((prev) => prev - 1)}
      >
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0625 24.374C19.7935 24.374 25.25 18.9175 25.25 12.1865C25.25 5.45555 19.7935 -0.000976085 13.0625 -0.000975497C6.33153 -0.000974909 0.874998 5.45556 0.874999 12.1865C0.875 18.9175 6.33153 24.374 13.0625 24.374ZM7.71209 11.5236C7.53627 11.6994 7.4375 11.9379 7.4375 12.1865C7.4375 12.4352 7.53627 12.6736 7.71208 12.8494L11.4621 16.5994C11.8282 16.9656 12.4218 16.9656 12.7879 16.5994C13.154 16.2333 13.154 15.6397 12.7879 15.2736L10.6383 13.124L17.75 13.124C18.2678 13.124 18.6875 12.7043 18.6875 12.1865C18.6875 11.6688 18.2678 11.249 17.75 11.249L10.6383 11.249L12.7879 9.09944C13.154 8.73332 13.154 8.13973 12.7879 7.77361C12.4218 7.4075 11.8282 7.4075 11.4621 7.77361L7.71209 11.5236Z"
            fill="white"
          />
        </svg>
      </button>
      <div>
        <div className="overflow-hidden w-[300px] h-[300px] relative">
          <div
            className="flex transition-transform duration-300 w-full h-full "
            style={{ transform: `translateX(${-300 * count}px)` }}
          >
            {Array.from({ length: TOTAL_IMAGES }, (_, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 rounded-xl"
              >
                <Image
                  src={`/${PREFIX}${index + 1}.jpg`}
                  width={450}
                  height={300}
                  alt="album_pic"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className=" flex justify-center mt-3 items-center gap-1">
          {Array.from({ length: TOTAL_IMAGES }).map((_, index) => {
            return (
              <button
                onClick={() => setCount(index)}
                key={index}
                className={`border-0 outline-none w-1 h-1 rounded-full transition-all ${index === count ? "bg-[#0077C2]" : "bg-[#CCCCCC]"}`}
              ></button>
            );
          })}
        </div>
      </div>
      <button
        className={`w-[20px] h-[20px] ${count === TOTAL_IMAGES - 1 ? "opacity-50" : "opacity-100"}`}
        disabled={count === TOTAL_IMAGES - 1}
        onClick={(e) => setCount((prev) => prev + 1)}
      >
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0625 -0.000976562C6.33153 -0.000976562 0.875 5.45555 0.875 12.1865C0.875 18.9175 6.33153 24.374 13.0625 24.374C19.7935 24.374 25.25 18.9175 25.25 12.1865C25.25 5.45555 19.7935 -0.000976562 13.0625 -0.000976562ZM18.4129 12.8494C18.5887 12.6736 18.6875 12.4352 18.6875 12.1865C18.6875 11.9379 18.5887 11.6994 18.4129 11.5236L14.6629 7.77361C14.2968 7.40749 13.7032 7.40749 13.3371 7.77361C12.971 8.13973 12.971 8.73332 13.3371 9.09944L15.4867 11.249L8.375 11.249C7.85723 11.249 7.4375 11.6688 7.4375 12.1865C7.4375 12.7043 7.85723 13.124 8.375 13.124L15.4867 13.124L13.3371 15.2736C12.971 15.6397 12.971 16.2333 13.3371 16.5994C13.7032 16.9656 14.2968 16.9656 14.6629 16.5994L18.4129 12.8494Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
