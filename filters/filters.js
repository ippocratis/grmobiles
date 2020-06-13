module.exports = (bot) => {

//fap
const strapon = 'https://media1.tenor.com/images/5dd00324a89fe025ba259dc4b9311151/tenor.gif?itemid=5322707'
const anim1 = 'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif'
const anim2 = 'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-12.gif'
const strapon2 = 'https://i.imgur.com/Wo24tKd.gif'
const slap = 'https://media0.giphy.com/media/xT9IgzTnZHL9zp6IPS/source.gif'
const honda = 'https://i.makeagif.com/media/8-12-2019/EoHPnc.gif'
const chin = 'https://media2.giphy.com/media/3XlEk2RxPS1m8/source.gif'
const kara = 'https://media2.giphy.com/media/wmG5pL2j6eLba/source.gif'
const tae = 'https://i.pinimg.com/originals/18/55/3c/18553c650c6d0424a7be2f8d5c8fa472.gif'
const A = ' slap slap slap '
const B = ' ρίχνει φάπες στον '
const C = ' στραπονιάζει τον '
const D = ' πετάει στραπόνια στον '
const E = ' ρίχνει κι αλλες φάπες στον '
const F = ' fap fap fap fap fap τον '

var myArray = [ strapon , anim1 , anim2 , strapon2 , slap , honda , chin , kara , tae


];    
Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

var myArray1 = [ A , B , C , D , E , F ];    
Array.prototype.randomElement1 = function () {
  return this[Math.floor(Math.random() * this.length)]
}


bot.hears("/fap", (ctx, next) => {
  if (ctx.message.reply_to_message) {
    ctx.reply("o " + ctx.from.first_name + myArray1.randomElement1() +   ctx.message.reply_to_message.from.first_name, { reply_to_message_id: ctx.message.message_id } );
    ctx.replyWithAnimation(myArray.randomElement());
    next(ctx);
  }
   
}) 

//notes
bot.hears('/notes', (ctx, next) => {
  ctx.reply(`
Για προβολή των σημειώσεων του γρουπ:
Γραψε /notes για εμφάνιση τους σε hashtag.
Γράψε /memo για προβολή τους σε μορφή μενου => υπομενού .
Μπορείς να χρησιμοποιήσεις το /memo και σε προσωπικό μήνυμα με το μποτ διαχείρισης GR mobiles ανενόχλητος.

hashtags
#googlecam
#guides
#termux
#modapps
#modif
#gapps
#general
#usefullapps
`, { reply_to_message_id: ctx.message.message_id });
  next(ctx);
 })


 //iphone
 const AA = ' thats cancer imao '
 const BB = ' c a n c e r '
 
  var iphoneArray = [ AA , BB ];    
  Array.prototype.randomiphone = function () {
    return this[Math.floor(Math.random() * this.length)]
  }
 
  bot.hears([/iphone/,/Iphone/,/iPhone/,/IPHONE/,/ipad/,/IPAD/,/iPad/,/apple/,/APPLE/,/mac/,/MAC/,/macbook/,/MacBook/,/MACBOOK/,/ios/,/IOS/,/iOS/,/itunes/,/ITUNES/], (ctx, next) => {
    ctx.reply(iphoneArray.randomiphone(), { reply_to_message_id: ctx.message.message_id })
    .then(message => {
      setTimeout(function (){
          ctx.telegram.deleteMessage(ctx.chat.id, message.message_id);
      },  5 * 60 * 1000)
      next(ctx);
   })
  });

  //mi 10 pro
 
  const AAA = 'CAACAgQAAx0CSoMdXQACFRFer\_Kj9118RxShQdEy7h8Unccv3wACHgAD3VGwH5B3BKC5XFBKGQQ' 
  const BBB = 'CAACAgQAAx0CSoMdXQACFRNer\_LylvRVw19fqyfNmhTydLffAwACHQAD3VGwHzC5Aqp0eEW1GQQ'
  const CCC = 'CAACAgQAAx0CSoMdXQACFRRer\_Lzf6qGhldaZR61iSN7-dbNegACHAAD3VGwH9aIj8-52AyYGQQ'
  const DDD = 'CAACAgQAAx0CSoMdXQACFRVer\_L10lVUbQb4AsS8wT1h\_TOgvAACGwAD3VGwHzLhmjGfHVWcGQQ' 
  const EEE = 'CAACAgQAAx0CSoMdXQACFRZer\_L2snUa-xYOJbYz2c8KPgtRLQACGgAD3VGwHwxKC0EcbH1TGQQ' 
  
   var mi10Array = [  AAA , BBB , CCC , DDD , EEE  ];    
   Array.prototype.randommi10 = function () {
     return this[Math.floor(Math.random() * this.length)]
   }
  
   bot.hears([/mi10pro/ , /mi 10 pro/ , /MI10PRO/ , /MI 10 PRO/ , /μι10προ/ , /μι 10 προ/ , /mi 10 PRO/ , /MI 10 pro/ ], (ctx, next) => {
    
    ctx.replyWithSticker(mi10Array.randommi10(), { reply_to_message_id: ctx.message.message_id })
    next(ctx);
   })

   //poco
  const one = 'πόσα hz εχει?' 
  const two = 'να πέσει 200 ευρο και το συζητάμε'
  
   var pocoArray = [  one , two ];    
   Array.prototype.randompoco = function () {
     return this[Math.floor(Math.random() * this.length)]
   }

   bot.hears([/poco/ , /POCO/ , /ΠΟΚΟ/ , /ποκο/ , /Poco/ ], (ctx, next) => {
    
    ctx.reply(pocoArray.randompoco(), { reply_to_message_id: ctx.message.message_id })
    next(ctx);
   })
   
     //huawei
  const hu1 = 'spy' 
  const hu2 = 'no store , no source = shit'
  
   var huaArray = [  hu1 , hu2 ];    
   Array.prototype.randomhua = function () {
     return this[Math.floor(Math.random() * this.length)]
   }

   bot.hears([/huawei/ , /HUAWEI/  , /Huawei/ , /Χαβάη/ ], (ctx, next) => {
    
    ctx.reply(huaArray.randomhua(), { reply_to_message_id: ctx.message.message_id })
    next(ctx);
   })

//miui
const miui1 = 'Ένα φτιάχνει δυό χαλάνε' 
const miui2 = 's  p  y'
const miui3 = 'b u g s'

 var miuiArray = [  miui1 , miui2 , miui3 ];    
 Array.prototype.randommiui = function () {
   return this[Math.floor(Math.random() * this.length)]
 }

 bot.hears([/miui/ , /Miui/  , /MIUI/ ], (ctx, next) => {
  
  ctx.reply(miuiArray.randommiui(), { reply_to_message_id: ctx.message.message_id })
  next(ctx);
 })

//new noob
bot.hears(/cantalk/, (ctx, next) => {

  ctx.reply('μπορείς να γράψεις τώρα. Σου έχω αλλάξει τα permission. Δεν απάντησες στο welcome message όπως έπρεπε και ησουν σε read only mode');
  next(ctx);
})


}