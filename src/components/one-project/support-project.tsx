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
      <div className="md:flex max-w-[1440px] mx-auto px-4 md:p-8 md:gap-4 lg:px-16 lg:py-20 py-16">
        <div className="md:pr-4 lg:pr-8  my-auto md:w-2/3">
          <h2 className="h2 md:text-small-3xl lg:text-4xl lg:leading-4 pb-6">
            {title}
          </h2>
          <p className="text-base md:text-small-md lg:text-xl lg:leading-4 pb-8">
            {text}
          </p>

          <Button
            type="button"
            className=" btn-orange md:min-w-[250px] w-full mx-auto md:m-0 block max-w-[350px] btn-text"
          >
            {buttonText}
          </Button>
        </div>

        <div className="hidden md:block md:flex-1">
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
