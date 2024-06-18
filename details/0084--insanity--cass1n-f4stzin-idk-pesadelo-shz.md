### Roster Details<br />
Team Name: inSanitY<br />
Roster: cass1n, f4stzin, iDk, pesadelo, shz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  933.6<br />
<br />
Final Rank Value (933.6) = Starting Rank Value (841.0) + Head To Head Adjustments (92.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.0
- 400 + ( ( 0.217 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 841.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |        1 | 2024-06-17 | Dusty Roots    | W   | 1.000      | 0.337        | 0.008 (0.003)    | -                | 0 (0.000) |     8.16 | cass1n, f4stzin, iDk, pesadelo, shz |
|           16 |       41 | 2024-06-15 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |    -7.06 | cass1n, f4stzin, iDk, pesadelo, shz |
|           15 |       84 | 2024-06-14 | Corinthians    | W   | 1.000      | 0.450        | 0.008 (0.004)    | 0.191 (0.086)    | 0 (0.000) |     7.81 | cass1n, f4stzin, iDk, pesadelo, shz |
|           14 |      226 | 2024-06-09 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -19.52 | cass1n, f4stzin, iDk, pesadelo, shz |
|           13 |      234 | 2024-06-09 | Bounty Hunters | W   | 1.000      | 0.450        | 0.008 (0.004)    | 0.213 (0.096)    | 0 (0.000) |    11.66 | cass1n, f4stzin, iDk, pesadelo, shz |
|           12 |      303 | 2024-06-08 | Solid          | W   | 1.000      | 0.450        | 0.051 (0.023)    | 0.566 (0.255)    | 0 (0.000) |    13.81 | cass1n, f4stzin, iDk, pesadelo, shz |
|           11 |      343 | 2024-06-07 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -19.40 | cass1n, f4stzin, iDk, pesadelo, shz |
|           10 |      372 | 2024-06-07 | KRÜ            | W   | 1.000      | 0.384        | 0.024 (0.009)    | 0.150 (0.058)    | 0 (0.000) |    10.43 | cass1n, f4stzin, iDk, pesadelo, shz |
|            9 |      410 | 2024-06-06 | BESTIA         | W   | 1.000      | 0.450        | 0.052 (0.023)    | 0.594 (0.268)    | 0 (0.000) |    22.65 | cass1n, f4stzin, iDk, pesadelo, shz |
|            8 |      603 | 2024-06-01 | Solid          | W   | 1.000      | 0.384        | 0.051 (0.020)    | 0.566 (0.217)    | 0 (0.000) |    15.48 | cass1n, f4stzin, iDk, pesadelo, shz |
|            7 |      682 | 2024-05-30 | Intense        | W   | 1.000      | 0.384        | -                | 0.140 (0.054)    | 0 (0.000) |     4.39 | cass1n, f4stzin, iDk, pesadelo, shz |
|            6 |      740 | 2024-05-27 | Bounty Hunters | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.213 (0.082)    | 0 (0.000) |    11.81 | cass1n, f4stzin, iDk, pesadelo, shz |
|            5 |     1205 | 2024-05-12 | 9z             | L   | 0.958      | -            | -                | -                | -         |    -0.56 | cass1n, f4stzin, pesadelo, shz, vsm |
|            4 |     1263 | 2024-05-10 | 9z             | L   | 0.945      | -            | -                | -                | -         |    -0.51 | cass1n, f4stzin, iDk, pesadelo, shz |
|            3 |     1290 | 2024-05-09 | ODDIK          | W   | 0.936      | 0.435        | 0.040 (0.016)    | 0.558 (0.227)    | 0 (0.000) |    18.78 | cass1n, f4stzin, iDk, pesadelo, shz |
|            2 |     1329 | 2024-05-07 | Case           | W   | 0.923      | 0.435        | 0.026 (0.011)    | 0.579 (0.232)    | -         |    15.43 | cass1n, f4stzin, iDk, pesadelo, shz |
|            1 |     1365 | 2024-05-05 | Imperial       | L   | 0.909      | -            | -                | -                | -         |    -0.71 | cass1n, f4stzin, iDk, pesadelo, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-10 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
