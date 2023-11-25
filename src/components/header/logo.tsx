import Image from 'next/image';
import NextLink from 'next/link';

import { useTranslation } from "@/app/i18n/index";
import NAVIGATION from '@/commons/constants';

import logoSvg from './Vector.svg';

export const Logo = async ({ lng }: { lng: string }) => {
    const {t} = await useTranslation(lng, 'header')
    return (
        <NextLink className='w-[178px] flex gap-2 items-end' href={NAVIGATION.main}>

            <Image className='w-[101px] h-[50px]' src={logoSvg} alt="Logo" />
            <span className='text-[12px] text-white leading-1 '>{ t('play')}</span>
        </NextLink>
    )
}