## SUPER CHATBOT

이 프로젝트는 **Next.js의 App Router 구조**를 기반의 챗봇 UI입니다.
지금까지 만들었던 챗봇들의 모든 기능을 다 넣을 예정으로 개발 중입니다.

- 메인 페이지

  - 메인 <-> 챗봇 페이지 이동형/연속형 두가지 구현
  - 메인 페이지의 메뉴, 퀵메뉴 등 커스터마이징 메뉴 구현
  - 메인 페이지에서의 종료 구현

- 메시지 타입

  - 일반 텍스트 메시지 타입
  - 버튼 메시지 타입
  - 이미지 메시지 타입
  - 캐로셀 메시지 타입
  - 테이블 메시지 타입
  - 설문(QNA) 메시지 타입(모달, 데이터 전송)
  - 메시지 스트리밍(타이핑 효과, 텍스트에만 적용 가능, 이외에 마크다운 활용 가능)
  - 메시지 TTS
  - 메시지 하단 퀵 리플라이 버튼

- 사용자 입력

  - 텍스트 입력
  - 사진/파일 전송
  - 입력 메시지 추천/자동 완성
  - STT 입력(web speech api)

- 기타
  - 각종 애니메이션
  - 만족도 조사 팝업
  - 기타 기능 추가 예정

---

## 📁 폴더 구조

```bash
src/
├── app/
│   ├── layout.tsx            # 전체 App 레이아웃
│   ├── head.tsx              # <head> 설정 (타이틀 등)
│   ├── page.tsx              # 루트 페이지
│   └── chatbot/
│       ├── layout.tsx        # 챗봇 전용 레이아웃
│       └── page.tsx          # 챗봇 진입점 (/chatbot)
│
├── component/
│   ├── chatbot/              # 일반 챗봇 컴포넌트
│   └── common/               # 재사용 가능 컴포넌트
│
├── stores/
│   └── chatbotStore.ts       # zustand 기반 메시지 상태 저장소
│
├── hooks/
│   └── useChatbot.ts         # 메시지 처리 및 API 연동 로직 분리
│
├── api/
│   └── chatbot.ts            # mock API 함수
│
├── types/
│   └── chatbot.ts            # Message 타입 정의
│
└── ... 기타 등등 필요한 폴더
```
