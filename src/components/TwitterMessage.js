import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
<<<<<<< HEAD
    this.state = {
      message: ""
    };
  }

  handleChange = event => this.setState({message: event.target.value})


  render() {

    let numOfChars = this.props.maxChars - this.state.message.length;
=======

    this.state = { message : ""};
  }
  handleChange = (event) => {
    this.setState({message : event.target.value})
  }
  render() {
    let numOfChars =  this.props.maxChars - this.state.message.length;
>>>>>>> ff4eeca546d10f7b13165660b252e5fe8496efe3

    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
         <p>{numOfChars}</p>
=======
        <input type="text"
         name="message" id="message"
         vlaue={this.state.message}
         onChange={event => this.handleChange(event)} />
         <span>{numOfChars}</span>
>>>>>>> ff4eeca546d10f7b13165660b252e5fe8496efe3
      </div>
    );
  }
}


export default TwitterMessage;
