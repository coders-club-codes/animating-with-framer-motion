import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListContainer = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  background: #212329;
  padding: 80px;
  border-radius: 16px;
`;

export const ListItem = styled(motion.li)`
  width: 50px;
  height: 50px;
  background: #ff2748;
  border-radius: 8px;
`;
