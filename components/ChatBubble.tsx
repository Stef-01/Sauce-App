// FIX: Replaced placeholder content with a skeleton implementation to resolve compilation errors.
import React from 'react';

interface ChatBubbleProps {
  message: string;
  sender: 'user' | 'bot';
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message}
      </div>
    </div>
  );
};
