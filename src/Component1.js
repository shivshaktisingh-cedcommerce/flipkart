import React  from 'react'
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4"

 class Component1 extends React.Component {
  render() {
    return (<>
      <div className="component1">
          <div className="component11">
              <img src="./Flipkart.png" className="flipkartlogo"></img>
              <input type="text" className="component12" placeholder="Search for Products,brands and more"/>
              <input type="button" className="loginbutton"value="Login"/>
              <span className="component13">Become a seller</span>
              <span className="component13">More  <i class="fa fa-angle-down directionicon"></i></span>
              <span className="component14"><i className="fa fa-shopping-cart component141"></i> Cart</span>
          </div>
      </div>
      <Component2/>
      <Component3/>
      <Component4/>
      </>
    )
  }
}
export default Component1;
