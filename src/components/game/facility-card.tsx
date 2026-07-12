import { BatteryCharging, Boxes, Camera, CarFront, CircleParking, Dumbbell, Gauge, PackageOpen } from "lucide-react";
import type { Facility } from "@/types";

const icons = {
  elevator: Boxes,
  parking: CircleParking,
  locker: PackageOpen,
  camera: Camera,
  playground: Dumbbell,
  charging: BatteryCharging,
};

export function FacilityCard({ facility, expandable = false }: { facility: Facility; expandable?: boolean }) {
  const Icon = icons[facility.icon];
  const content = (
    <>
      <div className="facility-title-row">
        <span className={`facility-icon gradient-${facility.gradient}`} aria-hidden="true"><Icon size={22} /></span>
        <div><p className="card-kicker">社区设施</p><h3>{facility.name}</h3></div>
      </div>
      <p className="facility-summary">{facility.shortDescription}</p>
      <p>{facility.description}</p>
      <div className="facility-meta"><span><Gauge size={15} />影响指标</span><ul className="chip-list">{facility.metrics.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="facility-meta"><span><CarFront size={15} />常见事件</span><ul className="chip-list event-chips">{facility.commonEvents.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </>
  );
  return expandable ? <details className="facility-card facility-expand" id={facility.id}><summary><span>{facility.name}</span><small>展开详情</small></summary>{content}</details> : <article className="facility-card" id={facility.id}>{content}</article>;
}
