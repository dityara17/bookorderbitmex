import React from 'react';
import AbstractOrder from './AbstractOrder';

class AskOrder extends AbstractOrder {

  render() {
    return (
      <tr className="ask">
          <td className="fill-ask" style={{backgroundSize: this.getPercentage() + "% 100%"}}>
              {this.props.cumulative}
          </td>
        <td>{this.props.quantity}</td>
          <td>{this.props.price}</td>

      </tr>
    );
  }
}

export default AskOrder;
