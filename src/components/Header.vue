<script setup></script>

<template>
  <header class="container mx-auto">
    <nav class="flex justify-between items-center">
      <a href="/" class="py-2">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="../../public/images/d’Perfume@2x.png"
          />
          <img
            src="../../public/images/d’Perfume.png"
            class="h-[38px]"
            alt="D’Perfume logo"
          />
        </picture>
      </a>
      <div class="md:hidden flex items-center">
        <div class="relative">
          <a href="#" class="text-lg py-4">
            <span class="material-icons d-block text-gray text-xl">
              shopping_cart
            </span>
          </a>
          <span
            class="
              absolute
              top-0
              left-0
              translate-x-[100%]
              -translate-y-1/2
              rounded-full
              w-4
              h-4
              grid
              place-content-center
              text-center
              bg-secondary
              text-white
              mr-5
            "
            >3</span
          >
        </div>
        <a href="javscript:;" class="py-[14px] px-5">
          <span class="material-icons text-gray btn"> menu </span>
        </a>
      </div>
      <ul class="hidden md:flex text-gray items-center gap-8">
        <li>
          <a href="#" class="flex items-center text-lg block py-4">
            <span class="material-icons"> store </span>
            Product
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center text-lg block py-4">
            <span class="material-icons"> person </span>
            login
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center text-lg block py-4">
            <span class="material-icons"> favorite </span>
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center text-lg block py-4">
            <span class="material-icons"> shopping_cart </span>
            Cart(3)
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.btn {
  line-height: 28px;
  font-size: 28px;
}
</style>
