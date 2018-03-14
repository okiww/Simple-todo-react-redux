import React, {Component} from 'react';
import { connect } from 'react-redux';
import { del } from '../actions/Todo';
import { check } from '../actions/Todo';
import Moment from 'react-moment';
import 'moment-timezone';
import { Table, Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrash from 'react-icons/lib/fa/trash';

class List extends Component {

	constructor(props) {
		super(props)
		var oldItems = JSON.parse(localStorage.getItem('testObject')) || [];
		this.state = {
			job : oldItems
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.job)
		this.setState({
			job : nextProps.job
		}) 
	}

	delete(e) {
    	this.props.del(e);
  	}

  	checked(e) {
    	this.props.check(e);
  	}

	render() {
		Moment.globalFormat = 'D MMM YYYY';
		const date = new Date();
		const styles = {
	        icon: {
	        	fontSize: "1.5em",
	        	cursor: "pointer"
	        },
	        done : {
	        	color : 'green'
	        },
	        active : {
	        	color : 'yellow'
	        }
	    }

		return (
			<Row>
      			<Col>
      				<Table bordered>
				        <thead>
				          <tr>
				            <th>#</th>
				            <th>Name</th>
				            <th>Status</th>
				            <th>Date</th>
				            <th>Action</th>
				          </tr>
				        </thead>
				        <tbody>
				        { this.state.job.map((data, i) => 
				          <tr key={i}>
				            <td scope="row"> { i+=1 } </td>
				            <td>
				            	<p> { data.name } </p>
				            </td>
				            <td>
				            	<b>{data.checked ? <p style={styles.done}> Done </p> : <p style={styles.active}> Active </p>}</b>
				            </td>
				            <td>
				            	<Moment add={{ days: 1, hours: 12 }}>{date}</Moment>
				            </td>
							<td>
								<FaTrash onClick={() => {this.delete(data.id)}} style={styles.icon} /> {' '}
								{data.checked ? ( 
									<FaCheckCircle onClick={() => {this.checked(data.id)}} style={styles.icon}/>
							    ) : (
									<FaCircleO onClick={() => {this.checked(data.id)}} style={styles.icon}/>
							    )}
							    {' '}
							    <FaEdit onClick={() => {this.delete(data.id)}} style={styles.icon}/>
							</td>
				          </tr>
				        )}
				        </tbody>
				    </Table>
      			</Col>
    		</Row>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		job : state.todo
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    check : (data) => dispatch(check(data)),
    del : (data) => dispatch(del(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);