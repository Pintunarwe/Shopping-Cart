// utils/importImages.js
export const importAllImages = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Import all images in the assets/images folder
  const images = importAllImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  