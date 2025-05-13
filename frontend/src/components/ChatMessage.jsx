export default function ChatMessage({ role, text }) {
    return (
      <div className={`chat-message ${role}`}>
        <div className="bubble">{text}</div>
      </div>
    );
  }
  