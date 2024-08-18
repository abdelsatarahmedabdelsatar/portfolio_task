"use client"
import AnimatedTitle from '../animated-title/animated-title';
import Image from 'next/image';


export default function ContactUsSection() {

    return (
        <div className='h-[70vh] mt-52'>
            <AnimatedTitle title='CONTACT' direction="ltr" />
            <section className='relative w-9/12 flex items-center justify-evenly float-end top-36'>
                <a href=""><Image width={85} height={85} src={'/images/social-media/twitter.svg'} alt='twitter image' /></a>
                <a href=""><Image width={85} height={85} src={'/images/social-media/git.svg'} alt='twitter image' /></a>
                <a href=""><Image width={85} height={85} src={'/images/social-media/mail.svg'} alt='twitter image' /></a>
                <a href=""><Image width={85} height={85} src={'/images/social-media/insta.svg'} alt='twitter image' /></a>
                <a href=""><Image width={85} height={85} src={'/images/social-media/dribbble.svg'} alt='twitter image' /></a>
                <a href=""><Image width={85} height={85} src={'/images/social-media/linkedin.svg'} alt='twitter image' /></a>
            </section>
            <div className="clear-both"></div>
        </div>
    );
}
