import Image from 'next/image';
import React from 'react';

import { INews } from '@/commons/types';
import { formatDate } from '@/utils';

interface NewsCardProps {
    newsItem: INews;
    className?: string;
    lng: 'en' | 'uk';
}

function SetTagColor(tag: string) {
    const tagsColors: Record<string, string> = {
        'Фестивалі': 'bg-pink-pearl',
        'Проекти': 'bg-yellow-green',
        'Конкурси': 'bg-volt',
    }
    return tagsColors[tag] ?? "bg-transparent";
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className, lng }) => {
    const { description, title, category, date, mainPhoto } = newsItem;
    return (
        <article className={`flex flex-col justify-between ${className ?? ''}`}>
            {/* fix: need change h-[416px] */}
            <div className='h-[416px] relative'>
                <Image
                    src={mainPhoto}
                    alt={title}
                    fill
                    className='h-full w-auto object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <hr className='border-white mt-7 mb-5' />
            <div>
                <div className='flex mb-5'>
                    <span className={`text-black py-2 px-4 rounded-large ${SetTagColor(category)}`}>{category}</span>
                </div>
                <h3 className='h2 normal-case lg:line-clamp-2 md:line-clamp-1'>{title}</h3>
                <p className='py-3 lg:text-md md:line-clamp-2'>{description}</p>
                <p className='text-gray-500 pb-[13px] lg:text-md' >{formatDate({date, lng})}</p>
            </div>
            <hr className='border-white mt-5' />
        </article>
    );
};

export default NewsCard;
