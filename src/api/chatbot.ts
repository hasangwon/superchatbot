export const sendMessageToBot = async (text: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`"${text}"에 대한 응답입니다.`);
    }, 500);
  });
};
