System.register([],(function(e,a){"use strict";return{execute:function(){var a=e("languageName","eesti"),i=e("retryCheckEverySecond","Kontrolli {0} sekundilise vahega."),t=e("retriesDescription","Mitu korda tuleb kontrollida, mille järel märkida 'maas' ja saata välja teavitus."),s=e("ignoreTLSError","Eira TLS/SSL viga HTTPS veebisaitidel."),o=e("upsideDownModeDescription","Käitle teenuse saadavust rikkena, teenuse kättesaamatust töötavaks."),r=e("maxRedirectDescription","Suurim arv ümbersuunamisi, millele järgida. 0 ei luba ühtegi "),n=e("acceptedStatusCodesDescription","Vali välja HTTP koodid, mida arvestada kõlblikuks."),l=e("passwordNotMatchMsg","Salasõnad ei kattu."),u=e("notificationDescription","Teavitusteenuse kasutamiseks seo see seirega."),d=e("keywordDescription","Jälgi võtmesõna HTML või JSON vastustes. (tõstutundlik)"),p=e("pauseDashboardHome","Seisatud"),m=e("deleteMonitorMsg","Kas soovid eemaldada seire?"),k=e("deleteNotificationMsg","Kas soovid eemaldada selle teavitusteenuse kõikidelt seiretelt?"),v=e("resolverserverDescription","Cloudflare on vaikimisi pöördserver."),g=e("rrtypeDescription","Vali kirje tüüp, mida soovid jälgida."),c=e("pauseMonitorMsg","Kas soovid peatada seire?"),h=e("Settings","Seaded"),S=e("Dashboard","Töölaud"),b=e("Language","Keel"),T=e("Appearance","Välimus"),A=e("Theme","Teema"),D=e("General","Üldine"),M=e("Version","Versioon"),f=e("List","Nimekiri"),y=e("Add","Lisa"),P=e("Up","Töökorras"),N=e("Down","Rikkis"),w=e("Pending","Määramisel"),K=e("Unknown","Kahtlast"),L=e("Pause","Seiska"),E=e("Name","Nimi"),j=e("Status","Olek"),R=e("DateTime","Kuupäev"),C=e("Message","Tulemus"),H=e("Resume","Taasta"),F=e("Edit","Muuda"),I=e("Delete","Eemalda"),V=e("Current","Hetkeseisund"),U=e("Uptime","Eluiga"),O=e("day","päev | päeva"),x=e("hour","tund"),G=e("Response","Reaktsiooniaeg"),B=e("Ping","Ping"),J=e("Keyword","Võtmesõna"),W=e("URL","URL"),z=e("Hostname","Hostname"),Y=e("Port","Port"),Q=e("Retries","Korduskatsed"),q=e("Advanced","Rohkem"),X=e("Save","Salvesta"),Z=e("Notifications","Teavitused"),$=e("Light","hele"),_=e("Dark","tume"),ee=e("Auto","automaatne"),ae=e("Normal","tavaline"),ie=e("Bottom","all"),te=e("None","puudub"),se=e("Timezone","Ajatsoon"),oe=e("Logout","Logi välja"),re=e("Leave","Lahku"),ne=e("Confirm","Kinnita"),le=e("Yes","Jah"),ue=e("No","Ei"),de=e("Username","kasutajanimi"),pe=e("Password","parool"),me=e("Login","Logi sisse"),ke=e("Email","e-posti aadress"),ve=e("Test","Saada prooviteavitus"),ge=e("respTime","Reageerimisaeg (ms)"),ce=e("notAvailableShort","N/A"),he=e("enableDefaultNotificationDescription","Kõik järgnevalt lisatud seired kasutavad seda teavitusteenuset. Seiretelt võib teavitusteenuse ühekaupa eemaldada."),Se=e("clearEventsMsg","Kas soovid seire kõik sündmused kustutada?"),be=e("clearHeartbeatsMsg","Kas soovid seire kõik tuksed kustutada?"),Te=e("confirmClearStatisticsMsg","Kas soovid TERVE ajaloo kustutada?"),Ae=e("Export","Eksport"),De=e("Import","Import"),Me=e("Create","Loo konto"),fe=e("Events","Sündmused"),ye=e("Heartbeats","Tuksed"),Pe=e("backupDescription","Varunda kõik seired ja teavitused JSON faili."),Ne=e("backupDescription2","PS: Varukoopia EI sisalda seirete ajalugu ja sündmustikku."),we=e("backupDescription3","Varukoopiad sisaldavad teavitusteenusete pääsuvõtmeid."),Ke=e("alertNoFile","Palun lisa fail, mida importida."),Le=e("alertWrongFileType","Palun lisa JSON-formaadis fail."),Ee=e("twoFAVerifyLabel","2FA kinnitamiseks sisesta pääsukood"),je=e("tokenValidSettingsMsg","Kood õige. Akna võib sulgeda."),Re=e("confirmEnableTwoFAMsg","Kas soovid 2FA sisse lülitada?"),Ce=e("confirmDisableTwoFAMsg","Kas soovid 2FA välja lülitada?"),He=e("Active","kasutusel"),Fe=e("Inactive","seadistamata"),Ie=e("Token","kaksikautentimise kood"),Ve=e("importHandleDescription","'kombineeri' täiendab varukoopiast ja kirjutab üle samanimelised seireid ja teavitusteenused; 'lisa praegustele' jätab olemasolevad puutumata; 'asenda' kustutab ja asendab kõik seired ja teavitusteenused."),Ue=e("confirmImportMsg","Käkerdistest hoidumiseks lae enne taastamist alla uus varukoopia. Kas soovid taastada üles laetud?"),Oe=e("Overwrite","asenda"),xe=e("Options","Mestimisviis"),Ge=e("Tags","Sildid"),Be=e("color","värvus"),Je=e("Gray","hall"),We=e("Red","punane"),ze=e("Orange","oranž"),Ye=e("Green","roheline"),Qe=e("Blue","sinine"),qe=e("Indigo","indigo"),Xe=e("Purple","lilla"),Ze=e("Pink","roosa"),$e=e("statusPageNothing","Kippu ega kõppu; siia saab lisada seireid või -gruppe."),_e=e("checkEverySecond","Kontrolli peale tõrget {0} sekundilise vahega."),ea=e("telegram","Telegram"),aa=e("webhook","Webhook"),ia=e("smtp","elektronpost (SMTP)"),ta=e("discord","Discord"),sa=e("teams","Microsoft Teams"),oa=e("signal","Signal"),ra=e("gotify","Gotify"),na=e("slack","Slack"),la=e("pushover","Pushover"),ua=e("pushy","Pushy"),da=e("octopush","Octopush"),pa=e("promosms","PromoSMS"),ma=e("lunasea","LunaSea"),ka=e("apprise","Apprise (vahendab üle 65 teavitusteenust)"),va=e("pushbullet","Pushbullet"),ga=e("line","LINE"),ca=e("mattermost","Mattermost"),ha=e("alerta","Alerta"),Sa=e("alertaApiEndpoint","API otsik"),ba=e("alertaEnvironment","Keskkond"),Ta=e("alertaApiKey","API võti"),Aa=e("alertaAlertState","Häireseisund"),Da=e("alertaRecoverState","Taasta algolek");e("default",{languageName:a,retryCheckEverySecond:i,retriesDescription:t,ignoreTLSError:s,upsideDownModeDescription:o,maxRedirectDescription:r,acceptedStatusCodesDescription:n,passwordNotMatchMsg:l,notificationDescription:u,keywordDescription:d,pauseDashboardHome:p,deleteMonitorMsg:m,deleteNotificationMsg:k,resolverserverDescription:v,rrtypeDescription:g,pauseMonitorMsg:c,Settings:h,"Status Page":"Ülevaade","Status Pages":"Ülevaated",Dashboard:S,"New Update":"Uuem tarkvara versioon on saadaval.",Language:b,Appearance:T,Theme:A,General:D,Version:M,"Check Update On GitHub":"Otsi uuendusi GitHub'ist",List:f,Add:y,"Add New Monitor":"Lisa seire","Add a monitor":"Lisa seire","Quick Stats":"Ülevaade",Up:P,Down:N,Pending:w,Unknown:K,Pause:L,Name:E,Status:j,DateTime:R,Message:C,"No important events":"Märkimisväärsed juhtumid puuduvad.",Resume:H,Edit:F,Delete:I,Current:V,Uptime:U,"Cert Exp.":"Sert. aegumine",day:O,"-day":"-päev",hour:x,"-hour":"-tund",Response:G,Ping:B,"Monitor Type":"Seire tüüp",Keyword:J,"Friendly Name":"Sõbralik nimi",URL:W,Hostname:z,Port:Y,"Heartbeat Interval":"Tukse sagedus",Retries:Q,Advanced:q,"Upside Down Mode":"Tagurpidi seire","Max. Redirects":"Max. ümbersuunamine","Accepted Status Codes":"Kõlblikud HTTP koodid",Save:X,Notifications:Z,"Not available, please setup.":"Ühtegi teavitusteenust pole saadaval.","Setup Notification":"Lisa teavitusteenus",Light:$,Dark:_,Auto:ee,"Theme - Heartbeat Bar":"Teemasäte — tuksete riba",Normal:ae,Bottom:ie,None:te,Timezone:se,"Search Engine Visibility":"Otsimootorite ligipääs","Allow indexing":"Luba indekseerimine","Discourage search engines from indexing site":"Keela selle saidi indekseerimine otsimootorite poolt","Change Password":"Muuda parooli","Current Password":"praegune parool","New Password":"uus parool","Repeat New Password":"korda salasõna","Update Password":"Uuenda salasõna","Disable Auth":"Lülita autentimine välja","Enable Auth":"Lülita autentimine sisse","disableauth.message1":"Kas soovid <strong>lülitada autentimise välja</strong>?","disableauth.message2":"Kastuamiseks <strong>välise autentimispakkujaga</strong>, näiteks Cloudflare Access.","Please use this option carefully!":"Palun kasuta vastutustundlikult.",Logout:oe,Leave:re,"I understand, please disable":"Olen tutvunud riskidega, lülita välja",Confirm:ne,Yes:le,No:ue,Username:de,Password:pe,"Remember me":"Mäleta mind",Login:me,"No Monitors, please":"Seired puuduvad.","add one":"Lisa esimene","Notification Type":"Teavituse tüüp",Email:ke,Test:ve,"Certificate Info":"Sertifikaadi teave","Resolver Server":"Server, mis vastab DNS päringutele.","Resource Record Type":"DNS kirje tüüp","Last Result":"Viimane","Create your admin account":"Admininstraatori konto loomine","Repeat Password":"korda salasõna",respTime:ge,notAvailableShort:ce,enableDefaultNotificationDescription:he,clearEventsMsg:Se,clearHeartbeatsMsg:be,confirmClearStatisticsMsg:Te,Export:Ae,Import:De,"Default enabled":"Kasuta vaikimisi","Apply on all existing monitors":"Kõik praegused seired hakkavad kasutama seda teavitusteenust",Create:Me,"Clear Data":"Eemalda andmed",Events:fe,Heartbeats:ye,"Auto Get":"Hangi automaatselt",backupDescription:Pe,backupDescription2:Ne,backupDescription3:we,alertNoFile:Ke,alertWrongFileType:Le,twoFAVerifyLabel:Ee,tokenValidSettingsMsg:je,confirmEnableTwoFAMsg:Re,confirmDisableTwoFAMsg:Ce,"Verify Token":"Kontrolli","Setup 2FA":"Kaksikautentimise seadistamine","Enable 2FA":"Seadista 2FA","Disable 2FA":"Lülita 2FA välja","2FA Settings":"2FA seaded","Two Factor Authentication":"Kaksikautentimine",Active:He,Inactive:Fe,Token:Ie,"Show URI":"Näita URId","Clear all statistics":"Tühjenda ajalugu",importHandleDescription:Ve,confirmImportMsg:Ue,"Heartbeat Retry Interval":"Korduskatsete intervall","Import Backup":"Varukoopia importimine","Export Backup":"Varukoopia eksportimine","Skip existing":"lisa praegustele",Overwrite:Oe,Options:xe,"Keep both":"kombineeri",Tags:Ge,"Add New below or Select...":"Leia või lisa all uus…","Tag with this name already exist.":"Selle nimega silt on juba olemas.","Tag with this value already exist.":"Selle väärtusega silt on juba olemas.",color:Be,"value (optional)":"väärtus (fakultatiivne)",Gray:Je,Red:We,Orange:ze,Green:Ye,Blue:Qe,Indigo:qe,Purple:Xe,Pink:Ze,"Search...":"Otsi…","Avg. Ping":"Keskmine ping","Avg. Response":"Keskmine reaktsiooniaeg","Entry Page":"Avaleht",statusPageNothing:$e,"No Services":"Teenused puuduvad.","All Systems Operational":"Kõik töökorras","Partially Degraded Service":"Teenuse töö osaliselt häiritud","Degraded Service":"Teenuse töö häiritud","Add Group":"Lisa grupp","Edit Status Page":"Muuda lehte","Go to Dashboard":"Töölauale",checkEverySecond:_e,telegram:ea,webhook:aa,smtp:ia,discord:ta,teams:sa,signal:oa,gotify:ra,slack:na,"rocket.chat":"Rocket.chat",pushover:la,pushy:ua,octopush:da,promosms:pa,lunasea:ma,apprise:ka,pushbullet:va,line:ga,mattermost:ca,alerta:ha,alertaApiEndpoint:Sa,alertaEnvironment:ba,alertaApiKey:Ta,alertaAlertState:Aa,alertaRecoverState:Da})}}}));
