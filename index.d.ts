import nodeWs from "ws";
/**
 * Isomorphic wrapper around WebSocket for compatiblity with Nodejs and Web API.
 *
 * @public
 */
declare const IsoWebSocket:
   {
      new (
        url: string | URL,
        protocols?: string | string[] | undefined
      ): WebSocket;
      prototype: WebSocket;
      readonly CLOSED: number;
      readonly CLOSING: number;
      readonly CONNECTING: number;
      readonly OPEN: number;
    };
export { IsoWebSocket };
export type IsoWebSocket = InstanceType<
  typeof globalThis.WebSocket | typeof nodeWs
>;
