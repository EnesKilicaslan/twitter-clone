export function imageLoader({ src, quality }) {
  if (quality) {
    //remote image
    return src;
  } else {
    // const imgSrc = `twitter-clone/images/${src}`;
    // return "/twitter-clone" + imgSrc;
    return `twitter-clone/images/${src}`;
  }
}
