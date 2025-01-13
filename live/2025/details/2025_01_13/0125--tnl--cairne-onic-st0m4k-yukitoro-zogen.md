### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, st0m4k, yukitoro, zogeN<br />
Global Rank: [125](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  803.9<br />
<br />
Final Rank Value (803.9) = Starting Rank Value (786.8) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 786.8
- 400 + ( ( 0.195 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 786.8


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
|           15 |       93 | 2024-12-22 | kONO          | L   | 1.000      | -            | -                | -                | -         |   -13.35 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           14 |      150 | 2024-12-17 | FAVBET        | L   | 1.000      | -            | -                | -                | -         |   -10.81 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           13 |      162 | 2024-12-16 | Dragon EC     | W   | 1.000      | 0.382        | 0.010 (0.004)    | 0.044 (0.017)    | 0 (0.000) |     9.57 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           12 |      277 | 2024-12-09 | TNL           | W   | 0.968      | 0.382        | 0.005 (0.002)    | 0.082 (0.030)    | 0 (0.000) |    10.46 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           11 |      552 | 2024-11-27 | KOI           | L   | 0.887      | -            | -                | -                | -         |    -8.93 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           10 |      567 | 2024-11-26 | NAVI Junior   | W   | 0.881      | 0.333        | 0.202 (0.059)    | 1.000 (0.294)    | 0 (0.000) |    23.67 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            9 |      593 | 2024-11-24 | Monte Gen     | W   | 0.867      | 0.333        | 0.038 (0.011)    | 0.502 (0.145)    | 0 (0.000) |    16.62 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            8 |     1891 | 2024-09-29 | kONO          | L   | 0.494      | -            | -                | -                | -         |    -5.00 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            7 |     2379 | 2024-09-15 | Passion UA    | L   | 0.401      | -            | -                | -                | -         |    -1.50 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            6 |     2562 | 2024-09-09 | K27           | L   | 0.362      | -            | -                | -                | -         |    -8.60 | Ganginho, jR, onic, st0m4k, zogeN      |
|            5 |     2605 | 2024-09-07 | ex-Enterprise | W   | 0.348      | 0.372        | 0.011 (0.001)    | 0.197 (0.025)    | 0 (0.000) |     6.68 | Ganginho, onic, remorse, st0m4k, zogeN |
|            4 |     2678 | 2024-09-05 | NAVI Junior   | L   | 0.334      | -            | -                | -                | -         |    -1.97 | Ganginho, onic, remorse, st0m4k, zogeN |
|            3 |     2740 | 2024-09-03 | ZEROvariant   | W   | 0.321      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.04 | Ganginho, onic, remorse, st0m4k, zogeN |
|            2 |     3626 | 2024-08-08 | FAVBET        | L   | 0.147      | -            | -                | -                | -         |    -1.48 | Ganginho, onic, remorse, st0m4k, zogeN |
|            1 |     4216 | 2024-07-23 | EYEBALLERS    | W   | 0.039      | 0.143        | 0.037 (0.000)    | 0.560 (0.003)    | 0 (0.000) |     0.74 | Ganginho, onic, remorse, st0m4k, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,240.86)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $478.00        | $478.00         |
| 2024-12-17 |      1.000 | $4,835.00      | $4,835.00       |
| 2024-11-27 |      0.887 | $3,000.00      | $2,661.20       |
| 2024-09-29 |      0.495 | $243.00        | $120.25         |
| 2024-09-15 |      0.401 | $365.00        | $146.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
