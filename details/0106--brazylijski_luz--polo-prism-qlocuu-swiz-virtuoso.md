### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  867.5<br />
<br />
Final Rank Value (867.5) = Starting Rank Value (812.3) + Head To Head Adjustments (55.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.343[<sup>2</sup>](#table1)
- Opponent Network: 0.140[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.3
- 400 + ( ( 0.204 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 812.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |       44 | 2024-07-23 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -4.49 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           28 |      275 | 2024-07-17 | RUSH B            | W   | 1.000      | 0.500        | 0.021 (0.011)    | 0.306 (0.153)    | 0 (0.000) |    17.65 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           27 |      391 | 2024-07-15 | Rebels            | W   | 1.000      | 0.500        | 0.053 (0.026)    | 0.661 (0.330)    | 0 (0.000) |    22.90 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           26 |     1127 | 2024-06-04 | The Prodigies     | L   | 0.866      | -            | -                | -                | -         |   -22.46 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           25 |     1159 | 2024-06-03 | Johnny Speeds     | L   | 0.859      | -            | -                | -                | -         |    -2.33 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           24 |     1184 | 2024-06-02 | Serbia            | L   | 0.852      | -            | -                | -                | -         |   -15.15 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           23 |     1275 | 2024-05-30 | Enterprise        | W   | 0.831      | 0.371        | 0.050 (0.015)    | 0.646 (0.199)    | 0 (0.000) |    15.63 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           22 |     1293 | 2024-05-29 | SINNERS           | L   | 0.826      | -            | -                | -                | -         |    -7.16 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           21 |     1341 | 2024-05-27 | Entropiq          | W   | 0.811      | -            | -                | -                | 0 (0.000) |     1.76 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           20 |     1401 | 2024-05-23 | GL Academy        | W   | 0.787      | 0.379        | 0.009 (0.003)    | 0.118 (0.035)    | 0 (0.000) |     9.48 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           19 |     1412 | 2024-05-23 | Zero Tenacity     | L   | 0.784      | -            | -                | -                | -         |    -4.93 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           18 |     1942 | 2024-05-06 | Grannys Knockers  | L   | 0.671      | -            | -                | -                | -         |   -12.93 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           17 |     2100 | 2024-04-28 | VP.Prodigy        | W   | 0.619      | 0.396        | 0.033 (0.008)    | 0.462 (0.113)    | 0 (0.000) |     9.90 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           16 |     2109 | 2024-04-28 | Nexus             | W   | 0.618      | 0.396        | 0.018 (0.004)    | 0.480 (0.118)    | 0 (0.000) |     9.69 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           15 |     2273 | 2024-04-20 | Sangal            | L   | 0.567      | -            | -                | -                | -         |    -3.67 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           14 |     2315 | 2024-04-19 | Rebels            | W   | 0.560      | 0.500        | 0.053 (0.015)    | 0.661 (0.185)    | 0 (0.000) |    12.88 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           13 |     2361 | 2024-04-18 | BetBoom           | L   | 0.553      | -            | -                | -                | -         |    -0.52 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           12 |     2367 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.553      | 0.143        | 0.287 (0.023)    | 0.537 (0.042)    | 0 (0.000) |    17.25 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           11 |     2572 | 2024-04-10 | Betera            | W   | 0.501      | -            | -                | -                | 0 (0.000) |     5.70 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           10 |     2625 | 2024-04-09 | FORZE             | L   | 0.494      | -            | -                | -                | -         |    -4.61 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            9 |     2903 | 2024-03-28 | Aurora            | L   | 0.414      | -            | -                | -                | -         |    -0.17 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            8 |     3170 | 2024-03-14 | Rebels            | W   | 0.321      | 0.500        | 0.053 (0.008)    | 0.661 (0.106)    | -         |     7.73 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            7 |     3261 | 2024-03-11 | SINNERS           | W   | 0.300      | 0.500        | 0.048 (0.007)    | 0.769 (0.115)    | -         |     7.46 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            6 |     3377 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.268      | -            | -                | -                | -         |    -2.13 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            5 |     3496 | 2024-03-02 | Sashi             | L   | 0.239      | -            | -                | -                | -         |    -0.97 | Furlan, phr, POLO, Prism, Qlocuu    |
|            4 |     3562 | 2024-02-27 | Spirit Academy    | L   | 0.213      | -            | -                | -                | -         |    -5.50 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            3 |     3637 | 2024-02-24 | The Chosen Few    | W   | 0.192      | -            | -                | -                | -         |     1.91 | Furlan, phr, POLO, Prism, Qlocuu    |
|            2 |     3767 | 2024-02-18 | ARCRED            | W   | 0.153      | -            | -                | -                | -         |     2.74 | Furlan, phr, POLO, Prism, Qlocuu    |
|            1 |     4020 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.060      | -            | -                | -                | -         |    -0.46 | Furlan, phr, POLO, Prism, Qlocuu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,701.14)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
