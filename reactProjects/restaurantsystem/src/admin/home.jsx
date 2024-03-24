
import dashboard from "../assets/images/admin/dashboard.jpg";
export default function Home(){
 return(
  <>
  
<body id="body-pd">
  <header class="header" id="header">
      <div class="header_toggle"> <i class='fa-solid fa-bars' id="header-toggle"></i> </div>
      {/* <!-- <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div> --> */}
  </header>
  <div class="l-navbar" id="nav-bar">
      <nav class="nav">
          <div> <a href="home.html" class="nav_logo"> <i class="fa-solid fa-utensils  fa-2x  " style={{color: "white"}}></i>  <span class="nav_logo-name">Restaurant System</span> </a>
              <div class="nav_list"> <a href="dashboard.html" class="nav_link active"> <i class='fa-solid fa-palette'></i> <span class="nav_name">Dashboard</span> </a> 
                <a href="categories.html" class="nav_link"> <i class='fa-solid fa-layer-group'></i> <span class="nav_name">Categories</span> </a> 
                <a href="items.html" class="nav_link"> <i class="fa-solid fa-list"></i> <span class="nav_name">Messages</span> </a>
                <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Bookmark</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Files</span> </a>
                 <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span class="nav_name">Stats</span> </a> </div>
          </div> <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
      </nav>
  </div>
  {/* <!--Container Main start--> */}
  <div class={{style:"height-100 bg-light"}}>
    <div >               
      <h4>Welcome</h4>
      <img src={dashboard} alt="" class="img-fluid  "/>
    </div>
  </div>
  </body>

  
  </>
 );

 } 