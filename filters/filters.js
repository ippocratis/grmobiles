module.exports = (bot) => {

  //reply a random gif with a random text upon a command
//fap
  //random gif const
const gif1 = 'https://gif1url'
const gif2 = 'https://gif2url'
const gif3 = 'https://gif3url'

const A = ' text 1 '
const B = ' text 2 '
const C = ' text 3 '


var myArray = [ gif1 , gif2 , gif3 ];     //the array of gifs
Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

var myArray1 = [ A , B , C  ];    
Array.prototype.randomElement1 = function () {
  return this[Math.floor(Math.random() * this.length)]
}


bot.hears("/fap", (ctx, next) => { //here bot.hears used could also the bot.command be used
  if (ctx.message.reply_to_message) {
    ctx.reply("o " + ctx.from.first_name + myArray1.randomElement1() +   ctx.message.reply_to_message.from.first_name, { reply_to_message_id: ctx.message.message_id } );  //random text reply
    ctx.replyWithAnimation(myArray.randomElement()); //random gif reply
    next(ctx);
  }
   
}) 



//another example
const examp1 = 'xxx1' //a number of diferent replies upon hering a certain frase/word
const examp2 = 'xxx2'
const examp3 = 'xxx3'

 var exampArray = [  examp1 , examp2 , examp3 ];    //word before array must be same as after random
 Array.prototype.randomexamp = function () {  //random must follow same word as array
   return this[Math.floor(Math.random() * this.length)]
 }

 bot.hears([/xxx/ , /XXX/  , /MIUI/ ], (ctx, next) => { // reply upon hearing those word/phrases (if inside slases will grab them anywhare in the text and if inside quotes will only reply when the actual word/frase is given)
  
  ctx.reply(exampArray.randomexamp(), { reply_to_message_id: ctx.message.message_id }) //word before array must be same as after random
  next(ctx);
 })




}
