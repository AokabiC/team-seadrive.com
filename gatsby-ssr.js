const React = require("react")

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    />,
    <script
      type="text/javascript"
      src="https://b.st-hatena.com/js/bookmark_button.js"
      charSet="utf-8"
      async="async"
    ></script>,
  ])
}
