import React from 'react'

export default function Header() {
    return (
        <div className="header-horus">
            <div className="row">
            <div className="col-6 col-md-4 d-flex order-md-1">
                <ul className="nav flex-column ml-md-auto ml-0">
                <li className="nav-item m-2">
                    <a href='https://t.me/reshreshus' className="nav-link">
                    <i className="fab fa-telegram fa-4x" />
                    {/* Telegram */}
                    </a> 
                </li>
                <li className="nav-item m-2">
                    <a href='https://vk.com/reshreshus' className="nav-link">
                        <i className="fab fa-vk fa-4x" />
                    </a> 
                </li>
                <li className="nav-item m-2">
                    <a href='mailto:merumeru.ceo@yandex.ru' className="nav-link">
                        <i className="far fa-envelope fa-4x" />
                    </a> 
                </li>
                </ul>
            </div>
            <div className="col-xs-7 col-md-4 mt-auto order-md-2 order-1">
                <img id="horus" class="img-fluid" src="horus_white.png" alt="Horus Eye"/>
            </div>
            <div className="col-6 col-md-4 order-md-3">
                <ul className="nav flex-column">
                <li className="nav-item m-2">
                    <a href='https://twitter.com/reshreshus2' className="nav-link">
                    <i className="fab fa-twitter fa-4x" />
                    {/* Telegram */}
                    </a> 
                </li>
                <li className="nav-item m-2">
                    <a href='https://github.com/reshreshus' className="nav-link">
                        <i className="fab fa-github fa-4x" />
                    </a> 
                </li>
                <li className="nav-item m-2">
                    <a href='#projects' className="nav-link">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-project-diagram fa-4x" />
                            <h3>Projects</h3>
                        </div>
                    </a> 
                </li>
                </ul>
            </div>
            </div>
        </div>
    )
}
