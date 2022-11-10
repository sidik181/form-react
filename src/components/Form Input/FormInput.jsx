/* eslint-disable jsx-a11y/anchor-is-valid */
import { useForm } from "react-hook-form"
import { useState } from "react"
import PasswordStrengthMeter from "../PasswordStrengthMeter"
import logo from "./images/logo.png"
import google from "./images/google-icon.svg"
import "./formInput.css"

const FormInput = () => {
	const [ password, setPassword ] = useState('');
	const [ passwordShown, setPasswordShown ] = useState(false);

	const { register,
		handleSubmit,
		formState: { errors },
		reset,
		trigger
	} = useForm();

	const onSubmit = (data) => {
		console.log(data)
		reset()
		alert("Pendaftaran Berhasil. Silakan Login!")
	}

	return (
		<section className="wrapper">
			<div className="container">
				<div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
					<div className="logo mb-4 mt-5 text-center">
						<img src={logo} className="img-fluid" alt="logo" />
					</div>
					<form className="rounded bg-white shadow p-5" onSubmit={handleSubmit(onSubmit)}>
						<h3 className="text-dark fw-bolder fs-4 mb-2 text-center">Form Pendaftaran Akun Baru</h3>
						<div className="fw-normal text-muted mb-4 text-center">
							Sign in <a href="#" className="text-primary fw-bold text-docaration-none">here</a>
						</div>

						<div className="text-center text-muted text-uppercase mb-2">or</div>

						<a href="#" className="btn btn-light login_with w-100 mb-4">
							<img src={google} className="img-fluid me-3" alt="google" />Sign in with Google
						</a>

						<div className="form-floating mb-3">
							<input type="text" className="form-control" name="fullName" id="fullName" placeholder="Nama lengkap" {...register("fullName", { required: "Nama harus diisi", pattern: { value: /^[A-Za-z ]+$/, message: "Hanya boleh huruf" } })} onKeyUp={() => { trigger("fullName"); }} />
							<label htmlFor="fullName">Nama Lengkap</label>
							{errors.fullName && (<small className="text-danger">{errors.fullName.message}</small>)}
						</div>
						<div className="form-floating mb-3">
							<input type="date" className="form-control" name="birthday" id="birthday" {...register("birthday", { required: "Tanggal lahir harus diisi" })} onKeyUp={() => { trigger("birthday"); }} />
							<label htmlFor="birthday">Birthday</label>
							{errors.birthday && (<small className="text-danger">{errors.birthday.message}</small>)}
						</div>
						<div className="form-floating mb-3">
							<input type="username" className="form-control" name="username" id="username" placeholder="username" {...register("username", { required: "Username harus diisi", pattern: { value: /^[A-Za-z0-9]+$/, message: "username tidak valid" } })} onKeyUp={() => { trigger("username"); }} />
							<label htmlFor="username">Username</label>
							{errors.username && (<small className="text-danger">{errors.username.message}</small>)}
						</div>
						<div className="form-floating mb-3">
							<input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" {...register("email", { required: "Email harus diisi", pattern: { value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/, message: "Email tidak valid" } })} onKeyUp={() => { trigger("email"); }} />
							<label htmlFor="email">Email</label>
							{errors.email && (<small className="text-danger">{errors.email.message}</small>)}
						</div>
						<div className="form-floating mb-3">
							<input type="phone" className="form-control" name="phone" id="phone" placeholder="081234567890" {...register("phone", { required: "No handphone harus diisi", pattern: { value: /^[0-9]*$/, message: "Hanya angka" }, minLength: { value: 10, message: "Minimal 10 karakter" }, maxLength: { value: 13, message: "Maksimal 13 karakter" } })} onKeyUp={() => { trigger("phone"); }} />
							<label htmlFor="email">No. Handphone</label>
							{errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
						</div>
						<div className="form-floating mb-2">
							<input type={passwordShown ? "text" : "password"} className="form-control" name="password" id="password" placeholder="Masukkan password anda" {...register("password", { required: "Password harus diisi", pattern: { value: /^^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password harus sangat kuat" } })} onKeyUp={() => { trigger("password"); }} onChange={e => setPassword(e.target.value)} />
							<label htmlFor="password">Password</label>
							<button className="p-1" onClick={()=> setPasswordShown(!passwordShown)}>Lihat Password</button>
						</div>
						<PasswordStrengthMeter password={password?.toString()} />
						{errors.password && (<small className="text-danger">{errors.password.message}</small>)}
						<div className="form-floating mb-3 mt-3">
							<textarea name="address" id="address" cols="45" className="rounded" rows="5" minLength="20" placeholder="Masukkan alamat lengkap anda" {...register("address", { required: "Alamat harus diisi" })} onKeyUp={() => { trigger("address"); }} ></textarea>
							{errors.address && (<small className="text-danger">{errors.address.message}</small>)}
						</div>
						<div className="mt-2 text-end">
							<a href="#" className="text-primary fw-bold text-decoration-none">Lupa Password?</a>
						</div>
						<button className="btn btn-primary submit-btn w-100 my-4" >Daftar</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default FormInput