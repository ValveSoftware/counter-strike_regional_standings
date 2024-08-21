### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn<br />
Global Rank: [133](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_08_21.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_08_21.md)<br />
<br />
Final Rank Value:  764.0<br />
<br />
Final Rank Value (764.0) = Starting Rank Value (732.5) + Head To Head Adjustments (31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.5
- 400 + ( ( 0.167 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 732.5


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
|           22 |      134 | 2024-08-18 | VICTORES SUMUS     | W   | 1.000      | 0.262        | 0.002 (0.000)    | -                | 0 (0.000) |     6.72 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           21 |     1057 | 2024-07-21 | Carnival           | W   | 0.990      | 0.262        | 0.002 (0.001)    | -                | 0 (0.000) |     6.14 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           20 |     1497 | 2024-06-30 | True Rippers       | W   | 0.850      | 0.262        | 0.004 (0.001)    | 0.131 (0.029)    | 0 (0.000) |    12.02 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           19 |     1499 | 2024-06-29 | LOT                | W   | 0.849      | -            | -                | -                | 0 (0.000) |     3.49 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           18 |     1503 | 2024-06-29 | True Rippers       | L   | 0.845      | -            | -                | -                | -         |   -14.96 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           17 |     1504 | 2024-06-29 | Marcos             | W   | 0.844      | 0.143        | -                | 0.030 (0.004)    | 0 (0.000) |     5.10 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           16 |     1510 | 2024-06-28 | Carnival           | W   | 0.837      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     5.63 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           15 |     1515 | 2024-06-27 | True Rippers       | L   | 0.832      | -            | -                | -                | -         |   -15.68 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           14 |     2311 | 2024-05-26 | True Rippers       | W   | 0.617      | 0.262        | 0.004 (0.001)    | 0.131 (0.021)    | 0 (0.000) |     7.75 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |     2313 | 2024-05-26 | Marcos             | W   | 0.616      | 0.262        | -                | 0.030 (0.005)    | 0 (0.000) |     3.72 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     3529 | 2024-04-10 | BIG                | L   | 0.313      | -            | -                | -                | -         |    -0.49 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     3584 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.306      | -            | -                | -                | -         |    -0.11 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     3827 | 2024-03-31 | True Rippers       | W   | 0.245      | 0.143        | 0.004 (0.000)    | 0.131 (0.005)    | -         |     3.10 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     3842 | 2024-03-29 | Marcos             | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | -         |     2.28 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     3935 | 2024-03-24 | Marcos             | W   | 0.197      | 0.262        | 0.000 (0.000)    | 0.007 (0.000)    | -         |     1.97 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     3937 | 2024-03-24 | Grayfox            | W   | 0.196      | 0.262        | -                | 0.000 (0.000)    | -         |     1.64 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     4079 | 2024-03-16 | Aurora             | L   | 0.145      | -            | -                | -                | -         |    -0.04 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     4081 | 2024-03-16 | Bad News Kangaroos | W   | 0.143      | 0.432        | 0.013 (0.001)    | 0.065 (0.004)    | 1 (0.143) |     2.15 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     4101 | 2024-03-15 | Aurora             | L   | 0.137      | -            | -                | -                | -         |    -0.04 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     4133 | 2024-03-14 | GRDX               | W   | 0.131      | 0.432        | 0.001 (0.000)    | -                | 1 (0.131) |     0.98 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     4558 | 2024-02-25 | Grayfox            | W   | 0.010      | 0.262        | -                | 0.000 (0.000)    | -         |     0.09 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     4560 | 2024-02-24 | 2ez                | W   | 0.010      | -            | -                | -                | -         |     0.04 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,559.45)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-07-21 |      0.990 | $1,000.00      | $990.06         |
| 2024-06-30 |      0.850 | $1,000.00      | $850.11         |
| 2024-05-26 |      0.617 | $1,000.00      | $617.11         |
| 2024-04-14 |      0.339 | $15,000.00     | $5,088.39       |
| 2024-03-24 |      0.197 | $1,000.00      | $196.76         |
| 2024-03-16 |      0.145 | $12,500.00     | $1,806.79       |
| 2024-02-25 |      0.010 | $1,000.00      | $10.23          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
