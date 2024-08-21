### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Global Rank: [77](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [55]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  949.9<br />
<br />
Final Rank Value (949.9) = Starting Rank Value (869.0) + Head To Head Adjustments (80.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.0
- 400 + ( ( 0.236 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 869.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       70 | 2024-08-20 | B8              | L   | 1.000      | -            | -                | -                | -         |    -7.89 | executor, kinqie, Kiro, nota, tex1y |
|           33 |      256 | 2024-08-13 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |    -8.87 | executor, kinqie, Kiro, nota, tex1y |
|           32 |      310 | 2024-08-12 | ARCRED          | W   | 1.000      | 0.500        | 0.038 (0.019)    | 0.420 (0.210)    | 0 (0.000) |    16.69 | executor, kinqie, Kiro, nota, tex1y |
|           31 |      570 | 2024-08-04 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -16.22 | executor, kinqie, Kiro, nota, tex1y |
|           30 |      607 | 2024-08-03 | Alliance        | W   | 1.000      | 0.342        | -                | 0.271 (0.093)    | 0 (0.000) |    10.28 | executor, kinqie, Kiro, nota, tex1y |
|           29 |      646 | 2024-08-02 | Astralis Talent | W   | 1.000      | 0.342        | -                | 0.132 (0.045)    | 0 (0.000) |     5.94 | executor, kinqie, Kiro, nota, tex1y |
|           28 |      757 | 2024-07-30 | Rebels          | W   | 1.000      | 0.500        | 0.035 (0.017)    | 0.594 (0.297)    | 0 (0.000) |    18.67 | executor, kinqie, Kiro, nota, tex1y |
|           27 |      987 | 2024-07-23 | SINNERS         | W   | 1.000      | 0.500        | 0.075 (0.038)    | 1.000 (0.500)    | 0 (0.000) |    19.73 | executor, kinqie, Kiro, nota, tex1y |
|           26 |     1114 | 2024-07-19 | SAW             | L   | 0.979      | -            | -                | -                | -         |    -1.30 | executor, kinqie, Kiro, nota, tex1y |
|           25 |     1225 | 2024-07-17 | brazylijski luz | L   | 0.967      | -            | -                | -                | -         |   -19.85 | executor, kinqie, Kiro, nota, tex1y |
|           24 |     1332 | 2024-07-15 | Sangal          | L   | 0.953      | -            | -                | -                | -         |    -4.89 | executor, kinqie, Kiro, nota, tex1y |
|           23 |     1744 | 2024-06-10 | PARIVISION      | L   | 0.718      | -            | -                | -                | -         |    -6.67 | executor, kinqie, Kiro, nota, tex1y |
|           22 |     1751 | 2024-06-10 | SAW             | L   | 0.718      | -            | -                | -                | -         |    -1.07 | executor, kinqie, Kiro, nota, tex1y |
|           21 |     1756 | 2024-06-10 | Monte           | W   | 0.717      | 0.143        | 0.097 (0.010)    | -                | 0 (0.000) |    14.95 | executor, kinqie, Kiro, nota, tex1y |
|           20 |     1787 | 2024-06-09 | 9 Pandas        | W   | 0.712      | 0.143        | 0.072 (0.007)    | 0.678 (0.069)    | 0 (0.000) |    15.17 | executor, kinqie, Kiro, nota, tex1y |
|           19 |     1798 | 2024-06-09 | Aurora          | W   | 0.711      | 0.143        | 0.372 (0.038)    | 0.643 (0.065)    | 0 (0.000) |    21.31 | executor, kinqie, Kiro, nota, tex1y |
|           18 |     1803 | 2024-06-09 | SINNERS         | W   | 0.711      | 0.143        | 0.075 (0.008)    | 1.000 (0.102)    | 0 (0.000) |    16.15 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     1813 | 2024-06-09 | 3DMAX           | L   | 0.711      | -            | -                | -                | -         |    -0.79 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1955 | 2024-06-06 | Aurora          | L   | 0.693      | -            | -                | -                | -         |    -0.71 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     2024 | 2024-06-05 | SINNERS         | L   | 0.686      | -            | -                | -                | -         |    -6.21 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     2074 | 2024-06-04 | SAW             | W   | 0.679      | 0.500        | 0.349 (0.119)    | 0.656 (0.223)    | 0 (0.000) |    20.91 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     2872 | 2024-05-07 | MOUZ NXT        | L   | 0.492      | -            | -                | -                | -         |    -4.97 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     2898 | 2024-05-05 | Sampi           | L   | 0.480      | -            | -                | -                | -         |    -7.25 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2923 | 2024-05-04 | HAVU            | W   | 0.472      | -            | -                | -                | -         |     3.53 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2967 | 2024-05-02 | EYEBALLERS      | L   | 0.458      | -            | -                | -                | -         |    -7.03 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     3024 | 2024-04-29 | ENCE Academy    | W   | 0.440      | -            | -                | -                | -         |     3.52 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     3526 | 2024-04-10 | KOI             | L   | 0.313      | -            | -                | -                | -         |    -3.22 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     3579 | 2024-04-09 | PARIVISION      | W   | 0.306      | 0.500        | 0.048 (0.007)    | 0.678 (0.104)    | -         |     7.63 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     3815 | 2024-04-01 | Qiang           | L   | 0.253      | -            | -                | -                | -         |    -3.63 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     3824 | 2024-03-31 | Monte           | W   | 0.246      | 0.500        | 0.097 (0.012)    | -                | -         |     5.38 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3836 | 2024-03-29 | System5         | W   | 0.233      | -            | -                | -                | -         |     1.70 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     4155 | 2024-03-13 | Betera          | W   | 0.127      | -            | -                | -                | -         |     1.04 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     4419 | 2024-03-03 | Metizport       | L   | 0.059      | -            | -                | -                | -         |    -1.13 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4528 | 2024-02-26 | SAW             | L   | 0.020      | -            | -                | -                | -         |    -0.01 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,635.22)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      0.713 | $6,500.00      | $4,635.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
