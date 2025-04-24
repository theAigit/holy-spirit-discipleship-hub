
import { ReactNode } from 'react';

interface ContentPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const ContentPanel = ({ title, children, className = '', id }: ContentPanelProps) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">{title}</h2>
        )}
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentPanel;
