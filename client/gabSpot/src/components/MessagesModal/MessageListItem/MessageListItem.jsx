import styles from "./MessageListItem.module.css";

function MessageListItem({ message }) {
    return (
        <>
            <div className={styles.messageContainer}>
                <h5>From: {message.from.username}</h5>
                <p>{message.content}</p>
            </div>
        </>
    );
}

export default MessageListItem;
