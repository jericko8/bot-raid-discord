import fetch from 'node-fetch'
import readlineSync from 'readline-sync';
import fsa from 'async-file'
import fs from 'fs'
import moment from 'moment'
import delay from 'delay'


const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';

const randstr = length => {
    var text = "";
    var possible =
        "1234567890";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

// fungsi untuk memilih kata secara acak untuk dikirimkan ke channel arena
const randomshil = () => {
    const datanya = fs.readFileSync("./data/kata.txt", 'utf8')
    const array = datanya.toString().replace(/\r/g, "").split('\n')
    const result = array[Math.floor(Math.random() * array.length)]
    return result;
};

// fungsi untuk memilih kata secara berurutan untuk dikirimkan ke channel GM
const GM = fs.readFileSync("./data/gm.txt", 'utf8').toString().replace(/\r/g, "").split('\n')
let idx = 0;
const urutan = () => {
  const result = GM[idx];
  idx = (idx + 1) % idx.length; // kembali ke 0 jika melebihi
  return result;
};

// fungsi untuk mengirimkan pesan
const Channelmessage = (token, channelId, content) => new Promise((resolve, reject) => {
    fetch('https://discord.com/api/v9/channels/' + channelId + '/messages', {
      method: 'POST',
      headers: {
        'Host': 'discord.com',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.1; Custom) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Mobile Safari/537.36',
        'x-Super-Properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImlkIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTA4LjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE2NjUwNSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=',
        'authorization': `${token}`,
        'accept-Language': 'id',
        'content-Type': 'application/json',
        'accept': '/',
        'urigin': 'https://discord.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Cookie': '__dcfduid=d012bfe08dff11edb8fedb78bfa1f204; __sdcfduid=d012bfe18dff11edb8fedb78bfa1f204d13216078dc999b6863f9da6ccff0d54616c670f8c1eb54a8b59461cdee4ee48; __cfruid=2528a45cebd5df9ebfd833a7cb3d196da353b710-1673043944'
      },
      body: JSON.stringify({
        content: content,
        nonce: randstr(18),
        tts: false
    }),
    })
    .then(res => res.json())
    .then(res => resolve(res))
    .catch(err => reject(err))
});

// fungsi untuk menghapus pesan
const removeMessage = (token, channelId, messageId) => {
    fetch('https://discord.com/api/v9/channels/' + channelId + '/messages/' + messageId, {
      method: 'DELETE',
      headers: {
        'Host': 'discord.com',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.1; Custom) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Mobile Safari/537.36',
        'x-Super-Properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImlkIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTA4LjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE2NjUwNSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=',
        'authorization': `${token}`,
        'accept-Language': 'id',
        'content-Type': 'application/json',
        'accept': '/',
        'urigin': 'https://discord.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Cookie': '__dcfduid=d012bfe08dff11edb8fedb78bfa1f204; __sdcfduid=d012bfe18dff11edb8fedb78bfa1f204d13216078dc999b6863f9da6ccff0d54616c670f8c1eb54a8b59461cdee4ee48; __cfruid=2528a45cebd5df9ebfd833a7cb3d196da353b710-1673043944'
      }
    })
};

