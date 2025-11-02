# راهنمای توسعه بیمار مجازی

## شروع به کار

1. `npm install` - نصب پکیج‌ها
2. `npm run dev` - اجرای سرور توسعه
3. باز کردن http://localhost:3000

## ساختار پروژه

- `/src/components/scene` - کامپوننت‌های صحنه سه‌بعدی
- `/src/components/patient` - مدل و منطق بیمار
- `/src/components/tools` - ابزارهای پزشکی
- `/src/components/audio` - سیستم صدا
- `/public/models` - مدل‌های سه‌بعدی
- `/public/sounds` - فایل‌های صوتی

## نکات مهم

1. از مدل‌های GLB/GLTF برای بیمار استفاده کنید
2. صداها باید در فرمت MP3 با کیفیت مناسب باشند
3. برای عملکرد بهتر از LOD (Level of Detail) استفاده کنید