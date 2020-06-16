module.exports = (bot) => {

  //notes command
  bot.command('notes', ctx => {
     sendStartMessage(ctx);
   })
   
   bot.action('notes', ctx => {
     ctx.deleteMessage();
     sendStartMessage(ctx);
   })
   
   
   //main menu
   function sendStartMessage(ctx) {
     let startMessage = `notes`;  //text sawn
     bot.telegram.sendMessage(ctx.chat.id, startMessage,
       {
         reply_markup: {
           inline_keyboard: [
             [
               { text: "one", callback_data: 'one' } //you button text and the callback data for the submenu that is shown when button pressed
             ],
             [
               { text: "xxx", url: 'http://someurl' } //your button text and the url tha it leads when it pressed
             ]
           ]
         }
       })
   }
   
   
   
   //one menu
  //action , let message and send message arg must contain same callback data in this template its (one)
   bot.action('one', ctx => {  //link the callback data from prev menu to the actual menu shown
     let oneMessage = `xxx`; //text shown  
     ctx.deleteMessage();  //deleting provious message so that the bot wont spam with multiple messages and only one message is shown
     bot.telegram.sendMessage(ctx.chat.id, oneMessage,  
       {
         reply_markup: {
           inline_keyboard: [
             [
               { text: "xxx", url: 'http://someurl' } //submenu can also have url buttons
             ],         
             [
              { text: "xxx",  callback_data: 'three' } //submenu buttons can contain another submenu
            ],
             [
               { text: "Back main Menu", callback_data: 'notes' } //and a final button that return to main menu
             ],
             ]
         }
       })
     })
   
     //three menu
    //action , let message and send message arg must contain same callback data in this temppppplate its (three)

     bot.action('thee', ctx => {
       let threeMessage = `Μετατροπή του file system από ext4 σε f2fs στις συμβατές ρομ με στόχο μεγαλύτερες ταχύτητες ανάγνωσης εγγραφής και άρα την ταχύτερη απόκριση του`;
       ctx.deleteMessage();
       bot.telegram.sendMessage(ctx.chat.id, threeMessage,
         {
           reply_markup: {
             inline_keyboard: [
               [
                 { text: "xxx", whatever: 'wahatever' } //you can continue wth another submenu or url button
               ],   
               [
                 { text: "xxx", url: 'https://someurl' }, 
                 { text: "xxx", url: 'https://someurl'} // can have another button in the same row
               ],          
               [
                 { text: "Back to one menu", callback_data: 'one' } //you can either selct to go back to prev menu using its callback data (here its one) or to main menu using main menu callbacck data (notes)
               ],
             ]
           }
         })
   
       })
   
      
 
 }
