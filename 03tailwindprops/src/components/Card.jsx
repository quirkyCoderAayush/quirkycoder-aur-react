import React from 'react'

function Card({image, name, role, quote, btnTxt}) {
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 max-w-xs">
                <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="Profile" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">{quote}</p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">{name}</div>
                        <div>{role}</div>
                    </figcaption>
                </div>
                <button className="mt-4 bg-cyan-500 text-black py-2 px-4 rounded focus:outline-none hover:bg-cyan-300 hover:text-black transition-all duration-200">{btnTxt}</button>
            </figure>
        </>
    )
}

export default Card