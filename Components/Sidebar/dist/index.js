"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
function WithSubnavigation() {
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onToggle = _a.onToggle;
    var _b = react_1.useColorMode(), colorMode = _b.colorMode, toggleColorMode = _b.toggleColorMode;
    return (React.createElement(react_1.Box, null,
        React.createElement(react_1.Flex, { bg: react_1.useColorModeValue("white", "gray.800"), color: react_1.useColorModeValue("gray.600", "white"), minH: "60px", py: { base: 2 }, px: { base: 4 }, borderBottom: 1, borderStyle: "solid", borderColor: react_1.useColorModeValue("gray.200", "gray.900"), align: "center" },
            React.createElement(react_1.Flex, { flex: { base: 1, md: "auto" }, ml: { base: -2 }, display: { base: "flex", md: "none" } },
                React.createElement(react_1.IconButton, { onClick: onToggle, icon: isOpen ? React.createElement(icons_1.CloseIcon, { w: 3, h: 3 }) : React.createElement(icons_1.HamburgerIcon, { w: 5, h: 5 }), variant: "ghost", "aria-label": "Toggle Navigation" })),
            React.createElement(react_1.Flex, { flex: { base: 1 }, justify: { base: "center", md: "start" } },
                React.createElement(react_1.Heading, { textAlign: react_1.useBreakpointValue({ base: "center", md: "left" }), color: react_1.useColorModeValue("gray.800", "white"), fontSize: "medium" }, "Raphael Caetano"),
                React.createElement(react_1.Flex, { display: { base: "none", md: "flex" }, ml: 10 },
                    React.createElement(DesktopNav, null))),
            React.createElement(react_1.Stack, { flex: { base: 1, md: 0 }, justify: "flex-end", direction: "row", spacing: 6 },
                React.createElement(react_1.Button, { onClick: toggleColorMode }, colorMode === "light" ? React.createElement(icons_1.MoonIcon, null) : React.createElement(icons_1.SunIcon, null)))),
        React.createElement(react_1.Collapse, { "in": isOpen, animateOpacity: true },
            React.createElement(MobileNav, null))));
}
exports["default"] = WithSubnavigation;
var DesktopNav = function () {
    var linkColor = react_1.useColorModeValue("gray.600", "gray.200");
    var linkHoverColor = react_1.useColorModeValue("gray.800", "white");
    var popoverContentBgColor = react_1.useColorModeValue("white", "gray.800");
    return (React.createElement(react_1.Stack, { direction: "row", spacing: 4 }, NAV_ITEMS.map(function (navItem) {
        var _a;
        return (React.createElement(react_1.Box, { key: navItem.label },
            React.createElement(react_1.Popover, { trigger: "hover", placement: "bottom-start" },
                React.createElement(react_1.PopoverTrigger, null,
                    React.createElement(react_1.Link, { p: 2, href: (_a = navItem.href) !== null && _a !== void 0 ? _a : "#", fontSize: "sm", fontWeight: 500, color: linkColor, _hover: {
                            textDecoration: "none",
                            color: linkHoverColor
                        } }, navItem.label)),
                navItem.children && (React.createElement(react_1.PopoverContent, { border: 0, boxShadow: "xl", bg: popoverContentBgColor, p: 4, rounded: "xl", minW: "sm" },
                    React.createElement(react_1.Stack, null, navItem.children.map(function (child) { return (React.createElement(DesktopSubNav, __assign({ key: child.label }, child))); })))))));
    })));
};
var DesktopSubNav = function (_a) {
    var label = _a.label, href = _a.href, subLabel = _a.subLabel;
    return (React.createElement(react_1.Link, { href: href, role: "group", display: "block", p: 2, rounded: "md", _hover: { bg: react_1.useColorModeValue("pink.50", "gray.900") } },
        React.createElement(react_1.Stack, { direction: "row", align: "center" },
            React.createElement(react_1.Box, null,
                React.createElement(react_1.Text, { transition: "all .3s ease", _groupHover: { color: "pink.400" }, fontWeight: 500 }, label),
                React.createElement(react_1.Text, { fontSize: "sm" }, subLabel)),
            React.createElement(react_1.Flex, { transition: "all .3s ease", transform: "translateX(-10px)", opacity: 0, _groupHover: { opacity: "100%", transform: "translateX(0)" }, justify: "flex-end", align: "center", flex: 1 },
                React.createElement(react_1.Icon, { color: "pink.400", w: 5, h: 5, as: icons_1.ChevronRightIcon })))));
};
var MobileNav = function () {
    return (React.createElement(react_1.Stack, { bg: react_1.useColorModeValue("white", "gray.800"), p: 4, display: { md: "none" } }, NAV_ITEMS.map(function (navItem) { return (React.createElement(MobileNavItem, __assign({ key: navItem.label }, navItem))); })));
};
var MobileNavItem = function (_a) {
    var label = _a.label, children = _a.children, href = _a.href;
    var _b = react_1.useDisclosure(), isOpen = _b.isOpen, onToggle = _b.onToggle;
    return (React.createElement(react_1.Stack, { spacing: 4, onClick: children && onToggle },
        React.createElement(react_1.Flex, { py: 2, as: react_1.Link, href: href !== null && href !== void 0 ? href : "#", justify: "space-between", align: "center", _hover: {
                textDecoration: "none"
            } },
            React.createElement(react_1.Text, { fontWeight: 600, color: react_1.useColorModeValue("gray.600", "gray.200") }, label),
            children && (React.createElement(react_1.Icon, { as: icons_1.ChevronDownIcon, transition: "all .25s ease-in-out", transform: isOpen ? "rotate(180deg)" : "", w: 6, h: 6 }))),
        React.createElement(react_1.Collapse, { "in": isOpen, animateOpacity: true, style: { marginTop: "0!important" } },
            React.createElement(react_1.Stack, { mt: 2, pl: 4, borderLeft: 1, borderStyle: "solid", borderColor: react_1.useColorModeValue("gray.200", "gray.700"), align: "start" }, children &&
                children.map(function (child) { return (React.createElement(react_1.Link, { key: child.label, py: 2, href: child.href }, child.label)); })))));
};
var NAV_ITEMS = [
    {
        label: "Projetos",
        href: "#projects"
    },
    {
        label: "Contato",
        href: "#contact"
    },
];
