import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/createPage/CreatePage";
import PlaceView from "./pages/PlacesPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<CreatePage />}
                />
                <Route
                    path='/place-view'
                    element={<PlaceView />}
                />
            </Routes>
        </Router>
    );
}

export default App;
