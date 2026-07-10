import type { Facility } from "@/types";

type FacilityCardProps = {
  facility: Facility;
  detailed?: boolean;
};

export function FacilityCard({ facility, detailed = false }: FacilityCardProps) {
  return (
    <article className={`facility-card tone-${facility.tone}`} id={facility.slug}>
      <div className="facility-title-row">
        <span className="facility-icon" aria-hidden="true">
          {facility.icon}
        </span>
        <div>
          <p className="card-kicker">社区设施</p>
          <h3>{facility.name}</h3>
        </div>
      </div>
      <p className="facility-summary">{facility.summary}</p>
      {detailed ? <p>{facility.description}</p> : null}
      <ul className="chip-list" aria-label={`${facility.name}关注指标`}>
        {facility.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {detailed ? (
        <div className="event-callout">
          <strong>可能发生的事</strong>
          <p>{facility.event}</p>
        </div>
      ) : null}
    </article>
  );
}
