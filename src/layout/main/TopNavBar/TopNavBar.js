import React from 'react';
import classes from './TopNavBar.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Popover, Menu, Button, Position, Avatar, AddIcon, CogIcon } from 'evergreen-ui';
import HomeIcon from '../../../assets/icn-home.svg';
import ClockIcon from '../../../assets/icn-clock.svg';
function TopNavBar(props) {
	const history = useHistory();
	return (
		<div className={classes.top__bar__wrapper}>
			<div className={classes.top__bar}>
				<div className={classes.logo}>
					<h3>
						<Link to='/'>
							WAP<span className={classes.logo__img}></span>CO
						</Link>
					</h3>
				</div>
				<div className={classes.right__links}>
					<ul>
						<li>
							<Link to='/home'>
								<img src={HomeIcon} alt='home' />
								<span>Home</span>
							</Link>
						</li>
						<li>
							<Popover
								position={Position.BOTTOM_LEFT}
								content={
									<Menu>
										<Menu.Group>
											<Menu.Item onSelect={() => history.push('/membership')}>Membership</Menu.Item>
											<Menu.Item onSelect={() => history.push('/my-account')}>My Account</Menu.Item>
											<Menu.Item onSelect={() => history.push('/gateway')}>Gateway</Menu.Item>
											<Menu.Item onSelect={() => history.push('/locations')}>Locations</Menu.Item>
											<Menu.Item onSelect={() => history.push('/users')}>Users</Menu.Item>
											
										</Menu.Group>
										<Menu.Divider />
										<Menu.Group>
											<Menu.Item onSelect={() => history.push('Logout')} intent='danger'>
												Logout
											</Menu.Item>
										</Menu.Group>
									</Menu>
								}>
								<Button marginRight={16}>
									<Avatar isSolid name='User Name' size={25} /> <span>Username</span> <span className='fa fa-caret-down' aria-hidden='true'></span>
								</Button>
							</Popover>
						</li>
					</ul>
				</div>
			</div>
			<div className={classes.bottom__bar}>
				<div className={classes.page__heading}>
					{props.icon ? (
						<span className={classes.icon}>
							<i className={props.icon}></i>
						</span>
					) : null}
					{props.img ? (
						<span className={classes.icon}>
							<img src={props.img} alt='icon' />
						</span>
					) : null}
					<h2>{props.heading}</h2>
					{props.selectedThing ? (
						<div className={classes.setting__btn}>
							<Button>
								<CogIcon />
							</Button>
						</div>
					) : null}
					{props.subHeading ? <span className={classes.subHeading}>{props.subHeading}</span> : null}
				</div>
				<div className={classes.middle__items}>
					{props.selectedThing ? (
						<div className={classes.location__info}>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>Total sensors</span>
								<span className={classes.location__inof__value}>{props.selectedThing.totalSensor}</span>
							</div>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>Online</span>
								<span className={[classes.location__inof__value, classes.location__info__online].join(' ')}>{props.selectedThing.onlineSensor}</span>
							</div>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>offline</span>
								<span className={[classes.location__inof__value, classes.location__info__offline].join(' ')}>{props.selectedThing.offline}</span>
							</div>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>Alarms</span>
								<span className={classes.location__inof__value}>{props.selectedThing.totalAlarms}</span>
							</div>
						</div>
					) : null}
				</div>
				<div className={classes.back_link}>
					{props.customBtn ? (
						<Button className={classes.customBtn}>
							<span className={classes.Icon}>
								<AddIcon style={{ height: '12px' }} />
							</span>
							<span>Add Gateway</span>
						</Button>
					) : (
						<Button>Back</Button>
					)}
				</div>
				{props.selectedThing ? (
					<div className={classes.bottom__sub__bar}>
						<div className={classes.left__bar}>
							<span>Model:{props.selectedThing.model}</span>
							<span>HW ver:{props.selectedThing.hwVer}</span>
							<span>SW ver:{props.selectedThing.swVer}</span>
							<span>
								Online:<span className={[props.selectedThing.online === 'OK' ? classes.online : classes.offline].join(' ')}>{props.selectedThing.online}</span>
							</span>
						</div>
						<div className={classes.right__bar}>
							<span>
								<img src={ClockIcon} alt='clock' />
							</span>
							{props.selectedThing.lastSeen}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default TopNavBar;
