//EXPENSES REDUCER
//variable for default state value
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense] //spread operator
        //   state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.update }
                } else {
                    return expense;
                };
            })
         case 'SET_EXPENSE':
             return action.expense;
        default:
            return state;
    }

};

export default expenseReducer;