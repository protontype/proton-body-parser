import { ProtonMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class JsonBodyParserMiddleware extends ProtonMiddleware {
    private options;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
