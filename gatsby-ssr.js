const React = require("react")

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    // シェアボタン
    // FaceBook(必ず一番上)
    <React.Fragment>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v7.0"
      ></script>
    </React.Fragment>,

    // Twitter
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />,

    // はてブ
    <script
      type="text/javascript"
      src="https://b.st-hatena.com/js/bookmark_button.js"
      charset="utf-8"
      async="async"
    ></script>,
  ])
}
