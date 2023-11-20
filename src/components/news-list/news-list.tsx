import { Button } from '..';
import NewsCard from './news-card/news-card';
import newsData from "./news-data/news-data";
import { Spiral } from './spiral'

export const NewsList = () => {
    return (
        <section className='lg:p-16 md:px-8 md:py-16 p-7'>
            <div className='flex content-center justify-center'><Spiral /><h2 className='lg:h1 h2'>
                Новини</h2></div>
            <div className='grid grid-cols-1 
            lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]
            md:grid-cols-2 md:my-16 md:gap-x-4'>
                {newsData.map((news) => (
                    <NewsCard
                        key={news.id}
                        newsItem={news}
                        className='lg:m-0 mb-10 hover:text-light-blue'
                    />
                ))}
            </div>
            <div className='flex justify-center'>
                <Button className='btn-primary' type={'button'}>Більше новин</Button>
            </div>
        </section>
    );
}
