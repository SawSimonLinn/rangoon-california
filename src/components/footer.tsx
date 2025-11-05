
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-muted-foreground">
              Experience the heart of Burmese cuisine, right here in California.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold text-secondary">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
              <li><Link href="/reservation" className="hover:text-primary transition-colors">Reservations</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold text-secondary">Contact</h3>
            <address className="mt-4 not-italic space-y-2 text-muted-foreground">
              <p>123 Golden Gate Ave, San Francisco, CA 94102</p>
              <p>
                <a href="tel:415-123-4567" className="hover:text-primary transition-colors">(415) 123-4567</a>
              </p>
              <p>
                <a href="mailto:hello@rangooncalifornia.com" className="hover:text-primary transition-colors">hello@rangooncalifornia.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Rangoon California. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
