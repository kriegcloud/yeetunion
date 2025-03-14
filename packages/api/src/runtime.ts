import { NodeSdk } from "@effect/opentelemetry";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { ManagedRuntime } from "effect";

const NodeSdkLive = NodeSdk.layer(() => ({
  resource: {
    serviceName: "yeetunion",
  },
  spanProcessor: new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: "http://localhost:4318/v1/traces",
    }),
  ),
}));

export const ServerRuntime = ManagedRuntime.make(NodeSdkLive);
