### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, MaLLby, rainny, vinaabEAST<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  871.2<br />
<br />
Final Rank Value (871.2) = Starting Rank Value (882.8) + Head To Head Adjustments (-11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.8
- 400 + ( ( 0.239 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 882.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       30 | 2024-07-23 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -9.60 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           38 |       43 | 2024-07-23 | Dusty Roots | L   | 1.000      | -            | -                | -                | -         |   -21.22 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           37 |       60 | 2024-07-22 | KRÜ         | L   | 1.000      | -            | -                | -                | -         |   -18.36 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           36 |       63 | 2024-07-22 | ODDIK       | W   | 1.000      | 0.333        | 0.083 (0.028)    | 0.694 (0.231)    | 0 (0.000) |    21.36 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           35 |       88 | 2024-07-21 | W7M         | W   | 1.000      | 0.333        | -                | 0.495 (0.165)    | 0 (0.000) |    13.68 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           34 |      110 | 2024-07-20 | Solid       | L   | 1.000      | -            | -                | -                | -         |   -15.75 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           33 |      115 | 2024-07-20 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -10.02 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           32 |      165 | 2024-07-19 | Sharks      | L   | 1.000      | -            | -                | -                | -         |   -12.12 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           31 |      191 | 2024-07-18 | KRÜ         | W   | 1.000      | 0.333        | 0.029 (0.010)    | -                | 0 (0.000) |    14.85 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           30 |      200 | 2024-07-18 | Case        | W   | 1.000      | 0.371        | 0.028 (0.010)    | 0.751 (0.278)    | 0 (0.000) |    14.93 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           29 |      262 | 2024-07-17 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -4.75 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           28 |      268 | 2024-07-17 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -4.97 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           27 |      318 | 2024-07-16 | KRÜ         | L   | 1.000      | -            | -                | -                | -         |   -17.80 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           26 |      323 | 2024-07-16 | KRÜ         | W   | 1.000      | 0.450        | 0.029 (0.013)    | 0.477 (0.215)    | 0 (0.000) |    13.52 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           25 |      331 | 2024-07-16 | W7M         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.75 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           24 |      338 | 2024-07-16 | SPORT       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.49 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           23 |      368 | 2024-07-15 | Smoke       | L   | 1.000      | -            | -                | -                | -         |   -23.06 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           22 |      374 | 2024-07-15 | Smoke       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.95 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           21 |      448 | 2024-07-11 | Dusty Roots | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.30 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           20 |      453 | 2024-07-11 | W7M         | L   | 1.000      | -            | -                | -                | -         |   -20.10 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           19 |      475 | 2024-07-10 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -12.77 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           18 |      511 | 2024-07-08 | Galorys     | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.592 (0.219)    | 0 (0.000) |    11.45 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           17 |      526 | 2024-07-07 | Hawks       | W   | 1.000      | -            | -                | -                | -         |     3.58 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           16 |      713 | 2024-06-13 | ODDIK       | L   | 0.927      | -            | -                | -                | -         |   -12.62 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           15 |      817 | 2024-06-09 | KRÜ         | W   | 0.901      | 0.450        | 0.029 (0.012)    | 0.477 (0.193)    | -         |    12.46 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           14 |      874 | 2024-06-08 | paiN        | L   | 0.895      | -            | -                | -                | -         |    -1.83 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           13 |      893 | 2024-06-08 | Sharks      | L   | 0.894      | -            | -                | -                | -         |    -9.06 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           12 |      931 | 2024-06-07 | inSanitY    | W   | 0.888      | 0.450        | 0.060 (0.024)    | 0.458 (0.183)    | -         |    17.15 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           11 |     1197 | 2024-06-01 | Galorys     | W   | 0.847      | 0.371        | 0.021 (0.007)    | 0.592 (0.186)    | -         |    13.17 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           10 |     1252 | 2024-05-30 | W7M         | W   | 0.835      | -            | -                | -                | -         |     9.37 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            9 |     1310 | 2024-05-28 | Corinthians | W   | 0.820      | -            | -                | -                | -         |     2.79 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            8 |     1608 | 2024-05-17 | Case        | L   | 0.747      | -            | -                | -                | -         |   -10.99 | history, leo_drk, MaLLby, r1see, rainny      |
|            7 |     1639 | 2024-05-16 | Sharks      | L   | 0.741      | -            | -                | -                | -         |    -7.99 | BALEROSTYLE, history, leo_drk, r1see, rainny |
|            6 |     1685 | 2024-05-15 | Galorys     | L   | 0.734      | -            | -                | -                | -         |   -12.23 | history, leo_drk, MaLLby, r1see, rainny      |
|            5 |     1695 | 2024-05-15 | BESTIA      | W   | 0.733      | 0.371        | 0.114 (0.031)    | 0.740 (0.201)    | -         |    13.85 | history, leo_drk, MaLLby, r1see, rainny      |
|            4 |     1747 | 2024-05-14 | W7M         | W   | 0.728      | -            | -                | -                | -         |     9.11 | history, leo_drk, MaLLby, r1see, rainny      |
|            3 |     1754 | 2024-05-14 | Case        | W   | 0.727      | 0.303        | 0.028 (0.006)    | 0.751 (0.165)    | -         |    11.42 | history, leo_drk, MaLLby, r1see, rainny      |
|            2 |     1777 | 2024-05-13 | Fluxo       | L   | 0.720      | -            | -                | -                | -         |    -4.60 | history, leo_drk, MaLLby, r1see, rainny      |
|            1 |     2436 | 2024-04-16 | Fluxo       | L   | 0.542      | -            | -                | -                | -         |    -4.01 | history, leo_drk, MaLLby, r1see, rainny      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,368.95)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-16 |      0.948 | $2,500.00      | $2,368.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
