import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
	render(){
		return(
			<div style={{width:'100%', margin:'auto'}}>
			<Grid className='landing-grid'>
				<Cell col={12}> 
					<img 
						src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
						alt="avatar"
						className="avatar-img"
					/>
					<div className="banner-text">
						<h1>Frontend and Full Stack Developer </h1>
						<hr/>
						<p>
						HTML | CSS | BootStrap | JavaScript | React | React Native | NodeJs | Express | MongoDb
						</p>
						<div className="social-links">
							{/* linkedIN */}
							<a href="http://linkedin.com/in/inderorg" target="_blank" rel="noopener noreferrer"> 
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							<a href="http://github.com/inderorg" target="_blank" rel="noopener noreferrer"> 
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>

							{/* free code camp */}
							<a href="http://freecodecamp.org/inder_org" target="_blank" rel="noopener noreferrer"> 
								<i className="fa fa-free-code-camp" aria-hidden="true" />
							</a>

							{/* youtube */}
							<a href="http://youtube.com/channel/UCDpJ-rXRnj4kSTsQjlPgYlQ" target="_blank" rel="noopener noreferrer"> 
								<i className="fa fa-youtube-square" aria-hidden="true" />
							</a>

						</div>
					</div>
					
				</Cell>

			</Grid>
			</div>

		)
	}
}
export default LandingPage;
