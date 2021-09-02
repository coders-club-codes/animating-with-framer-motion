import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Square = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #ff2748;
  border-radius: 16px;
`;
