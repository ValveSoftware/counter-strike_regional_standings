### Roster Details<br />
Team Name: Phantom<br />
Roster: KEi, Kunai, Kylar, mwlky, TMB<br />
Global Rank: [116](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [76]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1004.0<br />
<br />
Final Rank Value (1004.0) = Starting Rank Value (1193.7) + Head To Head Adjustments (-189.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.735[<sup>2</sup>](#table1)

The average of these factors is 0.417<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1193.7
- 400 + ( ( 0.417 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1193.7


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
|           79 |       72 | 2026-05-29 | Young Ninjas       | L   | 1.000      | -            | -                | -                | -         |   -21.17 | KEi, Kunai, Kylar, mwlky, TMB       |
|           78 |      119 | 2026-05-28 | Atreides           | L   | 1.000      | -            | -                | -                | -         |   -18.14 | KEi, Kunai, Kylar, mwlky, TMB       |
|           77 |      177 | 2026-05-27 | Johnny Speeds      | L   | 1.000      | -            | -                | -                | -         |   -11.40 | KEi, Kunai, Kylar, mwlky, TMB       |
|           76 |      224 | 2026-05-25 | BRUTE              | W   | 1.000      | -            | -                | -                | -         |    11.48 | KEi, Kunai, Kylar, mwlky, TMB       |
|           75 |      304 | 2026-05-23 | ex-RUBY            | L   | 1.000      | -            | -                | -                | -         |   -11.71 | KEi, Kunai, Kylar, mwlky, TMB       |
|           74 |      415 | 2026-05-21 | Leo                | W   | 1.000      | -            | -                | -                | -         |    10.30 | KEi, Kunai, Kylar, mwlky, TMB       |
|           73 |      473 | 2026-05-19 | TNC                | W   | 1.000      | 0.384        | 0.022 (0.009)    | 1.000 (0.384)    | -         |     9.38 | KEi, Kunai, Kylar, mwlky, TMB       |
|           72 |      829 | 2026-05-06 | TNC                | L   | 1.000      | -            | -                | -                | -         |   -26.14 | Ayteel, KEi, Kunai, Kylar, mwlky    |
|           71 |      858 | 2026-05-05 | GenOne             | W   | 1.000      | 0.384        | 0.011 (0.004)    | 0.916 (0.352)    | -         |     9.95 | aimy, KEi, Kunai, Kylar, mwlky      |
|           70 |      869 | 2026-05-04 | Lavked             | L   | 1.000      | -            | -                | -                | -         |   -14.41 | aimy, KEi, Kunai, Kylar, mwlky      |
|           69 |      897 | 2026-05-03 | aAa                | W   | 1.000      | -            | -                | -                | -         |     9.98 | aimy, KEi, Kunai, Kylar, mwlky      |
|           68 |     1031 | 2026-04-30 | fnatic             | L   | 0.987      | -            | -                | -                | -         |   -13.98 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           67 |     1078 | 2026-04-29 | GenOne             | W   | 0.981      | 0.384        | 0.011 (0.004)    | 0.916 (0.345)    | -         |     9.62 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           66 |     1115 | 2026-04-28 | aAa                | W   | 0.974      | -            | -                | -                | -         |     9.97 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           65 |     1158 | 2026-04-27 | The Last Resort    | W   | 0.967      | 0.384        | -                | 0.565 (0.210)    | -         |    10.27 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           64 |     1221 | 2026-04-26 | RUSTEC             | W   | 0.961      | 0.384        | -                | 0.578 (0.213)    | -         |    12.34 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           63 |     1282 | 2026-04-25 | Hashiras           | L   | 0.954      | -            | -                | -                | -         |   -21.40 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           62 |     1397 | 2026-04-23 | Atreides           | W   | 0.940      | 0.384        | 0.010 (0.004)    | 0.702 (0.254)    | -         |     9.05 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           61 |     1497 | 2026-04-18 | FAVBET             | L   | 0.907      | -            | -                | -                | -         |   -16.77 | KEi, Kunai, Kylar, mwlky, mynio     |
|           60 |     1527 | 2026-04-16 | GenOne             | L   | 0.894      | -            | -                | -                | -         |   -21.28 | KEi, Kunai, Kylar, mwlky, mynio     |
|           59 |     1549 | 2026-04-15 | Lavked             | L   | 0.885      | -            | -                | -                | -         |   -16.52 | KEi, Kunai, Kylar, mwlky, mynio     |
|           58 |     1563 | 2026-04-14 | ex-RUBY            | L   | 0.880      | -            | -                | -                | -         |   -14.92 | KEi, Kunai, Kylar, mwlky, mynio     |
|           57 |     1568 | 2026-04-14 | Metizport          | L   | 0.879      | -            | -                | -                | -         |   -16.40 | KEi, Kunai, Kylar, mwlky, mynio     |
|           56 |     1587 | 2026-04-13 | HEROIC Academy     | W   | 0.871      | -            | -                | -                | -         |     6.65 | KEi, Kunai, Kylar, mwlky, mynio     |
|           55 |     1662 | 2026-04-10 | Ursa               | W   | 0.852      | 0.371        | 0.016 (0.005)    | 0.962 (0.304)    | -         |    10.53 | KEi, Kunai, Kylar, mwlky, mynio     |
|           54 |     2135 | 2026-04-01 | B8                 | L   | 0.795      | -            | -                | -                | -         |    -1.86 | KEi, Kunai, Kylar, mwlky, mynio     |
|           53 |     2175 | 2026-04-01 | AM                 | W   | 0.793      | 0.340        | 0.016 (0.004)    | -                | 1 (0.793) |    17.31 | KEi, Kunai, Kylar, mwlky, mynio     |
|           52 |     2193 | 2026-04-01 | BESTIA             | L   | 0.792      | -            | -                | -                | -         |    -6.46 | KEi, Kunai, Kylar, mwlky, mynio     |
|           51 |     2225 | 2026-03-31 | B8                 | L   | 0.787      | -            | -                | -                | -         |    -1.64 | KEi, Kunai, Kylar, mwlky, mynio     |
|           50 |     2236 | 2026-03-31 | Z7                 | W   | 0.787      | -            | -                | -                | 1 (0.787) |     0.63 | KEi, Kunai, Kylar, mwlky, mynio     |
|           49 |     2249 | 2026-03-31 | maquinas           | W   | 0.787      | -            | -                | -                | 1 (0.787) |     0.45 | KEi, Kunai, Kylar, mwlky, mynio     |
|           48 |     2272 | 2026-03-31 | AM                 | L   | 0.786      | -            | -                | -                | -         |    -7.24 | KEi, Kunai, Kylar, mwlky, mynio     |
|           47 |     2293 | 2026-03-31 | WAZABI             | W   | 0.785      | -            | -                | -                | 1 (0.785) |     7.22 | KEi, Kunai, Kylar, mwlky, mynio     |
|           46 |     2674 | 2026-03-24 | FOKUS              | L   | 0.742      | -            | -                | -                | -         |    -3.68 | KEi, Kunai, Kylar, mwlky, mynio     |
|           45 |     2685 | 2026-03-24 | 3DMAX              | W   | 0.741      | 0.333        | 0.241 (0.060)    | -                | 1 (0.741) |    21.21 | KEi, Kunai, Kylar, mwlky, mynio     |
|           44 |     2719 | 2026-03-24 | ASTRAL             | W   | 0.738      | 0.333        | -                | 0.874 (0.215)    | 1 (0.738) |     8.72 | KEi, Kunai, Kylar, mwlky, mynio     |
|           43 |     2779 | 2026-03-23 | EC BANGA           | W   | 0.733      | -            | -                | -                | 1 (0.733) |     0.49 | KEi, Kunai, Kylar, mwlky, mynio     |
|           42 |     2783 | 2026-03-23 | KUUSAMO            | W   | 0.733      | -            | -                | -                | 1 (0.733) |     2.01 | KEi, Kunai, Kylar, mwlky, mynio     |
|           41 |     2789 | 2026-03-23 | Project 91         | L   | 0.733      | -            | -                | -                | -         |   -20.30 | KEi, Kunai, Kylar, mwlky, mynio     |
|           40 |     3363 | 2026-03-11 | CYBERSHOKE         | L   | 0.652      | -            | -                | -                | -         |    -7.48 | KEi, Kunai, Kylar, mwlky, mynio     |
|           39 |     3465 | 2026-03-09 | Omega              | W   | 0.639      | 0.435        | 0.016 (0.005)    | -                | -         |    10.02 | KEi, Kunai, Kylar, mwlky, mynio     |
|           38 |     3534 | 2026-03-08 | Leo                | L   | 0.633      | -            | -                | -                | -         |   -15.66 | KEi, Kunai, Kylar, mwlky, mynio     |
|           37 |     3621 | 2026-03-06 | Oxuji              | L   | 0.620      | -            | -                | -                | -         |    -7.05 | KEi, Kunai, Kylar, mynio, parad17se |
|           36 |     3666 | 2026-03-05 | ASTRAL             | W   | 0.614      | 0.435        | -                | 0.874 (0.233)    | -         |     7.02 | KEi, Kunai, Kylar, mwlky, mynio     |
|           35 |     3789 | 2026-03-03 | Oxuji              | W   | 0.599      | 0.435        | -                | 0.790 (0.206)    | -         |    13.21 | KEi, Kunai, Kylar, mynio, parad17se |
|           34 |     3861 | 2026-03-01 | PsychoFace         | L   | 0.587      | -            | -                | -                | -         |    -9.92 | KEi, Kunai, Kylar, mynio, parad17se |
|           33 |     4029 | 2026-02-26 | Lazer Cats         | L   | 0.565      | -            | -                | -                | -         |   -13.78 | DGL, KEi, Kunai, Kylar, mynio       |
|           32 |     4149 | 2026-02-23 | ECSTATIC           | L   | 0.547      | -            | -                | -                | -         |    -7.70 | DGL, KEi, Kunai, Kylar, mynio       |
|           31 |     4155 | 2026-02-23 | Sashi              | W   | 0.546      | -            | -                | -                | 1 (0.546) |     9.45 | DGL, KEi, Kunai, Kylar, mynio       |
|           30 |     4163 | 2026-02-23 | illwill            | L   | 0.545      | -            | -                | -                | -         |    -7.30 | DGL, KEi, Kunai, Kylar, mynio       |
|           29 |     4180 | 2026-02-22 | ECSTATIC           | L   | 0.542      | -            | -                | -                | -         |    -8.04 | DGL, KEi, Kunai, Kylar, mynio       |
|           28 |     4182 | 2026-02-22 | SINNERS            | W   | 0.541      | 0.342        | 0.119 (0.022)    | -                | 1 (0.541) |    14.36 | DGL, KEi, Kunai, Kylar, mynio       |
|           27 |     4192 | 2026-02-22 | GamerLegion        | L   | 0.541      | -            | -                | -                | -         |    -0.65 | DGL, KEi, Kunai, Kylar, mynio       |
|           26 |     4208 | 2026-02-22 | Persona Grata      | W   | 0.540      | -            | -                | -                | -         |     2.60 | DGL, KEi, Kunai, Kylar, mynio       |
|           25 |     4214 | 2026-02-22 | Avanti             | W   | 0.540      | -            | -                | -                | -         |     0.31 | DGL, KEi, Kunai, Kylar, mynio       |
|           24 |     4263 | 2026-02-21 | Young Ninjas       | L   | 0.534      | -            | -                | -                | -         |   -13.53 | DGL, KEi, Kunai, Kylar, mynio       |
|           23 |     4279 | 2026-02-21 | Acend              | L   | 0.533      | -            | -                | -                | -         |    -5.27 | DGL, KEi, Kunai, Kylar, mynio       |
|           22 |     4291 | 2026-02-21 | ex-Fingers Crossed | W   | 0.532      | -            | -                | -                | -         |     1.03 | DGL, KEi, Kunai, Kylar, mynio       |
|           21 |     4509 | 2026-02-17 | Alliance           | L   | 0.506      | -            | -                | -                | -         |    -3.13 | DGL, KEi, Kunai, Kylar, mynio       |
|           20 |     4546 | 2026-02-16 | ALGO               | W   | 0.499      | -            | -                | -                | -         |     1.68 | DGL, KEi, Kunai, Kylar, mynio       |
|           19 |     4634 | 2026-02-14 | Nexus              | W   | 0.488      | -            | -                | -                | -         |     1.75 | DGL, KEi, Kunai, Kylar, mynio       |
|           18 |     4707 | 2026-02-13 | TNC                | L   | 0.480      | -            | -                | -                | -         |   -10.27 | DGL, KEi, Kunai, Kylar, mynio       |
|           17 |     4783 | 2026-02-11 | VP.Prodigy         | L   | 0.468      | -            | -                | -                | -         |   -13.99 | DGL, KEi, Kunai, Kylar, mynio       |
|           16 |     4861 | 2026-02-09 | SPARTA             | W   | 0.453      | 0.435        | 0.038 (0.008)    | -                | -         |     8.44 | DGL, KEi, Kunai, Kylar, mynio       |
|           15 |     4873 | 2026-02-08 | OG                 | L   | 0.448      | -            | -                | -                | -         |    -5.33 | DGL, KEi, Kunai, Kylar, mynio       |
|           14 |     4880 | 2026-02-08 | Lazer Cats         | W   | 0.447      | -            | -                | -                | -         |     2.50 | DGL, KEi, Kunai, Kylar, mynio       |
|           13 |     5095 | 2026-02-01 | STATE              | L   | 0.399      | -            | -                | -                | -         |    -6.42 | DGL, KEi, Kunai, Kylar, mynio       |
|           12 |     5317 | 2026-01-24 | AM                 | L   | 0.346      | -            | -                | -                | -         |   -10.23 | DGL, KEi, Kunai, Kylar, mynio       |
|           11 |     5344 | 2026-01-23 | MASONIC            | L   | 0.341      | -            | -                | -                | -         |    -6.16 | DGL, KEi, Kunai, Kylar, mynio       |
|           10 |     5416 | 2026-01-22 | FORZE Reload       | W   | 0.333      | -            | -                | -                | -         |     0.68 | DGL, KEi, Kunai, Kylar, mynio       |
|            9 |     5477 | 2026-01-20 | FAVBET             | L   | 0.319      | -            | -                | -                | -         |    -8.58 | DGL, KEi, Kunai, Kylar, mynio       |
|            8 |     5511 | 2026-01-18 | DragonClaw         | L   | 0.307      | -            | -                | -                | -         |    -7.76 | DGL, KEi, Kunai, Kylar, mynio       |
|            7 |     5570 | 2026-01-17 | The Last Resort    | W   | 0.299      | -            | -                | -                | -         |     1.41 | DGL, KEi, Kunai, Kylar, mynio       |
|            6 |     5743 | 2026-01-10 | HYPERSPIRIT        | L   | 0.253      | -            | -                | -                | -         |    -6.24 | DGL, KEi, Kunai, Kylar, mynio       |
|            5 |     5858 | 2025-12-22 | GenOne             | L   | 0.127      | -            | -                | -                | -         |    -3.42 | DGL, KEi, Kunai, Kylar, mynio       |
|            4 |     5862 | 2025-12-21 | TNC                | W   | 0.121      | -            | -                | -                | -         |     0.99 | DGL, KEi, Kunai, Kylar, mynio       |
|            3 |     5872 | 2025-12-21 | Persona Grata      | W   | 0.119      | -            | -                | -                | -         |     0.38 | DGL, KEi, Kunai, Kylar, mynio       |
|            2 |     5886 | 2025-12-20 | VP.Prodigy         | W   | 0.114      | -            | -                | -                | -         |     0.10 | DGL, KEi, Kunai, Kylar, mynio       |
|            1 |     5897 | 2025-12-20 | Project 91         | W   | 0.113      | -            | -                | -                | -         |     0.24 | DGL, KEi, Kunai, Kylar, mynio       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,250.23)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-04-16 |      0.892 | $1,000.00      | $891.95         |
| 2026-03-24 |      0.742 | $2,500.00      | $1,855.25       |
| 2025-12-21 |      0.121 | $2,090.00      | $253.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
