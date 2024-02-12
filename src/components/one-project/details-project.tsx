import Image from "next/image";
import React from "react";

const data = {
  start: "#Boost_4_Culture",
  enStart: "#Boost_4_Culture",
  text: [
    "проєкт за підтримки ІСАР Єднання в межах програми USAID «Ініціатива секторальної підтримки громадянського суспільства», що спрямований на підтримку та професійний розвиток митців, культурних менеджерів, організацій та спільнот креативних напрямків.\nПроєкт реалізується громадською організацією «Мистецьке об’єднання «ПЛАЙ» протягом року у місті Вінниця — з жовтня 2023 року по липень 2024 року.",
    "Протягом року релоковані та локальні культурні організації та спільноти, митці, менеджери культури, представники секторальних інституцій, креативного бізнесу, медіа будуть вчитися на реальних кейсах, отримувати досвід від практикуючих фахівців, підвищувати свою організаційну спроможність, стратегувати та планувати діяльність, підвищувати рівень знань та вмінь за напрямками: культурний менеджмент, перформанс, візуальне мистецтво, кінематограф.",
    "Культура розвивається попри все в умовах війни. Переосмислює, пропонує зміни, необхідні для майбутнього країни та суспільства. Ми хочемо створити умови для згуртованості культурного сектору через навчання, експерименти, партнерство й мережування.",
  ],
  enText: [
    "a project supported by ISAR Yednannia within the framework of the USAID program 'Civil Society Sectoral Support Initiative', aimed at the support and professional development of artists, cultural managers, organizations and communities of creative directions.\nThe project is implemented by the public organization 'Art Association 'PLAY' during the year in the city of Vinnytsia — from October 2023 to July 2024.",
    "During the year, relocated and local cultural organizations and communities, artists, cultural managers, representatives of sectoral institutions, creative business, media will learn from real cases, gain experience from practitioners, increase their organizational capacity, strategize and plan activities, increase the level of knowledge and skills in the following areas: cultural management, performance, visual art, cinematography.",
    "Culture develops despite everything in the conditions of war. Rethinks, proposes changes necessary for the future of the country and society. We want to create conditions for the cohesion of the cultural sector through learning, experimentation, partnership and networking.",
  ],
  image: [
    "https://i.gyazo.com/93299d373bc9b7134fffb771a3245ef4.png",
    "https://i.gyazo.com/626b4cbd91ed970ba2a86b954e4522a1.png",
  ],
};

const TextWithImage = ({
  text,
  image,
  title,
}: {
  text: string;
  image: string;
  title?: string;
}) => {
  return (
    <div className={`block lg:flex justify-between items-center mb-4 ${!title && 'flex-row-reverse'}`}>
      <p className="py-4 md:py-8 lg:py-0 lg:w-[755px] lg:text-justify">
        {title && <span className="hidden lg:block h1">{title}</span>}
        {text}
      </p>
      <div className="w-full lg:w-[530px] lg:h-[370px]">
        <Image
          width={700}
          height={700}
          src={image}
          alt={"project"}
          className="block w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export const Details = ({
  details,
  lng,
}: {
  lng: "en" | "uk";
  details: {
    start: string;
    enStart: string;
    text: string[];
    enText: string[];
    image: string[];
  };
}) => {
  const { start, enStart, image, text, enText } = details && data;

  const enLng = lng === "en";
  const textWithoutImage = () => {
    const exist = !(image.length === text.length);
    if (exist) {
      return enLng ? enText[image.length] : text[image.length];
    }
  };

  const setTitleForDesc = (ind:number) => {
    if (ind===0) {
      return enLng ? enStart : start
    }
  }

  return (
    <section className="bg-white w-full text-base md:text-small-md lg:text-lg lg:leading-4 font-normal text-black">
      <div className="max-w-[1440px] mx-auto px-4 py-8 md:px-8">
        <h2 className="font-bold text-2xl md:text-small-3xl leading-2 lg:hidden">
          {enLng ? enStart : start}
        </h2>
        {image.length > 0 &&
          image.map((item, ind) => {
            console.log(ind);
            
            return (
              <TextWithImage
                key={ind + item[0]}
                text={enLng ? enText[ind] : text[ind]}
                image={item}
                title={setTitleForDesc(ind)}
              />
            );
          })}
        {textWithoutImage() && <p className="text-justify">{textWithoutImage()}</p>}
      </div>
    </section>
  );
};
