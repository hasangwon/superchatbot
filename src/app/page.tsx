"use client";

import React, { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

const Home = () => {
  const [text, setText] = React.useState("");

  useEffect(() => {
    setText(
      "안녕하세요. 이건 공유하기 테스트입니다. 이 텍스트를 공유하려면 아래의 버튼을 클릭해주세요."
    );
  }, []);
  return (
    <div className="bg-white w-full h-full min-w-[5rem] overflow-hidden">
      <main className="w-full h-full flex flex-col overflow-hidden pb-[5rem]">
        <header className="h-20 border-b flex justify-center items-center">
          챗봇
        </header>
        <section className="h-full basis-[100%] flex flex-col overflow-y-auto overflow-x-hidden p-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-gray-100 rounded-full border mr-1" />
            키움증권 챗봇
          </div>
          <div className="p-5 bg-white border rounded-2xl  max-w-[30rem]">
            안녕하세요. 이건 공유하기 테스트입니다. 이 텍스트를 공유하려면
            아래의 버튼을 클릭해주세요.
            <button
              className="border p-4 w-full mt-1 bg-pink-200 rounded-2xl"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "웹 쉐어 API",
                      text: text,
                    })
                    .then(() => console.log("Successful share"))
                    .catch((error) => console.log("Error sharing", error));
                }
              }}
            >
              공유하기
            </button>
          </div>

          <div className="flex items-center mt-6 mb-2">
            <div className="w-6 h-6 bg-gray-100 rounded-full border mr-1" />
            키움증권 챗봇
          </div>
          <div className="p-5 bg-white border rounded-2xl max-w-[30rem]">
            두번째 공유하기 테스트 텍스트입니다. 이 텍스트를 공유할 수 있습니다.
            <button
              className="border p-4 w-full mt-1 bg-pink-200 rounded-2xl"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "이메일 보내기",
                      text: "두번째 공유하기 테스트 텍스트입니다. 이 텍스트를 공유할 수 있습니다.",
                    })
                    .then(() => console.log("Successful share"))
                    .catch((error) => console.log("Error sharing", error));
                }
              }}
            >
              공유하기
            </button>
          </div>

          <div className="flex items-center mt-6 mb-2">
            <div className="w-6 h-6 bg-gray-100 rounded-full border mr-1" />
            키움증권 챗봇
          </div>
          <div className="p-5 bg-white border rounded-2xl max-w-[30rem]">
            세번쨰 공유하기. 긴 텍스트를 포함합니다. 텍스트는 생략하지만
            공유되는 텍스트는 길게 만들었습니다.
            <button
              className="border p-4 w-full mt-1 bg-pink-200 rounded-2xl"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "이메일",
                      text: "세번쨰 공유하기. 긴 텍스트를 포함합니다. 텍스트는 생략하지만 공유되는 텍스트는 길게 만들었습니다. 세번쨰 공유하기. 긴 텍스트를 포함합니다. 텍스트는 생략하지만 공유되는 텍스트는 길게 만들었습니다. 세번쨰 공유하기. 긴 텍스트를 포함합니다. 텍스트는 생략하지만 공유되는 텍스트는 길게 만들었습니다. 세번쨰 공유하기. 긴 텍스트를 포함합니다. 텍스트는 생략하지만 공유되는 텍스트는 길게 만들었습니다. 세번쨰 공유하기. 긴 텍스트를 포함합니다. 텍스트는 생략하지만 공유되는 텍스트는 길게 만들었습니다.",
                    })
                    .then(() => console.log("Successful share"))
                    .catch((error) => console.log("Error sharing", error));
                }
              }}
            >
              공유하기
            </button>
          </div>
        </section>
        <div className="fixed bottom-0 h-[5rem] bg-white w-full border-t flex items-center p-4">
          <TextareaAutosize
            className="border w-full"
            minRows={1}
            maxRows={2}
            placeholder="내용을 입력하세요..."
          />
        </div>
      </main>

      <></>
    </div>
  );
};
export default Home;
