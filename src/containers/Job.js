import React, {Component} from 'react';
import List from './List';
import { connect } from 'react-redux';
import { add } from '../actions/Todo';
import 'bootstrap/dist/css/bootstrap.css';
import FaPlusSquarO from 'react-icons/lib/fa/plus-square-o';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  FormGroup, 
  Label, 
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';

class Job extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      job : "",
	      modal : false
	    }
	    this.submit = this.submit.bind(this);
	    this.toggle = this.toggle.bind(this);
	}

  	submit() {
    // console.log(this.state);
    	this.props.add(this.state.job);
    	this.setState({
	      job: "",
	      modal : false
	    });
  	}

  	toggle() {
  		this.setState({
	      modal: !this.state.modal
	    });
  	}
	render() {
		const styles = {
	        navbar: {
	            padding: 20,
	            backgroundColor: '#7BC3C0',
	            height: 50
	        }, 
	        faplus: {
	        	fontSize: "2em"
	        }
	    }
		return (
			<Container>
				<Row>
			         <Col>
						<Navbar color="faded" light style={styles.navbar} expand="md">
				          <NavbarBrand href="/">TODO REDUX</NavbarBrand>
				          <Collapse isOpen={this.state.isOpen} navbar>
				            <Nav className="ml-auto" navbar>
				              <UncontrolledDropdown nav inNavbar>
				                
				                  <FaPlusSquarO style={styles.faplus} onClick={this.toggle} />
				               
				              </UncontrolledDropdown>
				            </Nav>
				          </Collapse>
				        </Navbar>
		       
				        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				          <ModalHeader toggle={this.toggle}>Add TODO</ModalHeader>
				          <ModalBody>
				          	<FormGroup>
					          <Label for="todo">Name</Label>
					          <Input type="text" name="todo" id="todo" placeholder="add name" value={this.state.job} onChange={(e) => {this.setState({job : e.target.value})}} />
					        </FormGroup>
				          </ModalBody>
				          <ModalFooter>
				            <Button color="primary" onClick={this.submit}>Do Something</Button>{' '}
				            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
				          </ModalFooter>
				        </Modal>
				        <List />
		        	</Col>
		        </Row>
	        </Container>
		)
	}
}
const mapDispatchToProps = (dispatch) => {
  return {
    add : (data) => dispatch(add(data))
  }
}
export default connect(null, mapDispatchToProps)(Job);