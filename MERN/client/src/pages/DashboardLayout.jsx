import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import customFetch from '../utils/customFetch';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardContext = createContext()
export const loader = async () => {
  try{
    const{data}= await  customFetch.get('/users/current-user');
    return data;
  }catch(error){
    return  redirect('/');
  }

}

const DashboardLayout = ({isDarkThemeEnabled}) => {
  const navigate = useNavigate();
  const {user} = useLoaderData();
  // Temp
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('isDarkTheme', newDarkTheme);
  };
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async() => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logout successful');

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
              {<Outlet  context={{user}}/>}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;