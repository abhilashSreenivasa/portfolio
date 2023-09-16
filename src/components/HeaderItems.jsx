import NavigationMenu from "./NavigationMenu";

function HeaderItems(){
    return (
        <>
            <div id='header-name'>Abhilash Sreenivasa</div>
            <div id='header-identity'>Student | Software Engineer | Full-Stack Developer</div>
            <hr className='hr-large'/>
            <div className="mobile-container">
                <NavigationMenu />
            </div>
        </>
    )
}
export default HeaderItems