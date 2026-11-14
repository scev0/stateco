import type { GroupExample } from "./types";

export { EXAMPLES };


/* ==========================================================
	 4. Примеры продукции и компаний для групп (уровень 3)
			ключ — трёхзначный код группы
	 ========================================================== */
const EXAMPLES: Record<string, GroupExample> = {
	'011': {
		products: 'Зерновые, рис, кукуруза, бобовые, масличные культуры',
		companies: [
			'Beidahuang',
			'Archer Daniels Midland (аграрные подразделения)'
		]
	},
	'014': {
		products: 'Молочное и мясное животноводство, птица, свиноводство',
		companies: [
			'Modern Dairy',
			'Muyuan Foods',
			'Wens Foodstuff'
		]
	},
	'021': {
		products: 'Лесовосстановление, выращивание и уход за лесом',
		companies: [
			'China Forestry Group',
			'Stora Enso (лесные активы)'
		]
	},
	'051': {
		products: 'Каменный и энергетический уголь, коксующийся уголь',
		companies: [
			'China Shenhua',
			'Peabody Energy'
		]
	},
	'061': {
		products: 'Сырая нефть',
		companies: [
			'Saudi Aramco',
			'PetroChina',
			'ExxonMobil (добывающие подразделения)'
		]
	},
	'062': {
		products: 'Природный газ и газовый конденсат',
		companies: [
			'Gazprom',
			'QatarEnergy',
			'ExxonMobil (добыча)'
		]
	},
	'071': {
		products: 'Железная руда и концентрат',
		companies: [
			'BHP',
			'Rio Tinto',
			'Vale'
		]
	},
	'072': {
		products: 'Медь, бокситы, никель, золото, цинк и другие руды',
		companies: [
			'Glencore',
			'Zijin Mining',
			'Freeport-McMoRan'
		]
	},
	'081': {
		products: 'Щебень, песок, гравий, строительный камень и глина',
		companies: [
			'Heidelberg Materials',
			'Holcim',
			'CRH'
		]
	},
	'091': {
		products: 'Бурение, геофизика и сервис нефтегазовых месторождений',
		companies: [
			'SLB',
			'Halliburton',
			'Baker Hughes'
		]
	},
	'101': {
		products: 'Мясо, птица, мясные полуфабрикаты',
		companies: [
			'JBS',
			'Tyson Foods',
			'WH Group'
		]
	},
	'105': {
		products: 'Молоко, сыр, масло, йогурты и сухое молоко',
		companies: [
			'Lactalis',
			'Danone',
			'Arla Foods'
		]
	},
	'107': {
		products: 'Хлеб, сахар, шоколад, готовые блюда, кофе и чай',
		companies: [
			'Mondelez',
			'Nestlé',
			'Ferrero',
			'JDE Peet’s'
		]
	},
	'110': {
		products: 'Пиво, вино, крепкий алкоголь, лимонады и вода',
		companies: [
			'AB InBev',
			'Heineken',
			'Diageo',
			'Coca-Cola'
		]
	},
	'201': {
		products: 'Основная химия, удобрения, полимеры и синтетический каучук',
		companies: [
			'BASF',
			'Dow',
			'SABIC',
			'Yara'
		]
	},
	'210': {
		products: 'Фармацевтические субстанции и лекарственные препараты',
		companies: [
			'Pfizer',
			'Novartis',
			'Roche',
			'Sanofi'
		]
	},
	'221': {
		products: 'Шины, камеры и резинотехнические изделия',
		companies: [
			'Michelin',
			'Bridgestone',
			'Continental'
		]
	},
	'222': {
		products: 'Пластиковая упаковка, трубы, профили и детали',
		companies: [
			'Berry Global',
			'Amcor',
			'Alpla'
		]
	},
	'231': {
		products: 'Листовое стекло, бутылки, стекловолокно',
		companies: [
			'AGC',
			'Corning',
			'Saint-Gobain'
		]
	},
	'239': {
		products: 'Цемент, кирпич, керамика, бетонные изделия, минеральная вата',
		companies: [
			'Holcim',
			'Knauf',
			'Saint-Gobain'
		]
	},
	'241': {
		products: 'Чугун, сталь, прокат и стальные полуфабрикаты',
		companies: [
			'ArcelorMittal',
			'Nippon Steel',
			'Baowu'
		]
	},
	'242': {
		products: 'Алюминий, медь, никель и драгоценные металлы',
		companies: [
			'Alcoa',
			'Rusal',
			'Aurubis',
			'Norsk Hydro'
		]
	},
	'252': {
		products: 'Стрелковое оружие, артиллерийские системы и боеприпасы',
		companies: [
			'Rheinmetall',
			'BAE Systems',
			'FN Herstal'
		]
	},
	'261': {
		products: 'Полупроводники, электронные платы, солнечные элементы и инверторы',
		companies: [
			'TSMC',
			'Samsung Electronics',
			'Infineon'
		]
	},
	'262': {
		products: 'Настольные ПК, ноутбуки, серверы и периферия',
		companies: [
			'Dell',
			'HP Inc.',
			'Lenovo'
		]
	},
	'263': {
		products: 'Маршрутизаторы, базовые станции и сетевое оборудование',
		companies: [
			'Ericsson',
			'Nokia',
			'Cisco'
		]
	},
	'271': {
		products: 'Электродвигатели, генераторы, трансформаторы и распределительные устройства',
		companies: [
			'ABB',
			'Siemens Energy',
			'Schneider Electric',
			'WEG'
		]
	},
	'272': {
		products: 'Аккумуляторы и батареи',
		companies: [
			'CATL',
			'LG Energy Solution',
			'Panasonic Energy'
		]
	},
	'281': {
		products: 'Насосы, компрессоры, турбины, клапаны и подъёмное оборудование',
		companies: [
			'Atlas Copco',
			'Flowserve',
			'Konecranes'
		]
	},
	'282': {
		products: 'Станки, сельхоз-, горнодобывающая и строительная техника',
		companies: [
			'Caterpillar',
			'John Deere',
			'Komatsu',
			'DMG Mori'
		]
	},
	'291': {
		products: 'Легковые автомобили, грузовики и автобусы',
		companies: [
			'Toyota',
			'Volkswagen',
			'Hyundai Motor',
			'Ford'
		]
	},
	'293': {
		products: 'Двигатели, трансмиссии, тормоза и автокомпоненты',
		companies: [
			'Bosch',
			'ZF',
			'Denso',
			'Magna'
		]
	},
	'301': {
		products: 'Морские суда, танкеры, контейнеровозы и прогулочные суда',
		companies: [
			'HD Hyundai Heavy Industries',
			'Fincantieri',
			'Damen'
		]
	},
	'302': {
		products: 'Локомотивы, вагоны и поезда',
		companies: [
			'Alstom',
			'Siemens Mobility',
			'CRRC'
		]
	},
	'303': {
		products: 'Самолёты, вертолёты и космические аппараты',
		companies: [
			'Airbus',
			'Boeing',
			'Embraer',
			'Lockheed Martin'
		]
	},
	'304': {
		products: 'Танки, БМП, БТР и другие боевые бронированные машины',
		companies: [
			'Rheinmetall',
			'KNDS',
			'BAE Systems'
		]
	},
	'310': {
		products: 'Мебель для дома, офиса и общественных пространств',
		companies: [
			'IKEA (производственная цепочка)',
			'Steelcase',
			'MillerKnoll'
		]
	},
	'321': {
		products: 'Ювелирные изделия и бижутерия',
		companies: [
			'Pandora',
			'Cartier',
			'Swarovski'
		]
	},
	'322': {
		products: 'Музыкальные инструменты',
		companies: [
			'Yamaha',
			'Fender',
			'Roland'
		]
	},
	'323': {
		products: 'Спортивные товары и инвентарь',
		companies: [
			'Nike',
			'Adidas',
			'Wilson'
		]
	},
	'324': {
		products: 'Игрушки, настольные игры и игровые наборы',
		companies: [
			'LEGO',
			'Mattel',
			'Hasbro'
		]
	},
	'325': {
		products: 'Медицинские и стоматологические инструменты, импланты и расходники',
		companies: [
			'Straumann',
			'Stryker',
			'Zimmer Biomet'
		]
	},
	'351': {
		products: 'Выработка электроэнергии, передача и распределение',
		companies: [
			'EDF',
			'NextEra Energy',
			'China Energy',
			'National Grid'
		]
	},
	'360': {
		products: 'Забор, очистка и подача воды',
		companies: [
			'Veolia',
			'Suez',
			'American Water'
		]
	},
	'381': {
		products: 'Сбор бытовых и опасных отходов',
		companies: [
			'Waste Management',
			'Republic Services',
			'Veolia'
		]
	},
	'382': {
		products: 'Обработка и обезвреживание отходов',
		companies: [
			'Veolia',
			'Clean Harbors',
			'Stericycle'
		]
	},
	'410': {
		products: 'Жилые дома, офисы, торговые и промышленные здания',
		companies: [
			'Vinci Construction',
			'Skanska',
			'Bouygues Construction'
		]
	},
	'421': {
		products: 'Автомобильные дороги, мосты и железнодорожные пути',
		companies: [
			'Vinci',
			'Ferrovial',
			'Strabag'
		]
	},
	'422': {
		products: 'Электросети, трубопроводы, водопроводные и телеком-сети',
		companies: [
			'Quanta Services',
			'MasTec',
			'Bechtel'
		]
	},
	'491': {
		products: 'Пассажирские и грузовые железнодорожные перевозки',
		companies: [
			'Deutsche Bahn',
			'SNCF',
			'Union Pacific'
		]
	},
	'492': {
		products: 'Автобусы, такси, междугородние и грузовые автоперевозки',
		companies: [
			'DSV',
			'FirstGroup',
			'крупные автоперевозчики'
		]
	},
	'501': {
		products: 'Морские и прибрежные пассажирские и грузовые перевозки',
		companies: [
			'Maersk',
			'MSC',
			'Carnival'
		]
	},
	'511': {
		products: 'Пассажирские авиаперевозки',
		companies: [
			'Lufthansa',
			'Delta Air Lines',
			'Emirates'
		]
	},
	'512': {
		products: 'Грузовые авиаперевозки',
		companies: [
			'FedEx Express',
			'UPS Airlines',
			'Cargolux'
		]
	},
	'521': {
		products: 'Складирование, холодильные склады и логистические терминалы',
		companies: [
			'DHL Supply Chain',
			'GXO Logistics'
		]
	},
	'532': {
		products: 'Экспресс-доставка и курьерские услуги',
		companies: [
			'DHL',
			'UPS',
			'FedEx'
		]
	},
	'551': {
		products: 'Гостиницы и краткосрочное размещение',
		companies: [
			'Marriott',
			'Hilton',
			'Accor'
		]
	},
	'561': {
		products: 'Рестораны, кафе и мобильное питание',
		companies: [
			'McDonald’s',
			'Yum! Brands',
			'Restaurant Brands International'
		]
	},
	'581': {
		products: 'Книги, газеты и журналы',
		companies: [
			'Penguin Random House',
			'RELX',
			'Axel Springer'
		]
	},
	'582': {
		products: 'Издание видеоигр и программного обеспечения',
		companies: [
			'Electronic Arts',
			'Ubisoft',
			'Microsoft (издательские подразделения)'
		]
	},
	'591': {
		products: 'Производство, постпродакшн и дистрибуция фильмов и телепрограмм',
		companies: [
			'Warner Bros. Discovery',
			'Sony Pictures',
			'Netflix Studios'
		]
	},
	'611': {
		products: 'Проводная, беспроводная и спутниковая связь; мобильные сети и интернет',
		companies: [
			'Deutsche Telekom',
			'Verizon',
			'China Mobile',
			'Eutelsat'
		]
	},
	'621': {
		products: 'Разработка программного обеспечения, приложений и видеоигр',
		companies: [
			'Microsoft',
			'SAP',
			'Ubisoft',
			'CD Projekt'
		]
	},
	'622': {
		products: 'IT-консалтинг, интеграция систем и управление IT-инфраструктурой',
		companies: [
			'Accenture',
			'TCS',
			'Capgemini',
			'Infosys'
		]
	},
	'629': {
		products: 'Сопровождение, интеграция и техническая поддержка IT-систем',
		companies: [
			'Kyndryl',
			'CGI',
			'DXC Technology'
		]
	},
	'631': {
		products: 'ЦОД, облачные вычисления, хостинг, обработка и хранение данных',
		companies: [
			'AWS',
			'Microsoft Azure',
			'Google Cloud',
			'Equinix'
		]
	},
	'639': {
		products: 'Поисковые порталы, агрегаторы и информационные сервисы',
		companies: [
			'Google Search',
			'Bing',
			'специализированные информационные порталы'
		]
	},
	'641': {
		products: 'Центральный банк и прочее денежное посредничество',
		companies: [
			'центральные банки',
			'коммерческие банки'
		]
	},
	'651': {
		products: 'Страхование жизни и прочие виды страхования',
		companies: [
			'Allianz',
			'AXA',
			'Zurich Insurance'
		]
	},
	'652': {
		products: 'Перестрахование',
		companies: [
			'Munich Re',
			'Swiss Re',
			'Hannover Re'
		]
	},
	'681': {
		products: 'Собственная и арендованная недвижимость',
		companies: [
			'Vonovia',
			'Prologis',
			'крупные владельцы недвижимости'
		]
	},
	'682': {
		products: 'Агентства недвижимости и услуги по управлению объектами',
		companies: [
			'CBRE',
			'JLL',
			'Savills'
		]
	},
	'691': {
		products: 'Юридические услуги',
		companies: [
			'DLA Piper',
			'Clifford Chance',
			'Baker McKenzie'
		]
	},
	'692': {
		products: 'Бухгалтерский учёт, аудит и налоговый консалтинг',
		companies: [
			'Deloitte',
			'PwC',
			'EY',
			'KPMG'
		]
	},
	'702': {
		products: 'Стратегический и управленческий консалтинг',
		companies: [
			'McKinsey',
			'BCG',
			'Bain'
		]
	},
	'711': {
		products: 'Архитектурное и инженерное проектирование',
		companies: [
			'WSP',
			'AECOM',
			'Arup'
		]
	},
	'712': {
		products: 'Испытания, сертификация и технический анализ',
		companies: [
			'SGS',
			'Bureau Veritas',
			'Intertek'
		]
	},
	'721': {
		products: 'НИОКР в естественных науках и инженерии',
		companies: [
			'Fraunhofer',
			'TNO',
			'корпоративные исследовательские центры'
		]
	},
	'731': {
		products: 'Рекламные агентства и медиапланирование',
		companies: [
			'WPP',
			'Publicis Groupe',
			'Omnicom'
		]
	},
	'732': {
		products: 'Маркетинговые исследования и опросы',
		companies: [
			'NielsenIQ',
			'Kantar',
			'Ipsos'
		]
	},
	'771': {
		products: 'Прокат и лизинг автомобилей',
		companies: [
			'Hertz',
			'Avis Budget Group',
			'Europcar'
		]
	},
	'773': {
		products: 'Аренда машин, оборудования и техники',
		companies: [
			'United Rentals',
			'Ashtead',
			'Aggreko'
		]
	},
	'781': {
		products: 'Подбор персонала и кадровые агентства',
		companies: [
			'Randstad',
			'Adecco',
			'ManpowerGroup'
		]
	},
	'791': {
		products: 'Туристические агентства и туроператоры',
		companies: [
			'TUI Group',
			'Flight Centre',
			'DERTOUR'
		]
	},
	'801': {
		products: 'Частная охрана и расследования',
		companies: [
			'Securitas',
			'G4S',
			'Allied Universal'
		]
	},
	'822': {
		products: 'Колл-центры и контактные центры',
		companies: [
			'Teleperformance',
			'Concentrix'
		]
	},
	'861': {
		products: 'Больничная деятельность',
		companies: [
			'HCA Healthcare',
			'Ramsay Health Care'
		]
	},
	'862': {
		products: 'Медицинская и стоматологическая практика',
		companies: [
			'частные клиники и стоматологические сети'
		]
	},
	'854': {
		products: 'Высшее образование',
		companies: [
			'университеты и институты'
		]
	},
	'902': {
		products: 'Театр, танец, музыка и исполнительское искусство',
		companies: [
			'Metropolitan Opera',
			'концертные и театральные организации'
		]
	},
	'912': {
		products: 'Музеи, коллекции и исторические памятники',
		companies: [
			'Louvre',
			'British Museum',
			'Smithsonian'
		]
	},
	'931': {
		products: 'Спортивные клубы и эксплуатация спортивных объектов',
		companies: [
			'спортивные клубы и операторы стадионов'
		]
	},
	'932': {
		products: 'Парки развлечений и досуговые услуги',
		companies: [
			'Disney Experiences',
			'Merlin Entertainments'
		]
	},
	'951': {
		products: 'Ремонт компьютеров и коммуникационного оборудования',
		companies: [
			'сервисные сети Apple',
			'Lenovo',
			'HP',
			'независимые ремонтные центры'
		]
	}
};
