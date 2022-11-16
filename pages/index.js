import Image from "next/image";
import Head from "next/head";
import Finance from "./Components/Finance";
import Sectionthree from "./Components/Sectionthree";

export default function Home() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
    </Head>
      <div className="nav">
        <div className="nav_logo" >
          <Image src="/../public/logo.png" alt="Logo" width={50} height={50} style={{ float: "left" }} className="imglogo"></Image>
          <h1 className="nav_logo_text">The Smart Traveller</h1>
        </div>
        <div>
        
          <ul className="nav_bar">
            <li className="navbar_link"><a className="link" href="#">Experiences</a></li>
            <li className="navbar_link"><a className="link" href="#">My Trip</a></li>
            <li className="navbar_link"><a className="link" href="#">Contact Us</a></li>
            <li className="navbar_link"><a className="link" href="#">Blog</a></li>
          </ul>
        </div>
      </div>
   
      <div className="hero">
        <h2 className="mainLine">YOUR BEST TRIP,<br />UNIQUE TO YOUR NEEDS, JUST<br /> FEW CLICKS AWAY</h2>
        <button className="plan_button">Plan your Trip</button>
      </div>
      <div className="main_body">
        <div className="finance">
        <Finance />
        </div>
        {/* ================================================ */}
        <div className="section_three">
          <h1 style={{ color: "black" }} className="section_three_heading">Don’t call it a dream, <br /><span style={{ color: "#00754A" }}>call it a plan</span></h1>
          <p className="section_three_p">Check out these trending attractions</p>
          <Sectionthree />
        </div>
        {/* ============================Section four========================================== */}
        <div className="section_four" style={{ marginBottom: "150px" }}>
          <h1 className="section_four_heading">Happening Now.....</h1>
          <div className="grid_container">
            <div className="section_four_card_one">
              <div className="food_img"></div>
              <div className="section_four_card_one_text">
                <div style={{ marginTop: "-50px" }} className="section_four_content">
                  <h4 className="bbq">BBQ at hidden waterfall</h4>
                  <p className="bbq_para" style={{ marginTop: "10px" }}>Sizzling hot muchies out of barbecue, in the middle of nowhere waterfall</p>
                </div>
                <div className="trip_plans" >
                  <p className="trip_plans_p">Plan Your Trip</p>
                  <p className="trip_plans_p" style={{ float: "right" }}>m</p>
                </div>
              </div>
            </div>
            <div className="section_four_card_two">
              <div className="camp_img"></div>
              <div className="section_four_card_two_text">
                <div>
                  <h4 className="riverside">Riverside camping at kasol </h4>
                  <p style={{ marginTop: "6px" }} className="riverside_para">A bad day camping is still better than a good day working</p>
                </div>
                <div className="trip_plan">
                  <p className="trip_plans_p">Plan Your Trip</p>
                  <p className="trip_plans_p" style={{ float: "right" }}>m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section_five" style={{ marginBottom: "100px" }}>
          <h2 className="section_five_main_heading">How it works</h2>
          <div className="main_grid">
            <div className="item item_one"></div>
            <div className="item item_two">
              <div className="section_five_text_width_item_one">
                <h1 className="item_text_align">Your Needs,<br /> Our Magic</h1>
                <p className="item_text_p">Share your trip requirements to feed our magical recommendation algorithm</p></div>
            </div>
            <div className="item item_three">
              <div className="section_five_text_width_item_two" >
                <h1 className="item_text_align">Start customising your itinerary</h1>
                <p className="item_text_p">Choose from a variety of stays & activities of your choice & budget</p>
              </div>
            </div>
            <div className="item item_four"></div>
            <div className="item item_five"></div>
            <div className="item item_six">
              <div className="section_five_text_width_item_two">
                <h4 className="item_text_align">Tap once & book it all</h4>
                <p className="item_text_p">Do all your stay, activities& transport booking at just one click, at only 20% booking amount</p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="footer">
        <div className="footer_inside" >
          <div className="footer_img"></div>
          <div >
            <p >Experience</p>
            <p>My Trip</p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>Blog</p>
          </div>
          <div>
            <p>Follow Us on</p>
            <div>
              <div className="insta"></div>
              <div className="linkdin"></div>
            </div>
          </div>
        </div>
        <div className="footer-copyright" style={{padding:"0 20px"}}>
          <div>
          <p className="copyright" >Copyright  2022 Travel Company. All Rights Reserved</p>
          <div className="mmw">
          <div className="mw_img"></div>
          <span className="web">Web Design Melbourne Make My Website</span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
