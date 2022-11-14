import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={28} />
                </> 
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={28} />
                </> 
            ),
            href: 'https://github.com/seete-thatego?tab=repositories',
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={28} />
                </> 
            ),
            href: 'mailto:mstseete@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={28} />
                </> 
            ),
            href: '/Thatego Seete_CV.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]


  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed "> 
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li key ={id} 
                // eslint-disable-next-line
                className={"flex justify-between items-center w-40 h-14 px-4 ml-[-130px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r  from-gray-500 to-transparent" + " " + style}>
                <a 
                href={href} 
                className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer"> 
                    {child}    
                </a>
            </li>
           ))}

        
        </ul>
    </div>
  )
}

export default SocialLinks