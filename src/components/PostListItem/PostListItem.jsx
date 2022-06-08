const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">Hello world</span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm"></button>
      </div>
    </li>
  );
};
export default PostListItem;
