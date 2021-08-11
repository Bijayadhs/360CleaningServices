import React from 'react'

const Testomonial = () => {
    return (
        <div className='container md:mx-auto px-8 bg-purple-500'>
            <div className=' bg-black md:flex items-center text-white p-12 opacity-80'>
                <h1 className='flex-1 uppercase font-extrabold md:text-3xl'>What <br />our client <br />says</h1>
                <div className='flex-1 mt-4'>
                    <div className="flex-1 font-extrabold text-3xl  border-b-2 border-b-white border-1 inline">01.</div>
                    <h1 className='text-sm italic font-light my-2 text-gray-300'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni odit non a odio molestiae modi exercitationem rem molestias ab? "</h1>
                    <div className="flex items-center space-x-4">

                        <img className='rounded-full overflow-hidden w-8 h-8' src='/images/ad.jpg' alt='avatar' />
                        <div className="flex-col mt-4">
                            <p className=''>Ad Jeninafe</p>
                            <p className='text-gray-500 text-xs font-bold'>CEO & Founder</p>
                        </div>

                    </div>
                    <div className=' flex justify-end space-x-4 mt-8'>
                        <div className='w-4 h-4 rounded-full bg-white'></div>
                        <div className='w-4 h-4 rounded-full bg-gray-500'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testomonial
