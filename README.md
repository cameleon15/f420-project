# Undecidability of the 3-polyomino tiling problem
*Project realized for the course of Computational Geometry (INFO-F420)*

## Problem description
Ollinger proved that tiling the plane with a set of 11 polyominoes is undecidable [2]. At the end of his paper, he raises multiple questions including one regarding the decidability of the $k$-polyomino translation problem for $8\leq k < 11$.
> **Open Problem 3.** *For 8 ≤ k < 11, is the k-Polyomino translation problem decidable?* [2]

Yang and Zhang prove that the problem is undecidable for $k=8$ [1]. We will address one of Ollinger's other questions.
> **Open Problem 2.** *Is the k-Polyomino problem decidable for 3 ≤ k < 5?* [2]

## Key concepts
### Wang tiles
A *Wang tile* is a unit square with each edge assigned a color. *Wang's domino problem* involves tiling the entire plane with translated copies from a finite set of Wang tiles. The tiles must be edge-to-edge and the color of common edges between two adjacent Wang tiles must be the same [1]. Berger showed that Wang's domino problem is undecidable combining the facts of the existence of an aperiodic set of Wang tiles and the ability to simulate a *Turing machine* with Wang tiles [1][3].

### Polyominoes

### Undecidability and Turing machines

## Methodology
The method use to prove the undecidability is reduction. It goes from a Turing machine to Wang tiles to polyominoes to a set of 3 polyominoes.

### Reduction from Turing machine to Wang tiles

### Reduction to polyominoes

## Implementation

## References
1. C. Yang and Z. Zhang. *A proof of Ollinger’s conjecture: undecidability of tiling the plane with a set of 8 polyominoes*. 2024. DOI: [https://doi.org/10.48550/arXiv.2403.13472].
2. N. Ollinger. "Tiling the Plane with a Fixed Number of Polyominoes". In: *Language and Automata Theory and Applications*. Ed. by Adrian Horia Dediu, Armand Mihai Ionescu, and Carlos Martín-Vide. Berlin, Heidelberg: Springer Berlin Heidelberg, 2009, pp. 638–647. ISBN: 978-3-642-00982-2, DOI: [https://doi.org/10.1007/978-3-642-00982-2_54].
3. R. Berger. "The undecidability of the domino problem". In: *Memoirs of the American Mathematical Society* 66 (1966), pp. 1–72.
4. E.D. Demaine and S. Langerman. *Tiling with Three Polygons is Undecidable*. 2024. DOI: [https://doi.org/10.48550/arXiv.2409.11582].
5. E. Jeandel and P. Vanier. "The Undecidability of the Domino Problem". In: *Substitution and Tiling Dynamics: Introduction to Self-inducing Structures: CIRM Jean-Morlet Chair, Fall 2017*. Ed. by Shigeki Akiyama and Pierre Arnoux. Cham: Springer International Publishing, 2020, pp. 293–357. ISBN: 978-3-030-57666-0. DOI: [https://doi.org/10.1007/978-3-030-57666-0_6].
6. S.W. Golomb. "Tiling with polyominoes". In: *Journal of Combinatorial Theory* 1 (1966), pp. 280-296.
