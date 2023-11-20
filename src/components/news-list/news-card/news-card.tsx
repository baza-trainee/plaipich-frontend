'use client'

import Image from 'next/image';
import React from 'react';

export interface NewsItem {
    _id: string;
    category: string;
    title: string;
    description: string;
    date: string;
    bigImage: string;
}

interface NewsCardProps {
    newsItem: NewsItem;
    className?: string;
}

function SetcategoryColor(category: string) {
    const categorysColors: Record<string, string> = {
        'Фестивалі': 'bg-pink-pearl',
        'Проекти': 'bg-yellow-green',
        'Конкурси': 'bg-volt',
    }
    return categorysColors[category] ?? "bg-transparent";
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className }) => {
    const { category, title, description, date, bigImage } = newsItem;
    return (
        <article className={`flex flex-col justify-between ${className ?? ''}`}>
            {/* fix: need change h-[416px] */}
            <div className='h-[416px] relative'>
                <Image
                    src={bigImage}
                    alt={title}
                    fill
                    className='h-full w-auto object-cover filter hover:contrast-200 hover:scale-110 transition-all'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <hr className='border-white mt-7 mb-5' />
            <div>
                <div className='flex mb-5'>
                    <span className={`text-black py-2 px-4 rounded-large ${SetcategoryColor(category)}`}>{category}</span>
                </div>
                <h3 className='h2 normal-case lg:line-clamp-2 md:line-clamp-1'>{title}</h3>
                <p className='py-3 lg:text-md'>{description}</p>
                <p className='text-gray-500 pb-[13px] lg:text-md' >{date}</p>
            </div>
            <hr className='border-white mt-5' />
        </article>
    );
};

export default NewsCard;
