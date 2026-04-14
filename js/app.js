// ====== ХРАНИЛИЩЕ (localStorage) ======
const STORAGE = {
    save(key, data) { try { localStorage.setItem('ucheb_' + key, JSON.stringify(data)); } catch(e) {} },
    load(key) { try { return JSON.parse(localStorage.getItem('ucheb_' + key)); } catch(e) { return null; } }
};

// ====== ДЕМО-ДАННЫЕ ======
const DEMO_COURSES = [
        {
            id: 'stroy-materialy',
            title: 'Строительные материалы',
            description: 'Изучите основные виды строительныхных материалов: цемент, бетон, кирпич, древесина, утеплители и их свойства.',
            modules: {
                intro: {
                    title: 'Добро пожаловать на курс!',
                    content: 'В этом курсе вы познакомитесь с основными строительными материалами, которые используются на каждой стройке.\n\nВы узнаете о свойствах цемента и бетона, разновидностях кирпича и блоков, сортах древесины и современных утеплителях.\n\nКурс разбит на модули. Каждый модуль нужно завершить последовательно. После прохождения блока расчётов вам будет доступен экзамен.'
                },
                theory: {
                    title: 'Теоретическая часть',
                    content: '**Цемент и бетон** — основа любого строительства.\n\nЦемент — вяжущее вещество, которое при смешивании с водой затвердевает. Основные марки: М200, М300, М400, М500. Чем выше марка — тем прочнее бетон.\n\nБетон — искусственный каменный материал, состоящий из цемента, песка, щебня и воды.\n\n**Кирпич и блоки:**\n• Керамический кирпич — обожжённая глина, прочность М75–М300\n• Силикатный кирпич — песок + известь, хорошая звукоизоляция\n• Газобетонные блоки — лёгкие, тёплые, удобные в кладке\n• Пеноблоки — лёгкий бетон с пористой структурой\n\n**Древесина:**\n• Хвойные породы (сосна, ель) — для каркасов и перекрытий\n• Лиственные породы (дуб, берёза) — для отделки и полов\n\n**Утеплители:**\n• Минеральная вата — негорючая, паропроницаемая\n• Пенополистирол (пенопласт) — лёгкий, влагостойкий\n• Экструдированный пенополистирол — высокая прочность',
                    files: [
                        { name: 'Классификация стройматериалов.pdf', url: '#' },
                        { name: 'ГОСТ на цемент — шпаргалка.docx', url: '#' }
                    ]
                },
                video: {
                    title: 'Видеоматериалы',
                    videos: [
                        { title: 'Виды строительного кирпича', url: 'https://www.youtube.com/watch?v=example1', type: 'youtube' },
                        { title: 'Как выбрать цемент — советы эксперта', url: 'https://www.youtube.com/watch?v=example2', type: 'youtube' }
                    ]
                },
                calc: {
                    title: 'Блок расчётов',
                    content: 'Научимся рассчитывать количество материалов и их характеристики.',
                    formulas: [
                        { title: 'Расчёт объёма бетона для фундамента', expression: 'V = длина × ширина × высота', description: 'Пример: фундамент 10м × 0.5м × 0.3м = 1.5 м³ бетона' },
                        { title: 'Расчёт количества кирпича на 1 м² кладки', expression: 'N = 1 / ( (L + шов) × (H + шов) )', description: 'Одинарный кирпич (250×120×65): ≈ 52 шт/м² при шве 10мм' },
                        { title: 'Расчёт утеплителя', expression: 'S = периметр × высота − площадь окон/дверей', description: 'Для стены 6×4м, высота 3м, окна 3м²: S = 20×3 − 3 = 57 м²' }
                    ],
                    test: {
                        passingScore: 60,
                        questions: [
                            { text: 'Что обозначает марка цемента М400?', options: ['Плотность 400 кг/м³', 'Прочность на сжатие 400 кг/см²', 'Морозостойкость 400 циклов', 'Водопоглощение 400%'], correctIndex: 1 },
                            { text: 'Сколько кирпича нужно на 1 м² кладки (одинарный, шов 10мм)?', options: ['≈ 25 шт', '≈ 52 шт', '≈ 100 шт', '≈ 200 шт'], correctIndex: 1 },
                            { text: 'Какой утеплитель не горит?', options: ['Пенопласт', 'Пенополистирол', 'Минеральная вата', 'Опилки'], correctIndex: 2 },
                            { text: 'Из чего делают керамический кирпич?', options: ['Песок + известь', 'Обожжённая глина', 'Цемент + щебень', 'Опилки + цемент'], correctIndex: 1 }
                        ]
                    }
                },
                exam: {
                    passingScore: 70,
                    tickets: [
                        {
                            questions: [
                                { text: 'Какой компонент бетона является вяжущим?', options: ['Песок', 'Щебень', 'Цемент', 'Вода'], correctIndex: 2 },
                                { text: 'Газобетонные блоки отличаются от пеноблоков:', options: ['Только цветом', 'Технологией поризации', 'Только ценой', 'Только весом'], correctIndex: 1 },
                                { text: 'Какая древесина лучше для несущих конструкций?', options: ['Берёза', 'Осина', 'Сосна', 'Тополь'], correctIndex: 2 },
                                { text: 'Какой объём бетона нужен для плиты 8×6×0.25м?', options: ['8 м³', '12 м³', '16 м³', '20 м³'], correctIndex: 1 }
                            ]
                        },
                        {
                            questions: [
                                { text: 'Силикатный кирпич изготавливают из:', options: ['Глины', 'Песка и извести', 'Цементного раствора', 'Опилок'], correctIndex: 1 },
                                { text: 'Минеральная вата ценится за:', options: ['Низкую цену', 'Негорючесть и паропроницаемость', 'Лёгкость монтажа', 'Яркий цвет'], correctIndex: 1 },
                                { text: 'Что добавляют в бетон для повышения пластичности?', options: ['Песок', 'Пластификатор', 'Кирпичную крошку', 'Опилки'], correctIndex: 1 }
                            ]
                        }
                    ]
                }
            }
        },
        {
            id: 'osnovy-kladki',
            title: 'Основы кирпичной кладки',
            description: 'Научитесь основам кладки кирпича: виды перевязки, технология раствора, инструменты и техника безопасности.',
            modules: {
                intro: {
                    title: 'Введение в кирпичную кладку',
                    content: 'Кирпичная кладка — один из самых востребованных навыков в строительстве. В этом курсе вы освоите основные принципы кладки, научитесь готовить раствор и выполнять базовые элементы.'
                },
                theory: {
                    title: 'Теория кладки',
                    content: '**Виды кирпичной кладки:**\n\n• Ложковая — кирпич укладывается длинной стороной (толщина стены 120мм)\n• Тычковая — кирпич укладывается короткой стороной (толщина 250мм)\n• Цепная — чередование ложковых и тычковых рядов\n\n**Раствор для кладки:**\nКлассический состав: цемент : песок : вода в пропорции 1:3:0.5.\n\nМарка раствора должна соответствовать марке кирпича. Для рядовой кладки используют раствор М50–М100.\n\n**Инструменты каменщика:**\n• Кельма (мастерок) — для нанесения раствора\n• Уровень — контроль горизонтали и вертикали\n• Отвес — проверка вертикальности стен\n• Шнур-причалка — для ровности рядов\n• Расшивка — оформление швов\n\n**Толщина швов:**\n• Горизонтальные: 10–12 мм\n• Вертикальные: 8–10 мм',
                    files: [{ name: 'Схемы перевязки кладки.pdf', url: '#' }]
                },
                video: {
                    title: 'Видеоуроки по кладке',
                    videos: [
                        { title: 'Основы кладки — первый ряд', url: 'https://www.youtube.com/watch?v=example3', type: 'youtube' }
                    ]
                },
                calc: {
                    title: 'Расчёты для кладки',
                    content: 'Рассчитаем количество кирпича и раствора для стены.',
                    formulas: [
                        { title: 'Расчёт раствора на 1 м³ кладки', expression: 'V_раствора = 0.22 × V_кладки', description: 'На 1 м³ кирпичной кладки требуется ≈ 0.22 м³ раствора' },
                        { title: 'Расчёт цемента для раствора 1:3', expression: 'M_цемента = V_раствора × 400 кг/м³', description: 'Для 1 м³ раствора нужно ≈ 400 кг цемента' }
                    ],
                    test: {
                        passingScore: 50,
                        questions: [
                            { text: 'Какая толщина горизонтального шва в кладке?', options: ['5–7 мм', '10–12 мм', '15–20 мм', '25–30 мм'], correctIndex: 1 },
                            { text: 'Что такое тычковый ряд?', options: ['Кирпич длинной стороной наружу', 'Кирпич короткой стороной наружу', 'Два кирпича рядом', 'Ряд с утеплителем'], correctIndex: 1 },
                            { text: 'Какой инструмент используют для нанесения раствора?', options: ['Шпатель', 'Кельма (мастерок)', 'Правило', 'Тёрка'], correctIndex: 1 }
                        ]
                    }
                },
                exam: {
                    passingScore: 70,
                    tickets: [
                        {
                            questions: [
                                { text: 'Толщина стены при ложковой кладке:', options: ['120 мм', '250 мм', '380 мм', '510 мм'], correctIndex: 0 },
                                { text: 'Пропорция цемента к песку для раствора М75:', options: ['1:1', '1:2', '1:3', '1:6'], correctIndex: 2 },
                                { text: 'Для чего используют шнур-причалку?', options: ['Для измерения глубины', 'Для ровности рядов', 'Для замеса раствора', 'Для резки кирпича'], correctIndex: 1 }
                            ]
                        },
                        {
                            questions: [
                                { text: 'Что такое цепная перевязка?', options: ['Только ложковые ряды', 'Только тычковые ряды', 'Чередование ложковых и тычковых', 'Кладка без раствора'], correctIndex: 2 },
                                { text: 'Сколько раствора нужно на 5 м³ кладки?', options: ['0.22 м³', '0.55 м³', '1.1 м³', '2.2 м³'], correctIndex: 2 },
                                { text: 'Чем проверяют вертикальность стены?', options: ['Уровнем', 'Рулеткой', 'Отвесом', 'Угольником'], correctIndex: 2 }
                            ]
                        }
                    ]
                }
            }
        },
        {
            id: 'tehbezopasnost',
            title: 'Охрана труда на стройке',
            description: 'Правила безопасности при строительныхных работах: СИЗ, работа на высоте, электробезопасность, первая помощь.',
            modules: {
                intro: {
                    title: 'Почему охрана труда — это важно?',
                    content: 'Строительная площадка — зона повышенной опасности. Ежегодно тысячи работников получают травмы из-за несоблюдения правил безопасности.\n\nВ этом курсе вы изучите основные правила охраны труда, узнаете о средствах индивидуальной защиты и научитесь оказывать первую помощь.'
                },
                theory: {
                    title: 'Правила безопасности',
                    content: '**Средства индивидуальной защиты (СИЗ):**\n\n• Каска — обязательна на всей площадке, защищает от падающих предметов\n• Защитные очки — при работе с болгаркой, сверлении\n• Перчатки — при работе с арматурой, химическими веществами\n• Респиратор — при пыльных работах, покраске\n• Страховочная привязь — при работе на высоте от 1.8м\n\n**Работа на высоте:**\n• Леса и подмости должны быть исправными и иметь ограждения\n• Запрещено работать на высоте в гололёд, ветер > 15 м/с\n• Инструмент на высоте — в сумке или на страховочном шнуре\n\n**Электробезопасность:**\n• Все электроинструменты должны быть заземлены\n• Запрещено работать с повреждёнными кабелями\n• УЗО (устройство защитного отключения) — обязательно\n\n**Первая помощь:**\n• При ожогах — охладить, накрыть стерильной повязкой\n• При кровотечении — давящая повязка, жгут\n• При переломах — иммобилизация, вызов скорой',
                    files: [{ name: 'Памятка по охране труда.pdf', url: '#' }]
                },
                video: {
                    title: 'Видео по безопасности',
                    videos: [
                        { title: 'Инструктаж по ТБ на стройке', url: 'https://www.youtube.com/watch?v=example4', type: 'youtube' }
                    ]
                },
                calc: {
                    title: 'Проверочный тест',
                    content: 'Проверьте свои знания правил безопасности.',
                    formulas: [
                        { title: 'Минимальная высота ограждения лесов', expression: 'h ≥ 1.1 м', description: 'Ограждение должно быть не ниже 1.1 метра' }
                    ],
                    test: {
                        passingScore: 70,
                        questions: [
                            { text: 'С какой высоты обязательно использовать страховочную привязь?', options: ['1.0 м', '1.3 м', '1.8 м', '2.5 м'], correctIndex: 2 },
                            { text: 'Что нужно надеть при работе с болгаркой?', options: ['Перчатки', 'Защитные очки', 'Респиратор', 'Наушники'], correctIndex: 1 },
                            { text: 'Что делать при ожоге первым делом?', options: ['Наложить жгут', 'Охладить место ожога', 'Намазать маслом', 'Проколоть пузыри'], correctIndex: 1 },
                            { text: 'Максимальная скорость ветра для работы на высоте:', options: ['10 м/с', '15 м/с', '20 м/с', '25 м/с'], correctIndex: 1 }
                        ]
                    }
                },
                exam: {
                    passingScore: 80,
                    tickets: [
                        {
                            questions: [
                                { text: 'Какое устройство защищает от утечки тока?', options: ['Автомат', 'УЗО', 'Счётчик', 'Реле'], correctIndex: 1 },
                                { text: 'При переломе нужно:', options: ['Вправить кость', 'Иммобилизовать конечность', 'Наложить жгут', 'Дать обезболивающее'], correctIndex: 1 },
                                { text: 'Каска на стройке:', options: ['По желанию', 'Обязательна для всех', 'Только для новичков', 'Только на высоте'], correctIndex: 1 },
                                { text: 'Можно ли работать с повреждённым кабелем?', options: ['Да, если аккуратно', 'Да, в перчатках', 'Нет, категорически запрещено', 'Только при малом напряжении'], correctIndex: 2 }
                            ]
                        },
                        {
                            questions: [
                                { text: 'Минимальная высота ограждения лесов:', options: ['0.8 м', '1.0 м', '1.1 м', '1.5 м'], correctIndex: 2 },
                                { text: 'Респиратор нужен при:', options: ['Кладке кирпича', 'Пыльных работах', 'Земляных работах', 'Покраске забора'], correctIndex: 1 },
                                { text: 'При артериальном кровотечении накладывают:', options: ['Давящую повязку', 'Жгут выше раны', 'Жгут ниже раны', 'Холодный компресс'], correctIndex: 1 }
                            ]
                        }
                    ]
                }
            }
        }
    ];

