### Roster Details<br />
Team Name: Lilmix<br />
Roster: bq, dex, eraa, quix, SHiNE<br />
Global Rank: [115](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
<br />
Final Rank Value:  827.4<br />
<br />
Final Rank Value (827.4) = Starting Rank Value (868.5) + Head To Head Adjustments (-41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.266[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 868.5
- 400 + ( ( 0.228 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 868.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       16 | 2024-08-06 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -15.38 | bq, dex, eraa, quix, SHiNE  |
|           10 |      274 | 2024-07-30 | INFINITE        | L   | 1.000      | -            | -                | -                | -         |   -25.18 | bq, dex, L00m1, quix, SHiNE |
|            9 |      458 | 2024-07-24 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -16.64 | bq, dex, L00m1, quix, SHiNE |
|            8 |      684 | 2024-07-18 | kONO            | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.553 (0.079)    | 0 (0.000) |    13.48 | bq, dex, L00m1, quix, SHiNE |
|            7 |     1096 | 2024-06-15 | Johnny Speeds   | L   | 0.853      | -            | -                | -                | -         |    -2.87 | bq, dex, poiii, quix, zyyx  |
|            6 |     1116 | 2024-06-14 | Young Gods      | W   | 0.847      | 0.377        | 0.007 (0.002)    | 0.032 (0.010)    | 1 (0.847) |     7.97 | bq, dex, poiii, quix, zyyx  |
|            5 |     1136 | 2024-06-14 | Johnny Speeds   | L   | 0.846      | -            | -                | -                | -         |    -2.82 | bq, dex, poiii, quix, zyyx  |
|            4 |     1172 | 2024-06-13 | Young Gods      | W   | 0.839      | 0.377        | 0.007 (0.002)    | 0.032 (0.010)    | 1 (0.839) |     8.07 | bq, dex, poiii, quix, zyyx  |
|            3 |     1301 | 2024-06-09 | Alliance        | L   | 0.812      | -            | -                | -                | -         |   -13.26 | bq, dex, poiii, quix, zyyx  |
|            2 |     2279 | 2024-05-11 | Johnny Speeds   | L   | 0.620      | -            | -                | -                | -         |    -1.72 | bq, dex, poiii, quix, zyyx  |
|            1 |     2291 | 2024-05-11 | AURA            | W   | 0.619      | 0.319        | 0.017 (0.003)    | 0.057 (0.011)    | 1 (0.619) |     7.23 | bq, dex, poiii, quix, zyyx  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,276.06)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      0.853 | $5,808.00      | $4,952.83       |
| 2024-06-09 |      0.813 | $1,445.00      | $1,175.32       |
| 2024-05-11 |      0.620 | $1,850.00      | $1,147.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
