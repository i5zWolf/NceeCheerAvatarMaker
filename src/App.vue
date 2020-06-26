<template>
  <div id="app">
    <div class="logo">
      <div class="logo-img" />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  min-height: 100vh;
  background-image: url("./assets/images/background.jpg");
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;

  .logo {
    padding-top: 132px;
    display: flex;
    justify-content: center;

    &-img {
      background: url("./assets/images/logo.png");
      width: 252px;
      height: 197px;
      background-size: cover;
    }
  }

  .copyright {
    margin-top: 50px;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    line-height: 1.5;

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
}
</style>
