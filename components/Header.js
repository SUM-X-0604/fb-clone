import { useState } from 'react';
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid'

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    const [search, setSearch] = useState();
    const { data: session } = useSession();

    const showInput = () => {
        setSearch(!search)
    }

    return (
        <div className='sticky top-0 z-50 bg-white flex items-center justify-evenly justi p-2 lg:px-5 shadow-xl'>

            {/* left */}
            <div className='flex justify-center items-center px-2 py-2 md:pl-6'>
                <div className='flex items-center justify-center'>
                    <Image
                        src="https://links.papareact.com/5me"
                        width={25}
                        height={25}
                        layout="fixed"
                        alt='logo'
                        className='cursor-pointer'
                    />
                </div>
                <div className='flex ml-2 items-center rounded-full cursor-pointer bg-gray-100 p-2'>
                    <SearchIcon className='h-4 text-gray-600' onClick={showInput} />
                    {search ? '' : <input type="text" placeholder='Search Facebook' className='hidden sm:inline-flex outline-none ml-2 bg-transparent placeholder-gray-500 
                    flex-shrink' />}
                </div>
            </div>

            {/* middle */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-3 sm:space-x-4 md:space-x-5 pr-2 sm:pr-12 '>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon}
                    />
                </div>
            </div>

            {/* right */}
            <div className='flex items-center sm:space-x-2 justify-end'>

                {/* profile image */}
                <Image
                    onClick={signOut}
                    className='cursor-pointer rounded-full'
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                    alt='profile picture'
                />

                {/* name */}
                <p className='font-semibold whitespace-nowrap pr-3 text-sm sm:text-lg md:text-lg'>
                    {session.user.name}
                </p>
                <ChatIcon className='icon' />
                <ViewGridIcon className='icon' />
                <ChevronDownIcon className='icon' />
                <BellIcon className='icon' />

            </div>


        </div>
    )
}

export default Header