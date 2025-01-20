### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [158](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  697.9<br />
<br />
Final Rank Value (697.9) = Starting Rank Value (673.6) + Head To Head Adjustments (24.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.6
- 400 + ( ( 0.138 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 673.6


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
|           14 |     2212 | 2024-09-21 | Akimbo        | L   | 0.402      | -            | -                | -                | -         |    -6.12 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2260 | 2024-09-19 | InControl     | W   | 0.388      | 0.372        | 0.006 (0.001)    | 0.053 (0.008)    | 0 (0.000) |     5.17 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2303 | 2024-09-18 | Mythic        | W   | 0.381      | 0.371        | 0.000 (0.000)    | 0.093 (0.013)    | 0 (0.000) |     3.63 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2332 | 2024-09-17 | MIGHT         | W   | 0.375      | 0.372        | 0.006 (0.001)    | 0.159 (0.022)    | 0 (0.000) |     7.72 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2364 | 2024-09-16 | USA           | W   | 0.367      | 0.371        | 0.000 (0.000)    | 0.028 (0.004)    | 0 (0.000) |     2.94 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2382 | 2024-09-15 | Final Form    | W   | 0.361      | 0.372        | 0.003 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     4.64 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2450 | 2024-09-13 | Exceritus     | W   | 0.348      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.31 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3314 | 2024-08-19 | FLUFFY AIMERS | L   | 0.180      | -            | -                | -                | -         |    -1.15 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3364 | 2024-08-17 | M80           | L   | 0.167      | -            | -                | -                | -         |    -0.32 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3449 | 2024-08-14 | Limitless     | W   | 0.148      | 0.371        | 0.003 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.13 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3626 | 2024-08-08 | USA           | W   | 0.108      | 0.371        | 0.000 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     0.89 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3803 | 2024-08-03 | Nouns         | L   | 0.075      | -            | -                | -                | -         |    -0.20 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3808 | 2024-08-03 | E-Xolos LAZER | W   | 0.074      | 0.371        | 0.008 (0.000)    | 0.164 (0.004)    | 0 (0.000) |     1.32 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4092 | 2024-07-26 | Akimbo        | W   | 0.021      | 0.371        | 0.013 (0.000)    | 0.111 (0.001)    | 0 (0.000) |     0.36 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,859.87)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.402 | $4,300.00      | $1,728.64       |
| 2024-08-18 |      0.175 | $750.00        | $131.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
