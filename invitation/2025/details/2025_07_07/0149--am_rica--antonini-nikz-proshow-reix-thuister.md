### Roster Details<br />
Team Name: América<br />
Roster: antonini, nikz, proSHOW, Reix, Thuister<br />
Global Rank: [149](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [44]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  654.4<br />
<br />
Final Rank Value (654.4) = Starting Rank Value (641.0) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.0
- 400 + ( ( 0.129 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 641.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      503 | 2025-05-24 | Sharks          | L   | 0.908      | -            | -                | -                | -         |    -4.76 | antonini, nikz, proSHOW, Reix, Thuister  |
|           14 |      634 | 2025-05-18 | Tropa do KinGui | W   | 0.868      | 0.333        | 0.001 (0.000)    | 0.093 (0.027)    | 0 (0.000) |    12.39 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           13 |      668 | 2025-05-16 | ex-W7M          | L   | 0.855      | -            | -                | -                | -         |   -11.50 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           12 |      714 | 2025-05-14 | Sojoga          | W   | 0.841      | 0.333        | 0.001 (0.000)    | 0.037 (0.010)    | 0 (0.000) |    11.93 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           11 |      740 | 2025-05-13 | SELVA           | W   | 0.835      | 0.333        | 0.020 (0.006)    | 0.349 (0.097)    | 0 (0.000) |    20.12 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           10 |      750 | 2025-05-13 | Keyd Stars      | L   | 0.834      | -            | -                | -                | -         |    -7.90 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|            9 |     1673 | 2025-04-04 | ODDIK           | L   | 0.572      | -            | -                | -                | -         |    -2.80 | antonini, nikz, proSHOW, Reix, Thuister  |
|            8 |     1697 | 2025-04-03 | Imperial        | L   | 0.567      | -            | -                | -                | -         |    -1.75 | antonini, nikz, proSHOW, Reix, Thuister  |
|            7 |     1925 | 2025-03-29 | Sharks          | L   | 0.533      | -            | -                | -                | -         |    -2.53 | antonini, nikz, proSHOW, Reix, Thuister  |
|            6 |     1974 | 2025-03-28 | Floripa Stars   | W   | 0.527      | 0.143        | 0.001 (0.000)    | 0.086 (0.006)    | 0 (0.000) |     7.97 | antonini, nikz, proSHOW, Reix, Thuister  |
|            5 |     2032 | 2025-03-27 | RED Canids      | L   | 0.521      | -            | -                | -                | -         |    -4.70 | antonini, nikz, proSHOW, Reix, Thuister  |
|            4 |     2553 | 2025-03-09 | Dusty Roots     | L   | 0.401      | -            | -                | -                | -         |    -6.53 | antonini, nikz, proSHOW, Reix, Thuister  |
|            3 |     2580 | 2025-03-09 | Elevate         | W   | 0.400      | 0.143        | 0.000 (0.000)    | 0.177 (0.010)    | 0 (0.000) |     4.87 | antonini, nikz, proSHOW, Reix, Thuister  |
|            2 |     2647 | 2025-03-08 | 2070            | W   | 0.393      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.56 | antonini, nikz, proSHOW, Reix, Thuister  |
|            1 |     2724 | 2025-03-07 | RED Canids      | L   | 0.386      | -            | -                | -                | -         |    -3.98 | antonini, nikz, proSHOW, Reix, Thuister  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($839.12)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-29 |      0.941 | $892.00        | $839.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
