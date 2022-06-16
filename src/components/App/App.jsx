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
    this.state = {
      data: [
        { label: "React review", important: false, like: false, id: 1 },
        { label: "Hello world", important: false, like: false, id: 2 },
        { label: "Assalyamu alaykum", important: false, like: false, id: 3 },
        { label: "React is Awesome", important: false, like: false, id: 4 },
      ],
      term:"",
      filter:"All"
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 5;

  }
  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }
  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }
  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };
  searchPost(items, term) {
    if(term.length===0){
      return items
    }

    return items.filter(item=> {
      return item.label.indexOf(term) > -1
    })
  }
  onSearchUpdate=(term)=>{
    this.setState({term})
  }
  filterPost(items,filter) {
    if(filter==='like') {
      return items.filter(item=>item.like)
    }else{
      return items
    }
  }
  onFilterSelect =(filter) =>{
    this.setState({filter})
  }
  render() {
    const {data,term,filter} = this.state
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data,term),filter)
    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onSearchUpdate={this.onSearchUpdate}/>
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
