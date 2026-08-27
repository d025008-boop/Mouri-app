// ==========================================================
//  毛利家めぐり — データファイル（日本語・英語・韓国語・中国語対応）
// ==========================================================

// ----------------------------------------------------------
// 多言語テキスト (i18n)
// ----------------------------------------------------------
const I18N = {
  ja: {
    "app-title":           "毛利家めぐり",
    "hero-catch":          "江戸時代の暮らしを、\nちょっとのぞいてみませんか？",
    "nav-about-label":     "毛利家を知る",
    "nav-about-sub":       "歴史と建物の魅力",
    "nav-spots-label":     "屋敷をめぐる",
    "nav-spots-sub":       "見どころを発見しよう",
    "nav-quiz-label":      "毛利家クイズ",
    "nav-quiz-sub":        "どれだけ知ってる？",
    "nav-seasons-label":   "四季の毛利家",
    "nav-seasons-sub":     "季節の風景と行事",
    "home-info":           "📍 愛媛県宇和島市三間町",
    "events-title":        "イベント・展示のご案内",
    "page-about-title":    "毛利家を知る",
    "page-spots-title":    "屋敷をめぐる",
    "page-quiz-title":     "毛利家クイズ",
    "page-seasons-title":  "四季の毛利家",
    "page-access-title":   "アクセス",
    "page-survey-title":   "気になるイベント",
    "bnav-home":           "ホーム",
    "bnav-about":          "知る",
    "bnav-spots":          "めぐる",
    "bnav-quiz":           "クイズ",
    "bnav-seasons":        "四季",
    "bnav-access":         "アクセス",
    "bnav-survey":         "感想",
    "access-addr-label":   "住所",
    "access-addr":         "愛媛県宇和島市三間町",
    "access-hours-label":  "開館時間",
    "access-hours":        "要確認",
    "access-closed-label": "休館日",
    "access-closed":       "要確認",
    "access-fee-label":    "入館料",
    "access-fee":          "要確認",
    "access-car-label":    "お車でお越しの方",
    "access-car":          "要確認",
    "access-bus-label":    "バスでお越しの方",
    "access-bus":          "要確認",
    "access-map-btn":      "🗺️ Google マップで開く",
  },
  en: {
    "app-title":           "Mouri Family Estate",
    "hero-catch":          "Step into the daily life\nof the Edo period.",
    "nav-about-label":     "About",
    "nav-about-sub":       "History & Architecture",
    "nav-spots-label":     "Explore",
    "nav-spots-sub":       "Discover highlights",
    "nav-quiz-label":      "Quiz",
    "nav-quiz-sub":        "Test your knowledge",
    "nav-seasons-label":   "Four Seasons",
    "nav-seasons-sub":     "Scenery & Events",
    "home-info":           "📍 Mishima-cho, Uwajima City, Ehime",
    "events-title":        "Events & Exhibitions",
    "page-about-title":    "About the Estate",
    "page-spots-title":    "Explore the Estate",
    "page-quiz-title":     "Mouri Family Quiz",
    "page-seasons-title":  "Four Seasons",
    "page-access-title":   "Access",
    "page-survey-title":   "Events of Interest",
    "bnav-home":           "Home",
    "bnav-about":          "About",
    "bnav-spots":          "Explore",
    "bnav-quiz":           "Quiz",
    "bnav-seasons":        "Seasons",
    "bnav-access":         "Access",
    "bnav-survey":         "Survey",
    "access-addr-label":   "Address",
    "access-addr":         "Mishima-cho, Uwajima City, Ehime",
    "access-hours-label":  "Opening Hours",
    "access-hours":        "Please confirm",
    "access-closed-label": "Closed",
    "access-closed":       "Please confirm",
    "access-fee-label":    "Admission",
    "access-fee":          "Please confirm",
    "access-car-label":    "By Car",
    "access-car":          "Please confirm",
    "access-bus-label":    "By Bus",
    "access-bus":          "Please confirm",
    "access-map-btn":      "🗺️ Open in Google Maps",
  },
  ko: {
    "app-title":           "모리家 산책",
    "hero-catch":          "에도 시대의 생활을\n잠깐 들여다볼까요?",
    "nav-about-label":     "모리家 알기",
    "nav-about-sub":       "역사와 건물의 매력",
    "nav-spots-label":     "저택 둘러보기",
    "nav-spots-sub":       "볼거리를 발견하자",
    "nav-quiz-label":      "모리家 퀴즈",
    "nav-quiz-sub":        "얼마나 알고 있나요?",
    "nav-seasons-label":   "사계절의 모리家",
    "nav-seasons-sub":     "계절의 풍경과 행사",
    "home-info":           "📍 에히메현 우와지마시 미마초",
    "events-title":        "이벤트・전시 안내",
    "page-about-title":    "모리家 알기",
    "page-spots-title":    "저택 둘러보기",
    "page-quiz-title":     "모리家 퀴즈",
    "page-seasons-title":  "사계절의 모리家",
    "page-access-title":   "오시는 길",
    "page-survey-title":   "관심 있는 이벤트",
    "bnav-home":           "홈",
    "bnav-about":          "알기",
    "bnav-spots":          "둘러보기",
    "bnav-quiz":           "퀴즈",
    "bnav-seasons":        "사계절",
    "bnav-access":         "오시는 길",
    "bnav-survey":         "감상",
    "access-addr-label":   "주소",
    "access-addr":         "에히메현 우와지마시 미마초",
    "access-hours-label":  "개관 시간",
    "access-hours":        "확인 필요",
    "access-closed-label": "휴관일",
    "access-closed":       "확인 필요",
    "access-fee-label":    "입관료",
    "access-fee":          "확인 필요",
    "access-car-label":    "자동차로 오시는 분",
    "access-car":          "확인 필요",
    "access-bus-label":    "버스로 오시는 분",
    "access-bus":          "확인 필요",
    "access-map-btn":      "🗺️ Google 지도에서 열기",
  },
  zh: {
    "app-title":           "毛利家巡游",
    "hero-catch":          "江户时代的生活，\n要不要稍微探访一下？",
    "nav-about-label":     "了解毛利家",
    "nav-about-sub":       "历史与建筑的魅力",
    "nav-spots-label":     "游览宅邸",
    "nav-spots-sub":       "发现看点",
    "nav-quiz-label":      "毛利家问答",
    "nav-quiz-sub":        "你了解多少？",
    "nav-seasons-label":   "四季的毛利家",
    "nav-seasons-sub":     "季节风景与活动",
    "home-info":           "📍 爱媛县宇和岛市三间町",
    "events-title":        "活动・展览指南",
    "page-about-title":    "了解毛利家",
    "page-spots-title":    "游览宅邸",
    "page-quiz-title":     "毛利家问答",
    "page-seasons-title":  "四季的毛利家",
    "page-access-title":   "交通信息",
    "page-survey-title":   "感兴趣的活动",
    "bnav-home":           "首页",
    "bnav-about":          "了解",
    "bnav-spots":          "游览",
    "bnav-quiz":           "问答",
    "bnav-seasons":        "四季",
    "bnav-access":         "交通",
    "bnav-survey":         "感想",
    "access-addr-label":   "地址",
    "access-addr":         "爱媛县宇和岛市三间町",
    "access-hours-label":  "开馆时间",
    "access-hours":        "请确认",
    "access-closed-label": "休馆日",
    "access-closed":       "请确认",
    "access-fee-label":    "入馆费",
    "access-fee":          "请确认",
    "access-car-label":    "自驾前来",
    "access-car":          "请确认",
    "access-bus-label":    "乘公交前来",
    "access-bus":          "请确认",
    "access-map-btn":      "🗺️ 在 Google 地图中打开",
  }
};

