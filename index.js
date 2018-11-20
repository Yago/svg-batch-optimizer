const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');

const options = {
  removeDoctype: true,
  removeXMLProcInst: true,
  removeComments: true,
  removeMetadata: true,
  removeXMLNS: false,
  removeEditorsNSData: true,
  cleanupAttrs: true,
  inlineStyles: true,
  minifyStyles: true,
  convertStyleToAttrs: true,
  cleanupIDs: true,
  removeRasterImages: false,
  removeUselessDefs: true,
  cleanupNumericValues: true,
  cleanupListOfValues: false,
  convertColors: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeViewBox: false,
  cleanupEnableBackground: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  convertShapeToPath: true,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  convertPathData: true,
  convertTransform: true,
  removeEmptyAttrs: true,
  removeEmptyContainers: true,
  mergePaths: true,
  removeUnusedNS: true,
  sortAttrs: false,
  removeTitle: true,
  removeDesc: true,
  removeDimensions: true,
  removeStyleElement: false,
  removeScriptElement: false,
};

const svgo = new SVGO({ options });

const files = fs.readdirSync('./').filter(f => path.extname(f) === '.svg');
files.forEach((file, key) => {
  const content = fs.readFileSync(file, 'utf-8');
  svgo.optimize(content, {}).then(res => {
    fs.writeFile(file, res.data, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
});
