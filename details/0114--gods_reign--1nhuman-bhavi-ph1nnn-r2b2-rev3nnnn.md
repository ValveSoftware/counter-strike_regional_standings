### Roster Details<br />
Team Name: Gods Reign<br />
Roster: 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  856.0<br />
<br />
Final Rank Value (856.0) = Starting Rank Value (836.7) + Head To Head Adjustments (19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.457[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 836.7
- 400 + ( ( 0.203 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 836.7


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
|           20 |      259 | 2024-06-30 | True Rippers       | W   | 1.000      | 0.262        | 0.014 (0.004)    | 0.162 (0.042)    | 0 (0.000) |    13.10 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           19 |      261 | 2024-06-29 | LOT                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.43 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           18 |      265 | 2024-06-29 | True Rippers       | L   | 1.000      | -            | -                | -                | -         |   -18.76 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           17 |      266 | 2024-06-29 | Marcos             | W   | 1.000      | 0.143        | -                | 0.041 (0.006)    | 0 (0.000) |     3.80 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           16 |      272 | 2024-06-28 | Carnival           | W   | 1.000      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     3.95 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           15 |      277 | 2024-06-27 | True Rippers       | L   | 1.000      | -            | -                | -                | -         |   -20.32 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           14 |     1073 | 2024-05-26 | True Rippers       | W   | 0.852      | 0.262        | 0.014 (0.003)    | 0.162 (0.036)    | 0 (0.000) |     9.20 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |     1075 | 2024-05-26 | Marcos             | W   | 0.851      | -            | -                | -                | 0 (0.000) |     1.87 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     2291 | 2024-04-10 | BIG                | L   | 0.547      | -            | -                | -                | -         |    -0.92 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     2346 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.540      | -            | -                | -                | -         |    -0.10 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     2589 | 2024-03-31 | True Rippers       | W   | 0.479      | 0.143        | 0.014 (0.001)    | 0.162 (0.011)    | 0 (0.000) |     5.29 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     2604 | 2024-03-29 | Marcos             | W   | 0.466      | 0.143        | 0.001 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     3.54 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     2697 | 2024-03-24 | Marcos             | W   | 0.431      | 0.262        | 0.001 (0.000)    | 0.018 (0.002)    | -         |     3.38 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     2699 | 2024-03-24 | Grayfox            | W   | 0.431      | 0.262        | 0.001 (0.000)    | 0.010 (0.001)    | -         |     2.90 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     2841 | 2024-03-16 | Aurora             | L   | 0.379      | -            | -                | -                | -         |    -0.13 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     2843 | 2024-03-16 | Bad News Kangaroos | W   | 0.378      | 0.432        | 0.028 (0.005)    | 0.134 (0.022)    | 1 (0.378) |     5.89 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     2863 | 2024-03-15 | Aurora             | L   | 0.372      | -            | -                | -                | -         |    -0.12 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     2895 | 2024-03-14 | GRDX               | W   | 0.365      | 0.432        | 0.004 (0.001)    | -                | 1 (0.365) |     1.96 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     3320 | 2024-02-25 | Grayfox            | W   | 0.245      | 0.262        | 0.001 (0.000)    | 0.010 (0.001)    | -         |     1.74 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     3322 | 2024-02-24 | 2ez                | W   | 0.244      | 0.262        | -                | 0.000 (0.000)    | -         |     0.61 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,871.38)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-26 |      0.852 | $1,000.00      | $851.61         |
| 2024-04-14 |      0.574 | $15,000.00     | $8,605.81       |
| 2024-03-24 |      0.431 | $1,000.00      | $431.25         |
| 2024-03-16 |      0.379 | $12,500.00     | $4,737.98       |
| 2024-02-25 |      0.245 | $1,000.00      | $244.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
