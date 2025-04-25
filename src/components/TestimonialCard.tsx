import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  image: string;
  text: string;
  rating: number;
};

const TestimonialCard = ({ name, image, text, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-display font-semibold">{name}</h3>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? 'text-primary fill-current' : 'text-gray-300'} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-secondary-light italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;