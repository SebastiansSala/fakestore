import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

type CardWithTagProps = {
  category: string;
  image: string;
};

const CardWithtag: React.FC<CardWithTagProps> = ({ category, image }) => {
  return (
    <div className='relative h-56 bg-gray-200 flex rounded-md'>
      <div className='absolute inset-0 flex items-center justify-center w-full'>
        <Link
          href={`/shop/${category}`}
          className='flex items-center p-4 w-48 rounded-md justify-between text-sm bg-white'
        >
          <span>{category}</span>
          <BsArrowRight />
        </Link>
      </div>
      <Image
        src={image}
        alt={category}
        width={800}
        height={800}
        className='object-cover h-full object-center'
      />
    </div>
  );
};

export default CardWithtag;
