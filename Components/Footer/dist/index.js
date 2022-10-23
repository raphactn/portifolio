"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var SocialLinks_1 = require("../SocialLinks");
function Footer() {
    return (React.createElement(react_1.Box, { bg: react_1.useColorModeValue("gray.50", "gray.900"), color: react_1.useColorModeValue("gray.700", "gray.200") },
        React.createElement(react_1.Container, { as: react_1.Stack, maxW: "6xl", py: 4, direction: { base: "column", md: "row" }, spacing: 4, justify: { base: "center", md: "space-between" }, align: { base: "center", md: "center" } },
            React.createElement(react_1.Text, null, "\u00A9 2022 Raphael Caetano. All rights reserved"),
            React.createElement(react_1.Stack, { direction: "row" },
                React.createElement(SocialLinks_1.SocialLinks, null)))));
}
exports["default"] = Footer;
