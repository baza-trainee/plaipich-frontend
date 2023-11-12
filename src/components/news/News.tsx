import Image from 'next/image';

import NewsCard from './news-card/NewsCard';
import newsData from "./news-data/newsData";

export default function New() {
    return (
        <section className='lg:p-16 p-4 dark:bg-black'>
            <h2 className='flex items-center'>
                <Image
                    src={'/images/spiral.svg'}
                    alt='Спіралька'
                    width={76}
                    height={61}
                    className='w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4 dark:stroke=pink-pearl'
                />
                Новини</h2>
            <div className='grid grid-cols-1 
            lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]'>
                {newsData.map((news) => (
                    <NewsCard
                        key={news.id}
                        newsItem={news}
                        className='lg:m-0 mb-10'
                    />
                ))}
            </div>
        </section>
    );
}
