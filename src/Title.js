import styled from "styled-components";

const Title = () => {
	return (
		<Container>
			<div className='heading'>Survey For Cloud Security</div>
			<div className='sub_heading'>VIT Bhopal</div>
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px solid; */
	height: 100%;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
	/* color: white; */
	letter-spacing: 1px;
	text-align: center;

	.heading {
		font-size: 3rem;
		font-weight: 600;
		border-bottom: 3px solid;
	}

	.sub_heading {
		font-size: 2rem;
		font-weight: 500;
	}

	@media (max-width: 700px) {
		padding: 3rem 0;
		.heading {
			font-size: 1.5rem;
			font-weight: 600;
			border-bottom: 2px solid;
		}

		.sub_heading {
			font-size: 1rem;
			font-weight: 500;
		}
	}
`;

export default Title;
