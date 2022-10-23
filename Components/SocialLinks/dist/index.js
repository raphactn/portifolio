"use strict";
exports.__esModule = true;
exports.SocialLinks = void 0;
var react_1 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var ri_1 = require("react-icons/ri");
exports.SocialLinks = function () {
    var redesSociais = [
        {
            name: "instagram",
            link: "https://www.instagram.com/raphaelctn/",
            icon: React.createElement(bs_1.BsInstagram, null)
        },
        {
            name: "facebook",
            link: "https://www.facebook.com/raphacaetano37",
            icon: React.createElement(bs_1.BsFacebook, null)
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/raphael-caetano-39aa8519a/",
            icon: React.createElement(bs_1.BsLinkedin, null)
        },
        {
            name: "whatsapp",
            link: "https://api.whatsapp.com/send?phone=5514997190887",
            icon: React.createElement(bs_1.BsWhatsapp, null)
        },
        {
            name: "Gitlab",
            link: "https://gitlab.com/raphactn",
            icon: React.createElement(ri_1.RiGitlabFill, null)
        },
        { name: "github", link: "https://github.com/raphactn", icon: React.createElement(bs_1.BsGithub, null) },
    ];
    return (React.createElement(React.Fragment, null, redesSociais.map(function (item, i) { return (React.createElement(react_1.Link, { key: i, href: item.link, target: "_blank" },
        React.createElement(react_1.IconButton, { icon: item.icon, fontSize: "25px", "aria-label": item.name }))); })));
};
