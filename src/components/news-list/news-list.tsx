import { Button } from '..';
import NewsCard from './news-card/news-card';
import newsData from "./news-data/news-data";
import { Spiral } from './spiral'

export const NewsList = () => {
    return (
        <section className='lg:p-16 p-7 bg-black text-white'>
            <h2 className='lg:h1 h2 flex items-baseline justify-center'>
                <Spiral/>Новини</h2>
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
            <div className='flex justify-center'>
                <Button className='link-button-primary' type={'button'}>Більше новин</Button>
            </div>
        </section>
    );
}
