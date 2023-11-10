import { Footer } from '@/components';
import { Link } from '@/components/link/Link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <br /><hr /><br />

      <Link
        className='link-button-primary'
        href='#'>Button-primary</Link>
      
      <br /><hr /><br />

      <Link
        className='link-button-secondary'
        href='#'>Button-secondary</Link>

      <br /><hr /><br />

      <Link href='#'>Simple link</Link>

      <br /><hr /><br />

      <Link
        className='link-text'
        href='#'>Link-text classname</Link>

      <br /><hr /><br />
      <Footer />
    </main>
  );
}
