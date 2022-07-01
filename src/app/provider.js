import {createContext,useState} from 'react';

const Provider = ({ children }) =>{
    const [state,setState] = useState([]);

    const addItem = (newItem, cantidad) => {
        !items.find(item => item.id === newItem.id) && setState([...items, {...newItem, cantidad}]);
    };

    const removeItem = id => {
        setState(state.filter(item => item.id !== id))
    };

    const clear = () => setState([]);
    // const isInCart = (id) => items.find(item => item.id === id) ? true : false;

    const isInCart = (producto) => {
        return state.filter(productoInCar => productoInCar.id === producto.item.id).length !== 0 ? true : false;
    }

    const addToCart = (producto) => {
        if(isInCart(producto)) return
        else setState([...state, producto.item])
    }

    return (            
            <AppContext.Provider value={[state,setState, addItem, removeItem, clear, isInCart, addToCart]}>
                {children}
            </AppContext.Provider>  
    );
}

export default Provider;
export const AppContext = createContext();