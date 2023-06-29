const info = document.querySelector('.info');

function putLine(item, text) {
  const p = document.createElement('p');
  if (item) {
    p.textContent = `${item}: ${text}`;
  } else {
    p.textContent = text;
  }
  info.appendChild(p);
}

const ogpTags = [];

const head = document.querySelector('head');
const elements = head.getElementsByTagName('meta');
for (let el of elements) {
  if (el.hasAttribute('property')) {
    const prop = el.getAttribute('property');
    if (/^og:/.test(prop)) {
      putLine(prop, el.getAttribute('content'));
      ogpTags.push(prop);
    }
  } else if (el.hasAttribute('name')) {
    const name = el.getAttribute('name');
    if (/^twitter/.test(name)) {
      putLine(name, el.getAttribute('content'));
    }
  }
}

putLine(null, '-----------');
putLine(null, ogpTags.join(', '));
