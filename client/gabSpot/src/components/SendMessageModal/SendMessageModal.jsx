import styles from "./SendMessageModal.module.css";

function SendMessageModal({ closeMessageModal }) {
    return (
        <>
            <div className={styles.modalOverlay} onClick={closeMessageModal}>
                <div className={styles.modalContent}>
                    <h4>Send message</h4>
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="to">To</label>
                            <input type="text" id="to" readOnly value="Stoqn" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea type="text" id="message" />
                        </div>
                        <button className={styles.submitBtn}>Send</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SendMessageModal;
