"use client"
import { twMerge } from 'tailwind-merge';

type propsType = {
    skills:string[]
}

export default function SkillsItem({skills}:propsType) {

    return (


            <section className='py-10 w-1/2 m-auto'>
                {skills.map((skillItem: string, index: number) =>
                    <p className='py-1' key={index}>{skillItem}</p>
                )}
            </section>

   
    );
}
