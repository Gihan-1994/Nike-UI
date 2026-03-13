"use client"
import  { useState } from 'react';
import React from 'react'
import Image from "next/image";
import Button from '@/app/Components/Button'
import {arrowRight} from "@/app/assets/icons";
import {statistics, shoes} from "@/app/constants";
import {bigShoe1} from "@/app/assets/images";
import ShoeCard from "@/app/Components/ShoeCard";
import {StaticImageData} from "next/image";
interface ShoeCardProps  {
    thumbnail: string;
    bigShoe: StaticImageData;
}

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section
        id="home"
        className="w-full flex xl:flex-row flex-col gap-10 max-container ">

          <div className="relative xl:w-2/5 flex flex-col justify-center items-start
           w-full max-xl:padding-x pt-28">
              <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
              <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                  <span className="xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                  <br/>
                  <span className="text-coral-red inline-block mt-3">Nike</span>
                  Shoes
              </h1>
              <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6
              mb-14 sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
            <Button label= "Shop Now"
            iconURL={arrowRight}/>

              <div className="flex justify-start items-start
               flex-wrap w-full mt-20 mx-10 gap-16">
                  {statistics.map((stat, index) => (
                      <div key={index}>
                          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                          <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                      </div>

                  ))}

              </div>
          </div>
            <div className="relative flex-1 flex justify-center items-center
            xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
               <Image
                   src={bigShoeImg}
                   alt="Shoe collection"
                   width={610}
               height={500}
               className="object-contain
               relative z-10"/>

              <div className="flex sm:gap-6 gap-4
              absolute -bottom-[5%] md:left-[10%]  max-sm:px-6">
                  {shoes.map((shoe :ShoeCardProps, index) => (
                      <div
                          key={index}>
                          <ShoeCard
                              key={index}
                              imgURL={shoe}
                              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                              bigShoeImg={bigShoeImg}
                          />
                      </div>
                  ))}
              </div>
            </div>

        </section>
    )
}
export default Hero
