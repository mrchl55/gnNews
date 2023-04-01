import {Outlet} from 'react-router-dom';
import SideMenu from "../../components/Layout/SideMenu/SideMenu";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Content from "../../components/Layout/Content/Content";

const RootLayout = () => {
    return <>
        <Header/>
        <Content>
            <SideMenu/>
            <Outlet/>
        </Content>
        <Footer/>
    </>
}
export default RootLayout