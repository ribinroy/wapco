import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Membership from './views/membership/Membership';
import UserAccount from './views/userAccount/UserAccount';
import Gateway from './views/gateway/Gateway';
import Locations from './views/locations/Locations';
import Things from './views/things/Things';
import UsersAccount from './views/usersAccounts/UsersAccounts';
function App() {
	return (
		<div className='app'>
			<Switch>
				<Route path='/membership' exact component={Membership} />
				<Route path='/my-account' exact component={UserAccount} />
				<Route path='/gateway' exact component={Gateway} />
				<Route path='/locations' exact component={Locations} />
				<Route path='/things' exact component={Things} />
				<Route path='/users' exact component={UsersAccount} />
			</Switch>
		</div>
	);
}

export default App;
