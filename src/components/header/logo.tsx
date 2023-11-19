import Image from 'next/image';
import NextLink from 'next/link';

import logoSvg from './Vector.svg';

export const Logo = () => {
    return (
        <NextLink className='w-[178px] flex gap-2 items-end' href='/'>

            <Image className='w-[101px] h-[50px]' src={logoSvg} alt='Logo' />
            <span className='text-[12px] text-white leading-1 '>Мистецьке обєднання</span>
        </NextLink>
    )
}