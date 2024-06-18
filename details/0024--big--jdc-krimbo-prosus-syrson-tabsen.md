### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1394.0<br />
<br />
Final Rank Value (1394.0) = Starting Rank Value (1442.5) + Head To Head Adjustments (-48.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.607[<sup>1</sup>](#table2)
- Bounty Collected: 0.504[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.513<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1442.5
- 400 + ( ( 0.513 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1442.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       67 | 2024-06-15 | Permitta      | L   | 1.000      | -            | -                | -                | -         |   -28.91 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           42 |       93 | 2024-06-14 | Space         | W   | 1.000      | 0.435        | -                | 0.419 (0.182)    | 0 (0.000) |     1.90 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           41 |      422 | 2024-06-06 | fnatic        | L   | 1.000      | -            | -                | -                | -         |   -15.38 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           40 |      454 | 2024-06-06 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |    -5.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |      485 | 2024-06-05 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |   -14.58 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |      499 | 2024-06-05 | Complexity    | L   | 1.000      | -            | -                | -                | -         |    -4.08 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |      509 | 2024-06-05 | FURIA         | W   | 1.000      | 0.715        | 0.245 (0.175)    | 0.521 (0.373)    | 1 (1.000) |    16.59 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      693 | 2024-05-29 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |    -5.23 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |      703 | 2024-05-29 | Virtus.pro    | W   | 1.000      | 0.624        | 0.345 (0.216)    | 0.427 (0.267)    | 1 (1.000) |    26.29 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |      720 | 2024-05-28 | FlyQuest      | W   | 1.000      | 0.624        | 0.118 (0.073)    | 0.476 (0.297)    | 1 (1.000) |    16.06 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |      744 | 2024-05-27 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -1.68 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |      939 | 2024-05-20 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -8.53 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |      958 | 2024-05-19 | Astralis      | L   | 1.000      | -            | -                | -                | -         |    -1.93 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1334 | 2024-05-07 | G2            | L   | 0.922      | -            | -                | -                | -         |    -2.10 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1396 | 2024-05-03 | HEROIC        | W   | 0.896      | 0.889        | 0.354 (0.282)    | 0.545 (0.435)    | 1 (0.896) |    24.46 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1405 | 2024-05-03 | PERA          | W   | 0.894      | 0.889        | 0.058 (0.046)    | 0.455 (0.362)    | 1 (0.894) |     2.29 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1432 | 2024-05-02 | Natus Vincere | L   | 0.888      | -            | -                | -                | -         |    -1.18 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1457 | 2024-05-01 | BOSS          | W   | 0.881      | 0.889        | -                | 0.386 (0.302)    | 1 (0.881) |     1.41 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1668 | 2024-04-21 | BLEED         | L   | 0.814      | -            | -                | -                | -         |   -13.96 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     1694 | 2024-04-20 | GamerLegion   | W   | 0.808      | 0.384        | 0.239 (0.074)    | -                | -         |     7.49 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     1804 | 2024-04-18 | LEON          | W   | 0.794      | -            | -                | -                | -         |     0.52 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     1913 | 2024-04-13 | OG            | L   | 0.761      | -            | -                | -                | -         |   -17.18 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     1922 | 2024-04-12 | FORZE         | W   | 0.756      | 0.684        | 0.096 (0.050)    | 0.350 (0.181)    | -         |     3.19 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     1993 | 2024-04-10 | Gods Reign    | W   | 0.742      | 0.684        | 0.069 (0.035)    | -                | -         |     1.07 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     2052 | 2024-04-09 | BetBoom       | L   | 0.735      | -            | -                | -                | -         |    -6.68 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     2231 | 2024-04-03 | EYEBALLERS    | W   | 0.695      | 0.384        | -                | 0.653 (0.174)    | -         |     1.37 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     2712 | 2024-03-09 | Spirit        | L   | 0.530      | -            | -                | -                | -         |    -0.62 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     2741 | 2024-03-08 | GamerLegion   | W   | 0.523      | -            | -                | -                | -         |     2.48 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     2875 | 2024-03-03 | Young Ninjas  | L   | 0.490      | -            | -                | -                | -         |   -14.87 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     2933 | 2024-03-01 | AMKAL         | W   | 0.474      | 0.500        | 0.139 (0.033)    | 0.613 (0.145)    | -         |     3.02 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     2960 | 2024-02-28 | BLEED         | L   | 0.461      | -            | -                | -                | -         |    -8.74 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           12 |     3484 | 2024-02-02 | Apeks         | L   | 0.290      | -            | -                | -                | -         |    -7.92 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |     3539 | 2024-01-31 | HEROIC        | L   | 0.277      | -            | -                | -                | -         |    -1.18 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |     3546 | 2024-01-31 | ENCE          | W   | 0.275      | -            | -                | -                | 1 (0.275) |     5.33 | Krimbo, mantuu, prosus, s1n, tabseN |
|            9 |     3586 | 2024-01-28 | Astralis      | L   | 0.255      | -            | -                | -                | -         |    -0.51 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3594 | 2024-01-27 | Virtus.pro    | L   | 0.250      | -            | -                | -                | -         |    -1.04 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3610 | 2024-01-26 | Cloud9        | W   | 0.243      | -            | -                | -                | 1 (0.243) |     2.73 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3633 | 2024-01-25 | HEROIC        | W   | 0.237      | 0.581        | 0.354 (0.049)    | -                | 1 (0.237) |     6.51 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3650 | 2024-01-24 | Virtus.pro    | L   | 0.229      | -            | -                | -                | -         |    -0.92 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3773 | 2024-01-20 | Nexus         | L   | 0.201      | -            | -                | -                | -         |    -6.07 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3827 | 2024-01-19 | fnatic        | L   | 0.195      | -            | -                | -                | -         |    -1.87 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     3879 | 2024-01-18 | BetBoom       | L   | 0.189      | -            | -                | -                | -         |    -1.26 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     3889 | 2024-01-18 | Permitta      | W   | 0.188      | -            | -                | -                | -         |     0.36 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($67,655.51)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-12 |      0.956 | $17,500.00     | $16,721.75      |
| 2024-04-14 |      0.769 | $35,000.00     | $26,915.15      |
| 2024-03-10 |      0.537 | $7,500.00      | $4,024.99       |
| 2024-02-02 |      0.290 | $4,500.00      | $1,305.72       |
| 2024-01-28 |      0.256 | $10,500.00     | $2,687.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
