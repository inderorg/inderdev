import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab:0};
	}
	toggleCategories(){
		if(this.state.activeTab === 0){
		return(
			<div className="projects-grid">
			<Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
				<CardTitle style={{color:'#000', height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSsrwfSpTiyeCHMmZUA4xeEACB8tMnMEoGJ1jdoiQgeKKwg76) center/cover'}}>
					First job experience 
				</CardTitle>
				<CardText>
					In 2012 created html, css templates for live stream pages.
					Created simple websites using html, css, php,jquery sql. landing pages and login pages.
					Created csv files of live users , presented dashboard and insight views of audiencs from social networking login, like facbook and gmail ids.
				</CardText>
				<CardActions border>
					<Button colored> Github</Button>
					<Button colored> CodePen</Button>
					<Button colored> LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
				<CardTitle style={{color:'#000', height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSsrwfSpTiyeCHMmZUA4xeEACB8tMnMEoGJ1jdoiQgeKKwg76) center/cover'}}>
					Second job Experience
				</CardTitle>
				<CardText>
					In 2013 to 2015 worked with Adobe on Creative Cloud desktop applications.
					Form validations, form submision , ajax calls , network response and cross browser implmentations.
					unit testing, Sanity , and dev, qa and production release.
					Expertise in Acrobat Pdf form building, Using Javascript and templates created interactive forms.
					Supported as Acrobat expert and help clients to understand cloud usage of acrobat email , acrobat forms creation and  submition.
				</CardText>
				<CardActions border>
					<Button colored> Github</Button>
					<Button colored> CodePen</Button>
					<Button colored> LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
				<CardTitle style={{color:'#000', height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSsrwfSpTiyeCHMmZUA4xeEACB8tMnMEoGJ1jdoiQgeKKwg76) center/cover'}}>
					Third job Experience
				</CardTitle>
				<CardText>
					In 2015 to 2016, Worked with 247.ai Ilabs design team on UI and  UX as Intern.
					learnt  deep understanding of UX, design, prototyping , visual design and user testing.
					Implmented hi fidility prototypes, supported for user case study, ux research, building wireframe and visual design.
					Created brand guidelines and implemented to product applications.
\					Part of Design team and worked around all aspects of UI like typography, grid, responsives, interactivity, wireframe, visual 
					guidelines, tools like sketch, dreamweaver, photoshop, acrobat, indesign and illustrator.
					Done poc and derived with UI team and devops.
					
				</CardText>
				<CardActions border>
					<Button colored> Github</Button>
					<Button colored> CodePen</Button>
					<Button colored> LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
		</div>
			)
		}else if (this.state.activeTab ===1){
			return(
				<Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
				<CardTitle style={{color:'#000', height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSsrwfSpTiyeCHMmZUA4xeEACB8tMnMEoGJ1jdoiQgeKKwg76) center/cover'}}>
					Fourth Job Experience 
				</CardTitle>
				<CardText>
					In 2016 to 2019, worked with Design Studio 247.ai as UI/UX  developer. 
					Worked on UI Pattern Library, On and only portal for all UI elements showcase, UI guidlines, brand pallete and design language.
					Worked on Chat Application, Migrated to latest React and redux libraries.
					Worked on creating UI implemenation fixes and changed the complete UI from scratch with teammembers.
					CI/ CD pipeline deployments and release.
					Worked on Insight, crated dashobard, and charts.
					Worked on forcast applications, created tables and rigrious code manpulations.
					Worked on text speect modules.
					Worked on Unified applications. created and supports for products from UI and UX point of views.
				</CardText>
				<CardActions border>
					<Button colored> Github</Button>
					<Button colored> CodePen</Button>
					<Button colored> LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
			)
		}else if (this.state.activeTab ===2){
			return(
				<Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
				<CardTitle style={{color:'#000', height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSsrwfSpTiyeCHMmZUA4xeEACB8tMnMEoGJ1jdoiQgeKKwg76) center/cover'}}>
					Fifth job Experience
				</CardTitle>
				<CardText>
					In Year 2019 (end) to 2021 (end) worked with Hexaware as Sr. Software Engineer.
					Worked on three major project from scratch to finish and delivered on time.
					Extensive code implementation on react, redux , css and javascript to meet the deadlines on time.
					Insurance, ecommerce and mobility applications.
					testing, accessibility , production performance, modularity and responsive testing on all devices.
				</CardText>
				<CardActions border>
					<Button colored> Github</Button>
					<Button colored> CodePen</Button>
					<Button colored> LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
			)
		}
		else if (this.state.activeTab ===3){
			return(
				<Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
				<CardTitle style={{color:'#000', height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSsrwfSpTiyeCHMmZUA4xeEACB8tMnMEoGJ1jdoiQgeKKwg76) center/cover'}}>
					Sixth job experence ?
				</CardTitle>
				<CardText>
					2021 to present on going ... 
				</CardText>
				<CardActions border>
					<Button colored> Github</Button>
					<Button colored> CodePen</Button>
					<Button colored> LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
			)
		}

	}

	render(){
		return(
			<div className="category-tabs">
				<Tabs 
					activeTab={this.state.activeTab} 
					onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
					<Tab>Begineer</Tab>
					<Tab>Intermediate</Tab>
					<Tab>Expert</Tab>
					<Tab>Pro</Tab>
				</Tabs>

					<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
					
		
			</div>

		)
	}
}
export default Projects;

