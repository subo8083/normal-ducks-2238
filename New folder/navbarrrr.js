function navbar(){
    return  `<div id="nav1">
    <div>
    <img id="logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/BestBuy_Logo_2020-190616.png;maxHeight=80;maxWidth=136">
    <div id="menu">
    <i onclick = "showmenu()"class="fa fa-bars" style="font-size:20px"></i>
    <a  id="menuclose">Menu</a>
    <div id="options">
        <div><div class="arrow"></div><p>Deals</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6"></i></div>
        <div><p>Support & Services </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p>Brands </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p>Featured </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p style="color:black">Shop by Department </p></div>
        <div><p>Appliances </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p>TV & Home Theater</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p>Computers & Tables</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6;background-color:transparent"></i></div>
        <div><p>Cameras,Camcorders & Drones</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p>Cell Phones</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
        <div><p>Audio   </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
    </div>
    </div>
    <div id="searchbar">
       <input type="text" id="search" placeholder="Search Best Buy"/>
        <button style="font-family:Arial, FontAwesome;text-align: right ; color:#0752c6">&#xF002</button>
        <div id="q_append"></div>
    </div>
    </div>
    <div>
    <div id="location">
    <i class="fa fa-map-location-dot"></i>
    <a href="">Aiea</a>
    </div>
    <div id="cart">
        <div>
        <i class="fa fa-cart-shopping" ></i>
        <p id="cart_count"></p>
        <a href="cart.html">Cart</a>
        </div>
        </div>
</div></div>
  <div id="nav2">
    <!-- <div id="shop"> -->
        <a href="#">Top Deals</a>
        <a href="#">Deals of the day</a>
        <a href="#">Totaltech membership</a>
        <a href="#">Credit card</a>
        <a href="#">Gift card</a>
    <!-- </div>
    <div id="order"> -->
        <a href="#" onclick="show_log_menu()"><i class="fa fa-user-o" style="font-size:13px;"> </i>  Account <i class="fa fa-angle-down" style="font-size:13px"></i></a>
        <div id="login_sign">
            <div class="arrow2"></div>
            <p>Becoming a My Best Buy® member comes with
            easy order tracking, rewards, offers and more.</p>
            <button>Sign in</button>
            <button>Create Account</button>
        </div>
        <p style="color: white;">Recently Viewed  <i class="fa fa-angle-down" style="font-size:13px"></i></p>
        <p id="order" style="color: white;">Order Status <i class="fa fa-angle-down" style="font-size:13px"></i></p>
        <p id="saved" style="color: white;">Saved Items <i class="fa fa-angle-down" style="font-size:13px"></i></p>
    <!-- </div> -->
</div>`;
}