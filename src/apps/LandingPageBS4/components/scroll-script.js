import React from "react";
import "./main.css";

class ScrollScript extends React.Component {

    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "document.write('<script src=\"https://static.codepen.io/assets/common/stopExecutionOnTimeout-de7e2ef6bfefd24b79a3f68b414b87b8db5b08439cac3f1012092b2290c719cd.js\"></script>' +\n" +
            "'<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script>' +\n" +
            "'<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"></script>' +\n" +
            "'<script id=\"rendered-js\">' +\n" +
            "'    const $body = $(\"body\");' +\n" +
            "'    const $header = $(\".page-header\");' +\n" +
            "'    const $navCollapse = $(\".navbar-collapse\");' +\n" +
            "'    const scrollClass = \"scroll\";' +\n" +
            "'' +\n" +
            "'    $(window).on(\"scroll\", () => {' +\n" +
            "'        if (this.matchMedia(\"(min-width: 992px)\").matches) {' +\n" +
            "'            const scrollY = $(this).scrollTop();' +\n" +
            "'            scrollY > 0 ?' +\n" +
            "'                $body.addClass(scrollClass) :' +\n" +
            "'                $body.removeClass(scrollClass);' +\n" +
            "'        } else {' +\n" +
            "'            $body.removeClass(scrollClass);' +\n" +
            "'        }' +\n" +
            "'    });' +\n" +
            "'' +\n" +
            "'    $(\".page-header .nav-link, .navbar-brand\").on(\"click\", function (e) {' +\n" +
            "'        e.preventDefault();' +\n" +
            "'        const href = $(this).attr(\"href\");' +\n" +
            "'        $(\"html, body\").animate({' +\n" +
            "'                scrollTop: $(href).offset().top - 71 },' +\n" +
            "'            600);' +\n" +
            "'    });' +\n" +
            "'</script>')";
        this.instance.appendChild(s);
    }

    render() {
        return <div ref={el => (this.instance = el)} />;
    }
};

export default ScrollScript;