<template>
  <footer>
    <div class="wrapper">
      <section class="p-0 lg:p-2 gap-2">
        <AlfastoreBrand class="text-white p-0 lg:px-2 lg:py-1 self-baseline" />
        <hr class="bg-white h-3px w-7ch lg:w-full">
      </section>

      <div class="row-span-2 col-span-3 flex flex-col lg:flex-row justify-end lg:gap-8">
        <section class="w-full lg:max-w-24ch">
          <h5>Navigasi</h5>

          <ul>
            <li>
              <router-link to="#" class="btn item-label">
                ↗ Beranda
              </router-link>
            </li>

            <li>
              <router-link to="#" class="btn item-label">
                ↗ Tentang
              </router-link>
            </li>

            <li>
              <router-link to="#" class="btn item-label">
                ↗ Katalog
              </router-link>
            </li>
          </ul>
        </section>

        <section class="w-full lg:max-w-24ch">
          <h5>
            Media Sosial
          </h5>

          <ul>
            <li class="social-item">
              <a href="#" class="btn">
                <div class="icon-container">
                  <MdiInstagram class="icon" />
                </div>

                <span class="item-label">ACM</span>
              </a>
            </li>

            <li class="social-item">
              <a href="#" class="btn">
                <div class="icon-container">
                  <MdiFacebook class="icon" />
                </div>

                <span class="item-label">ACM</span>
              </a>
            </li>

            <li class="social-item">
              <a href="#" class="btn">
                <div class="icon-container">
                  <MdiWhatsapp class="icon" />
                </div>

                <span class="item-label">+62 8312 XXXX</span>
              </a>
            </li>
          </ul>
        </section>

        <section class="w-full lg:max-w-24ch lg:p-2">
          <h5>
            Alamat
          </h5>

          <a href="https://goo.gl/maps/rRx9wBSGW5pSTcF2A" target="_blank" class="btn item-label -ml-2">
            Jl . Jalan, No. 45, Kartasura, Jawa Selatan
          </a>
        </section>
      </div>

      <section class="gap-2 justify-end">
        <hr class="bg-gray-700 h-px lg:hidden">
        <p class="text-gray-300 text-xs leading-4 font-normal">
          &copy; 2022 Alfastore (CV. Alfa Cipta Mukti)
        </p>
      </section>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@layer components
  footer
    @apply bg-zinc-900
    .wrapper
      @apply grid grid-cols-1 gap-2 px-4 py-8 max-w-screen-xl mx-auto
      @screen lg
        @apply grid-cols-4 gap-8 p-4 pb-6
  section
    @apply flex flex-col px-2 py-4 gap-4

    h5
      @apply text-zinc-300 text-xs leading-4 font-bold

    ul
      @apply list-none text-white flex flex-col gap-2
      .btn
        @apply -ml-2

    .item-label
      @apply text-base text-white leading-6 font-semibold
      @screen lg
        @apply text-sm

    .social-item
      .icon-container
        @apply mr-1.5
        .icon
          @apply w-5 h-5 text-white
</style>