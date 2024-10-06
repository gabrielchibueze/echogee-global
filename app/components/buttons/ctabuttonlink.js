"use client";
import Link from "next/link";
import classes from "./ctabutton.module.css";
import { useFormStatus } from "react-dom";

export default function CtaButton({
  type,
  action,
  design,
  children,
  disabled,
  loading,
  target,
}) {
  const { pending } = useFormStatus();

  return (
    <div className={classes.cta}>
      {type === "link" && (
        <Link
          href={action}
          target={target ? target : "_self"} // Default to "_self" if no target is provided
          rel={target === "_blank" ? "noopener noreferrer" : undefined} // Security enhancement
          className={`${classes[`${design}`]}`}
        >
          {pending ? loading : children}
        </Link>
      )}
      {type === "button" && (
        <button
          onClick={action}
          disabled={disabled || pending}
          className={`${classes[`${design}`]}`}
        >
          {pending ? loading : children}
        </button>
      )}
    </div>
  );
}
