import fs from 'fs';
import path from 'path';

const imageDirectory = path.join(process.cwd(), 'src/pages/Login/images');

export const getBackgroundImages = () => {
  const imageFiles = fs.readdirSync(imageDirectory);
  return imageFiles
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => `/images/${file}`);
}; 