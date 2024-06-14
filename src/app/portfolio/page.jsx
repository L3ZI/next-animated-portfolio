"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        color: "from-blue-300 to-violet-300",
        title: "Kioptrix Level 1",
        desc: "Kioptrix is a entry level ctf, and it's focused on SMB exploitation and get the hidden key.",
        img: "/portfolio1.jpeg",
        link: "https://www.linkedin.com/posts/pasan-perera99_ctf-activity-6898817222614118400-6GWl?utm_source=combined_share_message&utm_medium=member_desktop",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "PortSwigger Labs",
        desc: "PortSwigger is a leading provider of cybersecurity tools, a comprehensive platform for web application security testing.",
        img: "/portfolio2.jpeg",
        link: "https://www.linkedin.com/posts/pasan-perera99_portswigger-websecurity-activity-6990678889710694400-aplK?utm_source=combined_share_message&utm_medium=member_desktop",
    },
    {
        id: 3,
        color: "from-blue-300 to-violet-300",
        title: "Password Generator",
        desc: "Password Generator in Flutter provides a user-friendly interface to create strong, random passwords, enhancing security for applications.",
        img: "/portfolio3.jpeg",
        link: "https://www.linkedin.com/posts/pasan-perera99_coding-flutter-activity-7045092149083705344-UTNW?utm_source=combined_share_message&utm_medium=member_desktop",
    },
    {
        id: 4,
        color: "from-blue-300 to-violet-300",
        title: "User Login",
        desc: "A user login and registration feature in Flutter with Firebase enables seamless authentication and secure account management for mobile applications.",
        img: "/portfolio4.jpeg",
        link: "https://www.linkedin.com/posts/pasan-perera99_flutter-google-firebase-activity-7023190357471358977-Y2NJ?utm_source=combined_share_message&utm_medium=member_desktop",
    },
    {
        id: 5,
        color: "from-blue-300 to-violet-300",
        title: "ToDo App",
        desc: "A todo list feature in Flutter using Hive database provides efficient local data storage and management for organizing tasks seamlessly within mobile applications.",
        img: "/portfolio5.jpeg",
        link: "https://www.linkedin.com/posts/pasan-perera99_mobileappdevelopment-flutterappdevelopment-activity-7020613861326151680-xrPo?utm_source=combined_share_message&utm_medium=member_desktop",
    },

]

const PortfolioPage = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll(({ target: ref }));
    const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])
    return (
        <motion.div
            className="h-full"
            initial={{y: "- 200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}
        >
            <div className="h-[600vh]" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My
                    Works
                </div>
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{x}} className='flex'>
                        <div
                            className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-violet-300'/>
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}>
                                <div className='flex flex-col gap-8 text-white'>
                                    <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl '>{item.title}</h1>
                                    <div className='relative w-80 h-40 md:w-96 md:h64 lg:w-[500px] lg:h-[350px] xl:w-[300px] xl:h-[360px]'>
                                        <Image src={item.img} fill/>
                                    </div>
                                    <p className='w-80 md:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
                                    <Link href={item.link} className='flex justify-end'>
                                        <button className='p-1 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-1 rounded'>See more</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
                <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
                    <h1 className='text-8xl'>Do you have a project? </h1>
                    <div className='relative'>
                        <motion.svg  animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat: Infinity}}
                                     viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                            <defs>
                                <path
                                    id='circlePath'
                                    d="M 150,150 m -60,0 a 60, 60 0 0,1 120, 0 a 60,60 0 0, 1 -120,0 "
                                ></path>
                            </defs>
                            <text fill='#000'>
                                <textPath xlinkHref='#circlePath' className='text-xl'>
                                    Defending Data, Securing Tomorrow
                                </textPath>
                            </text>
                        </motion.svg>
                        <Link href='/contact'
                              className='w-16 h-16 md:w-28 md:h-28 absolute top-0 right-0 left-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>Hire
                            Me</Link>
                    </div>
                </div>
        </motion.div>
    )
}

export default PortfolioPage;
