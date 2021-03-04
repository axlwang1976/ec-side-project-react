import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { shopData } from '../../data/shopData';

const ShopPage = () => {
  return (
    <div>
      {shopData.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

export default ShopPage;
