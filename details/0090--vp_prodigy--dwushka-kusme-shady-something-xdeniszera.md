### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: dwushka, KusMe, shady, Something, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  916.2<br />
<br />
Final Rank Value (916.2) = Starting Rank Value (898.1) + Head To Head Adjustments (18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.1
- 400 + ( ( 0.245 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 898.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       64 | 2024-06-15 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |   -13.48 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           33 |      130 | 2024-06-13 | HOTU            | W   | 1.000      | 0.450        | 0.008 (0.004)    | -                | 0 (0.000) |     6.06 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           32 |      139 | 2024-06-13 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -5.20 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           31 |      276 | 2024-06-09 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |   -18.93 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |      329 | 2024-06-08 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |   -16.01 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |      427 | 2024-06-06 | Space           | L   | 1.000      | -            | -                | -                | -         |   -17.08 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |      551 | 2024-06-04 | SINNERS         | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.782 (0.340)    | 0 (0.000) |    18.88 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |      599 | 2024-06-02 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -14.08 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |      618 | 2024-06-01 | 3DMAX           | W   | 1.000      | 0.435        | 0.186 (0.081)    | 1.000 (0.435)    | 0 (0.000) |    25.57 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |      631 | 2024-06-01 | 777             | W   | 1.000      | 0.143        | 0.024 (0.003)    | -                | 0 (0.000) |     8.25 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |      646 | 2024-05-31 | LEON            | L   | 1.000      | -            | -                | -                | -         |   -25.28 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |      664 | 2024-05-31 | Alliance        | W   | 1.000      | 0.435        | 0.018 (0.008)    | 0.432 (0.188)    | 0 (0.000) |    13.57 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |      673 | 2024-05-30 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -13.72 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |      721 | 2024-05-28 | CYBERSHOKE      | W   | 1.000      | 0.372        | 0.050 (0.019)    | 0.284 (0.106)    | 0 (0.000) |     9.23 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |      751 | 2024-05-27 | Permitta        | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.885 (0.385)    | 0 (0.000) |    15.27 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |      802 | 2024-05-24 | DMS             | W   | 1.000      | 0.435        | -                | 0.473 (0.205)    | 0 (0.000) |    16.00 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |      847 | 2024-05-22 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.573 (0.249)    | 0 (0.000) |    15.78 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |      942 | 2024-05-20 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -9.85 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |     1000 | 2024-05-18 | CPH Wolves      | W   | 0.994      | -            | -                | -                | 0 (0.000) |     7.73 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |     1163 | 2024-05-14 | LEON            | W   | 0.970      | -            | -                | -                | -         |     7.37 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |     1194 | 2024-05-13 | WOPA            | W   | 0.962      | -            | -                | -                | -         |     5.18 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     1361 | 2024-05-05 | Nemiga          | L   | 0.909      | -            | -                | -                | -         |    -2.91 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     1495 | 2024-04-29 | Nexus           | W   | 0.868      | 0.396        | 0.012 (0.004)    | 0.397 (0.137)    | -         |    13.58 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     1514 | 2024-04-28 | brazylijski luz | L   | 0.862      | -            | -                | -                | -         |   -14.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     1518 | 2024-04-28 | LEON            | W   | 0.861      | 0.396        | 0.008 (0.003)    | 0.165 (0.056)    | -         |     6.90 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     2410 | 2024-03-23 | FORZE           | L   | 0.622      | -            | -                | -                | -         |    -6.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     2427 | 2024-03-22 | ex-Guild Eagles | W   | 0.614      | 0.143        | -                | 0.391 (0.034)    | -         |    10.87 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     2473 | 2024-03-20 | TSM             | W   | 0.601      | -            | -                | -                | -         |     6.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     2700 | 2024-03-10 | 1WIN            | L   | 0.535      | -            | -                | -                | -         |    -6.67 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     2769 | 2024-03-07 | Permitta        | L   | 0.516      | -            | -                | -                | -         |    -6.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     2839 | 2024-03-05 | FORZE YNG       | W   | 0.502      | -            | -                | -                | -         |     0.91 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     4258 | 2023-12-30 | Metizport       | L   | 0.060      | -            | -                | -                | -         |    -0.77 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     4265 | 2023-12-28 | brazylijski luz | W   | 0.047      | -            | -                | -                | -         |     0.54 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     4269 | 2023-12-26 | Alliance        | W   | 0.035      | -            | -                | -                | -         |     0.56 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
