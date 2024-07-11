### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  765.4<br />
<br />
Final Rank Value (765.4) = Starting Rank Value (785.1) + Head To Head Adjustments (-19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.1
- 400 + ( ( 0.183 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 785.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1489 | 2024-05-06 | Permitta        | L   | 0.758      | -            | -                | -                | -         |    -6.26 | 2high, HENU, myltsi, podi, teme |
|           19 |     1500 | 2024-05-05 | Heimo           | L   | 0.753      | -            | -                | -                | -         |   -13.66 | 2high, HENU, myltsi, podi, teme |
|           18 |     1509 | 2024-05-05 | jefet           | W   | 0.752      | 0.306        | 0.002 (0.000)    | 0.029 (0.007)    | 0 (0.000) |     4.79 | 2high, HENU, myltsi, podi, teme |
|           17 |     1526 | 2024-05-04 | TMVG            | W   | 0.745      | 0.306        | 0.000 (0.000)    | 0.006 (0.001)    | 0 (0.000) |     2.44 | 2high, HENU, myltsi, podi, teme |
|           16 |     1544 | 2024-05-03 | Romania         | W   | 0.738      | 0.435        | 0.011 (0.003)    | 0.375 (0.120)    | 0 (0.000) |    14.11 | 2high, HENU, myltsi, podi, teme |
|           15 |     1574 | 2024-05-01 | Enterprise      | L   | 0.727      | -            | -                | -                | -         |    -6.57 | 2high, HENU, myltsi, podi, teme |
|           14 |     1594 | 2024-05-01 | Slovakia        | L   | 0.725      | -            | -                | -                | -         |    -5.26 | HENU, myltsi, podi, S1rva, teme |
|           13 |     1612 | 2024-04-30 | Endpoint        | L   | 0.719      | -            | -                | -                | -         |    -6.68 | HENU, myltsi, podi, S1rva, teme |
|           12 |     1622 | 2024-04-29 | RUSH B          | L   | 0.714      | -            | -                | -                | -         |    -8.13 | HENU, myltsi, podi, S1rva, teme |
|           11 |     1653 | 2024-04-28 | Heimo           | L   | 0.705      | -            | -                | -                | -         |   -13.98 | HENU, myltsi, podi, S1rva, teme |
|           10 |     1785 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.665      | -            | -                | -                | -         |    -5.74 | HENU, myltsi, podi, S1rva, teme |
|            9 |     1832 | 2024-04-20 | SINNERS         | W   | 0.652      | 0.371        | 0.057 (0.014)    | 0.767 (0.185)    | 0 (0.000) |    17.82 | HENU, myltsi, podi, S1rva, teme |
|            8 |     1887 | 2024-04-19 | Viperio         | L   | 0.644      | -            | -                | -                | -         |   -14.08 | HENU, myltsi, podi, S1rva, teme |
|            7 |     1935 | 2024-04-18 | MOUZ NXT        | L   | 0.638      | -            | -                | -                | -         |    -3.32 | HENU, myltsi, podi, S1rva, teme |
|            6 |     1997 | 2024-04-16 | 1WIN            | L   | 0.626      | -            | -                | -                | -         |    -5.40 | HENU, myltsi, podi, S1rva, teme |
|            5 |     2016 | 2024-04-15 | Slovakia        | W   | 0.619      | 0.371        | 0.045 (0.010)    | 0.891 (0.204)    | 0 (0.000) |    14.19 | HENU, myltsi, podi, S1rva, teme |
|            4 |     2019 | 2024-04-15 | Viperio         | W   | 0.619      | 0.143        | 0.002 (0.000)    | 0.052 (0.005)    | 0 (0.000) |     5.97 | HENU, myltsi, podi, S1rva, teme |
|            3 |     2092 | 2024-04-11 | Secret          | W   | 0.592      | 0.371        | 0.000 (0.000)    | 0.092 (0.020)    | 0 (0.000) |     4.36 | HENU, myltsi, podi, S1rva, teme |
|            2 |     3165 | 2024-02-24 | HAVU            | W   | 0.282      | 0.306        | 0.002 (0.000)    | 0.211 (0.018)    | 1 (0.282) |     4.21 | HENU, myltsi, podi, S1rva, teme |
|            1 |     3187 | 2024-02-24 | ex-sYnck        | W   | 0.279      | 0.306        | 0.000 (0.000)    | 0.033 (0.003)    | 1 (0.279) |     1.52 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,267.24)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      0.753 | $1,608.00      | $1,211.22       |
| 2024-02-24 |      0.282 | $3,748.00      | $1,056.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
