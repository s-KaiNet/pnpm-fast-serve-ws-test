const { src, dest } = require('gulp');

const targetSpfxFolder = "myspfxwebpart";

function triggerTargetWebPartReload() {
  return src(`../${targetSpfxFolder}/src/index.ts`)
    .pipe(dest(`../${targetSpfxFolder}/src/`))
}

exports.reload = function () {
  console.log(`reloading ${targetSpfxFolder} web part`);

  return triggerTargetWebPartReload();
}