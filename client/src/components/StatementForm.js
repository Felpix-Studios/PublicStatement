import React, { Component } from 'react';
import{
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addStatement } from '../actions/statementActions';

class StatementForm extends Component{
  state={
    name:'',
    message:''
  }
  onChangeName=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  onChangeMessage=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit=(e)=>{
    document.getElementById("statementForm").reset();
    console.log("submitting")
    const newStatement={
      name:this.state.name,
      message:this.state.message
    }
    console.log(newStatement)
    this.props.addStatement(newStatement);
    e.preventDefault()
  }
    render(){
      return(
        <Form id="statementForm" style={{textAlign:`left`, alignSelf:'stretch', marginTop:'2rem'}}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Your name..."
                  onChange={this.onChangeName}/>
                </FormGroup>
                <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="Message"
                  placeholder="Your Public Statement..."
                  onChange={this.onChangeMessage}/>
                <Button
                  type="submit"
                  onClick={this.onSubmit}
                  className="btn btn-info"
                  color=""
                  style={{marginTop:'2rem'}}
                >Add Item</Button>
              </FormGroup>
            </Form>
      );
      
    }
}



const mapStateToProps=state=>({
  name:state.name,
  message:state.message
});
console.log(mapStateToProps)
export default connect(mapStateToProps,{ addStatement })(StatementForm);