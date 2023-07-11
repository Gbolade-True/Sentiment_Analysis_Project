import React, { Suspense } from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {pageurl} from 'utils/constants';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const Landing = React.lazy(() => import('components/landing'));
const Page404 = React.lazy(() => import('utils/page-404'));

const RouteList = () => (
  <Router>
    <Suspense 
      fallback={     
        <div className="full_page_loading">
          <div className='loading-ring-css' style={{ transform: 'scale(0.79)' }}>
          <div></div>
          </div>
        </div> 
      }>  
      <Routes>
        <Route path={pageurl.LANDING} element={<Landing />}></Route>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </Suspense>  
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
root.render(
  <React.StrictMode>
    <RouteList />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
