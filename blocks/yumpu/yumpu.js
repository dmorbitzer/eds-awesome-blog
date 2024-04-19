function loadIframe(block) {
  const iFrameUrl = block.querySelector('a').href;
  const iFrameElement = document.createElement('iframe');
  iFrameElement.src = iFrameUrl;
  block.innerHTML = '';
  block.append(iFrameElement);
}
export default function decorate(block) {
  setTimeout(() => loadIframe(block), 3000);
}
