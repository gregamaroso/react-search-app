/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";
import Search from "./search";

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
    // Start Here
    // ...
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <div className="top-row">
              <h1>ELC</h1>
              <Search />
            </div>
            <div className="bottom-row">
              <nav>
                <a href="#" className="nav-item">
                  HOLIDAY
                </a>
                <a href="#" className="nav-item">
                  WHAT'S NEW
                </a>
                <a href="#" className="nav-item">
                  PRODUCTS
                </a>
                <a href="#" className="nav-item">
                  BESTSELLERS
                </a>
                <a href="#" className="nav-item">
                  GOODBYES
                </a>
                <a href="#" className="nav-item">
                  STORES
                </a>
                <a href="#" className="nav-item">
                  INSPIRATION
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

// Export out the React Component
export default Menu;
