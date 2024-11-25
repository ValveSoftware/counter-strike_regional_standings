### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, st0m4k, yukitoro, zogeN<br />
Global Rank: [172](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [115]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  688.0<br />
<br />
Final Rank Value (688.0) = Starting Rank Value (660.0) + Head To Head Adjustments (28.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.0
- 400 + ( ( 0.130 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 660.0


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
|           10 |       14 | 2024-11-24 | Monte Gen     | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.401 (0.134)    | 0 (0.000) |    25.48 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            9 |     1312 | 2024-09-29 | kONO          | L   | 0.821      | -            | -                | -                | -         |    -5.20 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            8 |     1800 | 2024-09-15 | Passion UA    | L   | 0.728      | -            | -                | -                | -         |    -2.06 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            7 |     1983 | 2024-09-09 | K27           | L   | 0.689      | -            | -                | -                | -         |   -12.21 | Ganginho, jR, onic, st0m4k, zogeN      |
|            6 |     2026 | 2024-09-07 | ex-Enterprise | W   | 0.675      | 0.372        | 0.015 (0.004)    | 0.342 (0.086)    | 0 (0.000) |    17.35 | Ganginho, onic, remorse, st0m4k, zogeN |
|            5 |     2099 | 2024-09-05 | NAVI Junior   | L   | 0.661      | -            | -                | -                | -         |    -2.73 | Ganginho, onic, remorse, st0m4k, zogeN |
|            4 |     2161 | 2024-09-03 | ZEROvariant   | W   | 0.648      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.76 | Ganginho, onic, remorse, st0m4k, zogeN |
|            3 |     3047 | 2024-08-08 | FAVBET        | L   | 0.474      | -            | -                | -                | -         |    -2.89 | Ganginho, onic, remorse, st0m4k, zogeN |
|            2 |     3637 | 2024-07-23 | EYEBALLERS    | W   | 0.366      | 0.143        | 0.013 (0.001)    | 0.472 (0.025)    | 0 (0.000) |     7.93 | Ganginho, onic, remorse, st0m4k, zogeN |
|            1 |     3986 | 2024-07-15 | ex-Enterprise | L   | 0.312      | -            | -                | -                | -         |    -1.40 | Ganginho, onic, remorse, st0m4k, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($465.54)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      0.822 | $243.00        | $199.74         |
| 2024-09-15 |      0.728 | $365.00        | $265.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
