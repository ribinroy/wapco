import React from 'react';
import { TopBar } from '../../layout';
import { SearchInput, Table, Checkbox, TrashIcon, Avatar } from 'evergreen-ui';
import classes from './UsersAccounts.module.css';
import { Link } from 'react-router-dom';

function UsersAccounts() {
	const users = [
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
		{
			email: 'info@the.ee',
			firstName: 'Thomas',
			lastName: 'Tasuja',
			phone: '+372 58150783',
			role: 'USER',
		},
	];
	return (
		<div>
			<>
				<TopBar heading='User Accounts' subHeading="Change User Priviliges" icon='fa fa-2x fa-user-o' />
				<div className={classes.users__wrapper}>
					<div className={classes.users__heading}>
						<h4>Users</h4>
						<div className={classes.search__bar}>
							<SearchInput placeholder='Search...' />
						</div>
					</div>
					{/* {table start} */}
					<div className={classes.users__table}>
						<Table>
							<Table.Head height={50} backgroundColor='#fff'>
								<Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0} />
								<Table.TextHeaderCell flexBasis={70} flexShrink={0} flexGrow={0} />
								<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
									Email
								</Table.TextHeaderCell>
								<Table.TextHeaderCell className={classes.column}>First Name</Table.TextHeaderCell>
								<Table.TextHeaderCell className={classes.column}>Last Name</Table.TextHeaderCell>
								<Table.TextHeaderCell className={classes.column}>Phone</Table.TextHeaderCell>
								<Table.TextHeaderCell className={classes.column}>Role</Table.TextHeaderCell>
								<Table.TextHeaderCell className={classes.column}>Action</Table.TextHeaderCell>
								<Table.TextHeaderCell className={classes.column}></Table.TextHeaderCell>
							</Table.Head>
							<Table.Body height={'auto'} backgroundColor='#fff'>
								{users.map((user, id) => (
									<Table.Row key={id}>
										<Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}>
											<Checkbox />
										</Table.TextCell>
										<Table.TextCell flexBasis={70} flexShrink={0} flexGrow={0}>
											<Avatar className={classes.avatar} isSolid name={`${user.firstName} ${user.lastName}`} size={25} />
										</Table.TextCell>
										<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
											<span style={{ cursor: 'pointer' }}>{user.email}</span>
										</Table.TextCell>
										<Table.TextCell className={classes.tbl__column}>{user.firstName}</Table.TextCell>
										<Table.TextCell className={classes.tbl__column} isNumber>
											{user.lastName}
										</Table.TextCell>
										<Table.TextCell className={classes.tbl__column}>{user.phone}</Table.TextCell>

										<Table.TextCell className={classes.tbl__column}>
											<span className={[user.role === 'USER' ? classes.user : classes.admin].join(' ')}>{user.role}</span>
										</Table.TextCell>
										<Table.TextCell className={classes.tbl__column}>
											<Link className={classes.resolve__btn}>Change Role</Link>
										</Table.TextCell>
										<Table.TextCell>
											<button className={classes.delete__btn}>
												<span>
													<TrashIcon height={12} />
												</span>
												&nbsp;
												<span>Delete</span>
											</button>
										</Table.TextCell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</div>
					{/* {table end} */}
				</div>
			</>
		</div>
	);
}

export default UsersAccounts;
