# PLAN — johnson-haloacetate

Frozen 2026-08-23. Hypothesis and falsifier do not change after the first scan energy is seen.

## Paper

Johnson, E. C.; Gregory, K. P.; Robertson, H.; Gresham, I. J.; Nelson, A. R. J.; Craig, V. S. J.; Prescott, S. W.; Page, A. J.; Webber, G. B.; Wanless, E. J. The inductive effect does not explain electron density in haloacetates: are our textbooks wrong? *Chem. Sci.* **2025**, *16*, 2382–2390. [doi:10.1039/d4sc04832f](https://doi.org/10.1039/d4sc04832f). PMC11706273. Open access.

They report DDEC6 charges at MP2/aug-cc-pVQZ on CH3COO−, CF3COO−, CClF2COO−, and CCl3COO−. Trichloroacetate withdraws the most density from the carboxylate oxygens; the fluoro ions are more negative on oxygen than acetate. That is inverse to substituent electronegativity and to the textbook pKa story. They propose carboxylate π → σ*(C–X) hyperconjugation, citing ESI Table S2 (in-plane C–X shorter than out-of-plane; larger Δ for CCl3 than CF3; C–C longer in CCl3COO− than in CF3COO−), and they invite the follow-up:

> Further computational work including geometry/bond rotation studies could help elucidate the role that hyperconjugation plays in anomalous charge densities in substituted systems.

This PLAN takes that invitation. It is not a rebuttal.

## One question

Does carboxylate oxygen charge oscillate with CX3 rotation, with larger amplitude for CCl3COO− than for CF3COO−?

## Hypothesis (frozen)

On a relaxed CX3 rotation, Hirshfeld and MBIS oxygen charges (and the COO sum) oscillate with the X–Cα–C–O dihedral. Peak-to-peak amplitude is larger for CCl3COO− than for CF3COO−. Acetate is the flat control.

Rationale, stated so it can fail: hyperconjugation of this kind needs σ*(C–X) aligned with the carboxylate π system, so charge on oxygen should be periodic in the CX3 torsion. Induction and field effects are not.

## Falsifier (frozen)

Either outcome is publishable.

1. q(O) is flat vs dihedral on both haloacetates (no hyperconjugation signature under this method), or
2. CF3 amplitude ≥ CCl3 amplitude (the Cl > F contrast is not a hyperconjugation-alignment effect).

## Series

| id | ion | role |
| --- | --- | --- |
| M0 | CH3COO− | rematch; optional scan (expect flat) |
| M1 | CF3COO− | rematch + required scan |
| M2 | CClF2COO− | rematch only (Cl-in-plane minimum). Scan is shelf. |
| M3 | CCl3COO− | rematch + required scan |

## Rematch gate

Optimize all four at the working method before any rotation is started. Compare geometries to ESI Table S2 (their MP2/aug-cc-pVQZ values, Å):

| ion | C–X in-plane | C–X out-of-plane | C–C | Δ(C–X) |
| --- | ---: | ---: | ---: | ---: |
| CH3COO− | 1.0877 | 1.0899 / 1.0899 | 1.5483 | ~0.002 |
| CF3COO− | 1.3462 | 1.3535 / 1.3535 | 1.5680 | ~0.007 |
| CClF2COO− | 1.8010 (Cl) | 1.3473 / 1.3473 (F) | 1.5774 | n/a (mixed) |
| CCl3COO− | 1.7728 | 1.7821 / 1.7824 | 1.6223 | ~0.009 |

Gate is signs, not an Å match to their basis:

1. r(C–C): CCl3 > CF3 > AcO
2. Δ(C–X) out-of-plane minus in-plane: CCl3 > CF3
3. q(O) and q(COO) more negative on CF3 than on CCl3 (their Fig. 1g / Fig. 2 direction), in **both** Hirshfeld and MBIS

If (3) fails in both charge schemes, stop. Do not scan. Write that the charge order did not reproduce for us under these conditions.

If (1) or (2) fail, the bond-length half of their hyperconjugation argument is already a miss. The scan may still run; JOURNAL records the miss before the first torsion point.

## Method

Software: Psi4. Same lab as hillel-triplet.

Level: B3LYP-D3(BJ)/aug-cc-pVDZ. These are anions; diffuse functions are required. This is not the Hillel cc-pVDZ default.

Charge: −1. Multiplicity 1. Gas phase. No solvent.

Charges: Psi4 `oeprop` Hirshfeld and MBIS on every converged geometry. Not DDEC6 (not in Psi4). The claim needs the two schemes to agree on (a) whether q(O) oscillates and (b) which ion has the larger amplitude.

Optimizer: Psi4 default. A point is used in a claim only if it formally converged.

Record per point: energy Eh, r(C–C), three r(C–X), φ, q(O1), q(O2), q(C_carboxylate), q(COO), max force, converged yes/no.

Not in this PLAN: DDEC6, MP2/aug-cc-pVQZ, NBO, pKa, solvent, continuum, MECP.

Shelf only, not this PLAN: MP2/aug-cc-pVDZ rematch of the four minima if DFT rematch is close but charges look method-sensitive.

## Rotation protocol

Dihedral φ = X–Cα–Ccarboxylate–O. φ = 0° is one C–X in the carboxylate plane (their in-plane X).

Grid: 0, 15, 30, 45, 60, 75, 90, 105, 120°. C3 period; 0° and 120° should overlay if the ion is symmetric.

Relaxed scan: freeze φ, optimize everything else. Start from the rematch minimum.

Required ions: M1 and M3. M0 optional (flat control). M2 scan is shelf (period is 360°, Cl-in-plane vs F-in-plane are different minima).

Do not inspect q vs φ for an ion until that ion's grid is finished or has failed.

Plotted lines connect adjacent both-converged points only. Unconverged points may be marked; they do not carry a claim.

Amplitude is max(q) − min(q) on both-converged points of that ion, reported separately for Hirshfeld and MBIS, separately for mean q(O) and for q(COO).

## Claims we will and will not make

Will: under B3LYP-D3(BJ)/aug-cc-pVDZ, Hirshfeld/MBIS, gas phase, the CX3 rotation either does or does not move carboxylate charge with the predicted CCl3 > CF3 amplitude.

Will not: “the authors were wrong”; “induction is false”; a pKa mechanism; a DDEC6 or MP2/VQZ rematch.

Stance: taking their invitation. A miss is “it did not reproduce for us under these conditions.”

## Record

Folder: `~/Molecules/johnson-haloacetate/`

- `PLAN.md` — this file
- `PREREGISTRATION.md` — hypothesis and falsifier only
- `JOURNAL.md` — dated protocol changes
- `results.jsonl` — one record per optimization
- `xyz/` and inputs
- per-ion summary CSVs

A later site note imports this record. Published numbers come from `research/johnson-haloacetate/metrics.json` derived from these files. No handwritten numbers.

## Status

- [x] Paper chosen (lab vote 2026-08-22)
- [x] PLAN drafted (2026-08-23)
- [ ] PLAN on disk at `~/Molecules/johnson-haloacetate` (M1 local-execution approval still pending)
- [ ] Four minima rematch
- [ ] Rematch gate pass/fail written in JOURNAL
- [ ] M1 and M3 15° scans
- [ ] q(O) vs φ from both-converged points
- [ ] Claim sentence

## Amendments

None yet. Date any maxiter, grid, or basis change here before it is used.
