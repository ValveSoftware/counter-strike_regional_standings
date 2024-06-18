### Roster Details<br />
Team Name: Gods Reign<br />
Roster: 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  881.6<br />
<br />
Final Rank Value (881.6) = Starting Rank Value (834.4) + Head To Head Adjustments (47.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.463[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 834.4
- 400 + ( ( 0.214 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 834.4


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
|           14 |      775 | 2024-05-26 | True Rippers       | W   | 1.000      | 0.262        | 0.019 (0.005)    | 0.095 (0.025)    | 0 (0.000) |     9.68 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |      777 | 2024-05-26 | Marcos             | W   | 1.000      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.09 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     1993 | 2024-04-10 | BIG                | L   | 0.742      | -            | -                | -                | -         |    -1.07 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     2048 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.736      | -            | -                | -                | -         |    -0.19 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     2292 | 2024-03-31 | True Rippers       | W   | 0.674      | 0.143        | 0.019 (0.002)    | 0.095 (0.009)    | 0 (0.000) |     6.67 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     2307 | 2024-03-29 | Marcos             | W   | 0.661      | 0.143        | 0.001 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     4.81 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     2400 | 2024-03-24 | Marcos             | W   | 0.627      | 0.262        | 0.001 (0.000)    | 0.022 (0.004)    | 0 (0.000) |     4.76 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     2402 | 2024-03-24 | Grayfox            | W   | 0.626      | 0.262        | 0.001 (0.000)    | 0.016 (0.003)    | 0 (0.000) |     4.12 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     2544 | 2024-03-16 | Aurora             | L   | 0.574      | -            | -                | -                | -         |    -0.25 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     2546 | 2024-03-16 | Bad News Kangaroos | W   | 0.573      | 0.432        | 0.031 (0.008)    | 0.225 (0.056)    | 1 (0.573) |     9.59 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     2566 | 2024-03-15 | Aurora             | L   | 0.567      | -            | -                | -                | -         |    -0.23 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     2598 | 2024-03-14 | GRDX               | W   | 0.560      | 0.432        | 0.005 (0.001)    | 0.000 (0.000)    | 1 (0.560) |     2.94 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     3023 | 2024-02-25 | Grayfox            | W   | 0.440      | 0.262        | 0.001 (0.000)    | 0.016 (0.002)    | 0 (0.000) |     3.16 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     3025 | 2024-02-24 | 2ez                | W   | 0.439      | 0.262        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     1.15 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,780.63)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-14 |      0.769 | $15,000.00     | $11,535.06      |
| 2024-03-24 |      0.627 | $1,000.00      | $626.53         |
| 2024-03-16 |      0.574 | $12,500.00     | $7,179.02       |
| 2024-02-25 |      0.440 | $1,000.00      | $440.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
