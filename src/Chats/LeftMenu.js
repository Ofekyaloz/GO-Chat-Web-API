function LeftMenu({Logout}) {
    return (
        <span>
            <button className="btn" type="button" id="dropdownMenu"
                    data-bs-toggle="dropdown" aria-expanded="false">
                {/*3-dots icon*/}
                <i className="bi bi-three-dots-vertical"/>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button className="btn btn-light SideMenu" type="button" id="NewContactButton"
                            data-bs-toggle="modal" data-bs-target="#Modal-new-contact">
                        <span className="m-3"> New Contact </span>
                        {/*contact icon*/}
                        <i className="bi bi-person-plus-fill"/>
                    </button>
                </li>
                <li>
                    <button className="btn btn-light SideMenu" type="button" id="SearchButton">
                        <span className="m-3"> Search </span>
                        {/*search icon*/}
                        <i className="bi bi-search"/>
                    </button>
                </li>
                <li>
                    <a className="btn btn-light SideMenu" type="button" id="LogOutButton" onClick={Logout} href="/">
                        <span className="m-3"> LogOut </span>
                        {/*logout icon*/}
                        <i className="bi bi-box-arrow-right"/>
                    </a>
                </li>
            </ul>
        </span>
    );
}

export default LeftMenu;