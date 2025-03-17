
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
