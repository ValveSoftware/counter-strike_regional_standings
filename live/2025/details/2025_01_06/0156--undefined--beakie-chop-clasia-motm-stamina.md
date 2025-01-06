### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [156](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  711.3<br />
<br />
Final Rank Value (711.3) = Starting Rank Value (678.9) + Head To Head Adjustments (32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.9
- 400 + ( ( 0.141 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 678.9


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
|           14 |     2158 | 2024-09-21 | Akimbo        | L   | 0.490      | -            | -                | -                | -         |    -7.57 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2206 | 2024-09-19 | InControl     | W   | 0.477      | 0.372        | 0.006 (0.001)    | 0.066 (0.012)    | 0 (0.000) |     6.08 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2249 | 2024-09-18 | Mythic        | W   | 0.469      | 0.371        | 0.000 (0.000)    | 0.108 (0.019)    | 0 (0.000) |     4.44 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2278 | 2024-09-17 | MIGHT         | W   | 0.463      | 0.372        | 0.006 (0.001)    | 0.157 (0.027)    | 0 (0.000) |     9.32 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2310 | 2024-09-16 | USA           | W   | 0.455      | 0.371        | 0.000 (0.000)    | 0.040 (0.007)    | 0 (0.000) |     3.58 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2328 | 2024-09-15 | Final Form    | W   | 0.450      | 0.372        | 0.003 (0.000)    | 0.053 (0.009)    | 0 (0.000) |     5.66 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2396 | 2024-09-13 | Exceritus     | W   | 0.436      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.98 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3260 | 2024-08-19 | FLUFFY AIMERS | L   | 0.269      | -            | -                | -                | -         |    -1.86 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3310 | 2024-08-17 | M80           | L   | 0.255      | -            | -                | -                | -         |    -0.45 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3395 | 2024-08-14 | Limitless     | W   | 0.236      | 0.371        | 0.003 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     3.31 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3572 | 2024-08-08 | USA           | W   | 0.196      | 0.371        | 0.000 (0.000)    | 0.040 (0.003)    | 0 (0.000) |     1.59 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3749 | 2024-08-03 | Nouns         | L   | 0.163      | -            | -                | -                | -         |    -0.42 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3754 | 2024-08-03 | E-Xolos LAZER | W   | 0.162      | 0.371        | 0.008 (0.000)    | 0.191 (0.011)    | 0 (0.000) |     2.94 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4038 | 2024-07-26 | Akimbo        | W   | 0.109      | 0.371        | 0.013 (0.001)    | 0.132 (0.005)    | 0 (0.000) |     1.85 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,305.63)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.490 | $4,300.00      | $2,108.19       |
| 2024-08-18 |      0.263 | $750.00        | $197.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
