javascript:(() => {
  function g(d) {
    const p = d.split('.');
    return p.length > 2 ? p.slice(-2).join('.') : d;
  }
  const h = window.location.hostname,
        m = g(h),
        l = [
          ...document.querySelectorAll('a[href]'),
          ...document.querySelectorAll('script[src]'),
          ...document.querySelectorAll('link[rel="stylesheet"][href]')
        ],
        d = { main: [], subdomains: {}, external: new Set };

  l.forEach(a => {
    try {
      const u = new URL(a.href || a.src, window.location.href),
            n = u.hostname,
            p = u.pathname;
      if (n === m) d.main.push(p);
      else if (n.endsWith(`.${m}`)) {
        d.subdomains[n] = d.subdomains[n] || [];
        d.subdomains[n].push(p);
      } else d.external.add(n);
    } catch (e) {}
  });

  d.main = [...new Set(d.main)];
  for (const s in d.subdomains) d.subdomains[s] = [...new Set(d.subdomains[s])];
  d.external = [...d.external];

  const v = document.createElement('div');
  v.style.cssText = 'padding:10px;border:1px solid black;background:white;margin-top:20px';
  v.innerHTML = '<br><b>Follow me in X <a href="https://x.com/@darkshadow2bd" target="_blank">DarkShadow</a></b>';
  v.innerHTML += `<h3><b>Targeted domain: ${m}</b></h3>`;

  if (h !== m && d.subdomains[h]) {
    v.innerHTML += `<h4><b>endpoints of</b> <b>${h}</b></h4>` + d.subdomains[h].map(p => p).join('<br>') + '<br>';
    delete d.subdomains[h];
  }

  if (Object.keys(d.subdomains).length > 0 || d.main.length > 0) {
    if (d.main.length > 0)
      v.innerHTML += `<h3><b>endpoints of ${m}</b></h3>` + d.main.join('<br>') + '<br>';
    for (const s in d.subdomains)
      v.innerHTML += `<h4><b>endpoints of</b> <b>${s}</b></h4>` + d.subdomains[s].join('<br>') + '<br>';
  }

  if (d.external.length > 0)
    v.innerHTML += `<h4><b>external domains:</b></h4>` + d.external.join('<br>') + '<br>';

  v.innerHTML += '<br><b>Follow me in X <a href="https://x.com/@darkshadow2bd" target="_blank">DarkShadow</a></b>';
  document.body.appendChild(v);
  v.scrollIntoView();
})();
