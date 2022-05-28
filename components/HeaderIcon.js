import React from 'react'

const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className='flex items-center cursor-pointer md:px-3 sm:h-8 rounded-xl md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group'>
            <Icon className={`h-5 text-center group-hover:text-blue-500 text-gray-500 sm:h-6 sm:pr-2 mx-auto ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon