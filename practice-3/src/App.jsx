import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

    const [length, setLength] = useState(8);
    const [includNumber, setIncludNumber] = useState(false);
    const [includeChar, setIncludChar] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerater = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQURSUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (includNumber) str += "0123456789";
        if (includeChar) str += "!@#$%^&*()_+=-{}[]`~";

        console.log(str);

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char);
        }

        setPassword(pass);

    }, [length, includNumber, includeChar, setPassword])

    useEffect(() => {
        passwordGenerater()
    }, [length, includNumber, includeChar, passwordGenerater])

    const copyPassowrdToClip = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, length);
        window.navigator.clipboard.writeText(password);
    }, [password])

    return (
        <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
            <h1 className='py-3 text-center text-2xl'>Password Generator</h1>
            <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
                <input type="text" value={password} className='outline-none py-1 px-3 w-full' readOnly placeholder='Password' ref={passwordRef} />
                <button className='outline-none px-3 py-0.5 bg-blue-700 text-white shrink-0' onClick={copyPassowrdToClip}>Copy</button>
            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input type="range" min={6} max={100} value={length} id='sliderLength' className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
                    <label htmlFor="sliderLength">Length: {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="checkbox" defaultChecked={includNumber} id='numberInput' className='cursor-pointer' onChange={() => setIncludNumber(prev => !prev)} />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="checkbox" defaultChecked={includeChar} id='charInput' className='cursor-pointer' onChange={() => setIncludChar(prev => !prev)} />
                    <label htmlFor="numberInput">Character</label>
                </div>
            </div>
        </div>
    )
}

export default App