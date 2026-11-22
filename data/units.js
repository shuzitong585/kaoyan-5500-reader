(function () {
  const manifests = Object.freeze({
    U01: "data/u01.js?v=1",
    U02: "data/u02.js?v=1",
    U03: "data/u03.js?v=1",
    U04: "data/u04.js?v=1",
    U05: "data/u05.js?v=1",
    U06: "data/u06.js?v=1",
    U07: "data/u07.js?v=1",
    U08: "data/u08.js?v=1",
    U09: "data/u09.js?v=1",
    U10: "data/u10.js?v=1",
    U11: "data/u11.js?v=1",
    U12: "data/u12.js?v=1",
    U13: "data/u13.js?v=1",
    U14: "data/u14.js?v=1",
    U15: "data/u15.js?v=1",
    U16: "data/u16.js?v=1",
    U17: "data/u17.js?v=1",
    U18: "data/u18.js?v=1",
    U19: "data/u19.js?v=1",
    U20: "data/u20.js?v=1",
    U21: "data/u21.js?v=1",
    U22: "data/u22.js?v=1",
    U23: "data/u23.js?v=1",
    U24: "data/u24.js?v=1",
    U25: "data/u25.js?v=1",
    U26: "data/u26.js?v=1",
    U27: "data/u27.js?v=1",
    U28: "data/u28.js?v=1",
    U29: "data/u29.js?v=1",
    U30: "data/u30.js?v=1",
    U31: "data/u31.js?v=1",
    U32: "data/u32.js?v=1",
    U33: "data/u33.js?v=1",
    U34: "data/u34.js?v=1",
    U35: "data/u35.js?v=1",
    U36: "data/u36.js?v=1",
    U37: "data/u37.js?v=1",
    U38: "data/u38.js?v=1",
    U39: "data/u39.js?v=1",
    U40: "data/u40.js?v=1",
    U41: "data/u41.js?v=1",
    U42: "data/u42.js?v=1",
    U43: "data/u43.js?v=1",
    U44: "data/u44.js?v=1",
    U45: "data/u45.js?v=1",
    U46: "data/u46.js?v=1",
    U47: "data/u47.js?v=1",
    U48: "data/u48.js?v=1",
    U49: "data/u49.js?v=1",
    U50: "data/u50.js?v=1",
    U51: "data/u51.js?v=1",
    U52: "data/u52.js?v=1",
    U53: "data/u53.js?v=1",
    U54: "data/u54.js?v=1",
    U55: "data/u55.js?v=1",
    U56: "data/u56.js?v=1",
    U57: "data/u57.js?v=1",
    U58: "data/u58.js?v=1",
    U59: "data/u59.js?v=1",
    U60: "data/u60.js?v=1",
    U61: "data/u61.js?v=1",
    U62: "data/u62.js?v=1",
    U63: "data/u63.js?v=1",
    U64: "data/u64.js?v=1",
    U65: "data/u65.js?v=1",
    U66: "data/u66.js?v=1",
    U67: "data/u67.js?v=1",
    U68: "data/u68.js?v=1",
    U69: "data/u69.js?v=1",
    U70: "data/u70.js?v=1",
    U71: "data/u71.js?v=1",
    U72: "data/u72.js?v=1",
    U73: "data/u73.js?v=1",
    U74: "data/u74.js?v=1",
    U75: "data/u75.js?v=1",
    U76: "data/u76.js?v=1",
    U77: "data/u77.js?v=1",
    U78: "data/u78.js?v=1",
    U79: "data/u79.js?v=1",
    U80: "data/u80.js?v=1",
    U81: "data/u81.js?v=1",
    U82: "data/u82.js?v=1",
    U83: "data/u83.js?v=1",
    U84: "data/u84.js?v=1",
    U85: "data/u85.js?v=1",
    U86: "data/u86.js?v=1",
    U87: "data/u87.js?v=1",
    U88: "data/u88.js?v=1",
    U89: "data/u89.js?v=1",
    U90: "data/u90.js?v=1",
    U91: "data/u91.js?v=1",
    U92: "data/u92.js?v=1",
    U93: "data/u93.js?v=1",
    U94: "data/u94.js?v=1",
    U95: "data/u95.js?v=1",
    U96: "data/u96.js?v=1",
    U97: "data/u97.js?v=1",
    U98: "data/u98.js?v=1",
    U99: "data/u99.js?v=1",
    U100: "data/u100.js?v=1",
    U101: "data/u101.js?v=1",
    U102: "data/u102.js?v=1",
    U103: "data/u103.js?v=1",
    U104: "data/u104.js?v=1",
    U105: "data/u105.js?v=1",
    U106: "data/u106.js?v=1",
    U107: "data/u107.js?v=1",
    U108: "data/u108.js?v=1",
    U109: "data/u109.js?v=1",
    U110: "data/u110.js?v=1",
    U111: "data/u111.js?v=1",
    U112: "data/u112.js?v=1",
    U2017T2C: "data/u2017t2c.js?v=1",
    UB01: "data/ub01.js?v=1",
    UB02: "data/ub02.js?v=1",
    UB03: "data/ub03.js?v=1",
    UB04: "data/ub04.js?v=1",
    UB05: "data/ub05.js?v=1",
    UB06: "data/ub06.js?v=1",
    UB07: "data/ub07.js?v=1",
    UB08: "data/ub08.js?v=1",
    UB09: "data/ub09.js?v=1"
  });
  // 开放白名单：只有在此登记、且已通过验收的 Unit 才允许进入。
  // 依据不是「路由存在」、不是「磁盘有文件」、也不是数据文件自述的 status，
  // 而是生产流程在验收通过后写入本行的显式登记。
  const openUnits = Object.freeze(["U01", "U02", "U03", "U04", "U05", "U06", "U07", "U08", "U09", "U10", "U11", "U12", "U13", "U14", "U15", "U16", "U17", "U18", "U19", "U20", "U21", "U22", "U23", "U24", "U25", "U26", "U27", "U28", "U29", "U30", "U31", "U32", "U33", "U34", "U35", "U36", "U37", "U38", "U39", "U40", "U41", "U42", "U43", "U44", "U45", "U46", "U47", "U48", "U49", "U50", "U51", "U52", "U53", "U54", "U55", "U56", "U57", "U58", "U59", "U60", "U61", "U62", "U63", "U64", "U65", "U66", "U67", "U68", "U69", "U70", "U71", "U72", "U73", "U74", "U75", "U76", "U77", "U78", "U79", "U80", "U81", "U82", "U83", "U84", "U85", "U86", "U87", "U88", "U89", "U90", "U91", "U92", "U93", "U94", "U95", "U96", "U97", "U98", "U99", "U100", "U101", "U102", "U103", "U104", "U105", "U106", "U107", "U108", "U109", "U110", "U111", "U112", "UB01", "UB02", "UB03", "UB04", "UB05", "UB06", "UB07", "UB08", "UB09"]);
  // 材料来源元数据：控制「材料应用」模块的标题与引导语。
  // 未登记的 Unit 一律回落到中性文案（不宣称真题）。
  const sourceMeta = Object.freeze({
    U01: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创撰写，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U02: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创撰写，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U03: Object.freeze({ kicker: "READING EVIDENCE", title: "阅读证据题", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U04: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U05: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U06: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U07: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U08: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U09: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U10: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U11: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U12: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U13: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U14: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U15: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U16: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U17: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。" }),
    U18: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U19: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U20: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U21: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U22: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U23: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U24: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U25: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U26: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U27: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U28: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U29: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U30: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U31: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U32: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U33: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U34: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U35: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U36: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U37: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U38: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U39: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U40: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U41: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U42: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U43: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U44: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U45: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U46: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U47: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U48: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U49: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U50: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U51: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U52: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U53: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U54: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U55: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U56: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U57: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U58: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U59: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U60: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U61: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U62: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U63: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U64: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U65: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U66: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U67: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U68: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U69: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U70: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U71: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U72: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U73: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U74: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U75: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U76: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U77: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U78: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U79: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U80: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U81: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U82: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U83: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U84: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U85: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U86: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U87: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U88: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U89: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U90: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U91: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U92: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U93: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U94: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U95: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U96: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U97: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U98: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U99: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U100: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U101: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U102: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U103: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U104: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U105: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U106: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U107: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U108: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U109: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U110: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U111: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    U112: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" }),
    UB02: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。future / past 取 D4 续审 D 档统计；其余 23 词为 500 A1 已锁词（外部证据源），P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB04: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 7 词为 500 词故事词卡 S1 接触记录（ep01–ep22 实读），P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB05: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 7 词为 500 词故事词卡 S1 接触记录（EP09 实读），P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB06: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 7 词为 500 词故事词卡 EP06 实读接触记录，P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB07: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 7 词为 500 词故事词卡 EP11 实读接触记录，P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB08: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 6 词为 500 词故事词卡 EP10 实读接触记录，P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB09: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 6 词为 500 词故事词卡 EP16 实读接触记录，P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB03: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文。全部 7 词为 500 A1 已锁词（外部证据源），P4 真题未命中，严禁虚标真题频次与篇目。" }),
    UB01: Object.freeze({ kicker: "CONTEXT EVIDENCE", title: "材料应用", summary: "4 题 · 用本篇原创材料反推词义", intro: "用本篇材料里的出现证据，<br>反推这个词该怎么用。", note: "本篇正文为原创示范材料，非真题原文；词频与词形统计来自 2005–2025 英语一阅读语料。" })
  });
  function assertOpenUnits() {
    const invalid = openUnits.filter(id => !Object.prototype.hasOwnProperty.call(manifests, id));
    if (invalid.length) throw new Error(`openUnits 中存在未注册的 Unit：${invalid.join("、")}。请检查 data/units.js。`);
  }
  const manifestSource = "data/unit-manifest.js?v=1";
  const defaultUnitId = "U01";
  const units = new Map();
  let manifestPromise;

  function normalizeId(value) {
    return String(value || "").trim().toUpperCase();
  }

  function loadScript(source) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`无法加载 ${source}。`));
      document.head.append(script);
    });
  }

  async function ensureManifest() {
    if (!manifestPromise) manifestPromise = loadScript(manifestSource);
    await manifestPromise;
    if (!window.UnitManifest) throw new Error(`${manifestSource} 已加载，但没有建立 UnitManifest。`);
  }

  window.UnitRegistry = {
    listRoutes() {
      return Object.keys(manifests);
    },
    listOpenRoutes() {
      assertOpenUnits();
      return openUnits.filter(id => Object.prototype.hasOwnProperty.call(manifests, id));
    },
    isOpen(id) {
      return openUnits.indexOf(normalizeId(id)) !== -1;
    },
    unitMeta(id) {
      return sourceMeta[normalizeId(id)] || null;
    },
    register(unit) {
      if (!unit || typeof unit !== "object") throw new Error("Unit 数据必须是对象。");
      const id = normalizeId(unit.id);
      if (!id) throw new Error("Unit 数据缺少 id。");
      if (units.has(id)) throw new Error(`Unit ${id} 被重复注册。`);
      units.set(id, unit);
    },
    async load(requestedId) {
      const id = normalizeId(requestedId || defaultUnitId);
      assertOpenUnits();
      if (openUnits.indexOf(id) === -1) {
        const error = new Error(`Unit ${id} 尚未开放。`);
        error.code = "UNIT_NOT_OPEN";
        error.unitId = id;
        throw error;
      }
      const source = manifests[id];
      if (!source) throw new Error(`未找到 Unit：${id}。请先在 data/units.js 中注册该 Unit。`);
      await ensureManifest();
      if (!units.has(id)) {
        await loadScript(source);
      }
      const unit = units.get(id);
      if (!unit) throw new Error(`${source} 已加载，但没有注册 ${id}。`);
      window.UnitManifest.validateOfficialUnit(unit);
      return unit;
    }
  };
})();
