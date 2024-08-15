import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimatedGradientText from "./AnimatingGradientText";

const PhotoAlbum = ({ className }: { className?: string }) => {
  const TOTAL_IMAGES = 21;
  const PREFIX = "L";

  return (
    <section
      className={cn(
        "relative  w-full flex justify-center items-center text-white flex-col h-[80vh] px-4 mb-14 mt-auto"
      )}
    >
      <div className="absolute flex gap-4 z-0 text-4xl  md:text-6xl font-extrabold">
        Life At
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#22B4F8] to-[#2d7ca1] via-[#EDF3C2] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent mx`
            )}
          >
            SDC
          </span>
        </AnimatedGradientText>
      </div>

      <div className=" px-0 md:px-6 z-10 w-full max-h-full flex flex-row flex-wrap justify-center items-center overflow-hidden gap-y-5 gap-x-4">
        {Array.from({ length: TOTAL_IMAGES }, (_, index) => (
          <div
            key={index}
            className="h-[15%] sm:h-[25%] lg:h-[32%] transition-all aspect-square  rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none "
          >
            <Image
              src={`/${PREFIX}${index + 1}.jpg`}
              width={200}
              height={200}
              alt="album_pic"
              className="w-full h-full transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoAlbum;
