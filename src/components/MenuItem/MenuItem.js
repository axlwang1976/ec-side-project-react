import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtutle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
