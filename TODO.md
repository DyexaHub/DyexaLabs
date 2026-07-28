# Chart.tsx Fix Plan

## Issues to Fix:
1. ✅ Fix `ChartLegendContent` props type - `Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign">` fails because `LegendProps` omits `payload`
2. ✅ Fix `ChartTooltipContent` props type - `React.ComponentProps<typeof RechartsPrimitive.Tooltip>` omits `label` and `payload`, causing conflicts
3. ✅ Fix `item.payload.fill` - `LegendPayload.payload` is typed as `object`, which has no `fill` property
4. ✅ Fix `item.value.toLocaleString()` - `value` can be `undefined`
5. ✅ Run `tsc --noEmit` to verify all errors are resolved
