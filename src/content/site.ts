import type { NavigationItem } from "@/types";

export const siteContent = {
  name: "小区经理",
  englishName: "Neighborhood Manager",
  tagline: "在有限预算和不断到来的投诉中，管理一个真实又有温度的中国小区。",
  description:
    "一款聚焦中国现代住宅社区的轻松运维模拟经营游戏。管理设施、回应居民，也照顾每一笔预算的去向。",
  stage: "个人开发 · 原型阶段",
} as const;

export const navigation: NavigationItem[] = [
  { href: "/game", label: "游戏介绍" },
  { href: "/facilities", label: "设施系统" },
  { href: "/devlog", label: "开发日志" },
  { href: "/media", label: "媒体资料" },
  { href: "/about", label: "关于作者" },
  { href: "/faq", label: "常见问题" },
];

export const sellingPoints = [
  {
    icon: "楼",
    title: "管理真实设施",
    description: "从电梯到充电桩，每项设施都有健康度、成本与服务压力。",
  },
  {
    icon: "人",
    title: "回应居民日常",
    description: "处理有烟火气的投诉与突发事件，看见数字背后的社区生活。",
  },
  {
    icon: "衡",
    title: "做出有限选择",
    description: "在预算、满意度和设备健康之间取舍，没有永远正确的答案。",
  },
  {
    icon: "智",
    title: "建设智慧社区",
    description: "从普通小区逐步成长，用更好的信息帮助每一次运营判断。",
  },
  {
    icon: "端",
    title: "面向多端探索",
    description: "同一 Unity 项目未来计划覆盖 Windows、Android、iOS 与 WebGL。",
  },
];

export const coreLoop = [
  {
    step: "01",
    title: "巡视社区",
    description: "查看设施状态、资金余量与居民反馈，找到今天最紧迫的问题。",
  },
  {
    step: "02",
    title: "安排资源",
    description: "维修、升级或暂缓处理，把有限预算投入真正重要的地方。",
  },
  {
    step: "03",
    title: "回应事件",
    description: "面对投诉和意外状况，在效率、成本与社区温度间作出决定。",
  },
  {
    step: "04",
    title: "复盘成长",
    description: "观察满意度、设备健康和物业费收缴率，规划下一阶段建设。",
  },
];

export const gameMetrics = [
  { label: "小区预算", value: "每一笔投入都有机会成本", tone: "green" },
  { label: "业主满意度", value: "服务感受会累积成长期口碑", tone: "orange" },
  { label: "设备健康度", value: "预防维护往往比故障抢修更从容", tone: "blue" },
  { label: "物业费收缴率", value: "运营结果会影响居民的信任", tone: "green" },
];

export const screenshotSlots = [
  { label: "社区总览", caption: "未来展示小区地图、设施状态与当天事件。" },
  { label: "设施面板", caption: "未来展示设备健康、维护计划与升级选择。" },
  { label: "居民事件", caption: "未来展示投诉、对话与不同处理方案。" },
];

export const roadmap = [
  {
    state: "当前阶段",
    title: "核心原型",
    description: "聚焦最小玩法闭环、基础设施状态与一组可复玩的居民事件。",
  },
  {
    state: "下一阶段",
    title: "可玩切片",
    description: "打磨一段完整社区运营周期，并验证轻量 WebGL 试玩方案。",
  },
  {
    state: "未来方向",
    title: "智慧运营扩展",
    description: "探索 AI 助手、数字孪生表达与面向物业场景的仿真 Demo。",
  },
];

export const accessCards = [
  {
    key: "steam" as const,
    eyebrow: "PC 版本",
    title: "Steam",
    description: "商店页面尚未配置，后续会在这里同步正式入口。",
  },
  {
    key: "webgl" as const,
    eyebrow: "浏览器体验",
    title: "WebGL 试玩",
    description: "轻量试玩版开发中，可先查看预留页面与开发计划。",
  },
  {
    key: "chat" as const,
    eyebrow: "未来实验",
    title: "智慧运营 Chat",
    description: "探索 AI 如何辅助理解设备、投诉与社区运营信息。",
  },
];

export const faqItems = [
  {
    question: "《小区经理》是什么类型的游戏？",
    answer:
      "它是一款以中国现代住宅小区为背景的社区运维模拟经营游戏。玩家需要管理设施、预算与居民满意度，并在不断出现的事件中作出选择。",
  },
  {
    question: "游戏已经可以下载了吗？",
    answer:
      "目前仍处于个人开发的原型阶段，尚未公布下载地址或上线日期。可通过开发日志关注进展。",
  },
  {
    question: "会登陆哪些平台？",
    answer:
      "项目使用同一 Unity + C# 工程探索 Windows、Android、iOS 与 WebGL，但具体平台与发布时间要以完成度和后续测试为准。",
  },
  {
    question: "这是物业管理软件吗？",
    answer:
      "当前首先是一款独立游戏，同时也是 Unity、AI 与数字孪生方向的个人作品。未来可能演进为面向物业或园区的社区运维仿真 Demo，但本官网不提供真实物业服务。",
  },
  {
    question: "为什么选择中国小区作为主题？",
    answer:
      "电梯、停车、快递和邻里关系共同组成了很熟悉的日常。这个题材既适合做有温度的经营体验，也能承载真实的运营取舍。",
  },
  {
    question: "可以提供媒体素材或合作联系吗？",
    answer:
      "媒体资料仍在整理中。官网会在素材和联系渠道准备好后更新，不会提前展示虚假的下载或合作入口。",
  },
];
