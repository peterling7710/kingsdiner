import {withRouter} from 'react-router-dom';
import {useEffect} from 'react';


export const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return children || null;
  });

