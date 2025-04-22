
'use client';

import { useState } from 'react';

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSend(value.trim());
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 border-t bg-white">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="메시지를 입력하세요..."
      />
    </form>
  );
}
