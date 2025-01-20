### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, st0m4k, yukitoro, zogeN<br />
Global Rank: [124](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  800.8<br />
<br />
Final Rank Value (800.8) = Starting Rank Value (785.4) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.4
- 400 + ( ( 0.194 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 785.4


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
|           15 |       97 | 2024-12-22 | kONO          | L   | 1.000      | -            | -                | -                | -         |   -13.22 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           14 |      154 | 2024-12-17 | FAVBET        | L   | 0.993      | -            | -                | -                | -         |   -10.89 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           13 |      166 | 2024-12-16 | Dragon EC     | W   | 0.985      | 0.382        | 0.011 (0.004)    | 0.045 (0.017)    | 0 (0.000) |     9.58 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           12 |      281 | 2024-12-09 | DASH          | W   | 0.940      | 0.382        | 0.005 (0.002)    | 0.031 (0.011)    | 0 (0.000) |     9.99 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           11 |      556 | 2024-11-27 | KOI           | L   | 0.859      | -            | -                | -                | -         |    -8.67 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           10 |      571 | 2024-11-26 | NAVI Junior   | W   | 0.852      | 0.333        | 0.204 (0.058)    | 1.000 (0.284)    | 0 (0.000) |    22.81 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            9 |      597 | 2024-11-24 | Monte Gen     | W   | 0.838      | 0.333        | 0.039 (0.011)    | 0.501 (0.140)    | 0 (0.000) |    15.73 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            8 |     1895 | 2024-09-29 | kONO          | L   | 0.466      | -            | -                | -                | -         |    -4.69 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            7 |     2383 | 2024-09-15 | Passion UA    | L   | 0.372      | -            | -                | -                | -         |    -1.45 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            6 |     2566 | 2024-09-09 | K27           | L   | 0.333      | -            | -                | -                | -         |    -7.97 | Ganginho, jR, onic, st0m4k, zogeN      |
|            5 |     2609 | 2024-09-07 | ex-Enterprise | W   | 0.320      | 0.372        | 0.011 (0.001)    | 0.185 (0.022)    | 0 (0.000) |     6.08 | Ganginho, onic, remorse, st0m4k, zogeN |
|            4 |     2682 | 2024-09-05 | NAVI Junior   | L   | 0.306      | -            | -                | -                | -         |    -1.83 | Ganginho, onic, remorse, st0m4k, zogeN |
|            3 |     2744 | 2024-09-03 | ZEROvariant   | W   | 0.293      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.96 | Ganginho, onic, remorse, st0m4k, zogeN |
|            2 |     3630 | 2024-08-08 | FAVBET        | L   | 0.119      | -            | -                | -                | -         |    -1.20 | Ganginho, onic, remorse, st0m4k, zogeN |
|            1 |     4220 | 2024-07-23 | EYEBALLERS    | W   | 0.010      | 0.143        | 0.038 (0.000)    | 0.563 (0.001)    | 0 (0.000) |     0.19 | Ganginho, onic, remorse, st0m4k, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,102.59)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $478.00        | $478.00         |
| 2024-12-17 |      0.993 | $4,835.00      | $4,799.44       |
| 2024-11-27 |      0.859 | $3,000.00      | $2,575.79       |
| 2024-09-29 |      0.466 | $243.00        | $113.34         |
| 2024-09-15 |      0.373 | $365.00        | $136.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
