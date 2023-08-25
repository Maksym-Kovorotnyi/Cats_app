// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// // import { walletReducer } from "./wallet/walletSlice";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "cats",
//   storage,
//   whitelist: ["likes", "favorites", "deslikes"],
// };

// export const store = configureStore({
//   reducer: persistReducer(persistConfig, "someReducer"),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
