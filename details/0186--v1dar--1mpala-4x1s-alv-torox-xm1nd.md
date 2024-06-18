### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  573.9<br />
<br />
Final Rank Value (573.9) = Starting Rank Value (538.8) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.8
- 400 + ( ( 0.068 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 538.8


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
|           14 |      614 | 2024-06-01 | Verdant          | L   | 1.000      | -            | -                | -                | -         |    -5.91 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           13 |      680 | 2024-05-30 | 1WIN             | L   | 1.000      | -            | -                | -                | -         |    -1.53 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           12 |      700 | 2024-05-29 | Grannys Knockers | W   | 1.000      | 0.372        | 0.005 (0.002)    | 0.107 (0.040)    | 0 (0.000) |    25.15 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |     1245 | 2024-05-11 | Verdant          | L   | 0.949      | -            | -                | -                | -         |    -4.97 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |     1406 | 2024-05-03 | RUBY             | L   | 0.894      | -            | -                | -                | -         |    -2.79 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |     1449 | 2024-05-01 | B8               | L   | 0.882      | -            | -                | -                | -         |    -1.41 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |     1476 | 2024-04-30 | MOUZ NXT         | L   | 0.875      | -            | -                | -                | -         |    -1.44 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |     1545 | 2024-04-27 | Viperio          | W   | 0.854      | 0.143        | 0.003 (0.000)    | 0.056 (0.007)    | 0 (0.000) |    16.84 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     2695 | 2024-03-10 | MOUZ NXT         | L   | 0.536      | -            | -                | -                | -         |    -0.76 | 1mpala, 4X1s, Alv, lom1k, torox |
|            5 |     2804 | 2024-03-06 | Endpoint         | L   | 0.509      | -            | -                | -                | -         |    -1.93 | 1mpala, 4X1s, Alv, lom1k, torox |
|            4 |     2969 | 2024-02-27 | FORZE            | L   | 0.456      | -            | -                | -                | -         |    -1.15 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     2971 | 2024-02-27 | Sashi            | W   | 0.456      | 0.143        | 0.200 (0.013)    | 1.000 (0.065)    | 0 (0.000) |    13.82 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     4168 | 2024-01-11 | SINNERS          | L   | 0.142      | -            | -                | -                | -         |    -0.17 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     4184 | 2024-01-10 | 1WIN Academy     | W   | 0.137      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.35 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
