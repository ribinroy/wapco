import React, { useState } from 'react';
import { TopBar } from '../../layout';
import { SearchInput, Table, Checkbox, TrashIcon, Button, AddIcon, Pane, Dialog, Combobox } from 'evergreen-ui';
import classes from './Things.module.css';
import GateImg from '../../assets/icn-sensor.svg';
import { useParams, Link } from 'react-router-dom';

function Things() {
	const [selectedThing, setSelectedThing] = useState({});
	const [showDialogue, setShowDialogue] = useState(false);
	const params = useParams();
	console.log(params);

	const data = [
		{
			serialNr: 'GW-0000001',
			model: 'Wapco-Gateway-1',
			hwVer: '1.1.2',
			swVer: '0.1.7',
			numberOfSensors: 150,
			lastSeen: '8/30/2020, 2:00:18 AM',
			online: 'OK',
			offline: '11',
			onlineSensor: '989',
			totalSensor: '1000',
			totalAlarms: 3,
			alarms: [
				{
					serialNr: 'HUM-000000001',
					parameter: 'SOC',
					type: 'Min',
					treshold: 10,
					active: 'YES',
				},
				{
					serialNr: 'HUM-000000001',
					parameter: 'SOC',
					type: 'Min',
					treshold: 10,
					active: 'NO',
				},
			],
			sensors: [
				{
					name: 'Vent room sensor',
					serialNr: 'WSU2-000000001',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					online: 'OK',
				},
				{
					name: 'Room 211 sensor',
					serialNr: 'WSU2-000000002',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					model: 'Wapco-Gateway-2',
					online: 'OK',
				},
				{
					name: 'Office sensor',
					serialNr: 'WSU2-000000003',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					online: 'NO',
				},
				{
					name: 'Gym sensor',
					serialNr: 'WSU2-000000004',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					online: 'NO',
				},
			],
		},
		{
			serialNr: 'GW-0000002',
			numberOfSensors: 15,
			swVer: '0.1.7',
			lastSeen: '8/30/2020, 2:00:18 AM',
			online: 'OK',
			totalAlarms: 0,
			offline: '3',
			onlineSensor: '497',
			totalSensor: '500',
			model: 'Wapco-Gateway-2',
			hwVer: '1.1.2',
			alarms: [
				{
					serialNr: 'HUM-000000001',
					parameter: 'SOC',
					type: 'Min',
					treshold: 10,
					active: 'YES',
				},
			],
			sensors: [
				{
					name: 'Room 211 sensor',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					online: 'OK',
				},
			],
		},
		{
			serialNr: 'GW-0000003',
			numberOfSensors: 60,
			swVer: '0.1.7',
			lastSeen: '8/30/2020, 2:00:18 AM',
			online: 'NO',
			totalAlarms: 0,
			offline: '3',
			onlineSensor: '497',
			totalSensor: '500',
			model: 'Wapco-Gateway-3',
			hwVer: '1.1.3',
			alarms: [
				{
					serialNr: 'HUM-000000001',
					parameter: 'SOC',
					type: 'Min',
					treshold: 10,
					active: 'YES',
				},
			],
			sensors: [
				{
					name: 'Office sensor',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					online: 'OK',
				},
			],
		},
		{
			serialNr: 'GW-0000004',
			swVer: '0.1.7',
			lastSeen: '8/30/2020, 2:00:18 AM',
			online: 'OK',
			totalAlarms: 0,
			numberOfSensors: 10,
			offline: '5',
			onlineSensor: '495',
			totalSensor: '500',
			model: 'Wapco-Gateway-4',
			hwVer: '1.1.4',
			alarms: [],
			sensors: [
				{
					name: 'Gym sensor',
					type: 'WSU2',
					par1: 'RSS1',
					par1Value: -60,
					par2: 'SOC',
					par2Value: '5%',
					par3: 'HUM..',
					par3Value: '70%',
					par4: 'Temp',
					par4Value: '23C',
					online: 'OK',
				},
			],
		},
	];

	return (
		<div>
			{Object.keys(selectedThing).length === 0 ? (
				<>
					<TopBar heading='Sofeltech' img={GateImg} />
					<div className={classes.things__wrapper}>
						<div className={classes.things__heading}>
							<h4>Sensors</h4>
							<div className={classes.search__bar}>
								<SearchInput placeholder='Search...' />
							</div>
						</div>
						{/* {table start} */}
						<div className={classes.things__table}>
							<Table>
								<Table.Head height={50} backgroundColor='#fff'>
									<Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0} />
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Serial nr.
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Number of sensors
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Alarms
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										SW ver.
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Last seen
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Online
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Actions
									</Table.TextHeaderCell>
								</Table.Head>
								<Table.Body height={'auto'} backgroundColor='#fff'>
									{data.map((thing, id) => (
										<Table.Row key={id}>
											<Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}>
												<Checkbox />
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
												<span style={{ cursor: 'pointer' }} onClick={() => setSelectedThing(thing)}>
													{thing.serialNr}
												</span>
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
												{thing.numberOfSensors}
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0} isNumber>
												{thing.totalAlarms}
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
												{thing.swVer}
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
												{thing.lastSeen}
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
												<span className={[thing.online === 'OK' ? classes.online : classes.offline].join(' ')}>{thing.online}</span>
											</Table.TextCell>
											<Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
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
			) : (
				<>
					<TopBar heading={`Sofeltech / ${selectedThing.serialNr} `} selectedThing={selectedThing} img={GateImg} />
					<div className={classes.things__wrapper}>
						<div className={classes.things__heading}>
							<h4>Sensors</h4>
							<div className={classes.search__bar}>
								<SearchInput placeholder='Search...' />
							</div>
						</div>

						<div className={classes.things__table}>
							<Table>
								<Table.Head height={50} backgroundColor='#fff'>
									<Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0} />
									<Table.TextHeaderCell className={classes.column} flexBasis={150} flexShrink={0} flexGrow={0}>
										Name
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column} flexBasis={150} flexShrink={0} flexGrow={0}>
										Serial nr.
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Type</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Online</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Par 1</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Value</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Par 2</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Value</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Par 3</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Value</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Par 4</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Value</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Actions</Table.TextHeaderCell>
								</Table.Head>
								<Table.Body height={'auto'} backgroundColor='#fff'>
									{selectedThing &&
										selectedThing?.sensors?.map((thing, id) => (
											<Table.Row key={id}>
												<Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}>
													<Checkbox />
												</Table.TextCell>
												<Table.TextCell className={classes.tbl__column} flexBasis={150} flexShrink={0} flexGrow={0}>
													{thing.name}
												</Table.TextCell>
												<Table.TextCell className={classes.tbl__column} flexBasis={150} flexShrink={0} flexGrow={0}>
													<span>{thing.serialNr}</span>
												</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.type}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column} isNumber>
													<span className={[thing.online === 'OK' ? classes.online : classes.offline].join(' ')}>{thing.online}</span>
												</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par1}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par1Value}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par2}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par2Value}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par3}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par3Value}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par4}</Table.TextCell>
												<Table.TextCell className={classes.tbl__column}>{thing.par4}</Table.TextCell>
												<Table.TextCell>{thing.par4Value}</Table.TextCell>
												<Table.TextCell>
													<Link className={classes.resolve__btn}>Resolve</Link>
												</Table.TextCell>
											</Table.Row>
										))}
								</Table.Body>
							</Table>
						</div>

						<div className={classes.things__alarm__heading}>
							<h4>Alarms</h4>
							<div className={classes.add__alarm__btn__wrapper}>
								<Button onClick={() => setShowDialogue(true)} className={classes.customBtn}>
									<span className={classes.Icon}>
										<AddIcon style={{ height: '12px' }} />
									</span>
									<span>Add Alarm</span>
								</Button>
							</div>
						</div>

						<div className={classes.things__alarm__table}>
							<Table>
								<Table.Head height={50} backgroundColor='#fff'>
									<Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0} />
									<Table.TextHeaderCell className={classes.column} flexBasis={200} flexShrink={0} flexGrow={0}>
										Serial nr.
									</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Parameter</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Type</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Treshold</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Active</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}>Actions</Table.TextHeaderCell>
									<Table.TextHeaderCell className={classes.column}></Table.TextHeaderCell>
								</Table.Head>
								<Table.Body height={'auto'} backgroundColor='#fff'>
									{selectedThing.alarms.map((alarm, id) => (
										<Table.Row key={id}>
											<Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}>
												<Checkbox />
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column} flexBasis={200} flexShrink={0} flexGrow={0}>
												<span style={{ color: '#000', fontWeight: 'bold' }}>{alarm.serialNr}</span>
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column}>{alarm.parameter}</Table.TextCell>
											<Table.TextCell className={classes.tbl__column}>{alarm.type}</Table.TextCell>
											<Table.TextCell className={classes.tbl__column}>{alarm.treshold}</Table.TextCell>
											<Table.TextCell className={classes.tbl__column}>
												<span className={[alarm.active === 'YES' ? classes.online : classes.offline].join(' ')}>{alarm.active}</span>
											</Table.TextCell>
											<Table.TextCell className={classes.tbl__column}>
												<Link className={classes.resolve__btn}>Resolve</Link>
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
					</div>
					<Pane>
						<Dialog width={350} isShown={showDialogue} title='Add Alarm' hasFooter={false} onCloseComplete={() => setShowDialogue(false)}>
							<div className={classes.add__alarm__form}>
								<form>
									<div className={classes.form__group}>
										<label>Select a serial nr.</label>
										<Combobox
											width={'100%'}
											items={['Banana', 'Orange', 'Apple', 'Mango']}
											onChange={(selected) => console.log(selected)}
											placeholder='Serial Nr'
											autocompleteProps={{
												// Used for the title in the autocomplete.
												title: 'Serial Nr',
											}}
										/>
									</div>
									<div className={classes.form__group}>
										<label>Select parameter</label>
										<Combobox
											width={'100%'}
											items={['Banana', 'Orange', 'Apple', 'Mango']}
											onChange={(selected) => console.log(selected)}
											placeholder='Parameter'
											autocompleteProps={{
												// Used for the title in the autocomplete.
												title: 'Parameter',
											}}
										/>
									</div>
									<div className={classes.form__group}>
										<label>Select type</label>
										<Combobox
											width={'100%'}
											items={['Banana', 'Orange', 'Apple', 'Mango']}
											onChange={(selected) => console.log(selected)}
											placeholder='Type'
											autocompleteProps={{
												// Used for the title in the autocomplete.
												title: 'Type',
											}}
										/>
									</div>
									<div className={classes.form__group}>
										<label>Enter treshold</label>
										<Combobox
											width={'100%'}
											items={['Banana', 'Orange', 'Apple', 'Mango']}
											onChange={(selected) => console.log(selected)}
											placeholder='Treshold'
											autocompleteProps={{
												// Used for the title in the autocomplete.
												title: 'Treshold',
											}}
										/>
									</div>
									<div className={classes.dialgue__footer}>
										<Button onClick={() => setShowDialogue(false)}>Cancel</Button>
										<Button  className={classes.customBtn}>
											<span className={classes.Icon}>
												<AddIcon style={{ height: '12px' }} />
											</span>
											<span>Add Alarm</span>
										</Button>
									</div>
								</form>
							</div>
						</Dialog>
					</Pane>
				</>
			)}
		</div>
	);
}

export default Things;