// ----------------------------------------------------------
// イベント一覧
// ----------------------------------------------------------
const EVENTS = [
  {
    date: "2026/09/13〜09/14",
    title: {
      ja: "秋の特別公開",
      en: "Autumn Special Open Day",
      ko: "가을 특별 공개",
      zh: "秋季特别开放日"
    },
    desc: {
      ja: "通常非公開の蔵や庭園を特別公開します。ガイドによる解説もあり。",
      en: "Special access to the warehouse and garden, including guided tours.",
      ko: "평소에는 비공개인 창고와 정원을 특별 공개합니다. 가이드 해설도 있습니다.",
      zh: "特别开放平时不对外公开的仓库和庭院，并提供导览讲解。"
    }
  },
  {
    date: "2026/10/11",
    title: {
      ja: "昔あそび体験教室",
      en: "Traditional Games Workshop",
      ko: "옛날 놀이 체험 교실",
      zh: "传统游戏体验课"
    },
    desc: {
      ja: "コマ・めんこ・お手玉など江戸時代の遊びを体験しよう。",
      en: "Try Edo-period games: tops, cards, bean bags and more.",
      ko: "팽이·딱지·공기 등 에도 시대의 놀이를 체험해 보세요.",
      zh: "体验陀螺、纸牌、沙包等江户时代的传统游戏。"
    }
  },
  {
    date: "2026/11/03",
    title: {
      ja: "秋まつり展示",
      en: "Autumn Festival Exhibition",
      ko: "가을 축제 전시",
      zh: "秋季节日展览"
    },
    desc: {
      ja: "地域の伝統工芸品と毛利家ゆかりの品々を展示します。",
      en: "Exhibition of local crafts and items related to the Mouri family.",
      ko: "지역 전통 공예품과 모리 가문과 관련된 물품들을 전시합니다.",
      zh: "展出当地传统工艺品及与毛利家相关的物品。"
    }
  },
  {
    date: "2026/11/22",
    title: {
      ja: "サイエンスショー",
      en: "Science Show",
      ko: "사이언스 쇼",
      zh: "科学秀"
    },
    desc: {
      ja: "楽しい実験やデモンストレーションで科学の不思議を体験しよう！",
      en: "Experience the wonders of science through fun experiments and demonstrations!",
      ko: "재미있는 실험과 시연을 통해 과학의 신비를 체험해 보세요!",
      zh: "通过有趣的实验和演示，体验科学的奥秘！"
    }
  }
];

