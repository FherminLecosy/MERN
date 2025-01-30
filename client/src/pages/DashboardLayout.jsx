import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const DashboardContext = createContext()
const DashboardLayout = () => {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async() => {
    console.log('logout user');
  };

    return (
    <DashboardContext.Provider value={{toggleDarkTheme,toggleSidebar,logoutUser,user,showSidebar,isDarkTheme}}>
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <NavBar />
            <div className='dashboard-page'>
              {<Outlet />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;