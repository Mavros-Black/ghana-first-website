import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
  children?: ReactNode;
}

const Card = ({ title, description, image, icon, href, className = '', children }: CardProps) => {
  const CardContent = () => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      )}
      
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        
        {children}
        
        {href && (
          <Link
            href={href}
            className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors duration-200"
          >
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default Card;
