<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const showMobileSearch = ref(false)
const showMobileMenu = ref(false)
const showLoginModal = ref(false)

const handleLogin = () => {
  alert('Fitur login akan segera hadir!')
  showLoginModal.value = false
}
</script>

<template>
    <nav class="sticky top-0 z-50 bg-dark-800/95 backdrop-blur-md border-b border-dark-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              RepublikTopup
            </span>
          </router-link>

          <!-- Search Bar - Desktop -->
          <div class="hidden md:flex flex-1 max-w-lg mx-8">
            <div class="relative w-full">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari game..."
                class="w-full bg-dark-700 border border-dark-600 rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
              />
              <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-4">
            <button 
              @click="showMobileSearch = !showMobileSearch"
              class="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button 
              @click="showLoginModal = true"
              class="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-blue-600 hover:to-purple-600 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Masuk</span>
            </button>

            <button 
              @click="showMobileMenu = !showMobileMenu"
              class="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Search -->
        <div v-if="showMobileSearch" class="md:hidden py-3 border-t border-dark-600">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari game..."
              class="w-full bg-dark-700 border border-dark-600 rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-all"
            />
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="lg:hidden py-3 border-t border-dark-600">
          <div class="flex flex-col space-y-2">
            <router-link to="/" class="px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all">Beranda</router-link>
            <a href="#/games" class="px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all">Semua Game</a>
            <a href="#/promo" class="px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all">Promo</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Login Modal -->
    <div v-if="showLoginModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="showLoginModal = false"></div>
      <div class="relative bg-dark-800 rounded-2xl p-8 max-w-md w-full border border-dark-600 shadow-2xl">
        <button @click="showLoginModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white">Masuk ke Akun</h2>
          <p class="text-gray-400 mt-1">Silakan masuk untuk melanjutkan</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" placeholder="email@example.com" class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input type="password" placeholder="••••••••" class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all" />
          </div>
          <button type="submit" class="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all">
            Masuk
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-400 text-sm">Belum punya akun? <a href="#" class="text-accent-blue hover:text-blue-400 font-medium">Daftar sekarang</a></p>
        </div>
      </div>
    </div>
  </template>