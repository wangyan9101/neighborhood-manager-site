import type { NavigationItem } from "@/types";

export const siteContent = {
  name: "小区经理",
  englishName: "Neighborhood Manager",
  tagline: "处理投诉、维修设施、安排员工、控制预算、提升满意度。",
  description: "在一个看似普通的小区里，做出每天都不简单的运营决策。",
  stage: "独立开发 · Steam 上线前预热",
} as const;

export const navigation: NavigationItem[] = [
  { href: "/", label: "首页" }, { href: "/game", label: "游戏介绍" }, { href: "/facilities", label: "设施系统" },
  { href: "/devlog", label: "开发日志" }, { href: "/press", label: "媒体资料" }, { href: "/about", label: "关于作者" }, { href: "/faq", label: "FAQ" },
];

export const sellingPoints = [
  { icon: "设施", title: "设施运营", description: "六类设施各有健康度、维护成本与服务压力。" },
  { icon: "事件", title: "投诉事件", description: "随机事件不断到来，优先级往往比答案更重要。" },
  { icon: "预算", title: "预算权衡", description: "今天的紧急抢修，可能挤占明天的预防保养。" },
  { icon: "员工", title: "员工调度", description: "让维修、保安和客服去处理最适合的事件。" },
  { icon: "日报", title: "每日结算", description: "从运营报告看见每个决定带来的连锁变化。" },
];

export const coreLoop = [
  { step: "01", title: "查看状态", description: "巡检预算、满意度、投诉和设备健康。" },
  { step: "02", title: "接收事件", description: "判断新事件的紧急程度与潜在影响。" },
  { step: "03", title: "选择员工", description: "根据技能、位置和空闲时间安排人手。" },
  { step: "04", title: "处理问题", description: "在成本、速度和居民感受间做出选择。" },
  { step: "05", title: "每日结算", description: "复盘结果，带着后果进入新的一天。" },
];

export const gameMetrics = [
  { label: "预算", value: "每一次派工、维修和升级都会消耗有限资金", tone: "green" },
  { label: "满意度", value: "居民对响应速度和处理结果的综合感受", tone: "orange" },
  { label: "投诉量", value: "积压问题会抬高次日运营压力", tone: "blue" },
  { label: "设备健康度", value: "预防维护通常比故障抢修更从容", tone: "green" },
];

export const screenshotSlots = [
  { label: "小区运营总览", caption: "地图、设施状态、人员与当日事件的统一视图。" },
  { label: "事件派工界面", caption: "比较员工专长、耗时、成本和事件优先级。" },
  { label: "每日结算报告", caption: "回顾预算、满意度和设施健康度的变化。" },
];

export const roadmap = [
  { state: "已经完成", title: "MVP 玩法闭环", description: "五天经营流程、基础派工和每日结算已可完整运行。" },
  { state: "正在推进", title: "Demo 0.2 打磨", description: "丰富事件组合、员工特性与操作反馈。" },
  { state: "准备中", title: "Steam 商店与试玩", description: "素材与构建稳定后再公开正式入口。" },
];

export const faqItems = [
  { question: "游戏什么时候上线？", answer: "目前处于独立开发阶段，尚未公布确定上线日期。进度会优先通过开发日志同步。" },
  { question: "会登陆 Steam 吗？", answer: "计划面向 Windows / Steam 发布，商店页面仍在准备中，当前没有虚假的占位链接。" },
  { question: "游戏是单机还是联网？", answer: "核心体验定位为单机模拟经营，不依赖持续联网。" },
  { question: "是否支持中文？", answer: "会优先支持简体中文，其他语言将根据开发进度评估。" },
  { question: "是否会发布试玩 Demo？", answer: "计划提供试玩版本，但会在核心循环和性能达到可公开体验的标准后再公布。" },
  { question: "是否会有手机版？", answer: "当前优先完成 Windows / Steam 版本，手机版尚未承诺。" },
  { question: "游戏偏真实还是轻松？", answer: "题材来自真实社区运营，但规则会保持轻量、清楚和有反馈，不追求繁复仿真。" },
  { question: "如何关注开发进度？", answer: "可以查看本站开发日志。Bilibili、GitHub 等渠道会在确认后补充真实链接。" },
  { question: "是否支持手柄？", answer: "当前以键鼠交互为主，手柄支持仍在评估。" },
  { question: "是否可以进行媒体合作？", answer: "欢迎未来的媒体与内容合作；正式联系方式和 Press Kit 准备完成后会在媒体资料页公布。" },
];
