# PREREGISTRATION — johnson-haloacetate

Frozen 2026-08-23, before any geometry is optimized.

## Question

Does carboxylate oxygen charge oscillate with CX3 rotation, with larger amplitude for CCl3COO− than for CF3COO−?

## Hypothesis

On a relaxed CX3 rotation, Hirshfeld and MBIS oxygen charges (and the COO sum) oscillate with the X–Cα–C–O dihedral. Peak-to-peak amplitude is larger for CCl3COO− than for CF3COO−. Acetate is the flat control.

## Falsifier

1. q(O) is flat vs dihedral on both haloacetates, or
2. CF3 amplitude ≥ CCl3 amplitude.

Either outcome is publishable.

## Method (binding)

Psi4, B3LYP-D3(BJ)/aug-cc-pVDZ, charge −1, gas phase. Hirshfeld and MBIS. Relaxed φ = X–Cα–C–O scan at 15° from 0 to 120° on CF3COO− and CCl3COO−. Points used in a claim must be formally converged.

## Gate (binding)

Optimize CH3COO−, CF3COO−, CClF2COO−, CCl3COO− first. If both charge schemes fail to make q(O) more negative on CF3 than on CCl3, the scan is not run.

Protocol detail lives in PLAN.md. This file does not change after the first energy is seen; amendments go in JOURNAL.md.
