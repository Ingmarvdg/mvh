const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, './public/projects');
const manifestPath = path.join(__dirname, './public/manifest.json');

const folderMap = {};

fs.readdirSync(projectsDir)
  .filter(folderName => fs.lstatSync(path.join(projectsDir, folderName)).isDirectory())
  .forEach(folderName => {
    const files = fs.readdirSync(path.join(projectsDir, folderName))
      .filter(fileName => /\.(png|jpe?g|webp|gif)$/i.test(fileName))
      .map(fileName => `/mvh/projects/${folderName}/${fileName}`);
    folderMap[folderName] = files;
  });

fs.writeFileSync(manifestPath, JSON.stringify(folderMap, null, 2));

console.log('Manifest generated:', manifestPath);