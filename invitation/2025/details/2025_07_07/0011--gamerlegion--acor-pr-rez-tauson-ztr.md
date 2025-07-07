### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, PR, REZ, Tauson, ztr<br />
Global Rank: [11](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1537.4<br />
<br />
Final Rank Value (1537.4) = Starting Rank Value (1548.2) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.710[<sup>1</sup>](#table2)
- Bounty Collected: 0.632[<sup>2</sup>](#table1)
- Opponent Network: 0.355[<sup>2</sup>](#table1)
- LAN Wins: 0.765[<sup>2</sup>](#table1)

The average of these factors is 0.615<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1548.2
- 400 + ( ( 0.615 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1548.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      516 | 2025-05-23 | Falcons     | L   | 0.902      | -            | -                | -                | -         |    -5.04 | acoR, PR, REZ, Tauson, ztr  |
|           39 |      554 | 2025-05-21 | G2          | W   | 0.889      | 1.000        | 0.505 (0.449)    | 0.423 (0.376)    | 1 (0.889) |    15.99 | acoR, PR, REZ, Tauson, ztr  |
|           38 |      559 | 2025-05-21 | FURIA       | W   | 0.887      | 1.000        | 0.339 (0.301)    | 0.435 (0.386)    | 1 (0.887) |    15.90 | acoR, PR, REZ, Tauson, ztr  |
|           37 |      584 | 2025-05-20 | Vitality    | L   | 0.881      | -            | -                | -                | -         |    -1.17 | acoR, PR, REZ, Tauson, ztr  |
|           36 |      617 | 2025-05-19 | 3DMAX       | W   | 0.874      | 1.000        | 0.265 (0.231)    | 0.429 (0.375)    | 1 (0.874) |    15.60 | acoR, PR, REZ, Tauson, ztr  |
|           35 |      797 | 2025-05-12 | HOTU        | L   | 0.825      | -            | -                | -                | -         |   -24.66 | PR, REZ, sl3nd, Tauson, ztr |
|           34 |      824 | 2025-05-11 | FURIA       | L   | 0.818      | -            | -                | -                | -         |   -11.38 | PR, REZ, sl3nd, Tauson, ztr |
|           33 |      845 | 2025-05-10 | Spirit      | L   | 0.813      | -            | -                | -                | -         |    -3.95 | PR, REZ, sl3nd, Tauson, ztr |
|           32 |     1233 | 2025-04-25 | Falcons     | L   | 0.711      | -            | -                | -                | -         |    -4.82 | PR, REZ, sl3nd, Tauson, ztr |
|           31 |     1255 | 2025-04-23 | FaZe        | W   | 0.697      | 1.000        | 0.511 (0.357)    | 0.544 (0.379)    | 1 (0.697) |    15.56 | PR, REZ, sl3nd, Tauson, ztr |
|           30 |     1259 | 2025-04-22 | Complexity  | W   | 0.696      | 1.000        | 0.174 (0.121)    | 0.432 (0.300)    | 1 (0.696) |     6.16 | PR, REZ, sl3nd, Tauson, ztr |
|           29 |     1275 | 2025-04-21 | MOUZ        | L   | 0.689      | -            | -                | -                | -         |    -2.08 | PR, REZ, sl3nd, Tauson, ztr |
|           28 |     1287 | 2025-04-20 | 3DMAX       | W   | 0.683      | 1.000        | 0.265 (0.181)    | 0.429 (0.293)    | 1 (0.683) |    12.49 | PR, REZ, sl3nd, Tauson, ztr |
|           27 |     1396 | 2025-04-16 | SAW         | L   | 0.651      | -            | -                | -                | -         |   -19.34 | PR, REZ, sl3nd, Tauson, ztr |
|           26 |     1423 | 2025-04-15 | 500         | W   | 0.644      | -            | -                | -                | -         |     0.66 | PR, REZ, sl3nd, Tauson, ztr |
|           25 |     1427 | 2025-04-14 | fnatic      | L   | 0.640      | -            | -                | -                | -         |   -16.40 | PR, REZ, sl3nd, Tauson, ztr |
|           24 |     1438 | 2025-04-14 | Nemiga      | L   | 0.639      | -            | -                | -                | -         |   -17.73 | PR, REZ, sl3nd, Tauson, ztr |
|           23 |     1496 | 2025-04-11 | Falcons     | L   | 0.618      | -            | -                | -                | -         |    -5.17 | PR, REZ, sl3nd, Tauson, ztr |
|           22 |     1553 | 2025-04-09 | Virtus.pro  | W   | 0.604      | 1.000        | 0.237 (0.143)    | 0.467 (0.282)    | 1 (0.604) |     9.85 | PR, REZ, sl3nd, Tauson, ztr |
|           21 |     1598 | 2025-04-08 | Legacy      | W   | 0.598      | 1.000        | -                | 0.954 (0.570)    | 1 (0.598) |     3.51 | PR, REZ, sl3nd, Tauson, ztr |
|           20 |     1624 | 2025-04-07 | Falcons     | W   | 0.591      | 1.000        | 1.000 (0.591)    | 0.546 (0.322)    | 1 (0.591) |    13.92 | PR, REZ, sl3nd, Tauson, ztr |
|           19 |     1639 | 2025-04-06 | G2          | L   | 0.585      | -            | -                | -                | -         |    -7.05 | PR, REZ, sl3nd, Tauson, ztr |
|           18 |     2486 | 2025-03-11 | G2          | L   | 0.414      | -            | -                | -                | -         |    -5.27 | PR, REZ, sl3nd, Tauson, ztr |
|           17 |     2537 | 2025-03-10 | SAW         | W   | 0.406      | -            | -                | -                | 1 (0.406) |     0.62 | PR, REZ, sl3nd, Tauson, ztr |
|           16 |     2596 | 2025-03-09 | TYLOO       | W   | 0.398      | 1.000        | 0.219 (0.087)    | 0.663 (0.264)    | -         |     4.04 | PR, REZ, sl3nd, Tauson, ztr |
|           15 |     2667 | 2025-03-08 | paiN        | L   | 0.392      | -            | -                | -                | -         |    -6.66 | PR, REZ, sl3nd, Tauson, ztr |
|           14 |     2736 | 2025-03-07 | The MongolZ | L   | 0.386      | -            | -                | -                | -         |    -1.92 | PR, REZ, sl3nd, Tauson, ztr |
|           13 |     2867 | 2025-03-03 | TYLOO       | W   | 0.359      | -            | -                | -                | -         |     3.76 | PR, REZ, sl3nd, Tauson, ztr |
|           12 |     2883 | 2025-03-02 | MIBR        | W   | 0.353      | -            | -                | -                | -         |     2.25 | PR, REZ, sl3nd, Tauson, ztr |
|           11 |     2909 | 2025-03-01 | NRG         | W   | 0.347      | -            | -                | -                | -         |     0.70 | PR, REZ, sl3nd, Tauson, ztr |
|           10 |     3436 | 2025-02-10 | Metizport   | W   | 0.221      | -            | -                | -                | -         |     0.18 | PR, REZ, sl3nd, Tauson, ztr |
|            9 |     3454 | 2025-02-10 | Hesta       | W   | 0.219      | -            | -                | -                | -         |     0.02 | PR, REZ, sl3nd, Tauson, ztr |
|            8 |     3555 | 2025-02-08 | PARIVISION  | L   | 0.205      | -            | -                | -                | -         |    -6.11 | PR, REZ, sl3nd, Tauson, ztr |
|            7 |     3658 | 2025-02-04 | Spirit      | L   | 0.181      | -            | -                | -                | -         |    -0.93 | PR, REZ, sl3nd, Tauson, ztr |
|            6 |     3668 | 2025-02-04 | Astralis    | W   | 0.179      | -            | -                | -                | -         |     2.49 | PR, REZ, sl3nd, Tauson, ztr |
|            5 |     3680 | 2025-02-03 | The MongolZ | L   | 0.172      | -            | -                | -                | -         |    -0.81 | PR, REZ, sl3nd, Tauson, ztr |
|            4 |     3700 | 2025-02-01 | MOUZ        | W   | 0.160      | 1.000        | 1.000 (0.160)    | -                | -         |     4.49 | PR, REZ, sl3nd, Tauson, ztr |
|            3 |     3717 | 2025-01-30 | paiN        | W   | 0.146      | -            | -                | -                | -         |     2.25 | PR, REZ, sl3nd, Tauson, ztr |
|            2 |     3729 | 2025-01-29 | SAW         | W   | 0.139      | -            | -                | -                | -         |     0.16 | PR, REZ, sl3nd, Tauson, ztr |
|            1 |     3958 | 2025-01-17 | paiN        | L   | 0.059      | -            | -                | -                | -         |    -0.95 | PR, REZ, sl3nd, Tauson, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($194,596.93)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.915 | $72,500.00     | $66,306.38      |
| 2025-05-18 |      0.866 | $12,500.00     | $10,827.30      |
| 2025-04-27 |      0.725 | $72,500.00     | $52,575.72      |
| 2025-04-13 |      0.633 | $62,500.00     | $39,572.74      |
| 2025-03-16 |      0.447 | $38,500.00     | $17,200.81      |
| 2025-02-09 |      0.214 | $38,000.00     | $8,113.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
