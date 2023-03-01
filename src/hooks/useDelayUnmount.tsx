import { useState, useEffect } from "react";

type useDelayUnmountProps = {
  delay: number;
  isMount: boolean;
};
const useDelayUnmount = ({ delay, isMount }: useDelayUnmountProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timer;
    if (isMount && !shouldRender) setShouldRender(true);
    else {
      timer = setTimeout(() => {
        setShouldRender(false);
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [isMount]);

  return shouldRender;
};

export default useDelayUnmount;
