### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [141](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_25.md)<br />
Regional Rank: [32]( ../../standings_americas_2024_11_25.md)<br />
<br />
Final Rank Value:  757.0<br />
<br />
Final Rank Value (757.0) = Starting Rank Value (703.6) + Head To Head Adjustments (53.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.6
- 400 + ( ( 0.152 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 703.6


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
|           14 |     1620 | 2024-09-21 | Akimbo        | L   | 0.771      | -            | -                | -                | -         |   -12.21 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     1668 | 2024-09-19 | InControl     | W   | 0.757      | 0.372        | 0.007 (0.002)    | 0.105 (0.029)    | 0 (0.000) |     8.38 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     1711 | 2024-09-18 | Mythic        | W   | 0.750      | 0.371        | 0.001 (0.000)    | 0.166 (0.046)    | 0 (0.000) |     9.35 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     1740 | 2024-09-17 | MIGHT         | W   | 0.744      | 0.372        | 0.006 (0.002)    | 0.087 (0.024)    | 0 (0.000) |    11.09 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     1772 | 2024-09-16 | USA           | W   | 0.736      | 0.371        | 0.000 (0.000)    | 0.074 (0.020)    | 0 (0.000) |     5.16 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     1790 | 2024-09-15 | Final Form    | W   | 0.730      | 0.372        | 0.003 (0.001)    | 0.091 (0.025)    | 0 (0.000) |     8.44 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     1858 | 2024-09-13 | Bluekillers   | W   | 0.717      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.64 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     2722 | 2024-08-19 | FLUFFY AIMERS | L   | 0.549      | -            | -                | -                | -         |    -7.56 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     2772 | 2024-08-17 | M80           | L   | 0.536      | -            | -                | -                | -         |    -0.45 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     2857 | 2024-08-14 | Limitless     | W   | 0.517      | 0.371        | 0.005 (0.001)    | 0.241 (0.046)    | 0 (0.000) |     9.08 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3034 | 2024-08-08 | USA           | W   | 0.477      | 0.371        | 0.000 (0.000)    | 0.074 (0.013)    | 0 (0.000) |     3.51 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3211 | 2024-08-03 | Nouns         | L   | 0.444      | -            | -                | -                | -         |    -2.06 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3216 | 2024-08-03 | E-Xolos LAZER | W   | 0.443      | 0.371        | 0.008 (0.001)    | 0.307 (0.050)    | 0 (0.000) |     8.21 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     3500 | 2024-07-26 | Akimbo        | W   | 0.390      | 0.371        | 0.015 (0.002)    | 0.214 (0.031)    | 0 (0.000) |     6.78 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,724.09)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.771 | $4,300.00      | $3,315.98       |
| 2024-08-18 |      0.544 | $750.00        | $408.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
