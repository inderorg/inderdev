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
					Personal Portfolio Design 
				</CardTitle>
				<CardText>
					This Is my first React project, Which was the starting point of creating applications.
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
					Personal Portfolio Design 
				</CardTitle>
				<CardText>
					This Is my first React project, Which was the starting point of creating applications.
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
					Personal Portfolio Design 
				</CardTitle>
				<CardText>
					This Is my first React project, Which was the starting point of creating applications.
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
					Personal Portfolio Design 
				</CardTitle>
				<CardText>
					This Is my first React project, Which was the starting point of creating applications.
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
					Personal Portfolio Design 
				</CardTitle>
				<CardText>
					This Is my first React project, Which was the starting point of creating applications.
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
					Personal Portfolio Design 
				</CardTitle>
				<CardText>
					This Is my first React project, Which was the starting point of creating applications.
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
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>VueJS</Tab>
					<Tab>Mongodb</Tab>
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