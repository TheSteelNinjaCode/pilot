//CARREGA ATRAVÉS DO BD OS VALORES DE ACORDO COM O NÚMERO DA ORDEM

'use client'
import { useState, useEffect } from 'react';
import { useOrdersOpen } from '@/hook/useOrdersOpen';

const PageStep2 = () => {
  const [orderOpen, setOrderOpen] = useState({ inputNumber: '' });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inputNumberFromUrl = urlParams.get('value');
    if (inputNumberFromUrl) {
      setOrderOpen({ inputNumber: inputNumberFromUrl });
    }
  }, []); 

  const handleOrderOpen = () => {
    setOrderOpen({ ...orderOpen });
  };
  useEffect(() => {
    const FetchOrdersOpen = async () => {     
     const itensOrdersOpen = await useOrdersOpen();
      setOrderOpen({ 
        inputNumber: itensOrdersOpen[0].order_id});
    };
    FetchOrdersOpen();
  }, []);
  return (
    <>
      <p>Ordem buscada: {orderOpen.inputNumber}</p>
        {}      
      <input
       disabled
       type="number"
       value={orderOpen.inputNumber}
       onChange={(e) => handleOrderOpen()}
      />   
    </>
  );
};

export default PageStep2;