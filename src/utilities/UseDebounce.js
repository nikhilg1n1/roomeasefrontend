import {useState , useEffect} from 'react';
import { handler } from 'tailwindcss-animate';
export const useDebounce=(value,delay=400)=>{
    const [debounced , setDebounced] = useState(value)

    useEffect(()=>{
        const handler =setTimeout(() =>{
            setDebounced(value)
        },delay)
        return () => clearTimeout(handler)

    },[value,delay]);
    return debounced;

};