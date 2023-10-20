<template>
  <div>
    <h1>Hello World</h1>
    <div>
      <ProjectEntry
        v-if="data"
        :project="data"
        @script:run="runScript"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/projects/get');

function runScript(script: string) {
  useFetch('/api/projects/run', { method: 'post', body: { script } })
}
</script>