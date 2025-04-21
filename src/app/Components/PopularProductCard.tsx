import React from 'react'
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { star } from '@/app/assets/icons';



interface PopularProductCardProps {
    imgURL: StaticImageData;
    name: string;
    price: string;
}
const PopularProductCard = ({imgURL, name, price}: PopularProductCardProps) => {
    return (
        <div
        className="flex flex-1 flex-col w-full max-sm:w-full">
            <Image
            src={imgURL}
            alt={name}
            className="w-[280px] h-[280px]"
            />
          <div
          className="mt-6 ml-2 flex flex-col justify-start gap-2.5">
              <div className="flex items-center gap-2">
                  <Image
                      src={star} alt="rating" width={24} height={24}/>
                  <p className="font-monserrat text-xl leading-normal text-slate-gray">
                      4.5
                  </p>
              </div>

              <h3 className="mt-1 text-2xl leading-normal font-semibold font-family-palanquin">{name}</h3>
              <p className="mt-1 font-montserrat text-xl leading-normal text-coral-red">{price}</p>
          </div>
        </div>
    )
}
export default PopularProductCard
