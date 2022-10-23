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
exports.Contact = void 0;
var react_1 = require("@chakra-ui/react");
var react_lottie_1 = require("react-lottie");
var framer_motion_1 = require("framer-motion");
var react_2 = require("react");
var bs_1 = require("react-icons/bs");
var md_1 = require("react-icons/md");
var animation_json_1 = require("../Animation/animation.json");
var send_json_1 = require("../Animation/send.json");
var browser_1 = require("@emailjs/browser");
exports.Contact = function () {
    var _a = react_2.useState({
        isStopped: true,
        isPaused: false
    }), animationControl = _a[0], setAnimationControl = _a[1];
    var _b = react_2.useState({
        isStopped: false,
        isPaused: true
    }), animationSendControl = _b[0], setAnimationSendControl = _b[1];
    var ref = react_2.useRef(null);
    var form = react_2.useRef();
    var isInView = framer_motion_1.useInView(ref);
    var animation = framer_motion_1.useAnimation();
    var toast = react_1.useToast();
    var _c = react_2.useState(false), resultSend = _c[0], setResultSend = _c[1];
    react_2.useEffect(function () {
        if (isInView) {
            setAnimationControl(__assign(__assign({}, animationControl), { isStopped: false }));
            animation.start({
                x: 0,
                transition: { type: "spring", duration: 1, bounce: 0 }
            });
        }
        else {
            animation.start({
                x: "100vw"
            });
        }
    }, [isInView]);
    var defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation_json_1["default"]
    };
    var sendEmailOptions = {
        loop: false,
        autoplay: true,
        animationData: send_json_1["default"]
    };
    var sendEmail = function (e) {
        e.preventDefault();
        browser_1["default"]
            .sendForm("gmail", "template_icm1v5i", form.current, "tdj_QqejKEVzwEMzu")
            .then(function (result) {
            setResultSend(true);
            setAnimationSendControl(__assign(__assign({}, animationSendControl), { isPaused: false }));
        }, function (error) {
            setResultSend(false);
            toast({
                title: error.text,
                position: "top-right",
                status: "error",
                isClosable: true
            });
        });
    };
    return (react_2["default"].createElement(react_1.Container, { maxW: "container.xl", ref: ref },
        react_2["default"].createElement(react_1.Box, { borderRadius: "lg", p: { base: 5, lg: 16 } },
            react_2["default"].createElement(react_1.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 10 },
                react_2["default"].createElement(react_1.Box, { display: { base: "none", md: "block" } },
                    react_2["default"].createElement(react_lottie_1["default"], { options: defaultOptions, isStopped: animationControl.isStopped, isPaused: animationControl.isPaused })),
                react_2["default"].createElement(framer_motion_1.motion.div, { animate: animation },
                    react_2["default"].createElement(react_1.VStack, { spacing: { base: 4, md: 8, lg: 10 } },
                        react_2["default"].createElement(react_1.Box, { bg: react_1.useColorModeValue("gray.100", "gray.700"), borderRadius: "lg", p: 8, color: react_1.useColorModeValue("gray.700", "whiteAlpha.900"), shadow: "base" },
                            react_2["default"].createElement(react_1.Heading, { fontSize: "4xl", textAlign: "center", mb: 5 }, "Contato"),
                            react_2["default"].createElement("form", { ref: form, onSubmit: sendEmail },
                                react_2["default"].createElement(react_1.VStack, { spacing: 5 },
                                    react_2["default"].createElement(react_1.FormControl, { isRequired: true },
                                        react_2["default"].createElement(react_1.FormLabel, null, "Name"),
                                        react_2["default"].createElement(react_1.InputGroup, null,
                                            react_2["default"].createElement(react_1.InputLeftElement, { children: react_2["default"].createElement(bs_1.BsPerson, null) }),
                                            react_2["default"].createElement(react_1.Input, { type: "text", name: "name", placeholder: "Your Name" }))),
                                    react_2["default"].createElement(react_1.FormControl, { isRequired: true },
                                        react_2["default"].createElement(react_1.FormLabel, null, "Email"),
                                        react_2["default"].createElement(react_1.InputGroup, null,
                                            react_2["default"].createElement(react_1.InputLeftElement, { children: react_2["default"].createElement(md_1.MdOutlineEmail, null) }),
                                            react_2["default"].createElement(react_1.Input, { type: "email", name: "email", placeholder: "Your Email" }))),
                                    react_2["default"].createElement(react_1.FormControl, { isRequired: true },
                                        react_2["default"].createElement(react_1.FormLabel, null, "Message"),
                                        react_2["default"].createElement(react_1.Textarea, { name: "message", placeholder: "Your Message", rows: 6, resize: "none" })),
                                    !resultSend ? (react_2["default"].createElement(react_1.Button, { isLoading: resultSend, bg: "teal", color: "white", type: "submit", _hover: {
                                            bg: "teal.500"
                                        }, w: "full" }, "Enviar Messagem")) : (react_2["default"].createElement(react_1.Box, null,
                                        react_2["default"].createElement(react_lottie_1["default"], { options: sendEmailOptions, width: 120, isStopped: animationControl.isStopped, isPaused: animationControl.isPaused }))))))))))));
};
