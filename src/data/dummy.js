export const games = [
  {
    id: 'mobile-legends',
    name: 'Mobile Legends',
    publisher: 'Moonton',
    category: 'Mobile',
    startingPrice: 14000,
    isHot: true,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=ML&backgroundColor=7c3aed&textColor=ffffff'
  },
  {
    id: 'free-fire',
    name: 'Free Fire',
    publisher: 'Garena',
    category: 'Mobile',
    startingPrice: 10000,
    isHot: true,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=FF&backgroundColor=f97316&textColor=ffffff'
  },
  {
    id: 'pubg-mobile',
    name: 'PUBG Mobile',
    publisher: 'Tencent',
    category: 'Mobile',
    startingPrice: 15000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=PB&backgroundColor=ea580c&textColor=ffffff'
  },
  {
    id: 'genshin-impact',
    name: 'Genshin Impact',
    publisher: 'HoYoverse',
    category: 'Mobile',
    startingPrice: 16000,
    isNew: true,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=GI&backgroundColor=0891b2&textColor=ffffff'
  },
  {
    id: 'honkai-star-rail',
    name: 'Honkai: Star Rail',
    publisher: 'HoYoverse',
    category: 'Mobile',
    startingPrice: 16000,
    isNew: true,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=HS&backgroundColor=6366f1&textColor=ffffff'
  },
  {
    id: 'valorant',
    name: 'Valorant',
    publisher: 'Riot Games',
    category: 'PC',
    startingPrice: 45000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=VL&backgroundColor=ef4444&textColor=ffffff'
  },
  {
    id: 'steam-wallet',
    name: 'Steam Wallet',
    publisher: 'Valve',
    category: 'Voucher',
    startingPrice: 12000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=SW&backgroundColor=1e293b&textColor=ffffff'
  },
  {
    id: 'google-play',
    name: 'Google Play',
    publisher: 'Google',
    category: 'Voucher',
    startingPrice: 10000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=GP&backgroundColor=10b981&textColor=ffffff'
  },
  {
    id: 'call-of-duty',
    name: 'Call of Duty Mobile',
    publisher: 'Activision',
    category: 'Mobile',
    startingPrice: 10000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=CD&backgroundColor=3b82f6&textColor=ffffff'
  },
  {
    id: 'league-of-legends',
    name: 'League of Legends',
    publisher: 'Riot Games',
    category: 'PC',
    startingPrice: 50000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=LL&backgroundColor=f59e0b&textColor=ffffff'
  },
  {
    id: 'apex-legends',
    name: 'Apex Legends',
    publisher: 'EA',
    category: 'PC',
    startingPrice: 100000,
    isNew: true,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=AL&backgroundColor=ec4899&textColor=ffffff'
  },
  {
    id: 'roblox',
    name: 'Roblox',
    publisher: 'Roblox Corp',
    category: 'Mobile',
    startingPrice: 13000,
    isHot: false,
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=RB&backgroundColor=84cc16&textColor=ffffff'
  }
]

export const nominalOptions = [
{ id: 1, amount: '50', currency: 'Diamond', price: 14000, bonus: 0, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 2, amount: '100', currency: 'Diamond', price: 28000, bonus: 5, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 3, amount: '140', currency: 'Diamond', price: 38000, bonus: 10, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 4, amount: '280', currency: 'Diamond', price: 75000, bonus: 25, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 5, amount: '500', currency: 'Diamond', price: 130000, bonus: 50, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 6, amount: '720', currency: 'Diamond', price: 185000, bonus: 75, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 7, amount: '1000', currency: 'Diamond', price: 250000, bonus: 100, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 8, amount: '1450', currency: 'Diamond', price: 360000, bonus: 150, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' },
{ id: 9, amount: '2000', currency: 'Diamond', price: 495000, bonus: 200, icon: 'https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=7c3aed&textColor=ffffff' }
]

export const paymentMethods = [
{ id: 'dana', name: 'DANA', description: 'Pembayaran instan', icon: 'D', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400', category: 'E-Wallet' },
{ id: 'ovo', name: 'OVO', description: 'Pembayaran instan', icon: 'O', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400', category: 'E-Wallet' },
{ id: 'gopay', name: 'GoPay', description: 'Pembayaran instan', icon: 'G', bgColor: 'bg-green-500/20', textColor: 'text-green-400', category: 'E-Wallet' },
{ id: 'shopeepay', name: 'ShopeePay', description: 'Pembayaran instan', icon: 'S', bgColor: 'bg-orange-500/20', textColor: 'text-orange-400', category: 'E-Wallet' },
{ id: 'qris', name: 'QRIS', description: 'Scan QR code', icon: 'Q', bgColor: 'bg-cyan-500/20', textColor: 'text-cyan-400', category: 'QRIS' },
{ id: 'bca', name: 'BCA', description: 'Transfer bank', icon: 'B', bgColor: 'bg-blue-600/20', textColor: 'text-blue-500', category: 'Transfer Bank' },
{ id: 'bni', name: 'BNI', description: 'Transfer bank', icon: 'BN', bgColor: 'bg-orange-600/20', textColor: 'text-orange-500', category: 'Transfer Bank' },
{ id: 'mandiri', name: 'Mandiri', description: 'Transfer bank', icon: 'M', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-400', category: 'Transfer Bank' },
{ id: 'alfamart', name: 'Alfamart', description: 'Pembayaran retail', icon: 'A', bgColor: 'bg-red-500/20', textColor: 'text-red-400', category: 'Retail' },
{ id: 'indomaret', name: 'Indomaret', description: 'Pembayaran retail', icon: 'I', bgColor: 'bg-yellow-600/20', textColor: 'text-yellow-500', category: 'Retail' }
]

export const banners = [
  { tag: 'Promo Spesial', title: 'Bonus 20 Persen Diamond', description: 'Dapatkan bonus 20 Persen', buttonText: 'Top Up Sekarang', gradient: 'from-purple-600 via-purple-700 to-indigo-800', image: 'https://api.dicebear.com/7.x/initials/svg?seed=ML&backgroundColor=7c3aed&textColor=ffffff' },
  { tag: 'Terbaru', title: 'Genshin Impact Genesis', description: 'Top up Genesis Crystal dengan harga termurah', buttonText: 'Beli Genesis', gradient: 'from-blue-600 via-cyan-600 to-teal-700', image: 'https://api.dicebear.com/7.x/initials/svg?seed=GI&backgroundColor=0891b2&textColor=ffffff' },
  { tag: 'Game Baru', title: 'Rilis Valorant Mobile', description: 'Segera hadir bulan ini', buttonText: 'Lihat Detail', gradient: 'from-red-500 via-red-600 to-orange-500', image: 'https://api.dicebear.com/7.x/initials/svg?seed=VL&backgroundColor=ef4444&textColor=ffffff' },
  { tag: 'Diskon', title: 'Potongan Harga PUBG', description: 'Nikmati diskon akhir pekan', buttonText: 'Klaim Sekarang', gradient: 'from-green-500 via-green-600 to-teal-500', image: 'https://api.dicebear.com/7.x/initials/svg?seed=PB&backgroundColor=ea580c&textColor=ffffff' }
]