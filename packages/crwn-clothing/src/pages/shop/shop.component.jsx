import React,{useState} from 'react';
import {SHOP_DATA} from '../../mock'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const Shop = () => {
    const [collections, setCollections] = useState(SHOP_DATA);
    return (
        <div className="shop-page">
            {collections.map(({ id, ...collectionProps }) => (<CollectionPreview key={id} {...collectionProps}/>))}
            
        </div>
    );
}

export default Shop;
