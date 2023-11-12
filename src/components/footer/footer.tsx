import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black text-white lg:px-[62px] lg:pt-[40px] lg:pb-[17px]">
      <div className='lg:flex gap-[160px]'>
        <Image src="/footer.png" alt="Логотип ГО Play Pich" width={700} height={290} className='w-[265px] h-[110px] lg:w-[337px] lg:h-[140px]'/>
        <ul className='lg:flex flex-wrap w-[340px] justify-between'>
          <li className='mr-[160px] mb-[30px]'>
            <Link href="#">Про нас</Link>
          </li>
          <li className='mb-[30px] mr-[9px]'>
            <Link href="#">Новини</Link>
          </li>
          <li className='mr-[160px] mb-[30px]'>
            <Link href="#">Проекти</Link>
          </li>
          <li className='mb-[30px]'>
            <Link href="#">Звітність</Link>
          </li>
          <li>
            <Link href="#">Контакти</Link>
          </li>
        </ul>
        <ul>
          <li className="underline mb-[22px]">
            <Link href="#">Політика конфіденційності</Link>
          </li>
          <li className="underline">
            <Link href="#">Правила користування сайтом</Link>
          </li>
        </ul>        
      </div>
      <p className='lg:mx-[12px] lg:mt-[26px]'>Розробка Baza Trainee Ukraine 2023 © Усі права захищені</p>
    </footer>
  );
};
