<script setup>
import { ref, computed } from 'vue'
import { games } from '../data/dummy.js'

const selectedCategory = ref('Semua')
const categories = ['Semua', 'Mobile', 'PC', 'Voucher']

const filteredGames = computed(() => {
  if (selectedCategory.value === 'Semua') return games
  return games.filter(game => game.category === selectedCategory.value)
})

const formatPrice = (price) => {
if (!price) return '0'
return price.toLocaleString('id-ID')
}

</script>

<template>
    <section id="games" class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white">Pilih Game Favoritmu</h2>
            <p class="text-gray-400 mt-1">Top up diamond, UC, dan currency game lainnya</p>
          </div>
          <div class="hidden sm:flex space-x-2">
            <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" class="px-4 py-2 rounded-full text-sm font-medium transition-all" :class="selectedCategory === cat ? 'bg-accent-blue text-white' : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'">{{ cat }}</button>
          </div>
        </div>

        <div class="sm:hidden mb-6 overflow-x-auto pb-2">
          <div class="flex space-x-2">
            <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all" :class="selectedCategory === cat ? 'bg-accent-blue text-white' : 'bg-dark-700 text-gray-400'">{{ cat }}</button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <router-link v-for="game in filteredGames" :key="game.id" :to="'/topup/' + game.id" class="group bg-dark-800 rounded-xl p-4 border border-dark-600 hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/10 transition-all transform hover:-translate-y-1">
            <div class="relative mb-3">
              <div class="aspect-square rounded-lg overflow-hidden bg-dark-700">
                <img :src="game.image" :alt="game.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div v-if="game.isHot" class="absolute -top-2 -right-2 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">HOT</div>
              <div v-if="game.isNew" class="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">NEW</div>
            </div>
            <h3 class="text-white font-semibold text-sm mb-1 line-clamp-1 group-hover:text-accent-blue transition-colors">{{ game.name }}</h3>
            <p class="text-gray-500 text-xs">{{ game.publisher }}</p>
            <div class="mt-3 pt-3 border-t border-dark-600">
              <p class="text-accent-cyan text-xs font-medium">Mulai dari</p>
              <p class="text-white font-bold">Rp {{ formatPrice(game.startingPrice) }}</p>
            </div>
          </router-link>
        </div>

        <div v-if="filteredGames.length === 0" class="text-center py-16">
          <div class="w-20 h-20 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-white font-semibold text-lg">Game tidak ditemukan</h3>
          <p class="text-gray-400 mt-1">Coba pilih kategori lain</p>
        </div>
      </div>
    </section>
  </template>