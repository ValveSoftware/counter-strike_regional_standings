### Roster Details<br />
Team Name: Metizport<br />
Roster: F1KU, forsyy, isak, Plopski, stanislaw<br />
Global Rank: [62](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [43]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1101.9<br />
<br />
Final Rank Value (1101.9) = Starting Rank Value (1130.9) + Head To Head Adjustments (-29.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.689[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1130.9
- 400 + ( ( 0.388 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1130.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      271 | 2026-06-14 | Alliance           | L   | 1.000      | -            | -                | -                | -         |    -6.04 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           54 |      287 | 2026-06-14 | fnatic             | W   | 1.000      | 0.373        | 0.016 (0.006)    | 0.644 (0.241)    | 1 (1.000) |    15.57 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           53 |      311 | 2026-06-13 | Nexus              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.20 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           52 |      318 | 2026-06-13 | EAC                | W   | 1.000      | 0.373        | 0.015 (0.006)    | 0.700 (0.262)    | 1 (1.000) |    13.64 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           51 |      335 | 2026-06-13 | atputies           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.72 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           50 |     1047 | 2026-05-21 | Betclic            | L   | 0.894      | -            | -                | -                | -         |   -12.68 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           49 |     1049 | 2026-05-21 | Rebels             | L   | 0.894      | -            | -                | -                | -         |   -15.74 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           48 |     1056 | 2026-05-21 | OG                 | L   | 0.894      | -            | -                | -                | -         |   -13.73 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           47 |     1086 | 2026-05-21 | Passion UA         | W   | 0.891      | 0.435        | 0.024 (0.009)    | 0.308 (0.119)    | 1 (0.891) |    14.15 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           46 |     2192 | 2026-04-16 | ARCRED             | W   | 0.659      | 0.371        | 0.021 (0.005)    | 0.447 (0.109)    | -         |    10.97 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           45 |     2229 | 2026-04-14 | Phantom            | W   | 0.646      | 0.371        | -                | 0.743 (0.178)    | -         |     9.36 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           44 |     2247 | 2026-04-13 | ex-RUBY            | W   | 0.639      | 0.371        | 0.037 (0.009)    | 1.000 (0.237)    | -         |     7.93 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           43 |     2289 | 2026-04-11 | Basement Bobs      | W   | 0.626      | -            | -                | -                | -         |     1.11 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           42 |     2547 | 2026-04-04 | Bebop              | L   | 0.580      | -            | -                | -                | -         |   -14.19 | Dragon, forsyy, isak, Plopski, stanislaw |
|           41 |     2720 | 2026-04-02 | PsychoFace         | L   | 0.568      | -            | -                | -                | -         |   -10.31 | Dragon, forsyy, isak, Plopski, stanislaw |
|           40 |     2858 | 2026-04-01 | ENCE               | W   | 0.558      | 0.435        | 0.010 (0.002)    | 0.488 (0.118)    | -         |     2.88 | Dragon, forsyy, isak, Plopski, stanislaw |
|           39 |     3099 | 2026-03-29 | RUSTEC             | L   | 0.539      | -            | -                | -                | -         |   -14.02 | Dragon, forsyy, isak, Plopski, stanislaw |
|           38 |     3203 | 2026-03-27 | EYEBALLERS         | L   | 0.528      | -            | -                | -                | -         |    -5.61 | Dragon, forsyy, isak, Plopski, stanislaw |
|           37 |     3424 | 2026-03-23 | UNiTY              | W   | 0.501      | -            | -                | -                | 1 (0.501) |     2.25 | Dragon, forsyy, isak, Plopski, stanislaw |
|           36 |     3437 | 2026-03-23 | GamerLegion        | L   | 0.500      | -            | -                | -                | -         |    -0.87 | Dragon, forsyy, isak, Plopski, stanislaw |
|           35 |     3447 | 2026-03-23 | UNiTY              | W   | 0.499      | -            | -                | -                | 1 (0.499) |     2.29 | Dragon, forsyy, isak, Plopski, stanislaw |
|           34 |     3819 | 2026-03-15 | Nemiga             | L   | 0.448      | -            | -                | -                | -         |    -6.18 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           33 |     3831 | 2026-03-15 | illwill            | W   | 0.447      | 0.384        | 0.014 (0.002)    | -                | -         |     4.87 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           32 |     3873 | 2026-03-14 | KOLESIE            | W   | 0.440      | 0.384        | 0.026 (0.004)    | 0.839 (0.142)    | -         |     6.25 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           31 |     3985 | 2026-03-12 | ENCE               | W   | 0.426      | -            | -                | -                | -         |     2.13 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           30 |     4044 | 2026-03-10 | K27                | L   | 0.415      | -            | -                | -                | -         |    -4.09 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           29 |     4086 | 2026-03-09 | NOVAQ              | W   | 0.408      | -            | -                | -                | -         |     2.81 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           28 |     4177 | 2026-03-08 | PsychoFace         | L   | 0.401      | -            | -                | -                | -         |    -8.55 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           27 |     4278 | 2026-03-06 | FAVBET             | L   | 0.387      | -            | -                | -                | -         |   -10.17 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           26 |     4433 | 2026-03-03 | Leo                | W   | 0.367      | -            | -                | -                | -         |     1.40 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           25 |     4451 | 2026-03-03 | JiJieHao           | L   | 0.366      | -            | -                | -                | -         |    -4.19 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           24 |     4485 | 2026-03-02 | los kogutos        | W   | 0.359      | 0.435        | 0.019 (0.003)    | 0.945 (0.148)    | -         |     3.14 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           23 |     4536 | 2026-03-01 | aimclub            | W   | 0.352      | -            | -                | -                | -         |     2.50 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           22 |     4923 | 2026-02-21 | Acend              | L   | 0.301      | -            | -                | -                | -         |    -1.58 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           21 |     4945 | 2026-02-21 | Young Ninjas       | W   | 0.300      | -            | -                | -                | 1 (0.300) |     1.55 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           20 |     4953 | 2026-02-21 | EAC                | W   | 0.299      | -            | -                | -                | 1 (0.299) |     5.45 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           19 |     5037 | 2026-02-19 | Alliance           | L   | 0.287      | -            | -                | -                | -         |    -1.44 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           18 |     5088 | 2026-02-18 | Johnny Speeds      | W   | 0.281      | 0.435        | 0.048 (0.006)    | 0.773 (0.094)    | -         |     5.34 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           17 |     5269 | 2026-02-15 | VP.Prodigy         | W   | 0.259      | -            | -                | -                | -         |     0.39 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           16 |     5376 | 2026-02-13 | Acend              | L   | 0.246      | -            | -                | -                | -         |    -1.21 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           15 |     5464 | 2026-02-11 | Lazer Cats         | W   | 0.232      | -            | -                | -                | -         |     0.97 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           14 |     5524 | 2026-02-09 | ALGO               | W   | 0.219      | -            | -                | -                | -         |     0.23 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           13 |     5548 | 2026-02-08 | OG                 | L   | 0.214      | -            | -                | -                | -         |    -3.58 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           12 |     5795 | 2026-01-31 | Johnny Speeds      | L   | 0.160      | -            | -                | -                | -         |    -2.08 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           11 |     5857 | 2026-01-29 | Just Players       | L   | 0.146      | -            | -                | -                | -         |    -4.24 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           10 |     5869 | 2026-01-28 | Bebop              | L   | 0.141      | -            | -                | -                | -         |    -4.27 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            9 |     5891 | 2026-01-27 | SIXSEVEN           | W   | 0.134      | -            | -                | -                | -         |     0.07 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            8 |     5925 | 2026-01-25 | ex-Fingers Crossed | L   | 0.122      | -            | -                | -                | -         |    -3.70 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            7 |     5969 | 2026-01-24 | Alliance           | L   | 0.114      | -            | -                | -                | -         |    -0.54 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            6 |     6006 | 2026-01-23 | Entropy            | W   | 0.108      | -            | -                | -                | 1 (0.108) |     0.58 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            5 |     6009 | 2026-01-23 | ReThink            | W   | 0.108      | -            | -                | -                | -         |     0.65 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            4 |     6016 | 2026-01-23 | HAVU               | L   | 0.107      | -            | -                | -                | -         |    -2.84 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            3 |     6155 | 2026-01-19 | ex-RUBY            | L   | 0.079      | -            | -                | -                | -         |    -1.90 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            2 |     6220 | 2026-01-17 | KOLESIE            | L   | 0.067      | -            | -                | -                | -         |    -1.86 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            1 |     6239 | 2026-01-17 | Bebop              | W   | 0.066      | -            | -                | -                | -         |     0.07 | Dragon, forsyy, isak, Jackinho, Plopski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,894.39)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-04-16 |      0.659 | $11,000.00     | $7,247.52       |
| 2026-03-28 |      0.534 | $2,500.00      | $1,335.62       |
| 2026-03-15 |      0.448 | $5,000.00      | $2,240.41       |
| 2026-02-21 |      0.301 | $1,600.00      | $482.15         |
| 2026-02-20 |      0.294 | $2,000.00      | $588.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
