import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// <Switch>
// <Route exact path="/" component={Home} />
// <Route path="/about" component={About} />
// <Route path="/blog" component={Blog} />
// <Route path="/quiz" component={Quiz} />
// <Route path="/contact" component={Contact} />
// </Switch>
