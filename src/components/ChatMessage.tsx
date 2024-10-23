import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export default function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBot ? 'bg-blue-100' : 'bg-purple-100'}`}>
        {isBot ? <Bot className="w-5 h-5 text-blue-600" /> : <User className="w-5 h-5 text-purple-600" />}
      </div>
      <div className={`max-w-[80%] ${isBot ? 'bg-white' : 'bg-purple-50'} rounded-2xl px-4 py-2 shadow-sm`}>
        <p className="text-gray-800">{message}</p>
        <span className="text-xs text-gray-500 mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
}