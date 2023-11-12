import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-black text-white'>      
      <Image src='/footer.png' alt='Логотип ГО Play Pich' width={265} height={110}/>
      <ul>
        <li>Про нас</li>
        <li>Новини</li>
        <li>Проекти</li>
        <li>Звітність</li>
        <li>Контакти</li>
      </ul>
      <ul>
        <li>Політика конфіденційності</li>
        <li>Правила користування сайтом</li>
      </ul>
      <p>Розробка Baza Trainee Ukraine 2023 © Усі права захищені</p>
    </footer>
  );
};
