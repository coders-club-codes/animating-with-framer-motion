import { useEffect, useReducer } from 'react';

import { useAnimation, Variant } from 'framer-motion';

import * as S from './styles';

type Direction = 'left' | 'right';

const getAnimation = (direction: Direction): Variant => {
  const isLeftDirection = direction === 'left';

  return {
    x: isLeftDirection ? -200 : 200,
    scale: isLeftDirection ? 0.6 : 1.25,
    rotate: isLeftDirection ? '90deg' : '45deg',
  };
};

export const InteractiveShape = () => {
  const [animationDirection, toggleAnimationDirection] = useReducer(
    (prevState: Direction) => (prevState === 'left' ? 'right' : 'left'),
    'left',
  );

  const animation = useAnimation();

  const handleAnimate = () => {
    animation.start(getAnimation(animationDirection));

    toggleAnimationDirection();
  };

  useEffect(() => {
    const animationTimeout = setTimeout(
      () =>
        animation.start({
          x: 0,
          scale: 1,
          rotate: '0deg',
        }),
      2500,
    );

    return () => clearTimeout(animationTimeout);
  }, [animation, animationDirection]);

  return (
    <S.Container>
      <S.Square animate={animation} />

      <button type="button" onClick={handleAnimate}>
        Animate
      </button>
    </S.Container>
  );
};
