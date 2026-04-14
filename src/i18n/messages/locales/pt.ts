import type { MessageTree } from '@/i18n/messages/types';
import NotByAI_BR from "@/assets/BR/portuguese-light.png";

export const ptMessages: MessageTree = {
  routes: {
    home: { title: 'Início | Inkstone', description: 'Página inicial da Inkstone' },
    generate: { title: 'Converter Hanzi para Pinyin | Inkstone', description: 'Converter Hanzi para Pinyin na Inkstone.' },
    write: { title: 'Escrever Hanzi | Inkstone', description: 'Escrever em Hanzi na Inkstone.' },
    about: { title: 'Sobre | Inkstone', description: 'Saiba mais sobre a Inkstone.' },
    notfound: { title: '404 | Inkstone', description: 'Página não encontrada.' },
  },

  common: {
    appTitle: 'Inkstone',
    profilePictureAlt: 'Foto de ',
    loading: 'Carregando...',
    languageLabel: 'Idioma do sistema',
  },

  nav: {
    home: 'Início',
    generate: 'Conversor',
    write: 'Aprender Hanzis', // Projeto futuro :-] (quem versão 1.0.0)
    about: 'Sobre o projeto',
  },

  bottomCard: {
    title: 'Está pronto para usar o Inkstone?',
    startButton: 'Começar Agora',
    startButtonAlt: 'Ir para o gerador de Pinyin',
    readButton: 'Ver Repositório do GitHub',
    readButtonAlt: 'Ir para o Github',
  },

  footer: {
    creator: 'Conhecer o desenvolvedor',
    licence: 'Licença MIT, uso gratuito.',
    links: {
      sourceCode: 'Código fonte',
      reportIssue: 'Reportar um problema',
      openSource: 'O que é código aberto?',
    },
    notByAI: NotByAI_BR,
    notByAiAlt: 'Certificado Not By AI',
    ufrn: 'Universidade Federal do Rio Grande do Norte',
    zisu: 'Universidade de Estudos Internacionais de Zhejiang',
    phrases: [
      'Nåo pare de estudar!',
      'Você é capaz de coisas incríveis.',
      'Abrace a jornada.',
      'Continue aprendendo.',
      'Construa algo incrível.',
      'Sonhe grande, estude mais.',
      'Você está fazendo um ótimo trabalho.',
      'Só por estar aqui, já está na frente de muitos.',
      'Deus é bom o tempo todo.',
    ],
  },

  // Páginas
  about: {
    hero: {
      title1: 'Simples,',
      title2: 'portanto fácil.',
      description: 'Em uma era de excesso de recursos computacionais, o Inkstone escolhe retornar ao essencial. Através de algoritmos altamente otimizados, oferecemos uma solução digital sustentável para a conversão de caracteres chineses para Pinyin.',
    },

    problem: {
      eyebrow: 'O Problema',
      title: 'Diga adeus à dependência de grandes modelos',
      description: 'Muitas soluções usam modelos muito grandes para uma tarefa simples, o que pode ser ineficiente e inacessível para muitos usuários.',

      article: {
        article1: {
          title: 'Infraestrutura pesada',
          description: 'Mais latência, desperdício de água e custo operacional para conversões básicas.'
        },

        article2: {
          title: 'Dependência de Internet',
          description: 'Sem conexão estável, o fluxo de estudo e produção é prejudicado.'
        },

        article3: {
          title: 'Complexidade desnecessária',
          description: 'Ferramentas simples ficam difíceis de manter e usar no dia a dia.'
        }
      },
      imageAlt: 'Representação gráfica 3D de uma núvem (servidor) em alto uso.'
    },

    solution: {
      eyebrow: 'A Solução',
      title: 'Aplicando a Lógica',
      titleEnphasis: 'Client-Side Rendering',
      description: 'O uso de processamento diretamente no navegador, com código leve e simples, permite um uso mais rápido e menos custoso, sem a necessidade de grandes modelos ou dependência de nuvem.',

      benefits: {
        benefit1: {
          title: 'Menos uso de dados',
          description: 'Pelo fato de que o processamento ocorre localmente, é necessário um único carregamento para o sistema inteiro funcionar.'
          /**  Ficou muito grande o texto que fiz, mas para salvar vou deixar aqui:
            Não sendo necessária a transferência de dados, o que reduz o consumo de dados
            e torna a experiência mais fluida, mesmo em conexões lentas ou instáveis.
          */
        },

        benefit2: {
          title: 'Download do site',
          description: 'O site pode ser baixado e utilizado offline, sem necessidade de conexão contínua. Pois todo o banco de dados está otimizado e embutido no código, para não ocupar muito espaço (edge computing).'
        },

        benefit3: {
          title: 'Custo operacional mínimo',
          description: 'Já que o sistema é simples e não requer infraestrutura pesada. Deixamos sem nenhum tipo de monetização, sem propagandas chatas e sem cobrança de uso de serviço.',
        }
      },
    },

    paternship: {
      eyebrow: 'A Parceria',
      title: 'Uma colaboração que cruza fronteiras',
      description: 'O Inkstone surgiu da colaboração entre a UFRN e a ZISU, unindo conhecimento técnico e linguagem para criar uma solução prática para necessidades reais.',

      ufrnTitle: 'Universidade Federal do Rio Grande do Norte - Brazil',
      ufrnAlt: 'Foto da Reitoria da UFRN',
      zisuTitle: 'Universidade de Estudos Internacionais de Zhejiang - China',
      zisuAlt: 'Foto do letreiro da ZISU',
    },

    purpose: {
      eyebrow: 'O Propósito',
      title: 'Nossa Missão: Colossenses 3:23-24',
      description: 'O que vocês fizerem façam de todo o coração, como se estivessem servindo o Senhor e não as pessoas. Lembrem que o Senhor lhes dará como recompensa aquilo que ele tem guardado para o seu povo, pois o verdadeiro Senhor que vocês servem é Cristo.',
      
      goal1: 'Código Aberto',
      goal2: 'ODS 4',
      goal3: 'ODS 13',
    }
  }
}