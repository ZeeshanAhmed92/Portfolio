import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// const FloatingContactButton = () => {
//   return (
//     <Link
//       to="/contact"
//       className="fixed bottom-8 right-8 z-50 group"
//     >
//       <div className="relative">
//         {/* Pulse animation */}
//         <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
        
//         {/* Button */}
//         <div className="relative flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
//           <MessageCircle className="w-5 h-5" />
//           <span className="font-medium">Get In Touch</span>
//         </div>
//       </div>
//     </Link>
//   );
// };

const FloatingContactButton = () => {
  return (
    <Link to="/contact" className="fixed bottom-8 right-8 z-50 group">
      <div className="relative flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl hover:scale-105 transition-all">
        <div className="relative">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 border-2 border-primary rounded-full" />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-tighter opacity-70">Project Inquiry</span>
          <span className="font-bold text-sm">Let's Talk</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingContactButton;