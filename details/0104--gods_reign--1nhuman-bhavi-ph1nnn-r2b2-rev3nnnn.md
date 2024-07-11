### Roster Details<br />
Team Name: Gods Reign<br />
Roster: 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  859.1<br />
<br />
Final Rank Value (859.1) = Starting Rank Value (837.7) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.7
- 400 + ( ( 0.208 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 837.7


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
|           20 |       95 | 2024-06-30 | True Rippers       | W   | 1.000      | 0.262        | 0.015 (0.004)    | 0.167 (0.044)    | 0 (0.000) |    12.98 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           19 |       97 | 2024-06-29 | LOT                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.39 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           18 |      101 | 2024-06-29 | True Rippers       | L   | 1.000      | -            | -                | -                | -         |   -18.89 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           17 |      102 | 2024-06-29 | Marcos             | W   | 1.000      | 0.143        | -                | 0.041 (0.006)    | 0 (0.000) |     3.71 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           16 |      108 | 2024-06-28 | Carnival           | W   | 1.000      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     3.82 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           15 |      113 | 2024-06-27 | True Rippers       | L   | 1.000      | -            | -                | -                | -         |   -20.45 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           14 |      909 | 2024-05-26 | True Rippers       | W   | 0.891      | 0.262        | 0.015 (0.004)    | 0.167 (0.039)    | 0 (0.000) |     9.51 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |      911 | 2024-05-26 | Marcos             | W   | 0.891      | -            | -                | -                | 0 (0.000) |     1.92 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     2127 | 2024-04-10 | BIG                | L   | 0.587      | -            | -                | -                | -         |    -0.92 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     2182 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.580      | -            | -                | -                | -         |    -0.11 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     2425 | 2024-03-31 | True Rippers       | W   | 0.519      | 0.143        | 0.015 (0.001)    | 0.167 (0.012)    | 0 (0.000) |     5.67 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     2440 | 2024-03-29 | Marcos             | W   | 0.505      | 0.143        | 0.001 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     3.77 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     2533 | 2024-03-24 | Marcos             | W   | 0.471      | 0.262        | 0.001 (0.000)    | 0.019 (0.002)    | -         |     3.63 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     2535 | 2024-03-24 | Grayfox            | W   | 0.470      | 0.262        | 0.001 (0.000)    | 0.012 (0.001)    | -         |     3.13 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     2677 | 2024-03-16 | Aurora             | L   | 0.419      | -            | -                | -                | -         |    -0.15 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     2679 | 2024-03-16 | Bad News Kangaroos | W   | 0.417      | 0.432        | 0.029 (0.005)    | 0.196 (0.035)    | 1 (0.417) |     6.66 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     2699 | 2024-03-15 | Aurora             | L   | 0.411      | -            | -                | -                | -         |    -0.14 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     2731 | 2024-03-14 | GRDX               | W   | 0.405      | 0.432        | 0.004 (0.001)    | -                | 1 (0.405) |     2.14 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     3156 | 2024-02-25 | Grayfox            | W   | 0.284      | 0.262        | 0.001 (0.000)    | 0.012 (0.001)    | -         |     2.00 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     3158 | 2024-02-24 | 2ez                | W   | 0.284      | 0.262        | -                | 0.004 (0.000)    | -         |     0.71 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,079.49)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-26 |      0.891 | $1,000.00      | $891.22         |
| 2024-04-14 |      0.613 | $15,000.00     | $9,199.97       |
| 2024-03-24 |      0.471 | $1,000.00      | $470.86         |
| 2024-03-16 |      0.419 | $12,500.00     | $5,233.10       |
| 2024-02-25 |      0.284 | $1,000.00      | $284.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
