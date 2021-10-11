<script setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>

<template>
  <header class="container">
    <nav class="flex wrap justify-between items-center">
      <router-link to="/" class="py-2">
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
      </router-link>
      <div class="md:hidden flex items-center">
        <div class="relative">
          <router-link to="cartpage" class="text-lg py-4">
            <span class="material-icons d-block text-gray text-xl">
              shopping_cart
            </span>
          </router-link>
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
        <a
          href="#"
          class="py-[14px] px-5"
          @click.prevent="showMenu = !showMenu"
        >
          <span class="material-icons text-gray btn"> menu </span>
        </a>
      </div>
      <ul
        :class="{ hidden: !showMenu }"
        class="
          md:flex
          flex flex-col
          md:flex-row
          absolute
          md:relative
          top-16
          md:top-auto
          left-0
          md:left-auto
          w-full
          md:w-auto
          text-white
          md:text-gray
          bg-dark bg-opacity-80
          md:bg-transparent
          items-center
          md:gap-8
        "
      >
        <li
          class="
            py-4
            border border-white
            hover:border-primary
            md:border-0
            w-full
            md:w-auto
          "
        >
          <router-link to="product" class="py-4 w-full">
            <div
              class="flex items-center justify-center text-lg gap-2 md:gap-0"
            >
              <span class="hidden md:block material-icons"> store </span>
              Product
            </div>
          </router-link>
        </li>
        <li
          class="
            order-2
            py-4
            border border-white
            hover:border-primary
            w-full
            md:hidden
          "
        >
          <a href="#" class="py-4 w-full">
            <div
              class="flex items-center justify-center text-lg gap-2 md:gap-0"
            >
              Blog
            </div>
          </a>
        </li>
        <li
          class="
            order-2
            py-4
            border border-white
            hover:border-primary
            w-full
            md:hidden
          "
        >
          <a href="#" class="py-4 w-full">
            <div
              class="flex items-center justify-center text-lg gap-2 md:gap-0"
            >
              Contact
            </div>
          </a>
        </li>
        <li
          class="
            order-2
            md:order-1
            py-4
            border border-white
            md:border-0
            hover:border-primary
            w-full
            md:w-auto
          "
        >
          <a href="#" class="py-4 w-full">
            <div
              class="flex items-center justify-center text-lg gap-2 md:gap-0"
            >
              <span class="hidden md:block material-icons"> person </span>
              login
            </div>
          </a>
        </li>
        <li
          class="
            order-1
            md:order-1
            py-4
            border border-white
            md:border-0
            hover:border-primary
            w-full
            md:w-auto
          "
        >
          <a href="#" class="py-4 w-full">
            <div
              class="flex items-center justify-center text-lg gap-2 md:gap-0"
            >
              <span class="hidden md:block material-icons"> favorite </span>
              Wishlist
            </div>
          </a>
        </li>
        <li
          class="
            hidden
            md:block md:order-1
            py-4
            border border-white
            md:border-0
            hover:border-primary
          "
        >
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
