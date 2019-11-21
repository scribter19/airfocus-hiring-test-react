import { injectGlobal } from 'emotion'

injectGlobal`
  html,
  body {
    padding: 10px;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
          sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 13.5px;
    color: #333333;
    * {
      font-family: inherit;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      font-size: inherit;
      color: inherit;
    }
    * {
      box-sizing: border-box;
    }
  }
  #app {
    overflow: hidden;
  }
  h1 {
    font-size: 140%;
  }
  h2 {
    font-size: 130%;
  }
  h3 {
    font-size: 115%;
  }
  a {
    color: #3999f9;
    &:hover {
      color: #1f73b0;
    }
  }
  p {
    line-height: 1.5em;
    margin-top: 0;
  }
`
