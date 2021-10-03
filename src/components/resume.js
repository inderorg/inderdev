import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={4}>
					<div style={{textAlign:'center'}}>
					<img 
						src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
						alt="avatar"
						style={{height:'200px'}}
							/>
					</div>
					<h2 style={{paddingTop:'2em'}}> Inder Singh </h2>
					<h4 style={{color:"grey"}}> Developer </h4>
					<hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
					<p>
					Career and skills

					</p>
					<h4 style={{color:"grey"}}> programmer </h4>
					<h5>Address</h5>
					<p>Apt #303, Santhusti appartments</p>
					<p>Whitefield, Bangalore</p>
					<h5>Phone Number.</h5>
					<p>+91-9353277279</p>
					<h5>Email Address</h5>
					<p>inder.org@gmail.com</p>
					<h5>Website</h5>
					<p><a href="https://inderorg.online">https://inderorg.online</a></p>
					<hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />


					</Cell>
					<Cell className='resume-right-col' col={8}>
					<h2>Education</h2>
					<Education 
					startYear={2008}
					endYear={2012}
					schoolName='Bhagwant University'
					schoolDescription="B.Tech, Electronic and Communication Engineering."
					/> 

					<Education 
					startYear={2006}
					endYear={2007}
					schoolName='Kendriya Vidyalaya'
					schoolDescription="Senior Secondary(12th PCM), CBSE Board, Ajmer"
					/> 
					<hr style={{borderTop:'3px solid #eee'}}/>

					<Experience 
					startYear={2012}
					endYear={2014}
					jobName='FrontEnd Engineer'
					jobDescription = 'UI frontend '

					/>

					<Experience 
					startYear={2014}
					endYear={2021}
					jobName='UI/UX Developer, frontend , UI and UX , Design, wireframe, prototype, Deigning brands and visual designs'
					jobDescription = 'UI/UX Complete solution'

					/>
					<hr style={{borderTop:'3px solid #eee'}}/>
					<h2> Skills </h2>
					<Skills
					skill='Javascript'
					progress = {80}
					/>
					<Skills
					skill='Node.js'
					progress = {60}
					/>
					<Skills
					skill='React'
					progress = {90}
					/>
					<Skills
					skill='HTML'
					progress = {100}
					/>
					<Skills
					skill='CSS'
					progress = {80}
					/>


					</Cell>
				</Grid>
			</div>

			)
	}
}
export default Resume;
