### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Global Rank: [21](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_18.md)<br />
Regional Rank: [6]( ../../standings_americas_2024_09_18.md)<br />
<br />
Final Rank Value:  1379.9<br />
<br />
Final Rank Value (1379.9) = Starting Rank Value (1402.7) + Head To Head Adjustments (-22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.543[<sup>1</sup>](#table2)
- Bounty Collected: 0.587[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.609[<sup>2</sup>](#table1)

The average of these factors is 0.512<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1402.7
- 400 + ( ( 0.512 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1402.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           84 |        2 | 2024-09-18 | HEROIC         | W   | 1.000      | 0.889        | 0.282 (0.251)    | 0.458 (0.407)    | 1 (1.000) |    20.57 | brnz4n, drop, exit, insani, saffee |
|           83 |      273 | 2024-09-08 | G2             | L   | 1.000      | -            | -                | -                | -         |    -1.06 | brnz4n, drop, exit, insani, saffee |
|           82 |      382 | 2024-09-05 | Spirit         | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.525 (0.467)    | 1 (1.000) |    30.60 | brnz4n, drop, exit, insani, saffee |
|           81 |      437 | 2024-09-03 | 9z             | W   | 1.000      | 0.889        | 0.362 (0.322)    | 0.476 (0.423)    | 1 (1.000) |    19.72 | brnz4n, drop, exit, insani, saffee |
|           80 |      899 | 2024-08-21 | Hype           | W   | 1.000      | 0.450        | -                | 0.415 (0.187)    | -         |     1.85 | brnz4n, drop, exit, insani, saffee |
|           79 |      902 | 2024-08-21 | Hype           | W   | 1.000      | 0.450        | -                | 0.415 (0.187)    | -         |     1.89 | brnz4n, drop, exit, insani, saffee |
|           78 |     1149 | 2024-08-13 | BESTIA         | L   | 0.963      | -            | -                | -                | -         |   -26.11 | brnz4n, drop, exit, insani, saffee |
|           77 |     1152 | 2024-08-13 | BESTIA         | W   | 0.962      | 0.450        | -                | 0.824 (0.357)    | -         |     3.82 | brnz4n, drop, exit, insani, saffee |
|           76 |     1285 | 2024-08-09 | paiN           | L   | 0.935      | -            | -                | -                | -         |    -6.42 | brnz4n, drop, exit, insani, saffee |
|           75 |     1300 | 2024-08-09 | 9z             | L   | 0.933      | -            | -                | -                | -         |   -10.98 | brnz4n, drop, exit, insani, saffee |
|           74 |     1368 | 2024-08-07 | HEROIC         | W   | 0.920      | -            | -                | -                | 1 (0.920) |    21.33 | brnz4n, drop, exit, insani, saffee |
|           73 |     1523 | 2024-08-02 | paiN           | L   | 0.889      | -            | -                | -                | -         |    -6.12 | brnz4n, drop, exit, insani, saffee |
|           72 |     1524 | 2024-08-02 | ODDIK          | L   | 0.889      | -            | -                | -                | -         |   -22.82 | brnz4n, drop, exit, insani, saffee |
|           71 |     1539 | 2024-08-02 | Fluxo          | W   | 0.887      | 0.371        | -                | 0.623 (0.205)    | -         |     5.77 | brnz4n, drop, exit, insani, saffee |
|           70 |     1565 | 2024-08-01 | ODDIK          | W   | 0.882      | 0.371        | 0.200 (0.065)    | 0.781 (0.255)    | -         |     4.77 | brnz4n, drop, exit, insani, saffee |
|           69 |     1611 | 2024-07-31 | Sharks         | W   | 0.875      | -            | -                | -                | -         |     3.91 | brnz4n, drop, exit, insani, saffee |
|           68 |     1620 | 2024-07-31 | ODDIK          | W   | 0.874      | 0.450        | 0.200 (0.079)    | 0.781 (0.307)    | -         |     5.08 | brnz4n, drop, exit, insani, saffee |
|           67 |     1625 | 2024-07-31 | ODDIK          | W   | 0.874      | 0.450        | 0.200 (0.079)    | 0.781 (0.307)    | -         |     5.33 | brnz4n, drop, exit, insani, saffee |
|           66 |     1653 | 2024-07-30 | Dusty Roots    | L   | 0.869      | -            | -                | -                | -         |   -26.36 | brnz4n, drop, exit, insani, saffee |
|           65 |     1656 | 2024-07-30 | Dusty Roots    | W   | 0.869      | -            | -                | -                | -         |     0.91 | brnz4n, drop, exit, insani, saffee |
|           64 |     1660 | 2024-07-30 | 9z Academy     | W   | 0.868      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |
|           63 |     1695 | 2024-07-29 | Imperial       | L   | 0.862      | -            | -                | -                | -         |   -19.52 | brnz4n, drop, exit, insani, saffee |
|           62 |     1721 | 2024-07-28 | RED Canids     | W   | 0.857      | -            | -                | -                | -         |     6.17 | brnz4n, drop, exit, insani, saffee |
|           61 |     1728 | 2024-07-28 | Imperial       | L   | 0.855      | -            | -                | -                | -         |   -20.26 | brnz4n, drop, exit, insani, saffee |
|           60 |     1817 | 2024-07-25 | Galorys        | W   | 0.835      | -            | -                | -                | -         |     0.86 | brnz4n, drop, exit, insani, saffee |
|           59 |     1822 | 2024-07-25 | Galorys        | W   | 0.835      | -            | -                | -                | -         |     0.87 | brnz4n, drop, exit, insani, saffee |
|           58 |     2085 | 2024-07-18 | The MongolZ    | L   | 0.786      | -            | -                | -                | -         |    -2.31 | brnz4n, drop, exit, insani, saffee |
|           57 |     2135 | 2024-07-17 | Spirit         | L   | 0.781      | -            | -                | -                | -         |    -0.77 | brnz4n, drop, exit, insani, saffee |
|           56 |     2505 | 2024-06-15 | Complexity     | L   | 0.566      | -            | -                | -                | -         |    -2.83 | brnz4n, drop, exit, insani, saffee |
|           55 |     2530 | 2024-06-14 | Alliance       | W   | 0.561      | -            | -                | -                | 1 (0.561) |     0.73 | brnz4n, drop, exit, insani, saffee |
|           54 |     2547 | 2024-06-14 | ENCE           | L   | 0.559      | -            | -                | -                | -         |   -13.61 | brnz4n, drop, exit, insani, saffee |
|           53 |     2786 | 2024-06-07 | Bounty Hunters | L   | 0.516      | -            | -                | -                | -         |   -15.65 | brnz4n, drop, exit, insani, saffee |
|           52 |     2845 | 2024-06-06 | 9z             | L   | 0.509      | -            | -                | -                | -         |    -8.08 | brnz4n, drop, exit, insani, saffee |
|           51 |     2917 | 2024-06-05 | BESTIA         | W   | 0.502      | -            | -                | -                | -         |     1.35 | brnz4n, drop, exit, insani, saffee |
|           50 |     2969 | 2024-06-04 | Galorys        | W   | 0.496      | -            | -                | -                | -         |     0.34 | brnz4n, drop, exit, insani, saffee |
|           49 |     3295 | 2024-05-22 | paiN           | W   | 0.408      | 0.450        | 0.423 (0.078)    | -                | -         |     9.50 | brnz4n, drop, exit, insani, saffee |
|           48 |     3298 | 2024-05-22 | paiN           | W   | 0.408      | 0.450        | 0.423 (0.078)    | -                | -         |     9.75 | brnz4n, drop, exit, insani, saffee |
|           47 |     3368 | 2024-05-20 | BetBoom        | L   | 0.395      | -            | -                | -                | -         |    -9.42 | brnz4n, drop, exit, insani, saffee |
|           46 |     3381 | 2024-05-20 | BIG            | W   | 0.393      | 0.769        | 0.206 (0.062)    | -                | -         |     6.23 | brnz4n, drop, exit, insani, saffee |
|           45 |     3390 | 2024-05-20 | BetBoom        | L   | 0.392      | -            | -                | -                | -         |    -9.49 | brnz4n, drop, exit, insani, saffee |
|           44 |     3467 | 2024-05-17 | HEROIC         | L   | 0.374      | -            | -                | -                | -         |    -4.37 | brnz4n, drop, exit, insani, saffee |
|           43 |     3501 | 2024-05-16 | Aurora         | W   | 0.368      | 0.769        | 0.268 (0.076)    | -                | 1 (0.368) |     4.56 | brnz4n, drop, exit, insani, saffee |
|           42 |     3557 | 2024-05-15 | HEROIC         | L   | 0.360      | -            | -                | -                | -         |    -4.26 | brnz4n, drop, exit, insani, saffee |
|           41 |     3966 | 2024-04-28 | Aurora         | W   | 0.245      | -            | -                | -                | 1 (0.245) |     3.21 | brnz4n, drop, exit, insani, saffee |
|           40 |     3968 | 2024-04-27 | Apeks          | W   | 0.244      | -            | -                | -                | 1 (0.244) |     0.19 | brnz4n, drop, exit, insani, saffee |
|           39 |     3994 | 2024-04-27 | Rooster        | W   | 0.238      | -            | -                | -                | 1 (0.238) |     0.17 | brnz4n, drop, exit, insani, saffee |
|           38 |     4016 | 2024-04-26 | Rebels         | L   | 0.231      | -            | -                | -                | -         |    -6.70 | brnz4n, drop, exit, insani, saffee |
|           37 |     4019 | 2024-04-25 | KZG            | W   | 0.230      | -            | -                | -                | 1 (0.230) |     0.10 | brnz4n, drop, exit, insani, saffee |
|           36 |     4128 | 2024-04-20 | paiN           | L   | 0.195      | -            | -                | -                | -         |    -1.33 | brnz4n, drop, exit, insani, saffee |
|           35 |     4135 | 2024-04-20 | OG             | W   | 0.194      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           34 |     4151 | 2024-04-19 | paiN           | W   | 0.190      | -            | -                | -                | -         |     4.78 | brnz4n, drop, exit, insani, saffee |
|           33 |     4158 | 2024-04-19 | FURIA          | W   | 0.189      | -            | -                | -                | -         |     5.10 | brnz4n, drop, exit, insani, saffee |
|           32 |     4180 | 2024-04-19 | paiN           | L   | 0.187      | -            | -                | -                | -         |    -1.18 | brnz4n, drop, exit, insani, saffee |
|           31 |     4201 | 2024-04-18 | Imperial       | W   | 0.184      | -            | -                | -                | -         |     1.34 | brnz4n, drop, exit, insani, saffee |
|           30 |     4203 | 2024-04-18 | paiN           | W   | 0.183      | -            | -                | -                | -         |     4.66 | brnz4n, drop, exit, insani, saffee |
|           29 |     4208 | 2024-04-18 | OG             | W   | 0.182      | -            | -                | -                | -         |     0.46 | brnz4n, drop, exit, insani, saffee |
|           28 |     4253 | 2024-04-17 | RED Canids     | W   | 0.176      | -            | -                | -                | -         |     0.93 | brnz4n, drop, exit, insani, saffee |
|           27 |     4259 | 2024-04-17 | Case           | W   | 0.175      | -            | -                | -                | -         |     0.38 | brnz4n, drop, exit, insani, saffee |
|           26 |     4298 | 2024-04-16 | Bounty Hunters | W   | 0.169      | -            | -                | -                | -         |     0.19 | brnz4n, drop, exit, insani, saffee |
|           25 |     4319 | 2024-04-15 | Imperial       | W   | 0.162      | -            | -                | -                | -         |     1.21 | brnz4n, drop, exit, insani, saffee |
|           24 |     4333 | 2024-04-14 | Galorys        | W   | 0.155      | -            | -                | -                | -         |     0.10 | brnz4n, drop, exit, insani, saffee |
|           23 |     4347 | 2024-04-13 | Case           | W   | 0.148      | -            | -                | -                | -         |     0.32 | brnz4n, drop, exit, insani, saffee |
|           22 |     4377 | 2024-04-11 | paiN           | W   | 0.136      | -            | -                | -                | -         |     3.52 | brnz4n, drop, exit, insani, saffee |
|           21 |     4419 | 2024-04-10 | Galorys        | W   | 0.129      | -            | -                | -                | -         |     0.09 | brnz4n, drop, exit, insani, saffee |
|           20 |     4420 | 2024-04-10 | Galorys        | W   | 0.129      | -            | -                | -                | -         |     0.09 | brnz4n, drop, exit, insani, saffee |
|           19 |     4437 | 2024-04-10 | Imperial       | W   | 0.127      | -            | -                | -                | -         |     0.96 | brnz4n, drop, exit, insani, saffee |
|           18 |     4469 | 2024-04-09 | adalYamigos    | W   | 0.122      | -            | -                | -                | -         |     0.03 | brnz4n, drop, exit, insani, saffee |
|           17 |     4473 | 2024-04-09 | adalYamigos    | W   | 0.122      | -            | -                | -                | -         |     0.03 | brnz4n, drop, exit, insani, saffee |
|           16 |     4478 | 2024-04-09 | RED Canids     | W   | 0.122      | -            | -                | -                | -         |     0.67 | brnz4n, drop, exit, insani, saffee |
|           15 |     4510 | 2024-04-08 | W7M            | W   | 0.116      | -            | -                | -                | -         |     0.11 | brnz4n, drop, exit, insani, saffee |
|           14 |     4544 | 2024-04-07 | paiN           | W   | 0.110      | -            | -                | -                | -         |     2.88 | brnz4n, drop, exit, insani, saffee |
|           13 |     4562 | 2024-04-06 | Bounty Hunters | W   | 0.103      | -            | -                | -                | -         |     0.13 | brnz4n, drop, exit, insani, saffee |
|           12 |     4578 | 2024-04-05 | Fluxo          | W   | 0.096      | -            | -                | -                | -         |     0.06 | brnz4n, drop, exit, insani, saffee |
|           11 |     4579 | 2024-04-05 | Fluxo          | L   | 0.096      | -            | -                | -                | -         |    -2.95 | brnz4n, drop, exit, insani, saffee |
|           10 |     4582 | 2024-04-05 | ODDIK          | W   | 0.095      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|            9 |     4605 | 2024-04-04 | Solid          | W   | 0.089      | -            | -                | -                | -         |     0.11 | brnz4n, drop, exit, insani, saffee |
|            8 |     4609 | 2024-04-04 | Solid          | W   | 0.089      | -            | -                | -                | -         |     0.11 | brnz4n, drop, exit, insani, saffee |
|            7 |     4640 | 2024-04-03 | Fluxo          | W   | 0.083      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|            6 |     4690 | 2024-04-02 | Fluxo          | W   | 0.076      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|            5 |     4693 | 2024-04-02 | Sharks         | W   | 0.075      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|            4 |     4779 | 2024-03-27 | Case           | W   | 0.036      | -            | -                | -                | -         |     0.08 | brnz4n, drop, exit, insani, saffee |
|            3 |     4785 | 2024-03-27 | Case           | W   | 0.036      | -            | -                | -                | -         |     0.08 | brnz4n, drop, exit, insani, saffee |
|            2 |     4825 | 2024-03-26 | ODDIK          | W   | 0.029      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|            1 |     4827 | 2024-03-26 | ODDIK          | W   | 0.029      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,395.03)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-09 |      0.935 | $4,500.00      | $4,207.52       |
| 2024-08-02 |      0.889 | $4,000.00      | $3,556.22       |
| 2024-07-21 |      0.808 | $10,000.00     | $8,083.13       |
| 2024-06-16 |      0.574 | $3,000.00      | $1,720.58       |
| 2024-06-09 |      0.529 | $3,000.00      | $1,586.73       |
| 2024-04-28 |      0.245 | $50,000.00     | $12,274.72      |
| 2024-04-20 |      0.196 | $20,000.00     | $3,913.02       |
| 2024-04-15 |      0.162 | $25,000.00     | $4,053.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
