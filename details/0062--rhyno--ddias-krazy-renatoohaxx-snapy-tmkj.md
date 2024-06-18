### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  1052.1<br />
<br />
Final Rank Value (1052.1) = Starting Rank Value (1029.7) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.249[<sup>2</sup>](#table1)

The average of these factors is 0.310<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1029.7
- 400 + ( ( 0.310 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1029.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      180 | 2024-06-11 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -8.29 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           25 |      202 | 2024-06-10 | CYBERSHOKE      | W   | 1.000      | 0.500        | 0.050 (0.025)    | 0.284 (0.142)    | 0 (0.000) |     7.31 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           24 |      233 | 2024-06-09 | Rebels          | W   | 1.000      | 0.500        | 0.054 (0.027)    | 0.450 (0.225)    | 0 (0.000) |    18.72 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           23 |      327 | 2024-06-08 | NAVI Junior     | W   | 1.000      | 0.500        | -                | 0.107 (0.053)    | 0 (0.000) |     2.61 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           22 |      419 | 2024-06-06 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -10.27 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           21 |      530 | 2024-06-04 | Endpoint        | W   | 1.000      | 0.500        | 0.016 (0.008)    | 0.490 (0.245)    | 0 (0.000) |    11.35 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           20 |      731 | 2024-05-28 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -19.10 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |      754 | 2024-05-27 | Endpoint        | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.490 (0.213)    | 0 (0.000) |    11.50 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |      796 | 2024-05-25 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -12.57 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |      862 | 2024-05-22 | MOUZ NXT        | W   | 1.000      | 0.435        | 0.158 (0.069)    | 1.000 (0.435)    | 0 (0.000) |    17.17 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |      899 | 2024-05-21 | B8              | L   | 1.000      | -            | -                | -                | -         |    -8.16 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1006 | 2024-05-18 | LEON            | W   | 0.994      | 0.143        | 0.008 (0.001)    | 0.165 (0.023)    | 0 (0.000) |     4.29 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1062 | 2024-05-16 | CPH Wolves      | W   | 0.982      | 0.143        | 0.005 (0.001)    | 0.177 (0.025)    | -         |     4.17 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1121 | 2024-05-15 | EYEBALLERS      | W   | 0.974      | 0.143        | 0.006 (0.001)    | 0.653 (0.091)    | -         |    10.92 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1221 | 2024-05-12 | AL QATRAO       | W   | 0.955      | 0.306        | 0.006 (0.002)    | 0.044 (0.013)    | 1 (0.955) |     5.47 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1259 | 2024-05-11 | ALL-IN          | W   | 0.947      | -            | -                | -                | 1 (0.947) |     1.88 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2879 | 2024-03-03 | esmagaB         | L   | 0.489      | -            | -                | -                | -         |   -12.65 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2906 | 2024-03-02 | AL QATRAO       | W   | 0.482      | 0.314        | 0.006 (0.001)    | -                | 1 (0.482) |     2.55 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     3437 | 2024-02-04 | SAW             | L   | 0.302      | -            | -                | -                | -         |    -1.55 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     3459 | 2024-02-03 | esmagaB         | W   | 0.296      | -            | -                | -                | -         |     1.70 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     3490 | 2024-02-02 | ABT             | W   | 0.289      | -            | -                | -                | -         |     0.42 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     3497 | 2024-02-02 | KOI             | L   | 0.289      | -            | -                | -                | -         |    -2.66 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3499 | 2024-02-02 | OVERFRAG        | W   | 0.288      | -            | -                | -                | -         |     0.53 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     4250 | 2024-01-09 | ECLOT           | L   | 0.129      | -            | -                | -                | -         |    -0.95 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     4264 | 2023-12-28 | Alliance        | L   | 0.048      | -            | -                | -                | -         |    -1.00 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     4268 | 2023-12-27 | brazylijski luz | L   | 0.041      | -            | -                | -                | -         |    -1.01 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,367.37)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-05-12 |      0.955 | $2,693.00      | $2,572.35       |
| 2024-03-03 |      0.489 | $1,625.00      | $795.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
