import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { votingReducer } from "./voting/votingSlice";
import storage from "redux-persist/lib/storage";

const votingPersistConfig = {
  key: "voting",
  storage,
  whitelist: ["like", "dislike", "favorites"],
};
const votingPersitedReducer = persistReducer(
  votingPersistConfig,
  votingReducer
);

export const store = configureStore({
  reducer: votingPersitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
