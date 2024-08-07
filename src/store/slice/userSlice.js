// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(localStorage.getItem('GGusers')) || [],
  currentUser: null,
  isLoged: false,
  isNotificationShown: false,
  isNotificationFavShown: false,
  isWarningModalOpen: false,
  favoriteItems: JSON.parse(localStorage.getItem('GGfavorite')) || [],
  usersHistory: JSON.parse(localStorage.getItem('orderHistory')) || [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
      state.isLoged = true;
    },
    logout(state) {
      state.currentUser = null;
      state.isLoged = false;
    },
    addUser(state, action) {
      state.users.push(action.payload);
      localStorage.setItem('GGusers', JSON.stringify(state.users));
    },
    updateUser(state, action) {
      const userIndex = state.users.findIndex(user => user.log === state.currentUser);
      state.users[userIndex] = { ...state.users[userIndex], ...action.payload };
      localStorage.setItem('GGusers', JSON.stringify(state.users));
    },
    showNotification(state) {
      state.isNotificationShown = true;
      setTimeout(() => {
        state.isNotificationShown = false;
      }, 2000);
    },
    showFavNotification(state) {
      if (state.currentUser) {
        state.isNotificationFavShown = true;
      }
      setTimeout(() => {
        state.isNotificationFavShown = false;
      }, 2000);
    },
    toggleWarningModal(state) {
      state.isWarningModalOpen = !state.isWarningModalOpen;
    },
    addToFavorites(state, action) {
      state.favoriteItems.push(action.payload);
      localStorage.setItem('GGfavorite', JSON.stringify(state.favoriteItems));
    },
    removeFromFavorites(state, action) {
      state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload.id);
      localStorage.setItem('GGfavorite', JSON.stringify(state.favoriteItems));
    },
    addUserHistory(state, action) {
      state.usersHistory.push(action.payload);
      localStorage.setItem('orderHistory', JSON.stringify(state.usersHistory));
    },
  },
});

export const {
  login, logout, addUser, updateUser, showNotification, showFavNotification, toggleWarningModal, addToFavorites, removeFromFavorites, addUserHistory,
} = userSlice.actions;
export default userSlice.reducer;
