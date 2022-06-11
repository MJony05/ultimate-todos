import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";
const App = () => {
  const data = [
    {label:"React review", important:true, id:"qw"},
    {label:"Hello world", important:false, id:"qa"},
    {label:"Assalmu aleykum", important:false, id:"qz"},
    {label:"React is Awesome", important:false, id:"qx"}
  ]
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </div>
  );
};
export default App;
