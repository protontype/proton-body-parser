import { BaseMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class RawBodyParserMiddleware extends BaseMiddleware {
    private options?;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
