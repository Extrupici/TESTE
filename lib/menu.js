const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/dxxoo/whatsapp-bot

Instagram: https://instagram.com/dimaass.cc

Best regards, DXXOO.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
〘 INFORMAÇÕES 〙

➥ RUDITE BOT WhatsApp
➥ CREATOR : @Saiko.cc
➥ wa.me/6293674953

_-_-_-_-_-_-_-_-_-_-_-_-_-_

SALVE, ${pushname}! 👋️
Aqui estão alguns dos recursos da RUDITE bot

*Criador:*
➥ ${prefix}jail
➥ ${prefix}kiss
➥ ${prefix}blackpink
➥ ${prefix}text3d
➥ ${prefix}logopornhub
➥ ${prefix}sticker
➥ ${prefix}stickergif
➥ ${prefix}stickergiphy
➥ ${prefix}meme
➥ ${prefix}quotemaker
➥ ${prefix}nulis

*Educação:*
➥ ${prefix}wiki
➥ ${prefix}brainly
➥ ${prefix}kbbi 

*Islam:*
➥ ${prefix}infosurah
➥ ${prefix}surah
➥ ${prefix}tafsir
➥ ${prefix}ALaudio
➥ ${prefix}jsolat

*18+:*
➥ ${prefix}nekopoi

*Zueura Menu (Grupo):*
➥ ${prefix}say
➥ ${prefix}kutuk
➥ ${prefix}santet
➥ ${prefix}dadu
➥ ${prefix}koin
➥ ${prefix}rate
➥ ${prefix}bisakah
➥ ${prefix}apakah
➥ ${prefix}kapankah
➥ ${prefix}simisimi
➥ ${prefix}antisticker
➥ ${prefix}antilink
➥ ${prefix}katakasar
	┷➥ ${prefix}klasmen

*Download:*
➥ ${prefix}ytmp3
➥ ${prefix}ytmp4
➥ ${prefix}facebook

*Primbon:*
➥ ${prefix}cekzodiak
➥ ${prefix}artinama
➥ ${prefix}cekjodoh

*Pesquisa:*
➥ ${prefix}google
➥ ${prefix}dewabatch
➥ ${prefix}images
➥ ${prefix}sreddit
➥ ${prefix}resep
➥ ${prefix}stalkig
➥ ${prefix}cuaca
➥ ${prefix}chord
➥ ${prefix}lirik
➥ ${prefix}ss
➥ ${prefix}play
➥ ${prefix}movie
➥ ${prefix}whatanime

*Textos Aleatórios:*
➥ ${prefix}namaninja
➥ ${prefix}motivasi
➥ ${prefix}howgay
➥ ${prefix}fakta
➥ ${prefix}pantun
➥ ${prefix}katabijak
➥ ${prefix}quote
➥ ${prefix}cerpen
➥ ${prefix}cersex
➥ ${prefix}puisi

*Imagens Aleatórias:*
➥ ${prefix}anime
➥ ${prefix}kpop
➥ ${prefix}memes
➥ ${prefix}doggo
➥ ${prefix}wpanime

*Lain-lain:*
➥ ${prefix}shopee
➥ ${prefix}ping
➥ ${prefix}tts
➥ ${prefix}translate
➥ ${prefix}resi
➥ ${prefix}covidindo
➥ ${prefix}ceklokasi
➥ ${prefix}shortlink
➥ ${prefix}bapakfont
➥ ${prefix}hilihfont
➥ ${prefix}qrread
➥ ${prefix}qrcode
➥ ${prefix}spamcall
➥ ${prefix}spamcall2
➥ ${prefix}gcinfo


*Sobre o Bot:*
➥ ${prefix}tnc
➥ ${prefix}donasi
➥ ${prefix}botstat
➥ ${prefix}ownerbot
➥ ${prefix}join

_-_-_-_-_-_-_-_-_-_-_-_-_-_

*Proprietário Bot:*
➥ ${prefix}ban - banned
➥ ${prefix}bc - promosi
➥ ${prefix}leaveall - keluar semua grup
➥ ${prefix}clearall - hapus semua chat

Espero que você tenha um ótimo dia! ✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *So para os ADMs* ] ⚠ 
Aqui estão os recursos de administração de grupo da RUDITE SAFADINHA

➥ ${prefix}add
➥ ${prefix}kick @tag
➥ ${prefix}promote @tag
➥ ${prefix}demote @tag
➥ ${prefix}mutegrup
➥ ${prefix}tagall
➥ ${prefix}setprofile
➥ ${prefix}del
➥ ${prefix}welcome
➥ ${prefix}grouplink
➥ ${prefix}revoke

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Aqui estão os recursos do proprietário do grupo neste bot!
➥ ${prefix}kickall
*O Grupo Proprietário é um criador do grupo.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

