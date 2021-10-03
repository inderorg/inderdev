import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
	render(){
		return(
			<div className="contact-body"> 
				<Grid className="contact-grid">
					<Cell col={6}> 
						<h2>Inder Singh</h2>
						<img 
						src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
						alt="avatar"
						style={{height:"250px"}}
						/>
						<p style={{width:'75%', margin:'auto', paddingTop:'1em'}}> Hi, I am Inder. Working as a Web Developer and I
 create awesome Websites UI, Design Spec, 
Create perfect brading guidlines and logos.
 I have good Experience of more then 9 years in the area of User Experience and Frontend,
 I have done projects using HTML. CSS, SASS, Bootstrap, React, Redux, Semantic- UI , React-Mdl, Angular and Wordpress.
 Looking forward I am working and enchancing my skill in the area of 
java development and backend development. 
So, The main objective is to become a fullStack developer.</p>

					</Cell>
					<Cell col={6}> 
						<h2> Contact Now </h2>
							<hr/>
							<div className="contact-list">
							<List>
							  <ListItem> 
							    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
							    <i className="fa fa-phone-square" aria-hidden="true"/>
							     +91-9353277279
							    </ListItemContent>
							  </ListItem>
							  

							  <ListItem> 
							    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
							    <i className="fa fa-fax" aria-hidden="true"/>
							     +91-9353277279
							    </ListItemContent>
							  </ListItem>

							  <ListItem> 
							    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
							    <i className="fa fa-envelope" aria-hidden="true"/>
							     inder.org@gmail.com
							    </ListItemContent>
							  </ListItem>

							  <ListItem> 
							    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
							    <i className="fa fa-skype" aria-hidden="true"/>
							     inder.org@gmail.com
							    </ListItemContent>
							  </ListItem>
							</List>

							</div>
						
					</Cell>
				</Grid>	

			</div>

			)
	}
}
export default Contact;
