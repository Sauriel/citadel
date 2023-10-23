
<template>
  <div id="default-layout">
    <AppHeader id="header" />
    <slot />
  </div>
</template>

<style scoped>
#default-layout {
  display: grid;
  grid-template-areas: "header"
                       "content";
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;
}

#header {
  grid-area: header;
}
</style>