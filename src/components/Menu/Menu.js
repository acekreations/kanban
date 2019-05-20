import React, { Component } from "react";

class Menu extends Component {
    state = {
        menuIsClosed: true
    };

    handleClick() {
        var menuSpacer = document.getElementById("menuSpacer");
        var menu = document.getElementById("menu");
        var menuItems = document.getElementsByClassName("menuItems");
        menuItems = menuItems[0];
        var burger = document.getElementsByClassName("menuHamburger");
        burger = burger[0];
        if (this.state.menuIsClosed) {
            menuSpacer.classList.add("menuActive");
            menu.classList.add("menuActive");
            menuItems.classList.add("menuItemsActive");
            burger.classList.add("hamburgerActive");
            this.setState({
                menuIsClosed: false
            });
        } else {
            menuSpacer.classList.remove("menuActive");
            menu.classList.remove("menuActive");
            menuItems.classList.remove("menuItemsActive");
            burger.classList.remove("hamburgerActive");
            this.setState({
                menuIsClosed: true
            });
        }
    }

    render() {
        return (
            <div>
                <div
                    id="menuSpacer"
                    className="w-60px h-60px flex flex-direction-column align-items-center justify-content-center"
                    onClick={this.handleClick.bind(this)}
                >
                    <div className="menuHamburger">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="menu" className="w-60px">
                    <ul className="menuItems">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;
