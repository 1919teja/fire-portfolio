import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: ContainerProps) {
  return (
    <section id={id} className={cn('py-12 md:py-20', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function PageContainer({ children, className }: ContainerProps) {
  return (
    <main className={cn('min-h-screen flex flex-col', className)}>
      {children}
    </main>
  );
}
