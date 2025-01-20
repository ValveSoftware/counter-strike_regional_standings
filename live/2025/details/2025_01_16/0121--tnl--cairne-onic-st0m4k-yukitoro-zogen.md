### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, st0m4k, yukitoro, zogeN<br />
Global Rank: [121](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  801.2<br />
<br />
Final Rank Value (801.2) = Starting Rank Value (785.3) + Head To Head Adjustments (16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.3
- 400 + ( ( 0.194 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 785.3


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
|           15 |      120 | 2024-12-22 | kONO          | L   | 1.000      | -            | -                | -                | -         |   -13.23 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           14 |      177 | 2024-12-17 | FAVBET        | L   | 0.999      | -            | -                | -                | -         |   -10.92 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           13 |      189 | 2024-12-16 | Dragon EC     | W   | 0.991      | 0.382        | 0.011 (0.004)    | 0.045 (0.017)    | 0 (0.000) |     9.61 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           12 |      304 | 2024-12-09 | DASH          | W   | 0.946      | 0.382        | 0.005 (0.002)    | 0.031 (0.011)    | 0 (0.000) |    10.08 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           11 |      579 | 2024-11-27 | KOI           | L   | 0.865      | -            | -                | -                | -         |    -8.72 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           10 |      594 | 2024-11-26 | NAVI Junior   | W   | 0.858      | 0.333        | 0.204 (0.058)    | 1.000 (0.286)    | 0 (0.000) |    23.00 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            9 |      620 | 2024-11-24 | Monte Gen     | W   | 0.844      | 0.333        | 0.039 (0.011)    | 0.501 (0.141)    | 0 (0.000) |    16.03 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            8 |     1918 | 2024-09-29 | kONO          | L   | 0.472      | -            | -                | -                | -         |    -4.75 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            7 |     2406 | 2024-09-15 | Passion UA    | L   | 0.378      | -            | -                | -                | -         |    -1.43 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            6 |     2589 | 2024-09-09 | K27           | L   | 0.339      | -            | -                | -                | -         |    -8.10 | Ganginho, jR, onic, st0m4k, zogeN      |
|            5 |     2632 | 2024-09-07 | ex-Enterprise | W   | 0.326      | 0.372        | 0.011 (0.001)    | 0.188 (0.023)    | 0 (0.000) |     6.21 | Ganginho, onic, remorse, st0m4k, zogeN |
|            4 |     2705 | 2024-09-05 | NAVI Junior   | L   | 0.312      | -            | -                | -                | -         |    -1.85 | Ganginho, onic, remorse, st0m4k, zogeN |
|            3 |     2767 | 2024-09-03 | ZEROvariant   | W   | 0.299      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.98 | Ganginho, onic, remorse, st0m4k, zogeN |
|            2 |     3653 | 2024-08-08 | FAVBET        | L   | 0.125      | -            | -                | -                | -         |    -1.25 | Ganginho, onic, remorse, st0m4k, zogeN |
|            1 |     4243 | 2024-07-23 | EYEBALLERS    | W   | 0.016      | 0.143        | 0.038 (0.000)    | 0.661 (0.002)    | 0 (0.000) |     0.31 | Ganginho, onic, remorse, st0m4k, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,154.15)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $478.00        | $478.00         |
| 2024-12-17 |      0.999 | $4,835.00      | $4,828.97       |
| 2024-11-27 |      0.865 | $3,000.00      | $2,594.11       |
| 2024-09-29 |      0.473 | $243.00        | $114.82         |
| 2024-09-15 |      0.379 | $365.00        | $138.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
