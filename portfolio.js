//Code from reactjs.org

"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "CV wurde heruntergeladen";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Download CV"
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

function fadeOutPreloader(t, e) {
  (opacity = 1),
    (interval = setInterval(function () {
      opacity <= 0
        ? ((t.style.zIndex = 0),
          (t.style.opacity = 0),
          (t.style.filter = "alpha(opacity = 0)"),
          (document.documentElement.style.overflowY = "auto"),
          document.getElementById("preloader").remove(),
          clearInterval(interval))
        : ((opacity -= 0.1),
          (t.style.opacity = opacity),
          (t.style.filter = "alpha(opacity = " + 100 * opacity + ")"));
    }, e));
}

//Code from https://longpdo.github.io/ for Textrotate

setTimeout(function () {
  fadeOutPreloader(document.getElementById("preloader"), 69);
}, 1500),
  $(document).ready(function () {
    $(window).on("beforeunload", function () {
      window.scrollTo(0, 0);
    });
    var t = document.getElementById("txt-rotate"),
      e = t.getAttribute("data-rotate"),
      i = t.getAttribute("data-period"),
      o =
        (setTimeout(function () {
          new TxtRotate(t, JSON.parse(e), i);
        }, 1500),
        document.createElement("style"));
    (o.type = "text/css"),
      (o.innerHTML = "#txt-rotate > .wrap { border-right: 0.08em solid #666 }"),
      document.body.appendChild(o),
      AOS.init({
        disable: "mobile",
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
        once: !0,
      }),
      randomizeOrder();
  });
var TxtRotate = function (t, e, i) {
  (this.toRotate = e),
    (this.el = t),
    (this.loopNum = 0),
    (this.period = parseInt(i, 10) || 2e3),
    (this.txt = ""),
    this.tick(),
    (this.isDeleting = !1);
};
function randomizeOrder() {
  for (
    var t = document.getElementById("skills"),
      e = t.getElementsByTagName("div"),
      i = document.createDocumentFragment();
    e.length;

  )
    i.appendChild(e[Math.floor(Math.random() * e.length)]);
  t.appendChild(i);
}
TxtRotate.prototype.tick = function () {
  var t = this.loopNum % this.toRotate.length,
    t = this.toRotate[t],
    e =
      (this.isDeleting
        ? (this.txt = t.substring(0, this.txt.length - 1))
        : (this.txt = t.substring(0, this.txt.length + 1)),
      (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"),
      this),
    i = 200 - 100 * Math.random();
  this.isDeleting && (i /= 5),
    this.isDeleting || this.txt !== t
      ? this.isDeleting &&
        "" === this.txt &&
        ((this.isDeleting = !1), this.loopNum++, (i = 500))
      : ((i = this.period), (this.isDeleting = !0)),
    setTimeout(function () {
      e.tick();
    }, i);
};
