### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [109](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [28]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  802.2<br />
<br />
Final Rank Value (802.2) = Starting Rank Value (732.6) + Head To Head Adjustments (69.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.6
- 400 + ( ( 0.176 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 732.6


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
|           14 |      183 | 2024-09-21 | Akimbo        | L   | 1.000      | -            | -                | -                | -         |   -15.29 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |      231 | 2024-09-19 | InControl     | W   | 1.000      | 0.372        | 0.010 (0.004)    | 0.176 (0.066)    | 0 (0.000) |     9.14 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |      274 | 2024-09-18 | Mythic        | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.303 (0.112)    | 0 (0.000) |    11.07 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |      303 | 2024-09-17 | MIGHT         | W   | 1.000      | 0.372        | 0.006 (0.002)    | 0.076 (0.028)    | 0 (0.000) |    10.87 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |      335 | 2024-09-16 | Phoenix       | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.202 (0.075)    | 0 (0.000) |    10.21 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |      353 | 2024-09-15 | Final Form    | W   | 1.000      | 0.372        | 0.004 (0.001)    | 0.191 (0.071)    | 0 (0.000) |    10.52 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |      421 | 2024-09-13 | Bluekillers   | W   | 1.000      | 0.372        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.56 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     1285 | 2024-08-19 | FLUFFY AIMERS | L   | 0.948      | -            | -                | -                | -         |   -16.64 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     1335 | 2024-08-17 | M80           | L   | 0.935      | -            | -                | -                | -         |    -1.43 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     1420 | 2024-08-14 | Limitless     | W   | 0.916      | 0.371        | 0.003 (0.001)    | 0.097 (0.033)    | 0 (0.000) |     9.38 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     1597 | 2024-08-08 | Phoenix       | W   | 0.876      | 0.371        | 0.002 (0.001)    | 0.202 (0.065)    | 0 (0.000) |    10.19 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     1774 | 2024-08-03 | Nouns         | L   | 0.843      | -            | -                | -                | -         |    -4.08 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     1779 | 2024-08-03 | E-Xolos LAZER | W   | 0.842      | 0.371        | 0.006 (0.002)    | 0.522 (0.163)    | 0 (0.000) |    14.94 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     2063 | 2024-07-26 | Akimbo        | W   | 0.789      | 0.371        | 0.028 (0.008)    | 0.457 (0.134)    | 0 (0.000) |    14.16 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,007.36)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      1.000 | $4,300.00      | $4,300.00       |
| 2024-08-18 |      0.943 | $750.00        | $707.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
