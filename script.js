// ------------------------------
// أطلس سوكنة - Atlas Sukna
// الإصدار الكامل والمحدث
// ------------------------------

// تهيئة الخريطة - إحداثيات سوكنة
var map = L.map('map').setView([29.0694, 15.7827], 10);

// طبقة الخريطة الأساسية
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors',
    subdomains: 'abcd',
    maxZoom: 18,
    minZoom: 6
}).addTo(map);

// ========================
// 1. الملخص العام عن سوكنة
// ========================
const summaryHTML = `
    <p><strong>سوكنة (Sukna)</strong> هي مدينة واحة تتبع شعبية الجفرة، جنوب غرب ليبيا. تبعد عن طرابلس حوالي 600 كم، وعن مدينة هون حوالي 16 كم.</p>
    <ul>
        <li>📍 <strong>عدد السكان:</strong> حوالي 13,000 نسمة (تقديرات حديثة).</li>
        <li>🏛️ <strong>التاريخ:</strong> من أقدم مدن الجفرة، كانت محطة رئيسية على طريق القوافل الصحراوية.</li>
        <li>🌴 <strong>أبرز المقومات:</strong> عيون المياه الطبيعية، نخيل التمر، الموقع الاستراتيجي.</li>
        <li>🎭 <strong>الثقافة:</strong> تراث ليبي أصيل، لهجة محلية مميزة، حرف يدوية.</li>
        <li>🏞️ <strong>المعالم:</strong> مسجد قديم (القرن 15م)، قصر أثري، سد وادي وشكة.</li>
    </ul>
    <p><em>📌 الأطلس التفاعلي يعرض طبقات متعددة: إدارية، خدمية، صحية، ثقافية، رياضية، سياحية، أمنية، سدود، أودية، جبال، قلاع، دينية، تاريخية.</em></p>
`;

document.getElementById('summary-content').innerHTML = summaryHTML;

// التحكم بلوحة الملخص
const panel = document.getElementById('summary-panel');
const closeBtn = document.getElementById('close-summary');
const openBtn = document.getElementById('open-summary');
closeBtn.addEventListener('click', () => panel.classList.add('closed'));
openBtn.addEventListener('click', () => panel.classList.remove('closed'));

// ========================
// 2. إنشاء الطبقات (Layer Groups)
// ========================
const layers = {
    administrative: L.layerGroup().addTo(map),
    services: L.layerGroup().addTo(map),
    education: L.layerGroup().addTo(map),
    health: L.layerGroup().addTo(map),
    culture: L.layerGroup().addTo(map),
    sports: L.layerGroup().addTo(map),
    entertainment: L.layerGroup().addTo(map),
    tourism: L.layerGroup().addTo(map),
    security: L.layerGroup().addTo(map),
    dams_nature: L.layerGroup().addTo(map),
    valleys: L.layerGroup().addTo(map),
    mountains: L.layerGroup().addTo(map),
    castles: L.layerGroup().addTo(map),
    religious: L.layerGroup().addTo(map),
    historical: L.layerGroup().addTo(map)
};

// ========================
// 3. إضافة المعالم حسب الطبقات (بيانات من ملف Excel والنقاط الجديدة)
// ========================

// ---------- المدن والمناطق (إدارية) ----------
const cities = [
    { name: "سوكنة", lat: 29.069411, lon: 15.782664, type: "مدينة" },
    { name: "هون", lat: 29.1245649, lon: 15.9402605, type: "مدينة" },
    { name: "ودان", lat: 29.1613826, lon: 16.141311, type: "مدينة" },
    { name: "شعبية سوزاي", lat: 29.123577, lon: 15.9621387, type: "حي" },
    { name: "الرواغة", lat: 29.1782331, lon: 16.1606989, type: "ضاحية" },
    { name: "النقازه", lat: 29.1748795, lon: 16.1496053, type: "ضاحية" },
    { name: "لبلاد", lat: 29.1612392, lon: 16.1348209, type: "ضاحية" },
    { name: "المقرون", lat: 29.1471473, lon: 16.1441335, type: "ضاحية" },
    { name: "حي الجماعات", lat: 29.1320955, lon: 15.9373829, type: "حي" },
    { name: "منطقة السباخ", lat: 29.1696749, lon: 16.1451636, type: "منطقة" },
    { name: "عمارات الصور", lat: 29.1218897, lon: 15.9307995, type: "حي" }
];
cities.forEach(c => L.marker([c.lat, c.lon]).bindPopup(`🏛️ <b>${c.name}</b><br>${c.type}`).addTo(layers.administrative));

