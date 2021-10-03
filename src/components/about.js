import React, {Component} from 'react';
import {Grid} from 'react-mdl';
class About extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
				<div>
					<h2>About Me in short </h2>
					<p>I am a Web Developer, Expert on the latest UI Framworks and libraries.
					 Being an IT Professional with extensive experience, knowledge in advance web development
					 I am looking forward a best oppurtunity to utilize my experitise and shien my career growth.</p>
				</div>

				<div>
					<h2> Experiences </h2>
					<p>Enterprise level projects from scratch</p>
					<p>Latest frontend stacks , HTML, CSS, JAVASCRIPT, ES6, REACT, Angular, Object oriented programming, JSON and Node.js</p>
					<p>Libraries like Semantic UI, Bootstrap, Postcss, Webpack, gulp, less, sass, jest, redux, cypress, enjyme, jasmine, Rxjs, saga,
					 ejs , Rest, Restful, axios etc.</p>
					<p>Analyzing , debugging rigorous code complexity, fixing bugs and functionaliy's testing, deployment and troubleshooting cross
					browser compatibility problems </p>
					<p> Always follow Agile process and derived projects by understanding the criticality of UI/UX principles, Code optimization and
					performance , code consistency and securities on priority </p>
					<p>Designing and developing Responsive applications and products ( mobile first apporach)</p>
				</div>
				<div>
					<h2>Interests </h2>
					<p> Single page Applications development </p>
					<p>Desktop Applications </p>
					<p> Customization and performance enchansments </p>
					<p>UI code standardization, support and development, UX prototyping and UI Framwoks </p>
					<p>Developing PWA, reusable, consistent, optimized, sercure and best performance applications </p>
					<p>Unit tests and test coverages</p>
					<p>CMS, Social media integration, e-learning plateforms, online gaming, ERP  and BI projects </p>

				</div>
				</Grid>
			 </div>

			)
	}
}
export default About;
