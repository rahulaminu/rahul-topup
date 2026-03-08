<template>
    <footer class="bg-dark-800 border-t border-dark-600 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">RepublikTopup</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">Platform top up game dan voucher digital terpercaya. Proses cepat, aman, dan harga terbaik.</p>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Menu Cepat</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-gray-400 hover:text-accent-blue transition-colors text-sm">Beranda</router-link></li>
              <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors text-sm">Semua Game</a></li>
              <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors text-sm">Promo</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Bantuan</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors text-sm">Cara Top Up</a></li>
              <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors text-sm">Syarat & Ketentuan</a></li>
              <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors text-sm">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Metode Pembayaran</h3>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-dark-700 rounded-lg p-2 flex items-center justify-center"><span class="text-xs text-gray-300 font-medium">QRIS</span></div>
              <div class="bg-dark-700 rounded-lg p-2 flex items-center justify-center"><span class="text-xs text-gray-300 font-medium">BCA</span></div>
              <div class="bg-dark-700 rounded-lg p-2 flex items-center justify-center"><span class="text-xs text-gray-300 font-medium">DANA</span></div>
              <div class="bg-dark-700 rounded-lg p-2 flex items-center justify-center"><span class="text-xs text-gray-300 font-medium">OVO</span></div>
              <div class="bg-dark-700 rounded-lg p-2 flex items-center justify-center"><span class="text-xs text-gray-300 font-medium">GoPay</span></div>
              <div class="bg-dark-700 rounded-lg p-2 flex items-center justify-center"><span class="text-xs text-gray-300 font-medium">ShopeePay</span></div>
            </div>
          </div>
        </div>

        <div class="border-t border-dark-600 mt-8 pt-8 text-center">
          <p class="text-gray-500 text-sm">© 2024 GameTopup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>