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

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className }) => {
    const { tag, title, content, date, imageUrl } = newsItem;
    return (
        <article className={`flex flex-col ${className ?? ''}`}>
            <Image
                src={imageUrl}
                alt={title}
                width={1280}
                height={853} />
            <hr className='mt-7 mb-5'/>
            <div className='flex mb-5'>
                <div className='border py-2 px-4 rounded-large bg-orange'>{tag}</div>
            </div>
            <h3>{title}</h3>
            <p className='py-3 '>{content}</p>
            <div className='text-gray-500' >{date}</div>

            <hr className='mt-5'/>
        </article>
    );
};

export default NewsCard;
