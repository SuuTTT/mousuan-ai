export const chronicleCategories = [
  { zh: "活动", en: "ACTIVITIES" },
  { zh: "获奖", en: "AWARDS" },
  { zh: "人才项目", en: "TALENT PROGRAMMES" },
  { zh: "文章", en: "ARTICLES" },
] as const;

export const forumRecord = {
  type: "活动",
  date: "2026 年 8 月 22 日",
  time: "14:00–16:00",
  title: "谋算智能论坛",
  edition: "2026 年会",
  chair: "李昂生 · 北京航空航天大学",
  source: {
    label: "微信资料",
    href: "https://mp.weixin.qq.com/s/fGP_HgXwtBWgaghsM5-9og",
  },
  talks: [
    {
      title: "基于结构信息论的图分析技术",
      speaker: "段亮",
      role: "副教授",
      affiliation: "云南大学",
    },
    {
      title: "深度学习解析单细胞染色质结构",
      speaker: "张治华",
      role: "研究员",
      affiliation: "国家生物信息中心",
    },
    {
      title: "Hierarchical Overlapping Clustering on Graphs – From Theory to Applications",
      speaker: "潘祎诚",
      role: "副研究员",
      affiliation: "北京航空航天大学",
    },
    {
      title: "谋算协同：多任务大模型微调的低秩融合之路",
      speaker: "殷荣",
      role: "副教授",
      affiliation: "北京航空航天大学",
    },
    {
      title: "结构信息驱动的大语言模型信息组织与智能检索",
      speaker: "卫一帆",
      role: "博士",
      affiliation: "北京航空航天大学",
    },
  ],
} as const;
