"use client"
import React from 'react'
import {StaticImageData} from "next/image";
import Image from 'next/image';

interface ShoeCardProps {
    imgURL: {
        thumbnail: string;
        bigShoe: StaticImageData;
    };
    changeBigShoeImage: (shoe: StaticImageData) => void;
    bigShoeImg: StaticImageData;
}
function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }: ShoeCardProps) {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            {
                changeBigShoeImage(imgURL.bigShoe)
            }
        }
    }
    return (
        <div
        className={`border-2 rounded-xl cursor-pointer 
        transition ease-in-out delay-150 
        hover:-translate-y-1 hover:scale-110 hover:ring-rose-200 max-sm:flex-1
         ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-blue-300"}
        
        `}
        onClick={handleClick}>
            <div className=" flex justify-center items-center
             bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <Image
                    src={imgURL.bigShoe}
                    alt="shoe thumbnail"
                    width={120}
                    height={100}
                    className="object-contain"
                />
            </div>


        </div>
    )
}

export default ShoeCard
