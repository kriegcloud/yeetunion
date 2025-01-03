import type { HashWithAlgorithm } from "@/builder";
export type CspManifest = {
  scripts: { src?: string; hash: HashWithAlgorithm }[];
  styles: {
    elem: HashWithAlgorithm[];
    attr: HashWithAlgorithm[];
  };
};
