<template>
  <router-link :to="{name: 'Home'}" class="btn">
    <component :is="tag" class="text-lg font-bold">
      Alfastore
    </component>
  </router-link>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  tag?: string;
}>(), {
  tag: 'span'
});
</script>