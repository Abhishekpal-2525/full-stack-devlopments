import useState from 'react'; 4.6k (gzipped: 1.9k)
import [useLocalStorage ] from ' •/hooks/useLocalStorage';
import { useToggle } from '•/hooks/useToggle';

import { useFetch } from ' •/hooks/useFetch';
function App({
const [string, setString] = useState();
const [localStorage, setLocalStorage] = useLocalStorage('name', [I]);
 const {data } = useFetch( 'https: //fakestoreapi.com/products');
console. log('* ~ data:', data);
)};
I
/*
const [toggle, setToggle] = useToggle();
const [toggle_2, setToggle_2] = useToggle(); */