
const rel = document.querySelector('link[rel="canonical"]')
if (rel) {
  const href = rel.getAttribute('href');
  putLine('link canonical', href);
}
