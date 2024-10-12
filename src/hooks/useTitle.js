import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / CW Movie Finder`;
    });

  return null;
}
