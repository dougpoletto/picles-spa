import { useState } from 'react';
import { Button } from './components/common/Button';
import { ButtonVariant } from './components/common/Button/Button.constants';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant={ButtonVariant.Default} onClick={() => {}}>
        Quero adotar
      </Button>
      <Button variant={ButtonVariant.Outlined} onClick={() => {}}>
        Tenho um abrigo
      </Button>
    </>
  )
}
