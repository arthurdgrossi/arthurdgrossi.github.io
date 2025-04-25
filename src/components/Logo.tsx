import { Beef } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Beef size={28} className="text-primary mr-2" />
      <span className="font-display text-2xl font-bold text-accent">
        STEAK<span className="text-primary">ME</span>
      </span>
    </div>
  );
};

export default Logo;