import { BaseMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class URLBodyParserMiddleware extends BaseMiddleware {
    private options?;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
