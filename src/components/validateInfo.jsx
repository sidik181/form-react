export default function validateInfo(values) {
	let errors = {}

	let regexpwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	let regexname = /^[A-Za-z]+$/;
	let regexemail = /^[A-Z0-9]._%+-)+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
	// let regexbirthday = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

	if (!values.fullName) {
		errors.fullName = "Nama harus diisi"
	} else if (!values.fullName.test(regexname)) {
		errors.fullName = "Hanya huruf yang diinputkan"
	}

	if (!values.username.trim()) {
		errors.username = "Username harus diisi"
	}

	if (!values.birthday) {
		errors.birthday = "Tanggal lahir harus diisi"
	}

	if (!values.address) {
		errors.username = "Alamat harus diisi"
	} else if (values.address.isNan(50)) {
		errors.address = "Minimal 50 karakter"
	}

	if (!values.email) {
		errors.email = "Email harus diisi"
	} else if (!values.email.test(regexemail)) {
		errors.email = "Email tidak valid"
	}

	if (!values.password) {
		errors.password = "Password harus diisi"
	} else if (!values.password.test(regexpwd)) {
		errors.password = "Password harus memiliki satu huruf dan satu angka "
	}

	return errors;
}