// ---------- المؤسسات التعليمية (علمية) ----------
const education = [
    { name: "مدرسة فاطمة الزهراء", lat: 29.1667895, lon: 16.1352189, type: "مدرسة" },
    { name: "مدرسة المقرون", lat: 29.1445719, lon: 16.1455989, type: "مدرسة" },
    { name: "مدرسة ودان الثانوية بنين", lat: 29.1571042, lon: 16.1418514, type: "ثانوية" },
    { name: "روضة الزهور", lat: 29.1595176, lon: 16.1395103, type: "روضة" },
    { name: "المعهد العالي للعلوم والتقنية", lat: 29.1631845, lon: 16.1492903, type: "معهد عالي" },
    { name: "مدرسة عقبة بن نافع", lat: 29.1744565, lon: 16.1457244, type: "مدرسة" },
    { name: "كلية الآداب - هون", lat: 29.1317178, lon: 15.9484465, type: "كلية" },
    { name: "مدرسة القدس", lat: 29.1280971, lon: 15.9617318, type: "مدرسة" },
    { name: "مدرسة الشهيد ناصر الزوي", lat: 29.1338676, lon: 15.9630529, type: "مدرسة" },
    { name: "كلية التقنية الهندسية - هون", lat: 29.1271426, lon: 15.9503128, type: "كلية" },
    { name: "مدرسة المركزية الابتدائية", lat: 29.1254973, lon: 15.9402462, type: "مدرسة" },
    { name: "مدرسة الإعدادية بنات", lat: 29.120934, lon: 15.9433455, type: "إعدادية" },
    { name: "مدرسة الإعدادية بنين", lat: 29.1207226, lon: 15.9376638, type: "إعدادية" },
    { name: "مدرسة الثانوية بنات", lat: 29.1211809, lon: 15.9446308, type: "ثانوية" },
    { name: "ثانوية عبدالمطلب الجماعي", lat: 29.1337256, lon: 15.9429674, type: "ثانوية" },
    { name: "مدرسة 17 فبراير", lat: 29.1251841, lon: 15.9831701, type: "مدرسة" },
    { name: "مدرسة ابوبكر فضيل الثانوية", lat: 29.064153, lon: 15.7834709, type: "ثانوية" },
    { name: "مدرسة جيل ليبيا", lat: 29.0675432, lon: 15.7785641, type: "مدرسة" },
    { name: "كلية إدارة الأعمال - ودان", lat: 29.1716637, lon: 16.1461142, type: "كلية" },
    { name: "كلية الآداب والعلوم - هون", lat: 29.1320187, lon: 15.948332, type: "كلية" },
    { name: "المعهد العالي للعلوم والتقنية - هون", lat: 29.1312596, lon: 15.9482649, type: "معهد" },
    { name: "كلية التربية - ودان", lat: 29.1580629, lon: 16.1352419, type: "كلية" },
    { name: "مدرسة الإمام - ودان", lat: 29.1591278, lon: 16.1353435, type: "مدرسة" },
    { name: "مدرسة العهد الجديد", lat: 29.169005, lon: 16.1550146, type: "مدرسة" },
    { name: "منارة لتحفيظ القرآن", lat: 29.1758593, lon: 16.158355, type: "تحفيظ" }
];
education.forEach(e => L.marker([e.lat, e.lon]).bindPopup(`📚 <b>${e.name}</b><br>${e.type}`).addTo(layers.education));

