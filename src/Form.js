import styled from "styled-components";

const Form = () => {
	return (
		<Container>
			<form action=''>
				<div className='input_box'>
					<div className='input_ques'>Your Name</div>
					<input placeholder='' type='text' />
				</div>
				<div className='input_box'>
					<div className='input_ques'>Your Age</div>

					<div className='radio_input_box'>
						<div className='radio_input'>
							<input
								type='radio'
								id='age1'
								name='age'
								value='16 - 25'
							/>
							<label for='age1'>16-25</label>
						</div>
						<div className='radio_input'>
							<input
								type='radio'
								id='age2'
								name='age'
								value='25 - 45'
							/>
							<label for='age2'>16-25</label>
						</div>
						<div className='radio_input'>
							<input
								type='radio'
								id='age3'
								name='age'
								value='45+'
							/>
							<label for='age3'>16-25</label>
						</div>
					</div>
				</div>
				<div className='input_box'>
					<div className='input_ques'>
						Do you think cloud computing and storage is the future ?
					</div>
					<textarea placeholder='' rows='4' />
				</div>
				<div className='input_box'>
					<div className='input_ques'>
						How important do you think is cloud security is ?
					</div>
					<textarea placeholder='' rows='4' />
				</div>
				<div className='input_box'>
					<div className='input_ques'>
						Do you feel your data present in drive is absolutely
						free ?
					</div>
					<textarea placeholder='' rows='4' />
				</div>
				<div className='input_box'>
					<div className='input_ques'>
						What if you are victim of data breach ?
					</div>
					<textarea placeholder='' rows='4' />
				</div>

				<button type='submit' className='cta'>
					Submit
				</button>
			</form>
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
			padding: 0.5rem;
			border-radius: 4px;
			display: flex;
			gap: 1rem;
			flex-direction: row;
			font-size: inherit;

			.radio_input {
				display: flex;
				gap: 0.2rem;
				align-items: center;
				cursor: pointer;
				/* border: 1px solid; */
			}
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
	}
`;

export default Form;
