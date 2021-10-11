<script setup></script>

<template>
  <footer class="bg-secondary">
    <nav class="container text-white">
      <div class="flex justify-between items-center">
        <div class="flex gap-5 justify-between md:justify-start items-center">
          <a href="/" class="block py-6">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset="../../public/images/d’Perfumewhite@2x.png"
              />
              <img
                src="../../public/images/d’Perfumewhite.png"
                class="h-[38px] align-middle"
                alt="D’Perfume logo"
              />
            </picture>
          </a>
          <p class="text-white text-sm md:text-base whitespace-nowrap">
            © 2020. All Rights Reserved.
          </p>
        </div>
        <ul class="hidden md:flex items-center gap-9">
          <li>
            <a href="#" class="text-lg block py-[28px]"> Product </a>
          </li>
          <li>
            <a href="#" class="text-lg block py-[28px]"> Blog </a>
          </li>
          <li>
            <a href="#" class="text-lg block py-[28px]"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<style></style>
