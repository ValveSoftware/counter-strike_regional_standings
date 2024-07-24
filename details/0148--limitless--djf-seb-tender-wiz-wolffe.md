### Roster Details<br />
Team Name: Limitless<br />
Roster: DJF, Seb, Tender, wiz, Wolffe<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  720.2<br />
<br />
Final Rank Value (720.2) = Starting Rank Value (763.6) + Head To Head Adjustments (-43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.090[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 763.6
- 400 + ( ( 0.180 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 763.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       19 | 2024-07-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.38 | DJF, Seb, Tender, wiz, Wolffe |
|           23 |       21 | 2024-07-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.67 | DJF, Seb, Tender, wiz, Wolffe |
|           22 |      253 | 2024-07-17 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.91 | DJF, Seb, Tender, wiz, Wolffe |
|           21 |      256 | 2024-07-17 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -6.25 | DJF, Seb, Tender, wiz, Wolffe |
|           20 |      312 | 2024-07-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.94 | DJF, Seb, Tender, wiz, Wolffe |
|           19 |      316 | 2024-07-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.28 | DJF, Seb, Tender, wiz, Wolffe |
|           18 |      363 | 2024-07-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.27 | DJF, Seb, Tender, wiz, Wolffe |
|           17 |      366 | 2024-07-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.75 | DJF, Seb, Tender, wiz, Wolffe |
|           16 |      707 | 2024-06-13 | E-Xolos LAZER    | L   | 0.927      | -            | -                | -                | -         |   -14.10 | Lake, micro, Seb, Tender, wiz |
|           15 |     1062 | 2024-06-05 | LAG              | L   | 0.875      | -            | -                | -                | -         |   -10.96 | Lake, micro, Seb, Tender, wiz |
|           14 |     1105 | 2024-06-04 | LAG              | L   | 0.869      | -            | -                | -                | -         |   -11.74 | Lake, micro, Seb, Tender, wiz |
|           13 |     1416 | 2024-05-22 | MIGHT            | W   | 0.782      | 0.477        | 0.000 (0.000)    | 0.073 (0.027)    | 0 (0.000) |     4.26 | Lake, micro, Seb, Tender, wiz |
|           12 |     1423 | 2024-05-22 | MIGHT            | W   | 0.782      | 0.477        | 0.000 (0.000)    | 0.073 (0.027)    | 0 (0.000) |     4.43 | Lake, micro, Seb, Tender, wiz |
|           11 |     1469 | 2024-05-21 | Legacy           | L   | 0.775      | -            | -                | -                | -         |    -5.03 | Lake, micro, Seb, Tender, wiz |
|           10 |     1473 | 2024-05-21 | Wildcard         | L   | 0.774      | -            | -                | -                | -         |    -6.97 | Lake, micro, Seb, Tender, wiz |
|            9 |     1479 | 2024-05-21 | Wildcard         | L   | 0.774      | -            | -                | -                | -         |    -7.38 | Lake, micro, Seb, Tender, wiz |
|            8 |     1503 | 2024-05-20 | BOSS             | W   | 0.769      | 0.477        | 0.018 (0.007)    | 0.378 (0.138)    | 0 (0.000) |    12.16 | Lake, micro, Seb, Tender, wiz |
|            7 |     1507 | 2024-05-20 | BOSS             | L   | 0.768      | -            | -                | -                | -         |   -12.24 | Lake, micro, Seb, Tender, wiz |
|            6 |     1629 | 2024-05-16 | Take Flyte       | W   | 0.742      | 0.477        | 0.003 (0.001)    | 0.228 (0.081)    | 0 (0.000) |     7.98 | Lake, micro, Seb, Tender, wiz |
|            5 |     1630 | 2024-05-16 | Take Flyte       | W   | 0.742      | 0.477        | 0.003 (0.001)    | 0.228 (0.081)    | 0 (0.000) |     8.47 | Lake, micro, Seb, Tender, wiz |
|            4 |     1667 | 2024-05-15 | Nouns            | W   | 0.735      | 0.477        | 0.073 (0.026)    | 0.589 (0.207)    | 0 (0.000) |    15.96 | Lake, micro, Seb, Tender, wiz |
|            3 |     1672 | 2024-05-15 | Nouns            | W   | 0.735      | 0.477        | 0.073 (0.026)    | 0.589 (0.207)    | 0 (0.000) |    16.84 | Lake, micro, Seb, Tender, wiz |
|            2 |     1723 | 2024-05-14 | LAG              | L   | 0.729      | -            | -                | -                | -         |    -8.94 | Lake, micro, Seb, Tender, wiz |
|            1 |     1730 | 2024-05-14 | LAG              | W   | 0.729      | 0.477        | 0.017 (0.006)    | 0.385 (0.134)    | 0 (0.000) |    14.37 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,804.58)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
