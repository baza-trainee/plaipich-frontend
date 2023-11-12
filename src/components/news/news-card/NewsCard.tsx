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
    const tags: Record<string, string> ={
        'Фестивалі': 'bg-pink-pearl',
        'Проекти': 'bg-yellow-green',
        'Конкурси': 'bg-volt',
    }
    return tags[tag] ?? "bg-transparent";
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className }) => {
    const { tag, title, content, date, imageUrl } = newsItem;
    return (
        <article className={`flex flex-col ${className ?? ''}`}>
            <Image
                src={imageUrl}
                alt={title}
                width={853}
                height={853}
            />
            <hr className='border-black dark:border-white mt-7 mb-5' />
            <div className='flex mb-5'>
                <div className={`border border-black py-2 px-4 rounded-large ${SetTegColor(tag)}`}>{tag}</div>
            </div>
            <h3>{title}</h3>
            <p className='py-3 '>{content}</p>
            <div className='text-gray-500' >{date}</div>

            <hr className='border-black dark:border-white mt-5' />
        </article>
    );
};

export default NewsCard;
