// UB02 · 5500 词｜原创补编单元（M-A：正文为原创撰写，非真题原文）
// 运行期数据来源：由 content/UB02_内容数据_V1.0.json 直接序列化而来（同 UB01 字段结构）。
// 已正式登记：status=official；unit-manifest 补编条目已增补 UB02（validateOfficialUnit 生效）。
// 词表：UB02_最终词表_V1.0.csv 冻结 25 词（future/past + 23 个 A1 已锁词，ASCII 字母序）。
// sequence=19 为运行期显示序号，不代表 U19 词汇归属；UB02 不计入主表 112 Unit / 2799 词位。
// 来源：future/past 取 D4 续审 D 档频次；其余 23 词为 500 A1 已锁词（外部证据源），P4 真题未命中，严禁虚标频次。
window.UnitRegistry.register(
{
  "id": "UB02",
  "status": "official",
  "sequence": 19,
  "totalUnits": 112,
  "series": "考研英语5500词｜真题语境记单词",
  "title": "The Salt Ledger",
  "subtitle": "高频实词 · 原创补编单元 UB02",
  "stage": "原创示范｜阅读证据（M-A）",
  "newWordCount": 25,
  "storage": {
    "namespace": "kaoyan5500:UB02",
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
    "note": "本篇正文为原创示范材料，非真题原文。future / past 的来源为 D4 续审的 D 档统计；其余 23 词为 500 A1 已锁词（外部证据源），P4 真题未命中，严禁虚标真题频次与篇目。",
    "verifiedAt": "2026-10-28",
    "reviewStatus": "draft_pending_human_review"
  },
  "goals": [
    "在「一家倒闭的罐头厂与一份对不上的账」的调查语域中掌握 25 个高频实词",
    "吃透 household 只作「家庭（经济单位）」、participate 只作「参与」、bankrupt 只作「破产」三处词族边界",
    "识别 drawback 的复合名词身份、investigate 的伪前缀 invest、exaggerate 的伪前缀 extra 三处易混"
  ],
  "paragraphs": [
    {
      "id": "p1",
      "title": "The Boarded Windows",
      "en": "Nora Bell came north on the coast road in the last week of October and saw the cannery before she saw the town: a long shed with its windows boarded and its name painted over in grey. It had gone bankrupt fourteen months earlier, and the failure had taken three hundred household savings accounts with it. Half the boats in the harbour were still tied up in pairs.\n\nThe federation had hired her to investigate what the cooperative had done with the emergency money the county lent it in the spring. She had nine years of audits behind her and a rule she did not break: read the documents before you meet the people who wrote them.\n\nThe past was still inside the building. Ledgers stood in cardboard boxes along the wall, a clipboard held the last day's catch, and somebody's kettle was on the sill. A closed plant keeps its paperwork longer than it keeps its workers.\n\nThe man at the fuel station told her the future of the bay depended on whether the cannery could open again before the herring came in.",
      "cn": "诺拉·贝尔在十月最后一周沿滨海公路北上，先看见罐头厂，才看见镇子：一长排厂房，窗子钉了木板，厂名被灰漆盖掉。它十四个月前破产，随之倒下的是三百户人家的存款。港口里一半的渔船还两两系着，没有出海。\n\n联合会雇她来查这家合作社把县里春天借给的应急款用到了哪里。她做了九年审计，有一条不肯破的规矩：先读文件，再去见写文件的人。\n\n过去还在楼里。账本立在墙边的纸箱里，一块写字板夹着最后一日的渔获记录，窗台上搁着谁的水壶。一家关掉的厂，留文件比留工人留得久。\n\n加油站的伙计告诉她，海湾的将来取决于罐头厂能不能在鲱鱼汛来之前重新开工。"
    },
    {
      "id": "p2",
      "title": "Two Sets of Books",
      "en": "The two sets of books did not agree. In the same month one ledger carried eleven thousand dollars that the other did not, and the gap had been carried forward so many times that it had begun to look like a rounding habit.\n\nThe county had handed the emergency fund to a committee of five to administer; three of them had signed every page without reading it. In August of the second year Nora found the abuse: eleven payments to a haulage company that owned no trucks, registered at an address that turned out to be a shed.\n\nShe had investigated for eleven days before she was willing to use the word fraud. Fraud is what a court finds; what she had was a paper trail that only made sense if somebody had written it twice.\n\nThe drawback was the shape of the loan. The county had secured it against the cannery building, so every dollar she proved missing made the building harder to sell and the reopening less likely.\n\nBy the end of the second week she had to coordinate three offices that did not answer each other's letters: the county auditor, the cooperative's lawyer, and a police liaison in the capital who had never administered anything larger than a parking fine.",
      "cn": "两套账对不上。同一个月里，一本账上多出一万一千美元，另一本没有，这个差额被一次次往下结转，结到后来就像是一种四舍五入的习惯。\n\n县里把应急款交给一个五人委员会去管理，其中三个人在每一页上都签了名，却没读。第二年八月，诺拉找到了那处滥用：十一笔付款打给一家没有卡车的运输公司，注册地址是一间棚屋。\n\n她查了十一天才肯用「欺诈」这个词。欺诈是法院的认定；她手里有的是一串单据，而这一串单据只有在有人把同一份文件写了两遍的情况下才说得通。\n\n贷款的坏处在于它的结构。县里拿罐头厂的厂房作抵押，于是她每查证出一美元去向不明，厂房就更难卖，重新开工的希望就更小。\n\n到第二周周末，她得同时协调三个互不回信的部门：县审计员、合作社的律师，以及首都那边一个从没管过比一张停车罚单更大事情的警方联络人。"
    },
    {
      "id": "p3",
      "title": "What the Town Already Knew",
      "en": "Halberd Bay was not indifferent to the audit. It was polite about it. At the diner, at the fuel station, at the church hall, people asked how long she would be staying and then told her what she had come to find out.\n\nThe board's ignorance of the fund's own rules was real, and it was also useful. A man who has not read a contract can hardly be accused of breaking it, and an indifference that looked like manners had settled over the whole matter. Two of the five men on the committee had sat on it for eleven years, and neither could say what the loan agreement required them to report.\n\nOn the fourth day the mayor asked her to wait until after the election. To defy him in public would have cost her the files; to agree would have cost her the audit. She declined in writing, in four sentences, and the assistant stopped offering her coffee.\n\nNora had not come to offend anyone. She had come to count. But she had learned in nine years that in a small town the count is the offence, and that the only way to be believed is not to exaggerate.",
      "cn": "哈尔伯德湾对这次审计并非漠不关心，它只是很客气。在餐车餐馆、加油站、教堂礼堂，人们问她打算住多久，然后把她要查的事讲给她听。\n\n董事会对基金自身规则的无知是真的，而这无知也正好合用。一个没读过合同的人，几乎不能被指为违约；一种看起来像礼貌的漠然，就这样罩住了整件事。委员会五个人里有两位已经在任十一年，谁都说不出贷款协议要求他们上报什么。\n\n第四天，镇长请她等到选举之后再动。公开违抗他，代价是那些卷宗；答应他，代价是这次审计。她写了四句话，用书面回绝，助理就不再给她倒咖啡了。\n\n诺拉不是来冒犯谁的。她是来数数的。可九年的经验告诉她，在一个小镇上，数数本身就是冒犯；而唯一能让人相信的办法，是不夸大。"
    },
    {
      "id": "p4",
      "title": "The Lines Are Sold",
      "en": "Once the herring had been abundant enough that the cannery ran three shifts and still hired students for the summer. The quota was smaller by then, and the fleet with it, but the plant's trouble was not the fish. The plant had nothing left to manufacture. The lines were sold in the spring, the retorts were cut up for scrap, and the only product left in the warehouse was a pallet of labels printed with a species nobody bought any more.\n\nInes Alvarado, who ran the nutrition survey for the county clinic, had numbers Nora could use. In the two years since the closure the share of children in the bay who ate fish twice a week had fallen from sixty per cent to nineteen. Households had not recovered; the cheapest calories in the shop were the ones in a box.\n\nThat was the part the ledgers did not carry. A missing invoice has a page number. A child's dinner does not.",
      "cn": "从前鲱鱼多到罐头厂开三班还要在夏天雇学生。配额后来小了，船队也跟着小，但厂子的麻烦不在鱼。厂里已经没有东西可造了。生产线春天卖掉，杀菌釜被切成废铁，仓库里剩的唯一产品是一托盘标签，印着一个再没人买的鱼种。\n\n伊内斯·阿尔瓦拉多替县诊所做营养调查，手里有诺拉能用的数字。关厂两年间，湾里一周吃两次鱼的孩子从六成降到一成九。各家各户都没缓过来；店里最便宜的卡路里现在是装在盒子里的那些。\n\n这是账本背不动的那部分。一张缺失的发票有页码。一个孩子的晚饭没有。"
    },
    {
      "id": "p5",
      "title": "The Church Hall",
      "en": "The hearing was held in the church hall, because the council chamber had been condemned along with the pier. Nora was asked to participate as a technical witness, which meant she could describe documents but could not name a crime.\n\nShe was given twenty minutes and used eleven. She had to interpret the loan agreement clause by clause before she could say what it allowed: the county had lent the money to the cooperative, not to its board, and a cooperative exists as long as eleven members will sign for it. The autonomy the county had written in to keep the fishermen independent was also the reason the debt could not be written off against a building. A schedule of repayment was possible. Forgiveness was not.\n\nWhat she could accomplish in that hall was small and specific: a motion to reopen the books, and a second motion to appoint a receiver who would report in public. Both passed. The vote on the second was six to five.",
      "cn": "听证会在教堂礼堂开，因为议事厅随码头一起被判了不能使用。诺拉被请去作为技术证人参加，意思是她可以描述文件，但不能指认罪名。\n\n他们给她二十分钟，她用了十一分钟。她得逐条解释贷款协议，才能说清它允许什么：县里把钱借给合作社，不是借给董事会；而只要还有十一个成员愿意签字，合作社就存在。县里当初为了让渔民独立而写进去的自主权，也正是这笔债不能简单地从一栋楼上勾销的原因。分期还款可以谈，免除不行。\n\n她在那间礼堂里能办成的事很小，也很具体：一项动议要求重新开放账目，第二项动议要求指定一名接管人公开报告。两项都通过了。第二项的表决是六比五。"
    },
    {
      "id": "p6",
      "title": "What the Ledger Holds",
      "en": "The receiver was appointed on a Thursday, and the first public statement of the accounts ran to four pages in the county weekly. It did not use the word fraud. It used the word irregular eleven times, and each time it named a page.\n\nNora had expected to leave after the hearing. She stayed three more weeks instead, because there was no way to persist from four hundred miles away. What she accomplished in those weeks was mostly filing: boxes in order, copies to the clinic, copies to the church hall, a list of names the board had never written down.\n\nTo overcome the version of events that the town preferred — bad luck, a bad season, a bad year — she had to keep the documents where people could reach them without asking permission. The past she had come to read was now a file anyone could open. The future was scheduled: two years of repayments, one season of herring, a vote in March.",
      "cn": "接管人在周四被指定，第一份公开的账目说明在县周报上占了四页。它没有用「欺诈」这个词，它用了十一次「不合规」，每一次都注明了页码。\n\n诺拉本打算听证会之后就离开。她多留了三个星期，因为隔着四百英里没有办法坚持。那几个星期她做成的事大多是归档：箱子按序排好，一份送诊所，一份送教堂礼堂，还有一份名单，是董事会从来没写下来过的。\n\n要压过镇上更愿意接受的那个版本——运气不好，年景不好，年头不好——她只能让文件放在人们不用开口请求就能拿到的地方。她来读的那个过去，如今是谁都能打开的一份卷宗。将来则排进了日程：两年还款，一季鲱鱼，三月的一次表决。"
    }
  ],
  "vocabulary": [
    {
      "word": "future",
      "pos": "n. / adj.",
      "basicMeaning": "将来；未来",
      "contextMeaning": "前途；这个海湾往后会怎样（the future of the bay）",
      "extendedMeaning": "in future 从今以后（英式，等于美式 in the future）；future 作定语表「将来的」（future plans）",
      "senseStatus": "A 定稿",
      "englishDefinition": "the time that has not happened yet; what will happen to someone or something",
      "collocation": "the future of the bay　/　in the future　/　future plans",
      "contextualExample": "The man at the fuel station told her the future of the bay depended on whether the cannery could open again before the herring came in.",
      "readingNote": "p1 只出现一次，取「前途」义，不是抽象时间。全篇不出现 in future 短语，避免与「从今以后」混读。",
      "examTips": "future 作「前途」时常带 of 短语（the future of X）；in the future 表时间，in future 在英式里等于「从此以后」；作定语时是可数名词化的前置修饰（future plans），不加 -s。",
      "forms": [],
      "examEvidence": "来源：D4 续审（D4续 §3.2 行E）　·　D 档频次 25 次　·　27 漏词全集成员　·　母库序号 2084（5,520 母库）　｜　非真题篇目命中，不作篇目归属、不标出现篇数"
    },
    {
      "word": "past",
      "pos": "n. / adj. / prep.",
      "basicMeaning": "过去；往事",
      "contextMeaning": "过去（那段时间里留下的东西）",
      "extendedMeaning": "in the past 在过去；adj. 过去的（the past year）；prep. 经过（walk past）——后两义本材料不收",
      "senseStatus": "A 定稿",
      "englishDefinition": "the time before now; the history of a place or person",
      "collocation": "the past was still inside the building　/　in the past　/　the past year",
      "contextualExample": "The past was still inside the building.",
      "readingNote": "p1 作名词，与 the future 对照（p1 末句 / p6 末句），构成全篇的「过去—将来」骨架。全篇不含 walk past 这类介词用法。",
      "examTips": "the past 是名词，in the past 是时间状语；past 与 passed 形近音同，别互写（passed 是 pass 的过去式）。介词 past 表「经过」，需带宾语。",
      "forms": [],
      "examEvidence": "来源：D4 续审（D4续 §3.2 行E）　·　D 档频次 24 次　·　27 漏词全集成员　·　母库序号 3499（5,520 母库）　｜　非真题篇目命中，不作篇目归属、不标出现篇数"
    },
    {
      "word": "abundant",
      "pos": "adj.",
      "basicMeaning": "丰富的；大量的",
      "contextMeaning": "（鱼）多得很；数量充足",
      "extendedMeaning": "abundance n. 大量、充裕；abundantly adv. 极其清楚地（= very）",
      "senseStatus": "A 定稿",
      "englishDefinition": "existing in large quantities; more than enough",
      "collocation": "abundant enough that　/　abundant in　/　an abundant supply",
      "contextualExample": "Once the herring had been abundant enough that the cannery ran three shifts and still hired students for the summer.",
      "readingNote": "p4 只出现一次，作表语 + enough that 结果从句，是本篇唯一一个「曾经充裕」的正面形容词，与后半篇的短缺形成对照。",
      "examTips": "abundant 接 in（a region abundant in fish），不接 with；abundant 修饰物不修饰人；与 enough 连用时用 abundant enough to do / that 从句。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP19 已锁词　·　母库序号 21（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "abuse",
      "pos": "n. / v.",
      "basicMeaning": "滥用；妄用",
      "contextMeaning": "（对公款的）滥用；挪用",
      "extendedMeaning": "v. 虐待、辱骂（abuse sb）；n. 虐待（child abuse）——后两义本材料不收",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "the use of something in a wrong or harmful way",
      "collocation": "found the abuse　/　abuse of power　/　abuse of public funds",
      "contextualExample": "In August of the second year Nora found the abuse: eleven payments to a haulage company that owned no trucks, registered at an address that turned out to be a shed.",
      "readingNote": "p2 取「滥用公款」义，冒号后是它的具体所指（十一笔虚假付款）。全篇不含「虐待」义，两义留给扩展义与复盘对比。",
      "examTips": "abuse of + 被滥用之物（abuse of power / of funds）；名词与动词同形，重音都在第二音节；「虐待」义多与 child / drug / alcohol 搭配，本篇不用。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP16 已锁词　·　母库序号 22（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "accomplish",
      "pos": "v.",
      "basicMeaning": "完成；实现",
      "contextMeaning": "办成；做成（某件具体的事）",
      "extendedMeaning": "accomplishment n. 成就、完成（可数）；accomplished adj. 有造诣的（an accomplished musician）",
      "senseStatus": "A 定稿",
      "englishDefinition": "to succeed in doing or finishing something",
      "collocation": "accomplish in that hall　/　accomplish a task　/　accomplish nothing",
      "contextualExample": "What she accomplished in those weeks was mostly filing: boxes in order, copies to the clinic, copies to the church hall, a list of names the board had never written down.",
      "readingNote": "p5 用 could accomplish（虚拟语气下的能力范围），p6 用 what she accomplished 作主语从句，两处都是「办成具体的事」，不作「完成学业」义。",
      "examTips": "accomplish 直接接宾语（accomplish a task），不加 on / in；不说 accomplish to do；名词是 accomplishment，不是 accomplishement。",
      "forms": [
        "accomplished"
      ],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP06 已锁词　·　母库序号 36（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "administer",
      "pos": "v.",
      "basicMeaning": "管理；治理",
      "contextMeaning": "管理（一笔基金）",
      "extendedMeaning": "administer 还可表「施行（药物 / 法律）」与「给予（帮助 / 打击）」；名词 administration 兼指「管理」「政府」",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "to manage or organize the work of an institution or fund",
      "collocation": "a committee to administer　/　administer a fund　/　administer justice",
      "contextualExample": "The county had handed the emergency fund to a committee of five to administer; three of them had signed every page without reading it.",
      "readingNote": "p2 用不定式 to administer（管理基金）；p2 末句 administered 取虚设对比（「从没管过比停车罚单更大的事」）。全篇不含「给药」义。",
      "examTips": "administer 的宾语是制度、基金、机构，不是人；「给药」用 administer a drug to sb；形容词 administrative 是「行政的」，别与 administrate 混用。",
      "forms": [
        "administered"
      ],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP21 已锁词　·　母库序号 77（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "autonomy",
      "pos": "n.",
      "basicMeaning": "自治；自主",
      "contextMeaning": "（合作社的）自主权；自行处理事务的权力",
      "extendedMeaning": "autonomous adj. 自治的、自主的；personal autonomy 个人自主（伦理 / 医学语境）",
      "senseStatus": "A 定稿",
      "englishDefinition": "the right or condition of governing yourself or deciding things yourself",
      "collocation": "the autonomy the county had written in　/　grant autonomy to　/　local autonomy",
      "contextualExample": "The autonomy the county had written in to keep the fishermen independent was also the reason the debt could not be written off against a building.",
      "readingNote": "p5 只出现一次，指协议里写明的「合作社自主」，是全篇的转折点：自治权同时成了债务不能一笔勾销的原因。",
      "examTips": "autonomy 是不可数名词，通常不加 -s；搭配 grant / give / enjoy autonomy，介词常用 from（autonomy from the state）；形容词 autonomous，副词 autonomously。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP17 已锁词　·　母库序号 350（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "bankrupt",
      "pos": "adj. / v. / n.",
      "basicMeaning": "破产的",
      "contextMeaning": "破产（go bankrupt，指企业无力清偿而停业）",
      "extendedMeaning": "v. 使破产（bankrupt the company）；n. 破产者；引申义 morally bankrupt 道德败坏",
      "senseStatus": "A 定稿",
      "englishDefinition": "unable to pay what you owe and legally declared unable to continue",
      "collocation": "gone bankrupt　/　go bankrupt　/　be declared bankrupt",
      "contextualExample": "It had gone bankrupt fourteen months earlier, and the failure had taken three hundred household savings accounts with it.",
      "readingNote": "p1 只出现一次，用 go bankrupt 这一固定动词短语（gone 是 go 的过去分词）。与本篇的 failure 同指一事，相互印证。",
      "examTips": "破产是 go bankrupt（形容词表语），不说 go to bankrupt；bankrupt 与 bank（银行 / 河岸）只是形近，语义无关；动词用法 bankrupt sb 是「使破产」。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP02 已锁词　·　母库序号 398（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "coordinate",
      "pos": "v. / n.",
      "basicMeaning": "协调；使配合",
      "contextMeaning": "协调（几个互不通气的部门）",
      "extendedMeaning": "n. 坐标（maths）；coordination n. 协调；coordinator n. 协调人",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "to organize people or activities so that they work together",
      "collocation": "coordinate three offices　/　coordinate with sb　/　coordinate efforts",
      "contextualExample": "By the end of the second week she had to coordinate three offices that did not answer each other's letters: the county auditor, the cooperative's lawyer, and a police liaison in the capital who had never administered anything larger than a parking fine.",
      "readingNote": "p2 末句作动词，宾语是三个部门（人 / 机构），不是「坐标」。全篇不含名词「坐标」义。",
      "examTips": "coordinate 作动词时宾语多为活动或人；与某人配合用 coordinate with sb；名词「坐标」恒用复数 coordinates；拼写别丢第二个 o（co-ordinate 是英式旧拼法）。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP19 已锁词　·　母库序号 1086（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "defy",
      "pos": "v.",
      "basicMeaning": "违抗；公然反抗",
      "contextMeaning": "违抗（镇长的要求）",
      "extendedMeaning": "defy 还可表「使难以…」（defy description 难以形容 / defy belief 难以置信）",
      "senseStatus": "A 定稿",
      "englishDefinition": "to refuse openly to obey a person, rule or order",
      "collocation": "defy him in public　/　defy an order　/　defy description",
      "contextualExample": "To defy him in public would have cost her the files; to agree would have cost her the audit.",
      "readingNote": "p3 用不定式作主语（To defy him in public），与 to agree 并列对照，构成本段的取舍。全篇不含 defy description 这类引申用法。",
      "examTips": "defy 的宾语是人、命令、规则；「难以形容」用 defy description / belief，此时主语多为事物；名词 defiance，形容词 defiant。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP17 已锁词　·　母库序号 1275（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "drawback",
      "pos": "n.",
      "basicMeaning": "缺点；不利条件",
      "contextMeaning": "（这笔贷款的）弊处、隐患",
      "extendedMeaning": "drawback 是复合名词（draw + back），恒作名词；动词义已废弃，不与 draw（拉 / 画）通用",
      "senseStatus": "A 定稿",
      "englishDefinition": "a disadvantage or the negative part of a situation",
      "collocation": "the drawback was the shape of the loan　/　a serious drawback　/　the main drawback of",
      "contextualExample": "The drawback was the shape of the loan.",
      "readingNote": "p2 独立成句，后接冒号式的解释（其实是下一句详述）：抵押权让追款与复工相互冲突。注意它不是 draw 的派生用法。",
      "examTips": "drawback 后可接 of / to（the drawback of the plan / a drawback to living here）；不要写成 draw back（那是动词短语「后退 / 退缩」）；与 disadvantage 近义，但 drawback 更常用于「方案 / 条件」的弊处。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP05 已锁词　·　母库序号 1503（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "exaggerate",
      "pos": "v.",
      "basicMeaning": "夸大；夸张",
      "contextMeaning": "夸大（事实、数字）",
      "extendedMeaning": "exaggerated adj. 夸张的；exaggeration n. 夸张（不说 exaggeratement）",
      "senseStatus": "A 定稿",
      "englishDefinition": "to describe something as larger, better or worse than it really is",
      "collocation": "not to exaggerate　/　exaggerate the numbers　/　it is no exaggeration to say",
      "contextualExample": "But she had learned in nine years that in a small town the count is the offence, and that the only way to be believed is not to exaggerate.",
      "readingNote": "p3 末句用否定不定式 not to exaggerate，是全篇的写作立场：只数，不夸大。这也是本单元不虚标频次的内容层对应。",
      "examTips": "exaggerate 是及物动词，直接接宾语（exaggerate the risks），不加 about；名词 exaggeration，固定说法 It is no exaggeration to say that...；别与 extra（额外的）牵强联系，只是形近。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP16 已锁词　·　母库序号 1745（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "fraud",
      "pos": "n.",
      "basicMeaning": "欺诈；诈骗",
      "contextMeaning": "欺诈（法律上的认定）",
      "extendedMeaning": "a fraud 可指「骗子 / 骗局」（可数）；fraudulent adj. 欺诈性的",
      "senseStatus": "A 定稿",
      "englishDefinition": "the crime of deceiving people in order to get money",
      "collocation": "the word fraud　/　commit fraud　/　tax fraud",
      "contextualExample": "Fraud is what a court finds; what she had was a paper trail that only made sense if somebody had written it twice.",
      "readingNote": "p2 先以「the word fraud」出现（她在斟酌用词），再以定义句出现；p6 再提一次（报道回避了它）。三处都在强调「认定」与「证据」的距离。",
      "examTips": "fraud 作「欺诈行为」不可数（commit fraud），作「骗子」可数（He is a fraud）；介词搭配 fraud on sb；与 deception 近义，但 fraud 更偏法律与金钱。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP07 已锁词　·　母库序号 2037（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "household",
      "pos": "n. / adj.",
      "basicMeaning": "家庭；一家人（作为一个经济单位）",
      "contextMeaning": "家庭（以户为单位，指存款 / 开支的主体）",
      "extendedMeaning": "adj. 家用的、家喻户晓的（household name）；household goods 家用物品",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "all the people living together in one house, considered as a unit",
      "collocation": "household savings accounts　/　household budgets　/　a household name",
      "contextualExample": "It had gone bankrupt fourteen months earlier, and the failure had taken three hundred household savings accounts with it.",
      "readingNote": "p1 作定语（household savings accounts），p4 作复数主语（Households had not recovered）。household 是「户 / 经济单位」，不等于 house（住宅）；本卡 forms 不含 house / houses。",
      "examTips": "household 强调「一户人（经济单位）」，house 是「住宅」、household 不能替换 house；household 作定语很常见（household income / chores / waste）；复数 households。",
      "forms": [
        "households"
      ],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP10 已锁词　·　母库序号 2386（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "ignorance",
      "pos": "n.",
      "basicMeaning": "无知；不了解",
      "contextMeaning": "（董事会对规则的）不了解、无知",
      "extendedMeaning": "ignorant adj. 无知的；be ignorant of 对…一无所知（ignorance 不作「愚昧」的道德判断）",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "lack of knowledge or information about something",
      "collocation": "the board's ignorance of the rules　/　ignorance of the law　/　in ignorance of",
      "contextualExample": "The board's ignorance of the fund's own rules was real, and it was also useful.",
      "readingNote": "p3 取「不了解事实」义，且带评价（useful）：无知成了免责的挡箭牌。介词固定用 of。",
      "examTips": "ignorance of + 对象（ignorance of the law）；in ignorance of 表「不知道」；别与 innocent（无辜的）混；动词 ignore 是「忽视」，与「不知道」不同。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP04 已锁词　·　母库序号 2437（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "indifferent",
      "pos": "adj.",
      "basicMeaning": "漠不关心的；不在意的",
      "contextMeaning": "漠不关心（镇上对审计的态度）",
      "extendedMeaning": "be indifferent to 对…漠然；indifference n. 冷漠；indifferent 还有「平庸的」义（an indifferent performance），本材料不收",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "not interested in or concerned about something",
      "collocation": "not indifferent to the audit　/　be indifferent to　/　an indifference that looked like manners",
      "contextualExample": "Halberd Bay was not indifferent to the audit.",
      "readingNote": "p3 首句用否定式（not indifferent）起笔，随即用 politeness 反讽；同段名词 indifference 复现一次，形成首尾呼应。",
      "examTips": "indifferent 接 to（indifferent to praise），不接 about / with；indifferent 不等于 different，「不在意的」与「不同的」是两个词；名词 indifference 后同样接 to。",
      "forms": [
        "indifference"
      ],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP01 已锁词　·　母库序号 2505（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "interpret",
      "pos": "v.",
      "basicMeaning": "解释；理解为",
      "contextMeaning": "解释（合同条款的法律含义）",
      "extendedMeaning": "interpret 还可表「口译」（interpret for sb）；interpretation n. 解释 / 演绎；interpreter n. 口译员",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "to explain the meaning of something, especially words or a text",
      "collocation": "interpret the loan agreement　/　interpret sth as　/　interpret for sb",
      "contextualExample": "She had to interpret the loan agreement clause by clause before she could say what it allowed: the county had lent the money to the cooperative, not to its board, and a cooperative exists as long as eleven members will sign for it.",
      "readingNote": "p5 取「解释条款」义，逐条（clause by clause）解释，宾语是文本；全篇不含「口译」义。",
      "examTips": "interpret 作「理解为」时用 interpret sth as sth；作「口译」时不及物（interpret for the delegation）；名词 interpretation 兼指「解释」与「演绎」。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP01 已锁词　·　母库序号 2609（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "investigate",
      "pos": "v.",
      "basicMeaning": "调查；侦查",
      "contextMeaning": "调查（一笔款项的去向）",
      "extendedMeaning": "investigation n. 调查；investigator n. 调查员；under investigation 正在调查中",
      "senseStatus": "A 定稿",
      "englishDefinition": "to try to find out the truth about something",
      "collocation": "hired her to investigate　/　investigate the accounts　/　under investigation",
      "contextualExample": "The federation had hired her to investigate what the cooperative had done with the emergency money the county lent it in the spring.",
      "readingNote": "p1 用不定式 to investigate（受雇来查）；p2 用过去完成时 had investigated（查了十一天）。invest- 只是形近，与 invest（投资）语义无关。",
      "examTips": "investigate 是及物动词，直接接宾语（investigate the case），不加 into；名词 investigation 后才用 into（an investigation into the case）；别与 invest（投资）混。",
      "forms": [
        "investigated"
      ],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP07 已锁词　·　母库序号 2635（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "manufacture",
      "pos": "v. / n.",
      "basicMeaning": "制造；生产",
      "contextMeaning": "制造（厂里已无物可造）",
      "extendedMeaning": "n. 制造品（manufactures）；manufacturer n. 制造商；引申义 manufacture evidence 捏造证据",
      "senseStatus": "A 定稿",
      "englishDefinition": "to make goods in large quantities using machines",
      "collocation": "nothing left to manufacture　/　manufacture goods　/　the manufacture of",
      "contextualExample": "The plant had nothing left to manufacture.",
      "readingNote": "p4 用不定式 to manufacture 作 nothing 的后置修饰，字面是「没有东西可造」，暗指生产线已卖。全篇不含「捏造」义。",
      "examTips": "manufacture 指工业化大批量生产，手工小量制作用 make；名词 manufacturer 是「制造商」；「捏造证据」是固定搭配 manufacture evidence。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP18 已锁词　·　母库序号 2951（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "nutrition",
      "pos": "n.",
      "basicMeaning": "营养",
      "contextMeaning": "营养（调查所测的摄入状况）",
      "extendedMeaning": "—",
      "senseStatus": "A 定稿",
      "englishDefinition": "the food and substances that people need in order to grow and stay healthy",
      "collocation": "the nutrition survey　/　good nutrition　/　nutrition and health",
      "contextualExample": "Ines Alvarado, who ran the nutrition survey for the county clinic, had numbers Nora could use.",
      "readingNote": "p4 只出现一次，作定语修饰 survey。nutrition 是不可数名词，指「营养（这件事 / 这门学问）」，不指某一种营养素。",
      "examTips": "nutrition 不可数，不说 a nutrition / nutritions；营养素是 nutrient；形容词 nutritional（nutritional value）；nutritionist 是「营养师」。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP12 已锁词　·　母库序号 3286（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "offend",
      "pos": "v.",
      "basicMeaning": "冒犯；得罪",
      "contextMeaning": "冒犯（镇上的人）",
      "extendedMeaning": "offence / offense n. 冒犯、罪行；offended adj. 被得罪的；offensive adj. 冒犯性的",
      "senseStatus": "A 定稿",
      "englishDefinition": "to make someone upset or angry by something you say or do",
      "collocation": "come to offend anyone　/　offend against　/　be offended by",
      "contextualExample": "Nora had not come to offend anyone.",
      "readingNote": "p3 用否定句起段（had not come to offend anyone），紧接着用 the offence 一词反转：数数本身就是冒犯。动词与派生名词同段并置。",
      "examTips": "offend sb 直接接人，不加 to；被动 be offended by / at；名词英式 offence、美式 offense；offend against 后接法律或原则。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP04 已锁词　·　母库序号 3324（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "overcome",
      "pos": "v.",
      "basicMeaning": "克服；战胜",
      "contextMeaning": "压过；克服（一种现成的说法 / 成见）",
      "extendedMeaning": "be overcome by / with 被…压倒（情绪、烟味）；overcome 三态同形不同音（overcome - overcame - overcome）",
      "senseStatus": "A 定稿",
      "englishDefinition": "to succeed in dealing with or controlling a problem",
      "collocation": "to overcome the version of events　/　overcome difficulties　/　be overcome by",
      "contextualExample": "To overcome the version of events that the town preferred — bad luck, a bad season, a bad year — she had to keep the documents where people could reach them without asking permission.",
      "readingNote": "p6 用不定式作目的状语（To overcome...），宾语是抽象的「说法 / 版本」，不是具体困难。全篇不含 be overcome by 这一被动义。",
      "examTips": "过去式是 overcame，过去分词是 overcome（不是 overcomed）；overcome 的宾语多为困难、障碍、恐惧；be overcome by 表「被（情绪）压倒」，主语是人。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP20 已锁词　·　母库序号 3417（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "participate",
      "pos": "v.",
      "basicMeaning": "参加；参与",
      "contextMeaning": "参加（以技术证人身份）",
      "extendedMeaning": "participation n. 参与；participant n. 参与者；participate in 为固定搭配",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "to take part in an activity or event",
      "collocation": "participate as a technical witness　/　participate in　/　active participation",
      "contextualExample": "Nora was asked to participate as a technical witness, which meant she could describe documents but could not name a crime.",
      "readingNote": "p5 用 participate as（以…身份参加），不是 participate in；两者都对，但 as 后接身份、in 后接活动。本卡 forms 不含 part。",
      "examTips": "participate 是不及物动词，必须带 in（participate in the hearing），不能说 participate the hearing；身份用 as；别把 part 当成它的词形变化。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP18 已锁词　·　母库序号 3486（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "persist",
      "pos": "v.",
      "basicMeaning": "坚持；持续",
      "contextMeaning": "坚持（在远处无法坚持）",
      "extendedMeaning": "persist in doing 执意做；persistent adj. 持续的、执着的；persistence n. 坚持",
      "senseStatus": "B 定稿（改写）",
      "englishDefinition": "to continue doing something in a determined way, even when it is difficult",
      "collocation": "no way to persist from four hundred miles away　/　persist in　/　persist with",
      "contextualExample": "She stayed three more weeks instead, because there was no way to persist from four hundred miles away.",
      "readingNote": "p6 用不定式 to persist，前有 no way 否定：距离使「坚持」不成立。全篇不含 persist in doing（执意）这一贬义倾向的用法。",
      "examTips": "persist 后接 in doing（执意做，常含贬义）或 with sth（坚持做下去）；「持续存在」义主语多为事物（The problem persists）；形容词 persistent 两义并存。",
      "forms": [],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP06 已锁词　·　母库序号 3566（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    },
    {
      "word": "schedule",
      "pos": "n. / v.",
      "basicMeaning": "日程；时间表",
      "contextMeaning": "还款安排；时间表（a schedule of repayment）",
      "extendedMeaning": "v. 安排、定于（be scheduled to do）；ahead of schedule 提前；on schedule 按时",
      "senseStatus": "A 定稿",
      "englishDefinition": "a plan listing when things will happen or be done",
      "collocation": "a schedule of repayment　/　on schedule　/　be scheduled to",
      "contextualExample": "A schedule of repayment was possible.",
      "readingNote": "p5 作名词（还款时间表），p6 用被动 was scheduled（排进了日程）。名词与动词同形，重音都在第一音节（英式）。",
      "examTips": "schedule 作动词常用被动 be scheduled to do / for；固定短语 on schedule（按时）、ahead of / behind schedule；英式读音 /ˈʃedjuːl/，美式 /ˈskedʒuːl/。",
      "forms": [
        "scheduled"
      ],
      "examEvidence": "来源：500 A1 已锁词（外部证据源）　·　focus-words-data.js EP19 已锁词　·　母库序号 4286（5,520 母库）　｜　P4 真题未命中，严禁虚标频次"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "number": 1,
      "type": "细节题",
      "paragraphId": "p1",
      "prompt": "According to paragraph 1, what happened to the household savings accounts?",
      "options": {
        "A": "They were lent to the county in the spring.",
        "B": "They were lost when the cannery failed.",
        "C": "They were secured against the building.",
        "D": "They were repaid by the federation."
      },
      "correctAnswer": "B",
      "locationText": "the failure had taken three hundred household savings accounts with it",
      "retryHint": "题干问存款怎么了。回第一段找 household 所在的句子，看主语 it 指什么、动词 taken ... with it 是什么意思。",
      "analysis": {
        "answer": "B",
        "answerDetail": "同句说破产「带走了三百户人家的存款」，即存款随工厂倒闭而损失。A、C 说的是贷款与抵押（p2 才出现），D 与原文相反。",
        "location": "第 1 段 第 2 句",
        "navigation": "text",
        "sections": [
          {
            "title": "怎么定位",
            "content": "题干关键词 household savings accounts 回第 1 段定位。依据句：the failure had taken three hundred household savings accounts with it。"
          }
        ]
      }
    },
    {
      "id": "q2",
      "number": 2,
      "type": "句意理解题",
      "paragraphId": "p2",
      "prompt": "What does Nora mean by “Fraud is what a court finds”?",
      "options": {
        "A": "Naming a crime requires evidence that can stand up in court.",
        "B": "The committee had already confessed to the payments.",
        "C": "The county had forged the documents herself.",
        "D": "A shed cannot be registered as a company address."
      },
      "correctAnswer": "A",
      "locationText": "Fraud is what a court finds; what she had was a paper trail that only made sense if somebody had written it twice.",
      "retryHint": "这句话是在自我约束用词。分号前说「法院认定」，分号后说她手里有什么？两者之间的差距是什么？",
      "analysis": {
        "answer": "A",
        "answerDetail": "分号前后对照：法院认定的是罪名，她手里只是单据；因此这句话的意思是「定罪要靠经得起法庭检验的证据」。B、C、D 在原文中均无依据。",
        "location": "第 2 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "怎么定位",
            "content": "题干引号内原句回第 2 段定位。依据句：Fraud is what a court finds; what she had was a paper trail that only made sense if somebody had written it twice。"
          }
        ]
      }
    },
    {
      "id": "q3",
      "number": 3,
      "type": "推断题",
      "paragraphId": "p2",
      "prompt": "The drawback described in paragraph 2 is that the loan structure",
      "options": {
        "A": "made the county legally responsible for the debt",
        "B": "tied the missing money to a building the town needed",
        "C": "prevented the cooperative from selling its fish",
        "D": "gave the committee control over the emergency fund"
      },
      "correctAnswer": "B",
      "locationText": "every dollar she proved missing made the building harder to sell and the reopening less likely",
      "retryHint": "看 drawback 后面紧跟的抵押安排：追回的钱和厂房的买卖是什么关系？为什么这算「弊处」？",
      "analysis": {
        "answer": "B",
        "answerDetail": "抵押权挂在厂房上，导致每查实一笔去向不明的钱，厂房更难出手、复工更难——追款与复工互相拖累。A、C、D 均与原文不符。",
        "location": "第 2 段 第 4–5 句",
        "navigation": "text",
        "sections": [
          {
            "title": "怎么定位",
            "content": "题干 drawback 回第 2 段定位。依据句：every dollar she proved missing made the building harder to sell and the reopening less likely。"
          }
        ]
      }
    },
    {
      "id": "q4",
      "number": 4,
      "type": "推断题",
      "paragraphId": "p6",
      "prompt": "“What she accomplished in those weeks was mostly filing” suggests that Nora",
      "options": {
        "A": "had failed to change the accounts",
        "B": "believed access to documents mattered as much as the findings",
        "C": "had given up on the hearing",
        "D": "was preparing to leave the bay for good"
      },
      "correctAnswer": "B",
      "locationText": "she had to keep the documents where people could reach them without asking permission",
      "retryHint": "归档看起来是杂事，但紧接着那句说明了她为什么要归档：文件要放在哪里、给谁拿到？",
      "analysis": {
        "answer": "B",
        "answerDetail": "紧接的下句点明归档的目的：让文件放在人们不必请示就能拿到的地方，即「可及性」与结论同等重要。A、C、D 均无依据。",
        "location": "第 6 段 第 2–3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "怎么定位",
            "content": "题干引号内原句回第 6 段定位。依据句：she had to keep the documents where people could reach them without asking permission。"
          }
        ]
      }
    }
  ],
  "examPractice": [
    {
      "id": "pr1",
      "number": 1,
      "type": "用法辨析",
      "paragraphId": "p1",
      "prompt": "Which word fits? “Three hundred ____ in the bay lost their savings when the cannery failed.”",
      "options": {
        "A": "house",
        "B": "households",
        "C": "housing",
        "D": "House"
      },
      "correctAnswer": "B",
      "locationText": "",
      "retryHint": "逐项看四个候选的词性与所指：住宅、家庭（经济单位）、住房供给、议院。题干要的是「三百户人家」。",
      "analysis": {
        "answer": "B",
        "answerDetail": "household 指「一户人家（经济单位）」，复数 households；house 是住宅，housing 是不可数的「住房供给」，House 大写指议院。",
        "location": "词汇用法 · 不依赖回文定位",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "household 指「一户人家（经济单位）」，复数 households；house 是住宅，housing 是不可数的「住房供给」，House 大写指议院。"
          },
          {
            "title": "考点",
            "content": "词族分工：household 与 house 不同源义，本单元 household 卡的 forms 只收 households，不收 house / houses；主线 house 卡（UB01）也不收 household。两者互不吞并。"
          }
        ]
      }
    },
    {
      "id": "pr2",
      "number": 2,
      "type": "用法辨析",
      "paragraphId": "p5",
      "prompt": "Which is the correct collocation for participate?",
      "options": {
        "A": "participate to the hearing",
        "B": "participate in the hearing",
        "C": "participate on the hearing",
        "D": "participate the hearing"
      },
      "correctAnswer": "B",
      "locationText": "",
      "retryHint": "participate 是不及物动词，后面必须带介词；四个选项里只有一个是固定搭配。",
      "analysis": {
        "answer": "B",
        "answerDetail": "participate 不及物，固定搭配 participate in sth；本篇用的是 participate as a technical witness（以身份参加），同样必须带介词。",
        "location": "词汇用法 · 不依赖回文定位",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "participate 不及物，固定搭配 participate in sth；本篇用的是 participate as a technical witness（以身份参加），同样必须带介词。"
          },
          {
            "title": "考点",
            "content": "词族分工：participate 与 part 只是形近，本单元 participate 卡的 forms 不收 part；D 项直接把 participate 当及物动词，是最常见的错误。"
          }
        ]
      }
    },
    {
      "id": "pr3",
      "number": 3,
      "type": "用法辨析",
      "paragraphId": "p1",
      "prompt": "Which sentence uses bankrupt correctly?",
      "options": {
        "A": "The cannery went bankrupt in the spring.",
        "B": "The cannery went to bankrupt in the spring.",
        "C": "The cannery bankrupted the spring.",
        "D": "The cannery was bankruptcy in the spring."
      },
      "correctAnswer": "A",
      "locationText": "",
      "retryHint": "破产是「形容词作表语」的固定说法。想一想动词该用哪个、需不需要加 to。",
      "analysis": {
        "answer": "A",
        "answerDetail": "go bankrupt 是固定搭配（go 为系动词 + 形容词表语）。B 多加了 to；C 把 bankrupt 当及物动词且宾语错；D 混用了名词 bankruptcy。",
        "location": "词汇用法 · 不依赖回文定位",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "go bankrupt 是固定搭配（go 为系动词 + 形容词表语）。B 多加了 to；C 把 bankrupt 当及物动词且宾语错；D 混用了名词 bankruptcy。"
          },
          {
            "title": "考点",
            "content": "词族分工：bankrupt 与 bank（银行 / 河岸）只是形近，语义无关；bankrupt 的形容词、动词、名词身份要分清——本篇只用形容词表语 gone bankrupt。"
          }
        ]
      }
    },
    {
      "id": "pr4",
      "number": 4,
      "type": "用法辨析",
      "paragraphId": "p2",
      "prompt": "Which word fits? “The ____ of the loan was that it was secured against the building the town needed.”",
      "options": {
        "A": "draw",
        "B": "drawback",
        "C": "drawing",
        "D": "drawer"
      },
      "correctAnswer": "B",
      "locationText": "",
      "retryHint": "题干要一个名词，表示「弊处」。四个选项里只有一个能表示缺点。",
      "analysis": {
        "answer": "B",
        "answerDetail": "drawback 是「缺点、不利条件」的固定名词；draw 是动词 / 平局，drawing 是图画 / 抽签，drawer 是抽屉。",
        "location": "词汇用法 · 不依赖回文定位",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "drawback 是「缺点、不利条件」的固定名词；draw 是动词 / 平局，drawing 是图画 / 抽签，drawer 是抽屉。"
          },
          {
            "title": "考点",
            "content": "词族分工：drawback 是与 draw 形近而义独立的复合名词，不能拆成 draw back（动词短语，意为后退 / 退缩）。"
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
      "original": "The county had handed the emergency fund to a committee of five to administer; three of them had signed every page without reading it.",
      "sections": [
        {
          "title": "结构拆解",
          "content": "分号连接两个独立分句。前句 had handed 是过去完成时，to a committee of five 是受事方，to administer 作后置定语表用途；后句 three of them 回指五人委员会，without reading it 是伴随状语。"
        },
        {
          "title": "目标词在本句",
          "content": "本句覆盖目标词：administer（管理（一笔基金））{{vocab:administer}}。"
        }
      ],
      "reminder": "本句结构考点：过去完成时 + 不定式作后置定语 + 分号并列 + 伴随状语。"
    },
    {
      "id": "s2",
      "number": 2,
      "paragraphId": "p5",
      "original": "The autonomy the county had written in to keep the fishermen independent was also the reason the debt could not be written off against a building.",
      "sections": [
        {
          "title": "结构拆解",
          "content": "主干是 The autonomy ... was also the reason ...。autonomy 后省略了关系代词（the autonomy [that] the county had written in），to keep ... 是目的状语；the reason 后接同位语从句（省略 why），could not be written off 是被动。"
        },
        {
          "title": "目标词在本句",
          "content": "本句覆盖目标词：autonomy（（合作社的）自主权）{{vocab:autonomy}}。"
        }
      ],
      "reminder": "本句结构考点：省略关系代词的定语从句 + 目的状语 + 同位语从句 + 被动语态。"
    },
    {
      "id": "s3",
      "number": 3,
      "paragraphId": "p6",
      "original": "To overcome the version of events that the town preferred — bad luck, a bad season, a bad year — she had to keep the documents where people could reach them without asking permission.",
      "sections": [
        {
          "title": "结构拆解",
          "content": "To overcome ... 是目的状语前置；the version of events 后接 that 定语从句；破折号之间是三个同位语，解释 the version；主句是 she had to keep the documents；where 引导地点状语从句。"
        },
        {
          "title": "目标词在本句",
          "content": "本句覆盖目标词：overcome（压过、克服（一种现成的说法））{{vocab:overcome}}。"
        }
      ],
      "reminder": "本句结构考点：目的状语前置 + 定语从句 + 破折号同位语 + where 地点状语从句。"
    }
  ],
  "recallCards": [
    {
      "id": "c1",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "UB02 · 关厂 · 存款",
      "context": "household 是「户」，不是 house（住宅）；bankrupt 用 go bankrupt；failure 与它同指一事。",
      "prompt": "It had gone ______ fourteen months earlier.（填英文单词：破产）",
      "answer": "bankrupt",
      "hint": "「破产」的固定说法是 go + 形容词，go 的过去分词已给出。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：bankrupt",
      "resolved": "go bankrupt＝破产（go 作系动词 + 形容词表语）；同段 household 指「户 / 家庭（经济单位）」，与 house（住宅）分工；failure 与 bankruptcy 同指关厂这件事。",
      "word": "bankrupt"
    },
    {
      "id": "c2",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "UB02 · 拨款 · 签页",
      "context": "committee of five 后接不定式表用途；signed without reading 是本段的讽刺点。",
      "prompt": "The county had handed the emergency fund to a committee of five to ______;（填英文单词：管理）",
      "answer": "administer",
      "hint": "「管理基金 / 机构」的动词，宾语是 fund，不是人。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：administer",
      "resolved": "administer a fund＝管理一笔基金；不定式 to administer 作 committee 的后置定语；本段末句 administered 复用，指「从没管过更大的事」。",
      "word": "administer"
    },
    {
      "id": "c3",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "UB02 · 单据 · 空壳",
      "context": "冒号后的十一笔付款是 abuse 的具体所指；haulage company 没有卡车。",
      "prompt": "In August of the second year Nora found the ______: eleven payments to a haulage company that owned no trucks.（填英文单词：滥用）",
      "answer": "abuse",
      "hint": "「滥用公款」的名词，后接 of 短语时才需要带被滥用之物。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：abuse",
      "resolved": "the abuse 指对应急款的滥用（abuse of public funds）；冒号后给出具体所指；同段 fraud 是法律认定，与 abuse 分层使用。",
      "word": "abuse"
    },
    {
      "id": "c4",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "UB02 · 三班 · 配额",
      "context": "abundant 接 in，不接 with；enough that 引出结果从句。",
      "prompt": "Once the herring had been ______ enough that the cannery ran three shifts.（填英文单词：充足的）",
      "answer": "abundant",
      "hint": "「数量充足」的形容词，常与 enough 连用。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：abundant",
      "resolved": "abundant enough that＝多到足以…；abundant 的介词搭配是 in（abundant in fish）；名词 abundance，副词 abundantly。",
      "word": "abundant"
    },
    {
      "id": "c5",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "UB02 · 诊所 · 摄入",
      "context": "nutrition 不可数；营养素是 nutrient；营养师是 nutritionist。",
      "prompt": "Ines Alvarado ran the ______ survey for the county clinic.（填英文单词：营养）",
      "answer": "nutrition",
      "hint": "「营养」的不可数名词，此处作定语修饰 survey。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：nutrition",
      "resolved": "the nutrition survey＝营养调查；nutrition 不可数、作定语；同段 households 是 household 的复数，指「各家各户」。",
      "word": "nutrition"
    },
    {
      "id": "c6",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "UB02 · 取舍 · 卷宗",
      "context": "To defy ... would have cost her the files 与 to agree would have cost her the audit 并列对照。",
      "prompt": "To ______ him in public would have cost her the files.（填英文单词：违抗）",
      "answer": "defy",
      "hint": "「公然违抗（某人 / 命令）」的动词，宾语是人。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：defy",
      "resolved": "defy sb＝违抗某人；此处用不定式作主语，与 to agree 平行对照；同段 ignorance / indifferent 都与「镇上不问」这一态度相关。",
      "word": "defy"
    }
  ],
  "reviewWords": [
    {
      "word": "future",
      "meaning": "前途；往后会怎样",
      "collocation": "the future of the bay depended on whether the cannery could open again"
    },
    {
      "word": "past",
      "meaning": "过去（那段时间留下的东西）",
      "collocation": "The past was still inside the building."
    },
    {
      "word": "abundant",
      "meaning": "（鱼）多得充足",
      "collocation": "the herring had been abundant enough that the cannery ran three shifts"
    },
    {
      "word": "abuse",
      "meaning": "（对公款的）滥用",
      "collocation": "Nora found the abuse: eleven payments to a haulage company"
    },
    {
      "word": "accomplish",
      "meaning": "办成；做成",
      "collocation": "What she accomplished in those weeks was mostly filing"
    },
    {
      "word": "administer",
      "meaning": "管理（基金）",
      "collocation": "a committee of five to administer"
    },
    {
      "word": "autonomy",
      "meaning": "自主权",
      "collocation": "The autonomy the county had written in"
    },
    {
      "word": "bankrupt",
      "meaning": "破产（go bankrupt）",
      "collocation": "It had gone bankrupt fourteen months earlier"
    },
    {
      "word": "coordinate",
      "meaning": "协调（几个部门）",
      "collocation": "she had to coordinate three offices"
    },
    {
      "word": "defy",
      "meaning": "违抗（某人）",
      "collocation": "To defy him in public would have cost her the files"
    },
    {
      "word": "drawback",
      "meaning": "弊处；不利条件",
      "collocation": "The drawback was the shape of the loan."
    },
    {
      "word": "exaggerate",
      "meaning": "夸大",
      "collocation": "the only way to be believed is not to exaggerate"
    },
    {
      "word": "fraud",
      "meaning": "欺诈（法律认定）",
      "collocation": "Fraud is what a court finds"
    },
    {
      "word": "household",
      "meaning": "家庭；一户人家（经济单位）",
      "collocation": "three hundred household savings accounts"
    },
    {
      "word": "ignorance",
      "meaning": "不了解；无知",
      "collocation": "The board's ignorance of the fund's own rules"
    },
    {
      "word": "indifferent",
      "meaning": "漠不关心的",
      "collocation": "Halberd Bay was not indifferent to the audit."
    },
    {
      "word": "interpret",
      "meaning": "解释（条款）",
      "collocation": "She had to interpret the loan agreement clause by clause"
    },
    {
      "word": "investigate",
      "meaning": "调查",
      "collocation": "hired her to investigate what the cooperative had done"
    },
    {
      "word": "manufacture",
      "meaning": "制造；生产",
      "collocation": "The plant had nothing left to manufacture."
    },
    {
      "word": "nutrition",
      "meaning": "营养",
      "collocation": "the nutrition survey for the county clinic"
    },
    {
      "word": "offend",
      "meaning": "冒犯；得罪",
      "collocation": "Nora had not come to offend anyone."
    },
    {
      "word": "overcome",
      "meaning": "压过；克服",
      "collocation": "To overcome the version of events that the town preferred"
    },
    {
      "word": "participate",
      "meaning": "参加；参与",
      "collocation": "asked to participate as a technical witness"
    },
    {
      "word": "persist",
      "meaning": "坚持",
      "collocation": "no way to persist from four hundred miles away"
    },
    {
      "word": "schedule",
      "meaning": "时间表；还款安排",
      "collocation": "A schedule of repayment was possible."
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
  ],
  "sourceMeta": {
    "materialClass": "M-A",
    "sourceType": "original",
    "sourceRef": null,
    "bodyMatchStatus": "not_applicable",
    "rightsStatus": "self_authored",
    "displayPermission": "allowed_with_label",
    "verifiedAt": "2026-10-28",
    "reviewStatus": "draft_pending_human_review"
  }
}
);
