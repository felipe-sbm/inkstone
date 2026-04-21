<script setup lang="ts">
import { ExternalLink } from "@lucide/vue";
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
function github() {
  window.open(
    "https://github.com/felipe-sbm/inkstone",
    "_blank",
    "noopener,noreferrer",
  );
}
</script>

<template>
  <section class="bottom">
    <div class="card" role="region" :aria-label="tString('bottomCard.title')">
      <div class="top">
        <h2>{{ t("bottomCard.title") }}</h2>
      </div>
      <div class="buttons">
        <button
          @click="$router.push('/generate')"
          class="start"
          title="Ir para o gerador de Pinyin"
        >
          {{ t("bottomCard.startButton") }}
        </button>
        <button
          @click="github"
          class="support"
          :aria-label="tString('bottomCard.readButtonAlt')"
        >
          <ExternalLink :size="16" aria-hidden="true" />
          {{ t("bottomCard.readButton") }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.bottom {
  margin: 6rem 2rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      180deg,
      #002f6c 0%,
      #01204e 80%,
      #13294b 100%
    );
    padding: 2rem;
    border-radius: 2rem;
    max-width: 50rem;
    width: 100%;
    height: 15rem;
    box-shadow: 0 18px 35px #00183333;

    .top {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      h2 {
        color: white;
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 0.75rem;
        cursor: pointer;
        transition:
          transform 250ms ease,
          box-shadow 250ms ease,
          background-color 250ms ease;
        font-weight: 600;

        &:focus-visible {
          outline: 3px solid #97c3ff;
          outline-offset: 2px;
        }
      }

      .start {
        background-color: white;
        color: $primary-color;
        box-shadow: 0 8px 15px #00183321;

        &:hover {
          transform: translateY(-2px);
          background-color: #f0f0f0;
          box-shadow: 0 12px 20px #00183333;
        }
      }

      .support {
        background-color: #f0f3f880;
        border: 1px solid #dddfe2a9;
        color: #f7f9ff;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          transform: translateY(-2px);
          background-color: #f0f3f84a;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .bottom .card .top h2 {
    font-size: 2rem;
  }
}

@media (max-width: 620px) {
  .bottom {
    margin: 3rem 1rem;
    padding: 0;

    .card {
      height: auto;
      padding: 1.6rem;

      .top h2 {
        font-size: clamp(1rem, 4vw, 1.5rem);
      }

      .buttons {
        flex-direction: column;
        width: 100%;

        button {
          width: 100%;
          margin-bottom: 0.75rem;
          justify-content: center;
        }

        .support {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
