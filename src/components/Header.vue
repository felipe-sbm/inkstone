<template>
  <header>
    <div class="logo">
      <a href="/">Inkstone <span>(砚台)</span></a>
    </div>

    <nav>
      <a href="/">首页</a>
      <a href="/generate">生成拼音</a>
      <a href="/write">写作</a>
      <a href="/about">关于该项目</a>
    </nav>

    <select id="lang" title="Select your language">
      <option value="zh">中文</option>
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  </header>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

header {
  position: sticky;
  top: 0;
  background-color: #fefefea9;
  backdrop-filter: blur(7px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000 !important;

  .logo a {
    margin: 0;
    font-weight: bold;
    font-size: 1.25rem;
    color: $primary-color;
    text-decoration: none;

    span {
      font-weight: normal;
      font-size: 0.75rem;
      color: $secondary-color;
    }
  }

  nav {
    display: flex;
    gap: 1rem;

    a {
      color: $neutral-color;
      text-decoration: none;
      text-underline-offset: 3px;
      transition: 250ms;

      &:hover {
        color: $secondary-color;
        text-decoration: dotted;
      }

      &.active {
        color: $primary-color;
        text-decoration: underline;
      }
    }
  }

  select {
    background-image: linear-gradient(90deg, #287af6 0%, #1d62c4 100%);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    cursor: pointer;
    font-weight: 550;
    transition: 500ms ease;

    &:focus {
      outline: dotted 3px $tertiary-color;
      outline-offset: 1px;
    }
  }
}
</style>
