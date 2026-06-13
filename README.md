# Bucheen

* **Framework:** React / Next.js
* **Dil:** TypeScript
* **Stil:** Tailwind CSS

Bu dokümantasyon, projenin tasarımından yayına alınmasına kadar olan süreci 4 temel teknik katmanda incelemektedir.

### 1. Mimari Tasarım ve Bileşenleşme
Proje, "Atomic Design" prensiplerine yakın, modüler bir yapıda kurgulanmıştır. Arayüz, Hero, Navbar, Features ve Testimonials gibi birbirini tetiklemeyen bağımsız bileşenlere ayrılarak, kodun sürdürülebilirliği sağlanmıştır.

### 2. Görsel Varlık Yönetimi ve SVG Entegrasyonu
Projedeki tüm dekoratif grafikler (`graphics/` klasörü), tasarım araçları üzerinden vektörel olarak dışa aktarılmıştır.
* **Dönüşüm Süreci:** İçe aktarılan ham SVG'ler, tarayıcı performansını optimize etmek amacıyla CSS ve Tailwind yardımcıları ile manipüle edilebilir formata dönüştürülmüştür.
* **AI Katkısı:** Bu dönüşüm sürecindeki karmaşık SVG yapılandırmaları ve katman optimizasyonları için **AI:Gemini** kullanılmıştır.

### 3. Responsive Yerleşim Stratejisi
Tasarım "mobile-first" yaklaşımıyla geliştirilmiştir. Masaüstü ve mobil ekran boyutları arasındaki görsel hiyerarşi farkları, Tailwind CSS'in `md:` öneki ile kontrol altına alınmıştır.

### 4. Z-Index ve Katmanlandırma Mimarisi
Görsel derinlik oluşturmak adına, arka plan dekoratif öğeleri ile etkileşimli içerikler birbirinden yalıtılmıştır ve kullanıcıya en optimize UI deneyimi verilmesi hedeflenmiştir

---