"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const InputNumberOrder = () => {
  const router = useRouter();
  const [inputNumber, setInputNumber] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/pageStep2?value=${inputNumber}`);
      console.log({ inputNumber });
    }
  };
  return (
    <>
      <p>Ordem</p>
      <input
        type="number"
        value={inputNumber}
        placeholder="Digite"
        onChange={(e) => setInputNumber(e.target.value)}
        onKeyUp={handleKeyPress}
        required
      />
      <button onClick={() => router.push(`/pageStep2?value=${inputNumber}`)}>
        Send
      </button>
    </>
  );
};
