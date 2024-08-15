import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "group relative flex max-w-fit transition-shadow duration-100 ease-out [--bg-size:300%] ",
                className,
            )}
        >
            <div
                className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#22B4F8]/50 to-[#2d7ca1]/50  via-[#EDF3C2]/50 bg-[length:var(--bg-size)_100%]  ![mask-composite:subtract]  [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
            />
            {children}
        </div>
    );
}
