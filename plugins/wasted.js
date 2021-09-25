//by nobuyaki
//jangan hapus hargai yang bikin
//remake by dhamz

const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  let stiker = await sticker(null, wasted, 'Wasted', '©AdiOfficial')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['wasted']
handler.tags = ['sticker']
handler.command = /^wasted$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false
handler.register = false

handler.limit = true
handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
