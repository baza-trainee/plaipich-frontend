import Image from "next/image";

import { Button } from "..";

export const SupportProject = ({
  title,
  text,
  buttonText,
  logo,
}: {
  title: string;
  text: string;
  buttonText: string;
  logo: string;
}) => {
  return (
    <section id="support-project" className="bg-white text-black">
      <div className="md:flex max-w-[1440px] mx-auto px-4 md:p-8  lg:px-[3.875rem] lg:py-20 py-[3.75rem]">

        <div className="md:pr-4 lg:pr-8  my-auto">
          <h2 className="h1 pb-6">
            {title}
          </h2>
          <p className="text-md md:text-xl leading-4 pb-8">
            {text}
          </p>

          <Button type="button"
            className=" btn-orange md:min-w-[250px] w-full md:w-0 max-w-[350px] btn-text">
            {buttonText}
          </Button>
        </div>

        <div className="hidden md:block md:min-w-[224px]">
          <Image
            src={logo}
            alt={title}
            width={415}
            height={380}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
