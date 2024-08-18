"use client"
import AnimatedTitle from '../animated-title/animated-title';


  const AboutMeSection = () => {

    return (
   
            <section className='relative mb-52'>
                <AnimatedTitle title='ABOUT ME' direction="ltr" />
                <p className='text-4xl absolute   w-3/4 mt-10 right-0 top-32 font-extralight'>
                    Crafting user friendly and aesthetic UI designs is not just my profession, it's my passion
                </p>
            </section>
          
    );
}

export default AboutMeSection;
