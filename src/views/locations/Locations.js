import React from 'react';
import { TopBar } from '../../layout';
import { Pane, MoreIcon, Button } from 'evergreen-ui';
import classes from './Locations.module.css';
import LocationImg from '../../assets/icn-location.svg';

function Locations() {
	const locations = [
		{
			title: 'All',
			address: '',
			totalSensors: 1000,
			online: 989,
			offline: 11,
			allarms: 3,
		},
		{
			title: 'Sofeltech',
			address: 'Runeberginkatu 19, 48200 Kotka Finland',
			totalSensors: 500,
			online: 489,
			offline: 11,
			allarms: 3,
		},
		{
			title: 'Clarion Hotel',
			address: 'Tyynenmerenkatu 2, Helsinki, Finland',
			totalSensors: 500,
			online: 489,
			offline: 11,
			allarms: 0,
		},
	];

	return (
		<div className={classes.location__wrapper}>
			<TopBar heading='Locations' subHeading='Select installation location' img={LocationImg} customBtn='addGateWay' />

			<Pane clearfix className={classes.locations}>
				{locations.map((loc, id) => (
					<Pane key={id} elevation={0} className={classes.cards}>
						<div className={classes.card__header}>
							<span className={classes.location__icon}>
								<img src={LocationImg} alt='location icon' />
							</span>
							<span className={classes.more__icon}>
								<Button appearance='minimal'>
									<MoreIcon />
								</Button>
							</span>
						</div>
						<div className={classes.title}>
							<h2>{loc.title}</h2>
							<h4>{loc.address}</h4>
						</div>
						<div className={classes.location__info}>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>Total sensors</span>
								<span className={classes.location__inof__value}>{loc.totalSensors}</span>
							</div>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>Online</span>
								<span className={[classes.location__inof__value, classes.location__info__online].join(' ')}>{loc.online}</span>
							</div>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>offline</span>
								<span className={[classes.location__inof__value, classes.location__info__offline].join(' ')}>{loc.offline}</span>
							</div>
							<div className={classes.location__info__box}>
								<span className={classes.location__inof__heading}>Alarms</span>
								<span className={classes.location__inof__value}>{loc.allarms}</span>
							</div>
						</div>
                        <div className={classes.view__location__button}>
                            <Button>View</Button>
                        </div>
					</Pane>
				))}
			</Pane>
		</div>
	);
}

export default Locations;
