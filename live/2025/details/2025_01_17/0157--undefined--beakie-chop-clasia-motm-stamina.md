### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [157](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  700.3<br />
<br />
Final Rank Value (700.3) = Starting Rank Value (674.7) + Head To Head Adjustments (25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.7
- 400 + ( ( 0.138 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 674.7


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
|           14 |     2203 | 2024-09-21 | Akimbo        | L   | 0.416      | -            | -                | -                | -         |    -6.34 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2251 | 2024-09-19 | InControl     | W   | 0.402      | 0.372        | 0.006 (0.001)    | 0.055 (0.008)    | 0 (0.000) |     5.31 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2294 | 2024-09-18 | Mythic        | W   | 0.394      | 0.371        | 0.000 (0.000)    | 0.095 (0.014)    | 0 (0.000) |     3.77 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2323 | 2024-09-17 | MIGHT         | W   | 0.388      | 0.372        | 0.006 (0.001)    | 0.159 (0.023)    | 0 (0.000) |     7.97 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2355 | 2024-09-16 | USA           | W   | 0.381      | 0.371        | 0.000 (0.000)    | 0.030 (0.004)    | 0 (0.000) |     3.04 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2373 | 2024-09-15 | Final Form    | W   | 0.375      | 0.372        | 0.003 (0.000)    | 0.045 (0.006)    | 0 (0.000) |     4.80 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2441 | 2024-09-13 | Exceritus     | W   | 0.362      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.41 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3305 | 2024-08-19 | FLUFFY AIMERS | L   | 0.194      | -            | -                | -                | -         |    -1.25 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3355 | 2024-08-17 | M80           | L   | 0.181      | -            | -                | -                | -         |    -0.34 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3440 | 2024-08-14 | Limitless     | W   | 0.161      | 0.371        | 0.003 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.31 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3617 | 2024-08-08 | USA           | W   | 0.121      | 0.371        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     0.99 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3794 | 2024-08-03 | Nouns         | L   | 0.088      | -            | -                | -                | -         |    -0.23 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3799 | 2024-08-03 | E-Xolos LAZER | W   | 0.087      | 0.371        | 0.008 (0.000)    | 0.168 (0.005)    | 0 (0.000) |     1.57 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4083 | 2024-07-26 | Akimbo        | W   | 0.035      | 0.371        | 0.013 (0.000)    | 0.115 (0.001)    | 0 (0.000) |     0.59 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,928.40)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.416 | $4,300.00      | $1,786.99       |
| 2024-08-18 |      0.189 | $750.00        | $141.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
