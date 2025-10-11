import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { ToastContainer} from 'react-toastify';
export function RootLayout(){
    return(
        <div className="root">
            <ToastContainer/>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
}