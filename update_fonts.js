const fs = require('fs');
const path = require('path');

function findFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = findFiles('src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  newContent = newContent.replace(/className=\"([^\"]*?)\"/g, (match, classes) => {
    if (classes.includes('text-gray-500') || classes.includes('text-zinc-500') || classes.includes('text-zinc-600')) {
      let updated = classes.replace(/text-\[\d+px\]/g, 'text-[14px]');
      updated = updated.replace(/md:text-\[\d+px\]/g, 'md:text-[15px]');
      updated = updated.replace(/md:text-base/g, 'md:text-[15px]');
      
      // If it has text-[14px] but not md:text, add it
      if (updated.includes('text-[14px]') && !updated.includes('md:text-')) {
        updated = updated.replace('text-[14px]', 'text-[14px] md:text-[15px]');
      }
      return 'className=\"' + updated + '\"';
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedFiles++;
    console.log('Updated: ' + file);
  }
});
console.log('Total files updated: ' + changedFiles);
