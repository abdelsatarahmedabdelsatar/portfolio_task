"use client"

import { phoneDataList } from "@/dummy-data/dummy-data";
import Image from "next/image";

import { twMerge } from 'tailwind-merge';

const ScrolledImagesSection = () => {


    return (
        <>

            <main className="grid grid-cols-2 w-7/12 float-end my-80">
                {phoneDataList.map((phoneDataItem, index) =>
                    <Image key={index} width={phoneDataItem.width} height={phoneDataItem.height} src={`/phones/${phoneDataItem.src}`} className={twMerge("relative  py-36 m-auto", phoneDataItem.isFast ? "scroll-fast animate-scrollFast" : "scroll-regular animate-scrollRegular")} alt="" />
                )}
            </main>

        </>
    );
}

export default ScrolledImagesSection;
