import React, { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

/**
 * Composant de section léger :
 * Rendu immédiat et direct sans surcharge JavaScript/observer.
 * Utilise des transitions CSS natives fluides et légères pour les éléments interactifs.
 */
export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${className}`}
    >
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};
