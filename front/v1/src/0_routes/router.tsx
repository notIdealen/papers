import { createBrowserRouter } from 'react-router-dom';
// import AnnualIncomePage from '../3_pages/AnnualIncomePage/AnnualIncomePage';
import InputRedux from '../3_pages/Test/Input-redux';
import App from '../App';
import DNDCard from '../3_pages/Test/DnD';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/test',
        element: <InputRedux/>,
    },
    {
        path: '/dnd',
        element: <DNDCard/>,
    },
    // {
    //     path: '/',
    //     element: <AnnualIncomePage/>,
    // },
]);
