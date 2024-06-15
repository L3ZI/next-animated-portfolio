"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const Homepage = () => {
    return (
        <motion.div
        className="h-full"
        initial={{y: "-200vh"}}
        animate={{y: "0%"}}
        transition={{duration: 1}}
        >

        <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/*IMG CONTAINER*/}
            <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
                <Image src='/hero.png' fill className='object-contain' alt="test"/>
            </div>
            {/*TEXT CONTAINER*/}
            <div className='h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center'>
                {/*TITLE*/}
                <h1 className='text-4xl md:text-xl font-bold'>Securing the Future, One Byte at a Time</h1>
                {/*DESC*/}
                <p className='md:text-xl'>Hello! I’m Pasan Perera, a passionate and driven cybersecurity undergraduate dedicated to
                    protecting digital landscapes. With a strong foundation in threat analysis and network security,
                    Ive honed my skills through hands-on experience and internships at top tech firms. Currently, I
                    am expanding my expertise in ethical hacking to contribute to building robust and secure online
                    infrastructures. Im excited to connect with like-minded professionals and explore opportunities
                    to make the digital world safer for everyone.
                </p>
                {/*BUTTONS*/}
                <div className='w-full flex gap-4'>
                    <Link href='/portfolio' className='p-4 rounded-lg ring-1 ring-black bg-black text-white' alt='test'>View My Work</Link>
                    <Link href='/contact' className='p-4 rounded-lg ring-1 ring-black' alt='test'>Contact me</Link>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Homepage;
