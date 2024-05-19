import React from 'react';
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownloadCloud } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    const { desc, filesize, close, tagdetails } = data;

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale :1.1}} dragElastic={1} dragTransition={{ bounceStiffness: 800, bounceDamping: 20 }} className='w-52 bg-zinc-600 rounded-[2rem] overflow-hidden flex flex-col justify-between'>
            <div className="icon px-5 pt-4 text-white">
                <FaRegFileLines size={20} />
            </div>
            <p className='px-5 text-white mt-5'>{desc}</p>
            <div className="download-box px-5 mt-5 mb-5 text-white flex items-center justify-between">
                <p>{filesize}</p>
                <span className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
                    {close ? <IoMdClose size={23} style={{ cursor: 'pointer' }} /> : <LuDownloadCloud size={23} style={{ cursor: 'pointer' }} />}
                </span>
            </div>
            <div>
            {tagdetails.isOpen && (
                <div className="download-now text-center p-4  text-white" style={{ backgroundColor: tagdetails.tagColor }}>
                    {tagdetails.tagTitle}
                </div>
            )}
            </div>
        </motion.div>
    );
}

export default Card;
