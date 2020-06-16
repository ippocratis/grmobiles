// Utils
const Telegraf = require('telegraf'); //npm install telegraf

const Telegram = require('telegraf/telegram')

const telegram = new Telegram('xxx'); //bot token

const bot = new Telegraf('xxx'); //bot token

const ms = require("ms");  //npm install ms

const Extra = require('telegraf/extra')

const fs = require('fs')


const { admin } = require('telegraf')

const notesCommand = require('./src/commands/notes');
notesCommand(bot);

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
const groupId = -xxx  //group id

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


bot.start((ctx, next) => {
  if( ctx.chat.type !== 'private' ) return
  ctx.reply("xx") //right your question here
  next(ctx);
})


//reply on correct answer

bot.hears(["first answer","second answer"], (ctx, next) => { //bot will reply upon hearing those words
    
  if( ctx.chat.type !== 'private' ) return
  let beginMessage = "xxx" //reply on correct answer
  //comment or delet from here if you dont want buttons on your reply
  bot.telegram.sendMessage(ctx.chat.id, beginMessage, //buttons reply on correct answer
{
  reply_markup: {
    inline_keyboard: [
      [
        { text: "xxx", url: 'https://yoururl' } //you can have your customise ypur button keyborad as in notes.js
        
      ]
    ]
  }
})
	//comment or delet untill here if you dont want buttons on your reply
next(ctx);
})


//unrestrict on correct unswer
bot.hears(["first answer","second answer"], (ctx, next) => { //bot unmute users in group upon hering those words (the corect ansers)
  ctx.tg.restrictChatMember(groupId, ctx.from.id, unoptions)
next(ctx);  
})



//restrict on wellcome on groups
bot.on('new_chat_members', (ctx, next) => { //bot mutes users when they join group
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
          },  10 * 60 * 1000) //bot deletes welcome message after a timeout (in miliseconds)


       ctx.replyWithMarkdown('xxx', //the welcome text (you could give some instructions here)
          
          {

            reply_markup: {
              inline_keyboard: [
		      //if you just want the start test button delete from here
                [
                  { text: "rules", url: 'https://telegra.ph/xxx' }    //you could create a telegraph doc with your rules and add the link here         
                ],
		      //if you just want the start test button delete until here

                [
                  { text: "start test", url: 'https://t.me/yourbotname?start=test' } //deep linking , replace yourbotname with your bots name so that when users hit this button they will redirected to bot and a start button will wait them there to start the test
                ] 
              ]
            }
          }
         
        )
        .then(message => {
          setTimeout(function (){
              ctx.telegram.deleteMessage(ctx.chat.id, message.message_id);
          },  10 * 60 * 1000)   //bot deletes the buttons after a timeout (in miliseconds)        

      })
  })
  next(ctx);
      });
  
 

//autoban
//auto kick timeout starts here delete if you want to ban
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
//auto kick timeout ends here delete if you want to ban

var t;
bot.on('new_chat_members', (ctx, next) => {
  t = setTimeout(function() {
    ctx.kickChatMember(ctx.message.from.id);
    delay(120000).then(() => telegram.unbanChatMember(ctx.chat.id, ctx.message.from.id)); //bot will unban so he will only be kicked and can rejoin if he wants . delete this line if you dont want him to be able to rejoin
    telegram.unbanChatMember(ctx.chat.id, ctx.message.from.id); 
    ctx.replyWithMarkdown('o ' + ` [${ctx.message.from.first_name}](tg://user?id=${
      ctx.message.from.id
  })` + ' δεν απαντησε σωστα και τον kikάρω');  //bot sends this message in group after banned user
   }, 10 * 60 * 1000); //after that timeout bot will ban user 
   next(ctx);
});
bot.on("text", (ctx, next) => {
  if(ctx.update.message.text ===  ('first answer') && ctx.chat.type === 'private' ) { //upon hearing the correct bot will stop the timeout and user will not kicked or banned 
    clearTimeout(t);
     } 
     next(ctx);
});




//forwarder
//if you want to know the answers user gives to the bot.bot will forward all messages to you
bot.on('message', (ctx, next) => {
	if( ctx.chat.type === 'private' ){
		ctx.forwardMessage(xxx)} //your user id
		next(ctx);
})

      
bot.launch();
 
