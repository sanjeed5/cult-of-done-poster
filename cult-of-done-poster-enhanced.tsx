import React from 'react';
import { Check, Edit3, Clock, Zap, Trash2, Target, HandMetal, Ghost } from 'lucide-react';

const CultOfDonePoster: React.FC = () => {
  const manifestoItems = [
    { text: "There are three states of being. Not knowing, action and completion.", icon: <Zap className="w-6 h-6" /> },
    { text: "Accept that everything is a draft. It helps to get it done.", icon: <Edit3 className="w-6 h-6" /> },
    { text: "There is no editing stage.", icon: <Check className="w-6 h-6" /> },
    { text: "Pretending you know what you're doing is almost the same as knowing what you are doing, so just accept that you know what you're doing even if you don't and do it.", icon: <HandMetal className="w-6 h-6" /> },
    { text: "Banish procrastination. If you wait more than a week to get an idea done, abandon it.", icon: <Clock className="w-6 h-6" /> },
    { text: "The point of being done is not to finish but to get other things done.", icon: <Zap className="w-6 h-6" /> },
    { text: "Once you're done you can throw it away.", icon: <Trash2 className="w-6 h-6" /> },
    { text: "Laugh at perfection. It's boring and keeps you from being done.", icon: <Target className="w-6 h-6" /> },
    { text: "People without dirty hands are wrong. Doing something makes you right.", icon: <HandMetal className="w-6 h-6" /> },
    { text: "Failure counts as done. So do mistakes.", icon: <Check className="w-6 h-6" /> },
    { text: "Destruction is a variant of done.", icon: <Trash2 className="w-6 h-6" /> },
    { text: "If you have an idea and publish it on the internet, that counts as a ghost of done.", icon: <Ghost className="w-6 h-6" /> },
    { text: "Done is the engine of more.", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-8 min-h-screen font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          The Cult of Done Manifesto
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoItems.map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 relative bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="absolute -top-4 -left-4 bg-gray-900 text-gray-100 text-2xl font-bold w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full">
                {index + 1}
              </div>
              <div className="mb-4 text-purple-400">
                {item.icon}
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <a 
          href="https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block text-center mt-8 text-xs text-gray-500 hover:text-gray-400 transition-colors"
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default CultOfDonePoster;

