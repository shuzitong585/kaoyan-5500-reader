// U05 · 5500 词｜原创示范单元（M-A-03：正文为原创撰写，非真题原文，不与任何真题篇目对应）
// 证据字段（词频/词形统计）由 V1.2 母表直出（5500_D档真题层全量名单_V0.1.csv Unit=5 行；提取件 _check\U05_25词语料统计提取.csv）。
// 正文定稿：_draft\U05_body_V1.0.md。字段骨架沿用已验收的 u04.js（22 顶层键）。
window.UnitRegistry.register({
  "id": "U05",
  "status": "official",
  "sequence": 5,
  "totalUnits": 112,
  "series": "考研英语5500词｜真题语境记单词",
  "title": "The Camera That Never Was",
  "subtitle": "高频实词 · 原创示范单元 U05",
  "stage": "原创示范｜阅读证据（M-A）",
  "newWordCount": 25,
  "storage": { "namespace": "kaoyan5500:U05", "version": "V0.1", "resetOnFirstVersion": true },
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
    "在媒体与商业语域中掌握 25 个高频实词",
    "吃透 record / process / model / average 的多义与搭配身份",
    "掌握「技术—信任」议题里的核心动词（develop / build / raise / share / control）"
  ],
  "paragraphs": [
    {
      "id": "p1",
      "en": "For most of the past decade, the way people find information has been shaped by one habit: search. A reader types a question, and a large search engine returns images, headlines and answers within a second. In recent years, however, a new kind of image has quietly entered these results — pictures that no camera ever took. The average reader, surveys suggest, can no longer reliably tell them from photographs.",
      "cn": "在过去十年的大部分时间里，人们查找信息的方式一直被同一个习惯塑造：搜索。读者输入一个问题，一台大型搜索引擎便在一秒之内返回图片、标题与答案。然而近年来，一种新的图像悄然混入这些结果——从未有相机拍下过的图片。调查显示，普通读者已无法可靠地把它们与真实照片区分开。"
    },
    {
      "id": "p2",
      "en": "The business logic behind the shift is straightforward. Executives at media and advertising firms face a familiar equation: every product launch needs visuals, visuals cost money, and profit margins are thin. Advertising, which once funded entire newsrooms, is now among the first budget lines to be automated. A generative model can produce a hundred variations of a product shot for the price of a photographer's afternoon, so companies have strong reasons to develop such tools in-house and to hand routine commercial imagery to software.",
      "cn": "这一转变背后的商业逻辑很直接。媒体公司与广告公司的高管们面对一个人尽皆知的等式：每一次产品发布都需要视觉素材，视觉素材要花钱，而利润空间很薄。曾经养活整个新闻编辑室的广告，如今已是最先被自动化砍掉的预算科目之一。一台生成式模型产出一百张产品图变体的成本，只相当于摄影师一个下午的报酬，因此公司有充分理由在内部开发这类工具，并把常规的商业图像制作交给软件。"
    },
    {
      "id": "p3",
      "en": "How does such a model actually work? In simplified terms, it is a statistical machine trained on an enormous record of existing pictures. The system processes millions of images, extracts the patterns that connect them — how light falls on faces, how commercial photography is composed — and then recombines those patterns on demand. What looks like imagination is pattern learned at a scale and speed no human editor could match.",
      "cn": "这样的模型究竟是如何工作的？简单来说，它是一台在海量既有图片记录上训练出来的统计机器。系统处理数以百万计的图像，提取出连接它们的统计模式——光线如何落在人脸上、商业摄影如何构图——然后按需重新组合这些模式。看起来像想象力的东西，实际上是以任何人类编辑都无法企及的规模和速度学到的模式。"
    },
    {
      "id": "p4",
      "en": "The risks concentrate where images carry public weight. During national elections and local campaigns, synthetic pictures of candidates have already circulated, and fact-checkers cannot build a verification process fast enough to keep pace. Control is the deeper problem: once a false image is shared, the correction travels a fraction as far as the original. Researchers warn that a society that loses confidence in its own visual record will struggle to agree on basic facts.",
      "cn": "风险集中在图像承载公共分量的地方。在全国大选和地方竞选中，候选人的人工合成照片已经流传开来，而事实核查员建立核查流程的速度，远远赶不上图像生成的速度。控制是更深层的难题：一旦一张虚假图像被分享出去，更正的传播范围只有原图的零头。研究者警告，一个对自己视觉记录失去信心的社会，将难以就基本事实达成一致。"
    },
    {
      "id": "p5",
      "en": "The industry's response has been uneven so far. Some platforms now attach provenance labels to generated content, and several large publishers have raised their internal standards for accepting synthetic images. Trade groups argue that clear labeling protects the shared visual space in which advertising operates: if consumers stop trusting pictures, the commercial value of every image falls with them. Executives are slowly learning that trust is a business asset, not merely an ethical nicety.",
      "cn": "迄今为止，行业的回应并不均衡。一些平台现在给生成内容附上来源标签，几家大型出版机构也提高了接受合成图像的内部标准。行业协会辩称，清晰的标注保护的是广告赖以运行的共享视觉空间：如果消费者不再相信图片，每张图像的商业价值都会随之下跌。高管们正慢慢认识到，信任是一种商业资产，而不只是道德上的客套话。"
    },
    {
      "id": "p6",
      "en": "None of this argues that generative tools should be shut out of the newsroom; the technology is here, and its average quality will only improve. The realistic goal is narrower: clear rules, visible labels, and a public that has learned to ask where an image came from. The camera once taught society to trust what it saw. In an age when any picture can be synthetic, that trust will have to be earned back — one honest image at a time.",
      "cn": "这一切并不意味着生成式工具应当被拒于新闻编辑室之外；技术已经到来，其平均质量只会继续提高。现实的目标更窄：清晰的规则、可见的标签，以及一个学会了追问图像出处的公众。相机曾教会社会相信自己亲眼所见。在一个任何图片都可能是合成的时代，这份信任将不得不被重新挣回来——每次一张诚实的图像。"
    }
  ],
  "vocabulary": [
    { "word": "large", "pos": "adj.", "contextMeaning": "大的；规模大的", "englishDefinition": "of considerable or relatively great size, extent or capacity", "collocation": "a large search engine　/　several large publishers", "contextualExample": "A reader types a question, and a large search engine returns images, headlines and answers within a second.", "readingNote": "large(12) 本形为主，larger(4)/largest(2) 比较级也常见——三态齐全的基准形容词。", "examEvidence": "总频次 18 次　·　出现 14 篇 / 12 年　·　近10年 7 次　·　首次 2005 / 最近 2025　｜　语料词形：large(12)　larger(4)　largest(2)", "examTips": "a large number/amount of＝大量的；at large＝（嫌疑人）逍遥法外／整体（the public at large）。", "forms": ["larger", "largest"] },
    { "word": "search", "pos": "n.", "contextMeaning": "搜索；搜寻", "englishDefinition": "an act of looking for someone or something", "collocation": "one habit: search　/　a large search engine", "contextualExample": "For most of the past decade, the way people find information has been shaped by one habit: search.", "readingNote": "search(15) 本形压倒性，searching(2)/searches(1) 少——真题以名词短语 search for 为主。", "examEvidence": "总频次 18 次　·　出现 12 篇 / 11 年　·　近10年 5 次　·　首次 2007 / 最近 2025　｜　语料词形：search(15)　searching(2)　searches(1)", "examTips": "search for sth＝搜寻；in search of＝寻找；search engine＝搜索引擎（技术语境标配）。", "forms": ["searching", "searches"] },
    { "word": "image", "pos": "n.", "contextMeaning": "图像；形象", "englishDefinition": "a visual representation or picture; the general impression presented to the public", "collocation": "a new kind of image　/　millions of images", "contextualExample": "a new kind of image has quietly entered these results — pictures that no camera ever took.", "readingNote": "images(9) 复数略多于 image(7)——真题谈图像/形象常整体泛指；imaging(1) 为成像技术义孤例。", "examEvidence": "总频次 17 次　·　出现 8 篇 / 8 年　·　近10年 11 次　·　首次 2005 / 最近 2024　｜　语料词形：images(9)　image(7)　imaging(1)", "examTips": "image 双义：图像（本篇）与公众形象（public image / brand image）；imaging 多指医学/科学成像。", "forms": ["images", "imaging"] },
    { "word": "recent", "pos": "adj.", "contextMeaning": "近来的；最近的", "englishDefinition": "having happened, started or existed only a short time ago", "collocation": "in recent years　/　recent research", "contextualExample": "In recent years, however, a new kind of image has quietly entered these results", "readingNote": "recent(17) 全部本形——只作定语形容词，无名词/动词用法，变化形式少。", "examEvidence": "总频次 17 次　·　出现 15 篇 / 11 年　·　近10年 11 次　·　首次 2010 / 最近 2025　｜　语料词形：recent(17)", "examTips": "in recent years/decades＝近年来（引出趋势的标准开头）；recently 副词同族高频。", "forms": [] },
    { "word": "age", "pos": "n.", "contextMeaning": "时代；年龄", "englishDefinition": "a distinct period of history; the length of time a person has lived", "collocation": "in an age when…　/　at the age of", "contextualExample": "In an age when any picture can be synthetic, that trust will have to be earned back", "readingNote": "age(11) 本形为主，Age(3) 大写与 ages(3) 复数各占少量——时代义与年龄义并存。", "examEvidence": "总频次 17 次　·　出现 11 篇 / 9 年　·　近10年 10 次　·　首次 2007 / 最近 2025　｜　语料词形：age(11)　Age(3)　ages(3)", "examTips": "in an age of / when…＝在…时代（the digital age 同族）；at the age of＋数字＝在…岁时。本篇取时代义。", "forms": ["Age", "ages"] },
    { "word": "average", "pos": "adj.", "contextMeaning": "平均的；普通的", "englishDefinition": "constituting the usual level; ordinary and not exceptional", "collocation": "the average reader　/　its average quality", "contextualExample": "The average reader, surveys suggest, can no longer reliably tell them from photographs.", "readingNote": "average(16) 本形绝对多数，averages(1) 仅 1 次——真题几乎只用形容词本形。", "examEvidence": "总频次 17 次　·　出现 14 篇 / 12 年　·　近10年 9 次　·　首次 2006 / 最近 2024　｜　语料词形：average(16)　averages(1)", "examTips": "the average reader/user＝普通读者/用户（熟词僻义）；on average＝平均而言；an average of＋数字＝平均为。", "forms": ["averages"] },
    { "word": "product", "pos": "n.", "contextMeaning": "产品；产物", "englishDefinition": "an article or substance manufactured for sale; a thing resulting from a process", "collocation": "every product launch　/　a product shot", "contextualExample": "every product launch needs visuals, visuals cost money, and profit margins are thin.", "readingNote": "products(9) 复数略多于 product(8)——商业语境谈产品常整体复数。", "examEvidence": "总频次 17 次　·　出现 8 篇 / 7 年　·　近10年 9 次　·　首次 2010 / 最近 2020　｜　语料词形：products(9)　product(8)", "examTips": "product 除「产品」外还有「产物」义（the product of＝…的产物）；gross domestic product＝国内生产总值。", "forms": ["products"] },
    { "word": "executive", "pos": "n.", "contextMeaning": "高管；主管", "englishDefinition": "a person with senior managerial responsibility in an organization", "collocation": "Executives at media and advertising firms　/　chief executive", "contextualExample": "Executives at media and advertising firms face a familiar equation", "readingNote": "executives(9) 复数略多——真题谈企业决策层常泛指群体；母表标注该词已收录于 500 词表。", "examEvidence": "总频次 17 次　·　出现 11 篇 / 9 年　·　近10年 8 次　·　首次 2007 / 最近 2025　｜　语料词形：executives(9)　executive(8)", "examTips": "chief executive( officer)＝首席执行官；executive 还可作形容词（executive power＝行政权）。", "forms": ["executives"] },
    { "word": "record", "pos": "n.", "contextMeaning": "记录；纪录", "englishDefinition": "a documented account of facts or events; the best performance yet achieved", "collocation": "an enormous record of existing pictures　/　its own visual record", "contextualExample": "a society that loses confidence in its own visual record will struggle to agree on basic facts.", "readingNote": "四态分布 record(7)/recorded(5)/records(4)/Record(1)——名词记录与动词录制在真题里各占其半。", "examEvidence": "总频次 17 次　·　出现 13 篇 / 10 年　·　近10年 7 次　·　首次 2006 / 最近 2025　｜　语料词形：record(7)　recorded(5)　records(4)　Record(1)", "examTips": "set/break a record＝创/破纪录；medical / historical records＝病历/史料；动词 record doing＝记录下做某事。", "forms": ["recorded", "records", "Record"] },
    { "word": "control", "pos": "n.", "contextMeaning": "控制；掌控", "englishDefinition": "the power to influence or direct the course of something", "collocation": "Control is the deeper problem　/　take control of", "contextualExample": "Control is the deeper problem: once a false image is shared, the correction travels a fraction as far as the original.", "readingNote": "control(12) 本形压倒性，controlled(2)/controlling(2) 少——真题以名词短语 under/take control 为主。", "examEvidence": "总频次 17 次　·　出现 10 篇 / 9 年　·　近10年 6 次　·　首次 2005 / 最近 2025　｜　语料词形：control(12)　controlled(2)　controlling(2)　Control(1)", "examTips": "under control＝受控；out of control＝失控；beyond one's control＝非所能控制。本篇 p4 取名词「掌控」义。", "forms": ["controlled", "controlling", "Control"] },
    { "word": "learn", "pos": "v.", "contextMeaning": "学会；得知", "englishDefinition": "to gain knowledge or skill by studying or experience; to become aware of", "collocation": "pattern learned at scale　/　a public that has learned to ask", "contextualExample": "What looks like imagination is pattern learned at a scale and speed no human editor could match.", "readingNote": "learn(9)/learning(5)/learned(3) 三态齐全——机器学习（machine learning）语境近年明显增多。", "examEvidence": "总频次 17 次　·　出现 13 篇 / 10 年　·　近10年 5 次　·　首次 2005 / 最近 2025　｜　语料词形：learn(9)　learning(5)　learned(3)", "examTips": "learn from＝从…学到；learn to do＝学会做；learning 除「学习」外还可指「学问」（a man of learning）。", "forms": ["learning", "learned"] },
    { "word": "process", "pos": "n.", "contextMeaning": "流程；处理", "englishDefinition": "a series of actions directed to an end; to perform operations on data", "collocation": "a verification process　/　The system processes millions of images", "contextualExample": "fact-checkers cannot build a verification process fast enough to keep pace.", "readingNote": "process(13) 名词为主，processes(2)/processed(1)/processing(1) 动词形态少而精——真题两性都考。", "examEvidence": "总频次 17 次　·　出现 11 篇 / 10 年　·　近10年 5 次　·　首次 2005 / 最近 2025　｜　语料词形：process(13)　processes(2)　processed(1)　processing(1)", "examTips": "in the process of＝在…过程中；process data/images＝处理数据/图像（计算机语境）。本篇 p3 是动词、p4 是名词。", "forms": ["processes", "processed", "processing"] },
    { "word": "build", "pos": "v.", "contextMeaning": "建立；构建", "englishDefinition": "to construct or put together; to develop gradually", "collocation": "build a verification process　/　build trust", "contextualExample": "fact-checkers cannot build a verification process fast enough to keep pace.", "readingNote": "build(8) 与 building(6) 并重——building 需区分「建筑（名词）」与「正在建造」两种身份。", "examEvidence": "总频次 16 次　·　出现 11 篇 / 10 年　·　近10年 11 次　·　首次 2005 / 最近 2025　｜　语料词形：build(8)　building(6)　Building(1)　builds(1)", "examTips": "build up＝逐步建立/增强（build up trust）；building 的大写或定冠词形式常指具体建筑。", "forms": ["building", "Building", "builds"] },
    { "word": "model", "pos": "n.", "contextMeaning": "模型；模式", "englishDefinition": "a simplified representation or system used to explain or calculate something", "collocation": "A generative model　/　a business model", "contextualExample": "A generative model can produce a hundred variations of a product shot for the price of a photographer's afternoon", "readingNote": "models(10) 复数占多——真题谈理论模型/AI 模型/时尚模特三义并存，靠语境判断。", "examEvidence": "总频次 16 次　·　出现 8 篇 / 8 年　·　近10年 11 次　·　首次 2007 / 最近 2025　｜　语料词形：models(10)　model(4)　modeling(1)　modelling(1)", "examTips": "model 在真题三义：模型（科学/AI）、模式（business model）、模特；role model＝榜样。近年 AI 语境的 model 明显增多。", "forms": ["models", "modeling", "modelling"] },
    { "word": "profit", "pos": "n.", "contextMeaning": "利润；收益", "englishDefinition": "a financial gain, especially the difference between income and expenditure", "collocation": "profit margins are thin　/　make a profit", "contextualExample": "every product launch needs visuals, visuals cost money, and profit margins are thin.", "readingNote": "profit(8)/profits(7) 对半——利润表语境常用复数；profiting(1) 动词形孤例。", "examEvidence": "总频次 16 次　·　出现 9 篇 / 8 年　·　近10年 11 次　·　首次 2008 / 最近 2025　｜　语料词形：profit(8)　profits(7)　profiting(1)", "examTips": "profit margin＝利润率；profit from＝从…获利；非营利＝nonprofit（政策语境高频）。", "forms": ["profits", "profiting"] },
    { "word": "raise", "pos": "v.", "contextMeaning": "提高；筹集；提出", "englishDefinition": "to lift or move to a higher level; to bring up for attention", "collocation": "raised their internal standards　/　raise money", "contextualExample": "several large publishers have raised their internal standards for accepting synthetic images.", "readingNote": "raise(7)/raising(4)/raised(3)/raises(2) 四态齐全——及物动词，必须带宾语。", "examEvidence": "总频次 16 次　·　出现 10 篇 / 9 年　·　近10年 11 次　·　首次 2006 / 最近 2024　｜　语料词形：raise(7)　raising(4)　raised(3)　raises(2)", "examTips": "raise 与 rise 的区别是经典考点：raise 及物（raise prices），rise 不及物（prices rise）。raise concerns/questions＝引发担忧/提出问题。", "forms": ["raising", "raised", "raises"] },
    { "word": "society", "pos": "n.", "contextMeaning": "社会；社团", "englishDefinition": "the aggregate of people living together in an ordered community", "collocation": "a society that loses confidence　/　modern society", "contextualExample": "a society that loses confidence in its own visual record will struggle to agree on basic facts.", "readingNote": "society(13) 本形为主，societies(2) 复数多指「多个社会/社团」。", "examEvidence": "总频次 16 次　·　出现 12 篇 / 10 年　·　近10年 10 次　·　首次 2006 / 最近 2024　｜　语料词形：society(13)　societies(2)　Society(1)", "examTips": "泛指「社会」时不加 the（society as a whole）；a society that… 指某个具体社会；the Society of…＝…学会/协会。", "forms": ["societies", "Society"] },
    { "word": "clear", "pos": "adj.", "contextMeaning": "清楚的；明确的", "englishDefinition": "easy to understand or perceive; free from doubt", "collocation": "clear labeling　/　clear rules", "contextualExample": "Trade groups argue that clear labeling protects the shared visual space in which advertising operates", "readingNote": "clear(13) 本形为主，cleared(1)/clearer(1)/clears(1) 各 1 次——真题几乎只用形容词本形。", "examEvidence": "总频次 16 次　·　出现 15 篇 / 10 年　·　近10年 8 次　·　首次 2005 / 最近 2023　｜　语料词形：clear(13)　cleared(1)　clearer(1)　clears(1)", "examTips": "make it clear that…＝明确表示；clear 还有动词义（清除）与副词义（clear of＝远离）；clearly 同族高频。", "forms": ["cleared", "clearer", "clears"] },
    { "word": "money", "pos": "n.", "contextMeaning": "钱；货币", "englishDefinition": "a current medium of exchange in the form of coins and banknotes", "collocation": "visuals cost money　/　public money", "contextualExample": "every product launch needs visuals, visuals cost money, and profit margins are thin.", "readingNote": "money(16) 全部本形——不可数名词，真题里无屈折变化，搭配 cost/spend/raise money 高频。", "examEvidence": "总频次 16 次　·　出现 11 篇 / 10 年　·　近10年 8 次　·　首次 2007 / 最近 2023　｜　语料词形：money(16)", "examTips": "make money＝赚钱；raise money＝筹款；money 作定语（money supply＝货币供应）也常见。", "forms": [] },
    { "word": "develop", "pos": "v.", "contextMeaning": "开发；发展", "englishDefinition": "to create or grow something over a period of time", "collocation": "develop such tools in-house　/　develop a habit", "contextualExample": "companies have strong reasons to develop such tools in-house", "readingNote": "developing(6) 居首——发展中国家（developing countries）语境贡献大量词频；develop(5)/developed(3) 随后。", "examEvidence": "总频次 16 次　·　出现 11 篇 / 8 年　·　近10年 7 次　·　首次 2005 / 最近 2025　｜　语料词形：developing(6)　develop(5)　developed(3)　developer(1)　develops(1)", "examTips": "developing/developed country＝发展中/发达国家（必考区分）；develop an interest in＝培养对…的兴趣；developer＝开发者。", "forms": ["developing", "developed", "developer", "develops"] },
    { "word": "share", "pos": "v.", "contextMeaning": "分享；共享", "englishDefinition": "to have or use something jointly with others; a portion allotted", "collocation": "a false image is shared　/　the shared visual space", "contextualExample": "once a false image is shared, the correction travels a fraction as far as the original.", "readingNote": "share(10) 本形为主，shared(3)/shares(3) 各 3 次——shares 名词「股份」与 shared 过去分词要分清。", "examEvidence": "总频次 16 次　·　出现 12 篇 / 11 年　·　近10年 7 次　·　首次 2005 / 最近 2025　｜　语料词形：share(10)　shared(3)　shares(3)", "examTips": "market share＝市场份额；share A with B＝与 B 分享 A；shares＝股份（金融语境）。本篇 p4 是被动分词、p5 是形容词性 shared。", "forms": ["shared", "shares"] },
    { "word": "back", "pos": "adv.", "contextMeaning": "回；向后", "englishDefinition": "to or towards a previous place or condition", "collocation": "earned back　/　win back", "contextualExample": "that trust will have to be earned back — one honest image at a time.", "readingNote": "back(16) 全部本形——小品词/副词，无屈折；earn back / win back / pay back 类短语高频。", "examEvidence": "总频次 16 次　·　出现 12 篇 / 11 年　·　近10年 6 次　·　首次 2006 / 最近 2025　｜　语料词形：back(16)", "examTips": "back 常与动词构成短语：earn/win/pay/give back；back 还可作名词（the back of）与形容词（back door）。", "forms": [] },
    { "word": "national", "pos": "adj.", "contextMeaning": "全国性的；国家的", "englishDefinition": "relating to a whole nation or country", "collocation": "national elections　/　national media", "contextualExample": "During national elections and local campaigns, synthetic pictures of candidates have already circulated", "readingNote": "National(10) 大写居多——national newspapers 类专名贡献大量词频。", "examEvidence": "总频次 16 次　·　出现 12 篇 / 11 年　·　近10年 6 次　·　首次 2005 / 最近 2024　｜　语料词形：National(10)　national(6)", "examTips": "national 与 local 常对举（本篇 p4 一句之内）；nationwide＝遍及全国（同族副词）；nationality＝国籍。", "forms": ["National"] },
    { "word": "decade", "pos": "n.", "contextMeaning": "十年", "englishDefinition": "a period of ten years", "collocation": "For most of the past decade　/　over the past decade", "contextualExample": "For most of the past decade, the way people find information has been shaped by one habit: search.", "readingNote": "decades(9) 复数略多于 decade(7)——for decades＝数十年是高频搭配。", "examEvidence": "总频次 16 次　·　出现 14 篇 / 10 年　·　近10年 5 次　·　首次 2005 / 最近 2025　｜　语料词形：decades(9)　decade(7)", "examTips": "over the past decade＝过去十年间（数字表达的标准搭配）；for decades＝数十年（不确定年数）。", "forms": ["decades"] },
    { "word": "local", "pos": "adj.", "contextMeaning": "地方的；当地的", "englishDefinition": "relating to a particular place or neighbourhood", "collocation": "local campaigns　/　local government", "contextualExample": "During national elections and local campaigns, synthetic pictures of candidates have already circulated", "readingNote": "local(15) 全部本形——只作形容词，local government / local news 是政策与媒体语境标配。", "examEvidence": "总频次 15 次　·　出现 12 篇 / 11 年　·　近10年 11 次　·　首次 2006 / 最近 2025　｜　语料词形：local(15)", "examTips": "local 常与 national 对举；locals＝当地人（名词化复数）；locally 同族副词。", "forms": [] }
  ],
  "questions": [
    {
      "id": "q1",
      "number": 1,
      "type": "细节题",
      "paragraphId": "p2",
      "prompt": "According to the passage, companies have strong reasons to develop generative tools in-house mainly because ______",
      "options": {
        "A": "generative tools can produce commercial imagery far more cheaply than hiring photographers",
        "B": "generative tools always produce better pictures than professionals",
        "C": "readers prefer computer-generated pictures to photographs",
        "D": "regulators require media firms to automate their image production"
      },
      "correctAnswer": "A",
      "locationText": "A generative model can produce a hundred variations of a product shot for the price of a photographer's afternoon, so companies have strong reasons to develop such tools in-house",
      "retryHint": "注意 so 前后的因果关系：价格对比是原因，develop in-house 是结果。",
      "analysis": {
        "answer": "A",
        "answerDetail": "A 是原文因果链的改写（produce a hundred variations… for the price of a photographer's afternoon ＝ 远比委托摄影师便宜）。",
        "location": "第 2 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "A 是原文因果链的改写：A generative model can produce a hundred variations of a product shot for the price of a photographer's afternoon → 商业图像制作远比雇摄影师便宜，so companies have strong reasons to develop such tools in-house。B「总是比专业摄影师拍得更好」文中无绝对比较；C「读者偏好」无据；D「监管要求」无中生有。"
          },
          {
            "title": "定位句",
            "content": "「A generative model can produce a hundred variations of a product shot for the price of a photographer's afternoon, so companies have strong reasons to develop such tools in-house and to hand routine commercial imagery to software.」——so 连接价格对比与开发动机。"
          }
        ]
      }
    },
    {
      "id": "q2",
      "number": 2,
      "type": "推理题",
      "paragraphId": "p3",
      "prompt": "From the description of how generative models work, it can be inferred that their apparent creativity is actually ______",
      "options": {
        "A": "a new form of human imagination assisted by machines",
        "B": "the recombination of statistical patterns learned from enormous numbers of existing images",
        "C": "a random process that cannot be explained or studied",
        "D": "the copying of a few famous photographs chosen by engineers"
      },
      "correctAnswer": "B",
      "locationText": "What looks like imagination is pattern learned at a scale and speed no human editor could match.",
      "retryHint": "inference 题答案是对整段机制的概括：处理—提取—重组三步，不是照抄某半句。",
      "analysis": {
        "answer": "B",
        "answerDetail": "B 概括了第 3 段的机制链：processes millions of images（处理）→ extracts the patterns（提取）→ recombines those patterns（重组）。",
        "location": "第 3 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "B 概括了第 3 段的机制链：处理（processes millions of images）→ 提取（extracts the patterns）→ 重组（recombines those patterns on demand）——末句点题 What looks like imagination is pattern learned…。A 与原文相反（恰恰不是人类想象）；C「随机、不可解释」无据；D「复制几张名照」曲解——是统计模式重组，不是复制具体照片。"
          },
          {
            "title": "定位句",
            "content": "「The system processes millions of images, extracts the patterns that connect them … and then recombines those patterns on demand. What looks like imagination is pattern learned at a scale and speed no human editor could match.」"
          }
        ]
      }
    },
    {
      "id": "q3",
      "number": 3,
      "type": "观点题",
      "paragraphId": "p4",
      "prompt": "According to researchers cited in the passage, a society that loses confidence in its own visual record will ______",
      "options": {
        "A": "stop producing images altogether",
        "B": "rely more heavily on official statements",
        "C": "struggle to reach agreement on basic facts",
        "D": "automatically develop better verification tools"
      },
      "correctAnswer": "C",
      "locationText": "a society that loses confidence in its own visual record will struggle to agree on basic facts",
      "retryHint": "researchers warn that… 的 that 从句就是答案句，逐字比对选项。",
      "analysis": {
        "answer": "C",
        "answerDetail": "C 是原句改写（struggle to agree on basic facts ＝ struggle to reach agreement on basic facts）。注意本题考 researchers warn 的内容。",
        "location": "第 4 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "C 是原句改写：struggle to agree on basic facts ＝ struggle to reach agreement on basic facts。A「彻底停止生产图像」、B「更依赖官方声明」均无原文依据；D「自动发展出更好的核查工具」与文中 fact-checkers cannot build a verification process fast enough to keep pace 直接矛盾。"
          },
          {
            "title": "定位句",
            "content": "「Researchers warn that a society that loses confidence in its own visual record will struggle to agree on basic facts.」——researchers warn that 引出作者转述的研究者观点。"
          }
        ]
      }
    },
    {
      "id": "q4",
      "number": 4,
      "type": "论证关系题",
      "paragraphId": "p5",
      "prompt": "Trade groups argue that clear labeling is necessary because ______",
      "options": {
        "A": "labels help platforms collect more user data",
        "B": "if consumers stop trusting pictures, the commercial value of every image will fall",
        "C": "regulators have threatened to fine unlabeled platforms",
        "D": "photographers demand credit for every published picture"
      },
      "correctAnswer": "B",
      "locationText": "if consumers stop trusting pictures, the commercial value of every image falls with them",
      "retryHint": "argue that 后的冒号句是论据本体，注意「信任 → 商业价值」这条因果链。",
      "analysis": {
        "answer": "B",
        "answerDetail": "B 是 trade groups 论证的因果链本体：信任下降 → 每张图像的商业价值下跌 → 所以标注保护的是共享视觉空间。",
        "location": "第 5 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "B 是原句改写：if consumers stop trusting pictures, the commercial value of every image falls with them。A「收集用户数据」、C「监管罚款威胁」、D「摄影师署名要求」均无中生有。本题考 trade groups 论证内部的因果链，而非作者自己的立场。"
          },
          {
            "title": "定位句",
            "content": "「Trade groups argue that clear labeling protects the shared visual space in which advertising operates: if consumers stop trusting pictures, the commercial value of every image falls with them.」——冒号后是论据。"
          }
        ]
      }
    }
  ],
  "examPractice": [
    {
      "id": "e1",
      "number": 1,
      "type": "阅读证据题",
      "paragraphId": "p3",
      "prompt": "image 在 2005–2025 英语一阅读语料中累计 17 次，词形 images(9) / image(7) / imaging(1)。本篇第 3 段 The system processes millions of images 中的 images 属于哪种用法？",
      "options": {
        "A": "动词，表示「想象」",
        "B": "复数名词，指「图像」",
        "C": "专有名词，指「偶像」",
        "D": "动词 imaging 的进行时"
      },
      "correctAnswer": "B",
      "locationText": "The system processes millions of images",
      "retryHint": "看词卡「文章档案」里 image 的词形分布那一行。",
      "analysis": {
        "answer": "B",
        "answerDetail": "The system processes + 宾语，images 是复数名词「图像」。语料里 images(9) 复数占比过半——真题谈论图像常整体泛指。",
        "location": "正文第 3 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么要记这个",
            "content": "image 在真题里是「一词两义」词：图像（本篇）与公众形象（public image / brand image）。本篇 p1 a new kind of image 是单数本形、p3 是复数，两种形态都出现；imaging 多指医学/科学成像。"
          },
          {
            "title": "实测数据",
            "content": "image：总频次 17 · 8 篇 / 8 年 · 近 10 年 11 · 首现 2005 · 最近 2024；词形：images(9) image(7) imaging(1)。"
          }
        ]
      }
    },
    {
      "id": "e2",
      "number": 2,
      "type": "阅读证据题",
      "paragraphId": "p4",
      "prompt": "record 在语料中累计 17 次，词形 record(7) / recorded(5) / records(4) / Record(1)。本篇第 4 段 its own visual record 中的 record 属于哪种用法？",
      "options": {
        "A": "名词，指「记录」",
        "B": "动词，指「录制」",
        "C": "名词，指「唱片」",
        "D": "名词，指「履历；案底」"
      },
      "correctAnswer": "A",
      "locationText": "a society that loses confidence in its own visual record will struggle to agree on basic facts",
      "retryHint": "record 前面有形容词 visual 修饰——判断词性先看它的左邻右舍。",
      "analysis": {
        "answer": "A",
        "answerDetail": "visual record＝视觉记录，名词义。record 在真题里名词与动词各占其半，判断靠搭配：修饰语 + record 多为名词（visual / medical / historical record）。",
        "location": "正文第 4 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么要记这个",
            "content": "record 的名词「记录」义是真题主流：set/break a record（创/破纪录）、medical records（病历）。本篇 p3 an enormous record of existing pictures 同为名词；recorded(5) 的动词形也常考（record doing＝记录下做某事）。"
          },
          {
            "title": "实测数据",
            "content": "record：总频次 17 · 13 篇 / 10 年 · 近 10 年 7 · 首现 2006 · 最近 2025；词形：record(7) recorded(5) records(4) Record(1)。"
          }
        ]
      }
    },
    {
      "id": "e3",
      "number": 3,
      "type": "词汇考点题",
      "paragraphId": "p3",
      "prompt": "process 在语料中累计 17 次，词形 process(13) / processes(2) / processed(1) / processing(1)。本篇第 3 段 The system processes millions of images 中的 processes 属于哪种用法？",
      "options": {
        "A": "名词复数，指「流程」",
        "B": "动词第三人称单数，指「处理」",
        "C": "形容词，指「加工过的」",
        "D": "动名词，指「处理中」"
      },
      "correctAnswer": "B",
      "locationText": "The system processes millions of images",
      "retryHint": "The system 是单数主语——主语后面的 -es 形式最可能是什么？",
      "analysis": {
        "answer": "B",
        "answerDetail": "The system（单数主语）+ processes（-es）+ 宾语＝动词第三人称单数「处理」。process 真题以名词为主（process(13)），动词用法少但常考（process data / images）。",
        "location": "正文第 3 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "怎么判断",
            "content": "判断依据：单数主语后直接跟 -es 形式且后面接宾语 → 动词三单。process 真题里名词（in the process of＝在…过程中）多于动词；本篇 p3 是动词、p4 a verification process 是名词，一文两性。"
          },
          {
            "title": "实测数据",
            "content": "process：总频次 17 · 11 篇 / 10 年 · 近 10 年 5 · 首现 2005 · 最近 2025；词形：process(13) processes(2) processed(1) processing(1)。"
          }
        ]
      }
    },
    {
      "id": "e4",
      "number": 4,
      "type": "词汇考点题",
      "paragraphId": "p6",
      "prompt": "age 在语料中累计 17 次，词形 age(11) / Age(3) / ages(3)。本篇第 6 段 In an age when any picture can be synthetic 中的 age 属于哪种用法？",
      "options": {
        "A": "名词，指「年龄」",
        "B": "名词，指「时代；时期」",
        "C": "动词，指「变老」",
        "D": "名词，指「法定年龄」"
      },
      "correctAnswer": "B",
      "locationText": "In an age when any picture can be synthetic, that trust will have to be earned back",
      "retryHint": "in an age when… 后面跟的是一整幅社会图景——这不是在说某个人的岁数。",
      "analysis": {
        "answer": "B",
        "answerDetail": "in an age when…＝在…的时代，age 取「时代」义（同族：the digital age）。判断靠搭配：in an age of / when + 抽象语境是时代义。",
        "location": "正文第 6 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "怎么判断",
            "content": "age 的时代义与年龄义并存（语料里 age(11)/Age(3)/ages(3) 三种形态都有）。判断依据：in an age of / when… 是时代义；at the age of＋数字、人作主语 + age 是年龄义。本篇无任何人物年龄语境。"
          },
          {
            "title": "实测数据",
            "content": "age：总频次 17 · 11 篇 / 9 年 · 近 10 年 10 · 首现 2007 · 最近 2025；词形：age(11) Age(3) ages(3)。"
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
      "original": "A generative model can produce a hundred variations of a product shot for the price of a photographer's afternoon, so companies have strong reasons to develop such tools in-house and to hand routine commercial imagery to software.",
      "sections": [
        {
          "title": "先找主干",
          "content": "A generative model can produce…（分句 1）＋ so companies have strong reasons…（分句 2），so 连接两个完整分句，表因果。"
        },
        {
          "title": "分句 1 内部",
          "content": "produce 的宾语是 a hundred variations of a product shot（一百张产品图变体）；for the price of a photographer's afternoon 是介词短语作成本对比状语。"
        },
        {
          "title": "分句 2 内部",
          "content": "reasons 后接两个并列不定式 to develop such tools in-house 和 to hand routine commercial imagery to software（共享 reasons）；in-house 作副词（在内部）。"
        }
      ],
      "reminder": "so 在这里是并列连词（连接分句），不是介词；hand sth to sb＝把…交给…，hand 后接双宾语。"
    },
    {
      "id": "s2",
      "number": 2,
      "paragraphId": "p4",
      "original": "Researchers warn that a society that loses confidence in its own visual record will struggle to agree on basic facts.",
      "sections": [
        {
          "title": "先找主干",
          "content": "Researchers warn that…（warn + that 宾语从句）。"
        },
        {
          "title": "从句主语与定语从句",
          "content": "从句主语 a society 后接定语从句 that loses confidence in its own visual record（对自身视觉记录失去信心的社会）。"
        },
        {
          "title": "从句谓语结构",
          "content": "will struggle to agree on basic facts（struggle to do＝艰难地做；agree on＝就…达成一致）。"
        }
      ],
      "reminder": "两个 that 身份不同：第一个引导宾语从句、不作成分；第二个引导定语从句且作从句主语。先跳读谓语 will struggle，再回头挂定语从句。"
    },
    {
      "id": "s3",
      "number": 3,
      "paragraphId": "p6",
      "original": "In an age when any picture can be synthetic, that trust will have to be earned back — one honest image at a time.",
      "sections": [
        {
          "title": "先找主干",
          "content": "that trust will have to be earned back（主语 + 情态被动 will have to be done）。"
        },
        {
          "title": "句首状语",
          "content": "In an age when any picture can be synthetic——when 引导定语从句修饰 age（不是时间状语从句）。"
        },
        {
          "title": "破折号补语",
          "content": "one honest image at a time（每次一张诚实的图像）；at a time＝每次/逐一，不是某个时间点。"
        }
      ],
      "reminder": "earn back＝重新挣回；back 是副词、修饰 earn，不能丢——earned 与 earned back 意思不同。"
    }
  ],
  "recallCards": [
    {
      "id": "r1",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U05 · search",
      "context": "search 在真题语料里累计 18 次。",
      "prompt": "a large search engine 中的 search 表示「______」。（填两个字）",
      "answer": "搜索",
      "hint": "名词/动词皆可，这里指「搜索」这一行为。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：搜索",
      "resolved": "search 在真题 18 次里 search(15) 本形为主；search engine／search for 是媒体与技术语境高频搭配。",
      "word": "search"
    },
    {
      "id": "r2",
      "type": "input",
      "typeLabel": "僻义回忆",
      "stem": "U05 · record",
      "context": "record 在真题语料里累计 17 次。",
      "prompt": "its own visual record 中的 record 意为「______」。（填两个字）",
      "answer": "记录",
      "hint": "不是唱片，也不是履历；指被保存下来的影像资料。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：记录",
      "resolved": "record 名词「记录」是真题主流：visual / medical / historical record；recorded(5) 动词形也常考。",
      "word": "record"
    },
    {
      "id": "r3",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U05 · process",
      "context": "process 在真题里出现 17 次，名词「流程」与动词「处理」两用。",
      "prompt": "a verification process 中的 process 意为：",
      "options": {
        "A": "流程；过程",
        "B": "产品",
        "C": "利润",
        "D": "模式"
      },
      "answer": "A",
      "hint": "前面有 verification 修饰——想想核查是一系列步骤。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：A（流程；过程）",
      "resolved": "process 名词「流程」是真题主流（process(13)）；动词「处理」义本篇 p3 也有（The system processes…）。",
      "word": "process"
    },
    {
      "id": "r4",
      "type": "choice",
      "typeLabel": "搭配回忆",
      "stem": "U05 · average",
      "context": "average 在真题里出现 17 次，几乎只用形容词本形。",
      "prompt": "the average reader 中的 average 意为：",
      "options": {
        "A": "平均的",
        "B": "普通的；一般的",
        "C": "平均数",
        "D": "公平的"
      },
      "answer": "B",
      "hint": "average 修饰人时不指数学平均——想想「普通读者」。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（普通的；一般的）",
      "resolved": "the average reader/user＝普通读者/用户，是 average 的熟词僻义；「平均」义多与数字连用（an average of…）。",
      "word": "average"
    },
    {
      "id": "r5",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U05 · executive",
      "context": "executive 在真题语料里累计 17 次（母表标注已收录于 500 词表）。",
      "prompt": "Executives at media firms 中的 executive 意为「______」。（填两个字）",
      "answer": "高管",
      "hint": "公司里做决策的人，不是普通员工。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：高管",
      "resolved": "executives(9)/executive(8) 几乎对半；chief executive＝首席执行官。本篇 p2 与 p5 都取「高管」义。",
      "word": "executive"
    },
    {
      "id": "r6",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U05 · raise",
      "context": "raise 在真题里累计 16 次，四态齐全的及物动词。",
      "prompt": "raised their internal standards 中的 raised 意为：",
      "options": {
        "A": "筹集（资金）",
        "B": "提高",
        "C": "饲养",
        "D": "提出（问题）"
      },
      "answer": "B",
      "hint": "raise + standards 是「提高标准」的固定搭配。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（提高）",
      "resolved": "raise 是多义高频动词：raise money（筹款）/ raise standards（提标）/ raise a question（提问）。raise 及物、rise 不及物是经典考点。",
      "word": "raise"
    }
  ],
  "reviewWords": [
    { "word": "large", "meaning": "大的", "collocation": "a large search engine" },
    { "word": "search", "meaning": "搜索", "collocation": "one habit: search / a large search engine" },
    { "word": "image", "meaning": "图像；形象", "collocation": "a new kind of image / millions of images" },
    { "word": "recent", "meaning": "近来的", "collocation": "in recent years" },
    { "word": "age", "meaning": "时代；年龄", "collocation": "in an age when…" },
    { "word": "average", "meaning": "平均的；普通的", "collocation": "the average reader / its average quality" },
    { "word": "product", "meaning": "产品；产物", "collocation": "every product launch / a product shot" },
    { "word": "executive", "meaning": "高管；主管", "collocation": "Executives at media and advertising firms" },
    { "word": "record", "meaning": "记录；纪录", "collocation": "its own visual record" },
    { "word": "control", "meaning": "控制；掌控", "collocation": "Control is the deeper problem" },
    { "word": "learn", "meaning": "学会；得知", "collocation": "pattern learned at scale" },
    { "word": "process", "meaning": "处理；流程", "collocation": "The system processes millions of images / a verification process" },
    { "word": "build", "meaning": "建立；构建", "collocation": "build a verification process" },
    { "word": "model", "meaning": "模型；模式", "collocation": "A generative model" },
    { "word": "profit", "meaning": "利润", "collocation": "profit margins are thin" },
    { "word": "raise", "meaning": "提高；筹集", "collocation": "raised their internal standards" },
    { "word": "society", "meaning": "社会", "collocation": "a society that loses confidence" },
    { "word": "clear", "meaning": "清楚的；明确的", "collocation": "clear labeling / clear rules" },
    { "word": "money", "meaning": "钱", "collocation": "visuals cost money" },
    { "word": "develop", "meaning": "开发；发展", "collocation": "develop such tools in-house" },
    { "word": "share", "meaning": "分享；共享", "collocation": "a false image is shared / the shared visual space" },
    { "word": "back", "meaning": "回；重新", "collocation": "earned back" },
    { "word": "national", "meaning": "全国性的", "collocation": "national elections" },
    { "word": "decade", "meaning": "十年", "collocation": "For most of the past decade" },
    { "word": "local", "meaning": "地方的", "collocation": "local campaigns" }
  ],
  "sections": [
    { "id": "training", "kicker": "READING PRACTICE", "title": "阅读训练", "summary": "4 题 · 逐题回到原文定位" },
    { "id": "exam", "kicker": "CONTEXT EVIDENCE", "title": "材料应用", "summary": "4 题 · 用本篇原创材料反推词义" },
    { "id": "sentences", "kicker": "SENTENCE LAB", "title": "长难句区", "summary": "3 句 · 逐字取自正文" },
    { "id": "recall", "kicker": "ACTIVE RECALL", "title": "主动回忆区", "summary": "6 卡 · 先想再看" },
    { "id": "review", "kicker": "25-WORD REVIEW", "title": "25词复盘区", "summary": "标记记忆状态" }
  ]
});
