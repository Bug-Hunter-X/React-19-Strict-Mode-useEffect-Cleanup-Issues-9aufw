```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const cleanupRef = useRef(null);

  useEffect(() => {
    cleanupRef.current = () => {
      console.log('Cleanup running');
    };
    return () => {
      if(cleanupRef.current){
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```