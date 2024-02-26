import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GalleryCreateForm from "./pages/GalleryCreateForm";
import GalleryUpdateForm from "./pages/GalleryUpdateForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";

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
          <Route render={() => <p>Page not Found!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
