"use client"

import {AnimatePresence} from "framer-motion";
import Navbar from "@/components/navbar";
import {motion} from "framer-motion";

const TransitionProvider = (children) => {
    return(
        <AnimatePresence>
            <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to bg-red-100">
                <motion.div></motion.div>
                <div className="h-24">
                    <Navbar/>
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider;