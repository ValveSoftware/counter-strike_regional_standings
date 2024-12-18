### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, st0m4k, yukitoro, zogeN<br />
Global Rank: [123](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [88]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  800.9<br />
<br />
Final Rank Value (800.9) = Starting Rank Value (763.1) + Head To Head Adjustments (37.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 763.1
- 400 + ( ( 0.190 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 763.1


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
|           15 |       11 | 2024-12-17 | FAVBET        | L   | 1.000      | -            | -                | -                | -         |    -9.72 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           14 |       23 | 2024-12-16 | Dragon EC     | W   | 1.000      | 0.382        | 0.007 (0.003)    | 0.041 (0.016)    | 0 (0.000) |     9.49 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           13 |      138 | 2024-12-09 | DASH          | W   | 1.000      | 0.382        | 0.004 (0.001)    | 0.065 (0.025)    | 0 (0.000) |    11.87 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           12 |      413 | 2024-11-27 | KOI           | L   | 1.000      | -            | -                | -                | -         |    -9.45 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           11 |      428 | 2024-11-26 | NAVI Junior   | W   | 1.000      | 0.333        | 0.169 (0.056)    | 1.000 (0.333)    | 0 (0.000) |    27.36 | cairne, onic, st0m4k, yukitoro, zogeN  |
|           10 |      454 | 2024-11-24 | Monte Gen     | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.480 (0.160)    | 0 (0.000) |    21.03 | cairne, onic, st0m4k, yukitoro, zogeN  |
|            9 |     1752 | 2024-09-29 | kONO          | L   | 0.666      | -            | -                | -                | -         |    -7.39 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            8 |     2240 | 2024-09-15 | Passion UA    | L   | 0.573      | -            | -                | -                | -         |    -2.09 | cairne, Ganginho, onic, st0m4k, zogeN  |
|            7 |     2423 | 2024-09-09 | K27           | L   | 0.534      | -            | -                | -                | -         |   -11.84 | Ganginho, jR, onic, st0m4k, zogeN      |
|            6 |     2466 | 2024-09-07 | ex-Enterprise | W   | 0.521      | 0.372        | 0.011 (0.002)    | 0.285 (0.055)    | 0 (0.000) |    10.68 | Ganginho, onic, remorse, st0m4k, zogeN |
|            5 |     2539 | 2024-09-05 | NAVI Junior   | L   | 0.507      | -            | -                | -                | -         |    -2.91 | Ganginho, onic, remorse, st0m4k, zogeN |
|            4 |     2601 | 2024-09-03 | ZEROvariant   | W   | 0.494      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.80 | Ganginho, onic, remorse, st0m4k, zogeN |
|            3 |     3487 | 2024-08-08 | FAVBET        | L   | 0.319      | -            | -                | -                | -         |    -2.85 | Ganginho, onic, remorse, st0m4k, zogeN |
|            2 |     4077 | 2024-07-23 | EYEBALLERS    | W   | 0.211      | 0.143        | 0.014 (0.000)    | 0.423 (0.013)    | 0 (0.000) |     3.46 | Ganginho, onic, remorse, st0m4k, zogeN |
|            1 |     4426 | 2024-07-15 | ex-Enterprise | L   | 0.158      | -            | -                | -                | -         |    -1.62 | Ganginho, onic, remorse, st0m4k, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,206.51)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      1.000 | $4,835.00      | $4,835.00       |
| 2024-11-27 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-09-29 |      0.667 | $243.00        | $162.16         |
| 2024-09-15 |      0.574 | $365.00        | $209.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
