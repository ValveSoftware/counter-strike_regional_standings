### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  821.8<br />
<br />
Final Rank Value (821.8) = Starting Rank Value (796.0) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.0
- 400 + ( ( 0.196 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 796.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      107 | 2024-07-21 | Carnival           | W   | 1.000      | 0.262        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     4.62 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           20 |      547 | 2024-06-30 | True Rippers       | W   | 1.000      | 0.262        | 0.010 (0.003)    | 0.152 (0.040)    | 0 (0.000) |    13.45 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           19 |      549 | 2024-06-29 | LOT                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.97 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           18 |      553 | 2024-06-29 | True Rippers       | L   | 1.000      | -            | -                | -                | -         |   -18.39 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           17 |      554 | 2024-06-29 | Marcos             | W   | 1.000      | 0.143        | -                | 0.041 (0.006)    | 0 (0.000) |     4.60 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           16 |      560 | 2024-06-28 | Carnival           | W   | 1.000      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     4.89 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           15 |      565 | 2024-06-27 | True Rippers       | L   | 1.000      | -            | -                | -                | -         |   -19.89 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           14 |     1361 | 2024-05-26 | True Rippers       | W   | 0.804      | 0.262        | 0.010 (0.002)    | 0.152 (0.032)    | 0 (0.000) |     9.05 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |     1363 | 2024-05-26 | Marcos             | W   | 0.804      | -            | -                | -                | 0 (0.000) |     2.20 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     2579 | 2024-04-10 | BIG                | L   | 0.500      | -            | -                | -                | -         |    -1.08 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     2634 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.493      | -            | -                | -                | -         |    -0.12 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     2877 | 2024-03-31 | True Rippers       | W   | 0.432      | 0.143        | 0.010 (0.001)    | 0.152 (0.009)    | 0 (0.000) |     4.93 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     2892 | 2024-03-29 | Marcos             | W   | 0.418      | 0.143        | 0.001 (0.000)    | 0.016 (0.001)    | -         |     3.46 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     2985 | 2024-03-24 | Marcos             | W   | 0.384      | 0.262        | 0.001 (0.000)    | 0.016 (0.002)    | -         |     3.26 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     2987 | 2024-03-24 | Grayfox            | W   | 0.383      | 0.262        | 0.000 (0.000)    | 0.008 (0.001)    | -         |     2.92 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     3129 | 2024-03-16 | Aurora             | L   | 0.332      | -            | -                | -                | -         |    -0.13 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     3131 | 2024-03-16 | Bad News Kangaroos | W   | 0.331      | 0.432        | 0.023 (0.003)    | 0.134 (0.019)    | 1 (0.331) |     5.10 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     3151 | 2024-03-15 | Aurora             | L   | 0.324      | -            | -                | -                | -         |    -0.12 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     3183 | 2024-03-14 | GRDX               | W   | 0.318      | 0.432        | 0.003 (0.000)    | -                | 1 (0.318) |     1.94 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     3608 | 2024-02-25 | Grayfox            | W   | 0.198      | 0.262        | -                | 0.008 (0.000)    | -         |     1.57 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     3610 | 2024-02-24 | 2ez                | W   | 0.197      | -            | -                | -                | -         |     0.61 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,431.01)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-26 |      0.804 | $1,000.00      | $804.38         |
| 2024-04-14 |      0.526 | $15,000.00     | $7,897.44       |
| 2024-03-24 |      0.384 | $1,000.00      | $384.03         |
| 2024-03-16 |      0.332 | $12,500.00     | $4,147.66       |
| 2024-02-25 |      0.198 | $1,000.00      | $197.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
