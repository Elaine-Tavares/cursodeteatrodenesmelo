import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // pega a rota atual

  useEffect(() => {
    window.scrollTo(0, 0); // vai pro topo sempre que a rota muda
  }, [pathname]);

  return null; // não precisa renderizar nada
}
