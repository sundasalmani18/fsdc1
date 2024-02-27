import { useCallback, useEffect, useState } from "react";
import { useBeforeUnload } from "react-router-dom";

export default function  Contact()  {
  const [state, setState] = useState('hellloworld');

  useBeforeUnload(
    useCallback(() => {
      localStorage.stuff = state;
    }, [state])
  );

  useEffect(() => {
    if (state === null && localStorage.stuff != null) {
      setState(localStorage.stuff);
    }
  }, [state]);
  
    return <h1>Contact</h1>;
  };
  