import NewsCard from './news-card/NewsCard';
import newsData from "./news-data/newsData";

export default function New() {
    return (
        <section >
            <h2 className='mb-10'>* Новини</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8'>
                {newsData.map((news) => (
                    <NewsCard
                        key={news.id}
                        newsItem={news}
                        className='lg:p-0 lg:m-0 px-4 mb-10'
                    />
                ))}
            </div>
        </section>
    );
}
