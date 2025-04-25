import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase ${light ? 'text-accent' : 'text-secondary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? 'text-accent-dark' : 'text-secondary-light'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 mt-4 ${center ? 'mx-auto' : ''} bg-primary`}></div>
    </div>
  );
};

export default SectionTitle;