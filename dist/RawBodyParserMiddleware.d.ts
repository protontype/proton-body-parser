import { ProtonMiddleware, MiddlewareFunctionParams } from 'protontype';
export declare class RawBodyParserMiddleware extends ProtonMiddleware {
    private options;
    constructor(options?: {});
    bodyParser(params: MiddlewareFunctionParams): void;
}
