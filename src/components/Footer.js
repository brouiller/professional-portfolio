import React from 'react';

export default function Footer() {
    return (
        <footer className="row d-flex align-items-center justify-content-around">
            <div className="col-2">
                <h2 className="display-5 text-end">Contact Me</h2>
            </div>
            <div className="col-2">
                <p>
                    <a className="rounded p-3" href="tel:+12058874444">
                        205-887-4444
                    </a>
                </p>
            </div>
            <div className="col-2">
                <p>
                    <a className="rounded p-3" href="mailto:me@bradleykimbrell.com">
                        Email me
                    </a>
                </p>
            </div>
            <div className="col-2">
                <p>
                    <a className="rounded p-3" href="https://github.com/brouiller">
                        GitHub
                    </a>
                </p>
            </div>
            <div className="col-2">
                <p>
                    <a
                        className="rounded p-3"
                        href="https://www.linkedin.com/in/bradleykimbrell/"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>
        </footer>
    )
}