// ---------- المرافق الصحية ----------
const health = [
    { name: "المركز الصحي - ودان", lat: 29.162879, lon: 16.1340559, type: "مركز صحي" },
    { name: "صيدلية عافية - هون", lat: 29.1228896, lon: 15.939136, type: "صيدلية" },
    { name: "صيدلية نور العيون - هون", lat: 29.1299825, lon: 15.9451171, type: "صيدلية" },
    { name: "صيدلية الحياة - هون", lat: 29.1205743, lon: 15.944956, type: "صيدلية" },
    { name: "صيدلية الوطن - هون", lat: 29.1307786, lon: 15.9393207, type: "صيدلية" },
    { name: "صيدلية الأسرة - ودان", lat: 29.1634185, lon: 16.1465492, type: "صيدلية" },
    { name: "صيدلية آراش - ودان", lat: 29.1642652, lon: 16.1473987, type: "صيدلية" },
    { name: "صيدلية - سوكنة", lat: 29.0702646, lon: 15.7850442, type: "صيدلية" },
    { name: "صيدلية الأمل - سوكنة", lat: 29.071593, lon: 15.7840853, type: "صيدلية" }
];
health.forEach(h => L.marker([h.lat, h.lon]).bindPopup(`🏥 <b>${h.name}</b><br>${h.type}`).addTo(layers.health));

// ---------- المرافق الخدمية (بنوك، بريد، محطات) ----------
const services = [
    { name: "مصرف الجمهورية فرع ودان", lat: 29.1727358, lon: 16.1534982, type: "بنك" },
    { name: "مصرف الادخار والاستثمار - هون", lat: 29.1284343, lon: 15.9336303, type: "بنك" },
    { name: "مصرف الجمهورية - هون", lat: 29.1257187, lon: 15.9358354, type: "بنك" },
    { name: "مصرف شمال افريقيا - ودان", lat: 29.1593906, lon: 16.141133, type: "بنك" },
    { name: "الجمهورية فرع سوكنة", lat: 29.0664074, lon: 15.7832185, type: "بنك" },
    { name: "مصرف التجارة والتنمية - هون", lat: 29.131843, lon: 15.9634877, type: "بنك" },
    { name: "المصرف الإسلامي الليبي - هون", lat: 29.1318735, lon: 15.9637452, type: "بنك" },
    { name: "مكتب بريد سوزاي", lat: 29.1310443, lon: 15.9585112, type: "بريد" },
    { name: "مكتب بريد ودان", lat: 29.159411, lon: 16.1408198, type: "بريد" },
    { name: "محطة وقود - سوكنة", lat: 29.0697434, lon: 15.7893998, type: "محطة وقود" },
    { name: "محطة وقود - هون", lat: 29.128967, lon: 15.9288524, type: "محطة وقود" },
    { name: "محطة وقود ودان", lat: 29.1902086, lon: 16.149343, type: "محطة وقود" },
    { name: "محطة وقود الهمة - هون", lat: 29.1246479, lon: 15.9826669, type: "محطة وقود" },
    { name: "محطة وقود المئتين - هون", lat: 29.1247871, lon: 15.981659, type: "محطة وقود" },
    { name: "شيل الأهليه - ودان", lat: 29.1810983, lon: 16.1509565, type: "محطة وقود" },
    { name: "عجاج - سوكنة", lat: 29.0836764, lon: 15.8257235, type: "محطة وقود" },
    { name: "محطة سيارات الأجرة - هون", lat: 29.1237707, lon: 15.9373682, type: "موقف سيارات" },
    { name: "محطة الحافلات - هون", lat: 29.1289606, lon: 15.9342546, type: "موقف حافلات" },
    { name: "اتحاد الشركات الليبية - هون", lat: 29.1313101, lon: 15.9328008, type: "موقف" }
];
services.forEach(s => L.marker([s.lat, s.lon]).bindPopup(`🛠️ <b>${s.name}</b><br>${s.type}`).addTo(layers.services));

// ---------- أماكن ثقافية ----------
const culture = [
    { name: "دار الثقافة - سوكنة", lat: 29.069, lon: 15.779, type: "دار ثقافة" },
    { name: "بيت الثقافة - سوكنة", lat: 29.069, lon: 15.7858, type: "بيت ثقافة" },
    { name: "مكتبة سوكنة العامة", lat: 29.0689, lon: 15.7852, type: "مكتبة" },
    { name: "راديو سوكنة", lat: 29.0684264, lon: 15.7837087, type: "إذاعة" },
    { name: "فرقة ابناء سوكنة", lat: 29.0674453, lon: 15.7794762, type: "فرقة فنية" }
];
culture.forEach(c => L.marker([c.lat, c.lon]).bindPopup(`🎭 <b>${c.name}</b><br>${c.type}`).addTo(layers.culture));

