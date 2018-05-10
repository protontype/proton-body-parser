import { ProtonMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class URLBodyParserMiddleware extends ProtonMiddleware {
    private options;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
