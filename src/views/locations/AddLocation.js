import React from 'react';
import {
    Pane,
    Dialog,
    Button,
    AddIcon,
    Menu,
    TextInputField,
} from 'evergreen-ui';
import classes from './Locations.module.css';

export default function AddLocation({ isShown, onClose, heading }) {
    return (
        <Pane>
            <Dialog
                isShown={isShown}
                title={heading}
                onCloseComplete={onClose}
                hasFooter={false}>
                <TextInputField label='Location Name' />
                <TextInputField label='Location Address' />
                <Menu.Divider />

                <div className={classes.footerWrap}>
                    <Button className={classes.customBtn}>
                        <span className={classes.Icon}>
                            <AddIcon style={{ height: '12px' }} />
                        </span>
                        <span>Add Location</span>
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </div>
            </Dialog>
        </Pane>
    );
}
