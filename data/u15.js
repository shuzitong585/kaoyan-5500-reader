// U15 · 5500 词｜原创示范单元（M-A-13：正文为原创撰写，非真题原文，不与任何真题篇目对应）
// 证据字段（词频/词形统计）由母表直出（5500_D档真题层全量名单_V0.1.csv Unit=15 行；提取件 _check\U15_25词语料统计提取.csv）。
// 正文定稿：_draft\U15_body_V1.0.md。字段骨架沿用已验收的 u14.js（22 顶层键）。
// 本单元母表「官方词形」与「规范词形」25/25 严格相等，manifest 零修正。
window.UnitRegistry.register({
  "id": "U15",
  "status": "official",
  "sequence": 15,
  "totalUnits": 112,
  "series": "考研英语5500词｜真题语境记单词",
  "title": "The Cooling Curve",
  "subtitle": "高频实词 · 原创示范单元 U15",
  "stage": "原创示范｜阅读证据（M-A）",
  "newWordCount": 25,
  "storage": {
    "namespace": "kaoyan5500:U15",
    "version": "V0.1",
    "resetOnFirstVersion": true
  },
  "tier": "D",
  "anchorArticle": null,
  "examSource": {
    "materialClass": "M-A",
    "sourceType": "original",
    "sourceRef": null,
    "bodyMatchStatus": "not_applicable",
    "rightsStatus": "self_authored",
    "displayPermission": "allowed_with_label",
    "kicker": "CONTEXT EVIDENCE",
    "title": "材料应用",
    "summary": "4 题 · 用本篇原创材料反推词义",
    "intro": "用本篇材料里的出现证据，<br>反推这个词该怎么用。",
    "note": "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。",
    "verifiedAt": "2026-10-18",
    "reviewStatus": "pending_human_review"
  },
  "goals": [
    "在县域科学展、测量误差与评审争议的语域中掌握 25 个高频实词",
    "吃透 pupil 的全复数与三年集中、outside 的近年仅 1 次、per 的零形态，以及 purchase / charge / light 的多词形分布",
    "识别 mean 与 means 的分立、light / fair / charge 的同形多义，以及 complex / means 两词「已在500」的归属待裁定"
  ],
  "paragraphs": [
    {
      "id": "p1",
      "en": "The county science fair has been held in the same building since 1987: a bus depot that lost its buses in the recession and was sold to the education authority for a nominal sum. The title on the door still reads DEPOT No. 4, and nobody has bothered to paint over it. Every March, pupils from across the county arrive with cardboard screens, extension leads and models made of dowel and glue, and for two days the hall smells of warm dust and solder. I have judged the physics section for eleven years, ever since I retired from a firm that designed heating systems. My role is small. I walk between the tables, ask the same four questions, and try to be fair to children who have spent six months on something that may collapse before lunch.",
      "cn": "县科学展从 1987 年起就在同一栋楼里办：那是一座在经济衰退中失去公交线路的公交总站，后来以象征性的一笔钱卖给了教育当局。门上的标题仍然写着「第四车场」，也没人费心把它盖掉。每年三月，来自全县各地的学生带着纸板展板、接线板和用木榫与胶水粘成的模型来到这里，两天里整个大厅都是温热灰尘与焊锡的气味。我在物理组当了十一年评委，从设计供暖系统的那家公司退休之后就开始了。我的职责很小。我在桌子之间走动，问同样的四个问题，尽量对那些花了六个月做一件可能午饭前就塌掉的东西的孩子保持公平。"
    },
    {
      "id": "p2",
      "en": "This year a pupil named Nell Farrant arrived with three glass jars, a thermometer and a stopwatch, and a screen whose title was almost apologetic: \"How Fast Does Water Cool?\" She had purchased the jars for four pounds from a charity shop, saved the receipt in an envelope, and spent nothing else. Her question was narrow and, I thought, well chosen: does the surface area of a container change the rate at which hot water loses heat? She had wrapped one jar in felt, left one bare, and covered the third in kitchen foil, and she measured the temperature of each every two minutes for half an hour, then estimated the mean of three trials. The physical model on her table was a section of pipe cut lengthwise and painted to show where the heat goes. It was the simplest exhibit in the hall and the only one that made me want to sit down.",
      "cn": "今年，一个名叫内尔·法兰特的学生带来三只玻璃罐、一支温度计、一只秒表和一块标题近乎道歉的展板：「水冷得多快？」那三只罐子是她花四英镑从慈善商店买来的，收据被她收进一个信封，除此之外她一分钱没花。她的问题很窄，而我认为选得很好：容器的表面积会不会改变热水散热的速率？她把一只罐子裹上毛毡，一只裸露，第三只包上厨房锡纸；每两分钟测一次温度，持续半小时，再取三轮实验的平均值。她桌上的实物模型是一段纵剖开的管子，涂了颜色，用来标示热量去了哪里。那是全场最简单的展品，也是唯一让我想坐下来看的。"
    },
    {
      "id": "p3",
      "en": "Her first set of numbers was a mess. The bare jar cooled fastest, as she had expected, but the felt jar behaved almost like the foil one, and one reading was so far outside the pattern that she had circled it in red. Either the thermometer was faulty or something in the hall was warming one side of the table, and at first she had no way of telling which type of error she was facing. She spent the morning testing the thermometer in iced water, then borrowed a second one, then noticed that the strip lights above her table ran the length of the hall and threw a visible band of light across the glass. She moved everything half a metre outside that band and started again. The new readings were similar for the felt and the foil jars for the first ten minutes and then separated cleanly, and the cooling curve, when she drew it, was the neatest thing on the screen.",
      "cn": "她第一组数据一团糟。裸露的罐子冷得最快，这在她意料之中，可毛毡那只的表现几乎和锡纸那只一样，还有一个读数和整体规律差得太远，被她用红笔圈了出来。要么温度计有问题，要么大厅里有东西在给桌子的一侧加热，而她起初没有办法判断自己面对的是哪一类误差。她花了一上午在冰水里测试温度计，又借来第二支，随后才发现头顶的长条灯贯穿整个大厅，在玻璃上投下一道看得见的光带。她把所有东西搬离那道光带半米，重新开始。新的读数在前十分钟里，毛毡罐和锡纸罐很接近，之后干净地分开；她画出的那条降温曲线，是整块展板上最漂亮的东西。"
    },
    {
      "id": "p4",
      "en": "What made her project significant was not the result but the correction. Most pupils at that stage would have kept the first set of numbers and written a conclusion that ignored the anomaly; Nell threw away a morning's work and explained why. When I asked her what the foil was doing, she said that it reflected the light but also carried heat away from the jar, so the net effect depended on which of the two was stronger at a given temperature. That is a complex sentence for a fourteen-year-old, and she had arrived at it by measurement rather than by reading. Her teacher, Mr. Okwe, stood at the back of the hall and said nothing, which I took to be good practice. The rules of the fair are strict about outside help: a teacher may advise, but the pupil must build, measure and interpret.",
      "cn": "让她的项目有分量的不是结果，而是那次修正。那个阶段的大多数学生会保留第一组数据，写下一个忽略异常的结论；内尔扔掉了一上午的工作，并且解释了为什么。我问她锡纸在起什么作用，她说锡纸会反射光，但也会把热量从罐子带走，所以净效果取决于在某一温度下这两者哪个更强。对一个十四岁的孩子来说，这是个复杂的句子，而她是靠测量而不是靠阅读得到的。她的老师奥奎先生站在大厅后头，一句话没说，我认为这是好做法。科学展的规则对校外帮助很严格：老师可以提建议，但搭建、测量和解释必须由学生本人完成。"
    },
    {
      "id": "p5",
      "en": "Judging took longer than usual. One of my fellow judges argued that the gap between the felt and foil curves was too small to count, and that in any case the overall standard of the section was low. I disagreed on the first point and agreed, privately, on the second. We had three trials per jar, and the rate per minute was steady enough that the gap could not be explained by reading error; the effect was small, but it was not noise. What settled the argument was a means of checking that Nell had built in without being asked: she had weighed each jar before and after, so the loss of water could be compared with the loss of heat. No other exhibit had a control of that kind. She took second place overall, which she pretended not to mind, and the pupil who took first had built a working radio.",
      "cn": "评审比往年久。一位同组评委认为，毛毡和锡纸两条曲线之间的差距太小，不足以计入，而且这一组的整体水平本来就低。第一点我不同意，第二点我私下同意。每只罐子我们有三轮数据，每分钟的速率足够稳定，那条差距无法用读数误差来解释；效应很小，但不是噪声。真正让争论停下来的是内尔自己加进去、没人要求她加的一项核验手段：她在实验前后各称一次每只罐子的重量，这样失水量就能和失热量作比较。全场没有第二件展品有这样的对照。她最终拿了总排名第二，她装作不在意；拿第一的那个学生做了一台能用的收音机。"
    },
    {
      "id": "p6",
      "en": "On the last afternoon I asked Nell what she wanted to do after school. She said she did not know, but that she liked the moment when a number stopped being a number and started being an argument. I do not mean that she was argumentative; I mean that she had understood something most of the adults in the hall had forgotten, which is that a measurement is only as good as the person willing to distrust it. The depot will be demolished next year to make room for a car park, and the fair will move to a sports hall with better light and worse acoustics. The cooling curves will go into a folder, and in ten years, if she stays with physics, she may find them again and be embarrassed by the scale of the axes. That embarrassment is part of a career, and it is a fair charge for the four pounds she spent on three jars.",
      "cn": "最后一天下午，我问内尔毕业后想做什么。她说还不知道，但她喜欢那个时刻：一个数字不再只是数字，而开始成为一个论据。我不是说她好争辩；我是说，她明白了一件大厅里大多数成年人都忘了的事——一次测量的价值，取决于那个人是否愿意怀疑它。车场明年会被拆掉，腾出地方建停车场，科学展将搬到一座光线更好、音效更差的体育馆。那些降温曲线会被收进一个文件夹；十年后，如果她继续做物理，也许会再翻到它们，并为坐标轴的刻度感到难为情。这种难为情是职业生涯的一部分，也是她为那三只罐子花掉的四英镑所付的一份公平价钱。"
    }
  ],
  "vocabulary": [
    {
      "word": "across",
      "pos": "prep./adv.",
      "contextMeaning": "遍及；横过；在…各处",
      "englishDefinition": "from one side of something to the other, or in every part of a place",
      "collocation": "pupils from across the county　/　across the glass",
      "contextualExample": "pupils from across the county arrive",
      "readingNote": "across(6)/Across(2)——本形 6、首字母大写 2。8 次分布在 6 篇 / 6 年，近 10 年却有 7 次，首次 2015、最近 2024，属「近年才进入语料」的词，不能按 2005–2025 全周期去说它长期高频。大写 Across(2) 从母表无法判定是句首大写还是专名，标为大小写待人工裁定。",
      "examEvidence": "总频次 8 次　·　出现 6 篇 / 6 年　·　近10年 7 次　·　首次 2015 / 最近 2024　｜　语料词形：across(6)　Across(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "across 指「从一边到另一边」或「遍及」，through 强调「穿过内部」；across from＝在…对面；come across sb/sth＝偶然遇到。作副词时后面不接宾语（walk across）。",
      "forms": []
    },
    {
      "word": "save",
      "pos": "v.",
      "contextMeaning": "节省；保存；挽救",
      "englishDefinition": "to keep something for later use, to avoid waste, or to rescue someone from harm",
      "collocation": "saved the receipt in an envelope　/　save time",
      "contextualExample": "saved the receipt in an envelope",
      "readingNote": "save(7)/saved(1)——原形为主（7 次），过去式仅 1 次，无三单、无 -ing。8 次散在 6 篇 / 5 年，近 10 年 7 次，首次 2010、最近 2025，是本单元少数横跨到 2025 年的词。",
      "examEvidence": "总频次 8 次　·　出现 6 篇 / 5 年　·　近10年 7 次　·　首次 2010 / 最近 2025　｜　语料词形：save(7)　saved(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "save sb from sth＝把某人从…中救出；save on sth＝在…上节省；save 后接双宾语（save me a seat）；注意 save 与 safe（安全的）拼写差别。",
      "forms": [
        "saves",
        "saved",
        "saving"
      ]
    },
    {
      "word": "significant",
      "pos": "adj.",
      "contextMeaning": "重要的；有意义的；（统计上）显著的",
      "englishDefinition": "large or important enough to have an effect or to be noticed",
      "collocation": "made her project significant　/　a significant difference",
      "contextualExample": "What made her project significant was not the result but the correction",
      "readingNote": "significant(8)——单一词形，语料中无 significantly、无比较级。8 次分布在 7 篇 / 7 年，近 10 年 7 次，首次 2010、最近 2025。只看词形会误以为它没有副词派生，实际 significantly 只是未进入本语料。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 7 年　·　近10年 7 次　·　首次 2010 / 最近 2025　｜　语料词形：significant(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "significant 在学术语境里常等于「统计上显著」，不等于「重要」；副词 significantly 修饰形容词或动词；名词 significance 常用于 of significance。",
      "forms": [
        "significantly",
        "significance",
        "insignificant"
      ]
    },
    {
      "word": "title",
      "pos": "n./v.",
      "contextMeaning": "标题；名称；头衔",
      "englishDefinition": "the name given to a book, film, article or work of art; a word showing rank or position",
      "collocation": "The title on the door　/　the title of her project",
      "contextualExample": "The title on the door still reads DEPOT No. 4",
      "readingNote": "titles(5)/title(2)/title's(1)——复数为主（5 次），单数 2 次，另有所有格 title's(1)，属引用与版式边界，不是独立词条。8 次只在 5 篇 / 4 年，篇内密度约 1.6 次 / 篇，近 10 年 7 次，最近 2025。",
      "examEvidence": "总频次 8 次　·　出现 5 篇 / 4 年　·　近10年 7 次　·　首次 2008 / 最近 2025　｜　语料词形：titles(5)　title(2)　title's(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "title 作动词是「给…加标题 / 授予头衔」，be titled＝题为；注意 title 与 headline（报纸标题）、heading（章节标题）的分工。",
      "forms": [
        "titles",
        "titled"
      ]
    },
    {
      "word": "area",
      "pos": "n.",
      "contextMeaning": "面积；地区；领域",
      "englishDefinition": "the measured size of a surface, a part of a place, or a subject field",
      "collocation": "the surface area of a container　/　a rural area",
      "contextualExample": "does the surface area of a container change the rate",
      "readingNote": "areas(5)/area(3)——复数略多（5 比 3），无 -ed、无大写。8 次分布在 6 篇 / 6 年，近 10 年 6 次，首次 2006、最近 2023，属分布最均匀的一类，没有明显早晚偏向。",
      "examEvidence": "总频次 8 次　·　出现 6 篇 / 6 年　·　近10年 6 次　·　首次 2006 / 最近 2023　｜　语料词形：areas(5)　area(3)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "area 表「面积」时通常不可数（in area），表「地区 / 领域」时可数；注意 area 与 region、district 的层级差别；the area of a circle＝圆面积。",
      "forms": [
        "areas",
        "areal"
      ]
    },
    {
      "word": "net",
      "pos": "adj./n.",
      "contextMeaning": "净的；扣除后的；网",
      "englishDefinition": "remaining after costs or amounts have been deducted; a material of knotted string with holes",
      "collocation": "the net effect depended on which of the two was stronger　/　net weight",
      "contextualExample": "so the net effect depended on which of the two was stronger",
      "readingNote": "net(8)——单一词形，无 nets、无 netted。8 次挤在 5 篇 / 4 年，篇内密度 1.6 次 / 篇，最近 2021、首次 2007，属「篇数少但篇内密」的词，不能按 8 次就说它铺得开。net 另有名词「网」、动词「净得」，语料只记词形，不分词性。",
      "examEvidence": "总频次 8 次　·　出现 5 篇 / 4 年　·　近10年 6 次　·　首次 2007 / 最近 2021　｜　语料词形：net(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "net 作形容词常置名词前（net profit / net effect），与 gross（总的）相对；net of tax＝扣除税后；safety net 是常见搭配。",
      "forms": [
        "nets",
        "netted",
        "netting"
      ]
    },
    {
      "word": "physical",
      "pos": "adj.",
      "contextMeaning": "实物的；身体的；物理的",
      "englishDefinition": "relating to the body or to real objects, or to the science of physics",
      "collocation": "The physical model on her table　/　physical evidence",
      "contextualExample": "The physical model on her table was a section of pipe",
      "readingNote": "physical(8)——单一词形，无 physically、无比较级。8 次只在 5 篇 / 4 年，密度 1.6 次 / 篇，首次 2007、最近 2019，近 7 年没有新记录，属证据停在中段的词。",
      "examEvidence": "总频次 8 次　·　出现 5 篇 / 4 年　·　近10年 6 次　·　首次 2007 / 最近 2019　｜　语料词形：physical(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "physical 与 mental、chemical 常作对立组；physical model＝实物模型（区别于 conceptual model）；名词 physics 与 physician（内科医生）不要混。",
      "forms": [
        "physically",
        "physics",
        "physician"
      ]
    },
    {
      "word": "rate",
      "pos": "n./v.",
      "contextMeaning": "速率；比率；评级",
      "englishDefinition": "the speed at which something happens, or a measure of one quantity against another",
      "collocation": "the rate at which hot water loses heat　/　the rate per minute",
      "contextualExample": "change the rate at which hot water loses heat",
      "readingNote": "rate(8)——单一词形，无 rates、无 rated。8 次分布在 7 篇 / 6 年，近 10 年 6 次，首次 2006、最近 2023。虽然只有一种词形，但它同形承担名词「比率 / 速率」与动词「评级」，语料层面无法区分。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 6 年　·　近10年 6 次　·　首次 2006 / 最近 2023　｜　语料词形：rate(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "at a rate of＋数量（at a rate of 5 per cent）；at any rate＝无论如何；rate 作动词是「评价 / 评级」，rate sth as sth；注意 rate 与 ratio（比值）、pace（步速）的区别。",
      "forms": [
        "rates",
        "rated",
        "rating"
      ]
    },
    {
      "word": "type",
      "pos": "n./v.",
      "contextMeaning": "类型；种类；打字",
      "englishDefinition": "a class of things that share particular features; to write using a keyboard",
      "collocation": "which type of error she was facing　/　a type of container",
      "contextualExample": "telling which type of error she was facing",
      "readingNote": "type(5)/types(3)——单数 5、复数 3，无 typed。8 次分布在 6 篇 / 6 年，近 10 年 6 次，首次 2010、最近 2024。语料只记词形，名词「类型」与动词「打字」同形，无法从计数区分。",
      "examEvidence": "总频次 8 次　·　出现 6 篇 / 6 年　·　近10年 6 次　·　首次 2010 / 最近 2024　｜　语料词形：type(5)　types(3)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "a type of＋单数名词（后接单数谓语）；types of＋复数；type 与 kind、sort 基本同义，但 kind 更口语；typist＝打字员。",
      "forms": [
        "types",
        "typed",
        "typical"
      ]
    },
    {
      "word": "complex",
      "pos": "adj./n.",
      "contextMeaning": "复杂的；综合体",
      "englishDefinition": "made of many connected parts and therefore hard to understand; a group of connected buildings or ideas",
      "collocation": "a complex sentence for a fourteen-year-old　/　a complex system",
      "contextualExample": "That is a complex sentence for a fourteen-year-old",
      "readingNote": "complex(8)——单一词形，无 complexes、无比较级。8 次分布在 7 篇 / 7 年，近 10 年 5 次，首次 2005、最近 2025。母表「500复现」列标「是」，且「机器候选等级」整格写作「已在500」，属跨词库归属问题，待人工裁定，本轮不删词、不改词表。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 7 年　·　近10年 5 次　·　首次 2005 / 最近 2025　｜　语料词形：complex(8)　｜　母表标记：已在500 · 500复现 是",
      "examTips": "complex 与 complicated 近义，但 complex 更强调「由多个部分构成」；complex 作名词指建筑群或情结（an inferiority complex）；反义 simple。",
      "forms": [
        "complexity",
        "complexes",
        "complexities"
      ]
    },
    {
      "word": "estimate",
      "pos": "v./n.",
      "contextMeaning": "估计；估算；估价单",
      "englishDefinition": "to calculate an amount approximately, or an approximate calculation",
      "collocation": "then estimated the mean of three trials　/　a rough estimate",
      "contextualExample": "then estimated the mean of three trials",
      "readingNote": "estimate(4)/estimated(3)/estimates(1)——原形 4、过去式 / 过去分词 3、三单 1，无 estimating。8 次分布在 7 篇 / 7 年，近 10 年 5 次，首次 2006、最近 2025。名动同形：原形既可作动词，也可作名词「估价」，计数无法区分。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 7 年　·　近10年 5 次　·　首次 2006 / 最近 2025　｜　语料词形：estimate(4)　estimated(3)　estimates(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "estimate 后接 at（estimate the cost at £200）；It is estimated that...＝据估计；名词重音在前（ˈestɪmət），动词重音在后（ˈestɪmeɪt）。",
      "forms": [
        "estimates",
        "estimated",
        "estimating",
        "estimation"
      ]
    },
    {
      "word": "overall",
      "pos": "adj./adv.",
      "contextMeaning": "总体的；总体上",
      "englishDefinition": "considering everything; in general",
      "collocation": "the overall standard of the section　/　second place overall",
      "contextualExample": "the overall standard of the section was low",
      "readingNote": "overall(8)——单一词形，无比较级。8 次分布在 7 篇 / 6 年，近 10 年 5 次，首次 2010、最近 2023。作形容词时置名词前（overall standard），作副词时常后置（second place overall），位置差别是本词语法上的要点。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 6 年　·　近10年 5 次　·　首次 2010 / 最近 2023　｜　语料词形：overall(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "overall 作副词一般不用逗号隔开置句首（Overall, the plan worked）；与 in general、on the whole 近义；不要与 all over（到处）混。",
      "forms": [
        "overalls"
      ]
    },
    {
      "word": "per",
      "pos": "prep.",
      "contextMeaning": "每；每一",
      "englishDefinition": "for each unit, person or period of time",
      "collocation": "three trials per jar　/　the rate per minute",
      "contextualExample": "We had three trials per jar",
      "readingNote": "per(8)——无屈折变化，8 次全为本形，是典型的「零形态」功能词。8 次分布在 7 篇 / 7 年，近 10 年 5 次，首次 2006、最近 2025。因为它不可数、不变形，词频就等于出现次数，不存在词族与词义的差额问题。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 7 年　·　近10年 5 次　·　首次 2006 / 最近 2025　｜　语料词形：per(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "per 后接单数名词且不加冠词（per person / per year）；per cent 连写或分写均可，但 percent 更常见；as per＝按照（商务用语）。",
      "forms": []
    },
    {
      "word": "purchase",
      "pos": "v./n.",
      "contextMeaning": "购买；采购",
      "englishDefinition": "to buy something, or the act of buying it",
      "collocation": "She had purchased the jars for four pounds　/　a purchase",
      "contextualExample": "She had purchased the jars for four pounds from a charity shop",
      "readingNote": "purchase(3)/purchases(3)/Purchase(1)/purchased(1)——四种词形，其中 Purchase(1) 首字母大写，母表无法判定是句首还是专名，标为大小写待人工裁定。8 次只在 4 篇 / 4 年，密度 2 次 / 篇，首次 2008、最近 2019，近 6 年无新记录；机器候选等级 B，证据强度低于 A。",
      "examEvidence": "总频次 8 次　·　出现 4 篇 / 4 年　·　近10年 5 次　·　首次 2008 / 最近 2019　｜　语料词形：purchase(3)　purchases(3)　Purchase(1)　purchased(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "purchase 比 buy 正式，多见于合同与商务文本；purchasing power＝购买力；名词可数（a purchase / purchases）；注意 purchase 与 chase 无关，不要按词形联想。",
      "forms": [
        "purchases",
        "purchased",
        "purchasing",
        "purchaser"
      ]
    },
    {
      "word": "role",
      "pos": "n.",
      "contextMeaning": "作用；角色；职责",
      "englishDefinition": "the function or part that someone or something has in a situation",
      "collocation": "My role is small　/　play a role in",
      "contextualExample": "My role is small",
      "readingNote": "role(6)/roles(2)——单数 6、复数 2，无派生形式。8 次分布在 7 篇 / 6 年，近 10 年 5 次，首次 2008、最近 2025。词形简单，但 play a role in 这一搭配几乎占满语义，阅读时优先按搭配理解。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 6 年　·　近10年 5 次　·　首次 2008 / 最近 2025　｜　语料词形：role(6)　roles(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "play a role in sth＝在…中起作用；play the role of＝扮演…角色；role model＝榜样；注意 role 与 rule（规则）只差一个字母，含义完全不同。",
      "forms": [
        "roles"
      ]
    },
    {
      "word": "mean",
      "pos": "adj./v./n.",
      "contextMeaning": "平均的；意味着；平均值",
      "englishDefinition": "average; to have a particular meaning or intention; the average value of a set of numbers",
      "collocation": "the mean of three trials　/　I do not mean that",
      "contextualExample": "then estimated the mean of three trials",
      "readingNote": "mean(8)——单一词形，无 means、无 meant（means 在母表中是独立词条，见本单元第 20 词）。8 次分布在 8 篇 / 7 年，近 10 年 4 次，首次 2007、最近 2023。与 means 分立两条目，是本单元最容易混的一处：mean 是「平均值 / 意味着」，means 是「手段」。",
      "examEvidence": "总频次 8 次　·　出现 8 篇 / 7 年　·　近10年 4 次　·　首次 2007 / 最近 2023　｜　语料词形：mean(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "mean 作形容词是「平均的」或「吝啬的 / 刻薄的」；作动词是「意味着、打算」（mean to do＝打算做，mean doing＝意味着）；名词 the mean＝平均值，与 median（中位数）、mode（众数）并列。",
      "forms": [
        "meant",
        "meaning",
        "meaningful"
      ]
    },
    {
      "word": "either",
      "pos": "conj./adv./det.",
      "contextMeaning": "要么…（要么）；两者之一；也（不）",
      "englishDefinition": "one or the other of two; used before the first of two alternatives",
      "collocation": "Either the thermometer was faulty or something in the hall was warming one side　/　either way",
      "contextualExample": "Either the thermometer was faulty or something in the hall was warming one side of the table",
      "readingNote": "either(7)/Either(1)——本形 7、句首大写 1。8 次铺在 8 篇 / 8 年，看上去覆盖面最广，但近 10 年只有 3 次，首次 2005、最近 2021，属「早期集中」型，不能因为篇数多就说近年常见。",
      "examEvidence": "总频次 8 次　·　出现 8 篇 / 8 年　·　近10年 3 次　·　首次 2005 / 最近 2021　｜　语料词形：either(7)　Either(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "either...or 连接两个并列成分，谓语与最近的主语一致；否定句末用 either（也不用 too）；either of＋复数名词，谓语可用单数。",
      "forms": []
    },
    {
      "word": "fair",
      "pos": "adj./n.",
      "contextMeaning": "公平的；合理的；展览会",
      "englishDefinition": "treating people equally and reasonably; a large public event with displays or trade",
      "collocation": "try to be fair to children　/　the rules of the fair",
      "contextualExample": "try to be fair to children who have spent six months",
      "readingNote": "fair(7)/Fair(1)——本形 7、首字母大写 1（母表无法判定句首或专名，标为待裁定）。8 次铺在 8 篇 / 8 年，但近 10 年只有 3 次，首次 2007、最近 2025。同形多义在此最明显：形容词「公平的」与名词「展览会 / 集市」在语料中同形计数，无法拆分。",
      "examEvidence": "总频次 8 次　·　出现 8 篇 / 8 年　·　近10年 3 次　·　首次 2007 / 最近 2025　｜　语料词形：fair(7)　Fair(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "fair 作形容词还有「浅色的」（fair hair）、「晴朗的」（fair weather）；fair enough＝有道理；trade fair＝交易会，job fair＝招聘会。",
      "forms": [
        "fairly",
        "fairness",
        "fairs"
      ]
    },
    {
      "word": "similar",
      "pos": "adj.",
      "contextMeaning": "相似的；类似的",
      "englishDefinition": "almost the same but not exactly the same",
      "collocation": "The new readings were similar for the felt and the foil jars　/　be similar to",
      "contextualExample": "The new readings were similar for the felt and the foil jars",
      "readingNote": "similar(7)/Similar(1)——本形 7、首字母大写 1（待裁定）。8 次铺在 8 篇 / 7 年，近 10 年 3 次，首次 2006、最近 2023。搭配固定为 be similar to，不能用 be similar with，这一点在写作中最常出错。",
      "examEvidence": "总频次 8 次　·　出现 8 篇 / 7 年　·　近10年 3 次　·　首次 2006 / 最近 2023　｜　语料词形：similar(7)　Similar(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "be similar to sth（不用 with）；similarly 作副词置于句首时后接逗号；名词 similarity 后接 between 或 to；反义 different from。",
      "forms": [
        "similarly",
        "similarity",
        "similarities"
      ]
    },
    {
      "word": "means",
      "pos": "n.",
      "contextMeaning": "手段；方法；工具",
      "englishDefinition": "a method or way of doing something",
      "collocation": "a means of checking　/　by means of",
      "contextualExample": "a means of checking that Nell had built in without being asked",
      "readingNote": "means(8)——单一词形，8 次全为本形，形式上带 -s 但通常作单数或复数同形。8 次铺在 8 篇 / 7 年，近 10 年仅 2 次，首次 2006、最近 2024，是本单元早期集中最明显的词之一。与 mean 分立（mean 是「平均值 / 意味着」），两词在 manifest 中各自成条、语料各自计数，不能合并也不能互相替代。母表「500复现」标「是」、等级格写「已在500」，属跨词库归属，待人工裁定，本轮不改词表。",
      "examEvidence": "总频次 8 次　·　出现 8 篇 / 7 年　·　近10年 2 次　·　首次 2006 / 最近 2024　｜　语料词形：means(8)　｜　母表标记：已在500 · 500复现 是",
      "examTips": "a means of doing sth＝做…的一种手段（单数）；by means of＝借助；by no means＝决不（置于句首引起倒装）；means 与 mean 是两个词条，不要合并。",
      "forms": []
    },
    {
      "word": "outside",
      "pos": "prep./adv./adj./n.",
      "contextMeaning": "在…之外；外部的；超出…范围",
      "englishDefinition": "not inside a place, or beyond the limits of something",
      "collocation": "so far outside the pattern　/　outside that band",
      "contextualExample": "one reading was so far outside the pattern that she had circled it in red",
      "readingNote": "outside(8)——单一词形，无 outsides、无 outside's。8 次铺在 8 篇 / 7 年，但近 10 年只有 1 次，首次 2006、最近 2019，是本单元「早期集中」最极端的一个：篇数最多、近年记录最少。",
      "examEvidence": "总频次 8 次　·　出现 8 篇 / 7 年　·　近10年 1 次　·　首次 2006 / 最近 2019　｜　语料词形：outside(8)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "outside 作介词时不加 of（outside the house），但英式口语有 outside of；作形容词是「外部的」（outside help）；outside chance＝极小的可能性。",
      "forms": [
        "outsider",
        "outsiders"
      ]
    },
    {
      "word": "light",
      "pos": "n./adj./v.",
      "contextMeaning": "光；光线；轻的；点燃",
      "englishDefinition": "the natural or artificial brightness that makes things visible; not heavy",
      "collocation": "a visible band of light across the glass　/　better light",
      "contextualExample": "threw a visible band of light across the glass",
      "readingNote": "light(5)/Light(1)/lighter(1)——含比较级 lighter(1)，另有首字母大写 Light(1)（待裁定）。7 次只在 6 篇 / 4 年，近 10 年 7 次，首次 2017、最近 2022：全部记录都在 2017 年之后，属「近期才进入语料」的词，早期为 0。同形多义最重：名词「光」、形容词「轻的」、动词「点燃」共用一种词形。",
      "examEvidence": "总频次 7 次　·　出现 6 篇 / 4 年　·　近10年 7 次　·　首次 2017 / 最近 2022　｜　语料词形：light(5)　Light(1)　lighter(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "in the light of＝鉴于（英式）；light 作动词的过去式是 lit 或 lighted；light 的比较级 lighter 既可指「更轻」也可指「更亮」，需靠上下文判断。",
      "forms": [
        "lights",
        "lighter",
        "lightest",
        "lighting"
      ]
    },
    {
      "word": "pupil",
      "pos": "n.",
      "contextMeaning": "学生；（眼睛的）瞳孔",
      "englishDefinition": "a child at school, or the dark opening in the centre of the eye",
      "collocation": "a pupil named Nell Farrant　/　the pupil who took first",
      "contextualExample": "a pupil named Nell Farrant arrived with three glass jars",
      "readingNote": "pupils(7)——7 次全部为复数，单数 0 次，是典型的「只以复数立目」现象。仅出现在 3 篇 / 3 年（2023-T1、2024-T2、2025-T1），篇内密度 2.33 次 / 篇，为本单元最高，且全部集中在最近三年；机器候选等级 B。三条记录都不足以确定所指是「学生」还是「瞳孔」，按常见语境取「学生」，词义分歧标为待人工裁定。",
      "examEvidence": "总频次 7 次　·　出现 3 篇 / 3 年　·　近10年 7 次　·　首次 2023 / 最近 2025　｜　语料词形：pupils(7)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "pupil 指中小学生，大学生用 student；瞳孔义多用于医学语境（pupils dilated）；注意 pupil 与 people 拼写无关，不要误记。",
      "forms": [
        "pupils"
      ]
    },
    {
      "word": "career",
      "pos": "n.",
      "contextMeaning": "职业；事业；生涯",
      "englishDefinition": "the series of jobs that a person does over their working life",
      "collocation": "part of a career　/　a career in physics",
      "contextualExample": "That embarrassment is part of a career",
      "readingNote": "careers(4)/career(3)——复数略多（4 比 3），无派生形式。7 次分布在 5 篇 / 4 年，近 10 年 6 次，首次 2014、最近 2023：全部记录都在 2014 年之后，早期为 0。",
      "examEvidence": "总频次 7 次　·　出现 5 篇 / 4 年　·　近10年 6 次　·　首次 2014 / 最近 2023　｜　语料词形：careers(4)　career(3)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "career 指长期职业，job 指具体一份工作，profession 指需要专业训练的职业；career break＝职业间歇；注意 career 与 carrier（承运人 / 载体）拼写差别。",
      "forms": [
        "careers",
        "careerism"
      ]
    },
    {
      "word": "charge",
      "pos": "n./v.",
      "contextMeaning": "费用；收费；指控；充电",
      "englishDefinition": "the price asked for something; to ask a price, to accuse, or to put electricity into a battery",
      "collocation": "a fair charge for the four pounds　/　in charge of",
      "contextualExample": "it is a fair charge for the four pounds she spent on three jars",
      "readingNote": "charging(3)/charge(2)/charged(1)/charges(1)——四种词形，-ing 形式最多（3 次）。7 次只在 4 篇 / 4 年，密度 1.75 次 / 篇，近 10 年 6 次，首次 2015、最近 2020，近 5 年无新记录；机器候选等级 B。名词「费用 / 指控」与动词「收费 / 充电 / 指控」名动同形，语料计数不分词性。",
      "examEvidence": "总频次 7 次　·　出现 4 篇 / 4 年　·　近10年 6 次　·　首次 2015 / 最近 2020　｜　语料词形：charging(3)　charge(2)　charged(1)　charges(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "free of charge＝免费；in charge of＝负责（主语是人）；charge sb with sth＝指控某人；charge a battery＝给电池充电，三义都用同一词形。",
      "forms": [
        "charges",
        "charged",
        "charging"
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "number": 1,
      "type": "细节题",
      "paragraphId": "p3",
      "prompt": "According to the third paragraph, what led Nell to move her equipment?",
      "options": {
        "A": "Another judge had told her that her readings were unreliable.",
        "B": "She noticed that the ceiling lights fell across one side of the table.",
        "C": "The second thermometer she borrowed gave a different reading from the first.",
        "D": "She wanted to be nearer the entrance so that visitors could see the jars."
      },
      "correctAnswer": "B",
      "locationText": "noticed that the strip lights above her table ran the length of the hall and threw a visible band of light across the glass",
      "retryHint": "看她「搬走」之前最后注意到的是什么——那才是搬的理由。",
      "analysis": {
        "answer": "B",
        "answerDetail": "p3 的因果链是三段：读数异常 → 先测温度计、再借第二支 → 随后发现头顶长条灯在大厅里横贯、并在玻璃上投下一道光带 → 把东西搬离光带重来。搬到「半米之外」的直接理由就是那道光带，故 B 正确。C 是搬之前的排查步骤，不是搬的原因；A 与原文不符——第三段还没有出现评委，评审在 p5；D 全文没有任何「为了观众」的动机。",
        "location": "第 3 段 第 4 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "定位句写 then noticed that the strip lights ... threw a visible band of light across the glass，紧接着一句就是 She moved everything half a metre outside that band。注意「noticed ... then moved」的先后：发现光带是动作的触发点，前面的测温度计、借第二支温度计只是排查，排查没有解决问题。C 把排查步骤当成原因；A 把后文的评审前移；D 属于凭空添加动机。"
          },
          {
            "title": "怎么定位",
            "content": "题干关键词 move her equipment 对应原文 moved everything；只要找到 moved 这一句，再看它前一句的 noticed，因果就清楚了。细节题在这一段要特别注意动词链的先后顺序，而不是把段落里出现过的所有动作都当成原因。"
          }
        ]
      }
    },
    {
      "id": "q2",
      "number": 2,
      "type": "推理判断题",
      "paragraphId": "p4",
      "prompt": "The author treats Nell's decision to throw away her first set of numbers as",
      "options": {
        "A": "a waste of the only morning she had to collect data",
        "B": "evidence that her school had given her too little guidance",
        "C": "a habit that most pupils in the section also shared",
        "D": "more valuable than the result her project finally produced"
      },
      "correctAnswer": "D",
      "locationText": "What made her project significant was not the result but the correction",
      "retryHint": "注意 not the result but the correction 这个对照结构。",
      "analysis": {
        "answer": "D",
        "answerDetail": "p4 首句用 not the result but the correction 直接把「修正」排在「结果」之前，随后又说 Most pupils at that stage would have kept the first set of numbers，用同龄人的常规做法反衬她的选择。作者的判断因此是：扔掉数据这个动作比最后的结论更有分量，D 正确。A 与原文相反——她重新测量后仍完成了项目；B 与 Mr. Okwe 沉默、「rules ... a teacher may advise」的描写不符；C 恰是原文的反面，多数学生会保留第一组数据。",
        "location": "第 4 段 第 1 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "not A but B 是明确的取舍句式：作者把 significant 的来源指定为 correction，而不是 result。D 用 more valuable than 复述这一取舍。A 把「重来」误读为「浪费」，但原文写她重来后得到了干净的分开曲线，并非徒劳；B 属无据推断，老师的沉默被作者称为 good practice；C 与 Most pupils ... would have kept 直接冲突。"
          },
          {
            "title": "怎么定位",
            "content": "题干关键词 throw away her first set of numbers 与原文 Nell threw away a morning's work 对应；判断作者态度要看她前一句的 significant，而不是后文评审的争论。推理题在这里考的是「作者的评价句在哪」，评价句通常出现在段落开头或结尾，而不是叙事中间。"
          }
        ]
      }
    },
    {
      "id": "q3",
      "number": 3,
      "type": "细节题",
      "paragraphId": "p1",
      "prompt": "The building in which the fair is held was originally",
      "options": {
        "A": "a depot for buses, later sold to the education authority",
        "B": "a school hall built for the education authority in 1987",
        "C": "a car park that was afterwards converted into a hall",
        "D": "a workshop belonging to a firm that designed heating systems"
      },
      "correctAnswer": "A",
      "locationText": "a bus depot that lost its buses in the recession and was sold to the education authority for a nominal sum",
      "retryHint": "第一段冒号后面就是对这栋楼的说明——它原来是什么？",
      "analysis": {
        "answer": "A",
        "answerDetail": "p1 第一句用冒号给出解释：a bus depot that lost its buses in the recession and was sold to the education authority for a nominal sum，即「先是公交总站，后来卖给教育当局」，A 正确。B 把 1987 当成建造年份，原文说的是「从 1987 年起一直在这里办展」；C 把 p6 的未来计划（拆掉建停车场）倒推成过去；D 混淆了叙述者退休前所在的供暖公司——那是他的职业背景，不是这栋楼的来历。",
        "location": "第 1 段 第 1 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "冒号后的同位说明是本题唯一依据：bus depot（公交总站）＋ was sold to the education authority（卖给教育当局）。A 把这两点都保留了。B 的 1987 在原文修饰的是 has been held（办展），不是 built；C 的 car park 出现在最后一段，是明年才要建的东西；D 的 heating systems 是「我」退休前的工作单位，与建筑无关。"
          },
          {
            "title": "怎么定位",
            "content": "题干问 originally，对应原文的 since 1987 与 lost its buses in the recession 这一组过去信息。细节题遇到冒号要立刻把冒号后当成解释来读：冒号前给结论，冒号后给具体内容，答案通常在冒号后。"
          }
        ]
      }
    },
    {
      "id": "q4",
      "number": 4,
      "type": "主旨观点题",
      "paragraphId": "p6",
      "prompt": "Which statement best captures the author's view of measurement?",
      "options": {
        "A": "It is reliable only when the equipment has been tested twice.",
        "B": "It matters mainly because it can settle a public argument.",
        "C": "Its value depends on the willingness of the user to question it.",
        "D": "It is a skill that children acquire more easily than adults do."
      },
      "correctAnswer": "C",
      "locationText": "a measurement is only as good as the person willing to distrust it",
      "retryHint": "注意 only as good as 后面接的是「人」，不是「仪器」。",
      "analysis": {
        "answer": "C",
        "answerDetail": "p6 的判断句是 a measurement is only as good as the person willing to distrust it：测量的价值上限由「愿意怀疑它的人」决定，C 是对这句的直译式概括。A 把「测两次温度计」这一具体动作升格为普遍规则，原文只写她测过一次冰水、又借了一支；B 把测量工具化成为争论服务，而作者强调的是自我怀疑，不是说服别人；D 属无据比较，原文说「大厅里大多数成年人都忘了这件事」，并未比较儿童与成人谁更容易学会。",
        "location": "第 6 段 第 2 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "关键在 only as good as 这一比较结构：它把上限系在 the person 上，而 person 后接 willing to distrust it。C 保留了「取决于人」与「怀疑」两个要素。A 把个案当通则；B 把「争论」当目的，但原文的争论只是外部场景，作者的评价是内向的；D 用 children / adults 的比较替换了原文的「大多数成年人忘了」，属偷换。"
          },
          {
            "title": "怎么定位",
            "content": "主旨题要看作者自己的判断句。p6 前三句是叙述（她说了什么、我如何理解），第四句开始转入环境变化（拆楼、搬家），最后一句回到四英镑的账。真正带评价性的只有 a measurement is only as good as ... 这一句，therefore 答案只能从它推出。"
          }
        ]
      }
    }
  ],
  "examPractice": [
    {
      "id": "e1",
      "number": 1,
      "type": "密度与年份集中",
      "paragraphId": "p2",
      "prompt": "pupil 在母表语料中累计 7 次，词形只有 pupils(7)，单数 pupil 出现 0 次；这 7 次只落在 3 篇 / 3 个年份（2023、2024、2025），机器候选等级为 B。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "7 次分布在 3 篇里，说明该词在语料中出现得很分散",
        "B": "7 次全为复数且集中在最近三年，篇内密度约 2.3 次 / 篇，等级 B 表示证据强度低于 A",
        "C": "单数出现 0 次，说明该词在英语中已经没有单数形式",
        "D": "等级 B 说明这 7 次不应计入该词的总频次"
      },
      "correctAnswer": "B",
      "locationText": "a pupil named Nell Farrant arrived with three glass jars",
      "retryHint": "先算 7 ÷ 3，再想「等级 B」在这个项目里标的是强度还是层级。",
      "analysis": {
        "answer": "B",
        "answerDetail": "母表原值：总频次 7、出现 3 篇 / 3 年、近 10 年 7 次、首次 2023 / 最近 2025，词形只有 pupils(7)，等级 B。7 次除以 3 篇约 2.3 次 / 篇，属篇内密度高而非分散；三条记录全在 2023 年之后，属近期集中。因此 B 的两个判断都成立。A 把「3 篇」读成「分散」，与密度计算相反；C 用语料中未出现单数推断语言中没有单数，是把统计事实升级为语法事实；D 混淆了两个字段——等级是候选强度标记，与是否计入频次无关，7 次仍是 5500 语料的实际计数。",
        "location": "第 2 段 第 1 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "B 同时处理三个可核对的事实：词形全为复数（7/7）、篇内密度（7÷3≈2.3）、等级含义（B 低于 A）。A 只错在「分散」这一判断，但足以推翻整句；C 是典型的「以语料代语言」，本项目反复强调不能这样推；D 把等级字段当成频次字段用，属字段混淆。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=15 第 23 行：总频次 7；出现篇数 3；出现年份数 3；近10年频次 7；首次年份 2023；最近年份 2025；真题实际词形 pupils(7)；机器候选等级 B；500复现 否；锚点 2019-T4；锚点覆盖 6；出现篇目 2023-T1、2024-T2、2025-T1。"
          }
        ]
      }
    },
    {
      "id": "e2",
      "number": 2,
      "type": "早期集中",
      "paragraphId": "p3",
      "prompt": "outside 在母表语料中累计 8 次，词形全为 outside(8)，却出现在 8 篇 / 7 个年份，近 10 年只有 1 次，首次 2006、最近 2019。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "8 篇 / 7 年说明该词在近十年仍然活跃",
        "B": "近 10 年只有 1 次，说明该词在语料中其实只出现过 1 次",
        "C": "最近年份为 2019，说明该词在 2019 年后被同义词替代",
        "D": "篇数多不等于近年常见：近 10 年仅 1 次，说明这 8 次高度集中在 2019 年之前"
      },
      "correctAnswer": "D",
      "locationText": "one reading was so far outside the pattern that she had circled it in red",
      "retryHint": "把「8 篇」和「近 10 年 1 次」放在一起看，它们矛盾吗？",
      "analysis": {
        "answer": "D",
        "answerDetail": "母表原值：总频次 8、出现 8 篇 / 7 年、近 10 年 1 次、首次 2006 / 最近 2019。总频次与篇数描述的是 2005–2025 全周期，近 10 年频次描述的是最近十年这一切片：8 次里只有 1 次落在近十年，其余 7 次都在 2019 年以前，故 D 正确。A 用全周期篇数替代近十年活跃度，属口径错位；B 把「近十年 1 次」读成「总共 1 次」，混淆切片与全量；C 由「最近年份 2019」推出「被同义词替代」，母表没有任何替代或词形演变的记录，属无据推断。",
        "location": "第 3 段 第 3 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "这一题考的是三个频次字段的口径差别：总频次（8）覆盖全周期，出现篇数 / 年份数（8 篇 / 7 年）也覆盖全周期，近 10 年频次（1）只覆盖最近十年。三者并不矛盾，但只有近 10 年频次能回答「近年常不常见」。D 正是把这个区分说清楚；A 用全周期数据回答近年问题，B 把切片当全量，C 编造了母表没有的替代关系。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=15 第 21 行：总频次 8；出现篇数 8；出现年份数 7；近10年频次 1；首次年份 2006；最近年份 2019；真题实际词形 outside(8)；机器候选等级 A；500复现 否；锚点 2019-T4；锚点覆盖 6；出现篇目 2006-T2、2009-T1、2009-T2、2011-T2、2012-T1、2014-T4、2015-T3、2019-T4。"
          }
        ]
      }
    },
    {
      "id": "e3",
      "number": 3,
      "type": "词形分布与等级",
      "paragraphId": "p6",
      "prompt": "charge 在母表语料中累计 7 次，词形为 charging(3) / charge(2) / charged(1) / charges(1)，只出现在 4 篇 / 4 个年份，最近年份 2020，机器候选等级为 B。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "-ing 形式最多（3 次），说明语料中该词较多用于进行体或动名词结构；4 篇 / 4 年对应篇内密度约 1.75 次 / 篇",
        "B": "charging(3) 占多数，说明该词在语料中只作动词",
        "C": "charge(2) 与 charges(1) 合计 3 次，说明名词用法占一半以上",
        "D": "7 次分布在 4 篇，说明该词是本单元分布最广的词"
      },
      "correctAnswer": "A",
      "locationText": "it is a fair charge for the four pounds she spent on three jars",
      "retryHint": "先看哪种词形最多，再算 7 ÷ 4。",
      "analysis": {
        "answer": "A",
        "answerDetail": "母表原值：总频次 7、出现 4 篇 / 4 年、近 10 年 6 次、首次 2015 / 最近 2020，词形 charging(3)、charge(2)、charged(1)、charges(1)，等级 B。charging 是 -ing 形式，占 3/7，可概括为「较多用于进行体或动名词」；7÷4≈1.75 次 / 篇，密度不低。故 A 成立。B 由 -ing 形式推「只作动词」属过度推断，-ing 也可作名词（charging 作「收费」）；C 把 charge / charges 一律当名词，但 charge 亦可作动词原形，词形与词性不是一一对应；D 与数据相反——7 次只在 4 篇，本单元篇数最多的是 outside、mean、either、fair、similar、means（各 8 篇）。",
        "location": "第 6 段 末句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "A 的两个判断都可核对：charging 3 次为四种词形之首（3/7），4 篇 7 次给出 1.75 次 / 篇的密度。B、C 犯的是同一个错误——把词形当词性：charging 可以是动名词，charge 可以是动词原形，语料只记词形、不标词性，任何「某词形＝某词性」的结论都超出统计能支持的范围。D 把「4 篇」误读为「分布最广」，实际 4 篇是本单元最少的篇数之一。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=15 第 25 行：总频次 7；出现篇数 4；出现年份数 4；近10年频次 6；首次年份 2015；最近年份 2020；真题实际词形 charging(3)、charge(2)、charged(1)、charges(1)；机器候选等级 B；500复现 否；锚点 2019-T4；锚点覆盖 6；出现篇目 2015-T4、2016-T4、2019-T4、2020-T2。"
          }
        ]
      }
    },
    {
      "id": "e4",
      "number": 4,
      "type": "跨词库归属与同形分立",
      "paragraphId": "p5",
      "prompt": "本单元有两条记录在母表「500复现」列标为「是」，「机器候选等级」整格写作「已在500」：complex 累计 8 次（complex(8)）、means 累计 8 次（means(8)）。同一单元还另立一个独立词条 mean，累计 8 次（mean(8)）。关于这些记录，下列判断正确的是：",
      "options": {
        "A": "complex 与 means 应立刻从 U15 词表删除，因为它们已在 500 词库",
        "B": "「已在500」说明这两词的 8 次频次统计作废",
        "C": "「已在500」是跨词库归属标记，与频次统计是两个维度；mean 与 means 是分立词条，归属与是否合并均待人工裁定，本轮不改词表",
        "D": "mean 与 means 应合并为一条，把 16 次相加作为该词频次"
      },
      "correctAnswer": "C",
      "locationText": "a means of checking that Nell had built in without being asked",
      "retryHint": "先分清「这个词归哪个词库」和「这个词在真题里出现几次」是不是同一件事。",
      "analysis": {
        "answer": "C",
        "answerDetail": "母表原值：complex 8 次 / 7 篇 / 7 年 / 近 10 年 5 次；means 8 次 / 8 篇 / 7 年 / 近 10 年 2 次；mean 8 次 / 8 篇 / 7 年 / 近 10 年 4 次。complex 与 means 的「500复现」为「是」，等级格被「已在500」占位——占的是等级列，表达的是词表归属判断，不是证据强度。mean 与 means 在 manifest 中是两条独立记录，语义也不同（平均值 / 意味着 vs 手段），语料分别计数。故 C 正确。A 越权裁词；B 把归属当成统计失效；D 虚构合并规则，且合并会破坏 manifest 的全局唯一词校验（同一词元不得在两处重复立目）。归属与是否合并均属待人工裁定事项，本轮不改词表。",
        "location": "第 5 段 第 5 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "关键是把三个维度拆开：①归属（500复现 / 等级格占位）；②频次（总频次、篇数、年份、近十年）；③立目（mean 与 means 各自成条）。C 保持了这三者的分离，并把处置权交回人工裁定。A、B 把归属当成删词或废数的理由；D 把两个不同词条强行合并，既改词表也违反唯一词规则。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=15 第 10 / 16 / 20 行：complex（8 次·7 篇·7 年·近10年 5·首次 2005·最近 2025·complex(8)·等级栏「已在500」·500复现 是）；mean（8·8·7·4·2007·2023·mean(8)·等级 A·500复现 否）；means（8·8·7·2·2006·2024·means(8)·等级栏「已在500」·500复现 是）。"
          }
        ]
      }
    }
  ],
  "sentences": [
    {
      "id": "s1",
      "number": 1,
      "paragraphId": "p3",
      "original": "Either the thermometer was faulty or something in the hall was warming one side of the table, and at first she had no way of telling which type of error she was facing.",
      "sections": [
        {
          "title": "先找主干",
          "content": "整句由 and 连接两个部分。前一部分是 either ... or ... 并列的两个完整分句：the thermometer was faulty 与 something in the hall was warming one side of the table；后一部分是 at first she had no way of telling ...，交代她当时无从判断的处境。"
        },
        {
          "title": "either ... or ... 连接的是分句",
          "content": "either 置于第一个分句之前，or 引出第二个分句，两边各有主语和谓语，所以这里 either 起连词作用，而不是限定词。注意句首 either 不引起倒装，第一分句仍是「主语 + 谓语」的正常语序。"
        },
        {
          "title": "which type of error she was facing",
          "content": "这一部分是 telling 的宾语从句，用陈述语序：which type of error 提前，she was facing 保持主谓顺序，不能写成 which type was she facing。have no way of doing sth＝没有办法做某事，of 后必须接动名词。"
        }
      ],
      "reminder": "either ... or ... 连接两个完整分句时，either 在句首、or 在第二分句前，且都不引起倒装；宾语从句一律用陈述语序；no way of doing 后接动名词，不接不定式。"
    },
    {
      "id": "s2",
      "number": 2,
      "paragraphId": "p4",
      "original": "When I asked her what the foil was doing, she said that it reflected the light but also carried heat away from the jar, so the net effect depended on which of the two was stronger at a given temperature.",
      "sections": [
        {
          "title": "先找主干",
          "content": "主干是 she said that ...：she 作主语，said 作谓语，that 引导宾语从句作 said 的宾语。句首 When I asked her what the foil was doing 是时间状语从句，其中 what the foil was doing 又是 asked 的宾语从句，形成「从句套从句」。"
        },
        {
          "title": "宾语从句里的并列谓语",
          "content": "宾语从句的主语是 it（指锡纸），谓语由 but also 连接的两部分构成：reflected the light 与 carried heat away from the jar。「反射光」与「带走热」是同一物体同时起的两相反作用，but also 在此表示递进中的转折，不是 not only ... but also 的省略形式。"
        },
        {
          "title": "so 的结果分句与 depend on 的宾语",
          "content": "so the net effect depended on ... 是结果分句，说明前两个作用相互抵消后的净结果。depend on 后接 which of the two was stronger at a given temperature 这一宾语从句；which of the two 指「两者之中的哪一个」，即「反射」与「导热」；at a given temperature＝在给定温度下。"
        }
      ],
      "reminder": "宾语从句用陈述语序（what the foil was doing，不能写成 what was the foil doing）；depend on 后可直接接从句，不必加 if；but also 单独使用表递进转折，与 not only ... but also 的固定搭配不同。"
    },
    {
      "id": "s3",
      "number": 3,
      "paragraphId": "p6",
      "original": "I do not mean that she was argumentative; I mean that she had understood something most of the adults in the hall had forgotten, which is that a measurement is only as good as the person willing to distrust it.",
      "sections": [
        {
          "title": "先找主干",
          "content": "分号把两个并列主句分开：I do not mean that ... 与 I mean that ...。两个 mean 都是动词，宾语都是 that 从句。分号在此承担「先否定一种误读、再给出正解」的修正关系，比逗号更有力。"
        },
        {
          "title": "第二个宾语从句的内部结构",
          "content": "she had understood something 是 I mean that 的从句主干；something 后接定语从句 most of the adults in the hall had forgotten，关系词 that 被省略，因为它在从句中作 forgotten 的宾语。"
        },
        {
          "title": "which is that ... 的同位说明",
          "content": "which is that a measurement is only as good as the person willing to distrust it 是非限制性定语从句，which 指代前面整件事（大多数成年人已经忘掉的那件事）；that 从句作 is 的表语，说明这件事的具体内容。willing to distrust it 是后置形容词短语，修饰 the person；only as good as 是比较结构，此处引申为「取决于」。"
        }
      ],
      "reminder": "分号连接两个完整分句，不能用逗号替代；something 后的定语从句省略了作宾语的关系词 that；非限制性定语从句 which 可指代整个主句内容；as good as 在此不是「和…一样好」，而是「上限取决于」。"
    }
  ],
  "recallCards": [
    {
      "id": "r1",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U15 · across",
      "context": "across 在真题语料里累计 8 次，词形为 across(6) / Across(2)，首字母大写 2 次，母表无法判定是句首还是专名。",
      "prompt": "pupils from across the county arrive 中的 across 意为「______」。（填两个字，表示「遍及」）",
      "answer": "遍及",
      "hint": "后面接的是 the county（全县），不是某一条线——它说的是范围还是方向？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：遍及",
      "resolved": "across(6)/Across(2)——from across the county＝来自全县各地；across the glass＝横过玻璃；come across＝偶然遇到。",
      "word": "across"
    },
    {
      "id": "r2",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U15 · title",
      "context": "title 在真题语料里累计 8 次，词形为 titles(5) / title(2) / title's(1)，复数为主，另有所有格形式。",
      "prompt": "The title on the door still reads DEPOT No. 4 中的 title 意为：",
      "options": {
        "A": "头衔；职位",
        "B": "标题；名称",
        "C": "权利；所有权",
        "D": "字幕；说明文字"
      },
      "answer": "B",
      "hint": "它后面跟着 on the door，后面又说 still reads——门上的什么东西会「写着」字？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（标题；名称）",
      "resolved": "titles(5)/title(2)/title's(1)——the title on the door＝门上的名号；the title of a paper＝论文标题；title 另有「头衔」义。",
      "word": "title"
    },
    {
      "id": "r3",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U15 · per",
      "context": "per 在真题语料里累计 8 次，8 次全为本形，无屈折变化，是典型的零形态功能词。",
      "prompt": "We had three trials per jar 中的 per 意为：",
      "options": {
        "A": "每；每一",
        "B": "通过；经由",
        "C": "按照（某人的说法）",
        "D": "在…期间"
      },
      "answer": "A",
      "hint": "three trials 与 jar 之间是什么关系——总量除以单件？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：A（每；每一）",
      "resolved": "per(8)——per jar＝每只罐子；per minute＝每分钟；per cent＝百分之…。",
      "word": "per"
    },
    {
      "id": "r4",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U15 · pupil",
      "context": "pupil 在真题语料里累计 7 次，词形全为 pupils(7)，单数为 0 次，只出现在 2023–2025 的 3 篇里。",
      "prompt": "a pupil named Nell Farrant arrived with three glass jars 中的 pupil 意为「______」。（填两个字）",
      "answer": "学生",
      "hint": "她十四岁，带着罐子和展板来参加科学展——在这个场合她是哪种身份？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：学生",
      "resolved": "pupils(7)——a pupil＝一名中小学生；pupil 另有「瞳孔」义，需靠语境区分。",
      "word": "pupil"
    },
    {
      "id": "r5",
      "type": "choice",
      "typeLabel": "结构辨析",
      "stem": "U15 · either",
      "context": "either 在真题语料里累计 8 次，词形为 either(7) / Either(1)，8 篇 / 8 年但近十年仅 3 次。",
      "prompt": "Either the thermometer was faulty or something in the hall was warming one side of the table 中 either ... or ... 表达的是：",
      "options": {
        "A": "两者都不",
        "B": "两者都",
        "C": "两者之一（要么…要么…）",
        "D": "不仅…而且…"
      },
      "answer": "C",
      "hint": "她在排查两种可能：温度计坏了，或者有东西在加热桌子的一侧。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：C（两者之一；要么…要么…）",
      "resolved": "either(7)/Either(1)——either A or B＝要么 A 要么 B；neither ... nor＝两者都不；both ... and＝两者都。",
      "word": "either"
    },
    {
      "id": "r6",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U15 · charge",
      "context": "charge 在真题语料里累计 7 次，词形为 charging(3) / charge(2) / charged(1) / charges(1)，名动同形。",
      "prompt": "it is a fair charge for the four pounds she spent 中的 charge 意为「______」。（填两个字）",
      "answer": "费用",
      "hint": "后面跟着 for the four pounds——她花的那四英镑对应的是哪种东西？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：费用",
      "resolved": "charging(3)/charge(2)/charged(1)/charges(1)——a fair charge＝公道的价钱；free of charge＝免费；in charge of＝负责。",
      "word": "charge"
    }
  ],
  "reviewWords": [
    {
      "word": "across",
      "meaning": "遍及；横过",
      "collocation": "pupils from across the county"
    },
    {
      "word": "save",
      "meaning": "节省；保存；挽救",
      "collocation": "saved the receipt in an envelope"
    },
    {
      "word": "significant",
      "meaning": "重要的；显著的",
      "collocation": "What made her project significant"
    },
    {
      "word": "title",
      "meaning": "标题；头衔",
      "collocation": "The title on the door"
    },
    {
      "word": "area",
      "meaning": "面积；地区；领域",
      "collocation": "the surface area of a container"
    },
    {
      "word": "net",
      "meaning": "净的；扣除后的",
      "collocation": "the net effect depended"
    },
    {
      "word": "physical",
      "meaning": "实物的；身体的",
      "collocation": "The physical model on her table"
    },
    {
      "word": "rate",
      "meaning": "速率；比率",
      "collocation": "the rate at which hot water loses heat"
    },
    {
      "word": "type",
      "meaning": "类型；种类",
      "collocation": "which type of error she was facing"
    },
    {
      "word": "complex",
      "meaning": "复杂的；综合体",
      "collocation": "That is a complex sentence"
    },
    {
      "word": "estimate",
      "meaning": "估计；估算",
      "collocation": "estimated the mean of three trials"
    },
    {
      "word": "overall",
      "meaning": "总体的；总体上",
      "collocation": "the overall standard of the section"
    },
    {
      "word": "per",
      "meaning": "每；每一",
      "collocation": "three trials per jar"
    },
    {
      "word": "purchase",
      "meaning": "购买；采购",
      "collocation": "She had purchased the jars"
    },
    {
      "word": "role",
      "meaning": "作用；角色",
      "collocation": "My role is small"
    },
    {
      "word": "mean",
      "meaning": "平均的；意味着",
      "collocation": "the mean of three trials"
    },
    {
      "word": "either",
      "meaning": "要么；两者之一",
      "collocation": "Either the thermometer was faulty"
    },
    {
      "word": "fair",
      "meaning": "公平的；展览会",
      "collocation": "try to be fair to children"
    },
    {
      "word": "similar",
      "meaning": "相似的；类似的",
      "collocation": "The new readings were similar"
    },
    {
      "word": "means",
      "meaning": "手段；方法",
      "collocation": "a means of checking"
    },
    {
      "word": "outside",
      "meaning": "在…之外；超出",
      "collocation": "so far outside the pattern"
    },
    {
      "word": "light",
      "meaning": "光；轻的",
      "collocation": "a visible band of light across the glass"
    },
    {
      "word": "pupil",
      "meaning": "学生；瞳孔",
      "collocation": "a pupil named Nell Farrant"
    },
    {
      "word": "career",
      "meaning": "职业；生涯",
      "collocation": "part of a career"
    },
    {
      "word": "charge",
      "meaning": "费用；收费",
      "collocation": "a fair charge for the four pounds"
    }
  ],
  "sections": [
    {
      "id": "training",
      "kicker": "READING PRACTICE",
      "title": "阅读训练",
      "summary": "4 题 · 逐题回到原文定位"
    },
    {
      "id": "exam",
      "kicker": "CONTEXT EVIDENCE",
      "title": "材料应用",
      "summary": "4 题 · 用本篇原创材料反推词义"
    },
    {
      "id": "sentences",
      "kicker": "SENTENCE LAB",
      "title": "长难句区",
      "summary": "3 句 · 逐字取自正文"
    },
    {
      "id": "recall",
      "kicker": "ACTIVE RECALL",
      "title": "主动回忆区",
      "summary": "6 卡 · 先想再看"
    },
    {
      "id": "review",
      "kicker": "25-WORD REVIEW",
      "title": "25词复盘区",
      "summary": "标记记忆状态"
    }
  ]
});
