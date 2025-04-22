"use client";
import { useEffect, useRef } from "react";

// 커스텀 훅
const useKeyboardVisualViewport = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (!window.visualViewport || !ref.current) return;

    const handleResize = () => {
      const height = window.visualViewport!.height;
      ref.current!.style.height = `${height - 30}px`; // 여유 공간
      window.scrollTo(0, 40); // 헤더 보이게
    };

    window.visualViewport.addEventListener("resize", handleResize);
    return () => {
      if (!window.visualViewport) return;
      window.visualViewport.removeEventListener("resize", handleResize);
    };
  }, [ref]);
};

// 컴포넌트
export default function ChatLayout() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useKeyboardVisualViewport(wrapperRef as React.RefObject<HTMLDivElement>);

  return (
    <div ref={wrapperRef} id="root" className="absolute inset-0 flex flex-col">
      <header className="shrink-0 h-[60px] bg-white border-b px-4 flex items-center">
        헤더 영역
      </header>
      <main className="flex-1 overflow-auto px-4 py-2 bg-gray-100">
        본문 내용
      </main>
      <div className="h-[50px] shrink-0 bg-white border-t">
        <input
          onFocus={() => {
            setTimeout(() => {
              if (!wrapperRef.current) return;
              wrapperRef.current.scrollTo({
                top: wrapperRef.current.scrollHeight,
                behavior: "smooth",
              });
            }, 100); // 키보드 올라오는 시간
          }}
          type="text"
          className="w-full h-full px-4 text-[16px]" // 자동 확대 방지
          placeholder="메시지를 입력하세요"
        />
      </div>
    </div>
  );
}
