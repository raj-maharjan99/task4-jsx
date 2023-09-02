import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h2> Frontend Developer Course Details</h2>
      </header>
      <hr></hr>
      <main>
        <div className="center-box">
          <ol>
            <li>
              <a href="https://www.w3schools.com/html/default.asp">HTML</a>{" "}
            </li>
            <li>
              <a href="https://www.w3schools.com/css/default.asp">CSS</a>
            </li>
            <li>
              {" "}
              <a href="https://www.w3schools.com/js/default.asp"> JavaScript</a>
            </li>
            <li>
              {" "}
              <a href="https://www.w3schools.com/react/default.asp"> React</a>
            </li>
          </ol>
          <div class="box"></div>
        </div>
      </main>
      <footer>
        <a href="https://www.takeo.ai/">For More Details</a>
        <p> Copyright &copy; 2023 Raj Maharjan</p>
        <aside></aside>
      </footer>
    </div>
  );
}

export default App;
