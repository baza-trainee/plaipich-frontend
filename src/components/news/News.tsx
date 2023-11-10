import NewsCard from './news-card/NewsCard';
import newsData from "./news-data/newsData";

export default function New() {
    return (
        <section >
            <h2>* Новини</h2>
            <div className='lg:grid lg:grid-cols-3 gap-8'>
                {newsData.map((news) => (
                    <NewsCard
                        key={news.id}
                        newsItem={news}
                        className='lg:p-0 lg:m-0 px-4 my-10'
                    />
                ))}
            </div>
        </section>
    );
}
