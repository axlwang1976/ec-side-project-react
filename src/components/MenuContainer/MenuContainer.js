import './MenuContainer.scss';
import { categories } from '../../data/categoryData';
import MenuItem from '../MenuItem/MenuItem';

const MenuContainer = () => {
  return (
    <div className="menu-container">
      {categories.map(({ id, title, imageUrl, size }) => {
        return (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
};

export default MenuContainer;
