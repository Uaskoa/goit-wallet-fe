import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import transactionsActions from './transactions-actions';

const monthNow = new Date().getMonth();
const yearNow = new Date().getFullYear();

const items = createReducer([], {
  [transactionsActions.fetchTransactionsSuccess]: (_, { payload }) => {
    return payload;
  },
  [transactionsActions.addTransactionsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
});

const itemsByDate = createReducer([], {
  [transactionsActions.fetchTransactionsByDateSuccess]: (_, { payload }) =>
    payload,
});

const error = createReducer(null, {
  [transactionsActions.fetchTransactionsError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [transactionsActions.addTransactionError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [transactionsActions.fetchTransactionsSuccess]: () => null,
  [transactionsActions.addTransactionSuccess]: () => null,
});

const balance = createReducer(null, {
  [transactionsActions.fetchTransactionsSuccess]: (_, { payload }) => {
    if (payload.length === 0) {
      return null;
    }
    const lastTransaction = payload[payload.length - 1];
    return lastTransaction?.balanceAfter || null;
  },
});

const month = createReducer(monthNow, {
  [transactionsActions.changeMonth]: (_, { payload }) => payload,
});
const year = createReducer(yearNow, {
  [transactionsActions.changeYear]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  itemsByDate,
  error,
  month,
  year,
  balance,
});
