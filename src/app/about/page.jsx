"use client"
import {motion} from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{y: "- 200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}
        >
            {/*CONTAINER*/}
            <div className="h-full overflow-scroll lg:flex">
                {/*TEXT CONTAINER*/}
                <div
                    className='px-1 sm:p-8 md:p-12 lg:p-20 xl:px-48 flex flex-col lg-gap-20 xl:gap-32 lg:w-2/3 lg:pr-0 xl:1/2'>
                    {/*BIOGRAPHY CONTAINER*/}
                    <div className=''>
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                        <p className='text-lg'>
                            I am a dedicated cybersecurity undergraduate with a passion for safeguarding digital environments.
                            Proficient in threat analysis and network security, also successfully completed internship at David Pieris Motor
                            Company (Pvt) Ltd. Currently honing skills in ethical hacking, aims to contribute to building robust and secure
                            online infrastructures.
                        </p>
                        {/*BIOGRAPHY QUOTE*/}
                        <span className='italic'>Building a Safer Digital Future Through Expertise and Innovation</span>
                    </div>
                    {/*SKILLS CONTAINER*/}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'>SKILLS</h1>
                        {/*SKILL LIST*/}
                        <div className='flex gap-4 flex-wrap'>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Try
                                Hack me
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Hack
                                the box
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Kali
                                Linux
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Parrot
                                Os
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Wireshark
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Python
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MongoDB
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Firebase
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Flutter
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Nextjs
                            </div>
                            <div
                                className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS
                            </div>
                        </div>
                    </div>
                    {/*EXPERIENCE CONTAINER*/}
                    <div className='flex flex-col gap-12 justify-center pb-48'>
                    <h1 className='font-bold text-2xl'>EXPERIENCE</h1>
                        {/*EXPERIENCE LIST*/}
                        <div className=''>
                            {/*EXPERIENCE LIST ITEM*/}
                            <div className='flex justify-between h-48'>
                                {/*LEFT*/}
                                <div className='w-1/3'>
                                    {/*JOB TITLE*/}
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Security
                                        Analyst(Intern)
                                    </div>
                                    {/*JOB DESC*/}
                                    <div className='p3 text-sm italic'>Industrial Training</div>
                                    {/*JOB DATE*/}
                                    <div className='p-3 text-red-400 text-sm font-semibold'>2023 - 2024(8 Mons)</div>
                                    {/*JOB COMPANY*/}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>David Pieris Motor
                                        Company (Pvt) Ltd
                                    </div>
                                </div>

                                {/*CENTER*/}
                                <div className='w-1/6'>
                                    {/*LINE*/}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/*LINE CIRCLE*/}
                                        <div
                                            className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/*RIGHT*/}
                                <div className='w-1/3'>
                                    {/*JOB TITLE*/}
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Junior fullstack web developer
                                    </div>
                                    {/*JOB DESC*/}
                                    <div className='p3 text-sm italic'></div>
                                    {/*JOB DATE*/}
                                    <div className='p-3 text-red-400 text-sm font-semibold'>2023</div>
                                    {/*JOB COMPANY*/}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Zatersio PTY LTD
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;
