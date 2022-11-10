/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengtMeter = ({ password }) => {
	const testResult = zxcvbn(password);
	const score = (testResult.score * 100) / 4;

	const [passwordValidity, setPasswordValidity] = useState({
		minLength: null,
		minLowerCase: null,
		minUpperCase: null,
		minNumber: null,
		minSpecSymbol: null,
	});

	const isNumberRegex = /\d/;
	const oneLowerCase = /^(?=.*?[a-z])/;
	const oneUpperCase = /^(?=.*?[A-Z])/;
	const specialCharacterRegex = /[ !@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/;

	useEffect(() => {
		setPasswordValidity({
			minLength: password?.length >= 8,
			minLowerCase: !!oneLowerCase.test(password),
			minUpperCase: !!oneUpperCase.test(password),
			minNumber: !!isNumberRegex.test(password),
			minSpecSymbol: !!specialCharacterRegex.test(password),
		});
	}, [password]);

	const PasswordStrengthindicatorItem = ({ isValid, text }) => {
		return <li style={{ color: isValid ? "green" : "red" }}>{text}</li>
	}

	const funcProgressColor = () => {
		switch (testResult.score) {
			case 0:
				return '#828282';
			case 1:
				return '#EA1111';
			case 2:
				return '#FFAD00';
			case 3:
				return '#9BC158';
			case 4:
				return '#00B500';
			default:
				return 'none';
		}
	}

	const funcProgressLabel = () => {
		switch (testResult.score) {
			case 0:
				return 'Sangat Lemah';
			case 1:
				return 'Lemah';
			case 2:
				return 'Normal';
			case 3:
				return 'Kuat';
			case 4:
				return 'Sangat Kuat';
			default:
				return 'none';
		}
	}

	const changePasswordColor = () => ({
		width: `${score}%`,
		background: `${funcProgressColor()}`,
		height: '7px'
	})
	return (
		<>
			<div>
				<span>Kekuatan Password: {funcProgressLabel()}</span>
			</div>
			<div className="progress" style={{ height: '7px' }}>
				<div className="progress-bar" style={changePasswordColor()}></div>
			</div>
			<div>
				Password harus berisi:
			</div>
			<ul>
				<PasswordStrengthindicatorItem
					text="Minimal 8 karakter"
					isValid={passwordValidity?.minLength}
				/>
				<PasswordStrengthindicatorItem
					text="Minimal satu karakter huruf kecil"
					isValid={passwordValidity?.minLowerCase}
				/>
				<PasswordStrengthindicatorItem
					text="Minimal satu karakter huruf besar"
					isValid={passwordValidity?.minUpperCase}
				/>
				<PasswordStrengthindicatorItem
					text="Minimal satu karakter angka"
					isValid={passwordValidity?.minNumber}
				/>
				<PasswordStrengthindicatorItem
					text="Minimal satu spesial karakter"
					isValid={passwordValidity?.minSpecSymbol}
				/>
			</ul>
		</>
	)
}

export default PasswordStrengtMeter;
