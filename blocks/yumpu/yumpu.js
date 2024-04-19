export default function yumpu(block) {
  const iFrameUrl = block.querySelector('a').href;
  const iFrameElement = document.createElement('iframe');
  iFrameElement.src = iFrameUrl;

  block.innerHTML = '';
  block.append(iFrameElement);
}
