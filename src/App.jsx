import Nav from "./MainPage/Nav";
import Hero from "./MainPage/Hero";
import Ambassador from "./MainPage/Ambassador";
import Contestants from "./MainPage/Contestants";

function App() {
  return (
    <section className="">
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Ambassador />
      </section>
      <section>
        <Contestants />
      </section>
    </section>
  );
}

export default App;
