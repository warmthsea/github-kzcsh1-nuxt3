<template>
  <div>
    <div class="header-box">
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/detail">detail</NuxtLink>
      <NuxtLink to="/detail?type=666">detail-query-666</NuxtLink>
      <NuxtLink to="/detail?type=777">detail-query-777</NuxtLink>

      <a href="https://github.com/warmthsea/github-kzcsh1-nuxt3">github link</a>
    </div>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.header-box {
  height: 100px;
  background: gainsboro;
  font-size: 25px;

  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

a {
  margin: 0px 20px;
}
</style>
