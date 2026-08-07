const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('./src/lib/imageResolver.ts', 'utf-8');
const urls = [...new Set(content.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g))];

console.log(`Found ${urls.length} distinct Unsplash URLs in imageResolver.ts. Testing...`);

let pending = urls.length;
const badUrls = [];

urls.forEach(url => {
  https.get(url, res => {
    if (res.statusCode !== 200) {
      console.log(`404: ${url}`);
      badUrls.push(url);
    }
    pending--;
    if (pending === 0) {
      console.log('Done testing.');
      console.log('Bad URLs:', badUrls);
    }
  }).on('error', err => {
    console.log(`Error on ${url}:`, err.message);
    pending--;
  });
});
