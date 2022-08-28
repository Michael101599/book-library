import NavBar from "./NavBar";

export default function Layout({children}){

    const containerStyle = {
        width: '90px',
        margin: '100px auto'
    }

    return(
        <div >
            <NavBar/>
            <div style={containerStyle}>{children}</div>
        </div>
    )
}