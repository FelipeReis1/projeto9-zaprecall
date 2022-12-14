import { useState } from "react";
import Flashcard from "./Flashcard";
export default function Cards() {
  const [answeredCounter, setAnsweredCounter] = useState(0);
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <>
      {cards.map((c, index) => (
        <Flashcard
          key={index + 1}
          numPergunta={index + 1}
          question={c.question}
          answer={c.answer}
          answeredCounter={answeredCounter}
          setAnsweredCounter={setAnsweredCounter}
        ></Flashcard>
      ))}
    </>
  );
}
