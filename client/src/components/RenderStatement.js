import React,{ Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getStatements } from '../actions/statementActions';
import PropTypes from 'prop-types';

class RenderStatement extends Component{
  componentDidMount(){
    this.props.getStatements();
  }

  render(){
    const{ statements } = this.props.statement;
    console.log(statements);
    return(
      <Container>
        <ListGroup>

          {statements.length && statements.map(({ _id,name,message,date })=>
          <div className="card" style={{textAlign:`left`, alignSelf:'stretch', marginTop:'2rem'}}>
          <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{message}</p>
          <small>{date}</small>
          </div>
          </div>
          )}

        </ListGroup>
      </Container>
    );
    
  }
  
}

RenderStatement.propTypes={
  getStatements: PropTypes.func.isRequired,
  statement: PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  statement: state.statement
});
export default connect(mapStateToProps, { getStatements })(RenderStatement);