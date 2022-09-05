<template>
  <nav :class="{ 'shadow-lg': y > 0 }">
    <transition enter-from-class="scale-y-0" enter-to-class="scale-y-100" leave-from-class="scale-y-100"
      leave-to-class="scale-y-0">
      <div v-show="isDrawerOpen" class="drawer">
        <div v-if="isDrawerOpen" ref="refDrawerItemHighlighter"
          class="absolute font-bold pointer-events-none text-8xl text-zinc-500/10 tracking-0.5em uppercase animate__animated animate__zoomIn animate__faster"
          @animationend="($event.target as HTMLDivElement).classList.remove('animate__zoomIn')">
          {{ highlightedDrawerMenuText }}
        </div>
        <router-link to="/" class="btn" @click="isDrawerOpen = false" @mouseover="onDrawerItemHover"
          @vnode-mounted="registerDrawerItem">
          Beranda
        </router-link>
        <router-link to="/tentang" class="btn" @click="isDrawerOpen = false" @mouseover="onDrawerItemHover"
          @vnode-mounted="registerDrawerItem">
          Tentang
        </router-link>
        <router-link to="/katalog" class="btn" @click="isDrawerOpen = false" @mouseover="onDrawerItemHover"
          @vnode-mounted="registerDrawerItem">
          Katalog
        </router-link>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="btn" @mouseover="onDrawerItemHover">
          Hubungi kami
        </a>
      </div>
    </transition>

    <div class="flex lg:hidden">
      <button aria-label="menu" class="btn btn--round text-zinc-900" @click="toggleDrawer()">
        <XMarkIcon v-if="isDrawerOpen" class="icon" />
        <Bars3CenterLeftIcon v-else class="icon" />
      </button>
    </div>

    <div class="lg:px-4">
      <AlfastoreBrand tag="h1" class="transition-transform duration-300 ease-[cubic-bezier(0.34,1.16,0.64,1)]"
        :class="{ 'translate-y-[calc(100vh-200%)]': isDrawerOpen }" />
    </div>

    <ul class="hidden lg:flex pl-6 pr-4 gap-4">
      <router-link to="#" class="btn text-zinc-500">Beranda</router-link>
      <router-link to="#" class="btn text-zinc-500">Tentang</router-link>
      <router-link to="#" class="btn text-zinc-500">Katalog</router-link>
    </ul>

    <div class="flex lg:px-4 gap-4">
      <form id="form_search">
        <input type="search" name="q" placeholder="cari sesuatu disini...">
        <button aria-label="search" type="submit" class="btn btn--round text-zinc-500">
          <MagnifyingGlassIcon class="icon" />
        </button>
      </form>

      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="hidden lg:flex btn btn--filled">
        <PhoneIcon class="w-4 h-4" />
        <span>Hubungi kami</span>
      </a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useToggle, useWindowScroll, whenever } from '@vueuse/core';
import { ref, VNode } from 'vue';
import { _RouterLinkI } from 'vue-router';

const { y } = useWindowScroll();
const refDrawerItemHighlighter = ref<HTMLDivElement>();
const highlightedDrawerMenuText = ref('');
const [isDrawerOpen, toggleDrawer] = useToggle(false);
const [showSearch, toggleSearch] = useToggle(false);
const onDrawerItemHover = (e: MouseEvent) => {
  highlightedDrawerMenuText.value = (e.currentTarget as HTMLElement).textContent || '';
};
const registerDrawerItem = (vn: VNode) => {
  if (!highlightedDrawerMenuText.value && (vn.el as HTMLDivElement).classList.contains('router-link-active')) {
    highlightedDrawerMenuText.value = (vn.el as HTMLDivElement).textContent || '';
  }
};

whenever(highlightedDrawerMenuText, () => {
  refDrawerItemHighlighter.value?.classList.add('animate__zoomIn');
});
</script>

<style lang="sass" scoped>
@layer components
  nav
    @apply sticky top-0 bg-white p-4 flex justify-between items-center border-b border-zinc-100 shadow-sm transition-shadow

    .btn
      @apply text-sm leading-5 px-0.75em py-0.25em
      &:active
        @apply text-zinc-700
      
      &.btn--round
        @apply p-1

      .icon
        @apply w-6 h-6
        @screen lg
          @apply w-5 h-5

    #form_search
      @apply flex items-center gap-1

      input[type=search]
        @apply hidden text-sm text-zinc-700 border-b border-zinc-300 outline-none
        @screen lg
          @apply inline-block
        &:focus
          @apply border-zinc-700

  .drawer
    height: calc(100vh - 100%)
    @apply absolute top-full inset-x-0 bg-white overflow-hidden flex flex-col justify-center items-center gap-8 p-4 pb-18 transition-transform transform origin-top

    .btn
      @apply text-zinc-700 text-lg uppercase tracking-0.3em transition-all
      &:hover,
      &.router-link-active
        @apply font-semibold tracking-0.5em 
      &.router-link-active
        @apply text-zinc-300 
</style>