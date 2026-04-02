import RobotProfileImage from "../assets/robot.png";  //default import, i.e an import without the curly bracket
import userProfileImage from "../assets/user.png";
import "./ChatMessage.css"


export function ChatMessage({ message, sender }) {
  /* const {message, sender} = props;
     const message = props.message;
   const sender = props.sender;
  */
  /* 
 if (sender === "robot") {
    return (
      <div>
        <img src="robot.png" width="32" />
        {message}
      </div>
    );
  } 
*/ 
  return (
    <>
      <div
        className={
          sender === "user" ? "chat-message-user" : "chat-message-robot"
        }
      >
        {/* the brackets of img below is just so that we can put it the code in multiple lines else we dont need the bracket */}
        {sender === "robot" && (
          <img src={RobotProfileImage} className="chat-message-profile" />
        )}
        <div className="chat-message-text">{message}</div>
        {sender === "user" && (
          <img src={userProfileImage} className="chat-message-profile" />
        )}
      </div>
    </>
  );
}