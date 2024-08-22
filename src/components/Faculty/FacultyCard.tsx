
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FacultyCardProps {
  imageSrc: string;
  name: string;
  className: string;
  hovered: string | null; // The currently hovered faculty member
}

const FacultyCard: React.FC<FacultyCardProps> = ({ imageSrc, name, className, hovered }) => {
  return (
    <div className={cn('text-center px-2 md:px-10', className)}>
      <Image
        src={imageSrc}
        alt={name}
        width={400}
        height={400}
        className={cn(
          'rounded-xl w-[300px] md:w-[300px]  transition-all duration-1000 relative z-10',
          {
            'origin-top-left scale-[0.7]': hovered === 'arvinder', // Scale and position the image based on the hovered faculty member
            'origin-top-right scale-[0.7]': hovered === 'rahul',

          }
        )}
      />
      <p
        className={cn(
          'mt-4 text-lg md:text-4xl font-extrabold transition-all duration-1000 absolute',
          {
            'translate-x-[325px] -translate-y-[325px]': hovered === 'arvinder', // Translate the name based on the hovered faculty member
            '-translate-x-[225px] -translate-y-[325px]': hovered === 'rahul',
          }
        )}
      >
        {name}
      </p>
    </div>
  );
};

export default FacultyCard;