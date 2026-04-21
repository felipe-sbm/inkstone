<script setup lang="ts">
import Yang from "@/assets/yang.webp";
import Features from "@/components/Features.vue";
import { Star } from "@lucide/vue";
import BottomCard from "@/components/BottomCard.vue";
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
function support() {
  window.open(
    "https://github.com/felipe-sbm/inkstone",
    "_blank",
    "noopener,noreferrer",
  );
}
</script>

<template>
  <section class="hero">
    <div class="introduction">
      <h1>{{ t("home.hero.title") }}</h1>
      <h2>{{ t("home.hero.subtitle") }}</h2>
      <p>{{ t("home.hero.description") }}</p>
      <div class="buttons">
        <button
          @click="$router.push('/generate')"
          class="start"
          :aria-label="tString('home.hero.startButtonAlt')"
        >
          {{ t("home.hero.startButton") }}
        </button>
        <button
          @click="support"
          class="support"
          :aria-label="tString('home.hero.supportButtonAlt')"
        >
          <Star :size="16" />
          {{ t("home.hero.supportButton") }}
        </button>
      </div>
    </div>
    <div class="mascot">
      <img :src="Yang" alt="Yang, the Inkstone mascot" />
    </div>
  </section>

  <section class="features">
    <div class="title">
      <h2>{{ t("home.features.title") }}</h2>
      <h3>{{ t("home.features.subtitle") }}</h3>
    </div>
    <Features />
  </section>

  <!-- Coloquei essa parte aqui para o SEO, mesmo que invisível, ainda aparece nas pesquisas.-->
  <section class="seo-content" aria-label="SEO content">
    <h2>{{ t("home.seo.title") }}</h2>
    <p>{{ t("home.seo.description") }}</p>
  </section>

  <BottomCard />
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.hero {
  position: relative;
  padding: 3.5rem 2rem;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  border-radius: 2rem;
  overflow: hidden;
  margin-top: 1rem;
  background: radial-gradient(circle at 10% 15%, #dfeeff 0%, #dfeeff00 45%);
  box-shadow: 0 30px 50px #0f2d5d35;
  isolation: isolate;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 100rem;
    pointer-events: none;
  }

  &::before {
    width: 16rem;
    height: 16rem;
    background: #88bbff2e;
    top: -5rem;
    right: -3rem;
    filter: blur(32px);
  }

  &::after {
    width: 30rem;
    height: 30rem;
    background: rgba($primary-color, 0.1);
    bottom: -10rem;
    right: 30rem;
    filter: blur(32px);
  }

  display: flex;

  .introduction {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    margin: 0;
    max-width: 34rem;

    h1 {
      font-size: 3.4rem;
      color: $primary-color;
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 0;
      line-height: 1.05;
      text-wrap: balance;
      animation: fade-up 550ms ease-out both;
    }

    h2 {
      font-size: 1.35rem;
      color: $secondary-color;
      font-weight: 600;
      margin: 0;
      animation: fade-up 700ms ease-out both;
    }

    p {
      font-size: 1.1rem;
      color: $neutral-color;
      max-width: 31rem; // Meu aniversário :-]
      line-height: 1.6;
      font-weight: 400;
      margin-top: 0;
      animation: fade-up 850ms ease-out both;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      margin-top: 0.5rem;
      animation: fade-up 1000ms ease-out both;

      button {
        border: none;
        padding: 0.85rem 1.6rem;
        font-size: 1rem;
        border-radius: 0.9rem;
        cursor: pointer;
        transition:
          transform 250ms ease,
          box-shadow 250ms ease,
          filter 250ms ease;
        font-weight: 600;
        min-height: 2.9rem;

        &:focus-visible {
          outline: 3px solid #97c3ff;
          outline-offset: 2px;
        }
      }

      .start {
        background-image: linear-gradient(100deg, #2c80f8 0%, #1663cf 100%);
        color: white;
        box-shadow: 0 10px 25px #1e67d436;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 24px #1e67d445;
          filter: saturate(1.08);
        }
      }

      .support {
        background: #ffffffcc;
        border: 1px solid #d8e6ff;
        backdrop-filter: blur(6px);
        color: $primary-color;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 8px 20px #00254f14;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 20px #00254f1f;
          border-color: #c3d9ff;
        }
      }
    }
  }

  .mascot {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    animation: fade-up 850ms ease-out both;

    img {
      max-width: min(92%, 31rem);
      height: auto;
      filter: drop-shadow(0 24px 25px #0f2d5d2c);
      animation: float-y 7s ease-in-out infinite;
    }
  }
}

.features {
  margin: 4.5rem 1rem 2rem;
  position: relative;

  .title {
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;

    h2 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: $title-color;
    }

    h3 {
      font-size: 1.08rem;
      color: $neutral-color;
      font-weight: 500;
      margin-top: 0;
    }
  }
}

.seo-content {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-y {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 600px) {
  .hero {
    margin: 0.5rem 0.75rem 0;
    border-radius: 1.5rem;
    padding: 1.6rem 1rem 1.35rem;
    flex-direction: column;
    text-align: center;

    .introduction {
      align-items: center;

      h1 {
        font-size: 2.2rem;
      }

      h2 {
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
        max-width: 34ch;
      }

      .buttons {
        justify-content: center;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.75rem;

        button {
          flex: 1;
          min-width: 10.5rem;
          display: flex;
          justify-content: center;
          padding: 1rem;
        }
      }
    }

    .mascot {
      img {
        max-width: 72%;
        height: auto;
      }
    }
  }

  .features {
    margin: 3rem 0.75rem 1.2rem;

    .title {
      padding-top: 2.5rem;

      h2 {
        font-size: 1.85rem;
      }

      h3 {
        font-size: 1rem;
      }
    }
  }
}
</style>
