import styles from "./DeleteModal.module.css";
function DeleteModal({ onCancel, onConfirm }) {
    return (
        <div className={styles.modalOverlay} onClick={onCancel}>
            <div className={styles.modalContent}>
                <h3>Confirm Deletion</h3>
                <p>Are you sure you want to delete this post?</p>
                <div className={styles.modalActions}>
                    <button className={styles.cancelBtn} onClick={onCancel}>
                        Cancel
                    </button>
                    <button className={styles.confirmBtn} onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
