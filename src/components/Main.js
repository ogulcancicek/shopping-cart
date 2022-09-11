import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Shop/Products';


const Main = () => {
    return (
        <>
        <Routes>
            <Route exact path='/' element={<Homepage /> }/>
            <Route exact path='/products' element={<Products /> }/>
        </Routes>
        </>
    );
}

export default Main;