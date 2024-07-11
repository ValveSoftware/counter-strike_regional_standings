### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  567.0<br />
<br />
Final Rank Value (567.0) = Starting Rank Value (537.5) + Head To Head Adjustments (29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.5
- 400 + ( ( 0.065 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 537.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      748 | 2024-06-01 | Verdant          | L   | 0.934      | -            | -                | -                | -         |    -5.07 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |      814 | 2024-05-30 | 1WIN             | L   | 0.920      | -            | -                | -                | -         |    -1.55 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |      834 | 2024-05-29 | Grannys Knockers | W   | 0.914      | 0.372        | 0.006 (0.002)    | 0.113 (0.039)    | 0 (0.000) |    23.54 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |     1379 | 2024-05-11 | Verdant          | L   | 0.794      | -            | -                | -                | -         |    -3.81 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |     1540 | 2024-05-03 | RUBY             | L   | 0.739      | -            | -                | -                | -         |    -2.06 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |     1583 | 2024-05-01 | B8               | L   | 0.726      | -            | -                | -                | -         |    -1.05 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     1610 | 2024-04-30 | MOUZ NXT         | L   | 0.719      | -            | -                | -                | -         |    -1.10 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            5 |     1679 | 2024-04-27 | Viperio          | W   | 0.699      | 0.143        | 0.002 (0.000)    | 0.052 (0.005)    | 0 (0.000) |    14.09 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            4 |     2828 | 2024-03-10 | MOUZ NXT         | L   | 0.381      | -            | -                | -                | -         |    -0.52 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     2937 | 2024-03-06 | Endpoint         | L   | 0.353      | -            | -                | -                | -         |    -1.27 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     3102 | 2024-02-27 | FORZE            | L   | 0.300      | -            | -                | -                | -         |    -0.79 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     3104 | 2024-02-27 | Sashi            | W   | 0.300      | 0.143        | 0.202 (0.009)    | 1.000 (0.043)    | 0 (0.000) |     9.13 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
