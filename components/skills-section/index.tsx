"use client"

import { SkillsData } from '@/dummy-data/dummy-data';
import AnimatedTitle from '../animated-title/animated-title';
import SkillsItem from './skill-item/skill-item';


const SkillsSection = () => {

    return (
        <div className='h-[70vh] mt-64' >

            <div className='relative top-44'>
                <AnimatedTitle title='SKILLS' direction="rtl" />
            </div>
            <section className='grid grid-cols-2 text-3xl ms-20 relative'>
                <SkillsItem skills={SkillsData.design} />
                <SkillsItem skills={SkillsData.tech} />
                <SkillsItem skills={SkillsData.management} />
                <SkillsItem skills={SkillsData.userInterface} />
            </section>
        </div>
    );
}


export default SkillsSection;