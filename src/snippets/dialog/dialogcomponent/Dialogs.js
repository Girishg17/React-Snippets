// Dialogs.js
import React from 'react';
import styles from './Dialogs.module.css';

function Dialogs({ onCancel, onOk, message }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{message}</div>
            <div className={styles.actions}>
                <button onClick={onCancel} className={`${styles.btn} ${styles.cancel}`}>Cancel</button>
                <button onClick={onOk} className={styles.btn}>Ok</button>
            </div>
        </div>
    );
}

export default Dialogs;