(async () => {
    try {
        console.log("\n")
        console.log("////////////////////////// ")
        console.log("//  Selamat Datang Di   //")
        console.log("// Badut Discord nodejs // ")
        console.log("////////////////////////// ")
        console.log("\n")
        console.log(`Silahkan pilih\n1. Chat + Auto Delete\n2. Auto Chat Only\n`)
        const choise = readlineSync.question('[!] Masukan Pilihanmu : ');

         if (choise === "1") {
                const token = fs.readFileSync('./data/token.txt', 'utf8');
                const channelId = "channel.txt"
                const chnlID = await fsa.readTextFile(channelId, "utf-8")
                const channelnya = chnlID.toString().replace(/\r/g, "").split('\n')
                console.clear();
                // DELAY UNTUK MENGHAPUS PESAN
                const delayBeforeDelete = parseFloat(readlineSync.question(`${YELLOW}[!] Berapa lama Pesan anda ingin dihapus? masukan dalam satuan detik :${RESET} `), 10);
                    if (isNaN(delayBeforeDelete) || delayBeforeDelete < 0) {
                    console.error(`${RED}Input tidak valid. Harus berupa angka`);
                    process.exit(1);}
                const second = delayBeforeDelete * 1000
                console.clear();
                
                // DELAY CHAT
                const delaychat = readlineSync.question(`${YELLOW}[!] Masukan Delay Pengulangan Chat(cth: "20s" untuk detik, "1.5m" untuk menit)${RESET}: `).trim().toLowerCase();
                const delayChatMs = (() => {
                const m = delaychat.trim().toLowerCase().match(/^(\d+(?:\.\d+)?)(s|m|detik|menit)?$/);
                    if (!m || +m[1] < 0) {
                        console.error(`${RED}Input delay pengulangan tidak valid. Gunakan format: "20s" atau "1.5m"`);
                        return process.exit();
                    }
                    const num = +m[1];

                     if (num === 0) {
                        return 0;
                    }
                    
                    const unit = m[2];
                    return num * (unit && unit.startsWith('m') ? 60000 : 1000);
                })();

                // menjalankan fungsi utama
                while (true){
                for(let i = 0; i < channelnya.length; i++) {
                    const content = randomshil()
                    const sendMessage = await Channelmessage(token, channelnya[i], content)
                    //console.log(`mengirim ke channel ID ${channelnya[i]}`)
                    if (sendMessage.id) {
                        console.log(`${GREEN}[ ${moment().format("HH:mm:ss")} ] Sukses!! mengirim ke channel ID ${channelnya[i]} | Message ID : ${sendMessage.id} | Content Message: ${sendMessage.content}`)
                        await fsa.writeTextFile(`./tmp/${token}`, sendMessage.id, "utf-8")
                        const messageId = await fsa.readTextFile(`./tmp/${token}`, "utf-8")
                        console.log(`${YELLOW}[ ${moment().format("HH:mm:ss")} ] Delay ${delayBeforeDelete} detik untuk menghapus pesan : ${messageId}`)
                        await delay(second)
                        await removeMessage(token, channelnya[i], messageId)
                        console.log(`${YELLOW}[ ${moment().format("HH:mm:ss")} ] Delay ${delaychat} untuk Chat kembali`)
                        await delay(delayChatMs)
                        await delay(second)
                    } else {
                        continue
                    }}
                }
        } else if (choise === "2") {
            const token = fs.readFileSync('./data/token.txt', 'utf8');
            const channelId = "gmchanel.txt"
            if (!(await fsa.exists(channelId))) return console.warn(`${RED}MAAF!! File ${channelId} tidak ada`)
            const chnlID = await fsa.readTextFile(channelId, "utf-8")
            const channelnya = chnlID.toString().replace(/\r/g, "").split('\n')
            console.clear();

            // Delay chat
            const delaychat = readlineSync.question(`${YELLOW}[!] Masukan Delay Pengulangan Chat(cth: "1s" untuk detik, "1.5m" untuk menit)${RESET}: `).trim().toLowerCase();
            const delayChatMs = (() => {
                const m = delaychat.trim().toLowerCase().match(/^(\d+(?:\.\d+)?)(s|m|detik|menit)?$/);
                if (!m || +m[1] < 0) {
                    console.error(`${RED}Input delay pengulangan tidak valid. Gunakan format: "20s" atau "1.5m"`);
                    return process.exit();
                }
                const num = +m[1];

                if (num === 0) {
                        return 0;
                    }
                
                const unit = m[2];
                return num * (unit && unit.startsWith('m') ? 60000 : 1000);
            })();
            // menjalankan fungsi utama
                while (true){
                    for(let i = 0; i < channelnya.length; i++) {
                        const content = urutan()
                        const sendMessage = await Channelmessage(token, channelnya[i], content)
                        //console.log(`mengirim ke channel ID ${channelnya[i]}`)
                        if (sendMessage.id) {
                            console.log(`${GREEN}[ ${moment().format("HH:mm:ss")} ] Sukses!! mengirim ke channel ID ${channelnya[i]} | Message ID : ${sendMessage.id} | Content Message: ${sendMessage.content}`)
                            console.log(`${YELLOW}[ ${moment().format("HH:mm:ss")} ] Delay ${delaychat} untuk Chat kembali`)
                            await delay(delayChatMs)
                        } else {
                            continue
                        }
                    }
                }
        } 
        else {
            console.log(`${RED}Maaf sepertinya anda salah memasukan Perintah`)
            process.exit();
        } 
    } catch (err) {
        console.log(err)
    }
})();
