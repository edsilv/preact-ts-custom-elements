import { h } from 'preact';
import { useState } from 'preact/hooks';
import register from 'preact-custom-element';

export const Counter = props => {
  const [state, setState] = useState(Number(props.start));
  return (
    <p>
      {state} <button onClick={() => setState(n => n + 1)}>+</button>
    </p>
  );
};

register(Counter, 'my-counter', ['name']);
