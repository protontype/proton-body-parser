"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protontype_1 = require("protontype");
const body_parser_1 = __importDefault(require("body-parser"));
class URLBodyParserMiddleware extends protontype_1.BaseMiddleware {
    constructor(options) {
        super();
        this.options = options;
    }
    bodyParser(params) {
        if (this.options) {
            body_parser_1.default.urlencoded(this.options)(params.req, params.res, params.next);
        }
        else {
            body_parser_1.default.urlencoded()(params.req, params.res, params.next);
        }
    }
}
__decorate([
    protontype_1.Middleware(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], URLBodyParserMiddleware.prototype, "bodyParser", null);
exports.URLBodyParserMiddleware = URLBodyParserMiddleware;
//# sourceMappingURL=URLBodyParserMiddleware.js.map