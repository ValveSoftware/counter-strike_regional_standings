### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [6](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [5]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1841.0<br />
<br />
Final Rank Value (1841.0) = Starting Rank Value (1786.1) + Head To Head Adjustments (54.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.806[<sup>1</sup>](#table2)
- Bounty Collected: 0.757[<sup>2</sup>](#table1)
- Opponent Network: 0.410[<sup>2</sup>](#table1)
- LAN Wins: 0.822[<sup>2</sup>](#table1)

The average of these factors is 0.699<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1786.1
- 400 + ( ( 0.699 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1786.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      247 | 2025-12-12 | FaZe          | L   | 1.000      | -            | -                | -                | -         |   -18.64 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           33 |      343 | 2025-12-06 | Falcons       | W   | 1.000      | 1.000        | 0.922 (0.922)    | 0.422 (0.422)    | 1 (1.000) |    18.45 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           32 |      370 | 2025-12-05 | Spirit        | L   | 0.994      | -            | -                | -                | -         |   -16.36 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           31 |      394 | 2025-12-04 | B8            | W   | 0.988      | 1.000        | 0.259 (0.256)    | 0.451 (0.446)    | 1 (0.988) |    10.30 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           30 |      412 | 2025-12-04 | PARIVISION    | W   | 0.986      | 1.000        | 0.161 (0.159)    | 0.632 (0.623)    | 1 (0.986) |     6.14 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           29 |     1046 | 2025-11-08 | Falcons       | L   | 0.817      | -            | -                | -                | -         |   -10.32 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           28 |     1102 | 2025-11-08 | Vitality      | L   | 0.811      | -            | -                | -                | -         |    -8.30 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           27 |     1261 | 2025-11-05 | FURIA         | W   | 0.792      | 1.000        | 1.000 (0.792)    | 0.563 (0.445)    | 1 (0.792) |    15.80 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           26 |     1292 | 2025-11-04 | Vitality      | W   | 0.784      | 1.000        | 1.000 (0.784)    | 0.590 (0.463)    | 1 (0.784) |    17.38 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           25 |     1319 | 2025-11-02 | FaZe          | W   | 0.777      | 1.000        | 0.634 (0.493)    | 0.579 (0.450)    | 1 (0.777) |    11.87 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           24 |     1983 | 2025-10-12 | FaZe          | W   | 0.632      | 1.000        | 0.634 (0.401)    | 0.579 (0.366)    | 1 (0.632) |    11.11 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           23 |     2001 | 2025-10-11 | Falcons       | L   | 0.626      | -            | -                | -                | -         |    -6.97 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           22 |     2040 | 2025-10-10 | Natus Vincere | W   | 0.620      | 1.000        | 0.812 (0.503)    | -                | 1 (0.620) |    11.39 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           21 |     2184 | 2025-10-07 | 3DMAX         | W   | 0.600      | 1.000        | 0.523 (0.314)    | 0.515 (0.309)    | 1 (0.600) |     7.24 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           20 |     2228 | 2025-10-06 | Falcons       | L   | 0.594      | -            | -                | -                | -         |    -6.61 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           19 |     2318 | 2025-10-05 | Gentle Mates  | W   | 0.586      | 1.000        | -                | 0.528 (0.309)    | 1 (0.586) |     3.18 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           18 |     2368 | 2025-10-04 | GamerLegion   | W   | 0.578      | 1.000        | -                | 0.463 (0.268)    | -         |     3.82 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           17 |     3410 | 2025-09-06 | Vitality      | L   | 0.393      | -            | -                | -                | -         |    -3.10 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           16 |     3428 | 2025-09-05 | M80           | W   | 0.387      | -            | -                | -                | -         |     1.83 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           15 |     3473 | 2025-09-01 | FURIA         | L   | 0.361      | -            | -                | -                | -         |    -3.20 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           14 |     3511 | 2025-08-30 | G2            | W   | 0.347      | -            | -                | -                | -         |     2.89 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           13 |     3593 | 2025-08-28 | Imperial      | W   | 0.332      | -            | -                | -                | -         |     2.11 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           12 |     3697 | 2025-08-22 | Falcons       | L   | 0.295      | -            | -                | -                | -         |    -3.53 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           11 |     3725 | 2025-08-21 | Virtus.pro    | W   | 0.286      | -            | -                | -                | -         |     0.25 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |     3862 | 2025-08-16 | Spirit        | L   | 0.253      | -            | -                | -                | -         |    -3.69 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            9 |     3949 | 2025-08-14 | Astralis      | W   | 0.240      | -            | -                | -                | -         |     1.91 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            8 |     4147 | 2025-08-10 | B8            | W   | 0.213      | -            | -                | -                | -         |     2.85 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |     4202 | 2025-08-07 | OG            | W   | 0.193      | -            | -                | -                | -         |     0.25 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |     4243 | 2025-08-03 | Spirit        | L   | 0.167      | -            | -                | -                | -         |    -2.45 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |     4257 | 2025-08-02 | Vitality      | W   | 0.161      | 1.000        | 1.000 (0.161)    | -                | -         |     3.87 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |     4275 | 2025-08-01 | FURIA         | W   | 0.154      | -            | -                | -                | -         |     3.55 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |     4321 | 2025-07-29 | Spirit        | L   | 0.134      | -            | -                | -                | -         |    -1.96 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |     4346 | 2025-07-28 | Natus Vincere | W   | 0.126      | -            | -                | -                | -         |     2.52 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |     4383 | 2025-07-27 | Liquid        | W   | 0.119      | -            | -                | -                | -         |     1.34 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($246,079.26)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.57) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $45,000.00     | $45,000.00      |
| 2025-11-09 |      0.819 | $90,000.00     | $73,669.55      |
| 2025-10-12 |      0.634 | $88,000.00     | $55,761.94      |
| 2025-09-07 |      0.401 | $40,000.00     | $16,030.63      |
| 2025-08-24 |      0.306 | $40,000.00     | $12,228.89      |
| 2025-08-17 |      0.260 | $28,125.00     | $7,315.80       |
| 2025-08-03 |      0.167 | $216,000.00    | $36,072.45      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
