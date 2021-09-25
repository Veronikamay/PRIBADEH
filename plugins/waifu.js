let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://recoders-area.caliph.repl.co/api/waifu?apikey=${APIKeys["https://recoders-area.caliph.repl.co"]}`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Waifunya kak', m, false)
}
handler.help = ['waifu']
handler.tags = ['nulis']
handler.command = /^waifu$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


