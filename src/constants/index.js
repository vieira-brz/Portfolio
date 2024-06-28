import { toroid, solutiva } from "../assets/images";
import {
    alura, contact, dnc, github, linkedin, streamlit, lean,
    html, css, javascript, python, sql,
    jquery, react, vuejs, svelte, npm, sass, numpy, sklearn,
    mysql, mongodb, nodejs, json,
    linux, apache, nginx, pfsense,
    excel, bi, figma, git, jupyter, canva
} from "../assets/icons";

export const skills = [
    // Languages
    {
        imageUrl: html,
        name: "HTML",
        type: "Programming Languages",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Programming Languages",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming Languages",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Languages",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Programming Languages",
    },
    // Frameworks & Technologies
    {
        imageUrl: jquery,
        name: "jQuery",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: vuejs,
        name: "Vue",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: svelte,
        name: "Svelte",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: npm,
        name: "NPM",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: sklearn,
        name: "Scikit Learn",
        type: "Frameworks & Technologies",
    },
    // Databases
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Databases",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Databases",
    },
    {
        imageUrl: nodejs,
        name: "NodeJS",
        type: "Databases",
    },
    {
        imageUrl: json,
        name: "Json",
        type: "Databases",
    },
    // Operating Systems & Servers
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating Systems & Servers",
    },
    {
        imageUrl: apache,
        name: "Apache",
        type: "Operating Systems & Servers",
    },
    {
        imageUrl: nginx,
        name: "NGINX",
        type: "Operating Systems & Servers",
    },
    {
        imageUrl: pfsense,
        name: "PFSense",
        type: "Operating Systems & Servers",
    },
    // Work Tools
    {
        imageUrl: excel,
        name: "Excel",
        type: "Work Tools",
    },
    {
        imageUrl: bi,
        name: "Power BI",
        type: "Work Tools",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Work Tools",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Work Tools",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Work Tools",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter",
        type: "Work Tools",
    },
    {
        imageUrl: canva,
        name: "Canva",
        type: "Work Tools",
    },
];

export const experiences = [
    {
        title: "Estagiário em TI",
        company_name: "Toroid do Brasil",
        icon: toroid,
        iconBg: "#accbe1",
        date: "Fevereiro 2021 - Fevereiro 2022",
        points: [
            "Inicialmente, fui encarregado de prestar suporte técnico, desenvolver sistemas web e aprimorar sistemas existentes, além de realizar a manutenção de infraestrutura e servidores. ",
            "Com o tempo, adquiri experiência em administração de servidores Linux, desenvolvimento de aplicações JavaScript complexas e criação de gráficos estatísticos dinâmicos baseados em dados reais.",
            "Durante minha trajetória como estagiário na Toroid do Brasil, alcancei resultados notáveis, incluindo a melhoria de processos, a otimização do tempo de consultas e a padronização da interface do usuário.",
            "Minha habilidade de aprendizado rápido e adaptação a novas tecnologias contribuiu para o sucesso dos projetos e para meu crescimento profissional dentro da empresa.",
        ],
    },
    {
        title: "Desenvolvedor Júnior",
        company_name: "Toroid do Brasil",
        icon: toroid,
        iconBg: "#accbe1",
        date: "Fevereiro 2022 - Abril 2023",
        points: [
            "Durante minha jornada como programador júnior, adquiri valiosas habilidades em Front-End, Back-End, DevOps, Tratamento de Erros e Organização de Código. ",
            "Expandi meu conhecimento na área de redes e infraestrutura, com experiência em configuração de firewall e negociação com prestadores de serviços para implementação de soluções tecnológicas na empresa.",
            "Fui encarregado do gerenciamento de um projeto crucial de migração de sistema, liderando o processo de transição de um sistema legado para uma solução mais moderna e eficiente.",
            "Liderei a migração de um servidor físico para uma infraestrutura em nuvem, demonstrando minha capacidade de planejamento, execução e solução de problemas em ambientes complexos de TI. ",
        ],
    },
    {
        title: "Desenvolvedor Pleno",
        company_name: "Toroid do Brasil",
        icon: toroid,
        iconBg: "#accbe1",
        date: "Abril 2023 - Atualmente",
        points: [
            "Como desenvolvedor pleno, assumi um papel de liderança ao participar da definição de fluxo de processos, monitoramento e reuniões de migração e implantação de novo sistema.",
            "Destaco minha experiência na migração de uma aplicação JavaScript, HTML e CSS tradicional para uma solução avançada em React, com uso de MongoDB e NodeJS, requisições assíncronas e padronização de entrada e saída de dados. ",
            "Entusiasmado em ampliar meus conhecimentos e habilidades em IA, machine learning e automatização de processos, busco agregar à empresa um controle mais eficiente, sugestões automatizadas e compreensão de padrões de dados. ",
        ],
    },
    {
        title: "CEO",
        company_name: "Solutiva Tech",
        icon: solutiva,
        iconBg: "#fbc3bc",
        date: "Junho 2024 - Atualmente",
        points: [
            "Criei a plataforma de serviços Solutiva Tech, um negócio próprio com foco em desenvolvimento de softwares sob demanda.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vieira-brz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vinicius-vieira-braz',
    }
];

export const projects = [
    {
        iconUrl: github,
        theme: 'btn-back-black',
        name: 'GitHub',
        description: 'Acompanhe mais projetos pelo GitHub. Aqui você também encontra todos os códigos feitos em meus tutoriais do YouTube.',
        link: 'https://github.com/vieira-brz',
    },
    {
        iconUrl: solutiva,
        theme: 'btn-back-pink',
        name: 'Solutiva Tech',
        description: 'Empresa fundada por mim com intuito de desenvolver software sob-demanda e prestar suporte técnico a distância.',
        link: 'https://solutiva-tech.vercel.app/',
    },
    {
        iconUrl: streamlit,
        theme: 'btn-back-red',
        name: 'Web Analysis Hub',
        description: 'Web Analysis é uma plataforma que utiliza algoritmos de machine learning para análise detalhada de websites e aplicações web, melhorando performance e eficácia.',
        link: 'https://webanalysis.streamlit.app/',
    }
];

export const certificates = [
    {
        iconUrl: lean,
        theme: 'btn-back-green',
        name: 'Lean Six Sigma',
        description: 'Certificação em Lean Six Sigma, abrangendo metodologias de melhoria de processos e eliminação de desperdícios.',
        link: 'https://github.com/vieira-brz/Certificados/tree/master/Lean%20Six%20Sigma',
    },
    {
        iconUrl: dnc,
        theme: 'btn-back-blue',
        name: 'Cientista de Dados DNC',
        description: 'Certificação em Cientista de Dados pela DNC, com foco em análise de dados, aprendizado de máquina e visualização de dados.',
        link: 'https://github.com/vieira-brz/Certificados/tree/master/DNC/Forma%C3%A7%C3%A3o%20em%20Dados',
    },
    {
        iconUrl: alura,
        theme: 'btn-back-pink',
        name: 'Formações Alura',
        description: 'Certificação em diversos cursos e formações pela Alura, cobrindo áreas como desenvolvimento de software, design e gestão de projetos.',
        link: 'https://cursos.alura.com.br/user/vinivieira0509/fullCertificate/36ab9fe564f710e20082254bff4cb982',
    },
    {
        iconUrl: github,
        theme: 'btn-back-black',
        name: 'Outros Certificados',
        description: 'Certificações adicionais em várias áreas, incluindo programação, gestão, segurança de sistemas e desenvolvimento pessoal.',
        link: 'https://github.com/vieira-brz/Certificados',
    },
];