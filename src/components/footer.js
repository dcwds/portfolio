import React from "react"

export default () => (
  <>
    <footer className="navigation">
      <section className="note">
        <h3>Dalton Woods</h3>

        <p>
          Product designer &amp; front-end developer.
        </p>
      </section>
      
      <section className="elsewhere-list">
        <h3>Elsewhere.</h3>

        <ul className="nav-items">
          <li className="dribbble">
            <a
              href="https://dribbble.com/dcwoods"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dribbble
            </a>
          </li>
          <li className="github">
            <a
              href="https://github.com/daltonwoods"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://twitter.com/daltonwoods"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>

      <section className="copyright">
        <small>&copy; Copyright 2019</small>
      </section>
    </footer>
  </>
)
