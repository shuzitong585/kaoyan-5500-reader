// U12 · 5500 词｜原创示范单元（M-A-10：正文为原创撰写，非真题原文，不与任何真题篇目对应）
// 证据字段（词频/词形统计）由母表直出（5500_D档真题层全量名单_V0.1.csv Unit=12 行；提取件 _check\U12_25词语料统计提取.csv）。
// 正文定稿：_draft\U12_body_V1.0.md。字段骨架沿用已验收的 u11.js（22 顶层键）。
// 本单元母表「官方词形」与「规范词形」25/25 严格相等，manifest 零修正。
window.UnitRegistry.register({
  "id": "U12",
  "status": "official",
  "sequence": 12,
  "totalUnits": 112,
  "series": "考研英语5500词｜真题语境记单词",
  "title": "The Ledger of Lost Light",
  "subtitle": "高频实词 · 原创示范单元 U12",
  "stage": "原创示范｜阅读证据（M-A）",
  "newWordCount": 25,
  "storage": {
    "namespace": "kaoyan5500:U12",
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
    "在公共事务与测量争议的语域中掌握 25 个高频实词",
    "吃透 stream / intelligence / city 的篇内密度与词形集中，避免「广泛出现」式误述",
    "识别 left 的义项歧义、real/really 的派生立目，以及三词「已在500」的归属待裁定"
  ],
  "paragraphs": [
    {
      "id": "p1",
      "en": "Wendover is a city of ninety thousand people, three hospitals and one astronomical society that meets on the second Tuesday of every month in a room above a hardware store. For thirty years its members have said the same thing: you cannot see the Milky Way from Wendover any more. Nobody believed them, or rather nobody thought it mattered. A streetlight is not a problem; a streetlight is a streetlight. Then a retired surveyor named Iris Kwan began, in 2019, to keep a notebook of what she could and could not see from her own back garden, and the argument stopped being about belief.",
      "cn": "温多弗是一座九万人的城市，有三家医院，还有一个天文学会，每月第二个星期二在五金店楼上的一间屋子里聚会。三十年来，会员们一直在说同一件事：从温多弗已经看不见银河了。没人相信他们，或者更准确地说，没人觉得这有什么要紧。路灯不是问题；路灯就是路灯。后来，2019 年，一位叫艾里斯·关的退休测量员开始用笔记本记下她在自家后院里能看见什么、看不见什么，这场争论才不再关于「信不信」。"
    },
    {
      "id": "p2",
      "en": "Her method was crude but repeatable. On every clear night she counted the stars inside a cardboard frame held at arm's length and wrote the number down, with the time, the cloud cover and the state of the moon. After two years the notebook held seven hundred entries, and the trend was unmistakable: on the same dates, in the same frame, the count had fallen by a quarter. She took it to the university, where a graduate student turned the entries into a data stream that could be set beside the city's own records of lamp replacement. The evidence was not elegant. It was, however, the first evidence anyone had, and gathering it had cost one retired woman and a great deal of patient effort.",
      "cn": "她的方法粗糙，但可重复。每个晴夜，她数出举在臂长之外的一个纸板框里的星星，把数字记下来，连同时间、云量和月相。两年后，笔记本里有了七百条记录，趋势毫不含糊：同样的日期、同样的框，计数下降了四分之一。她把本子带到大学，一名研究生把这些记录变成了一条数据流，可以与市里自己的换灯记录并排比对。这些证据并不漂亮。但它是任何人手里的第一份证据，而收集它只花了一位退休女士和大量耐心的工夫。"
    },
    {
      "id": "p3",
      "en": "By then the council had reasons of its own to look up. The chief of police had ordered a review of street lighting after a run of complaints about glare, and the utility that supplied the city had proposed replacing forty thousand sodium lamps with LEDs — a change that would cut its costs and, it said, protect its revenue as electricity sales fell. Two members of the council wanted the replacement to carry a promise: the new lights would be shielded, aimed down and dimmed after midnight. The utility accepted a target of thirty per cent less upward light, and the council, in a vote that took four minutes, turned the target into a condition of the contract.",
      "cn": "到那时，市议会自己也有了抬头的理由。警察局长在一连串关于眩光的投诉之后下令审查路灯；给这座城市供电的电力公司则提议把四万盏钠灯换成 LED——这项改动会削减它自己的成本，而且据它说，在售电量下降时能保住它的收入。两名议员希望这次更换带一个承诺：新灯要加遮光罩、朝下照、午夜后调暗。电力公司接受了一个目标——向上逸散的光减少百分之三十；市议会用四分钟的表决，把这个目标写成了合同条件。"
    },
    {
      "id": "p4",
      "en": "No one in the room could measure whether the promise was kept, and that was the difficulty. The utility had the meters and treated its replacement schedule as commercial intelligence; the city had the complaints; the volunteers had a cardboard frame. For eighteen months the two sides argued about method rather than light, and public trust in the exercise thinned. It was the student who proposed a way out: put the same instrument in twelve places across the city, run it for a full year, and publish everything, including the nights when the instrument failed. The council found the money for the instruments, the society found the volunteers, and the utility, perhaps because it had nothing to hide, opened its maintenance logs. The first report was an effort to explore three possible explanations rather than to score a point.",
      "cn": "屋里没人能测量这个承诺是否被遵守，难处就在这里。电力公司手里有仪表，并把它的换灯计划当作商业情报；市里手里有投诉；志愿者们手里有一个纸板框。十八个月里，双方争论的是方法而不是光，公众对这件事的信任日渐稀薄。打破僵局的是那名研究生：把同一台仪器放到城里十二个地点，跑满一整年，把所有东西都公开——包括仪器失灵的那些夜晚。市议会为仪器找到了钱，天文学会找到了志愿者，电力公司——也许因为它没什么可隐瞒的——公开了维护日志。第一份报告是为了探讨三种可能的解释，而不是为了得分。"
    },
    {
      "id": "p5",
      "en": "Three years of readings produced a result that satisfied nobody completely. Upward light fell, but by about half the promised amount. The sky over the centre was measurably darker; the sky over the ring road was not. The volunteers had expected a clean number and got a map with soft edges. This is what real measurement looks like, the student wrote, and it is really much less satisfying than the version in the newspaper. She was careful to add that the exercise had never been designed to prove anything: its purpose was to make a claim checkable, and a claim that can be checked is worth more than a promise that cannot. There was potential for savings as well, though less than the utility had suggested.",
      "cn": "三年的读数得出了一个谁都不完全满意的结果。向上逸散的光下降了，但只有承诺量的一半左右。市中心的天空可测地变暗了；环路一带的天空没有。志愿者们期待一个干净的数字，得到的却是一张边缘模糊的地图。「真正的测量就是这样，」那名学生写道，「而且它真的比报纸上的版本令人失望得多。」她谨慎地补充说，这项测量从来不是为了证明什么：它的目的是让一个说法可以被检验，而一个能被检验的说法，比一个无法检验的承诺更有价值。节省的潜力同样存在，只是比电力公司所说的要小。"
    },
    {
      "id": "p6",
      "en": "What has lasted in Wendover is not the map but the habit. The society now runs a public night each month; new lighting contracts carry a shielding clause by default; and the third paragraph of every proposal has to state what will be measured and by whom. Each spring the council publishes a short account of the action it has taken on the previous year's findings. Other cities have written to ask for the method, and Kwan, who is seventy-eight, has posted the whole thing online: the notebook, the frame template, the material list, the instructions for building a meter from a cardboard tube and a cheap sensor. She does not believe Wendover has solved anything. A city tends to get the sky it pays for, she says, and the bill arrives slowly. But she has left behind something that costs almost nothing to copy: a way of turning an argument about the dark into a question with an answer.",
      "cn": "在温多弗留下来的不是那张地图，而是那个习惯。学会现在每月办一次公众观星夜；新的照明合同默认带遮光条款；每份提案的第三段都必须写明要测量什么、由谁来测。每年春天，市议会公布一份简短的说明，交代它针对上一年的发现采取了什么行动。别的城市写信来要方法，而七十八岁的关把整套东西都放到了网上：笔记本、纸板框模板、材料清单，以及用纸板筒加一个便宜传感器做一台仪表的说明。她并不认为温多弗解决了什么问题。她说，一座城市往往会得到它付得起的那片天空，而账单来得很慢。但她留下了一样几乎不花钱就能复制的东西：一种把关于黑暗的争论变成一个有答案的问题的办法。"
    }
  ],
  "vocabulary": [
    {
      "word": "believe",
      "pos": "v.",
      "contextMeaning": "相信；认为",
      "englishDefinition": "to accept that something is true, or to think that something is the case",
      "collocation": "Nobody believed them　/　believe in a place",
      "contextualExample": "Nobody believed them, or rather nobody thought it mattered",
      "readingNote": "believe(6)/believes(4)/believed(2)——12 次分布在 12 篇，一篇一次，无篇内堆积，也无大写专名。believes 的三单与 believed 的过去式/过去分词合计 6 次，说明该词在语料里以各种时态均匀出现，不是只作引述动词。",
      "examEvidence": "总频次 12 次　·　出现 12 篇 / 11 年　·　近10年 3 次　·　首次 2005 / 最近 2024　｜　语料词形：believe(6)　believes(4)　believed(2)",
      "examTips": "believe sb＝相信某人的话；believe in sb/sth＝信任、信仰（不等于「相信某人说了真话」）；被动 be believed to do 是考研常见句型。",
      "forms": [
        "believes",
        "believed",
        "belief",
        "believable"
      ]
    },
    {
      "word": "matter",
      "pos": "v./n.",
      "contextMeaning": "要紧；有重大影响（v.）；事情；物质（n.）",
      "englishDefinition": "to be important; a subject or situation that is being considered; physical substance",
      "collocation": "nobody thought it mattered　/　a matter of method",
      "contextualExample": "nobody thought it mattered",
      "readingNote": "matter(6)/matters(3)/Matter(2)/mattered(1)——同一词条混装名词（a matter of）与动词（it mattered / matters）。Matter(2) 首字母大写，仅凭统计无法判定是句首大写还是 Dark Matter 一类专名，按专名边界处理，不计入普通动词证据。mattered(1) 是唯一的过去式。",
      "examEvidence": "总频次 12 次　·　出现 9 篇 / 8 年　·　近10年 3 次　·　首次 2006 / 最近 2018　｜　语料词形：matter(6)　matters(3)　Matter(2)　mattered(1)",
      "examTips": "It doesn't matter.＝没关系；a matter of time＝时间问题；no matter how/what＝无论怎样（引导让步状语从句）；as a matter of fact＝事实上。注意 matter 作动词时不用于被动。",
      "forms": [
        "matters",
        "mattered",
        "Matter",
        "material"
      ]
    },
    {
      "word": "never",
      "pos": "adv.",
      "contextMeaning": "从不；从未",
      "englishDefinition": "not at any time, in the past or in the future",
      "collocation": "had never been designed to prove anything　/　never see the Milky Way",
      "contextualExample": "the exercise had never been designed to prove anything",
      "readingNote": "never(12)——12 次全部为本形、全部小写，集中在 12 篇、9 个年份，没有任何屈折或专名问题。近 10 年 3 次，说明它既不是近年新词，也没有退出语料。",
      "examEvidence": "总频次 12 次　·　出现 12 篇 / 9 年　·　近10年 3 次　·　首次 2005 / 最近 2025　｜　语料词形：never(12)",
      "examTips": "never 置于句首时句子要部分倒装（Never have I seen...）；never 与 ever 的分工：never 表否定，ever 多用于疑问、否定与比较结构。",
      "forms": [
        "nevertheless"
      ]
    },
    {
      "word": "potential",
      "pos": "n./adj.",
      "contextMeaning": "潜力；可能性（n.）；潜在的（adj.）",
      "englishDefinition": "the capacity to develop or succeed in the future; possible but not yet actual",
      "collocation": "potential for savings　/　potential customers",
      "contextualExample": "There was potential for savings as well",
      "readingNote": "potential(12)——12 次全为本形，无 -s、无比较级，也没有大写形式。统计无法区分形容词与名词两种词性：the potential to do（名词）与 potential customers（形容词）在词形上完全相同，引用时只能说「potential 共 12 次」，不能说「作名词 12 次」。",
      "examEvidence": "总频次 12 次　·　出现 9 篇 / 8 年　·　近10年 3 次　·　首次 2006 / 最近 2023　｜　语料词形：potential(12)",
      "examTips": "potential for sth / potential to do sth＝…的潜力；realise one's potential＝发挥潜力；potentially 是副词「潜在地」，不要与 potential 混用。",
      "forms": [
        "potentially",
        "potentials"
      ]
    },
    {
      "word": "stream",
      "pos": "n./v.",
      "contextMeaning": "流；数据流（n.）；流式播放（v.）",
      "englishDefinition": "a continuous flow of liquid, data or people; to play or send video and audio over the internet",
      "collocation": "a data stream　/　streaming services",
      "contextualExample": "a data stream that could be set beside the city's own records",
      "readingNote": "streaming(10)/streams(1)——原形 stream 的计数为 0。11 次里 streaming(10) 占绝对多数，语义多为「流媒体播放」，与本篇的名词「数据流」不是同一用法；streams(1) 为复数。只有 4 篇 / 4 个年份，近 10 年占 10 次，属「篇内密度高且集中在近年」，不能表述为「广泛出现」。机器候选等级 B。",
      "examEvidence": "总频次 11 次　·　出现 4 篇 / 4 年　·　近10年 10 次　·　首次 2006 / 最近 2025　｜　语料词形：streaming(10)　streams(1)　｜　机器候选等级 B",
      "examTips": "a stream of＝一连串（a stream of complaints）；stream 作动词指「流式传输」，streaming 作名词/形容词指流媒体；注意不要由 streaming 的高频反推原形也高频。",
      "forms": [
        "streams",
        "streaming",
        "streamed"
      ]
    },
    {
      "word": "revenue",
      "pos": "n.",
      "contextMeaning": "收入；营收",
      "englishDefinition": "the money that a company or government receives from its activities",
      "collocation": "protect its revenue　/　tax revenue",
      "contextualExample": "protect its revenue as electricity sales fell",
      "readingNote": "revenue(11)——11 次全为本形，无复数、无大写，分布在 6 篇 / 6 年，近 10 年 9 次。母表「500复现」列标记为「是」，即与 500 词库存在重复归属，属待人工裁定事项，本轮不改词表。",
      "examEvidence": "总频次 11 次　·　出现 6 篇 / 6 年　·　近10年 9 次　·　首次 2006 / 最近 2025　｜　语料词形：revenue(11)　｜　母表标记：已在500",
      "examTips": "revenue 多为不可数，指机构的收入总额；与 income（个人所得）、earnings（利润/收益）、turnover（营业额）语义不同。注意 revenue 与 avenue（大道）只差一个字母。",
      "forms": [
        "revenues"
      ]
    },
    {
      "word": "target",
      "pos": "n./v.",
      "contextMeaning": "目标；指标（n.）；以…为目标（v.）",
      "englishDefinition": "a result that an organization plans to achieve; to aim at or direct something towards",
      "collocation": "a target of thirty per cent less upward light　/　target customers",
      "contextualExample": "The utility accepted a target of thirty per cent less upward light",
      "readingNote": "target(8)/targeted(2)/targeting(1)——名词「指标」与动词「以…为目标/针对」两种用法共用同一词条。targeted(2) 与 targeting(1) 是动词形式，本篇用的是名词。该词条无大写形式，没有专名干扰。",
      "examEvidence": "总频次 11 次　·　出现 6 篇 / 6 年　·　近10年 8 次　·　首次 2006 / 最近 2025　｜　语料词形：target(8)　targeted(2)　targeting(1)",
      "examTips": "meet / miss a target＝达标 / 未达标；target sth at sb＝把…对准某人；be targeted at＝面向（某群体）。注意 target 作动词时及物，不写 target to sb。",
      "forms": [
        "targets",
        "targeted",
        "targeting"
      ]
    },
    {
      "word": "trust",
      "pos": "n./v.",
      "contextMeaning": "信任；信赖",
      "englishDefinition": "the belief that someone or something is honest and reliable; to believe that someone is honest",
      "collocation": "public trust in the exercise thinned　/　trust the data",
      "contextualExample": "public trust in the exercise thinned",
      "readingNote": "trust(9)/Trust(1)/trusted(1)——Trust(1) 首字母大写，可能是机构名（如 a hospital trust）或句首大写，统计无法判定，按专名边界处理；trusted(1) 为过去式/过去分词。本篇用名词「信任」。",
      "examEvidence": "总频次 11 次　·　出现 7 篇 / 6 年　·　近10年 7 次　·　首次 2007 / 最近 2019　｜　语料词形：trust(9)　Trust(1)　trusted(1)",
      "examTips": "trust sb to do sth＝相信某人会做；trust in sth＝对…的信任（名词搭配）；distrust / mistrust 是反义派生。注意 trust 作名词时多为不可数。",
      "forms": [
        "trusts",
        "trusted",
        "trusting",
        "distrust"
      ]
    },
    {
      "word": "intelligence",
      "pos": "n.",
      "contextMeaning": "情报；信息；智力",
      "englishDefinition": "information gathered about a situation or an enemy; the ability to learn and understand",
      "collocation": "commercial intelligence　/　artificial intelligence",
      "contextualExample": "treated its replacement schedule as commercial intelligence",
      "readingNote": "intelligence(8)/Intelligence(3)——Intelligence(3) 首字母大写，多出现在 Central Intelligence Agency、Artificial Intelligence 一类专名或固定名称中，不能直接当作普通名词证据。只有 4 篇 / 4 年、近 10 年 5 次，属篇内密度偏高。机器候选等级 B。",
      "examEvidence": "总频次 11 次　·　出现 4 篇 / 4 年　·　近10年 5 次　·　首次 2007 / 最近 2025　｜　语料词形：intelligence(8)　Intelligence(3)　｜　机器候选等级 B",
      "examTips": "intelligence 作「情报」时不可数；intelligent 是形容词「聪明的」，intelligence 不等于「聪明程度」这一唯一义项；artificial intelligence 常缩写为 AI。",
      "forms": [
        "intelligent",
        "intelligence's"
      ]
    },
    {
      "word": "action",
      "pos": "n.",
      "contextMeaning": "行动；措施",
      "englishDefinition": "the process of doing something, especially to achieve a plan or deal with a problem",
      "collocation": "the action it has taken　/　take action",
      "contextualExample": "a short account of the action it has taken",
      "readingNote": "action(6)/actions(5)——单数与复数几乎各半，说明语料里既有「采取行动」的不可数用法，也有「一系列举措」的可数用法。10 篇 / 8 年，分布均匀，无专名问题。",
      "examEvidence": "总频次 11 次　·　出现 10 篇 / 8 年　·　近10年 4 次　·　首次 2005 / 最近 2022　｜　语料词形：action(6)　actions(5)",
      "examTips": "take action＝采取行动（不加冠词）；in action＝在运转中；a plan of action＝行动方案；actions speak louder than words 是常见谚语。",
      "forms": [
        "actions",
        "actionable",
        "act"
      ]
    },
    {
      "word": "chief",
      "pos": "n./adj.",
      "contextMeaning": "首领；主管（n.）；主要的（adj.）",
      "englishDefinition": "the leader of an organization or department; most important",
      "collocation": "The chief of police　/　the chief reason",
      "contextualExample": "The chief of police had ordered a review",
      "readingNote": "chief(8)/Chief(2)/chiefs(1)——Chief(2) 首字母大写，多出现在职务头衔中（Chief Executive、Chief Justice），属头衔大写而非独立专名；chiefs(1) 为复数。本篇用名词「局长/主管」，与形容词「主要的」是不同义项。",
      "examEvidence": "总频次 11 次　·　出现 9 篇 / 8 年　·　近10年 4 次　·　首次 2008 / 最近 2025　｜　语料词形：chief(8)　Chief(2)　chiefs(1)",
      "examTips": "chief 作形容词只作定语（the chief reason），不作表语（不说 The reason is chief）；chief of staff＝幕僚长；CEO＝chief executive officer。",
      "forms": [
        "chiefs",
        "Chief",
        "chiefly"
      ]
    },
    {
      "word": "effort",
      "pos": "n.",
      "contextMeaning": "努力；尝试",
      "englishDefinition": "an attempt to do something, or the energy used in trying",
      "collocation": "an effort to explore three possible explanations　/　make an effort",
      "contextualExample": "an effort to explore three possible explanations",
      "readingNote": "efforts(7)/effort(4)——复数 efforts(7) 多于单数 effort(4)，说明语料更常用「多方努力」的可数复数；11 篇 / 10 年，分布最均匀的词之一，无专名问题。",
      "examEvidence": "总频次 11 次　·　出现 11 篇 / 10 年　·　近10年 4 次　·　首次 2006 / 最近 2025　｜　语料词形：efforts(7)　effort(4)",
      "examTips": "make an effort to do＝努力做；in an effort to do＝为了做（表目的）；spare no effort＝不遗余力；effort 与 attempt 不同：effort 强调投入，attempt 强调尝试一次。",
      "forms": [
        "efforts",
        "effortless"
      ]
    },
    {
      "word": "explore",
      "pos": "v.",
      "contextMeaning": "探究；探讨；勘探",
      "englishDefinition": "to examine an idea or subject carefully; to travel through an area to learn about it",
      "collocation": "explore three possible explanations　/　explore the options",
      "contextualExample": "an effort to explore three possible explanations",
      "readingNote": "explore(6)/exploring(3)/Explorer(2)——Explorer(2) 首字母大写，是专名（Internet Explorer、Windows Explorer 一类软件名，或船名/人名），不能算普通动词证据；exploring(3) 为动名词/现在分词。8 篇 / 7 年。",
      "examEvidence": "总频次 11 次　·　出现 8 篇 / 7 年　·　近10年 4 次　·　首次 2006 / 最近 2024　｜　语料词形：explore(6)　exploring(3)　Explorer(2)",
      "examTips": "explore 后直接接宾语（explore the possibility），不加介词；exploration 是名词，exploratory 是形容词「探索性的」。",
      "forms": [
        "explores",
        "explored",
        "exploring",
        "Explorer",
        "exploration"
      ]
    },
    {
      "word": "perhaps",
      "pos": "adv.",
      "contextMeaning": "也许；可能",
      "englishDefinition": "used to say that something may be true, but you are not certain",
      "collocation": "perhaps because it had nothing to hide　/　perhaps the most important",
      "contextualExample": "perhaps because it had nothing to hide",
      "readingNote": "perhaps(7)/Perhaps(4)——Perhaps(4) 首字母大写，是句首大写（句法位置决定），不是专名，可正常计入。10 篇 / 10 年，分布很广；近 10 年 4 次。",
      "examEvidence": "总频次 11 次　·　出现 10 篇 / 10 年　·　近10年 4 次　·　首次 2005 / 最近 2025　｜　语料词形：perhaps(7)　Perhaps(4)",
      "examTips": "perhaps 表推测，语气弱于 probably、possibly；阅读题里 perhaps 引出的原因不能被读成确定因果——这正是本篇 p4 的考点。",
      "forms": []
    },
    {
      "word": "purpose",
      "pos": "n.",
      "contextMeaning": "目的；用途",
      "englishDefinition": "the reason why something is done or exists",
      "collocation": "its purpose was to make a claim checkable　/　for the purpose of",
      "contextualExample": "its purpose was to make a claim checkable",
      "readingNote": "purpose(8)/purposes(3)——单数为主，purposes(3) 为复数；无大写形式，无专名问题。8 篇 / 7 年，近 10 年 4 次。",
      "examEvidence": "总频次 11 次　·　出现 8 篇 / 7 年　·　近10年 4 次　·　首次 2008 / 最近 2024　｜　语料词形：purpose(8)　purposes(3)",
      "examTips": "on purpose＝故意；for the purpose of doing＝为了做；serve a purpose＝有用处；purpose 与 goal 不同：purpose 偏「意图」，goal 偏「目标值」。",
      "forms": [
        "purposes",
        "purposeful",
        "purposely"
      ]
    },
    {
      "word": "real",
      "pos": "adj.",
      "contextMeaning": "真正的；真实的",
      "englishDefinition": "actually existing or happening, not imagined or pretended",
      "collocation": "what real measurement looks like　/　real evidence",
      "contextualExample": "This is what real measurement looks like",
      "readingNote": "real(11)——11 次全为本形，无比较级、无大写。real 与 really 在本单元分列为第 16、17 两个词条（母表如此立目），二者是形容词与副词的派生对，不能互相替代；引用频次时也不可相加。",
      "examEvidence": "总频次 11 次　·　出现 11 篇 / 9 年　·　近10年 4 次　·　首次 2005 / 最近 2025　｜　语料词形：real(11)",
      "examTips": "real 修饰名词（real income 实际收入）；really 修饰形容词、动词或整句。in reality＝事实上；real 与 true 不同：true 强调「符合事实」，real 强调「确实存在」。",
      "forms": [
        "really",
        "reality",
        "realistic"
      ]
    },
    {
      "word": "really",
      "pos": "adv.",
      "contextMeaning": "真正地；确实；非常",
      "englishDefinition": "in fact; used to emphasise a statement or an adjective",
      "collocation": "it is really much less satisfying　/　really important",
      "contextualExample": "it is really much less satisfying than the version in the newspaper",
      "readingNote": "really(10)/Really(1)——Really(1) 首字母大写，是句首大写，不是专名。9 篇 / 8 年。与 real 同源但独立立目：really 是副词，可修饰形容词比较级（less satisfying），real 不能。",
      "examEvidence": "总频次 11 次　·　出现 9 篇 / 8 年　·　近10年 4 次　·　首次 2005 / 最近 2023　｜　语料词形：really(10)　Really(1)",
      "examTips": "really 位置影响语义：really don't like it（确实不喜欢）与 don't really like it（不太喜欢）不同；口语中 really? 表惊讶。",
      "forms": []
    },
    {
      "word": "third",
      "pos": "num./n.",
      "contextMeaning": "第三（的）；三分之一",
      "englishDefinition": "coming after the second; one of three equal parts",
      "collocation": "the third paragraph of every proposal　/　a third of",
      "contextualExample": "the third paragraph of every proposal has to state",
      "readingNote": "third(10)/Third(1)——Third(1) 首字母大写，是句首或标题大写，不是专名。9 篇 / 9 年。third 既可作序数词，也可作名词「三分之一」（a third of the total），统计不区分。",
      "examEvidence": "总频次 11 次　·　出现 9 篇 / 9 年　·　近10年 4 次　·　首次 2006 / 最近 2022　｜　语料词形：third(10)　Third(1)",
      "examTips": "the third＋名词＝第三个；a third＝三分之一（注意与 one third 同义）；thirdly 用于列举。序数词前通常加 the。",
      "forms": [
        "thirds",
        "thirdly",
        "Third"
      ]
    },
    {
      "word": "trend",
      "pos": "n.",
      "contextMeaning": "趋势；趋向",
      "englishDefinition": "a general direction in which a situation is changing or developing",
      "collocation": "the trend was unmistakable　/　a downward trend",
      "contextualExample": "the trend was unmistakable",
      "readingNote": "trend(9)/trends(2)——单数为主，无大写。10 篇 / 9 年。母表「500复现」标记为「是」，与 500 词库重复归属，属待人工裁定事项，本轮不改词表也不改母表。",
      "examEvidence": "总频次 11 次　·　出现 10 篇 / 9 年　·　近10年 4 次　·　首次 2005 / 最近 2022　｜　语料词形：trend(9)　trends(2)　｜　母表标记：已在500",
      "examTips": "a trend towards sth＝朝…的趋势；reverse a trend＝扭转趋势；trend 与 tendency 不同：trend 偏客观走向，tendency 偏内在倾向。",
      "forms": [
        "trends",
        "trendy"
      ]
    },
    {
      "word": "evidence",
      "pos": "n.",
      "contextMeaning": "证据；依据",
      "englishDefinition": "facts or signs that show whether something is true or exists",
      "collocation": "The evidence was not elegant　/　evidence of",
      "contextualExample": "The evidence was not elegant",
      "readingNote": "evidence(9)/Evidence(2)——Evidence(2) 首字母大写，是句首大写，不是专名。10 篇 / 8 年。evidence 为不可数名词，语料中无 evidences 形式，可作为「不可数」的旁证。母表「500复现」标记为「是」，属待裁定重复归属。",
      "examEvidence": "总频次 11 次　·　出现 10 篇 / 8 年　·　近10年 3 次　·　首次 2005 / 最近 2025　｜　语料词形：evidence(9)　Evidence(2)　｜　母表标记：已在500",
      "examTips": "evidence 不可数：a piece of evidence / two pieces of evidence（❌ an evidence / evidences）；evidence for/of sth；evident 是形容词「明显的」。",
      "forms": [
        "evident",
        "evidently"
      ]
    },
    {
      "word": "member",
      "pos": "n.",
      "contextMeaning": "成员；会员",
      "englishDefinition": "a person or organization that belongs to a group or team",
      "collocation": "Two members of the council　/　a member state",
      "contextualExample": "Two members of the council wanted the replacement to carry a promise",
      "readingNote": "members(9)/member(1)/Members(1)——单数小写 member 只有 1 次，复数 members(9) 占绝对多数；Members(1) 首字母大写（句首或组织名）。11 篇 / 10 年，分布很广。引用时不能说「member 常以单数出现」。",
      "examEvidence": "总频次 11 次　·　出现 11 篇 / 10 年　·　近10年 3 次　·　首次 2005 / 最近 2023　｜　语料词形：members(9)　member(1)　Members(1)",
      "examTips": "a member of＋单数名词；member state＝成员国；membership＝会员身份/全体会员（不可数或可数视义项）。",
      "forms": [
        "members",
        "Members",
        "membership"
      ]
    },
    {
      "word": "tend",
      "pos": "v.",
      "contextMeaning": "倾向于；往往会；照料",
      "englishDefinition": "to be likely to do something or to have a particular quality; to take care of",
      "collocation": "A city tends to get the sky it pays for　/　tend to do",
      "contextualExample": "A city tends to get the sky it pays for",
      "readingNote": "tend(9)/tended(1)/tends(1)——本形占 9 次，tends 与 tended 各 1 次；无大写，无专名问题。9 篇 / 8 年。tend to do 是语料中的主流结构，tend 作「照料」义（tend a garden）在统计中无法单独识别。",
      "examEvidence": "总频次 11 次　·　出现 9 篇 / 8 年　·　近10年 3 次　·　首次 2005 / 最近 2022　｜　语料词形：tend(9)　tended(1)　tends(1)",
      "examTips": "tend to do sth＝往往做；tend towards sth＝有…倾向；tend 与 trend 形近义不同：tend 是动词，trend 多为名词。",
      "forms": [
        "tends",
        "tended",
        "tendency"
      ]
    },
    {
      "word": "left",
      "pos": "v./adj.",
      "contextMeaning": "留下（leave 的过去分词）；剩余的；左边的",
      "englishDefinition": "past tense and past participle of leave; remaining; on the side opposite the right",
      "collocation": "has left behind something　/　what is left",
      "contextualExample": "she has left behind something that costs almost nothing to copy",
      "readingNote": "left(10)/Left(1)——词性/义项歧义最重的一词：left 至少覆盖「leave 的过去式/过去分词」「形容词：剩余的」「方位：左」三类，而母表只记词形不记义项，无法据词频反推某一义项的次数。Left(1) 大写可能是句首，也可能是政治义「左翼」。9 篇 / 9 年，近 10 年仅 2 次。",
      "examEvidence": "总频次 11 次　·　出现 9 篇 / 9 年　·　近10年 2 次　·　首次 2005 / 最近 2024　｜　语料词形：left(10)　Left(1)",
      "examTips": "leave-left-left；have sth left＝还剩…；left over＝剩余的；the left＝左翼（政治义，常大写 Left）。阅读中遇 left 先判成分：助动词后是过去分词，名词前是形容词。",
      "forms": [
        "leave",
        "leaves",
        "leaving"
      ]
    },
    {
      "word": "material",
      "pos": "n./adj.",
      "contextMeaning": "材料；素材（n.）；重要的（adj.，法律/正式）",
      "englishDefinition": "a substance from which things are made; information used for a purpose; important and relevant",
      "collocation": "the material list　/　material evidence",
      "contextualExample": "the material list, the instructions for building a meter",
      "readingNote": "material(6)/materials(4)——时间分布极集中：10 次只落在 2016–2025 的 5 个年份、7 篇，近 10 年 10 次，首现 2016，是本单元「最新」的一词。material 兼名词与形容词（material evidence＝重要证据），统计不区分词性。",
      "examEvidence": "总频次 10 次　·　出现 7 篇 / 5 年　·　近10年 10 次　·　首次 2016 / 最近 2025　｜　语料词形：material(6)　materials(4)",
      "examTips": "raw material＝原材料；building materials＝建筑材料；material 作形容词意为「重要的、实质性的」（material to the case），不是「物质的」那么简单。",
      "forms": [
        "materials",
        "materially",
        "materialism"
      ]
    },
    {
      "word": "city",
      "pos": "n.",
      "contextMeaning": "城市",
      "englishDefinition": "a large town where many people live and work",
      "collocation": "a city of ninety thousand people　/　city council",
      "contextualExample": "Wendover is a city of ninety thousand people",
      "readingNote": "city(6)/cities(3)/city's(1)——city's(1) 为所有格，统计词形里单独出现，说明统计口径把带撇号形式也计入了词条；cities(3) 为复数。只有 4 篇 / 4 年，篇内密度高（2015-T1、2016-T2、2020-T1、2023-T2），不能表述为「遍布各年」。机器候选等级 B。",
      "examEvidence": "总频次 10 次　·　出现 4 篇 / 4 年　·　近10年 9 次　·　首次 2015 / 最近 2023　｜　语料词形：city(6)　cities(3)　city's(1)　｜　机器候选等级 B",
      "examTips": "city council＝市议会；the City（伦敦金融城）大写时是专名；city 与 town 的区别在规模与建制，不在绝对人口。",
      "forms": [
        "cities",
        "city's"
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "number": 1,
      "type": "细节题",
      "paragraphId": "p1",
      "prompt": "According to the first paragraph, what did Iris Kwan begin doing in 2019?",
      "options": {
        "A": "Keeping a notebook of what she could and could not see from her own garden",
        "B": "Asking the council to replace the city's sodium streetlights",
        "C": "Measuring the brightness of the Milky Way with a borrowed meter",
        "D": "Writing to the utility about the glare from the new lamps"
      },
      "correctAnswer": "A",
      "locationText": "to keep a notebook of what she could and could not see from her own back garden",
      "retryHint": "题干问的是「2019 年开始做什么」，在 p1 最后一句找 began 后面的动作。",
      "analysis": {
        "answer": "A",
        "answerDetail": "p1 末句是 … began, in 2019, to keep a notebook of what she could and could not see from her own back garden——动作、时间、地点都在这一句里。B、D 都是后文才发生的事（议会审查在 p3，电力公司换灯也在 p3），C 里的 meter 是 p4 才出现的仪器，且不是她 2019 年做的事。",
        "location": "第 1 段 最后一句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "A 与原文的 keep a notebook of what she could and could not see 直接对应，只把 from her own back garden 简化为 from her own garden。B 张冠李戴：要求换灯的是后文的议会与电力公司，不是关本人。C 时间错位：仪表（meter）到 p4 才被提出，2019 年她手里只有一个纸板框。D 同样错位：投诉眩光发生在 p3，且不是她做的。"
          },
          {
            "title": "怎么定位",
            "content": "p1 共五句：前四句是三十年的背景与「没人当回事」，第五句以 Then 起头，是全段的转折点，事件真正开始。看到题干里的年份 2019，直接跳到带年份的那一句。"
          }
        ]
      }
    },
    {
      "id": "q2",
      "number": 2,
      "type": "推理判断题",
      "paragraphId": "p4",
      "prompt": "The utility's decision to open its maintenance logs is presented as",
      "options": {
        "A": "proof that the company had in fact kept its promise",
        "B": "a concession forced by the council's threat of legal action",
        "C": "a step the company could take because it had little to lose by taking it",
        "D": "the direct result of the vote by two members of the council"
      },
      "correctAnswer": "C",
      "locationText": "perhaps because it had nothing to hide, opened its maintenance logs",
      "retryHint": "注意 perhaps 这个词：作者没有断定动机，只说了一种可能。",
      "analysis": {
        "answer": "C",
        "answerDetail": "p4 写 and the utility, perhaps because it had nothing to hide, opened its maintenance logs。perhaps 表明作者只是提出一种可能，并未断言公司清白；而「没什么可隐瞒」恰恰意味着公开日志对它代价很小。因此 C 是唯一既不越出原文、又解释了这一举动的选项。",
        "location": "第 4 段 第 4 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "A 把 perhaps 的可能语气读成了确定结论——原文从未说承诺被遵守，p5 反而说只下降了承诺量的一半。B 原文没有任何法律行动的记载，属于凭空添加。D 混淆因果：两名议员要求的是「新灯加遮光罩」这一合同条件，与公开维护日志不是同一件事。C 保留了原文的不确定性（little to lose），也解释了行为动机。"
          },
          {
            "title": "怎么定位",
            "content": "题干关键词 maintenance logs 在全文只出现一次，位于 p4 第四句。推理题要盯住语气词：perhaps、may、probably 出现时，正确选项通常也要带「可能」的分寸，而不是给出确定因果。"
          }
        ]
      }
    },
    {
      "id": "q3",
      "number": 3,
      "type": "例证作用题",
      "paragraphId": "p2",
      "prompt": "Why does the author describe the cardboard frame in such detail?",
      "options": {
        "A": "To show that a usable measurement can be built from very cheap materials",
        "B": "To criticise the university for refusing to lend proper instruments",
        "C": "To explain why the star count fell by a quarter in two years",
        "D": "To suggest that the volunteers' records cannot be trusted"
      },
      "correctAnswer": "A",
      "locationText": "counted the stars inside a cardboard frame held at arm's length",
      "retryHint": "先看作者对这套方法的评价词：crude but repeatable。",
      "analysis": {
        "answer": "A",
        "answerDetail": "p2 开头两句给出评价与做法：Her method was crude but repeatable，随后具体写纸板框、臂长、记下时间云量月相。粗糙（crude）却被写成可重复（repeatable），是在说明门槛极低而结果可用；p6 又说这套东西 costs almost nothing to copy，首尾呼应。",
        "location": "第 2 段 第 1–2 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 A",
            "content": "A 与 crude but repeatable、costs almost nothing to copy 两处评价一致。B 原文没有「大学拒绝出借仪器」的情节，大学提供的是研究生与后来的改造方案。C 因果错位：计数下降的原因是光污染，纸板框只是测量工具。D 与原文相反：正因为方法可重复，这些记录才成为 the first evidence anyone had。"
          },
          {
            "title": "怎么定位",
            "content": "例证作用题不要停在例子的字面，要回到它服务的那个判断句。此处判断句在段首：crude but repeatable。段末的 the first evidence anyone had 是第二个支撑点。"
          }
        ]
      }
    },
    {
      "id": "q4",
      "number": 4,
      "type": "主旨观点题",
      "paragraphId": "p6",
      "prompt": "Which statement best captures the author's view of the Wendover project?",
      "options": {
        "A": "It succeeded because it proved that the utility had broken its promise",
        "B": "Its value lay in making a public claim testable rather than in settling the argument",
        "C": "It failed because the promised reduction in upward light was never reached",
        "D": "It mattered mainly as an example of a city saving money on electricity"
      },
      "correctAnswer": "B",
      "locationText": "a way of turning an argument about the dark into a question with an answer",
      "retryHint": "看 p5 那句自我限定：its purpose was to make a claim checkable，以及 p6 结尾「几乎不花钱就能复制」的评价。",
      "analysis": {
        "answer": "B",
        "answerDetail": "p5 明说 the exercise had never been designed to prove anything: its purpose was to make a claim checkable；p6 结尾把成果概括为 a way of turning an argument about the dark into a question with an answer，并强调 costs almost nothing to copy。作者看重的不是输赢，而是可检验性与可复制性，B 同时覆盖这两层。",
        "location": "第 5 段 第 5 句 ／ 第 6 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "A 与原文相反：p5 说下降只有承诺量的一半，且作者明确写 never been designed to prove anything，目的不是「证明违约」。C 只抓结果不看评价：作者承认未达标，却仍认为这件事留下了东西（the habit、the method），因此不是「失败」。D 是局部信息：节省的潜力（potential for savings）只是附带，且比公司所说的更小。B 与「可检验 + 可复制」两处原文直接对应。"
          },
          {
            "title": "怎么定位",
            "content": "主旨题要抓两类句子：作者的自述目的（its purpose was...）与结尾的定性（What has lasted ... is not the map but the habit）。前者说明他想干什么，后者说明他认为留下了什么。"
          }
        ]
      }
    }
  ],
  "examPractice": [
    {
      "id": "e1",
      "number": 1,
      "type": "词形集中",
      "paragraphId": "p2",
      "prompt": "stream 在母表语料中累计 11 次，词形为 streaming(10) / streams(1)。关于这组统计，下列判断正确的是：",
      "options": {
        "A": "11 次全部可支撑「数据流」这一名词义，因为词形相同即词义相同",
        "B": "streaming(10) 占绝对多数、原形 stream 计数为 0，且 4 篇 / 4 年、近 10 年 10 次，属篇内密度高且集中于近年",
        "C": "streams(1) 与 streaming(10) 是两个不同词条，母表把它们合并属于错误",
        "D": "11 次分布于 4 篇，说明该词在语料中「广泛出现」"
      },
      "correctAnswer": "B",
      "locationText": "a data stream that could be set beside the city's own records",
      "retryHint": "先数原形出现几次，再看 11 次摊在几篇里。",
      "analysis": {
        "answer": "B",
        "answerDetail": "11 次 = streaming(10) + streams(1)，原形 stream 一次都没有。streaming 在语料里多指「流媒体播放」，与本篇的名词「数据流」不同；同时 11 次只分布在 4 篇、近 10 年占 10 次，属篇内密度高且集中于近年。B 同时说清了词形与原形计数。",
        "location": "正文第 2 段 第 4 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "A 错在「词形相同即词义相同」——streaming 的主流义是流媒体播放，不能当作名词「数据流」的证据。C 错在把屈折/派生形式当成独立词条：streams 与 streaming 同属 stream 词元。D 错在口径：4 篇是「窄」，不是「广泛」；引用时必须写明「集中在少数篇目」。"
          },
          {
            "title": "实测数据",
            "content": "stream：总频次 11 · 4 篇 / 4 年 · 近 10 年 10 · 首现 2006 · 最近 2025；词形 streaming(10) streams(1)。原形 stream 计数 0。机器候选等级 B。"
          }
        ]
      }
    },
    {
      "id": "e2",
      "number": 2,
      "type": "义项歧义",
      "paragraphId": "p6",
      "prompt": "left 在母表语料中累计 11 次，词形为 left(10) / Left(1)。本篇 p6 用的是 has left behind。关于该词条，下列判断正确的是：",
      "options": {
        "A": "left(10) 可确定为 leave 的过去分词，因为母表统计已按词性分类",
        "B": "Left(1) 首字母大写，说明 left 在该处是专名",
        "C": "母表只记词形不记义项，left 至少覆盖「leave 的过去式/过去分词」「剩余的」「左侧」三类用法，不能据词频反推某一义项的次数",
        "D": "has left behind 属于超出语料的用法，语料中 left 与 leave 无关"
      },
      "correctAnswer": "C",
      "locationText": "she has left behind something that costs almost nothing to copy",
      "retryHint": "统计表里只有词形和次数，没有义项标注——这正是问题所在。",
      "analysis": {
        "answer": "C",
        "answerDetail": "母表记录的是词形频次，不是义项频次。left 同时是 leave 的过去式/过去分词、形容词「剩余的」、方位词「左」，三种用法在词形上完全一致，因此 10 次里各占多少无法从统计中读出。Left(1) 的大写也无法区分句首与政治义「左翼」，不能直接判为专名。",
        "location": "正文第 6 段 末句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 C",
            "content": "A 把「按词形统计」误当成「按词性统计」，母表没有词性列。B 把大写一律当专名，而 Left 更可能是句首大写或政治义。D 与事实相反：left 正是 leave 的屈折形式之一。C 是对统计口径最准确的描述，也是本单元要求「如实标注统计污染」的直接应用。"
          },
          {
            "title": "实测数据",
            "content": "left：总频次 11 · 9 篇 / 9 年 · 近 10 年 2 · 首现 2005 · 最近 2024；词形 left(10) Left(1)。母表无义项列，义项分布不可得。"
          }
        ]
      }
    },
    {
      "id": "e3",
      "number": 3,
      "type": "派生立目",
      "paragraphId": "p5",
      "prompt": "本单元第 16、17 位分别是 real（累计 11 次，real(11)）与 really（累计 11 次，really(10) / Really(1)）。下列判断正确的是：",
      "options": {
        "A": "real 与 really 是同一词条的不同拼写，母表重复立目",
        "B": "两者是形容词与副词的派生对，分列两个词条；Really(1) 大写为句首，不能当作专名",
        "C": "really 的次数可以并入 real，因为二者词根相同",
        "D": "real(11) 说明 real 在语料中未出现，只能算 really 的附属"
      },
      "correctAnswer": "B",
      "locationText": "This is what real measurement looks like",
      "retryHint": "看两个词条的词性：一个修饰名词，一个修饰形容词或动词。",
      "analysis": {
        "answer": "B",
        "answerDetail": "real 是形容词（real measurement、real evidence），really 是副词（really much less satisfying），二者是派生关系却分列为两个独立词条，各自有独立的频次与篇目。Really(1) 首字母大写出现在句首位置，属句法位置决定的大写，不是专名。",
        "location": "正文第 5 段 第 4 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 B",
            "content": "A 错在「不同拼写」：二者词性不同、句法位置不同，不是拼写变体。C 错在合并口径：母表按词条立目，频次不可跨词条相加，否则会虚增证据量。D 与数据相反：real 本身就有 11 次，是独立词条。B 同时给出派生关系与大小写判读，是唯一与数据一致的选项。"
          },
          {
            "title": "实测数据",
            "content": "real：总频次 11 · 11 篇 / 9 年 · 近 10 年 4 · 首现 2005 · 最近 2025；词形 real(11)。really：总频次 11 · 9 篇 / 8 年 · 近 10 年 4 · 首现 2005 · 最近 2023；词形 really(10) Really(1)。"
          }
        ]
      }
    },
    {
      "id": "e4",
      "number": 4,
      "type": "归属待裁定",
      "paragraphId": "p3",
      "prompt": "revenue（累计 11 次，revenue(11)）、trend（累计 11 次，trend(9) / trends(2)）、evidence（累计 11 次，evidence(9) / Evidence(2)）在母表「500复现」列均标为「是」。下列判断正确的是：",
      "options": {
        "A": "三词与 500 词库重复，说明 D 档名单有误，应直接从本单元词表中删除",
        "B": "「已在500」表示这三个词在近 10 年真题中出现过 500 次",
        "C": "evidence(9) 与 Evidence(2) 相加为 11，说明大写那 2 次可以忽略不计",
        "D": "「已在500」是母表的一列标记，与「本单元能否用作证据」是两个维度；重复归属属待人工裁定事项，本轮不改词表也不改母表"
      },
      "correctAnswer": "D",
      "locationText": "protect its revenue as electricity sales fell",
      "retryHint": "注意「500复现」这一列名本身的意思，以及本轮授权范围里有没有「改词表」这一项。",
      "analysis": {
        "answer": "D",
        "answerDetail": "「500复现」是母表的一列字段，标记该词是否已在 500 词库中出现，属于词表归属问题；而这三个词在 D 档语料中的频次、篇目、词形证据依然真实可用。二者是不同维度：归属重复可以讨论，证据效力不受影响。是否调整归属需要人工裁定，本轮既不改 D 档词表，也不改母表。",
        "location": "正文第 3 段 第 1 句",
        "navigation": "text",
        "sections": [
          {
            "title": "为什么选 D",
            "content": "A 越权：发现重复就删词，等于用生产动作替代裁定，且会让本单元词数不足 25。B 误读列名：「500复现」的 500 指 500 词库，不是出现次数。C 是统计口径错误：大写那 2 次同样是 evidence 的证据，不能忽略，也不能因为「相加为 11」就抹掉大小写差异。D 把字段语义、证据效力与裁定权限三层分开，符合本轮「不擅自裁定词汇归属」的约束。"
          },
          {
            "title": "实测数据",
            "content": "revenue：11 次 · 6 篇 / 6 年 · 近 10 年 9 · 词形 revenue(11)。trend：11 次 · 10 篇 / 9 年 · 近 10 年 4 · 词形 trend(9) trends(2)。evidence：11 次 · 10 篇 / 8 年 · 近 10 年 3 · 词形 evidence(9) Evidence(2)。三词「500复现」列均为「是」，属待裁定重复归属。"
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
      "original": "She took it to the university, where a graduate student turned the entries into a data stream that could be set beside the city's own records of lamp replacement.",
      "sections": [
        {
          "title": "先找主干",
          "content": "She（主语）＋ took（谓语）＋ it（宾语）——主干三个词；后面的 where 从句与 that 从句都是附加成分。"
        },
        {
          "title": "where 引导非限制性定语从句",
          "content": "where a graduate student turned the entries into a data stream 修饰 the university，逗号不能省：非限制性定语从句只作补充，去掉后主句仍完整。where 在从句中作地点状语，等于 at the university。"
        },
        {
          "title": "that 从句修饰 data stream",
          "content": "that could be set beside the city's own records 是限制性定语从句修饰 a data stream，that 作主语，故不能省略；could be set 为被动语态，set beside＝与…并排放在一起比对。"
        }
      ],
      "reminder": "非限制性定语从句用逗号隔开、不能用 that 引导；限制性定语从句中 that 作主语时不可省略。"
    },
    {
      "id": "s2",
      "number": 2,
      "paragraphId": "p4",
      "original": "It was the student who proposed a way out: put the same instrument in twelve places across the city, run it for a full year, and publish everything, including the nights when the instrument failed.",
      "sections": [
        {
          "title": "先找主干",
          "content": "It was the student who proposed a way out 是强调句型 It was ... who ...，被强调的成分是 the student；去掉 It was 与 who，句子仍成立（The student proposed a way out）。"
        },
        {
          "title": "冒号后的三个祈使动词",
          "content": "冒号引出 way out 的具体内容，由三个并列祈使句构成：put ...、run ...、publish ...。祈使句省略主语 you，三个动词用逗号与 and 连接，是「方案清单」式写法，常见于说明性文字。"
        },
        {
          "title": "including 引出的补充与 when 从句",
          "content": "including the nights when the instrument failed 是介词短语补充 everything 的范围——连失败之夜也要公开；when the instrument failed 是定语从句修饰 the nights。注意 including 后接名词，不接句子。"
        }
      ],
      "reminder": "强调句型 It is/was ... that/who ... 中，被强调成分为人时可用 who；冒号后并列祈使句是「列举做法」的高频结构。"
    },
    {
      "id": "s3",
      "number": 3,
      "paragraphId": "p5",
      "original": "She was careful to add that the exercise had never been designed to prove anything: its purpose was to make a claim checkable, and a claim that can be checked is worth more than a promise that cannot.",
      "sections": [
        {
          "title": "先找主干",
          "content": "She（主语）＋ was（系动词）＋ careful（表语）＋ to add ...（状语）——主干是「她很谨慎地补充说」，真正的内容在 that 从句与冒号之后。"
        },
        {
          "title": "be careful to do 与 that 从句",
          "content": "be careful to do sth＝小心/谨慎地做某事；that the exercise had never been designed to prove anything 是 add 的宾语从句，用过去完成被动 had never been designed，表明「从设计之初就没有这个目的」。"
        },
        {
          "title": "冒号后的并列与两个省略",
          "content": "冒号后是两个并列分句：its purpose was to make a claim checkable 与 a claim that can be checked is worth more than a promise that cannot。后一分句里 that can be checked 修饰 a claim，that cannot 修饰 a promise，cannot 后省略了 be checked——比较结构中的省略是本节最易读漏的地方。"
        }
      ],
      "reminder": "比较结构 more than 前后的对应成分可以省略重复部分（a promise that cannot [be checked]）；过去完成被动 had been designed 表示「早于当时已如此」。"
    }
  ],
  "recallCards": [
    {
      "id": "r1",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U12 · never",
      "context": "never 在真题语料里累计 12 次，全部为本形、全部小写，分布在 12 篇 / 9 年。",
      "prompt": "the exercise had never been designed to prove anything 中的 never 意为「______」。（填两个字）",
      "answer": "从不",
      "hint": "这项测量从设计之初就没有「证明」的打算——never 否定的不是结果，而是从头到尾的可能性。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：从不",
      "resolved": "never(12)——12 次全为本形、无大写；never 置于句首时句子部分倒装（Never have I seen...）。",
      "word": "never"
    },
    {
      "id": "r2",
      "type": "choice",
      "typeLabel": "词义辨析",
      "stem": "U12 · matter",
      "context": "matter 在真题语料里累计 12 次，其中 Matter(2) 首字母大写，无法判定是句首还是专名。",
      "prompt": "Nobody believed them, or rather nobody thought it mattered 中的 mattered 意为：",
      "options": {
        "A": "要紧；有重大影响",
        "B": "变成物质",
        "C": "出了问题",
        "D": "被计数"
      },
      "answer": "A",
      "hint": "or rather 引出的是对前一句的修正：不是「不信」，而是「觉得不重要」。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：A（要紧；有重大影响）",
      "resolved": "matter(6)/matters(3)/Matter(2)/mattered(1)——matter 作动词表「要紧」，不用于被动；作名词表「事情/物质」。",
      "word": "matter"
    },
    {
      "id": "r3",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U12 · trust",
      "context": "trust 在真题语料里累计 11 次，其中 Trust(1) 大写，可能是机构名或句首。",
      "prompt": "public trust in the exercise thinned 中的 trust 意为「______」。（填两个字）",
      "answer": "信任",
      "hint": "双方为方法吵了十八个月，公众对这一整套做法失去了什么？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：信任",
      "resolved": "trust(9)/Trust(1)/trusted(1)——trust in sth＝对…的信任；trust 作名词多不可数。",
      "word": "trust"
    },
    {
      "id": "r4",
      "type": "choice",
      "typeLabel": "一词多义",
      "stem": "U12 · left",
      "context": "left 在真题语料里累计 11 次，词形 left(10) / Left(1)；母表不记义项，无法区分过去式、形容词与方位。",
      "prompt": "she has left behind something that costs almost nothing to copy 中的 has left behind 意为：",
      "options": {
        "A": "已经离开了（某地）",
        "B": "已经留下了（某物）",
        "C": "剩下的（形容词）",
        "D": "左边的（方位）"
      },
      "answer": "B",
      "hint": "behind 是关键词：leave sth behind＝把某物留在身后。",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（已经留下了）",
      "resolved": "left(10)/Left(1)——leave-left-left；leave sth behind＝留下、遗留；left 作形容词表「剩余的」时不带 behind。",
      "word": "left"
    },
    {
      "id": "r5",
      "type": "input",
      "typeLabel": "词义回忆",
      "stem": "U12 · purpose",
      "context": "purpose 在真题语料里累计 11 次，单数 purpose(8) 为主，purposes(3) 为复数。",
      "prompt": "its purpose was to make a claim checkable 中的 purpose 意为「______」。（填两个字）",
      "answer": "目的",
      "hint": "这项测量不是为了给出结论，而是为了让一个说法可以被检验——它想达到的是什么？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：目的",
      "resolved": "purpose(8)/purposes(3)——for the purpose of doing＝为了做；on purpose＝故意。",
      "word": "purpose"
    },
    {
      "id": "r6",
      "type": "choice",
      "typeLabel": "词性辨析",
      "stem": "U12 · potential",
      "context": "potential 在真题语料里累计 12 次，全部为本形，统计无法区分形容词与名词。",
      "prompt": "There was potential for savings as well 中的 potential 意为：",
      "options": {
        "A": "潜在的（形容词）",
        "B": "潜力；可能性（名词）",
        "C": "电压",
        "D": "强有力的"
      },
      "answer": "B",
      "hint": "看它前面的 There was 与后面的 for savings：be 动词后面接的是什么词性？",
      "correctFeedback": "✓ 正确",
      "answerLabel": "正确答案：B（潜力；可能性）",
      "resolved": "potential(12)——There was potential for sth 中 potential 为不可数名词；potential customers 中才是形容词。",
      "word": "potential"
    }
  ],
  "reviewWords": [
    {
      "word": "believe",
      "meaning": "相信；认为",
      "collocation": "Nobody believed them"
    },
    {
      "word": "matter",
      "meaning": "要紧；事情",
      "collocation": "nobody thought it mattered"
    },
    {
      "word": "never",
      "meaning": "从不；从未",
      "collocation": "had never been designed to prove anything"
    },
    {
      "word": "potential",
      "meaning": "潜力；潜在的",
      "collocation": "There was potential for savings"
    },
    {
      "word": "stream",
      "meaning": "流；数据流",
      "collocation": "a data stream"
    },
    {
      "word": "revenue",
      "meaning": "收入；营收",
      "collocation": "protect its revenue"
    },
    {
      "word": "target",
      "meaning": "目标；指标",
      "collocation": "a target of thirty per cent less upward light"
    },
    {
      "word": "trust",
      "meaning": "信任；信赖",
      "collocation": "public trust in the exercise thinned"
    },
    {
      "word": "intelligence",
      "meaning": "情报；智力",
      "collocation": "commercial intelligence"
    },
    {
      "word": "action",
      "meaning": "行动；措施",
      "collocation": "the action it has taken"
    },
    {
      "word": "chief",
      "meaning": "首领；主要的",
      "collocation": "The chief of police"
    },
    {
      "word": "effort",
      "meaning": "努力；尝试",
      "collocation": "an effort to explore"
    },
    {
      "word": "explore",
      "meaning": "探究；探讨",
      "collocation": "explore three possible explanations"
    },
    {
      "word": "perhaps",
      "meaning": "也许；可能",
      "collocation": "perhaps because it had nothing to hide"
    },
    {
      "word": "purpose",
      "meaning": "目的；用途",
      "collocation": "its purpose was to make a claim checkable"
    },
    {
      "word": "real",
      "meaning": "真正的；真实的",
      "collocation": "what real measurement looks like"
    },
    {
      "word": "really",
      "meaning": "真正地；确实",
      "collocation": "it is really much less satisfying"
    },
    {
      "word": "third",
      "meaning": "第三；三分之一",
      "collocation": "the third paragraph of every proposal"
    },
    {
      "word": "trend",
      "meaning": "趋势；趋向",
      "collocation": "the trend was unmistakable"
    },
    {
      "word": "evidence",
      "meaning": "证据；依据",
      "collocation": "The evidence was not elegant"
    },
    {
      "word": "member",
      "meaning": "成员；会员",
      "collocation": "Two members of the council"
    },
    {
      "word": "tend",
      "meaning": "倾向于；往往会",
      "collocation": "A city tends to get the sky it pays for"
    },
    {
      "word": "left",
      "meaning": "留下；剩余的",
      "collocation": "has left behind"
    },
    {
      "word": "material",
      "meaning": "材料；重要的",
      "collocation": "the material list"
    },
    {
      "word": "city",
      "meaning": "城市",
      "collocation": "a city of ninety thousand people"
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
