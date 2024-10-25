import "../styles/navBar.css"

function NavBar() {
    return (
        <div>
            <nav className={"navbar"}>
                <ul className={"nav-list"}>
                    <li>
                        <a href={"/problems"}>Problems</a>
                    </li>
                    <li>
                        <a id={"navbarNextToMid"} href={"/courses"}>Courses</a>
                    </li>
                    <li>
                        <a id={"navbarMid"} href={"/"}>PyCourses</a>
                    </li>
                    <li>
                        <a id={"navbarNextToMid"} href={"/playground"}>Playground</a>
                    </li>
                    <li>
                        <a href={"/contact"}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar