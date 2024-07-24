### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
Final Rank Value:  554.7<br />
<br />
Final Rank Value (554.7) = Starting Rank Value (528.7) + Head To Head Adjustments (26.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.7
- 400 + ( ( 0.064 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 528.7


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
|           12 |     1200 | 2024-06-01 | Verdant          | L   | 0.847      | -            | -                | -                | -         |    -3.20 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |     1266 | 2024-05-30 | 1WIN             | L   | 0.833      | -            | -                | -                | -         |    -1.86 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |     1286 | 2024-05-29 | Grannys Knockers | W   | 0.827      | 0.372        | 0.005 (0.001)    | 0.143 (0.044)    | 0 (0.000) |    20.87 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |     1831 | 2024-05-11 | Verdant          | L   | 0.707      | -            | -                | -                | -         |    -2.04 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |     1992 | 2024-05-03 | RUBY             | L   | 0.652      | -            | -                | -                | -         |    -1.98 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |     2035 | 2024-05-01 | B8               | L   | 0.639      | -            | -                | -                | -         |    -1.16 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     2062 | 2024-04-30 | MOUZ NXT         | L   | 0.632      | -            | -                | -                | -         |    -1.14 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            5 |     2131 | 2024-04-27 | Viperio          | W   | 0.612      | 0.143        | 0.002 (0.000)    | 0.045 (0.004)    | 0 (0.000) |    12.12 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            4 |     3280 | 2024-03-10 | MOUZ NXT         | L   | 0.294      | -            | -                | -                | -         |    -0.47 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     3389 | 2024-03-06 | Endpoint         | L   | 0.266      | -            | -                | -                | -         |    -0.99 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     3554 | 2024-02-27 | FORZE            | L   | 0.214      | -            | -                | -                | -         |    -0.69 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     3556 | 2024-02-27 | Sashi            | W   | 0.213      | 0.143        | 0.234 (0.007)    | 1.000 (0.030)    | 0 (0.000) |     6.52 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
