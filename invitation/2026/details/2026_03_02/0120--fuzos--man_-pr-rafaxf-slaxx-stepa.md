### Roster Details<br />
Team Name: Fuzos<br />
Roster: Mané, pr, rafaxF, Slaxx, Stepa<br />
Global Rank: [120](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [89]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  898.4<br />
<br />
Final Rank Value (898.4) = Starting Rank Value (943.3) + Head To Head Adjustments (-44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.363[<sup>2</sup>](#table1)

The average of these factors is 0.287<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.3
- 400 + ( ( 0.287 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 943.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       11 | 2026-03-01 | Rebels           | L   | 1.000      | -            | -                | -                | -         |   -11.18 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           32 |       45 | 2026-02-28 | Famalicão        | W   | 1.000      | 0.317        | 0.004 (0.001)    | 0.193 (0.061)    | 1 (1.000) |    14.59 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           31 |       49 | 2026-02-28 | Lazer Cats       | L   | 1.000      | -            | -                | -                | -         |   -13.10 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           30 |       80 | 2026-02-27 | HAVU             | L   | 1.000      | -            | -                | -                | -         |   -12.74 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           29 |      139 | 2026-02-26 | BIG EQUIPA       | W   | 1.000      | 0.384        | 0.141 (0.054)    | 0.227 (0.087)    | 0 (0.000) |    13.97 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           28 |      210 | 2026-02-24 | EC BANGA         | W   | 1.000      | 0.143        | 0.005 (0.001)    | -                | 0 (0.000) |    12.54 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           27 |      234 | 2026-02-23 | QWENTRY          | L   | 1.000      | -            | -                | -                | -         |   -15.42 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           26 |      242 | 2026-02-23 | ex-Zero Tenacity | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.210 (0.081)    | 0 (0.000) |     9.06 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           25 |      392 | 2026-02-20 | Omega            | L   | 1.000      | -            | -                | -                | -         |    -9.72 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           24 |      429 | 2026-02-19 | Lazer Cats       | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.466 (0.179)    | 0 (0.000) |    16.58 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           23 |      438 | 2026-02-19 | The Last Resort  | W   | 1.000      | 0.143        | 0.017 (0.002)    | -                | 0 (0.000) |     8.61 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           22 |      569 | 2026-02-17 | Bushido Wildcats | L   | 1.000      | -            | -                | -                | -         |   -20.53 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           21 |      586 | 2026-02-16 | ARCRED           | W   | 1.000      | 0.384        | 0.011 (0.004)    | 0.942 (0.362)    | -         |    23.08 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           20 |      598 | 2026-02-16 | WHITEBIRD        | L   | 1.000      | -            | -                | -                | -         |    -7.20 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           19 |      642 | 2026-02-15 | illwill          | L   | 1.000      | -            | -                | -                | -         |    -2.11 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           18 |      654 | 2026-02-15 | Bushido Wildcats | W   | 1.000      | 0.143        | -                | 0.294 (0.042)    | -         |    10.90 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           17 |      723 | 2026-02-14 | BRUTE            | L   | 1.000      | -            | -                | -                | -         |   -17.39 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           16 |      754 | 2026-02-13 | Ursa             | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.351 (0.135)    | -         |    16.14 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           15 |      769 | 2026-02-13 | ALGO             | L   | 1.000      | -            | -                | -                | -         |   -13.14 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           14 |      817 | 2026-02-12 | Pigeons          | W   | 1.000      | 0.384        | 0.066 (0.025)    | 0.399 (0.153)    | -         |    11.74 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           13 |      852 | 2026-02-11 | HYPERSPIRIT      | L   | 1.000      | -            | -                | -                | -         |   -20.18 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           12 |     1026 | 2026-02-05 | CSDIILIT         | L   | 1.000      | -            | -                | -                | -         |   -24.14 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|           11 |     1039 | 2026-02-04 | WHITEBIRD        | L   | 1.000      | -            | -                | -                | -         |    -6.76 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|           10 |     1688 | 2026-01-15 | MANA             | L   | 0.893      | -            | -                | -                | -         |   -18.15 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            9 |     1694 | 2026-01-15 | MOUZ NXT         | L   | 0.893      | -            | -                | -                | -         |    -6.09 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            8 |     1699 | 2026-01-15 | MANA             | W   | 0.892      | 0.341        | -                | 0.383 (0.116)    | 1 (0.892) |     9.48 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            7 |     1886 | 2025-12-21 | BC.Game          | L   | 0.726      | -            | -                | -                | -         |    -1.33 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            6 |     1908 | 2025-12-20 | Rebels           | W   | 0.720      | 0.309        | 0.017 (0.004)    | 0.349 (0.078)    | 1 (0.720) |    16.84 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            5 |     1915 | 2025-12-20 | Flame Hard       | W   | 0.719      | -            | -                | -                | 1 (0.719) |     1.08 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            4 |     1919 | 2025-12-20 | Rebels           | L   | 0.718      | -            | -                | -                | -         |    -5.60 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            3 |     2474 | 2025-11-22 | Sashi            | L   | 0.533      | -            | -                | -                | -         |    -3.18 | Didjey, rafaxF, Slaxx, Sprayy, Stepa     |
|            2 |     3777 | 2025-10-11 | Rebels           | L   | 0.254      | -            | -                | -                | -         |    -2.08 | Didjey, rafaxF, Slaxx, Sprayy, Stepa     |
|            1 |     3810 | 2025-10-10 | CarritoSpain     | W   | 0.247      | -            | -                | -                | 1 (0.247) |     0.62 | Didjey, rafaxF, Slaxx, Sprayy, Stepa     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,697.42)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $500.00        | $500.00         |
| 2026-03-01 |      1.000 | $1,765.00      | $1,765.00       |
| 2025-11-23 |      0.540 | $435.00        | $235.07         |
| 2025-10-12 |      0.260 | $758.00        | $197.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
