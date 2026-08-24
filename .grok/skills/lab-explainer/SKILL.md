---
name: lab-explainer
description: >
  Generate or revise a GitHub Pages explainer for pvjohnston.com — a public
  page that traces the research notebook, authoring contract, experimental
  protocol, and Grok Bot lab. Use when the user wants a lab explainer, a
  GitHub Pages page about how the notebook works, to adapt codebase-to-course
  for pvjohnston, or runs /lab-explainer. Not a vibe-coder course.
---

# Lab explainer

Produce a **GitHub Pages explainer**, not a course. The page shows what
[pvjohnston.com](https://pvjohnston.com) is and how a note is made. Dual
audience: a non-scientist can follow the path; an advanced scientist should
not flinch.

Study the idea in `zarazhangrui/codebase-to-course` (trace a real system;
original code only; code beside plain language; self-contained page). Do **not**
copy its CSS, JS, HTML, or “vibe coder” contract. There is no license on that
repo. Write our own templates. Output is an explainer with **walls**, not
labmates Slack-chatting.

## What the page must answer

1. What is pvjohnston.com?
2. How does a note get made (code + authoring rules)?
3. How does a run stay honest (protocol + roles)?
4. Where does Grok Bot stop, and where does the Mac begin?

## Five sections (not course modules)

| id | Job | Proof |
|---|---|---|
| `notebook` | The site is a published lab book | Research vs Understanding; colophon pipeline |
| `run` | One paper, one falsifiable question | PLAN / `PREREGISTRATION.md` frozen before results |
| `split` | Why four roles plus the Mac | Heisenberg / Quill / Bayes / da Vinci / Mac |
| `authoring` | What a note may claim | `notes/blog-authoring.md` |
| `code` | Public site refuses silent drift | `research/`, `metrics.json`, verify scripts, PR/CI |

Do not add quizzes, group-chat animations, restaurant metaphors, or
scroll-snap “course” chrome. Sticky section nav is enough.

## Sources to read (in this order)

1. Lab protocol (Heisenberg’s spoken version, or a later lab writeup).
2. `notes/blog-authoring.md` and `AGENTS.md` in `noprofits-org/pvjohnston.com`.
3. `colophon.markdown` / the live colophon.
4. A live freeze in `lab/` when present (`PLAN.md` + `PREREGISTRATION.md`
   copied from the lab, dated, before results). That is the run on this page.
5. One completed experiment under `research/` that has `PREREGISTRATION.md`,
   `metrics.json`, and a figure generator — the published copy of a finished
   loop. Prefer chemistry.
6. `scripts/verify-metrics.mjs` and the experiment’s `generate-metrics` /
   `make_figures` files.

Do not invent lab files. Quote contiguous stretches only. The Mac folder
is the run location; `lab/` holds copies used by this page.

## Voice

Model: Heisenberg’s spoken brief, the colophon, and `notes/blog-authoring.md`.
Dry lab notebook. Dual audience is this page; notes on pvjohnston.com stay
written for a better-informed reader.

**Headings name the thing**, not the insight. Bad: “The claim is frozen before
anyone looks at the scan.” Good: “A run.” Put the fact in the first sentence
of the body, once.

Do not write like a landing page. Banned unless the source file already says it:

- Thesis titles and stacked one-liners
- “Not X. It is Y.” / “Not X, but Y.” as the default shape
- Parallel “A role that…; a role that…”
- Italics for punch; em dashes for drama
- Restating the heading in the next paragraph
- Surrounding prose longer or punchier than the quoted artifact

If Heisenberg already said the sentence, use that sentence. Quoted PLAN /
preregistration / code carry the argument. Prose around them is shorter than
the quote and only says what the file is and when it was frozen.

Required facts (state them; do not slogan them):

- The site is the published notebook of a private run, not a second experiment.
- Assistants do not replace calculations; those run on the Mac.
- PLAN / preregistration are written before results.
- Bayes only trusts numbers from raw output files.
- da Vinci only plots points that actually converged.

## Original code only

Snippets are exact copies from the notebook repo (or the lab writeup), with
path and a one-line gloss. Never simplify code. Prefer 5–12 line stretches.
Code↔English is a two-column panel, not a paragraph about the code.

## Output

Write to the Pages repo root (this repository when CWD is
`pvjohnston.github.io`):

```
index.html      # lab protocol
build.html      # Hakyll compiler, print CSS, deploy — quote Site/Compilers/TikZ/Metrics/deploy.yml
styles.css
main.js
fonts/          # self-hosted Bricolage Grotesque + Hanken Grotesk; no Google Fonts
SOURCES.md      # every quoted file, path, and why it is on the page
```

Visual identity: pvjohnston.com tokens (cream, sky `#465C9B`, forest, ink,
terracotta). Self-host the same fonts. Light page, notebook not product-landing.

After writing, walk the five sections against the source files and list
anything still waiting on the Mac.
