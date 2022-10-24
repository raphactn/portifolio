"use strict";
exports.__esModule = true;
exports.About = void 0;
var icons_1 = require("@chakra-ui/icons");
var framer_motion_1 = require("framer-motion");
var react_1 = require("@chakra-ui/react");
var si_1 = require("react-icons/si");
var tb_1 = require("react-icons/tb");
exports.About = function () {
    var colorMode = react_1.useColorMode().colorMode;
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onToggle = _a.onToggle;
    var skills = [
        { name: "Javascript", icon: React.createElement(si_1.SiJavascript, null), progress: 80 },
        { name: "Typescript", icon: React.createElement(si_1.SiTypescript, null), progress: 60 },
        { name: "HTML", icon: React.createElement(si_1.SiHtml5, null), progress: 90 },
        { name: "CSS", icon: React.createElement(si_1.SiCss3, null), progress: 95 },
        { name: "Prisma", icon: React.createElement(si_1.SiPrisma, null), progress: 60 },
        { name: "React", icon: React.createElement(si_1.SiReact, null), progress: 80 },
        { name: "Material UI", icon: React.createElement(si_1.SiMaterialui, null), progress: 70 },
        { name: "Sequelize", icon: React.createElement(si_1.SiSequelize, null), progress: 60 },
        { name: "Next.js", icon: React.createElement(tb_1.TbBrandNextjs, null), progress: 90 },
        { name: "Chakra UI", icon: React.createElement(si_1.SiChakraui, null), progress: 90 },
        { name: "Express", icon: React.createElement(si_1.SiExpress, null), progress: 60 },
    ];
    return (React.createElement(react_1.Container, { pt: 10, maxW: "container.xl", pb: 20 },
        React.createElement(react_1.Heading, { fontSize: "2xl", textAlign: { base: "center", md: "left" }, mt: 5 }, "Sobre mim"),
        React.createElement(react_1.Center, { mt: 10, gap: 5, justifyContent: "center", flexDirection: { base: "column", md: "row" } },
            React.createElement(react_1.Center, null,
                React.createElement(icons_1.ChevronLeftIcon, { fontSize: "30px", cursor: "pointer", onClick: onToggle }),
                React.createElement(react_1.Box, { bg: react_1.useColorModeValue("gray.100", "gray.900"), overflowX: "auto", p: 8, rounded: "lg", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }, !isOpen ? (React.createElement(react_1.Box, null,
                    React.createElement(react_1.Heading, { fontSize: "large", mb: 3 }, "Ol\u00E1 meu nome \u00E9 Raphael Caetano"),
                    React.createElement(react_1.Text, null,
                        "Tenho 23 anos e possuo 3 anos de experi\u00EAncia no mercado atuando como Desenvolvedor web Full Stack. Liderei projetos de e-commerce e desenvolvimento de paginas para convers\u00E3o de clientes, em meu primeiro emprego como desenvolvedor. ",
                        React.createElement("br", null),
                        "Com a experi\u00EAncia que obtive no meu primeiro emprego hoje atendo empresas que precisam de Landing Pages e e-commerces, sempre utilizando as melhores estr\u00E1tegias para que meu cliente possa ter resultado e ser visto no mercado. Sempre procurando as melhores pr\u00E1ticas e me aperfei\u00E7oando cada vez mais."),
                    React.createElement(react_1.Button, { colorScheme: "teal", variant: "outline", size: "sm", mt: 5 },
                        React.createElement("a", { href: "/linkedin_profile.pdf", download: true }, "Download CV")))) : (React.createElement(react_1.Box, null,
                    React.createElement(react_1.Heading, { fontSize: "large" }, "Minhas Skills"),
                    React.createElement(react_1.Divider, { mb: 5, mt: 5 }),
                    React.createElement(react_1.SimpleGrid, { columns: { base: 2, md: 5, lg: 7, xl: skills.length }, spacing: 5, whiteSpace: "nowrap" }, skills.map(function (item, i) { return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150%" }, animate: isOpen ? { opacity: 1, x: "0px" } : {}, transition: { duration: 0.7 }, key: i },
                        React.createElement(react_1.Center, { flexDirection: "column", rounded: "lg", bg: colorMode === "light" ? "white" : "gray.800", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", p: "3" },
                            React.createElement(react_1.Box, { fontSize: "30px", color: colorMode }, item.icon),
                            React.createElement(react_1.Text, null, item.name),
                            React.createElement(react_1.Progress, { w: "100%", mt: 3, colorScheme: "teal", size: "sm", value: item.progress })))); }))))),
                React.createElement(icons_1.ChevronRightIcon, { fontSize: "30px", cursor: "pointer", onClick: onToggle })))));
};
