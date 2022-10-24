"use strict";
exports.__esModule = true;
exports.Projects = void 0;
var icons_1 = require("@chakra-ui/icons");
var framer_motion_1 = require("framer-motion");
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
exports.Projects = function (_a) {
    var data = _a.data;
    var colorMode = react_1.useColorMode().colorMode;
    var ref = react_2.useRef(null);
    var isInView = framer_motion_1.useInView(ref);
    var animation = framer_motion_1.useAnimation();
    react_2.useEffect(function () {
        if (isInView) {
            animation.start({
                scale: 1.1,
                margin: 5,
                transition: { type: "spring", duration: 1, bounce: 0 }
            });
        }
        else {
            animation.start({
                scale: 0
            });
        }
    }, [isInView]);
    var languageColor = function (value) {
        if (value === "JavaScript") {
            return "yellow";
        }
        if (value === "HTML") {
            return "orange";
        }
        return "blue";
    };
    return (React.createElement(react_1.Box, { id: "projects", ref: ref, pb: 20, pt: 10, bg: react_1.useColorModeValue("gray.100", "gray.900") },
        React.createElement(react_1.Container, { maxW: "container.xl" },
            React.createElement(react_1.Heading, { fontSize: "2xl", textAlign: { base: "center", md: "left" }, mt: 5, mb: 5 }, "Projetos"),
            React.createElement(react_1.SimpleGrid, { columns: { base: 2, md: 4 }, spacing: 10 }, data.map(function (repo, i) { return (React.createElement(framer_motion_1.motion.div, { animate: animation, key: i },
                React.createElement(react_1.Box, { rounded: "lg", minH: "240px", bg: colorMode === "light" ? "white" : "gray.800", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", p: "3" },
                    React.createElement(react_1.Flex, { direction: "column", gap: 3 },
                        React.createElement(react_1.Text, { fontSize: "larger", fontWeight: "bold" }, repo.name),
                        React.createElement(react_1.Text, null, repo.description),
                        repo.language && (React.createElement(react_1.Tag, { size: "md", variant: "outline", w: "-webkit-max-content", colorScheme: languageColor(repo.language) },
                            React.createElement(react_1.TagLabel, null, repo.language))),
                        React.createElement(react_1.Link, { href: repo.homepage ? "https://" + repo.homepage : repo.html_url, target: "_blank" },
                            React.createElement(react_1.Flex, { gap: 2, alignItems: "center", color: "blue.500" },
                                React.createElement(react_1.Text, null, "Acessar"),
                                React.createElement(icons_1.ArrowForwardIcon, null))))))); })))));
};
