import React from 'react';

export default function MyHeader() {
    return (
        <header className="container-fluid">
            <div className="row">
                <h1 className="col-6 display-1">Bradley Kimbrell</h1>
                <nav className="navbar navbar-dark col-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#aboutme">
                            <span className="rounded p-3">About Me</span>
                        </a>
                        <a className="navbar-brand" href="#work">
                            <span className="rounded p-3">Work</span>
                        </a>
                        <a className="navbar-brand" href="#contactme">
                            <span className="rounded p-3">Contact Me</span>
                        </a>
                        <a
                            className="navbar-brand"
                            href="./assets/documents/BradleyKimbrellFullStackResume.pdf"
                        >
                            <span className="rounded p-3">Resume</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}