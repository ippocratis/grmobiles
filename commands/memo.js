module.exports = (bot) => {

  //notes command
  bot.command('memo', ctx => {
     sendStartMessage(ctx);
   })
   
   bot.action('memo', ctx => {
     ctx.deleteMessage();
     sendStartMessage(ctx);
   })
   
   
   //main menu
   function sendStartMessage(ctx) {
     let startMessage = `Σημειώσεις`;
     bot.telegram.sendMessage(ctx.chat.id, startMessage,
       {
         reply_markup: {
           inline_keyboard: [
             [
               { text: "google camera", callback_data: 'gcam' }
             ],
             [
               { text: "οδηγοί", callback_data: 'guides' }
             ],
             [
               { text: "εντολες terminal", callback_data: 'termux' }
             ],
             [
               { text: "εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
             ], 
             [
               { text: "διάφορα χρήσιμα modules παραμετροποιησης", callback_data: 'modif' }
             ],
              [
               { text: "Πακέτα gapps", callback_data: 'gapps' }
             ],
             [
               { text: "Γενικά θέματα", callback_data: 'general' }
             ],
             [
               { text: "Διάφορες Χρήσιμες εφαρμογές", callback_data: 'userfullapps' }
             ]          
           ]
         }
       })
   }
   
   
   
   //guides menu
   bot.action('guides', ctx => {
     //ctx.replyWithPhoto('https://picsum.photos/200/300/')	
     let guidesMessage = `οδηγοι απο τα μέλη του γκρουπ`;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, guidesMessage,
       {
         reply_markup: {
           inline_keyboard: [
             [
               { text: "Διόρθωση παραμόρφωσης από φακούς ultra wide", url: 'http://t.me/hellasmobiles/104857' }
             ],            
             [
               { text: "Εξήγηση των μενού και των ρυθμίσεων της gcam (Antretng)", url: 'http://myphone.gr/forum/showthread.php?t=462218' }
             ],            
             [
               { text: "πως να χτίσεις και να ενεργοποιησεις battery historian", url: 'http://t.me/hellasmobiles/96361' }
             ],
             [
               { text: "οδηγος για kodi", url: 'http://t.me/hellasmobiles/79807' },
               { text: "αναβαθμιση custom rom απο twrp", url: 'http://t.me/hellasmobiles/104204' }
             ],
             [
               { text: "flash custom recovery σε συσκευες με Α/Β partitions", url: 'http://t.me/hellasmobiles/48371' }
             ],
             [
               { text: "flash custom rom με χρηση custom recovery", url: 'http://t.me/hellasmobiles/48373' }
             ],
             [
               { text: "flash custom recovery απο fastboot σε manjaro linux", url: 'http://t.me/hellasmobiles/103497' }
             ],            
             [
               { text: "εφαρμογη θεματος substratum", url: 'http://t.me/hellasmobiles/104155' },
               { text: "Μετατροπή file system σε f2fs", callback_data: 'f2fs' }
             ],            
             [
               { text: "mi 9 lite google camera fix", url: 'https://t.me/hellasmobiles/122496' },
             ],
             [
               { text: "Πως να δείς όλες τις σειρές και ταινίες του US Netflix.", url: 'https://t.me/hellasmobiles/123001' }
             ],            
             [
               { text: "σύντομος οδηγός KLWP", url: 'https://t.me/hellasmobiles/150726' }
             ],    
             [
               { text: "troubleshoot magisk", callback_data: 'magdel' },
               { text: "troubleshoot OTA", callback_data: 'otadel' }
             ],   
             [
               { text: "fingerprint scanner not working fix",  callback_data: 'fpfix' }
             ],
             [
              { text: "GSI resize οταν ειναι μεγαλυτερο απο το system size",  callback_data: 'resize' }
            ],
             [
               { text: "Back to Menu", callback_data: 'memo' }
             ],
             ]
         }
       })
     })
   
     //guides-f2fs menu
     bot.action('f2fs', ctx => {
       let f2fsMessage = `Μετατροπή του file system από ext4 σε f2fs στις συμβατές ρομ με στόχο μεγαλύτερες ταχύτητες ανάγνωσης εγγραφής και άρα την ταχύτερη απόκριση του`;
       ctx.deleteMessage();
       bot.telegram.sendMessage(ctx.chat.id, f2fsMessage,
         {
           reply_markup: {
             inline_keyboard: [
               [
                 { text: "Έλεγχος υποστήριξης f2fs στη ρομ και ποια partition Mπορουν να μετατραπουν", url: 'https://t.me/hellasmobiles/84547' }
               ],   
               [
                 { text: "Τι ψάχνω στο αρχείο fstab (εικόνα)", url: 'https://t.me/hellasmobiles/147100' },
                 { text: "Πώς κάνω την μετατροπή στην twrp", url: 'https://t.me/hellasmobiles/147108?single'}
               ],          
               [
                 { text: "Back to guides", callback_data: 'guides' }
               ],
             ]
           }
         })
   
       })
   
        //magdel
     bot.action('magdel', ctx => {
       let magdelMessage = `Τα modules μπορει να δημιουργησουν ασυμβατοτητες και προβληματα .
   Για απεγκατασταση magisk module απο TWRP οταν δεν μπορουμε να εχουμε ρουτ και αρα να το κανουμε μεσα απο την εφαρμογη ή
   δεν μπορουμε να μπουταρουμε στο λειτουργικο:
   απο την εκδοση ν19 και μετα τα module βρησκονται στο /data/adb/modules 
   Eτσι μπορουμε να τα παεγκαταστησουμε απλα διαγραφωντας τα 
   πηγαινωντας απο την twrp>advanced>file manager>navigate to /data/adb/modules>επιλογη>DELETE    `;
       ctx.deleteMessage();
       bot.telegram.sendMessage(ctx.chat.id, magdelMessage,
         {
           reply_markup: {
             inline_keyboard: [ 
               [
                 { text: "Back to guides", callback_data: 'guides' }
               ],
             ]
           }
         })
   
       })
   
       //otadel
     bot.action('otadel', ctx => {
       let otadelMessage = `
   οι Α/Β συσκευες ισως δεν μπορουν να εκκινησουν μετα απο ΟΤΑ
   Για ξεμπρικαρισμα
   προυποθεση (τηλεφωνα που γνωριζω τουλαχιστον) να εχω unlocked bootloader και latest platform tools
   μπουταρω fastboot με VOL down + pwr
   fastboot getvar all για να δεις σε πιο σλοτ είσαι 
   Μετά κάνεις active το αντίθετο
   fastboot set_active a αν είναι active το b
   fastboot set_active b αν είναι active το a
   
   Για να πάρεις OTA ρουταρισμενος 
   Στο magisk manager αφού κατεβάσεις το οτα>πριν το reboot> manager>εγκατάσταση>flash to inactive slot after ota>reboot    `;
       ctx.deleteMessage();
       bot.telegram.sendMessage(ctx.chat.id, otadelMessage,
         {
           reply_markup: {
             inline_keyboard: [ 
               [
                 { text: "Back to guides", callback_data: 'guides' }
               ],
             ]
           }
         })
   
       })
   
       //fpfix
   bot.action('fpfix', ctx => {
     let fpfixMessage = `
   on twrp>adnanced>file manager>navigate to and delete :
   
   /data/system/users/0/fpdata/user.db
   /data/system/users/0/settings_fingerprint.xml
   `;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, fpfixMessage,
       {
         reply_markup: {
           inline_keyboard: [                             
             [
               { text: "Back to guides", callback_data: 'guides' }
             ]
           ]
         }
       }) 
     })
   
     //resize
   bot.action('resize', ctx => {
    let resizeMessage = `
GSI resize αν δε σου χωραει αλλα και γενικα για unpack/repack system.img σε Linux
    
προυποθετει python 
sudo apt install python
προυποθετει zlib.h
sudo apt-get install libz-dev
    
>κατεβαζω το gsi (προφανως)
>extract (k rename αν θες σε system.img)
    
unpack
    
>git clone https://github.com/anestisb/android-simg2img
>βαζω το sytem.img στο root dir του android-simg2img
>ανοιγω τερμιναλ στο android-simg2img ή cd /home/your_user_name/android-simg2img
    
Δημιουργώ φακελο sys
>mkdir sys (ή οτι ονομα θες anyway)
    
Δημιουργώ raw image
>make
>./simg2img system.img sys.raw
    
Κανω mount το raw image ωστε να μππορω να το επεξεργαστω
>sudo mount -t ext4 -o loop sys.raw sys/
>sudo chown -R USERNAME:USERNAME /path/of/mounted/image
    
Ωραια . πλεον στο φακελο sys εχουμε τα περιεχομενα του system.img τα οποια μπορουμε να επεξεργαστουμε
    
>σβηνω σαβουρα απο system/apps  ,  system/priv-apps  ,  system/product/apps  ,  system/product/priv-apps
    
repack
    
>κατεβαζω https://github.com/jamflux/make_ext4fs 
και κανω extract το make_ext4fs
που βρισκεται στο φακελο make_ext4fs/deploy/x86_64/release-diet-linux/ 
και το βαζω στο /home/your_user_name/android-simg2img
    
τσεκαρω το system size στο τηλεφωνμο μου απο το termux 
>df -h /system
    
Δημιουργώ το image στο επιθημητο μεγεθος
>./make_ext4fs -s -l xxxM -a system new.img sys/
οπου xxx το μεγεθος του τελικου .img
οπου Μ megabyte
    
done 
Πλεον εχω το GSI με ονομα new.img με μικροτερο μεγεθος ετοιμο για φλασαρισμα
  `;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, resizeMessage, { disable_web_page_preview: true },
      {
        reply_markup: {
          inline_keyboard: [                             
            [
              { text: "Back to guides", callback_data: 'guides' }
            ]
          ]
        }
      }, { disable_web_page_preview: true }) 
    })
  
   
   //gcam menu
   bot.action('gcam', ctx => {
    //ctx.replyWithPhoto('https://picsum.photos/200/300/')		
    let gcamMessage = `google camera ports και ρυθμίσεις τους`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, gcamMessage,
      {
        reply_markup: {
          inline_keyboard: [
           [
             { text: "Lg g8s ultrawide & telephoto", url: 'https://t.me/hellasmobiles/104447' }  
            ],
            [
             { text: "Lg g8s βασική και selfie", url: 'https://t.me/hellasmobiles/153711' }    //https://t.me/hellasmobiles/123598
            ],     
            [
             { text: "mi a3 , mi 9 , mi 9t (Antretng)", url: 'http://www.myphone.gr/forum/showthread.php?p=7959764#post7959764' }
           ],
           [
             { text: "mi 9 lite hypercam (Antretng)", url: 'https://t.me/hellasmobiles/68106' }
           ],
           [
             { text: "mi note 10 (Antretng)", url: 'https://t.me/hellasmobiles/66984' },
           ],
           [
             { text: "redmi note 5 , redmi note 6 , redmi 8 (Antretng)", url: 'https://t.me/hellasmobiles/52588' }             
           ],  
           [
             { text: "redmi note 7 (Antretng)", url: 'http://www.myphone.gr/forum/showthread.php?p=7886707#post7886707' }
           ],   
           [
             { text: "redmi note 8t (Antretng)", url: 'https://t.me/hellasmobiles/94014' }
           ],
           [
             { text: "redmi note 8 pro (Antretng)", url: 'https://t.me/hellasmobiles/42477' }             
           ],
           [
             { text: "redmi note 9s night (Antretng)", url: 'https://t.me/hellasmobiles/169331' }             
           ],
            [
              { text: "one plus 7 xcam (Antretng)", url: 'http://www.myphone.gr/forum/showthread.php?p=7932610#post7932610' }
            ],            
            [
              { text: "one plus 7 , mi 9 , mi a3 wavelet denoise (Antretng)", url: 'https://t.me/hellasmobiles/96012' }
            ],            
            [
              { text: "one plus 7 , mi 9 , hyper (Antretng)", url: 'https://t.me/hellasmobiles/66992' }
            ],
            [
             { text: "Hypercam e3 imx586 1+7, mi9 mi9t mi a3", callback_data: 'hyper' }            
            ],
            [
             { text: "Cloned apks", url: 'https://drive.google.com/open?id=1iMGwC6XyPyZqrmheiijGuvOc6fZ7IaiN' }            
            ],   
            
            [
              { text: "Back to Menu", callback_data: 'memo' }
            ]
            ]
        }
      })
    })
   
    //gucam hyper menu
    bot.action('hyper', ctx => {
      let hyperMessage = `https://t.me/hellasmobiles/66949`;
      ctx.deleteMessage();
      bot.telegram.sendMessage(ctx.chat.id, hyperMessage,
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "apk", url: 'https://www.celsoazevedo.com/files/android/google-camera/dev-jairo_rossi//' },
                { text: "xml balanced", url: 'https://t.me/hellasmobiles/66927' },
                { text: "xml cleaner", url: 'https://t.me/hellasmobiles/66926'},
                { text: "xml detail", url: 'https://t.me/hellasmobiles/66928'}
              ],                     
              [
                { text: "Back to gcam", callback_data: 'gcam' }
              ]
            ]
          }
        }) 
      })
   
      //terminal
      
   bot.action('termux', ctx => {    
    let termuxMessage = `μερικές χρήσιμες εντολές για terminal `;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, termuxMessage,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Keyboard bottom gap fix", callback_data: 'gap' }
            ],            
            [
              { text: "μη εμφάνιση ειδοποιήσεων μετά από migrate back up", callback_data: 'migratenotif' }
            ],            
            [
              { text: "Απεγκατασταση εφαρμογών από adb χωρίς ρουτ",  callback_data: 'adbremov' }
            ],
            [
              { text: "Recolor the quick tiles on Android 11 R",  callback_data: 'tilesreclor' }             
            ],
            [
              { text: "Disable lock screen password",  callback_data: 'lockpass' }
            ],
            [
              { text: "Force Google back up", callback_data: 'gglebup' }
            ],
            [
              { text: "Βασικές εντολές unix", url: 'http://swcarpentry.github.io/shell-novice/reference/' }
            ],
            [
              { text: "Back to Menu", callback_data: 'memo' }
            ],
            ]
        }
      })
    })
   
   //terminal gap
   bot.action('gap', ctx => {
   let gapMessage = `wm overscan 0,0,0,-100`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, gapMessage,
     {
       reply_markup: {
         inline_keyboard: [                             
           [
             { text: "Back to terminal commands", callback_data: 'termux' }
           ]
         ]
       }
     }) 
   })
   
   //migratenotif
   bot.action('migratenotif', ctx => {
   let migratenotifMessage = `find /data/data -name com.google.android.gms.appid.xml | xargs rm`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, migratenotifMessage,
     {
       reply_markup: {
         inline_keyboard: [                             
           [
             { text: "Back to terminal commands", callback_data: 'termux' }
           ]
         ]
       }
     }) 
   })
   
   //migratenotif
   bot.action('adbremov', ctx => {
   let adbremovMessage = `Απεγκατασταση system app χωρίς ρουτ μέσω adb 
   Για να δούμε όλα τα πακέτα 
   adb shell pm list package -f
   Για απεγκατασταση
   adb shell pm uninstall -k --user 0 package_name
   `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, adbremovMessage,
     {
       reply_markup: {
         inline_keyboard: [      
          [
             { text: "Back to terminal commands", callback_data: 'termux' }
           ]
         ]
       }
     }) 
   })
    
   //tilesreclor
   bot.action('tilesreclor', ctx => {
   let tilesreclorMessage = `individually recolor your Quick Settings tiles
   για android 11 R DP1
   su –> then enter
   settings put system qs_color_enabled 1 –> then enter
   settings put system qs_color_icon 1 –> then enter
   settings put system qs_color_icon/cell red –> then enter (to coloring data cellular tile will be red color`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, tilesreclorMessage,
     {
       reply_markup: {
         inline_keyboard: [                             
           [
             { text: "Back to terminal commands", callback_data: 'termux' }
           ]
         ]
       }
     }) 
   })
   
   //lockpass
   bot.action('lockpass', ctx => {
   let lockpassMessage = `rm /data/system/locksettings.db
   rm /data/system/locksettings.db-wal
   rm /data/system/locksettings.db-shm
   reboot`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, lockpassMessage,
     {
       reply_markup: {
         inline_keyboard: [                             
           [
             { text: "Back to terminal commands", callback_data: 'termux' }
           ]
         ]
       }
     }) 
   })
   
   //gglebup
   bot.action('gglebup', ctx => {
   let gglebupMessage = `bmgr backup now --all`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, gglebupMessage,
     {
       reply_markup: {
         inline_keyboard: [                             
           [
             { text: "Back to terminal commands", callback_data: 'termux' }
           ]
         ]
       }
     }) 
   })
   
   
   
   
      //εφαρμογές Παραμετροποίησης
      
      bot.action('modapps', ctx => {    
       let modappsMessage = `μερικές χρήσιμες εφαρμογες παραμετροποιησης `;               
       ctx.deleteMessage();
       bot.telegram.sendMessage(ctx.chat.id, modappsMessage,
         {
           reply_markup: {
             inline_keyboard: [
               [
                 { text: "one shade", callback_data: 'oneshade' },
                 { text: "scoop", callback_data: 'scoop' },
                 { text: "migrate",  callback_data: 'migrate' }
               ],            
               [
                 { text: "better battery stats",  callback_data: 'bbs' },
                 { text: "blokada", callback_data: 'blokada' }             
               ],
               [
                 { text: "naptime",  callback_data: 'naptime' },
                 { text: "neutron", callback_data: 'neutron' },
                 { text: "poweramp", callback_data: 'poweramp' }
               ],
               [
                 { text: "call recorder", callback_data: 'callrdr' },
                 { text: "mixplorer", callback_data: 'mixplorer' },
                 { text: "app cloner", callback_data: 'appcloner' }
               ],
               [
                 { text: "klwp", callback_data: 'klwp' },
                 { text: "Drivedroid", callback_data: 'Drivedroid' },
                 { text: "switch slot", callback_data: 'slot' }
               ], 
               [
                 { text: "youtube vanced", callback_data: 'vanced' }
               ], 
               [
                 { text: "Back to Menu", callback_data: 'memo' }
               ],
               ]
             
           }
         })
       
       })
    
   //oneshade
   bot.action('oneshade', ctx => {
   let oneshadeMessage = `παραμετροποιησιμο quick settings χωρις την απαιτηση ρουτ`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, oneshadeMessage,
     {
       reply_markup: {
         inline_keyboard: [   
           [
             { text: "playstore", url: 'https://play.google.com/store/apps/details?id=com.treydev.ons' }
           ],
           [
             { text: "telegram group", url: 'https://t.me/joinchat/EQ_0hUON-V_ZMO9rhCmQAw' }
           ],  
           [
             { text: "απαιτουμενα permissioons για να τρεξει σωστα", url: 'https://t.me/hellasmobiles/102576' }
           ],  
           [
             { text: "Back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   
   //scoop
   bot.action('scoop', ctx => {
   let scoopMessage = `
   Forked από το xposed module από τον paphonb.
   Σώζει το stack trace ενός crashing app και εμφανίζει τα crashes σε λίστα.
   Έτσι δεν χρειάζεται να ψάχνουμε σε μεγάλα logcat .`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, scoopMessage,
     {
       reply_markup: {
         inline_keyboard: [   
           [
             { text: "XDA thread", url: 'https://forum.xda-developers.com/android/apps-games/adb-root-scoop-catch-stack-trace-app-t3888798' }
           ],
           [
             { text: "download", url: 'http://paphonb.xyz/android/apps/scoop/' }
           ], 
           [
             { text: "Back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   //migrate
   bot.action('migrate', ctx => {
   let migrateMessage = `
   Προτεινομενη εφαρμογή backup εφαρμογων μαζι με τα app data τους.
   Σώζει :App apk,App data,App runtime permissions,Contacts \(as vcf file\),SMS messages,
   Call logs,Current ROM screen DPI,Current default keyboard option .
   
   Την alpha το pay protect δεν το αφήνει να τρέξει. Πρέπει να το απενεργοποιήσεις πρώτα. 
   Επίσης ίσως χρειαστεί εκ νέου εγκατάσταση του helper μετά το φλασαρισμα . 
   Βρίσκετε στο /storage/emulated/0/Migrate 
   
   η εκδοση απο το play store ειναι η "stable" κ παλαιωτερη της alpha . για αποφυγη bug προτινεται η alpha.
   Αν κάνεις restore το back up σου σε διαφορετική Ρομ, ίσως δεν είναι καλή ιδέα να επαναφέρεις εφαρμογές συστήματος.`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, migrateMessage,
     {
       reply_markup: {
         inline_keyboard: [
           [
             { text: "telegram channel", url: 'http://t.me/migrateAppChannel' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   
   
   //bbs
   bot.action('bbs', ctx => {
   let bbsMessage = `
   προτεινομενη εφαρμογη παρακολουθησης στατιστικων χρησης οπως:
   Awake, Deep Sleep, Screen On, Phone On, Wifi On, Wifi Running ratios - Kernel Wakelocks 
   - Partial wakelocks - Alarms/Wakeups - CPU States - Network stats 
   - Process stats with User and System CPU time `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, bbsMessage,
     {
       reply_markup: {
         inline_keyboard: [   
           [
             { text: "XDA thread", url: 'http://forum.xda-developers.com/showthread.php?t=1179809' }
           ],                          
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   //naptime
   bot.action('naptime', ctx => {
   let naptimeMessage = `
   Agressive doze app που βάζει τις εφαρμογές σε βαθύ ύπνο όταν ειναι 
   σβηστή η οθόνη γρηγορότερα , μετά από δευτερόλεπτα αντί για λεπτά ή ώρες 
   που είναι η κανονική συμπεριφορά του android `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, naptimeMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "playstore", url: 'http://play.google.com/store/apps/details?id=com.franco.doze&hl=en' }
           ],                                   
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
    //callrdr
   bot.action('callrdr', ctx => {
   let callrdrMessage = `
   δεν απαιτειτε ρουτ.
   το apk δουλεύει και σε Q παρόλο την απενεργοποίηση της δυνατότητας από την Google. 
   Προφανώς δουλεύει στις παλαιότερες εκδόσεις Android
   η έκδοση από το store
   δεν υποστηρίζει ονόματα επαφών λόγω του περιορισμού της Google.   `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, callrdrMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "playstore", url: 'http://play.google.com/store/apps/details?id=org.skvalex.cr' }
           ],
           [
             { text: "module", url: 'http://t.me/magiskmod_update/2798' }
           ],  
           [
             { text: "apk", url: 'https://callrecorder.skvalex.com/get' }
           ],  
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
    //neutron
   bot.action('neutron', ctx => {
   let neutronMessage = `
   advanced music player with professional 32/64-bit audio engine which delivers the best possible Hi-Fi grade sound   `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, neutronMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "playstore", url: 'http://play.google.com/store/apps/details?id=com.neutroncode.mp' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   //poweramp
   bot.action('poweramp', ctx => {
   let powerampMessage = `
   Float32 internal sample format, Float64 DSP processing, up to 384khz sampling rates, selectable swr/sox resampler, multiple dither options, various per-output settings, and much more  `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, powerampMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "playstore", url: 'https://play.google.com/store/apps/details?id=com.maxmpz.audioplayer&hl=el' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   
    //blokada
   bot.action('blokada', ctx => {
   let blokadaMessage = `
   efficiently block ads, trackers, malware, save on your data plan,
   speed up your device and protect your privacy with just one application. 
   works across all of your apps, not only the browser! 
   It doesn't require root, supports both Wi-Fi and mobile networks, `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, blokadaMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "download", url: 'http://blokada.org/' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
    //mixplorer
   bot.action('mixplorer', ctx => {
   let mixplorerMessage = ` προτεινόμενος root file manager χωρίς adds με θέματα , dark mode , archiver,metadata,checksum,media codecs,media tagger,pdf reader . `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, mixplorerMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "download", url: 'https://play.google.com/store/apps/details?id=com.maxmpz.audioplayer&hl=el' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
    //appcloner
   bot.action('appcloner', ctx => {
     let appclonerMessage = ` 
     προτεινομενη εφαρμογή για εγκατάσταση διαφορετικών εκδόσεων της ίδιας εφαρμογής
     ή διαφορετικών εφαρμογών με το ίδιο packages name πχ gcam  `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, appclonerMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "download", url: 'http://appcloner.app/' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   //klwp
   bot.action('klwp', ctx => {
   let klwpMessage = `
   μινι  θεμα. περιλαμβανει καποιες σελιδες κ widget . 
   εχει την ιδιαιτεροτητα ολα αυτα να τα κανει σαν live wallpaper . 
   ο λογος ειναι να αποφυγει τους περιορισμους που εχουν οι launcher σε τοοθρτηση εικονιδιων , 
   widget γραφικων στοιχειων animation.το οτι ειναι βεβαια ενα live wallpaper αλλες ιδιαιτερωτητες.για να προσθεσεις , 
   διαμορφωσεις τα στοιχεια του εχει ενα καπως περιπλοκο συστημα μεσα απο την εφαρμογη. `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, klwpMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "playstore", url: 'https://play.google.com/store/apps/details?id=org.kustom.wallpaper' }
           ],
           [
             { text: "αναζήτησε live wallpaper maker στο modded central", url: 'https://t.me/ModdedCentral/41889' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   
    //Drivedroid
   bot.action('Drivedroid', ctx => {
   let DrivedroidMessage = `
   Προκειτε για μια εφαρμογή που σας επιτρέπει να εκκινήσετε τον υπολογιστή σας 
   από αρχεία ISO / IMG που είναι αποθηκευμένα στο τηλέφωνό σας.  
   Αυτό είναι ιδανικό για να δοκιμάσετε διανομές Linux ή να έχετε πάντα ένα σύστημα διάσωσης εν κινήσει ... 
   χωρίς να χρειαστεί να εγγράψετε διαφορετικά CD ή USB.
   Προϋποθέτει να έχεις συμβατο kernel και root `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, DrivedroidMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "playstore", url: 'https://play.google.com/store/apps/details?id=com.softwarebakery.drivedroid' }
           ],
           [
             { text: "modded", url: 'https://t.me/ModdedCentral/17777' }
           ],
           [
             { text: "settings", url: 'https://t.me/hellasmobiles/112164' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
   
   //slot
   bot.action('slot', ctx => {
     let slotMessage = `
 Switch My Slot is an Android app that helps you switch 
 between android A & B slots easily without having to enter 
 commands in adb or fastboot shell. You don't even need TWRP 
 recovery to use it. `;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, slotMessage,
       {
         reply_markup: {
           inline_keyboard: [    
             [
               { text: "download", url: 'https://github.com/shoukolate/Switch-My-Slot-Android/releases/download/v0.3/app-debug.apk' }
             ],
             [
               { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
             ]
           ]
         }
       }) 
     })
 
  //vanced
  bot.action('vanced', ctx => {
   let vancedMessage = `
To youtube με δυνατοτητα αναπαραγωγης στο παρασκηνιο.
fuck yeah!.
 
H εγκατασταση της εχει καποιες ιδιαιτερότητες.
 
καταρχην υπαρχει σε magisk module το οποιο ομως εχει σταματησει να υποστηριζεται καθως οι app devs 
λογω αλλαγων στο youtube αλλαξαν τον τροπο που πατσαρουν το app kai δεν θελουν apk verification.
 
- Αν δεν σε ενδιαφερει να συνδεθεις στο λογαριασμο σου ενα απλο apk ειναι , το περνας και μπουμ.
 
Αν σε ενδιαφέρει ομως:
 
- Aν δεν εχεις ρουτ πρεπει να εγκαταστησεις microg.
 
- Αν εχεις ρουτ και δε σε απασχολει να εισαι σε παλια εκδοση youtube  μπορεις να εγκαταστησεις το magisk module κανονικα.
 
- Aν εχεις ρουτ, θες μια προσφατη εκδοση youtube και εισαι σε εκδοση android <10 μπορεις να χρησιμοποιησεις smali patcher για απενεργοποιηση apk verification
 
- Αν εχεις ρουτ, θες μια προσφατη εκδοση youtube και εισαι σε εκδοση android 10 πρεπει να εγκατασστησεις χposed και το κινεζικο xposed module corePatch
Διαφορετικα την εφαρμογη λucky patcher
 
- Oι μεθοδοι πλιν magisk module απαιτoυν χρηση εφαρμογης SAI  
  `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, vancedMessage,
     {
       reply_markup: {
         inline_keyboard: [    
           [
             { text: "XDA Main Thread", url: 'http://goo.gl/ko4LWp' },
             { text: "XDA Magisk Thread", url: 'http://goo.gl/2XDGRF' },
             { text: "subreddit", url: 'http://reddit.com/r/vanced' }
           ],
           [
             { text: "DL official site", url: 'https://vanced.app' },
             { text: "DL mediafire", url: 'http://tiny.cc/Mfdownload' },
             { text: "DL AFH", url: 'https://tinyurl.com/AFHdownload' }
           ],
           [
             { text: "tg channel", url: 'https://t.me/Vanced' },
             { text: "discord", url: 'http://discord.gg/wYrRPgv' }
           ],
           [
             { text: "latest (and final) magisk black", url: 'https://sourceforge.net/projects/magiskfiles/files/module-uploads/iYTBP-Vanced-black-Magisk-Repo-25.zip' },
             { text: "white", url: 'https://sourceforge.net/projects/magiskfiles/files/module-uploads/iYTBP-Vanced-Magisk-Repo-25.zip' }
           ],
           [
             { text: "how to no root", callback_data: 'noroot' },
             { text: "android pie", callback_data: 'withroot' },
             { text: "android 10", url: 'https://t.me/Vanced/89' }
           ],
           [
             { text: "corePatch", url: 'https://www.lanzous.com/i7z2rqh' },
             { text: "luckypatcher", url: 'https://t.me/ModdedCentral/44764' },
             { text: "SAI", url: 'https://play.google.com/store/apps/details?id=com.aefyr.sai&hl=en_US' }
           ],
           [
             { text: "back to εφαρμογές Παραμετροποίησης", callback_data: 'modapps' }
           ]
         ]
       }
     }) 
   })
 
 
   //noroot
   bot.action('noroot', ctx => {
     let norootMessage = `
 1. Download and install MicroG
 2. Download SAI from the playstore: https://play.google.com/store/apps/details?id=com.aefyr.sai
 3. Select the vanced .apks file you downloaded (it's in your Downloads folder)
 4. Click install`;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, norootMessage,
       {
         reply_markup: {
           inline_keyboard: [    
             [
               { text: "back to vanced", callback_data: 'vanced' }
             ]
           ]
         }
       }) 
     })
 
     //withroot
   bot.action('withroot', ctx => {
     let withrootMessage = `
 1. Disable apk verification (look for an xposed module or similiar app to do this) https://forum.xda-developers.com/apps/magisk/module-smali-patcher-0-7-t3680053 works for Android < 10
 2. Download SAI from the playstore: https://play.google.com/store/apps/details?id=com.aefyr.sai
 3. Enable root mode in SAI
 4. Select the vanced .apks file you downloaded (it's in your Downloads folder)
 5. Click install`;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, withrootMessage,
       {
         reply_markup: {
           inline_keyboard: [    
             [
               { text: "back to vanced", callback_data: 'vanced' }
             ]
           ]
         }
       }) 
     })
 
     
 
   //modif
      
   bot.action('modif', ctx => {    
   let modifMessage = `μερικές χρήσιμα mod παραμετροποιησης `;               
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, modifMessage,
     {
       reply_markup: {
         inline_keyboard: [
           [
             { text: "universal gsm doze", url: 'https://t.me/GLdppc' },
             { text: "miui debloater", url: 'http://forum.xda-developers.com/apps/magisk/magisk-miui-debloater-t3821971' },
             { text: "oem live walls",  callback_data: 'modmagic' }
           ],            
           [
             { text: "pixel 4 live walls",  url: 'http://t.me/hellasmobiles/16969' },
             { text: "pixel 4 themes", url: 'http://t.me/hellasmobiles/16970' },
             { text: "pixel 4 live captions", url: 'http://t.me/hellasmobiles/30253' }            
           ],
           [
             { text: "dual boot a/b devices",  callback_data: 'dboot' },
             { text: "Frp remover", callback_data: 'frp' },
             { text: "Twrp install script for pyxis", url: 'http://t.me/hellasmobiles/96268' }
           ],
           [
             { text: "Accent colours ", url: 'http://forum.xda-developers.com/android/apps-games/app-magisk-module-qacc-custom-accent-t4011747' },
             { text: "Payload extractorr", callback_data: 'extrcktorr' },
             { text: "Benchkit", callback_data: 'Benchkit' }
           ],
           [
             { text: "Magisk", callback_data: 'Magisk' },            
             { text: "Windows customisation collection", callback_data: 'windcust' }
           ], 
           [
             { text: "quick switch recents provider", callback_data: 'quickswitch' },
             { text: "shady mods (launcher ports με recents support)", callback_data: 'shady' }            
           ], 
           [
             { text: "Miui 12 earth, Mars live wallpaper (no root)", url: 'https://t.me/hellasmobiles/145683' }
           ], 
           [
             { text: "Modules σχετικά με τον ήχο", callback_data: 'soundmods' }
           ], 
           [
             { text: "Back to Menu", callback_data: 'memo' }
           ],
           ]
         
       }
     })
   
   })
   
   //modmagic
   bot.action('modmagic', ctx => {
   let modmagicMessage = `συλογη απο live wallpapers διαφορων OEM (one plus , google ,lg , summy etc)`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, modmagicMessage,
   {
   reply_markup: {
     inline_keyboard: [   
       [
         { text: "telegram group", url: 'https://t.me/ModuleMagic' }
       ],
       [
         { text: "Back to modules", callback_data: 'modif' }
       ]
     ]
   }
   }) 
   })
   
   //2boot
   bot.action('dboot', ctx => {
   let dbootMessage = `
   χρήση δύο διαφορετικών ROM , μια σε κάθε σλότ σε συσκευες με Α/Β partitions , 
   δημιουργώντας ξεχωριστά data partition (o χωρος οπου σωζουν οι εφαρμογες τα δεδομενα τους) για την καθε μία )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, dbootMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "XDA thread", url: 'http://forum.xda-developers.com/android/software-hacking/mod-simple-b-multiboot-t3999391' }
         ],
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //extrcktorr
   bot.action('extrcktorr', ctx => {
   let extrcktorrMessage = `
   εργαλειο για αποσυμπιεση των αρχειων system.img EXT4, NEW.DAT, NEW . DAT . BR
   and PAYLOAD.BIN στα οποια ερχονται πακεταρισμενες στις μερες μας οι ρομ . )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, extrcktorrMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "windows", url: 'http://forum.xda-developers.com/chef-central/android/tool-s-r-v1-0-simple-unpack-repack-t3957631' }
         ],
         [
           { text: "linux", url: 'http://forum.xda-developers.com/android/software-hacking/how-to-conver-lollipop-dat-files-to-t2978952' }
         ],
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   
   //frp
   bot.action('frp', ctx => {
   let frpMessage = `
   ενας πολυ απλος τροπος για απενεργοποηση του Factory Reset Protection (FRP) password μεσω της χρησης taptalk του vision settings )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, frpMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "how to", url: 'http://www.youtube.com/watch?v=BWE5ADjjPV0&app=desktop' }
         ],       
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //Benchkit
   bot.action('Benchkit', ctx => {
   let BenchkitMessage = `
   A developer-centric toolkit module for Android to facilitate in-depth profiling and benchmarking.
   Περιλαμβάνει Command-line utilities Καθώς και 3 Android apps συμπεριλαμβανομενου του ui bench )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, BenchkitMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "download", url: 'http://github.com/Magisk-Modules-Repo/benchkit/releases/download/v2.0.0/benchkit-v2.0.0.zip' }
         ],       
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //Magisk
   bot.action('Magisk', ctx => {
   let MagiskMessage = `Root`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, MagiskMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "canary", url: 'https://github.com/topjohnwu/magisk_files/blob/canary/magisk-release.zip' },
           { text: "canary manager", url: 'https://github.com/topjohnwu/magisk_files/blob/canary/app-release.apk' },
           { text: "stable", url: 'http://github.com/topjohnwu/Magisk/releases' }
         ],     
         [
           { text: "root methods", callback_data: 'rootmeth' }
         ],  
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //Magisk rootmeth
   bot.action('rootmeth', ctx => {
   let rootmethMessage = `
   Οδηγίες εγκατάστασης magisk όταν υπάρχει πρόβλημα.
   1. Κάνουμε extract από το zip της ΡΟΜ που έχουμε εγκαταστήσει το αρχείο boot.img.
   2. Από τον magisk manager επιλέγουμε "Install" και ξαναπαταμε πάλι "install".
   Από το παράθυρο με τις επιλογές διαλέγουμε "Select and Patch a file".
   3. Πάμε στον κατάλογο που βάλαμε το αρχείο boot.img και περιμένουμε να τελειώσει η διαδικασία. Όταν τελειώσει μας λέει σε ποιο φάκελο έβαλε το πατσαρισμενο magisk-patched.img.
   4. Κάνουμε επανεκκίνηση σε TWRP και φλασαρουμε το πατσαρισμενο αρχείο στο boot partition.
   5. Διαφορετικά αν για καποιο λ'ογο δεν εχουμε twrp φλασάρουμε το ρουταρισμενο Ιmage απο fastboot 
   <<<  fastboot flash boot boot.img   >>> 
   για Α/Β
   <<<  fastboot flash boot_a(ή _Β) boot.img  >>>
   `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, rootmethMessage,
   {
     reply_markup: {
       inline_keyboard: [ 
         [
           { text: "Back to magisk", callback_data: 'Magisk' }
         ]
       ]
     }
   }) 
   })
   
   //windcust
   bot.action('windcust', ctx => {
   let windcustMessage = `
   Μια συλλογη κυριως με χρησιμα εργαλεια για το πως να κανετε πιο ομορφα τα windows σας (custom themes, icons, cursors κτλ) Το rar αρχειο περιεχει ενα txt με καποιες βασικες οδηγιες που σας εχω γραψει.Συντομα ελπιζω να ερθει και βιντεακι για πιο αναλυτικα
   Προσοχη παντοτε με το τι περναμε ,διαβαζουμε και ψαχνουμε τι κανει το καθενα.αν δεν ημαστε σιγουροι ρωταμε και ψαχνουνε και περνουμε ενα backup
   Kwstpap🇬🇷)`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, windcustMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "download", url: 'https://t.me/hellasmobiles/112166' }
         ],       
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //quickswitch
   bot.action('quickswitch', ctx => {
   let quickswitchMessage = `
   Μια συλλογη κυριως με χρησιμα εργαλεια για το πως να κανετε πιο ομορφα τα windows σας (custom themes, icons, cursors κτλ) Το rar αρχειο περιεχει ενα txt με καποιες βασικες οδηγιες που σας εχω γραψει.Συντομα ελπιζω να ερθει και βιντεακι για πιο αναλυτικα
   Προσοχη παντοτε με το τι περναμε ,διαβαζουμε και ψαχνουμε τι κανει το καθενα.αν δεν ημαστε σιγουροι ρωταμε και ψαχνουνε και περνουμε ενα backup
   Kwstpap🇬🇷)`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, quickswitchMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "quickswitch releases", url: 'https://t.me/QuickstepSwitcherReleases' },
           { text: "quickswitch group", url: 'https://t.me/QuickstepSwitcherSupport' }
         ],      
         [
           { text: "lawnchair releases", url: 'https://t.me/lawnchairci' },
           { text: "OEM launchers ", url: 'https://t.me/oemlaunchers' }
         ],          
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //shady
   bot.action('shady', ctx => {
   let shadyMessage = `
   Systemlessly install various launchers on your device using Magisk with full Android 10 recents UI support)`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, shadyMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "τι ειναι", callback_data: 'whatsit' },
           { text: "λιστα", callback_data: 'list' },
           { text: "download", url: 'https://bit.ly/3acuJCc' }
         ],
         [
           { text: "πως κανουμε εγκατασταση", callback_data: 'howto' }             
         ],     
         [
           { text: "group", url: 'https://t.me/shady_mods' },
           { text: "channel", url: 'https://t.me/shady_mods_releases' }          
         ],     
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //shady whatsit
   bot.action('whatsit', ctx => {
   let whatsitMessage = `
   These are Magisk modules which let you install and use the various launchers 
   as the default launcher without any additional files, mods, etc. 
   These provide full Android 10 recents UI support.`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, whatsitMessage,
   {
     reply_markup: {
       inline_keyboard: [    
         [
           { text: "Back to shady", callback_data: 'shady' }
         ]
       ]
     }
   }) 
   })
   
   //shady list
   bot.action('list', ctx => {
   let listMessage = `
   Systemless Lawnchair Mod:
   Install this module to replace your stock launcher with Lawnchair by the Lawnchair Team. Your stock launcher is restored when you remove this mod.
   Systemless One UI Home Mod:
   Install this module to replace your stock launcher with Samsung's One UI Home port by paphonb. Your stock launcher is restored when you remove this mod.
   Systemless OnePlus Launcher - Discover Mod:
   Install this module to replace your stock launcher with OnePlus Launcher port by SKULSHADY. Your stock launcher is restored when you remove this mod.
   Systemless OnePlus Launcher - Shelf Mod:
   Install this module to replace your stock launcher with OnePlus Launcher port by SKULSHADY. Your stock launcher is restored when you remove this mod.
   Systemless Pixel Launcher Mod:
   Install this module to replace your stock launcher with Pixel Launcher. Your stock launcher is restored when you remove this mod.
   Systemless OnePlus Additions:
   These are some cool things that provide additional features for your launcher.
   
   Contents:
   • OnePlus 8 Pro Live & Static Wallpapers
   • OnePlus Homescreen Widgets
   • OnePlus Icon Packs
   • OnePlus Weather App`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, listMessage,
   {
     reply_markup: {
       inline_keyboard: [    
         [
           { text: "Back to shady", callback_data: 'shady' }
         ]
       ]
     }
   }) 
   })
   
   //shady howto
   bot.action('howto', ctx => {
   let howtoMessage = `
   • Uninstall any 3rd party launcher
   • Remove any launcher related mod
     (eg. QuickSwitch)
   • Download the mod you'd like to use
     (Install only one launcher at any given point)
   • Flash it in Magisk manager
   • Reboot and enjoy`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, howtoMessage,
   {
     reply_markup: {
       inline_keyboard: [    
         [
           { text: "Back to shady", callback_data: 'shady' }
         ]
       ]
     }
   }) 
   })
   
   //soundmods
   bot.action('soundmods', ctx => {
   let soundmodsMessage = `mods sχετικα με τον ήχο`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, soundmodsMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "ainur", url: 'http://ainuraudio.ru/' },
           { text: "Sauron", callback_data: 'Sauron' },
           { text: "Nasril", callback_data: 'Nasril' }
         ],
         [
           { text: "Viper for Android", url: 'http://forum.xda-developers.com/android/apps-games/app-viper4android-fx-2-6-0-0-t3774651' },
           { text: "James dsp", url: 'http://forum.xda-developers.com/android/apps-games/app-reformed-dsp-manager-t3607970' },
           { text: "Qualcomm aqstic", callback_data: 'aqstic' }
         ],
         [
           { text: "Back to modules", callback_data: 'modif' }
         ]
       ]
     }
   }) 
   })
   
   //sounds souron
   bot.action('Sauron', ctx => {
   let SauronMessage = `applies suitable system patches, determinined on it’s own to deliver an extreme level of sound quality for your music.`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, SauronMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "download", url: 'http://t.me/magiskmod_dl/2422' }
         ], 
         [
           { text: "Back to sound mods", callback_data: 'soundmods' }
         ]
       ]
     }
   }) 
   })
   
     //sounds Nasril
   bot.action('Nasril', ctx => {
   let NasrilMessage = `
   its aimed towards pure sound rendered via internal hardware \(audio DACs and Codec’s\) 
   by cleaning sound tract from OEM & android sound effects as much as possible.`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, NasrilMessage,
   {
     reply_markup: {
       inline_keyboard: [    
         [
           { text: "download", url: 'http://ainuraudio.ru/wp-content/uploads/2019/08/AINUR-NARSIL-MK-I-12.08.zip' }
         ], 
         [
           { text: "Back to sound mods", callback_data: 'soundmods' }
         ]
       ]
     }
   }) 
   })
   
     //sounds aqstic
   bot.action('aqstic', ctx => {
   let aqsticMessage = `
   audio platform includes audio codecs, DACs, power amplifiers, 
   and a suite of advanced audio and voice software technologies 
   that are engineered to work together to provide the 
   best Hi-Fi audio quality, advanced noise reduction, and voice UI experiences`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, aqsticMessage,
   {
     reply_markup: {
       inline_keyboard: [    
         [
           { text: "more info", url: 'http://qualcomm.com/news/onq/2017/06/19/qualcomm-aqstic-and-snapdragon-835-take-immersive-audio-next-level' }
         ], 
         [
           { text: "Back to sound mods", callback_data: 'soundmods' }
         ]
       ]
     }
   }) 
   })
   
   //gapps
      
   bot.action('gapps', ctx => {    
   let gappsMessage = `διάφορα πακέτα gapps`;               
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, gappsMessage,
     {
       reply_markup: {
         inline_keyboard: [
           [
             { text: "open gapps", callback_data: 'opengapps' },
             { text: "nik gapps", callback_data: 'nikgapps' }
           ],            
           [
             { text: "bit gapps", callback_data: 'bitgapps' },
             { text: "flame gapps", callback_data: 'flamegapps' }          
           ],
           [
             { text: "Back to Menu", callback_data: 'memo' }
           ]
           ]
         
       }
     })
   
   })
   
   //opengapps
   bot.action('opengapps', ctx => {
   let opengappsMessage = `open gapps`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, opengappsMessage,
   {
   reply_markup: {
     inline_keyboard: [   
       [
         { text: "download", url: 'https://opengapps.org/' },
         { text: "beta", url: 'http://sourceforge.net/projects/opengapps/files/arm64/test/' },
         { text: "version info",  url: 'https://netcologne.dl.sourceforge.net/project/opengapps/arm64/20200506/open_gapps-arm64-10.0-micro-20200506.versionlog.txt' }
       ],
       [
         { text: "Back to gapps", callback_data: 'gapps' }
       ]
     ]
   }
   }) 
   })
   
   //Nik gapps
   bot.action('nikgapps', ctx => {
   let nikgappsMessage = `nik gapps`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, nikgappsMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "download", url: 'http://sourceforge.net/projects/nikgapps/files/Releases/' },
           { text: "group", url: 'http://sourceforge.net/projects/opengapps/files/arm64/test/' }
         ],
         [
           { text: "Nik gapps packages and add-ons explained",  url: 'http://nikgapps.github.io/downloads.html' }
         ],
         [
           { text: "Back to gapps", callback_data: 'gapps' }
         ]
       ]
     }
   }) 
   })
   
   //Bit gapps
   bot.action('bitgapps', ctx => {
   let bitgappsMessage = `bit gapps`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, bitgappsMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "channel", url: 'http://t.me/bitgapps_downloads_official' },
           { text: "group", url: 'http://t.me/bitgapps_official' }
         ],
         [
           { text: "Back to gapps", callback_data: 'gapps' }
         ]
       ]
     }
   }) 
   })
   
    //flame gapps
   bot.action('flamegapps', ctx => {
   let flamegappsMessage = `flame gapps`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, flamegappsMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "download", url: 'https://sourceforge.net/projects/flamegapps/files/arm64/' },
           { text: "channel", url: 'https://t.me/FlameGApps' }
         ],
         [
           { text: "group", url: 'https://t.me/FlameGAppsSupport' },
           { text: "thread", url: 'https://forum.xda-developers.com/android/software/gapps-flamegapps-android-t4020917' }
         ],
         [
           { text: "Back to gapps", callback_data: 'gapps' }
         ]
       ]
     }
   }) 
   })
   
   //general
      
   bot.action('general', ctx => {    
   let generalMessage = `Γενικά περί modding και Android`;               
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, generalMessage,
     {
       reply_markup: {
         inline_keyboard: [
           [
             { text: "Χρήση και download links για Platform tools", callback_data: 'platform' }
           ], 
           [
             { text: "ορισμοι", callback_data: 'means' }
           ],            
           [
             { text: "Checksum file  Integrity", callback_data: 'Checksum' },
             { text: "χρεώσεις πενταψήφιων", callback_data: 'five' }          
           ],
           [
             { text: "Σχετικά με το Raspberry", callback_data: 'berry' },
             { text: "λιστα συσκευων με A & A/B partition scheme", url: 'https://github.com/phhusson/treble_experimentations/wiki#device-list' }          
           ],
           [
             { text: "συντομη περιγραφη κατηγοριων λογισμικου Free/Open Source/Foss", url: 'https://t.me/hellasmobiles/122535' },       
           ],
           [
             { text: "θεματα σχετικα με τους κερνελ", callback_data: 'kernel' }          
           ],
           [
             { text: "Back to Menu", callback_data: 'memo' }
           ]
           ]
         
       }
     })
   
   })
   
   //platform
   bot.action('platform', ctx => {
   let platformMessage = `Απαραίτητα αρχεία για όλες τις πλατφόρμες ώστε να μπορέσεις να τρέξεις adb και fastboot`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, platformMessage,
   {
   reply_markup: {
     inline_keyboard: [   
       [
         { text: "A random how to guide", url: 'http://it4nextgen.com/android-sdk-platform-tools-adb-fastboot/' },
         { text: "platform tools linux", url: 'http://dl.google.com/android/repository/platform-tools-latest-linux.zip'},
         { text: "platform tools windows",  url: 'http://dl.google.com/android/repository/platform-tools-latest-windows.zip'}
       ],
       [
         { text: "platform tools windows",  url: 'http://dl.google.com/android/repository/platform-tools-latest-windows.zip'},
         { text: "platform tools m@c",  url: 'http://dl.google.com/android/repository/platform-tools-latest-darwin.zip'},
       ],
       [
         { text: "Back to general", callback_data: 'general' }
       ]
     ]
   }
   }) 
   })
   
   //means
   bot.action('means', ctx => {
   let meansMessage = `αρθρα απο το source.android . πηγη για οτι αφορα τη λειτουργια του android`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, meansMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "a/b updates", url: 'https://source.android.com/devices/tech/ota/ab' },
           { text: "bootloader", url: 'https://source.android.com/devices/bootloader/unlock-trusty'}
         ],
         [
           { text: "rendering",  callback_data: 'rendering'},
           { text: "project mainline",  url: 'https://android-developers.googleblog.com/2019/05/fresher-os-with-projects-treble-and-mainline.html'}
         ],
         [
           { text: "security patch",  url: 'https://source.android.com/security/bulletin'},
           { text: "generic system image (gsi)",  url: 'https://source.android.com/setup/build/gsii'},
         ],
         [
           { text: "Back to general", callback_data: 'general' }
         ]
       ]
     }
   }) 
   })
   
   //rendering
   bot.action('rendering', ctx => {
   let renderingMessage = `android rendering`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, renderingMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "τι ειναι", url: 'https://developer.android.com/topic/performance/rendering' },
           { text: "gpu rendering", url: 'https://developer.android.com/topic/performance/rendering/inspect-gpu-rendering'}
         ],
         [
           { text: "slow rendering",  url: 'https://developer.android.com/topic/performance/vitals/render'}
         ],
         [
           { text: "Back to ορισμοι", callback_data: 'means' }
         ]
       ]
     }
   }) 
   })
   
   
   
   //Checksum
   bot.action('Checksum', ctx => {
   let ChecksumMessage = `
   A checksum is a small-sized datum derived from a block of digital data f
   or the purpose of detecting errors that may have been introduced during 
   its transmission or storage.
   Aν καταβάσεις ενα σημαντικό αρχείο απο το web , μια ρομ ας πούμε μπορείς να το 
   χρησιμοποιήσεις για να επαληθεύσεις το checksum του αρχείου που κατέβασες με το 
   αρχικό στο web ώστε να είσαι σίγουρος για την ακεραιότητα του , οτι κατέβηκε ολόκληρο , 
   δεν λείπει ούτε ένα μπιτ και δεν ειναι κατεστραμένο. Υπάρχουν μικρές εφαρμογές στο store 
   που κάνουν αποκλειστικά αυτό, εμφανίζουν δηλαδή το checksum των αρχείων σε μορφή md5 , sh1 
   ώστε να τα συγκρίνεις με αυτό που δίνει ο δημιουργός τους αλλά οι καλοί fine manager έχουν 
   την λειτουργία ενσωματώμενη στις δυνατότητες τους.o mixplorer πχ εχει τη επιλογη 
   με long tap>propertiem να δεις  το checksum του αρχειου`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, ChecksumMessage,
   {
     reply_markup: {
       inline_keyboard: [  
         [
           { text: "Back to general", callback_data: 'general' }
         ]
       ]
     }
   }) 
   })
   
   //five
   bot.action('five', ctx => {
   let fiveMessage = `.`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, fiveMessage,
   {
     reply_markup: {
       inline_keyboard: [  
         [
           { text: "ΧΡΕΩΣΕΙΣ 5ΨΗΦΙΩΝ", url: 'https://t.me/hellasmobiles/82676' }
         ],  
         [
           { text: "προτυπο κειμενο καταγγελιας για χρεωσεις απο πενταψυφια", url: 'https://t.me/hellasmobiles/82675' }
         ],
         [
           { text: "Back to general", callback_data: 'general' }
         ]
       ]
     }
   }) 
   })
   
    //berry
   bot.action('berry', ctx => {
   let berryMessage = `Οδηγος για Raspberry (many thanks to @kwstpap & @epp82 για τα links και προτάσεις τους)`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, berryMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "Βασισμένο σε kodi", url: 'https://t.me/hellasmobiles/90476' },
           { text: "οδηγοι", url: 'https://pimylifeup.com/category/guides/' },
           { text: "Πολλαπλά distro στην ίδια sd", url: 'https://www.berryterminal.com/doku.php/berryboot' }
         ],
         [
           { text: "Back to general", callback_data: 'general' }
         ]
       ]
     }
   }) 
   })
   
   
   //kernel
   bot.action('kernel', ctx => {
   let kernelMessage = `Εξήγηση των βασικων λειτουργιών του kernel)`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, kernelMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "οι παραμετροι του shedutil governor", callback_data: 'sched' }
         ], 
           [
             { text: "οι παραμετροι της gpu", callback_data: 'gpu' }
           ],
         [
           { text: "Back to general", callback_data: 'general' }
         ]
       ]
     }
   }) 
   })
   
   //sched
   bot.action('sched', ctx => {
   let schedMessage = `
   οι παραμετροι rate_limit_us ειναι χρονοι σε μικροδευτερολεπτα και ελεγχουν καθε ποτε 
   ο schedutil μπορει να αλλαζει τη συχνοτητα λειτουργουν δηλαδη ως ενας μηχανισμος throttling .
   
   i/o wait ειναι η κατασταση αναμονης , το idle state κατα το οποιο δεν υπαρχουν ενεργα i/o requests . 
   το iowait boost αν ειναι ενεργο μεταπιπτει τη cpu στην μεγιστη συχνοτητα κατα το Ιdle state.
   Δεν χρειαζετε να ειναι ενεργο στη κινητα αφου μονο μπαταρια θα ετρωγε
   )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, schedMessage,
   {
     reply_markup: {
       inline_keyboard: [   
         [
           { text: "down rate limit", callback_data: 'dwnrate' }
         ], 
           [
             { text: "uprate limit", callback_data: 'uprate' }
           ],
         [
           { text: "Back to kernel", callback_data: 'kernel' }
         ]
       ]
     }
   }) 
   })
   
   //dwnrate
   bot.action('dwnrate', ctx => {
   let dwnrateMessage = `
   Εάν το schedutil αποφασίσει να μειωσει τη συχνότητα, αυτό ελέγχει οτι τουλαχιστον αυτος  
   ο χρονος θα εχει παρελθει απο το τελευταιο αιτημα για αλλαγή συχνότητας.
   ελεγχει δηλαδη ποση ωρα πρεπει να παραμεινει σε μια συχνοτητα πριν του επιτραπεί να παει σε μια χαμηλοτερη.
   )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, dwnrateMessage,
   {
     reply_markup: {
       inline_keyboard: [
         [
           { text: "Back to sched", callback_data: 'sched' }
         ]
       ]
     }
   }) 
   })
   
   //uprate
   bot.action('uprate', ctx => {
   let uprateMessage = `
   Εάν το schedutil αποφασίσει να αυξήσει τη συχνότητα, αυτό ελέγχει οτι τουλαχιστον αυτος  
   ο χρονος θα εχει παρελθει απο το τελευταιο αιτημα για αλλαγή συχνότητας.
   ελεγχει δηλαδη ποση ωρα πρεπει να παραμεινει σε μια συχνοτητα πριν του επιτραπεί να παει σε μια υψηλότερη.
   )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, uprateMessage,
   {
     reply_markup: {
       inline_keyboard: [
         [
           { text: "Back to sched", callback_data: 'sched' }
         ]
       ]
     }
   }) 
   })
   
   //gpu
   bot.action('gpu', ctx => {
   let gpuMessage = ` 
   graphics control uniτ 
   
   governor
   min/max freqs
   default pwrlevel
   
   ελαχιστη και μεγιστη συχνοτητα self explained
   )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, gpuMessage,
   {
     reply_markup: {
       inline_keyboard: [
         [
           { text: "gpu governors", callback_data: 'gpugov' }
         ],
         [
           { text: "gpu default power level", callback_data: 'gpudfpwr' }
         ],
         [
           { text: "Back to kernel", callback_data: 'kernel' }
         ]
       ]
     }
   }) 
   })
   
   //gpugov
   bot.action('gpugov', ctx => {
   let gpugovMessage = ` 
   Simple: An open-source alternative to Qualcomm's closed-sourced governors. Developed by Faux123, it is highly customisable which will allow more fine-grained control over how the GPU scales up and down.
   simple_ondemand: As the name implies, it is a simpler version of the CPU governor ondemand. simple_ondemand will ramp up the frequency when a load is detected. It has a good balance between performance and battery savings.
   msm-adreno-tz: The default GPU governor used by Qualcomm for their adreno GPUs. It is based on the ondemand governor but is biased towards performance, therefore it should give better performance in games but less battery life.
   Performance: As the name suggests, this keeps your GPU running at the max frequency. This is a governor if you want the best possible experience in games but you don't care about your battery life.
   Powersave: Like the CPU governor, this keeps your GPU running at the lowest possible frequency. Best battery life, extreme lag in games.
   Adreno Idler: It is an idling algorithm, an efficient workaround for msm-adreno-tz's overheads. Main goal is to lower the power consumptions while maintaining high-performance. Since msm-adreno-tz tends to *not* use the lowest frequency even on idle, Adreno idler replaces msm-adreno-tz's algorithm when it comes to calculating idle frequency(mostly by ondemand's method). The higher frequencies are not touched with this algorithm, so high-demanding games will (most likely) not suffer from worsened performance.
   Userspace: This governor basically allows the user is able to set a desired frequency for the GPU to run at.
   cpubw_hwmon: A hardware monitor based governor that attempts to determine bandwidth (BW) needed by CPU and other hardware. Because it samples bandwidth using polling intervals, it has been made to be biased towards performance to compensate for the possible slower response times during heavy loads.
   MSM Cpufreq: The MSM CPUfreq governor determines the CPU to DDR bandwidth vote based on the current CPU frequency of all the active CPUs. In other words, this governor scales based on CPU usage which could mean more performance.
   )`;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, gpugovMessage,
   {
     reply_markup: {
       inline_keyboard: [
         [
           { text: "Back to gpu", callback_data: 'gpu' }
         ]
       ]
     }
   }) 
   })
   
   //gpudfpwr
   bot.action('gpudfpwr', ctx => {
   let gpudfpwrMessage = ` 
   default power level .
   ενας αριθμος με βαση τις διαθεσιμες συχνοτητες gpu . 
   τα power level οριζοντε στο qcom,gpu-pwrlevels 
   kαθε ενα περιλαμβανει ενα σετ απο παραμετρους οπως συχνοτητα,τασεις,bandwidth,
   μηδεν ειναι η υψιλοτερη ,  ειναι για performance με υψηλες συχνοτητες κτλ και οσο ανεβαινουμε ειναι πιο βattery friendly
   `;
   ctx.deleteMessage();
   bot.telegram.sendMessage(ctx.chat.id, gpudfpwrMessage,
   {
     reply_markup: {
       inline_keyboard: [
         [
           { text: "Back to gpu", callback_data: 'gpu' }
         ]
       ]
     }
   }) 
   })
   
   //userfullapps
   bot.action('userfullapps', ctx => {
     let userfullappsMessage = ` Χρήσιμες εφαρμογές `;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, userfullappsMessage,
     {
       reply_markup: {
         inline_keyboard: [
           [
             { text: "Deezloader music downloader", callback_data: 'deez' }
           ],
           [
             { text: "Back to Menu", callback_data: 'memo' }
           ]
         ]
       }
     }) 
     })
   
     //deez
   bot.action('deez', ctx => {
     let deezMessage = ` Deezloader music downloader `;
     ctx.deleteMessage();
     bot.telegram.sendMessage(ctx.chat.id, deezMessage,
     {
       reply_markup: {
         inline_keyboard: [
           [
             { text: "GitHub περιγραφες εκδόσεων, download links, telegram groups links, bot links", url: 'https://gist.github.com/duttaditya18/f366c7694fe50d7c69f8654579112da5' }
           ],
           [
             { text: "Deezloader mobile", url: 'https://t.me/deezloaderremixmobile' }
           ],
           [
             { text: "beta", url: 'https://t.me/deezloaderremixmobilebeta' }
           ],
           [
             { text: "Bot", url: 'https://t.me/MusicHuntersBot' }
           ],
           [
             { text: "Back to userfull apps", callback_data: 'userfullapps' }
           ]
         ]
       }
     }) 
     })
 
 }