import React from "react";
import picture from "../images/headshot2.jpg";
import Footer from "./Footer.js";

export default function Main() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row" id="hero">
                    <h2>Analyst | Consultant | Developer</h2>
                </div>
                <div className="row" id="aboutme">
                    <div className="col-2">
                        <h2 className="display-5 text-end">About Me</h2>
                    </div>
                    <div className="col-10">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img
                                        className="img-fluid rounded-start"
                                        src={picture}
                                        alt="Bradley headshot"
                                    />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <p>
                                            From my first IT job, until my most recent one, I sought
                                            opportunities to use data to help my employer work efficiently
                                            and improve processes. I have worked with and personally
                                            developed database applications for a variety of business
                                            processes.
                                        </p>
                                        <p>
                                            Throughout my career, I have consistently been tasked with
                                            solving difficult problems. While troubleshooting problems, I
                                            create clear documentation and perform root cause analysis to
                                            prevent problems from recurring. I also create value by
                                            thoroughly understanding the technical aspects of problems and
                                            clearly communicating them to stakeholders through charts,
                                            graphs, and other media. From the start of my career, I have
                                            successfully engaged with all levels of the organization using
                                            my interpersonal and technical skills to work collaboratively
                                            toward solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <h2 className="display-5 text-end">Work</h2>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title mb-3">
                                    <a href="https://brouiller.github.io/professional-portfolio/">
                                        <span className="rounded p-1">Professional Portfolio</span>
                                    </a>
                                </div>
                                HTML/CSS/Bootstrap
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title mb-3">
                                    <a href="https://brouiller.github.io/password-generator/">
                                        <span className="rounded p-1">Password Generator</span>
                                    </a>
                                </div>
                                HTML5/CSS/JavaScript
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <h2 className="display-5 text-end"></h2>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title mb-3">
                                    <a href="https://babyinsite.herokuapp.com">
                                        <span className="rounded p-1">Baby In Site</span>
                                    </a>
                                </div>
                                Sequelize/Handlebars/Express
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title mb-3">
                                    <a href="https://github.com/brouiller/note-taker">
                                        <span className="rounded p-1">Note Taker</span>
                                    </a>
                                </div>
                                Node/Express
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}
