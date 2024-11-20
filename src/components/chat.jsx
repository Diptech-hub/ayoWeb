import "../styles/chat.css";
import { motion } from "framer-motion";

function Chat() {
  return (
    <div className="chat">
      <p>Ready for your next project?</p>
      {/*eslint-disable-next-line react/no-unescaped-entities*/}
      <h1> LET'S CHAT</h1>
      <motion.button 
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}>
        <a
          href="mailto:corporatetunmise@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          corporatetunmise@gmail.com
        </a>
      </motion.button>
    </div>
  );
}

export default Chat;
