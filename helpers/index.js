export function imageLoader({ src }) {
  if (typeof src === "string") {
    return src;
  } else {
    const imgSrc = `/images/${src}`;
    return "/twitter-clone" + imgSrc;
  }
}
