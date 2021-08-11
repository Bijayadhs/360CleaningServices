import { useState, useEffect } from 'react';
const Subscription = () => {
    const [thanks, setThanks] = useState(false);
    const [sub, setSub] = useState('a@g.com');
    const subscribedEmail = ['bj@gmail.com']

    const handleSubmit = (e) => {
        e.preventDefault();
        subscribedEmail.push(sub)
        console.log(subscribedEmail);
        setSub('')
        setThanks(true);
    }

    useEffect(() => {
        setInterval(() => setThanks(false), 3000)

    }, [])
    return (
        <div className='container mx-auto px-8 bg-purple-500 text-white text-xs text-center font-bold py-12 '>
            <h1 className=' text-lg md:text-2xl mb-4 italic md:uppercase'>Subscribe to our mailing list.</h1>
            <form onSubmit={handleSubmit}>
                <input className='px-4 py-2 outline-none text-gray-800' type="email" placeholder="example@gmail.com" value={sub} onChange={e => setSub(e.target.value)} />
            </form>
            {thanks && <p className='pt-4 text-red-400'>Thank you for Subscription!!!</p>}
        </div>
    )
}

export default Subscription
