import "./Header.css";

import headerlogo from "/svgs/logo-header.svg";
import minicart from "/svgs/mini-cart.svg";
import lupa from "/svgs/Search.svg";
import ellipse from "/svgs/ellipse.svg";

import { Navigator } from '../Navigator/Navigator';

export function Header() {
    return (

        <header className="header-container">

            <section>
                <img src={headerlogo} alt="logo header" />

                <label>
                    <input type="text" placeholder="Pesquisar produto" />
                    <img src={lupa} alt="lupa logo" />
                </label>

                <div>
                    <a href="#"> Cadastra-se </a>
                    <button>Entrar</button>
                </div>

                <div className="cart-img-container">
                    <div className="ellipse-container">
                        <span>2</span>
                        <img src={ellipse} alt="" />
                    </div>
                    <img className="cart-img" src={minicart} alt="mini cart logo" />
                </div>
            </section>

            <Navigator className="navigator-container" />
        </header>
    );
}
