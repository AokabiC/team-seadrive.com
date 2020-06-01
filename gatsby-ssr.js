const React = require("react")

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <React.Fragment>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v7.0"
      ></script>
    </React.Fragment>,
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