// ---------- أماكن رياضية ----------
const sports = [
    { name: "المدينة الرياضية - هون", lat: 29.0626004, lon: 15.7735691, type: "مدينة رياضية" },
    { name: "ملعب سوكنة البلدي", lat: 29.073, lon: 15.781, type: "ملعب" },
    { name: "نادي سوكنة الرياضي", lat: 29.0715, lon: 15.7885, type: "نادي" },
    { name: "طريق الرياضي - هون", lat: 29.063, lon: 15.7938, type: "طريق رياضي" }
];
sports.forEach(s => L.marker([s.lat, s.lon]).bindPopup(`⚽ <b>${s.name}</b><br>${s.type}`).addTo(layers.sports));

// ---------- ترفيهية (مقاهي، مطاعم) ----------
const entertainment = [
    { name: "مقهى الشجرة - هون", lat: 29.122955, lon: 15.9376295, type: "مقهى" },
    { name: "مقهى الكوخ - هون", lat: 29.1209904, lon: 15.940757, type: "مقهى" },
    { name: "مقهى علاء نصر - هون", lat: 29.1235592, lon: 15.9376706, type: "مقهى" },
    { name: "مقهى - سوكنة", lat: 29.0703477, lon: 15.7833031, type: "مقهى" },
    { name: "كافي هافانا - ودان", lat: 29.1712354, lon: 16.1550406, type: "مقهى" },
    { name: "مطعم كودو - هون", lat: 29.1233397, lon: 15.9379382, type: "مطعم" },
    { name: "مطعم اسطنبول - هون", lat: 29.1269027, lon: 15.9576103, type: "مطعم" },
    { name: "مطعم باب المدينة - هون", lat: 29.1272556, lon: 15.9345482, type: "مطعم" },
    { name: "بيتزا ماكس - هون", lat: 29.1242463, lon: 15.9480927, type: "بيتزا" },
    { name: "بلاك فاست فود - ودان", lat: 29.1853446, lon: 16.1520223, type: "وجبات سريعة" }
];
entertainment.forEach(e => L.marker([e.lat, e.lon]).bindPopup(`🎉 <b>${e.name}</b><br>${e.type}`).addTo(layers.entertainment));

// ---------- سياحية (فنادق، معالم سياحية) ----------
const tourism = [
    { name: "فندق الهروج - هون", lat: 29.1301495, lon: 15.9500497, type: "فندق" },
    { name: "فندق الواحة - هون", lat: 29.1343106, lon: 15.9720343, type: "فندق" },
    { name: "الرواسي - هون", lat: 29.1170603, lon: 15.9157263, type: "فندق" },
    { name: "جبال الرواغه", lat: 29.3025923, lon: 16.3010299, type: "معلم طبيعي" },
    { name: "رالي تي تي", lat: 29.3754725, lon: 16.0741285, type: "حدث سياحي" },
    { name: "مخيم تيتي", lat: 29.193389, lon: 16.1517737, type: "مخيم" },
    { name: "النبع - هون", lat: 29.131047, lon: 15.9323405, type: "عين ماء" },
    { name: "قارة عافية", lat: 28.9617228, lon: 15.8837763, type: "معلم" }
];
tourism.forEach(t => L.marker([t.lat, t.lon]).bindPopup(`🗺️ <b>${t.name}</b><br>${t.type}`).addTo(layers.tourism));

// ---------- أمنية ----------
const security = [
    { name: "مركز شرطة - هون", lat: 29.1214966, lon: 15.9338658, type: "مركز شرطة" },
    { name: "مركز شرطة - سوكنة", lat: 29.0692, lon: 15.7875, type: "مركز شرطة" },
    { name: "بوابة ودان", lat: 29.3681754, lon: 16.0865405, type: "بوابة أمنية" },
    { name: "هيئة السلامة الوطنية - سوكنة", lat: 29.0681606, lon: 15.7863547, type: "إطفاء" },
    { name: "بوابة - قاعدة الجفرة", lat: 29.1431702, lon: 16.0318859, type: "بوابة" },
    { name: "بوابة - قاعدة الجفرة", lat: 29.143326, lon: 16.0318575, type: "بوابة" }
];
security.forEach(s => L.marker([s.lat, s.lon]).bindPopup(`👮 <b>${s.name}</b><br>${s.type}`).addTo(layers.security));

