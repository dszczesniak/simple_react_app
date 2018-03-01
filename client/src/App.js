import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPeople } from './actions';

class App extends Component {

    componentWillMount(){
      this.props.dispatch(getPeople())
      
    }
  
    renderList = ({list}) => {
      if(list){
        return list.map((item, i)=>{
          return(
            <div key={i} className="item-list">
                <div className="firstName">{item.firstName} {item.date}</div>
                <div className="secondName"><span>{item.secondName}</span></div>
                <div className="email">{item.email}</div>
            </div>
          )
        })
      }
    }
  
    render() {
      return (
          <div className="App">
            <div className="top">
              <h3>People</h3>
              <Link to="/form">Add</Link>
            </div>
            <div className="people_container">
              {this.renderList(this.props.people)}
            </div>
          </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
        people:state.people
    }
  }
  
  
  export default connect(mapStateToProps)(App)