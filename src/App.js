import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import SubTotal from './Components/Subtotal/Subtotal';
import PickupSavings from './Components/PickupSavings/PickupSavings';
import TaxesFees from './Components/TaxesFees/TaxesFees';
import EstimatedTotal from './Components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PromoCode from './Components/PromoCode/PromoCode';
import {connect} from 'react-redux';
import {handleChange} from './Actions/promoCodeAction'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -4.5,
      taxes:0,
      estimatedTotal:0,
      disabledPromoButton: false
    };
  }

componentDidMount = () =>{
  this.setState({
    taxes: (this.state.total+this.state.PickupSavings)*.09
  },
  function () {
    this.setState({
      estimatedTotal:(this.state.total+this.state.PickupSavings+this.state.taxes)
    })
  })
}

giveDiscountHandler = () => {
   if (this.props.promoCode === 'kup') {
     this.setState(
       { estimatedTotal: this.state.estimatedTotal * 0.9 },
       function() {
         this.setState({
           disablePromoButton: true
         });
       }
     );
   }
 };
  render() {
    return (<div className="box">
      <Container className="basket-content">
        <SubTotal price={this.state.total.toFixed(2)}/>
        <PickupSavings price={this.state.PickupSavings}/>
        <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
        <hr className='line'/>
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
        <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
        <hr className='line'/>
        <PromoCode giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
             />
      </Container>
    </div>);
  }
}
const mapStateToProps = state=>({
  promoCode:state.promoCode.value
})
export default connect(mapStateToProps, {handleChange})(App)
