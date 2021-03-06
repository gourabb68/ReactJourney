import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
//first value is dispatch
export const ExpenseListItem = ({ description,amount,createdAt,id})=>{
    return (
        <Link className="list-item" to={`/edit/${id}`} activeClassName="is-active" exact={true}>
          <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
          </div>
         <h3 className="list-item__data"> {numeral(amount/100).format('0,0.00')} </h3>
           

          </Link>
             
 
    );
}


export default connect()(ExpenseListItem);