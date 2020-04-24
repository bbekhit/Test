import moment from "moment";
// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};

// *********************************************************************************
export default (
  products,
  { types, searchFilter, minPrice, maxPrice, favourites }
) => {
  return products.filter((item, i) => {
    const textMatch = item.brand
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const productMatch = !types.length ? item : types.indexOf(item.brand) > -1;

    // const favouriteMatch = favourites.length
    //   ? favourites.map(favourite => favourite.product).indexOf(item._id) > -1
    //   : item;

    let favouriteMatch;
    if (favourites.length === 0) {
      favouriteMatch = item;
    } else if (favourites.length > 0) {
      favouriteMatch =
        favourites.map(favourite => favourite.product).indexOf(item._id) > -1;
    } else if ((favourites = false)) {
      favouriteMatch = false;
    }

    const priceMatch =
      item.price >= Number(minPrice) && item.price <= Number(maxPrice);
    return textMatch && productMatch && priceMatch && favouriteMatch;
  });
};
// *********************************************************************************
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

// *********************************************************************************
const initialState = {
  contacts: [],
  contact: {},
  offers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };
    case CHANGE_OFFER_STATUS:
      const nextState = [...state.offers];
      const offerIndex = nextState.findIndex(o => o.id === action.offerId);
      nextState[offerIndex].status = action.status;
      return {
        ...state,
        offers: nextState,
      };
    default:
      return state;
  }
}

// test test test test
let myFilter = expenses => {
  return expenses.filter(expense => {
    // const createdAtMoment = moment(expense.createdAt);
    // const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    // const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    // return startDateMatch && endDateMatch && textMatch;
    const idMatch = expense.id === 1;
    const nameMatch = expense.name === "Rent";
    console.log("id : ", idMatch);
    console.log("name : ", nameMatch);
    return idMatch && nameMatch;
  });
};

let arr = [
  {
    name: "rent",
    id: 1,
  },

  {
    name: "Car",
    id: 2,
  },

  {
    name: "grocery",
    id: 1,
  },
];
myFilter(arr);
