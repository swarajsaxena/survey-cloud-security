import { useState } from "react";
import styled from "styled-components";

const Form = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [ques1, setques1] = useState("");
	const [ques2, setques2] = useState("");
	const [ques3, setques3] = useState("");
	const [ques4, setques4] = useState("");
	const [ques5, setques5] = useState("");

	const submitHandler = async (event) => {
		event.preventDefault();
		setFormSubmitted(true);

		try {
			const res = await fetch(
				"https://sheet.best/api/sheets/fbc49aaf-0c8c-40c5-a440-294cef428fa3",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name,
						age,
						ques1,
						ques2,
						ques3,
						ques4,
						ques5,
					}),
				}
			);
			if (res.ok) {
				// alert("Form Sent");
			}
		} catch (err) {
			console.log(err.message);
		}
		console.log({
			formSubmitted: formSubmitted,
			name: name,
			age: age,
			ques1: ques1,
			ques2: ques2,
			ques3: ques3,
			ques4: ques4,
			ques5: ques5,
		});
		event.target.reset();
	};

	return (
		<Container>
			{!formSubmitted ? (
				<form action='' onSubmit={submitHandler}>
					<div className='input_box'>
						<div className='input_ques'>Your Name</div>
						<input
							placeholder='Your Name'
							type='text'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='input_box'>
						<div className='input_ques'>Your Age</div>

						<div className='radio_input_box'>
							<div className='radio_input'>
								<input
									onChange={(e) => setAge(e.target.value)}
									type='radio'
									id='age1'
									name='age'
									value='16 - 25'
								/>
								<label htmlFor='age1'>16-25</label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setAge(e.target.value)}
									type='radio'
									id='age2'
									name='age'
									value='25 - 45'
								/>
								<label htmlFor='age2'>25 - 45</label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setAge(e.target.value)}
									type='radio'
									id='age3'
									name='age'
									value='45+'
								/>
								<label htmlFor='age3'>45+</label>
							</div>
						</div>
					</div>
					<div className='input_box'>
						<div className='input_ques'>
							1. Do you think cloud computing and storage is the
							future ?
						</div>
						<div className='radio_input_box flex-col'>
							<div className='radio_input'>
								<input
									onChange={(e) => setques1(e.target.value)}
									type='radio'
									id='age1'
									name='ques1'
									value='Yes'
								/>
								<label htmlFor='ques1'>Yes </label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques1(e.target.value)}
									type='radio'
									id='age1'
									name='ques1'
									value='No'
								/>
								<label htmlFor='ques1'>No </label>
							</div>
						</div>
					</div>
					<div className='input_box'>
						<div className='input_ques'>
							2. How important do you think is cloud security is ?
						</div>
						<div className='radio_input_box flex-col'>
							<div className='radio_input'>
								<input
									onChange={(e) => setques2(e.target.value)}
									type='radio'
									id='age1'
									name='ques2'
									value='cloud security is imperative for business'
								/>
								<label htmlFor='ques2'>
									cloud security is imperative for business{" "}
								</label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques2(e.target.value)}
									type='radio'
									id='age1'
									name='ques2'
									value='Effective and safe recovery of data in times of a disaster & Protect from DDoS attacks'
								/>
								<label htmlFor='ques2'>
									Effective and safe recovery of data in times
									of a disaster & Protect from DDoS attacks
								</label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques2(e.target.value)}
									type='radio'
									id='age1'
									name='ques2'
									value='Cloud security solutions enable 24×7 monitoring of the application and cloud-based assets'
								/>
								<label htmlFor='ques2'>
									Cloud security solutions enable 24×7
									monitoring of the application and
									cloud-based assets
								</label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques2(e.target.value)}
									type='radio'
									id='age1'
									name='ques2'
									value='All of these'
								/>
								<label htmlFor='ques2'>All of these</label>
							</div>
						</div>
					</div>
					<div className='input_box'>
						<div className='input_ques'>
							3. Do you feel your data present in drive is
							absolutely safe ?
						</div>
						<div className='radio_input_box flex-col'>
							<div className='radio_input'>
								<input
									onChange={(e) => setques3(e.target.value)}
									type='radio'
									id='age1'
									name='ques3'
									value='Yes, I think it is safe.'
								/>
								<label htmlFor='ques3'>
									Yes, I think it is safe.{" "}
								</label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques3(e.target.value)}
									type='radio'
									id='age1'
									name='ques3'
									value='No, I dont think that my data is safe'
								/>
								<label htmlFor='ques3'>
									No, I dont think that my data is safe{" "}
								</label>
							</div>
						</div>
					</div>
					<div className='input_box'>
						<div className='input_ques'>
							4. Are you victim of data breach ?
						</div>
						<div className='radio_input_box flex-col'>
							<div className='radio_input'>
								<input
									onChange={(e) => setques4(e.target.value)}
									type='radio'
									id='age1'
									name='ques4'
									value='Yes'
								/>
								<label htmlFor='ques4'>Yes </label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques4(e.target.value)}
									type='radio'
									id='age1'
									name='ques4'
									value='No'
								/>
								<label htmlFor='ques4'>No </label>
							</div>
						</div>
					</div>
					<div className='input_box'>
						<div className='input_ques'>
							To predict and defeat attacks in real time,
							cybersecurity must move to the cloud. Do you agree?
						</div>
						<div className='radio_input_box flex-col'>
							<div className='radio_input'>
								<input
									onChange={(e) => setques5(e.target.value)}
									type='radio'
									id='age1'
									name='ques5'
									value='Yes'
								/>
								<label htmlFor='ques5'>Yes </label>
							</div>
							<div className='radio_input'>
								<input
									onChange={(e) => setques5(e.target.value)}
									type='radio'
									id='age1'
									name='ques5'
									value='No'
								/>
								<label htmlFor='ques5'>No </label>
							</div>
						</div>
					</div>

					<input type='submit' className='cta' value='Submit' />
				</form>
			) : (
				<div className='form_submitted'>
					<h1>Thankyou for participating in our survey.</h1>
					<div>Your Answers:</div>

					<div className='questionbox'>
						<div className='ques'>Name: {name}</div>
						<div className='ques'>Age: {age}</div>
						<div className='question'>
							<div className='q'>
								1. Do you think cloud computing and storage is
								the future ?
							</div>
							<div className='ans'>{ques1}</div>
						</div>
						<div className='question'>
							<div className='q'>
								2. How important do you think is cloud security
								is ?
							</div>
							<div className='ans'>{ques2}</div>
						</div>
						<div className='question'>
							<div className='q'>
								3. Do you feel your data present in drive is
								absolutely safe ?
							</div>
							<div className='ans'>{ques3}</div>
						</div>
						<div className='question'>
							<div className='q'>
								4. What if you are victim of data breach ?
							</div>
							<div className='ans'>{ques4}</div>
						</div>
					</div>
				</div>
			)}
		</Container>
	);
};

