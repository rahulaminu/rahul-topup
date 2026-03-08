<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { banners } from '../data/dummy.js'

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + banners.length) % banners.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

let autoPlayInterval
onMounted(() => {
  autoPlayInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(autoPlayInterval)
})

const promos = [
  { title: 'Proses Cepat', description: 'Kurang dari 5 menit', bgColor: 'bg-green-500/20', iconColor: 'text-green-400', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Pembayaran Aman', description: '100% terpercaya', bgColor: 'bg-blue-500/20', iconColor: 'text-blue-400', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'Support 24/7', description: 'Siap membantu Anda', bgColor: 'bg-purple-500/20', iconColor: 'text-purple-400', iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' }
]
</script>

<template>
    <section class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="relative rounded-2xl overflow-hidden">
          <div class="flex transition-transform duration-500 ease-out" :style="{ transform: 'translateX(-' + currentSlide * 100 + '%)' }">
            <div v-for="(banner, index) in banners" :key="index" class="w-full flex-shrink-0 relative">
              <div class="h-64 md:h-80 lg:h-96 bg-gradient-to-r rounded-2xl flex items-center px-8 md:px-16" :class="banner.gradient">
                <div class="flex-1 z-10">
                  <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-4">{{ banner.tag }}</span>
                  <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{{ banner.title }}</h2>
                  <p class="text-white/80 text-base md:text-lg mb-6 max-w-lg">{{ banner.description }}</p>
                  <button class="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">{{ banner.buttonText }}</button>
                </div>
                <div class="hidden md:block flex-1">
                  <div class="relative">
                    <div class="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                    <img :src="banner.image" :alt="banner.title" class="relative z-10 w-48 h-48 lg:w-64 lg:h-64 object-contain mx-auto drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-all z-20">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-all z-20">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            <button v-for="(_, index) in banners" :key="index" @click="goToSlide(index)" class="w-2 h-2 rounded-full transition-all" :class="currentSlide === index ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/70'"></button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div v-for="(promo, index) in promos" :key="index" class="bg-dark-800 rounded-xl p-5 border border-dark-600 hover:border-accent-blue/50 transition-all cursor-pointer group">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="promo.bgColor">
                <svg class="w-6 h-6" :class="promo.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="promo.iconPath" />
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold group-hover:text-accent-blue transition-colors">{{ promo.title }}</h3>
                <p class="text-gray-400 text-sm">{{ promo.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>