function LeftMenu() {
    return (
        <>
            <button className="btn" type="button" id="dropdownMenu"
                    data-bs-toggle="dropdown" aria-expanded="false">
                {/*3-dots icon*/}
                <i className="bi bi-three-dots-vertical"/>
            </button>

            <ul className="dropdown-menu">
                <li>
                    <button className="btn btn-light SideMenu" type="button" id="NewContactButton">
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
                    <button className="btn btn-light SideMenu" type="button" id="LogOutButton">
                        <span className="m-3"> LogOut </span>
                        {/*logout icon*/}
                        <i className="bi bi-box-arrow-right"/>
                    </button>
                </li>
            </ul>
        </>
    );
}

export default LeftMenu;