// ---------- سدود ومواقع طبيعية ----------
const dams_nature = [
    { name: "سد الوشكة", lat: 28.8323648, lon: 15.6232744, type: "سد" },
    { name: "سد وادي وشكة", lat: 29.048, lon: 15.835, type: "سد" },
    { name: "عيون سوكنة الطبيعية", lat: 29.069, lon: 15.79, type: "عيون ماء" },
    { name: "مشروع فرجان", lat: 29.155, lon: 15.85, type: "منطقة زراعية" }
];
dams_nature.forEach(d => L.marker([d.lat, d.lon]).bindPopup(`🌊 <b>${d.name}</b><br>${d.type}`).addTo(layers.dams_nature));

// ---------- أودية ----------
const valleys = [
    { name: "وادي وشكة", lat: 29.125, lon: 15.777, type: "وادي" },
    { name: "وادي زمزم", lat: 29.09, lon: 15.75, type: "وادي" }
];
valleys.forEach(v => L.marker([v.lat, v.lon]).bindPopup(`🏞️ <b>${v.name}</b><br>${v.type}`).addTo(layers.valleys));

// ---------- جبال ----------
const mountains = [
    { name: "جبل سوكنة", lat: 29.1, lon: 15.73, type: "جبل" },
    { name: "جبال الرواغه", lat: 29.3026, lon: 16.301, type: "جبال" }
];
mountains.forEach(m => L.marker([m.lat, m.lon]).bindPopup(`⛰️ <b>${m.name}</b><br>${m.type}`).addTo(layers.mountains));

// ---------- قلاع وحصون ----------
const castles = [
    { name: "قلعة ودان الطوزة", lat: 29.1610175, lon: 16.1347323, type: "قلعة" },
    { name: "قلعة سوكنة", lat: 29.0674661, lon: 15.7829628, type: "قلعة" },
    { name: "قصر سوكنة الأثري", lat: 29.0675, lon: 15.7828, type: "قصر أثري" }
];
castles.forEach(c => L.marker([c.lat, c.lon]).bindPopup(`🏰 <b>${c.name}</b><br>${c.type}`).addTo(layers.castles));

// ---------- دينية (مساجد) ----------
const religious = [
    { name: "جامع ودان العتيق", lat: 29.161436, lon: 16.1341865, type: "جامع" },
    { name: "جامع الصحابة - هون", lat: 29.1219381, lon: 15.9493983, type: "جامع" },
    { name: "المسجد العتيق - هون", lat: 29.123673, lon: 15.9342775, type: "مسجد" },
    { name: "مسجد عبد الجليل - هون", lat: 29.1226313, lon: 15.9364226, type: "مسجد" },
    { name: "مسجد القدس - هون", lat: 29.1289271, lon: 15.981132, type: "مسجد" },
    { name: "مسجد الصوان - ودان", lat: 29.1687863, lon: 16.1511136, type: "مسجد" },
    { name: "مسجد أم القري - سوكنة", lat: 29.0929453, lon: 15.7739529, type: "مسجد" },
    { name: "مسجد ابوبكر الصديق - ودان", lat: 29.1688362, lon: 16.1305858, type: "مسجد" },
    { name: "مسجد معاوية بن ابي سفيان - ودان", lat: 29.1892186, lon: 16.1479526, type: "مسجد" },
    { name: "مسجد - سوكنة", lat: 29.0725555, lon: 15.7815706, type: "مسجد" },
    { name: "المسجد العتيق - سوكنة", lat: 29.0673, lon: 15.7831, type: "مسجد" },
    { name: "مسجد أبو عبيدة - سوكنة", lat: 29.0677, lon: 15.7866, type: "مسجد" },
    { name: "مسجد طارق بن زياد", lat: 29.0803, lon: 15.8059, type: "مسجد" },
    { name: "مسجد أم القرى - سوكنة", lat: 29.093, lon: 15.7738, type: "مسجد" },
    { name: "مسجد حي الجماعات - هون", lat: 29.1324418, lon: 15.9396802, type: "مسجد" },
    { name: "مسجد - ودان", lat: 29.1486198, lon: 16.1430535, type: "مسجد" },
    { name: "مسجد - ودان", lat: 29.1608272, lon: 16.1453657, type: "مسجد" }
];
religious.forEach(r => L.marker([r.lat, r.lon]).bindPopup(`🕌 <b>${r.name}</b><br>${r.type}`).addTo(layers.religious));

