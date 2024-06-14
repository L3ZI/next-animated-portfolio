"use client"
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const ContactPage = () => {

    const text = "Say Hello"
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY,)
            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    setError(true);
                },
            );
    };


    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                {/*TEXT CONTAINER*/}
                <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
                    <div>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{opacity: 1}}
                                animate={{opacity: 0}}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        ❤️
                    </div>
                </div>
                {/*FORM CONTAINER*/}
                <form ref={form} onSubmit={sendEmail}
                      className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
                    <span>Dear Pasan, I am</span>
                    <input type='text' className='bg-transparent border-b-2 border-b-black outline-none'
                           name='from_name'></input>
                    <span>I am looking for</span>
                    <input type='text' className='bg-transparent border-b-2 border-b-black outline-none'
                           name='user_message'></input>
                    <span>My mail address is,</span>
                    <input type='text' className='bg-transparent border-b-2 border-b-black outline-none'
                           name='user_email'></input>
                    <span>Best Regards</span>
                    <button className='bg-purple-200 rounded font-semibold text-gray-600 px-4'>Send</button>
                    {success &&
                        <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
                    {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
                </form>
            </div>
        </motion.div>
    )
}

export default ContactPage;
