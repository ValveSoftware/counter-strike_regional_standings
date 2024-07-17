### Roster Details<br />
Team Name: Rhyno<br />
Roster: Ag1l, DDias, krazy, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  1051.8<br />
<br />
Final Rank Value (1051.8) = Starting Rank Value (1043.7) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1043.7
- 400 + ( ( 0.300 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1043.7


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
|           25 |       11 | 2024-07-17 | HAVU          | W   | 1.000      | 0.143        | -                | 0.202 (0.029)    | 0 (0.000) |     5.38 | Ag1l, DDias, krazy, snapy, TMKj        |
|           24 |       63 | 2024-07-16 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -13.53 | Ag1l, DDias, krazy, snapy, TMKj        |
|           23 |      480 | 2024-06-11 | Nemiga        | L   | 0.960      | -            | -                | -                | -         |    -8.29 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           22 |      502 | 2024-06-10 | CYBERSHOKE    | W   | 0.953      | 0.500        | 0.059 (0.028)    | 0.309 (0.147)    | 0 (0.000) |     7.56 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           21 |      533 | 2024-06-09 | Rebels        | W   | 0.947      | 0.500        | 0.052 (0.025)    | 0.575 (0.272)    | 0 (0.000) |    16.35 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           20 |      627 | 2024-06-08 | NAVI Junior   | W   | 0.939      | 0.500        | -                | 0.109 (0.051)    | 0 (0.000) |     2.33 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |      719 | 2024-06-06 | MOUZ NXT      | L   | 0.928      | -            | -                | -                | -         |   -10.39 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |      830 | 2024-06-04 | Endpoint      | W   | 0.914      | 0.500        | 0.018 (0.008)    | 0.498 (0.228)    | 0 (0.000) |    10.12 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |     1029 | 2024-05-28 | Sampi         | L   | 0.866      | -            | -                | -                | -         |   -17.06 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1052 | 2024-05-27 | Endpoint      | W   | 0.859      | 0.435        | 0.018 (0.007)    | 0.498 (0.186)    | 0 (0.000) |     9.63 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1094 | 2024-05-25 | Zero Tenacity | L   | 0.845      | -            | -                | -                | -         |   -11.35 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1160 | 2024-05-22 | MOUZ NXT      | W   | 0.826      | 0.435        | 0.150 (0.054)    | 1.000 (0.359)    | 0 (0.000) |    13.75 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1197 | 2024-05-21 | B8            | L   | 0.821      | -            | -                | -                | -         |    -7.89 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1304 | 2024-05-18 | LEON          | W   | 0.798      | 0.143        | 0.010 (0.001)    | 0.160 (0.018)    | -         |     3.58 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1360 | 2024-05-16 | CPH Wolves    | W   | 0.787      | -            | -                | -                | -         |     1.66 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     1419 | 2024-05-15 | EYEBALLERS    | W   | 0.779      | 0.143        | 0.009 (0.001)    | 0.619 (0.069)    | -         |     8.26 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     1519 | 2024-05-12 | AL QATRAO     | W   | 0.760      | 0.306        | 0.006 (0.001)    | 0.035 (0.008)    | 1 (0.760) |     3.87 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     1557 | 2024-05-11 | ALL-IN        | W   | 0.752      | 0.306        | 0.002 (0.000)    | -                | 1 (0.752) |     1.39 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     3176 | 2024-03-03 | Portugal      | L   | 0.294      | -            | -                | -                | -         |    -7.80 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     3203 | 2024-03-02 | AL QATRAO     | W   | 0.287      | 0.314        | 0.006 (0.001)    | -                | 1 (0.287) |     1.37 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     3734 | 2024-02-04 | SAW           | L   | 0.107      | -            | -                | -                | -         |    -0.77 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3756 | 2024-02-03 | Portugal      | W   | 0.101      | -            | -                | -                | -         |     0.51 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     3787 | 2024-02-02 | ABT           | W   | 0.094      | -            | -                | -                | -         |     0.12 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     3794 | 2024-02-02 | KOI           | L   | 0.093      | -            | -                | -                | -         |    -0.88 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     3796 | 2024-02-02 | OVERFRAG      | W   | 0.093      | -            | -                | -                | -         |     0.16 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,521.51)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.960 | $25,000.00     | $23,997.37      |
| 2024-05-12 |      0.760 | $2,693.00      | $2,046.46       |
| 2024-03-03 |      0.294 | $1,625.00      | $477.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
