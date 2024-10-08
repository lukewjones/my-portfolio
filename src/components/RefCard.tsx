import type { Reference } from './data.tsx';

export default function RefCard(props: Reference) {
  return (
    <div className="card">
      <div className="ref-desc">{props.description}</div>
      <div className="ref-name">{props.name}</div>
      <div className="ref-affil">{props.affiliation}</div>
    </div>
  );
}
