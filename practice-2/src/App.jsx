import React, { useState } from 'react'

const App = () => {
    const dummyData = [
        {
            name: "Red",
            textColor: "text-white",
            backGround: "bg-red-500"
        },
        {
            name: "Green",
            textColor: "text-white",
            backGround: "bg-green-500"
        },
        {
            name: "Blue",
            textColor: "text-white",
            backGround: "bg-blue-500"
        },
        {
            name: "Gray",
            textColor: "text-white",
            backGround: "bg-gray-500"
        },
        {
            name: "Yellow",
            textColor: "text-black",
            backGround: "bg-yellow-500"
        },
        {
            name: "White",
            textColor: "text-black",
            backGround: "bg-white"
        },
        {
            name: "Black",
            textColor: "text-white",
            backGround: "bg-black"
        },
    ]

    const [color, setColor] = useState("bg-black");

    return (
        <div className={`${color} w-full h-screen duration-200 flex items-center`}>
            {/* Button */}
            <div className='flex flex-col fixed flex-wrap py-2 left-12'>
                <div className='bg-white flex flex-col flex-wrap justify-center rounded-3xl gap-3 shadow-lg px-2 py-3'>
                    {
                        dummyData.map((e, i) => {
                            return <button key={i} onClick={() => setColor(e.backGround)} className={`${e.backGround} rounded-full shadow-lg ${e.textColor} outline-none px-4 py-3`}>{e.name}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App