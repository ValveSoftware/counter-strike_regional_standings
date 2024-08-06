### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn<br />
Global Rank: [125](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
<br />
Final Rank Value:  794.8<br />
<br />
Final Rank Value (794.8) = Starting Rank Value (768.9) + Head To Head Adjustments (25.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.9
- 400 + ( ( 0.179 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 768.9


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
|           21 |      557 | 2024-07-21 | Carnival           | W   | 1.000      | 0.262        | 0.002 (0.001)    | -                | 0 (0.000) |     5.26 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           20 |      997 | 2024-06-30 | True Rippers       | W   | 0.951      | 0.262        | 0.005 (0.001)    | 0.163 (0.040)    | 0 (0.000) |    12.85 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           19 |      999 | 2024-06-29 | LOT                | W   | 0.950      | -            | -                | -                | 0 (0.000) |     3.24 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           18 |     1003 | 2024-06-29 | True Rippers       | L   | 0.946      | -            | -                | -                | -         |   -17.30 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           17 |     1004 | 2024-06-29 | Marcos             | W   | 0.945      | 0.143        | -                | 0.036 (0.005)    | 0 (0.000) |     4.86 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           16 |     1010 | 2024-06-28 | Carnival           | W   | 0.938      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     5.28 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           15 |     1015 | 2024-06-27 | True Rippers       | L   | 0.933      | -            | -                | -                | -         |   -18.35 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           14 |     1811 | 2024-05-26 | True Rippers       | W   | 0.718      | 0.262        | 0.005 (0.001)    | 0.163 (0.031)    | 0 (0.000) |     8.31 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |     1813 | 2024-05-26 | Marcos             | W   | 0.717      | 0.262        | -                | 0.036 (0.007)    | 0 (0.000) |     3.62 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     3029 | 2024-04-10 | BIG                | L   | 0.413      | -            | -                | -                | -         |    -0.70 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     3084 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.407      | -            | -                | -                | -         |    -0.09 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     3327 | 2024-03-31 | True Rippers       | W   | 0.345      | 0.143        | 0.005 (0.000)    | 0.163 (0.008)    | 0 (0.000) |     4.05 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     3342 | 2024-03-29 | Marcos             | W   | 0.332      | 0.143        | 0.000 (0.000)    | 0.011 (0.001)    | -         |     2.98 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     3435 | 2024-03-24 | Marcos             | W   | 0.298      | 0.262        | 0.000 (0.000)    | 0.011 (0.001)    | -         |     2.73 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     3437 | 2024-03-24 | Grayfox            | W   | 0.297      | 0.262        | 0.000 (0.000)    | 0.004 (0.000)    | -         |     2.46 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     3579 | 2024-03-16 | Aurora             | L   | 0.245      | -            | -                | -                | -         |    -0.05 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     3581 | 2024-03-16 | Bad News Kangaroos | W   | 0.244      | 0.432        | 0.016 (0.002)    | 0.217 (0.023)    | 1 (0.244) |     3.93 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     3601 | 2024-03-15 | Aurora             | L   | 0.238      | -            | -                | -                | -         |    -0.05 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     3633 | 2024-03-14 | GRDX               | W   | 0.231      | 0.432        | 0.002 (0.000)    | -                | 1 (0.231) |     1.56 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     4058 | 2024-02-25 | Grayfox            | W   | 0.111      | 0.262        | -                | 0.004 (0.000)    | -         |     0.95 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     4060 | 2024-02-24 | 2ez                | W   | 0.110      | -            | -                | -                | -         |     0.39 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,745.15)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-30 |      0.951 | $1,000.00      | $950.93         |
| 2024-05-26 |      0.718 | $1,000.00      | $717.93         |
| 2024-04-14 |      0.440 | $15,000.00     | $6,600.66       |
| 2024-03-24 |      0.298 | $1,000.00      | $297.57         |
| 2024-03-16 |      0.245 | $12,500.00     | $3,067.01       |
| 2024-02-25 |      0.111 | $1,000.00      | $111.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
