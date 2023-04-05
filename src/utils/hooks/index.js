import { useContext } from 'react';
import sortContext from '../context/index.js';

const useSort = () => useContext(sortContext);

export default useSort;