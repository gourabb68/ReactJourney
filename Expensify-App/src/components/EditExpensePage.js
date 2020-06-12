import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses';


export class EditExpensePage extends React.Component{
    onSubmit = (expenses)=>{                   
            this.props.editExpense(this.props.expenses.id,expenses);
           this.props.history.push('/');//switch me to the dashboard page      
    };

    onRemove = ()=>{
               
        this.props.removeExpense({id:this.props.expenses.id});
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
            
            
            <ExpenseForm 
            expenses={this.props.expenses}
            onSubmit={this.onSubmit}
            />
              <button onClick={this.onRemove}>Remove </button>
              
        </div>
        )
    }
}

const mapDispatchToProps =(dispatch,props) =>({
   
    editExpense: (id,expenses)=>dispatch(editExpense(id,expenses)),
    removeExpense: (id)=> dispatch(removeExpense({id}))
    
})

const mapStoreToProps =(state,props)=>{
return {
    expenses: state.expenses.find((expense)=>{
        return expense.id === props.match.params.id;
    })
};
}
export default connect(mapStoreToProps,mapDispatchToProps)(EditExpensePage);