// ----------------------------------------------------------
// 「毛利家を知る」セクション
// ----------------------------------------------------------
const ABOUT_SECTIONS = [
  {
    emoji: "🏡",
    title: {
      ja: "旧庄屋毛利家とは",
      en: "About the Estate",
      ko: "구 쇼야 모리家란",
      zh: "旧庄屋毛利家简介"
    },
    body: {
      ja: "旧庄屋毛利家は、愛媛県宇和島市三間町に残る歴史的な古民家です。江戸時代に村の中心として栄えた庄屋の屋敷が、当時の姿のまま大切に保存されています。茅葺き屋根の重厚な建物は、三間町の豊かな自然の中にひっそりとたたずんでいます。",
      en: "The Mouri Family Estate is a historic old private house preserved in Mishima-cho, Uwajima City, Ehime Prefecture. The residence of the village headman who flourished as the center of the village in the Edo period has been carefully preserved in its original form. The imposing thatched-roof building stands quietly amid the rich nature of Mishima-cho.",
      ko: "구 쇼야 모리家는 에히메현 우와지마시 미마초에 남아 있는 역사적인 고민가입니다. 에도 시대에 마을의 중심으로 번성했던 쇼야의 저택이 당시의 모습 그대로 소중히 보존되어 있습니다. 초가지붕의 웅장한 건물은 미마초의 풍요로운 자연 속에 조용히 자리하고 있습니다.",
      zh: "旧庄屋毛利家是保存在爱媛县宇和岛市三间町的历史性古民居。在江户时代作为村庄中心繁荣一时的庄屋宅邸，至今仍以当年的面貌被精心保存着。这座茅草屋顶的宏伟建筑，静静地矗立在三间町丰饶的自然环境之中。"
    }
  },
  {
    emoji: "📜",
    title: {
      ja: "庄屋（しょうや）ってどんな仕事？",
      en: "What Does a Shoya Do?",
      ko: "쇼야(庄屋)는 어떤 일을 했나요?",
      zh: "庄屋是做什么的？"
    },
    body: {
      ja: "庄屋とは、江戸時代に村を取りまとめていたリーダーのような役割の人のことです。年貢（税金）の取りまとめや、村の人々のもめごとの解決、農業の指導など、村全体のことを管理していました。現代でいえば、村長さんと地域の有力者を合わせたような存在です。毛利家はこの地域で代々庄屋を務め、三間町の人々の暮らしを支えてきました。",
      en: "A shoya was a person who played a leadership role in managing the village during the Edo period. They oversaw the collection of nengu (taxes), resolved disputes among villagers, and provided guidance on farming — managing the affairs of the entire village. In modern terms, they were a combination of village mayor and local dignitary. The Mouri family served as shoya in this area for generations, supporting the lives of the people of Mishima-cho.",
      ko: "쇼야란 에도 시대에 마을을 이끌었던 리더와 같은 역할을 하는 사람입니다. 연공(세금) 수납, 마을 사람들의 분쟁 해결, 농업 지도 등 마을 전체의 일을 관리했습니다. 현대로 말하면 마을 이장과 지역 유지를 합친 것 같은 존재입니다. 모리 가문은 이 지역에서 대대로 쇼야를 맡아 미마초 사람들의 생활을 지원해 왔습니다.",
      zh: "庄屋是江户时代负责统领村庄的领导者角色。他们负责收缴年贡（税收）、调解村民纠纷、指导农业生产等，管理整个村庄的事务。用现代的话来说，是村长和地方有力人士的结合体。毛利家世代担任该地区的庄屋，支撑着三间町百姓的生活。"
    }
  },
  {
    emoji: "⏳",
    title: {
      ja: "建物が建てられた時代",
      en: "When It Was Built",
      ko: "건물이 지어진 시대",
      zh: "建筑的年代"
    },
    body: {
      ja: "この建物は江戸時代に建てられたと伝わっています。今から約250年以上前のことです。電気もガスも水道もなかった時代、人々は囲炉裏で火を起こし、自然のものを使って毎日の暮らしを営んでいました。そんな時代の空気を、この建物では今も感じることができます。",
      en: "This building is said to have been built during the Edo period — more than 250 years ago. In an era without electricity, gas, or running water, people lit fires in the irori hearth and lived their daily lives using the gifts of nature. You can still feel the atmosphere of that era in this building today.",
      ko: "이 건물은 에도 시대에 지어진 것으로 전해집니다. 지금으로부터 약 250년 이상 전의 일입니다. 전기도 가스도 수도도 없었던 시대, 사람들은 이로리에서 불을 피우고 자연의 것들을 이용해 매일의 생활을 영위했습니다. 그런 시대의 분위기를 이 건물에서는 지금도 느낄 수 있습니다.",
      zh: "这座建筑据说建于江户时代，距今已有250年以上的历史。在那个没有电、没有煤气、没有自来水的年代，人们在地炉里生火，利用大自然的馈赠过着日常生活。如今在这座建筑里，仍能感受到那个时代的气息。"
    }
  },
  {
    emoji: "🌿",
    title: {
      ja: "茅葺き（かやぶき）屋根について",
      en: "About the Thatched Roof",
      ko: "띠 이엉(茅葺き) 지붕에 대하여",
      zh: "关于茅草屋顶"
    },
    body: {
      ja: "屋根に使われているのは「茅（かや）」と呼ばれる植物です。茅を厚く重ねて葺いた屋根は、夏は涼しく冬は暖かい、優れた断熱効果を持っています。一見するとただの草に見えますが、実は職人が何年もかけて技術を磨いた、高度な伝統工法です。現在では茅葺き屋根の建物はとても珍しく、全国的にも貴重な存在です。",
      en: "The roof is made from a plant called 'kaya' (miscanthus grass). A roof thatched with thick layers of kaya provides excellent insulation — cool in summer and warm in winter. At first glance it may look like simple grass, but it is in fact a highly skilled traditional technique that craftsmen spend years perfecting. Thatched-roof buildings are now very rare and are considered precious throughout Japan.",
      ko: "지붕에 사용되는 것은 '카야(茅)'라고 불리는 식물입니다. 카야를 두껍게 겹쳐 이은 지붕은 여름에는 시원하고 겨울에는 따뜻한 뛰어난 단열 효과를 가지고 있습니다. 언뜻 보면 단순한 풀처럼 보이지만, 실은 장인이 수년에 걸쳐 기술을 갈고닦은 고도의 전통 공법입니다. 현재 띠 이엉 지붕 건물은 매우 드물어 전국적으로도 귀중한 존재입니다.",
      zh: "屋顶所使用的是一种叫做'茅（かや）'的植物。将茅草厚厚叠铺而成的屋顶具有优异的隔热性能，夏天凉爽，冬天温暖。乍看之下似乎只是普通的草，但实际上是工匠们历经多年磨炼技艺的高超传统工法。如今茅草屋顶的建筑非常罕见，在全国范围内都是极为珍贵的存在。"
    }
  },
  {
    emoji: "🏗️",
    title: {
      ja: "建物の特徴",
      en: "Architectural Features",
      ko: "건물의 특징",
      zh: "建筑特色"
    },
    body: {
      ja: "旧庄屋毛利家の建物には、いくつかの見どころがあります。「角屋座敷（つのやざしき）」と呼ばれる部屋は、当時の庄屋の格式の高さを物語っています。太くて立派な柱や梁（はり）は、江戸時代の職人の技術の高さを今に伝えています。土間・座敷・囲炉裏の部屋など、当時の生活の様子がわかる空間が残されています。",
      en: "The buildings of the Mouri Family Estate have several highlights. The room called the 'Tsunoya-zashiki' speaks to the high social standing of the shoya of that time. The thick and impressive pillars and beams convey the skill of Edo-period craftsmen. Spaces that reveal the lifestyle of the time remain intact, including the earthen-floored entrance hall (doma), formal reception rooms (zashiki), and the irori hearth room.",
      ko: "구 쇼야 모리家의 건물에는 몇 가지 볼거리가 있습니다. '쓰노야자시키(角屋座敷)'라 불리는 방은 당시 쇼야의 높은 격식을 말해줍니다. 굵고 훌륭한 기둥과 들보는 에도 시대 장인의 높은 기술력을 지금에 전하고 있습니다. 토방·다다미방·이로리 방 등 당시의 생활 모습을 알 수 있는 공간이 남아 있습니다.",
      zh: "旧庄屋毛利家的建筑有几处看点。被称为'角屋座敷（つのやざしき）'的房间，展示了当时庄屋的崇高地位。粗壮而宏伟的柱子和横梁，至今传承着江户时代工匠的高超技艺。土间、座敷、地炉房间等能够了解当时生活状态的空间保存完好。"
    }
  }
];

