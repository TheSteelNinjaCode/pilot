//CARREGA ATRAVÉS DO BD OS VALORES DE ACORDO COM O NÚMERO DA ORDEM

"use client";

import { useState, useEffect, use } from "react";
import { useOrdersOpen } from "@/hook/useOrdersOpen";
import { useSearchParams } from "next/navigation";

const PageStep2 = () => {
  // const [orderOpen, setOrderOpen] = useState({ inputNumber: "" });
  const searchParams = useSearchParams();
  const orderRequested = searchParams.get("value");

  // useEffect(() => {
  //   // const urlParams = new URLSearchParams(window.location.search);
  //   // const inputNumberFromUrl = urlParams.get("value");
  //   const inputNumberFromUrl = searchParams.get("value");
  //   if (inputNumberFromUrl) {
  //     setOrderOpen({ inputNumber: inputNumberFromUrl });
  //   }
  // }, []);

  // const handleOrderOpen = () => {
  //   setOrderOpen({ ...orderOpen });
  // };
  // useEffect(() => {
  //   const FetchOrdersOpen = async () => {
  //     const itensOrdersOpen = await useOrdersOpen();
  //     setOrderOpen({
  //       inputNumber: itensOrdersOpen[0].order_id,
  //     });
  //   };
  //   FetchOrdersOpen();
  // }, []);

  return (
    <>
      <p>Ordem buscada: {orderRequested}</p>
      {}
      <input
        disabled
        type="number"
        value={Number(orderRequested)}
        // onChange={(e) => handleOrderOpen()}
      />
    </>
  );
};

export default PageStep2;
