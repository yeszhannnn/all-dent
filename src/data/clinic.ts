export const CLINIC = {
  name: "ALL DENT",
  fullName: "Стоматология ALL DENT",
  city: "Астана",
  phone: "+7 747 251 95 95",
  email: "all.dent@mail.ru",
  address: "Астана, улица Кайым Мухамедханов, 6а",

  // NOTE: Work hours may change on holidays. Update this field as needed.
  workHours: "Пн–Сб: 09:00–20:00",
  workHoursNote: "Расписание может меняться в праздничные дни",

  whatsapp:
    "https://api.whatsapp.com/send/?phone=77472519595&text&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/alldent.kz/",
  twoGis: "https://2gis.kz/astana/firm/70000001089480089",
} as const;

export const TRUST_STATS = [
  { value: 10000, suffix: "+", label: "установленных имплантов" },
  { value: 10, suffix: "+", label: "лет опыта врачей" },
  { value: 5.0, suffix: "", label: "рейтинг в 2GIS", decimals: 1 },
  { value: 800, suffix: "+", label: "оценок" },
  { value: 650, suffix: "+", label: "отзывов" },
] as const;

export const ADVANTAGES = [
  {
    icon: "Users",
    title: "Для взрослых и детей",
    description:
      "Лечение для всей семьи — от детского стоматолога до сложной имплантации",
  },
  {
    icon: "Moon",
    title: "Севоран и лечение во сне",
    description:
      "Комфортное лечение без стресса — идеально для детей и при большом объёме работ",
  },
  {
    icon: "FileText",
    title: "Понятный прайс",
    description:
      "Прозрачные цены без скрытых доплат — вы знаете стоимость до начала лечения",
  },
  {
    icon: "HeartPulse",
    title: "Бесплатная подготовка к Севорану",
    description: "Анализы, ЭКГ и план лечения — бесплатно при лечении во сне",
  },
  {
    icon: "Sparkles",
    title: "Современные методы",
    description:
      "Импланты мирового уровня, цифровая диагностика и проверенные материалы",
  },
  {
    icon: "MessageCircle",
    title: "Запись через WhatsApp",
    description:
      "Удобная запись без звонков — напишите нам и мы подберём удобное время",
  },
] as const;

export const DIRECTIONS = [
  {
    title: "Терапия",
    description: "Лечение кариеса, эндодонтия, реставрация",
    icon: "Stethoscope",
  },
  {
    title: "Пародонтология",
    description: "Лечение дёсен, гигиена, Vector",
    icon: "Shield",
  },
  {
    title: "Хирургия",
    description: "Удаление зубов, резекции, френулопластика",
    icon: "Scissors",
  },
  {
    title: "Имплантология",
    description: "Straumann, Osstem, ALL ON 4/6",
    icon: "Wrench",
  },
  {
    title: "Ортодонтия",
    description: "Брекеты, Damon Q, капы, ретейнеры",
    icon: "AlignCenter",
  },
  {
    title: "Ортопедия",
    description: "Коронки, виниры, протезы",
    icon: "Crown",
  },
  {
    title: "Детская стоматология",
    description: "Бережное лечение в комфортной обстановке",
    icon: "Baby",
  },
  {
    title: "Севоран",
    description: "Лечение во сне для детей и взрослых",
    icon: "Cloud",
  },
] as const;

export const PRICE_PREVIEW = [
  {
    name: "Лечение поверхностного кариеса",
    price: "от 17 000 тг",
    category: "Терапия",
  },
  {
    name: "Удаление зуба мудрости",
    price: "от 25 000 тг",
    category: "Хирургия",
  },
  {
    name: "Севоран",
    price: "15 000 тг / час",
    category: "Севоран",
    highlight: true,
  },
  {
    name: "AnyOne (Южная Корея)",
    price: "от 140 000 тг",
    category: "Имплантация",
  },
  {
    name: "Straumann Premium (Швейцария)",
    price: "от 350 000 тг",
    category: "Имплантация",
    premium: true,
  },
  {
    name: "Металлические брекеты (1 челюсть)",
    price: "от 150 000 тг",
    category: "Ортодонтия",
  },
  {
    name: "Коронка из диоксида циркония",
    price: "от 100 000 тг",
    category: "Ортопедия",
  },
  {
    name: "Цельнокерамический винир (E-max)",
    price: "от 130 000 тг",
    category: "Ортопедия",
  },
  {
    name: "ALL ON 4 + мультиюнит + временная конструкция",
    price: "от 1 300 000 тг",
    category: "Имплантация",
    premium: true,
  },
] as const;

export const REVIEWS = [
  {
    name: "Айгуль М.",
    rating: 5,
    text: "Лечила зубы ребёнку под Севораном — всё прошло спокойно, без слёз. Врачи внимательные, всё объяснили заранее. Очень довольна результатом!",
    source: "2GIS",
  },
  {
    name: "Дмитрий К.",
    rating: 5,
    text: "Ставил импланты Straumann — качество на высоте. Понятные цены, нет скрытых доплат. Рекомендую всем, кто ищет надёжную клинику в Астане.",
    source: "2GIS",
  },
  {
    name: "Мадина Б.",
    rating: 5,
    text: "Приятно лечиться в ALL DENT — современная клиника, хорошая атмосфера. Лечила кариес, совсем не больно. Теперь хожу только сюда.",
    source: "2GIS",
  },
  {
    name: "Арман С.",
    rating: 5,
    text: "Поставил брекеты по акции — отличная цена и профессиональный подход. Ортодонт подробно рассказал план лечения. Всё удобно и понятно.",
    source: "2GIS",
  },
  {
    name: "Елена В.",
    rating: 5,
    text: "Дочке 4 года — лечили зубки во сне. Анализы и ЭКГ бесплатно, всё прошло быстро и безопасно. Ребёнок даже не понял, что было лечение!",
    source: "2GIS",
  },
  {
    name: "Нурлан Т.",
    rating: 5,
    text: "Делали ALL ON 4 — результат превзошёл ожидания. Команда работала слаженно, всё по графику. Качество на уровне лучших клиник.",
    source: "2GIS",
  },
] as const;

export const PROMOTIONS = [
  {
    title: "Американские брекеты",
    discount: "до -50%",
    description: "Качественная ортодонтия по доступной цене",
  },
  {
    title: "Имплантация",
    discount: "до -30%",
    description: "Широкий выбор систем — от Osstem до Straumann",
  },
] as const;

export const PAYMENT_METHODS = [
  "Kaspi",
  "QR-оплата",
  "Банковская карта",
  "Наличные",
  "Банковский перевод",
] as const;
