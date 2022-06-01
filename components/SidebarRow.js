import Image from 'next/image'
import React from 'react'

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className='flex items-center space-x-2 hover:bg-gray-200 cursor-pointer'>
            {src && (
                <Image
                    className='rounded-full'
                    src={src}
                    alt="image"
                    height={30}
                    width={30}
                    layout="fixed"
                />
            )}

            {Icon && <Icon className="h-8 w-8 text-blue-500 cursor-pointer" />}
            <p className='hidden sm:inline-block'>{title}</p>
        </div>
    )
}

export default SidebarRow