# 🎯 Bot Raid Discord

Terima kasih telah memilih menggunakan bot Raid dari saya.

## 🔧 Persiapan Awal
Pastikan kamu telah menginstall **Node.js** dan **npm** di komputer.

Lalu:
1. Download dan ekstrak file bot.
2. Buka terminal ke folder hasil ekstrak.

---

## 🛠️ Mode Pemakaian

### Mode 1: AutoChat + AutoDelete
- Tambahkan token Discord di `data/token.txt`
- Tambahkan ID channel target di `channel.txt`
- Tambahkan daftar kata acak di `data/kata.txt`

### Mode 2: AutoChat Only
- Tambahkan token Discord di `data/token.txt`
- Tambahkan ID channel target di `gmchcanel.txt`
- Tambahkan daftar kata berurutan di `data/gm.txt`

> Mode 1 mengirim pesan acak dari `data/kata.txt`,  
> Mode 2 mengirim pesan berurutan dari `data/gm.txt`

---

## 🚀 Instalasi & Menjalankan

```bash
npm install
node index
