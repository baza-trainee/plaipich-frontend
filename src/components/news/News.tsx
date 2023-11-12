import NewsCard from './news-card/NewsCard';
import newsData from "./news-data/newsData";

export default function New() {
    return (
        <section className='lg:p-16 px-4'>
            <h2>* Новини</h2>
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
