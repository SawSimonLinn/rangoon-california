
import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Leaf className="h-8 w-8 text-secondary" />
      <span className="font-headline text-2xl font-bold text-primary">
        Rangoon California
      </span>
    </Link>
  );
}
