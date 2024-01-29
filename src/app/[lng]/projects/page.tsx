import Image from 'next/image';
import React from 'react';

import { useTranslation } from '@/app/i18n';
import { API_URL } from '@/commons/constants';
import { IProject } from '@/commons/types';
import { Button } from '@/components/button/button';
import { Spiral } from '@/components/spiral/spiral';
import { apiService } from '@/services/api-service';

const Projects = async ({
  params,
}: {
  params: {
    lng: 'en' | 'uk';
  };
}) => {
  const { t } = await useTranslation(params.lng, 'projects');
  const {
    data: { projects },
  }: { data: { projects: IProject[] } } = await apiService.getRequest(API_URL.PROJECTS);

  // console.log(Projects, projects);

  return (
    <main className="w-full max-w-[1440px] mx-auto text-black bg-white">
      <p className="mt-[32px] text-6 mb-[24px] md:mb-[32px] lg:mb-[40px] mx-auto px-4 md:px-8">
        {t('main')} <span className="text-light-blue">{t('projects')}</span>
      </p>
      <div className="flex justify-center items-baseline mb-[24px] md:mb-[40px] lg:mb-[62px]">
        <Spiral className="stroke-water-blue w-[26px] h-[21px] md:w-[35px] md:h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
        <h1 className="text-2xl md:text-small-3xl leading-2 lg:text-4xl lg:leading-4 font-bold">
          {t('title')}
        </h1>
      </div>
      <div className="flex flex-wrap gap-[29px] justify-center">
        {projects.map((item) => (
          <div key={item._id} className="w-[645px]">
            <Image
              alt={item.title}
              src={item.poster}
              width={645}
              height={411}
              className="h-[411px] object-cover mb-[16px] lg:mb-[20px]"
            />
            <h2 className="uppercase mb-[16px] text-xl lg:text-3xl font-bold text-wine-berry">{item.title}</h2>
            <p className="mb-[16px] lg:mb-[20px]">{item.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <Spiral className="stroke-water-blue w-[35px] h-[27px] lg:w-[40px] lg:h-[32px] mr-3 lg:mr-4" />
                {item.status === true ? <p>Профінансовано</p> : <p>Потребує підтримки</p>}
              </div>
              <Button type="button" className="py-[18px] px-[24px]">
                Дізнатись більше
              </Button>
            </div>
            {/* <h2>{item.enTitle}</h2>
          <p>{item.enDescription}</p> */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
