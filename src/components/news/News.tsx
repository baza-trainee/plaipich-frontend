import NewsCard from './news-card/NewsCard';
import newsData from "./news-data/newsData";

export default function New() {
    return (
        <section >
            <h2>* Новини</h2>
            {newsData.map((news) => (
                <NewsCard
                    key={news.id}
                    title={news.title}
                    content={news.content}
                    date={news.date}
                    imageUrl={news.imageUrl}
                    className='px-4 my-10'
                />
            ))}
        </section>
    );
}
