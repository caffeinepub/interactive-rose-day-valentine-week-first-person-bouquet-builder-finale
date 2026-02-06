# Specification

## Summary
**Goal:** Create a single-page, 3D first-person Rose Day (Feb 7) interactive experience that guides “you” through building a digital rose bouquet and ends in a finale scene showing the bouquet in a vase.

**Planned changes:**
- Build a mobile/desktop-friendly single-page flow with a landing state, at least one intermediate narrative/progression state, and a clear finale.
- Implement a 3D first-person bouquet assembly scene (React Three Fiber) with an obvious control to add roses one-by-one.
- Animate each newly added rose from a spawn position into the vase.
- Arrange roses neatly inside the vase using consistent positioning/rotation so the bouquet forms a coherent silhouette even with 20+ roses.
- Apply a consistent Rose Day/Valentine theme across UI and 3D overlay (not primarily blue/purple), with readable contrast.
- Add and use required generated static images from `frontend/public/assets/generated` in the UI.

**User-visible outcome:** The recipient can progress through a short Rose Day narrative and interactively add roses in a first-person 3D view until a final bouquet-in-a-vase scene is presented, with all on-screen text addressing “you” (no “she/her”).
