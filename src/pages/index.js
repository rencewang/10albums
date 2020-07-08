import React from "react"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

import Album from "../components/album"

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


export default () =>
  <main>
    <Album
      year="2010"
      name="Speak Now"
      artist="Taylor Swift"
      quote={"Long live all the \n mountains we moved \n I had the time of my life \n Fighting dragons with you"}
      albumDescription={"Taylor Swift refuses to be defined by critics and the media with this self-written introspection that captures the complicated rush of teenage and maturity."}
      albumCover="http://placekitten.com/300/200"
    />
    {/* <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
    >   
      <div class="item"><h4>1</h4></div>
      <div class="item"><h4>2</h4></div>
      <div class="item"><h4>3</h4></div>
      <div class="item"><h4>4</h4></div>
      <div class="item"><h4>5</h4></div>
      <div class="item"><h4>6</h4></div>
      <div class="item"><h4>7</h4></div>
      <div class="item"><h4>8</h4></div>
      <div class="item"><h4>9</h4></div>
      <div class="item"><h4>10</h4></div>
      <div class="item"><h4>11</h4></div>
      <div class="item"><h4>12</h4></div>
    </OwlCarousel> */}
  </main>