const Container = styled.div`
	max-width: 700px;

	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	width: 100%;
	font-size: 1.2rem;

	.form_submitted {
		font-family: "Spectral", serif;

		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;

		h1,
		h3 {
			font-family: inherit;
		}
		letter-spacing: 0.5px;

		.questionbox {
			letter-spacing: 0.5px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
			width: 100%;

			.question {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				width: 100%;
			}
			.ans {
				width: 100%;
				background-color: hsl(263, 60%, 48%, 0.1);
				border: 2px solid hsl(263, 60%, 68%);
				padding: 1rem;
				border-radius: 4px;
				color: hsl(229, 91%, 90%);
			}
		}
	}

	form {
		/* border: 1px solid; */
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		input[type="radio"] {
			accent-color: hsl(263, 60%, 48%);
		}

		.input_box {
			display: flex;
			flex-direction: column;
			gap: 0.7rem;

			.input_ques {
				font-size: inherit;
				/* font-weight: 500; */
				letter-spacing: 1px;
			}

			input:focus,
			textarea:focus,
			select:focus {
				outline: none;
			}

			input[type="text"],
			textarea {
				transition: all 150ms ease-in-out;
				/* width: 100%; */
				background-color: transparent;
				border: none;
				border: 2px solid hsl(263, 60%, 28%);
				padding: 1rem;
				color: hsl(229, 91%, 82%);
				letter-spacing: 1px;
				border-radius: 4px;
				color: inherit;
				font-size: inherit;
			}

			input[type="text"]:hover,
			input[type="text"]:focus,
			textarea:hover,
			textarea:focus {
				background-color: hsl(263, 60%, 48%, 0.1);
				border: 2px solid hsl(263, 60%, 68%);
			}

			.radio_input {
				/* border: 1px solid; */
			}

			width: 100%;
		}

		.radio_input_box {
			/* width: 100%; */
			border: 2px solid hsl(263, 60%, 28%);
			transition: all 150ms ease-in-out;
			padding: 1rem;
			border-radius: 4px;
			display: flex;
			gap: 1rem;
			flex-direction: row;
			font-size: inherit;

			.radio_input {
				display: flex;
				gap: 0.5rem;
				align-items: center;
				cursor: pointer;

				label {
					/* margin-top: -10px; */
				}
				/* border: 1px solid; */
			}
		}

		.radio_input_box:hover {
			background-color: hsl(263, 60%, 48%, 0.1);
			border: 2px solid hsl(263, 60%, 68%);
		}

		.flex-col {
			display: flex;
			flex-direction: column;
		}

		.cta {
			background-color: hsl(263, 60%, 48%, 0);
			border: 2px solid hsl(263, 60%, 68%, 1);
			padding: 1rem;
			border-radius: 4px;
			width: 100%;
			font-size: inherit;
			font-weight: 500;
			color: inherit;
			letter-spacing: 1px;
			cursor: pointer;
			transition: all 150ms ease-in-out;
		}

		.cta:hover {
			border: 2px solid hsl(263, 60%, 68%, 0);
			background: none;
			background-color: hsl(263, 60%, 48%, 1);
			font-size: 600;
		}
	}

	@media (max-width: 700px) {
		font-size: 1rem;

		input[type="text"],
		textarea {
			padding: 0.5rem !important;
		}
		.radio_input_box {
			padding: 0.5rem;
		}

		.questionbox {
			letter-spacing: 0.5px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
			width: 100%;

			.question {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				width: unset;
			}
			.ans {
				width: unset !important;
				background-color: hsl(263, 60%, 48%, 0.1);
				border: 2px solid hsl(263, 60%, 68%);
				padding: 1rem;
				border-radius: 4px;
				color: hsl(229, 91%, 90%);
			}
		}
	}
`;

export default Form;
