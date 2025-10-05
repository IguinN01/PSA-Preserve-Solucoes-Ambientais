import React, { Suspense, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader"; // Importe o Loader aqui

const Servicos = React.lazy(() => import("../components/Servicos/Servicos"));
const Sobre = React.lazy(() => import("../components/Sobre/Sobre"));
const Produtos = React.lazy(() => import("../components/Produtos/Produtos"));
const Precos = React.lazy(() => import("../components/Precos/Precos"));
const Depoimentos = React.lazy(() => import("../components/Depoimentos/Depoimentos"));
const Equipe = React.lazy(() => import("../components/Equipe/Equipe"));
const Seguranca = React.lazy(() => import("../components/Seguranca/Seguranca"));
const Contato = React.lazy(() => import("../components/Contato/Contato"));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Esconde o loader após um pequeno intervalo para garantir que a renderização inicial seja concluída.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Você pode ajustar este tempo se necessário.

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<Loader />}>
        <Servicos />
        <Sobre />
        <Produtos />
        <Precos />
        <Depoimentos />
        <Equipe />
        <Seguranca />
        <Contato />
      </Suspense>
      <Footer />
    </>
  );
}