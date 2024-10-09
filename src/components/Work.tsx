import { projects } from "./data";

export default function Work() {
    function caps(word: string) {
       return word.toUpperCase()
    }

    return (
        <div className="work">
            <div className="title">WORK</div>
            <div className="work-container">
                {projects.map((proj, index) => (
                    <div className="proj" key={index}>
                        <img className="proj-img" src={proj.img} alt={proj.name} />
                        <div className="proj-name">{proj.name}</div>
                        <div className={`proj-type ${proj.type}`}>{caps(proj.type)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}