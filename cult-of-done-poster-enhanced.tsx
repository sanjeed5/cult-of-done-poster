import React from 'react';
import { Check, Edit3, Clock, Zap, Trash2, Target, HandMetal, Ghost } from 'lucide-react';

const CultOfDonePoster: React.FC = () => {
  const manifestoItems = [
    { text: <>There are <strong>three states of being</strong>. Not knowing, action and completion.</>, icon: <Zap className="w-4 h-4" /> },
    { text: <>Accept that <strong>everything is a draft</strong>. It helps to get it done.</>, icon: <Edit3 className="w-4 h-4" /> },
    { text: <>There is <strong>no editing stage</strong>.</>, icon: <Check className="w-4 h-4" /> },
    { text: <><strong>Pretending you know</strong> what you're doing is almost the same as knowing what you are doing, so just accept that you know what you're doing even if you don't and do it.</>, icon: <HandMetal className="w-4 h-4" /> },
    { text: <><strong>Banish procrastination</strong>. If you wait more than a week to get an idea done, abandon it.</>, icon: <Clock className="w-4 h-4" /> },
    { text: <>The point of being done is <strong>not to finish</strong> but to get other things done.</>, icon: <Zap className="w-4 h-4" /> },
    { text: <>Once you're done you can <strong>throw it away</strong>.</>, icon: <Trash2 className="w-4 h-4" /> },
    { text: <><strong>Laugh at perfection</strong>. It's boring and keeps you from being done.</>, icon: <Target className="w-4 h-4" /> },
    { text: <><strong>People without dirty hands are wrong</strong>. Doing something makes you right.</>, icon: <HandMetal className="w-4 h-4" /> },
    { text: <><strong>Failure counts as done</strong>. So do mistakes.</>, icon: <Check className="w-4 h-4" /> },
    { text: <><strong>Destruction is a variant of done</strong>.</>, icon: <Trash2 className="w-4 h-4" /> },
    { text: <>If you have an idea and <strong>publish it on the internet</strong>, that counts as a ghost of done.</>, icon: <Ghost className="w-4 h-4" /> },
    { text: <><strong>Done is the engine of more</strong>.</>, icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-[#1c1c1c] text-gray-300 p-8 min-h-screen font-mono">
      <h1 className="text-3xl font-normal mb-12 text-center text-gray-100">
        The Cult of Done Manifesto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {manifestoItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-800 p-4 relative bg-[#232323] hover:bg-[#282828] transition-colors duration-200"
          >
            <div className="flex items-start gap-3">
              <span className="text-gray-500 font-mono text-sm select-none">{(index + 1).toString().padStart(2, '0')}</span>
              <div className="flex-1">
                <div className="text-gray-400 mb-2">
                  {item.icon}
                </div>
                <p className="text-sm leading-relaxed text-gray-200">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 space-y-2 text-sm text-gray-500">
        <div>
          <a 
            href="https://sanjeed.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors inline-flex items-center gap-1.5"
          >
            Made with ❤️ by <span className="border-b border-gray-700 hover:border-gray-500">Sanjeed</span>
          </a>
        </div>
        <div>
          <a 
            href="https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors"
          >
            Original Manifesto
          </a>
        </div>
      </div>
    </div>
  );
};

export default CultOfDonePoster;

