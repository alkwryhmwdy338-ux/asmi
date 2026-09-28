طريقة التشغيل:

1) أنشئ مشروعاً في Firebase.
2) فعّل Authentication > Sign-in method > Google.
3) أنشئ Firestore Database.
4) أضف تطبيق Web في Firebase وانسخ إعدادات firebaseConfig إلى firebase-config.js.
5) انشر ملفات هذا المجلد على الاستضافة التي تستخدمها (Cloudflare Pages/Workers أو غيرها).
6) أضف نطاق موقعك في Firebase Authentication > Settings > Authorized domains.
7) عند الضغط على Google سيظهر اختيار حساب Google، وبعد اختيار الحساب يتم إنشاء/تحديث مستخدم في:
   Firestore > users > USER_UID

مهم:
- لا تضع كلمات مرور Google داخل المشروع.
- لا تحتاج قاعدة بيانات خاصة بكل جهاز.
- نفس حساب Google يعطي نفس UID، لذلك يمكن للمستخدم تسجيل الدخول من هاتف أو كمبيوتر آخر والوصول إلى نفس سجل الحساب.
- ملف firestore.rules يقيّد كل مستخدم بحيث لا يقرأ أو يعدّل بيانات مستخدم آخر.

إذا كان لديك مشروع Firebase جاهز، استبدل قيم firebase-config.js فقط.
