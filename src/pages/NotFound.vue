<template>
  <div class="not-found">
    <h1>404 - Not Found</h1>
    <p>Sorry, the page you are looking for does not exist. :/</p>
    <a href="/">Go back to Home?</a>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: auto 0;
  text-align: center;
  min-height: 90vh;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    font-size: 1rem;
    color: $primary-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
