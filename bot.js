// Utils
const Telegraf = require('telegraf');

const Telegram = require('telegraf/telegram')

const telegram = new Telegram('xxx');

const bot = new Telegraf('xxx');

const ms = require("ms");

const Extra = require('telegraf/extra')

const fs = require('fs')


const { admin } = require('telegraf')

const memoCommand = require('./src/commands/memo');
memoCommand(bot);

const allfilters = require('./src/filters/filters');
allfilters(bot);

const restricts = require('./src/commands/restricts');
restricts(bot);

const hashtags = require('./src//hashtags/hashtags');
hashtags(bot);

const forward = require('./src/commands/forward');
forward(bot);

const insult = require('./src/commands/insult');
insult(bot);
/////////////////////////////////////////////////////



//unrestrict group id
const groupId = -xxx

//restrict options
const options = {
	can_send_messages: false, 
	can_send_media_messages: false, 
	can_send_polls: false,
	can_invite_users: false,
	can_send_other_messages: false, 
	can_pin_messages: false,
  }
  
  //unrestrict options
  const unoptions = {
	can_send_messages: true, 
	can_send_media_messages: true, 
	can_send_polls: true,
	can_invite_users: true,
	can_send_other_messages: true, 
	can_pin_messages: true,
  }

 

//////////////////////////////////////////////

//start message on pm
//bot.start((ctx) => ctx.reply("γράψε ολογράφως και με κεφαλαία πόσο κάνει έντεκα και τέσσερα;   και  αν αντιμετοπίζεις καποιο πρόβλημα επικοινώνησε με τον @ippokratis"));

bot.start((ctx, next) => {
  if( ctx.chat.type !== 'private' ) return
  ctx.reply("γράψε ολογράφως , σε μια λέξη , χωρίς τόνους και με κεφαλαία πόσο κάνει έντεκα και τέσσερα.Αν αντιμετωπίζεις καποιο πρόβλημα επικοινώνησε με τον @ippokratis")
  next(ctx);
})


//reply on correct answer

bot.hears(["ΔΕΚΑΠΕΝΤΕ","ΔΕΚΑΠΈΝΤΕ","ΔΕΚΑ ΠΕΝΤΕ","ΔΈΚΑ ΠΈΝΤΕ"], (ctx, next) => {
  //if( ctx.chat.type === 'private' ){
   // ctx.reply('μπορεις να γραψεις στο γκρουπ @hellasmobiles τωρα')
//ctx.reply('τσεκ',
    // )}
  
  if( ctx.chat.type !== 'private' ) return
  let beginMessage = "μπορεις να γραψεις στο γκρουπ @hellasmobiles τωρα"
  bot.telegram.sendMessage(ctx.chat.id, beginMessage,
{
  reply_markup: {
    inline_keyboard: [
      [
        { text: "κανονες", url: 'https://telegra.ph/Rules-01-17-3' },
        { text: "οδηγίες", url: 'https://telegra.ph/Directions-03-07' },
        { text: "σημειώσεις", callback_data: 'notera'}
      ]
    ]
  }
})
next(ctx);
})


//unrestrict on correct unswer
bot.hears(["ΔΕΚΑΠΕΝΤΕ","ΔΕΚΑΠΈΝΤΕ","ΔΕΚΑ ΠΕΝΤΕ","ΔΈΚΑ ΠΈΝΤΕ"], (ctx, next) => {
  ctx.tg.restrictChatMember(groupId, ctx.from.id, unoptions)
next(ctx);  
})



//restrict on wellcome on groups
bot.on('new_chat_members', (ctx, next) => {
  ctx.restrictChatMember(ctx.from.id, options)
  next(ctx);
  });

//welcome message on groups
bot.on('new_chat_members', (ctx, next) => {
  ctx.replyWithMarkdown(` [${ctx.message.from.first_name}](tg://user?id=${
            ctx.message.from.id
        })` + ' καλως ηρθες. ', { reply_to_message_id: ctx.message.message_id })
        .then(message => {
          setTimeout(function (){
              ctx.telegram.deleteMessage(ctx.chat.id, message.message_id);
          },  10 * 60 * 1000)


       ctx.replyWithMarkdown('Πάτα στο κουμπι start test και απάντησε στην ερώτηση που θα σου γίνει εκει για να μπορείς να μιλήσεις',
          
          {

            reply_markup: {
              inline_keyboard: [
                [
                  { text: "κανονες", url: 'https://telegra.ph/Rules-01-17-3' },
                  { text: "οδηγίες", url: 'https://telegra.ph/Directions-03-07' }
                  //{ text: "σημειώσεις", callback_data: 'notera'}           
                ],
                [
                  { text: "start test", url: 'https://t.me/hellasmobiles_admin_bot?start=test' }
                ] 
              ]
            }
          }
         
        )
        .then(message => {
          setTimeout(function (){
              ctx.telegram.deleteMessage(ctx.chat.id, message.message_id);
          },  10 * 60 * 1000)         

      })
  })
  next(ctx);
      });
  
  //welcome σημειωσεις sub menu
  bot.action('notera', ctx => {
    let noteraMessage = `
Για προβολή των σημειώσεων του γρουπ:
Γραψε /notes για εμφάνιση τους σε hashtag.
Γράψε /memo για προβολή τους σε μορφή μενου => υπομενού .
Μπορείς να χρησιμοποιήσεις το /memo και σε προσωπικό μήνυμα με το μποτ διαχείρισης GR mobiles ανενόχλητος.`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, noteraMessage,      
      )
      .then(message => {
        setTimeout(function (){
            ctx.telegram.deleteMessage(ctx.chat.id, message.message_id);
        },  10 * 1000)     
    })
  })
  

//autoban
var t;
bot.on('new_chat_members', (ctx, next) => {
  t = setTimeout(function() {
    ctx.kickChatMember(ctx.message.from.id);
    telegram.unbanChatMember(ctx.chat.id, ctx.message.from.id); 
    ctx.replyWithMarkdown('o ' + ` [${ctx.message.from.first_name}](tg://user?id=${
      ctx.message.from.id
  })` + ' δεν απαντησε σωστα και τον kikάρω');
   }, 10 * 60 * 1000);
   next(ctx);
});
bot.on("text", (ctx, next) => {
  if(ctx.update.message.text ===  ('ΔΕΚΑΠΕΝΤΕ') && ctx.chat.type === 'private' ) {
    clearTimeout(t);
     } 
     next(ctx);
});

//pin
bot.command("pinit", (ctx, next) => {
  ctx.pinChatMessage(ctx.chat.id,ctx.message.reply_to_message.id);
  next(ctx);
  })


//forwarder
bot.on('message', (ctx, next) => {
	if( ctx.chat.type === 'private' ){
		ctx.forwardMessage(531648989)}
		next(ctx);
})

      
bot.launch();