// Загружаем курсы из localStorage или используем демо
const DEMO = {
    courses: (() => {
        const saved = STORAGE.load('courses');
        const version = STORAGE.load('courses_version');
        const CURRENT_VERSION = 2; // v2 — строительная тематика

        if (version !== CURRENT_VERSION) {
            // Сброс старой версии — принудительно загружаем новые демо-курсы
            STORAGE.save('courses_version', CURRENT_VERSION);
            STORAGE.save('courses', DEMO_COURSES);
            return JSON.parse(JSON.stringify(DEMO_COURSES));
        }

        if (saved && saved.length) return saved;
        return JSON.parse(JSON.stringify(DEMO_COURSES)); // копия демо
    })()
};

// Сохраняем в localStorage
function persistCourses() {
    STORAGE.save('courses', DEMO.courses);
}

// ====== СОСТОЯНИЕ ПРИЛОЖЕНИЯ ======
let state = {
    isLoggedIn: false,
    currentUser: null,
    currentRoute: 'auth',
    currentCourse: null,
    currentModule: null,
    completedModules: {},  // { courseId: ['intro', 'theory', ...] }
    testResults: []
};

const MODULES = ['intro', 'theory', 'video', 'calc', 'exam'];
const MODULE_NAMES = { intro: 'Введение', theory: 'Теория', video: 'Видео', calc: 'Блок расчётов', exam: 'Экзамен' };

// ====== DOM ЭЛЕМЕНТЫ ======
const navbar = document.getElementById('navbar');
const authPage = document.getElementById('authPage');
const catalogPage = document.getElementById('catalogPage');
const coursePage = document.getElementById('coursePage');
const profilePage = document.getElementById('profilePage');
const adminPage = document.getElementById('adminPage');
const navMenu = document.getElementById('navMenu');
const coursesGrid = document.getElementById('coursesGrid');
const courseTitle = document.getElementById('courseTitle');
const courseContent = document.getElementById('courseContent');
const courseProgressFill = document.getElementById('courseProgressFill');
const courseProgressText = document.getElementById('courseProgressText');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

// ====== ИНИЦИАЛИЗАЦИЯ ======
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initMobileMenu();
    initModal();
    initScrollTop();

    // Защита от закрытия вкладки с несохранёнными данными
    window.addEventListener('beforeunload', (e) => {
        if (builder.course && builder.isDirty) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});

// ====== АВТОРИЗАЦИЯ ======
function initAuth() {
    // Табы
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const isLogin = tab.dataset.tab === 'login';
            document.getElementById('loginForm').style.display = isLogin ? 'block' : 'none';
            document.getElementById('registerForm').style.display = isLogin ? 'none' : 'block';
        });
    });

    // Вход
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        if (!email || !password) {
            showAuthError('loginError', 'Заполните все поля');
            return;
        }
        login(email);
    });

    // Регистрация
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerPasswordConfirm').value;

        if (password !== confirm) {
            showAuthError('registerError', 'Пароли не совпадают');
            return;
        }
        if (password.length < 6) {
            showAuthError('registerError', 'Пароль минимум 6 символов');
            return;
        }
        login(email, name);
    });

    // Выход
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

function login(email, name) {
    state.isLoggedIn = true;
    state.currentUser = { email, name: name || email.split('@')[0], isAdmin: email === '2@gmail.com' };
    state.completedModules = STORAGE.load('progress') || {};
    state.testResults = STORAGE.load('testResults') || [];

    authPage.style.display = 'none';
    navbar.style.display = 'block';
    navigate('catalog');
    showToast('Добро пожаловать, ' + state.currentUser.name + '!', 'success');
}

function logout() {
    state = {
        isLoggedIn: false, currentUser: null, currentRoute: 'auth',
        currentCourse: null, currentModule: null, completedModules: {}, testResults: []
    };
    navbar.style.display = 'none';
    hideAllPages();
    authPage.style.display = 'block';
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
    // Восстановить дефолтные значения в полях
    document.getElementById('loginEmail').value = '2@gmail.com';
    document.getElementById('loginPassword').value = 'admin123';
}

function showAuthError(id, msg) {
    const el = document.getElementById(id);
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
}

// ====== НАВИГАЦИЯ ======
function initNavigation() {
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(link.dataset.route);
        });
    });

    document.getElementById('courseBackBtn').addEventListener('click', () => navigate('catalog'));
}

