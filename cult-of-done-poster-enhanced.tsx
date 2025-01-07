import React, { useState } from 'react';
import { Check, Edit3, Clock, Zap, Trash2, Target, HandMetal, Ghost, Sun, Moon, Printer } from 'lucide-react';

const CultOfDonePoster: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`${isDark ? 'bg-[#1c1c1c] text-gray-300' : 'bg-gray-50 text-gray-700'} p-8 min-h-screen font-mono transition-colors duration-300`}>
      <div className="fixed top-6 right-6 flex items-center gap-4">
        <button 
          onClick={handlePrint}
          className={`p-2 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-200 flex items-center gap-2`}
        >
          <Printer className="w-4 h-4" />
          <span className="text-xs">Print it</span>
        </button>
        <button 
          onClick={() => setIsDark(!isDark)} 
          className={`p-2 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-200`}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
      
      <h1 className={`text-3xl font-normal mb-12 text-center ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        The Cult of Done Manifesto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {manifestoItems.map((item, index) => (
          <div 
            key={index} 
            className={`border ${isDark ? 'border-gray-800 bg-[#232323] hover:bg-[#282828]' : 'border-gray-200 bg-white hover:bg-gray-50'} p-4 relative transition-colors duration-200`}
          >
            <div className="flex items-start gap-3">
              <span className={`font-mono text-sm select-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item.icon}
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`text-center mt-8 space-y-2 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        <div className="print-hide">
          <a 
            href="https://sanjeed.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex items-center gap-1.5 ${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}
          >
            Made with ❤️ by <span className={`border-b ${isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'}`}>Sanjeed</span>
          </a>
        </div>
        <div className="print-hide">
          <a 
            href="https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}
          >
            Original Manifesto
          </a>
        </div>
      </div>
      <div className="hidden print:block print-footer">
        done.sanjeed.in
      </div>
    </div>
  );
};

export default CultOfDonePoster;

