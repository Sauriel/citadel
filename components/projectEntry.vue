<template>
  <article>
    <header>{{ project.name }}</header>
    <table>
      <tr v-for="(script, name) of project.scripts">
        <td>
          <button @click="emit('script:run', name)">
            <Icon name="ic:baseline-play-circle-outline" />
          </button>
        </td>
        <td>{{ name }}</td>
        <td>{{ script }}</td>
      </tr>
    </table>
  </article>
</template>

<script setup lang="ts">
import type { PackageJSON } from '~/types/packageJson';

type Props = {
  project: PackageJSON;
}

type Emits = {
  (e: 'script:run', name: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style scoped>
/* ToDo: Add style content */
</style>