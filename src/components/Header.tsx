import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import Link from "next/link";

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>


              <Logo />

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
