### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [150](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [37]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  720.5<br />
<br />
Final Rank Value (720.5) = Starting Rank Value (676.9) + Head To Head Adjustments (43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.9
- 400 + ( ( 0.145 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 676.9


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
|           14 |     2060 | 2024-09-21 | Akimbo        | L   | 0.617      | -            | -                | -                | -         |    -9.67 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2108 | 2024-09-19 | InControl     | W   | 0.603      | 0.372        | 0.006 (0.001)    | 0.087 (0.020)    | 0 (0.000) |     7.25 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2151 | 2024-09-18 | Mythic        | W   | 0.595      | 0.371        | 0.000 (0.000)    | 0.138 (0.030)    | 0 (0.000) |     5.76 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2180 | 2024-09-17 | MIGHT         | W   | 0.589      | 0.372        | 0.006 (0.001)    | 0.163 (0.036)    | 0 (0.000) |    11.32 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2212 | 2024-09-16 | USA           | W   | 0.582      | 0.371        | 0.000 (0.000)    | 0.058 (0.013)    | 0 (0.000) |     4.52 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2230 | 2024-09-15 | Final Form    | W   | 0.576      | 0.372        | 0.003 (0.001)    | 0.071 (0.015)    | 0 (0.000) |     7.03 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2298 | 2024-09-13 | Exceritus     | W   | 0.563      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.94 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3162 | 2024-08-19 | FLUFFY AIMERS | L   | 0.395      | -            | -                | -                | -         |    -3.10 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3212 | 2024-08-17 | M80           | L   | 0.381      | -            | -                | -                | -         |    -0.54 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3297 | 2024-08-14 | Limitless     | W   | 0.362      | 0.371        | 0.003 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     4.90 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3474 | 2024-08-08 | USA           | W   | 0.322      | 0.371        | 0.000 (0.000)    | 0.058 (0.007)    | 0 (0.000) |     2.60 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3651 | 2024-08-03 | Nouns         | L   | 0.289      | -            | -                | -                | -         |    -0.76 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3656 | 2024-08-03 | E-Xolos LAZER | W   | 0.288      | 0.371        | 0.007 (0.001)    | 0.247 (0.026)    | 0 (0.000) |     5.36 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     3940 | 2024-07-26 | Akimbo        | W   | 0.236      | 0.371        | 0.013 (0.001)    | 0.170 (0.015)    | 0 (0.000) |     4.00 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,943.06)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.617 | $4,300.00      | $2,650.95       |
| 2024-08-18 |      0.389 | $750.00        | $292.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
