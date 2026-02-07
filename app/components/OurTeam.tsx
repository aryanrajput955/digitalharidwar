import React from 'react'

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Mr Yogesh Gangwar',
            designation: 'CEO',
            image: '/our_team/img1.jpg',
        },
        {
            id: 9,
            name: 'Geeta Gangwar',
            designation: 'CEO',
            image: '/our_team/img9.jpeg',
        },
            {
            id: 5,
            name: 'Mr Manik Bansal',
            designation: 'IT Consultant',
            image: '/our_team/img5.jpg',
        },
        {
            id: 2,
            name: 'Mr Suresh Mohan',
            designation: 'Marketing Executive',
            image: '/our_team/img2.jpg',
        },
     
        {
            id: 3,
            name: 'Mr Gopal Chaturvedi',
            designation: 'Legal Consultant',
            image: '/our_team/img3.jpg',
        },
        {
            id: 4,
            name: 'Aryan Rajput',
            designation: 'Full Stack Developer',
            image: '/our_team/img4.jpg',
        },
    
        {
            id: 6,
            name: 'Mr Vineet ',
            designation: 'Marketing head Pan India',
            image: '/our_team/img6.jpeg',
        },
        {
            id: 7,
            name: 'V4U GROUP UK INDIA ',
            designation: 'Professional recruitment team',
            image: '/our_team/img7.JPG',
        },
        {
            id: 8,
            name: 'Mr Amardeep Robin ',
            designation: 'Office management head',
            image: '/our_team/img8.jpg',
        },
        {
            id: 10,
            name: 'Ishant Gangwar',
            designation: 'IT department cyber security',
            image: '/our_team/img10.JPG',
        },
        {
            id: 11,
            name: 'Mr Dhanesh Chandra Tiwari',
            designation: 'Office coordinator',
            image: '/our_team/img11.jpeg',
        },
        {
            id: 12,
            name: 'Shivam Sharma ',
            designation: 'B2B industrial marketing officer',
            image: '/our_team/img12.JPG',
        },
    ]

    return (
        <section className='py-16 md:py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center max-w-3xl mx-auto mb-10 md:mb-16'>
                    <div className='inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6'>
                        <svg
                            className='w-4 h-4 text-emerald-600'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                        </svg>
                        <span className='text-sm font-semibold text-emerald-700'>
                            OUR TEAM
                        </span>
                    </div>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight'>
                        Meet the{' '}
                        <span className='bg-linear-to-r from-emerald-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                            Experts
                        </span>
                    </h2>
                    <p className='text-lg text-slate-600'>
                        Our talented team of professionals dedicated to your success
                    </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className='group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                        >
                            <div className='aspect-square overflow-hidden'>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>
                            <div className='absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <div className='absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                                    <div className='hidden md:block w-12 h-1 bg-linear-to-r from-emerald-500 to-blue-500 rounded-full mb-3'></div>
                                    <h3 className='text-xs md:text-xl font-bold text-white mb-0.5 md:mb-1'>
                                        {member.name}
                                    </h3>
                                    <p className='text-[9px] md:text-sm text-emerald-300 font-medium uppercase tracking-wider line-clamp-1'>
                                        {member.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
