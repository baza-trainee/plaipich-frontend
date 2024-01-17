import Image from "next/image";
import { TbArrowLeft } from "react-icons/tb";

import { formatDate } from "@/utils";

import { Link } from "../index";
import { SetTagColor } from "../news-card/news-card";
import Gallery from "./one-news-gallery";

// const images = [
//   {
//     original: "",
//     thumbnail: "",
//     _id: 1,
//     descr: "photo1",
//   },
//   {
//     original: "",
//     thumbnail: "",
//     _id: 2,
//     descr: "photo2",
//   },
//   {
//     original: "",
//     thumbnail: "",
//     _id: 3,
//     descr: "photo3",
//   },
//   {
//     original: "",
//     thumbnail: "",
//     _id: 3,
//     descr: "photo3",
//   },
//   {
//     original: "",
//     thumbnail: "",
//     _id: 3,
//     descr: "photo3",
//   },
// ];

const OneNews = ({ oneNew }) => {
  console.log(oneNew);
  const { title, date, category, description, mainPhoto, photos } = oneNew;

  return (
    <section className="container py-8">
      <p className=" text-sm leading-4 mb-8 lg:mb-16 w-full max-w-[1440px]">
        Головна / Новини /<span className=" text-dark-blue">{title}</span>
      </p>
      <div className="lg:flex gap-8 lg:h-[640px] lg:overflow-clip mb-10 lg:mb-16">
        <div className="lg:w-[640px] lg:overflow-y-scroll font-normal">
          <p
            className={`inline-block py-2 px-4 rounded-medium mr-6 mb-5 h-[40px] text-base text-center
               ${SetTagColor(category.uk)}`}
          >
            {category.uk}
          </p>
          <h2 className=" font-bold text-xl leading-2 md:text-3xl mb-2 w-72 md:w-full">
            {title}
          </h2>
          <p className=" text-gray-500 text-base leading-2 md:text-md font-normal mb-5">
            {formatDate({ date })}
          </p>

          <p className=" text-base leading-4  lg:font-medium mb-8 md:mb-5">
            {description}, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ullam aliquid laboriosam maiores eaque eius, quidem
            consequatur assumenda suscipit deserunt, praesentium ex voluptates
            facere illo, dolorum adipisci ad minus ipsam enim? Porro possimus
            illum illo perspiciatis quaerat obcaecati aperiam quibusdam id
            dolores! Exercitationem provident atque laboriosam cumque a tenetur
            nesciunt non reiciendis dolorem? Nostrum quam culpa provident
            reprehenderit esse soluta eos. Est nulla perferendis distinctio ex,
            provident adipisci rerum esse accusantium delectus, nemo odio!
            Aperiam eos possimus vero voluptatibus ab, et veniam perferendis. Ab
            voluptas ipsa blanditiis inventore illo et tenetur. Iste quia, modi
            incidunt reprehenderit culpa molestias minima temporibus veniam quis
            voluptatem omnis minus quisquam a dolore odit mollitia delectus, quo
            officia. Officia eos natus praesentium reprehenderit cum quae
            possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam aliquid laboriosam maiores eaque eius, quidem consequatur
            assumenda suscipit deserunt, praesentium ex voluptates facere illo,
            dolorum adipisci ad minus ipsam enim? Porro possimus illum illo
            perspiciatis quaerat obcaecati aperiam quibusdam id dolores!
            Exercitationem provident atque laboriosam cumque a tenetur nesciunt
            non reiciendis dolorem? Nostrum quam culpa provident reprehenderit
            esse soluta eos. Est nulla perferendis distinctio ex, provident
            adipisci rerum esse accusantium delectus, nemo odio! Aperiam eos
            possimus vero voluptatibus ab, et veniam perferendis. Ab voluptas
            ipsa blanditiis inventore illo et tenetur. Iste quia, modi incidunt
            reprehenderit culpa molestias minima temporibus veniam quis
            voluptatem omnis minus quisquam a dolore odit mollitia delectus, quo
            officia. Officia eos natus praesentium reprehenderit cum quae
            possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam aliquid laboriosam maiores eaque eius, quidem consequatur
            assumenda suscipit deserunt, praesentium ex voluptates facere illo,
            dolorum adipisci ad minus ipsam enim? Porro possimus illum illo
            perspiciatis quaerat obcaecati aperiam quibusdam id dolores!
            Exercitationem provident atque laboriosam cumque a tenetur nesciunt
            non reiciendis dolorem? Nostrum quam culpa provident reprehenderit
            esse soluta eos. Est nulla perferendis distinctio ex, provident
            adipisci rerum esse accusantium delectus, nemo odio! Aperiam eos
            possimus vero voluptatibus ab, et veniam perferendis. Ab voluptas
            ipsa blanditiis inventore illo et tenetur. Iste quia, modi incidunt
            reprehenderit culpa molestias minima temporibus veniam quis
            voluptatem omnis minus quisquam a dolore odit mollitia delectus, quo
            officia. Officia eos natus praesentium reprehenderit cum quae
            possimus?
          </p>
        </div>
        <div className="w-[288px] h-[287px] md:w-[704px] md:h-[702px] lg:w-[640px] lg:h-auto bg-link-water relative">
          <Image
            src={mainPhoto}
            alt={title}
            fill
            className="h-full w-auto object-cover"
          />
        </div>
      </div>
      <div className=" mb-10">
        <Gallery images={photos} />
      </div>
      <Link href="" className="inline-flex gap-2 px-6 py-4">
        <TbArrowLeft size="24px" color="black" />
        назад
      </Link>
    </section>
  );
};

export default OneNews;
