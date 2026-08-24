# Sources for this explainer

Quoted or traced on the page. Nothing here is invented.

The live freeze for the next note is copied at `lab/johnson-haloacetate/`
from Desktop `PLAN.md` and `PREREGISTRATION.md` (Heisenberg, frozen
2026-08-23, before any geometry is optimized). The Mac run folder
`~/Molecules/johnson-haloacetate/` is not on this PC.

| What | Path | Used for |
|---|---|---|
| Heisenberg’s lab brief (2026-08-23) | spoken writeup, this session | Grok Bot, roles, run shape, the split |
| Live PLAN | `lab/johnson-haloacetate/PLAN.md` | protocol, rematch gate, no peeking, metrics import |
| Live preregistration | `lab/johnson-haloacetate/PREREGISTRATION.md` | question, hypothesis, falsifier, frozen before geometries |
| Authoring contract | `noprofits-org/pvjohnston.com` `notes/blog-authoring.md` | Research vs Understanding, contribution gate, stance |
| Agent / repo rules | `AGENTS.md` | branch → PR → CI; `PREREGISTRATION.md`; experiments |
| Colophon | `colophon.markdown` / [pvjohnston.com/colophon.html](https://pvjohnston.com/colophon.html) | question → publish; named metrics |
| Experiment template | `research/_TEMPLATE/` | what an experiment directory owes |
| Publication copy of a completed PLAN | `research/hillel-triplet/PREREGISTRATION.md` | published freeze after a private run |
| Metrics check | `scripts/verify-metrics.mjs` | SHA-256 of provenance inputs |
| Metrics generator | `research/hillel-triplet/generate-metrics.mjs` | Bayes: tables vs raw projection |
| Figure generator | `research/hillel-triplet/make_figures.py` | da Vinci: both-converged vs unconverged markers |
| Named metrics | `research/hillel-triplet/metrics.json` | `m4_has_claim_crossing`, provenance |
| Published note | [Does Hillel's 2024 push-pull sentence hold…](https://pvjohnston.com/posts/2026-08-22-does-push-pull-abolish-the-s0-t1-crossing.html) | the write-up of that run |

Build page (`build.html`) quotes `noprofits-org/pvjohnston.com` at
`d3ba5c69`: `app/site.hs`, `lib/Blog/{Site,Compilers,TikZ,Metrics,Context,Feed}.hs`,
`templates/{post,default}.html`, `js/mathjax-config.js`, `css/default.css`,
`.github/workflows/deploy.yml`, `scripts/verify-site.mjs`,
`pvjohnston-site.cabal`, `posts/2025-01-20-chemical-kinetics.markdown` (`\ce`).

Visual tokens and type follow `css/site-theme.css` on the notebook (cream,
sky accent, Bricolage Grotesque, Hanken Grotesk). Fonts copied from the local
notebook checkout’s `fonts/` directory. CSS and JS on this page are original;
they are not taken from `zarazhangrui/codebase-to-course`.
