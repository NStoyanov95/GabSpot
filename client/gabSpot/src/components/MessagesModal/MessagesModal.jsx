import { useContext, useEffect, useState } from "react";
import styles from "./MessagesModal.module.css";
import AuthContext from "../../contexts/AuthContext";
import { getMessagesForUser } from "../../services/messageService";
import MessageListItem from "./MessageListItem/MessageListItem";

function MessagesModal({ hideMessagesHandler }) {
    const { userId } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getMessagesForUser(userId);
            setMessages(data);
        })();
    }, []);

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <>
            <div className={styles.modalOverlay} onClick={hideMessagesHandler}>
                <div className={styles.modalContent} onClick={stopPropagation}>
                    <div
                        className={styles.closeBtn}
                        onClick={hideMessagesHandler}
                    >
                        <button>X</button>
                    </div>
                    <h2>Messages</h2>
                    {messages.length <= 0 ? (
                        <h4>No messages yet!</h4>
                    ) : (
                        messages.map((message) => (
                            <MessageListItem
                                message={message}
                                key={message._id}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default MessagesModal;
