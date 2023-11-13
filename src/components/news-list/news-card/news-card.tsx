import Image from 'next/image';
import React from 'react';

export interface NewsItem {
    id: number;
    tag: string;
    title: string;
    content: string;
    date: string;
    imageUrl: string;
}

interface NewsCardProps {
    newsItem: NewsItem;
    className?: string;
}

function SetTegColor(tag: string) {
    const tagsColors: Record<string, string> = {
        'Фестивалі': 'bg-pink-pearl',
        'Проекти': 'bg-yellow-green',
        'Конкурси': 'bg-volt',
    }
    return tagsColors[tag] ?? "bg-transparent";
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className }) => {
    const { tag, title, content, date, imageUrl } = newsItem;
    return (
        <article className={`flex flex-col justify-between ${className ?? ''}`}>
            {/* треба замінити h-[416px] */}
            <div className='bg-orange h-[416px] relative'>
                <Image
                    src={imageUrl}
                    alt={title}
                    // width={416}
                    // height={416}
                    fill
                    className='h-full w-auto object-cover'
                />
            </div>
            <hr className='border-black dark:border-white mt-7 mb-5' />
            <div>
                <div className='flex mb-5'>
                    <div className={`border border-black py-2 px-4 rounded-large ${SetTegColor(tag)}`}>{tag}</div>
                </div>
                <h3 className='normal-case'>{title}</h3>
                <p className='py-3 '>{content}</p>
                <div className='text-gray-500' >{date}</div>
            </div>
            <hr className='border-black dark:border-white mt-5' />
        </article>
    );
};

export default NewsCard;
