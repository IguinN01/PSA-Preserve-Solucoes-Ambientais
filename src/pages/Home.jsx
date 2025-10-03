import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

const Servicos = React.lazy(() => import("../components/Servicos/Servicos"));
const Sobre = React.lazy(() => import("../components/Sobre/Sobre"));
const Produtos = React.lazy(() => import("../components/Produtos/Produtos"));
const Precos = React.lazy(() => import("../components/Precos/Precos"));
const Depoimentos = React.lazy(() => import("../components/Depoimentos/Depoimentos"));
const Equipe = React.lazy(() => import("../components/Equipe/Equipe"));
const Seguranca = React.lazy(() => import("../components/Seguranca/Seguranca"));
const Contato = React.lazy(() => import("../components/Contato/Contato"));

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<div></div>}>
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