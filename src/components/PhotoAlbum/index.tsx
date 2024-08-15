import { cn } from "@/lib/utils";
import Image from "next/image";
import style from "./style.module.css";
const PhotoAlbum = (
    {
        className,
    }: {
        className?: string;
    }
) => {
    return (
        <section className={cn("z-20 rounded-xl relative grid  bg-black text-white w-full h-screen")}>
            <span className="-z-10 hover:text-blue-600 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">SDC</span>
            <div className="grid gap-6 w-full h-full rounded-xl p-4"
                style={{
                   gridTemplateColumns:"repeat(5,minmax(150px,1fr))",
                   gridTemplateRows:"1fr 1fr 1fr"
                }}>
            
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>
                <div className=" w-full h-full ">
                    <Image className={` ${style.images}`}  src="/testpic.png" width={300} height={300} alt="album"/>
                </div>

            </div>
        </section>
    )
}

export default PhotoAlbum;