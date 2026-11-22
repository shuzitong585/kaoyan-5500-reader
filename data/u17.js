// U17 · 5500 词｜原创示范单元（M-A-15：正文为原创撰写，非真题原文，不与任何真题篇目对应）
// 证据字段（词频/词形统计）由母表直出（5500_D档真题层全量名单_V0.1.csv Unit=17 行；提取件 _check\U17_25词语料统计提取.csv）。
// 正文定稿：_draft\U17_body_V1.0.md。字段骨架沿用已验收的 u16.js（22 顶层键）。
// 本单元母表「官方词形」与「规范词形」25/25 严格相等，manifest 零修正。
window.UnitRegistry.register({
  "id": "U17",
  "status": "official",
  "sequence": 17,
  "totalUnits": 112,
  "series": "考研英语5500词｜真题语境记单词",
  "title": "The Meridian Room",
  "subtitle": "高频实词 · 原创示范单元 U17",
  "stage": "原创示范｜阅读证据（M-A）",
  "newWordCount": 25,
  "storage": {
    "namespace": "kaoyan5500:U17",
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
    "verifiedAt": "2026-10-19",
    "reviewStatus": "pending_human_review"
  },
  "goals": [
    "在「一块海角被卖掉」的行政与地方报道语域中掌握 25 个高频实词",
    "吃透 plastic 与 telescope 的单篇集中（各 8 次全在 1 篇）、species 的单复数同形、knowledge 的不可数",
    "识别 drive / fund / line / story 的名动与多义分工，以及 royal / prize / accept / liberal 首字母大写的归属待裁定"
  ],
  "paragraphs": [
    {
      "id": "p1",
      "en": "The council voted in March to sell the headland, and the sale was legal in every particular; that was the trouble. I came back to Carrow Point in April to inventory what the town was selling, and the first thing I was handed was a budget sheet in which the observatory appeared as a single line, valued at one pound. My old teacher, Miss Ellery, kept the keys. She was eighty-seven, and she let me in without asking what I had come for. The room smelled of brass and cold. The telescope stood where it had stood since 1911, pointed at a shutter that had not been opened in a decade.",
      "cn": "议会三月投票决定卖掉这片海角，这笔交易在法律上无懈可击；麻烦正在这里。四月我回到卡罗角，清点全镇要卖的东西，而最先递到我手上的是一张预算表，天文台在里面只占一行，估值为一英镑。我以前的老师埃勒里小姐保管着钥匙。她八十七岁，没问我来做什么就让我进去了。房间里是黄铜和冷空气的味道。望远镜还站在 1911 年以来它一直站的位置，对准一扇十多年没打开过的天窗。"
    },
    {
      "id": "p2",
      "en": "The observatory was built under a royal charter in 1908, and the instrument was bought with the Haldane Prize, awarded to its first director for work on double stars. The charter is a short document, and Miss Ellery has always read it in the most liberal way: it says the building exists for the instruction of the public, and she takes public to mean anyone who climbs the hill. She is not, by temperament, an intellectual. She distrusts large theories and prefers a clean measurement, and she has always thought of the telescope as a loan rather than a possession. Knowledge, in her account of it, is something you hold for the person who comes next. It was a thought she did not say aloud, and I wrote it down anyway.",
      "cn": "天文台 1908 年依据一份皇家特许状建成，那台仪器是用哈尔丹奖的奖金买的，该奖授予它的第一任台长，以表彰他在双星方面的工作。特许状很短，埃勒里小姐一向以最宽松的方式读它：它说这座建筑的存在是为了公众的启蒙，而她认为「公众」就是任何爬上山坡的人。从性情上说，她并不是个知识分子。她怀疑宏大的理论，偏爱干净的测量；她一直把那架望远镜看作一笔借来的东西，而不是一份财产。在她的说法里，知识是你替下一个来的人保管的东西。这是一个她没有说出口的想法，而我还是把它记了下来。"
    },
    {
      "id": "p3",
      "en": "The bay below the headland is one of the few places on this coast where a species of small wading bird, the ringed plover, still nests, and the students have been tracking the birds since 2016. They read the leg flags through a scope, and the counts go into a notebook that Miss Ellery keeps behind the desk. The colony has grown slowly, from nine pairs to twenty-two, which is not much and is not nothing. The birds do not care who owns the land, which is the whole difficulty. What worries the students is the line of weed and rubbish left by the last high water. Last spring they collected 4.2 kilograms of plastic pellets from four hundred metres of beach, and the samples of water they sent to the university came back with fibres in them.",
      "cn": "海角下面的海湾，是这段海岸上少数仍有环颈鸻这种小型涉禽筑巢的地方之一，学生们从 2016 年起就在追踪这些鸟。他们用单筒望远镜读腿旗，计数记在埃勒里小姐放在桌子后面的本子里。这个种群增长得很慢，从九对到二十二对，不算多，也不算没有。鸟并不在乎这片地归谁，这正是全部的难处。让学生们担心的是上一次高潮留下的那条海藻和垃圾带。去年春天，他们从四百米长的沙滩上收集了 4.2 公斤塑料颗粒，送到大学的水样回来时，里面带着纤维。"
    },
    {
      "id": "p4",
      "en": "In June a group of former students started a drive to raise money for a proper survey, and within eleven weeks they had funded two seasons of fieldwork. The report they produced was careful, and it did what careful reports do: it made the choice harder. Its central finding was modest. The drainage scheme would remove the feeding ground, and no one had costed the loss. The council's senior officer for planning accepted the findings on the birds and disputed only the figures on drainage. At the public meeting the majority of councillors were polite and unmoved. One of them said that the town could not afford to keep a building for the sake of a bird, and the room applauded him. Miss Ellery did not speak. She had been told in advance that speaking would not help.",
      "cn": "六月，一群从前的学生发起了一场募款活动，要为一次正规调查筹钱，十一周内他们就资助了两个季度的野外工作。他们做出的报告很谨慎，而谨慎的报告就是这样：它让选择变得更难。它的核心结论其实很克制。排水方案会毁掉觅食地，而没有人计算过这项损失。议会里负责规划的高级官员接受了关于鸟的结论，只对排水的数字提出异议。公开会议上，多数议员礼貌而无动于衷。其中一位说，全镇负担不起为了一只鸟保留一座建筑，会场为他鼓掌。埃勒里小姐没有发言。事前有人告诉她，发言不会有帮助。"
    },
    {
      "id": "p5",
      "en": "The town around the headland was built by the nuclear station, which came in 1962 and closed in 2003. The households that arrived with it were nuclear in the older sense of the word — two parents, two children, a car — and when the station went, most of them left. What stayed behind was smaller and older: the people who had never come for the jobs, and the ones who could not sell. The story the town tells itself is that the station was a mistake and the headland was always empty. Neither half of that is true. There were seventeen farms on the point before 1962, and a school, and a ferry that ran to the island twice a day.",
      "cn": "海角周围的镇子是被核电站建起来的，电站 1962 年来了，2003 年关闭。随它而来的家庭是这个词较老意义上的「核」家庭——两个家长、两个孩子、一辆车——电站一走，他们大多离开了。留下来的人和地方都更小、更旧：那些从没为工作来过的人，和那些卖不掉房子的人。这个镇子对自己讲的故事是：电站是个错误，海角从来是空的。这两半都不真。1962 年以前，这片地角上有十七座农场，一所学校，还有一条一天两班开往岛上的渡船。"
    },
    {
      "id": "p6",
      "en": "The sale went through in September. The telescope was moved to the school in October, into a room off the science corridor, and the shutter was repaired with money from the same prize. I finished the inventory on a Friday and drove back along the coast road. What I thought, and did not write in the report, is that a thing can be legal and still be a loss, and that the line in the budget was never a description of the building. Miss Ellery put it better. She said the town had been given a loan, and had decided to sell it.",
      "cn": "交易在九月完成。十月，望远镜被搬进学校，放在理科走廊尽头的一间屋子里，天窗是用同一笔奖金修好的。我在一个周五做完了清点，沿着海岸公路开车回去。我想到、但没有写进报告的是：一件事可以合法，同时仍是一种损失；而预算表上的那一行，从来不是对这座建筑的描述。埃勒里小姐说得更好。她说，这个镇子得到过一笔借来的东西，然后决定把它卖掉。"
    }
  ],
  "vocabulary": [
    {
      "word": "legal",
      "pos": "adj.",
      "contextMeaning": "合法的；法律上的",
      "englishDefinition": "allowed or required by law",
      "collocation": "the sale was legal　/　a legal obligation",
      "contextualExample": "the sale was legal in every particular",
      "readingNote": "legal(11)——单一词形，无语料内 illegal、无 legally。11 次铺在 7 篇 / 7 年，篇内密度约 1.6 次 / 篇，近 10 年 2 次，首次 2007、最近 2021。只作形容词；名词是 law，不是 legality（合法性）。",
      "examEvidence": "总频次 11 次　·　出现 7 篇 / 7 年　·　近10年 2 次　·　首次 2007 / 最近 2021　｜　语料词形：legal(11)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "legal 是「合法的」，lawful 更偏「合乎法理、正当」，legitimate 偏「正当、合理」；legal 不作名词；反义 illegal 用 il- 否定前缀。",
      "forms": []
    },
    {
      "word": "prize",
      "pos": "n.",
      "contextMeaning": "奖项；奖金",
      "englishDefinition": "something given to the winner of a competition or for good work",
      "collocation": "the Haldane Prize　/　win a prize",
      "contextualExample": "bought with the Haldane Prize",
      "readingNote": "Prize(5)/prize(3)/prizes(2)/Prizes(1)——首字母大写 5 次多于小写 3 次，复数 2 次；母表无上下文，无法判定大写是句首还是专名（奖项名），标为大小写待人工裁定。11 次只在 4 篇 / 4 年，篇内密度 2.75 次 / 篇。",
      "examEvidence": "总频次 11 次　·　出现 4 篇 / 4 年　·　近10年 2 次　·　首次 2012 / 最近 2025　｜　语料词形：Prize(5)；prize(3)；prizes(2)；Prizes(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "prize 作名词「奖、奖品」，作动词「珍视」（prize sth above sth）；award 是「颁发」，win / receive a prize 是「获奖」；注意 price（价格）只差一个字母。",
      "forms": [
        "prizes"
      ]
    },
    {
      "word": "thought",
      "pos": "n.",
      "contextMeaning": "想法；念头",
      "englishDefinition": "something that you think or consider",
      "collocation": "a thought she did not say aloud　/　on second thought",
      "contextualExample": "It was a thought she did not say aloud",
      "readingNote": "thought(11)——11 次全部是同一词形，未出现 thoughts。该形与 think 的过去式 / 过去分词同形，同时又是名词「想法」，母表只有词形没有词性，无法据此判断名词与动词各占多少；本篇取名词义。11 次分布 6 篇 / 5 年，篇内密度约 1.8 次 / 篇。",
      "examEvidence": "总频次 11 次　·　出现 6 篇 / 5 年　·　近10年 2 次　·　首次 2009 / 最近 2024　｜　语料词形：thought(11)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "thought 作名词可数（a thought / thoughts），作「思想（体系）」时不可数；on second thought(s)＝再一想；school of thought＝学派；注意与 though（虽然）只差一个字母。",
      "forms": [
        "thoughts"
      ]
    },
    {
      "word": "species",
      "pos": "n.",
      "contextMeaning": "物种；种类",
      "englishDefinition": "a group of animals or plants of the same kind",
      "collocation": "a species of small wading bird　/　an endangered species",
      "contextualExample": "a species of small wading bird",
      "readingNote": "species(11)——11 次全为 species，未出现 specie 或 species'。该词单复数同形，仅凭词形无法判断每一次是单数还是复数；母表按词形归并，因此「11 次」不等于「11 个复数」。11 次铺在 4 篇 / 4 年，近 10 年只有 1 次，属早期集中。",
      "examEvidence": "总频次 11 次　·　出现 4 篇 / 4 年　·　近10年 1 次　·　首次 2005 / 最近 2024　｜　语料词形：species(11)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "species 单复数同形：a species / two species；the human species＝人类；endangered species＝濒危物种；注意与 spice（香料）拼写不同。",
      "forms": []
    },
    {
      "word": "knowledge",
      "pos": "n.",
      "contextMeaning": "知识；认识",
      "englishDefinition": "the information and understanding that you have",
      "collocation": "Knowledge, in her account of it　/　to my knowledge",
      "contextualExample": "Knowledge, in her account of it, is something you hold",
      "readingNote": "knowledge(10)——不可数名词，单一词形，无语料内 knowledges。10 次铺 6 篇 / 6 年，篇内密度 1.7 次 / 篇，近 10 年 4 次，是全单元近年最活跃的词之一。",
      "examEvidence": "总频次 10 次　·　出现 6 篇 / 6 年　·　近10年 4 次　·　首次 2007 / 最近 2022　｜　语料词形：knowledge(10)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "knowledge 不可数：a wide knowledge of / to my knowledge / the knowledge that...；动词是 know，形容词是 knowledgeable，注意 -ledge 不是 -lege。",
      "forms": []
    },
    {
      "word": "accept",
      "pos": "v.",
      "contextMeaning": "接受；认可（结论）",
      "englishDefinition": "to agree that something is true or to take what is offered",
      "collocation": "accept the findings　/　accept that...",
      "contextualExample": "accepted the findings on the birds",
      "readingNote": "accept(4)/accepted(2)/Accepted(2)/accepting(2)——四种词形，原形 4 次、-ed 4 次、-ing 2 次；其中首字母大写 2 次（Accepted），母表无上下文，不能判定是句首还是标题 / 专名，标为大小写待人工裁定。10 次铺 7 篇 / 7 年，篇内密度约 1.4 次 / 篇，首次 2005、最近 2017。",
      "examEvidence": "总频次 10 次　·　出现 7 篇 / 7 年　·　近10年 3 次　·　首次 2005 / 最近 2017　｜　语料词形：accept(4)；Accepted(2)；accepted(2)；accepting(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "accept 是「接受（主动收下）」，receive 是「收到（不一定接受）」；accept 还可表「承认、认可（accept that...）」；acceptable 是「可接受的」。",
      "forms": [
        "accepts",
        "accepted",
        "accepting"
      ]
    },
    {
      "word": "single",
      "pos": "adj.",
      "contextMeaning": "单一的；单个的",
      "englishDefinition": "only one, or not involving more than one",
      "collocation": "a single line　/　a single reason",
      "contextualExample": "appeared as a single line",
      "readingNote": "single(9)/singled(1)——九次形容词，一次 singled，来自短语 single out（挑出、单独指出）。10 次铺 7 篇 / 6 年，篇内密度约 1.4 次 / 篇，近 10 年 3 次。",
      "examEvidence": "总频次 10 次　·　出现 7 篇 / 6 年　·　近10年 3 次　·　首次 2008 / 最近 2023　｜　语料词形：single(9)；singled(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "single 作定语「单一的、单个的」，作名词「单人间 / 单曲」；single out＝挑出；every single day 是强调用法，不能换成 only。",
      "forms": [
        "singled"
      ]
    },
    {
      "word": "track",
      "pos": "v.",
      "contextMeaning": "追踪；记录（变化）",
      "englishDefinition": "to follow the movement or development of something over time",
      "collocation": "track the birds　/　keep track of",
      "contextualExample": "have been tracking the birds since 2016",
      "readingNote": "track(4)/tracks(3)/tracking(2)/tracked(1)——原形、三单、-ing、-ed 四种词形齐全，是本单元词形最全的词。10 次铺 7 篇 / 5 年，篇内密度约 1.4 次 / 篇，最近 2025 年仍有记录。",
      "examEvidence": "总频次 10 次　·　出现 7 篇 / 5 年　·　近10年 3 次　·　首次 2006 / 最近 2025　｜　语料词形：track(4)；tracks(3)；tracking(2)；tracked(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "track 名动同形：keep track of＝掌握…的动态，lose track of＝失去…的线索；track a species＝追踪一个物种；on track＝走上正轨。",
      "forms": [
        "tracks",
        "tracking",
        "tracked"
      ]
    },
    {
      "word": "nuclear",
      "pos": "adj.",
      "contextMeaning": "核能的；核心的",
      "englishDefinition": "relating to nuclear energy, or forming the central part of something",
      "collocation": "the nuclear station　/　a nuclear family",
      "contextualExample": "built by the nuclear station",
      "readingNote": "nuclear(8)/Nuclear(2)——无复数、无派生；首字母大写 2 次，母表无上下文，无法判定是句首还是专名，标为大小写待人工裁定。10 次只在 3 篇 / 3 年，篇内密度 3.3 次 / 篇，近 10 年仅 1 次，属分散但单篇偏密。",
      "examEvidence": "总频次 10 次　·　出现 3 篇 / 3 年　·　近10年 1 次　·　首次 2007 / 最近 2024　｜　语料词形：nuclear(8)；Nuclear(2)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "nuclear 不止「核能的」：nuclear family＝核心家庭，nuclear issue＝核心问题；说「核武器」要用 nuclear weapons，不能单说 the nuclear。",
      "forms": []
    },
    {
      "word": "drive",
      "pos": "n.",
      "contextMeaning": "运动；有组织的努力",
      "englishDefinition": "an organized effort to achieve something",
      "collocation": "a drive to raise money　/　a recruitment drive",
      "contextualExample": "started a drive to raise money for a proper survey",
      "readingNote": "drive(5)/driving(3)/Driving(1)——无 drove、无 driven，语料只有三种词形；若要考过去式，不能从母表推断。9 次铺 7 篇 / 6 年，近 10 年 4 次。名动同形：作名词可指「运动、努力」，作动词指「驾驶、驱动」。",
      "examEvidence": "总频次 9 次　·　出现 7 篇 / 6 年　·　近10年 4 次　·　首次 2006 / 最近 2024　｜　语料词形：drive(5)；driving(3)；Driving(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "drive 的名词义常考：a recruitment drive＝招聘活动，a drive to do sth＝做某事的运动；drive sb to do sth＝迫使某人做某事；drive at＝意在说明。",
      "forms": [
        "drives",
        "driving",
        "drove",
        "driven"
      ]
    },
    {
      "word": "fund",
      "pos": "v.",
      "contextMeaning": "资助；为…提供资金",
      "englishDefinition": "to provide money for a project or organization",
      "collocation": "fund two seasons of fieldwork　/　public funding",
      "contextualExample": "they had funded two seasons of fieldwork",
      "readingNote": "funding(5)/funded(2)/fund(1)/funds(1)——-ing 5 次、-ed 2 次，动词形合计 7 次，名词原形与复数各 1 次；也就是说这个词在真题里主要作动词用（资助），不能只记「基金」。9 次铺 7 篇 / 5 年，近 10 年 4 次。",
      "examEvidence": "总频次 9 次　·　出现 7 篇 / 5 年　·　近10年 4 次　·　首次 2008 / 最近 2020　｜　语料词形：funding(5)；funded(2)；fund(1)；funds(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "fund 作动词「为…提供资金」（fund a survey）；作名词常用复数 funds（资金）；funding 是不可数的「经费」；注意 fond（喜欢）拼写不同。",
      "forms": [
        "funds",
        "funded",
        "funding"
      ]
    },
    {
      "word": "grow",
      "pos": "v.",
      "contextMeaning": "增长；扩大",
      "englishDefinition": "to increase in size, number or amount",
      "collocation": "the colony has grown　/　a growing concern",
      "contextualExample": "The colony has grown slowly",
      "readingNote": "growing(8)/grow(1)——-ing 形占 8 / 9，原形仅 1 次，无 grew、无 grown。growing 既可作动名词，也可作定语形容词（growing concern＝日益增长的担忧），这是它高占比的原因之一。9 次铺 7 篇 / 7 年，覆盖全周期。",
      "examEvidence": "总频次 9 次　·　出现 7 篇 / 7 年　·　近10年 4 次　·　首次 2005 / 最近 2024　｜　语料词形：growing(8)；grow(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "grow 后接形容词表变化（grow old）；grow into＝长成；growing 作定语＝日益增加的；growth 是名词，注意 grow 的双写规则 grew / grown。",
      "forms": [
        "grows",
        "growing",
        "grew",
        "grown"
      ]
    },
    {
      "word": "leave",
      "pos": "v.",
      "contextMeaning": "离开；（使）留下",
      "englishDefinition": "to go away from a place, or to let something remain",
      "collocation": "most of them left　/　leave sth behind",
      "contextualExample": "most of them left",
      "readingNote": "leaving(5)/leave(3)/leaves(1)——无 left，语料未记录过去式 / 过去分词；leaves 在此既可能是三单，也可能是名词复数（叶子 / 假期），母表只有词形，无法区分，标为同形待人工裁定。9 次铺 7 篇 / 7 年，近 10 年 4 次。",
      "examEvidence": "总频次 9 次　·　出现 7 篇 / 7 年　·　近10年 4 次　·　首次 2009 / 最近 2020　｜　语料词形：leaving(5)；leave(3)；leaves(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "leave 多义：leave a place＝离开，leave sth behind＝留下，leave sb to do sth＝让某人去做；名词「假期」不可数（on leave），「许可」也不可数。",
      "forms": [
        "leaves",
        "leaving",
        "left"
      ]
    },
    {
      "word": "line",
      "pos": "n.",
      "contextMeaning": "一行；界线",
      "englishDefinition": "a row of words, or a long narrow mark",
      "collocation": "a line in the budget　/　in line with",
      "contextualExample": "the line in the budget was never a description",
      "readingNote": "line(5)/lines(3)/lined(1)——lined 来自 line 作动词（沿…排列 / 加衬里）。9 次铺 6 篇 / 5 年，篇内密度 1.5 次 / 篇。line 是本单元义项最宽的词：预算的一行、海岸线、队列、台词、立场，都可用同一个词形。",
      "examEvidence": "总频次 9 次　·　出现 6 篇 / 5 年　·　近10年 4 次　·　首次 2009 / 最近 2017　｜　语料词形：line(5)；lines(3)；lined(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "line 的高频搭配：in line with＝与…一致，draw the line＝划界限，the bottom line＝底线 / 最终结论，along the lines of＝大致按照。",
      "forms": [
        "lines",
        "lined"
      ]
    },
    {
      "word": "story",
      "pos": "n.",
      "contextMeaning": "说法；报道",
      "englishDefinition": "an account of events, especially one that may not be complete",
      "collocation": "the story the town tells itself　/　a front-page story",
      "contextualExample": "The story the town tells itself",
      "readingNote": "stories(7)/story(2)——复数占 7 / 9，单数 2 次。9 次只在 5 篇 / 5 年，篇内密度 1.8 次 / 篇，近 10 年 4 次。story 在新闻语境里不是「故事」，而是「报道」；在社科语境里常指「说法、叙事」。",
      "examEvidence": "总频次 9 次　·　出现 5 篇 / 5 年　·　近10年 4 次　·　首次 2011 / 最近 2022　｜　语料词形：stories(7)；story(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "story 的三个常考义：报道（a front-page story）、说法 / 叙事（the official story）、楼层（英式 storey，美式 story）；复数 stories 去 y 加 ies。",
      "forms": [
        "stories"
      ]
    },
    {
      "word": "teacher",
      "pos": "n.",
      "contextMeaning": "教师；老师",
      "englishDefinition": "a person whose job is to teach",
      "collocation": "my old teacher　/　a science teacher",
      "contextualExample": "My old teacher, Miss Ellery, kept the keys",
      "readingNote": "teachers(8)/teacher(1)——复数占 8 / 9，单数仅 1 次，是本单元单复数最不平衡的词。9 次铺 5 篇 / 4 年，篇内密度 1.8 次 / 篇，首次 2012、最近 2023。",
      "examEvidence": "总频次 9 次　·　出现 5 篇 / 4 年　·　近10年 4 次　·　首次 2012 / 最近 2023　｜　语料词形：teachers(8)；teacher(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "teacher 可数；teach 的搭配是 teach sb sth（双宾）与 teach sb to do sth；teaching 指「教学（工作）」，不可数。",
      "forms": [
        "teachers"
      ]
    },
    {
      "word": "majority",
      "pos": "n.",
      "contextMeaning": "多数；大多数",
      "englishDefinition": "more than half of a group",
      "collocation": "the majority of councillors　/　a clear majority",
      "contextualExample": "the majority of councillors were polite and unmoved",
      "readingNote": "majority(9)——单一词形，无语料内 majorities。9 次铺 7 篇 / 6 年，覆盖 2005–2024，篇内密度约 1.3 次 / 篇，近 10 年 3 次。",
      "examEvidence": "总频次 9 次　·　出现 7 篇 / 6 年　·　近10年 3 次　·　首次 2005 / 最近 2024　｜　语料词形：majority(9)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "the majority of + 复数名词，谓语用复数；a majority of 与 the majority of 都可；反义 minority；majority 还可指「多数票」与「成年」（reach one's majority）。",
      "forms": []
    },
    {
      "word": "royal",
      "pos": "adj.",
      "contextMeaning": "王室的；皇家的",
      "englishDefinition": "relating to a king or queen",
      "collocation": "a royal charter　/　the Royal Society",
      "contextualExample": "built under a royal charter in 1908",
      "readingNote": "Royal(5)/royal(2)/royals(2)——首字母大写 5 次多于小写 2 次，复数 royals 2 次（指王室成员）。大写次数过半，说明语料里多为专名，但母表无上下文，无法逐次判定，标为大小写待人工裁定。9 次铺 5 篇 / 5 年。",
      "examEvidence": "总频次 9 次　·　出现 5 篇 / 5 年　·　近10年 3 次　·　首次 2006 / 最近 2025　｜　语料词形：Royal(5)；royal(2)；royals(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "royal 是形容词「王室的」；royalty 有两个义项「王室 / 版税」；royals 指王室成员；the Royal Society 是专名，须大写。",
      "forms": [
        "royals"
      ]
    },
    {
      "word": "senior",
      "pos": "adj.",
      "contextMeaning": "高级的；资深的",
      "englishDefinition": "of a high rank or position",
      "collocation": "a senior officer　/　senior to sb",
      "contextualExample": "The council's senior officer for planning",
      "readingNote": "senior(6)/Senior(2)/Senior's(1)——出现所有格 Senior's 一次，母表按同一词元归并，不单独立条；大写 2 次无法判定句首还是头衔。9 次铺 5 篇 / 4 年，近 10 年 2 次。",
      "examEvidence": "总频次 9 次　·　出现 5 篇 / 4 年　·　近10年 2 次　·　首次 2008 / 最近 2023　｜　语料词形：senior(6)；Senior(2)；Senior's(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "senior 作定语「高级的、资深的」，作名词「上级 / 年长者」；senior to sb＝比某人年长或职位高（用 to，不用 than）；反义 junior。",
      "forms": []
    },
    {
      "word": "intellectual",
      "pos": "n.",
      "contextMeaning": "知识分子",
      "englishDefinition": "a person who thinks and writes about serious ideas",
      "collocation": "by temperament, an intellectual　/　intellectual property",
      "contextualExample": "not, by temperament, an intellectual",
      "readingNote": "intellectual(8)/intellectuals(1)——复数仅 1 次。9 次铺 5 篇 / 4 年，近 10 年只有 1 次，属早期集中。既可作形容词「智力的」，也可作名词「知识分子」，母表只有词形，无法区分词性；本篇取名词义。",
      "examEvidence": "总频次 9 次　·　出现 5 篇 / 4 年　·　近10年 1 次　·　首次 2009 / 最近 2023　｜　语料词形：intellectual(8)；intellectuals(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "intellectual 作名词指「知识分子」，作形容词指「智力的、脑力的」（intellectual property＝知识产权）；intelligence 是「智力 / 情报」，intelligent 是「聪明的」。",
      "forms": [
        "intellectuals"
      ]
    },
    {
      "word": "liberal",
      "pos": "adj.",
      "contextMeaning": "宽泛的；自由主义的",
      "englishDefinition": "not strict, or willing to accept other views",
      "collocation": "in the most liberal way　/　a liberal interpretation",
      "contextualExample": "read it in the most liberal way",
      "readingNote": "liberal(7)/Liberal(1)/liberals(1)——大写 1 次，母表无上下文，无法判定是句首、党派名还是专名，标为大小写待人工裁定。9 次只在 4 篇 / 4 年，近 10 年 1 次，最近 2016，属早期集中。义项上不止「自由派的」：liberal reading＝宽松的解释，liberal amounts＝大量的。",
      "examEvidence": "总频次 9 次　·　出现 4 篇 / 4 年　·　近10年 1 次　·　首次 2005 / 最近 2016　｜　语料词形：liberal(7)；Liberal(1)；liberals(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "liberal 的三个常考义：自由主义的（政治）、慷慨的 / 大量的（liberal with money）、宽泛的（a liberal interpretation）；名词 liberal＝自由主义者；动词 liberate。",
      "forms": [
        "liberals"
      ]
    },
    {
      "word": "plastic",
      "pos": "n.",
      "contextMeaning": "塑料；塑料制品",
      "englishDefinition": "a light artificial material made from chemicals",
      "collocation": "plastic pellets　/　plastic waste",
      "contextualExample": "4.2 kilograms of plastic pellets",
      "readingNote": "plastic(4)/plastics(4)——8 次全部落在 1 篇 / 1 年（2022），篇内密度 8 次 / 篇，是本单元单篇集中度最高的词；plastics 4 次指「塑料制品 / 塑料材料」，与 plastic 属同一词元归并。机器候选等级 C 正是单篇集中的结果，不等于词本身不重要。",
      "examEvidence": "总频次 8 次　·　出现 1 篇 / 1 年　·　近10年 8 次　·　首次 2022 / 最近 2022　｜　语料词形：plastic(4)；plastics(4)　｜　母表标记：等级 C · 500复现 否",
      "examTips": "plastic 作名词「塑料」（不可数）与「塑料制品」（可数，plastics）；作形容词还有「可塑的、易受影响的」（plastic mind），这是熟词僻义。",
      "forms": [
        "plastics"
      ]
    },
    {
      "word": "telescope",
      "pos": "n.",
      "contextMeaning": "望远镜",
      "englishDefinition": "an instrument that makes distant objects look nearer",
      "collocation": "the telescope stood　/　a radio telescope",
      "contextualExample": "The telescope stood where it had stood since 1911",
      "readingNote": "telescopes(6)/Telescope(1)/telescope's(1)——所有格一次，按同一词元归并；大写 1 次无法判定句首还是专名。8 次全部落在 1 篇 / 1 年（2017），篇内密度 8 次 / 篇，与 plastic 同为单篇集中型。",
      "examEvidence": "总频次 8 次　·　出现 1 篇 / 1 年　·　近10年 8 次　·　首次 2017 / 最近 2017　｜　语料词形：telescopes(6)；Telescope(1)；telescope's(1)　｜　母表标记：等级 C · 500复现 否",
      "examTips": "telescope 作名词「望远镜」；作动词是「叠套缩短」；radio telescope＝射电望远镜；注意 tele-（远）+ scope（看）的构词。",
      "forms": [
        "telescopes"
      ]
    },
    {
      "word": "water",
      "pos": "n.",
      "contextMeaning": "水；水域",
      "englishDefinition": "the clear liquid that falls as rain and fills rivers and seas",
      "collocation": "samples of water　/　in hot water",
      "contextualExample": "the samples of water they sent to the university",
      "readingNote": "water(5)/Water(2)/waters(1)——waters 1 次指「水域」（复数可数用法），与不可数的 water 属同一词元但义项不同；大写 2 次无法判定句首还是专名。8 次只在 2 篇 / 2 年，篇内密度 4 次 / 篇，近 10 年 8 次，是近年集中词。",
      "examEvidence": "总频次 8 次　·　出现 2 篇 / 2 年　·　近10年 8 次　·　首次 2022 / 最近 2024　｜　语料词形：water(5)；Water(2)；waters(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "water 通常不可数（a glass of water），waters 指「水域、海域」；作动词是「浇水」；in hot water＝陷入麻烦，是常见习语。",
      "forms": [
        "waters"
      ]
    },
    {
      "word": "behind",
      "pos": "adv.",
      "contextMeaning": "留在原处；在后面",
      "englishDefinition": "at or towards the back of something, or remaining after others have gone",
      "collocation": "stay behind　/　behind the desk",
      "contextualExample": "What stayed behind was smaller and older",
      "readingNote": "behind(7)/Behind(1)——单一词形，无比较级。8 次铺 7 篇 / 7 年，篇内密度约 1.1 次 / 篇，覆盖 2007–2025 全周期。behind 既可作介词（behind the desk），也可作副词（stay behind），两种用法在真题里都常见。",
      "examEvidence": "总频次 8 次　·　出现 7 篇 / 7 年　·　近10年 4 次　·　首次 2007 / 最近 2025　｜　语料词形：behind(7)；Behind(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "behind 作副词＝在后面 / 落后（fall behind＝落后）；leave sth behind＝留下；behind schedule＝落后于计划；作介词还可表「是…的原因」（the reasons behind the decision）。",
      "forms": []
    }
  ],
  "questions": [
    {
      "id": "q1",
      "number": 1,
      "type": "细节题",
      "paragraphId": "p2",
      "prompt": "According to the second paragraph, how does Miss Ellery interpret the charter?",
      "options": {
        "A": "As a legal limit on who may enter the building.",
        "B": "As a rule that the council may revise when money is short.",
        "C": "As an instruction to admit anyone willing to climb the hill.",
        "D": "As a historical document with no practical force."
      },
      "correctAnswer": "C",
      "locationText": "she takes public to mean anyone who climbs the hill",
      "retryHint": "第二段说她把 public 理解成什么人？是「有身份的人」，还是「爬上山坡的人」？",
      "analysis": {
        "answer": "C",
        "answerDetail": "p2 说特许状很短，而她一向以最宽松的方式读它：文件说这座建筑是为了 public 的启蒙，接着一句就是 she takes public to mean anyone who climbs the hill。C 把「任何愿意爬上山坡的人」还原为这句话。A 与「最宽松的读法」相反，把特许状读成限制；B 无据，文中说修改的是预算表上的一行，不是特许状；D 与「她据此让人进来」的实际做法冲突。",
        "location": "第 2 段 第 2 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "定位句用冒号给出解释：it says the building exists for the instruction of the public, and she takes public to mean anyone who climbs the hill。take A to mean B 是「把 A 理解为 B」，B 就是 anyone who climbs the hill。A 把 liberal way 读反；B 把预算问题混进特许状；D 把「文件短」误读成「没有效力」。"
          },
          {
            "title": "怎么定位",
            "content": "题干关键词 the charter 只在 p2 出现一次，随后紧跟 has always read it in the most liberal way，冒号后即是她读法的内容。细节题遇到 take ... to mean ... 这种结构，答案通常就在 mean 之后，不要被前面的修饰语带走。"
          }
        ]
      }
    },
    {
      "id": "q2",
      "number": 2,
      "type": "推理判断题",
      "paragraphId": "p4",
      "prompt": "The senior officer's response to the report suggests that the council",
      "options": {
        "A": "rejected both the bird counts and the drainage figures",
        "B": "accepted the evidence about the birds but not the cost of losing them",
        "C": "had not read the report before the public meeting",
        "D": "was waiting for the students to withdraw their findings"
      },
      "correctAnswer": "B",
      "locationText": "accepted the findings on the birds and disputed only the figures on drainage",
      "retryHint": "注意 accepted ... and disputed only ... 这个对照：他接受的是什么，争的又是什么？",
      "analysis": {
        "answer": "B",
        "answerDetail": "p4 写报告的核心结论很克制：排水方案会毁掉觅食地，而没有人计算过这项损失。紧接着是 the council's senior officer for planning accepted the findings on the birds and disputed only the figures on drainage。也就是说，关于鸟的事实他接受了，争的只是排水数字，而「损失没有被计价」这一点并没有被回应，B 正确。A 与 accepted 相反；C 无据，他能逐项回应说明读过；D 无据，文中没有任何等待撤回的表示。",
        "location": "第 4 段 第 5 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "推断题要抓「部分接受」这种态度。accepted ... and disputed only ... 是典型的让步式回应：承认事实，回避代价。B 的 accepted the evidence ... but not the cost 正是这一结构。A 把「部分接受」读成「全部拒绝」；C、D 都属于原文没有依据的动机推测。"
          },
          {
            "title": "怎么定位",
            "content": "题干 the senior officer's response 对应原文 The council's senior officer for planning accepted ...。同句内 and 之后就是「争什么」。这类题的关键是把「接受了什么」与「没有回应什么」分开，答案往往落在后者。"
          }
        ]
      }
    },
    {
      "id": "q3",
      "number": 3,
      "type": "细节题",
      "paragraphId": "p5",
      "prompt": "What does the narrator say about the town's account of its own past?",
      "options": {
        "A": "It exaggerates the number of farms on the point.",
        "B": "It correctly identifies the station as the town's only employer.",
        "C": "It is supported by the ferry timetable.",
        "D": "It is wrong about both the station and the empty headland."
      },
      "correctAnswer": "D",
      "locationText": "Neither half of that is true",
      "retryHint": "「两半都不真」指的是哪两半？一段里作者给了哪些反证？",
      "analysis": {
        "answer": "D",
        "answerDetail": "p5 先引出镇子对自己的说法：the station was a mistake and the headland was always empty，紧接着一句是 Neither half of that is true，随后给出反证——1962 年以前这片地角上有十七座农场、一所学校、一条一天两班的渡船。D 把「两半都不真」完整保留。A 与十七座农场这一事实相反（作者没有说数字被夸大，而是说「从来是空的」不成立）；B 文中未说电站是唯一雇主；C 渡船时刻表是反证之一，不是支持。",
        "location": "第 5 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "关键句是 Neither half of that is true——「两半」指前半句（电站是个错误）与后半句（海角从来是空的）。后面用十七座农场、学校、渡船逐条反驳「从来是空的」。D 精确复述这一判断；A 把「空」的否定误读成「数字夸大」；B、C 都是把文中的反证或无关信息当成支持。"
          },
          {
            "title": "怎么定位",
            "content": "题干 the town's account of its own past 对应 The story the town tells itself。story 在这里不是「故事」，而是「说法、叙事」，这是本题的第一个门槛。找到 story 后，答案句就是紧随其后的 Neither half of that is true。"
          }
        ]
      }
    },
    {
      "id": "q4",
      "number": 4,
      "type": "主旨与态度题",
      "paragraphId": "p6",
      "prompt": "Which statement best captures the narrator's attitude to the sale?",
      "options": {
        "A": "It was lawful, but it was still a loss that the budget could not record.",
        "B": "It was illegal and should be reversed by the courts.",
        "C": "It was regrettable mainly because the telescope was valuable.",
        "D": "It was unavoidable, and the town had no alternative worth discussing."
      },
      "correctAnswer": "A",
      "locationText": "a thing can be legal and still be a loss",
      "retryHint": "最后一段作者说「没有写进报告」的那句判断是什么？它同时承认了什么、又否定了什么？",
      "analysis": {
        "answer": "A",
        "answerDetail": "p6 明确说 What I thought, and did not write in the report, is that a thing can be legal and still be a loss, and that the line in the budget was never a description of the building。A 同时保留「合法」与「是损失」两层，并点出预算无法记录这种损失。B 与全文反复承认的合法相反；C 与原文相反——望远镜被搬进学校，作者惋惜的不是它的价格，而是「借来的东西被卖掉」；D 把作者的判断抹平，文中恰恰在讨论「没有别的选择」这一说法不成立。",
        "location": "第 6 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "作者态度由两个并列的 that 从句给出：a thing can be legal and still be a loss；the line in the budget was never a description of the building。前者是「合法但不等于没有损失」，后者是「账面无法描述实物」。A 用 lawful + still a loss 复述第一层，用 could not record 复述第二层。B 与 legal in every particular 冲突；C 把损失窄化为价格；D 与结尾「本可以留作借款」的判断冲突。"
          },
          {
            "title": "怎么定位",
            "content": "题干 attitude 对应最后一段作者自述的判断句。注意信号词 What I thought, and did not write in the report, is that ...——「想到但没写进报告」的内容往往就是作者真正的立场。态度题要选能同时容纳「承认事实」与「作出评价」的选项。"
          }
        ]
      }
    }
  ],
  "examPractice": [
    {
      "id": "e1",
      "number": 1,
      "type": "单篇集中",
      "paragraphId": "p3",
      "prompt": "plastic 在母表语料中累计 8 次，词形为 plastic(4) / plastics(4)，却只出现在 1 篇 / 1 个年份（2022），近 10 年 8 次，机器候选等级为 C。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "8 次说明该词在 2005–2025 全周期内分布广泛，属稳定高频词",
        "B": "等级 C 说明这 8 次不应计入该词的总频次",
        "C": "8 次全部来自同一篇，篇内密度 8 次 / 篇，不能据此推断该词在真题中普遍高频",
        "D": "近 10 年 8 次且首次年份是 2022，说明该词自 2022 年才进入英语"
      },
      "correctAnswer": "C",
      "locationText": "4.2 kilograms of plastic pellets",
      "retryHint": "先算 8 ÷ 1，再问：一篇里的 8 次能不能代表 112 篇？",
      "analysis": {
        "answer": "C",
        "answerDetail": "母表原值：总频次 8、出现 1 篇 / 1 年、近 10 年 8 次、首次与最近同为 2022、词形 plastic(4) / plastics(4)、等级 C。8 次除以 1 篇即篇内密度 8 次 / 篇，与 telescope 并列本单元最高；一篇的记录无法支撑「普遍高频」，故 C 正确。A 把「1 篇」说成「分布广泛」；B 混淆等级与频次字段；D 把语料首次出现年份当成语言进入时间。",
        "location": "第 3 段 第 6 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "C 同时处理三个可核对事实：篇数（1）、密度（8÷1）、可推断范围（不能外推）。A 直接与「1 篇」矛盾；B 把机器候选等级当成计数开关；D 是口径越界——首次年份描述的是本语料的记录起点，不是英语史的起点。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=17 第 22 行：总频次 8；出现篇数 1；出现年份数 1；近10年频次 8；首次年份 2022；最近年份 2022；真题实际词形 plastic(4)；plastics(4)；机器候选等级 C；500复现 否；锚点 2009-T4；锚点覆盖 4；出现篇目 2022-T1。"
          }
        ]
      }
    },
    {
      "id": "e2",
      "number": 2,
      "type": "词形与词性",
      "paragraphId": "p4",
      "prompt": "fund 在母表语料中累计 9 次，词形为 funding(5) / funded(2) / fund(1) / funds(1)，出现在 7 篇 / 5 个年份，近 10 年 4 次，首次 2008、最近 2020。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "funding(5) 以 -ing 结尾，应作为独立名词词条另行计数，实际频次应为 4",
        "B": "动词形（funding / funded）合计 7 次，说明该词在语料中主要作动词，不能只按「基金」记",
        "C": "funds(1) 是 fund 的复数，应把 9 次拆成 8 + 1 两条独立记录",
        "D": "9 次除以 5 个年份，每年不足 2 次，说明该词属低频词"
      },
      "correctAnswer": "B",
      "locationText": "they had funded two seasons of fieldwork",
      "retryHint": "-ing 与 -ed 在这里是名词新词条，还是同一个动词的不同形式？",
      "analysis": {
        "answer": "B",
        "answerDetail": "母表原值：funding(5)、funded(2)、fund(1)、funds(1)，合计 9 次；其中 -ing 与 -ed 形态共 7 次，都属动词形式的屈折 / 派生，不是独立词条，因此可以判断该词在语料中主要作动词（资助）。B 正确。A 把屈折形式当独立词条，违反母表归并规则；C 同理，funds 是同一词元的复数，不拆条；D 用「年均次数」这一自造指标替代母表字段，且 9 次 / 7 篇属正常密度。",
        "location": "第 4 段 第 2 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "B 的推理链是：词形分布（-ing 5 + -ed 2 = 7，占 9 次的多数）→ 词性倾向（主要作动词）→ 记忆策略（不能只记名词「基金」）。A、C 都在处理「-ing 与复数算不算新词条」时出错；D 换了一个母表里不存在的口径。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=17 第 11 行：总频次 9；出现篇数 7；出现年份数 5；近10年频次 4；首次年份 2008；最近年份 2020；真题实际词形 funding(5)；funded(2)；fund(1)；funds(1)；机器候选等级 A；500复现 否；锚点 2009-T4；锚点覆盖 4；出现篇目 2008-T2、2012-T1、2014-T3、2014-T4、2019-T2、2020-T1、2020-T2。"
          }
        ]
      }
    },
    {
      "id": "e3",
      "number": 3,
      "type": "单复数同形与不可数",
      "paragraphId": "p3",
      "prompt": "species 在母表语料中累计 11 次（species(11)），knowledge 累计 10 次（knowledge(10)），water 累计 8 次（water(5) / Water(2) / waters(1)）。关于这三组词形统计，下列判断正确的是：",
      "options": {
        "A": "species 的 11 次可以确定是 11 个复数，因为该词以 -s 结尾",
        "B": "knowledge 的 10 次里应有一部分是 knowledges，母表漏记了复数",
        "C": "waters(1) 与 water 不是同一词元，应从 8 次中扣除",
        "D": "species 单复数同形，11 次无法按词形判断单复数；waters 是「水域」的可数用法，与 water 同词元但义项不同"
      },
      "correctAnswer": "D",
      "locationText": "a species of small wading bird",
      "retryHint": "species 的复数和单数写法一样吗？waters 指的是「水」还是「水域」？",
      "analysis": {
        "answer": "D",
        "answerDetail": "母表原值：species(11) 全为同一词形，而 species 单复数同形，因此「11 次」既不能读成 11 个复数，也不能读成 11 个单数；knowledge(10) 为不可数名词，语料中无 knowledges；water 8 次含水(5) / Water(2) / waters(1)，waters 指「水域」，与不可数的 water 同词元但义项不同。D 三点都成立。A 以词尾 -s 推断复数，是形态误判；B 把不可数名词强行造出复数；C 违反词元归并规则。",
        "location": "第 3 段 第 1 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "这一题考两层：一是「词形相同不等于数相同」（species），二是「同一词元可以有不同的可数性与义项」（water / waters）。D 两层都写对；A 只做形态猜测；B 违反不可数；C 把词元归并与义项区分混为一谈。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=17 第 4 行 species：总频次 11；出现 4 篇 / 4 年；近10年 1；首次 2005 / 最近 2024；词形 species(11)。第 5 行 knowledge：总频次 10；出现 6 篇 / 6 年；近10年 4；词形 knowledge(10)。第 24 行 water：总频次 8；出现 2 篇 / 2 年；近10年 8；词形 water(5)；Water(2)；waters(1)。"
          }
        ]
      }
    },
    {
      "id": "e4",
      "number": 4,
      "type": "大小写归属",
      "paragraphId": "p2",
      "prompt": "royal 在母表语料中累计 9 次（Royal(5) / royal(2) / royals(2)），prize 累计 11 次（Prize(5) / prize(3) / prizes(2) / Prizes(1)），accept 累计 10 次（accept(4) / Accepted(2) / accepted(2) / accepting(2)）。关于这些首字母大写记录，下列判断正确的是：",
      "options": {
        "A": "大写次数多于小写，说明 royal 与 prize 在语料中只作专名",
        "B": "Accepted 的 2 次可以确定出现在句首，因为 accept 不可能作专名",
        "C": "母表只记录词形、不记录上下文，大写是句首还是专名无法逐次判定，属待人工裁定，本轮不改词表",
        "D": "大写与小写应合并为一条记录，并统一改写为小写后再计数"
      },
      "correctAnswer": "C",
      "locationText": "built under a royal charter in 1908",
      "retryHint": "母表这一列只有词形，没有句子——它能不能区分「句首大写」和「专名大写」？",
      "analysis": {
        "answer": "C",
        "answerDetail": "母表原值：royal 9 次含 Royal(5) / royal(2) / royals(2)；prize 11 次含 Prize(5) / Prizes(1)；accept 10 次含 Accepted(2)。这些记录只保留词形，没有上下文，因此大写既可能是句首，也可能是专名（奖项名、机构名），无法逐次判定，属待人工裁定事项；按既定纪律本轮不改词表、不改母表。C 正确。A 由「大写多」推出「只作专名」，是把可能性当结论；B 由「不可能作专名」推出「必在句首」，同样缺上下文；D 改写词形会破坏与原文的对应，也超出本轮权限。",
        "location": "第 2 段 第 1 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "C 的落点是「证据边界」：词形列能回答「出现了几次大写」，不能回答「为什么大写」。在这种边界上，正确做法是登记为待人工裁定，而不是用概率最高的解释当事实。A、B 都在越界推断；D 是处置越界——改写词形会切断与原始语料的对应关系。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=17 第 2 行 prize：总频次 11；出现 4 篇 / 4 年；近10年 2；首次 2012 / 最近 2025；词形 Prize(5)；prize(3)；prizes(2)；Prizes(1)。第 6 行 accept：总频次 10；出现 7 篇 / 7 年；词形 accept(4)；Accepted(2)；accepted(2)；accepting(2)。第 18 行 royal：总频次 9；出现 5 篇 / 5 年；词形 Royal(5)；royal(2)；royals(2)。"
          }
        ]
      }
    }
  ],
  "sentences": [
    {
      "id": "s1",
      "number": 1,
      "paragraphId": "p2",
      "original": "The charter is a short document, and Miss Ellery has always read it in the most liberal way: it says the building exists for the instruction of the public, and she takes public to mean anyone who climbs the hill.",
      "sections": [
        {
          "title": "先找主干",
          "content": "冒号前是两个并列分句：The charter is a short document 与 Miss Ellery has always read it in the most liberal way，由 and 连接。主干的意思是「文件很短，而她一向读得很宽」。it 指 the charter，不是形式主语。"
        },
        {
          "title": "冒号后的解释",
          "content": "冒号引出「宽」的具体内容，本身又是一个 and 连接的并列句：it says the building exists for the instruction of the public（文件说这座建筑为公众的启蒙而存在），and she takes public to mean anyone who climbs the hill（她把公众理解为任何爬上山坡的人）。exists for 是「为…而存在」，for 表目的。"
        },
        {
          "title": "take A to mean B",
          "content": "take ... to mean ... 是「把…理解为…」，to mean 作宾语补足语。anyone who climbs the hill 是定语从句修饰 anyone，who 在从句中作主语。这一结构在考研阅读里常用来引出「某人对某词的解释」，是态度与定义题的高频信号。"
        }
      ],
      "reminder": "冒号常用来「具体解释」前面的判断，读到冒号要往后找定义；take A to mean B 中 B 才是作者给出的真正含义；并列句中第二个分句常是重点。"
    },
    {
      "id": "s2",
      "number": 2,
      "paragraphId": "p3",
      "original": "What worries the students is the line of weed and rubbish left by the last high water.",
      "sections": [
        {
          "title": "主语从句作主语",
          "content": "What worries the students 是主语从句，what 在从句中作主语，整句的主干是 What worries the students is the line ...。注意不能读成「学生们担心那条线」：worries 的主语是 what 从句，the students 是宾语。"
        },
        {
          "title": "left by 是过去分词后置定语",
          "content": "left by the last high water 修饰 the line of weed and rubbish，left 是 leave 的过去分词，表被动「被上一次高潮留下的」。此处不是谓语，句子真正的谓语是 is。"
        },
        {
          "title": "line 的义项",
          "content": "line 在这里不是「行」也不是「台词」，而是「一条带状物」——海藻与垃圾被潮水推上岸后形成的一条线。同形不同义是本题的词汇门槛：预算表里的 line 是「一行」，海滩上的 line 是「一条带」。"
        }
      ],
      "reminder": "What 引导的主语从句整体作主语，谓语用单数；过去分词短语紧贴名词时先判断它是不是后置定语；line 的义项要由搭配（of weed and rubbish / in the budget）决定。"
    },
    {
      "id": "s3",
      "number": 3,
      "paragraphId": "p6",
      "original": "What I thought, and did not write in the report, is that a thing can be legal and still be a loss, and that the line in the budget was never a description of the building.",
      "sections": [
        {
          "title": "主语从句加插入",
          "content": "主语是 What I thought, and did not write in the report —— what 从句里有两个并列谓语 thought 与 did not write，第二个谓语被逗号隔开，形成插入效果。整句主干是 What I thought ... is that ... and that ...。"
        },
        {
          "title": "两个 that 表语从句",
          "content": "is 后面跟两个并列的 that 从句：that a thing can be legal and still be a loss 与 that the line in the budget was never a description of the building。两个 that 都不能省，第二个 that 前的 and 是关键标记，漏读就会把后半句当成前一句的补充。"
        },
        {
          "title": "双重判断的读法",
          "content": "第一层是「合法不等于没有损失」（legal 与 loss 并置），第二层是「账面的一行不等于实物描述」。作者用两个 that 把「事实判断」与「评价判断」分开，这正是主旨态度题的答案所在。"
        }
      ],
      "reminder": "主语从句里出现逗号插入时，先去掉插入部分找主干；两个并列 that 从句要靠第二个 that 识别；legal / loss、line / description 这两组对立是理解全篇立场的钥匙。"
    }
  ],
  "recallCards": [
    {
      "id": "r1",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U17 · single",
      "context": "single 在真题语料里累计 10 次，词形为 single(9) / singled(1)，后者来自短语 single out。",
      "prompt": "appeared as a single line 中的 single 意为「______」。（填三个字，表示「只有一个」）",
      "answer": "单一的",
      "hint": "它修饰 line，说的是「很多行」还是「只有一行」？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：单一的",
      "resolved": "single(9)/singled(1)——a single line＝单独一行；single out＝挑出、单独指出；single 作定语时强调「只有一个」。",
      "word": "single"
    },
    {
      "id": "r2",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U17 · species",
      "context": "species 在真题语料里累计 11 次，词形全部为 species(11)；该词单复数同形。",
      "prompt": "a species of small wading bird 中的 species 意为：",
      "options": {
        "A": "物种；种类",
        "B": "标本；样本",
        "C": "香料；调味品",
        "D": "栖息地；保护区"
      },
      "answer": "A",
      "hint": "后面跟着 of small wading bird——这是在给鸟分类，还是在说样本？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：A（物种；种类）",
      "resolved": "species(11)——a species of＝一种…；单复数同形（a species / two species）；endangered species＝濒危物种。",
      "word": "species"
    },
    {
      "id": "r3",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U17 · drive",
      "context": "drive 在真题语料里累计 9 次，词形为 drive(5) / driving(3) / Driving(1)，语料中无 drove、无 driven。",
      "prompt": "started a drive to raise money for a proper survey 中的 drive 意为：",
      "options": {
        "A": "驾驶；行车",
        "B": "车道；私用道路",
        "C": "有组织的运动；努力",
        "D": "驱动力（物理意义上的力）"
      },
      "answer": "C",
      "hint": "start a drive to raise money——一群人为了筹钱发起了什么？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：C（有组织的运动；努力）",
      "resolved": "drive(5)/driving(3)/Driving(1)——a drive to do sth＝做某事的运动；a recruitment drive＝招聘活动；drive 名动同形。",
      "word": "drive"
    },
    {
      "id": "r4",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U17 · fund",
      "context": "fund 在真题语料里累计 9 次，词形为 funding(5) / funded(2) / fund(1) / funds(1)，动词形合计 7 次。",
      "prompt": "they had funded two seasons of fieldwork 中的 funded 意为「______」。（填两个字，指提供资金）",
      "answer": "资助",
      "hint": "两个季度的野外工作，需要的是人手还是钱？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：资助",
      "resolved": "funding(5)/funded(2)/fund(1)/funds(1)——fund a survey＝资助一次调查；funds＝资金；funding 是不可数名词「经费」。",
      "word": "fund"
    },
    {
      "id": "r5",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U17 · nuclear",
      "context": "nuclear 在真题语料里累计 10 次，词形为 nuclear(8) / Nuclear(2)，只出现在 3 篇 / 3 年。",
      "prompt": "The households that arrived with it were nuclear in the older sense of the word 中的 nuclear 意为：",
      "options": {
        "A": "核能的；原子能的",
        "B": "核心的（指由父母与子女组成的小家庭）",
        "C": "核武器的；军备的",
        "D": "原子核的；核物理的"
      },
      "answer": "B",
      "hint": "后面解释了两个家长、两个孩子——这是在说能源，还是在说家庭结构？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（核心的，指小家庭）",
      "resolved": "nuclear(8)/Nuclear(2)——nuclear family＝核心家庭；nuclear energy＝核能；同一个词形至少有两个常用义项，要由上下文定。",
      "word": "nuclear"
    },
    {
      "id": "r6",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U17 · behind",
      "context": "behind 在真题语料里累计 8 次，词形为 behind(7) / Behind(1)，只作介词或副词。",
      "prompt": "What stayed behind was smaller and older 中 stayed behind 意为「______」。（填两个字，指没有离开）",
      "answer": "留下",
      "hint": "电站关闭后，一部分人走了，另一部分人怎么样了？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：留下",
      "resolved": "behind(7)/Behind(1)——stay behind＝留下、没走；leave sth behind＝留下某物；fall behind＝落后。",
      "word": "behind"
    }
  ],
  "reviewWords": [
    {
      "word": "legal",
      "meaning": "合法的；法律上的",
      "collocation": "the sale was legal"
    },
    {
      "word": "prize",
      "meaning": "奖项；奖金",
      "collocation": "bought with the Haldane Prize"
    },
    {
      "word": "thought",
      "meaning": "想法；念头",
      "collocation": "a thought she did not say aloud"
    },
    {
      "word": "species",
      "meaning": "物种；种类",
      "collocation": "a species of small wading bird"
    },
    {
      "word": "knowledge",
      "meaning": "知识；认识",
      "collocation": "Knowledge, in her account of it"
    },
    {
      "word": "accept",
      "meaning": "接受；认可",
      "collocation": "accepted the findings on the birds"
    },
    {
      "word": "single",
      "meaning": "单一的；单个的",
      "collocation": "appeared as a single line"
    },
    {
      "word": "track",
      "meaning": "追踪；记录",
      "collocation": "have been tracking the birds"
    },
    {
      "word": "nuclear",
      "meaning": "核能的；核心的",
      "collocation": "built by the nuclear station"
    },
    {
      "word": "drive",
      "meaning": "运动；努力",
      "collocation": "started a drive to raise money"
    },
    {
      "word": "fund",
      "meaning": "资助；提供资金",
      "collocation": "had funded two seasons of fieldwork"
    },
    {
      "word": "grow",
      "meaning": "增长；扩大",
      "collocation": "The colony has grown slowly"
    },
    {
      "word": "leave",
      "meaning": "离开；留下",
      "collocation": "most of them left"
    },
    {
      "word": "line",
      "meaning": "一行；界线",
      "collocation": "the line in the budget"
    },
    {
      "word": "story",
      "meaning": "说法；报道",
      "collocation": "The story the town tells itself"
    },
    {
      "word": "teacher",
      "meaning": "教师；老师",
      "collocation": "My old teacher, Miss Ellery"
    },
    {
      "word": "majority",
      "meaning": "多数；大多数",
      "collocation": "the majority of councillors were polite"
    },
    {
      "word": "royal",
      "meaning": "王室的；皇家的",
      "collocation": "built under a royal charter"
    },
    {
      "word": "senior",
      "meaning": "高级的；资深的",
      "collocation": "The council's senior officer for planning"
    },
    {
      "word": "intellectual",
      "meaning": "知识分子",
      "collocation": "by temperament, an intellectual"
    },
    {
      "word": "liberal",
      "meaning": "宽泛的；自由主义的",
      "collocation": "read it in the most liberal way"
    },
    {
      "word": "plastic",
      "meaning": "塑料；塑料制品",
      "collocation": "4.2 kilograms of plastic pellets"
    },
    {
      "word": "telescope",
      "meaning": "望远镜",
      "collocation": "The telescope stood where it had stood"
    },
    {
      "word": "water",
      "meaning": "水；水域",
      "collocation": "the samples of water they sent"
    },
    {
      "word": "behind",
      "meaning": "留在原处；在后面",
      "collocation": "What stayed behind was smaller and older"
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
