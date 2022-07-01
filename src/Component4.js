import React from 'react'
import './Component4.css'

class Component4 extends React.Component{
    render(){
        return (
            <div id='Component4'>
                <div className='left'>
                    <div className='top'>
                        <p><b>Deals of the Day</b>  <i class="fa fa-clock-o"></i>23:10:50 Left</p>
                        <a href='#' className='btn btn-primary'>View all</a>
                    </div>
                    <div id='card'>
                        <div className='card-item'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-n0rgsI9mpEOL-XgAF6VLyQ9KtqQTMwcKA&usqp=CAU'></img>
                            <div>
                                <p><b>Deals of Furnishing</b></p>
                                <p className='green'>Upto 80% off</p>
                                <p>Cushions ,Pillows and more</p>
                            </div>
                        </div>
                        <div className='card-item'>
                            <img src='https://cdn1.smartprix.com/rx-ie4VB5vjH-w1200-h1200/e4VB5vjH.jpg'></img>
                            <p><b>Air fryers</b></p>
                            <p className='green'>Upto 55% off</p>
                            <p>Top Deals</p>
                        </div>
                        <div className='card-item'>
                            <img src='https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
                            <p><b>Best Deals on Kids cloth</b></p>
                            <p className='green'>Min. 60% + Extra 10% off</p>
                            <p>Hurry, Don't miss out</p>
                        </div>
                        <div className='card-item'>
                            <img src='https://m.media-amazon.com/images/I/513JoEuR0-L.jpg'></img>
                            <p><b>Remote control, indoor game</b></p>
                            <p className='green'>Upto 80% + Extra 10% off</p>
                            <p>Miss and cheff</p>
                        </div>
                        <div className='card-item'>
                            <img src='https://m.media-amazon.com/images/I/91GFaLGGkbL._UY550_.jpg'></img>
                            <p><b>Kurta Sets</b></p>
                            <p className='green'>Under 4999</p>
                            <p>Trending Styles</p>
                        </div>
                        <div className='card-item'>
                            <img src='https://stylesatlife.com/wp-content/uploads/2019/05/Floral-Bedsheet-Design.jpg.webp'></img>
                            <p><b>Designer Bedsheets</b></p>
                            <p className='green'>From 159</p>
                            <p>Best Selling</p>
                        </div>
                        <div className='card-item'>
                            <img src='https://cdn.sareeka.com/image/data2019/net-pink-patch-border-classic-designer-saree-128224.jpg'></img>
                            <p><b>Sarees for wedding</b></p>
                            <p className='green'>Upto 80% off</p>
                            <p>Banarsi,Kanjivaram</p>
                        </div>
                        <input type="button" className='next' value=">"/>
                    </div>
                </div>
                <div>
                    <img id='flip' src='./Flipkart1.png'></img>
                </div>
            </div>
          )
    }
 
}

export default Component4