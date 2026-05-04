### Roster Details<br />
Team Name: Phantom<br />
Roster: KEi, Kunai, Kylar, lunAtic, mwlky<br />
Global Rank: [98](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [65]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1068.3<br />
<br />
Final Rank Value (1068.3) = Starting Rank Value (1265.9) + Head To Head Adjustments (-197.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.916[<sup>2</sup>](#table1)

The average of these factors is 0.467<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1265.9
- 400 + ( ( 0.467 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1265.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |       93 | 2026-04-30 | fnatic             | L   | 1.000      | -            | -                | -                | -         |   -13.59 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           67 |      130 | 2026-04-29 | GenOne             | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.572 (0.220)    | -         |    10.22 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           66 |      159 | 2026-04-28 | aAa                | W   | 1.000      | 0.384        | 0.012 (0.005)    | -                | -         |    11.66 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           65 |      196 | 2026-04-27 | The Last Resort    | W   | 1.000      | 0.384        | 0.012 (0.004)    | 0.557 (0.214)    | -         |    11.34 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           64 |      257 | 2026-04-26 | RUSTEC             | W   | 1.000      | 0.384        | -                | 0.565 (0.217)    | -         |    13.38 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           63 |      316 | 2026-04-25 | Hashiras           | L   | 1.000      | -            | -                | -                | -         |   -21.92 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           62 |      411 | 2026-04-23 | Atreides           | W   | 1.000      | -            | -                | -                | -         |     5.53 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           61 |      511 | 2026-04-18 | FAVBET             | L   | 1.000      | -            | -                | -                | -         |   -16.14 | KEi, Kunai, Kylar, mwlky, mynio     |
|           60 |      541 | 2026-04-16 | GenOne             | L   | 1.000      | -            | -                | -                | -         |   -22.89 | KEi, Kunai, Kylar, mwlky, mynio     |
|           59 |      563 | 2026-04-15 | Lavked             | L   | 1.000      | -            | -                | -                | -         |   -18.70 | KEi, Kunai, Kylar, mwlky, mynio     |
|           58 |      577 | 2026-04-14 | ex-RUBY            | L   | 1.000      | -            | -                | -                | -         |   -16.17 | KEi, Kunai, Kylar, mwlky, mynio     |
|           57 |      582 | 2026-04-14 | Metizport          | L   | 1.000      | -            | -                | -                | -         |   -18.32 | KEi, Kunai, Kylar, mwlky, mynio     |
|           56 |      601 | 2026-04-13 | HEROIC Academy     | W   | 1.000      | 0.371        | -                | 0.498 (0.185)    | -         |     8.78 | KEi, Kunai, Kylar, mwlky, mynio     |
|           55 |      676 | 2026-04-10 | Ursa               | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.956 (0.354)    | -         |    13.18 | KEi, Kunai, Kylar, mwlky, mynio     |
|           54 |     1149 | 2026-04-01 | B8                 | L   | 0.981      | -            | -                | -                | -         |    -2.94 | KEi, Kunai, Kylar, mwlky, mynio     |
|           53 |     1189 | 2026-04-01 | AM                 | W   | 0.979      | 0.340        | 0.021 (0.007)    | 0.717 (0.239)    | 1 (0.979) |    19.86 | KEi, Kunai, Kylar, mwlky, mynio     |
|           52 |     1207 | 2026-04-01 | BESTIA             | L   | 0.978      | -            | -                | -                | -         |    -7.16 | KEi, Kunai, Kylar, mwlky, mynio     |
|           51 |     1239 | 2026-03-31 | B8                 | L   | 0.974      | -            | -                | -                | -         |    -2.63 | KEi, Kunai, Kylar, mwlky, mynio     |
|           50 |     1250 | 2026-03-31 | Z7                 | W   | 0.974      | -            | -                | -                | 1 (0.974) |     0.76 | KEi, Kunai, Kylar, mwlky, mynio     |
|           49 |     1263 | 2026-03-31 | maquinas           | W   | 0.973      | -            | -                | -                | 1 (0.973) |     0.51 | KEi, Kunai, Kylar, mwlky, mynio     |
|           48 |     1286 | 2026-03-31 | AM                 | L   | 0.972      | -            | -                | -                | -         |   -10.29 | KEi, Kunai, Kylar, mwlky, mynio     |
|           47 |     1307 | 2026-03-31 | WAZABI             | W   | 0.972      | -            | -                | -                | 1 (0.972) |     9.49 | KEi, Kunai, Kylar, mwlky, mynio     |
|           46 |     1688 | 2026-03-24 | FOKUS              | L   | 0.929      | -            | -                | -                | -         |    -4.63 | KEi, Kunai, Kylar, mwlky, mynio     |
|           45 |     1699 | 2026-03-24 | 3DMAX              | W   | 0.928      | 0.333        | 0.367 (0.113)    | -                | 1 (0.928) |    27.52 | KEi, Kunai, Kylar, mwlky, mynio     |
|           44 |     1733 | 2026-03-24 | ASTRAL             | W   | 0.925      | 0.333        | -                | 0.777 (0.240)    | 1 (0.925) |    10.21 | KEi, Kunai, Kylar, mwlky, mynio     |
|           43 |     1793 | 2026-03-23 | EC BANGA           | W   | 0.920      | -            | -                | -                | 1 (0.920) |     3.40 | KEi, Kunai, Kylar, mwlky, mynio     |
|           42 |     1797 | 2026-03-23 | KUUSAMO            | W   | 0.919      | -            | -                | -                | 1 (0.919) |     2.83 | KEi, Kunai, Kylar, mwlky, mynio     |
|           41 |     1803 | 2026-03-23 | Project 91         | L   | 0.919      | -            | -                | -                | -         |   -24.56 | KEi, Kunai, Kylar, mwlky, mynio     |
|           40 |     2377 | 2026-03-11 | CYBERSHOKE         | L   | 0.839      | -            | -                | -                | -         |   -10.91 | KEi, Kunai, Kylar, mwlky, mynio     |
|           39 |     2479 | 2026-03-09 | Omega              | W   | 0.826      | 0.435        | 0.021 (0.008)    | 0.616 (0.221)    | -         |    11.05 | KEi, Kunai, Kylar, mwlky, mynio     |
|           38 |     2548 | 2026-03-08 | Leo                | L   | 0.820      | -            | -                | -                | -         |   -19.21 | KEi, Kunai, Kylar, mwlky, mynio     |
|           37 |     2635 | 2026-03-06 | Oxuji              | L   | 0.807      | -            | -                | -                | -         |   -16.05 | KEi, Kunai, Kylar, mynio, parad17se |
|           36 |     2680 | 2026-03-05 | ASTRAL             | W   | 0.801      | 0.435        | 0.012 (0.004)    | 0.777 (0.270)    | -         |     8.10 | KEi, Kunai, Kylar, mwlky, mynio     |
|           35 |     2803 | 2026-03-03 | Oxuji              | W   | 0.785      | -            | -                | -                | -         |    10.07 | KEi, Kunai, Kylar, mynio, parad17se |
|           34 |     2875 | 2026-03-01 | PsychoFace         | L   | 0.773      | -            | -                | -                | -         |   -14.67 | KEi, Kunai, Kylar, mynio, parad17se |
|           33 |     3043 | 2026-02-26 | Lazer Cats         | L   | 0.752      | -            | -                | -                | -         |   -17.55 | DGL, KEi, Kunai, Kylar, mynio       |
|           32 |     3163 | 2026-02-23 | ECSTATIC           | L   | 0.734      | -            | -                | -                | -         |    -8.55 | DGL, KEi, Kunai, Kylar, mynio       |
|           31 |     3169 | 2026-02-23 | Sashi              | W   | 0.733      | -            | -                | -                | 1 (0.733) |    12.35 | DGL, KEi, Kunai, Kylar, mynio       |
|           30 |     3177 | 2026-02-23 | illwill            | L   | 0.732      | -            | -                | -                | -         |    -7.77 | DGL, KEi, Kunai, Kylar, mynio       |
|           29 |     3194 | 2026-02-22 | ECSTATIC           | L   | 0.728      | -            | -                | -                | -         |    -9.04 | DGL, KEi, Kunai, Kylar, mynio       |
|           28 |     3196 | 2026-02-22 | SINNERS            | W   | 0.728      | 0.342        | 0.160 (0.040)    | -                | 1 (0.728) |    19.13 | DGL, KEi, Kunai, Kylar, mynio       |
|           27 |     3206 | 2026-02-22 | GamerLegion        | L   | 0.728      | -            | -                | -                | -         |    -2.35 | DGL, KEi, Kunai, Kylar, mynio       |
|           26 |     3222 | 2026-02-22 | Persona Grata      | W   | 0.727      | -            | -                | -                | -         |     4.52 | DGL, KEi, Kunai, Kylar, mynio       |
|           25 |     3228 | 2026-02-22 | Avanti             | W   | 0.726      | -            | -                | -                | -         |     0.36 | DGL, KEi, Kunai, Kylar, mynio       |
|           24 |     3277 | 2026-02-21 | Young Ninjas       | L   | 0.721      | -            | -                | -                | -         |   -19.06 | DGL, KEi, Kunai, Kylar, mynio       |
|           23 |     3293 | 2026-02-21 | Acend              | L   | 0.720      | -            | -                | -                | -         |   -12.24 | DGL, KEi, Kunai, Kylar, mynio       |
|           22 |     3305 | 2026-02-21 | ex-Fingers Crossed | W   | 0.718      | -            | -                | -                | -         |     2.97 | DGL, KEi, Kunai, Kylar, mynio       |
|           21 |     3523 | 2026-02-17 | Alliance           | L   | 0.692      | -            | -                | -                | -         |    -5.73 | DGL, KEi, Kunai, Kylar, mynio       |
|           20 |     3560 | 2026-02-16 | ALGO               | W   | 0.686      | -            | -                | -                | -         |     4.53 | DGL, KEi, Kunai, Kylar, mynio       |
|           19 |     3648 | 2026-02-14 | Nexus              | W   | 0.674      | -            | -                | -                | -         |     4.12 | DGL, KEi, Kunai, Kylar, mynio       |
|           18 |     3721 | 2026-02-13 | TNC                | L   | 0.667      | -            | -                | -                | -         |   -14.61 | DGL, KEi, Kunai, Kylar, mynio       |
|           17 |     3797 | 2026-02-11 | VP.Prodigy         | L   | 0.655      | -            | -                | -                | -         |   -19.60 | DGL, KEi, Kunai, Kylar, mynio       |
|           16 |     3875 | 2026-02-09 | SPARTA             | W   | 0.639      | 0.435        | 0.063 (0.017)    | 0.768 (0.213)    | -         |    11.40 | DGL, KEi, Kunai, Kylar, mynio       |
|           15 |     3887 | 2026-02-08 | OG                 | L   | 0.634      | -            | -                | -                | -         |   -11.68 | DGL, KEi, Kunai, Kylar, mynio       |
|           14 |     3894 | 2026-02-08 | Lazer Cats         | W   | 0.634      | -            | -                | -                | -         |     3.79 | DGL, KEi, Kunai, Kylar, mynio       |
|           13 |     4109 | 2026-02-01 | STATE              | L   | 0.586      | -            | -                | -                | -         |   -12.51 | DGL, KEi, Kunai, Kylar, mynio       |
|           12 |     4331 | 2026-01-24 | AM                 | L   | 0.532      | -            | -                | -                | -         |    -6.51 | DGL, KEi, Kunai, Kylar, mynio       |
|           11 |     4358 | 2026-01-23 | MASONIC            | L   | 0.527      | -            | -                | -                | -         |   -11.46 | DGL, KEi, Kunai, Kylar, mynio       |
|           10 |     4430 | 2026-01-22 | FORZE Reload       | W   | 0.519      | -            | -                | -                | -         |     1.28 | DGL, KEi, Kunai, Kylar, mynio       |
|            9 |     4491 | 2026-01-20 | FAVBET             | L   | 0.506      | -            | -                | -                | -         |   -13.97 | DGL, KEi, Kunai, Kylar, mynio       |
|            8 |     4525 | 2026-01-18 | Oramond            | L   | 0.494      | -            | -                | -                | -         |   -13.70 | DGL, KEi, Kunai, Kylar, mynio       |
|            7 |     4584 | 2026-01-17 | The Last Resort    | W   | 0.486      | -            | -                | -                | -         |     1.89 | DGL, KEi, Kunai, Kylar, mynio       |
|            6 |     4757 | 2026-01-10 | HYPERSPIRIT        | L   | 0.440      | -            | -                | -                | -         |   -11.19 | DGL, KEi, Kunai, Kylar, mynio       |
|            5 |     4872 | 2025-12-22 | GenOne             | L   | 0.314      | -            | -                | -                | -         |    -8.92 | DGL, KEi, Kunai, Kylar, mynio       |
|            4 |     4876 | 2025-12-21 | TNC                | W   | 0.308      | -            | -                | -                | -         |     2.27 | DGL, KEi, Kunai, Kylar, mynio       |
|            3 |     4886 | 2025-12-21 | Persona Grata      | W   | 0.306      | -            | -                | -                | -         |     1.14 | DGL, KEi, Kunai, Kylar, mynio       |
|            2 |     4900 | 2025-12-20 | VP.Prodigy         | W   | 0.301      | -            | -                | -                | -         |     1.41 | DGL, KEi, Kunai, Kylar, mynio       |
|            1 |     4911 | 2025-12-20 | Project 91         | W   | 0.299      | -            | -                | -                | -         |     0.56 | DGL, KEi, Kunai, Kylar, mynio       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,214.64)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-04-16 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-03-24 |      0.929 | $2,500.00      | $2,321.68       |
| 2025-12-21 |      0.308 | $2,090.00      | $642.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
