const fs = require('fs');
const path = require('path');

/**
 * This script creates an index.ts file in the types directory that exports all
 * types from the files in each subdirectory. This is useful for importing types
 * from the types directory without having to specify the file name, as well as
 * allowing us to export all generated types from the top level package.
 */

const TYPES_DIR = './src/types';

// Get all subdirectories in the types directory
const subDirs = fs
  .readdirSync('./src/types', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Get all files in each subdirectory
const filePaths = {};
subDirs.forEach((subDir) => {
  const filesInSubDir = fs.readdirSync(`${TYPES_DIR}/${subDir}`);
  // Add all files to filePaths
  filesInSubDir.forEach((file) => {
    const name = path.basename(file, '.ts');
    // Skip if the type already exists
    if (filePaths[name]) return;
    filePaths[name] = `./${subDir}/${name}`;
  });

  // Create index.ts file in subdirectory exporting all types from the files
  const content = filesInSubDir
    .map((file) => path.basename(file, '.ts'))
    .map((name) => `export * from './${name}';`)
    .join('\n');
  fs.writeFileSync(`${TYPES_DIR}/${subDir}/index.ts`, content);
});

// Create index.ts file in types directory exporting all types from the files
// in each subdirectory
let content =
  Object.values(filePaths)
    .map((filePath) => `export * from '${filePath}';`)
    .join('\n') + '\n\n';

// Add import statements for all subdirectories
content +=
  subDirs
    .map((subDir) => `import * as ${subDir} from './${subDir}';`)
    .join('\n') + '\n\n';

// Add export statement for all subdirectories
content += `export { ${subDirs.join(', ')} };`;

// Write index.ts file
fs.writeFileSync(`${TYPES_DIR}/index.ts`, content);
