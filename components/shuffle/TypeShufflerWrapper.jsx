import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";
import { TypeShuffler } from "./TypeShuffler";

// eslint-disable-next-line react/display-name
const TypeShufflerWrapper = forwardRef((props, parentRef) => {
  const innerRef = useRef();
  useImperativeHandle(parentRef, () => ({
    current: innerRef.current,
  }));

  useEffect(() => {
    if (innerRef.current) {
      const typeShuffle = new TypeShuffler(innerRef.current);
      typeShuffle.trigger("fx1");
    }
  }, [innerRef]);

  return <div ref={innerRef} {...props} />;
});

export default TypeShufflerWrapper;
