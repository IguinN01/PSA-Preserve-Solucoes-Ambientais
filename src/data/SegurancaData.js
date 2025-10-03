import { Clock, Shield, Zap } from "lucide-react";

export const securitySteps = [
  {
    number: "01",
    title: "Antes do Serviço",
    icon: Clock,
    procedures: [
      "Retirar alimentos expostos",
      "Guardar utensílios de cozinha",
      "Proteger objetos pessoais",
      "Preparar o ambiente",
    ],
  },
  {
    number: "02",
    title: "Durante o Serviço",
    icon: Zap,
    procedures: [
      "Não permanecer no local",
      "Técnicos treinados",
      "Técnicos utilizam EPI completo",
      "Produtos aplicados específicos",
    ],
  },
  {
    number: "03",
    title: "Após o Serviço",
    icon: Shield,
    procedures: [
      "Arejar o ambiente por 2 horas",
      "Lavar utensílios antes de usar",
      "Seguir recomendações técnicas",
      "Aguardar liberação do ambiente",
    ],
  },
];