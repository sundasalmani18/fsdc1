import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bodyMenu">
        <div id="body-pd">
          <header className="header" id="header">
            <div className="header_toggle"> <i className='fa-solid fa-bars' id="header-toggle"></i> </div>
          </header>
          <div className="l-navbar" id="nav-bar">
            <nav className="nav">
              <div>
                <a href="home.html" className="nav_logo "><i className="fa-solid fa-utensils  fa-2x  "
                  style={{color: "white"}}></i> <span className="nav_logo-name">Restaurant System</span>
                </a>


                <div class="nav_list"> <a  class="nav_link active"> <i
                            class='fa-solid fa-palette'></i> <span class="nav_name">Dashboard</span> </a>
                    <a onClick={() => navigate("/admin/category")}  class="nav_link"> <i class='fa-solid fa-layer-group'></i> <span
                            class="nav_name">Categories</span> </a>
                    <a onClick={() => navigate("/admin/items")} class="nav_link"> <i class="fa-solid fa-list"></i> <span
                            class="nav_name">Items</span> </a>
                    <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span
                            class="nav_name">Bookmark</span> </a>
                    <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span
                            class="nav_name">Files</span> </a>
                    <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span
                            class="nav_name">Stats</span> </a>
                </div>

                {/* <div className="nav_list"> <a href="dashboard.html" className="nav_link active"> <i
                  className='fa-solid fa-palette'></i> <span className="nav_name">Dashboard</span> </a>
                  <a href="categories.html" className="nav_link"> <i className='fa-solid fa-layer-group'></i> <span
                    className="nav_name">Categories</span> </a>
                  <a href="items.html" className="nav_link"> <i className="fa-solid fa-list"></i> <span
                    className="nav_name">Items</span> </a>
                  <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span
                    className="nav_name">Bookmark</span> </a>
                  <a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span
                    className="nav_name">Files</span> </a>
                  <a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span
                    className="nav_name">Stats</span> </a>
                </div> */}
              </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span
                className="nav_name">SignOut</span> </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}