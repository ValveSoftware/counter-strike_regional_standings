### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [147](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [33]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  750.8<br />
<br />
Final Rank Value (750.8) = Starting Rank Value (701.6) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.6
- 400 + ( ( 0.150 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 701.6


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
|           14 |     1753 | 2024-09-21 | Akimbo        | L   | 0.724      | -            | -                | -                | -         |   -11.51 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     1801 | 2024-09-19 | InControl     | W   | 0.710      | 0.372        | 0.007 (0.002)    | 0.101 (0.027)    | 0 (0.000) |     8.04 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     1844 | 2024-09-18 | Mythic        | W   | 0.702      | 0.371        | 0.000 (0.000)    | 0.157 (0.041)    | 0 (0.000) |     8.65 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     1873 | 2024-09-17 | MIGHT         | W   | 0.697      | 0.372        | 0.006 (0.002)    | 0.086 (0.022)    | 0 (0.000) |    10.45 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     1905 | 2024-09-16 | USA           | W   | 0.689      | 0.371        | 0.000 (0.000)    | 0.070 (0.018)    | 0 (0.000) |     4.89 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     1923 | 2024-09-15 | Final Form    | W   | 0.683      | 0.372        | 0.003 (0.001)    | 0.083 (0.021)    | 0 (0.000) |     7.95 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     1991 | 2024-09-13 | Bluekillers   | W   | 0.670      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.39 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     2855 | 2024-08-19 | FLUFFY AIMERS | L   | 0.502      | -            | -                | -                | -         |    -6.85 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     2905 | 2024-08-17 | M80           | L   | 0.489      | -            | -                | -                | -         |    -0.44 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     2990 | 2024-08-14 | Limitless     | W   | 0.470      | 0.371        | 0.005 (0.001)    | 0.237 (0.041)    | 0 (0.000) |     8.27 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3167 | 2024-08-08 | USA           | W   | 0.430      | 0.371        | 0.000 (0.000)    | 0.070 (0.011)    | 0 (0.000) |     3.20 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3344 | 2024-08-03 | Nouns         | L   | 0.397      | -            | -                | -                | -         |    -1.94 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3349 | 2024-08-03 | E-Xolos LAZER | W   | 0.396      | 0.371        | 0.008 (0.001)    | 0.289 (0.042)    | 0 (0.000) |     7.24 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     3633 | 2024-07-26 | Akimbo        | W   | 0.343      | 0.371        | 0.014 (0.002)    | 0.198 (0.025)    | 0 (0.000) |     5.89 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,484.73)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.724 | $4,300.00      | $3,112.17       |
| 2024-08-18 |      0.497 | $750.00        | $372.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
