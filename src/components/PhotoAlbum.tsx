import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimatedGradientText from "./AnimatingGradientText";

const PhotoAlbum = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative w-full flex justify-center items-center text-white flex-col h-[80vh] px-4 mb-14 mt-auto"
      )}
    >
      <div className="absolute flex gap-4 z-0 text-4xl sm:text-6xl font-extrabold">
        Life At
        <AnimatedGradientText>
          <span
            className={cn(
              `hidden lg:inline animate-gradient bg-gradient-to-r from-[#22B4F8] to-[#2d7ca1] via-[#EDF3C2] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent mx`
            )}
          >
            SDC
          </span>
        </AnimatedGradientText>
      </div>

      <div className="z-10 w-full max-h-full flex flex-row flex-wrap justify-center items-center overflow-hidden gap-y-4 gap-3">
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>

        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>

        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={300}
            height={300}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-all aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-[all 0.5s]  aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-[all 0.5s]  aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-[all 0.5s]  aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
        <div className=" h-[30%] transition-[all 0.5s]  aspect-square basis-[1/3] rounded-xl object-cover opacity-0 -translate-y-[30px] scale-100 hover:opacity-100 hover:transform-none ">
          <Image
            src="/testpic.png"
            width={500}
            height={500}
            alt="album_pic"
            className="transition-all object-cover rounded-[100%] hover:rounded-xl aspect-square "
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;