// ----------------------------------------------------------
// 見どころスポット
// ----------------------------------------------------------
const SPOTS = [
  {
    id: "spot-01",
    emoji: "🏠",
    name:  { ja: "主屋（おもや）", en: "Main House", ko: "본채(本屋)", zh: "主屋" },
    badge: { ja: "必見", en: "Must-see", ko: "필수 관람", zh: "必看" },
    desc: {
      ja: "庄屋建築の典型的な様式を持つ主屋。広い土間や囲炉裏、床の間などが当時のまま保存されています。縁側から見える庭の景色も見事です。",
      en: "The main house exemplifies traditional headman architecture. The wide earthen floor, hearth, and alcove are preserved as they were. The view of the garden from the veranda is stunning.",
      ko: "쇼야 건축의 전형적인 양식을 가진 본채. 넓은 토방, 이로리, 도코노마 등이 당시 그대로 보존되어 있습니다. 툇마루에서 바라보는 정원 풍경도 훌륭합니다.",
      zh: "拥有庄屋建筑典型风格的主屋。宽阔的土间、地炉、壁龛等均以当年的面貌保存至今。从廊道望出去的庭院景色也十分壮观。"
    },
    img: "images/⑲IMG_8391.jpg"
  },
  {
    id: "spot-03",
    emoji: "🔥",
    name:  { ja: "囲炉裏（いろり）", en: "Irori (Open Hearth)", ko: "이로리(화로)", zh: "地炉（囲炉裏）" },
    badge: { ja: "必見", en: "Must-see", ko: "필수 관람", zh: "必看" },
    desc: {
      ja: "座敷の中央に設けられた囲炉裏は、暖房・炊事・照明を兼ねた江戸時代の暮らしの要です。家族が囲炉裏を囲んで食事をしたり、話をしたりした団らんの場でもありました。天井に黒く積もった煤（すす）は、長い年月にわたって使われ続けた証です。",
      en: "The irori open hearth set in the center of the room was the heart of Edo-period life, serving as heater, cooking stove, and light source all in one. It was also a gathering place where the family shared meals and conversation around the fire. The black soot accumulated on the ceiling is proof of its long years of use.",
      ko: "다다미방 중앙에 설치된 이로리는 난방·취사·조명을 겸한 에도 시대 생활의 핵심입니다. 가족이 이로리를 둘러싸고 식사를 하거나 이야기를 나누던 단란한 장소이기도 했습니다. 천장에 검게 쌓인 그을음은 오랜 세월 동안 사용되어 온 증거입니다.",
      zh: "设置在座敷中央的地炉，是兼具暖房、炊事、照明功能的江户时代生活核心。也是家人围坐地炉用餐、交谈的温馨聚会场所。天花板上积累的黑色烟灰，是长年使用的见证。"
    },
    img: "images/f4f741a2.jpg"
  },
  {
    id: "spot-04",
    emoji: "🚪",
    name:  { ja: "長屋門（ながやもん）", en: "Gatehouse", ko: "나가야몬(長屋門)", zh: "长屋门" },
    badge: { ja: "入口", en: "Entrance", ko: "입구", zh: "入口" },
    desc: {
      ja: "屋敷の正面に位置する長屋門。左右に小部屋を持つこの門は、かつて番人が常駐していました。重厚な木製の扉が当時の格式の高さを示しています。",
      en: "The gatehouse stands at the front of the estate. Flanked by small rooms where guards once kept watch, its heavy wooden doors speak to the family's high social standing.",
      ko: "저택 정면에 위치한 나가야몬. 좌우에 작은 방을 가진 이 문에는 예전에 경비원이 상주했습니다. 묵직한 목제 문이 당시의 높은 격식을 보여줍니다.",
      zh: "位于宅邸正面的长屋门。这扇左右设有小房间的门，曾有守卫常驻。厚重的木制大门彰显了当年的崇高地位。"
    },
    img: "images/WYAF5949ぼかし.jpg"
  },
  {
    id: "spot-05",
    emoji: "🌾",
    name:  { ja: "農具・民具展示室", en: "Farm Tools Exhibition", ko: "농기구·민구 전시실", zh: "农具·民具展示室" },
    badge: { ja: "展示", en: "Exhibition", ko: "전시", zh: "展示" },
    desc: {
      ja: "江戸〜明治時代に使われた農具や生活道具を展示。千歯扱き・唐箕・農鍬など、実際に触れることができる展示物もあります。また、当時の着物や装いも展示しており、江戸時代の農民の暮らしと衣文化を体感できます。",
      en: "This room displays farm tools and household items from the Edo and Meiji periods. Some exhibits — threshers, winnowing fans, and hoes — can be touched. Kimono and traditional clothing of the era are also on display, giving you a feel for both the daily life and clothing culture of Edo-period farmers.",
      ko: "에도~메이지 시대에 사용된 농기구와 생활 도구를 전시합니다. 천치扱き·당키·농쿠와 등 실제로 만져볼 수 있는 전시물도 있습니다. 또한 당시의 기모노와 복장도 전시되어 있어 에도 시대 농민의 생활과 의복 문화를 체감할 수 있습니다.",
      zh: "展出江户至明治时代使用的农具和生活用具。千齿扒、风车扇、农锄等部分展品可以亲手触摸体验。此外还展出了当时的和服与服饰，可以亲身感受江户时代农民的生活与服饰文化。"
    },
    img: null
  },
  {
    id: "spot-07",
    emoji: "🏛️",
    name:  { ja: "蔵（くら）", en: "Storehouse", ko: "창고(蔵)", zh: "土仓（蔵）" },
    badge: { ja: "歴史的建造物", en: "Historic Building", ko: "역사적 건조물", zh: "历史建筑" },
    desc: {
      ja: "白漆喰で仕上げられた土蔵は、火災や盗難から大切な財産・食料を守るために建てられました。厚い壁と重厚な扉が特徴的で、内部には当時の生活道具や貴重品が収められていました。現在では農具展示室と合わせて見学できます。",
      en: "The white-plastered storehouse was built to protect valuable possessions and food from fire and theft. Its thick walls and heavy doors are distinctive features. Valuables and household items of the time were stored inside. It can now be visited alongside the farm tools exhibition room.",
      ko: "흰 회벽으로 마감된 토창은 화재와 도난으로부터 소중한 재산과 식료를 지키기 위해 건설되었습니다. 두꺼운 벽과 묵직한 문이 특징적이며, 내부에는 당시의 생활 도구와 귀중품이 보관되어 있었습니다. 현재는 농기구 전시실과 함께 견학할 수 있습니다.",
      zh: "以白色石灰粉刷的土仓，是为保护珍贵财产和食物免遭火灾和盗窃而建造的。厚实的墙壁和沉重的大门是其特色，内部曾存放着当时的生活用具和贵重物品。现在可与农具展示室一同参观。"
    },
    img: "images/⑦IMG_8292-ぼかし.jpg"
  },
  {
    id: "spot-06",
    emoji: "🔥",
    name:  { ja: "かまど", en: "Kamado (Cooking Stove)", ko: "가마도(부뚜막)", zh: "灶台（かまど）" },
    badge: { ja: "生活の知恵", en: "Daily Life", ko: "생활의 지혜", zh: "生活智慧" },
    desc: {
      ja: "土間に残るかまどは、毎日の炊事に使われた生活の中心的な場所です。粘土と石で作られた頑丈な造りで、当時使われた鍋や道具もそのまま置かれています。煙を外に逃がす煙道の仕組みなど、先人の知恵が随所に見られます。",
      en: "The kamado cooking stove remaining in the earthen-floored entrance hall was the heart of daily cooking life. Built solidly from clay and stone, original pots and tools are still displayed around it. You can see the wisdom of our ancestors throughout, including the flue system for venting smoke outside.",
      ko: "토방에 남아 있는 가마도는 매일의 취사에 사용된 생활의 중심적인 장소입니다. 점토와 돌로 만들어진 튼튼한 구조로, 당시 사용하던 냄비와 도구들이 그대로 놓여 있습니다. 연기를 밖으로 내보내는 연도의 구조 등 선조들의 지혜를 곳곳에서 볼 수 있습니다.",
      zh: "土间里保留下来的灶台，是每天炊事的生活中心场所。以黏土和石头建造而成，结构坚固，当时使用的锅具和工具至今仍摆放原处。烟道将烟气排出室外的构造等，处处可见先人的智慧。"
    },
    img: "images/unnamed.jpg"
  }
];

