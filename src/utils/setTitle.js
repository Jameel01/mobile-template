export default function setTitle (title) {
  document.title = title
  document.head.querySelector('title').innerText = title
}
