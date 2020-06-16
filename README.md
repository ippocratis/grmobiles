# grmobiles
Shelf hosting telegram nodejs\telegraf admin bot.

this is not a ready to use bot.
its a number of example comands and templates that needs to be edited by you to be functional.
everything is explained in the comments inside the code.
read the code, read the commnets.

Build locally and deploy.

Minimum requirements
pkg install node or (https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages)
npm install telegraf
npm install ms

It can welcome new members in groups. Mute them until a custom answers is given to a custom question.
Ban or kick them if no correct answer is given our just keep them muted

Has basic admin commands like mute,unmute,promote\demote admin
User id,chat id,ban,unban,notes(hardcoded must be created in src/memo.js),
Hushtags(hardcoded must be created in src/hashtag.js), pin,unpin,insult,slap .
 

Read the comments on bot.js and src files to make the bot suit your needs.

to deploy to heroku

>make a heroku acount  

>install heroku cli with sudo snap install --classic heroku

>Go to your dashboard

>Select “Create new app” (top right)

>Name your app something (only letters, numbers, and dashes)

>Click “Create App”

>open terminal inside your root bot folder

>heroku login

>git init

>heroku git:remote -a your-app-name

>git add .

>git commit -am "commiting the code"

>git push heroku master
