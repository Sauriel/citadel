
<template>
  <div id="default-layout">
    <AppHeader id="header" />
    <AppSidebar id="sidebar" />
    <slot />
  </div>
</template>

<style scoped>
#default-layout {
  display: grid;
  grid-template-areas: "header header"
                       "sidebar content";
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  height: 100vh;
  overflow: hidden;
}

#header {
  grid-area: header;
}

#sidebar {
  grid-area: sidebar;
}
</style>