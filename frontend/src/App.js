import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { useCurrentUser } from "./contexts/CurrentUserContext";

import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GalleryCreateForm from "./pages/GalleryCreateForm";
import GalleryUpdateForm from "./pages/GalleryUpdateForm";
import NotFound from "./components/NotFound";

import "./api/axiosDefaults";
import styles from "./App.module.css";

function App() {
  const currentUser = useCurrentUser();

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Spacing}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/services" render={() => <Services />} />
          <Route exact path="/gallery" render={() => <Gallery />} />
          {currentUser && <Route exact path="/gallery/create" render={() => <GalleryCreateForm />} />}
          {currentUser && <Route exact path="/gallery/:id/update" render={() => <GalleryUpdateForm />} />}
          <Route render={() => <NotFound /> } />
        </Switch>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
