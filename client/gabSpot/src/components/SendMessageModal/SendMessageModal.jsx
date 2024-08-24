import { useState } from "react";
import styles from "./SendMessageModal.module.css";

function SendMessageModal({ closeMessageModal, user }) {
    const [formValue, setFormValue] = useState({
        to: user.username,
        message: "",
    });

    const changeHandler = (e) => {
        setFormValue((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formValue);
        closeMessageModal();
    };
    return (
        <>
            <div className={styles.modalOverlay} onClick={closeMessageModal}>
                <div className={styles.modalContent} onClick={stopPropagation}>
                    <h4>Send message</h4>
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="to">To</label>
                            <input
                                type="text"
                                name="to"
                                id="to"
                                readOnly
                                value={formValue.to}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                value={formValue.message}
                                onChange={changeHandler}
                            />
                        </div>
                        <button className={styles.submitBtn} onClick={onSubmit}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SendMessageModal;
