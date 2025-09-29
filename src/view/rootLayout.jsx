import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export function RootLayout(){
    return(
        <div>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
}