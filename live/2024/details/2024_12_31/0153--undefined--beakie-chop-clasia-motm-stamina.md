### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [153](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [38]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  714.8<br />
<br />
Final Rank Value (714.8) = Starting Rank Value (677.7) + Head To Head Adjustments (37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.7
- 400 + ( ( 0.143 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 677.7


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
|           14 |     2143 | 2024-09-21 | Akimbo        | L   | 0.543      | -            | -                | -                | -         |    -8.45 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2191 | 2024-09-19 | InControl     | W   | 0.529      | 0.372        | 0.006 (0.001)    | 0.076 (0.015)    | 0 (0.000) |     6.58 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2234 | 2024-09-18 | Mythic        | W   | 0.521      | 0.371        | 0.000 (0.000)    | 0.122 (0.023)    | 0 (0.000) |     5.00 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2263 | 2024-09-17 | MIGHT         | W   | 0.516      | 0.372        | 0.006 (0.001)    | 0.161 (0.031)    | 0 (0.000) |    10.15 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2295 | 2024-09-16 | USA           | W   | 0.508      | 0.371        | 0.000 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     3.98 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2313 | 2024-09-15 | Final Form    | W   | 0.502      | 0.372        | 0.003 (0.000)    | 0.061 (0.011)    | 0 (0.000) |     6.25 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2381 | 2024-09-13 | Exceritus     | W   | 0.489      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.39 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3245 | 2024-08-19 | FLUFFY AIMERS | L   | 0.321      | -            | -                | -                | -         |    -2.37 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3295 | 2024-08-17 | M80           | L   | 0.308      | -            | -                | -                | -         |    -0.50 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3380 | 2024-08-14 | Limitless     | W   | 0.289      | 0.371        | 0.003 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     3.99 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3557 | 2024-08-08 | USA           | W   | 0.249      | 0.371        | 0.000 (0.000)    | 0.048 (0.004)    | 0 (0.000) |     2.02 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3734 | 2024-08-03 | Nouns         | L   | 0.216      | -            | -                | -                | -         |    -0.57 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3739 | 2024-08-03 | E-Xolos LAZER | W   | 0.215      | 0.371        | 0.007 (0.001)    | 0.216 (0.017)    | 0 (0.000) |     3.93 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4023 | 2024-07-26 | Akimbo        | W   | 0.162      | 0.371        | 0.013 (0.001)    | 0.149 (0.009)    | 0 (0.000) |     2.74 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,571.27)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.543 | $4,300.00      | $2,334.38       |
| 2024-08-18 |      0.316 | $750.00        | $236.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
