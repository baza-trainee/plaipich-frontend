import Image from 'next/image';
import React from 'react';

import { useTranslation } from '@/app/i18n';
import { API_URL } from '@/commons/constants';
import { IProject } from '@/commons/types';
import { Button } from '@/components/button/button';
import { Spiral } from "@/components/spiral/spiral";
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

  // console.log(Projects);

  return (
    <main>
      <p className="mt-[32px] text-6 mb-12 md:mb-[100px] w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {t('main')} <span className="text-light-blue">{t('projects')}</span>
      </p>
      <h1 className="text-center lg:mb-[120px] text-small-4xl leading-2 lg:text-4xl lg:leading-4 max-w-[1440px] text-white">
        {t('title')}
      </h1>
      <div className="flex flex-wrap gap-[29px]">
        {projects.map((item) => (
          <div key={item._id} className="w-[645px]">
            <Image alt={item.title} src={item.poster} width={645} height={411} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Spiral className="stroke-water-blue w-[35px] h-[27px] lg:w-[40px] lg:h-[32px] mr-3 lg:mr-4" />
            <p>потребує підтримки</p>
            <Button type='button' className=''>Дізнатись більше</Button>
            {/* <h2>{item.enTitle}</h2>
          <p>{item.enDescription}</p> */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
