import Link from "next/link";
import Image from "next/image";

type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  href: string;
  title: string;
  icon?: IconProps; // Updated to match the new icon structure
  className?: string; // Optional className prop
};

const NavLinks = ({ href, title, icon, className }: Props) => {
  return (
    <Link href={href} className={className}>
      <div className="flex items-center gap-5 space-x-2 py-2 pl-3 pr-4 text-white">
        {icon && (
          <span className="flex-shrink-0">
            <Image
              priority
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className="rounded-lg"
            />
          </span>
        )}
        <span className="text-lg font-Raleway font-bold">{title}</span>
      </div>
    </Link>
  );
};

export default NavLinks;
