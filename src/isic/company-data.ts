import type { CompanyInfo } from "./types";

export { COMPANY_DATA };


/* ==========================================================
	 COMPANY_DATA — справочник компаний.
	 Поля: name, country, cap (млрд долл. США),
				 estimated (true = оценка для непубличных),
				 isic_group (3-значный код группы ISIC).
	 Данные переиспользуются в разных контекстах.
	 ========================================================== */
const COMPANY_DATA: CompanyInfo[] = [

	// ===== Раздел A.01 — Растениеводство и животноводство =====

	// 011 Выращивание однолетних культур (зерновые, масличные и пр.)
	{ name: 'Cargill',                country: 'США',           cap: 80,   estimated: true, isic_group: '011' },
	{ name: 'Louis Dreyfus Company',  country: 'Нидерланды',    cap: 25,   estimated: true, isic_group: '011' },
	{ name: 'Archer Daniels Midland', country: 'США',           cap: 24,   isic_group: '011' },
	{ name: 'Bunge Global',           country: 'США',           cap: 12,   isic_group: '011' },
	{ name: 'GrainCorp',              country: 'Австралия',     cap: 2,    isic_group: '011' },
	{ name: 'Kernel Holding',         country: 'Люксембург / Украина', cap: 1.5, isic_group: '011' },

	// 012 Выращивание многолетних культур (плоды, цитрусовые, кофе, какао, орехи)
	{ name: 'Sucocitrico Cutrale',    country: 'Бразилия',      cap: 7,    estimated: true, isic_group: '012' },
	{ name: 'Olam Group',             country: 'Сингапур',      cap: 6,    estimated: true, isic_group: '012' },
	{ name: 'Fresh Del Monte Produce',country: 'США',           cap: 1.3,  isic_group: '012' },
	{ name: 'Dole plc',               country: 'Ирландия',      cap: 1.0,  isic_group: '012' },
	{ name: 'Limoneira',              country: 'США',           cap: 0.4,  isic_group: '012' },
	{ name: 'Select Harvests',        country: 'Австралия',     cap: 0.3,  isic_group: '012' },

	// 013 Размножение растений (семена, посадочный материал, питомники)
	{ name: 'Syngenta Group',         country: 'Швейцария',     cap: 35,   estimated: true, isic_group: '013' },
	{ name: 'Corteva Agriscience',    country: 'США',           cap: 27,   isic_group: '013' },
	{ name: 'KWS Saat',               country: 'Германия',      cap: 3.5,  isic_group: '013' },
	{ name: 'Limagrain',              country: 'Франция',       cap: 2.5,  estimated: true, isic_group: '013' },
	{ name: 'Sakata Seed',            country: 'Япония',        cap: 1.0,  isic_group: '013' },
	{ name: 'Takii Seed',             country: 'Япония',        cap: 0.5,  isic_group: '013' },

	// 014 Животноводство
	{ name: 'Muyuan Foods',           country: 'Китай',         cap: 32,   isic_group: '014' },
	{ name: 'Wens Foodstuff Group',   country: 'Китай',         cap: 14,   isic_group: '014' },
	{ name: 'WH Group',               country: 'Китай / Гонконг', cap: 8.5, isic_group: '014' },
	{ name: 'Fonterra',               country: 'Новая Зеландия', cap: 7,   estimated: true, isic_group: '014' },
	{ name: 'New Hope Liuhe',         country: 'Китай',         cap: 5,    isic_group: '014' },
	{ name: 'BRF S.A.',               country: 'Бразилия',      cap: 3.5,  isic_group: '014' },
	{ name: 'MHP',                    country: 'Украина / Нидерланды', cap: 1.2, isic_group: '014' },

	// 015 Смешанное сельское хозяйство — крупных публичных компаний нет (пусто)
	// 016 Вспомогательные услуги в сельском хозяйстве — крупных публичных компаний нет (пусто)
	// 017 Охота, разведение дичи — крупных публичных компаний нет (пусто)

	// ===== Раздел A.02 — Лесное хозяйство и лесозаготовки =====

	// 021 Лесоводство и прочая лесохозяйственная деятельность
	{ name: 'Weyerhaeuser',           country: 'США',           cap: 22,   isic_group: '021' },
	{ name: 'Stora Enso',             country: 'Финляндия',     cap: 10,   isic_group: '021' },
	{ name: 'UPM-Kymmene',            country: 'Финляндия',     cap: 9,    isic_group: '021' },
	{ name: 'SCA (Svenska Cellulosa)',country: 'Швеция',        cap: 8,    isic_group: '021' },
	{ name: 'Metsä Group',            country: 'Финляндия',     cap: 6,    estimated: true, isic_group: '021' },
	{ name: 'Rayonier',               country: 'США',           cap: 4,    isic_group: '021' },
	{ name: 'PotlatchDeltic',         country: 'США',           cap: 3,    isic_group: '021' },

	// 022 Лесозаготовки
	{ name: 'Södra',                  country: 'Швеция',        cap: 3.5,  estimated: true, isic_group: '022' },
	{ name: 'TimberWest',             country: 'Канада',        cap: 2,    estimated: true, isic_group: '022' },
	{ name: 'Interfor',               country: 'Канада',        cap: 1.5,  isic_group: '022' },
	{ name: 'Canfor',                 country: 'Канада',        cap: 1.2,  isic_group: '022' },
	{ name: 'Western Forest Products',country: 'Канада',        cap: 0.4,  isic_group: '022' },

	// 023 Сбор недревесных лесных продуктов — крупных публичных компаний нет (пусто)
	// 024 Вспомогательные услуги в лесном хозяйстве — крупных публичных компаний нет (пусто)

	// ===== Раздел A.03 — Рыболовство и аквакультура =====

	// 031 Рыболовство (вылов)
	{ name: 'Nissui (Nippon Suisan Kaisha)', country: 'Япония', cap: 4.5,  isic_group: '031' },
	{ name: 'Maruha Nichiro',         country: 'Япония',        cap: 2.5,  isic_group: '031' },
	{ name: 'Dongwon Industries',     country: 'Республика Корея', cap: 1.0, isic_group: '031' },
	{ name: 'American Seafoods',      country: 'США',           cap: 0.8,  estimated: true, isic_group: '031' },
	{ name: 'Aker BioMarine',         country: 'Норвегия',      cap: 0.5,  isic_group: '031' },
	{ name: 'TASA (Tecnológica de Alimentos)', country: 'Перу', cap: 0.5,  estimated: true, isic_group: '031' },

	// 032 Аквакультура
	{ name: 'Mowi',                   country: 'Норвегия',      cap: 10,   isic_group: '032' },
	{ name: 'Charoen Pokphand Foods (CPF)', country: 'Таиланд', cap: 7,    isic_group: '032' },
	{ name: 'SalMar',                 country: 'Норвегия',      cap: 4.5,  isic_group: '032' },
	{ name: 'Lerøy Seafood',          country: 'Норвегия',      cap: 2.0,  isic_group: '032' },
	{ name: 'Bakkafrost',             country: 'Фарерские острова', cap: 2.0, isic_group: '032' },
	{ name: 'Cermaq',                 country: 'Норвегия',      cap: 1.5,  estimated: true, isic_group: '032' },
	{ name: 'Grieg Seafood',          country: 'Норвегия',      cap: 0.6,  isic_group: '032' },

	// B051 Каменный и энергетический уголь, коксующийся уголь
	{ name: 'CHN Energy Investment Group', country: 'Китай', cap: 180, estimated: true, isic_group: '051' },
	{ name: 'China Shenhua Energy', country: 'Китай', cap: 158, estimated: false, isic_group: '051' },
	{ name: 'Shandong Energy Group', country: 'Китай', cap: 65, estimated: true, isic_group: '051' },
	{ name: 'Shaanxi Coal Industry', country: 'Китай', cap: 41, estimated: false, isic_group: '051' },
	{ name: 'Jinneng Holding Group', country: 'Китай', cap: 35, estimated: true, isic_group: '051' },
	{ name: 'China Coal Energy', country: 'Китай', cap: 28, estimated: false, isic_group: '051' },
	{ name: 'Coal India', country: 'Индия', cap: 26, estimated: false, isic_group: '051' },

	// B052 Добыча бурого угля
	{ name: 'Inner Mongolia Dian Tou Energy', country: 'Китай', cap: 12.2, estimated: false, isic_group: '052' },
	{ name: 'Adaro Andalan Indonesia', country: 'Индонезия', cap: 5.2, estimated: false, isic_group: '052' },
	{ name: 'NLC India', country: 'Индия', cap: 3.9, estimated: false, isic_group: '052' },
	{ name: 'LEAG (Lausitz Energie Bergbau)', country: 'Германия', cap: 3.2, estimated: true, isic_group: '052' },
	{ name: 'Bumi Resources', country: 'Индонезия', cap: 2.8, estimated: false, isic_group: '052' },
	{ name: 'MIBRAG', country: 'Германия', cap: 0.7, estimated: true, isic_group: '052' },
	{ name: 'NACCO Industries', country: 'США', cap: 0.3, estimated: false, isic_group: '052' },

	// B061 Добыча сырой нефти
	{ name: 'Saudi Aramco', country: 'Саудовская Аравия', cap: 1702, estimated: false, isic_group: '061' },
	{ name: 'ExxonMobil', country: 'США', cap: 693, estimated: false, isic_group: '061' },
	{ name: 'Chevron', country: 'США', cap: 422, estimated: false, isic_group: '061' },
	{ name: 'CNPC (China National Petroleum Corp.)', country: 'Китай', cap: 340, estimated: true, isic_group: '061' },
	{ name: 'ADNOC (Abu Dhabi National Oil Co.)', country: 'ОАЭ', cap: 300, estimated: true, isic_group: '061' },
	{ name: 'Shell', country: 'Великобритания', cap: 279, estimated: false, isic_group: '061' },
	{ name: 'PetroChina', country: 'Китай', cap: 241, estimated: false, isic_group: '061' },

	// B062 Добыча природного газа
	{ name: 'QatarEnergy', country: 'Катар', cap: 250, estimated: true, isic_group: '062' },
	{ name: 'ADNOC Gas', country: 'ОАЭ', cap: 72, estimated: false, isic_group: '062' },
	{ name: 'Новатэк', country: 'Россия', cap: 42, estimated: false, isic_group: '062' },
	{ name: 'Woodside Energy', country: 'Австралия', cap: 40, estimated: false, isic_group: '062' },
	{ name: 'Газпром', country: 'Россия', cap: 34, estimated: false, isic_group: '062' },
	{ name: 'EQT Corporation', country: 'США', cap: 33, estimated: false, isic_group: '062' },
	{ name: 'Expand Energy', country: 'США', cap: 24, estimated: false, isic_group: '062' },

	// B071 Добыча железных руд
	{ name: 'Rio Tinto', country: 'Великобритания', cap: 145, estimated: false, isic_group: '071' },
	{ name: 'Vale', country: 'Бразилия', cap: 49, estimated: false, isic_group: '071' },
	{ name: 'Fortescue', country: 'Австралия', cap: 32, estimated: false, isic_group: '071' },
	{ name: 'Hancock Prospecting', country: 'Австралия', cap: 28, estimated: true, isic_group: '071' },
	{ name: 'NMDC', country: 'Индия', cap: 7.4, estimated: false, isic_group: '071' },
	{ name: 'CSN Mineração', country: 'Бразилия', cap: 5.4, estimated: false, isic_group: '071' },
	{ name: 'Kumba Iron Ore', country: 'ЮАР', cap: 4.5, estimated: false, isic_group: '071' },

	// B072 Добыча руд цветных металлов
	{ name: 'BHP Group', country: 'Австралия', cap: 205, estimated: false, isic_group: '072' },
	{ name: 'Southern Copper', country: 'США', cap: 148, estimated: false, isic_group: '072' },
	{ name: 'Newmont', country: 'США', cap: 121, estimated: false, isic_group: '072' },
	{ name: 'Zijin Mining', country: 'Китай', cap: 116, estimated: false, isic_group: '072' },
	{ name: 'Freeport-McMoRan', country: 'США', cap: 90, estimated: false, isic_group: '072' },
	{ name: 'Agnico Eagle Mines', country: 'Канада', cap: 93, estimated: false, isic_group: '072' },
	{ name: 'Codelco', country: 'Чили', cap: 65, estimated: true, isic_group: '072' },

	// B081 Добыча камня, песка и глины
	{ name: 'Martin Marietta Materials', country: 'США', cap: 37.8, estimated: false, isic_group: '081' },
	{ name: 'Vulcan Materials', country: 'США', cap: 36.6, estimated: false, isic_group: '081' },
	{ name: 'United States Lime & Minerals', country: 'США', cap: 3.4, estimated: false, isic_group: '081' },
	{ name: 'SigmaRoc', country: 'Великобритания', cap: 1.5, estimated: false, isic_group: '081' },
	{ name: 'Breedon Group', country: 'Великобритания', cap: 1.4, estimated: false, isic_group: '081' },
	{ name: 'Lhoist Group', country: 'Бельгия', cap: 5.5, estimated: true, isic_group: '081' },
	{ name: 'Carmeuse', country: 'Бельгия', cap: 2.2, estimated: true, isic_group: '081' },

	// B089 Добыча прочих полезных ископаемых
	{ name: 'Nutrien', country: 'Канада', cap: 33.9, estimated: false, isic_group: '089' },
	{ name: 'OCP Group', country: 'Марокко', cap: 28.0, estimated: true, isic_group: '089' },
	{ name: 'SQM (Sociedad Química y Minera)', country: 'Чили', cap: 17.2, estimated: false, isic_group: '089' },
	{ name: 'Qinghai Salt Lake Industry', country: 'Китай', cap: 16.0, estimated: false, isic_group: '089' },
	{ name: 'ФосАгро', country: 'Россия', cap: 13.0, estimated: false, isic_group: '089' },
	{ name: 'Jordan Phosphate Mines', country: 'Иордания', cap: 9.7, estimated: false, isic_group: '089' },
	{ name: 'The Mosaic Company', country: 'США', cap: 7.3, estimated: false, isic_group: '089' },

	// B091 Предоставление услуг в области добычи нефти и природного газа
	{ name: 'SLB (Schlumberger)', country: 'США', cap: 75.1, estimated: false, isic_group: '091' },
	{ name: 'Baker Hughes', country: 'США', cap: 48.5, estimated: false, isic_group: '091' },
	{ name: 'Halliburton', country: 'США', cap: 27.1, estimated: false, isic_group: '091' },
	{ name: 'ADNOC Drilling', country: 'ОАЭ', cap: 25.4, estimated: false, isic_group: '091' },
	{ name: 'TechnipFMC', country: 'Великобритания', cap: 24.9, estimated: false, isic_group: '091' },
	{ name: 'Subsea 7', country: 'Люксембург', cap: 10.0, estimated: false, isic_group: '091' },
	{ name: 'Saipem', country: 'Италия', cap: 9.4, estimated: false, isic_group: '091' },

	// B099 Предоставление прочих услуг в области горнодобывающей промышленности
	{ name: 'Thiess Group', country: 'Австралия', cap: 4.5, estimated: true, isic_group: '099' },
	{ name: 'Byrnecut Group', country: 'Австралия', cap: 2.2, estimated: true, isic_group: '099' },
	{ name: 'NRW Holdings', country: 'Австралия', cap: 2.0, estimated: false, isic_group: '099' },
	{ name: 'Perenti', country: 'Австралия', cap: 1.3, estimated: false, isic_group: '099' },
	{ name: 'Macmahon Holdings', country: 'Австралия', cap: 0.9, estimated: false, isic_group: '099' },
	{ name: 'Major Drilling Group', country: 'Канада', cap: 0.9, estimated: false, isic_group: '099' },
	{ name: 'Capital Limited', country: 'Великобритания', cap: 0.3, estimated: false, isic_group: '099' },

	// C101 Переработка и консервирование мяса
	{ name: 'JBS', country: 'Бразилия', cap: 41.9, estimated: false, isic_group: '101' },
	{ name: 'Muyuan Foods', country: 'Китай', cap: 39.6, estimated: false, isic_group: '101' },
	{ name: 'Tyson Foods', country: 'США', cap: 21.1, estimated: false, isic_group: '101' },
	{ name: 'Wens Foodstuff Group', country: 'Китай', cap: 16.6, estimated: false, isic_group: '101' },
	{ name: 'Hormel Foods', country: 'США', cap: 12.1, estimated: false, isic_group: '101' },
	{ name: 'WH Group', country: 'Гонконг', cap: 9.9, estimated: false, isic_group: '101' },
	{ name: 'Smithfield Foods', country: 'США', cap: 7.8, estimated: false, isic_group: '101' },

	// C102 Переработка и консервирование рыбы, ракообразных и моллюсков
	{ name: 'Mowi', country: 'Норвегия', cap: 12.4, estimated: false, isic_group: '102' },
	{ name: 'SalMar', country: 'Норвегия', cap: 8.3, estimated: false, isic_group: '102' },
	{ name: 'Bakkafrost', country: 'Фарерские острова', cap: 2.7, estimated: false, isic_group: '102' },
	{ name: 'Lerøy Seafood Group', country: 'Норвегия', cap: 2.6, estimated: false, isic_group: '102' },
	{ name: 'Nissui Corporation', country: 'Япония', cap: 2.5, estimated: false, isic_group: '102' },
	{ name: 'Trident Seafoods', country: 'США', cap: 2.2, estimated: true, isic_group: '102' },
	{ name: 'Austevoll Seafood', country: 'Норвегия', cap: 1.9, estimated: false, isic_group: '102' },

	 // C103 Переработка и консервирование фруктов и овощей
	{ name: 'McCain Foods', country: 'Канада', cap: 14.0, estimated: true, isic_group: '103' },
	{ name: 'Lamb Weston', country: 'США', cap: 7.8, estimated: false, isic_group: '103' },
	{ name: 'Conagra Brands', country: 'США', cap: 7.3, estimated: false, isic_group: '103' },
	{ name: 'The Campbell\'s Company', country: 'США', cap: 6.7, estimated: false, isic_group: '103' },
	{ name: 'J.R. Simplot', country: 'США', cap: 5.5, estimated: true, isic_group: '103' },
	{ name: 'Kagome', country: 'Япония', cap: 1.6, estimated: false, isic_group: '103' },
	{ name: 'Dole plc', country: 'Ирландия', cap: 1.3, estimated: false, isic_group: '103' },

	// C104 Производство растительных и животных масел и жиров
	{ name: 'Archer Daniels Midland (ADM)', country: 'США', cap: 33.8, estimated: false, isic_group: '104' },
	{ name: 'Louis Dreyfus Company', country: 'Нидерланды', cap: 25.0, estimated: true, isic_group: '104' },
	{ name: 'Bunge Global', country: 'США', cap: 19.1, estimated: false, isic_group: '104' },
	{ name: 'Wilmar International', country: 'Сингапур', cap: 14.4, estimated: false, isic_group: '104' },
	{ name: 'SD Guthrie', country: 'Малайзия', cap: 10.6, estimated: false, isic_group: '104' },
	{ name: 'IOI Corporation', country: 'Малайзия', cap: 6.9, estimated: false, isic_group: '104' },
	{ name: 'AAK', country: 'Швеция', cap: 4.6, estimated: false, isic_group: '104' },

	// C105 Производство молочных продуктов и мороженого
	{ name: 'Danone', country: 'Франция', cap: 52.2, estimated: false, isic_group: '105' },
	{ name: 'Lactalis', country: 'Франция', cap: 38.0, estimated: true, isic_group: '105' },
	{ name: 'Yili Group', country: 'Китай', cap: 30.1, estimated: false, isic_group: '105' },
	{ name: 'Dairy Farmers of America', country: 'США', cap: 15.0, estimated: true, isic_group: '105' },
	{ name: 'China Mengniu Dairy', country: 'Китай', cap: 12.8, estimated: false, isic_group: '105' },
	{ name: 'Saputo', country: 'Канада', cap: 12.4, estimated: false, isic_group: '105' },
	{ name: 'The Magnum Ice Cream Company', country: 'Нидерланды', cap: 12.3, estimated: false, isic_group: '105' },

	// C106 Производство продуктов мукомольной промышленности и крахмала
	{ name: 'General Mills', country: 'США', cap: 18.7, estimated: false, isic_group: '106' },
	{ name: 'Ingredion', country: 'США', cap: 6.0, estimated: false, isic_group: '106' },
	{ name: 'Roquette Frères', country: 'Франция', cap: 5.5, estimated: true, isic_group: '106' },
	{ name: 'Nisshin Seifun Group', country: 'Япония', cap: 4.3, estimated: false, isic_group: '106' },
	{ name: 'Tate & Lyle', country: 'Великобритания', cap: 3.3, estimated: false, isic_group: '106' },
	{ name: 'Ardent Mills', country: 'США', cap: 3.0, estimated: true, isic_group: '106' },
	{ name: 'GrainCorp', country: 'Австралия', cap: 1.1, estimated: false, isic_group: '106' },

	// C107 Производство хлебобулочных и мучных изделий
	{ name: 'Grupo Bimbo', country: 'Мексика', cap: 16.5, estimated: false, isic_group: '107' },
	{ name: 'Barilla Group', country: 'Италия', cap: 7.5, estimated: true, isic_group: '107' },
	{ name: 'Yamazaki Baking', country: 'Япония', cap: 5.2, estimated: false, isic_group: '107' },
	{ name: 'Pladis', country: 'Великобритания', cap: 4.5, estimated: true, isic_group: '107' },
	{ name: 'Lotus Bakeries', country: 'Бельгия', cap: 9.8, estimated: false, isic_group: '107' },
	{ name: 'Flowers Foods', country: 'США', cap: 1.5, estimated: false, isic_group: '107' },
	{ name: 'Aryzta', country: 'Швейцария', cap: 1.8, estimated: false, isic_group: '107' },

	// C108 Производство прочих пищевых продуктов (сахар, шоколад, приправы, готовые блюда)
	{ name: 'Nestlé', country: 'Швейцария', cap: 270.1, estimated: false, isic_group: '108' },
	{ name: 'Mondelēz International', country: 'США', cap: 84.4, estimated: false, isic_group: '108' },
	{ name: 'Mars, Incorporated', country: 'США', cap: 75.0, estimated: true, isic_group: '108' },
	{ name: 'The Hershey Company', country: 'США', cap: 34.9, estimated: false, isic_group: '108' },
	{ name: 'The Kraft Heinz Company', country: 'США', cap: 29.7, estimated: false, isic_group: '108' },
	{ name: 'Kellanova', country: 'США', cap: 29.0, estimated: false, isic_group: '108' },
	{ name: 'Ferrero Group', country: 'Италия', cap: 28.0, estimated: true, isic_group: '108' },

	// C109 Производство готовых кормов для животных
	{ name: 'Guangdong Haid Group', country: 'Китай', cap: 12.1, estimated: false, isic_group: '109' },
	{ name: 'Nutreco', country: 'Нидерланды', cap: 8.5, estimated: true, isic_group: '109' },
	{ name: 'New Hope Liuhe', country: 'Китай', cap: 5.3, estimated: false, isic_group: '109' },
	{ name: 'Charoen Pokphand Foods', country: 'Таиланд', cap: 4.9, estimated: false, isic_group: '109' },
	{ name: 'Royal De Heus', country: 'Нидерланды', cap: 4.8, estimated: true, isic_group: '109' },
	{ name: 'Freshpet', country: 'США', cap: 3.1, estimated: false, isic_group: '109' },
	{ name: 'Central Garden & Pet', country: 'США', cap: 3.0, estimated: false, isic_group: '109' },

	// C110 Производство напитков
	{ name: 'The Coca-Cola Company', country: 'США', cap: 419.2, estimated: false, isic_group: '110' },
	{ name: 'Kweichow Moutai', country: 'Китай', cap: 268.8, estimated: false, isic_group: '110' },
	{ name: 'PepsiCo', country: 'США', cap: 193.9, estimated: false, isic_group: '110' },
	{ name: 'Anheuser-Busch InBev', country: 'Бельгия', cap: 165.1, estimated: false, isic_group: '110' },
	{ name: 'Monster Beverage', country: 'США', cap: 89.2, estimated: false, isic_group: '110' },
	{ name: 'Nongfu Spring', country: 'Китай', cap: 65.0, estimated: false, isic_group: '110' },
	{ name: 'Diageo', country: 'Великобритания', cap: 55.7, estimated: false, isic_group: '110' },

	// C120 Производство табачных изделий
	{ name: 'China National Tobacco Corporation', country: 'Китай', cap: 650.0, estimated: true, isic_group: '120' },
	{ name: 'Philip Morris International', country: 'США', cap: 290.2, estimated: false, isic_group: '120' },
	{ name: 'British American Tobacco', country: 'Великобритания', cap: 120.5, estimated: false, isic_group: '120' },
	{ name: 'Altria Group', country: 'США', cap: 116.0, estimated: false, isic_group: '120' },
	{ name: 'Japan Tobacco', country: 'Япония', cap: 79.4, estimated: false, isic_group: '120' },
	{ name: 'ITC Limited', country: 'Индия', cap: 34.9, estimated: false, isic_group: '120' },
	{ name: 'Imperial Brands', country: 'Великобритания', cap: 25.8, estimated: false, isic_group: '120' },

	// C131 Прядение, ткачество и отделка текстиля
	{ name: 'Toray Industries', country: 'Япония', cap: 12.8, estimated: false, isic_group: '131' },
	{ name: 'K.P.R. Mill', country: 'Индия', cap: 4.5, estimated: false, isic_group: '131' },
	{ name: 'Coats Group', country: 'Великобритания', cap: 2.0, estimated: false, isic_group: '131' },
	{ name: 'Vardhman Textiles', country: 'Индия', cap: 1.9, estimated: false, isic_group: '131' },
	{ name: 'Arvind', country: 'Индия', cap: 1.7, estimated: false, isic_group: '131' },
	{ name: 'Formosa Taffeta', country: 'Тайвань', cap: 1.1, estimated: false, isic_group: '131' },
	{ name: 'Luthai Textile', country: 'Китай', cap: 0.7, estimated: false, isic_group: '131' },

	// C139 Производство прочих текстильных изделий (трикотажное полотно, ковры, технический текстиль)
	{ name: 'Mohawk Industries', country: 'США', cap: 8.9, estimated: false, isic_group: '139' },
	{ name: 'Shenzhou International', country: 'Китай', cap: 8.0, estimated: false, isic_group: '139' },
	{ name: 'Shaw Industries', country: 'США', cap: 6.5, estimated: true, isic_group: '139' },
	{ name: 'Eclat Textile', country: 'Тайвань', cap: 3.0, estimated: false, isic_group: '139' },
	{ name: 'Welspun Living', country: 'Индия', cap: 2.6, estimated: false, isic_group: '139' },
	{ name: 'Albany International', country: 'США', cap: 1.9, estimated: false, isic_group: '139' },
	{ name: 'Interface', country: 'США', cap: 1.8, estimated: false, isic_group: '139' },

	// C141 Производство одежды, кроме одежды из меха
	{ name: 'Ralph Lauren Corporation', country: 'США', cap: 24.4, estimated: false, isic_group: '141' },
	{ name: 'Moncler', country: 'Италия', cap: 14.6, estimated: false, isic_group: '141' },
	{ name: 'Lululemon Athletica', country: 'Канада', cap: 13.5, estimated: false, isic_group: '141' },
	{ name: 'Levi Strauss & Co.', country: 'США', cap: 9.3, estimated: false, isic_group: '141' },
	{ name: 'Gildan Activewear', country: 'Канада', cap: 7.6, estimated: false, isic_group: '141' },
	{ name: 'PVH Corp.', country: 'США', cap: 5.5, estimated: false, isic_group: '141' },
	{ name: 'Kontoor Brands', country: 'США', cap: 4.4, estimated: false, isic_group: '141' },

	// C142 Производство изделий из меха
	{ name: 'Saga Furs', country: 'Финляндия', cap: 0.06, estimated: false, isic_group: '142' },
	{ name: 'NAFA (North American Fur Auctions)', country: 'Канада', cap: 0.04, estimated: true, isic_group: '142' },
	{ name: 'Kopenhagen Fur', country: 'Дания', cap: 0.03, estimated: true, isic_group: '142' },

	// C143 Производство вязаных и трикотажных изделий одежды
	{ name: 'Brunello Cucinelli', country: 'Италия', cap: 6.5, estimated: false, isic_group: '143' },
	{ name: 'Crystal International Group', country: 'Гонконг', cap: 2.9, estimated: false, isic_group: '143' },
	{ name: 'Makalot Industrial', country: 'Тайвань', cap: 1.6, estimated: false, isic_group: '143' },
	{ name: 'Regina Miracle International', country: 'Гонконг', cap: 0.4, estimated: false, isic_group: '143' },
	{ name: 'Johnstons of Elgin', country: 'Великобритания', cap: 0.2, estimated: true, isic_group: '143' },

	// C151 Дубление и отделка кожи; производство чемоданов, сумок и шорно-седельных изделий
	{ name: 'LVMH Moët Hennessy Louis Vuitton', country: 'Франция', cap: 222.7, estimated: false, isic_group: '151' },
	{ name: 'Hermès International', country: 'Франция', cap: 153.9, estimated: false, isic_group: '151' },
	{ name: 'Christian Dior SE', country: 'Франция', cap: 87.9, estimated: false, isic_group: '151' },
	{ name: 'Kering', country: 'Франция', cap: 24.7, estimated: false, isic_group: '151' },
	{ name: 'Tapestry', country: 'США', cap: 24.0, estimated: false, isic_group: '151' },
	{ name: 'Prada', country: 'Италия', cap: 12.2, estimated: false, isic_group: '151' },
	{ name: 'Samsonite International', country: 'Гонконг', cap: 2.3, estimated: false, isic_group: '151' },

	// C152 Производство обуви
	{ name: 'Nike', country: 'США', cap: 57.9, estimated: false, isic_group: '152' },
	{ name: 'Adidas', country: 'Германия', cap: 34.4, estimated: false, isic_group: '152' },
	{ name: 'Anta Sports Products', country: 'Китай', cap: 28.3, estimated: false, isic_group: '152' },
	{ name: 'ASICS Corporation', country: 'Япония', cap: 22.7, estimated: false, isic_group: '152' },
	{ name: 'Deckers Outdoor', country: 'США', cap: 11.4, estimated: false, isic_group: '152' },
	{ name: 'On Holding', country: 'Швейцария', cap: 11.3, estimated: false, isic_group: '152' },
	{ name: 'Crocs', country: 'США', cap: 6.9, estimated: false, isic_group: '152' },

	// C161 Распиловка и строгание древесины
	{ name: 'Svenska Cellulosa Aktiebolaget (SCA)', country: 'Швеция', cap: 8.8, estimated: false, isic_group: '161' },
	{ name: 'West Fraser Timber', country: 'Канада', cap: 5.2, estimated: false, isic_group: '161' },
	{ name: 'Holmen', country: 'Швеция', cap: 4.7, estimated: false, isic_group: '161' },
	{ name: 'PotlatchDeltic', country: 'США', cap: 3.2, estimated: false, isic_group: '161' },
	{ name: 'Stella-Jones', country: 'Канада', cap: 2.6, estimated: false, isic_group: '161' },
	{ name: 'Canfor Corporation', country: 'Канада', cap: 1.2, estimated: false, isic_group: '161' },
	{ name: 'Interfor Corporation', country: 'Канада', cap: 0.6, estimated: false, isic_group: '161' },

	// C162 Производство изделий из дерева, пробки, соломки и материалов для плетения
	{ name: 'Kronospan', country: 'Австрия', cap: 7.0, estimated: true, isic_group: '162' },
	{ name: 'EGGER Group', country: 'Австрия', cap: 5.6, estimated: true, isic_group: '162' },
	{ name: 'Louisiana-Pacific', country: 'США', cap: 5.5, estimated: false, isic_group: '162' },
	{ name: 'UFP Industries', country: 'США', cap: 4.4, estimated: false, isic_group: '162' },
	{ name: 'Boise Cascade', country: 'США', cap: 2.4, estimated: false, isic_group: '162' },
	{ name: 'Roseburg Forest Products', country: 'США', cap: 2.0, estimated: true, isic_group: '162' },
	{ name: 'SWISS KRONO Group', country: 'Швейцария', cap: 1.8, estimated: true, isic_group: '162' },

	// C170 Производство бумаги и бумажных изделий
	{ name: 'Smurfit Westrock', country: 'Ирландия', cap: 22.9, estimated: false, isic_group: '170' },
	{ name: 'Packaging Corporation of America', country: 'США', cap: 22.3, estimated: false, isic_group: '170' },
	{ name: 'Klabin', country: 'Бразилия', cap: 19.3, estimated: false, isic_group: '170' },
	{ name: 'International Paper', country: 'США', cap: 18.8, estimated: false, isic_group: '170' },
	{ name: 'UPM-Kymmene', country: 'Финляндия', cap: 12.9, estimated: false, isic_group: '170' },
	{ name: 'Suzano', country: 'Бразилия', cap: 12.1, estimated: false, isic_group: '170' },
	{ name: 'Stora Enso', country: 'Финляндия', cap: 8.3, estimated: false, isic_group: '170' },

	// C181 Полиграфическая деятельность и предоставление услуг в этой области
	{ name: 'TOPPAN Holdings', country: 'Япония', cap: 7.3, estimated: false, isic_group: '181' },
	{ name: 'Dai Nippon Printing', country: 'Япония', cap: 7.2, estimated: false, isic_group: '181' },
	{ name: 'R.R. Donnelley & Sons', country: 'США', cap: 3.5, estimated: true, isic_group: '181' },
	{ name: 'Cimpress', country: 'Ирландия', cap: 1.4, estimated: false, isic_group: '181' },
	{ name: 'Taylor Corporation', country: 'США', cap: 1.2, estimated: true, isic_group: '181' },
	{ name: 'Quad/Graphics', country: 'США', cap: 0.4, estimated: false, isic_group: '181' },
	{ name: 'Transcontinental', country: 'Канада', cap: 0.3, estimated: false, isic_group: '181' },

	// C182 Тиражирование записанных носителей информации
	{ name: 'Sony DADC', country: 'Австрия', cap: 0.4, estimated: true, isic_group: '182' },
	{ name: 'GZ Media', country: 'Чехия', cap: 0.3, estimated: true, isic_group: '182' },
	{ name: 'Optimal Media', country: 'Германия', cap: 0.2, estimated: true, isic_group: '182' },
	{ name: 'MPO International', country: 'Франция', cap: 0.1, estimated: true, isic_group: '182' },

	// C191 Производство кокса и коксохимической продукции
	{ name: 'Shanxi Meijin Energy', country: 'Китай', cap: 2.1, estimated: false, isic_group: '191' },
	{ name: 'Shanxi Coking Co.', country: 'Китай', cap: 1.5, estimated: false, isic_group: '191' },
	{ name: 'China Risun Group', country: 'Китай', cap: 0.9, estimated: false, isic_group: '191' },
	{ name: 'SunCoke Energy', country: 'США', cap: 0.9, estimated: false, isic_group: '191' },
	{ name: 'Кокс (Промышленно-металлургический холдинг)', country: 'Россия', cap: 0.8, estimated: true, isic_group: '191' },
	{ name: 'Shaanxi Heimao Coking', country: 'Китай', cap: 0.8, estimated: false, isic_group: '191' },
	{ name: 'OKK Koksovny', country: 'Чехия', cap: 0.2, estimated: true, isic_group: '191' },

	// C192 Производство нефтепродуктов и ископаемого топлива
	{ name: 'Reliance Industries', country: 'Индия', cap: 191.9, estimated: false, isic_group: '192' },
	{ name: 'Marathon Petroleum', country: 'США', cap: 106.9, estimated: false, isic_group: '192' },
	{ name: 'Phillips 66', country: 'США', cap: 102.6, estimated: false, isic_group: '192' },
	{ name: 'Valero Energy', country: 'США', cap: 99.5, estimated: false, isic_group: '192' },
	{ name: 'Sinopec (China Petroleum & Chemical Corp.)', country: 'Китай', cap: 91.5, estimated: false, isic_group: '192' },
	{ name: 'Neste', country: 'Финляндия', cap: 23.1, estimated: false, isic_group: '192' },
	{ name: 'Indian Oil Corporation', country: 'Индия', cap: 21.2, estimated: false, isic_group: '192' },

	// C201 Производство основных химических веществ, удобрений, пластмасс и синтетического каучука в первичных формах
	{ name: 'Linde', country: 'Ирландия', cap: 224.1, estimated: false, isic_group: '201' },
	{ name: 'Air Liquide', country: 'Франция', cap: 121.3, estimated: false, isic_group: '201' },
	{ name: 'Shin-Etsu Chemical', country: 'Япония', cap: 74.1, estimated: false, isic_group: '201' },
	{ name: 'Air Products and Chemicals', country: 'США', cap: 68.8, estimated: false, isic_group: '201' },
	{ name: 'BASF', country: 'Германия', cap: 53.0, estimated: false, isic_group: '201' },
	{ name: 'SABIC (Saudi Basic Industries)', country: 'Саудовская Аравия', cap: 37.3, estimated: false, isic_group: '201' },
	{ name: 'Wanhua Chemical Group', country: 'Китай', cap: 32.8, estimated: false, isic_group: '201' },

	// C202 Производство прочих химических продуктов (бытовая химия, косметика, краски, агрохимия)
	{ name: 'Procter & Gamble', country: 'США', cap: 387.8, estimated: false, isic_group: '202' },
	{ name: 'L\'Oréal', country: 'Франция', cap: 252.5, estimated: false, isic_group: '202' },
	{ name: 'Unilever', country: 'Великобритания', cap: 145.0, estimated: false, isic_group: '202' },
	{ name: 'Ecolab', country: 'США', cap: 86.8, estimated: false, isic_group: '202' },
	{ name: 'The Sherwin-Williams Company', country: 'США', cap: 86.0, estimated: false, isic_group: '202' },
	{ name: 'Corteva', country: 'США', cap: 49.8, estimated: false, isic_group: '202' },
	{ name: 'Sika AG', country: 'Швейцария', cap: 31.0, estimated: false, isic_group: '202' },

	// C203 Производство искусственных и синтетических волокон
	{ name: 'Hengli Petrochemical', country: 'Китай', cap: 17.5, estimated: false, isic_group: '203' },
	{ name: 'Rongsheng Petrochemical', country: 'Китай', cap: 17.6, estimated: false, isic_group: '203' },
	{ name: 'Tongkun Group', country: 'Китай', cap: 7.6, estimated: false, isic_group: '203' },
	{ name: 'Xinfengming Group', country: 'Китай', cap: 4.5, estimated: false, isic_group: '203' },
	{ name: 'Indorama Ventures', country: 'Таиланд', cap: 3.8, estimated: false, isic_group: '203' },
	{ name: 'Hyosung TNC', country: 'Южная Корея', cap: 1.1, estimated: false, isic_group: '203' },

	// C210 Производство основных фармацевтических продуктов и фармацевтических препаратов
	{ name: 'Eli Lilly and Company', country: 'США', cap: 1119.0, estimated: false, isic_group: '210' },
	{ name: 'Johnson & Johnson', country: 'США', cap: 651.0, estimated: false, isic_group: '210' },
	{ name: 'AbbVie', country: 'США', cap: 468.0, estimated: false, isic_group: '210' },
	{ name: 'Roche Holding', country: 'Швейцария', cap: 378.0, estimated: false, isic_group: '210' },
	{ name: 'Merck & Co.', country: 'США', cap: 376.0, estimated: false, isic_group: '210' },
	{ name: 'Novartis', country: 'Швейцария', cap: 302.0, estimated: false, isic_group: '210' },
	{ name: 'AstraZeneca', country: 'Великобритания', cap: 257.0, estimated: false, isic_group: '210' },

	// C221 Производство резиновых изделий
	{ name: 'Bridgestone', country: 'Япония', cap: 33.8, estimated: false, isic_group: '221' },
	{ name: 'Michelin', country: 'Франция', cap: 26.4, estimated: false, isic_group: '221' },
	{ name: 'Pirelli & C.', country: 'Италия', cap: 7.4, estimated: false, isic_group: '221' },
	{ name: 'The Yokohama Rubber Company', country: 'Япония', cap: 6.8, estimated: false, isic_group: '221' },
	{ name: 'Hankook Tire & Technology', country: 'Южная Корея', cap: 5.5, estimated: false, isic_group: '221' },
	{ name: 'Sumitomo Rubber Industries', country: 'Япония', cap: 3.3, estimated: false, isic_group: '221' },
	{ name: 'The Goodyear Tire & Rubber Company', country: 'США', cap: 1.2, estimated: false, isic_group: '221' },

	// C222 Производство пластмассовых изделий
	{ name: 'West Pharmaceutical Services', country: 'США', cap: 24.1, estimated: false, isic_group: '222' },
	{ name: 'Geberit', country: 'Швейцария', cap: 23.4, estimated: false, isic_group: '222' },
	{ name: 'Amcor', country: 'Швейцария', cap: 21.2, estimated: false, isic_group: '222' },
	{ name: 'Carlisle Companies', country: 'США', cap: 15.2, estimated: false, isic_group: '222' },
	{ name: 'Westlake Corporation', country: 'США', cap: 8.2, estimated: false, isic_group: '222' },
	{ name: 'Sealed Air', country: 'США', cap: 6.2, estimated: false, isic_group: '222' },
	{ name: 'Trex Company', country: 'США', cap: 5.4, estimated: false, isic_group: '222' },

	// C231 Производство стекла и изделий из стекла
	{ name: 'Corning Incorporated', country: 'США', cap: 102.9, estimated: false, isic_group: '231' },
	{ name: 'China Jushi', country: 'Китай', cap: 25.1, estimated: false, isic_group: '231' },
	{ name: 'Fuyao Glass Industry Group', country: 'Китай', cap: 21.8, estimated: false, isic_group: '231' },
	{ name: 'AGC Inc.', country: 'Япония', cap: 6.8, estimated: false, isic_group: '231' },
	{ name: 'Xinyi Glass Holdings', country: 'Гонконг', cap: 4.8, estimated: false, isic_group: '231' },
	{ name: 'Guardian Industries', country: 'США', cap: 4.5, estimated: true, isic_group: '231' },
	{ name: 'Flat Glass Group', country: 'Китай', cap: 2.9, estimated: false, isic_group: '231' },

	// C239 Производство прочих неметаллических минеральных продуктов (цемент, бетон, керамика, изоляция)
	{ name: 'CRH plc', country: 'Ирландия', cap: 64.6, estimated: false, isic_group: '239' },
	{ name: 'Holcim', country: 'Швейцария', cap: 49.6, estimated: false, isic_group: '239' },
	{ name: 'Compagnie de Saint-Gobain', country: 'Франция', cap: 41.6, estimated: false, isic_group: '239' },
	{ name: 'UltraTech Cement', country: 'Индия', cap: 36.6, estimated: false, isic_group: '239' },
	{ name: 'Heidelberg Materials', country: 'Германия', cap: 33.7, estimated: false, isic_group: '239' },
	{ name: 'Amrize', country: 'Швейцария', cap: 24.5, estimated: false, isic_group: '239' },
	{ name: 'James Hardie Industries', country: 'Ирландия', cap: 17.5, estimated: false, isic_group: '239' },

	// C241 Производство чугуна, стали и ферросплавов
	{ name: 'China Baowu Steel Group', country: 'Китай', cap: 62.0, estimated: true, isic_group: '241' },
	{ name: 'Nucor', country: 'США', cap: 58.7, estimated: false, isic_group: '241' },
	{ name: 'ArcelorMittal', country: 'Люксембург', cap: 48.3, estimated: false, isic_group: '241' },
	{ name: 'JSW Steel', country: 'Индия', cap: 35.0, estimated: false, isic_group: '241' },
	{ name: 'Steel Dynamics', country: 'США', cap: 34.0, estimated: false, isic_group: '241' },
	{ name: 'Tata Steel', country: 'Индия', cap: 24.8, estimated: false, isic_group: '241' },
	{ name: 'Nippon Steel', country: 'Япония', cap: 23.1, estimated: false, isic_group: '241' },

	// C242 Производство основных драгоценных и прочих цветных металлов
	{ name: 'China Hongqiao Group', country: 'Китай', cap: 24.7, estimated: false, isic_group: '242' },
	{ name: 'Hindalco Industries', country: 'Индия', cap: 22.2, estimated: false, isic_group: '242' },
	{ name: 'Aluminum Corporation of China (Chalco)', country: 'Китай', cap: 21.4, estimated: false, isic_group: '242' },
	{ name: 'Norsk Hydro', country: 'Норвегия', cap: 15.0, estimated: false, isic_group: '242' },
	{ name: 'Emirates Global Aluminium (EGA)', country: 'ОАЭ', cap: 14.5, estimated: true, isic_group: '242' },
	{ name: 'Alcoa Corporation', country: 'США', cap: 10.7, estimated: false, isic_group: '242' },
	{ name: 'РУСАЛ', country: 'Россия', cap: 5.4, estimated: false, isic_group: '242' },

	// C243 Литье металлов
	{ name: 'Precision Castparts Corp.', country: 'США', cap: 22.0, estimated: true, isic_group: '243' },
	{ name: 'GF Casting Solutions', country: 'Швейцария', cap: 2.2, estimated: true, isic_group: '243' },
	{ name: 'Waupaca Foundry', country: 'США', cap: 1.5, estimated: true, isic_group: '243' },
	{ name: 'Endurance Technologies', country: 'Индия', cap: 1.4, estimated: false, isic_group: '243' },
	{ name: 'Dynacast', country: 'США', cap: 0.9, estimated: true, isic_group: '243' },
	{ name: 'Nemak', country: 'Мексика', cap: 0.5, estimated: false, isic_group: '243' },
	{ name: 'Ryobi Limited', country: 'Япония', cap: 0.5, estimated: false, isic_group: '243' },

	// C251 Производство строительных металлических конструкций, цистерн, резервуаров и паровых котлов
	{ name: 'Valmont Industries', country: 'США', cap: 8.1, estimated: false, isic_group: '251' },
	{ name: 'Chart Industries', country: 'США', cap: 7.4, estimated: false, isic_group: '251' },
	{ name: 'Arcosa', country: 'США', cap: 4.8, estimated: false, isic_group: '251' },
	{ name: 'Worthington Enterprises', country: 'США', cap: 2.4, estimated: false, isic_group: '251' },
	{ name: 'Severfield', country: 'Великобритания', cap: 0.3, estimated: false, isic_group: '251' },

	// C252 Производство оружия и боеприпасов
	{ name: 'Rheinmetall', country: 'Германия', cap: 49.8, estimated: false, isic_group: '252' },
	{ name: 'Hanwha Aerospace', country: 'Южная Корея', cap: 35.0, estimated: false, isic_group: '252' },
	{ name: 'Czechoslovak Group (CSG)', country: 'Чехия', cap: 14.0, estimated: true, isic_group: '252' },
	{ name: 'KNDS', country: 'Нидерланды', cap: 11.5, estimated: true, isic_group: '252' },
	{ name: 'Nammo', country: 'Норвегия', cap: 3.5, estimated: true, isic_group: '252' },
	{ name: 'Colt CZ Group', country: 'Чехия', cap: 2.1, estimated: false, isic_group: '252' },
	{ name: 'Sturm, Ruger & Co.', country: 'США', cap: 0.5, estimated: false, isic_group: '252' },

	// C259 Производство прочих готовых металлических изделий (крепеж, замки, тара, ручной инструмент)
	{ name: 'ASSA ABLOY', country: 'Швеция', cap: 44.7, estimated: false, isic_group: '259' },
	{ name: 'Snap-on', country: 'США', cap: 19.3, estimated: false, isic_group: '259' },
	{ name: 'Ball Corporation', country: 'США', cap: 17.4, estimated: false, isic_group: '259' },
	{ name: 'Stanley Black & Decker', country: 'США', cap: 17.3, estimated: false, isic_group: '259' },
	{ name: 'Allegion', country: 'Ирландия', cap: 16.3, estimated: false, isic_group: '259' },
	{ name: 'Crown Holdings', country: 'США', cap: 13.5, estimated: false, isic_group: '259' },
	{ name: 'Fastenal', country: 'США', cap: 24.5, estimated: false, isic_group: '259' },

	// C261 Производство электронных компонентов и плат
	{ name: 'NVIDIA', country: 'США', cap: 4830.0, estimated: false, isic_group: '261' },
	{ name: 'TSMC (Taiwan Semiconductor Manufacturing)', country: 'Тайвань', cap: 2050.0, estimated: false, isic_group: '261' },
	{ name: 'Broadcom', country: 'США', cap: 1550.0, estimated: false, isic_group: '261' },
	{ name: 'Samsung Electronics', country: 'Южная Корея', cap: 1060.0, estimated: false, isic_group: '261' },
	{ name: 'SK Hynix', country: 'Южная Корея', cap: 1010.0, estimated: false, isic_group: '261' },
	{ name: 'Micron Technology', country: 'США', cap: 899.6, estimated: false, isic_group: '261' },
	{ name: 'AMD (Advanced Micro Devices)', country: 'США', cap: 797.9, estimated: false, isic_group: '261' },

	// C262 Производство компьютеров и периферийного оборудования
	{ name: 'Apple', country: 'США', cap: 5100.0, estimated: false, isic_group: '262' },
	{ name: 'Dell Technologies', country: 'США', cap: 208.9, estimated: false, isic_group: '262' },
	{ name: 'Western Digital', country: 'США', cap: 118.9, estimated: false, isic_group: '262' },
	{ name: 'Seagate Technology', country: 'США', cap: 105.8, estimated: false, isic_group: '262' },
	{ name: 'KIOXIA Holdings', country: 'Япония', cap: 91.5, estimated: false, isic_group: '262' },
	{ name: 'Quanta Computer', country: 'Тайвань', cap: 35.9, estimated: false, isic_group: '262' },
	{ name: 'Lenovo Group', country: 'Китай', cap: 30.0, estimated: false, isic_group: '262' },

	// C263 Производство коммуникационного оборудования
	{ name: 'Cisco Systems', country: 'США', cap: 398.4, estimated: false, isic_group: '263' },
	{ name: 'Arista Networks', country: 'США', cap: 215.8, estimated: false, isic_group: '263' },
	{ name: 'Foxconn Industrial Internet', country: 'Китай', cap: 187.5, estimated: false, isic_group: '263' },
	{ name: 'Zhongji Innolight', country: 'Китай', cap: 160.8, estimated: false, isic_group: '263' },
	{ name: 'Huawei Technologies', country: 'Китай', cap: 135.0, estimated: true, isic_group: '263' },
	{ name: 'Motorola Solutions', country: 'США', cap: 87.7, estimated: false, isic_group: '263' },
	{ name: 'Hewlett Packard Enterprise (HPE)', country: 'США', cap: 66.9, estimated: false, isic_group: '263' },

	// C264 Производство бытовой электроники
	{ name: 'Sony Group', country: 'Япония', cap: 156.3, estimated: false, isic_group: '264' },
	{ name: 'LG Electronics', country: 'Южная Корея', cap: 16.8, estimated: false, isic_group: '264' },
	{ name: 'TCL Electronics', country: 'Китай', cap: 3.1, estimated: false, isic_group: '264' },
	{ name: 'Hisense Visual Technology', country: 'Китай', cap: 3.0, estimated: false, isic_group: '264' },
	{ name: 'Sonos', country: 'США', cap: 2.0, estimated: false, isic_group: '264' },
	{ name: 'Bose Corporation', country: 'США', cap: 1.9, estimated: true, isic_group: '264' },
	{ name: 'Bang & Olufsen', country: 'Дания', cap: 0.2, estimated: false, isic_group: '264' },

	// C265 Производство контрольно-измерительных и навигационных приборов; часов
	{ name: 'Thermo Fisher Scientific', country: 'США', cap: 267.4, estimated: false, isic_group: '265' },
	{ name: 'Danaher Corporation', country: 'США', cap: 164.4, estimated: false, isic_group: '265' },
	{ name: 'Keyence', country: 'Япония', cap: 112.3, estimated: false, isic_group: '265' },
	{ name: 'Compagnie Financière Richemont', country: 'Швейцария', cap: 112.0, estimated: false, isic_group: '265' },
	{ name: 'Roper Technologies', country: 'США', cap: 60.7, estimated: false, isic_group: '265' },
	{ name: 'Garmin', country: 'США', cap: 56.8, estimated: false, isic_group: '265' },
	{ name: 'Keysight Technologies', country: 'США', cap: 51.8, estimated: false, isic_group: '265' },

	// C266 Производство облучающего, электромедицинского и электротерапевтического оборудования
	{ name: 'Siemens Healthineers', country: 'Германия', cap: 55.1, estimated: false, isic_group: '266' },
	{ name: 'GE HealthCare Technologies', country: 'США', cap: 38.5, estimated: false, isic_group: '266' },
	{ name: 'Mindray Bio-Medical Electronics', country: 'Китай', cap: 30.6, estimated: false, isic_group: '266' },
	{ name: 'Koninklijke Philips', country: 'Нидерланды', cap: 24.5, estimated: false, isic_group: '266' },
	{ name: 'United Imaging Healthcare', country: 'Китай', cap: 14.5, estimated: false, isic_group: '266' },
	{ name: 'Hologic', country: 'США', cap: 17.8, estimated: false, isic_group: '266' },
	{ name: 'Canon Medical Systems', country: 'Япония', cap: 5.5, estimated: true, isic_group: '266' },

	// C267 Производство оптических приборов и фотографического оборудования
	{ name: 'HOYA Corporation', country: 'Япония', cap: 48.0, estimated: false, isic_group: '267' },
	{ name: 'Canon Inc.', country: 'Япония', cap: 26.0, estimated: false, isic_group: '267' },
	{ name: 'Carl Zeiss AG', country: 'Германия', cap: 18.5, estimated: true, isic_group: '267' },
	{ name: 'Nikon Corporation', country: 'Япония', cap: 3.5, estimated: false, isic_group: '267' },
	{ name: 'Tamron', country: 'Япония', cap: 1.5, estimated: false, isic_group: '267' },
	{ name: 'Leica Camera', country: 'Германия', cap: 0.9, estimated: true, isic_group: '267' },
	{ name: 'Sigma Corporation', country: 'Япония', cap: 0.6, estimated: true, isic_group: '267' },

	// C268 Производство магнитных и оптических носителей информации
	{ name: 'CMC Magnetics', country: 'Тайвань', cap: 0.3, estimated: false, isic_group: '268' },
	{ name: 'Ritek Corporation', country: 'Тайвань', cap: 0.2, estimated: false, isic_group: '268' },
	{ name: 'Moser Baer India', country: 'Индия', cap: 0.05, estimated: true, isic_group: '268' },

	// C271 Производство электродвигателей, генераторов, трансформаторов и распределительной аппаратуры
	{ name: 'Siemens AG', country: 'Германия', cap: 225.0, estimated: false, isic_group: '271' },
	{ name: 'Schneider Electric', country: 'Франция', cap: 161.3, estimated: false, isic_group: '271' },
	{ name: 'ABB', country: 'Швейцария', cap: 155.0, estimated: false, isic_group: '271' },
	{ name: 'Eaton Corporation', country: 'Ирландия', cap: 145.0, estimated: false, isic_group: '271' },
	{ name: 'Emerson Electric', country: 'США', cap: 91.0, estimated: false, isic_group: '271' },
	{ name: 'Mitsubishi Electric', country: 'Япония', cap: 62.5, estimated: false, isic_group: '271' },
	{ name: 'WEG S.A.', country: 'Бразилия', cap: 37.5, estimated: false, isic_group: '271' },

	// C272 Производство электрических аккумуляторов и аккумуляторных батарей
	{ name: 'CATL (Contemporary Amperex Technology)', country: 'Китай', cap: 250.0, estimated: false, isic_group: '272' },
	{ name: 'LG Energy Solution', country: 'Южная Корея', cap: 66.0, estimated: false, isic_group: '272' },
	{ name: 'EVE Energy', country: 'Китай', cap: 16.5, estimated: false, isic_group: '272' },
	{ name: 'SK On', country: 'Южная Корея', cap: 12.0, estimated: true, isic_group: '272' },
	{ name: 'Gotion High-Tech', country: 'Китай', cap: 6.3, estimated: false, isic_group: '272' },
	{ name: 'EnerSys', country: 'США', cap: 6.1, estimated: false, isic_group: '272' },
	{ name: 'CALB Group', country: 'Китай', cap: 3.1, estimated: false, isic_group: '272' },

	// C273 Производство кабелей, проводов и электромонтажных устройств
	{ name: 'Legrand', country: 'Франция', cap: 40.4, estimated: false, isic_group: '273' },
	{ name: 'Prysmian Group', country: 'Италия', cap: 38.0, estimated: false, isic_group: '273' },
	{ name: 'Sumitomo Electric Industries', country: 'Япония', cap: 29.7, estimated: false, isic_group: '273' },
	{ name: 'Southwire', country: 'США', cap: 9.5, estimated: true, isic_group: '273' },
	{ name: 'Furukawa Electric', country: 'Япония', cap: 8.9, estimated: false, isic_group: '273' },
	{ name: 'NKT A/S', country: 'Дания', cap: 6.7, estimated: false, isic_group: '273' },
	{ name: 'Nexans', country: 'Франция', cap: 6.3, estimated: false, isic_group: '273' },

	// C274 Производство электрического осветительного оборудования
	{ name: 'Acuity Brands', country: 'США', cap: 10.0, estimated: false, isic_group: '274' },
	{ name: 'ams-OSRAM', country: 'Австрия', cap: 2.2, estimated: false, isic_group: '274' },
	{ name: 'Signify', country: 'Нидерланды', cap: 2.1, estimated: false, isic_group: '274' },
	{ name: 'Fagerhult Group', country: 'Швеция', cap: 0.8, estimated: false, isic_group: '274' },
	{ name: 'LSI Industries', country: 'США', cap: 0.7, estimated: false, isic_group: '274' },
	{ name: 'Opple Lighting', country: 'Китай', cap: 1.5, estimated: false, isic_group: '274' },
	{ name: 'Zumtobel Group', country: 'Австрия', cap: 0.2, estimated: false, isic_group: '274' },

	// C275 Производство бытовых приборов
	{ name: 'Midea Group', country: 'Китай', cap: 98.5, estimated: false, isic_group: '275' },
	{ name: 'Gree Electric Appliances', country: 'Китай', cap: 33.5, estimated: false, isic_group: '275' },
	{ name: 'SharkNinja', country: 'США', cap: 31.9, estimated: false, isic_group: '275' },
	{ name: 'Haier Smart Home', country: 'Китай', cap: 28.3, estimated: false, isic_group: '275' },
	{ name: 'BSH Hausgeräte', country: 'Германия', cap: 16.0, estimated: true, isic_group: '275' },
	{ name: 'De\' Longhi', country: 'Италия', cap: 7.6, estimated: false, isic_group: '275' },
	{ name: 'Whirlpool Corporation', country: 'США', cap: 2.0, estimated: false, isic_group: '275' },

	// C279 Производство прочего электрического оборудования
	{ name: 'Vertiv Holdings', country: 'США', cap: 79.5, estimated: false, isic_group: '279' },
	{ name: 'Bloom Energy', country: 'США', cap: 61.9, estimated: false, isic_group: '279' },
	{ name: 'Hubbell Incorporated', country: 'США', cap: 25.1, estimated: false, isic_group: '279' },
	{ name: 'nVent Electric', country: 'Великобритания', cap: 18.9, estimated: false, isic_group: '279' },
	{ name: 'Littelfuse', country: 'США', cap: 9.0, estimated: false, isic_group: '279' },
	{ name: 'Advanced Energy Industries', country: 'США', cap: 9.4, estimated: false, isic_group: '279' },
	{ name: 'Mersen', country: 'Франция', cap: 1.0, estimated: false, isic_group: '279' },

	// C281 Производство машин и оборудования общего назначения (турбины, двигатели, насосы, подшипники, лифты)
	{ name: 'GE Vernova', country: 'США', cap: 241.7, estimated: false, isic_group: '281' },
	{ name: 'Trane Technologies', country: 'Ирландия', cap: 87.9, estimated: false, isic_group: '281' },
	{ name: 'Cummins', country: 'США', cap: 72.1, estimated: false, isic_group: '281' },
	{ name: 'Carrier Global', country: 'США', cap: 44.5, estimated: false, isic_group: '281' },
	{ name: 'Daikin Industries', country: 'Япония', cap: 40.0, estimated: false, isic_group: '281' },
	{ name: 'Schindler Group', country: 'Швейцария', cap: 39.4, estimated: false, isic_group: '281' },
	{ name: 'KONE Corporation', country: 'Финляндия', cap: 34.0, estimated: false, isic_group: '281' },

	// C282 Производство машин и оборудования специального назначения (техника для стройки, добычи, АПК, станки)
	{ name: 'ASML Holding', country: 'Нидерланды', cap: 570.3, estimated: false, isic_group: '282' },
	{ name: 'Applied Materials', country: 'США', cap: 313.5, estimated: false, isic_group: '282' },
	{ name: 'Lam Research', country: 'США', cap: 294.7, estimated: false, isic_group: '282' },
	{ name: 'Caterpillar', country: 'США', cap: 286.8, estimated: false, isic_group: '282' },
	{ name: 'KLA Corporation', country: 'США', cap: 209.8, estimated: false, isic_group: '282' },
	{ name: 'Deere & Company (John Deere)', country: 'США', cap: 179.5, estimated: false, isic_group: '282' },
	{ name: 'Sandvik', country: 'Швеция', cap: 47.7, estimated: false, isic_group: '282' },

	// C291 Производство автотранспортных средств
	{ name: 'Tesla', country: 'США', cap: 1500.0, estimated: false, isic_group: '291' },
	{ name: 'Toyota Motor Corporation', country: 'Япония', cap: 260.0, estimated: false, isic_group: '291' },
	{ name: 'BYD Company', country: 'Китай', cap: 122.3, estimated: false, isic_group: '291' },
	{ name: 'Hyundai Motor Company', country: 'Южная Корея', cap: 95.7, estimated: false, isic_group: '291' },
	{ name: 'General Motors', country: 'США', cap: 75.7, estimated: false, isic_group: '291' },
	{ name: 'Ferrari', country: 'Италия', cap: 74.1, estimated: false, isic_group: '291' },
	{ name: 'AB Volvo', country: 'Швеция', cap: 64.9, estimated: false, isic_group: '291' },

	// C292 Производство кузовов для автотранспортных средств; производство прицепов и полуприцепов
	{ name: 'CIMC Vehicles', country: 'Китай', cap: 3.1, estimated: true, isic_group: '292' },
	{ name: 'Schmitz Cargobull', country: 'Германия', cap: 2.4, estimated: true, isic_group: '292' },
	{ name: 'Great Dane', country: 'США', cap: 1.5, estimated: true, isic_group: '292' },
	{ name: 'J.B. Poindexter & Co.', country: 'США', cap: 1.4, estimated: true, isic_group: '292' },
	{ name: 'Krone Commercial Vehicle Group', country: 'Германия', cap: 1.2, estimated: true, isic_group: '292' },
	{ name: 'Utility Trailer Manufacturing', country: 'США', cap: 1.0, estimated: true, isic_group: '292' },
	{ name: 'Wabash National', country: 'США', cap: 0.5, estimated: false, isic_group: '292' },

	// C293 Производство комплектующих и принадлежностей для автотранспортных средств
	{ name: 'Robert Bosch GmbH', country: 'Германия', cap: 75.0, estimated: true, isic_group: '293' },
	{ name: 'Denso Corporation', country: 'Япония', cap: 30.7, estimated: false, isic_group: '293' },
	{ name: 'Hyundai Mobis', country: 'Южная Корея', cap: 22.3, estimated: false, isic_group: '293' },
	{ name: 'ZF Friedrichshafen', country: 'Германия', cap: 18.0, estimated: true, isic_group: '293' },
	{ name: 'Magna International', country: 'Канада', cap: 15.4, estimated: false, isic_group: '293' },
	{ name: 'Continental AG', country: 'Германия', cap: 15.7, estimated: false, isic_group: '293' },
	{ name: 'BorgWarner', country: 'США', cap: 10.4, estimated: false, isic_group: '293' },

	// C301 Строительство кораблей, судов и лодок
	{ name: 'China State Shipbuilding Corporation (CSSC)', country: 'Китай', cap: 40.0, estimated: false, isic_group: '301' },
	{ name: 'HD Hyundai Heavy Industries', country: 'Южная Корея', cap: 21.3, estimated: false, isic_group: '301' },
	{ name: 'Huntington Ingalls Industries', country: 'США', cap: 12.5, estimated: false, isic_group: '301' },
	{ name: 'Hanwha Ocean', country: 'Южная Корея', cap: 12.1, estimated: false, isic_group: '301' },
	{ name: 'Samsung Heavy Industries', country: 'Южная Корея', cap: 10.7, estimated: false, isic_group: '301' },
	{ name: 'Mazagon Dock Shipbuilders', country: 'Индия', cap: 7.8, estimated: false, isic_group: '301' },
	{ name: 'Fincantieri', country: 'Италия', cap: 5.0, estimated: false, isic_group: '301' },

	// C302 Производство железнодорожных локомотивов и подвижного состава
	{ name: 'Wabtec Corporation', country: 'США', cap: 51.0, estimated: false, isic_group: '302' },
	{ name: 'CRRC Corporation', country: 'Китай', cap: 20.0, estimated: false, isic_group: '302' },
	{ name: 'Alstom', country: 'Франция', cap: 8.2, estimated: false, isic_group: '302' },
	{ name: 'Transmashholding (Трансмашхолдинг)', country: 'Россия', cap: 4.5, estimated: true, isic_group: '302' },
	{ name: 'Stadler Rail', country: 'Швейцария', cap: 3.2, estimated: false, isic_group: '302' },
	{ name: 'Trinity Industries', country: 'США', cap: 2.3, estimated: false, isic_group: '302' },
	{ name: 'The Greenbrier Companies', country: 'США', cap: 1.3, estimated: false, isic_group: '302' },

	// C303 Производство воздушных и космических летательных аппаратов и оборудования к ним
	{ name: 'SpaceX (Space Exploration Technologies)', country: 'США', cap: 1901.0, estimated: false, isic_group: '303' },
	{ name: 'GE Aerospace', country: 'США', cap: 343.3, estimated: false, isic_group: '303' },
	{ name: 'RTX Corporation', country: 'США', cap: 267.7, estimated: false, isic_group: '303' },
	{ name: 'Airbus SE', country: 'Нидерланды', cap: 173.3, estimated: false, isic_group: '303' },
	{ name: 'Rolls-Royce Holdings', country: 'Великобритания', cap: 146.8, estimated: false, isic_group: '303' },
	{ name: 'Safran', country: 'Франция', cap: 143.1, estimated: false, isic_group: '303' },
	{ name: 'Lockheed Martin', country: 'США', cap: 139.5, estimated: false, isic_group: '303' },

	// C304 Производство военных боевых машин
	{ name: 'General Dynamics', country: 'США', cap: 99.3, estimated: false, isic_group: '304' },
	{ name: 'BAE Systems', country: 'Великобритания', cap: 74.2, estimated: false, isic_group: '304' },
	{ name: 'NORINCO (China North Industries Group)', country: 'Китай', cap: 35.0, estimated: true, isic_group: '304' },
	{ name: 'Oshkosh Corporation', country: 'США', cap: 8.6, estimated: false, isic_group: '304' },
	{ name: 'Patria', country: 'Финляндия', cap: 1.5, estimated: true, isic_group: '304' },
	{ name: 'Otokar', country: 'Турция', cap: 1.4, estimated: false, isic_group: '304' },
	{ name: 'FNSS Savunma Sistemleri', country: 'Турция', cap: 0.9, estimated: true, isic_group: '304' },

	// C309 Производство прочего транспортного оборудования (мотоциклы, велосипеды, инвалидные коляски)
	{ name: 'Bajaj Auto', country: 'Индия', cap: 33.4, estimated: false, isic_group: '309' },
	{ name: 'TVS Motor Company', country: 'Индия', cap: 22.6, estimated: false, isic_group: '309' },
	{ name: 'Eicher Motors (Royal Enfield)', country: 'Индия', cap: 22.9, estimated: false, isic_group: '309' },
	{ name: 'Hero MotoCorp', country: 'Индия', cap: 11.8, estimated: false, isic_group: '309' },
	{ name: 'Yamaha Motor', country: 'Япония', cap: 11.4, estimated: false, isic_group: '309' },
	{ name: 'Harley-Davidson', country: 'США', cap: 3.4, estimated: false, isic_group: '309' },
	{ name: 'Giant Manufacturing', country: 'Тайвань', cap: 1.0, estimated: false, isic_group: '309' },

	// C310 Производство мебели
	{ name: 'Somnigroup International (Tempur Sealy)', country: 'США', cap: 13.7, estimated: false, isic_group: '310' },
	{ name: 'Ashley Furniture Industries', country: 'США', cap: 8.5, estimated: true, isic_group: '310' },
	{ name: 'Oppein Home Group', country: 'Китай', cap: 4.5, estimated: false, isic_group: '310' },
	{ name: 'MillerKnoll', country: 'США', cap: 1.8, estimated: false, isic_group: '310' },
	{ name: 'Steelcase', country: 'США', cap: 1.5, estimated: false, isic_group: '310' },
	{ name: 'La-Z-Boy', country: 'США', cap: 1.4, estimated: false, isic_group: '310' },
	{ name: 'HNI Corporation', country: 'США', cap: 2.1, estimated: false, isic_group: '310' },

	// C321 Производство ювелирных изделий, бижутерии и подобных товаров
	{ name: 'Chow Tai Fook Jewellery Group', country: 'Гонконг', cap: 14.5, estimated: false, isic_group: '321' },
	{ name: 'Titan Company', country: 'Индия', cap: 34.0, estimated: false, isic_group: '321' },
	{ name: 'Pandora', country: 'Дания', cap: 12.8, estimated: false, isic_group: '321' },
	{ name: 'Lao Feng Xiang', country: 'Китай', cap: 3.8, estimated: false, isic_group: '321' },
	{ name: 'Swarovski', country: 'Австрия', cap: 4.5, estimated: true, isic_group: '321' },
	{ name: 'Signet Jewelers', country: 'Бермуды', cap: 4.1, estimated: false, isic_group: '321' },
	{ name: 'Kalyan Jewellers India', country: 'Индия', cap: 6.2, estimated: false, isic_group: '321' },

	// C322 Производство музыкальных инструментов
	{ name: 'Yamaha Corporation', country: 'Япония', cap: 3.8, estimated: false, isic_group: '322' },
	{ name: 'Fender Musical Instruments', country: 'США', cap: 1.2, estimated: true, isic_group: '322' },
	{ name: 'Roland Corporation', country: 'Япония', cap: 0.7, estimated: false, isic_group: '322' },
	{ name: 'Steinway Musical Instruments', country: 'США', cap: 0.6, estimated: true, isic_group: '322' },
	{ name: 'Gibson Brands', country: 'США', cap: 0.5, estimated: true, isic_group: '322' },
	{ name: 'Kawai Musical Instruments', country: 'Япония', cap: 0.2, estimated: false, isic_group: '322' },
	{ name: 'Guangzhou Pearl River Piano', country: 'Китай', cap: 0.9, estimated: false, isic_group: '322' },

	// C323 Производство спортивных товаров
	{ name: 'Amer Sports', country: 'Финляндия', cap: 16.0, estimated: false, isic_group: '323' },
	{ name: 'Shimano', country: 'Япония', cap: 9.8, estimated: false, isic_group: '323' },
	{ name: 'Acushnet Holdings', country: 'США', cap: 4.3, estimated: false, isic_group: '323' },
	{ name: 'Topgolf Callaway Brands', country: 'США', cap: 1.9, estimated: false, isic_group: '323' },
	{ name: 'Peloton Interactive', country: 'США', cap: 1.6, estimated: false, isic_group: '323' },
	{ name: 'Yonex', country: 'Япония', cap: 1.3, estimated: false, isic_group: '323' },
	{ name: 'Mizuno Corporation', country: 'Япония', cap: 1.2, estimated: false, isic_group: '323' },

	// C324 Производство игр и игрушек
	{ name: 'The LEGO Group', country: 'Дания', cap: 42.0, estimated: true, isic_group: '324' },
	{ name: 'Bandai Namco Holdings', country: 'Япония', cap: 18.5, estimated: false, isic_group: '324' },
	{ name: 'Hasbro', country: 'США', cap: 9.2, estimated: false, isic_group: '324' },
	{ name: 'Mattel', country: 'США', cap: 5.8, estimated: false, isic_group: '324' },
	{ name: 'Pop Mart International', country: 'Китай', cap: 14.2, estimated: false, isic_group: '324' },
	{ name: 'Sanrio', country: 'Япония', cap: 8.4, estimated: false, isic_group: '324' },
	{ name: 'Spin Master', country: 'Канада', cap: 2.3, estimated: false, isic_group: '324' },

	// C325 Производство медицинских и стоматологических инструментов и принадлежностей
	{ name: 'Abbott Laboratories', country: 'США', cap: 187.5, estimated: false, isic_group: '325' },
	{ name: 'Intuitive Surgical', country: 'США', cap: 139.0, estimated: false, isic_group: '325' },
	{ name: 'Medtronic', country: 'Ирландия', cap: 118.0, estimated: false, isic_group: '325' },
	{ name: 'Stryker Corporation', country: 'США', cap: 106.0, estimated: false, isic_group: '325' },
	{ name: 'Boston Scientific', country: 'США', cap: 63.0, estimated: false, isic_group: '325' },
	{ name: 'Becton, Dickinson and Company (BD)', country: 'США', cap: 58.0, estimated: false, isic_group: '325' },
	{ name: 'Edwards Lifesciences', country: 'США', cap: 51.0, estimated: false, isic_group: '325' },

	// C329 Производство прочих готовых изделий, не включенных в другие группировки (канцтовары, защита, щетки)
	{ name: '3M Company', country: 'США', cap: 76.5, estimated: false, isic_group: '329' },
	{ name: 'MSA Safety', country: 'США', cap: 6.8, estimated: false, isic_group: '329' },
	{ name: 'Société BIC', country: 'Франция', cap: 2.8, estimated: false, isic_group: '329' },
	{ name: 'Pilot Corporation', country: 'Япония', cap: 1.4, estimated: false, isic_group: '329' },
	{ name: 'Kokuyo', country: 'Япония', cap: 2.1, estimated: false, isic_group: '329' },
	{ name: 'Deli Group', country: 'Китай', cap: 2.5, estimated: true, isic_group: '329' },
	{ name: 'Matthews International', country: 'США', cap: 0.9, estimated: false, isic_group: '329' },

	// C331 Ремонт готовых металлических изделий, машин и оборудования
	{ name: 'Babcock International Group', country: 'Великобритания', cap: 4.2, estimated: false, isic_group: '331' },
	{ name: 'Bilfinger SE', country: 'Германия', cap: 2.5, estimated: false, isic_group: '331' },
	{ name: 'AAR Corp.', country: 'США', cap: 2.4, estimated: false, isic_group: '331' },
	{ name: 'ST Engineering', country: 'Сингапур', cap: 11.8, estimated: false, isic_group: '331' },
	{ name: 'HEICO Corporation', country: 'США', cap: 34.5, estimated: false, isic_group: '331' },
	{ name: 'MTU Aero Engines', country: 'Германия', cap: 18.2, estimated: false, isic_group: '331' },
	{ name: 'StandardAero', country: 'США', cap: 9.4, estimated: false, isic_group: '331' },

	// C332 Монтаж промышленных машин и оборудования
	{ name: 'SPIE SA', country: 'Франция', cap: 7.2, estimated: false, isic_group: '332' },
	{ name: 'Mistras Group', country: 'США', cap: 0.3, estimated: false, isic_group: '332' },
	{ name: 'Leadec', country: 'Германия', cap: 1.1, estimated: true, isic_group: '332' },
	{ name: 'Voith Industrial Services (Vites)', country: 'Германия', cap: 0.9, estimated: true, isic_group: '332' },
	{ name: 'Krones Service & Installation', country: 'Германия', cap: 0.8, estimated: true, isic_group: '332' },

	// D351 Производство, передача и распределение электроэнергии
	{ name: 'State Grid Corporation of China', country: 'Китай', cap: 380.0, estimated: true, isic_group: '351' },
	{ name: 'NextEra Energy', country: 'США', cap: 183.2, estimated: false, isic_group: '351' },
	{ name: 'Iberdrola', country: 'Испания', cap: 170.7, estimated: false, isic_group: '351' },
	{ name: 'China Yangtze Power', country: 'Китай', cap: 109.6, estimated: false, isic_group: '351' },
	{ name: 'Constellation Energy', country: 'США', cap: 107.5, estimated: false, isic_group: '351' },
	{ name: 'Enel SpA', country: 'Италия', cap: 106.6, estimated: false, isic_group: '351' },
	{ name: 'The Southern Company', country: 'США', cap: 105.8, estimated: false, isic_group: '351' },

	// D352 Производство газообразного топлива и его распределение по трубопроводам
	{ name: 'ENGIE', country: 'Франция', cap: 68.0, estimated: false, isic_group: '352' },
	{ name: 'The Hong Kong and China Gas Company (Towngas)', country: 'Гонконг', cap: 30.5, estimated: false, isic_group: '352' },
	{ name: 'Atmos Energy', country: 'США', cap: 29.7, estimated: false, isic_group: '352' },
	{ name: 'NiSource', country: 'США', cap: 22.0, estimated: false, isic_group: '352' },
	{ name: 'Tokyo Gas', country: 'Япония', cap: 16.5, estimated: false, isic_group: '352' },
	{ name: 'Osaka Gas', country: 'Япония', cap: 11.8, estimated: false, isic_group: '352' },
	{ name: 'ENN Energy Holdings', country: 'Китай', cap: 10.2, estimated: false, isic_group: '352' },

	// D353 Подача пара и кондиционирование воздуха (централизованное тепло- и холодоснабжение)
	{ name: 'Vattenfall', country: 'Швеция', cap: 32.0, estimated: true, isic_group: '353' },
	{ name: 'Fortum', country: 'Финляндия', cap: 14.5, estimated: false, isic_group: '353' },
	{ name: 'Dalkia (группа EDF)', country: 'Франция', cap: 6.5, estimated: true, isic_group: '353' },
	{ name: 'Beijing District Heating Group', country: 'Китай', cap: 3.2, estimated: true, isic_group: '353' },
	{ name: 'Helen Oy', country: 'Финляндия', cap: 2.1, estimated: true, isic_group: '353' },
	{ name: 'Vicinity Energy', country: 'США', cap: 1.8, estimated: true, isic_group: '353' },
	{ name: 'CenTrio (Enwave)', country: 'США', cap: 1.5, estimated: true, isic_group: '353' },

	// D354 Деятельность брокеров и агентов по электроэнергии и природному газу
	{ name: 'Vistra Corp.', country: 'США', cap: 54.0, estimated: false, isic_group: '354' },
	{ name: 'NRG Energy', country: 'США', cap: 21.5, estimated: false, isic_group: '354' },
	{ name: 'Octopus Energy Group', country: 'Великобритания', cap: 9.0, estimated: true, isic_group: '354' },
	{ name: 'Centrica', country: 'Великобритания', cap: 8.8, estimated: false, isic_group: '354' },
	{ name: 'Just Energy', country: 'Канада', cap: 0.8, estimated: true, isic_group: '354' },

	// E360 Забор, очистка и распределение воды
	{ name: 'American Water Works', country: 'США', cap: 29.8, estimated: false, isic_group: '360' },
	{ name: 'SABESP (Companhia de Saneamento Básico do Estado de São Paulo)', country: 'Бразилия', cap: 17.5, estimated: false, isic_group: '360' },
	{ name: 'United Utilities Group', country: 'Великобритания', cap: 15.4, estimated: false, isic_group: '360' },
	{ name: 'Severn Trent', country: 'Великобритания', cap: 13.4, estimated: false, isic_group: '360' },
	{ name: 'Essential Utilities', country: 'США', cap: 12.9, estimated: false, isic_group: '360' },
	{ name: 'Guangdong Investment', country: 'Гонконг', cap: 5.8, estimated: false, isic_group: '360' },
	{ name: 'American States Water', country: 'США', cap: 3.1, estimated: false, isic_group: '360' },

	// E370 Сбор и обработка сточных вод
	{ name: 'Thames Water', country: 'Великобритания', cap: 8.5, estimated: true, isic_group: '370' },
	{ name: 'COPASA (Companhia de Saneamento de Minas Gerais)', country: 'Бразилия', cap: 3.2, estimated: false, isic_group: '370' },
	{ name: 'Beijing Enterprises Water Group', country: 'Гонконг', cap: 2.9, estimated: false, isic_group: '370' },
	{ name: 'Pennon Group', country: 'Великобритания', cap: 2.4, estimated: false, isic_group: '370' },
	{ name: 'Sanepar (Companhia de Saneamento do Paraná)', country: 'Бразилия', cap: 2.1, estimated: false, isic_group: '370' },
	{ name: 'Manila Water Company', country: 'Филиппины', cap: 1.4, estimated: false, isic_group: '370' },
	{ name: 'Maynilad Water Services', country: 'Филиппины', cap: 1.2, estimated: true, isic_group: '370' },

	// E381 Сбор отходов
	{ name: 'WM (Waste Management)', country: 'США', cap: 87.6, estimated: false, isic_group: '381' },
	{ name: 'Republic Services', country: 'США', cap: 68.1, estimated: false, isic_group: '381' },
	{ name: 'Waste Connections', country: 'Канада', cap: 41.3, estimated: false, isic_group: '381' },
	{ name: 'GFL Environmental', country: 'Канада', cap: 15.0, estimated: false, isic_group: '381' },
	{ name: 'Casella Waste Systems', country: 'США', cap: 6.5, estimated: false, isic_group: '381' },
	{ name: 'Cleanaway Waste Management', country: 'Австралия', cap: 3.8, estimated: false, isic_group: '381' },
	{ name: 'Biffa', country: 'Великобритания', cap: 2.5, estimated: true, isic_group: '381' },

	// E382 Обработка и утилизация отходов
	{ name: 'Veolia Environnement', country: 'Франция', cap: 26.9, estimated: false, isic_group: '382' },
	{ name: 'Clean Harbors', country: 'США', cap: 16.6, estimated: false, isic_group: '382' },
	{ name: 'SUEZ', country: 'Франция', cap: 14.0, estimated: true, isic_group: '382' },
	{ name: 'China Everbright Environment Group', country: 'Гонконг', cap: 3.4, estimated: false, isic_group: '382' },
	{ name: 'FCC Environment (Fomento de Construcciones y Contratas)', country: 'Испания', cap: 6.0, estimated: false, isic_group: '382' },
	{ name: 'Stericycle', country: 'США', cap: 5.8, estimated: true, isic_group: '382' },
	{ name: 'Séché Environnement', country: 'Франция', cap: 0.9, estimated: false, isic_group: '382' },

	// E383 Утилизация (восстановление) вторичного сырья и материалов
	{ name: 'REMONDIS', country: 'Германия', cap: 12.0, estimated: true, isic_group: '383' },
	{ name: 'Darling Ingredients', country: 'США', cap: 8.6, estimated: false, isic_group: '383' },
	{ name: 'Aurubis', country: 'Германия', cap: 6.6, estimated: false, isic_group: '383' },
	{ name: 'Umicore', country: 'Бельгия', cap: 4.9, estimated: false, isic_group: '383' },
	{ name: 'Sims Limited', country: 'Австралия', cap: 4.2, estimated: false, isic_group: '383' },
	{ name: 'Befesa', country: 'Люксембург', cap: 1.7, estimated: false, isic_group: '383' },
	{ name: 'Derichebourg', country: 'Франция', cap: 1.1, estimated: false, isic_group: '383' },

	// E390 Деятельность по рекультивации и прочие услуги в области удаления отходов
	{ name: 'Tetra Tech', country: 'США', cap: 10.9, estimated: false, isic_group: '390' },
	{ name: 'Arcadis', country: 'Нидерланды', cap: 4.5, estimated: false, isic_group: '390' },
	{ name: 'Tradebe Environmental Services', country: 'Испания', cap: 1.4, estimated: true, isic_group: '390' },
	{ name: 'Lobbe Holding', country: 'Германия', cap: 1.2, estimated: true, isic_group: '390' },
	{ name: 'Montrose Environmental Group', country: 'США', cap: 1.1, estimated: false, isic_group: '390' },
	{ name: 'Perma-Fix Environmental Services', country: 'США', cap: 0.2, estimated: false, isic_group: '390' },
	{ name: 'NRC Group', country: 'Норвегия', cap: 0.2, estimated: false, isic_group: '390' },

	// F410 Строительство зданий
	{ name: 'D.R. Horton', country: 'США', cap: 40.6, estimated: false, isic_group: '410' },
	{ name: 'China State Construction Engineering (CSCEC)', country: 'Китай', cap: 28.6, estimated: false, isic_group: '410' },
	{ name: 'PulteGroup', country: 'США', cap: 24.9, estimated: false, isic_group: '410' },
	{ name: 'Lennar Corporation', country: 'США', cap: 20.6, estimated: false, isic_group: '410' },
	{ name: 'Daiwa House Industry', country: 'Япония', cap: 17.8, estimated: false, isic_group: '410' },
	{ name: 'NVR', country: 'США', cap: 15.4, estimated: false, isic_group: '410' },
	{ name: 'Sekisui House', country: 'Япония', cap: 14.6, estimated: false, isic_group: '410' },

	// F421 Строительство автомобильных и железных дорог
	{ name: 'VINCI', country: 'Франция', cap: 71.0, estimated: false, isic_group: '421' },
	{ name: 'Ferrovial', country: 'Нидерланды', cap: 44.8, estimated: false, isic_group: '421' },
	{ name: 'Grupo ACS', country: 'Испания', cap: 26.8, estimated: false, isic_group: '421' },
	{ name: 'China Railway Group (CREC)', country: 'Китай', cap: 21.5, estimated: false, isic_group: '421' },
	{ name: 'China Railway Construction Corporation (CRCC)', country: 'Китай', cap: 16.0, estimated: false, isic_group: '421' },
	{ name: 'Eiffage', country: 'Франция', cap: 11.5, estimated: false, isic_group: '421' },
	{ name: 'STRABAG', country: 'Австрия', cap: 6.2, estimated: false, isic_group: '421' },

	// F422 Строительство инженерных коммуникаций (коммунальных объектов, ЛЭП и трубопроводов)
	{ name: 'Quanta Services', country: 'США', cap: 89.7, estimated: false, isic_group: '422' },
	{ name: 'MasTec', country: 'США', cap: 15.7, estimated: false, isic_group: '422' },
	{ name: 'Dycom Industries', country: 'США', cap: 5.7, estimated: false, isic_group: '422' },
	{ name: 'MYR Group', country: 'США', cap: 3.8, estimated: false, isic_group: '422' },
	{ name: 'Michels Corporation', country: 'США', cap: 3.5, estimated: true, isic_group: '422' },
	{ name: 'Primoris Services Corporation', country: 'США', cap: 3.1, estimated: false, isic_group: '422' },
	{ name: 'Centuri Holdings', country: 'США', cap: 1.8, estimated: false, isic_group: '422' },

	// F429 Строительство прочих объектов гражданского строительства (гидротехника, порты, промстрой)
	{ name: 'Larsen & Toubro', country: 'Индия', cap: 66.0, estimated: false, isic_group: '429' },
	{ name: 'Jacobs Solutions', country: 'США', cap: 18.9, estimated: false, isic_group: '429' },
	{ name: 'China Communications Construction Company (CCCC)', country: 'Китай', cap: 18.5, estimated: false, isic_group: '429' },
	{ name: 'Power Construction Corporation of China (PowerChina)', country: 'Китай', cap: 13.5, estimated: false, isic_group: '429' },
	{ name: 'Bechtel Corporation', country: 'США', cap: 13.0, estimated: true, isic_group: '429' },
	{ name: 'Kiewit Corporation', country: 'США', cap: 11.0, estimated: true, isic_group: '429' },
	{ name: 'Fluor Corporation', country: 'США', cap: 5.9, estimated: false, isic_group: '429' },

	// F431 Снос зданий и подготовка строительного участка
	{ name: 'Sterling Infrastructure', country: 'США', cap: 11.0, estimated: false, isic_group: '431' },
	{ name: 'Granite Construction', country: 'США', cap: 4.2, estimated: false, isic_group: '431' },
	{ name: 'Tutor Perini', country: 'США', cap: 1.4, estimated: false, isic_group: '431' },
	{ name: 'Independence Excavating', country: 'США', cap: 0.8, estimated: true, isic_group: '431' },
	{ name: 'Sukut Construction', country: 'США', cap: 0.6, estimated: true, isic_group: '431' },
	{ name: 'Keltbray', country: 'Великобритания', cap: 0.5, estimated: true, isic_group: '431' },
	{ name: 'Erith Group', country: 'Великобритания', cap: 0.3, estimated: true, isic_group: '431' },

	// F432 Электромонтажные, санитарно-технические и прочие строительно-монтажные работы
	{ name: 'Comfort Systems USA', country: 'США', cap: 44.8, estimated: false, isic_group: '432' },
	{ name: 'EMCOR Group', country: 'США', cap: 26.6, estimated: false, isic_group: '432' },
	{ name: 'APi Group', country: 'США', cap: 20.0, estimated: false, isic_group: '432' },
	{ name: 'IES Holdings', country: 'США', cap: 6.2, estimated: false, isic_group: '432' },
	{ name: 'Kinden Corporation', country: 'Япония', cap: 4.8, estimated: false, isic_group: '432' },
	{ name: 'EXEO Group', country: 'Япония', cap: 2.5, estimated: false, isic_group: '432' },
	{ name: 'Bravida Holding', country: 'Швеция', cap: 1.8, estimated: false, isic_group: '432' },

	// F433 Работы по завершению строительства и отделке зданий
	{ name: 'TopBuild', country: 'США', cap: 9.9, estimated: false, isic_group: '433' },
	{ name: 'Installed Building Products', country: 'США', cap: 5.6, estimated: false, isic_group: '433' },
	{ name: 'Apogee Enterprises', country: 'США', cap: 1.5, estimated: false, isic_group: '433' },
	{ name: 'Kaefer Isoliertechnik', country: 'Германия', cap: 1.4, estimated: true, isic_group: '433' },
	{ name: 'Permasteelisa Group', country: 'Италия', cap: 1.2, estimated: true, isic_group: '433' },
	{ name: 'Sto SE & Co. KGaA', country: 'Германия', cap: 0.9, estimated: false, isic_group: '433' },
	{ name: 'Harmon Inc.', country: 'США', cap: 0.8, estimated: true, isic_group: '433' },

	// F434 Посреднические услуги в области специализированных строительных работ
	{ name: 'Thumbtack', country: 'США', cap: 1.5, estimated: true, isic_group: '434' },
	{ name: 'Angi Inc.', country: 'США', cap: 0.9, estimated: false, isic_group: '434' },
	{ name: 'Instapro Group', country: 'Нидерланды', cap: 0.6, estimated: true, isic_group: '434' },
	{ name: 'Bark.com', country: 'Великобритания', cap: 0.3, estimated: true, isic_group: '434' },
	{ name: 'Hipages Group', country: 'Австралия', cap: 0.1, estimated: false, isic_group: '434' },

	// F439 Прочие специализированные строительные работы (фундаменты, кровельные работы, строительные леса)
	{ name: 'Altrad Group', country: 'Франция', cap: 4.5, estimated: true, isic_group: '439' },
	{ name: 'BrandSafway', country: 'США', cap: 4.0, estimated: true, isic_group: '439' },
	{ name: 'Soletanche Freyssinet', country: 'Франция', cap: 3.5, estimated: true, isic_group: '439' },
	{ name: 'Keller Group', country: 'Великобритания', cap: 2.9, estimated: false, isic_group: '439' },
	{ name: 'Tecta America', country: 'США', cap: 1.8, estimated: true, isic_group: '439' },
	{ name: 'CentiMark Corporation', country: 'США', cap: 1.6, estimated: true, isic_group: '439' },
	{ name: 'Bauer AG', country: 'Германия', cap: 0.3, estimated: false, isic_group: '439' },
];
