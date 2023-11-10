export interface  NewsItem  {
	id: number;
	tags?: string;
	title: string;
	content: string;
	date: string;
	imageUrl: string;
}

const newsData: NewsItem[] = [
	{
		id: 1,
		tags: 'Фестиваль',
		title: "Фестиваль Ticket to the sun",
		content: "Розіграш унікальної прикраси з легендарного фестивалю Burning Man для ",
		date: '17 жовтня',
		imageUrl: '/images/news-pic-1.jpg'
	},
	{
		id: 2,
		title: "#Boost_4_culture. В Monтаж відбулася презентація нового проєкту",
		content: "Унікальна подія відбулась цього тижня у нашому улюбленому просторі Моnтаж де ",
		date: '6 жовтня',
		imageUrl: '/images/news-pic-2.jpg'
	},
	{
		id: 3,
		title: `Розіграш унікального кулона “Фенікс/Тризуб"`,
		content: "Розіграш унікальної прикраси з легендарного фестивалю Burning Man для",
		date: '2 жовтня',
		imageUrl: '/images/news-pic-1.jpg'
	},
];

export default newsData;
