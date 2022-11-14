import React from 'react'

const About = () => {
  return (
    <>
        <div name="about" className="w-full h-screen bg-neutral-300 text-slate-900 ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-3xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-base mt-4">
                    I'm currently pursuing a diploma in IT, majoring in programming, which I will be completing at the end of 2022. I plan to further my studies and obtain IT certificates. I believe my willingness to learn and fast learning ability will allow me to enjoy the challenge of demanding tasks.
                </p>
                <br/>
                <p className="text-base">
                      One of your values at Sovtech is the belief that technology can solve eveything and change the world. I strongly believe that there's a solution to every problem, and the 4IR is a blueprint to yet more great innovations and improvements to the current technology. Therefore, more solutions to problems. Sovtech is said to have a great learning and working environment, thus my interest in starting my career at SovTech.
                </p>
            </div>
        </div>
    </>
    
  )
}

export default About