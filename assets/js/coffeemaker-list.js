//список кавоварок

const COFFEEMAKER_PRODUCTS = [
    {
        id: 0,
        name: "Кавоварка Delonghi",
        price: 14599,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_dinamicaEcam350.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"
        },
        description: "Кофемашина DeLonghi ECAM 350 стане вашим персональним бариста. Ваші улюблені ароматні напої - еспресо, капучіно, лате макиато або гаряче молоко - будуть готові за допомогою всього одного натискання на кнопку. Технологія LatteCremaSystem створить повітряну і пишну пінку для вашого кави. Купити DeLonghi ECAM 350 - кожен день пити професійно приготовані напої."
    },
    {
        id: 1,
        name: "Кавоварка Gaggia Naviglio DeLuxe",
        price: 10999,
        bigPhotoUrl: "assets/img/image_coffee_makers/gaggia_naviglioDeLuxe.jpg",
        additionalInfo: {
            brand: "Gaggia",
            coffeeType: "Автоматична"
        },
        description: "Автоматична кавоварка Gaggia Naviglio DeLuxe - стильна домашня кавоварка, оснащена автоматичним капучинатором. Машина стане ідеальним вибором для Вашої кухні, приймальні або особистого кабінету. Невибаглива і проста кавоварка об'єднала в собі кращі риси італійської кавової техніки, щоб стати для Вас незамінним помічником. Важливою функціональною особливістю стала наявність автокапучінатора, який, на відміну від звичайної трубки подачі пари і гарячої води, здатний збивати чудову молочну пінку без вашої безпосередньої участі. Щоб забезпечити своєму напою ідеальну глянсову пінку,вам достатньо приєднати один кінець спеціальною силіконовою трубочки до капучинатора, а другий - опустити в ємність з молоком. Одне натискання клавіші і Ви можете насолодитися відмінним латте, мокачино або капучіно."
    },
    {
        id: 2,
        name: "Кавоварка Saeco Aulika Focus",
        price: 24555,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_aulika.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Капсульна"
        },
        description: "Функціональна і приваблива Saeco Aulika Focus поєднує в собі продуктивність професійного кавового обладнання (дві помпи і два бойлера) і простоту управління домашніх кавоварок - всі напої, включаючи напої з молоком, можна отримати натисканням однієї кнопки. Інтерфейс кавомашини включає в себе екран і 8 кнопок, які відповідають не тільки за приготування напоїв, а й за управління електронним меню програмування кавомашини. Параметри готового напою регулюються під смакові переваги користувача (температура, обсяг), а чашки завжди будуть гарячими з активним підігрівом верхній панелі. Процеси чистки автоматизовані, а всі деталі, що вимагають догляду, є знімними."
    },
    {
        id: 3,
        name: "Кавоварка Saeco Aulika Office",
        price: 22176,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_aulikaOffice.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Автоматична"
        },
        description: "Saeco Aulika Office black легко впорається з обсягами автоматичного приготування кави для великих офісів. Управління кавоваркою інтуїтивно зрозуміле і здійснюється за допомогою всього 4 програмованих кнопок з іконками напоїв і кольорового дисплея, розташованих на передній панелі. Програмування та приготування відбувається за допомогою всього одного натискання кнопки напою. Saeco Aulika Office black здатна готувати до 100 чашок кави в годину, а великі бункери для води, кави і макухи роблять експлуатацію кавомашини безперебійної і комфортною протягом тривалого часу. Завдяки автоматизованим процесам чистки, догляд за кавоваркою досить простий"
    },
    {
        id: 4,
        name: "Кавоварка  Saeco Pherda Evo Cappucino ",
        price: 57499,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_phedraEvoCappucino.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Автоматична"

        },
        description: "Апарат готує різні комбінації кави еспресо, лате, капучіно зі свіжим молоком, гарячий шоколад та інші напої. Можна запрограмувати на приготування до 18 різних напоїв.Особливості кавомашини: наявність 1 контейнера для кави в зернах, наявність 2-3 ємностей для розчинної продукції (сухе молоко)окрема подача гарячої водикапучинатор Pinless Wonder з можливістю готувати на сирому молоціпрямий вибір 8 напоївдо 2-х можливостей попереднього виборучистка тільки після 50 порцій кави ,LED-підсвітка, підставки для склянок Зручне відкриття бічної кришки підключення до водопровідної мережі"
    },
    {
        id: 5,
        name: "Кавоварка Saeco Lirika OTC",
        price: 11999,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_lirikaOtc.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Автоматична"

        },
        description: "Saeco Lirika (OTC) One Touch Cappuccino - проста в управлінні, компактна, функціональна кавоварка для будинку, офісу або сегмента HoReCa з невеликою прохідністю. Кофемашина оснащена новим вдосконаленим капучинатором, завдяки якому готує напої з молоком автоматично. Управління Saeco Lirika (OTC) One Touch Cappuccino существляется за допомогою кнопкового інтерфейсу і дисплея, на якому відображаються відбуваються в кавомашині процеси. Спеціально для любителів кави з молоком кнопки приготування капучино і латте винесені на панель приготування, таким чином, свій улюблений напій ви отримуєте натисненням однієї кнопки.Всі напої програмуються на ваш смак - обсяг кави і фортеця регулюються за допомогою меню, а у вбудованій кавомолці регулюється якість помелу. Для ідеального насиченого смаку кави у вашій чашці кавоварка обладнана системою попереднього змочування. Про економію енергії подбали заздалегідь - модель оснащена системою енергозбереження класу А. Saeco Lirika (OTC) One Touch Cappuccino - продуктивний помічник у приготуванні якісного італьнянского еспресо і капучіно натисненням однієї кнопки."
    },
    {
        id: 6,
        name: "Кавоварка Saeco Royal Gran Crema",
        price: 19999,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_royal.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Капсульна"

        },
        description: "Saeco Royal Gran Crema готова приготувати ваш улюблений кави і молочну піну, як вдома, так і в офісі для вашого задоволення кожен день. Виберіть сорт кави і встановіть потрібні значення обсягу, фортеці і температури. Проста у використанні і проста в обслуговуванні: завдяки автоматичним циклам очищення від забруднень і накипу ви неодмінно отримаєте задоволення від щоденного використання вашої автоматичної еспресо - кавові протягом багатьох років Капучинатор легко знімається і промивається теплою водою, або просто закиньте його в посудомийку.За допомогою всього лише одного натискання кнопки миттєво отримаєте смачну і щільну молочну піну потрібної температури завдяки новому, автоматичного вспенивателя молока. Функція підігріву чашок дозволяє відчути повний спектр смаку кави, адже в холодній чашці напій швидко остигає."
    },
    {
        id: 7,
        name: "Кавоварка Saeco New Royal OTC",
        price: 18999,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_royalBlackOtc.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Автоматична"

        },
        description: "Кофемашина Saeco Royal OTC призначена для приготування кавових напоїв таких як еспрессо, американо, капучино, латте.Молочьние напої готує автоматично за допомогою автокапучінатора. Окрема подача гарячої води для приготування чаю. Висоту дозатора кави можна регулювати. Є вбудована кавомолка зі сталевими конічними жерновамі.Крепость кави і ступінь помелу ви вибираєте самі. Завдяки тому, що чайник для блок знімний, ця машина легка в догляді. Також є функція підключення по Bluetooth. Ємнісний інтерфейс з фотореалістичними зображеннями і іконографічний дисплей спрощують вибір напоїв і надають машині футуристичний стиль, який доповнить будь-який робоче місце."
    },
    {
        id: 8,
        name: "Кавоварка Saeco Talea Touch",
        price: 11999,
        bigPhotoUrl: "assets/img/image_coffee_makers/saeco_taleaTouch.jpg",
        additionalInfo: {
            brand: "Saeco",
            coffeeType: "Автоматична"

        },
        description: "Автоматична кавоварка преміум класу Saeco Talea Touch Urban-Silver 2 для приготування еспрессо і напоїв з молоком. Вершина модельного ряду Talea, управління здійснюється за допомогою великого сенсорного екрану Touch Screen. Одним дотиком машина приготує три види кави вашого улюбленого обсягу - ристретто, еспресо або лунго. Обсяг, насиченість, температура напою програмуються на ваш смак. Попереднє змочування робить каву більш ароматним, а система SBS дозволяє прямо перед приготуванням і незалежно від налаштувань змінити насиченість напою.Можливість запрограмувати час переходу в сплячий режим не змусить замислюватися про витрату електроенергії. Техноманів приверне можливість регулювати висоту піддону за допомогою сенсора. Як опція йде зовнішній модуль Milk Island для автоматичного спінювання молока для капучіно, лате і еспрессо-маккіато. За один раз такий автокаппучінатор спінює молоко на 3-4 порції капучіно. Функція швидка пара дозволить приготувати напої з молоком за більш короткий час."
    }, 
    {
        id: 9,
        name: "Delonghi ECAM610",
        price: 36999,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_ecam610.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "Primadonna Soul - це перша кавоварка з унікальною кавомолкою яка оснащена ексклюзивною технологією, що дозволяє автоматично отримувати всі ароматичне багатство ваших кавових зерен. Таким чином, технологія Bean Adapt автоматично регулює основні параметри, щоб завжди отримувати ідеальний результат незалежно від походження, типу і ступеня обсмаження вашого кави. Від зерна до чашки - все задоволення від ідеального еспрессо! Мульти-напій Дозвольте собі надихнутися широким вибором напоїв. Кава, молоко, чай ... Primadonna Soul пропонує широкий вибір рецептів, які можна вибрати простим дотиком до сенсорного екрану або зі свого смартфона.Ультра-інтуїтивний екран З новим кольоровим сенсорним TFT-дисплеєм з діагоналлю 4,3 дюйма управляти кавоваркою стало ще простіше. Вибирайте, налаштовуйте і записуйте все напої на свій смак прямо з екрану.Оптимальний контроль температури Щоб витягти максимум аромату з свежемолотого кави, температура екстракції повинна бути від 88 до 96 ° C. Від ідеального еспрессо до м'якого капучино - ідеально приготуйте всі свої улюблені напої завдяки двом термоблокам. Один призначений для води, інший - для пара і підігріву молока."
    }, 
    {
        id: 10,
        name: "Кавоварка Delonghi ECAM23",
        price: 16999,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_ecam23.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "DeLonghi ECAM 23 - це компактна еспрессо-кавоварка з функцією автоматичного приготування капучино. Компактний дизайн кавомашини дозволяє заощадити життєвий простір на кухні будинку або в приймальні.Стандартні функції приготування кавових напоїв підкріплюються новими можливостями - кавоварка збиває молоко одним натисканням кнопки за допомогою зовнішнього автокапучінатора - глечика для молока. Кофемашина оснащена двустрочним текстовим дисплеєм з русифікованим меню. Гнучка настройка всіх параметрів напою допомагає наблизити смак кави до ваших вподобань: дозволяє налаштувати кількість напою, фортеця і температуру.Кофемашина вміє готує еспрессо як на зерновому, так і на молотом кави Вбудована кавомолка зі сталевими жорнами має 14 градацій помелу. На порцію може бути відрегульовано від 6 до 14 грам меленої кави. Підставка для чашок з підігрівом дозволить довше зберігати в уже прогрітій посуді температуру кавових напоїв. Вбудовані програми очищення кавомашини виробляються натисканням однієї кнопки."
    }, 
    {
        id: 11,
        name: "Кавоварка Delonghi ECAM46",
        price: 26999,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_ecam46.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "Оскільки дана кавоварка відрізняється високою потужністю в 1450 Ватт, вона здатна створити будь-який напій буквально за хвилини. Помпа нагнітає тиск в системі до 15 Бар і в вашу чашку потрапляє кава-еспресо, що ідеально відповідає класичним стандартам якості. Автоматична кавомолка з настроюється ступенями помелу перемелює зерна безпосередньо перед приготуванням напоїв, що повністю зберігає ідеальні вихідні смакові і ароматичні властивості.Інтуїтивно зрозумілий інтерфейс системи управління дуже простий і зручний: сенсорні клавіші з нанесеними піктограмами не потребують додаткових пояснень, швидше за все, ви розберетеся з основним функціоналом навіть без поглибленого вивчення інструкції. Крім того, автоматизація сервісних функцій (очищення від накипу, ополіскування) значно спрощує догляд за кавоваркою."
    }, 
    {
        id: 12,
        name: "Кавоварка Delonghi ESAM420",
        price: 27999,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_esam42080.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "Оскільки дана кавоварка відрізняється високою потужністю в 1450 Ватт, вона здатна створити будь-який напій буквально за хвилини. Помпа нагнітає тиск в системі до 15 Бар і в вашу чашку потрапляє кава-еспресо, що ідеально відповідає класичним стандартам якості. Автоматична кавомолка з настроюється ступенями помелу перемелює зерна безпосередньо перед приготуванням напоїв, що повністю зберігає ідеальні вихідні смакові і ароматичні властивості. Інтуїтивно зрозумілий інтерфейс системи управління дуже простий і зручний:сенсорні клавіші з нанесеними піктограмами не потребують додаткових пояснень, швидше за все, ви розберетеся з основним функціоналом навіть без поглибленого вивчення інструкції. Крім того, автоматизація сервісних функцій (очищення від накипу, ополіскування) значно спрощує догляд за кавоваркою.."
    }, 
    {
        id: 13,
        name: "Кавоварка Delonghi ECAM460",
        price: 27999,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_ecsm460.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "Кофемашина DeLonghi ESAM 460.80.MB Perfecta Deluxe вразить доступними можливостями, красою і зручністю використання. Чи не займаючи занадто багато місця, апарат здатний в автоматичному режимі готувати найпопулярніші еспресо-напої, досить натиснути кнопку на сенсорній панелі управління. Сервісні функції також автоматизовані і більшу частину операцій з очищення кавоварка виконує самостійно. Просто активуйте програму видалення накипу, очищення і ополіскування."
    }, 
    {
        id: 14,
        name: "Кавоварка Delonghi ETAM29",
        price: 13599,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_etam29.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "DeLonghi ETAM 29.510 B - це можливість приготувати найрізноманітніші кавові напої. Завдяки сенсорної панелі управління з підсвічуванням дуже легко задавати потрібні параметри приготування напою. Можете приготувати міцний і м'який кави, маленьку, середню або велику порцію кофе.С допомогою кнопки «Doppio +» для вас приготується смачний подвійний еспресо, в якому в два рази більше кави і води ніж у звичайній порції. Ця функція може бути застосована тільки для приготування з кавових зерен.На панелі є спеціальна кнопка під назвою «Long», при натисканні на яку готується американо. Капучинатор можна використовувати не тільки для збивання молока а й для для подачі гарячої води для чаю.."
    }, 
    {
        id: 15,
        name: "Кавоварка GAGGIA ANIMA CLASS OTC",
        price: 15999,
        bigPhotoUrl: "assets/img/image_coffee_makers/gaggia_anima.jpg",
        additionalInfo: {
            brand: "Gaggia",
            coffeeType: "Автоматична"

        },
        description: "Anima Prestige забезпечує відмінний результат в чашці за кілька секунд, і ніколи не розчарує вас. Насолоджуйтесь 5 напоями на основі кави і молока, від традиційного еспрессо до пінного капучино, і надайте телефону їх обсяг і фортеця.Завдяки повністю інтегрованого двокамерному карафки для молока можна приготувати найсмачніший капучіно всього одним дотиком. Автоматичний цикл очищення і можливість зберігати його в холодильнику роблять його гігієнічним і ефективним.Стійкі 100% керамічні жорна запобігають перегріву кавових зерен. Цей матеріал гарантує кращий результат в чашці. Виберіть один з 5 варіантів приготування еспрессо, від тонкого помелу для міцного смаку до самого грубого для більш легкого кави."
    }, 
    {
        id: 16,
        name: "Кавоварка GAGGIA BESANA BLACK",
        price: 10499,
        bigPhotoUrl: "assets/img/image_coffee_makers/gaggia_besana.jpg",
        additionalInfo: {
            brand: "Gaggia",
            coffeeType: "Автоматична"

        },
        description: "Той же підхід до традиційного приготування кави з класичним панарелло, яке спінює молоко або подає гарячу воду для чаю.Довговічні 100% керамічні жорна роблять кращий помел з кавових зерен, запобігаючи перегрів і печіння. Цей матеріал гарантує довговічність, тишу і кращий результат в чашці. Виберіть один з 5 варіантів приготування еспрессо, від тонкого помелу для міцного смаку до самого грубого для більш легкого кавиЩоб забезпечити більш тривалий термін служби продукту і найкращі результати в будь-який час, машина активує цикл автоматичного полоскання кавового контуру при включенні або автоматичному відключенні. Крім того, він попереджає вас, коли прийшов час для видалення накипу."
    }, 
    {
        id: 17,
        name: "Кавоварка De`Longhi PrimaDonna Elite ECAM 650",
        price: 39999,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_elitePrimmaDonnaEcam650.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "De`Longhi PrimaDonna Elite ECAM 650.85 MS ідеальне поєднання дизайну, сучасних технологій приготування кави та легкості в управлінні. De`Longhi PrimaDonna Elite це нове покоління повністю автоматичних кавових машин, покликаних задовольняти смак каждого.Любіте холодну каву? Разом з автоматичною кавоваркою DeLonghi ECAM 650.85 MS ви зможете щодня насолоджуватися як холодними, так і гарячими кавовими напоями. Цей пристрій оснащений функцією Multibeverage (в його комплекті передбачений контейнер MixCarafe для приготування холодної кави і шоколаду) .За допомогою мобільного додатка Coffee Link ви зможете віддалено (через Bluetooth) управляти кавоваркою .Благодаря автоматичним програмам, ви зможете приготувати будь-який напій всього одним натисненням кнопки.Еспрессо, еспресо-макиато, Допп, лунго, латте макіато, гарячий шоколад і це ще не все. Крім того, ви можете приготувати чай, налаштовуючи температуру"
    }, 
    {
        id: 18,
        name: "Кавоварка Gaggia Velasca Prestige",
        price: 19999,
        bigPhotoUrl: "assets/img/image_coffee_makers/gaggia_velasca.jpg",
        additionalInfo: {
            brand: "Gaggia",
            coffeeType: "Автоматична"

        },
        description: "Завдяки новій лінійці Gaggia Velasca насолоджуватися ароматним італійським еспрессо дійсно просто, достатньо натиснути кнопку і отримати такий же смачний еспресо або капучіно, як в улюбленій кав'ярні. Ваш особистий домашній бариста приготує напій згідно вашим перевагам, в цьому допоможуть настройки помелу, об'єму напою в чашці, температури і насиченості. А функція запам'ятовування збереже вибрані настройки. Система One Touch Cappuccino - ваш улюблений напій з молоком, буде прикрашати ніжна глянсова молочна пінка. Молочний графин двічі спінить молоко, перш ніж акуратно подати його в чашку. Графин з молоком можна зберігати в холодильнику і мити в посудомийній машині. Управляти Gaggia Velasca Prestige OTC RI8263 / 01 легко за допомогою кнопкової панелі управління з символьним дисплеєм зі світловою індикацією. Завдяки трубці подачі пари легко відчути себе справжнім бариста і власноруч приготувати ніжне вспененное молоко для капучино, латте або еспрессо макиато. Коли захочеться испльзовать інший сорт кави або кави без кофеїну, що не спустошуючи бункер зерна, стане в нагоді пульвер меленої кави. Gaggia Velasca Prestige OTC RI8263 / 01 це більш ніж 75-річний досвід інженерів компанії, вкладений в компактний корпус для автоматичного приготування ароматної чашечки італійського еспресо або капучіно будинку."
    }, 
    {
        id: 19,
        name: "Кавоварка Gaggia Brera Black",
        price: 13999,
        bigPhotoUrl: "assets/img/image_coffee_makers/gaggia_brera.jpg",
        additionalInfo: {
            brand: "Gaggia",
            coffeeType: "Автоматична"

        },
        description: "Ідеальна машина для домашньої кухні, Gaggia Brera Black, невибаглива в догляді і зручна в зверненні. Її панель управління складають чотири кнопки і светоідний дисплей, на якому висвічуються підказки користувачеві. Тому, навіть якщо Gaggia Brera Black - ваша перша кавоварка, проблем з її використанням не буде. Навіть на самій невеликій кухні, розміщену між мікрохвильовкою і хлібниці, Gaggia Brera Black не доведеться пересувати або розгортати, щоб долити в неї води, досипати кавових зерен або звільнити піддон від макухи. Доступ до всіх необхідних контейнерів знаходиться на фронтальній частині кавомашини, що значно спрощує її експлуатацію"
    }, 
    {
        id: 20,
        name: "Кавоварка De`Longhi ECAM 22",
        price: 12499,
        bigPhotoUrl: "assets/img/image_coffee_makers/delonghi_ecam22.jpg",
        additionalInfo: {
            brand: "Delonghi",
            coffeeType: "Автоматична"

        },
        description: "Автоматична еспресо-кавоварка DeLonghi Magnifica S ECAM 22.110B (Делонги Магніфіка С) - незамінний помічник для приготування кави в домашніх условіях.Строгій чорний корпус кавомашини не привертає до себе зайвої уваги і може легко розміститися в будь-якій точці вашої кухні. Класичний символьно-кнопковий інтерфейс спрощує процес спілкування і приготування кави. Завдяки зрозумілим позначенням над кнопками ви без праці налаштуєте бажаний кавовий напій відповідно до власних вподобань.Тиха вбудована кавомолка з прямим помелом в блок заварювання змеле зерна для еспресо, а регулювання кількості кави на порцію (від 6 до 14 грам) задасть необхідну міцність еспресо-напітка.Сістема швидкого пара дозволяє збити молоко без витрачання зайвого часу, а насадка типу капучинатор допоможе перетворити молоко в гарячу молочну пену.Пріготовленіе латте-макиато у високій посуді тепер не проблема. Регулятор вузла видачі кави дозволяє ставити навіть дуже високі склянки для кавових напоїв. Чистка кавомашини займає мінімум часу: дістати і сполоснути блок заварювання, періодично запустити на виконання вбудовану програму чистки від накипу - це все що потрібно від вас."
    }
];