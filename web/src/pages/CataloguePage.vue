<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { useRouteQuery } from '@vueuse/router'
import { computed } from 'vue';

const categories = [
  {
    label: 'Semua',
    value: 'all'
  },
  {
    label: 'Komputer',
    value: 'computer'
  },
  {
    label: 'Alat tulis',
    value: 'stationary'
  },
  {
    label: 'Elektronik',
    value: 'electronic'
  },
  {
    label: 'Furnitur',
    value: 'furniture'
  },
];

const breakpoints = useBreakpoints(breakpointsTailwind);
const query = useRouteQuery<string>('q', '');
const sortType = useRouteQuery<string>('sort', 'popular');
const _isDescending = useRouteQuery<'true' | 'false'>('desc', 'false');
const isDescending = computed({
  get: () => _isDescending.value === 'true',
  set: (v) => _isDescending.value = v ? 'true' : 'false'
});
const activeCategory = useRouteQuery<string>('kategori', 'all');
</script>

<template>
  <main>
    <section class="bg-zinc-50">
      <h3>Katalog</h3>
      <hr>

      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <ul class="categories">
            <li v-for="el in categories" :key="el.value">
              <router-link :to="{query: {...$route.query, kategori: el.value}, replace: true}" class="category-label"
                :class="{'category-label--active': activeCategory === el.value}">{{ el.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div v-if="query" class="flex items-center gap-2">
          <span class="text-xs text-zinc-500">hasil pencarian:</span>
          <span class="text-sm text-zinc-700 font-medium">{{ query }}</span>
          <button class="btn btn--round" @click="query = ''">
            <XMarkIcon class="w-5 h-5 text-zinc-300" />
          </button>
        </div>

        <div class="box-content w-full -ml-2 flex items-center gap-2 px-2 bg-white shadow-sm">
          <span class="text-xs text-zinc-700">Urut berdasarkan</span>
          <select v-model="sortType" name="sort" class="text-sm text-zinc-700 font-semibold bg-transparent">
            <option value="popular">Paling laris</option>
            <option value="newer">Terbaru</option>
            <option value="cheapest">Termurah</option>
            <option value="expensive">Termahal</option>
          </select>

          <div class="grow" />

          <button class="btn btn--round" @click="isDescending = !isDescending">
            <BarsArrowDownIcon class="w-6 h-6 text-zinc-700 transition-transform"
              :class="{'rotate-180': isDescending}" />
          </button>
        </div>
      </div>

      <ul class="product-grid">
        <li v-for="el in 9" :key="el">
          <CardProduct :dense="breakpoints.isSmaller('lg')" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.categories
  @apply overflow-x-auto flex items-center gap-2 px-1
  .category-label
    @apply text-xs text-zinc-700 font-semibold px-4 py-2 flex justify-center items-center gap-2.5 bg-white border border-zinc-200 whitespace-nowrap
    &:hover
      @apply bg-zinc-100
    &:active,
    &--active
      @apply bg-zinc-200 text-zinc-900 shadow-inner

.product-grid
  --product-width-size: 10rem
  @apply grid grid-cols-[repeat(auto-fill,var(--product-width-size))] justify-center gap-4 px-3 py-4
  @screen lg
    --product-width-size: 16.624rem
</style>