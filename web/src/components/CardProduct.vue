<template>
  <router-link :to="{name: 'Product', params: {productId: $.uid}}" class="root">
    <img src="/assets/products_popular1.png" alt="Produk terlaris 1" loading="lazy" class="h-60">
    <div class="content">
      <h6>
        Meja Ergonomis
      </h6>
      <div class="reviews">
        <div class="stars">
          <StarIcon class="icon" />
          <StarIcon class="icon" />
          <StarIcon class="icon" />
          <StarIcon class="icon" />
          <StarIcon class="icon" />
        </div>

        <span class="count">
          (57)
        </span>
      </div>
    </div>
  </router-link>
</template>

<style lang="sass" scoped>
.root
  @apply flex flex-col overflow-hidden h-80 w-66.5 shadow-sm shadow-zinc/50
  &:active
    @apply shadow-none
  img
    @apply h-60
  .content
    @apply shrink-0 bg-white group-hover:bg-zinc-300/25 group-active:bg-zinc-300/50 flex flex-col items-center gap-2 p-4
    h6
      @apply text-gray-700 font-medium line-clamp-1
    .reviews
      @apply flex gap-1
      .stars
        @apply flex
        .icon
          @apply w-4 h-4 text-amber
      .count
        @apply text-xs text-zinc-500
</style>