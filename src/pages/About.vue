<script setup lang="ts">
import BottomCard from "@/components/BottomCard.vue";
</script>

<template>
  <section class="about-hero">
    <h1>Simples,</h1>
    <h2>portanto fácil.</h2>
    <p>
      Em uma era de excesso de recursos computacionais, o Inkstone escolhe
      retornar ao essencial. Através de algoritmos altamente otimizados,
      oferecemos uma solução digital sustentável para a conversão de caracteres
      chineses para Pinyin.
    </p>

    <div class="beam-1"></div>
    <div class="beam-2"></div>
  </section>

  <section class="about-problem">
    <h2>Problema</h2>
    <p>
      Muitas soluções usam modelos muito grandes para uma tarefa simples,
      criando dependência de nuvem, maior custo e maior consumo de recursos.
    </p>

    <div class="about-problem-grid">
      <article class="about-problem-card">
        <h3>Infraestrutura pesada</h3>
        <p>Mais latência e custo operacional para conversões básicas.</p>
      </article>

      <article class="about-problem-card">
        <h3>Dependência de internet</h3>
        <p>Sem conexão estável, o fluxo de estudo e produção é prejudicado.</p>
      </article>

      <article class="about-problem-card">
        <h3>Complexidade desnecessária</h3>
        <p>Ferramentas simples ficam difíceis de manter e usar no dia a dia.</p>
      </article>
    </div>
  </section>

  <section class="about-solution">
    <h2>Solução</h2>
    <p>
      O Inkstone utiliza mapeamento otimizado em JavaScript para converter Hanzi
      em Pinyin com rapidez, funcionando direto no navegador.
    </p>

    <div class="about-solution-grid">
      <article class="about-solution-card">
        <h3>Código leve</h3>
        <p>Inicialização rápida e experiência mais fluida.</p>
      </article>

      <article class="about-solution-card">
        <h3>Processamento local</h3>
        <p>Menor dependência da nuvem e mais privacidade para o usuário.</p>
      </article>

      <article class="about-solution-card">
        <h3>Suporte offline</h3>
        <p>
          Conversão disponível mesmo em ambientes sem internet. Apenas
          realizando o download do site.
        </p>
      </article>
    </div>
  </section>

  <section class="about-info">
    <h2>A Parceria</h2>
    <p>
      O Inkstone surgiu da colaboração entre a UFRN e a ZISU, unindo
      conhecimento técnico e linguagem para criar uma solução prática para
      necessidades reais.
    </p>

    <div class="about-tags">
      <span>UFRN</span>
      <span>ZISU</span>
    </div>
  </section>

  <section class="about-quote">
    <h2>我们的使命：歌罗西书 3:23-24</h2>
    <p>
      “无论做什么，都要从心里做，像是为主做，不是为人做，因你们知道，你们必从主那里得着基业为赏赐。你们所事奉的乃是主基督。”
    </p>
  </section>
  <BottomCard />
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.about-hero {
  padding: 1rem 0;
  position: relative;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    font-size: 2.5rem;
    margin: 0;
    line-height: 1.5rem;
    color: $primary-color;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: $neutral-color;
    margin-top: 2rem;
    max-width: 50rem;
  }

  .beam-1 {
    position: absolute;
    right: -10rem;
    top: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 100%;
    background-image: radial-gradient($primary-color 0%, transparent 100%);
    margin-top: 1rem;
    z-index: -1;
    filter: blur(30px);
    opacity: 0.25;
  }

  .beam-2 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    background-image: radial-gradient($primary-color 0%, transparent 100%);
    margin-top: 1rem;
    z-index: -1;
    filter: blur(30px);
    opacity: 0.15;
  }
}

.about-solution {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #f1f4f8;
  border: 1px solid #e2e7ef;

  h2 {
    font-size: 1.75rem;
    margin: 0;
  }

  .about-solution-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .about-solution-card {
    background-color: white;
    border: 1px solid #e4e7ee;
    border-radius: 0.75rem;
    padding: 1rem;

    h3 {
      margin: 0;
      font-size: 1rem;
    }

    p {
      margin: 0.5rem 0 0;
      font-size: 0.95rem;
    }
  }
}

.about-tags {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  span {
    background-color: #dde8fb;
    color: #15448b;
    padding: 0.5rem 0.85rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
  }
}

.about-quote {
  margin: 3rem 0;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 1rem auto 0;
    max-width: 45rem;
    color: $neutral-color;
    line-height: 1.7;
    font-style: italic;
  }
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 660px) {
  .about-hero {
    height: auto;
    min-height: 34rem;

    h1,
    h2 {
      font-size: 2rem;
    }

    h2 {
      line-height: 1.2;
    }

    p {
      font-size: 1rem;
      margin-top: 1.25rem;
    }
  }

  .about-section h2,
  .about-quote h2 {
    font-size: 1.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
