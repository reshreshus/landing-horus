import React from 'react'

export default function SocialLinks(props) {
    const { cName } = props;
    return (
        <div className={cName}>
             <div className="social-link-container">
                <a href='https://t.me/reshreshus' className="nav-link">
                    <i className="fab fa-telegram fa-4x" />
                </a> 
            </div>
            <div className="social-link-container">
                <a href='mailto:merumeru.ceo@yandex.ru' className="nav-link">
                    <i className="far fa-envelope fa-4x" />
                </a> 
            </div>
            <div className="social-link-container">
                <a href='https://vk.com/reshreshus' className="nav-link">
                    <i className="fab fa-vk fa-4x" />
                </a> 
            </div>
            <div className="social-link-container">
                <a href='#projects' className="nav-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-project-diagram fa-4x" />
                        <h3>Projects</h3>
                    </div>
                </a> 
            </div>
            <div className="social-link-container">
                <a href='https://twitter.com/reshreshus2' className="nav-link">
                <i className="fab fa-twitter fa-4x" />
                </a> 
            </div>
            <div className="social-link-container">
                <a href='https://github.com/reshreshus' className="nav-link">
                    <i className="fab fa-github fa-4x" />
                </a> 
            </div>
            
            <div className="social-link-container">
                <a href='https://merume.ru' className="nav-link">
                    <h3>Blog</h3>
                    <i className="fas fa-bus fa-4x" />
                </a> 
            </div>
        </div>
    )
}
