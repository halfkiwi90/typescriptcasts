"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n\t\t<form method=\"POST\">\n\t\t\t<div>\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input name=\"email\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Passwaord</label>\n\t\t\t\t<input name=\"password\" type=\"password\" />\n\t\t\t</div>\n\t\t\t<button>submit</button>\n\t\t</form>\n\t");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + password);
});
