import Arrow from "./Arrow";

export default function Footer() {
    return (
        <div className="footer">
            <div className="interest">Interested in working on something together?</div>
            <div className="chat-container">
                <Arrow />
                <div className="chat-text">LET'S CHAT</div>
            </div>
        </div>
    )
}