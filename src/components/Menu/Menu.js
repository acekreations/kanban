import React, { PureComponent } from "react";

class Menu extends PureComponent {
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
            <div id="menuContainer">
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
                        <li>Engineering</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;
