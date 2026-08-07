const urls = ['bhutan','gujarat','himachal pradesh','sikkim','andaman','lakshadweep','japan','madhya pradesh'];
Promise.all(urls.map(u => 
  fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(u)}&per_page=10`)
    .then(r => r.json())
    .then(d => { 
      let p = d.results.find(x => !x.premium); 
      return `${u}: ${p ? p.id : 'none'}`;
    })
)).then(res => console.log(res.join('\n')));
