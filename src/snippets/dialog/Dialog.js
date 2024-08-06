import React, { useState } from 'react';
import Dialogs from './dialogcomponent/Dialogs';

function Dialog() {
    const [dialog, setDialog] = useState(false);

    const handleClick = () => {
        setDialog(true);
    }

    const handleCancel = () => {
        setDialog(false);
    }

    const handleOk = () => {
        setDialog(false);
        // Do something
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button
                onClick={handleClick}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
            >
                Show Dialog
            </button>
            {dialog ? <Dialogs onCancel={handleCancel} onOk={handleOk} message="This is a message" /> : null}
        </div>
    );
}

export default Dialog;
