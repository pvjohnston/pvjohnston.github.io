# pvjohnston.github.io

GitHub Pages door for [pvjohnston.com](https://pvjohnston.com): a lab explainer, not the notebook itself.

The notebook stays at pvjohnston.com. This page traces how a note is made — authoring rules, experimental protocol, Grok Bot roles, and the public code that refuses silent drift.

## Status

First draft, published from this machine as `pvjohnston` over SSH (`github.com-pvjohnston`). The notebook source remains `noprofits-org/pvjohnston.com`.

The live freeze for the next note is in `lab/johnson-haloacetate/` (PLAN + preregistration, 2026-08-23, before any geometry). Hillel-triplet remains the completed published loop.

## Generate / revise

From this directory, in Grok:

```
/lab-explainer
```

The skill lives at `.grok/skills/lab-explainer/SKILL.md`. It was written by studying the *idea* of codebase-to-course (trace a real system; original code only) and rewriting the contract. CSS and JS here are original.

## Files

| File | Role |
|---|---|
| `index.html` | Lab explainer |
| `build.html` | Hakyll/Haskell compiler, print CSS, deploy |
| `styles.css` / `main.js` | Page chrome |
| `fonts/` | Self-hosted notebook fonts |
| `SOURCES.md` | Every quoted artifact |
| `.grok/skills/lab-explainer/` | Generator skill |
