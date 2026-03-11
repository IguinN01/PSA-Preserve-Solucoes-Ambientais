import React from 'react';

const TELEFONE_PADRAO = "5511921002606";

const WhatsappLink = ({
  mensagem = "Olá! Gostaria de mais informações sobre a Preserve Soluções Ambientais.",
  telefone = TELEFONE_PADRAO,
  children,
  className = "",
  ...props
}) => {
  const linkWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default WhatsappLink;