<script setup></script>

<template>
  <section class="subscribeHero bg-cover bg-center h-[600px]">
    <div class="container mx-auto h-full">
      <div class="flex items-end md:w-4/12 h-full">
        <div class="pb-[112px] relative">
          <h2 class="text-gray font-0.9375 text-3xl mb-5">
            記得<br />訂閱以獲取更多資訊！
          </h2>
          <div class="relative">
            <input
              type="mail"
              class="
                w-full
                form-input
                rounded
                border-2 border-secondary
                py-[18px]
                px-[26px]
                focus:border-secondary
                focus:ring
                focus:ring-secondary-dark
                focus:ring-opacity-50
              "
              placeholder="Your email address"
            />
            <a
              href="javascript:;"
              class="
                right-0
                bottom-0
                transform
                rounded-r
                absolute
                bg-secondary
                text-white
                py-[20px]
                px-[26px]
                hover:bg-secondary-dark
              "
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.subscribeHero {
  background-image: url("~@/images/index10.jpg");
}
</style>
