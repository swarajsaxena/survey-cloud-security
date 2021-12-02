import "./App.css";
import React from "react";
import Form from "./Form";
import Title from "./Title";

const App = () => {
	return (
		<div className='app'>
			<section className='section_left'>
				<Title />
			</section>
			<section className='section_right'>
				<Form />
			</section>
		</div>
	);
};

export default App;
