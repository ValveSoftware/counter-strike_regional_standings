### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Global Rank: [10](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1647.3<br />
<br />
Final Rank Value (1647.3) = Starting Rank Value (1699.4) + Head To Head Adjustments (-52.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.768[<sup>1</sup>](#table2)
- Bounty Collected: 0.639[<sup>2</sup>](#table1)
- Opponent Network: 0.276[<sup>2</sup>](#table1)
- LAN Wins: 0.844[<sup>2</sup>](#table1)

The average of these factors is 0.632<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1699.4
- 400 + ( ( 0.632 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1699.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      160 | 2024-08-01 | BIG           | L   | 1.000      | -            | -                | -                | -         |   -27.81 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |      212 | 2024-07-31 | Liquid        | L   | 1.000      | -            | -                | -                | -         |   -19.00 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |      582 | 2024-07-20 | G2            | L   | 1.000      | -            | -                | -                | -         |    -5.74 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |      622 | 2024-07-19 | Vitality      | W   | 1.000      | 1.000        | 0.647 (0.647)    | 0.366 (0.366)    | 1 (1.000) |    22.20 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |      727 | 2024-07-17 | Complexity    | W   | 1.000      | 1.000        | 0.341 (0.341)    | 0.364 (0.364)    | 1 (1.000) |    13.07 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1080 | 2024-06-15 | Natus Vincere | L   | 0.854      | -            | -                | -                | -         |    -5.08 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |     1117 | 2024-06-14 | Astralis      | W   | 0.847      | 0.729        | 0.389 (0.240)    | 0.403 (0.249)    | 1 (0.847) |    15.18 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |     1156 | 2024-06-13 | Spirit        | L   | 0.841      | -            | -                | -                | -         |    -5.28 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |     1191 | 2024-06-12 | Vitality      | W   | 0.834      | 0.729        | 0.647 (0.393)    | 0.366 (0.223)    | 1 (0.834) |    19.91 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1739 | 2024-05-29 | BIG           | L   | 0.740      | -            | -                | -                | -         |   -20.39 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           28 |     1754 | 2024-05-28 | FaZe          | L   | 0.735      | -            | -                | -                | -         |    -9.45 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           27 |     1777 | 2024-05-27 | HEROIC        | W   | 0.728      | 0.624        | 0.224 (0.102)    | 0.354 (0.161)    | 1 (0.728) |     7.96 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           26 |     2067 | 2024-05-17 | Falcons       | L   | 0.659      | -            | -                | -                | -         |   -16.86 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           25 |     2107 | 2024-05-16 | MOUZ          | L   | 0.652      | -            | -                | -                | -         |    -5.02 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           24 |     2207 | 2024-05-14 | Falcons       | W   | 0.640      | 0.769        | 0.219 (0.108)    | -                | 1 (0.640) |     3.45 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           23 |     2329 | 2024-05-09 | Complexity    | L   | 0.606      | -            | -                | -                | -         |   -10.07 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           22 |     2345 | 2024-05-08 | The MongolZ   | W   | 0.601      | 0.889        | 1.000 (0.534)    | 0.694 (0.371)    | 1 (0.601) |    14.72 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           21 |     2364 | 2024-05-07 | GamerLegion   | W   | 0.594      | 0.889        | 0.173 (0.091)    | -                | 1 (0.594) |     0.91 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           20 |     2552 | 2024-04-28 | SAW           | W   | 0.533      | 0.889        | -                | 0.516 (0.244)    | 1 (0.533) |     1.03 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           19 |     2582 | 2024-04-27 | fnatic        | W   | 0.525      | 0.889        | 0.370 (0.173)    | 0.680 (0.318)    | 1 (0.525) |     4.98 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           18 |     2624 | 2024-04-25 | FaZe          | L   | 0.514      | -            | -                | -                | -         |    -7.38 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           17 |     2648 | 2024-04-24 | SAW           | W   | 0.506      | 0.889        | -                | 0.516 (0.232)    | -         |     0.85 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           16 |     2669 | 2024-04-23 | fnatic        | L   | 0.499      | -            | -                | -                | -         |   -11.18 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           15 |     2966 | 2024-04-12 | G2            | L   | 0.424      | -            | -                | -                | -         |    -2.19 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     3047 | 2024-04-10 | Astralis      | L   | 0.411      | -            | -                | -                | -         |    -5.86 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     3102 | 2024-04-09 | FlyQuest      | W   | 0.404      | -            | -                | -                | -         |     0.61 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     3132 | 2024-04-08 | Wildcard      | W   | 0.397      | -            | -                | -                | -         |     0.02 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3432 | 2024-03-24 | G2            | L   | 0.300      | -            | -                | -                | -         |    -1.53 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3446 | 2024-03-23 | Eternal Fire  | L   | 0.293      | -            | -                | -                | -         |    -4.52 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3464 | 2024-03-22 | HEROIC        | W   | 0.285      | -            | -                | -                | -         |     2.89 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3477 | 2024-03-21 | paiN          | W   | 0.280      | 1.000        | 0.324 (0.091)    | 0.839 (0.235)    | -         |     1.44 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3488 | 2024-03-21 | Imperial      | L   | 0.279      | -            | -                | -                | -         |    -8.12 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3689 | 2024-03-12 | HEROIC        | W   | 0.221      | -            | -                | -                | -         |     2.13 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3704 | 2024-03-11 | Apeks         | W   | 0.214      | -            | -                | -                | -         |     0.08 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3715 | 2024-03-11 | B8            | W   | 0.213      | -            | -                | -                | -         |     0.21 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     4297 | 2024-02-15 | Natus Vincere | W   | 0.047      | -            | -                | -                | -         |     1.20 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     4329 | 2024-02-14 | fnatic        | W   | 0.040      | -            | -                | -                | -         |     0.40 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     4347 | 2024-02-14 | SAW           | W   | 0.038      | -            | -                | -                | -         |     0.06 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($159,618.30)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-07-21 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-16 |      0.860 | $40,000.00     | $34,398.07      |
| 2024-06-02 |      0.768 | $5,000.00      | $3,838.58       |
| 2024-05-12 |      0.627 | $32,000.00     | $20,050.18      |
| 2024-04-14 |      0.438 | $10,000.00     | $4,384.45       |
| 2024-03-31 |      0.347 | $20,000.00     | $6,947.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
