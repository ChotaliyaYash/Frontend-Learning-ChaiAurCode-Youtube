import React, { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputField } from "./components/index"

const App = () => {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swapCurrency = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const handelConvert = (e) => {
        e.preventDefault();
        setConvertedAmount(amount * currencyInfo[to]);
    }


    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: "url(https://images.pexels.com/photos/3980364/pexels-photo-3980364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }} >
            <div className="w-full flex">
                <div className='w-full flex-grow'>
                    <div className='max-w-md mx-auto'>
                        <img className=' object-cover rounded-lg' src="https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                </div>
                <div className='w-full flex-grow'>
                    <div className=" max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form onSubmit={(e) => handelConvert(e)} >

                            <div className="w-full mb-1">
                                <InputField label="From" currencyOptions={options} selectCurrency={from} onCurrencyChange={(e) => setFrom(e)} amount={amount} onAmountChange={(e) => setAmount(e)} />
                            </div>

                            <div className="relative w-full h-0.5">
                                <button onClick={swapCurrency} type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" >
                                    swap
                                </button>
                            </div>

                            <div className="w-full mt-1 mb-4">
                                <InputField label="To" currencyOptions={options} selectCurrency={to} amount={convertedAmount} amountDisable={true} onCurrencyChange={(e) => setTo(e)} />
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App