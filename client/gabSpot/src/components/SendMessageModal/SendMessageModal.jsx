import { useContext, useState } from "react";
import styles from "./SendMessageModal.module.css";
import { sendMessage } from "../../services/messageService";
import AuthContext from "../../contexts/AuthContext";

function SendMessageModal({ closeMessageModal, user }) {
    const { userId } = useContext(AuthContext);

    const [formValue, setFormValue] = useState({
        from: userId,
        to: user._id,
        username: user.username,
        content: "",
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

    const onSubmit = async (e) => {
        e.preventDefault();
        if (formValue.content === "") {
            return;
        }
        try {
            console.log(formValue);

            const res = await sendMessage(formValue);
            console.log(res);

            closeMessageModal();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className={styles.modalOverlay} onClick={closeMessageModal}>
                <div className={styles.modalContent} onClick={stopPropagation}>
                    <h4>Send message</h4>
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="username">To</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                readOnly
                                value={formValue.username}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="content">Message</label>
                            <textarea
                                type="text"
                                id="content"
                                name="content"
                                value={formValue.content}
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
