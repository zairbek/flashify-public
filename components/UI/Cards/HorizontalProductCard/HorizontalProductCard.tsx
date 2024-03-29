import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Mousewheel} from 'swiper'

import FavoriteButton from "../../Favorite/FavoriteButton/FavoriteButton";
import Rating from "../../Rating/Rating/Rating";
import {Product} from "../../../../utils/interfaces/product/product";

import 'swiper/css';
import "swiper/css/pagination";
import Image from "next/image";

interface HorizontalProductCardProps {
  data: Product
}

const HorizontalProductCard: React.FC<HorizontalProductCardProps> = ({data}) => {
  let link = '/product/test';

  return (
    <div className="flex gap-x-4 bg-white shadow-md rounded-2xl p-2 mb-2 hover:shadow hover:bg-white/60 hover:backdrop-blur-2xl">

      {/*image*/}
      <div className="w-32 md:w-56">
        <div className="flex items-center h-52 relative rounded-2xl bg-gray-100">
          <Swiper
            className="w-full h-full"
            pagination={true}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {data.images.map((item, key) =>
              <SwiperSlide className="flex justify-center" key={key}>
                <Image className="w-[100%] h-[100%] object-contain" src={item.src} layout="fill" alt=""/>
              </SwiperSlide>
            )}
          </Swiper>

          <div className="absolute -top-0 -left-0 z-10">
            <FavoriteButton active={false}/>
          </div>
        </div>


        <div className="flex justify-center md:hidden pt-1 pb-2">
          <p className="flex items-center text-sm mx-auto">
            {data.owner.rating}&nbsp;<Rating rating={data.owner.rating}/>
          </p>
        </div>
      </div>

      {/*info*/}
      <div className="flex-1 py-2">
        <Link href={link}>
          <div className="md:hidden">
            <a className="text-sm font-bold hover:text-blue-500">
              {data.price}
            </a>
          </div>
        </Link>

        <Link href={link}>
          <div>
            <a className="text-sm font-bold hover:text-blue-500">
              {data.title}
            </a>
          </div>
        </Link>

        <Link href={link}>
          <div>
            {data.properties.map((property, key) => (
              <p key={key} className="text-xs"><span className="text-gray-500">{property.name}:</span> {property.value}</p>
            ))}
          </div>
        </Link>

        <div className="hidden md:block">
          <p className="flex items-center text-sm">
            {data.owner.rating}&nbsp;<Rating rating={data.owner.rating}/>
          </p>
        </div>

        <div className="mt-1 md:hidden">
          <button className="btn btn-sm btn-primary normal-case text-x">В&nbsp;корзину</button>
        </div>

      </div>

      {/*salesman*/}
      <div className="hidden md:flex flex-col gap-y-1 w-40 py-2 pr-2">
        <div>
          <p className="font-bold">{data.price}</p>
        </div>
        <div>
          <button className="btn btn-sm btn-primary normal-case text-x">В&nbsp;корзину</button>
        </div>

        <div className="truncate text-xs">
          <a href="/">{data.owner.fullName}</a>
        </div>
      </div>

    </div>
  );
};

export default HorizontalProductCard;
