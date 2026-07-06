### Roster Details<br />
Team Name: VEXA<br />
Roster: hug1, neozix, nolkz, ryuzen, zock9<br />
Global Rank: [288](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [70]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  604.8<br />
<br />
Final Rank Value (604.8) = Starting Rank Value (548.5) + Head To Head Adjustments (56.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 548.5
- 400 + ( ( 0.079 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 548.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1051 | 2026-05-21 | LP              | L   | 0.894      | -            | -                | -                | -         |    -2.06 | hug1, neozix, nolkz, ryuzen, zock9 |
|           13 |     1094 | 2026-05-20 | Red Feet        | W   | 0.889      | 0.354        | 0.000 (0.000)    | 0.067 (0.021)    | 0 (0.000) |    11.41 | hug1, neozix, nolkz, ryuzen, zock9 |
|           12 |     1144 | 2026-05-18 | UNO MILLE       | L   | 0.876      | -            | -                | -                | -         |    -4.89 | hug1, neozix, nolkz, ryuzen, zock9 |
|           11 |     1147 | 2026-05-18 | Blitzkrieg      | W   | 0.874      | 0.354        | 0.000 (0.000)    | 0.079 (0.024)    | 0 (0.000) |    10.81 | hug1, neozix, nolkz, ryuzen, zock9 |
|           10 |     1172 | 2026-05-17 | Isurus          | L   | 0.867      | -            | -                | -                | -         |    -4.24 | hug1, neozix, nolkz, ryuzen, zock9 |
|            9 |     1191 | 2026-05-16 | paiN Academy    | L   | 0.862      | -            | -                | -                | -         |    -9.86 | hug1, neozix, nolkz, ryuzen, zock9 |
|            8 |     1199 | 2026-05-16 | paiN Academy    | W   | 0.860      | 0.333        | 0.002 (0.001)    | 0.404 (0.116)    | 0 (0.000) |    17.67 | hug1, neozix, nolkz, ryuzen, zock9 |
|            7 |     1223 | 2026-05-15 | BESTIA Academy  | L   | 0.855      | -            | -                | -                | -         |   -10.84 | hug1, neozix, nolkz, ryuzen, zock9 |
|            6 |     1279 | 2026-05-13 | Bounty Hunters  | L   | 0.841      | -            | -                | -                | -         |    -2.50 | hug1, neozix, nolkz, ryuzen, zock9 |
|            5 |     1291 | 2026-05-13 | METANOIA Wolves | W   | 0.840      | 0.354        | 0.008 (0.002)    | 0.307 (0.091)    | 0 (0.000) |    18.80 | hug1, neozix, nolkz, ryuzen, zock9 |
|            4 |     1351 | 2026-05-11 | Yawara          | W   | 0.829      | 0.333        | 0.038 (0.011)    | 0.444 (0.123)    | 0 (0.000) |    23.13 | hug1, neozix, nolkz, ryuzen, zock9 |
|            3 |     3474 | 2026-03-22 | GameHunters     | L   | 0.496      | -            | -                | -                | -         |    -3.46 | hug1, nolkz, rainny, ryuzen, zock9 |
|            2 |     3541 | 2026-03-21 | Isurus          | W   | 0.487      | 0.363        | 0.030 (0.005)    | 0.508 (0.090)    | 0 (0.000) |    13.07 | hug1, nolkz, rainny, ryuzen, zock9 |
|            1 |     3581 | 2026-03-20 | LP              | L   | 0.482      | -            | -                | -                | -         |    -0.69 | hug1, nolkz, rainny, ryuzen, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