// ---------- تاريخية (معالم أثرية) ----------
const historical = [
    { name: "قصر سوكنة الأثري", lat: 29.0675, lon: 15.7828, type: "قصر أثري" },
    { name: "موقع سوكنة الأثري", lat: 29.067, lon: 15.779, type: "موقع أثري" },
    { name: "مقبرة سوكنة القديمة", lat: 29.077, lon: 15.79, type: "مقبرة أثرية" },
    { name: "قلعة سوكنة", lat: 29.0674661, lon: 15.7829628, type: "قلعة أثرية" },
    { name: "البيت - ودان", lat: 29.1719975, lon: 16.1511795, type: "مبنى تاريخي" }
];
historical.forEach(h => L.marker([h.lat, h.lon]).bindPopup(`📜 <b>${h.name}</b><br>${h.type}`).addTo(layers.historical));

// ========================
// 4. إضافة المعالم الجديدة (قلعة القطيفة، سدود، نقوش، منتزهات، إلخ)
// ========================

// 1. قلعة القطيفة (تاريخية / قلاع)
const qalaa = { name: "قلعة القطيفة", lat: 28.8230556, lon: 15.5951667, type: "قلعة أثرية" };
L.marker([qalaa.lat, qalaa.lon]).bindPopup(`🏰 <b>${qalaa.name}</b><br>${qalaa.type}`).addTo(layers.castles);

// 2. سد الوشكة (الموقع الأول)
const dam1 = { name: "سد الوشكة", lat: 28.8316944, lon: 15.6241111, type: "سد" };
L.marker([dam1.lat, dam1.lon]).bindPopup(`🌊 <b>${dam1.name}</b><br>${dam1.type}`).addTo(layers.dams_nature);

// 3. نقوش وادي الصرط (تاريخية)
const engravings = { name: "نقوش وادي الصرط", lat: 28.8048889, lon: 15.6311111, type: "نقوش صخرية أثرية" };
L.marker([engravings.lat, engravings.lon]).bindPopup(`📜 <b>${engravings.name}</b><br>${engravings.type}`).addTo(layers.historical);

// 4. وادي الصرط (وادي)
const wadi = { name: "وادي الصرط", lat: 28.8152778, lon: 15.6286667, type: "وادي" };
L.marker([wadi.lat, wadi.lon]).bindPopup(`🏞️ <b>${wadi.name}</b><br>${wadi.type}`).addTo(layers.valleys);

// 5. محمية سد وادي الوشكة (طبيعية)
const reserve = { name: "محمية سد وادي الوشكة", lat: 28.8277716, lon: 15.6243938, type: "محمية طبيعية" };
L.marker([reserve.lat, reserve.lon]).bindPopup(`🌿 <b>${reserve.name}</b><br>${reserve.type}`).addTo(layers.dams_nature);

// 6. سد الوشكة (الموقع الثاني - قد يكون نفس السد أو نقطة مختلفة)
const dam2 = { name: "سد الوشكة (منطقة السد)", lat: 28.8323807, lon: 15.6245274, type: "سد" };
L.marker([dam2.lat, dam2.lon]).bindPopup(`🌊 <b>${dam2.name}</b><br>${dam2.type}`).addTo(layers.dams_nature);

// 7. سد سلطان
const sultanDam = { name: "سد سلطان", lat: 28.8741631, lon: 15.6034905, type: "سد" };
L.marker([sultanDam.lat, sultanDam.lon]).bindPopup(`🌊 <b>${sultanDam.name}</b><br>${sultanDam.type}`).addTo(layers.dams_nature);

