### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  769.1<br />
<br />
Final Rank Value (769.1) = Starting Rank Value (733.8) + Head To Head Adjustments (35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.8
- 400 + ( ( 0.155 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 733.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      320 | 2024-06-16 | ex-FORZE Ladies   | W   | 0.994      | 0.250        | 0.005 (0.001)    | 0.045 (0.011)    | 0 (0.000) |    11.76 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |     1059 | 2024-05-26 | Crescent fe       | L   | 0.854      | -            | -                | -                | -         |   -16.93 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |     1269 | 2024-05-19 | Imperial fe       | L   | 0.806      | -            | -                | -                | -         |    -2.79 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |     1288 | 2024-05-18 | ex-GUILD fe       | W   | 0.800      | 0.281        | 0.004 (0.001)    | 0.091 (0.021)    | 0 (0.000) |    10.36 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     1836 | 2024-04-27 | Imperial fe       | L   | 0.660      | -            | -                | -                | -         |    -2.26 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     1840 | 2024-04-27 | ENCE Athena       | W   | 0.659      | 0.252        | 0.004 (0.001)    | 0.057 (0.009)    | 0 (0.000) |     7.53 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     2024 | 2024-04-19 | BIG EQUIPA        | L   | 0.608      | -            | -                | -                | -         |    -7.91 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     2178 | 2024-04-15 | NAVI Javelins     | L   | 0.580      | -            | -                | -                | -         |    -6.34 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     2191 | 2024-04-14 | Imperial fe       | L   | 0.574      | -            | -                | -                | -         |    -1.96 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     2205 | 2024-04-13 | Astralis W        | W   | 0.567      | 0.303        | 0.002 (0.000)    | 0.031 (0.005)    | 0 (0.000) |     5.60 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     2247 | 2024-04-11 | Let Her Cook      | W   | 0.554      | 0.303        | 0.092 (0.015)    | 0.185 (0.031)    | 0 (0.000) |    13.49 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     2289 | 2024-04-10 | ex-GUILD fe       | L   | 0.548      | -            | -                | -                | -         |   -10.26 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     2351 | 2024-04-09 | NAVI Javelins     | W   | 0.540      | 0.303        | 0.042 (0.007)    | 0.251 (0.041)    | 0 (0.000) |    11.45 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     2409 | 2024-04-07 | Imperial fe       | L   | 0.526      | -            | -                | -                | -         |    -1.71 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     2414 | 2024-04-07 | Fearless Cheetahs | W   | 0.525      | 0.262        | 0.005 (0.001)    | 0.088 (0.012)    | 0 (0.000) |     8.12 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     2427 | 2024-04-06 | ex-GUILD fe       | W   | 0.519      | 0.262        | 0.004 (0.001)    | 0.091 (0.012)    | 0 (0.000) |     7.13 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     2518 | 2024-04-03 | Astralis W        | W   | 0.501      | 0.331        | 0.002 (0.000)    | 0.031 (0.005)    | 0 (0.000) |     5.52 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     2766 | 2024-03-20 | ENCE Athena       | W   | 0.408      | 0.331        | 0.004 (0.001)    | 0.057 (0.008)    | 0 (0.000) |     5.39 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     3064 | 2024-03-07 | Imperial fe       | L   | 0.321      | -            | -                | -                | -         |    -0.95 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,078.13)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $750.00        | $745.16         |
| 2024-05-26 |      0.854 | $250.00        | $213.47         |
| 2024-04-27 |      0.660 | $321.00        | $211.80         |
| 2024-04-21 |      0.621 | $1,250.00      | $776.09         |
| 2024-04-07 |      0.526 | $250.00        | $131.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
