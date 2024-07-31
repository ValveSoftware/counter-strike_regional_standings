### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Global Rank: [190](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [122]( ../standings_europe.md)<br />
<br />
Final Rank Value:  548.2<br />
<br />
Final Rank Value (548.2) = Starting Rank Value (524.7) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.7
- 400 + ( ( 0.060 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 524.7


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
|           12 |     1442 | 2024-06-01 | Verdant          | L   | 0.800      | -            | -                | -                | -         |    -2.98 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |     1508 | 2024-05-30 | 1WIN             | L   | 0.786      | -            | -                | -                | -         |    -1.84 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |     1528 | 2024-05-29 | Grannys Knockers | W   | 0.780      | 0.372        | 0.004 (0.001)    | 0.129 (0.038)    | 0 (0.000) |    19.63 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |     2073 | 2024-05-11 | Verdant          | L   | 0.660      | -            | -                | -                | -         |    -1.94 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |     2234 | 2024-05-03 | RUBY             | L   | 0.605      | -            | -                | -                | -         |    -1.92 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |     2277 | 2024-05-01 | B8               | L   | 0.592      | -            | -                | -                | -         |    -1.01 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     2304 | 2024-04-30 | MOUZ NXT         | L   | 0.585      | -            | -                | -                | -         |    -1.06 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            5 |     2373 | 2024-04-27 | Viperio          | W   | 0.565      | 0.143        | 0.002 (0.000)    | 0.038 (0.003)    | 0 (0.000) |    11.24 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            4 |     3522 | 2024-03-10 | MOUZ NXT         | L   | 0.247      | -            | -                | -                | -         |    -0.40 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     3631 | 2024-03-06 | Endpoint         | L   | 0.219      | -            | -                | -                | -         |    -0.79 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     3796 | 2024-02-27 | FORZE            | L   | 0.166      | -            | -                | -                | -         |    -0.58 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     3798 | 2024-02-27 | Sashi            | W   | 0.166      | 0.143        | 0.187 (0.004)    | 0.973 (0.023)    | 0 (0.000) |     5.08 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
