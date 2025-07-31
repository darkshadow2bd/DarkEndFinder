<h1 align="center">𝘿𝙖𝙧𝙠𝙀𝙣𝙙𝙁𝙞𝙣𝙙𝙚𝙧</h1>

<p align="center"><b><h4>
⚔️ Browser-based endpoint extractor built for bug bounty hunters. Instantly collects internal, subdomain, and external links from any page! No tools, no noise, just pure passive recon. ⚡
</h4></b></p>

---

## 🚀 Features

- 📌 Extracts all internal and external endpoint links:
  - `<a href>`, `<script src>`, `<link href>`
- 🔍 Categorizes endpoints into:
  - Main domain Endpoints
  - Subdomains Endpoints
  - External domains
- ⚡ Fast and runs directly in the browser
- 🧠 No dependencies or server requests
- 🖱️ Single-click recon using bookmarklet
- 🔒 Perfect for authenticated recon during black-box testing
---

## 🧠 Bookmarklet Source Code

```javascript
javascript: (() => { function g(d) { const p = d.split('.'); return p.length > 2 ? p.slice(-2).join(%27.%27) : d } const h = window.location.hostname, m = g(h), l = [...document.querySelectorAll(%27a[href]%27), ...document.querySelectorAll(%27script[src]%27), ...document.querySelectorAll(%27link[rel="stylesheet"][href]%27)], d = { main: [], subdomains: {}, external: new Set }; l.forEach(a => { try { const u = new URL(a.href || a.src, window.location.href), n = u.hostname, p = u.pathname; if (n === m) d.main.push(p); else if (n.endsWith(`.${m}`)) { d.subdomains[n] = d.subdomains[n] || []; d.subdomains[n].push(p) } else d.external.add(n) } catch (e) { } }); d.main = [...new Set(d.main)]; for (const s in d.subdomains) d.subdomains[s] = [...new Set(d.subdomains[s])]; d.external = [...d.external]; const v = document.createElement(%27div%27); v.style.cssText = %27padding:10px;border:1px solid black;background:white;margin-top:20px%27; v.innerHTML = %27<br><b>Follow me in X <a href="https://x.com/@darkshadow2bd" target="_blank">DarkShadow</a></b>%27; v.innerHTML += `<h3><b>Targeted domain: ${m}</b></h3>`; if (h !== m && d.subdomains[h]) { v.innerHTML += `<h4><b>endpoints of</b> <b>${h}</b></h4>` + d.subdomains[h].map(p => p).join(%27<br>%27) + %27<br>%27; delete d.subdomains[h] } if (Object.keys(d.subdomains).length > 0 || d.main.length > 0) { if (d.main.length > 0) v.innerHTML += `<h3><b>endpoints of ${m}</b></h3>` + d.main.join(%27<br>%27) + %27<br>%27; for (const s in d.subdomains) v.innerHTML += `<h4><b>endpoints of</b> <b>${s}</b></h4>` + d.subdomains[s].join(%27<br>%27) + %27<br>%27 } if (d.external.length > 0) v.innerHTML += `<h4><b>external domains:</b></h4>` + d.external.join(%27<br>%27) + %27<br>%27; v.innerHTML += %27<br><b>Follow me in X <a href="https://x.com/@darkshadow2bd" target="_blank">DarkShadow</a></b>%27; document.body.appendChild(v); v.scrollIntoView(); })();
```
**If you find this tool useful, give it a ⭐️ and share it with others in the hacking & BugBounty community!**

---

## 📦 How to Use

1. Copy the full Bookmarklet Source Code
2. Create a new bookmark in your browser
3. Paste the entire code into the bookmark URL
4. Name it: `BrowserEndpointExtractor`
5. Visit any target web page, click the bookmark
6. Results will appear in a floating section at the bottom

---
## ⚠️ Legal Disclaimer

This tool is intended for **educational and authorized security testing purposes only**.  
Do not use this tool on systems you do not own or have explicit permission to test.

---

## 👤 Author

> **DarkShadow**  
> X (Twitter): [@darkshadow2bd](https://x.com/@darkshadow2bd)  
> Telegram channel: [@ShellSec](https://t.me/ShellSec)

---


