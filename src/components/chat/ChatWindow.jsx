import React from "react";
import { Recieve, Send } from "./Conversation";
export function ChatWindow() {
  return (
    <>
      <div className="flex  flex-col gap-4 p-3  ">
        <Recieve
          message={
            "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Si num tem leite então bota uma pinga aí cumpadi!Paisis, filhis, espiritis santis.Cevadis im ampola pa arma uma pindureta."
          }
        />
        <Send
          message={
            "Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Paisis, filhis, espiritis santis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris."
          }
        />
        <Recieve message={" pa arma uma im ampola pa arma uma pindureta."} />
      </div>
    </>
  );
}