// ----------------------------------------------------------
// クイズ問題
// ----------------------------------------------------------
const QUIZ_QUESTIONS = [
  {
    q: {
      ja: "旧庄屋毛利家がある場所はどこでしょう？",
      en: "Where is the Mouri Family Estate located?",
      ko: "구 쇼야 모리家가 있는 곳은 어디인가요?",
      zh: "旧庄屋毛利家位于哪里？"
    },
    choices: {
      ja: ["愛媛県宇和島市三間町", "愛媛県松山市", "高知県四万十市", "徳島県阿南市"],
      en: ["Mishima-cho, Uwajima, Ehime", "Matsuyama, Ehime", "Shimanto, Kochi", "Anan, Tokushima"],
      ko: ["에히메현 우와지마시 미마초", "에히메현 마쓰야마시", "고치현 시만토시", "도쿠시마현 아난시"],
      zh: ["爱媛县宇和岛市三间町", "爱媛县松山市", "高知县四万十市", "德岛县阿南市"]
    },
    correctIndex: 0,
    explanation: {
      ja: "旧庄屋毛利家は愛媛県宇和島市三間町にあります。宇和島藩の支配下で庄屋として地域を治めた家柄です。",
      en: "The Mouri Family Estate is in Mishima-cho, Uwajima City, Ehime Prefecture. The family served as village headmen under the Uwajima Domain.",
      ko: "구 쇼야 모리家는 에히메현 우와지마시 미마초에 있습니다. 우와지마 번의 지배하에 쇼야로서 지역을 다스린 가문입니다.",
      zh: "旧庄屋毛利家位于爱媛县宇和岛市三间町。该家族在宇和岛藩的统治下以庄屋身份治理当地。"
    }
  },
  {
    q: {
      ja: "「庄屋」とはどんな役割でしたか？",
      en: "What was the role of a '庄屋 (shoya)'?",
      ko: "'쇼야(庄屋)'는 어떤 역할이었나요?",
      zh: "'庄屋'是什么角色？"
    },
    choices: {
      ja: ["村の行政・農政を担った地域の有力農民", "武士の一種", "商人の長", "お寺の住職"],
      en: ["A leading farmer managing local administration", "A type of samurai", "A merchant leader", "A Buddhist temple abbot"],
      ko: ["마을의 행정·농정을 담당한 지역의 유력 농민", "무사의 일종", "상인의 우두머리", "절의 주지스님"],
      zh: ["负责村庄行政和农政的地方有力农民", "武士的一种", "商人首领", "寺庙住持"]
    },
    correctIndex: 0,
    explanation: {
      ja: "庄屋（または名主）は江戸時代に村の行政・農政・年貢徴収などを取り仕切った地域の有力農民です。",
      en: "A shoya (or nanushi) was an influential farmer who managed village administration, agricultural affairs, and tax collection during the Edo period.",
      ko: "쇼야(또는 나누시)는 에도 시대에 마을의 행정·농정·연공 징수 등을 주관한 지역의 유력 농민입니다.",
      zh: "庄屋（或名主）是江户时代负责管理村庄行政、农政、年贡征收等事务的地方有力农民。"
    }
  },
  {
    q: {
      ja: "主屋（おもや）の特徴的な屋根の形はどれでしょう？",
      en: "What is the distinctive roof style of the main house?",
      ko: "본채(本屋)의 특징적인 지붕 형태는 무엇인가요?",
      zh: "主屋的特色屋顶形式是什么？"
    },
    choices: {
      ja: ["入母屋造り", "切妻造り", "寄棟造り", "方形造り"],
      en: ["Hip-and-gable (irimoya)", "Gabled (kirizuma)", "Hipped (yosemune)", "Square pyramid (hogyou)"],
      ko: ["팔작지붕(入母屋造り)", "맞배지붕(切妻造り)", "우진각지붕(寄棟造り)", "사모지붕(方形造り)"],
      zh: ["歇山顶（入母屋造）", "悬山顶（切妻造）", "庑殿顶（寄棟造）", "攒尖顶（方形造）"]
    },
    correctIndex: 0,
    explanation: {
      ja: "主屋は入母屋造りの屋根を持ちます。格式の高い建物に多く用いられた屋根形式で、切妻と寄棟を組み合わせた形が特徴です。",
      en: "The main house has a hip-and-gable (irimoya) roof — a prestigious style that combines elements of gabled and hipped roofs.",
      ko: "본채는 팔작지붕(入母屋造り)을 갖고 있습니다. 격식이 높은 건물에 많이 사용된 지붕 형태로, 맞배지붕과 우진각지붕을 결합한 형태가 특징입니다.",
      zh: "主屋采用歇山顶（入母屋造）。这是一种常用于高规格建筑的屋顶形式，其特点是将悬山顶与庑殿顶相结合。"
    }
  },
  {
    q: {
      ja: "土蔵の外壁が白いのはなぜでしょう？",
      en: "Why are the storehouse walls white?",
      ko: "토창의 외벽이 흰 이유는 무엇인가요?",
      zh: "土仓外墙为什么是白色的？"
    },
    choices: {
      ja: ["漆喰で仕上げることで火事や雨水から守るため", "白が好まれたため", "幕府の命令だったため", "稲を乾燥させるため"],
      en: ["Plastered lime protects from fire and rain", "White was simply preferred", "It was ordered by the shogunate", "To help dry rice"],
      ko: ["회벽으로 마감하여 화재와 빗물로부터 보호하기 위해", "흰색이 선호되었기 때문에", "막부의 명령이었기 때문에", "벼를 건조시키기 위해"],
      zh: ["用石灰粉刷可防火防雨", "只是喜欢白色", "是幕府的命令", "为了晾干稻米"]
    },
    correctIndex: 0,
    explanation: {
      ja: "白漆喰（しっくい）仕上げは防火・防水に優れており、大切な財産や食料を守るために蔵の壁に使われました。",
      en: "White lime plaster (shikkui) is highly fire- and water-resistant, making it ideal for protecting valuable goods and food stored in the warehouse.",
      ko: "흰 회벽(しっくい) 마감은 방화·방수에 뛰어나며, 소중한 재산과 식료를 지키기 위해 창고 벽에 사용되었습니다.",
      zh: "白色石灰涂料（灰泥）具有出色的防火防水性能，被用于涂抹仓库墙壁，以保护珍贵财产和食物。"
    }
  },
  {
    q: {
      ja: "毛利家の庭園で楽しめる秋の風物詩は何でしょう？",
      en: "What is the autumn highlight in the Mouri family garden?",
      ko: "모리家 정원에서 즐길 수 있는 가을의 풍물시는 무엇인가요?",
      zh: "在毛利家庭院里可以欣赏到的秋季代表景色是什么？"
    },
    choices: {
      ja: ["紅葉", "桜", "梅", "朝顔"],
      en: ["Autumn foliage", "Cherry blossoms", "Plum blossoms", "Morning glories"],
      ko: ["단풍", "벚꽃", "매화", "나팔꽃"],
      zh: ["红叶", "樱花", "梅花", "牵牛花"]
    },
    correctIndex: 0,
    explanation: {
      ja: "毛利家の庭園では秋になると美しい紅葉を楽しむことができます。石灯籠や手水鉢と紅葉のコントラストが見事です。",
      en: "The garden is known for its beautiful autumn foliage. The contrast of red and orange leaves against stone lanterns and the water basin is spectacular.",
      ko: "모리家 정원에서는 가을이 되면 아름다운 단풍을 즐길 수 있습니다. 석등롱, 손씻는 돌그릇과 단풍의 대비가 훌륭합니다.",
      zh: "毛利家的庭院秋天可以欣赏到美丽的红叶。石灯笼、洗手钵与红叶的色彩对比令人叹为观止。"
    }
  }
];

