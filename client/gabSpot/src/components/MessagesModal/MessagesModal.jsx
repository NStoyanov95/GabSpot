import { useContext, useEffect, useState } from "react";
import styles from "./MessagesModal.module.css";
import AuthContext from "../../contexts/AuthContext";
import { getMessagesForUser } from "../../services/messageService";
import MessageListItem from "./MessageListItem/MessageListItem";
function MessagesModal() {
    const { userId } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getMessagesForUser(userId);
            setMessages(data);
            console.log(data);
        })();
    }, []);
    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h2>Messsages</h2>
                    {messages.length < 0
                        ? "No messages yet!"
                        : messages.map((message) => (
                              <MessageListItem
                                  message={message}
                                  key={message._id}
                              />
                          ))}
                </div>
            </div>
        </>
    );
}

export default MessagesModal;
