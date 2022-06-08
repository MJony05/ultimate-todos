import AppHeader from "../AppHeader";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
    </div>
  );
};
export default App;
