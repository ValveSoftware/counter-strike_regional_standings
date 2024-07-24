### Roster Details<br />
Team Name: Rhyno<br />
Roster: Ag1l, DDias, krazy, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  1017.0<br />
<br />
Final Rank Value (1017.0) = Starting Rank Value (1001.8) + Head To Head Adjustments (15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.490[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.297<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.8
- 400 + ( ( 0.297 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1001.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       46 | 2024-07-23 | FAVBET        | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.390 (0.056)    | 0 (0.000) |     9.64 | Ag1l, DDias, krazy, snapy, TMKj        |
|           27 |      152 | 2024-07-19 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -12.92 | Ag1l, DDias, krazy, snapy, TMKj        |
|           26 |      225 | 2024-07-18 | Nexus         | W   | 1.000      | 0.500        | 0.018 (0.009)    | 0.480 (0.240)    | 0 (0.000) |     5.68 | Ag1l, DDias, krazy, snapy, TMKj        |
|           25 |      299 | 2024-07-17 | HAVU          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.45 | Ag1l, DDias, krazy, snapy, TMKj        |
|           24 |      351 | 2024-07-16 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -13.51 | Ag1l, DDias, krazy, snapy, TMKj        |
|           23 |      768 | 2024-06-11 | Nemiga        | L   | 0.913      | -            | -                | -                | -         |    -8.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           22 |      790 | 2024-06-10 | CYBERSHOKE    | W   | 0.906      | 0.500        | 0.050 (0.023)    | 0.294 (0.133)    | 0 (0.000) |     7.37 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           21 |      821 | 2024-06-09 | Rebels        | W   | 0.900      | 0.500        | 0.053 (0.024)    | 0.661 (0.298)    | 0 (0.000) |    15.55 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           20 |      915 | 2024-06-08 | NAVI Junior   | W   | 0.892      | 0.500        | -                | 0.102 (0.046)    | 0 (0.000) |     2.44 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |     1007 | 2024-06-06 | MOUZ NXT      | L   | 0.880      | -            | -                | -                | -         |   -10.00 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |     1118 | 2024-06-04 | Endpoint      | W   | 0.867      | 0.500        | 0.015 (0.007)    | 0.466 (0.202)    | 0 (0.000) |     9.87 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |     1317 | 2024-05-28 | Sampi         | L   | 0.818      | -            | -                | -                | -         |   -16.19 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1340 | 2024-05-27 | Endpoint      | W   | 0.812      | 0.435        | 0.015 (0.005)    | 0.466 (0.165)    | -         |     9.36 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1382 | 2024-05-25 | Zero Tenacity | L   | 0.798      | -            | -                | -                | -         |   -10.21 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1448 | 2024-05-22 | MOUZ NXT      | W   | 0.779      | 0.435        | 0.169 (0.057)    | 1.000 (0.338)    | -         |    12.95 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1485 | 2024-05-21 | B8            | L   | 0.774      | -            | -                | -                | -         |    -7.71 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1592 | 2024-05-18 | LEON          | W   | 0.751      | 0.143        | 0.009 (0.001)    | -                | -         |     3.52 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1648 | 2024-05-16 | CPH Wolves    | W   | 0.740      | 0.143        | -                | 0.388 (0.041)    | -         |     5.25 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     1707 | 2024-05-15 | EYEBALLERS    | W   | 0.731      | 0.143        | 0.007 (0.001)    | 0.571 (0.060)    | -         |     7.89 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     1807 | 2024-05-12 | AL QATRAO     | W   | 0.713      | 0.306        | 0.005 (0.001)    | -                | 1 (0.713) |     3.75 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     1845 | 2024-05-11 | ALL-IN        | W   | 0.705      | -            | -                | -                | 1 (0.705) |     1.52 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     3464 | 2024-03-03 | Portugal      | L   | 0.247      | -            | -                | -                | -         |    -6.51 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     3491 | 2024-03-02 | AL QATRAO     | W   | 0.240      | -            | -                | -                | 1 (0.240) |     1.19 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     4022 | 2024-02-04 | SAW           | L   | 0.059      | -            | -                | -                | -         |    -0.49 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     4044 | 2024-02-03 | Portugal      | W   | 0.053      | -            | -                | -                | -         |     0.28 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     4075 | 2024-02-02 | ABT           | W   | 0.047      | -            | -                | -                | -         |     0.07 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     4082 | 2024-02-02 | KOI           | L   | 0.046      | -            | -                | -                | -         |    -0.50 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     4084 | 2024-02-02 | OVERFRAG      | W   | 0.046      | -            | -                | -                | -         |     0.09 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,136.97)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.913 | $25,000.00     | $22,816.74      |
| 2024-05-12 |      0.713 | $2,693.00      | $1,919.28       |
| 2024-03-03 |      0.247 | $1,625.00      | $400.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
