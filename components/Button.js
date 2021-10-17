import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import Link from "next/link";

export const Button = ({
  children,
  className,
  isFullWidth = false,
  ...props
}) => {
  const Comp = props.link ? LinkButton : BaseButton;

  return (
    <Comp
      className={cn(styles.button, isFullWidth && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

const LinkButton = ({ link, notificationCount, children, ...props }) => {
  return (
    <Link href={link}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const BaseButton = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
  //return <Button {...props}>{children}</Button>;
};
