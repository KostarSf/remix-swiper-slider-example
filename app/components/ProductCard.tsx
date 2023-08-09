import { Link } from "@remix-run/react";
import type { ProductCardInfo } from "~/modules/products.types";

export type ProductCardProps = { data: ProductCardInfo };
export const ProductCard = ({
  data: { id, name, price, image },
}: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className='block'>
      <div className='relative w-full aspect-[2/3] overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover transition duration-300 hover:scale-125'
          loading='lazy'
        />
      </div>
      <p className='text-xs uppercase font-bold mt-2'>{name}</p>
      <p className='text-xs uppercase'>{price}</p>
    </Link>
  );
};