// ----------------------------------------------------------
// 四季の毛利家
// ----------------------------------------------------------
const SEASONS = [
  {
    key: "spring",
    emoji: "🌸",
    name:   { ja: "春", en: "Spring", ko: "봄", zh: "春" },
    period: { ja: "3月〜5月", en: "March – May", ko: "3월~5월", zh: "3月～5月" },
    desc: {
      ja: "庭園の梅が咲き始め、春の訪れを告げます。桜が散ると青もみじが芽吹き、屋敷全体が淡い緑に包まれます。縁側に腰掛けてのんびりと春の庭を眺めるひとときを。",
      en: "Plum blossoms signal spring's arrival in the garden. As cherry petals fall, fresh green maple leaves emerge, enveloping the estate in soft hues. Sit on the veranda and take in the peaceful spring garden.",
      ko: "정원의 매화가 피기 시작하며 봄의 도래를 알립니다. 벚꽃이 지면 새 초록 단풍이 싹트고, 저택 전체가 연한 초록으로 물들입니다. 툇마루에 앉아 여유롭게 봄 정원을 바라보는 한때를.",
      zh: "庭院里的梅花开始绽放，预告着春天的来临。樱花凋落后，嫩绿的枫叶萌发，整座宅邸被淡绿色包裹。坐在廊道上悠闲地眺望春日庭院，享受这美好时光。"
    },
    events: {
      ja: ["梅の花", "お茶会（春）", "ひな人形展示"],
      en: ["Plum blossoms", "Spring tea ceremony", "Hina doll display"],
      ko: ["매화꽃", "다도회(봄)", "히나 인형 전시"],
      zh: ["梅花", "茶会（春）", "女儿节人偶展示"]
    },
    img: null
  },
  {
    key: "summer",
    emoji: "🍃",
    name:   { ja: "夏", en: "Summer", ko: "여름", zh: "夏" },
    period: { ja: "6月〜8月", en: "June – August", ko: "6월~8월", zh: "6月～8月" },
    desc: {
      ja: "緑深い夏の庭は涼しげな木陰を作ります。土間は夏でもひんやりとして快適。夕暮れ時には縁側でスイカを食べながら涼む、昔ながらの夏の過ごし方を体験できます。",
      en: "The lush summer garden creates cool shade. The earthen floor stays cool even in summer. At dusk, experience a traditional summer evening on the veranda — just as generations before did.",
      ko: "깊은 녹음의 여름 정원은 시원한 나무 그늘을 만듭니다. 토방은 여름에도 서늘하고 쾌적합니다. 해 질 무렵에는 툇마루에서 수박을 먹으며 더위를 식히는 옛 방식의 여름을 체험할 수 있습니다.",
      zh: "郁郁葱葱的夏日庭院营造出凉爽的树荫。土间在夏天也保持凉爽舒适。傍晚时分，可以在廊道上吃着西瓜乘凉，体验传统的消夏方式。"
    },
    events: {
      ja: ["青もみじ", "昔あそび体験", "夏の特別公開"],
      en: ["Green maples", "Traditional games", "Summer special opening"],
      ko: ["초록 단풍", "옛날 놀이 체험", "여름 특별 공개"],
      zh: ["青枫", "传统游戏体验", "夏季特别开放"]
    },
    img: null
  },
  {
    key: "autumn",
    emoji: "🍁",
    name:   { ja: "秋", en: "Autumn", ko: "가을", zh: "秋" },
    period: { ja: "9月〜11月", en: "September – November", ko: "9월~11월", zh: "9月～11月" },
    desc: {
      ja: "石灯籠と手水鉢に映える紅葉が最大の見どころ。秋祭りや特別公開も行われ、一年で最もにぎわう季節です。落ち葉が敷き詰められた参道を歩くだけで、江戸の秋を感じさせてくれます。",
      en: "Autumn foliage reflecting in the stone lanterns and water basin is the estate's greatest seasonal highlight. Autumn festivals and special openings make this the busiest time of year. Walking the leaf-carpeted path feels like a journey to Edo-period autumn.",
      ko: "석등롱과 손씻는 돌그릇에 비치는 단풍이 최대 볼거리입니다. 가을 축제와 특별 공개도 열리며 일 년 중 가장 활기찬 계절입니다. 낙엽이 깔린 참도를 걷는 것만으로도 에도의 가을을 느낄 수 있습니다.",
      zh: "映照在石灯笼和洗手钵上的红叶是最大的看点。秋季还举办秋祭和特别开放活动，是一年中最热闹的季节。仅仅漫步在铺满落叶的参道上，就能感受到江户时代的秋天。"
    },
    events: {
      ja: ["紅葉", "秋まつり", "特別公開", "収穫祭"],
      en: ["Autumn foliage", "Autumn festival", "Special opening", "Harvest festival"],
      ko: ["단풍", "가을 축제", "특별 공개", "추수 축제"],
      zh: ["红叶", "秋季祭典", "特别开放", "丰收节"]
    },
    img: null
  },
  {
    key: "winter",
    emoji: "❄️",
    name:   { ja: "冬", en: "Winter", ko: "겨울", zh: "冬" },
    period: { ja: "12月〜2月", en: "December – February", ko: "12월~2월", zh: "12月～2月" },
    desc: {
      ja: "雪化粧をした茅葺き屋根と庭園は幻想的な美しさを見せます。囲炉裏を囲んで温かいお茶をいただきながら、江戸時代の人々も同じようにこの冬を過ごしたのかとしみじみ感じます。",
      en: "Snow-dusted thatched roofs and a snow-covered garden create an almost magical beauty. Sitting around the hearth with warm tea, you can feel a deep connection to those who spent their winters here centuries ago.",
      ko: "눈으로 단장한 초가지붕과 정원은 환상적인 아름다움을 보여줍니다. 이로리를 둘러싸고 따뜻한 차를 마시며, 에도 시대 사람들도 마찬가지로 이 겨울을 보냈을 것이라 깊이 느끼게 됩니다.",
      zh: "被白雪覆盖的茅草屋顶和庭院展现出梦幻般的美丽。围坐在地炉旁品着温热的茶，不禁深深感慨江户时代的人们也曾这样度过冬天。"
    },
    events: {
      ja: ["雪景色", "囲炉裏体験", "正月飾り"],
      en: ["Snow scenery", "Open-hearth experience", "New Year decorations"],
      ko: ["설경", "이로리 체험", "정월 장식"],
      zh: ["雪景", "地炉体验", "新年装饰"]
    },
    img: null
  }
];

// ----------------------------------------------------------
// アンケート設問（動的生成）
// ----------------------------------------------------------
const SURVEY_QUESTIONS = [];
