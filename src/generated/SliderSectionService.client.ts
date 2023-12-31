// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "SliderSectionService.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { SliderSectionService } from "./SliderSectionService";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { SliderResponse } from "./SliderSectionService";
import type { SliderRequest } from "./SliderSectionService";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service SliderSectionService
 */
export interface ISliderSectionServiceClient {
    /**
     * @generated from protobuf rpc: UpdateSliderSection(SliderRequest) returns (SliderResponse);
     */
    updateSliderSection(input: SliderRequest, options?: RpcOptions): UnaryCall<SliderRequest, SliderResponse>;
}
/**
 * @generated from protobuf service SliderSectionService
 */
export class SliderSectionServiceClient implements ISliderSectionServiceClient, ServiceInfo {
    typeName = SliderSectionService.typeName;
    methods = SliderSectionService.methods;
    options = SliderSectionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: UpdateSliderSection(SliderRequest) returns (SliderResponse);
     */
    updateSliderSection(input: SliderRequest, options?: RpcOptions): UnaryCall<SliderRequest, SliderResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SliderRequest, SliderResponse>("unary", this._transport, method, opt, input);
    }
}