function navigate(route) {
    hideAllPages();
    document.querySelectorAll('.navbar__link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.navbar__link[data-route="${route}"]`);
    if (activeLink) activeLink.classList.add('active');

    state.currentRoute = route;

    switch (route) {
        case 'catalog':
            catalogPage.style.display = 'block';
            renderCatalog();
            break;
        case 'course':
            coursePage.style.display = 'block';
            break;
        case 'profile':
            profilePage.style.display = 'block';
            updateProfile();
            break;
        case 'admin':
            adminPage.style.display = 'block';
            initAdminPanel();
            break;
    }
    navMenu.classList.remove('active');
    window.scrollTo(0, 0);
}

function hideAllPages() {
    [authPage, catalogPage, coursePage, profilePage, adminPage].forEach(p => p.style.display = 'none');
}

// ====== МОБИЛЬНОЕ МЕНЮ ======
function initMobileMenu() {
    document.getElementById('burgerBtn').addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}

// ====== МОДАЛКА ======
function initModal() {
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function showModal(html) {
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ====== КНОПКА НАВЕРХ ======
function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ====== TOAST ======
function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ====== УТИЛИТЫ ======
function esc(text) {
    if (!text) return '';
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
}

function formatContent(text) {
    return text.split('\n\n').map(p => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
}

function getCompleted(courseId) {
    return state.completedModules[courseId] || [];
}

function isModuleAvailable(courseId, mod) {
    const idx = MODULES.indexOf(mod);
    if (idx === 0) return true;
    const completed = getCompleted(courseId);
    return MODULES.slice(0, idx).every(m => completed.includes(m));
}

function completeModuleAction(courseId, mod) {
    if (!state.completedModules[courseId]) state.completedModules[courseId] = [];
    if (state.completedModules[courseId].includes(mod)) {
        showToast('Модуль уже завершён', 'info');
        return;
    }
    state.completedModules[courseId].push(mod);
    STORAGE.save('progress', state.completedModules);
    showToast('Модуль завершён! 🎉', 'success');
    updateCourseSidebar();

    // Перейти на следующий модуль
    const nextIdx = MODULES.indexOf(mod) + 1;
    if (nextIdx < MODULES.length) {
        const nextMod = MODULES[nextIdx];
        if (isModuleAvailable(courseId, nextMod)) {
            setTimeout(() => {
                loadModule(nextMod);
                document.querySelector('.course-content').scrollTop = 0;
            }, 600);
        }
    }
}

// ====== КАТАЛОГ ======
function renderCatalog() {
    // Skeleton loading
    coursesGrid.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        coursesGrid.innerHTML += `
            <div class="skeleton-card animate-fade-in" style="animation-delay: ${i * 0.1}s">
                <div class="skeleton skeleton-card__image"></div>
                <div class="skeleton-card__content">
                    <div class="skeleton skeleton-card__title"></div>
                    <div class="skeleton skeleton-card__text"></div>
                    <div class="skeleton skeleton-card__text" style="width:60%"></div>
                </div>
            </div>
        `;
    }

    // Replace with real cards after delay
    setTimeout(() => {
        coursesGrid.innerHTML = '';
        DEMO.courses.forEach((course, i) => {
            const completed = getCompleted(course.id).length;
            const total = MODULES.length;
            const pct = Math.round((completed / total) * 100);

            const card = document.createElement('div');
            card.className = 'course-card animate-fade-in-up';
            card.style.animationDelay = (i * 0.12) + 's';
            card.innerHTML = `
                <div class="course-card__image">📚</div>
                <div class="course-card__content">
                    <h3 class="course-card__title">${esc(course.title)}</h3>
                    <p class="course-card__description">${esc(course.description)}</p>
                    <div class="course-card__footer">
                        <span class="course-card__progress-text">${pct}% пройдено</span>
                        <span class="course-card__arrow">→</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openCourse(course.id));
            coursesGrid.appendChild(card);
        });
    }, 800);
}

// ====== КУРС ======
function openCourse(courseId) {
    const course = DEMO.courses.find(c => c.id === courseId);
    if (!course) return;
    state.currentCourse = course;
    courseTitle.textContent = course.title;
    navigate('course');
    updateCourseSidebar();
    const firstAvailable = MODULES.find(m => isModuleAvailable(courseId, m));
    loadModule(firstAvailable || 'intro');
}

const MODULE_INFO = {
    intro:  { icon: '📖', label: 'Введение' },
    theory: { icon: '📄', label: 'Теория' },
    video:  { icon: '🎬', label: 'Видео' },
    calc:   { icon: '✅', label: 'Тест' },
    exam:   { icon: '🎓', label: 'Экзамен' }
};

function updateCourseSidebar() {
    const course = state.currentCourse;
    const courseId = course.id;
    const completed = getCompleted(courseId);

    // Определяем активные модули
    const activeModules = [];
    MODULES.forEach(mod => {
        const m = course.modules[mod];
        // Модуль активен если включён (из конструктора) или есть контент
        const isEnabled = m?.enabled !== false;
        const hasContent = (mod === 'intro' && m?.content) ||
                          (mod === 'theory' && m?.content) ||
                          (mod === 'video' && m?.videos?.length) ||
                          (mod === 'calc' && (m?.content || m?.test?.questions?.length)) ||
                          (mod === 'exam' && m?.tickets?.length);
        if (isEnabled && hasContent) activeModules.push(mod);
    });

    // Если нет активных — показываем все (для демо курсов без enabled флага)
    const modules = activeModules.length ? activeModules : MODULES;

    // Прогресс
    const total = modules.length;
    const completedCount = modules.filter(m => completed.includes(m)).length;
    const pct = total ? Math.round((completedCount / total) * 100) : 0;
    courseProgressFill.style.width = pct + '%';
    courseProgressText.textContent = pct + '%';

    // Генерируем timeline
    const timeline = document.getElementById('courseTimeline');
    let html = '';
    modules.forEach(mod => {
        const info = MODULE_INFO[mod];
        const done = completed.includes(mod);
        const modIdx = modules.indexOf(mod);
        const allPrevDone = modules.slice(0, modIdx).every(m => completed.includes(m));
        const avail = modIdx === 0 || allPrevDone;

        let cls = 'course-timeline__item';
        let dot = '○';
        let meta = 'Доступно';
        let metaColor = '';

        if (done) {
            cls += ' course-timeline__item--completed';
            dot = '✓';
            meta = 'Завершено';
            metaColor = 'var(--color-success)';
        } else if (avail) {
            cls += ' course-timeline__item--active';
            dot = '▶';
            meta = 'Доступно';
            metaColor = 'var(--color-primary)';
        } else {
            cls += ' course-timeline__item--locked';
            dot = '🔒';
            meta = 'Заблокировано';
        }

        html += `<div class="${cls}" data-module="${mod}">
            <div class="course-timeline__dot">${dot}</div>
            <div class="course-timeline__content">
                <div class="course-timeline__title">${info.icon} ${info.label}</div>
                <div class="course-timeline__meta" style="${metaColor ? 'color:' + metaColor : ''}">${meta}</div>
            </div>
        </div>`;
    });
    timeline.innerHTML = html;

    // Перепривязываем клики
    timeline.querySelectorAll('.course-timeline__item').forEach(item => {
        item.addEventListener('click', () => loadModule(item.dataset.module));
    });
}

function loadModule(mod) {
    state.currentModule = mod;
    updateCourseSidebar();
    const course = state.currentCourse;
    const data = course.modules[mod];
    if (!data) { courseContent.innerHTML = '<p>Модуль пуст</p>'; return; }

    const modIdx = MODULES.indexOf(mod);
    const prevMod = modIdx > 0 ? MODULES[modIdx - 1] : null;
    const nextMod = modIdx < MODULES.length - 1 ? MODULES[modIdx + 1] : null;

    let html = '';

    // Breadcrumbs
    html += `<div class="breadcrumbs animate-fade-in">
        <span class="breadcrumbs__item"><a href="#" class="breadcrumbs__link" onclick="navigate('catalog');return false;">Каталог</a></span>
        <span class="breadcrumbs__separator">›</span>
        <span class="breadcrumbs__item"><a href="#" class="breadcrumbs__link" onclick="navigate('course');return false;">${esc(course.title)}</a></span>
        <span class="breadcrumbs__separator">›</span>
        <span class="breadcrumbs__item">${MODULE_NAMES[mod]}</span>
    </div>`;

    // Module content
    html += '<div class="animate-fade-in-up">';

    switch (mod) {
        case 'intro':
            html += `<div class="lesson-content"><h2>${esc(data.title)}</h2>${formatContent(data.content)}
                <button class="btn btn--primary btn--lg" onclick="completeModuleAction('${course.id}','intro')">Завершить введение ✓</button></div>`;
            break;
        case 'theory':
            html += `<div class="lesson-content"><h2>${esc(data.title)}</h2>${formatContent(data.content)}`;
            if (data.files && data.files.length) {
                html += '<h3>📎 Материалы</h3><ul>';
                data.files.forEach(f => html += `<li><a href="${f.url}">📄 ${esc(f.name)}</a></li>`);
                html += '</ul>';
            }
            html += `<button class="btn btn--primary btn--lg" onclick="completeModuleAction('${course.id}','theory')">Завершить теорию ✓</button></div>`;
            break;
        case 'video':
            html += `<div class="lesson-content"><h2>${esc(data.title)}</h2>`;
            if (data.videos && data.videos.length) {
                data.videos.forEach(v => {
                    html += `<h3>${esc(v.title)}</h3>`;
                    if (v.type === 'youtube') {
                        const vid = extractYTId(v.url);
                        html += `<div class="video-container"><iframe src="https://www.youtube.com/embed/${vid}" allowfullscreen></iframe></div>`;
                    } else {
                        html += `<div class="video-container"><video controls><source src="${v.url}" type="video/mp4"></video></div>`;
                    }
                });
            }
            html += `<button class="btn btn--primary btn--lg" onclick="completeModuleAction('${course.id}','video')">Завершить просмотр ✓</button></div>`;
            break;
        case 'calc':
            html += `<div class="lesson-content"><h2>${esc(data.title)}</h2>${formatContent(data.content)}`;
            if (data.formulas && data.formulas.length) {
                data.formulas.forEach(f => {
                    html += `<div class="calc-block"><div class="calc-block__title">📐 ${esc(f.title)}</div><div class="formula">${esc(f.expression)}</div><p>${esc(f.description)}</p></div>`;
                });
            }
            if (data.test && data.test.questions) {
                html += renderTest(course.id, data.test);
                html += `<p style="margin-top:1.5rem;color:var(--color-text-muted);font-size:0.875rem;">💡 Пройдите тест для завершения модуля</p>`;
            } else {
                html += `<button class="btn btn--primary btn--lg" onclick="completeModuleAction('${course.id}','calc')">Завершить блок расчётов ✓</button>`;
            }
            html += `</div>`;
            break;
        case 'exam':
            html += renderExam(course);
            break;
    }

    // Lesson pagination
    html += `<div class="lesson-pagination">
        <button class="lesson-pagination__btn" ${!prevMod ? 'disabled' : ''} onclick="loadModule('${prevMod || ''}')">← ${prevMod ? MODULE_NAMES[prevMod] : ''}</button>
        <button class="lesson-pagination__btn lesson-pagination__btn--next" ${!nextMod ? 'disabled' : ''} onclick="loadModule('${nextMod || ''}')">${nextMod ? MODULE_NAMES[nextMod] : ''} →</button>
    </div>`;

    html += '</div>'; // close animate-fade-in-up
    courseContent.innerHTML = html;
    bindTestEvents(course, data);
}

function extractYTId(url) {
    const m = url.match(/(?:v=|\.be\/|embed\/)([^&\s]+)/);
    return m ? m[1] : url;
}

// ====== ТЕСТ ======
function renderTest(courseId, test) {
    let html = `<div class="test-container"><div class="test-header"><h2>📝 Промежуточный тест</h2><p class="test-progress-bar__text">${test.questions.length} вопросов · проходной балл ${test.passingScore}%</p></div><form id="testForm" data-course="${courseId}">`;
    test.questions.forEach((q, i) => {
        html += `<div class="question-card" data-q="${i}"><p class="question-card__text">${i + 1}. ${esc(q.text)}</p><div class="question-options">`;
        q.options.forEach((opt, oi) => {
            html += `<label class="question-option"><input type="radio" name="q${i}" value="${oi}"><span>${esc(opt)}</span></label>`;
        });
        html += '</div></div>';
    });
    html += `<div class="test-actions"><button type="submit" class="btn btn--primary btn--lg">Проверить</button></div></form><div id="testResult" style="display:none;"></div></div>`;
    return html;
}

function bindTestEvents(course, modData) {
    const form = document.getElementById('testForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const test = modData.test;
        let correct = 0;
        test.questions.forEach((q, i) => {
            const sel = document.querySelector(`input[name="q${i}"]:checked`);
            const opts = document.querySelectorAll(`[data-q="${i}"] .question-option`);
            opts.forEach((opt, oi) => {
                if (oi === q.correctIndex) opt.classList.add('correct');
                if (sel && parseInt(sel.value) === oi && oi !== q.correctIndex) opt.classList.add('incorrect');
            });
            if (sel && parseInt(sel.value) === q.correctIndex) correct++;
        });
        const score = Math.round((correct / test.questions.length) * 100);
        const passed = score >= test.passingScore;
        state.testResults.push({ course: course.title, score, passed, module: 'calc' });
        STORAGE.save('testResults', state.testResults);

        const res = document.getElementById('testResult');
        res.style.display = 'block';
        const testMsg = passed ? 'Тест пройден!' : 'Нужно минимум ' + test.passingScore + '%';
        const testRetryBtn = !passed ? "<button class=\"btn btn--secondary btn--lg\" onclick=\"loadModule('calc')\">Попробовать снова</button>" : '';
        res.innerHTML = `<div class="test-result"><div class="test-result__icon">${passed ? '🎉' : '😔'}</div><h2 class="test-result__score ${passed ? 'test-result__score--passed' : 'test-result__score--failed'}">${score}%</h2><p class="test-result__message">${testMsg}</p>${testRetryBtn}</div>`;
        if (passed) {
            completeModuleAction(state.currentCourse.id, 'calc');
        }
    });

    // Экзамен
    document.querySelectorAll('[data-action="start-exam"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.ticket);
            const course = state.currentCourse;
            const ticket = course.modules.exam.tickets[idx];
            const examDiv = document.getElementById('examContent');
            examDiv.style.display = 'block';
            let html = `<div class="test-container"><div class="test-header"><h2>📋 Билет ${idx + 1}</h2></div><form id="examForm">`;
            ticket.questions.forEach((q, i) => {
                html += `<div class="question-card" data-eq="${i}"><p class="question-card__text">${i + 1}. ${esc(q.text)}</p><div class="question-options">`;
                q.options.forEach((opt, oi) => {
                    html += `<label class="question-option"><input type="radio" name="eq${i}" value="${oi}"><span>${esc(opt)}</span></label>`;
                });
                html += '</div></div>';
            });
            html += `<div class="test-actions"><button type="submit" class="btn btn--primary btn--lg">Сдать экзамен</button></div></form><div id="examResult" style="display:none;"></div></div>`;
            examDiv.innerHTML = html;

            document.getElementById('examForm').addEventListener('submit', (e2) => {
                e2.preventDefault();
                let c = 0;
                ticket.questions.forEach((q, i) => {
                    const sel = document.querySelector(`input[name="eq${i}"]:checked`);
                    if (sel && parseInt(sel.value) === q.correctIndex) c++;
                });
                const sc = Math.round((c / ticket.questions.length) * 100);
                const pass = sc >= course.modules.exam.passingScore;
                const res2 = document.getElementById('examResult');
                res2.style.display = 'block';
                const examMsg = pass ? 'Экзамен сдан!' : 'Нужно ' + course.modules.exam.passingScore + '%. Попробуйте другой билет.';
                const retryBtn = !pass ? "<button class=\"btn btn--secondary btn--lg\" onclick=\"loadModule('exam')\">Другой билет</button>" : '';
                res2.innerHTML = `<div class="test-result"><div class="test-result__icon">${pass ? '🎉' : '😔'}</div><h2 class="test-result__score ${pass ? 'test-result__score--passed' : 'test-result__score--failed'}">${sc}%</h2><p class="test-result__message">${examMsg}</p>${retryBtn}</div>`;
            });
        });
    });
}

// ====== ЭКЗАМЕН ======
function renderExam(course) {
    const completed = getCompleted(course.id);
    const allPrev = MODULES.slice(0, -1).every(m => completed.includes(m));

    if (!allPrev) {
        return `<div class="lesson-content"><div class="empty-state"><div class="empty-state__icon">🔒</div><h3 class="empty-state__title">Экзамен заблокирован</h3><p class="empty-state__text">Завершите все предыдущие модули</p></div></div>`;
    }

    const tickets = course.modules.exam.tickets;
    if (!tickets || !tickets.length) {
        return `<div class="lesson-content"><div class="empty-state"><div class="empty-state__icon">📭</div><h3 class="empty-state__title">Билеты не созданы</h3></div></div>`;
    }

    let html = `<div class="lesson-content"><h2>🎓 Экзамен</h2><p>Выберите билет (проходной балл: ${course.modules.exam.passingScore}%):</p><div class="exam-tickets">`;
    tickets.forEach((_, i) => {
        html += `<button class="btn btn--outline btn--lg" data-action="start-exam" data-ticket="${i}" style="margin: 0.5rem;">📋 Билет ${i + 1}</button>`;
    });
    html += `</div><div id="examContent" style="display: none;"></div></div>`;
    return html;
}

// ====== ПАНЕЛЬ АДМИНИСТРАТОРА ======

// Навигация по табам
function loadAdminTab(tab) {
    // Убираем active у всех табов
    document.querySelectorAll('.admin-tabs-bar__tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector(`.admin-tabs-bar__tab[data-admin-tab="${tab}"]`);
    if (activeTab) activeTab.classList.add('active');

    if (tab === 'courses') renderAdminCourses();
    else if (tab === 'users') renderAdminUsers();
    else if (tab === 'results') renderAdminResults();
}

// Обновление статистики
function updateAdminStats() {
    document.getElementById('statCourses').textContent = DEMO.courses.length;

    // Пользователи — загружаем из localStorage
    const users = STORAGE.load('users') || [];
    document.getElementById('statUsers').textContent = users.length + 1; // +1 за текущего

    // Средний прогресс
    const allProgress = state.completedModules;
    let totalPct = 0, count = 0;
    DEMO.courses.forEach(c => {
        const completed = getCompleted(c.id).length;
        const total = Object.keys(c.modules).length;
        if (total > 0) {
            totalPct += Math.round((completed / total) * 100);
            count++;
        }
    });
    const avgProgress = count ? Math.round(totalPct / count) : 0;
    document.getElementById('statProgress').textContent = avgProgress + '%';

    // Сданные тесты
    const passedTests = (state.testResults || []).filter(r => r.passed).length;
    document.getElementById('statTests').textContent = passedTests;
}

// Инициализация админ-панели
function initAdminPanel() {
    // Табы
    document.querySelectorAll('.admin-tabs-bar__tab').forEach(tab => {
        tab.addEventListener('click', () => loadAdminTab(tab.dataset.adminTab));
    });

    // Кнопка нового курса
    const addBtn = document.getElementById('adminAddCourseBtn');
    if (addBtn) addBtn.addEventListener('click', () => {
        if (builder.course && builder.isDirty) {
            if (!confirm('Есть несохранённые изменения. Создать новый курс без сохранения?')) return;
        }
        createNewCourse();
    });

    updateAdminStats();
    loadAdminTab('courses');
}

// ====== АДМИНКА: КУРСЫ ======
function renderAdminCourses() {
    updateAdminStats();
    const area = document.getElementById('adminContentArea');
    let html = '';

    if (!DEMO.courses.length) {
        html = `
        <div class="admin-empty">
            <div class="admin-empty__icon">📚</div>
            <h3 class="admin-empty__title">Пока нет курсов</h3>
            <p class="admin-empty__text">Создите первый курс — нажмите кнопку «Новый курс»</p>
        </div>`;
    } else {
        html = '<div class="admin-course-grid">';
        DEMO.courses.forEach(c => {
            const modulesCount = Object.keys(c.modules).length;
            html += `
            <div class="admin-course-card">
                <div class="admin-course-card__header">
                    <div>
                        <h3 class="admin-course-card__title">${esc(c.title)}</h3>
                    </div>
                </div>
                <p class="admin-course-card__desc">${esc(c.description || 'Нет описания')}</p>
                <div class="admin-course-card__meta">
                    <span>📖 ${modulesCount} мод.</span>
                </div>
                <div class="admin-course-card__actions">
                    <button class="btn btn--secondary btn--sm" onclick="editCourse('${c.id}')">
                        <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        Редактировать
                    </button>
                    <button class="btn btn--sm" style="color:var(--color-error);" onclick="deleteCourse('${c.id}')">
                        <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                        Удалить
                    </button>
                </div>
            </div>`;
        });
        html += '</div>';
    }

    area.innerHTML = html;
}

// ====== АДМИНКА: ПОЛЬЗОВАТЕЛИ ======
function renderAdminUsers() {
    updateAdminStats();
    const area = document.getElementById('adminContentArea');
    const users = STORAGE.load('users') || [];
    const currentUser = state.currentUser;

    let html = '<div class="admin-table-wrapper"><table class="admin-table">';
    html += '<thead><tr><th>Пользователь</th><th>Email</th><th>Роль</th><th>Курсов начато</th></tr></thead>';
    html += '<tbody>';

    // Текущий пользователь
    const currentCoursesCount = Object.keys(state.completedModules || {}).length;
    html += `<tr>
        <td><strong>${esc(currentUser.name)}</strong> (вы)</td>
        <td>${esc(currentUser.email)}</td>
        <td>${currentUser.isAdmin ? '👑 Администратор' : '👤 Слушатель'}</td>
        <td>${currentCoursesCount}</td>
    </tr>`;

    // Остальные пользователи
    users.forEach(u => {
        const uProgress = STORAGE.load('progress_' + u.email) || {};
        const uCourses = Object.keys(uProgress).length;
        html += `<tr>
            <td><strong>${esc(u.name || u.email.split('@')[0])}</strong></td>
            <td>${esc(u.email)}</td>
            <td>👤 Слушатель</td>
            <td>${uCourses}</td>
        </tr>`;
    });

    html += '</tbody></table></div>';

    if (!users.length) {
        html = `
        <div class="admin-empty">
            <div class="admin-empty__icon">👥</div>
            <h3 class="admin-empty__title">Нет зарегистрированных пользователей</h3>
            <p class="admin-empty__text">Только вы — администратор системы</p>
        </div>`;
    }

    area.innerHTML = html;
}

// ====== АДМИНКА: РЕЗУЛЬТАТЫ ======
function renderAdminResults() {
    updateAdminStats();
    const area = document.getElementById('adminContentArea');
    const results = state.testResults || [];

    if (!results.length) {
        area.innerHTML = `
        <div class="admin-empty">
            <div class="admin-empty__icon">📝</div>
            <h3 class="admin-empty__title">Нет результатов тестирования</h3>
            <p class="admin-empty__text">Тесты ещё не были пройдены</p>
        </div>`;
        return;
    }

    let html = '<div class="admin-results-list">';
    results.forEach(r => {
        html += `
        <div class="admin-result-item">
            <div class="admin-result-item__left">
                <div class="admin-result-item__avatar">${(r.userName || r.user || 'U')[0].toUpperCase()}</div>
                <div>
                    <div class="admin-result-item__info__name">${esc(r.userName || r.user || state.currentUser.name)}</div>
                    <div class="admin-result-item__info__course">${esc(r.course)}</div>
                </div>
            </div>
            <span class="admin-result-item__score ${r.passed ? 'admin-result-item__score--passed' : 'admin-result-item__score--failed'}">${r.score}%</span>
        </div>`;
    });
    html += '</div>';
    area.innerHTML = html;
}

function courseWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'курс';
    if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'курса';
    return 'курсов';
}

function lessonWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'урок';
    if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'урока';
    return 'уроков';
}

function countLessons(course) {
    let n = 0;
    if (course.modules.intro?.content) n++;
    if (course.modules.theory?.content) n++;
    if (course.modules.video?.videos?.length) n += course.modules.video.videos.length;
    if (course.modules.calc?.content || course.modules.calc?.test?.questions?.length) n++;
    if (course.modules.exam?.tickets?.length) n++;
    return n || 0;
}

// ====== КОНСТРУКТОР КУРСОВ ======

let builder = {
    course: null,
    selectedSection: null,
    isDirty: false,
    autoSaveTimer: null
};

function createNewCourse() {
    builder = {
        course: {
            id: 'course-' + Date.now(),
            title: '',
            description: '',
            modules: {
                intro: { title: 'Введение', content: '', enabled: false },
                theory: { title: 'Теория', content: '', enabled: false },
                video: { title: 'Видео', videos: [], enabled: false },
                calc: { title: 'Тест', content: '', formulas: [], test: { passingScore: 60, questions: [] }, enabled: false },
                exam: { title: 'Экзамен', passingScore: 70, tickets: [], enabled: false }
            }
        },
        selectedSection: 'info',
        isDirty: false,
        autoSaveTimer: null
    };
    renderBuilder();
}

function editCourse(id) {
    const existing = DEMO.courses.find(c => c.id === id);
    if (!existing) return;

    // Приводим к формату билдера
    const course = JSON.parse(JSON.stringify(existing));
    if (!course.modules.intro) course.modules.intro = { title: 'Введение', content: '', enabled: false };
    if (!course.modules.theory) course.modules.theory = { title: 'Теория', content: '', enabled: false };
    if (!course.modules.video) course.modules.video = { title: 'Видео', videos: [], enabled: false };
    if (!course.modules.calc) course.modules.calc = { title: 'Тест', content: '', formulas: [], test: { passingScore: 60, questions: [] }, enabled: false };
    if (!course.modules.exam) course.modules.exam = { title: 'Экзамен', passingScore: 70, tickets: [], enabled: false };

    // Включаем те модули, где есть контент
    if (course.modules.intro.content) course.modules.intro.enabled = true;
    if (course.modules.theory.content) course.modules.theory.enabled = true;
    if (course.modules.video.videos?.length) course.modules.video.enabled = true;
    if (course.modules.calc.content || course.modules.calc.test?.questions?.length) course.modules.calc.enabled = true;
    if (course.modules.exam.tickets?.length) course.modules.exam.enabled = true;

    builder = { course, selectedSection: 'info', isDirty: false, autoSaveTimer: null };
    renderBuilder();
}

// Пометить как изменённый
function markDirty() {
    builder.isDirty = true;
    // Обновить индикатор в сайдбаре
    const dirtyIndicator = document.getElementById('dirtyIndicator');
    if (dirtyIndicator) dirtyIndicator.style.display = 'inline';
    // Автосохранение через 3 секунды
    if (builder.autoSaveTimer) clearTimeout(builder.autoSaveTimer);
    builder.autoSaveTimer = setTimeout(() => {
        if (builder.isDirty) autoSave();
    }, 3000);
}

function autoSave() {
    if (!builder.course || !builder.isDirty) return;
    // Тихое сохранение без уведомлений
    const c = builder.course;
    const title = document.getElementById('b-title')?.value.trim();
    if (title) c.title = title;
    c.description = document.getElementById('b-desc')?.value.trim() || '';
    if (c.modules.intro.enabled) c.modules.intro.content = document.getElementById('b-intro')?.value || '';
    if (c.modules.theory.enabled) c.modules.theory.content = document.getElementById('b-theory')?.value || '';

    // Видео
    if (c.modules.video.enabled) {
        c.modules.video.videos = [];
        document.querySelectorAll('.v-title').forEach(inp => {
            const i = inp.dataset.i;
            const url = document.querySelector(`.v-url[data-i="${i}"]`)?.value.trim();
            if (url) c.modules.video.videos.push({ title: inp.value, url, type: url.includes('youtube') ? 'youtube' : 'direct' });
        });
    }

    // Тест
    if (c.modules.calc.enabled) {
        c.modules.calc.content = document.getElementById('b-calc-content')?.value || '';
        c.modules.calc.test.passingScore = parseInt(document.getElementById('b-calc-pass')?.value) || 60;
        c.modules.calc.test.questions = [];
        document.querySelectorAll('.q-text').forEach(inp => {
            const i = inp.dataset.i;
            const text = inp.value.trim();
            const opts = document.querySelector(`.q-opts[data-i="${i}"]`)?.value.split('\n').filter(o => o.trim()) || [];
            const correct = parseInt(document.querySelector(`.q-correct[data-i="${i}"]`)?.value) || 0;
            if (text && opts.length >= 2) c.modules.calc.test.questions.push({ text, options: opts, correctIndex: correct });
        });
    }

    // Экзамен
    if (c.modules.exam.enabled) {
        c.modules.exam.passingScore = parseInt(document.getElementById('b-exam-pass')?.value) || 70;
        c.modules.exam.tickets = [];
        const maxTi = Math.max(0, ...[...document.querySelectorAll('.eq-text')].map(el => parseInt(el.dataset.ti)));
        for (let ti = 0; ti <= maxTi; ti++) {
            const questions = [];
            document.querySelectorAll(`.eq-text[data-ti="${ti}"]`).forEach(inp => {
                const qi = inp.dataset.qi;
                const text = inp.value.trim();
                const optsEl = document.querySelector(`.eq-opts[data-ti="${ti}"][data-qi="${qi}"]`);
                const opts = optsEl ? optsEl.value.split('\n').filter(o => o.trim()) : [];
                const correctEl = document.querySelector(`.eq-correct[data-ti="${ti}"][data-qi="${qi}"]`);
                const correct = correctEl ? parseInt(correctEl.value) || 0 : 0;
                if (text && opts.length >= 2) questions.push({ text, options: opts, correctIndex: correct });
            });
            if (questions.length) c.modules.exam.tickets.push({ questions });
        }
    }

    const existingIdx = DEMO.courses.findIndex(x => x.id === c.id);
    if (existingIdx !== -1) DEMO.courses[existingIdx] = c;
    else DEMO.courses.push(c);
    persistCourses();

    builder.isDirty = false;
    const dirtyIndicator = document.getElementById('dirtyIndicator');
    if (dirtyIndicator) dirtyIndicator.style.display = 'none';
    const autoSaveStatus = document.getElementById('autoSaveStatus');
    if (autoSaveStatus) {
        autoSaveStatus.textContent = 'Автосохранено';
        setTimeout(() => { autoSaveStatus.textContent = ''; }, 2000);
    }
}

function deleteCourse(id) {
    if (!confirm('Удалить этот курс?')) return;
    const idx = DEMO.courses.findIndex(c => c.id === id);
    if (idx !== -1) DEMO.courses.splice(idx, 1);
    renderAdminCourses();
    showToast('Курс удалён', 'success');
}

// Секции курса — плоский список, как в Teachable
const SECTIONS = [
    { key: 'info', icon: '⚙️', label: 'Настройки', alwaysOn: true },
    { key: 'intro', icon: '👋', label: 'Введение' },
    { key: 'theory', icon: '📄', label: 'Теория' },
    { key: 'video', icon: '🎬', label: 'Видеоуроки' },
    { key: 'calc', icon: '✅', label: 'Тест' },
    { key: 'exam', icon: '🎓', label: 'Экзамен' }
];

function renderBuilder() {
    const c = builder.course;
    const isNew = !DEMO.courses.some(x => x.id === c.id);
    const hasContent = c.title.trim() !== '';

    let html = `
    <div style="display:grid;grid-template-columns:240px 1fr;min-height:calc(100vh - 64px);">
        <!-- SIDEBAR -->
        <div style="background:var(--color-bg-sidebar);border-right:1px solid var(--color-border);padding:1.5rem 0;overflow-y:auto;">
            <div style="padding:0 1rem;margin-bottom:1.5rem;">
                <button onclick="renderAdminCourses()" style="display:flex;align-items:center;gap:0.5rem;color:var(--color-text-secondary);font-size:0.875rem;padding:0.5rem;border:none;background:none;cursor:pointer;width:100%;border-radius:var(--radius-sm);">
                    ← Все курсы
                </button>
                <div style="margin-top:0.75rem;font-weight:600;font-size:0.875rem;word-break:break-word;">${esc(c.title || 'Новый курс')}</div>
            </div>
            <div style="border-top:1px solid var(--color-border);"></div>`;

    SECTIONS.forEach(sec => {
        if (!sec.alwaysOn && !c.modules[sec.key]?.enabled) return;

        const isActive = builder.selectedSection === sec.key;
        html += `
            <div onclick="selectSection('${sec.key}')" 
                 style="display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;cursor:pointer;font-size:0.875rem;font-weight:${isActive ? '600' : '400'};color:${isActive ? 'var(--color-primary)' : 'var(--color-text)'};background:${isActive ? 'var(--color-primary-light)' : 'transparent'};transition:background 0.15s;"
                 onmouseover="if(!${isActive})this.style.background='var(--color-primary-lighter)'"
                 onmouseout="if(!${isActive})this.style.background='transparent'">
                <span style="font-size:1.125rem;width:1.5rem;text-align:center;">${sec.icon}</span>
                <span>${sec.label}</span>
                ${sec.alwaysOn ? '' : `<label onclick="event.stopPropagation()" style="margin-left:auto;"><input type="checkbox" ${c.modules[sec.key]?.enabled ? 'checked' : ''} onchange="toggleSection('${sec.key}',this.checked)" style="accent-color:var(--color-primary);"></label>`}
            </div>`;
    });

    // Кнопка добавить секцию
    const availableSections = SECTIONS.filter(s => !s.alwaysOn && !c.modules[s.key]?.enabled);
    if (availableSections.length) {
        html += `
            <div style="border-top:1px solid var(--color-border);margin-top:0.5rem;"></div>
            <div style="padding:0.75rem 1rem;">
                <details style="font-size:0.8125rem;">
                    <summary style="cursor:pointer;color:var(--color-text-secondary);">+ Добавить раздел</summary>
                    <div style="margin-top:0.5rem;display:flex;flex-direction:column;gap:0.25rem;">`;
        availableSections.forEach(sec => {
            html += `<button onclick="toggleSection('${sec.key}',true)" style="text-align:left;padding:0.375rem 0.5rem;font-size:0.8125rem;border:none;background:none;cursor:pointer;color:var(--color-primary);border-radius:4px;" onmouseover="this.style.background='var(--color-primary-lighter)'" onmouseout="this.style.background='transparent'">${sec.icon} ${sec.label}</button>`;
        });
        html += '</div></details></div>';
    }

    // Кнопка сохранения в сайдбаре
    html += `
            <div style="border-top:1px solid var(--color-border);margin-top:auto;padding:1rem;position:sticky;bottom:0;">
                <button onclick="saveCourse()" style="width:100%;padding:0.75rem;background:var(--color-primary);color:#fff;border:none;border-radius:var(--radius-sm);font-weight:600;cursor:pointer;font-size:0.9375rem;position:relative;">
                    💾 Сохранить
                    <span id="dirtyIndicator" style="display:none;position:absolute;top:-4px;right:-4px;width:10px;height:10px;background:#F59E0B;border-radius:50%;"></span>
                </button>
                <div id="autoSaveStatus" style="font-size:0.75rem;color:var(--color-text-muted);text-align:center;margin-top:0.375rem;min-height:1rem;"></div>
            </div>
        </div>

        <!-- MAIN EDITOR -->
        <div style="overflow-y:auto;max-height:calc(100vh - 64px);">
            <div style="max-width:720px;margin:0 auto;padding:2.5rem 2rem;">`;

    // Рендерим контент выбранной секции
    switch (builder.selectedSection) {
        case 'info': html += renderSectionInfo(); break;
        case 'intro': html += renderSectionIntro(); break;
        case 'theory': html += renderSectionTheory(); break;
        case 'video': html += renderSectionVideo(); break;
        case 'calc': html += renderSectionCalc(); break;
        case 'exam': html += renderSectionExam(); break;
    }

    html += '</div></div></div>';
    document.getElementById('adminContentArea').innerHTML = html;

    // Привязываем markDirty ко всем полям
    document.querySelectorAll('#adminContentArea input, #adminContentArea textarea').forEach(el => {
        el.addEventListener('input', markDirty);
    });
}

function selectSection(key) {
    builder.selectedSection = key;
    renderBuilder();
}

function toggleSection(key, enabled) {
    if (builder.course.modules[key]) {
        builder.course.modules[key].enabled = enabled;
        if (enabled && builder.selectedSection === key) {
            // остаёмся на этой секции
        }
        if (!enabled && builder.selectedSection === key) {
            builder.selectedSection = 'info';
        }
        renderBuilder();
    }
}

// ====== СЕКЦИЯ: НАСТРОЙКИ ======
function renderSectionInfo() {
    const c = builder.course;
    return `
        <div style="margin-bottom:2rem;">
            <span style="font-size:2rem;">⚙️</span>
            <h2 style="font-size:1.5rem;font-weight:700;margin-top:0.75rem;margin-bottom:0.25rem;">Настройки курса</h2>
            <p style="color:var(--color-text-secondary);">Основная информация — название и описание</p>
        </div>
        <div>
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Название</label>
            <input type="text" id="b-title" value="${esc(c.title)}" placeholder="Например: Python для начинающих" 
                   style="width:100%;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:1rem;background:var(--color-bg-input);color:var(--color-text);">
        </div>
        <div style="margin-top:1.5rem;">
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Описание</label>
            <textarea id="b-desc" rows="4" placeholder="Кратко опишите, чему научатся студенты..."
                      style="width:100%;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:1rem;resize:vertical;background:var(--color-bg-input);color:var(--color-text);">${esc(c.description)}</textarea>
        </div>
        <div style="margin-top:2rem;padding:1rem;background:var(--color-bg);border-radius:var(--radius-sm);border:1px solid var(--color-border);">
            <div style="font-weight:600;margin-bottom:0.5rem;font-size:0.875rem;">💡 Совет</div>
            <div style="font-size:0.875rem;color:var(--color-text-secondary);">Название должно быть коротким и понятным. Описание — 1-2 предложения о том, что студент получит от курса.</div>
        </div>`;
}

// ====== СЕКЦИЯ: ВВЕДЕНИЕ ======
function renderSectionIntro() {
    const m = builder.course.modules.intro;
    return `
        <div style="margin-bottom:2rem;">
            <span style="font-size:2rem;">👋</span>
            <h2 style="font-size:1.5rem;font-weight:700;margin-top:0.75rem;margin-bottom:0.25rem;">Введение</h2>
            <p style="color:var(--color-text-secondary);">Приветственный текст, который студент увидит первым</p>
        </div>
        <div>
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Текст</label>
            <textarea id="b-intro" rows="12" placeholder="Добро пожаловать на курс! Здесь вы узнаете..."
                      style="width:100%;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:1rem;resize:vertical;line-height:1.7;background:var(--color-bg-input);color:var(--color-text);">${esc(m.content)}</textarea>
            <div style="font-size:0.8125rem;color:var(--color-text-muted);margin-top:0.5rem;">Пустая строка = новый абзац. Используйте **текст** для жирного.</div>
        </div>`;
}

// ====== СЕКЦИЯ: ТЕОРИЯ ======
function renderSectionTheory() {
    const m = builder.course.modules.theory;
    return `
        <div style="margin-bottom:2rem;">
            <span style="font-size:2rem;">📄</span>
            <h2 style="font-size:1.5rem;font-weight:700;margin-top:0.75rem;margin-bottom:0.25rem;">Теория</h2>
            <p style="color:var(--color-text-secondary);">Учебный материал курса</p>
        </div>
        <div>
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Учебный материал</label>
            <textarea id="b-theory" rows="16" placeholder="Изложите теорию, объясните концепции..."
                      style="width:100%;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:1rem;resize:vertical;line-height:1.7;background:var(--color-bg-input);color:var(--color-text);">${esc(m.content)}</textarea>
            <div style="font-size:0.8125rem;color:var(--color-text-muted);margin-top:0.5rem;">Пишите так, как объясняли бы студенту лично.</div>
        </div>`;
}

// ====== СЕКЦИЯ: ВИДЕО ======
function renderSectionVideo() {
    const videos = builder.course.modules.video.videos || [];
    let html = `
        <div style="margin-bottom:2rem;">
            <span style="font-size:2rem;">🎬</span>
            <h2 style="font-size:1.5rem;font-weight:700;margin-top:0.75rem;margin-bottom:0.25rem;">Видеоуроки</h2>
            <p style="color:var(--color-text-secondary);">Добавьте видео из YouTube или по прямой ссылке</p>
        </div>`;

    if (!videos.length) {
        html += `
        <div style="text-align:center;padding:3rem 2rem;background:var(--color-bg);border-radius:var(--radius-md);border:2px dashed var(--color-border);">
            <div style="font-size:2.5rem;margin-bottom:0.75rem;">🎥</div>
            <p style="color:var(--color-text-secondary);margin-bottom:1rem;">Пока нет видео</p>
        </div>`;
    }

    videos.forEach((v, i) => {
        html += `
        <div style="padding:1.25rem;background:var(--color-bg);border-radius:var(--radius-md);margin-bottom:0.75rem;border:1px solid var(--color-border);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                <span style="font-weight:600;font-size:0.875rem;color:var(--color-text-secondary);">Видео ${i + 1}</span>
                <button onclick="removeVideo(${i})" style="color:var(--color-error);border:none;background:none;cursor:pointer;font-size:1.125rem;padding:0.25rem;">✕</button>
            </div>
            <input type="text" class="v-title" data-i="${i}" value="${esc(v.title)}" placeholder="Название урока"
                   style="width:100%;padding:0.625rem 0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;margin-bottom:0.5rem;background:var(--color-bg-card);color:var(--color-text);">
            <input type="text" class="v-url" data-i="${i}" value="${esc(v.url)}" placeholder="https://www.youtube.com/watch?v=..."
                   style="width:100%;padding:0.625rem 0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;background:var(--color-bg-card);color:var(--color-text);">
        </div>`;
    });

    html += `
        <button onclick="addVideo()" style="width:100%;padding:1rem;border:2px dashed var(--color-border);border-radius:var(--radius-md);background:transparent;cursor:pointer;font-size:0.9375rem;color:var(--color-text-secondary);font-weight:500;margin-top:0.5rem;transition:border-color 0.15s;"
                onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
            + Добавить видео
        </button>`;

    return html;
}

// ====== СЕКЦИЯ: ТЕСТ ======
function renderSectionCalc() {
    const m = builder.course.modules.calc;
    const questions = m.test?.questions || [];
    const formulas = m.formulas || [];
    let html = `
        <div style="margin-bottom:2rem;">
            <span style="font-size:2rem;">✅</span>
            <h2 style="font-size:1.5rem;font-weight:700;margin-top:0.75rem;margin-bottom:0.25rem;">Тест</h2>
            <p style="color:var(--color-text-secondary);">Описание, формулы и вопросы для проверки знаний</p>
        </div>
        <div style="margin-bottom:1.5rem;">
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Описание блока</label>
            <textarea id="b-calc-content" rows="3" placeholder="Объясните формулы и задачи..."
                      style="width:100%;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;resize:vertical;background:var(--color-bg-input);color:var(--color-text);">${esc(m.content)}</textarea>
        </div>

        <!-- Формулы -->
        <div style="margin-bottom:1.5rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                <label style="font-weight:600;font-size:0.9375rem;">📐 Формулы</label>
            </div>`;

    if (!formulas.length) {
        html += `<p style="color:var(--color-text-muted);font-size:0.875rem;margin-bottom:0.5rem;">Нет формулов</p>`;
    }

    formulas.forEach((f, i) => {
        html += `
            <div style="padding:1rem;background:var(--color-bg-card);border-radius:var(--radius-sm);margin-bottom:0.5rem;border:1px solid var(--color-border);">
                <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
                    <span style="font-size:0.8125rem;color:var(--color-text-secondary);">Формула ${i + 1}</span>
                    <button onclick="removeFormula(${i})" style="color:var(--color-error);border:none;background:none;cursor:pointer;">✕</button>
                </div>
                <input type="text" class="f-title" data-i="${i}" value="${esc(f.title)}" placeholder="Название (например: Расчёт Firestore)"
                       style="width:100%;padding:0.5rem 0.625rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;margin-bottom:0.375rem;background:var(--color-bg-input);color:var(--color-text);">
                <input type="text" class="f-expr" data-i="${i}" value="${esc(f.expression)}" placeholder="Формула: R = пользователи × чтения"
                       style="width:100%;padding:0.5rem 0.625rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;margin-bottom:0.375rem;font-family:monospace;background:var(--color-bg-input);color:var(--color-text);">
                <input type="text" class="f-desc" data-i="${i}" value="${esc(f.description)}" placeholder="Пояснение"
                       style="width:100%;padding:0.5rem 0.625rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;background:var(--color-bg-input);color:var(--color-text);">
            </div>`;
    });

    html += `
            <button onclick="addFormula()" style="width:100%;padding:0.625rem;border:1px dashed var(--color-border);border-radius:var(--radius-sm);background:transparent;cursor:pointer;font-size:0.8125rem;color:var(--color-text-secondary);">+ Формула</button>
        </div>

        <!-- Проходной балл -->
        <div style="margin-bottom:1.5rem;">
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Проходной балл теста (%)</label>
            <input type="number" id="b-calc-pass" value="${m.test?.passingScore || 60}" min="0" max="100"
                   style="width:100px;padding:0.5rem 0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;background:var(--color-bg-input);color:var(--color-text);">
        </div>`;

    if (!questions.length) {
        html += `
        <div style="text-align:center;padding:3rem 2rem;background:var(--color-bg);border-radius:var(--radius-md);border:2px dashed var(--color-border);margin-bottom:1rem;">
            <div style="font-size:2.5rem;margin-bottom:0.75rem;">❓</div>
            <p style="color:var(--color-text-secondary);margin-bottom:1rem;">Пока нет вопросов</p>
        </div>`;
    }

    questions.forEach((q, i) => {
        html += `
        <div style="padding:1.25rem;background:var(--color-bg);border-radius:var(--radius-md);margin-bottom:0.75rem;border:1px solid var(--color-border);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                <span style="font-weight:600;font-size:0.875rem;color:var(--color-text-secondary);">Вопрос ${i + 1}</span>
                <button onclick="removeQuestion(${i})" style="color:var(--color-error);border:none;background:none;cursor:pointer;font-size:1.125rem;padding:0.25rem;">✕</button>
            </div>
            <input type="text" class="q-text" data-i="${i}" value="${esc(q.text)}" placeholder="Текст вопроса"
                   style="width:100%;padding:0.625rem 0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;margin-bottom:0.5rem;background:var(--color-bg-card);color:var(--color-text);">
            <textarea class="q-opts" data-i="${i}" rows="3" placeholder="Варианты ответов (каждый с новой строки)"
                      style="width:100%;padding:0.625rem 0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;resize:vertical;background:var(--color-bg-card);color:var(--color-text);">${q.options.join('\n')}</textarea>
            <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;">
                <span style="font-size:0.8125rem;color:var(--color-text-secondary);">Правильный ответ (0 = первый):</span>
                <input type="number" class="q-correct" data-i="${i}" value="${q.correctIndex}" min="0" max="10"
                       style="width:60px;padding:0.375rem 0.5rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.8125rem;background:var(--color-bg-input);color:var(--color-text);">
            </div>
        </div>`;
    });

    html += `
        <button onclick="addQuestion()" style="width:100%;padding:1rem;border:2px dashed var(--color-border);border-radius:var(--radius-md);background:transparent;cursor:pointer;font-size:0.9375rem;color:var(--color-text-secondary);font-weight:500;margin-top:0.5rem;"
                onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
            + Добавить вопрос
        </button>`;

    return html;
}

// ====== СЕКЦИЯ: ЭКЗАМЕН ======
function renderSectionExam() {
    const exam = builder.course.modules.exam;
    const tickets = exam.tickets || [];
    let html = `
        <div style="margin-bottom:2rem;">
            <span style="font-size:2rem;">🎓</span>
            <h2 style="font-size:1.5rem;font-weight:700;margin-top:0.75rem;margin-bottom:0.25rem;">Экзамен</h2>
            <p style="color:var(--color-text-secondary);">Экзаменационные билеты — студент выбирает один после всех модулей</p>
        </div>
        <div style="margin-bottom:1.5rem;">
            <label style="display:block;font-weight:600;margin-bottom:0.5rem;font-size:0.9375rem;">Проходной балл (%)</label>
            <input type="number" id="b-exam-pass" value="${exam.passingScore || 70}" min="0" max="100"
                   style="width:100px;padding:0.5rem 0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.9375rem;background:var(--color-bg-input);color:var(--color-text);">
        </div>`;

    if (!tickets.length) {
        html += `
        <div style="text-align:center;padding:3rem 2rem;background:var(--color-bg);border-radius:var(--radius-md);border:2px dashed var(--color-border);margin-bottom:1rem;">
            <div style="font-size:2.5rem;margin-bottom:0.75rem;">📝</div>
            <p style="color:var(--color-text-secondary);margin-bottom:1rem;">Пока нет билетов</p>
        </div>`;
    }

    tickets.forEach((ticket, ti) => {
        const qs = ticket.questions || [];
        html += `
        <details open style="margin-bottom:0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-md);">
            <summary style="padding:0.875rem 1.25rem;cursor:pointer;font-weight:600;font-size:0.9375rem;">📋 Билет ${ti + 1} <span style="font-weight:400;color:var(--color-text-secondary);">(${qs.length} ${questionWord(qs.length)})</span></summary>
            <div style="padding:0 1.25rem 1.25rem;">`;

        qs.forEach((q, qi) => {
            html += `
                <div style="padding:1rem;background:var(--color-bg-card);border-radius:var(--radius-sm);margin-bottom:0.5rem;border:1px solid var(--color-border);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                        <span style="font-size:0.8125rem;font-weight:600;color:var(--color-text-secondary);">Вопрос ${qi + 1}</span>
                        <button onclick="removeExamQ(${ti},${qi})" style="color:var(--color-error);border:none;background:none;cursor:pointer;font-size:0.875rem;">✕</button>
                    </div>
                    <input type="text" class="eq-text" data-ti="${ti}" data-qi="${qi}" value="${esc(q.text)}" placeholder="Вопрос"
                           style="width:100%;padding:0.5rem 0.625rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;margin-bottom:0.375rem;background:var(--color-bg-input);color:var(--color-text);">
                    <textarea class="eq-opts" data-ti="${ti}" data-qi="${qi}" rows="2" placeholder="Варианты (с новой строки)"
                              style="width:100%;padding:0.5rem 0.625rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;resize:vertical;background:var(--color-bg-input);color:var(--color-text);">${q.options.join('\n')}</textarea>
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.375rem;">
                        <span style="font-size:0.75rem;color:var(--color-text-muted);">Правильный (0 = первый):</span>
                        <input type="number" class="eq-correct" data-ti="${ti}" data-qi="${qi}" value="${q.correctIndex}" min="0" max="10"
                               style="width:55px;padding:0.25rem 0.5rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.75rem;background:var(--color-bg-input);color:var(--color-text);">
                    </div>
                </div>`;
        });

        html += `
                <button onclick="addExamQ(${ti})" style="width:100%;padding:0.625rem;border:1px dashed var(--color-border);border-radius:var(--radius-sm);background:transparent;cursor:pointer;font-size:0.8125rem;color:var(--color-text-secondary);margin-top:0.25rem;">+ Вопрос</button>
            </div>
        </details>`;
    });

    html += `
        <button onclick="addTicket()" style="width:100%;padding:1rem;border:2px dashed var(--color-border);border-radius:var(--radius-md);background:transparent;cursor:pointer;font-size:0.9375rem;color:var(--color-text-secondary);font-weight:500;margin-top:0.5rem;"
                onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
            + Добавить билет
        </button>`;

    return html;
}

function questionWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'вопрос';
    if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'вопроса';
    return 'вопросов';
}

// ====== CRUD ДЕЙСТВИЯ ======
function addVideo() {
    builder.course.modules.video.videos.push({ title: '', url: '', type: 'youtube' });
    renderBuilder();
    setTimeout(() => {
        const items = document.querySelectorAll('.v-title');
        if (items.length) items[items.length - 1].focus();
    }, 50);
}

function removeVideo(i) {
    builder.course.modules.video.videos.splice(i, 1);
    renderBuilder();
}

function addQuestion() {
    builder.course.modules.calc.test.questions.push({ text: '', options: ['', ''], correctIndex: 0 });
    renderBuilder();
    setTimeout(() => {
        const items = document.querySelectorAll('.q-text');
        if (items.length) items[items.length - 1].focus();
    }, 50);
}

function removeQuestion(i) {
    builder.course.modules.calc.test.questions.splice(i, 1);
    renderBuilder();
}

function addFormula() {
    builder.course.modules.calc.formulas.push({ title: '', expression: '', description: '' });
    renderBuilder();
    setTimeout(() => {
        const items = document.querySelectorAll('.f-title');
        if (items.length) items[items.length - 1].focus();
    }, 50);
}

function removeFormula(i) {
    builder.course.modules.calc.formulas.splice(i, 1);
    renderBuilder();
}

function addTicket() {
    builder.course.modules.exam.tickets.push({ questions: [] });
    renderBuilder();
}

function addExamQ(ti) {
    builder.course.modules.exam.tickets[ti].questions.push({ text: '', options: ['', ''], correctIndex: 0 });
    renderBuilder();
    setTimeout(() => {
        const items = document.querySelectorAll(`.eq-text[data-ti="${ti}"]`);
        if (items.length) items[items.length - 1].focus();
    }, 50);
}

function removeExamQ(ti, qi) {
    builder.course.modules.exam.tickets[ti].questions.splice(qi, 1);
    renderBuilder();
}

// ====== СОХРАНЕНИЕ ======
function saveCourse() {
    const c = builder.course;

    // Собираем данные из полей
    const title = document.getElementById('b-title')?.value.trim();
    if (!title) { showToast('Введите название курса', 'error'); selectSection('info'); return; }
    c.title = title;
    c.description = document.getElementById('b-desc')?.value.trim() || '';

    // Введение
    if (c.modules.intro.enabled) {
        c.modules.intro.content = document.getElementById('b-intro')?.value || '';
    }

    // Теория
    if (c.modules.theory.enabled) {
        c.modules.theory.content = document.getElementById('b-theory')?.value || '';
    }

    // Видео
    if (c.modules.video.enabled) {
        c.modules.video.videos = [];
        document.querySelectorAll('.v-title').forEach(inp => {
            const i = inp.dataset.i;
            const url = document.querySelector(`.v-url[data-i="${i}"]`)?.value.trim();
            if (url) {
                c.modules.video.videos.push({ title: inp.value, url, type: url.includes('youtube') ? 'youtube' : 'direct' });
            }
        });
    }

    // Тест
    if (c.modules.calc.enabled) {
        c.modules.calc.content = document.getElementById('b-calc-content')?.value || '';
        c.modules.calc.test.passingScore = parseInt(document.getElementById('b-calc-pass')?.value) || 60;
        c.modules.calc.test.questions = [];
        document.querySelectorAll('.q-text').forEach(inp => {
            const i = inp.dataset.i;
            const text = inp.value.trim();
            const opts = document.querySelector(`.q-opts[data-i="${i}"]`)?.value.split('\n').filter(o => o.trim()) || [];
            const correct = parseInt(document.querySelector(`.q-correct[data-i="${i}"]`)?.value) || 0;
            if (text && opts.length >= 2) c.modules.calc.test.questions.push({ text, options: opts, correctIndex: correct });
        });
    }

    // Экзамен
    if (c.modules.exam.enabled) {
        c.modules.exam.passingScore = parseInt(document.getElementById('b-exam-pass')?.value) || 70;
        c.modules.exam.tickets = [];

        // Собираем билеты по номерам (data-ti)
        const maxTi = Math.max(0, ...[...document.querySelectorAll('.eq-text')].map(el => parseInt(el.dataset.ti)));
        for (let ti = 0; ti <= maxTi; ti++) {
            const questions = [];
            document.querySelectorAll(`.eq-text[data-ti="${ti}"]`).forEach(inp => {
                const qi = inp.dataset.qi;
                const text = inp.value.trim();
                const optsEl = document.querySelector(`.eq-opts[data-ti="${ti}"][data-qi="${qi}"]`);
                const opts = optsEl ? optsEl.value.split('\n').filter(o => o.trim()) : [];
                const correctEl = document.querySelector(`.eq-correct[data-ti="${ti}"][data-qi="${qi}"]`);
                const correct = correctEl ? parseInt(correctEl.value) || 0 : 0;
                if (text && opts.length >= 2) questions.push({ text, options: opts, correctIndex: correct });
            });
            if (questions.length) c.modules.exam.tickets.push({ questions });
        }
    }

    // Чистим пустые модули
    ['intro', 'theory', 'video', 'calc', 'exam'].forEach(key => {
        if (!c.modules[key].enabled) {
            // Оставляем пустой placeholder
        }
    });

    // Сохраняем
    const existingIdx = DEMO.courses.findIndex(x => x.id === c.id);
    if (existingIdx !== -1) DEMO.courses[existingIdx] = c;
    else DEMO.courses.push(c);

    persistCourses();
    builder.isDirty = false;
    if (builder.autoSaveTimer) clearTimeout(builder.autoSaveTimer);
    showToast('Курс сохранён ✓', 'success');
    setTimeout(() => renderAdminCourses(), 500);
}

function openBuilder() {
    if (builder.course) {
        renderBuilder();
    } else {
        renderAdminCourses();
    }
}

// ====== ПРОФИЛЬ ======
function updateProfile() {
    const user = state.currentUser;
    if (!user) return;

    // Обновляем все поля профиля
    const nameEls = [
        document.getElementById('profileName'),
        document.getElementById('profileNameField')
    ];
    nameEls.forEach(el => { if (el) el.textContent = user.name; });

    const emailEls = [
        document.getElementById('profileEmail'),
        document.getElementById('profileEmailField')
    ];
    emailEls.forEach(el => { if (el) el.textContent = user.email; });

    const roleEl = document.getElementById('profileRole');
    if (roleEl) roleEl.textContent = user.isAdmin ? 'Администратор' : 'Слушатель';

    // Прогресс курсов
    const coursesDiv = document.getElementById('profileCoursesList');
    if (coursesDiv) {
        let html = '';
        let hasCourses = false;
        DEMO.courses.forEach(c => {
            const completed = getCompleted(c.id);
            const total = Object.keys(c.modules).length;
            const pct = total ? Math.round((completed.length / total) * 100) : 0;
            if (pct > 0 || completed.length > 0) {
                hasCourses = true;
                html += `<div class="profile-course-item">
                    <span class="profile-course-item__name">${esc(c.title)}</span>
                    <span class="profile-course-item__progress">${pct}%</span>
                </div>`;
            }
        });
        coursesDiv.innerHTML = hasCourses ? html : '<p class="empty-state__text">Вы ещё не начали ни один курс</p>';
    }

    // Результаты тестов
    const resultsDiv = document.getElementById('profileResultsList');
    if (resultsDiv) {
        if (state.testResults && state.testResults.length) {
            let html = '';
            state.testResults.forEach(r => {
                html += `<div class="profile-result-item">
                    <div>
                        <div style="font-weight:600;">${esc(r.course)}</div>
                        <div style="font-size:0.8125rem;color:var(--color-text-secondary);">Тест · ${r.passed ? '✅ Пройден' : '❌ Не пройден'}</div>
                    </div>
                    <div style="font-weight:700;color:${r.passed ? 'var(--color-success)' : 'var(--color-error)'};font-size:1.125rem;">${r.score}%</div>
                </div>`;
            });
            resultsDiv.innerHTML = html;
        } else {
            resultsDiv.innerHTML = '<p class="empty-state__text">Тесты ещё не пройдены</p>';
        }
    }
}
