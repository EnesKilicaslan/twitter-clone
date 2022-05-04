export function imageLoader({ src }) {
  if (typeof src === "string") {
    return src;
  } else {
    return `/images/${src}`;
  }
}
