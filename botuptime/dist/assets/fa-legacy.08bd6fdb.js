System.register([],(function(e,t){"use strict";return{execute:function(){var t=e("languageName","Farsi"),a=e("checkEverySecond","بررسی هر {0} ثانیه."),o=e("retryCheckEverySecond","تکرار مجدد هر {0} ثانیه."),r=e("retriesDescription","حداکثر تعداد تکرار پیش از علامت گذاری وب‌سایت بعنوان خارج از دسترس و ارسال اطلاع‌رسانی."),i=e("ignoreTLSError","بی‌خیال ارور TLS/SSL برای سایت‌های HTTPS"),s=e("upsideDownModeDescription","نتیجه وضعیت را برعکس کن، مثلا اگر سرویس در دسترس بود فرض کن که سرویس پایین است!"),n=e("maxRedirectDescription","حداکثر تعداد ریدایرکتی که سرویس پشتیبانی کند. برای اینکه ری‌دایرکت‌ها پشتیبانی نشوند، عدد 0 را وارد کنید."),c=e("acceptedStatusCodesDescription","لطفا HTTP Status Code هایی که میخواهید به عنوان پاسخ موفقیت آمیز در نظر گرفته شود را انتخاب کنید."),p=e("passwordNotMatchMsg","تکرار رمز عبور مطابقت ندارد!"),d=e("notificationDescription","برای اینکه سرویس اطلاع‌رسانی کار کند، آنرا به یکی از مانیتور‌ها متصل کنید."),l=e("keywordDescription","در نتیجه درخواست (اهمیتی ندارد پاسخ JSON است یا HTML) بدنبال این کلمه بگرد (حساس به کوچک/بزرگ بودن حروف)."),u=e("pauseDashboardHome","متوقف شده"),g=e("deleteMonitorMsg","آیا از حذف این مانیتور مطمئن هستید؟"),m=e("deleteNotificationMsg","آیا مطمئن هستید که میخواهید این سرویس اطلاع‌رسانی را برای تمامی مانیتورها حذف کنید؟"),S=e("resolverserverDescription","سرویس CloudFlare به عنوان سرور پیش‌فرض استفاده می‌شود، شما میتوانید آنرا به هر سرور دیگری بعدا تغییر دهید."),D=e("rrtypeDescription","لطفا نوع Resource Record را انتخاب کنید."),b=e("pauseMonitorMsg","آیا مطمئن هستید که میخواهید این مانیتور را متوقف کنید ؟"),M=e("enableDefaultNotificationDescription","برای هر مانیتور جدید، این سرویس اطلاع‌رسانی به صورت پیش‌فرض فعال خواهد شد. البته که شما میتوانید به صورت دستی آنرا برای هر مانیتور به صورت جداگانه غیر فعال کنید."),w=e("clearEventsMsg","آیا از اینکه تمامی تاریخچه رویداد‌های این مانیتور حذف شود مطمئن هستید؟"),v=e("clearHeartbeatsMsg","آیا از اینکه تاریخچه تمامی Heartbeat های این مانیتور حذف شود مطمئن هستید؟ "),y=e("confirmClearStatisticsMsg","آیا از حذف تمامی آمار و ارقام مطمئن هستید؟"),h=e("importHandleDescription"," اگر که میخواهید بیخیال مانیتورها و یا سرویس‌های اطلاع‌رسانی که با نام مشابه از قبل موجود هستند شوید، گزینه 'بی‌خیال موارد ..' را انتخاب کنید. توجه کنید که گزینه 'بازنویسی' تمامی موارد موجود با نام مشابه را از بین خواهد برد."),T=e("confirmImportMsg","آیا از بازگردانی بک آپ مطمئن هستید؟ لطفا از اینکه نوع بازگردانی درستی را انتخاب کرده‌اید اطمینان حاصل کنید!"),A=e("twoFAVerifyLabel","لطفا جهت اطمینان از عملکرد احراز هویت دو مرحله‌ای توکن خود را وارد کنید!"),f=e("tokenValidSettingsMsg","توکن شما معتبر است، هم اکنون میتوانید احراز هویت دو مرحله‌ای را فعال کنید!"),N=e("confirmEnableTwoFAMsg"," آیا از فعال سازی احراز هویت دو مرحله‌ای مطمئن هستید؟"),P=e("confirmDisableTwoFAMsg","آیا از غیرفعال سازی احراز هویت دومرحله‌ای مطمئن هستید؟"),R=e("Settings","تنظیمات"),k=e("Dashboard","پیشخوان"),L=e("Language","زبان"),C=e("Appearance","ظاهر"),E=e("Theme","پوسته"),H=e("General","عمومی"),U=e("Version","نسخه"),F=e("List","لیست"),I=e("Add","اضافه"),x=e("Up","فعال"),G=e("Down","غیرفعال"),O=e("Pending","در انتظار تایید"),B=e("Unknown","نامشخص"),V=e("Pause","توقف"),K=e("Name","نام"),J=e("Status","وضعیت"),z=e("DateTime","تاریخ و زمان"),W=e("Message","پیام"),Y=e("Resume","ادامه"),Q=e("Edit","ویرایش"),j=e("Delete","حذف"),q=e("Current","فعلی"),X=e("Uptime","آپتایم"),Z=e("day","روز"),$=e("hour","ساعت"),_=e("Response","پاسخ"),ee=e("Ping","Ping"),te=e("Keyword","کلمه کلیدی"),ae=e("URL","آدرس (URL)"),oe=e("Hostname","نام میزبان (Hostname)"),re=e("Port","پورت"),ie=e("Retries","تلاش مجدد"),se=e("Advanced","پیشرفته"),ne=e("Save","ذخیره"),ce=e("Notifications","اطلاع‌رسانی‌ها"),pe=e("Light","روشن"),de=e("Dark","تاریک"),le=e("Auto","اتوماتیک"),ue=e("Normal","معمولی"),ge=e("Bottom","پایین"),me=e("None","هیچ کدام"),Se=e("Timezone","موقعیت زمانی"),De=e("Logout","خروج"),be=e("Leave","منصرف شدم"),Me=e("Confirm","تایید"),we=e("Yes","بلی"),ve=e("No","خیر"),ye=e("Username","نام کاربری"),he=e("Password","کلمه عبور"),Te=e("Login","ورود"),Ae=e("Email","ایمیل"),fe=e("Test","تست"),Ne=e("Export","استخراج اطلاعات"),Pe=e("Import","ورود اطلاعات"),Re=e("respTime","زمان پاسخگویی (میلی‌ثانیه)"),ke=e("notAvailableShort","ناموجود"),Le=e("Create","ایجاد"),Ce=e("Events","رخداد‌ها"),Ee=e("Heartbeats","Heartbeats"),He=e("backupDescription","شما میتوانید تمامی مانیتورها و تنظیمات اطلاع‌رسانی‌ها را در قالب یه فایل JSON دریافت کنید."),Ue=e("backupDescription2","البته تاریخچه رخدادها دراین فایل قرار نخواهند داشت."),Fe=e("backupDescription3","توجه داشته باشید که تمامی اطلاعات حساس شما مانند توکن‌ها نیز در این فایل وجود خواهد داشت ، پس از این فایل به خوبی مراقبت کنید."),Ie=e("alertNoFile","لطفا یک فایل برای «ورود اطلاعات» انتخاب کنید.."),xe=e("alertWrongFileType","یک فایل JSON انتخاب کنید."),Ge=e("Overwrite","بازنویسی"),Oe=e("Options","تنظیمات"),Be=e("Active","فعال"),Ve=e("Inactive","غیرفعال"),Ke=e("Token","توکن"),Je=e("Tags","برچسب‌ها"),ze=e("color","رنگ"),We=e("Gray","خاکستری"),Ye=e("Red","قرمز"),Qe=e("Orange","نارنجی"),je=e("Green","سبز"),qe=e("Blue","آبی"),Xe=e("Indigo","نیلی"),Ze=e("Purple","بنفش"),$e=e("Pink","صورتی"),_e=e("statusPageNothing","چیزی اینجا نیست، لطفا یک گروه و یا یک مانیتور اضافه کنید!"),et=e("records","مورد"),tt=e("Info","اطلاعات"),at=e("apprise","Apprise (Support 50+ Notification services)"),ot=e("Monitor","مانیتور | مانتیور ها"),rt=e("Help","کمک"),it=e("Game","بازی"),st=e("statusMaintenance","در دست تعمیر"),nt=e("Maintenance","در حال تعمیر"),ct=e("markdownSupported","شیوه نگارشی Markdown پشتیبانی می شود");e("default",{languageName:t,checkEverySecond:a,retryCheckEverySecond:o,retriesDescription:r,ignoreTLSError:i,upsideDownModeDescription:s,maxRedirectDescription:n,acceptedStatusCodesDescription:c,passwordNotMatchMsg:p,notificationDescription:d,keywordDescription:l,pauseDashboardHome:u,deleteMonitorMsg:g,deleteNotificationMsg:m,resolverserverDescription:S,rrtypeDescription:D,pauseMonitorMsg:b,enableDefaultNotificationDescription:M,clearEventsMsg:w,clearHeartbeatsMsg:v,confirmClearStatisticsMsg:y,importHandleDescription:h,confirmImportMsg:T,twoFAVerifyLabel:A,tokenValidSettingsMsg:f,confirmEnableTwoFAMsg:N,confirmDisableTwoFAMsg:P,Settings:R,Dashboard:k,"New Update":"بروزرسانی جدید!",Language:L,Appearance:C,Theme:E,General:H,Version:U,"Check Update On GitHub":"بررسی بروزرسانی بر روی گیت‌هاب",List:F,Add:I,"Add New Monitor":"اضافه کردن مانیتور جدید","Quick Stats":"خلاصه وضعیت",Up:x,Down:G,Pending:O,Unknown:B,Pause:V,Name:K,Status:J,DateTime:z,Message:W,"No important events":"رخداد جدیدی موجود نیست.",Resume:Y,Edit:Q,Delete:j,Current:q,Uptime:X,"Cert Exp.":"تاریخ انقضای SSL",day:Z,"-day":"-روز",hour:$,"-hour":"-ساعت",Response:_,Ping:ee,"Monitor Type":"نوع مانیتور",Keyword:te,"Friendly Name":"عنوان",URL:ae,Hostname:oe,Port:re,"Heartbeat Interval":"فاصله هر Heartbeat",Retries:ie,"Heartbeat Retry Interval":"فاصله تلاش مجدد برایHeartbeat",Advanced:se,"Upside Down Mode":"حالت بر عکس","Max. Redirects":"حداکثر تعداد ری‌دایرکت","Accepted Status Codes":"وضعیت‌های (Status Code) های قابل قبول",Save:ne,Notifications:ce,"Not available, please setup.":"هیچ موردی موجود نیست، اولین مورد را راه اندازی کنید!","Setup Notification":"راه اندازی اطلاع‌رسانی‌",Light:pe,Dark:de,Auto:le,"Theme - Heartbeat Bar":"ظاهر نوار Heartbeat",Normal:ue,Bottom:ge,None:me,Timezone:Se,"Search Engine Visibility":"قابلیت دسترسی برای موتورهای جستجو","Allow indexing":"اجازه ایندکس شدن را بده.","Discourage search engines from indexing site":"به موتورهای جستجو اجازه ایندکس کردن این سامانه را نده.","Change Password":"تغییر رمزعبور","Current Password":"رمزعبور فعلی","New Password":"رمزعبور جدید","Repeat New Password":"تکرار رمزعبور جدید","Update Password":"بروز رسانی رمز عبور","Disable Auth":"غیر فعال سازی تایید هویت","Enable Auth":"فعال سازی تایید هویت","disableauth.message1":"آیا مطمئن هستید که میخواهید <strong>احراز هویت را غیر فعال کنید</strong>?","disableauth.message2":"این ویژگی برای کسانی است که <strong> لایه امنیتی شخص ثالث دیگر بر روی این آدرس فعال کرده‌اند</strong>، مانند Cloudflare Access.","Please use this option carefully!":"لطفا از این امکان با دقت استفاده کنید.",Logout:De,Leave:be,"I understand, please disable":"متوجه هستم، لطفا غیرفعال کنید!",Confirm:Me,Yes:we,No:ve,Username:ye,Password:he,"Remember me":"مراب هب خاطر بسپار",Login:Te,"No Monitors, please":"هیچ مانیتوری موجود نیست، لطفا","add one":"یک مورد اضافه کنید","Notification Type":"نوع اطلاع‌رسانی",Email:Ae,Test:fe,"Certificate Info":"اطلاعات سرتیفیکت","Resolver Server":"سرور Resolver","Resource Record Type":"نوع رکورد (Resource Record Type)","Last Result":"آخرین نتیجه","Create your admin account":"ایجاد حساب کاربری مدیر","Repeat Password":"تکرار رمز عبور","Import Backup":"بازگردانی فایل پشتیبان","Export Backup":"ذخیره فایل پشتیبان",Export:Ne,Import:Pe,respTime:Re,notAvailableShort:ke,"Default enabled":"به صورت پیش‌فرض فعال باشد.","Apply on all existing monitors":"بر روی تمامی مانیتور‌های فعلی اعمال شود.",Create:Le,"Clear Data":"پاکسازی داده‌ها",Events:Ce,Heartbeats:Ee,"Auto Get":"Auto Get",backupDescription:He,backupDescription2:Ue,backupDescription3:Fe,alertNoFile:Ie,alertWrongFileType:xe,"Clear all statistics":"پاکسازی تمامی آمار و ارقام","Skip existing":"بی‌خیال مواردی که از قبل موجود است",Overwrite:Ge,Options:Oe,"Keep both":"هر دو را نگه‌ دار","Verify Token":"تایید توکن","Setup 2FA":"تنظیمات احراز دو مرحله‌ای","Enable 2FA":"فعال سازی احراز 2 مرحله‌ای","Disable 2FA":"غیر فعال کردن احراز 2 مرحله‌ای","2FA Settings":"تنظیمات احراز 2 مرحله‌ای","Two Factor Authentication":"احراز هویت دومرحله‌ای",Active:Be,Inactive:Ve,Token:Ke,"Show URI":"نمایش آدرس (URI) ",Tags:Je,"Add New below or Select...":"یک مورد جدید اضافه کنید و یا از لیست انتخاب کنید…","Tag with this name already exist.":"یک برچسب با این «نام» از قبل وجود دارد","Tag with this value already exist.":"یک برچسب با این «مقدار» از قبل وجود دارد.",color:ze,"value (optional)":"مقدار (اختیاری)",Gray:We,Red:Ye,Orange:Qe,Green:je,Blue:qe,Indigo:Xe,Purple:Ze,Pink:$e,"Search...":"جستجو...","Avg. Ping":"متوسط پینگ","Avg. Response":"متوسط زمان پاسخ","Entry Page":"صفحه ورودی",statusPageNothing:_e,"No Services":"هیچ سرویسی موجود نیست","All Systems Operational":"تمامی سیستم‌ها عملیاتی هستند!","Partially Degraded Service":"افت نسبی کیفیت سرویس","Degraded Service":"افت کامل کیفیت سرویس","Add Group":"اضافه کردن گروه","Add a monitor":"اضافه کردن مانیتور","Edit Status Page":"ویرایش صفحه وضعیت","Status Page":"صفحه وضعیت","Status Pages":"صفحه وضعیت","Go to Dashboard":"رفتن به پیشخوان","Uptime Kuma":"آپتایم کوما",records:et,"One record":"یک مورد",Info:tt,"Powered by":"نیرو گرفته از",apprise:at,Monitor:ot,Help:rt,Game:it,"Primary Base URL":"آدرس URL اصلی","Passive Monitor Type":"حالت مانیتور غیرفعال","Specific Monitor Type":"حالت مانیتور شخصی",statusMaintenance:st,Maintenance:nt,"General Monitor Type":"حالت مانیتور عمومی",markdownSupported:ct})}}}));