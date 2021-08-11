import Service from "./Service"

const services = [
    {
        id: 1,
        title: 'Office Cleaning',
        desc: ' We provide you the best srvices and make your office look clean & healther.',
        img: '/images/office.svg'
    },
    {
        id: 2,
        title: 'Restaurant Cleaning',
        desc: ' We provide you the best srvices and make your office look clean & healther.',
        img: '/images/restaurant.png'
    },
    {
        id: 3,
        title: 'Home/Appartment Cleaning',
        desc: ' We provide you the best srvices and make your office look clean & healther.',
        img: '/images/home.svg'
    },
]

const Services = () => {

    return (
        <div className='container mx-auto px-8'>
            <h1 className='text-2xl font-extrabold text-center uppercase text-purple-500 my-4'>Our Services</h1>
            <div className='md:flex items-center'>
                {services.map((s) => <Service key={s.id} service={s} />)}
            </div>
        </div>
    )
}

export default Services
