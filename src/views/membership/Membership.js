import React, { useState } from 'react';
import classes from './Membership.module.css';
import { Pane, Tablist, Tab, Paragraph, TextInput, Button , Checkbox} from 'evergreen-ui';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function Membership() {
	const tabs = ['Log in', 'Sign up'];
	const [selectedTab, setSelectedTab] = useState({
		selectedIndex: 0,
	});
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});
	const [signupForm, setSignUpForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
        password: '',
        terms:true,
		confirmPassword: '',
	});
	const responseGoogle = (response) => {
		console.log(response);
	};

	const responseFacebook = (response) => {
		console.log(response);
	};

	const loginFormChangeHandler = (e) => {
		const { name, value } = e.target;
		setLoginForm({
			[name]: value,
		});
	};

	const signUpFormChangeHandler = (e) => {
        if(e.target.checked){
            const { name, checked } = e.target;
            setSignUpForm({
                [name]: checked,
            });
        }else{
            const { name, value } = e.target;
            setSignUpForm({
                [name]: value,
            });
        }
    };
    const signupSubmitHandler = (e) => {
        e.preventDefault()
    }
    const loginSubmitHandler = (e) => {
        e.preventDefault()
    }
	return (
		<div className={classes.membership__wrapper}>
			<div className={classes.logo}>
				<h3>
					WAP<span className={classes.logo__img}></span>CO
				</h3>
			</div>
			<div className={classes.membership__form__wrapper}>
				<div className={classes.form__heading}>
					<div classname={classes.heading}>
						<h2>{tabs[selectedTab.selectedIndex]}</h2>
					</div>
					<div className={classes.tab__btn_group}>
						<Pane height={'auto'}>
							<Tablist flexBasis={240}>
								{tabs.map((tab, index) => (
									<Tab className={classes.tabs__btn} key={tab} id={tab} onSelect={() => setSelectedTab({ selectedIndex: index })} isSelected={index === selectedTab.selectedIndex} aria-controls={`panel-${tab}`}>
										{tab}
									</Tab>
								))}
							</Tablist>
						</Pane>
					</div>
				</div>
				<div className={classes.form__body}>
					<Pane padding={0} background='white' flex='1'>
						<Pane className={classes.panel__login} id={`panel-${tabs[0]}`} role='tabpanel' aria-labelledby={tabs[0]} aria-hidden={0 !== selectedTab.selectedIndex} display={0 === selectedTab.selectedIndex ? 'block' : 'none'}>
							<FacebookLogin
								appId='1088597931155576'
								autoLoad
								callback={responseFacebook}
								render={(renderProps) => (
									<button className={[classes.social__btn, classes.btn__fb].join(' ')} onClick={renderProps.onClick}>
										<span className={classes.social__icon}>
											<i className='fa fa-facebook'></i>
										</span>
										<span className={classes.btn__txt}>Continue with Facebook</span>
									</button>
								)}
							/>
							<GoogleLogin
								clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
								render={(renderProps) => (
									<button className={[classes.social__btn, classes.btn__gle].join(' ')} onClick={renderProps.onClick} disabled={renderProps.disabled}>
										<span className={classes.social__icon}>
											<svg width='18' height='18' xmlns='http://www.w3.org/2000/svg'>
												<g fill='#000' fill-rule='evenodd'>
													<path d='M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z' fill='#EA4335'></path>
													<path d='M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z' fill='#4285F4'></path>
													<path d='M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z' fill='#FBBC05'></path>
													<path d='M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z' fill='#34A853'></path>
													<path fill='none' d='M0 0h18v18H0z'></path>
												</g>
											</svg>
										</span>
										<span className={classes.btn__txt}>Sign in with Google</span>
									</button>
								)}
								buttonText='Login'
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>

							<Paragraph className={classes.divider__or}>Or</Paragraph>
							<form onSubmit={loginSubmitHandler} className={classes.login__form}>
								<div className={classes.form__input}>
									<TextInput value={loginForm.email} onChange={loginFormChangeHandler} type='email' height={30} name='email' placeholder='Email' />
								</div>
								<div className={classes.form__input}>
									<TextInput value={loginForm.password} onChange={loginFormChangeHandler} height={30} type='password' name='password' placeholder='Password' />
								</div>
								<Button height={40} appearance='primary' marginRight={16} intent='success'>
									Continue
								</Button>
							</form>
							<p className={classes.forgot__password}>
								<a href='forgot-password'>Forgot password</a>
							</p>
						</Pane>

						<Pane id={`panel-${tabs[1]}`} role='tabpanel' aria-labelledby={tabs[1]} aria-hidden={1 !== selectedTab.selectedIndex} display={1 === selectedTab.selectedIndex ? 'block' : 'none'}>
							<FacebookLogin
								appId='1088597931155576'
								autoLoad
								callback={responseFacebook}
								render={(renderProps) => (
									<button className={[classes.social__btn, classes.btn__fb].join(' ')} onClick={renderProps.onClick}>
										<span className={classes.social__icon}>
											<i className='fa fa-facebook'></i>
										</span>
										<span className={classes.btn__txt}>Continue with Facebook</span>
									</button>
								)}
							/>
							<GoogleLogin
								clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
								render={(renderProps) => (
									<button className={[classes.social__btn, classes.btn__gle].join(' ')} onClick={renderProps.onClick} disabled={renderProps.disabled}>
										<span className={classes.social__icon}>
											<svg width='18' height='18' xmlns='http://www.w3.org/2000/svg'>
												<g fill='#000' fill-rule='evenodd'>
													<path d='M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z' fill='#EA4335'></path>
													<path d='M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z' fill='#4285F4'></path>
													<path d='M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z' fill='#FBBC05'></path>
													<path d='M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z' fill='#34A853'></path>
													<path fill='none' d='M0 0h18v18H0z'></path>
												</g>
											</svg>
										</span>
										<span className={classes.btn__txt}>Sign in with Google</span>
									</button>
								)}
								buttonText='Login'
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>

							<Paragraph className={classes.divider__or}>Or</Paragraph>
							<form onSubmit={signupSubmitHandler} className={classes.login__form}>
								<div className={[classes.form__input, classes.form__input__signup].join(' ')}>
									<TextInput value={signupForm.firstName} onChange={signUpFormChangeHandler} type='text' height={30} name='firstName' placeholder='First Name' />
                                    <TextInput value={signupForm.lastName} onChange={signUpFormChangeHandler} type='text' height={30} name='lastName' placeholder='Last Name' />
								</div>
								<div className={classes.form__input}>
									<TextInput value={signupForm.email} onChange={signUpFormChangeHandler} type='email' height={30} name='email' placeholder='Email' />
								</div>
								<div className={classes.form__input}>
									<TextInput value={signupForm.phone} onChange={signUpFormChangeHandler} type='text' height={30} name='phone' placeholder='Phone' />
								</div>
								<div className={classes.form__input}>
									<TextInput value={signupForm.password} onChange={signUpFormChangeHandler} height={30} type='password' name='password' placeholder='Password' />
								</div>
								<div className={classes.form__input}>
									<TextInput value={signupForm.confirmPassword} onChange={signUpFormChangeHandler} height={30} type='password' name='confirmPassword' placeholder='Confirm Password' />
								</div>
                                <div className={[classes.form__input, classes.terms__checkbox].join(' ')}>
                                    <Checkbox name="terms" checked={signupForm.terms} onChange={signUpFormChangeHandler} label="I agree with wapco " /><a href="terms">Terms of services</a>
								</div>
								<Button height={40} appearance='primary' marginRight={16} intent='success'>
									Create Account
								</Button>
							</form>
						</Pane>
					</Pane>
				</div>
			</div>
		</div>
	);
}

export default Membership;
