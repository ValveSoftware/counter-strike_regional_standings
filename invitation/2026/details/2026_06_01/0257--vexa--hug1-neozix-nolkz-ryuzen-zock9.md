### Roster Details<br />
Team Name: VEXA<br />
Roster: hug1, neozix, nolkz, ryuzen, zock9<br />
Global Rank: [257](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [60]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  640.2<br />
<br />
Final Rank Value (640.2) = Starting Rank Value (565.7) + Head To Head Adjustments (74.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 565.7
- 400 + ( ( 0.087 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 565.7


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
|           14 |      390 | 2026-05-21 | LP              | L   | 1.000      | -            | -                | -                | -         |    -1.81 | hug1, neozix, nolkz, ryuzen, zock9 |
|           13 |      433 | 2026-05-20 | Red Feet        | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.078 (0.027)    | 0 (0.000) |    12.78 | hug1, neozix, nolkz, ryuzen, zock9 |
|           12 |      483 | 2026-05-18 | UNO MILLE       | L   | 1.000      | -            | -                | -                | -         |    -5.08 | hug1, neozix, nolkz, ryuzen, zock9 |
|           11 |      486 | 2026-05-18 | Blitzkrieg      | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.107 (0.038)    | 0 (0.000) |    11.80 | hug1, neozix, nolkz, ryuzen, zock9 |
|           10 |      511 | 2026-05-17 | Isurus          | L   | 1.000      | -            | -                | -                | -         |    -4.27 | hug1, neozix, nolkz, ryuzen, zock9 |
|            9 |      530 | 2026-05-16 | paiN Academy    | L   | 1.000      | -            | -                | -                | -         |   -11.61 | hug1, neozix, nolkz, ryuzen, zock9 |
|            8 |      538 | 2026-05-16 | paiN Academy    | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.484 (0.161)    | 0 (0.000) |    20.26 | hug1, neozix, nolkz, ryuzen, zock9 |
|            7 |      562 | 2026-05-15 | BESTIA Academy  | L   | 1.000      | -            | -                | -                | -         |   -12.38 | hug1, neozix, nolkz, ryuzen, zock9 |
|            6 |      618 | 2026-05-13 | Bounty Hunters  | L   | 1.000      | -            | -                | -                | -         |    -2.16 | hug1, neozix, nolkz, ryuzen, zock9 |
|            5 |      630 | 2026-05-13 | METANOIA Wolves | W   | 1.000      | 0.354        | 0.010 (0.003)    | 0.359 (0.127)    | 0 (0.000) |    23.00 | hug1, neozix, nolkz, ryuzen, zock9 |
|            4 |      690 | 2026-05-11 | Yawara          | W   | 1.000      | 0.333        | 0.037 (0.012)    | 0.518 (0.173)    | 0 (0.000) |    29.01 | hug1, neozix, nolkz, ryuzen, zock9 |
|            3 |     2813 | 2026-03-22 | GameHunters     | L   | 0.729      | -            | -                | -                | -         |    -4.18 | hug1, nolkz, rainny, ryuzen, zock9 |
|            2 |     2880 | 2026-03-21 | Isurus          | W   | 0.720      | 0.363        | 0.038 (0.010)    | 0.598 (0.156)    | 0 (0.000) |    19.90 | hug1, nolkz, rainny, ryuzen, zock9 |
|            1 |     2920 | 2026-03-20 | LP              | L   | 0.715      | -            | -                | -                | -         |    -0.74 | hug1, nolkz, rainny, ryuzen, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
