<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { games, nominalOptions, paymentMethods } from '../data/dummy.js'

const route = useRoute()
const gameId = route.params.gameId

const userId = ref('')
const zoneId = ref('')
const selectedNominal = ref(null)
const selectedPayment = ref(null)
const selectedPaymentType = ref('Semua')

const paymentTypes = ['Semua', 'E-Wallet', 'QRIS', 'Transfer Bank', 'Retail']

const game = computed(() => games.find(g => g.id === gameId))

const filteredPaymentMethods = computed(() => {
if (selectedPaymentType.value === 'Semua') return paymentMethods
return paymentMethods.filter(method => method.category === selectedPaymentType.value)
})

const canSubmit = computed(() => {
return userId.value && zoneId.value && selectedNominal.value && selectedPayment.value
})

const formatPrice = (price) => {
if (!price) return '0'
return price.toLocaleString('id-ID')
}

const handleOrder = () => {
if (!canSubmit.value) return
alert('Pesanan berhasil dibuat')
}
</script>

<template>
<main class="min-h-screen bg-dark-900 py-8">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col lg:flex-row gap-8">
<div class="w-full lg:w-1/3 space-y-6">
<div class="bg-dark-800 rounded-2xl p-6 border border-dark-600">
<div class="flex items-start space-x-4">
<div class="w-24 h-32 rounded-xl overflow-hidden bg-dark-700 flex-shrink-0">
<img :src="game?.image" :alt="game?.name" class="w-full h-full object-cover" />
</div>
<div>
<h1 class="text-xl font-bold text-white">{{ game?.name }}</h1>
<p class="text-gray-400 text-sm">{{ game?.category }}</p>
</div>
</div>
</div>

      <div class="bg-dark-800 rounded-2xl p-6 border border-dark-600">
        <h2 class="text-lg font-semibold text-white mb-4">Data Akun</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">User ID</label>
            <input v-model="userId" type="text" placeholder="Masukkan User ID" class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Zone ID</label>
            <input v-model="zoneId" type="text" placeholder="Masukkan Zone ID" class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-2/3 space-y-6">
      <div class="bg-dark-800 rounded-2xl p-6 border border-dark-600">
        <h2 class="text-lg font-semibold text-white mb-4">Pilih Nominal</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <button v-for="item in nominalOptions" :key="item.id" @click="selectedNominal = item" class="p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden" :class="selectedNominal?.id === item.id ? 'border-yellow-400 bg-yellow-400/10' : 'border-dark-600 bg-dark-700'">
            <div v-if="item.bonus > 0" class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">Bonus {{ item.bonus }}</div>
            <div class="flex items-center space-x-3 mb-2">
              <img :src="item.icon" class="w-8 h-8 rounded-full" />
              <div>
                <p class="text-white font-bold">{{ item.amount }}</p>
                <p class="text-gray-400 text-xs">{{ item.currency }}</p>
              </div>
            </div>
            <p class="text-yellow-400 font-semibold">Rp {{ formatPrice(item.price) }}</p>
          </button>
        </div>
      </div>

      <div class="bg-dark-800 rounded-2xl p-6 border border-dark-600">
        <h2 class="text-lg font-semibold text-white mb-4">Metode Pembayaran</h2>
        <div class="flex space-x-2 mb-4 overflow-x-auto pb-2">
          <button v-for="type in paymentTypes" :key="type" @click="selectedPaymentType = type" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap" :class="selectedPaymentType === type ? 'bg-blue-600 text-white' : 'bg-dark-700 text-gray-400'">{{ type }}</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button v-for="method in filteredPaymentMethods" :key="method.id" @click="selectedPayment = method" class="flex items-center space-x-3 p-4 rounded-xl border-2 transition-all" :class="selectedPayment?.id === method.id ? 'border-blue-500 bg-blue-500/10' : 'border-dark-600 bg-dark-700'">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl" :class="[method.bgColor, method.textColor]">
              {{ method.icon }}
            </div>
            <div class="text-left">
              <p class="text-white font-medium">{{ method.name }}</p>
              <p class="text-gray-400 text-xs">{{ method.description }}</p>
            </div>
          </button>
        </div>
      </div>

      <div class="bg-dark-800 rounded-2xl p-6 border border-dark-600">
        <h2 class="text-lg font-semibold text-white mb-4">Ringkasan Pesanan</h2>
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Total Pembayaran</span>
            <span class="text-yellow-400 text-2xl font-bold">Rp {{ selectedNominal ? formatPrice(selectedNominal.price) : '0' }}</span>
          </div>
        </div>
        <button @click="handleOrder" :disabled="!canSubmit" class="w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all" :class="canSubmit ? 'bg-blue-600 text-white' : 'bg-dark-600 text-gray-500'">Bayar Sekarang</button>
      </div>
    </div>
  </div>
</div>
</main>
</template>