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
            <hr />
            <div className='flex'>
                <div className='border py-2 px-4 rounded-large bg-orange'>{tag}</div>
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
            <div>{date}</div>

            <hr />
        </article>
    );
};

export default NewsCard;
