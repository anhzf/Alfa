<template>
  <div class="grow">
    <header>
      <div class="bg">
        <img src="/assets/hero-slides1_1.png" loading="lazy" />
        <div class="overlay" />
      </div>

      <div class="slide--content">
        <div class="flex flex-col gap-3">
          <h3>
            General Supplier
          </h3>
          <hr class="bg-white w-20 h-3px" />
        </div>

        <div class="max-w-prose">
          <p class="text-base leading-6">Melayani berbagai kebutuhan pasokan barang untuk kebutuhan kantor anda maupun
            kebutuhan
            lainnya.</p>
        </div>

        <div class="slide--actions">
          <button class="btn btn--filled btn--sm btn--primary">
            Kontak Kami
          </button>
          <button class="btn btn--sm text-white">
            Lihat produk →
          </button>
        </div>
      </div>

      <div class="slider-control">
        <button class="btn btn--round" disabled>
          <ChevronLeftIcon class="w-6 h-6" />
        </button>
        <button class="btn btn--round">
          <ChevronRightIcon class="w-6 h-6" />
        </button>
      </div>
    </header>

    <main>
      <section class="bg-white">
        <h3>
          Klien kami
        </h3>

        <hr>

        <div class="flex justify-center items-center flex-wrap gap-12 lg:gap-20 py-8 max-w-screen-lg">
          <a href="#" target="_blank"
            class="w-30 lg:w-40 h-30 lg:h-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
            <img src="/assets/section_clients_fake-brand1.png" alt="Client 1" class="object-contain">
          </a>
          <a href="#" target="_blank"
            class="w-30 lg:w-40 h-30 lg:h-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
            <img src="/assets/section_clients_fake-brand2.png" alt="Client 2" class="object-contain">
          </a>
          <a href="#" target="_blank"
            class="w-30 lg:w-40 h-30 lg:h-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
            <img src="/assets/section_clients_fake-brand3.svg" alt="Client 3" class="object-contain">
          </a>
        </div>
      </section>

      <section class="bg-zinc-50">
        <h3>Barang terlaris</h3>

        <hr>

        <ul class="flex flex-col lg:flex-row flex-wrap justify-center gap-4 px-12 py-4">
          <li v-for="el in 5" :key="el">
            <CardProduct />
          </li>
        </ul>

        <div class="flex gap-2 p-2">
          <router-link to="/" class="btn text-sm text-zinc-700">
            Lihat semua →
          </router-link>
        </div>
      </section>

      <section class="bg-white">
        <h3>
          Mitra kami
        </h3>

        <hr>

        <div class="flex justify-center items-center flex-wrap gap-12 lg:gap-20 py-8 max-w-screen-lg">
          <a href="#" target="_blank"
            class="w-30 lg:w-40 h-30 lg:h-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
            <img src="/assets/section_clients_fake-brand1.png" alt="Client 1" class="object-contain">
          </a>
          <a href="#" target="_blank"
            class="w-30 lg:w-40 h-30 lg:h-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
            <img src="/assets/section_clients_fake-brand2.png" alt="Client 2" class="object-contain">
          </a>
          <a href="#" target="_blank"
            class="w-30 lg:w-40 h-30 lg:h-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
            <img src="/assets/section_clients_fake-brand3.svg" alt="Client 3" class="object-contain">
          </a>
        </div>
      </section>

      <section class="bg-zinc-50">
        <h3>
          Temukan kami
        </h3>

        <hr>

        <div class="py-8 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4242826384494!2d106.79412792919918!3d-6.303466899714855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee1f646ec7f3%3A0x4eb7085df5c42fc2!2sJl.%20RS.%20Fatmawati%20Raya%20No.1%2C%20RT.9%2FRW.7%2C%20Pd.%20Labu%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012450!5e0!3m2!1sen!2sid!4v1662602771036!5m2!1sen!2sid"
            style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-60vh"></iframe>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="sass" scoped>
header
  @apply relative h-80vh text-white
  .bg
    img
      @apply absolute w-full h-full object-cover
    .overlay
      background: linear-gradient(180deg, rgba(196, 196, 196, 0) 20.51%, rgba(39, 39, 42, 0.7) 64.84%, #171717 100%)
      @apply absolute inset-0

  .slide
    &--content
      @apply absolute bottom-8 left-5 right-4 flex flex-col gap-4
      @screen lg
        @apply left-13.5
      h3
        @apply text-xl font-bold uppercase leading-7
    &--actions
      @apply py-2 flex gap-2
      .btn
        &--primary
          @apply bg-white hover:bg-zinc-200 active:bg-zinc-300 px-3 py-1.5 text-zinc-900
          
  .slider-control
    @apply absolute bottom-8 right-2 flex
    @screen lg
      @apply right-4
    .btn
      @apply text-white
      &:active
        @apply text-zinc-300
      &:disabled
        @apply text-zinc-500 cursor-not-allowed

main section
  @apply flex flex-col items-center gap-3 px-2 py-8
  h3
    @apply text-lg text-zinc-900 font-bold leading-7
    & + hr
      @apply w-20 h-3px bg-zinc-900
</style>
