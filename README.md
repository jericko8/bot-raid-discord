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


# 🖥️ untuk menjalankan program ini di local komputer andaa
anda hanya perlu menginstall module nya 
```bash
npm install
```
dan jalankan programnya
```bash
node index
```


# >_ untuk menjalankan program ini di vps atau termux, ikuti langkah langkah berikut ini


## 🔧 1. Instalasi dan Persiapan

Buka Termux, lalu jalankan perintah berikut:

```bash
pkg update && pkg upgrade
sudo apt install screen
pkg install git nodejs
```

---

## 📥 2. Clone Repository

Clone repositori dan masuk ke dalam folder project:

```bash
git clone https://github.com/jericko8/bot-raid-discord.git
cd bot-raid-discord
```

---

## 📦 3. Install Dependencies

Install dependensi Node.js:

```bash
npm install
```

---

## 🛠️ 4. Konfigurasi Token & Channel ID

### Untuk Mode AutoChat & Auto Deleted:

1. Masukkan ID channel ke dalam file `channel.txt`:

   ```bash
   nano channel.txt
   ```

2. Masukkan token Discord Anda ke dalam file `token.txt` di folder `data`:

   ```bash
   nano ./data/token.txt
   ```

3. Masukkan kata-kata yang akan dikirimkan ke Discord ke dalam file `kata.txt` di folder `data`:

   ```bash
   nano ./data/kata.txt
   ```

### Untuk Mode AutoChat Only:

1. Masukkan ID channel ke dalam file `gmchanel.txt`:

   ```bash
   nano ./gmchanel.txt
   ```

2. Masukkan data pesan ke dalam file `gm.txt` di folder `data`:

   ```bash
   nano ./data/gm.txt
   ```
   
   jika ingin keluar dari nano gunakan
   ```bash
   CTRL + O enter
   CTRL X
   ```
---

## 🚀 5. Jalankan Bot

Untuk menjalankan bot: kita perlu membuat screen terlebih dahulu dengan cara 
```bash
screen -S nama_session
```
> nama_session diganti sesuai dengan selera kalian

lalu masuk ke session dengan perintah
```bash
screen -r nama_session
```
> atau bisa juga langsung dengan id session seperti contohnya screen -r 12345
kemudian jalankan programnya
```bash
node index.js
```

atau:

```bash
npm start
```
setelah program dijalankan anda bisa menutup session nya tanpa harus mematikan dengan cara
```bash
Ctrl + a, lalu d
```
daftar command session
> screen -ls untuk melihat list session
> screen -S nama_session -X kill untuk menhapus session

---

Selamat menggunakan! Jika ada kendala, silakan cek dokumentasi tambahan atau hubungi pembuat skrip ini.




