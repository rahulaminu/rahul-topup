<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
<div class="min-h-screen bg-dark-900">
<Navbar />
<router-view />
<Footer />
</div>
</template>