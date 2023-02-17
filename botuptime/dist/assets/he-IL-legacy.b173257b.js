System.register([],(function(e,o){"use strict";return{execute:function(){var o=e("languageName","עברית"),t=e("checkEverySecond","בדוק כל {0} שניות"),a=e("retryCheckEverySecond","נסה שוב כל {0} שניות"),s=e("resendEveryXTimes","התראה שוב כל {0} פעמים"),n=e("resendDisabled","השליחה מחדש מושבתת"),i=e("retriesDescription","מקסימום ניסיונות חוזרים לפני שהשירות יסומן כלא פעיל ונשלחת התראה"),r=e("ignoreTLSError","התעלם משגיאת TLS/SSL עבור אתרי HTTPS"),c=e("upsideDownModeDescription","הפוך את הסטטוס על הפוך. אם ניתן להגיע לשירות, הוא לא פעיל."),l=e("maxRedirectDescription","המספר המרבי של הפניות מחדש לעקוב. הגדר ל-0 כדי להשבית הפניות מחדש."),d=e("enableGRPCTls","אפשר לשלוח בקשת gRPC עם חיבור TLS"),u=e("grpcMethodDescription","שם השיטה מומר לפורמט cammelCase כגון sayHello, check וכו."),p=e("acceptedStatusCodesDescription","בחר קודי סטטוס שנחשבים לתגובה מוצלחת."),m=e("Maintenance","תחזוקה"),g=e("statusMaintenance","תחזוקה"),h=e("recurringIntervalMessage","רוץ פעם ביום | הפעל אחת ל-{0} ימים"),S=e("affectedMonitorsDescription","בחר מוניטורים שמושפעים מהתחזוקה הנוכחית"),y=e("affectedStatusPages","הצג הודעת תחזוקה זו בדפי סטטוס שנבחרו"),D=e("atLeastOneMonitor","בחר לפחות מוניטור אחד מושפע"),T=e("passwordNotMatchMsg","הסיסמאות לא תואמות"),k=e("notificationDescription","יש להקצות התראות למוניטור כדי שהן יעבדו."),P=e("keywordDescription","חפש מילת מפתח בתגובת HTML או JSON רגילה. החיפוש תלוי רישיות."),A=e("pauseDashboardHome","עצור"),b=e("deleteMonitorMsg","האם אתה בטוח שברצונך למחוק את המוניטור הזה?"),M=e("deleteMaintenanceMsg","האם אתה בטוח שברצונך למחוק את התחזוקה הזו?"),w=e("deleteNotificationMsg","האם אתה בטוח שברצונך למחוק את ההודעה הזו עבור כל מוניטרים?"),f=e("dnsPortDescription","יציאת שרת DNS. ברירת המחדל היא 53. אתה יכול לשנות את היציאה בכל עת."),v=e("resolverserverDescription","Cloudflare הוא שרת ברירת המחדל. אתה יכול לשנות את שרת הפותר בכל עת."),C=e("rrtypeDescription","בחר את סוג ה-RR שברצונך לפקח עליו"),I=e("pauseMonitorMsg","האם אתה בטוח רוצה להשהות?"),R=e("enableDefaultNotificationDescription","הודעה זו תופעל כברירת מחדל עבור מוניטרים חדשים. אתה עדיין יכול להשבית את ההודעה בנפרד עבור כל מוניטור."),N=e("clearEventsMsg","האם אתה בטוח שברצונך למחוק את כל האירועים עבור המוניטור הזה?"),L=e("clearHeartbeatsMsg","האם אתה בטוח שברצונך למחוק את כל פעימות הלב עבור המוניטור הזה?"),E=e("confirmClearStatisticsMsg","האם אתה בטוח שברצונך למחוק את כל הנתונים הסטטיסטיים?"),U=e("importHandleDescription","בחר 'דלג על קיים' אם ברצונך לדלג על כל מוניטור או התראה באותו שם. 'החלף' ימחק כל מוניטור והתראה קיימים."),H=e("confirmImportMsg","האם אתה בטוח שברצונך לייבא את הגיבוי? אנא ודא שבחרת באפשרות הייבוא הנכונה."),x=e("twoFAVerifyLabel","אנא הזן את האסימון שלך כדי לאמת מערכת אדוש:"),G=e("tokenValidSettingsMsg","האסימון תקף! כעת אתה יכול לשמור את הגדרות האדוש."),F=e("confirmEnableTwoFAMsg","האם אתה בטוח שברצונך להפעיל את מערכת אדוש?"),K=e("confirmDisableTwoFAMsg","Are you sure you want to disable 2FA?"),O=e("Settings","הגדרות"),B=e("Dashboard","פאנל ניהול"),W=e("Language","שפה"),V=e("Appearance","נראות"),j=e("Theme","ערכת נושא"),q=e("General","כללי"),z=e("Version","גרסה"),J=e("List","רשימה"),Q=e("Add","הוסף"),X=e("Up","פעיל"),Z=e("Down","לא פעיל"),Y=e("Pending","ממתין"),_=e("Unknown","לא יודע"),$=e("Pause","עצור"),ee=e("Name","שם"),oe=e("Status","סטטוס"),te=e("DateTime","תאריך שעה"),ae=e("Message","הודעה"),se=e("Resume","המשך"),ne=e("Edit","עריכה"),ie=e("Delete","מחיקה"),re=e("Current","עכשיו"),ce=e("Uptime","זמן פעילות"),le=e("day","יום | ימים"),de=e("hour","שעה"),ue=e("Response","תגובה"),pe=e("Ping","פינג"),me=e("Keyword","מילת מפתח"),ge=e("URL","כתובת אתר"),he=e("Hostname","שם המארח"),Se=e("Port","פורט"),ye=e("Retries","נסיונות חוזרים"),De=e("Advanced","מתקדם"),Te=e("needPushEvery","עליך להתקשר לכתובת האתר הזו כל {0} שניות."),ke=e("pushOptionalParams","פרמטרים אופציונליים: {0}"),Pe=e("Save","שמירה"),Ae=e("Notifications","התראות"),be=e("Light","בהיר"),Me=e("Dark","חושך"),we=e("Auto","אוטומטי"),fe=e("Normal","נורמלי"),ve=e("Bottom","למטה"),Ce=e("None","כלום"),Ie=e("Timezone","אזור זמן"),Re=e("Logout","התנתקות"),Ne=e("Leave","יציאה"),Le=e("Confirm","אישור"),Ee=e("Yes","כן"),Ue=e("No","לא"),He=e("Username","שם משתמש"),xe=e("Password","סיסמה"),Ge=e("Login","התחברות"),Fe=e("Email","אימייל"),Ke=e("Test","Test"),Oe=e("Export","ייצוא"),Be=e("Import","ייבוא"),We=e("respTime","רפ. זמן (ms)"),Ve=e("notAvailableShort","N/A"),je=e("Create","ליצור"),qe=e("Events","אירועים"),ze=e("Heartbeats","פעימות לב"),Je=e("backupDescription","אתה יכול לגבות את כל המסכים וההתראות לקובץ JSON."),Qe=e("backupDescription2","הערה: היסטוריה ונתוני אירועים אינם כלולים."),Xe=e("backupDescription3","נתונים רגישים כגון אסימוני הודעה כלולים בקובץ הייצוא; נא לאחסן יצוא בצורה מאובטחת."),Ze=e("alertNoFile","אנא בחר קובץ לייבוא."),Ye=e("alertWrongFileType","אנא בחר קובץ JSON."),_e=e("Overwrite","החלף"),$e=e("Options","אפשרויות"),eo=e("Active","מופעל"),oo=e("Inactive","קבוי"),to=e("Token","אסימון"),ao=e("Tags","תגים"),so=e("color","צבע"),no=e("Gray","אפור"),io=e("Red","אדום"),ro=e("Orange","כתום"),co=e("Green","ירוק"),lo=e("Blue","כחול"),uo=e("Indigo","כחול כהה"),po=e("Purple","סגול"),mo=e("Pink","כתום"),go=e("statusPageNothing","אין כאן שום דבר, בבקשה הוסף קבוצה או מוניטור."),ho=e("defaultNotificationName","התראת {notification} שלי ({number})"),So=e("here","פה"),yo=e("Required","נדרש"),Do=e("telegram","טלגרם"),To=e("wayToGetTelegramToken","אתה יכול לקבל אסימון מ-{0}."),ko=e("supportTelegramChatID","תמיכה בצ'אט ישיר / קבוצה / מזהה הצ'אט של הערוץ"),Po=e("wayToGetTelegramChatID","אתה יכול לקבל את מזהה הצ'אט שלך על ידי שליחת הודעה לבוט ומעבר לכתובת האתר הזו כדי להציג את ה-chat_id:"),Ao=e("chatIDNotFound","מזהה צ'אט לא נמצא; אנא שלח הודעה לבוט זה תחילה"),bo=e("webhook","Webhook"),Mo=e("webhookJsonDesc","{0} מתאים לכל שרתי HTTP מודרניים כגון Express.js"),wo=e("webhookFormDataDesc","{multipart} טוב ל-PHP. יהיה צורך לנתח את ה-JSON באמצעות {decodeFunction}"),fo=e("webhookAdditionalHeadersTitle","כותרות נוספות"),vo=e("webhookAdditionalHeadersDesc","מגדיר כותרות נוספות שנשלחות עם ה-webhook."),Co=e("smtp","אימייל (SMTP)"),Io=e("secureOptionNone","None / STARTTLS (25, 587)"),Ro=e("secureOptionTLS","TLS (465)"),No=e("emailCustomSubject","נושא מותאם אישית"),Lo=e("smtpCC","עותק"),Eo=e("smtpBCC","עותק מוסתר"),Uo=e("discord","דיסקורד"),Ho=e("wayToGetDiscordURL","אתה יכול לקבל זאת על ידי מעבר להגדרות שרת -> אינטגרציות -> צור Webhook"),xo=e("teams","Microsoft Teams"),Go=e("wayToGetTeamsURL","אתה יכול ללמוד כיצד ליצור כתובת אתר ל-webhook {0}."),Fo=e("signal","אוֹת"),Ko=e("Recipients","נמענים"),Oo=e("needSignalAPI","אתה צריך שיהיה לך לקוח איתות עם REST API."),Bo=e("wayToCheckSignalURL","אתה יכול לבדוק את כתובת האתר הזו כדי לראות כיצד להגדיר אחת:"),Wo=e("signalImportant","חשוב: לא ניתן לערבב קבוצות ומספרים בנמענים!"),Vo=e("gotify","Gotify"),jo=e("Priority","עדיפות"),qo=e("slack","Slack"),zo=e("aboutWebhooks","מידע נוסף על Webhooks ב: {0}"),Jo=e("aboutChannelName","הזן את שם הערוץ בשדה {0} שם ערוץ אם ברצונך לעקוף את ערוץ Webhook. לדוגמה: #ערוץ אחר"),Qo=e("aboutKumaURL","אם תשאיר את השדה Uptime Kuma URL ריק, הוא יעבור כברירת מחדל לעמוד Project GitHub."),Xo=e("emojiCheatSheet","גיליון הונאה של אמוג'י: {0}"),Zo=e("pushover","Pushover"),Yo=e("pushy","Pushy"),_o=e("PushByTechulus","Push by Techulus"),$o=e("octopush","Octopush"),et=e("promosms","PromoSMS"),ot=e("clicksendsms","ClickSend SMS"),tt=e("lunasea","LunaSea"),at=e("apprise","Apprise (תומך ב-50+ שירותי התראות)"),st=e("GoogleChat","Google Chat (Google Workspace בלבד)"),nt=e("pushbullet","Pushbullet"),it=e("line","Line Messenger"),rt=e("mattermost","Mattermost"),ct=e("Device","התקן"),lt=e("pushoverDesc1","לעדיפות חירום (2) יש פסק זמן של 30 שניות ברירת מחדל בין ניסיונות חוזרים, והיא תפוג לאחר שעה."),dt=e("pushoverDesc2","אם ברצונך לשלוח התראות למכשירים שונים, מלא את שדה התקן."),ut=e("octopushTypePremium","פרימיום (מהיר - מומלץ להתראה)"),pt=e("octopushTypeLowCost","עלות נמוכה (איטית - לפעמים חסומה על ידי המפעיל)"),mt=e("checkPrice","בדוק מחירים של {0}:"),gt=e("apiCredentials","אישורי API"),ht=e("octopushLegacyHint","האם אתה משתמש בגרסה הישנה של Octopush (2011-2020) או בגרסה החדשה?"),St=e("octopushPhoneNumber","מספר טלפון (פורמט אינטלי, למשל: +33612345678)"),yt=e("octopushSMSSender","שם שולח SMS: 3-11 תווים אלפאנומריים ורווח (a-zA-Z0-9)"),Dt=e("appriseInstalled","Apprise מותקן."),Tt=e("appriseNotInstalled","Apprise אינו מותקן. {0}"),kt=e("lineDevConsoleTo","קו מפתחי קונסולת - {0}"),Pt=e("wayToGetLineChannelToken","תחילה גש ל-{0}, צור ספק וערוץ (Messaging API), לאחר מכן תוכל לקבל את אסימון הגישה לערוץ ומזהה המשתמש מפריטי התפריט שהוזכרו לעיל."),At=e("aboutIconURL",'אתה יכול לספק קישור לתמונה ב"כתובת URL של סמל" כדי לעקוף את תמונת הפרופיל המוגדרת כברירת מחדל. לא ישמש אם Icon Emoji מוגדר.'),bt=e("aboutMattermostChannelName",'אתה יכול לעקוף את ערוץ ברירת המחדל שאליו ה-Webhook מפרסם על ידי הזנת שם הערוץ בשדה "שם ערוץ". זה צריך להיות מופעל בהגדרות Mattermos Webhook. לדוגמה: #ערוץ אחר'),Mt=e("matrix","Matrix"),wt=e("promosmsTypeEco","SMS ECO - זול אך איטי ולעיתים עמוס מדי. מוגבל רק לנמענים פולנים."),ft=e("promosmsTypeFlash","SMS FLASH - ההודעה תוצג אוטומטית במכשיר הנמען. מוגבל לנמענים פולנים בלבד."),vt=e("promosmsTypeFull","SMS FULL - שכבת פרימיום של SMS, אתה יכול להשתמש בשם השולח שלך (עליך לרשום את השם תחילה). אמין להתראות."),Ct=e("promosmsTypeSpeed","SMS SPEED - העדיפות הגבוהה ביותר במערכת. מאוד מהיר ואמין אבל יקר (בערך פי שניים ממחיר מלא של SMS)."),It=e("promosmsPhoneNumber","מספר טלפון (לנמען פולני ניתן לדלג על אזורי חיוג)"),Rt=e("promosmsSMSSender","שם שולח SMS: שם רשום מראש או אחת מברירות המחדל: InfoSMS, SMS Info, MaxSMS, INFO, SMS"),Nt=e("matrixHomeserverURL","כתובת האתר של שרת הבית (עם http(s):// ויציאה אופציונלית)"),Lt=e("matrixDesc1","אתה יכול למצוא את מזהה החדר הפנימי על ידי עיון בחלק המתקדם של לקוח Matrix שלך בהגדרות החדר. זה צריך להיראות כמו !QMdRCpUIfLwsfjxye6:home.server."),Et=e("matrixDesc2","מומלץ מאוד ליצור משתמש חדש ולא להשתמש באסימון הגישה של משתמש מטריקס משלך שכן הוא יאפשר גישה מלאה לחשבון שלך ולכל החדרים שהצטרפת אליהם. במקום זאת, צור משתמש חדש והזמן אותו רק לחדר שבו תרצה לקבל את ההתראה. תוכל לקבל את אסימון הגישה על ידי הפעלת {0}"),Ut=e("Method","Method"),Ht=e("Body","Body"),xt=e("Headers","Headers"),Gt=e("PushUrl","Push URL"),Ft=e("HeadersInvalidFormat","כותרות הבקשה אינן JSON חוקיות:"),Kt=e("BodyInvalidFormat","גוף הבקשה אינו JSON חוקי:"),Ot=e("clearDataOlderThan","שמור את נתוני היסטוריית הצג למשך {0} ימים."),Bt=e("PasswordsDoNotMatch","סיסמאות לא תואמות."),Wt=e("records","רשומות"),Vt=e("steamApiKeyDescription","לניטור שרת משחקי Steam אתה צריך מפתח Steam Web-API. אתה יכול לרשום את מפתח ה-API שלך כאן:"),jt=e("topic","נושא"),qt=e("topicExplanation","נושא MQTT למעקב"),zt=e("successMessage","הודעת הצלחה"),Jt=e("successMessageExplanation","הודעת MQTT שתיחשב כהצלחה"),Qt=e("recent","לאחרונה"),Xt=e("Done","בוצע"),Zt=e("Info","מידע"),Yt=e("Security","אבטחה"),_t=e("Default","בְּרִירַת מֶחדָל"),$t=e("Title","כותרת"),ea=e("Content","תוֹכֶן"),oa=e("Style","Style"),ta=e("info","מידע"),aa=e("warning","אַזהָרָה"),sa=e("danger","סַכָּנָה"),na=e("error","שְׁגִיאָה"),ia=e("critical","קריטי"),ra=e("primary","יְסוֹדִי"),ca=e("light","אוֹר"),la=e("dark","אפל"),da=e("Post","הודעה"),ua=e("Created","נוצר"),pa=e("Unpin","ענן חוף"),ma=e("Description","תיאור"),ga=e("Services","שירותים"),ha=e("Discard","להשליך"),Sa=e("Cancel","לְבַטֵל"),ya=e("shrinkDatabaseDescription","ואקום מסד נתונים להפעיל עבור SQLITE.אם בסיס הנתונים שלך נוצר לאחר 1.10.0, Auto_VACUUM כבר מופעל ואין צורך בפעולה זו."),Da=e("serwersms","SerwerSMS.pl"),Ta=e("serwersmsAPIUser","API Username (incl. webapi_ prefix)"),ka=e("serwersmsAPIPassword","סיסמת API"),Pa=e("serwersmsPhoneNumber","מספר טלפון"),Aa=e("serwersmsSenderName","שם שולח SMS (רשום באמצעות פורטל לקוחות)"),ba=e("smseagle","SMSEagle"),Ma=e("smseagleTo","מספרי טלפון)"),wa=e("smseagleGroup","שם קבוצת ספר טלפונים"),fa=e("smseagleContact","שם איש קשר בספר הטלפונים"),va=e("smseagleRecipientType","Rסוג הנמען"),Ca=e("smseagleRecipient","נמענים (ים) (יש להפריד בין מרובים לפסיק)"),Ia=e("smseagleToken","API Access Token"),Ra=e("smseagleUrl","כתובת האתר של מכשיר ה- SMSeagege שלך"),Na=e("smseagleEncoding","שלח כ- Unicode"),La=e("smseaglePriority","עדיפות הודעה (0-9, ברירת מחדל = 0)"),Ea=e("stackfield","סטאקפילד"),Ua=e("Customize","התאמה אישית"),Ha=e("smtpDkimSettings","הגדרות DKIM"),xa=e("smtpDkimDesc","אנא עיין ב- NodeMailer DKIM {0} לשימוש."),Ga=e("documentation","ווקיפדיית מדריכים"),Fa=e("smtpDkimDomain","שם דומיין"),Ka=e("smtpDkimKeySelector","בורר מפתח"),Oa=e("smtpDkimPrivateKey","טוראי של פרטיy"),Ba=e("smtpDkimHashAlgo","אלגוריתם hash (אופציונלי)"),Wa=e("smtpDkimheaderFieldNames","מפתחות כותרת לחתום (אופציונלי)"),Va=e("smtpDkimskipFields","מפתחות כותרת לא לחתום (אופציונלי)"),ja=e("wayToGetPagerDutyKey",'אתה יכול להשיג זאת על ידי מעבר לשירות -> ספריית שירות -> (בחר שירות) -> אינטגרציות -> הוסף אינטגרציה.כאן תוכלו לחפש "אירועים API v2 ".מידע נוסף {0}'),qa=e("gorush","Gorush"),za=e("alerta","Alerta"),Ja=e("alertaApiEndpoint","נקודת קצה של API"),Qa=e("alertaEnvironment","סביבה"),Xa=e("alertaApiKey","מפתח API"),Za=e("alertaAlertState","מצב התראה"),Ya=e("alertaRecoverState","לשחזר מדינה"),_a=e("deleteStatusPageMsg","האם אתה בטוח רוצה למחוק את דף הסטטוס הזה?"),$a=e("Proxies","Proxies"),es=e("enabled","מופעל"),os=e("setAsDefault","נקבע כברירת מחדל"),ts=e("deleteProxyMsg","האם אתה בטוח רוצה למחוק את הפרוקסי הזה לכל המסכים?"),as=e("proxyDescription","Proxies must be assigned to a monitor to function."),ss=e("enableProxyDescription","פרוקסי זה לא ישפיע על בקשות צג עד שהוא יופעל.אתה יכול לשלוט באופן זמני להשבית את ה- Proxy מכל המסכים לפי מצב ההפעלה."),ns=e("setAsDefaultProxyDescription","פרוקסי זה יופעל כברירת מחדל עבור צגים חדשים.אתה עדיין יכול להשבית את ה- Proxy בנפרד עבור כל צג."),is=e("Valid","תָקֵף"),rs=e("Invalid","לא חוקי"),cs=e("AccessKeyId","מזהה AccessKey"),ls=e("SecretAccessKey","גישהלמפתחסוד"),ds=e("PhoneNumbers","מספר טלפוןs"),us=e("TemplateCode","TemplateCode"),ps=e("SignName","שם שם"),ms=e("WebHookUrl","WebHookUrl"),gs=e("SecretKey","מפתח סודי"),hs=e("Platform","פּלַטפוֹרמָה"),Ss=e("iOS","iOS"),ys=e("Android","דְמוּי אָדָם"),Ds=e("Huawei","huawei"),Ts=e("High","High"),ks=e("Retry","נסה שוב"),Ps=e("Topic","נוֹשֵׂא"),As=e("User","מִשׁתַמֵשׁ"),bs=e("Installed","מוּתקָן"),Ms=e("Running","רץ"),ws=e("Start","הַתחָלָה"),fs=e("Stop","תפסיק"),vs=e("Slug","Slug"),Cs=e("startOrEndWithOnly","התחל או סוף עם {0} בלבד"),Is=e("Next","הַבָּא"),Rs=e("Authentication","אבטחה"),Ns=e("Backup","גיבוי"),Ls=e("About","אודות"),Es=e("wayToGetCloudflaredURL","(הורד את CloudFlared מ- {0})"),Us=e("cloudflareWebsite","אתר CloudFlare"),Hs=e("HomeAssistant","Home Assistant"),xs=e("onebotHttpAddress","כתובת HTTP של OneBot "),Gs=e("onebotMessageType","סוג ההודעה OneBot"),Fs=e("onebotGroupMessage","קְבוּצָה"),Ks=e("onebotPrivateMessage","פְּרָטִי"),Os=e("onebotUserOrGroupId","מזהה קבוצה/משתמש "),Bs=e("onebotSafetyTips","לבטיחות, חייב לקבוע אסימון גישה "),Ws=e("signedInDisp","חתום כ- {0} "),Vs=e("signedInDispDisabled","Auth מושבת."),js=e("RadiusSecret","רדיוס סוד"),qs=e("RadiusSecretDescription","סוד משותף בין לקוח לשרת"),zs=e("RadiusCalledStationId","נקרא מזהה תחנה"),Js=e("RadiusCalledStationIdDescription","מזהה של המכשיר הנקרא "),Qs=e("RadiusCallingStationId","מזהה תחנת שיחה "),Xs=e("RadiusCallingStationIdDescription","מזהה של מכשיר השיחה "),Zs=e("endpoint","נקודת קצה"),Ys=e("octopushAPIKey",'"מפתח API " מתוך תעודות API של HTTP בלוח הבקרה'),_s=e("octopushLogin",'"כניסה " מתעודות API של HTTP בלוח הבקרה'),$s=e("promosmsLogin","שם כניסה של API"),en=e("promosmsPassword","סיסמת API"),on=e("pushyAPIKey","מפתח API סודי"),tn=e("pushyToken","אסימון מכשיר"),an=e("wayToGetClickSendSMSToken","אתה יכול לקבל שם משתמש API ומפתח API מ- {0}."),sn=e("Query","שאילתא"),nn=e("settingsCertificateExpiry","תפוגת תעודת TLS"),rn=e("certificationExpiryDescription","HTTPS עוקב אחר התראה על התראה כאשר תעודת TLS פגה ב:"),cn=e("deleteDockerHostMsg","האם אתה בטוח רוצה למחוק את המארח של Docker לכל המוניטורים?"),ln=e("socket","Socket"),dn=e("tcp","TCP / HTTP"),un=e("Domain","תְחוּם"),pn=e("Workstation","עמדת עבודה"),mn=e("disableCloudflaredNoAuthMsg","אתה לא נמצא במצב AUTH, אין צורך בסיסמה."),gn=e("trustProxyDescription","סמוך על הכותרות 'X-Forwarded-*'. אם אתה רוצה לקבל את כתובת ה-IP של הלקוח וה- Uptime Kuma שלך עומד מאחורי פרוקסי כגון Nginx או Apache, עליך להפעיל זאת."),hn=e("wayToGetLineNotifyToken","אתה יכול לקבל אסימון גישה מ- {0}"),Sn=e("Examples","דוגמאות"),yn=e("goAlertInfo","SAETRERT הוא יישום קוד פתוח לתזמון שיחה, הסלמות והודעות אוטומטיות (כמו SMS או שיחות קוליות).לעסוק אוטומטית את האדם הנכון, בדרך הנכונה ובזמן הנכון!{0}"),Dn=e("goAlertIntegrationKeyInfo",'קבל מפתח אינטגרציה של API גנרי לשירות בפורמט זה "AAAAAAAA-BBB-CCCC-DDDD-EEEEEEEEEEE " בדרך כלל הערך של פרמטר האסימון של URL שהועתק.'),Tn=e("goAlert","GoAlert"),kn=e("backupOutdatedWarning","הוצא משימוש: מכיוון שנוספו הרבה תכונות ותכונת הגיבוי הזו קצת לא מתוחזקת, היא לא יכולה ליצור או לשחזר גיבוי מלא."),Pn=e("backupRecommend","אנא גבה את עוצמת הקול או את תיקיית הנתונים (./data/) ישירות במקום."),An=e("Optional","אופציונאלי"),bn=e("squadcast","Squadcast"),Mn=e("SendKey","SendKey"),wn=e("SMSManager","SMSManager"),fn=e("or","אוֹ"),vn=e("recurringInterval","הפסקה"),Cn=e("Recurring","מחזורי"),In=e("strategyManual","פעיל/לא פעיל באופן ידני"),Rn=e("warningTimezone","זה משתמש באזור הזמן של השרת"),Nn=e("weekdayShortMon","שני"),Ln=e("weekdayShortTue","שלישי"),En=e("weekdayShortWed","רביעי"),Un=e("weekdayShortThu","חמישי"),Hn=e("weekdayShortFri","שישי"),xn=e("weekdayShortSat","שבת"),Gn=e("weekdayShortSun","ראשון"),Fn=e("dayOfWeek","יום בשבוע"),Kn=e("dayOfMonth","יום בחודש"),On=e("lastDay","Last Day"),Bn=e("lastDay1","היום האחרון של החודש"),Wn=e("lastDay2","יום שני האחרון של החודש"),Vn=e("lastDay3","יום 3 האחרון של החודש"),jn=e("lastDay4","היום הרביעי האחרון בחודש"),qn=e("pauseMaintenanceMsg","האם אתה בטוח רוצה להשהות?"),zn=e("statusPageMaintenanceEndDate","סוך"),Jn=e("IconUrl","קישור לתמונת אייקון"),Qn=e("Enable","הפעל"),Xn=e("Disable","השבת"),Zn=e("dnsCacheDescription","ייתכן שהוא לא עובד בסביבות IPv6 מסוימות, השבת אותו אם אתה נתקל בבעיות כלשהן."),Yn=e("Strategy","אסטרטגיה"),_n=e("Economy","חיסכון"),$n=e("Lowcost","זול"),ei=e("high","גבוהה"),oi=e("Monitor","מוניטור | מוניטרים"),ti=e("promosmsAllowLongSMS","אפשר SMS ארוך"),ai=e("loadingError","לא ניתן לאחזר את הנתונים, אנא נסה שוב מאוחר יותר."),si=e("plugin","תוסף | תוספים"),ni=e("install","להתקין"),ii=e("installing","מתקין"),ri=e("uninstall","הסר את ההתקנה"),ci=e("uninstalling","מסיר התקנה"),li=e("confirmUninstallPlugin","האם אתה בטוח שברצונך להסיר את התוסף הזה?"),di=e("Help","עזרה"),ui=e("Game","משחק"),pi=e("markdownSupported","תחביר סימון נתמך (Markdown )"),mi=e("Custom","מותאם אישית"),gi=e("ZohoCliq","זוהו קליק"),hi=e("wayToGetZohoCliqURL","אתה יכול ללמוד כיצד ליצור כתובת אתר ל-webhook {0}."),Si=e("dataRetentionTimeError","תקופת השמירה חייבת להיות 0 או יותר"),yi=e("infiniteRetention","הגדר ל-0 לשמירה אינסופית."),Di=e("confirmDeleteTagMsg","האם אתה בטוח שברצונך למחוק תג זה? צגים המשויכים לתג זה לא יימחקו."),Ti=e("Kook","קוק"),ki=e("wayToGetKookBotToken","צור יישום וקבל את אסימון הבוט שלך ב-{0}"),Pi=e("wayToGetKookGuildID","הפעל את 'מצב מפתח' בהגדרת קוק, ולחץ לחיצה ימנית על הגילדה כדי לקבל את המזהה שלה");e("default",{languageName:o,checkEverySecond:t,retryCheckEverySecond:a,resendEveryXTimes:s,resendDisabled:n,retriesDescription:i,ignoreTLSError:r,upsideDownModeDescription:c,maxRedirectDescription:l,enableGRPCTls:d,grpcMethodDescription:u,acceptedStatusCodesDescription:p,Maintenance:m,statusMaintenance:g,"Schedule maintenance":"תחזוקה מתוכננת","Affected Monitors":"מוניטורים מושפעים","Pick Affected Monitors...":"בחר המוניטריים המושפעים…","Start of maintenance":"תחילת תחזוקה","All Status Pages":"כל דפי הסטטוס","Select status pages...":"בחר דפי סטטוס…",recurringIntervalMessage:h,affectedMonitorsDescription:S,affectedStatusPages:y,atLeastOneMonitor:D,passwordNotMatchMsg:T,notificationDescription:k,keywordDescription:P,pauseDashboardHome:A,deleteMonitorMsg:b,deleteMaintenanceMsg:M,deleteNotificationMsg:w,dnsPortDescription:f,resolverserverDescription:v,rrtypeDescription:C,pauseMonitorMsg:I,enableDefaultNotificationDescription:R,clearEventsMsg:N,clearHeartbeatsMsg:L,confirmClearStatisticsMsg:E,importHandleDescription:U,confirmImportMsg:H,twoFAVerifyLabel:x,tokenValidSettingsMsg:G,confirmEnableTwoFAMsg:F,confirmDisableTwoFAMsg:K,Settings:O,Dashboard:B,"New Update":"עדכון חדש",Language:W,Appearance:V,Theme:j,General:q,"Primary Base URL":"כתובת האתר הראשית של הבסיס",Version:z,"Check Update On GitHub":"לבדוק עדכונים בגיטהאב",List:J,Add:Q,"Add New Monitor":"הוספת מוניטור חדש","Quick Stats":"נתונים בקצרה",Up:X,Down:Z,Pending:Y,Unknown:_,Pause:$,Name:ee,Status:oe,DateTime:te,Message:ae,"No important events":"אין אירועים חשובים",Resume:se,Edit:ne,Delete:ie,Current:re,Uptime:ce,"Cert Exp.":"Cert Exp.",day:le,"-day":"-יום",hour:de,"-hour":"-שעה",Response:ue,Ping:pe,"Monitor Type":"סוג מוניטור",Keyword:me,"Friendly Name":"שם ידידותי",URL:ge,Hostname:he,Port:Se,"Heartbeat Interval":"מרווח פעימות",Retries:ye,"Heartbeat Retry Interval":"מרווח נסיונות חוזר של פעימות","Resend Notification if Down X times consequently":"שלח שוב הודעה אם ירד X פעמים כתוצאה מכך",Advanced:De,"Upside Down Mode":"מצב הפוך","Max. Redirects":"מקסימום הפניות מחדש","Accepted Status Codes":"קודי סטטוס מקובלים","Push URL":"דחף כתובת URL",needPushEvery:Te,pushOptionalParams:ke,Save:Pe,Notifications:Ae,"Not available, please setup.":"לא זמין, אנא הגדר.","Setup Notification":"הודעת הגדרה",Light:be,Dark:Me,Auto:we,"Theme - Heartbeat Bar":"ערכת נושא - Heartbeat Bar",Normal:fe,Bottom:ve,None:Ce,Timezone:Ie,"Search Engine Visibility":"נראות במנועי חיפוש","Allow indexing":"אפשר הוספה לאינדקס","Discourage search engines from indexing site":"לא לעודד מנועי חיפוש לאינדקס אתרים","Change Password":"שנה סיסמא","Current Password":"סיסמה נוכחית","New Password":"סיסמה חדשה","Repeat New Password":"חזור על סיסמה חדשה","Update Password":"עדכן סיסמה","Disable Auth":"השבתת אבטחה","Enable Auth":"הפעלת אבטחה","disableauth.message1":"האם אתה בטוח שברצונך <strong>להשבית את האבטחה</strong>?","disableauth.message2":"הוא מיועד לתרחישים <strong>שבהם אתה מתכוון ליישם אימות של צד שלישי</strong> מול Uptime Kuma כגון Cloudflare Access, Authelia או מנגנוני אימות אחרים.","Please use this option carefully!":"אנא השתמש באפשרות זו בזהירות!",Logout:Re,Leave:Ne,"I understand, please disable":"אני מבין, אני רוצה להשבית",Confirm:Le,Yes:Ee,No:Ue,Username:He,Password:xe,"Remember me":"זכור אותי",Login:Ge,"No Monitors, please":"בלי מוניטורים, בבקשה","add one":"להוסיף אחד","Notification Type":"סוג התראה",Email:Fe,Test:Ke,"Certificate Info":"פרטי תעודת אבטחה","Resolver Server":"שרת פותר","Resource Record Type":"סוג רשומת משאבים","Last Result":"תוצאה אחרונה","Create your admin account":"צור את חשבון הניהול שלך","Repeat Password":"חזור על הסיסמה","Import Backup":"ייבוא גיבוי","Export Backup":"ייצוא גיבוי",Export:Oe,Import:Be,respTime:We,notAvailableShort:Ve,"Default enabled":"ברירת המחדל מופעלת","Apply on all existing monitors":"החל על כל המסכים הקיימים",Create:je,"Clear Data":"נקה נתונים",Events:qe,Heartbeats:ze,"Auto Get":"קבל אוטומטי",backupDescription:Je,backupDescription2:Qe,backupDescription3:Xe,alertNoFile:Ze,alertWrongFileType:Ye,"Clear all statistics":"נקה את כל הנתונים הסטטיסטיים","Skip existing":"דילוג על הקיים",Overwrite:_e,Options:$e,"Keep both":"שמור את שניהם","Verify Token":"אמת את האסימון","Setup 2FA":"הגדרת מערכת אדוש","Enable 2FA":"הפעלת אדוש","Disable 2FA":"כיבוי אדוש","2FA Settings":"הגדרות אדוש","Two Factor Authentication":"אימות דו-שלבי (מערכת אדוש)",Active:eo,Inactive:oo,Token:to,"Show URI":"הצג URI",Tags:ao,"Add New below or Select...":"הוסף חדש למטה או בחר…","Tag with this name already exist.":"תג בשם זה כבר קיים.","Tag with this value already exist.":"תג עם ערך זה כבר קיים.",color:so,"value (optional)":"ערך (אופציונלי)",Gray:no,Red:io,Orange:ro,Green:co,Blue:lo,Indigo:uo,Purple:po,Pink:mo,"Search...":"לחפש…","Avg. Ping":"פינג ממוצע","Avg. Response":"ממוצע תגובה","Entry Page":"דף כניסה",statusPageNothing:go,"No Services":"אין שירותים","All Systems Operational":"כל המערכות עובדות","Partially Degraded Service":"שירות פגום חלקית","Degraded Service":"שירות פגום","Add Group":"הוסף קבוצה","Add a monitor":"הוסף מוניטור","Edit Status Page":"ערוך דף סטטוס","Go to Dashboard":"מעבר לפאנל","Status Page":"דף סטטוס","Status Pages":"דפי סטטוס",defaultNotificationName:ho,here:So,Required:yo,telegram:Do,"Bot Token":"אסימון בוט",wayToGetTelegramToken:To,"Chat ID":"מזהה צ'אט",supportTelegramChatID:ko,wayToGetTelegramChatID:Po,"YOUR BOT TOKEN HERE":"אסימון הבוט שלך כאן",chatIDNotFound:Ao,webhook:bo,"Post URL":"כתובת אתר של פוסט","Content Type":"סוג התוכן",webhookJsonDesc:Mo,webhookFormDataDesc:wo,webhookAdditionalHeadersTitle:fo,webhookAdditionalHeadersDesc:vo,smtp:Co,secureOptionNone:Io,secureOptionTLS:Ro,"Ignore TLS Error":"התעלם משגיאת TLS","From Email":"אמייל שולח",emailCustomSubject:No,"To Email":"למייל",smtpCC:Lo,smtpBCC:Eo,discord:Uo,"Discord Webhook URL":"כתובת אתר של Discord Webhook",wayToGetDiscordURL:Ho,"Bot Display Name":"שם תצוגה של בוט","Prefix Custom Message":"קידומת הודעה מותאמת אישית","Hello @everyone is...":"שלום {'@'}כולם…",teams:xo,"Webhook URL":"כתובת האתר של Webhook",wayToGetTeamsURL:Go,signal:Fo,Number:"מספר",Recipients:Ko,needSignalAPI:Oo,wayToCheckSignalURL:Bo,signalImportant:Wo,gotify:Vo,"Application Token":"אסימון אפליקציה","Server URL":"כתובת האתר של השרת",Priority:jo,slack:qo,"Icon Emoji":"אייקון אימוג'י","Channel Name":"שם הערוץ","Uptime Kuma URL":"Uptime Kuma URL",aboutWebhooks:zo,aboutChannelName:Jo,aboutKumaURL:Qo,emojiCheatSheet:Xo,"rocket.chat":"Rocket.Chat",pushover:Zo,pushy:Yo,PushByTechulus:_o,octopush:$o,promosms:et,clicksendsms:ot,lunasea:tt,apprise:at,GoogleChat:st,pushbullet:nt,line:it,mattermost:rt,"User Key":"מפתח משתמש",Device:ct,"Message Title":"כותרת ההודעה","Notification Sound":"צליל התראה","More info on:":"מידע נוסף על: {0}",pushoverDesc1:lt,pushoverDesc2:dt,"SMS Type":"סוג SMS",octopushTypePremium:ut,octopushTypeLowCost:pt,checkPrice:mt,apiCredentials:gt,octopushLegacyHint:ht,"Check octopush prices":"בדוק מחירי תמנון {0}.",octopushPhoneNumber:St,octopushSMSSender:yt,"LunaSea Device ID":"מזהה מכשיר LunaSea","Apprise URL":"Apprise URL","Example:":"דוגמה: {0}","Read more:":"קרא עוד: {0}","Status:":"סטטוס: {0}","Read more":"קרא עוד",appriseInstalled:Dt,appriseNotInstalled:Tt,"Access Token":"אסימון גישה","Channel access token":"אסימון גישה לערוץ","Line Developers Console":"קונסולת מפתחים",lineDevConsoleTo:kt,"Basic Settings":"הגדרות בסיסיות","User ID":"תעודת זהות של משתמש","Messaging API":"Messaging API",wayToGetLineChannelToken:Pt,"Icon URL":"כתובת אתר של סמל",aboutIconURL:At,aboutMattermostChannelName:bt,matrix:Mt,promosmsTypeEco:wt,promosmsTypeFlash:ft,promosmsTypeFull:vt,promosmsTypeSpeed:Ct,promosmsPhoneNumber:It,promosmsSMSSender:Rt,"Feishu WebHookUrl":"Feishu WebHookURL",matrixHomeserverURL:Nt,"Internal Room Id":"מזהה חדר פנימי",matrixDesc1:Lt,matrixDesc2:Et,Method:Ut,Body:Ht,Headers:xt,PushUrl:Gt,HeadersInvalidFormat:Ft,BodyInvalidFormat:Kt,"Monitor History":"מעקב אחר היסטוריה",clearDataOlderThan:Ot,PasswordsDoNotMatch:Bt,records:Wt,"One record":"שיא אחד",steamApiKeyDescription:Vt,"Current User":"משתמש נוכחי",topic:jt,topicExplanation:qt,successMessage:zt,successMessageExplanation:Jt,recent:Qt,Done:Xt,Info:Zt,Security:Yt,"Steam API Key":"מפתח API Steam","Shrink Database":"מסד נתונים מכווץ","Pick a RR-Type...":"בחר סוג RR…","Pick Accepted Status Codes...":"בחר קודי סטטוס מקובלים…",Default:_t,"HTTP Options":"אפשרויות HTTP","Create Incident":"ליצור אירוע",Title:$t,Content:ea,Style:oa,info:ta,warning:aa,danger:sa,error:na,critical:ia,primary:ra,light:ca,dark:la,Post:da,"Please input title and content":"אנא הזן כותרת ותוכן",Created:ua,"Last Updated":"עודכן לאחרונה",Unpin:pa,"Switch to Light Theme":"לעבור לנושא האור","Switch to Dark Theme":"לעבור לנושא אפל","Show Tags":"Show Tags","Hide Tags":"הסתר תגיות",Description:ma,"No monitors available.":"אין צגים זמינים.","Add one":"הוסף אחד","No Monitors":"אין צגים","Untitled Group":"קבוצה ללא כותרת",Services:ga,Discard:ha,Cancel:Sa,"Powered by":"פועל על",shrinkDatabaseDescription:ya,serwersms:Da,serwersmsAPIUser:Ta,serwersmsAPIPassword:ka,serwersmsPhoneNumber:Pa,serwersmsSenderName:Aa,smseagle:ba,smseagleTo:Ma,smseagleGroup:wa,smseagleContact:fa,smseagleRecipientType:va,smseagleRecipient:Ca,smseagleToken:Ia,smseagleUrl:Ra,smseagleEncoding:Na,smseaglePriority:La,stackfield:Ea,Customize:Ua,"Custom Footer":"כותרת תחתונה מותאמת אישית","Custom CSS":"CSS מותאם אישית",smtpDkimSettings:Ha,smtpDkimDesc:xa,documentation:Ga,smtpDkimDomain:Fa,smtpDkimKeySelector:Ka,smtpDkimPrivateKey:Oa,smtpDkimHashAlgo:Ba,smtpDkimheaderFieldNames:Wa,smtpDkimskipFields:Va,wayToGetPagerDutyKey:ja,"Integration Key":"מפתח אינטגרציה","Integration URL":"URL אינטגרציה","Auto resolve or acknowledged":"פיתרון אוטומטי או הודה","do nothing":"לעשות כלום","auto acknowledged":"Auto הודה","auto resolve":"פתרון אוטומטי",gorush:qa,alerta:za,alertaApiEndpoint:Ja,alertaEnvironment:Qa,alertaApiKey:Xa,alertaAlertState:Za,alertaRecoverState:Ya,deleteStatusPageMsg:_a,Proxies:$a,default:"בְּרִירַת מֶחדָל",enabled:es,setAsDefault:os,deleteProxyMsg:ts,proxyDescription:as,enableProxyDescription:ss,setAsDefaultProxyDescription:ns,"Certificate Chain":"שרשרת אישורים",Valid:is,Invalid:rs,AccessKeyId:cs,SecretAccessKey:ls,PhoneNumbers:ds,TemplateCode:us,SignName:ps,"Sms template must contain parameters: ":"תבנית SMS חייבת להכיל פרמטרים: ","Bark Endpoint":"Bark Endpoint","Bark Group":"Bark Group","Bark Sound":"Bark Sound",WebHookUrl:ms,SecretKey:gs,"For safety, must use secret key":"לבטיחות, חייב להשתמש במפתח סודיy","Device Token":"אסימון מכשיר",Platform:hs,iOS:Ss,Android:ys,Huawei:Ds,High:Ts,Retry:ks,Topic:Ps,"WeCom Bot Key":"WeCom Bot Key","Setup Proxy":"הגדרת פרוקסי","Proxy Protocol":"פרוטוקול פרוקסי","Proxy Server":"שרת פרוקסי","Proxy server has authentication":"לשרת ה- Proxy יש אימות",User:As,Installed:bs,"Not installed":"לא מותקן",Running:Ms,"Not running":"לא רץ","Remove Token":"הסר אסימון",Start:ws,Stop:fs,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"הוסף דף סטטוס חדש",Slug:vs,"Accept characters:":"קבל תווים:",startOrEndWithOnly:Cs,"No consecutive dashes":"אין מקפים רצופים",Next:Is,"The slug is already taken. Please choose another slug.":"השבלול כבר נלקח.אנא בחר שבלול נוסף.","No Proxy":"אין פרוקסי",Authentication:Rs,"HTTP Basic Auth":"HTTP בסיסי Auth","New Status Page":"דף סטטוס חדש","Page Not Found":"הדף לא נמצא","Reverse Proxy":"פרוקסי הפוך",Backup:Ns,About:Ls,wayToGetCloudflaredURL:Es,cloudflareWebsite:Us,"Message:":"הוֹדָעָה:","Don't know how to get the token? Please read the guide:":"לא יודע איך להשיג את האסימון?אנא קרא את המדריך:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"החיבור הנוכחי עשוי ללכת לאיבוד אם אתה מתחבר כרגע באמצעות מנהרת CloudFlare.האם אתה בטוח רוצה לעצור את זה?הקלד את הסיסמה הנוכחית שלך כדי לאשר אותה.","HTTP Headers":"כותרות HTTP","Trust Proxy":"אמון בפרוקסי","Other Software":"תוכנה אחרת","For example: nginx, Apache and Traefik.":"למשל: Nginx, Apache ו- Traefik.","Please read":"בבקשה תקרא","Subject:":"נושא:","Valid To:":"תקף ל:","Days Remaining:":"ימים שנותרו:","Issuer:":"המנפיק:","Fingerprint:":"טביעת אצבע:","No status pages":"אין דפי סטטוס","Domain Name Expiry Notification":"הודעה על תום שם תחום",Proxy:"פרוקסי","Date Created":"תאריך יצירה",HomeAssistant:Hs,onebotHttpAddress:xs,onebotMessageType:Gs,onebotGroupMessage:Fs,onebotPrivateMessage:Ks,onebotUserOrGroupId:Os,onebotSafetyTips:Bs,"PushDeer Key":"PushDeer Key","Footer Text":"טקסט כותרת תחתונה ","Show Powered By":"הצג מופעל על ידי ","Domain Names":"שמות דומיין ",signedInDisp:Ws,signedInDispDisabled:Vs,RadiusSecret:js,RadiusSecretDescription:qs,RadiusCalledStationId:zs,RadiusCalledStationIdDescription:Js,RadiusCallingStationId:Qs,RadiusCallingStationIdDescription:Xs,"Certificate Expiry Notification":"הודעת תפוגה של אישור","API Username":"שם משתמש API","API Key":"מפתח API","Recipient Number":"מספר הנמען","From Name/Number":"משם/מספר","Leave blank to use a shared sender number.":"השאר ריק כדי להשתמש במספר שולח משותף.","Octopush API Version":"גרסת API של תמנון","Legacy Octopush-DM":"Legacy Octopush-DM",endpoint:Zs,octopushAPIKey:Ys,octopushLogin:_s,promosmsLogin:$s,promosmsPassword:en,"pushoversounds pushover":"Pushover (ברירת מחדל)","pushoversounds bike":"אופניים","pushoversounds bugle":"חֲצוֹצְרָה","pushoversounds cashregister":"קופה רושמת","pushoversounds classical":"קלַאסִי","pushoversounds cosmic":"קוֹסמִי","pushoversounds falling":"נופל","pushoversounds gamelan":"gamelan","pushoversounds incoming":"נִכנָס","pushoversounds intermission":"Intermission","pushoversounds magic":"קֶסֶם","pushoversounds mechanical":"מֵכָנִי","pushoversounds pianobar":"בר פסנתר","pushoversounds siren":"סִירֶנָה","pushoversounds spacealarm":"אזעקת חלל","pushoversounds tugboat":"סירת משיכה","pushoversounds alien":"אזעקת חייזרים (ארוכה)","pushoversounds climb":"לטפס (ארוך)","pushoversounds persistent":"מתמיד (ארוך)","pushoversounds echo":"הד Pushover (ארוך)","pushoversounds updown":"למעלה (ארוך)","pushoversounds vibrate":"לרטוט בלבד","pushoversounds none":"אף אחד (שקט)",pushyAPIKey:on,pushyToken:tn,"Show update if available":"הצג עדכון אם זמין","Also check beta release":"בדוק גם את שחרור הבטא","Using a Reverse Proxy?":"באמצעות פרוקסי הפוך?","Check how to config it for WebSocket":"בדוק כיצד להגדיר אותו ל- WebSocket","Steam Game Server":"שרת משחק קיטור","Most likely causes:":"ככל הנראה גורם:","The resource is no longer available.":"המשאב כבר לא זמין.","There might be a typing error in the address.":"יתכן שיש שגיאת הקלדה בכתובת.","What you can try:":"מה שאתה יכול לנסות:","Retype the address.":"הקלד מחדש את הכתובת.","Go back to the previous page.":"חזור לדף הקודם.","Coming Soon":"בקרוב",wayToGetClickSendSMSToken:an,"Connection String":"מחרוזת חיבור",Query:sn,settingsCertificateExpiry:nn,certificationExpiryDescription:rn,"Setup Docker Host":"הגדרת מארח Docker","Connection Type":"סוג חיבור","Docker Daemon":"Docker Daemon",deleteDockerHostMsg:cn,socket:ln,tcp:dn,"Docker Container":"מיכל Docker","Container Name / ID":"שם מכולה / מזהה","Docker Host":"מארח דוקר","Docker Hosts":"מארחי Docker","ntfy Topic":"ntfy Topic",Domain:un,Workstation:pn,disableCloudflaredNoAuthMsg:mn,trustProxyDescription:gn,wayToGetLineNotifyToken:hn,Examples:Sn,"Home Assistant URL":"כתובת URL עוזרת ביתית","Long-Lived Access Token":"אסימון גישה ארוכת שנים","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"ניתן ליצור אסימון גישה לאורך זמן על ידי לחיצה על שם הפרופיל שלך (שמאל למטה) וגלילה לתחתית ואז לחץ על צור אסימון. ","Notification Service":"Notification Service","default: notify all devices":"default: notify all devices",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'רשימה של שירותי הודעה ניתן למצוא בעוזר הבית תחת "כלי מפתחים> שירותים " חפש "הודעה " כדי למצוא את שם המכשיר/טלפון שלך.',"Automations can optionally be triggered in Home Assistant:":"אוטומציות יכולות להיות מופעלות באופן אופציונלי לעוזר הבית:","Trigger type:":"סוג ההדק:","Event type:":"סוג אירוע:","Event data:":"נתוני אירועים:","Then choose an action, for example switch the scene to where an RGB light is red.":"ואז בחר פעולה, למשל העבר את הסצינה למקום בו אור RGB הוא אדום.","Frontend Version":"גרסת Frontend","Frontend Version do not match backend version!":"גרסת Frontend לא תואמת את גרסת Backend!","Base URL":"Base URL",goAlertInfo:yn,goAlertIntegrationKeyInfo:Dn,goAlert:Tn,backupOutdatedWarning:kn,backupRecommend:Pn,Optional:An,squadcast:bn,SendKey:Mn,"SMSManager API Docs":"מסמכי API של SmsManager ","Gateway Type":"סוג שער",SMSManager:wn,"You can divide numbers with":"אתה יכול לחלק מספרים עם",or:fn,recurringInterval:vn,Recurring:Cn,strategyManual:In,warningTimezone:Rn,weekdayShortMon:Nn,weekdayShortTue:Ln,weekdayShortWed:En,weekdayShortThu:Un,weekdayShortFri:Hn,weekdayShortSat:xn,weekdayShortSun:Gn,dayOfWeek:Fn,dayOfMonth:Kn,lastDay:On,lastDay1:Bn,lastDay2:Wn,lastDay3:Vn,lastDay4:jn,"No Maintenance":"אין תחזוקה",pauseMaintenanceMsg:qn,"maintenanceStatus-under-maintenance":"מתבצעות עבודות תחזוקה","maintenanceStatus-inactive":"לא פעיל","maintenanceStatus-scheduled":"מתוזמן","maintenanceStatus-ended":"הסתיים","maintenanceStatus-unknown":"לא ידוע","Display Timezone":"הצג אזור זמן","Server Timezone":"אזור זמן של שרת",statusPageMaintenanceEndDate:zn,IconUrl:Jn,"Enable DNS Cache":"הפעל מטמון DNS",Enable:Qn,Disable:Xn,dnsCacheDescription:Zn,"Single Maintenance Window":"חלון תחזוקה בודד","Maintenance Time Window of a Day":"חלון זמן תחזוקה ביום","Effective Date Range":"טווח תאריכים אפקטיבי","Schedule Maintenance":"לוח זמנים לתחזוקה","Date and Time":"תאריך ושעה","DateTime Range":"טווח תאריכים וזמן",Strategy:Yn,"Free Mobile User Identifier":"מזהה משתמש נייד בחינם","Free Mobile API Key":"מפתח API חינם לנייד","Enable TLS":"אפשר TLS","Proto Service Name":"שם שירות פרוטו","Proto Method":"שיטת פרוטו","Proto Content":"תוכן פרוטו",Economy:_n,Lowcost:$n,high:ei,"General Monitor Type":"מוניטור כללי","Passive Monitor Type":"מוניטור פסיבי","Specific Monitor Type":"סוג מוניטור ספציפי","Custom Monitor Type":"סוג צג מותאם אישית",Monitor:oi,promosmsAllowLongSMS:ti,loadingError:ai,plugin:si,install:ni,installing:ii,uninstall:ri,uninstalling:ci,confirmUninstallPlugin:li,Help:di,Game:ui,"Packet Size":"גודל חבילה",markdownSupported:pi,Custom:mi,ZohoCliq:gi,wayToGetZohoCliqURL:hi,dataRetentionTimeError:Si,infiniteRetention:yi,confirmDeleteTagMsg:Di,Kook:Ti,wayToGetKookBotToken:ki,wayToGetKookGuildID:Pi,"Guild ID":"מזהה גילד"})}}}));
