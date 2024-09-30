import Arrow from "./Arrow";
import { socials } from "./data";
import { HandleDownload } from "../components/HandleDownload.tsx";  // Make sure this is the correct path

export default function Footer() {
  return (
    <div className="footer">
      <div className="interest">Interested in working on something together?</div>
      <div className="chat-container">
        <Arrow />
        <div className="chat-text">LET'S CHAT</div>
      </div>
      <div className="socials-container">
        {socials.map((account, index) => (
          <div className="account" key={index}>
            <div className="account-platform">{account.platform}</div>
            {account.link === 'resume' ? (
              <button className={`account-handle ${account.platform}`} onClick={HandleDownload}>
                {account.handle}
              </button>
            ) : (
              <a 
                className={`account-handle ${account.platform}`} 
                href={account.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {account.handle}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}