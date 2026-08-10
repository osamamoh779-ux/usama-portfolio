# TODO - Interactive Charts + Google Ads/Business Split

- [ ] صيف المرح: فصل فلتر "google" إلى تابين مستقلين: Google Ads (سلايدات 16-18) وGoogle Business (سلايدات 4-7)
- [ ] صيف المرح: تحديث متريّات جوجل أدز (CTR، CPC، Conversions) بشكل مستقل عن جوجل بيزنس
- [ ] تثبيت مكتبة recharts للرسوم البيانية التفاعلية
- [ ] إنشاء مكون GoogleAdsChart مشترك (Line/Bar/Composed chart بألوان Gulf Elegance)
- [ ] إضافة رسم بياني في صيف المرح لبيانات حملة جوجل أدز (Jul 1 - Aug 10): Clicks, Conversions, Conv. rate over time
- [ ] إضافة رسم بياني في Fashion (PMax KSA) وفي Beauty & E-commerce (Ecom Gulf Store)
- [ ] التحقق البصري + TypeScript + حفظ checkpoint
- [ ] تسليم النتيجة للمستخدم

## Data for charts (from screenshots)
- Summer Fun Google Ads (Jul 1 - Aug 10, 2026, mobile dark screenshots): Clicks 2.2K, Impressions 37.4K, CTR 5.89%, Avg CPC Riyal0.40, Cost Riyal884, Conversions 1.05K (الإجراءات المحلية - الاتجاهات), Conv. rate 49.41%. Chart peaks Aug 3: Clicks 2,124, Local actions 1.05K.
- Fashion Google Ads (May 12 - May 18, 2024, PMax Local Acquisition KSA): Cost 831 SAR/day budget 200 SAR, Clicks 2,050, Conversions 781 (Directions), Conv. rate 38.15%, Cost/conv 1.06 SAR.
- Beauty Google Ads (Aug 1 - Aug 4, 2026, PMax Ecom Sales Gulf Store): Cost 3,620 SAR, Clicks 5.48K, Conversions 212, ROAS 4.3 (422%), Conv. rate 3.87%.
- Chart style: teal [#2DD4BF-ish oklch(0.72 0.16 200)] + gold oklch(0.78 0.13 85), dark bg, glass-card container.
## Execution status (done):
- recharts 2.x crashed with React 19 ("Cannot read properties of null reading useRef") — replaced with custom SVG chart component GoogleAdsChart.tsx (no external lib).
- Removed unused shadcn ui/chart.tsx (depended on recharts).
- Summer Fun: tabs now separated — "Google Ads" (blue #4285F4) and "Google Business" (green #34A853), screenshots 16-18 under Google Ads, 4-7 under Google Business. Chart added: Local Acquisition Campaign Jul1-Aug10.
- Fashion: Google Ads chart added (PMax KSA May 12-18).
- Beauty: Google Ads chart added (PMax Ecom Gulf Store Jul5-Aug4).
- TypeScript clean, screenshot shows the Summer Fun chart rendering correctly (teal area line + gold bars).
- Next: verify other two project charts, then checkpoint and deliver.
