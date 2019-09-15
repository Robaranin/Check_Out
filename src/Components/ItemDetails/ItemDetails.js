import React, {Component} from 'react';
import {Row, Col, Button, Collapse, Media} from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  render() {
    return (<div>
      <Button className='item-detail-button'  onClick={() => this.setState({
          open: !this.state.open
        })}>
        {
          this.state.open === false
            ? `See `
            : `Hide `
        }
        item detials {
          this.state.open === false
            ? ` +`
            : ` -`
        }
      </Button>
      <Collapse in={this.state.open}>
        <div>
          <Media>
            <img width={150} height={150} className="mr-3" src="https://www.equip4work.co.uk/media/img/shop/pb/044695.jpg" alt="Generic placeholder"/>
            <Media.Body>
              <h5>A Nice Chair</h5>
              <p>
                This is a very comfy chair, that our fearless leader sits on. We highly reccomend it to other leders out there :D
              </p>
              <Row className='show-grid'>
                <Col md={6}>
                  <strong>
                    {`$${this.props.price}`}
                  </strong>
                  <hr/>
                  <strong className='price-strike'>
                    {`$${this.props.price}`}
                  </strong>
                </Col>
                <Col md={6}> Qty: 1</Col>
              </Row>
            </Media.Body>
          </Media>

        </div>
      </Collapse>
    </div>);
  }
}
