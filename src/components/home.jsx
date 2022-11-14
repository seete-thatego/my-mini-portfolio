import React from 'react'
import Profilepic from '../assets/profile.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'



const Home = () => {
  return (
    <>
    <div name="home" className='h-screen w-full bg-slate-900 '>
        
        <div className="max-w-screen-lg mx-auto flex flex-col gap-x-16 items-center justify-center h-full px-1 md:flex-row">
            <div className="flex flex-col justify-center h-full">

                    <p className="text-gray-400 text-base py-4 max-w-md ">Hi there! I am </p>

                    <h3 className="text-xl sm:text-4xl font-bold text-neutral-300"> Thatego Seete</h3>

                <p className="text-gray-300 text-sm py-4 max-w-md gap-4">
                    An aspiring developer. My passion for technology is the reason I aspire to be a self-motivated and result-driven developer, who prioritizes the usability and optimized quality of applications aiming at customer safisfaction.
                    Being a developer is not only my short-term career goal but a way in which I can always keep learning.
                    I am excited to start my career in IT, to see what I can achieve and the skills I am yet to acquire in the near future. 
                </p>

                <div>
                    <Link to="about" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"> More
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>

                    </Link>
                </div>
            </div>
            <div>
                <img src={Profilepic} alt="my avatar" className="rounded-3xl md-auto w-1/2 md:w-1/2"/>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home
