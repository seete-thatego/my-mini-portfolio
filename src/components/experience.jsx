import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const techies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'Css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaSript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
    ]

  return (

    <div name='skills' className=" bg-slate-900 w-full h-screen">

        <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full text-neutral-300">
            <div>
                <p className="text-4xl font-bold border-b-4 border-neutral-300 p-2 py-4 inline">Skills</p>
                <p className="py-7">These are the technlogies I'm working on: </p>
            </div>

            <div className="w-full grid grid-cols-3 sm:grid-col-4 gap-5 text-center py-4 px-20 sm:px-0">

                {techies.map(({ id, src, title, style}) => { return (
                    <div
                    key={id} 
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                    <img src={src} alt="" className="w-10 mx-auto" />
                <p className="mt-3">{title}</p>
            </div>
                )})}

            </div>
        </div>
    </div>
  )
}

export default Experience