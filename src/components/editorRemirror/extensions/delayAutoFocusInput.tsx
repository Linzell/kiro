import React from 'react';

// eslint-disable-next-line react/prop-types
const DelayAutoFocusInput = ({ autoFocus, ...rest }: React.HTMLProps<HTMLInputElement>) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!autoFocus) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    // eslint-disable-next-line consistent-return
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [autoFocus]);

  return <input ref={inputRef} {...rest} />;
};

export default DelayAutoFocusInput;
