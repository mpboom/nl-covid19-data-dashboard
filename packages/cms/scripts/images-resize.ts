const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
import { imageResizeTargets } from '@corona-dashboard/common/src/config';

/**
 * The following code is taken from https://gist.github.com/adamwdraper/4212319
 * In short, we're looping over files in the walkpath and run them all through
 * Sharp to resize them. This code is unoptimized and serves as a starting point to
 * get resized images in our static builds.
 *
 */

const walkPath = '../app/public/cms';

async function processImages(fileList: any[]) {
  return fileList
    .map((f) => path.join(walkPath, f))
    .map(async (file) => {
      const stat = await fs.stat(file);

      if (stat.isDirectory()) {
        return walk(file);
      }

      const ext = path.extname(file);
      const filename = path.basename(file).split('.').slice(0, -1).join('.');
      console.log(`Now resizing: ${file}`);

      return imageResizeTargets.map((size) => {
        const output = `../app/public/cms/${filename}-${size}${ext}`;
        return sharp(file)
          .resize({ width: size, withoutEnlargement: true })
          .toBuffer()
          .then((data) => fs.writeFile(output, data));
      });
    });
}

async function walk(dir) {
  const fileList = await fs.readdir(dir);

  const promisedResizes = processImages(fileList);
  return Promise.all(promisedResizes.flat());
}

console.log('-------------------------------------------------------------');
console.log(`We're going to resize images in ${walkPath}...`);
console.log('-------------------------------------------------------------');

// Walk through the sanity image directory and report
// that we're done or throw an error
walk(walkPath)
  .then(() => {
    console.log(
      '-------------------------------------------------------------'
    );
    console.log('All done!');
    console.log(
      '-------------------------------------------------------------'
    );
  })
  .catch((error) => {
    throw error;
  });
