### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
Final Rank Value:  566.3<br />
<br />
Final Rank Value (566.3) = Starting Rank Value (538.5) + Head To Head Adjustments (27.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.5
- 400 + ( ( 0.064 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 538.5


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
|           12 |      912 | 2024-06-01 | Verdant          | L   | 0.894      | -            | -                | -                | -         |    -4.74 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |      978 | 2024-05-30 | 1WIN             | L   | 0.880      | -            | -                | -                | -         |    -1.60 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |      998 | 2024-05-29 | Grannys Knockers | W   | 0.874      | 0.372        | 0.006 (0.002)    | 0.109 (0.036)    | 0 (0.000) |    22.65 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |     1543 | 2024-05-11 | Verdant          | L   | 0.754      | -            | -                | -                | -         |    -3.53 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |     1704 | 2024-05-03 | RUBY             | L   | 0.699      | -            | -                | -                | -         |    -1.81 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |     1747 | 2024-05-01 | B8               | L   | 0.687      | -            | -                | -                | -         |    -1.03 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     1774 | 2024-04-30 | MOUZ NXT         | L   | 0.680      | -            | -                | -                | -         |    -1.06 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            5 |     1843 | 2024-04-27 | Viperio          | W   | 0.659      | 0.143        | 0.002 (0.000)    | 0.049 (0.005)    | 0 (0.000) |    13.29 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            4 |     2992 | 2024-03-10 | MOUZ NXT         | L   | 0.341      | -            | -                | -                | -         |    -0.46 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     3101 | 2024-03-06 | Endpoint         | L   | 0.313      | -            | -                | -                | -         |    -1.09 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     3266 | 2024-02-27 | FORZE            | L   | 0.261      | -            | -                | -                | -         |    -0.69 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     3268 | 2024-02-27 | Sashi            | W   | 0.260      | 0.143        | 0.215 (0.008)    | 1.000 (0.037)    | 0 (0.000) |     7.93 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
