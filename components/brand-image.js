"use client";

import { useState } from "react";

export function BrandImage({
  src,
  alt,
  fallback,
  className = "",
  imgClassName = "",
  priority = false
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={priority ? "eager" : "lazy"}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