// 8. نقطة غير مسماة (28.97366, 15.64749) - يرجى تحديد الاسم والنوع
const unknownPoint = { name: "موقع غير محدد (يرجى التحديد)", lat: 28.9736621, lon: 15.6474882, type: "موقع غير معروف" };
L.marker([unknownPoint.lat, unknownPoint.lon]).bindPopup(`❓ <b>${unknownPoint.name}</b><br>${unknownPoint.type}<br>تمت إضافته بناءً على رابطك. يرجى توضيح الاسم والتصنيف.`).addTo(layers.services);

// 9. قصر سوكنة الأثري (إذا لم يكن موجوداً بالفعل، نضيفه للتأكيد)
const palace = { name: "قصر سوكنة الأثري", lat: 29.0675, lon: 15.7828, type: "قصر أثري" };
L.marker([palace.lat, palace.lon]).bindPopup(`🏛️ <b>${palace.name}</b><br>${palace.type}`).addTo(layers.historical);

// 10. المستشفى القروي
const ruralHospital = { name: "المستشفى القروي", lat: 29.086497, lon: 15.8105185, type: "مستشفى / مركز صحي" };
L.marker([ruralHospital.lat, ruralHospital.lon]).bindPopup(`🏥 <b>${ruralHospital.name}</b><br>${ruralHospital.type}`).addTo(layers.health);

// 11. متنزة البكوش السياحي
const parkBakoush = { name: "متنزة البكوش السياحي", lat: 29.0839802, lon: 15.8506744, type: "منتزه سياحي" };
L.marker([parkBakoush.lat, parkBakoush.lon]).bindPopup(`🗺️ <b>${parkBakoush.name}</b><br>${parkBakoush.type}`).addTo(layers.tourism);

// 12. منتزه الخريف
const autumnPark = { name: "منتزه الخريف", lat: 29.0970759, lon: 15.8694781, type: "منتزه / متنزه" };
L.marker([autumnPark.lat, autumnPark.lon]).bindPopup(`🎉 <b>${autumnPark.name}</b><br>${autumnPark.type}`).addTo(layers.entertainment);

// 13. مشروع عين الحمام الزراعي (سيتم إضافته بإحداثيات تقريبية لسوكنة، يرجى تحديثها لاحقاً)
const ainhammam = { name: "مشروع عين الحمام الزراعي", lat: 29.0694, lon: 15.7827, type: "مشروع زراعي (موقع تقريبي، يرجى التحديد)" };
L.marker([ainhammam.lat, ainhammam.lon]).bindPopup(`🌾 <b>${ainhammam.name}</b><br>${ainhammam.type}<br>تمت إضافته بناءً على رابط خرائط Google. يُرجى تزويدي بالإحداثيات الدقيقة لتحديث موقعه.`).addTo(layers.services);

// 14. الباهي للشقق الفندقية
const bahiApartments = { name: "الباهي للشقق الفندقية", lat: 29.0518929, lon: 15.7805283, type: "شقق فندقية" };
L.marker([bahiApartments.lat, bahiApartments.lon]).bindPopup(`🏨 <b>${bahiApartments.name}</b><br>${bahiApartments.type}`).addTo(layers.tourism);

console.log("✅ تمت إضافة جميع المعالم بنجاح!");

// ========================
// 5. إضافة قائمة التحكم بالطبقات
// ========================
const overlayControl = {
    "🏛️ إدارية": layers.administrative,
    "🛠️ خدمية": layers.services,
    "📚 علمية (تعليم)": layers.education,
    "🏥 صحية": layers.health,
    "🎭 ثقافية": layers.culture,
    "⚽ رياضية": layers.sports,
    "🎉 ترفيهية": layers.entertainment,
    "🗺️ سياحية": layers.tourism,
    "👮 أمنية": layers.security,
    "🌊 سدود ومواقع طبيعية": layers.dams_nature,
    "🏞️ أودية": layers.valleys,
    "⛰️ جبال": layers.mountains,
    "🏰 قلاع": layers.castles,
    "🕌 دينية": layers.religious,
    "📜 تاريخية": layers.historical
};

L.control.layers(null, overlayControl, { collapsed: false, position: 'topright' }).addTo(map);

console.log("✅ أطلس سوكنة جاهز - تم تحميل جميع الطبقات بنجاح!");
