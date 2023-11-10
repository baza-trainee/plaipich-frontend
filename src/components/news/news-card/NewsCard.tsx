import Image from 'next/image';
import React from 'react';

import { NewsItem } from '@/components/news/news-data/newsData';

interface NewsCardProps {
    newsItem: NewsItem;
    className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className }) => {
    const {tags, title, content, date, imageUrl} = newsItem;
    return (
        <article className={`flex flex-col ${className ?? ''}`}>
            <Image
                src={imageUrl}
                alt={title}
                width={1280}
                height={853} />
            <hr />
            <div
                className='rouned-full'>
                {tags}
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
            <div>{date}</div>

            <hr />
        </article>
    );
};

export default NewsCard;
