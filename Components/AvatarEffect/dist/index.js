"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
function AvatarWithRipple(_a) {
    var image = _a.image;
    var size = "150px";
    var color = "teal";
    var pulseRing = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t0% {\n    transform: scale(0.33);\n  }\n  40%,\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n\t"], ["\n\t0% {\n    transform: scale(0.33);\n  }\n  40%,\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n\t"])));
    return (React.createElement(react_1.Flex, { justifyContent: "center", alignItems: "center", h: "216px", w: "full", overflow: "hidden" },
        React.createElement(react_1.Box, { as: "div", position: "relative", w: size, h: size, _before: {
                content: "''",
                position: "relative",
                display: "block",
                width: "300%",
                height: "300%",
                boxSizing: "border-box",
                marginLeft: "-100%",
                marginTop: "-100%",
                borderRadius: "50%",
                bgColor: color,
                animation: "2.25s " + pulseRing + " cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite"
            } },
            React.createElement(react_1.Avatar, { src: image, size: "full", position: "absolute", top: 0 }))));
}
exports["default"] = AvatarWithRipple;
var templateObject_1;
