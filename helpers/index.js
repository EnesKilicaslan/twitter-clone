const isProd = process.env.NODE_ENV === "production";

export function imageLoader({ src }) {
  if (typeof src === "string") {
    return src;
  } else {
    const imgSrc = `/images/${src}`;
    return isProd ? "/twitter-clone" + imgSrc : imgSrc;
  }
}
