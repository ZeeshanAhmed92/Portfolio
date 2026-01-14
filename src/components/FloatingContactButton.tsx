import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingContactButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Get In Touch</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingContactButton;