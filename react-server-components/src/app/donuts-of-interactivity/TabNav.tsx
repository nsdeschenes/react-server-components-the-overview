"use client";

import { useRouter, usePathname } from "next/navigation";

function Tab({ display }: { display: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => {
        router.replace(`${pathname}?tab=${display}`);
      }}
    >
      {display}
    </button>
  );
}

export default function TabNav({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        <Tab display="awesome" />
        <Tab display="cool" />
      </nav>
      <section style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </section>
    </div>
  );
}
