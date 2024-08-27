import { useState } from "react";

export const useShowMessages = () => {
    const [showMessages, setShowMessages] = useState(false);

    const showMessagesHandler = () => {
        setShowMessages((state) => true);
    };

    const hideMessagesHandler = () => {
        setShowMessages((state) => false);
    };

    return { showMessages, showMessagesHandler, hideMessagesHandler };
};
