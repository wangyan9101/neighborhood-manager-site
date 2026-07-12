import type { Facility } from "@/types";

export const facilities: Facility[] = [
  { id: "elevator", name: "电梯", icon: "elevator", gradient: "mint", shortDescription: "高频运转，也是居民最容易感知的服务。", description: "关注运行健康、维护周期与早晚高峰压力，在预防保养和紧急抢修之间安排有限预算。", commonEvents: ["电梯故障", "居民被困", "异响投诉", "定期保养"], metrics: ["设备健康度", "满意度", "投诉量"] },
  { id: "parking", name: "停车场", icon: "parking", gradient: "sky", shortDescription: "有限空间连接着秩序、收益和邻里情绪。", description: "调整车位分配、访客规则和出入口效率，处理长期占位与临时停车矛盾。", commonEvents: ["车位冲突", "消防通道占用", "临时车辆", "僵尸车"], metrics: ["满意度", "投诉量", "预算"] },
  { id: "locker", name: "快递柜", icon: "locker", gradient: "sun", shortDescription: "方便了收件，也带来了满柜和滞留问题。", description: "观察柜体容量与包裹周转，协调快递员、居民和公共空间的不同需求。", commonEvents: ["快递柜满", "快递滞留", "柜门故障", "丢件投诉"], metrics: ["满意度", "投诉量", "设备健康度"] },
  { id: "camera", name: "摄像头", icon: "camera", gradient: "sky", shortDescription: "守护公共区域，也需要权衡覆盖和维护。", description: "管理关键点位覆盖和设备在线率，用有限资金保障真正重要的公共区域。", commonEvents: ["摄像头离线", "监控盲区", "夜间治安", "设备老化"], metrics: ["设备健康度", "预算", "满意度"] },
  { id: "playground", name: "儿童活动区", icon: "playground", gradient: "coral", shortDescription: "承载社区活力，也考验安全和噪声平衡。", description: "维护游乐设施与场地卫生，在儿童需求和周边住户的安静诉求间找到平衡。", commonEvents: ["设施损坏", "噪音投诉", "安全隐患", "清洁维护"], metrics: ["满意度", "投诉量", "预算"] },
  { id: "charging", name: "充电桩", icon: "charging", gradient: "mint", shortDescription: "面向未来的便利设施，背后是容量与安全压力。", description: "安排建设批次、巡检频率和使用规则，回应不断增长的充电需求。", commonEvents: ["排队冲突", "充电故障", "违规占位", "消防风险"], metrics: ["预算", "设备健康度", "投诉量"] },
];
