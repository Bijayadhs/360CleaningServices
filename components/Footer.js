import { SiFacebook, SiTiktok, SiInstagram } from 'react-icons/si';
const Footer = () => {
    return (
        <div className='md:h-32 bg-gray-700'>
            <div className='container mx-auto px-8 py-4 md:flex justify-between items-center text-gray-300 font-bold'>
                <div className="left">
                    <div className='text-sm'>360 Cleaning service.</div>
                    <div className='text-xs text-gray-500'>Empowering you business</div>
                    <div className='text-sm mt-2'>
                        <h5>Contact Us</h5>
                        <p className='text-xs text-gray-500'>+61424428959</p>
                        <p className='text-xs text-gray-500'>bjadhs@gmail.com</p>
                    </div>
                </div>
                <div className="flex space-x-8 my-8">
                    <SiFacebook />
                    <SiTiktok />
                    <SiInstagram />
                </div>
                <div className='text-xs'>
                    <div>Privacy Policy . Terms&Conditions</div>
                    <p>&copy;copyright 2021. 360CleaningService.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
