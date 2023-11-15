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
            <div className='h-[416px] relative'>
                <Image
                    src={imageUrl}
                    alt={title}
                    // width={416}
                    // height={416}
                    fill
                    className='h-full w-auto object-cover'
                />
            </div>
            <hr className='border-white mt-7 mb-5' />
            <div>
                <div className='flex mb-5'>
                    <span className={`py-2 px-4 rounded-large ${SetTegColor(tag)}`}>{tag}</span>
                </div>
                <h3 className='h2 normal-case trunkate lg:line-clamp-2'>{title}</h3>
                <p className='py-3 lg:text-md'>{content}</p>
                <p className='text-gray-500 pb-[13px] lg:text-md' >{date}</p>
            </div>
            <hr className='border-white mt-5' />
        </article>
    );
};

export default NewsCard;
