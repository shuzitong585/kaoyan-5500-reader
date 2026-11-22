// U16 · 5500 词｜原创示范单元（M-A-14：正文为原创撰写，非真题原文，不与任何真题篇目对应）
// 证据字段（词频/词形统计）由母表直出（5500_D档真题层全量名单_V0.1.csv Unit=16 行；提取件 _check\U16_25词语料统计提取.csv）。
// 正文定稿：_draft\U16_body_V1.0.md。字段骨架沿用已验收的 u15.js（22 顶层键）。
// 本单元母表「官方词形」与「规范词形」25/25 严格相等，manifest 零修正。
window.UnitRegistry.register({
  "id": "U16",
  "status": "official",
  "sequence": 16,
  "totalUnits": 112,
  "series": "考研英语5500词｜真题语境记单词",
  "title": "The Piano in the Canteen",
  "subtitle": "高频实词 · 原创示范单元 U16",
  "stage": "原创示范｜阅读证据（M-A）",
  "newWordCount": 25,
  "storage": {
    "namespace": "kaoyan5500:U16",
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
    "在工厂关闭、账目核销与地方报道的语域中掌握 25 个高频实词",
    "吃透 nail 的单篇集中（15 次全在 2024-T1）、grade 的 2 篇 / 2 年、discovery 的早期集中（近 10 年仅 1 次）与 humanity 的词形归并",
    "识别 respond 与 response 的名动分立、run 的三形无 ran、travel 的美英拼写变体，以及 corporate / stress 两词「已在500」的归属待裁定"
  ],
  "paragraphs": [
    {
      "id": "p1",
      "en": "I travel to factories like this one about twice a month, and I have learned to read them from the gate inward. Hollis & Sons has made buses here since 1946, when the family still ran the works and the valley sent its sons into the press shop at sixteen. The buses that carried passengers between the villages were built on a line that runs the length of the shed, and for forty years the name on the front of them made the firm the largest employer in the district. In March a corporate group that already owned three plants in the north bought the site, and by September the machines in the press shop were being sold by weight. What remains is a canteen, a notice board, and an upright piano that nobody has tuned since 2009.",
      "cn": "我大约每月两次去这样的工厂，也学会了从大门往里读它。霍利斯父子厂从 1946 年起就在这里造公交车，那时厂子还由这个家族经营，山谷里的男孩十六岁就进冲压车间。往返于村庄之间、载客的那些车，就是在贯穿整个厂房的那条线上造出来的；有四十年时间，车头那个名字让这家公司成了本区最大的雇主。三月，一个已在北方拥有三家工厂的企业集团买下了这块地；到了九月，冲压车间的机器正被按重量卖掉。留下来的是一间食堂、一块公告板，和一架 2009 年以后再没人调过的立式钢琴。"
    },
    {
      "id": "p2",
      "en": "The piano was bought in 1961 by the employees' social club with money raised at a Christmas raffle, and in the group's ledger it is a single line that has been written down to nothing. In the accounts it is not an asset at all; it was written off years ago, together with the tables and the tea urn. Someone had driven a nail into the side of the case to hold a photograph of the choir taken in 1974, and the nail had rusted a brown line down the varnish. The hammers were felt of a grade that is no longer made, and the frame had been under stress for sixty years without anyone measuring it. It was true, as the works manager told me twice, that nobody had played it since the last Christmas party. It was also true that the choir was going to perform at the end of the final shift, and that a piano untouched for fifteen years will not hold its pitch for a whole evening.",
      "cn": "这架钢琴是 1961 年由职工社交俱乐部用圣诞抽奖筹来的钱买的，在集团的账本上它只有一行，早已被摊到没有价值。在会计上它根本不是一项资产：多年前就随着桌子和茶水桶一起被核销了。有人在琴箱侧面钉了一枚钉子，用来挂一张 1974 年拍的合唱团照片，钉子锈出一道褐色的痕迹，顺着漆面往下淌。琴槌用的毛毡是如今已不再生产的等级，琴架在六十年里一直受着应力，却没人量过。厂长对我说了两遍：自最后一次圣诞聚会之后，就没人弹过它——这是真的。同样真实的是，合唱团要在最后一班结束时演唱，而一架十五年没碰过的钢琴撑不住一整晚的音准。"
    },
    {
      "id": "p3",
      "en": "The discovery came when I took off the fallboard. Folded behind it, in the space where the hammers rest, was a sheet of paper that had been there long enough to go the colour of weak tea. On it were names and dates in pencil, in a language that was not English, written by at least four different hands. I do not read that language, and I struggled with the second line for a long time before I understood that it was not a list of tuners at all but a list of people who had asked for a specific tune. There were forty-one entries. The earliest was 1961; the latest, in a child's handwriting, was 2007. Beyond that the paper was blank, and the blankness was the part that stayed with me.",
      "cn": "发现是在我取下琴盖前板的时候。它后面、琴槌停放的那道缝里，折着一张纸，放得太久，已经泛成淡茶色。上面是用铅笔写的名字和日期，用的不是英语，至少出自四种不同的笔迹。我不认识那种语言，第二行我琢磨了很久，才明白那根本不是调音师的名单，而是一份点过某支具体曲子的人的名字。一共四十一条。最早的是 1961 年；最晚的一条出自孩童的笔迹，是 2007 年。再往后纸就是空白的，而那片空白才是我一直记着的部分。"
    },
    {
      "id": "p4",
      "en": "I mentioned the sheet to the editor of the local paper, who had come to the site to write about the closure. She wanted to print the names, and two of the women on the list asked her not to; privacy was the one condition nobody in the room argued about, and she agreed without being asked twice. The group did not respond to her first set of questions. Its response, four days later, was a single line saying that the site had been sold and that all enquiries should go to the new owner. It is not illegal to leave a piano behind, and nobody had done anything wrong. It was simply that no one's job included it.",
      "cn": "我把那张纸的事告诉了本地报纸的编辑，她来厂区是为了写停产的报道。她想把名字登出来，名单上有两位女工请她不要登；隐私是屋里唯一没人争的条件，她没等第二次请求就答应了。集团没有回复她第一批问题。四天之后，它的回应只有一行字：厂区已出售，一切询问请转新业主。把一架钢琴留下并不违法，也没有人做错什么。只是没有谁的职责里包含着它。"
    },
    {
      "id": "p5",
      "en": "The last shift ended at six on a Friday, and the choir sang in the canteen with the doors open to the yard. They ran through four songs they had been singing since the seventies, and the piano held its pitch for three of them. A retired driver told me that the buses had been better than the ones built now, which I doubt, and that the works had been a good place to work, which I do not doubt at all. The music was not good, exactly; the altos were flat and by the end the piano was a semitone sharp. But a factor I had not expected was the acoustics: the empty press shop behind the canteen turned the whole yard into a soundbox, and for twenty minutes the noise of a closing factory was the best sound I had heard in a year.",
      "cn": "最后一班在周五六点结束，合唱团在食堂里唱，门开着，正对院子。他们连着唱了四首从七十年代唱到现在的歌，钢琴在其中三首里都撑住了音准。一位退休司机跟我说，那时候的车比现在造的好——我怀疑；又说这厂子曾经是个干活的好地方——这一点我毫不怀疑。那音乐算不上好：女低音偏低，到最后钢琴高了半个音。但有一个我没料到的因素，是声学：食堂后面那间空的冲压车间把整个院子变成了一个音箱，有二十分钟，一座正在关门的工厂发出的声音，是我一年里听过最好的声音。"
    },
    {
      "id": "p6",
      "en": "I drove home with the sheet of paper in the glove box, because the editor had photocopied it and given me the original. It is not a document of any importance. It will not be catalogued, and in fifty years nobody will be able to say who these forty-one people were. But it is the only record that the piano was ever played, and it was made by the people who played it rather than by the company that owned it. I have tuned instruments in concert halls where the programmes are printed and thrown away the same night, and I have never found anything behind a fallboard before. It is a small piece of evidence about a kind of humanity that institutions do not usually keep: the habit of writing down what you asked for, in your own hand, and leaving it where the next person will find it.",
      "cn": "我把那张纸放在手套箱里开车回家，因为编辑复印了一份，把原件给了我。这不是一份重要的文件。它不会被编目，五十年后没人说得出这四十一个人是谁。但它是这架钢琴曾被弹过的唯一记录，而且是弹它的人留下的，不是拥有它的公司留下的。我在音乐厅里调过琴，那里的节目单印出来，当晚就扔掉；我从来没在琴盖后板后面找到过任何东西。它是关于某一种人性的小小证据，而机构通常不保存这种东西：把自己要的东西写下来，用自己的手写，然后放在下一个人能找到的地方。"
    }
  ],
  "vocabulary": [
    {
      "word": "corporate",
      "pos": "adj.",
      "contextMeaning": "公司的；企业的；法人的",
      "englishDefinition": "relating to a large company or group of companies",
      "collocation": "a corporate group　/　corporate ownership",
      "contextualExample": "a corporate group that already owned three plants in the north",
      "readingNote": "corporate(7)——单一词形，无 corporates、无 -ly 派生。7 次落在 3 篇 / 3 年（2007-T4、2016-T3、2020-T3），近 10 年 6 次，首次 2007、最近 2020。母表「等级」格写的是「已在500」而不是 A/B/C——该格被「500复现 = 是」的判断占位，表达的是跨词库归属，不是证据强度，归属待人工裁定。",
      "examEvidence": "总频次 7 次　·　出现 3 篇 / 3 年　·　近10年 6 次　·　首次 2007 / 最近 2020　｜　语料词形：corporate(7)　｜　母表标记：等级 已在500 · 500复现 是",
      "examTips": "corporate 只作定语（corporate group / corporate culture），不作表语说「这家公司很 corporate」；名词是 corporation；注意与 cooperated（合作）拼写接近但词义无关。",
      "forms": [
        "corporations"
      ]
    },
    {
      "word": "employer",
      "pos": "n.",
      "contextMeaning": "雇主；用人单位",
      "englishDefinition": "a person or company that pays people to work for them",
      "collocation": "the largest employer in the district　/　a former employer",
      "contextualExample": "made the firm the largest employer in the district",
      "readingNote": "employers(3)/employer(2)/Employers(2)——复数略多（3 次），单数 2 次，另有首字母大写 2 次，母表无上下文，无法判定是句首还是专名，标为大小写待人工裁定。7 次分布在 4 篇 / 3 年，近 10 年 6 次。",
      "examEvidence": "总频次 7 次　·　出现 4 篇 / 3 年　·　近10年 6 次　·　首次 2008 / 最近 2023　｜　语料词形：employers(3)；employer(2)；Employers(2)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "employer 是「雇主」，employee 是「雇员」，只差后缀，考试常互换设错；the employer's liability＝雇主责任。",
      "forms": [
        "employers"
      ]
    },
    {
      "word": "illegal",
      "pos": "adj.",
      "contextMeaning": "违法的；非法的",
      "englishDefinition": "not allowed by the law",
      "collocation": "it is not illegal to do sth　/　an illegal act",
      "contextualExample": "It is not illegal to leave a piano behind",
      "readingNote": "illegal(7)——单一词形，无 illegally、无比较级。7 次落在 4 篇 / 4 年，首次 2015、最近 2025，近 10 年 6 次，是本单元少数在 2025 年仍有记录的词。构词上 il- 是否定前缀加 legal，不是 unlegal。",
      "examEvidence": "总频次 7 次　·　出现 4 篇 / 4 年　·　近10年 6 次　·　首次 2015 / 最近 2025　｜　语料词形：illegal(7)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "illegal 指「违法」， unlawful 更偏「不合法定程序」，illicit 指「违禁、不正当」；副词 illegally 修饰动作，名词 illegality。",
      "forms": [
        "illegally",
        "illegality"
      ]
    },
    {
      "word": "machine",
      "pos": "n.",
      "contextMeaning": "机器；机械",
      "englishDefinition": "a piece of equipment with moving parts that does a job",
      "collocation": "the machines in the press shop　/　by machine",
      "contextualExample": "the machines in the press shop were being sold by weight",
      "readingNote": "machines(4)/machine(2)/Machine(1)——复数略多（4 比 2），另有首字母大写 1 次，无法判定是句首还是专名。7 次只在 3 篇 / 3 年，篇内密度约 2.3 次 / 篇。machinery 是不可数集合名词，与本词的复数 machines 分工不同。",
      "examEvidence": "总频次 7 次　·　出现 3 篇 / 3 年　·　近10年 6 次　·　首次 2006 / 最近 2019　｜　语料词形：machines(4)；machine(2)；Machine(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "machine 可数（a machine / machines），machinery 不可数（heavy machinery）；machine tool＝机床；by machine＝用机器（不加冠词）。",
      "forms": [
        "machines",
        "machinery"
      ]
    },
    {
      "word": "passenger",
      "pos": "n.",
      "contextMeaning": "乘客；旅客",
      "englishDefinition": "a person travelling in a vehicle who is not driving it",
      "collocation": "carry passengers between the villages　/　a passenger seat",
      "contextualExample": "The buses that carried passengers between the villages",
      "readingNote": "passengers(3)/passenger(2)/Passengers(2)——复数 3 次、单数 2 次、首字母大写 2 次；单复数接近，不属「全复数」型。大写 2 次母表无上下文，标为大小写待人工裁定。7 次落在 3 篇 / 3 年。",
      "examEvidence": "总频次 7 次　·　出现 3 篇 / 3 年　·　近10年 6 次　·　首次 2015 / 最近 2021　｜　语料词形：passengers(3)；passenger(2)；Passengers(2)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "passenger 与 driver 相对；passenger seat＝副驾驶座；注意与 passer-by（路人）区别，后者复数是 passers-by。",
      "forms": [
        "passengers"
      ]
    },
    {
      "word": "perform",
      "pos": "v.",
      "contextMeaning": "演出；执行；表现",
      "englishDefinition": "to entertain an audience by acting, singing or playing; to carry out a task",
      "collocation": "perform at the end of the shift　/　perform a task",
      "contextualExample": "the choir was going to perform at the end of the final shift",
      "readingNote": "performed(2)/performing(2)/perform(1)/performer(1)/performs(1)——五种词形齐全，其中 performer(1) 是施事名词派生，语料按词元归并计入本词条，但义为「表演者」，与动词用法不同层。只看原形 perform(1) 会漏掉 6 次。7 次铺在 7 篇 / 6 年，是本单元篇数最满的词。",
      "examEvidence": "总频次 7 次　·　出现 7 篇 / 6 年　·　近10年 6 次　·　首次 2011 / 最近 2023　｜　语料词形：performed(2)；performing(2)；perform(1)；performer(1)；performs(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "perform 兼「演出」与「执行」两义（perform a task / perform well），performance 同形覆盖两种名词义；performer 只指表演者。",
      "forms": [
        "performs",
        "performed",
        "performing",
        "performer",
        "performance"
      ]
    },
    {
      "word": "true",
      "pos": "adj.",
      "contextMeaning": "真实的；确实的；忠实的",
      "englishDefinition": "agreeing with facts; real or genuine",
      "collocation": "it is true that ...　/　hold true",
      "contextualExample": "It was true, as the works manager told me twice",
      "readingNote": "true(6)/truer(1)——原形为主（6 次），另有比较级 truer(1)，无最高级、无名词 truth（truth 是另一词元，不在本词条）。7 次分布在 6 篇 / 6 年，近 10 年 6 次，首次 2014、最近 2025。",
      "examEvidence": "总频次 7 次　·　出现 6 篇 / 6 年　·　近10年 6 次　·　首次 2014 / 最近 2025　｜　语料词形：true(6)；truer(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "It is true that ... 后接陈述从句；come true＝实现（不及物）；true of / true for＝对…同样成立；比较级用 truer，不用 more true（语料亦只出现 truer）。",
      "forms": [
        "truer",
        "truest",
        "truly"
      ]
    },
    {
      "word": "beyond",
      "pos": "prep./adv.",
      "contextMeaning": "超出；在…之外；晚于",
      "englishDefinition": "on the other side of something, or further than a limit",
      "collocation": "beyond that　/　beyond repair",
      "contextualExample": "Beyond that the paper was blank",
      "readingNote": "beyond(7)——单一词形，语料中无 -s、无 -ing。7 次铺在 6 篇 / 6 年，近 10 年 5 次，首次 2008、最近 2022。介词用法（beyond that / beyond repair）与副词用法（further beyond）同形，语料只记词形不分词性。",
      "examEvidence": "总频次 7 次　·　出现 6 篇 / 6 年　·　近10年 5 次　·　首次 2008 / 最近 2022　｜　语料词形：beyond(7)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "beyond 表「超出（能力 / 理解 / 范围）」时常搭 beyond repair / beyond doubt / beyond one's control；beyond that＝除此之外，是阅读里高频的段落衔接语。",
      "forms": []
    },
    {
      "word": "factor",
      "pos": "n.",
      "contextMeaning": "因素；要素",
      "englishDefinition": "one of the things that influences a situation or result",
      "collocation": "a factor I had not expected　/　a key factor in",
      "contextualExample": "But a factor I had not expected was the acoustics",
      "readingNote": "factors(5)/factor(2)——复数占多数（5 比 2），无 -ed、无大写。7 次分布在 6 篇 / 5 年，近 10 年 5 次。factor 另有动词「把…分解为因数」，语料未出现该用法。",
      "examEvidence": "总频次 7 次　·　出现 6 篇 / 5 年　·　近10年 5 次　·　首次 2011 / 最近 2023　｜　语料词形：factors(5)；factor(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "a factor in sth＝…的一个因素（介词用 in，不用 of）；factor 与 element、component 的差别在「是否对结果起作用」；the deciding factor＝决定性因素。",
      "forms": [
        "factors"
      ]
    },
    {
      "word": "privacy",
      "pos": "n.",
      "contextMeaning": "隐私；私密",
      "englishDefinition": "the state of being free from public attention",
      "collocation": "privacy was the one condition　/　invade sb's privacy",
      "contextualExample": "privacy was the one condition nobody in the room argued about",
      "readingNote": "privacy(6)/Privacy(1)——单一实词形加 1 次首字母大写，母表无上下文，无法判定是句首还是标题/专名，标为大小写待人工裁定。7 次只在 4 篇 / 4 年，篇内密度约 1.75 次 / 篇。",
      "examEvidence": "总频次 7 次　·　出现 4 篇 / 4 年　·　近10年 5 次　·　首次 2013 / 最近 2024　｜　语料词形：privacy(6)；Privacy(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "privacy 是不可数名词，无复数、不加 a；搭配 invade / protect / respect sb's privacy；private 是形容词，privacy 是名词，不能互换。",
      "forms": [
        "privacies"
      ]
    },
    {
      "word": "respond",
      "pos": "v.",
      "contextMeaning": "回应；作出反应",
      "englishDefinition": "to say or do something as a reaction to something",
      "collocation": "respond to a question　/　respond by doing",
      "contextualExample": "The group did not respond to her first set of questions",
      "readingNote": "responded(3)/respond(2)/responding(2)——三种屈折，无 responds。7 次分布在 5 篇 / 4 年，近 10 年 5 次。与同单元的 response(12) 是两个独立正式词条：respond 是动词「回应」，response 是名词「回应 / 反应」，母表分别计数、互不吞并，response 也不得充当 respond 的词形。",
      "examEvidence": "总频次 7 次　·　出现 5 篇 / 4 年　·　近10年 5 次　·　首次 2013 / 最近 2022　｜　语料词形：responded(3)；respond(2)；responding(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "respond 是不及物动词，必须 respond to sth（不能 respond sth）；respond by doing＝以…方式回应；respond 与 answer 的差别在于前者强调「反应」，后者强调「给出答案」。",
      "forms": [
        "responds",
        "responded",
        "responding"
      ]
    },
    {
      "word": "specific",
      "pos": "adj.",
      "contextMeaning": "具体的；特定的",
      "englishDefinition": "clearly defined or identified; relating to one particular thing",
      "collocation": "a specific tune　/　be specific about",
      "contextualExample": "a list of people who had asked for a specific tune",
      "readingNote": "specific(6)/specifics(1)——specifics 是名词复数「具体细节」，不是动词屈折，与形容词 specific 同形词元，语料归并计数。7 次分布在 6 篇 / 6 年，近 10 年 5 次。作「特定」义时常与 particular 互换，但 specific 更强调「明确说出」。",
      "examEvidence": "总频次 7 次　·　出现 6 篇 / 6 年　·　近10年 5 次　·　首次 2007 / 最近 2023　｜　语料词形：specific(6)；specifics(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "be specific about sth＝就…说具体；to be specific＝具体地说（插入语）；specify 是动词，specification 是「规格 / 说明书」，三者词性不同。",
      "forms": [
        "specifics",
        "specifically",
        "specify"
      ]
    },
    {
      "word": "struggle",
      "pos": "v./n.",
      "contextMeaning": "挣扎；费力地做；斗争",
      "englishDefinition": "to try very hard to do something difficult; a hard fight or effort",
      "collocation": "struggle with sth　/　struggle to do",
      "contextualExample": "I struggled with the second line for a long time",
      "readingNote": "struggle(3)/struggled(3)/struggling(1)——三种词形，原形与过去式各 3 次，无三单 struggles。7 次铺在 7 篇 / 6 年，篇数最满之一，近 10 年 5 次。名词与动词同形，语料计数不分词性。",
      "examEvidence": "总频次 7 次　·　出现 7 篇 / 6 年　·　近10年 5 次　·　首次 2008 / 最近 2025　｜　语料词形：struggle(3)；struggled(3)；struggling(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "struggle to do＝努力做（含艰难义）；struggle with / against sth＝与…斗争；struggle for sth＝为…而争；名词常用 a struggle to do。",
      "forms": [
        "struggles",
        "struggled",
        "struggling"
      ]
    },
    {
      "word": "travel",
      "pos": "v./n.",
      "contextMeaning": "前往；旅行；行进",
      "englishDefinition": "to go from one place to another, especially over a long distance",
      "collocation": "travel to factories　/　travel light",
      "contextualExample": "I travel to factories like this one about twice a month",
      "readingNote": "travel(5)/traveling(1)/travelling(1)——原形为主，另有两种拼写变体并存（traveling 美式单写、travelling 英式双写），属同一词的拼写变体而非两个词。7 次只在 4 篇 / 4 年。作名词时 travel 不可数，a travel 是错的。",
      "examEvidence": "总频次 7 次　·　出现 4 篇 / 4 年　·　近10年 5 次　·　首次 2007 / 最近 2021　｜　语料词形：travel(5)；traveling(1)；travelling(1)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "travel 作名词不可数（travel broadens the mind），trips/journeys 才是可数的「一次行程」；travel light＝轻装出行。",
      "forms": [
        "travels",
        "traveled",
        "traveling",
        "travelled",
        "travelling"
      ]
    },
    {
      "word": "discovery",
      "pos": "n.",
      "contextMeaning": "发现；被发现的事物",
      "englishDefinition": "the act of finding something for the first time, or the thing found",
      "collocation": "the discovery came when ...　/　a recent discovery",
      "contextualExample": "The discovery came when I took off the fallboard",
      "readingNote": "discovery(16)/discoveries(2)——原形 16 次、复数 2 次。18 次看似本单元最高，但只落在 4 篇 / 3 年，且近 10 年只有 1 次，首次 2012、最近 2022：这是典型的早期集中，按「18 次」判断它近年常见会完全错。",
      "examEvidence": "总频次 18 次　·　出现 4 篇 / 3 年　·　近10年 1 次　·　首次 2012 / 最近 2022　｜　语料词形：discovery(16)；discoveries(2)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "discovery 是 discover 的名词，但 make a discovery 才自然，do a discovery 不成立；discovery 可数（a discovery / discoveries）。",
      "forms": [
        "discoveries"
      ]
    },
    {
      "word": "asset",
      "pos": "n.",
      "contextMeaning": "资产；有价值的人或物",
      "englishDefinition": "something valuable that a person or company owns",
      "collocation": "not an asset at all　/　a valuable asset",
      "contextualExample": "In the accounts it is not an asset at all",
      "readingNote": "assets(12)/asset(4)——复数占 12/16，单数 4 次，无 -ed。16 次落在 5 篇 / 4 年，近 10 年只有 2 次，首次 2007、最近 2025，属「总量不低但近年稀疏」的一类，不能只说 16 次而不提近年。",
      "examEvidence": "总频次 16 次　·　出现 5 篇 / 4 年　·　近10年 2 次　·　首次 2007 / 最近 2025　｜　语料词形：assets(12)；asset(4)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "会计语境固定用复数 assets（fixed assets / current assets）；asset to sth＝对…是助力（She is an asset to the team）。",
      "forms": [
        "assets"
      ]
    },
    {
      "word": "nail",
      "pos": "n./v.",
      "contextMeaning": "钉子；钉住",
      "englishDefinition": "a small metal pin used to fix things together; to fasten with a nail",
      "collocation": "drive a nail into sth　/　nail down",
      "contextualExample": "Someone had driven a nail into the side of the case",
      "readingNote": "nails(11)/nail(3)/Nails(1)——15 次全部落在 2024-T1 这一篇、这一年，篇内密度 15 次 / 篇、近 10 年 15 次，机器候选等级 C。单篇集中度是全单元最高的：任何「高频词」的说法都必须先声明它只出自一篇。",
      "examEvidence": "总频次 15 次　·　出现 1 篇 / 1 年　·　近10年 15 次　·　首次 2024 / 最近 2024　｜　语料词形：nails(11)；nail(3)；Nails(1)　｜　母表标记：等级 C · 500复现 否",
      "examTips": "nail 作动词是「钉、抓住」（nail the interview＝面试表现极佳）；nail down＝确定下来；hit the nail on the head＝说到点子上。",
      "forms": [
        "nails",
        "nailed",
        "nailing"
      ]
    },
    {
      "word": "language",
      "pos": "n.",
      "contextMeaning": "语言；措辞",
      "englishDefinition": "a system of words used by a particular country or group",
      "collocation": "in a language that was not English　/　body language",
      "contextualExample": "in a language that was not English",
      "readingNote": "language(12)/languages(2)/Language(1)——原形 12 次，复数 2 次，另有首字母大写 1 次（无法判定句首或专名，标为待裁定）。15 次分布在 6 篇 / 6 年，近 10 年只有 3 次，首次 2005、最近 2025：跨度最大而近年稀疏。",
      "examEvidence": "总频次 15 次　·　出现 6 篇 / 6 年　·　近10年 3 次　·　首次 2005 / 最近 2025　｜　语料词形：language(12)；languages(2)；Language(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "language 可数（a language / languages），但作「言语、措辞」时不可数（strong language＝措辞激烈）；in a language＝用某种语言，介词用 in。",
      "forms": [
        "languages"
      ]
    },
    {
      "word": "music",
      "pos": "n.",
      "contextMeaning": "音乐；乐曲",
      "englishDefinition": "sounds arranged in a pattern that people enjoy",
      "collocation": "the music was not good　/　live music",
      "contextualExample": "The music was not good, exactly",
      "readingNote": "music(14)/Music(1)——单一实词形加 1 次大写。15 次铺在 7 篇 / 7 年，是分布最广的词，篇内密度约 2.1 次 / 篇，但近 10 年只有 2 次、最近 2021，属「铺得开但近年淡出」。不可数，无 musics。",
      "examEvidence": "总频次 15 次　·　出现 7 篇 / 7 年　·　近10年 2 次　·　首次 2005 / 最近 2021　｜　语料词形：music(14)；Music(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "music 不可数：不说 a music / musics；a piece of music＝一首乐曲；musical 是形容词（也可作名词「音乐剧」）。",
      "forms": [
        "musical",
        "musician"
      ]
    },
    {
      "word": "grade",
      "pos": "n./v.",
      "contextMeaning": "等级；品级；年级；评分",
      "englishDefinition": "a level of quality or rank; to judge and mark work",
      "collocation": "felt of a grade　/　grade the work",
      "contextualExample": "The hammers were felt of a grade that is no longer made",
      "readingNote": "grade(10)/Grade(2)/grades(2)——原形为主，另有大写 2 次、复数 2 次。14 次只落在 2 篇 / 2 年（2019-T2、2023-T1），近 10 年 14 次，即全部记录都在近十年内；篇内密度 7 次 / 篇，属极端集中，不能按「14 次」说它铺得广。",
      "examEvidence": "总频次 14 次　·　出现 2 篇 / 2 年　·　近10年 14 次　·　首次 2019 / 最近 2023　｜　语料词形：grade(10)；Grade(2)；grades(2)　｜　母表标记：等级 B · 500复现 否",
      "examTips": "grade 在美式英语里指「年级 / 成绩」，英式多用 year / mark；grade A＝A 级；作动词是「评分、分级」。",
      "forms": [
        "grades",
        "graded",
        "grading"
      ]
    },
    {
      "word": "editor",
      "pos": "n.",
      "contextMeaning": "编辑；主编",
      "englishDefinition": "a person who prepares text for publication or is in charge of a newspaper",
      "collocation": "the editor of the local paper　/　letters to the editor",
      "contextualExample": "I mentioned the sheet to the editor of the local paper",
      "readingNote": "editor(6)/editors(5)/Editors(1)——单复数接近（6 比 5），另有大写 1 次。12 次分布在 5 篇 / 5 年，近 10 年只有 4 次。editor 与 editorial（社论 / 编辑的）形近，后者多作名词指「社论」。",
      "examEvidence": "总频次 12 次　·　出现 5 篇 / 5 年　·　近10年 4 次　·　首次 2008 / 最近 2023　｜　语料词形：editor(6)；editors(5)；Editors(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "the editor of a paper＝该报主编；edit 是动词，edition 是「版本」，editorial 可作名词「社论」——四个词常被混用。",
      "forms": [
        "editors",
        "editorial"
      ]
    },
    {
      "word": "humanity",
      "pos": "n.",
      "contextMeaning": "人性；人道；人类（总称）",
      "englishDefinition": "the quality of being kind and understanding; people as a whole",
      "collocation": "a kind of humanity　/　crimes against humanity",
      "contextualExample": "a kind of humanity that institutions do not usually keep",
      "readingNote": "humanity(4)/humanity's(4)/humanities(3)/Humanities(1)——humanity 与所有格合计 8 次属同一词元；humanities(3) 与 Humanities(1) 是「人文学科」义，与「人性 / 人类」不同义，只按词形归并计入本词条，义项必须分开，不可把这 4 次算作「人性」的频次。12 次分布在 7 篇 / 7 年。",
      "examEvidence": "总频次 12 次　·　出现 7 篇 / 7 年　·　近10年 3 次　·　首次 2009 / 最近 2025　｜　语料词形：humanity(4)；humanity's(4)；humanities(3)；Humanities(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "humanity 作「人类」时不可数、不加 the；作「人性」也不可数；humanities 才是可数复数，指「人文学科」；human 是「人」，human being 更强调个体。",
      "forms": [
        "humanities"
      ]
    },
    {
      "word": "response",
      "pos": "n.",
      "contextMeaning": "回应；反应；答复",
      "englishDefinition": "a spoken or written answer, or a reaction to something",
      "collocation": "its response was a single line　/　in response to",
      "contextualExample": "Its response, four days later, was a single line",
      "readingNote": "response(10)/responses(2)——原形 10 次、复数 2 次。12 次分布在 6 篇 / 4 年，近 10 年只有 2 次，首次 2008、最近 2020。与同单元的 respond(7) 是两个独立正式词条（名词 / 动词），母表分别计数、互不吞并，respond 也不得充当 response 的词形。",
      "examEvidence": "总频次 12 次　·　出现 6 篇 / 4 年　·　近10年 2 次　·　首次 2008 / 最近 2020　｜　语料词形：response(10)；responses(2)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "in response to sth＝作为对…的回应（介词固定）；response 可数（a response / responses），respond 是动词；注意 respons(e) 后不接宾语，接 to。",
      "forms": [
        "responses"
      ]
    },
    {
      "word": "stress",
      "pos": "n./v.",
      "contextMeaning": "压力；应力；强调",
      "englishDefinition": "pressure or worry caused by a difficult situation; to emphasize",
      "collocation": "under stress　/　stress the point",
      "contextualExample": "the frame had been under stress for sixty years",
      "readingNote": "stress(10)/stresses(2)——原形为主，复数 2 次，无 stressed、无 stressful（两者皆未进本语料）。12 次只在 4 篇 / 4 年，近 10 年只有 2 次。母表「等级」格写的是「已在500」而不是 A/B/C，属跨词库归属标记而非证据强度，归属待人工裁定。",
      "examEvidence": "总频次 12 次　·　出现 4 篇 / 4 年　·　近10年 2 次　·　首次 2008 / 最近 2024　｜　语料词形：stress(10)；stresses(2)　｜　母表标记：等级 已在500 · 500复现 是",
      "examTips": "under stress＝处于压力下（不加冠词）；stress on sth＝对…的强调；作动词 stress that ...＝强调（后接从句）；压力义为不可数。",
      "forms": [
        "stresses",
        "stressed",
        "stressful"
      ]
    },
    {
      "word": "run",
      "pos": "v./n.",
      "contextMeaning": "经营；运行；跑",
      "englishDefinition": "to manage or operate something; to move quickly on foot",
      "collocation": "ran the works　/　run through a song",
      "contextualExample": "They ran through four songs they had been singing since the seventies",
      "readingNote": "run(7)/running(3)/runs(1)——三种词形，原形 7 次、-ing 3 次、三单 1 次；语料中无 ran，不能据此说过去式不用（本单元正文里就用了 ran）。11 次铺在 7 篇 / 6 年，近 10 年 4 次。",
      "examEvidence": "总频次 11 次　·　出现 7 篇 / 6 年　·　近10年 4 次　·　首次 2011 / 最近 2021　｜　语料词形：run(7)；running(3)；runs(1)　｜　母表标记：等级 A · 500复现 否",
      "examTips": "run 的词义随宾语变：run a factory＝经营工厂，run a program＝运行程序，run through＝过一遍；in the long run＝从长远看。",
      "forms": [
        "runs",
        "running",
        "ran"
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "number": 1,
      "type": "细节题",
      "paragraphId": "p3",
      "prompt": "What did the narrator find behind the fallboard of the piano?",
      "options": {
        "A": "A photograph of the works choir taken in 1974.",
        "B": "A folded sheet of names, dates and requested tunes written in another language.",
        "C": "A ledger recording the payments made for tuning the piano.",
        "D": "A letter from the group explaining why the site had been sold."
      },
      "correctAnswer": "B",
      "locationText": "Folded behind it, in the space where the hammers rest, was a sheet of paper",
      "retryHint": "第三段说的是纸上的什么内容？它是一张照片、一本账簿，还是一张名单？",
      "analysis": {
        "answer": "B",
        "answerDetail": "p3 第二、三句给出实物与内容：折着的纸（a sheet of paper）上是名字和日期，用的是不是英语的一种语言，出自四种笔迹；随后作者说明那不是调音师名单，而是点过某支具体曲子的人的名单。B 把「折叠的纸」「名字与日期」「另一种语言」三点都保住了。A 的 1974 年照片来自第二段，是钉子的用途，不在琴盖后；C 原文明确说这不是调音师名单，更不是账簿；D 集团的信在 p4 是一行回复，内容是厂区已出售，不是解释原因。",
        "location": "第 3 段 第 2 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "定位句是 Folded behind it ... was a sheet of paper，紧接着的 On it were names and dates in pencil, in a language that was not English 才是内容。B 与这两句一一对应。A 把第二段的照片错搬到第三段；C 与 it was not a list of tuners at all 直接冲突；D 把第四段集团的一行回复改写成「解释原因」，而原文那行只说厂区已出售、询问转新业主。"
          },
          {
            "title": "怎么定位",
            "content": "题干关键词 behind the fallboard 只在 p3 首句出现，找到 fallboard 就锁定了段落。细节题在这一段要分清「实物」与「实物上的内容」：题目问 find，答案必须包含纸上写了什么，只答「一张纸」不完整。"
          }
        ]
      }
    },
    {
      "id": "q2",
      "number": 2,
      "type": "推理判断题",
      "paragraphId": "p4",
      "prompt": "The editor's handling of the two women's request suggests that she",
      "options": {
        "A": "doubted that the names would interest her readers",
        "B": "was waiting for the group to answer before deciding",
        "C": "had been advised by the narrator to leave the names out",
        "D": "accepted their wish at once, without treating it as a negotiation"
      },
      "correctAnswer": "D",
      "locationText": "she agreed without being asked twice",
      "retryHint": "注意 without being asked twice 这个说法——它暗示的是一次就够，还是需要反复商量？",
      "analysis": {
        "answer": "D",
        "answerDetail": "p4 写她想登名字，两位女工请她不要登，随后是 privacy was the one condition nobody in the room argued about, and she agreed without being asked twice。without being asked twice 的含义是「没等第二次请求就答应了」，即她一次就接受、没有把它当成需要讨价还价的事，D 正确。A 与她想印名字的初衷相反；B 与原文顺序不符——答应在前，集团回复在四天之后；C 无据：叙述者只是把纸的事告诉她，没有劝她删名字。",
        "location": "第 4 段 第 2 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "推理题要抓「评价性副词与否定式」。without being asked twice 是作者对她态度的判断，等于「她不需要被说服」。D 用 at once / without treating it as a negotiation 复述这一判断。A 把「没登名字」的原因归到读者兴趣，原文归到隐私；B 把时间顺序倒置；C 把叙述者的转述当成建议，原文没有任何劝说。"
          },
          {
            "title": "怎么定位",
            "content": "题干关键词 the two women's request 对应原文 two of the women on the list asked her not to。答案句就在同一句的后半段，用 and 连接。推断题遇到 without / never / hardly 这类否定词，往往就是作者态度所在，不能跳过。"
          }
        ]
      }
    },
    {
      "id": "q3",
      "number": 3,
      "type": "细节题",
      "paragraphId": "p2",
      "prompt": "According to the second paragraph, how does the piano stand in the group's accounts?",
      "options": {
        "A": "It is carried at no value at all, having been written off years ago.",
        "B": "It is the group's most valuable asset in the canteen.",
        "C": "It was bought by the group when it took over the site.",
        "D": "It is listed at the price the employees' club paid in 1961."
      },
      "correctAnswer": "A",
      "locationText": "In the accounts it is not an asset at all",
      "retryHint": "看 write off（核销）这个词——核销之后，账面价值是多少？",
      "analysis": {
        "answer": "A",
        "answerDetail": "p2 说账本上它只有一行、已被摊到没有价值，紧接着一句是 In the accounts it is not an asset at all; it was written off years ago，即「在会计上根本不是资产，多年前已核销」。A 的 carried at no value 正是 write off 的结果。B 与 not an asset at all 正相反；C 把买主搞错——1961 年买它的是职工社交俱乐部，不是集团；D 与「核销」冲突，1961 年的买价早已不在账上。",
        "location": "第 2 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "关键在 write off：核销意味着账面价值归零，物体还在，价值不在。A 用 carried at no value 精确对应。B 是 not an asset at all 的反面；C 混淆买方（employees' social club 与 the group）；D 把 1961 年的价格当成现行账面值，与「已核销」不相容。"
          },
          {
            "title": "怎么定位",
            "content": "题干里的 in the group's accounts 与原文 In the accounts 几乎同形，属送分定位。细节题遇到会计词（asset / write off / ledger）要按字面读，不要用常识替换：账上没有价值不等于东西不值钱。"
          }
        ]
      }
    },
    {
      "id": "q4",
      "number": 4,
      "type": "主旨与态度题",
      "paragraphId": "p6",
      "prompt": "Why does the narrator keep the sheet of paper?",
      "options": {
        "A": "He intends to sell it to a collector of industrial memorabilia.",
        "B": "It proves that the group broke the law when it closed the site.",
        "C": "It is the only record of the piano being played, and it was made by the players.",
        "D": "It lists the tuners who worked on the piano between 1961 and 2007."
      },
      "correctAnswer": "C",
      "locationText": "it is the only record that the piano was ever played",
      "retryHint": "最后一段有一句直接说「唯一的记录」——记录是谁写的？",
      "analysis": {
        "answer": "C",
        "answerDetail": "p6 第三句给出两个并列判断：it is the only record that the piano was ever played，以及 it was made by the people who played it rather than by the company that owned it。C 把这两点合并。A 全文没有任何出售意图，作者反而说它不是重要文件；B 与 p4 的 It is not illegal to leave a piano behind 直接冲突；D 与 p3 的 it was not a list of tuners at all 冲突——这正是全篇最重要的一次纠正。",
        "location": "第 6 段 第 3 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "作者留下它的理由由 rather than 结构给出：made by the people who played it rather than by the company that owned it。C 同时保留「唯一记录」与「由弹琴的人所写」。A 无据；B 与「留下钢琴并不违法」相反；D 恰好是被 p3 否定过的误读——把名单当成调音师名单，是本文设置的典型陷阱。"
          },
          {
            "title": "怎么定位",
            "content": "题干 Why does he keep it 对应最后一段首句 given me the original，理由紧随其后。主旨态度题要读段落中「作者自己下的判断」，而不是他引述别人的话；本段的判断句以 But it is the only record ... 开头，转折词后即答案。"
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
      "paragraphId": "p2",
      "prompt": "nail 在母表语料中累计 15 次，词形为 nails(11) / nail(3) / Nails(1)，却只出现在 1 篇 / 1 个年份（2024-T1），近 10 年 15 次，机器候选等级为 C。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "15 次说明该词在 2005–2025 全周期内分布广泛，属稳定高频词",
        "B": "等级 C 说明这 15 次不应计入该词的总频次",
        "C": "15 次全部来自同一篇，篇内密度 15 次 / 篇，不能据此推断该词在真题中普遍高频",
        "D": "近 10 年 15 次且首次年份是 2024，说明该词自 2024 年才开始进入英语"
      },
      "correctAnswer": "C",
      "locationText": "Someone had driven a nail into the side of the case",
      "retryHint": "先算 15 ÷ 1，再问自己：一篇里的 15 次能不能代表 112 篇？",
      "analysis": {
        "answer": "C",
        "answerDetail": "母表原值：总频次 15、出现 1 篇 / 1 年、近 10 年 15 次、首次与最近同为 2024、词形 nails(11) / nail(3) / Nails(1)、等级 C。15 次除以 1 篇即篇内密度 15 次 / 篇，这是全单元最高的单篇集中；一篇的记录无法支撑「普遍高频」的判断，故 C 正确。A 把「1 篇」说成「分布广泛」，与密度计算相反；B 混淆等级与频次字段；D 把语料首次出现年份当成语言进入时间，是以语料代语言。",
        "location": "第 2 段 第 4 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "C 同时处理三个可核对事实：篇数（1）、密度（15÷1）、可推断范围（不能外推）。A 直接与「1 篇」矛盾；B 把机器候选等级当成计数开关；D 是典型的口径越界——首次年份描述的是本语料的记录起点，不是英语史的起点。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=16 第 17 行：总频次 15；出现篇数 1；出现年份数 1；近10年频次 15；首次年份 2024；最近年份 2024；真题实际词形 nails(11)；nail(3)；Nails(1)；机器候选等级 C；500复现 否；锚点 2014-T4；锚点覆盖 6；出现篇目 2024-T1。"
          }
        ]
      }
    },
    {
      "id": "e2",
      "number": 2,
      "type": "早期集中与口径",
      "paragraphId": "p3",
      "prompt": "discovery 在母表语料中累计 18 次，词形为 discovery(16) / discoveries(2)，出现在 4 篇 / 3 个年份，近 10 年却只有 1 次，首次 2012、最近 2022。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "18 次是本单元最高频次，但 4 篇 / 3 年且近 10 年仅 1 次，说明这 18 次高度集中在 2012–2014 年前后",
        "B": "近 10 年只有 1 次，说明该词在全部语料中其实只出现过 1 次",
        "C": "discoveries(2) 属于另一词条，应从 18 次中扣除，实际频次为 16",
        "D": "18 次除以 4 篇说明该词篇内密度很低，是本单元分布最分散的词"
      },
      "correctAnswer": "A",
      "locationText": "The discovery came when I took off the fallboard",
      "retryHint": "18 次、4 篇、近 10 年 1 次——这三个数放在一起，说明时间上集中在哪一段？",
      "analysis": {
        "answer": "A",
        "answerDetail": "母表原值：总频次 18、出现 4 篇 / 3 年、近 10 年 1 次、首次 2012 / 最近 2022。总频次与篇年覆盖全周期，近 10 年频次只覆盖最近十年这一切片；18 次里仅 1 次落在近十年，其余 17 次都在 2014 年前后，故 A 正确。B 把切片当全量；C 违反词形归并规则——discoveries 是 discovery 的复数，属同一词元，不计入才是错的；D 算反了：18÷4＝4.5 次 / 篇，属偏高密度。",
        "location": "第 3 段 第 1 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "A 把三个字段的口径差异说清楚：总频次 18 是全周期，4 篇 / 3 年也是全周期，近 10 年 1 次是切片。三者不矛盾，但只有切片能回答「近年常见吗」。B 混淆切片与全量；C 混淆屈折形式与独立词条（对比 respond / response 才是两条独立记录）；D 把 18÷4 算成低密度，方向错。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=16 第 15 行：总频次 18；出现篇数 4；出现年份数 3；近10年频次 1；首次年份 2012；最近年份 2022；真题实际词形 discovery(16)；discoveries(2)；机器候选等级 B；500复现 否；锚点 2014-T4；锚点覆盖 6；出现篇目 2012-T2、2012-T3、2014-T3、2022-T3。"
          }
        ]
      }
    },
    {
      "id": "e3",
      "number": 3,
      "type": "词形归并与义项",
      "paragraphId": "p3",
      "prompt": "humanity 在母表语料中累计 12 次，词形为 humanity(4) / humanity's(4) / humanities(3) / Humanities(1)，出现在 7 篇 / 7 个年份，近 10 年 3 次。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "humanities(3) 与 humanity(4) 同义，12 次都可算作「人性」义的频次",
        "B": "humanity's(4) 是所有格，应单列为另一词条并另行计数",
        "C": "7 篇 / 7 年说明该词近年活跃，近 10 年应有 7 次",
        "D": "humanity 与所有格合计 8 次属同一词元；humanities 的 3 次指「人文学科」，义项须分开，不能算作「人性」的频次"
      },
      "correctAnswer": "D",
      "locationText": "written by at least four different hands",
      "retryHint": "humanities 在英语里通常指什么？和人「性」是同一个意思吗？",
      "analysis": {
        "answer": "D",
        "answerDetail": "母表把 humanity(4) 与 humanity's(4) 计为同一词元（所有格不单独立条），而 humanities(3) / Humanities(1) 是「人文学科」，与「人性 / 人类」不同义，只是词形归并进了同一行。因此频次可合并、义项必须分开，D 正确。A 把 4 次人文学科算进「人性」，是义项混算；B 把屈折/所有格当成新词条，与母表归并规则相反；C 用全周期篇年推切片频次，口径错位——近 10 年字段给的是 3，不是 7。",
        "location": "第 3 段 第 3 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "这一题考两件事：一是词形归并（-y's 属同一词元，不另立条），二是同形不同义（humanities＝人文学科）。两者不能混：归并解决「算不算同一行」，义项解决「能不能算同一个意思」。D 把两层都写对；A 只错在义项，但足以推翻；B 违反归并规则；C 把 7 篇当 7 次。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=16 第 22 行：总频次 12；出现篇数 7；出现年份数 7；近10年频次 3；首次年份 2009；最近年份 2025；真题实际词形 humanity(4)；humanity's(4)；humanities(3)；Humanities(1)；机器候选等级 A；500复现 否；锚点 2014-T4；锚点覆盖 6；出现篇目 2009-T3、2013-T3、2014-T4、2015-T4、2017-T2、2019-T3、2025-T2。"
          }
        ]
      }
    },
    {
      "id": "e4",
      "number": 4,
      "type": "归属标记与同族分立",
      "paragraphId": "p4",
      "prompt": "corporate 在母表语料中累计 7 次、stress 累计 12 次，两词的「机器候选等级」格都写着「已在500」而不写 A/B/C；同单元的 respond 累计 7 次（responded(3) / respond(2) / responding(2)）与 response 累计 12 次（response(10) / responses(2)）则各自独立立条。关于这些统计，下列判断正确的是：",
      "options": {
        "A": "「已在500」说明 corporate 与 stress 的真题证据强度高于等级 A",
        "B": "「已在500」占的是等级列、表达的是跨词库归属判断，属待人工裁定，本轮不改词表；respond 与 response 分立，不得合并计数",
        "C": "corporate 与 stress 都标了「已在500」，应合并为一条记录以便统一管理",
        "D": "respond 与 response 词形相近，可以互相充当对方的屈折形式，合并后频次为 19"
      },
      "correctAnswer": "B",
      "locationText": "Its response, four days later, was a single line",
      "retryHint": "「已在500」写在名字叫「等级」的格子里，它标的是证据强度，还是词表归属？",
      "analysis": {
        "answer": "B",
        "answerDetail": "母表原值：corporate 7 次 / 3 篇 / 3 年、stress 12 次 / 4 篇 / 4 年，两词「机器候选等级」列均为「已在500」，「500复现」列均为「是」。该格被归属判断占位，不再提供 A/B/C 强度信息，属跨词库归属问题，待人工裁定，本轮不改词表。respond(7) 与 response(12) 是两条独立记录，动词与名词分工，词形互不包含，合并不成立，故 B 正确。A 把占位符读成最高强度；C 把「同标记」当成「可合并」，与全局唯一词规则冲突；D 把同族当屈折，19 这个数也没有母表依据。",
        "location": "第 4 段 第 4 句（教学用法）",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "B 分两层：第一层说清「已在500」的性质（占位、归属、待裁定、本轮不改词表）；第二层说清 respond / response 的关系（独立立条、不得合并）。A、C 都在处理第一层时出错——A 误读为强度，C 误推为可合并；D 在第二层出错，把同族词当屈折形式，且 7＋12＝19 的算法在母表里没有任何依据。"
          },
          {
            "title": "实测数据",
            "content": "母表 Unit=16 第 1 行 corporate：总频次 7；出现篇数 3；出现年份数 3；近10年 6；首次 2007；最近 2020；词形 corporate(7)；等级格「已在500」；500复现 是。第 24 行 stress：总频次 12；出现 4 篇 / 4 年；近10年 2；首次 2008；最近 2024；词形 stress(10)；stresses(2)；等级格「已在500」；500复现 是。第 11 行 respond：总频次 7；responded(3)；respond(2)；responding(2)。第 23 行 response：总频次 12；response(10)；responses(2)。"
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
      "original": "It was true, as the works manager told me twice, that nobody had played it since the last Christmas party.",
      "sections": [
        {
          "title": "先找主干",
          "content": "主干是 It was true that ...：it 是形式主语，真正的主语是 that 引导的主语从句 nobody had played it since the last Christmas party。整句的意思是「……这件事是真的」。"
        },
        {
          "title": "as the works manager told me twice 是插入语",
          "content": "as 引导的是插入性的状语从句，用两个逗号与主句隔开，位置在主谓之间。它不参与句子主干，删掉后 It was true that ... 依然完整。as 在此意为「正如」，不是「因为」，也不是「当…时」。"
        },
        {
          "title": "that 从句里的时态",
          "content": "nobody had played it 用过去完成时，参照点是「最后一次圣诞聚会」，表示在那之前到现在都没弹过；since 后接时间点，主句用完成时是固定搭配。it 指钢琴，不能读成形式主语——本句的 it 已经出现在从句里作宾语。"
        }
      ],
      "reminder": "It is true that ... 是形式主语句型，that 从句才是真主语；插入语由两个逗号夹住，可整体删除；since + 时间点要求主句用完成时。"
    },
    {
      "id": "s2",
      "number": 2,
      "paragraphId": "p3",
      "original": "I do not read that language, and I struggled with the second line for a long time before I understood that it was not a list of tuners at all but a list of people who had asked for a specific tune.",
      "sections": [
        {
          "title": "先找主干",
          "content": "and 连接两个并列主句：I do not read that language 与 I struggled with the second line for a long time。第二个分句后面接 before 引导的时间状语从句，说明「琢磨很久」到什么时候为止。"
        },
        {
          "title": "before 从句里套了一个宾语从句",
          "content": "before I understood that ... 中，that 引导 understood 的宾语从句。这个宾语从句内部是 not ... at all but ... 的对照结构：not a list of tuners at all but a list of people ...，即「根本不是调音师名单，而是……名单」。at all 只加强否定，不改变结构。"
        },
        {
          "title": "who had asked for a specific tune",
          "content": "这是修饰 people 的定语从句，who 作主语，谓语用过去完成时 had asked，表示「在写名单之前就已经点过」。specific 在此是「具体的、某一支」而不是「特定的某类」，与 a 连用强调「某一支」。"
        }
      ],
      "reminder": "not ... at all but ... 是「根本不是…而是…」的对照结构，but 后与 not 后必须同层次并列；before 从句常与「花了很久才…」对应；定语从句的时态可早于主句，用过去完成时表示更早发生。"
    },
    {
      "id": "s3",
      "number": 3,
      "paragraphId": "p6",
      "original": "I have tuned instruments in concert halls where the programmes are printed and thrown away the same night, and I have never found anything behind a fallboard before.",
      "sections": [
        {
          "title": "先找主干",
          "content": "and 连接两个并列主句，都是现在完成时：I have tuned instruments in concert halls ... 与 I have never found anything behind a fallboard before。第一个讲长期经历，第二个讲「在此之前从未有过」。"
        },
        {
          "title": "where 引导的定语从句",
          "content": "where the programmes are printed and thrown away the same night 修饰 concert halls。where 在从句中作地点状语，从句主语是 the programmes，谓语是被动语态 are printed and thrown away，两个过去分词共用 are。the same night＝当晚，作时间状语。"
        },
        {
          "title": "never ... before 的配合",
          "content": "have never found ... before 是现在完成时与 before 的固定搭配，表示「到现在为止从未」。anything 在否定句中替代 something；behind a fallboard 是地点状语，fallboard 指琴盖前板，与前文 took off the fallboard 呼应。"
        }
      ],
      "reminder": "现在完成时可与 never / before 连用表「至今未曾」；where 定语从句中 where 作状语，从句需有完整主谓；并列被动 are printed and thrown away 共用同一助动词。"
    }
  ],
  "recallCards": [
    {
      "id": "r1",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U16 · travel",
      "context": "travel 在真题语料里累计 7 次，词形为 travel(5) / traveling(1) / travelling(1)，美式单写与英式双写两种拼写并存。",
      "prompt": "I travel to factories like this one 中的 travel 意为「______」。（填两个字，表示「去、前往」）",
      "answer": "前往",
      "hint": "后面接 to factories，主语是人——这里说的是「观光旅行」，还是「到某地去」？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：前往",
      "resolved": "travel(5)/traveling(1)/travelling(1)——travel to a place＝前往某地；travel light＝轻装出行；作名词时不可数。",
      "word": "travel"
    },
    {
      "id": "r2",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U16 · employer",
      "context": "employer 在真题语料里累计 7 次，词形为 employers(3) / employer(2) / Employers(2)，复数略多，另有首字母大写 2 次。",
      "prompt": "made the firm the largest employer in the district 中的 employer 意为：",
      "options": {
        "A": "雇员；职工",
        "B": "雇主；用人单位",
        "C": "工会；职工代表",
        "D": "承包商；分包方"
      },
      "answer": "B",
      "hint": "词尾 -er 表示「做这个动作的一方」：employ 是「雇用」，那 -er 是谁？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（雇主；用人单位）",
      "resolved": "employers(3)/employer(2)/Employers(2)——the largest employer＝最大的雇主；employee 才是雇员，两个词只差后缀。",
      "word": "employer"
    },
    {
      "id": "r3",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U16 · perform",
      "context": "perform 在真题语料里累计 7 次，词形为 performed(2) / performing(2) / perform(1) / performer(1) / performs(1)，五种词形齐全。",
      "prompt": "the choir was going to perform at the end of the final shift 中的 perform 意为：",
      "options": {
        "A": "执行（任务）；履行（职责）",
        "B": "表现（好坏）",
        "C": "演出；表演",
        "D": "完成（指标）；达到（标准）"
      },
      "answer": "C",
      "hint": "主语是 the choir（合唱团），后面接 at the end of the shift——合唱团在那个时间做什么？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：C（演出；表演）",
      "resolved": "performed(2)/performing(2)/perform(1)/performer(1)/performs(1)——perform at a concert＝在音乐会上演出；perform a task＝执行任务，两个义项同形。",
      "word": "perform"
    },
    {
      "id": "r4",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U16 · privacy",
      "context": "privacy 在真题语料里累计 7 次，词形为 privacy(6) / Privacy(1)，只在 4 篇 / 4 年出现，篇内密度约 1.75 次 / 篇。",
      "prompt": "privacy was the one condition nobody in the room argued about 中的 privacy 意为「______」。（填两个字）",
      "answer": "隐私",
      "hint": "两位女工请编辑不要登她们的名字——她们要保住的是什么？与「公开」相对。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：隐私",
      "resolved": "privacy(6)/Privacy(1)——invade sb's privacy＝侵犯隐私；privacy 不可数，无复数、不加 a。",
      "word": "privacy"
    },
    {
      "id": "r5",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U16 · humanity",
      "context": "humanity 在真题语料里累计 12 次，词形为 humanity(4) / humanity's(4) / humanities(3) / Humanities(1)，其中 humanities 指「人文学科」。",
      "prompt": "a kind of humanity that institutions do not usually keep 中的 humanity 意为：",
      "options": {
        "A": "人类（总称）；人口总数",
        "B": "人文学科",
        "C": "人性；人道",
        "D": "人道主义援助"
      },
      "answer": "C",
      "hint": "它被 a kind of 修饰，又说机构通常不保存——这是「学科」，还是人的某种品质？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：C（人性；人道）",
      "resolved": "humanity(4)/humanity's(4)/humanities(3)/Humanities(1)——a kind of humanity＝一种人性；humanities 才是「人文学科」，义项不同。",
      "word": "humanity"
    },
    {
      "id": "r6",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U16 · stress",
      "context": "stress 在真题语料里累计 12 次，词形为 stress(10) / stresses(2)，只出现在 4 篇 / 4 年，母表「等级」格写的是「已在500」。",
      "prompt": "the frame had been under stress for sixty years 中的 stress 意为「______」。（填两个字，指结构受力）",
      "answer": "应力",
      "hint": "主语是 the frame（琴架），不是人——这是心理压力，还是结构承受的力？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：应力",
      "resolved": "stress(10)/stresses(2)——under stress＝处于受力 / 压力之下；作「压力」义时不可数；另有「强调」义（stress that ...）。",
      "word": "stress"
    }
  ],
  "reviewWords": [
    {
      "word": "corporate",
      "meaning": "公司的；企业的",
      "collocation": "a corporate group that already owned three plants"
    },
    {
      "word": "employer",
      "meaning": "雇主；用人单位",
      "collocation": "the largest employer in the district"
    },
    {
      "word": "illegal",
      "meaning": "违法的；非法的",
      "collocation": "It is not illegal to leave a piano behind"
    },
    {
      "word": "machine",
      "meaning": "机器；机械",
      "collocation": "the machines in the press shop"
    },
    {
      "word": "passenger",
      "meaning": "乘客；旅客",
      "collocation": "carried passengers between the villages"
    },
    {
      "word": "perform",
      "meaning": "演出；执行",
      "collocation": "perform at the end of the final shift"
    },
    {
      "word": "true",
      "meaning": "真实的；确实的",
      "collocation": "It was true, as the works manager told me twice"
    },
    {
      "word": "beyond",
      "meaning": "超出；在…之外",
      "collocation": "Beyond that the paper was blank"
    },
    {
      "word": "factor",
      "meaning": "因素；要素",
      "collocation": "a factor I had not expected was the acoustics"
    },
    {
      "word": "privacy",
      "meaning": "隐私；私密",
      "collocation": "privacy was the one condition"
    },
    {
      "word": "respond",
      "meaning": "回应；作出反应",
      "collocation": "did not respond to her first set of questions"
    },
    {
      "word": "specific",
      "meaning": "具体的；特定的",
      "collocation": "asked for a specific tune"
    },
    {
      "word": "struggle",
      "meaning": "挣扎；费力地做",
      "collocation": "I struggled with the second line"
    },
    {
      "word": "travel",
      "meaning": "前往；旅行",
      "collocation": "I travel to factories like this one"
    },
    {
      "word": "discovery",
      "meaning": "发现；被发现的事物",
      "collocation": "The discovery came when I took off the fallboard"
    },
    {
      "word": "asset",
      "meaning": "资产；有价值之物",
      "collocation": "it is not an asset at all"
    },
    {
      "word": "nail",
      "meaning": "钉子；钉住",
      "collocation": "driven a nail into the side of the case"
    },
    {
      "word": "language",
      "meaning": "语言；措辞",
      "collocation": "in a language that was not English"
    },
    {
      "word": "music",
      "meaning": "音乐；乐曲",
      "collocation": "The music was not good, exactly"
    },
    {
      "word": "grade",
      "meaning": "等级；品级",
      "collocation": "felt of a grade that is no longer made"
    },
    {
      "word": "editor",
      "meaning": "编辑；主编",
      "collocation": "the editor of the local paper"
    },
    {
      "word": "humanity",
      "meaning": "人性；人道",
      "collocation": "a kind of humanity that institutions do not usually keep"
    },
    {
      "word": "response",
      "meaning": "回应；答复",
      "collocation": "Its response, four days later"
    },
    {
      "word": "stress",
      "meaning": "压力；应力",
      "collocation": "the frame had been under stress for sixty years"
    },
    {
      "word": "run",
      "meaning": "经营；运行；跑",
      "collocation": "They ran through four songs"
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
