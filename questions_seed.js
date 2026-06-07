// ProWeb Saralash Test — Seed Ma'lumotlar Bazasi
// Har blok uchun amaliy savollar (kod + nazariya)

window.QUESTIONS_SEED = { uz: {

// ═══════════════════════════════════════════════════════════
// PYTHON — 8 blok
// ═══════════════════════════════════════════════════════════
'python': { blockCount: 8, blocks: {
'1': [
  { text: "Bu kod nima chiqaradi?\n```python\nx = 10\ny = 3\nprint(x // y)\n```", options: ["3", "3.33", "4", "Xato"], correct: 0 },
  { text: "Bu kod nima chiqaradi?\n```python\nprint(type(3.14))\n```", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], correct: 1 },
  { text: "O'zgaruvchiga qiymat berish uchun qaysi operator ishlatiladi?", options: ["==", "=>", "=", ":="], correct: 2 },
  { text: "Bu kod nima chiqaradi?\n```python\na = '5'\nb = 3\nprint(a * b)\n```", options: ["15", "555", "53", "Xato"], correct: 1 },
  { text: "Foydalanuvchidan son kiritishni so'rash uchun to'g'ri kod qaysi?", options: ["x = input()", "x = int(input())", "x = read()", "x = scan()"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nx = 7\nprint(x % 2)\n```", options: ["0", "1", "3", "3.5"], correct: 1 }
],
'2': [
  { text: "Bu kod nima chiqaradi?\n```python\nx = 10\nif x > 5:\n    print('katta')\nelif x == 5:\n    print('teng')\nelse:\n    print('kichik')\n```", options: ["katta", "teng", "kichik", "Xato"], correct: 0 },
  { text: "Bu kod nima chiqaradi?\n```python\na = True\nb = False\nprint(a and b)\n```", options: ["True", "False", "1", "0"], correct: 1 },
  { text: "Qaysi operator 'teng emas' ma'nosini bildiradi?", options: ["<>", "!=", "=/=", "!=="], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nx = 15\nif x % 3 == 0 and x % 5 == 0:\n    print('FizzBuzz')\n```", options: ["FizzBuzz", "Fizz", "Buzz", "Hech narsa"], correct: 0 },
  { text: "Bu kod nima chiqaradi?\n```python\nprint(not (5 > 3))\n```", options: ["True", "False", "None", "Xato"], correct: 1 },
  { text: "Qaysi holda `elif` ishlatiladi?", options: ["Faqat bir shart bo'lganda", "Bir nechta shart tekshirilganda", "Shart yo'q bo'lganda", "Loop ichida"], correct: 1 }
],
'3': [
  { text: "Bu kod nima chiqaradi?\n```python\nfor i in range(3):\n    print(i)\n```", options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"], correct: 0 },
  { text: "Bu kod nima chiqaradi?\n```python\ni = 0\nwhile i < 3:\n    i += 1\nprint(i)\n```", options: ["0", "2", "3", "4"], correct: 2 },
  { text: "Bu kod nima chiqaradi?\n```python\nfor i in range(1, 10, 2):\n    print(i, end=' ')\n```", options: ["1 3 5 7 9", "2 4 6 8", "1 2 3 4 5", "1 3 5 7"], correct: 0 },
  { text: "`break` operatori nima qiladi?", options: ["Siklni davom ettiradi", "Siklni to'xtatadi", "O'tkazib yuboradi", "Qaytaradi"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i, end=' ')\n```", options: ["0 1 2 3 4", "0 1 2 4", "1 2 4 5", "0 1 2"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nresult = sum(i for i in range(1, 6))\nprint(result)\n```", options: ["10", "15", "14", "20"], correct: 1 }
],
'4': [
  { text: "Bu kod nima chiqaradi?\n```python\ndef salom(ism):\n    return f'Salom, {ism}!'\nprint(salom('Ali'))\n```", options: ["Salom, Ali!", "salom Ali", "Ali", "Xato"], correct: 0 },
  { text: "Bu kod nima chiqaradi?\n```python\ndef hisob(x, y=10):\n    return x + y\nprint(hisob(5))\n```", options: ["5", "10", "15", "Xato"], correct: 2 },
  { text: "Bu kod nima chiqaradi?\n```python\ndef ko_paytir(n):\n    return n * 2\nnatija = ko_paytir(ko_paytir(3))\nprint(natija)\n```", options: ["6", "9", "12", "3"], correct: 2 },
  { text: "Lambda funksiya nima?", options: ["Ko'p qatorli funksiya", "Bir qatorli anonim funksiya", "Rekursiv funksiya", "Klass metodi"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nf = lambda x: x ** 2\nprint(f(4))\n```", options: ["8", "16", "4", "Xato"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\ndef top(a, b):\n    return a if a > b else b\nprint(top(7, 3))\n```", options: ["3", "7", "True", "10"], correct: 1 }
],
'5': [
  { text: "Bu kod nima chiqaradi?\n```python\nroyxat = [3, 1, 4, 1, 5]\nprint(sorted(royxat))\n```", options: ["[3,1,4,1,5]", "[1,1,3,4,5]", "[5,4,3,1,1]", "Xato"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nd = {'a': 1, 'b': 2}\nd['c'] = 3\nprint(len(d))\n```", options: ["2", "3", "1", "Xato"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[-2:])\n```", options: ["[4, 5]", "[3, 4]", "[1, 2]", "[5]"], correct: 0 },
  { text: "Lug'atdan kalit bo'yicha qiymat olish uchun qaysi to'g'ri?", options: ["d.get('key')", "d['key']", "Ikkalasi ham to'g'ri", "d.find('key')"], correct: 2 },
  { text: "Bu kod nima chiqaradi?\n```python\ns = {1, 2, 3, 2, 1}\nprint(len(s))\n```", options: ["5", "3", "2", "Xato"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nt = (1, 2, 3)\nt[0] = 10\n```", options: ["(10, 2, 3)", "Xato — tuple o'zgarmas", "(1, 10, 3)", "None"], correct: 1 }
],
'6': [
  { text: "Bu kod nima chiqaradi?\n```python\ns = 'Salom Dunyo'\nprint(s.upper())\n```", options: ["salom dunyo", "SALOM DUNYO", "Salom dunyo", "Xato"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\ns = '  hello  '\nprint(s.strip())\n```", options: ["'  hello  '", "'hello'", "'hello  '", "'  hello'"], correct: 1 },
  { text: "Fayl o'qish uchun to'g'ri kod qaysi?", options: ["open('f.txt','w')", "open('f.txt','r')", "open('f.txt','a')", "open('f.txt','x')"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nwords = 'python java c++'\nprint(words.split())\n```", options: ["python java c++", "['python','java','c++']", "('python','java','c++')", "Xato"], correct: 1 },
  { text: "Faylga yozib, avtomatik yopish uchun qaysi usul ishlatiladi?", options: ["try/except", "with open() as f", "file.close()", "import os"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nprint('hello'.replace('l','r'))\n```", options: ["herro", "hello", "herlo", "helo"], correct: 0 }
],
'7': [
  { text: "Bu kod nima chiqaradi?\n```python\nclass Mushuk:\n    def __init__(self, ism):\n        self.ism = ism\nm = Mushuk('Mimi')\nprint(m.ism)\n```", options: ["Mushuk", "Mimi", "ism", "Xato"], correct: 1 },
  { text: "Meros (inheritance) uchun to'g'ri sintaksis qaysi?", options: ["class B < A:", "class B(A):", "class B extends A:", "class B inherits A:"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nclass Hayvon:\n    def tovush(self):\n        return 'Tovush'\nclass It(Hayvon):\n    def tovush(self):\n        return 'Vov!'\ni = It()\nprint(i.tovush())\n```", options: ["Tovush", "Vov!", "It", "Xato"], correct: 1 },
  { text: "`__str__` metodi nima uchun ishlatiladi?", options: ["Obyektni o'chirish", "Obyektni satrga aylantirish", "Yangi obyekt yaratish", "Metodlarni saqlash"], correct: 1 },
  { text: "`@staticmethod` qachon ishlatiladi?", options: ["self kerak bo'lganda", "self kerak bo'lmaganda", "Meros olishda", "Faqat __init__ da"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nclass A:\n    x = 10\nprint(A.x)\n```", options: ["None", "10", "x", "Xato"], correct: 1 }
],
'8': [
  { text: "Django da yangi loyiha yaratish uchun buyruq qaysi?", options: ["django start myproject", "django-admin startproject myproject", "python manage.py startproject", "pip install myproject"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nimport random\nprint(random.randint(1, 10) > 0)\n```", options: ["True", "False", "Random", "Xato"], correct: 0 },
  { text: "Django da URL yo'nalishlarini qaysi fayl boshqaradi?", options: ["views.py", "models.py", "urls.py", "settings.py"], correct: 2 },
  { text: "Bu kod nima chiqaradi?\n```python\nimport math\nprint(math.sqrt(144))\n```", options: ["12", "12.0", "144", "Xato"], correct: 1 },
  { text: "REST API da ma'lumot yuborish uchun qaysi HTTP metod ishlatiladi?", options: ["GET", "POST", "DELETE", "HEAD"], correct: 1 },
  { text: "pip nima?", options: ["Python interpreter", "Python paketlar menejeri", "Python IDE", "Python debugger"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// VEB DASTURLASH — 7 blok
// ═══════════════════════════════════════════════════════════
'web-dev': { blockCount: 7, blocks: {
'1': [
  { text: "Bu HTML kod qanday ko'rinadi?\n```html\n<h1>Salom</h1>\n<p>Dunyo</p>\n```", options: ["Katta sarlavha va paragraf", "Ro'yxat", "Jadval", "Forma"], correct: 0 },
  { text: "HTML da rasm qo'shish uchun to'g'ri tag qaysi?", options: ["<image src=''>", "<img src=''>", "<picture src=''>", "<photo src=''>"], correct: 1 },
  { text: "Bu kodda xato nima?\n```html\n<a href='#>Havola</a>\n```", options: ["href yo'q", "Qo'shtirnoq yopilmagan", "a tag noto'g'ri", "Xato yo'q"], correct: 1 },
  { text: "HTML da form yaratish uchun qaysi tag ishlatiladi?", options: ["<input>", "<form>", "<div>", "<section>"], correct: 1 },
  { text: "Semantik HTML da asosiy kontent uchun qaysi tag to'g'ri?", options: ["<div>", "<span>", "<main>", "<section>"], correct: 2 },
  { text: "HTML da ro'yxat yaratish uchun qaysi taglar to'g'ri?", options: ["<list><item>", "<ul><li>", "<ol><item>", "<rl><li>"], correct: 1 }
],
'2': [
  { text: "Bu CSS kod nima qiladi?\n```css\np {\n  color: red;\n  font-size: 18px;\n}\n```", options: ["Barcha p elementlari qizil, 18px", "Faqat birinchi p", "Barcha elementlar", "Xato"], correct: 0 },
  { text: "CSS da class selectorini qanday yozamiz?", options: [".myclass", "#myclass", "myclass", "@myclass"], correct: 0 },
  { text: "Bu CSS da `box-model` ketma-ketligi qaysi?\n```css\nmargin: 10px 20px 30px 40px;\n```", options: ["yuqori o'ng quyi chap", "chap o'ng yuqori quyi", "yuqori quyi chap o'ng", "o'ng chap yuqori quyi"], correct: 0 },
  { text: "CSS da element yashirish uchun qaysi to'g'ri?", options: ["display: none", "visible: false", "show: 0", "opacity: hide"], correct: 0 },
  { text: "Bu CSS kod nima qiladi?\n```css\ndiv {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n```", options: ["Markazga joylashtiradi", "Yuqori o'ng burchakka qo'yadi", "Pastga suradi", "Floating qiladi"], correct: 1 },
  { text: "CSS specificityda eng kuchli selektor qaysi?", options: ["element", ".class", "#id", "*"], correct: 2 }
],
'3': [
  { text: "Flexbox da elementlarni gorizontal markazlashtirish uchun qaysi?", options: ["align-items: center", "justify-content: center", "text-align: center", "margin: auto"], correct: 1 },
  { text: "Bu CSS nima qiladi?\n```css\n.container {\n  display: flex;\n  flex-direction: column;\n}\n```", options: ["Elementlarni gorizontal", "Elementlarni vertikal", "Grid yaratadi", "Float qiladi"], correct: 1 },
  { text: "CSS Grid da 3 ustunli layout yaratish uchun to'g'ri kod?", options: ["grid-columns: 3", "grid-template-columns: repeat(3, 1fr)", "columns: 3", "flex: 3"], correct: 1 },
  { text: "Flexbox da `flex: 1` nima degan ma'no?", options: ["1px kenglik", "Qolgan joyni to'ldiradi", "Birinchi bo'lib ko'rinadi", "1em o'lcham"], correct: 1 },
  { text: "Bu CSS nima qiladi?\n```css\n@media (max-width: 768px) {\n  .nav { display: none; }\n}\n```", options: ["768px dan katta ekranda yashiradi", "768px dan kichik ekranda yashiradi", "Barcha ekranda yashiradi", "Faqat mobilda ko'rsatadi"], correct: 1 },
  { text: "`gap` property qaysi layout texnologiyalarida ishlaydi?", options: ["Faqat Flex", "Faqat Grid", "Flex va Grid ikkalasida", "Float da"], correct: 2 }
],
'4': [
  { text: "Bu JS kod nima chiqaradi?\n```javascript\nconsole.log(typeof 'hello');\n```", options: ["string", "text", "char", "object"], correct: 0 },
  { text: "Bu JS kod nima chiqaradi?\n```javascript\nlet x = 5;\nx += 3;\nconsole.log(x);\n```", options: ["5", "3", "8", "53"], correct: 2 },
  { text: "JS da massiv yaratish uchun to'g'ri sintaksis?", options: ["let a = (1,2,3)", "let a = [1,2,3]", "let a = {1,2,3}", "let a = <1,2,3>"], correct: 1 },
  { text: "Bu JS kod nima chiqaradi?\n```javascript\nconsole.log(2 + '3');\n```", options: ["5", "23", "Xato", "NaN"], correct: 1 },
  { text: "`const` va `let` farqi nima?", options: ["const qayta tayinlanmaydi, let tayinlanadi", "let qayta tayinlanmaydi", "Farqi yo'q", "const faqat funksiyada"], correct: 0 },
  { text: "Bu JS kod nima chiqaradi?\n```javascript\nlet arr = [1,2,3];\nconsole.log(arr.length);\n```", options: ["2", "3", "4", "undefined"], correct: 1 }
],
'5': [
  { text: "DOM da elementni id bo'yicha topish uchun qaysi metod?", options: ["querySelector('#id')", "getElementById('id')", "getElement('id')", "Ikkalasi ham to'g'ri"], correct: 3 },
  { text: "Bu JS kod nima qiladi?\n```javascript\ndocument.querySelector('h1').textContent = 'Salom';\n```", options: ["h1 ni o'chiradi", "h1 matnini o'zgartiradi", "h1 rangini o'zgartiradi", "Yangi h1 qo'shadi"], correct: 1 },
  { text: "Tugma bosilganda funksiya ishlatish uchun to'g'ri kod?", options: ["btn.onClick = fn", "btn.addEventListener('click', fn)", "btn.on('click', fn)", "btn.click = fn"], correct: 1 },
  { text: "Bu JS kodida `event.preventDefault()` nima qiladi?\n```javascript\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n});\n```", options: ["Formni yuboradi", "Sahifani yangilashni to'xtatadi", "Eventni o'chiradi", "Xato beradi"], correct: 1 },
  { text: "DOM da yangi element yaratish uchun qaysi metod?", options: ["document.newElement('div')", "document.createElement('div')", "document.addElement('div')", "new Element('div')"], correct: 1 },
  { text: "Bu JS kod nima qiladi?\n```javascript\nconst items = document.querySelectorAll('li');\nconsole.log(items.length);\n```", options: ["Birinchi li ni topadi", "Barcha li lar sonini chiqaradi", "Li ni o'chiradi", "Xato"], correct: 1 }
],
'6': [
  { text: "Bu kod nima qiladi?\n```javascript\nfetch('https://api.example.com/data')\n  .then(r => r.json())\n  .then(data => console.log(data));\n```", options: ["Sinxron so'rov yuboradi", "Asinxron so'rov yuboradi va JSON oladi", "Xato beradi", "Faylni o'qiydi"], correct: 1 },
  { text: "Arrow function sintaksisi to'g'ri qaysi?", options: ["function(x) => x*2", "x => x*2", "(x) -> x*2", "fn x => x*2"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```javascript\nconst nums = [1,2,3,4,5];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);\n```", options: ["[1,3,5]", "[2,4]", "[1,2,3,4,5]", "[2,4,6]"], correct: 1 },
  { text: "async/await qaysi muammoni hal qiladi?", options: ["Xotira muammosi", "Callback hell va asinxron kod o'qilishi", "CSS muammosi", "Tezlik muammosi"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```javascript\nconst arr = [1,2,3];\nconst doubled = arr.map(x => x * 2);\nconsole.log(doubled);\n```", options: ["[1,2,3]", "[2,4,6]", "[3,6,9]", "Xato"], correct: 1 },
  { text: "localStorage ga ma'lumot saqlash uchun to'g'ri kod?", options: ["localStorage.set('key','val')", "localStorage.setItem('key','val')", "localStorage['key'] = 'val'", "B va C ikkalasi to'g'ri"], correct: 3 }
],
'7': [
  { text: "React da komponent yaratish uchun to'g'ri usul qaysi?", options: ["function App() { return <div/> }", "class App { render: <div/> }", "component App() { }", "const App = () => { div }"], correct: 0 },
  { text: "React da state o'zgartirish uchun qaysi hook ishlatiladi?", options: ["useEffect", "useState", "useRef", "useContext"], correct: 1 },
  { text: "JSX da class o'rniga nima ishlatiladi?", options: ["class", "className", "htmlClass", "cssClass"], correct: 1 },
  { text: "Bu React kod nima chiqaradi?\n```javascript\nconst [count, setCount] = useState(0);\nsetCount(count + 1);\nsetCount(count + 1);\nconsole.log(count);\n```", options: ["2", "1", "0", "Asinxron — natija keyinroq"], correct: 3 },
  { text: "Props nima?", options: ["Komponent ichki state", "Ota komponentdan kelgan ma'lumot", "CSS property", "Event handler"], correct: 1 },
  { text: "useEffect qachon ishlaydi?", options: ["Faqat birinchi render", "Har render", "Dependency o'zgarganda", "B va C to'g'ri"], correct: 3 }
]
}},

// ═══════════════════════════════════════════════════════════
// DATA ANALYST — 5 blok
// ═══════════════════════════════════════════════════════════
'data-analyst': { blockCount: 5, blocks: {
'1': [
  { text: "Excel da VLOOKUP funksiyasi nima uchun ishlatiladi?", options: ["Raqamlarni qo'shish", "Boshqa jadvaldan ma'lumot qidirish", "Diagramma yaratish", "Matnni formatlash"], correct: 1 },
  { text: "Bu Excel formulasi nima hisoblaydi?\n```\n=COUNTIF(A1:A10, \">100\")\n```", options: ["100 dan katta sonlar yig'indisi", "100 dan katta sonlar soni", "O'rtacha qiymat", "Maksimal qiymat"], correct: 1 },
  { text: "Pivot Table nima uchun ishlatiladi?", options: ["Ma'lumotlarni kiritish", "Ma'lumotlarni umumlashtirish va tahlil qilish", "Grafik chizish", "Formulalar yozish"], correct: 1 },
  { text: "Bu formula nima hisoblaydi?\n```\n=IF(B2>90, \"A\", IF(B2>80, \"B\", \"C\"))\n```", options: ["Baho sistemasi", "Yig'indi", "O'rtacha", "Maksimum"], correct: 0 },
  { text: "Ma'lumotlarni filtr qilish uchun qaysi Excel funksiyasi ishlatiladi?", options: ["FILTER", "SELECT", "WHERE", "FIND"], correct: 0 },
  { text: "XLOOKUP funksiyasi VLOOKUP dan qanday afzal?", options: ["Tezroq ishlaydi", "Chap tomonga ham qidiradi", "Ko'proq xotira ishlatadi", "Farqi yo'q"], correct: 1 }
],
'2': [
  { text: "Bu SQL nima chiqaradi?\n```sql\nSELECT COUNT(*) FROM employees\nWHERE salary > 5000;\n```", options: ["5000 dan katta oyliklar yig'indisi", "5000 dan katta oylikli xodimlar soni", "Barcha xodimlar", "O'rtacha oylik"], correct: 1 },
  { text: "SQL da WHERE va HAVING farqi nima?", options: ["Farqi yo'q", "WHERE qatorlarga, HAVING guruhlarga filtr qo'llaydi", "HAVING tezroq", "WHERE faqat raqamlarga"], correct: 1 },
  { text: "Bu SQL to'g'rimi?\n```sql\nSELECT name, MAX(salary)\nFROM employees\nGROUP BY department;\n```", options: ["Ha, to'g'ri", "Xato — SELECT da name bo'lmasligi kerak", "Xato — GROUP BY noto'g'ri", "Xato — MAX funksiyasi yo'q"], correct: 1 },
  { text: "DISTINCT kalit so'zi nima qiladi?", options: ["Takroriy qatorlarni o'chiradi", "Takroriy qatorlarni qaytarmaslik", "Eng katta qiymatni topadi", "Tartibga soladi"], correct: 1 },
  { text: "Bu SQL nima qiladi?\n```sql\nSELECT * FROM orders\nORDER BY amount DESC\nLIMIT 5;\n```", options: ["Eng kam 5 ta buyurtma", "Eng ko'p 5 ta buyurtma", "Barcha buyurtmalar", "5-buyurtma"], correct: 1 },
  { text: "NULL bilan ishlashda qaysi operator ishlatiladi?", options: ["= NULL", "IS NULL", "== NULL", "NULL ="], correct: 1 }
],
'3': [
  { text: "Bu SQL nima chiqaradi?\n```sql\nSELECT a.name, b.department\nFROM employees a\nINNER JOIN departments b ON a.dept_id = b.id;\n```", options: ["Faqat employees jadvali", "Mos kelgan qatorlar ikkalasidan", "Barcha employees va bo'sh departments", "Barcha departments"], correct: 1 },
  { text: "LEFT JOIN va INNER JOIN farqi nima?", options: ["Farqi yo'q", "LEFT JOIN chap jadvalning barcha qatorlarini qaytaradi", "INNER JOIN tezroq", "LEFT JOIN faqat NULL qaytaradi"], correct: 1 },
  { text: "Bu SQL nima qiladi?\n```sql\nSELECT department, AVG(salary) as avg_sal\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 4000;\n```", options: ["Barcha bo'limlar", "O'rtacha oyligi 4000 dan katta bo'limlar", "4000 dan kam oyliklar", "Xato"], correct: 1 },
  { text: "Subquery nima?", options: ["Kichik jadval", "So'rov ichidagi so'rov", "Stored procedure", "View"], correct: 1 },
  { text: "Bu SQL nima qiladi?\n```sql\nSELECT name FROM employees\nWHERE dept_id IN (SELECT id FROM departments WHERE city='Toshkent');\n```", options: ["Barcha xodimlar", "Toshkentdagi bo'limlardagi xodimlar", "Toshkentdan boshqa xodimlar", "Xato"], correct: 1 },
  { text: "UNION va UNION ALL farqi?", options: ["Farqi yo'q", "UNION takrorlarni olib tashlaydi, UNION ALL qoldiradi", "UNION ALL tezroq emas", "UNION kamroq ishlaydi"], correct: 1 }
],
'4': [
  { text: "Power BI da 'Measure' nima?", options: ["Jadval", "Hisoblangan ko'rsatkich", "Vizualizatsiya turi", "Ma'lumot manbasi"], correct: 1 },
  { text: "DAX da bu formula nima hisoblaydi?\n```\nTotal Sales = SUM(Sales[Amount])\n```", options: ["O'rtacha sotuv", "Jami sotuv miqdori", "Sotuv soni", "Maksimal sotuv"], correct: 1 },
  { text: "Power BI da ma'lumotlarni yangilash uchun qaysi tanlanadi?", options: ["Edit Query", "Refresh", "Transform", "Load Data"], correct: 1 },
  { text: "Power BI da ikki jadval o'rtasida bog'liqlik (relationship) qanday o'rnatiladi?", options: ["VLOOKUP yordamida", "Model ko'rinishida drag & drop", "DAX formula bilan", "SQL JOIN bilan"], correct: 1 },
  { text: "Tableau da 'Dimension' va 'Measure' farqi nima?", options: ["Farqi yo'q", "Dimension sifat, Measure miqdor ko'rsatadi", "Dimension son, Measure matn", "Ikkalasi ham sifat"], correct: 1 },
  { text: "Power BI da CALCULATE funksiyasi nima qiladi?", options: ["Hisoblaydi", "Filtr kontekstini o'zgartiradi", "Jadval yaratadi", "Grafik chizadi"], correct: 1 }
],
'5': [
  { text: "A/B test nima uchun ishlatiladi?", options: ["Xatoliklarni topish", "Ikki variant qaysi yaxshiroq ekanini aniqlash", "Ma'lumotlarni tozalash", "Prognoz qilish"], correct: 1 },
  { text: "Korrelyatsiya koeffitsienti 0.9 nima anglatadi?", options: ["Zaif bog'liqlik", "Kuchli ijobiy bog'liqlik", "Kuchli salbiy bog'liqlik", "Bog'liqlik yo'q"], correct: 1 },
  { text: "Median va Mean farqi qachon muhim?", options: ["Har doim bir xil", "Outlier (chetki qiymat) bo'lganda", "Faqat katta ma'lumotlarda", "Hech qachon farq qilmaydi"], correct: 1 },
  { text: "Bu Python kod nima hisoblaydi?\n```python\nimport pandas as pd\ndf['salary'].describe()\n```", options: ["Faqat o'rtacha", "Statistik xulosa (min, max, mean, std)", "Barcha qatorlar", "Faqat maksimum"], correct: 1 },
  { text: "Churn rate nima?", options: ["Yangi mijozlar foizi", "Ketib qolgan mijozlar foizi", "Daromad o'sishi", "Xarajatlar ulushi"], correct: 1 },
  { text: "Looker Studio da ma'lumot ulash uchun qaysi manba bevosita ulanadi?", options: ["Faqat Excel", "Google Sheets va BigQuery", "Faqat SQL", "Faqat CSV"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// DATA SCIENCE — 6 blok
// ═══════════════════════════════════════════════════════════
'data-science': { blockCount: 6, blocks: {
'1': [
  { text: "Bu kod nima chiqaradi?\n```python\nimport numpy as np\narr = np.array([1,2,3,4,5])\nprint(arr.mean())\n```", options: ["2", "3.0", "15", "2.5"], correct: 1 },
  { text: "NumPy array va Python list farqi nima?", options: ["Farqi yo'q", "NumPy tezroq, vektorlashtirilgan operatsiyalar", "List ko'proq xotira ishlatadi", "NumPy faqat 1D"], correct: 1 },
  { text: "Bu Pandas kod nima qiladi?\n```python\ndf.dropna()\n```", options: ["Bo'sh qatorlarni to'ldiradi", "Bo'sh qiymatli qatorlarni o'chiradi", "Barcha ma'lumotni o'chiradi", "NaN ga aylantiradi"], correct: 1 },
  { text: "Pandas da DataFrame ni CSV dan yuklash uchun?", options: ["pd.load_csv()", "pd.read_csv()", "pd.open_csv()", "pd.import_csv()"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\nimport pandas as pd\ndf = pd.DataFrame({'a':[1,2,3],'b':[4,5,6]})\nprint(df.shape)\n```", options: ["(2, 3)", "(3, 2)", "(6,)", "(3,)"], correct: 1 },
  { text: "Feature scaling nima uchun kerak?", options: ["Ko'proq ma'lumot olish", "Turli masshtabdagi o'zgaruvchilarni tenglash", "Tezlik uchun", "Vizualizatsiya uchun"], correct: 1 }
],
'2': [
  { text: "Bu kod nima chiqaradi?\n```python\nimport numpy as np\na = np.array([[1,2],[3,4]])\nprint(a.T)\n```", options: ["[[1,2],[3,4]]", "[[1,3],[2,4]]", "[[4,3],[2,1]]", "Xato"], correct: 1 },
  { text: "Pandas da groupby qanday ishlaydi?", options: ["Ma'lumotni filtrlaydi", "Guruhlab agregat hisoblaydi", "Tartiblaydi", "Birlashtiradi"], correct: 1 },
  { text: "Bu kod nima qiladi?\n```python\ndf[df['age'] > 25]\n```", options: ["25 yoshdan katta qatorlarni filtrlaydi", "25 yoshni o'chiradi", "25 ni qo'shadi", "Xato"], correct: 0 },
  { text: "merge() va concat() farqi nima?", options: ["Farqi yo'q", "merge() umumiy ustun bo'yicha, concat() qatorlarni ulaydi", "concat() tezroq", "merge() faqat SQL da"], correct: 1 },
  { text: "Bu kod nima chiqaradi?\n```python\narr = np.arange(0, 10, 2)\nprint(arr)\n```", options: ["[0,1,2,3,4,5,6,7,8,9]", "[0,2,4,6,8]", "[2,4,6,8,10]", "[0,2,4,6,8,10]"], correct: 1 },
  { text: "Outlier (chetki qiymat) ni topish uchun qaysi metod ishlatiladi?", options: ["mean()", "IQR metodi yoki Z-score", "sort()", "groupby()"], correct: 1 }
],
'3': [
  { text: "Bu kod qanday vizualizatsiya chizadi?\n```python\nimport matplotlib.pyplot as plt\nplt.hist(data, bins=20)\nplt.show()\n```", options: ["Chiziqli grafik", "Gistogramma", "Pie chart", "Scatter plot"], correct: 1 },
  { text: "Seaborn da korrelyatsiyani ko'rsatish uchun qaysi grafik?", options: ["barplot", "heatmap", "lineplot", "countplot"], correct: 1 },
  { text: "Bu kod nima qiladi?\n```python\nimport matplotlib.pyplot as plt\nplt.scatter(x, y, c=labels)\nplt.colorbar()\n```", options: ["Chiziqli grafik", "Rangga ajratilgan scatter plot", "Pie chart", "Histogram"], correct: 1 },
  { text: "Plotly va Matplotlib farqi nima?", options: ["Farqi yo'q", "Plotly interaktiv, Matplotlib statik", "Matplotlib yangroq", "Plotly faqat to'liq versiyada"], correct: 1 },
  { text: "Bu Seaborn kod nima chiqaradi?\n```python\nsns.pairplot(df)\n```", options: ["Bitta grafik", "Barcha ustunlar o'rtasida scatter matritsa", "Pie chart", "Heatmap"], correct: 1 },
  { text: "Box plot nima ko'rsatadi?", options: ["O'rtacha va dispersiya", "Median, quartil va outlierlar", "Kumulativ taqsimot", "Korrelyatsiya"], correct: 1 }
],
'4': [
  { text: "Scikit-learn da model train qilish uchun to'g'ri tartib qaysi?", options: ["predict → fit → score", "fit → predict → score", "score → fit → predict", "Farqi yo'q"], correct: 1 },
  { text: "Bu kod nima qiladi?\n```python\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n```", options: ["80% train, 20% test", "20% train, 80% test", "50/50", "Barchasi train"], correct: 0 },
  { text: "Overfitting nima?", options: ["Model kam o'rganadi", "Model train data ni yod oladi, test da yomon ishlaydi", "Model tez ishlaydi", "Xotira yetmaydi"], correct: 1 },
  { text: "Cross-validation nima uchun?", options: ["Tezlikni oshirish", "Model bahosini ishonchli aniqlash", "Ma'lumotni tozalash", "Vizualizatsiya"], correct: 1 },
  { text: "Bu kod nima hisoblaydi?\n```python\nfrom sklearn.metrics import accuracy_score\naccuracy_score(y_true, y_pred)\n```", options: ["Xato ulushi", "To'g'ri bashoratlar foizi", "O'rtacha xato", "Korrelyatsiya"], correct: 1 },
  { text: "Feature importance nima?", options: ["Eng katta o'zgaruvchi", "Har bir feature modelga qancha hissa qo'shishi", "Eng kam qiymat", "Outlier"], correct: 1 }
],
'5': [
  { text: "Linear regression qachon ishlatiladi?", options: ["Kategoriyalarni bashorat qilishda", "Uzluksiz qiymatlarni bashorat qilishda", "Klasterizatsiyada", "Tasvirlarni tahlilida"], correct: 1 },
  { text: "Bu kod nima qiladi?\n```python\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n```", options: ["Regression model", "Klassifikatsiya modeli", "Klasterlash", "Dim. reduction"], correct: 1 },
  { text: "Random Forest nima?", options: ["Bitta qaror daraxti", "Ko'p daraxtlar ansambl metodi", "Neural network", "Linear model"], correct: 1 },
  { text: "Precision va Recall farqi?\n```\nPrecision = TP / (TP + FP)\nRecall = TP / (TP + FN)\n```", options: ["Farqi yo'q", "Precision to'g'riligi, Recall to'liqligi", "Recall tezligi", "Precision faqat binarda"], correct: 1 },
  { text: "K-Means algoritmi nima qiladi?", options: ["Klassifikatsiya", "Regression", "Ma'lumotlarni klasterlarga ajratadi", "Tasvirni taniydi"], correct: 2 },
  { text: "Grid Search nima uchun?", options: ["Ma'lumot qidirish", "Eng yaxshi hyperparametrlarni topish", "Model saqlash", "Feature selection"], correct: 1 }
],
'6': [
  { text: "Neural network da 'neuron' nima qiladi?", options: ["Ma'lumot saqlaydi", "Kirish signallarini og'irlikka ko'paytiradi va aktivatsiya qo'llaydi", "Tasvirni o'qiydi", "Ma'lumotni eksport qiladi"], correct: 1 },
  { text: "ReLU aktivatsiya funksiyasi qanday ishlaydi?\n```\nf(x) = max(0, x)\n```", options: ["Manfiy qiymatlarni 0 ga aylantiradi", "Barcha qiymatlarni 1 ga aylantiradi", "Faqat 0 va 1 qaytaradi", "Qiymatni ikki barobar qiladi"], correct: 0 },
  { text: "Bu Keras kod nima qiladi?\n```python\nmodel.compile(optimizer='adam',\n  loss='categorical_crossentropy',\n  metrics=['accuracy'])\n```", options: ["Modelni yaratadi", "Modelni o'qitishga sozlaydi", "Bashorat qiladi", "Saqlaydi"], correct: 1 },
  { text: "CNN nima uchun maxsus?", options: ["Matn tahlili", "Tasvir tahlili", "Vaqt qatorlari", "Graflar"], correct: 1 },
  { text: "Dropout layer nima qiladi?", options: ["Ma'lumotni yo'qotadi", "O'qitishda tasodifiy neyronlarni o'chiradi (overfitting oldini oladi)", "Tezlikni oshiradi", "Layer qo'shadi"], correct: 1 },
  { text: "Transfer Learning nima?", options: ["Ma'lumotni ko'chirish", "Tayyor o'rganilgan modelni yangi vazifaga moslash", "Modelni boshqa tilga o'tkazish", "Cloud ga yuklash"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// MOTION DESIGN VA VIDEO MONTAJ — 5 blok
// ═══════════════════════════════════════════════════════════
'motion-design': { blockCount: 5, blocks: {
'1': [
  { text: "Premiere Pro da video kesish uchun qaysi tool ishlatiladi?", options: ["Pen Tool", "Razor Tool (C)", "Hand Tool", "Selection Tool"], correct: 1 },
  { text: "Timeline da qatlamlar (layers) nima uchun ishlatiladi?", options: ["Rang berish", "Turli media elementlarini alohida boshqarish", "Audio qo'shish", "Export qilish"], correct: 1 },
  { text: "Premiere Pro da loyihaga video import qilish shortcut?", options: ["Ctrl+O", "Ctrl+I", "Ctrl+N", "Ctrl+V"], correct: 1 },
  { text: "Frame rate (FPS) nima?", options: ["Video uzunligi", "Bir soniyada ko'rsatiladigan kadrlar soni", "Audio sifati", "Rang chuqurligi"], correct: 1 },
  { text: "J-Cut montaj texnikasi nima?", options: ["Videoni kesish", "Keyingi sahnaning audiosini oldin boshlash", "Effekt qo'shish", "Rang tuzatish"], correct: 1 },
  { text: "4K va 1080p farqi nima?", options: ["Rang sifati", "Ruxsat (4K: 3840×2160, 1080p: 1920×1080)", "FPS farqi", "Audio sifati"], correct: 1 }
],
'2': [
  { text: "Video montajda 'B-roll' nima?", options: ["Asosiy intervyu video", "Qo'shimcha tasviriy material", "Fon musiqasi", "Title (sarlavha)"], correct: 1 },
  { text: "Premiere Pro da In/Out point qo'yish shortcut?", options: ["A va S", "I va O", "Q va W", "F va G"], correct: 1 },
  { text: "Qaysi transition eng ko'p professional videolarda ishlatiladi?", options: ["Wipe", "Cut (oddiy kesish)", "Dissolve", "Zoom"], correct: 1 },
  { text: "Audio da 'dB' nima?", options: ["Digital Bit", "Decibel — ovoz kuchligi o'lchovi", "Duration Brake", "Data Base"], correct: 1 },
  { text: "Premiere da video tezligini o'zgartirish uchun qaysi funksiya?", options: ["Speed/Duration (Ctrl+R)", "Effect Controls", "Color Grading", "Audio Mixer"], correct: 0 },
  { text: "Multicam montaj nima?", options: ["Ko'p effekt qo'shish", "Bir vaqtda bir nechta kamera yozuvini montaj qilish", "Ko'p qatlam", "Multi export"], correct: 1 }
],
'3': [
  { text: "Premiere Pro da color grading uchun qaysi panel ishlatiladi?", options: ["Effects", "Lumetri Color", "Essential Graphics", "Audio Track Mixer"], correct: 1 },
  { text: "LUT (Lookup Table) nima?", options: ["Effekt turi", "Oldindan tayyorlangan rang profili", "Transition turi", "Audio effekt"], correct: 1 },
  { text: "3-way color corrector da qaysi 3 zona boshqariladi?", options: ["RGB kanallar", "Shadows, Midtones, Highlights", "Hue, Saturation, Luminance", "Warm, Cool, Neutral"], correct: 1 },
  { text: "Flat/Log video profil nima uchun ishlatiladi?", options: ["Ko'proq rang ma'lumotini saqlash", "Hajmni kamaytirish", "Tezlikni oshirish", "To'g'ridan rang berish"], correct: 0 },
  { text: "DaVinci Resolve da color grading uchun maxsus bo'lim qaysi?", options: ["Edit", "Color", "Fusion", "Deliver"], correct: 1 },
  { text: "Scopes (vectorscope, waveform) nima uchun ishlatiladi?", options: ["Audio tahrirlash", "Rangni obyektiv o'lchash", "Effekt qo'shish", "Export sozlamalari"], correct: 1 }
],
'4': [
  { text: "After Effects da keyframe nima?", options: ["Video kesish nuqtasi", "Animatsiya boshlash/tugash nuqtasi", "Effekt turi", "Layer turi"], correct: 1 },
  { text: "Bu AE expression nima qiladi?\n```\nwiggle(2, 30)\n```", options: ["Elementni aylantiradi", "Elementni titratadi (2 marta/sek, 30px)", "Kengaytiradi", "Yo'qoladi"], correct: 1 },
  { text: "Motion blur nima?", options: ["Harakat paytida ko'rinadigan loyqalik effekti", "Blur filtri", "Transition effekti", "Rangni o'zgartirish"], correct: 0 },
  { text: "Easing (Ease In/Out) nima?", options: ["Animatsiyani keskin boshlash/tugatish", "Animatsiyani yumshoq boshlash/tugatish", "Effekt qo'shish", "Layer birlashtirish"], correct: 1 },
  { text: "After Effects da Shape Layer nima?", options: ["Rasm layer", "Vektor shakllar uchun layer", "Video layer", "Audio layer"], correct: 1 },
  { text: "Lottie animatsiyasi nima uchun ishlatiladi?", options: ["Video export", "AE animatsiyasini veb/mobil uchun JSON formatda export", "3D animatsiya", "Audio effekt"], correct: 1 }
],
'5': [
  { text: "Video export uchun YouTube ga eng yaxshi format?", options: ["AVI", "MOV", "MP4 (H.264)", "WMV"], correct: 2 },
  { text: "Audio da 'sync' muammosi nima?", options: ["Ovoz yo'q", "Ovoz va video mos tushmaydi", "Audio ko'p baland", "Audio formati noto'g'ri"], correct: 1 },
  { text: "Bitrate nima?", options: ["Kadrlar soni", "Bir soniyada qayta ishlangan ma'lumot miqdori", "Ruxsat", "Rang sifati"], correct: 1 },
  { text: "Instagram Reels uchun optimal video o'lcham?", options: ["16:9 (1920x1080)", "9:16 (1080x1920)", "1:1 (1080x1080)", "4:3"], correct: 1 },
  { text: "Royalty-free musiqa nima?", options: ["Bepul musiqa", "Litsenziya to'lashsiz ishlatsa bo'ladigan musiqa", "Hamma uchun ochiq musiqa", "Eski musiqa"], correct: 1 },
  { text: "Premiere Pro da Media Encoder nima uchun?", options: ["Video yozib olish", "Fon rejimida video eksport qilish", "Effekt qo'shish", "Audio tahrirlash"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// QA — 4 blok
// ═══════════════════════════════════════════════════════════
'qa': { blockCount: 4, blocks: {
'1': [
  { text: "Software testing nima uchun kerak?", options: ["Kod yozish uchun", "Xatoliklarni topish va sifatni ta'minlash", "Server o'rnatish", "Dizayn yaratish"], correct: 1 },
  { text: "Black box testing nima?", options: ["Kod ko'rib test qilish", "Kod ko'rmay, funksional test qilish", "Faqat UI test", "Performance test"], correct: 1 },
  { text: "Regression testing nima?", options: ["Yangi funksiyalarni test qilish", "O'zgartirishdan keyin eski funksiyalar buzilmaganini tekshirish", "Load test", "Security test"], correct: 1 },
  { text: "Test case nima?", options: ["Bug hisoboti", "Test qilish uchun qadamlar va kutilgan natija", "Test muhiti", "Avtomatik skript"], correct: 1 },
  { text: "Bug priority va severity farqi?", options: ["Farqi yo'q", "Priority muhimlik tartibi, Severity ta'sir darajasi", "Severity tartibi, Priority ta'siri", "Ikkalasi bir xil"], correct: 1 },
  { text: "Smoke testing nima?", options: ["Batafsil test", "Asosiy funksiyalar ishlashini tez tekshirish", "Security test", "Database test"], correct: 1 }
],
'2': [
  { text: "Exploratory testing nima?", options: ["Skriptga asoslangan test", "Oldindan rejasiz, o'rganib testlash", "Avtomatik test", "Load test"], correct: 1 },
  { text: "Bug report da nima bo'lishi shart?", options: ["Faqat title", "Steps to reproduce, Expected va Actual natija, muhit", "Faqat screenshot", "Faqat tartibi"], correct: 1 },
  { text: "Equivalence partitioning nima?", options: ["Barcha qiymatlarni test qilish", "O'xshash qiymatlarni guruhlab bitta test qilish", "Faqat chegaraviy qiymatlar", "Random test"], correct: 1 },
  { text: "Boundary value analysis nima?", options: ["O'rtacha qiymatlar test", "Chegaraviy qiymatlarni test qilish (min, max, min-1, max+1)", "Eng katta qiymat", "Tasodifiy qiymatlar"], correct: 1 },
  { text: "Test quyidagi holatda muvaffaqiyatli:\n```\nKiritish: 5\nKutilgan: 'juft'\nNatija: 'toq'\n```", options: ["PASS", "FAIL", "Blocker", "Skip"], correct: 1 },
  { text: "Usability testing nima?", options: ["Xavfsizlik testi", "Foydalanish qulayligi testi", "Ma'lumotlar bazasi testi", "API testi"], correct: 1 }
],
'3': [
  { text: "Postman da GET so'rovi qanday yuboriladi?", options: ["Body ga ma'lumot kiritib", "URL ni kiritib Send bosiladi", "Auth tokenini o'chirib", "Headers ga ma'lumot kiritib"], correct: 1 },
  { text: "REST API da 404 status kodi nima?", options: ["Muvaffaqiyatli", "Topilmadi", "Server xatosi", "Ruxsat yo'q"], correct: 1 },
  { text: "Bu API response to'g'rimi?\n```json\n{\n  \"status\": 200,\n  \"data\": {\"id\": 1, \"name\": \"Ali\"}\n}\n```", options: ["Xato — status 200 bo'lmasligi kerak", "To'g'ri — muvaffaqiyatli javob", "Xato — data bo'lmasligi kerak", "Xato — JSON formati noto'g'ri"], correct: 1 },
  { text: "Postman da avtomatik assertion yozish uchun qaysi bo'lim?", options: ["Headers", "Body", "Tests (JavaScript)", "Authorization"], correct: 2 },
  { text: "Bu Postman test to'g'rimi?\n```javascript\npm.test('Status 200', () => {\n  pm.response.to.have.status(200);\n});\n```", options: ["Xato sintaksis", "To'g'ri — status 200 tekshiradi", "Xato — pm yo'q", "Xato — have ishlamaydi"], correct: 1 },
  { text: "API testing da authentication nima?", options: ["URL parametri", "Foydalanuvchi kim ekanini tekshirish (token/key)", "Response kodi", "Timeout"], correct: 1 }
],
'4': [
  { text: "Bu Selenium kod nima qiladi?\n```python\ndriver.find_element(By.ID, 'login-btn').click()\n```", options: ["ID ni qidiradi", "login-btn ID li elementni topib bosadi", "Sahifani yangilaydi", "Login qiladi"], correct: 1 },
  { text: "Page Object Model (POM) nima?", options: ["Test data", "Sahifani obyekt sifatida kod bilan ifodalash pattern", "Performance test", "API pattern"], correct: 1 },
  { text: "Bu kod nima qiladi?\n```python\ndriver.implicitly_wait(10)\n```", options: ["10 soniya kutadi", "Element topilmaguncha 10 sek kutadi", "Test 10 marta ishlaydi", "10 ms kechikadi"], correct: 1 },
  { text: "CI/CD da avtotestlar qachon ishlaydi?", options: ["Faqat juma kuni", "Har yangi kod push bo'lganda", "Oyiga bir marta", "Faqat so'ralganda"], correct: 1 },
  { text: "Pytest da fixture nima?", options: ["Test natijasi", "Test uchun oldindan tayyorlanadigan ma'lumot/muhit", "Bug hisoboti", "Performance o'lchovi"], correct: 1 },
  { text: "Bu pytest kodi nima qiladi?\n```python\ndef test_qo'shish():\n    assert 2 + 3 == 5\n```", options: ["2+3 ni hisoblaydi", "2+3=5 ekanini tekshiradi, agar xato — FAIL", "Natijani chiqaradi", "Xato — assert noto'g'ri"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// BLENDER — 4 blok
// ═══════════════════════════════════════════════════════════
'blender': { blockCount: 4, blocks: {
'1': [
  { text: "Blender da ob'ektni ko'chirish (move) shortcut?", options: ["M", "G", "S", "R"], correct: 1 },
  { text: "Blender da yangi ob'ekt qo'shish shortcut?", options: ["Ctrl+A", "Shift+A", "Alt+A", "N"], correct: 1 },
  { text: "3D viewport da kamera ko'rinishiga o'tish shortcut?", options: ["1", "0 (Numpad)", "5", "7"], correct: 1 },
  { text: "Edit Mode ga kirish shortcut?", options: ["E", "Tab", "Ctrl+Tab", "Alt+E"], correct: 1 },
  { text: "Blender da ob'ektni o'chirish shortcut?", options: ["Delete yoki X", "Backspace", "Ctrl+D", "Alt+X"], correct: 0 },
  { text: "Loop cut qo'shish shortcut?", options: ["L", "Ctrl+R", "Alt+C", "K"], correct: 1 }
],
'2': [
  { text: "Blender da Extrude (cho'zish) shortcut?", options: ["E", "X", "S", "G"], correct: 0 },
  { text: "Subdivision Surface modifier nima qiladi?", options: ["Ob'ektni kesadi", "Ko'proq polygon qo'shib silliqlashtiradi", "Ob'ektni kichraytiradi", "Tekstura qo'shadi"], correct: 1 },
  { text: "Boolean modifier nima uchun?", options: ["Animatsiya", "Ob'ektni birlashtiris yoki ayirish", "Tekstura", "Render"], correct: 1 },
  { text: "Sculpt mode nima uchun?", options: ["Animatsiya qilish", "Organik shakllar yasash (loy kabi)", "Tekstura bo'yash", "Render sozlash"], correct: 1 },
  { text: "UV Unwrapping nima uchun?", options: ["Animatsiya", "3D model ustiga 2D tekstura joylashtirish uchun koordinatalar", "Rigging", "Rendering"], correct: 1 },
  { text: "Mirror modifier nima qiladi?", options: ["Ko'chiradi", "Ob'ektni aks ettiradi (simmetriya)", "Kichraytiradi", "Ranglaydi"], correct: 1 }
],
'3': [
  { text: "Blender da material yaratish uchun qaysi bo'lim?", options: ["Geometry Nodes", "Shader Editor", "Compositor", "Timeline"], correct: 1 },
  { text: "PBR material da 'Roughness' nima?", options: ["Metalllik darajasi", "Sirt g'adir-budirlik darajasi", "Shaffoflik", "Ranglilik"], correct: 1 },
  { text: "Bu Shader node nima qiladi?\n```\nImage Texture → Base Color\n```", options: ["Rang beradi", "Rasm teksturasi rangini materiaga ulaydi", "Normal map qo'shadi", "Roughness beradi"], correct: 1 },
  { text: "Normal map nima uchun?", options: ["Rang berish", "Geometriya ko'paytirmasdan sirt tafsilotlarini simulatsiya", "Shaffoflik", "Metalllik"], correct: 1 },
  { text: "Substance Painter dan Blender ga tekstura import qilishda qaysi format ishlatiladi?", options: ["JPEG faqat", "PNG, EXR yoki TIFF", "BMP", "PSD"], correct: 1 },
  { text: "Emission shader nima qiladi?", options: ["Soya tushiradi", "Ob'ektni yorug'lik manbai kabi qiladi", "Shaffof qiladi", "Metallga aylantiradi"], correct: 1 }
],
'4': [
  { text: "Cycles va EEVEE render engine farqi?", options: ["Farqi yo'q", "Cycles aniq (ray tracing), EEVEE tez (real-time)", "EEVEE aniqroq", "Cycles faqat animatsiya uchun"], correct: 1 },
  { text: "Blender da animatsiya keyframe qo'shish shortcut?", options: ["K", "I", "A", "F"], correct: 1 },
  { text: "Rigging nima?", options: ["Tekstura qo'shish", "Modelga suyak skelet qo'shib animatsiyaga tayyorlash", "Render qilish", "Sahna yaratish"], correct: 1 },
  { text: "Particle System nima uchun?", options: ["Rigging", "Soch, o't, chang, yomg'ir effektlari", "Material", "Kamera"], correct: 1 },
  { text: "Blender da render qilish shortcut?", options: ["Ctrl+R", "F12", "Ctrl+F12", "R"], correct: 1 },
  { text: "Geometry Nodes nima?", options: ["Modellash usuli", "Node asosida protsessual geometriya yaratish", "Tekstura usuli", "Animatsiya usuli"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// MS OFFICE — 2 blok
// ═══════════════════════════════════════════════════════════
'mc-office': { blockCount: 2, blocks: {
'1': [
  { text: "Excel da bu formula nima hisoblaydi?\n```\n=SUM(A1:A10)\n```", options: ["O'rtacha", "A1 dan A10 gacha yig'indi", "Maksimum", "Minimum"], correct: 1 },
  { text: "Bu Excel formula nima qaytaradi?\n```\n=IF(A1>100, \"Katta\", \"Kichik\")\n```", options: ["Doim 'Katta'", "A1>100 bo'lsa 'Katta', aks holda 'Kichik'", "Xato", "0"], correct: 1 },
  { text: "VLOOKUP funksiyasining 4-argumenti nima?", options: ["Qidiruv qiymati", "Jadval massivi", "Ustun indeksi", "Range lookup (0 = aniq, 1 = taxminiy)"], correct: 3 },
  { text: "Excel da Pivot Table yaratish uchun?", options: ["Insert → Chart", "Insert → PivotTable", "Data → Filter", "Home → Sort"], correct: 1 },
  { text: "Bu formula nima qiladi?\n```\n=COUNTIFS(B2:B100,\"IT\",C2:C100,\">3000\")\n```", options: ["IT bo'limidagi barcha xodimlar", "IT bo'limida 3000 dan ortiq oylikli xodimlar soni", "O'rtacha oylik", "Yig'indi"], correct: 1 },
  { text: "Excel da bitta katakka bir nechta qator kiritish shortcut?", options: ["Enter", "Alt+Enter", "Ctrl+Enter", "Shift+Enter"], correct: 1 },
  { text: "Absolute reference ($A$1) nima uchun?", options: ["Katak rangini o'zgartirish", "Formulani ko'chirganda havola o'zgarmasligi", "Qiymatni ulash", "Formulani o'chirish"], correct: 1 },
  { text: "Excel da matnni ustunlarga ajratish uchun?", options: ["Home → Format", "Data → Text to Columns", "Insert → Split", "View → Columns"], correct: 1 }
],
'2': [
  { text: "Word da sarlavhalar (Heading 1, 2, 3) nima uchun?", options: ["Faqat katta qilish", "Hujjat strukturasi va avtomatik mundarija uchun", "Rang berish", "Chop etish"], correct: 1 },
  { text: "PowerPoint da Slide Master nima?", options: ["Birinchi slayd", "Barcha slaydlar uchun umumiy shablon", "Animatsiya markazi", "Eksport sozlamalari"], correct: 1 },
  { text: "Word da Track Changes nima uchun?", options: ["Hujjat formati", "O'zgartirishlarni kuzatish va ko'rish", "Saqlash", "Bosib chiqarish"], correct: 1 },
  { text: "Excel da ma'lumotlarni filtr qilish uchun?", options: ["Home → Sort", "Data → Filter", "Insert → Filter", "View → Show"], correct: 1 },
  { text: "PowerPoint da animatsiya va slide transition farqi?", options: ["Farqi yo'q", "Animatsiya element harakati, Transition slaydlar o'rtasi effekti", "Transition tezroq", "Animatsiya slaydlar uchun"], correct: 1 },
  { text: "Excel IFERROR funksiyasi nima qiladi?", options: ["Xato chiqaradi", "Xato bo'lganda muqobil qiymat qaytaradi", "Barcha xatolarni o'chiradi", "Formulani tekshiradi"], correct: 1 },
  { text: "Word da rasmni matn ichiga joylashtirish uchun?", options: ["Paste qilish", "Insert → Picture + Wrap Text sozlash", "Drag & drop faqat", "Copy-paste"], correct: 1 },
  { text: "Google Sheets va Excel o'rtasida asosiy farq?", options: ["Funksiyalar farqi", "Google Sheets onlayn hamkorlik, Excel ko'proq kuchli offline", "Excel bepul", "Google da formulalar yo'q"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// PRO DESIGN — 6 blok
// ═══════════════════════════════════════════════════════════
'pro-design': { blockCount: 6, blocks: {
'1': [
  { text: "Figma da yangi frame yaratish shortcut?", options: ["F", "R", "A", "V"], correct: 0 },
  { text: "Figma da Auto Layout nima uchun?", options: ["Rasm import qilish", "Elementlarni avtomatik joylashtirish va responsiv qilish", "Rang berish", "Eksport qilish"], correct: 1 },
  { text: "Figma da komponent yaratish uchun?", options: ["Ctrl+G", "Ctrl+Alt+K", "Ctrl+K", "Alt+K"], correct: 1 },
  { text: "Vector va Raster grafikaning farqi?", options: ["Farqi yo'q", "Vector sifatini yo'qotmasdan kengayadi, Raster piksellardan iborat", "Raster yaxshiroq", "Vector faqat logotip uchun"], correct: 1 },
  { text: "Figma da Constraints nima uchun?", options: ["Rang berish", "Elemento o'lchayotganda qanday harakat qilishini belgilash", "Prototip", "Eksport"], correct: 1 },
  { text: "Figma da Layer panelida 'Group' va 'Frame' farqi?", options: ["Farqi yo'q", "Frame layout uchun, Group faqat birlashtirish", "Group kuchliroq", "Frame eski usul"], correct: 1 }
],
'2': [
  { text: "Tipografiyada 'Leading' nima?", options: ["Harf kengligi", "Satrlar orasidagi masofa", "Harf qalinligi", "Harflar orasidagi masofa"], correct: 1 },
  { text: "60-30-10 qoidasi nima?", options: ["Font o'lchamlari", "Rang ulushi: 60% asosiy, 30% qo'shimcha, 10% aktsent", "Slayd strukturasi", "Grid qoidasi"], correct: 1 },
  { text: "Sans-serif va Serif shriftlar farqi?", options: ["Farqi yo'q", "Serif — oyoqchali, Sans-serif — oyoqchasiz harf", "Sans-serif eski", "Serif mobil uchun"], correct: 1 },
  { text: "Rang teoriasida komplementar (complementary) ranglar nima?", options: ["Yondosh ranglar", "Rang doirasida bir-biriga qarama-qarshi ranglar", "Bir xil tona", "Qo'shimcha ranglar"], correct: 1 },
  { text: "Kontrast nima uchun muhim?", options: ["Faqat estetika", "O'qilishi va accessibility uchun zarur", "Rang berish", "Animatsiya"], correct: 1 },
  { text: "Golden ratio (oltin nisbat) dizaynda nima uchun?", options: ["Moda uchun", "Proporsional va estetik muvozanat yaratish", "Raqamlar uchun", "Hech nima uchun"], correct: 1 }
],
'3': [
  { text: "UI dizaynda 'whitespace' nima?", options: ["Oq rang", "Elementlar orasidagi bo'sh joy", "Background rang", "Blank sahifa"], correct: 1 },
  { text: "8px grid system nima?", options: ["8 ustunli grid", "Barcha o'lchamlar 8 ga karrali bo'ladi", "8 pt font", "8 rangdan iborat palitra"], correct: 1 },
  { text: "Figma da design system nima?", options: ["Bitta design", "Qayta ishlatiladigan komponentlar, ranglar va tipografiya kutubxonasi", "Stil guide faqat", "Font kutubxonasi"], correct: 1 },
  { text: "Dark mode dizaynda asosiy qoida?", options: ["Faqat qora rang ishlatish", "Qora emas, to'q kulrang; kontrast saqlanishi", "Barcha ranglarni inverting qilish", "Rang ishlatmaslik"], correct: 1 },
  { text: "Hover state nima?", options: ["Animatsiya turi", "Sichqoncha ustida turganida element ko'rinishi", "Loading holati", "Error holati"], correct: 1 },
  { text: "Z-pattern va F-pattern nima?", options: ["Animatsiya pattern", "Foydalanuvchi ko'zining sahifani o'qish yo'nalishi", "Grid pattern", "Transition pattern"], correct: 1 }
],
'4': [
  { text: "UX dizaynda 'wireframe' nima?", options: ["Tayyor dizayn", "Sahifaning sxematik strukturasi (qoralama)", "Prototip", "Animatsiya"], correct: 1 },
  { text: "Figma da interaktiv prototip yaratish uchun?", options: ["Design paneli", "Prototype paneli + Interaction qo'shish", "Export", "Plugin"], correct: 1 },
  { text: "User flow nima?", options: ["Foydalanuvchi profili", "Foydalanuvchi maqsadga erishish uchun bosadigan qadamlar", "UI elementi", "Animatsiya"], correct: 1 },
  { text: "A/B testing UX da nima uchun?", options: ["Bug topish", "Qaysi dizayn variyanti yaxshiroq ishlashini aniqlash", "Performance test", "Accessibility"], correct: 1 },
  { text: "Usability testing nima?", options: ["Texnik test", "Haqiqiy foydalanuvchilar bilan mahsulot qanchalik qulayligini tekshirish", "Code review", "Design review"], correct: 1 },
  { text: "Figma da 'Variants' nima?", options: ["Rang variantlari", "Bir komponentning turli holatlari (default, hover, active, disabled)", "Shrift variantlari", "Frame variantlari"], correct: 1 }
],
'5': [
  { text: "Brand identity nima o'z ichiga oladi?", options: ["Faqat logotip", "Logotip, ranglar, shriftlar, ovoz va umumiy uslub", "Faqat ranglar", "Faqat veb-sayt"], correct: 1 },
  { text: "Logomark va Logotype farqi?", options: ["Farqi yo'q", "Logomark — belgi, Logotype — matnli logotip", "Logotype belgili", "Logomark matnli"], correct: 1 },
  { text: "Brand guidelines nima?", options: ["Narx ro'yxati", "Brendni to'g'ri va izchil ishlatish qoidalari", "Reklama matni", "Bozor tahlili"], correct: 1 },
  { text: "Mockup nima?", options: ["Wireframe", "Dizaynning haqiqiy hayotdagi simulatsiyasi (telefon, kitob ustida)", "Prototip", "Kod shablon"], correct: 1 },
  { text: "Pantone rangi nima?", options: ["Digital rang", "Bosmada standartlashtirilgan rang tizimi", "Screen rangi", "RGB rang"], correct: 1 },
  { text: "CMYK va RGB qaysi formatlar uchun?", options: ["CMYK ekran, RGB bosma", "RGB ekran, CMYK bosma", "Ikkalasi ekran uchun", "Ikkalasi bosma uchun"], correct: 1 }
],
'6': [
  { text: "After Effects da keyframe interpollation nima?", options: ["Keyframe nusxa olish", "Keyframelar orasidagi harakatni hisoblash usuli", "Effekt turi", "Layer turi"], correct: 1 },
  { text: "Motion design da 12 animatsiya prinsipidan biri 'Squash and Stretch' nima?", options: ["Rangni o'zgartirish", "Ob'ektning elastiklik va og'irligini ko'rsatish", "Harakat yo'nalishi", "Soya"], correct: 1 },
  { text: "Figma da Smart Animate nima?", options: ["AI animatsiya", "Bir framdan ikkinchisiga silliq o'tish", "Auto Layout", "Komponent animatsiya"], correct: 1 },
  { text: "Design handoff nima?", options: ["Dizayn o'chirish", "Tayyor dizaynni developerga spesifikatsiya bilan topshirish", "Prototip yuborish", "File eksport"], correct: 1 },
  { text: "Accessibility (a11y) dizaynda nima degani?", options: ["Mobil dizayn", "Barcha foydalanuvchilar, shu jumladan nogironlar uchun moslashuvchan dizayn", "Dark mode", "Responsive dizayn"], correct: 1 },
  { text: "Glassmorphism dizayn trenди nima?", options: ["Flat dizayn", "Shisha kabi shaffof, blur effektli UI", "Neumorphism", "Material design"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// PRO SMM — 4 blok
// ═══════════════════════════════════════════════════════════
'pro-smm': { blockCount: 4, blocks: {
'1': [
  { text: "SMM nima degan qisqartma?", options: ["Sales Marketing Manager", "Social Media Marketing", "Search Media Management", "System Media Marketing"], correct: 1 },
  { text: "Target auditoriya nima?", options: ["Barcha odamlar", "Mahsulot/xizmatga qiziqadigan muayyan guruh", "Faqat yoshlar", "Faqat internet foydalanuvchilari"], correct: 1 },
  { text: "Content plan nima uchun kerak?", options: ["Tasodifiy post qo'yish", "Muntazam va rejalashtirilgan kontent nashr qilish", "Reklama sotib olish", "Faqat video qo'yish"], correct: 1 },
  { text: "Engagement rate nima?", options: ["Kuzatuvchilar soni", "Like, comment, share soni / kuzatuvchilar × 100%", "Faqat like soni", "Qamrov (reach)"], correct: 1 },
  { text: "Instagram Reels va Stories farqi?", options: ["Farqi yo'q", "Reels qoladigan video, Stories 24 soatdan keyin yo'qoladi", "Stories uzunroq", "Reels faqat professional"], correct: 1 },
  { text: "Hashtag strategiyasi nima uchun?", options: ["Faqat ko'rinish uchun", "Ko'proq odamlarga yetib borish va qidiruv uchun", "Post bezash uchun", "Follower sotib olish"], correct: 1 }
],
'2': [
  { text: "Viral kontent nima?", options: ["Reklama kontent", "O'z-o'zidan tez tarqaladigan kontent", "Professional kontent", "To'langan kontent"], correct: 1 },
  { text: "Copywriting da CTA nima?", options: ["Content Type Agreement", "Call To Action — harakatga chaqiruv", "Creative Text Approach", "Customer Targeting Ads"], correct: 1 },
  { text: "Instagram da Carousel post nima?", options: ["Animatsion post", "Bir nechta rasm/video birga ko'rsatiluvchi post", "Story turi", "Live efir"], correct: 1 },
  { text: "Optimal Instagram post vaqti nima?", options: ["Har qachon", "Auditoriya eng faol bo'lgan vaqt (insights bilan aniqlash)", "Ertalab 6:00", "Kechasi 23:00"], correct: 1 },
  { text: "UGC (User Generated Content) nima?", options: ["Kompaniya kontent", "Foydalanuvchilar tomonidan yaratilgan kontent", "Pulli kontent", "AI kontent"], correct: 1 },
  { text: "Kontent turlarini sanang:", options: ["Faqat rasm va video", "Rasm, video, story, reels, live, carousel, tekst", "Faqat tekst", "Faqat video"], correct: 1 }
],
'3': [
  { text: "Targeted reklama nima?", options: ["Barcha odamlarga ko'rsatish", "Ma'lum auditoriyaga yo'naltirilgan reklama", "Tasodifiy reklama", "Organic kontent"], correct: 1 },
  { text: "Facebook Ads da CPM nima?", options: ["Cost Per Month", "Cost Per Mille — 1000 ta ko'rishga narx", "Clicks Per Minute", "Cost Per Message"], correct: 1 },
  { text: "Retargeting nima?", options: ["Yangi auditoriyaga reklama", "Saytga kelgan lekin sotib olmagan odamlarga reklama", "Ko'p marta reklama", "A/B test"], correct: 1 },
  { text: "Lookalike audience nima?", options: ["Mavjud mijozlarga o'xshash odamlar", "Bir xil auditoriya", "Ko'rgan odamlar", "Kuzatuvchilar"], correct: 0 },
  { text: "ROAS nima?\n```\nROAS = Daromad / Reklama xarajati\n```", options: ["Reach On Ads Spending", "Return On Ad Spend — reklama samaradorligi", "Rate Of Active Subscribers", "Reach Of Audience Score"], correct: 1 },
  { text: "A/B test reklamada nima uchun?", options: ["Reklama narxini kamaytirish", "Qaysi variant yaxshiroq ishlashini aniqlash", "Ko'proq reklama berish", "Auditoriyani kengaytirish"], correct: 1 }
],
'4': [
  { text: "Instagram Insights da 'Reach' va 'Impressions' farqi?", options: ["Farqi yo'q", "Reach — nechta odam, Impressions — necha marta ko'rilgan", "Impressions ko'proq", "Reach to'liqroq"], correct: 1 },
  { text: "SMM da KPI nima?", options: ["Kontent turi", "Muvaffaqiyatni o'lchash ko'rsatkichlari", "Reklama narxi", "Platforma turi"], correct: 1 },
  { text: "Follower o'sishi sekinlashganda nima qilish kerak?", options: ["Hisob o'chirish", "Kontent tahlili qilish, collaboration va reklama", "Hamma narsani o'chirish", "Kutish"], correct: 1 },
  { text: "Social media auditit nima?", options: ["Hisob tekshiruvi", "Barcha kontent va ko'rsatkichlarni tahlil qilish", "Reklama to'lovi", "Platforma o'zgartirish"], correct: 1 },
  { text: "Influencer marketing nima?", options: ["O'z reklamang", "Mashxur bloggerlar orqali mahsulot/xizmat targ'iboti", "Rasmiy reklama", "Kontent marketing"], correct: 1 },
  { text: "Niche audience nima?", options: ["Keng auditoriya", "Tor, muayyan qiziqishga ega auditoriya", "Premium auditoriya", "Yosh auditoriya"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// BAZA KURSI — 1 blok
// ═══════════════════════════════════════════════════════════
'basic': { blockCount: 1, blocks: {
'1': [
  { text: "CPU nima?", options: ["Xotira", "Markaziy protsessor — kompyuterning 'miyasi'", "Qattiq disk", "Ekran"], correct: 1 },
  { text: "RAM va ROM farqi?", options: ["Farqi yo'q", "RAM vaqtinchalik xotira, ROM o'zgarmas xotira", "ROM tezroq", "RAM katta"], correct: 1 },
  { text: "Fayl kengaytmasi (.jpg, .pdf) nima uchun?", options: ["Fayl nomi", "Fayl turi va uni ochuvchi dasturni ko'rsatadi", "Fayl hajmi", "Saqlash joyi"], correct: 1 },
  { text: "Brauzеr nima?", options: ["Antivirus", "Internet sahifalarini ko'ruvchi dastur", "Tarmoq", "Protsessor"], correct: 1 },
  { text: "Wi-Fi va kabel internet farqi?", options: ["Farqi yo'q", "Wi-Fi simsiz, kabel sim orqali ulanish", "Kabel sekinroq", "Wi-Fi tezroq"], correct: 1 },
  { text: "Cloud storage nima?", options: ["Lokal disk", "Internetdagi masofaviy ma'lumot saqlash xizmati", "USB flesh", "Antivirus", ], correct: 1 },
  { text: "Phishing nima?", options: ["Baliq ovlash", "Hiyla yo'li bilan shaxsiy ma'lumot o'g'irlash", "Virus turi", "Tarmoq muammosi"], correct: 1 },
  { text: "Kuchli parol qanday bo'lishi kerak?", options: ["Ism va tug'ilgan kun", "Harf, raqam, belgi aralash, 12+ ta belgi", "Faqat raqamlar", "Qisqa va oddiy"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// INTERNET MARKETING — 4 blok
// ═══════════════════════════════════════════════════════════
'marketing': { blockCount: 4, blocks: {
'1': [
  { text: "Digital marketing va traditional marketing farqi?", options: ["Farqi yo'q", "Digital — internet orqali, Traditional — TV, gazeta, billboard", "Traditional tezroq", "Digital qimmat"], correct: 1 },
  { text: "Sales funnel nima?", options: ["Sotish vositasi", "Mijoz qiziqishdan sotib olishgacha bosadigan qadamlar", "Reklama turi", "Veb-sayt turi"], correct: 1 },
  { text: "ROI nima?\n```\nROI = (Daromad - Xarajat) / Xarajat × 100%\n```", options: ["Rate of Influence", "Return on Investment — investitsiya qaytimi", "Revenue Over Income", "Risk of Implementation"], correct: 1 },
  { text: "Landing page nima uchun?", options: ["Asosiy veb-sayt", "Reklama orqali kelgan tashrif buyuruvchilarni konvertatsiya qilish", "Blog sahifasi", "Kontakt sahifasi"], correct: 1 },
  { text: "Customer journey nima?", options: ["Mijoz yoshi", "Mijozning brend bilan birinchi tanishishdan sotib olishgacha yo'li", "Savdo yo'li", "Reklama kampaniyasi"], correct: 1 },
  { text: "Persona nima?", options: ["Haqiqiy mijoz", "Maqsadli auditoriyaning xayoliy vakili (profil)", "Reklama obrazi", "Brand vakili"], correct: 1 }
],
'2': [
  { text: "SEO nima?", options: ["Social Engagement Optimization", "Search Engine Optimization — qidiruv tizimida yuqori chiqish", "Sales Email Outreach", "Social Effect Outreach"], correct: 1 },
  { text: "On-page SEO va Off-page SEO farqi?", options: ["Farqi yo'q", "On-page — sayt ichidagi optimizatsiya, Off-page — tashqaridan (linklar)", "Off-page tezroq", "On-page qimmat"], correct: 1 },
  { text: "Meta description nima?", options: ["Sahifa sarlavhasi", "Qidiruvda ko'rinadigan qisqa sahifa tavsifi", "URL manzil", "H1 tag"], correct: 1 },
  { text: "Keyword research nima uchun?", options: ["Qidiruv tizimini aldash", "Maqsadli auditoriya qidirayotgan so'zlarni aniqlash", "Sahifani bezash", "Link qurish"], correct: 1 },
  { text: "Content marketing nima?", options: ["Faqat blog yozish", "Foydali kontent orqali auditoriyani jalb qilish", "Reklama kontent", "Social media faqat"], correct: 1 },
  { text: "Backlink nima?", options: ["Ichki havola", "Boshqa saytdan sizning saytingizga havola", "Broken link", "Redirect"], correct: 1 }
],
'3': [
  { text: "Google Ads da Quality Score nima?", options: ["Reklama narxi", "Kalit so'z, reklama va landing page sifati reytingi", "Klik soni", "Taassurot soni"], correct: 1 },
  { text: "CPC nima?\n```\nCPC = Umumiy xarajat / Kliklar soni\n```", options: ["Cost Per Campaign", "Cost Per Click — bir klika narx", "Customer Price Calculation", "Clicks Per Customer"], correct: 1 },
  { text: "Google Ads kampaniya turlaridan biri qaysi?", options: ["Organic", "Search, Display, Shopping, Video", "SEO", "Social"], correct: 1 },
  { text: "Negative keywords nima uchun?", options: ["Kalit so'zlarni o'chirish", "Keraksiz qidiruvlarda reklamani ko'rsatmaslik", "Narxni kamaytirish", "Auditoriyani kengaytirish"], correct: 1 },
  { text: "Ad rank nima?", options: ["Reklama reytingi (bid × quality score)", "Reklamaning joyi faqat", "Klik narxi", "Taassurot soni"], correct: 0 },
  { text: "Display ads qayerda ko'rinadi?", options: ["Faqat Google da", "Veb-saytlar, YouTube, Gmail va boshqalar", "Faqat mobil", "Faqat qidiruvda"], correct: 1 }
],
'4': [
  { text: "Email marketing da open rate nima?", options: ["Yuborilgan emaillar", "Ochilgan emaillar foizi", "Javob berilgan emaillar", "Obuna bo'lganlar"], correct: 1 },
  { text: "Google Analytics da 'bounce rate' nima?", options: ["Saytga tashrif soni", "Bitta sahifadan chiqib ketganlar foizi", "Kliklar soni", "Konversiya"], correct: 1 },
  { text: "UTM parametrlari nima uchun?", options: ["URL qisqartirish", "Reklama manbalarini kuzatish (qayerdan keldi)", "Sahifa optimizatsiyasi", "Email sozlamalari"], correct: 1 },
  { text: "Conversion rate nima?\n```\nCR = Konversiyalar / Tashrif × 100%\n```", options: ["Saytga kelganlar", "Maqsadli harakatni bajarganlar foizi", "Reklama kliklar", "Sahifa ko'rishlar"], correct: 1 },
  { text: "Google Analytics da 'Session' nima?", options: ["Foydalanuvchi hisobi", "Foydalanuvchining saytdagi bir tashrifi (30 min faollik)", "Bir sahifa ko'rish", "Login vaqti"], correct: 1 },
  { text: "Heatmap nima uchun?", options: ["Sayt issiqligi", "Foydalanuvchilar sahifada qayerga bosishini ko'rsatish", "Server load", "Reklama joylari"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// KOMPYUTER YIG'ISH — 3 blok
// ═══════════════════════════════════════════════════════════
'pc-build': { blockCount: 3, blocks: {
'1': [
  { text: "CPU Socket nima?", options: ["Elektr ulanish", "Protsessor plata bilan ulanadigan joy", "RAM uyi", "USB port"], correct: 1 },
  { text: "DDR4 va DDR5 RAM farqi?", options: ["Farqi yo'q", "DDR5 tezroq va ko'proq energiya tejaydi", "DDR4 yangroq", "DDR5 eski"], correct: 1 },
  { text: "SSD va HDD farqi?", options: ["Farqi yo'q", "SSD tezroq, HDD arzonroq va kattaroq hajm", "HDD tezroq", "SSD kattaroq"], correct: 1 },
  { text: "PSU (Power Supply) da 'Watt' nima?", options: ["Tezlik", "Quvvat berish imkoniyati", "Xotira hajmi", "Protsessor tezligi"], correct: 1 },
  { text: "GPU nima?", options: ["Asosiy protsessor", "Grafik protsessor — tasvir ishlash uchun", "RAM turi", "Qattiq disk"], correct: 1 },
  { text: "Motherboard chipset nima uchun?", options: ["Ekran uchun", "Protsessor va boshqa komponentlar o'rtasida aloqani boshqarish", "Audio uchun", "USB uchun"], correct: 1 }
],
'2': [
  { text: "Termal pasta qayerga qo'yiladi?", options: ["GPU ga", "CPU va sovutgich orasiga", "RAM ga", "SSD ga"], correct: 1 },
  { text: "Kompyuter yoqilmasa birinchi nima tekshiriladi?", options: ["Monitor", "PSU ulanishi va quvvat kabeli", "Klaviatura", "USB qurilmalar"], correct: 1 },
  { text: "BIOS nima?", options: ["Operatsion tizim", "Plata dastlabki dasturiy ta'minoti", "Antivirus", "Drayvеr"], correct: 1 },
  { text: "POST nima?\n```\nBeep signallari = ...\n```", options: ["Pochta xizmati", "Yoqilganda hardware tekshiruvi", "Dastur turi", "Tarmoq protokoli"], correct: 1 },
  { text: "RAM slotlarga qanday qo'yiladi?", options: ["Istalgan tartibda", "Dual channel uchun 2-4 yoki 1-3 slotlarga", "Faqat birinchisiga", "Istalgan biriga"], correct: 1 },
  { text: "Kompyuter qizib ketsa nima qilish kerak?", options: ["Ko'proq yuk berish", "Sovutish tizimini tekshirish, chang tozalash, termal pasta almashtirish", "Tezroq ishlash", "Dasturlarni o'chirish"], correct: 1 }
],
'3': [
  { text: "Windows o'rnatish uchun birinchi qadam?", options: ["Diskni formatlash", "BIOS da USB dan yuklashni o'rnatish", "Drayverlasrni yuklab olish", "Internet ulash"], correct: 1 },
  { text: "Driver nima?", options: ["Tizim fayli", "Hardware ni OS bilan bog'lovchi dastur", "Antivirus", "Tarmoq sozlamalari"], correct: 1 },
  { text: "SSD ni tez sekinlashishi mumkin uchun?", options: ["Juda kam joy qolsa (5% dan kam bo'sh)", "Ko'p yil ishlatilsa", "Ko'p fayllar bo'lsa", "Issiq bo'lsa"], correct: 0 },
  { text: "RAID 0 va RAID 1 farqi?", options: ["Farqi yo'q", "RAID 0 tezlik uchun, RAID 1 zahiralash uchun", "RAID 1 tezroq", "RAID 0 xavfsizroq"], correct: 1 },
  { text: "Kompyuterni optimizatsiya qilish uchun nima kerak?", options: ["Ko'proq dastur o'rnatish", "Autorun dasturlarini kamaytirish, temp fayllarni tozalash, defrag", "Restart qilish", "Monitor almashltirish"], correct: 1 },
  { text: "UPS nima uchun?", options: ["Tezlikni oshirish", "Quvvat uzilganda kompyuterni vaqtincha ishlashini davom ettirish", "Internet uchun", "Sovutish uchun"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// MOBILOGRAFIYA — 2 blok
// ═══════════════════════════════════════════════════════════
'mobilography': { blockCount: 2, blocks: {
'1': [
  { text: "Smartfon kamerasida ISO nima?", options: ["Kamera tezligi", "Sezgirlik — yuqori ISO = yorug'roq lekin shovqin ko'p", "Fokus masofasi", "Shutter speed"], correct: 1 },
  { text: "Kompozitsiyada 'Uchlar qoidasi' (Rule of Thirds) nima?", options: ["3 ta suratga olish", "Sujet 9 bo'lakka bo'lingan to'rdan biriga joylashtiriladi", "3 ta nur manbai", "3 ta filtr"], correct: 1 },
  { text: "Golden hour nima?", options: ["Oltin soat qiymati", "Quyosh chiqishi/botishidan 1 soat — eng yumshoq yorug'lik", "Kamera sozlamasi", "Filtr turi"], correct: 1 },
  { text: "Portrait rejimi (Bokeh) nima qiladi?", options: ["Burchak kengaytiradi", "Fon loyqa, ob'ekt aniq ko'rinadi", "Rang o'zgartiradi", "Kengaytiradi"], correct: 1 },
  { text: "Pro rejimida shutter speed nima?", options: ["Fokus masofasi", "Kamera zatvorining ochiqlik vaqti", "Kengaytirish", "Nur miqdori"], correct: 1 },
  { text: "Smartfonda eng yaxshi video formatini tanlash uchun nima muhim?", options: ["Faqat 4K tanlash", "Maqsad (YouTube, Instagram, TikTok) ga qarab FPS va ruxsat tanlash", "Faqat 30 FPS", "Har doim eng yuqori"], correct: 1 }
],
'2': [
  { text: "CapCut da video kesish uchun qaysi funksiya?", options: ["Trim", "Split", "B va A ikkalasi", "Crop"], correct: 2 },
  { text: "Transitions nima uchun?", options: ["Rang berish", "Kliplar orasidagi silliq o'tish", "Audio qo'shish", "Matn qo'shish"], correct: 1 },
  { text: "Color grading mobil montajda nima?", options: ["Faqat brightness oshirish", "Video rang va kayfiyatini professionallashtirish", "Filtr qo'shish", "Keskinlik oshirish"], correct: 1 },
  { text: "Reels uchun optimal uzunlik (2024)?", options: ["30 soniya", "7-15 soniya (qisqa), maksimum 90 sek", "5 daqiqa", "3 daqiqa"], correct: 1 },
  { text: "Keyframe animatsiya mobil montajda nima?", options: ["Asosiy kadr", "Vaqt bo'yicha effekt o'zgarishini belgilash nuqtasi", "Filtr turi", "Transition turi"], correct: 1 },
  { text: "Export qilishda 'Bitrate' nima?", options: ["FPS", "Video sifati va hajmini belgilovchi ma'lumot zichligi", "Ruxsat", "Audio sifati"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// IT DA START — 3 blok
// ═══════════════════════════════════════════════════════════
'start-it': { blockCount: 3, blocks: {
'1': [
  { text: "IT sohasi qaysi yo'nalishlarni o'z ichiga oladi?", options: ["Faqat dasturlash", "Dasturlash, dizayn, marketing, QA, data, boshqaruv va boshqalar", "Faqat kompyuter ta'mirlash", "Faqat veb-sayt"], correct: 1 },
  { text: "Frontend va Backend farqi?", options: ["Farqi yo'q", "Frontend ko'rinadigan qism, Backend server va ma'lumotlar", "Backend tezroq", "Frontend qimmat"], correct: 1 },
  { text: "MVP nima?", options: ["Most Valuable Player", "Minimum Viable Product — asosiy funksiyalik mahsulot", "Maximum Value Product", "Marketing Viable Plan"], correct: 1 },
  { text: "Open source nima?", options: ["Bepul dastur", "Kodi ochiq, ko'pchilik o'zgartirishga mumkin bo'lgan dastur", "Yopiq kod", "Premium dastur"], correct: 1 },
  { text: "Git nima?", options: ["Dasturlash tili", "Kod versiyalarini boshqaruvchi tizim", "Server", "IDE"], correct: 1 },
  { text: "Freelance va Full-time farqi IT da?", options: ["Farqi yo'q", "Freelance mustaqil, Full-time doimiy ish joyida", "Full-time ko'proq daromad", "Freelance yaxshiroq"], correct: 1 }
],
'2': [
  { text: "Algorithm nima?", options: ["Dasturlash tili", "Muammoni hal qilish uchun qadamlar ketma-ketligi", "Matematik formula", "Kompyuter tizimi"], correct: 1 },
  { text: "Variable (o'zgaruvchi) nima?", options: ["Matematik symbol", "Ma'lumot saqlovchi nom berilgan joy", "Funksiya turi", "Shart ifoda"], correct: 1 },
  { text: "Loop (sikl) nima uchun?", options: ["Bitta amal", "Bir amalni takror bajarish", "Shart tekshirish", "Ma'lumot saqlash"], correct: 1 },
  { text: "Boolean nima?", options: ["Raqam turi", "True yoki False qiymatli ma'lumot turi", "Matn turi", "Ro'yxat turi"], correct: 1 },
  { text: "Function (funksiya) nima?", options: ["Matematik formula", "Qayta ishlatiladigan kod bloki", "O'zgaruvchi turi", "Dastur turi"], correct: 1 },
  { text: "IDE nima?", options: ["Internet Development Engine", "Integrated Development Environment — kod yozish muhiti", "IT Data Engine", "Instant Deploy Engine"], correct: 1 }
],
'3': [
  { text: "Qaysi IT yo'nalishni tanlashda asosiy mezon?", options: ["Eng yuqori maosh", "Qiziqish, qobiliyat va bozor talabi", "Eng qisqa o'quv vaqti", "Eng oson yo'nalish"], correct: 1 },
  { text: "Portfolio nima uchun?", options: ["Faqat maqtanish", "Ishga joylashish va ko'nikmani ko'rsatish uchun", "Daromad olish", "Kurs sertifikati"], correct: 1 },
  { text: "Scrum metodologiyasi nima?", options: ["Dasturlash tili", "Agile asosidagi loyiha boshqaruv tizimi", "Test metodikasi", "Server turi"], correct: 1 },
  { text: "Stack (tech stack) nima?", options: ["Ma'lumotlar tuzilmasi", "Loyihada ishlatiladigan texnologiyalar to'plami", "Server turi", "Kod muharriri"], correct: 1 },
  { text: "Junior dasturchi qanday ko'nikmaga ega bo'lishi kerak?", options: ["Hamma narsani bilish", "Asosiy dasturlash, Git, muammo yechish, o'rganish istagi", "Faqat algoritmlar", "Faqat framework"], correct: 1 },
  { text: "Networking IT da nima uchun?", options: ["Internet ulash", "Kasbiy aloqalar o'rnatish va imkoniyatlar topish", "Tarmoq sozlash", "Server boshqarish"], correct: 1 }
]
}},

// ═══════════════════════════════════════════════════════════
// YOSH DASTURCHI — 3 blok
// ═══════════════════════════════════════════════════════════
'young-dev': { blockCount: 3, blocks: {
'1': [
  { text: "Dasturlash nima?", options: ["Kompyuter o'yini", "Kompyuterga buyruqlar berish tili orqali muammo yechish", "Rasm chizish", "Matematik hisob"], correct: 1 },
  { text: "Scratch da 'sprite' nima?", options: ["Sahna", "Boshqariladigan personaj yoki ob'ekt", "Ovoz", "Fon"], correct: 1 },
  { text: "Bu Scratch blok nima qiladi?\n```\nwhen [space] key pressed\nmove 10 steps\n```", options: ["Space bosilganda 10 qadam yuradi", "Space bosilganda to'xtaydi", "Ovoz chiqaradi", "Rangini o'zgartiradi"], correct: 0 },
  { text: "Loop (sikl) Scratch da qanday ko'rinadi?", options: ["'if' bloki", "'repeat' bloki", "'when' bloki", "'say' bloki"], correct: 1 },
  { text: "Algorithm nima?", options: ["Kompyuter dasturi", "Muammoni hal qilish uchun qadamlar", "Matematik formula", "Kompyuter tili"], correct: 1 },
  { text: "Debugging nima?", options: ["Dastur yozish", "Koddagi xatolarni topib tuzatish", "Dastur o'chirish", "Yangi funksiya qo'shish"], correct: 1 }
],
'2': [
  { text: "Python da 'print' nima qiladi?", options: ["Bosmaga chiqaradi", "Ekranga yozib chiqaradi", "Faylga saqlaydi", "Hisoblaydi"], correct: 1 },
  { text: "Bu Python kod nima chiqaradi?\n```python\nfor i in range(3):\n    print('Salom')\n```", options: ["Bir marta 'Salom'", "3 marta 'Salom'", "0 1 2", "Xato"], correct: 1 },
  { text: "Pygame nima uchun?", options: ["Veb-sayt yaratish", "Python da o'yin yaratish", "Matn tahrirlash", "Rasm ko'rish"], correct: 1 },
  { text: "Variable (o'zgaruvchi) Pythonda:\n```python\nyosh = 12\n```\nBu nima qiladi?", options: ["12 ni chiqaradi", "'yosh' nomli o'zgaruvchiga 12 ni saqlaydi", "12 ni o'chiradi", "Xato"], correct: 1 },
  { text: "O'yin yaratishda 'Game Loop' nima?", options: ["O'yin tugashi", "O'yin ishlayotgan vaqt doimo takrorlanadigan tsikl", "Level o'tish", "Score hisoblash"], correct: 1 },
  { text: "Bu kod nima qiladi?\n```python\nif score >= 100:\n    print('Yutuq!')\n```", options: ["Har doim 'Yutuq!' chiqaradi", "Score 100 va undan katta bo'lsa 'Yutuq!' chiqaradi", "Xato", "Hech narsa"], correct: 1 }
],
'3': [
  { text: "Mini loyiha uchun birinchi qadam nima?", options: ["Kod yozish", "G'oyani rejalashtirish va qoralama chizish", "Dastur o'rnatish", "Internet izlash"], correct: 1 },
  { text: "GitHub nima?", options: ["O'yin platformasi", "Kod saqlash va hamkorlik qilish platforma", "Video ko'rish", "Email xizmati"], correct: 1 },
  { text: "Bu Python calculator kodi to'g'rimi?\n```python\na = int(input('Son: '))\nb = int(input('Son: '))\nprint(a + b)\n```", options: ["Xato — int ishlamaydi", "To'g'ri — 2 son kiritib yig'indini chiqaradi", "Xato — print noto'g'ri", "To'g'ri faqat 1 son uchun"], correct: 1 },
  { text: "O'yin yaratishda 'collision detection' nima?", options: ["O'yin tugashi", "Ob'ektlar bir-biriga tegishini aniqlash", "Score hisoblash", "Level o'tish"], correct: 1 },
  { text: "Loyiha taqdimotida nima muhim?", options: ["Faqat kod ko'rsatish", "Muammo, yechim, demo va o'rganganlar", "Uzoq tushuntirish", "Faqat natija"], correct: 1 },
  { text: "Keyingi qadam — Professional dasturchi bo'lish uchun?", options: ["Bir narsani o'rganib to'xtatish", "Doimiy o'rganish, loyihalar qilish, hamkorlik", "Faqat kurs tugatish", "Kitob o'qish"], correct: 1 }
]
}}

}, ru: {} }; // ru versiyasi admin AI generator orqali to'ldiriladi

// ────────────────────────────────────────────────
// Auto-load: agar testDB bo'sh bo'lsa seed yuklash
// ────────────────────────────────────────────────
(function() {
  try {
    const existing = localStorage.getItem('testDB');
    if (!existing || existing === '{}' || existing === 'null') {
      localStorage.setItem('testDB', JSON.stringify(window.QUESTIONS_SEED));
      console.log('✅ Seed ma\'lumotlar yuklandi');
    }
  } catch(e) {
    console.warn('Seed yuklashda xato:', e);
  }
})();
