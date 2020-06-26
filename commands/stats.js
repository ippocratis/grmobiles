module.exports = (bot) => {
  const axios = require('axios');

    bot.command('stattop24h', (ctx) => {
        axios.get('https://grstats.me/api/chat/wguffp7xi3ffxtywnf53?timezone=3')
          .then(res => {     
           var ddddd = res.data.res.top_users_24h;
           ctx.reply('οι πιο δραστήριοι χρήστες το τελευταίο 24ωρο ' + "\n" + "\n" +
             (ddddd[0][0] + ` ${ ddddd[1][0]}`) + "\n"
           + (ddddd[0][1] + ` ${ ddddd[1][1]}`) + "\n"
           + (ddddd[0][2] + ` ${ ddddd[1][2]}`) + "\n"
           + (ddddd[0][3] + ` ${ ddddd[1][3]}`) + "\n"
           + (ddddd[0][4] + ` ${ ddddd[1][4]}`) + "\n"
           + (ddddd[0][5] + ` ${ ddddd[1][5]}`) + "\n"
           + (ddddd[0][6] + ` ${ ddddd[1][6]}`) + "\n"
           ); 
          }).catch(e => {
            console.log(e);
          })
      })
      ///////////////////////////////////////////////////
      ///////////////////////////////////////////////
      bot.command('stattop', (ctx) => {
        axios.get('https://grstats.me/api/chat/wguffp7xi3ffxtywnf53?timezone=3')
          .then(res => {
           var ddddd = res.data.res.top_users;
           ctx.reply('οι πιο δραστήριοι χρήστες τον τελευταίο μήνα ' + "\n" + "\n" +
           (ddddd[0][1] + ` ${ ddddd[0][2]}`) + "\n" +
           (ddddd[1][1] + ` ${ ddddd[1][2]}`) + "\n" +
           (ddddd[2][1] + ` ${ ddddd[2][2]}`) + "\n" +
           (ddddd[3][1] + ` ${ ddddd[3][2]}`) + "\n" +
           (ddddd[4][1] + ` ${ ddddd[4][2]}`) + "\n" +
           (ddddd[5][1] + ` ${ ddddd[5][2]}`) + "\n"
           ); 
          }).catch(e => {
            console.log(e);
          })
      })

      //////////////////////////////////////////
      bot.command('statavrg', (ctx) => {
        axios.get('https://grstats.me/api/chat/wguffp7xi3ffxtywnf53?timezone=3')
          .then(res => {
            const average = list => list.reduce((prev, curr) => prev + curr) / list.length;
            const list = res.data.res.daily_users_messages[1][1]
             average(list)
             const average1 = list1 => list1.reduce((prev, curr) => prev + curr) / list1.length;
             const list1 = res.data.res.daily_users_messages[1][0]
              average1(list1)
      
            ctx.reply('ημερήσιος μέσος όρος μηνυμάτων στο γκρούπ ' + "\n" + average(list) + "\n" + "\n" +
            'ημερήσιος μέσος όρος χρηστών στο γκρούπ '+ "\n" + average1(list1)
            )
          }).catch(e => {
            console.log(e);
          })
      })

      //////////////////////////////

     

}
