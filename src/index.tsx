import React, { useState, useEffect } from "react";

// @ts-ignore
import styles from "./styles.css";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  top?: number;
  smooth?: boolean;
  svgPath?: string;
  viewBox?: string;
  component?: any;
  width?: string;
  height?: string;
};

function scrollToTop(smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

const ScrollToTop = ({
  top = 20,
  className = styles["scroll-to-top"],
  color = "black",
  smooth = false,

  component = "",
  viewBox = "0 0 256 256",
  svgPath = "M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z",
  width = "28",
  height = "28",
  ...props
}: Props) => {
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    // Remove listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {visible && (
        <button
          className={className}
          onClick={() => scrollToTop(smooth)}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {component || (
            <svg width={width} height={height} fill={color} viewBox={viewBox}>
              <path d={svgPath} />
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
