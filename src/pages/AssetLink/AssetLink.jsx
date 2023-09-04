import React from 'react';
import jsonData from './assetlinks.json'; // Sesuaikan path dengan lokasi file data.json

const AssetLink = () => {
   return (
      <div>
        <pre>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      </div>
    );
}

export default AssetLink;
