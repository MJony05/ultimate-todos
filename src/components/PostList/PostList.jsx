import PostListItem from "../PostListItem";
import './PostList.css'
const PostList = ({posts}) => {
  const elements = posts.map((el)=>{
    const {id,...elProps} = el
    return (
      <li key ={id} className="list-group-item">
        <PostListItem
          {...elProps}
        />
      </li>
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}

    </ul>
  );
};

export default PostList;
