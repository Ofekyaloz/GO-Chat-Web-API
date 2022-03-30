
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Log Into GoChat</h1>
          <form>
              <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={"Email address"}></input>
              </div>
              <div className="mb-3">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder={"Password"}></input>
              </div>
              <div className="d-grid gap-2 col-12 mx-auto">
                    <button type="submit" className="btn btn-primary">Log In</button>
              </div>
              <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                  <label className="form-check-label" htmlFor="exampleCheck1">Keep me sign in</label>
              </div>
          </form>
          <div>
              <a href="#" className="link-primary">Forgot account?</a>
                <a href="#" className="link-primary">Sign up for GoChat</a>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">Button</button>
          </div>
      </header>
    </div>
  );
}

export default App;
