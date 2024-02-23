import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuMoveRight } from 'react-icons/lu';

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

  return (
    <main className="w-full mx-auto text-black bg-white pt-[32px] pb-[30px]">
      <p className="text-6 mb-[24px] md:mb-[32px] lg:mb-[40px] mx-auto px-4 md:px-8 max-w-[1440px] invisible lg:visible">
        {t('main')} <span className="text-dark-blue">{t('projects')}</span>
      </p>
      <div className="flex justify-center items-baseline mb-[24px] md:mb-[40px] lg:mb-[62px]">
        <Spiral className="stroke-water-blue w-[26px] h-[21px] md:w-[35px] md:h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
        <h1 className="text-2xl md:text-small-3xl leading-2 lg:text-4xl lg:leading-4 font-bold">
          {t('title')}
        </h1>
      </div>
      <div className="flex items-center lg:flex-wrap flex-col lg:flex-row gap-[30px] lg:justify-center max-w-[1440px] mx-auto">
        {projects.map((item) => (
          <div key={item._id} className="w-[288px] md:w-[704px] lg:w-[641px]">
            <Image
              alt={params.lng === 'en' ? item.enTitle : item.title}
              src={item.poster}
              width={704}
              height={411}
              className="h-[411px] object-cover mb-[16px] lg:mb-[20px]"
            />
            <h2 className="uppercase lg:normal-case mb-[16px] text-xl lg:text-3xl font-bold text-wine-berry h-[64px] lg:h-[96px]">
              {params.lng === 'en' ? item.enTitle : item.title}
            </h2>
            <p className="mb-[16px] lg:mb-[20px] h-[190px]">
              {params.lng === 'en' ? item.enDescription : item.description}
            </p>
            <div className="md:flex justify-between items-center mb-[30px]">
              {item.status === true ? (
                <div className="flex justify-center items-center">
                  <Spiral className="stroke-green w-[35px] h-[27px] lg:w-[40px] lg:h-[32px] mr-3 lg:mr-4" />
                  <p className="font-bold">{t('financed')}</p>
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <Spiral className="stroke-red w-[35px] h-[27px] lg:w-[40px] lg:h-[32px] mr-3 lg:mr-4" />
                  <p className="font-bold">{t('support')}</p>
                </div>
              )}
              <Button type="button" className="py-[18px] px-[24px]">
                <Link href="#" className="flex items-center">
                  <p className="font-bold">{t('learnMore')}</p>
                  <LuMoveRight className=" ml-[8px] w-[24px] h-[24px]" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
