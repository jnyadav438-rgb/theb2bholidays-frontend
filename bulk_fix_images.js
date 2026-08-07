const fs = require('fs');
const path = './src/lib/imageResolver.ts';

let content = fs.readFileSync(path, 'utf-8');

const badUrls = [
  'https://images.unsplash.com/photo-1615836245337-f5b9b230bc18',
  'https://images.unsplash.com/photo-1601007204439-d3e75e1141fc',
  'https://images.unsplash.com/photo-1502602881462-8c1ee9ce9b56',
  'https://images.unsplash.com/photo-1520483601560-369dffc0e87e',
  'https://images.unsplash.com/photo-1513635269975-59693e2498ef',
  'https://images.unsplash.com/photo-1579603058866-26759c87d46c',
  'https://images.unsplash.com/photo-1599859556100-2440938ff5d5',
  'https://images.unsplash.com/photo-1621876547631-50a1df277da2',
  'https://images.unsplash.com/photo-1588691505307-e17f259db1f2',
  'https://images.unsplash.com/photo-1605649487212-4d4ce7a9d0a1',
  'https://images.unsplash.com/photo-1579402925501-c89b7b9d6a36',
  'https://images.unsplash.com/photo-1626244139887-32cc56317bc2',
  'https://images.unsplash.com/photo-1544634076-a9009dfeb612',
  'https://images.unsplash.com/photo-1593693397690-362cb9666c6b',
  'https://images.unsplash.com/photo-1627582236203-0c4e09fde119',
  'https://images.unsplash.com/photo-1526761122248-c31c93f8b299'
];

const goodUrls = [
  'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33',
  'https://images.unsplash.com/photo-1587474260584-136574528ed5',
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
  'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4'
];

let replaced = 0;
badUrls.forEach((badUrl, i) => {
  const goodUrl = goodUrls[i % goodUrls.length];
  // Replace all occurrences of this bad URL (ignoring query params like ?w=800 in the regex match by only replacing the base)
  const regex = new RegExp(badUrl.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g');
  if (regex.test(content)) {
    content = content.replace(regex, goodUrl);
    replaced++;
  }
});

fs.writeFileSync(path, content, 'utf-8');
console.log(`Replaced ${replaced} bad URLs in imageResolver.ts`);
