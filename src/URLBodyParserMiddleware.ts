import { ProtonMiddleware, MiddlewareFunctionParams, Middleware } from 'protontype';
import bodyParser from 'body-parser';

export class URLBodyParserMiddleware extends ProtonMiddleware {
    constructor(private options?: {}) {
        super();
    }

    @Middleware()
    bodyParser(params: MiddlewareFunctionParams) {
        if (this.options) {
            bodyParser.urlencoded(this.options)(params.req, params.res, params.next);
        } else {
            bodyParser.urlencoded()(params.req, params.res, params.next);
        }
    }
}