import { Variants } from 'framer-motion';

import * as S from './styles';

const items = [...Array.from({ length: 10 }, (_, index) => index + 1)];

const listVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.25,
      delayChildren: 0.75,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const AnimatedList = () => (
  <S.ListContainer variants={listVariants} initial="hidden" animate="visible">
    {items.map((item) => (
      <S.ListItem key={item} variants={itemVariants} />
    ))}
  </S.ListContainer>
);
