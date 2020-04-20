import React from 'react';
import { useParams } from 'react-router-dom';

function StoreItem() {
  let { storeId } = useParams();
  return (
    <div>
      <h3>StoreId: {storeId}</h3>
    </div>
  );
}

export default StoreItem;
