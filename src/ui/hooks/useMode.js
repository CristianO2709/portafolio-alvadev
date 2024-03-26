import { useEffect, useState } from "react"

export const useMode = () => {
    /**
   * Determina si el checkbox debería estar checkeado basado en
   * el contenido del localStorage
   */
   const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  /**
   * Cada vez que el estado checked cambie, actualiza la propiedad
   * data-theme en el HTML para que use el tema que estamos almacenando
   * en el localStorage
   */
  useEffect(() => {
    document
      .getElementsByTagName("body")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  /**
   * Actualiza el estado checked y el contenido de nuestro objeto
   * theme en el localStorage basados en el checkbox
   */
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return {
    checked,
    toggleThemeChange
  }
}
