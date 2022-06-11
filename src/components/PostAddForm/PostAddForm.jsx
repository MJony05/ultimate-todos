import React from "react";
import "./PostAddForm.css";
export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost:""
    }
  }
  getState = (e)=>{
    let value = e.target.value
    this.setState({newPost:value})
  }
  render(){
    return (
      <form className="bottom-panel d-flex">
        <input
          value={this.state.newPost}
          onChange={this.getState}
          type="text"
          placeholder="What are you thinking about?"
          className="form-control new-post-label"
        />
        <button
          onClick={this.props.onAdd(this.state.newPost)}
          type="submit"
          className="btn btn-outline-secondary">
          Add Post
        </button>
      </form>
    )
  }
}