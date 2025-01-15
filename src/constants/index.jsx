import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Projetos", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Contatos", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Soluções Estelares",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi ágil, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Tecnologias Horizonte Azul",
    image: user2,
    text: "Não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e as habilidades de resolução de problemas da equipe foram fundamentais para dar vida à nossa visão",
  },
  {
    user: "David Johnson",
    company: "Inovações Quânticas",
    image: user3,
    text: "Trabalhar com esta empresa foi um prazer. Sua atenção aos detalhes e comprometimento com a excelência são louváveis. Eu os recomendaria fortemente a qualquer um que esteja procurando por um serviço de primeira linha.",
  },
  {
    user: "Ronee Brown",
    company: "Dinâmica de Fusão",
    image: user4,
    text: "Trabalhar com a equipe da XYZ Company foi um divisor de águas para o nosso projeto. Sua atenção aos detalhes e soluções inovadoras nos ajudaram a atingir nossos objetivos mais rápido do que pensávamos ser possível. Somos gratos por sua expertise e profissionalismo!",
  },
  {
    user: "Michael Wilson",
    company: "Criações Visionárias",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrados pela equipe. Eles conseguiram superar nossas expectativas e entregar resultados excelentes.",
  },
  {
    user: "Emily Davis",
    company: "Sistemas de Sinergia",
    image: user6,
    text: "A equipe se esforçou ao máximo para garantir que nosso projeto fosse um sucesso. Sua expertise e dedicação são inigualáveis. Estou ansioso para trabalhar com eles novamente no futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface de arrastar e soltar",
    description:
      "Crie e organize facilmente seus ambientes de RV com uma interface de arrastar e soltar fácil de usar.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade multiplataforma",
    description:
      "Crie aplicativos de RV que funcionem perfeitamente em diversas plataformas, incluindo dispositivos móveis, desktops e headsets de RV.",
  },
  {
    icon: <ShieldHalf />,
    text: "Modelos integrados",
    description:
      "Inicie seus projetos de RV com uma variedade de modelos integrados para diferentes tipos de aplicativos e ambientes.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pré-visualização em tempo real",
    description:
      "Visualize seu aplicativo de RV em tempo real enquanto faz alterações, permitindo iterações e ajustes rápidos.",
  },
  {
    icon: <PlugZap />,
    text: "Ferramentas de colaboração",
    description:
      "Trabalhe em conjunto com sua equipe em tempo real em projetos de RV, permitindo colaboração e compartilhamento de ideias perfeitos.",
  },
  {
    icon: <GlobeLock />,
    text: "Painel analítico",
    description:
      "Obtenha insights valiosos sobre as interações e o comportamento do usuário em seus aplicativos de RV com um painel de análise integrado.",
  },
];

export const checklistItems = [
  {
    title: "Mesclagem de código facilitada",
    description:
      "Monitore o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Revise o código sem se preocupar",
    description:
      "Monitore o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Assistência de IA para reduzir o tempo",
    description:
      "Monitore o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Compartilhe trabalho em minutos",
    description:
      "Monitore o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Começando" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutoriais" },
  { href: "#", text: "Referência de API" },
  { href: "#", text: "Fóruns da comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Características" },
  { href: "#", text: "Dispositivos Suportados" },
  { href: "#", text: "Requisitos do sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de versão" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Trabalhos" },
];
