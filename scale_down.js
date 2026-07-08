const fs = require('fs');
const path = require('path');

const dirs = [
  'C:/Users/TRYCE COMPUTEX/.gemini/antigravity/scratch/wacren-ati/src/components',
  'C:/Users/TRYCE COMPUTEX/.gemini/antigravity/scratch/wacren-ati/src/app'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Regex to match Tailwind arbitrary pixel values: prefix-[Xpx]
  // e.g. text-[32px], px-[20px], py-[16px], mb-[40px], leading-[Xpx], max-w-[Xpx], w-[Xpx], h-[Xpx]
  const regex = /([a-z0-9\-]+)-\[([0-9]+)px\]/g;
  
  content = content.replace(regex, (match, prefix, val) => {
    // scale factor
    const scaleFactor = 0.85;
    let num = parseInt(val, 10);
    let newNum = Math.round(num * scaleFactor);
    if (newNum === num && num > 1) {
        newNum = num - 1;
    }
    return `${prefix}-[${newNum}px]`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

dirs.forEach(walk);
console.log('Done.');
