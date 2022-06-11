import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data:[
        {label:"React review", important:true, id:"qw"},
    {label:"Hello world", important:false, id:"qa"},
    {label:"Assalyamu alaykum", important:false, id:"qz"},
    {label:"React is Awesome", important:false, id:"qx"}
  ]}
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  deleteItem(id){
    this.setState(({data})=>{
      const index = data.findIndex(elem=>elem.id===id)

      const before = data.slice(0,index)
      const after = data.slice(index+1)
      const newArr = [...before,...after]
      return {
        data:newArr
      }
    })
  }
  addItem(body) {
    console.log(body)
  }
  render(){
  return (
  <div className="app">
    <AppHeader />
    <div className="search-panel d-flex">
      <SearchPanel />
      <PostStatusFilter />
    </div>
    <PostList posts={this.state.data} onDelete={this.deleteItem}/>
    <PostAddForm onAdd={this.addItem}/>
  </div>
    )
  }

}

