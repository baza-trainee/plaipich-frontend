import { Button } from '..';
import NewsCard from './news-card/news-card';
import newsData from "./news-data/news-data";
import { Spiral } from './spiral'

export const NewsList = () => {
    return (
        <section className='lg:p-16 p-7'>
            <h2 className='uppercase lg:capitalize lg:h1 h2 flex items-center justify-center'>
                <Spiral/>новини</h2>
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
