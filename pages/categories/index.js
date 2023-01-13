import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <ul style={{ fontSize: "5rem", marginLeft: "5rem" }}>
        <Link href="/categories/fictional">Fictional Stories</Link>
        <Link href="/categories/real">Real Stories</Link>
        <Link href="/categories/killers">Serial Killers Stories</Link>
      </ul>
    </div>
  );
};

export default index;
