import PostListItem from "../PostListItem";
import "./PostList.css";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((el) => {
    const { id, ...elProps } = el;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...elProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
