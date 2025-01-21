// ----------------------------------------------------------------------
export function mergeRefs(refs) {
  return value => {
    // Early return if there are no refs
    if (refs.length === 0) return;
    for (const ref of refs) {
      // Skip invalid refs
      if (!ref) continue;
      // Handle function refs
      if (typeof ref === "function") {
        ref(value);
      }
      // Handle object refs with 'current' property
      else if ("current" in ref) {
        ref.current = value;
      }
    }
  };
}
//# sourceMappingURL=refs.js.map