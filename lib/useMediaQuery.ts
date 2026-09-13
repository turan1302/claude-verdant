import { useSyncExternalStore } from "react";

// Mouse-like pointer and a wide screen; matches the `desktop:` variant in globals.css.
export const DESKTOP_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1024px)";

// False on the server and during hydration, then tracks the query on the client.
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
