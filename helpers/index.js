export function imageLoader({ src }) {
  if (typeof src === "string") {
    return src;
  } else {
    // const imgSrc = `twitter-clone/images/${src}`;
    // return "/twitter-clone" + imgSrc;
    return `twitter-clone/images/${src}`;
  }
}
