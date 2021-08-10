import { CgPhone } from 'react-icons/cg';
import { IoMdArrowDropup, IoMdSend } from 'react-icons/io';
import Link from 'next/link';
import { QuoteContext } from '../store/context';
import { useState, useContext } from 'react';


const Banner = () => {
    const [message, setMessage] = useState('');
    const { quote, setQuote } = useContext(QuoteContext);
    const submitHandler = (e) => {
        e.preventDefault();
        setMessage('');
        setQuote(false);

    }
    return (
        <div className='mx-auto relative'>
            <img className='w-screen h-screen' src='/images/banner.jpg' alt='360 cleaning services' />
            <div className='absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-black to-blue-50 opacity-60'></div>
            {quote && <div><div className='absolute -top-2 left-24 md:right-24 w-4 text-4xl  text-purple-100'><IoMdArrowDropup /></div>
                <div className='absolute top-3 left-12 md:right-12 w-64 md:w-1/3 h-40 md:h-1/2 p-2 md:p-4 bg-purple-100 rounded-2xl shadow-2xl'>
                    <h2 className=' text-sm md:text-xl leading-5 mb-2'>Tell us about you venue, and we will get back to you </h2>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full h-18 md:h-1/2 outline-none'></textarea>
                    <button onClick={submitHandler} className='flex items-center border-2 border-purple-500 px-2 space-x-2 my-2'><p className='font-semibold'>Send</p> <IoMdSend /></button>
                </div>
            </div>
            }
            <div className='container mx-auto px-8 py-0'>
                <div className='absolute z-40 left-12 top-48 md:top-40 flex-col'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-indigo-100'>360 Cleaning Services </h1>
                    <h4 className='text-indigo-300 text-3xl font-thin'>Empowering your business</h4>
                    <Link href="tel:+61 424428959">
                        <button className='flex items-center  bg-purple-500 px-4 py-2 text-md font-semibold text-white  rounded-full shadow hover:shadow-xl hover:bg-purple-600 transform active:scale-90 mt-4'><CgPhone />  <span className='pl-2'> +61-424428959</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
