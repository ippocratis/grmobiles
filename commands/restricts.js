module.exports = (bot) => {


const Telegram = require('telegraf/telegram')

const telegram = new Telegram('xxx');  //bot token


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

    const nogif = {
        can_send_media_messages: false
    }

    const { admin } = require('telegraf')

   


    //unstfu
    

    bot.command('unmute', admin((ctx, next) => {
        if (ctx.message.reply_to_message && (ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx)) {   
        ctx.reply(" xxx " )  //what to reply when using command on admin
        }
        else if (ctx.message.reply_to_message) {
        ctx.restrictChatMember(ctx.message.reply_to_message.from.id, unoptions) // ctx.tg.restrictChatMember(groupId, ctx.from.id, unoptions) 
        ctx.reply("ok o "+ ` ${ctx.message.reply_to_message.from.first_name}` + " μπορει να μιλήσει τώρα " )
        } //what to reply when unmuting 
        else if (ctx.message.reply_to_message === undefined) {
            ctx.reply('πρεπει να κανεις reply ρε')} //what to reply when not replyed to a message
        else {ctx.reply('admins command φιλε')}
        next(ctx)
        }))


 //resctrict command
	//read comments from mute command 
 bot.command('mute', admin((ctx, next) => {
    if (ctx.message.reply_to_message && (ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx)) {   
    ctx.reply(" αυτος ειναι admin ρε " )
    }
    else if (ctx.message.reply_to_message) {
    ctx.restrictChatMember(ctx.message.reply_to_message.from.id, options) 
    ctx.reply("ok εβαλα τον "+ ` ${ctx.message.reply_to_message.from.first_name}` + " σε read only mode ")
    }
    else if (ctx.message.reply_to_message === undefined) {
        ctx.reply('πρεπει να κανεις reply ρε')}
    else {ctx.reply('admins command φιλε')}
    next(ctx)
    }))
      

    //ban command
 
    	//read comments from mute command 


    bot.command('ban', admin((ctx, next) => {
        if (ctx.message.reply_to_message && (ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx)) {   
            ctx.reply(" αυτος ειναι admin ρε " )
        }
        else if (ctx.message.reply_to_message) {
            ctx.kickChatMember(ctx.message.reply_to_message.from.id)
            ctx.reply(" οκ έστειλα τον  "+ ` ${ctx.message.reply_to_message.from.first_name}` + " για μπάνιο") 
        }
        else if (ctx.message.reply_to_message === undefined) {
            ctx.reply('πρεπει να κανεις reply ρε')}
        else {ctx.reply('admins command φιλε')}
        next(ctx)
        }))

//unban
		//read comments from mute command 

/bot.command('canjoin', admin((ctx, next) => {
    if (ctx.message.reply_to_message && (ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx || ctx.message.reply_to_message.from.id === xxx)) {   
        //ctx.reply(" αυτος ειναι admin ρε " )
    }
    else if (ctx.message.reply_to_message) {
        telegram.unbanChatMember(ctx.chat.id,ctx.message.reply_to_message.from.id); 
        ctx.reply(" οκ o  "+ ` ${ctx.message.reply_to_message.from.first_name}` + " μπορεί να ξαναμπεί") 
    }
    else if (ctx.message.reply_to_message === undefined) {
        ctx.reply('πρεπει να κανεις reply ρε')}
    else {ctx.reply('admins command φιλε')}
    next(ctx)
    }))
  

//id
    bot.command('id', admin((ctx, next) => {
        if (ctx.message.reply_to_message === undefined) {
            ctx.reply('πρεπει να κανεις reply ρε') //need to reply to someones message to get   its id and if he's bot
           
        }
        else {
            ctx.reply("το id ειναι"+ ` ${ctx.message.reply_to_message.from.id} ` + ' user is bot? = ' + ` ${ctx.message.reply_to_message.from.is_bot} `    );
           } 
            next(ctx)
        }))

  //chatid
	
    bot.command("chatid", (ctx, next) => {
      ctx.reply("το id ειναι"+ ` ${ctx.chat.id}`  ); //customise the text returned with the chat id number
      next(ctx);
      })

//pin
bot.command("pinit", (ctx, next) => {
    if (ctx.message.reply_to_message === undefined) {
        ctx.reply('πρεπει να κανεις reply ρε') //reply to a message
    }
    else {
    telegram.pinChatMessage(ctx.chat.id, ctx.message.reply_to_message.message_id);
    }
    next(ctx);
    })

    //unpin
bot.command("unpinit", (ctx, next) => {    
    telegram.unpinChatMessage(ctx.chat.id);   
    ctx.reply('ok το βγαζω απο την καρφίτσα ') 
    next(ctx);
    })

}



