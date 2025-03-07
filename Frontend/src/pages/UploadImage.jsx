import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <h1>Upload Image for Ingredient Detection</h1>
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Preview" width="200" />}
    </div>
  );
};

export default UploadImage;
