module.exports = (bot) => {
  
  //stats require external api . i used https://grstats.me/docs wich require their bot to be pressent in the group to gather the data.
  
  const axios = require('axios');  //npm install axios

    bot.command('stattop24h', (ctx) => {
        axios.get('https://grstats.me/api/chat/bot_token') //your bot token
          .then(res => {     
           var ddddd = res.data.res.top_users_24h;  //7 most last 24 hours active users
           ctx.reply('xxx ' + "\n" + "\n" +
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
        axios.get('https://grstats.me/api/chat/bot_token') //bot token
          .then(res => {
           var ddddd = res.data.res.top_users; //most active users the last month
           ctx.reply('xxxx ' + "\n" + "\n" +
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
        axios.get('https://grstats.me/api/chat/bot_token') //bot token
          .then(res => {
            const average = list => list.reduce((prev, curr) => prev + curr) / list.length;
            const list = res.data.res.daily_users_messages[1][1]   //all time average daily messages
             average(list)
             const average1 = list1 => list1.reduce((prev, curr) => prev + curr) / list1.length;
             const list1 = res.data.res.daily_users_messages[1][0]  //all time average daily active users 
              average1(list1)
      
            ctx.reply('xxx ' + "\n" + average(list) + "\n" + "\n" +
            'xxx '+ "\n" + average1(list1)
            )
          }).catch(e => {
            console.log(e);
          })
      })

      //get a donut graph with most active users the last 24h
   const QuickChart = require('quickchart-js');  //npm install quickchart-js
      const myChart = new QuickChart();
      bot.command('xxx', (ctx) => {
        axios.get('https://grstats.me/api/chat/token?timezone=3') //your grstats token url
        .then(res => {
          var ddddd = res.data.res.top_users_24h;
          myChart
          .setConfig({
            type: 'doughnut',
           data: { labels: [` ${ ddddd[0][0]}`, ` ${ ddddd[0][1]}`,` ${ ddddd[0][2]}`,` ${ ddddd[0][3]}`,` ${ ddddd[0][4]}`], datasets: [{data: [` ${ ddddd[1][0]}`, ` ${ ddddd[1][1]}`,` ${ ddddd[1][2]}`,` ${ ddddd[1][3]}`,` ${ ddddd[1][4]}`] }] }, options:{plugins:{doughnutlabel:{labels:[{text:'550',font:{size:20}},{text:'most active last 24h'}]}}}     //label: 'οι πιο δραστήριοι χρήστες το τελευταίο 24ωρο',
          })
          .setWidth(1000)
          .setHeight(500)
          .setBackgroundColor('transparent');
           ctx.replyWithPhoto(myChart.getUrl())       
        })     
      })
  
  
//get a line graph with number of messages and number of active users the last mooonth
  
      const dly = new QuickChart();
      bot.command('chart', (ctx) => {
        axios.get('https://grstats.me/api/chat/token?timezone=3') //your grstats token urlv
        .then(res => {
          var ddddd = res.data.res.daily_users_messages;
          console.log(ddddd[1][1][0])
          dly
          .setConfig({
            type: 'line',
            data: {labels:[ddddd[0][0],ddddd[0][1],ddddd[0][2],ddddd[0][3],ddddd[0][4],ddddd[0][5],ddddd[0][6],ddddd[0][7],ddddd[0][8],ddddd[0][9],ddddd[0][10],ddddd[0][11],ddddd[0][12],ddddd[0][13],ddddd[0][14],ddddd[0][15],ddddd[0][16],ddddd[0][17],ddddd[0][18],ddddd[0][19],ddddd[0][20],ddddd[0][21],ddddd[0][22],ddddd[0][23],ddddd[0][24],ddddd[0][25],ddddd[0][26],ddddd[0][27],ddddd[0][28],ddddd[0][29],ddddd[0][30]], 
              datasets:[{label:'Χρήστες', data: [ddddd[1][0][0],ddddd[1][0][1],ddddd[1][0][2],ddddd[1][0][3],ddddd[1][0][4],ddddd[1][0][5],ddddd[1][0][6],ddddd[1][0][7],ddddd[1][0][8],ddddd[1][0][9],ddddd[1][0][10],ddddd[1][0][11],ddddd[1][0][12],ddddd[1][0][13],ddddd[1][0][14],ddddd[1][0][15],ddddd[1][0][16],ddddd[1][0][17],ddddd[1][0][18],ddddd[1][0][19],ddddd[1][0][20],ddddd[1][0][21],ddddd[1][0][22],ddddd[1][0][23],ddddd[1][0][24],ddddd[1][0][25],ddddd[1][0][26],ddddd[1][0][27],ddddd[1][0][28],ddddd[1][0][29],ddddd[1][0][30]], fill:false,borderColor:'blue'},{label:'Μηνύματα', 
              data:[ddddd[1][1][0],ddddd[1][1][1],ddddd[1][1][2],ddddd[1][1][3],ddddd[1][1][4],ddddd[1][1][5],ddddd[1][1][6],ddddd[1][1][7],ddddd[1][1][8],ddddd[1][1][9],ddddd[1][1][10],ddddd[1][1][11],ddddd[1][1][12],ddddd[1][1][13],ddddd[1][1][14],ddddd[1][1][15],ddddd[1][1][16],ddddd[1][1][17],ddddd[1][1][18],ddddd[1][1][19],ddddd[1][1][20],ddddd[1][1][21],ddddd[1][1][22],ddddd[1][1][23],ddddd[1][1][24],ddddd[1][1][25],ddddd[1][1][26],ddddd[1][1][27],ddddd[1][1][28],ddddd[1][1][29],ddddd[1][1][30]], 
              fill:false,borderColor:'green'}]}
             })
          .setWidth(1000)
          .setHeight(500)
          .setBackgroundColor('transparent');
           ctx.replyWithPhoto(dly.getUrl())       
        })     
      })
     

}
