"use client"

import { twMerge } from 'tailwind-merge';


export default function TitleSection() {

    return (
        <>
            <main className='flex items-center justify-center relative h-screen'>
                <div className='text-center'>
                    <h1 className='text-[9rem] font-valencia animate-nameTitle relative'>Abdelsatar Ahmed</h1>
                    <div className='bg-white z-20 h-96 absolute top-56 left-0 w-full animate-divTitle'></div>
                    <p className='text-5xl animate-jobTitle font-light relative'>Front End Developer</p>
                </div>
            </main>
        </>
    );
}
