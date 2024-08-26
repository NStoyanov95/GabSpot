import styles from "./MessagesModal.module.css";
function MessagesModal() {
    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h2>Messsages</h2>
                    <div className={styles.messageContainer}>
                        <h5>Gosho:</h5>
                        <p>Hello, My name is Stoyan, nice to meet you!</p>
                    </div>
                    <div className={styles.messageContainer}>
                        <h5>Gosho:</h5>
                        <p>Hello, My name is Stoyan, nice to meet you!</p>
                    </div>
                    <div className={styles.messageContainer}>
                        <h5>Gosho:</h5>
                        <p>Hello, My name is Stoyan, nice to meet you!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MessagesModal;
