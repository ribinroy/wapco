import React, { useState } from 'react';
import classes from './UserAccount.module.css';
import { TopBar } from '../../layout';
import { TextInputField, Button, Avatar } from 'evergreen-ui';
function UserAccount() {
	const [userAccountForm, setUserAccount] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});
	const acountChangeHandler = (e) => {
		const { name, value } = e.target;
		setUserAccount({
			[name]: value,
		});
	};
	return (
		<div>
			<TopBar heading='My Account' icon='fa fa-2x fa-user-o' />
			<div className={classes.user__account_wrapper}>
				<div className={classes.user_img}>
					<Avatar isSolid name='User Name' size={40} />
				</div>
				<form>
					<div className={classes.input__field_1}>
						<TextInputField label='First Name' name='firstName' required value={userAccountForm.firstName} onChange={acountChangeHandler} placeholder='First name' />
						<TextInputField label='Last Name' name='lastName' required value={userAccountForm.lastName} onChange={acountChangeHandler} placeholder='Last name' />
					</div>
					<div className={classes.input__field}>
						<TextInputField label='Email' name='email' required value={userAccountForm.email} onChange={acountChangeHandler} placeholder='Email@gmail.com' />
					</div>
					<div className={classes.input__field}>
						<TextInputField label='Phone' name='phone' required value={userAccountForm.phone} onChange={acountChangeHandler} placeholder='555660606' />
					</div>
					<Button>Apply</Button>
				</form>
			</div>
		</div>
	);
}

export default UserAccount;
