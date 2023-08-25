import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./Pages/HomePage"));
const VotingPage = lazy(() => import("./Pages/VotingPage"));
const BreedsPage = lazy(() => import("./Pages/BreedsPage"));
const GalleryPage = lazy(() => import("./Pages/GalleryPage"));
// const MovieInfoPage = lazy(() => import('../Pages/MovieInfoPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>...Loading</p>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/voting"
            element={
              <Suspense fallback={<p>...Loading</p>}>
                <VotingPage />
              </Suspense>
            }
          />
          <Route
            path="/breeds"
            element={
              <Suspense fallback={<p>...Loading</p>}>
                <BreedsPage />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<p>...Loading</p>}>
                <GalleryPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// TODO
// needs not found page
