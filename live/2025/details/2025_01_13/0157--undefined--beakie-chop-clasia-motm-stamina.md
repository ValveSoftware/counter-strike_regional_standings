### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [157](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  705.6<br />
<br />
Final Rank Value (705.6) = Starting Rank Value (677.3) + Head To Head Adjustments (28.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.3
- 400 + ( ( 0.140 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 677.3


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
|           14 |     2199 | 2024-09-21 | Akimbo        | L   | 0.444      | -            | -                | -                | -         |    -6.80 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2247 | 2024-09-19 | InControl     | W   | 0.430      | 0.372        | 0.007 (0.001)    | 0.059 (0.009)    | 0 (0.000) |     5.61 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2290 | 2024-09-18 | Mythic        | W   | 0.423      | 0.371        | 0.000 (0.000)    | 0.100 (0.016)    | 0 (0.000) |     4.06 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2319 | 2024-09-17 | MIGHT         | W   | 0.417      | 0.372        | 0.006 (0.001)    | 0.157 (0.024)    | 0 (0.000) |     8.49 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2351 | 2024-09-16 | USA           | W   | 0.409      | 0.371        | 0.000 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     3.24 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2369 | 2024-09-15 | Final Form    | W   | 0.403      | 0.372        | 0.003 (0.000)    | 0.048 (0.007)    | 0 (0.000) |     5.13 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2437 | 2024-09-13 | Exceritus     | W   | 0.390      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.62 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3301 | 2024-08-19 | FLUFFY AIMERS | L   | 0.222      | -            | -                | -                | -         |    -1.46 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3351 | 2024-08-17 | M80           | L   | 0.209      | -            | -                | -                | -         |    -0.38 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3436 | 2024-08-14 | Limitless     | W   | 0.190      | 0.371        | 0.003 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.70 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3613 | 2024-08-08 | USA           | W   | 0.150      | 0.371        | 0.000 (0.000)    | 0.034 (0.002)    | 0 (0.000) |     1.22 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3790 | 2024-08-03 | Nouns         | L   | 0.117      | -            | -                | -                | -         |    -0.30 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3795 | 2024-08-03 | E-Xolos LAZER | W   | 0.116      | 0.371        | 0.008 (0.000)    | 0.176 (0.008)    | 0 (0.000) |     2.08 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4079 | 2024-07-26 | Akimbo        | W   | 0.063      | 0.371        | 0.013 (0.000)    | 0.121 (0.003)    | 0 (0.000) |     1.07 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,072.17)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.444 | $4,300.00      | $1,909.40       |
| 2024-08-18 |      0.217 | $750.00        | $162.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
