const Service = (props) => {
    const { img, title, desc } = props.service;
    return (
        <div className='bg-indigo-300 my-2 mr-2 h-32 md:h-44 md:first:mt-8 md:last:mt-16 rounded-md shadow-md hover:shadow-xl hover:scale-110 cursor-pointer p-4 transform first:rotate-3 last:-rotate-3'>
            <img src={img} alt='service' className='w-8 h-10 rounded-full  shadow-sm' />
            <h6 className='text-md font-semibold leading-4'>{title}</h6>
            <p className='text-xs text-gray-700 leading-4 my-2'>{desc}</p>
        </div>
    )
}

export default Service
