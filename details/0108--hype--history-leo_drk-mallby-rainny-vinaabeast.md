### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, MaLLby, rainny, vinaabEAST<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [27]( ../standings_americas.md)<br />
Final Rank Value:  853.3<br />
<br />
Final Rank Value (853.3) = Starting Rank Value (814.9) + Head To Head Adjustments (38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.9
- 400 + ( ( 0.197 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 814.9


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
|           20 |        1 | 2024-07-11 | W7M         | L   | 1.000      | -            | -                | -                | -         |   -19.50 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           19 |       23 | 2024-07-10 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -11.68 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           18 |       59 | 2024-07-08 | Galorys     | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.519 (0.192)    | 0 (0.000) |    12.65 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           17 |       74 | 2024-07-07 | Hawks       | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.037 (0.012)    | 0 (0.000) |     4.53 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           16 |      261 | 2024-06-13 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -12.35 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           15 |      365 | 2024-06-09 | KRÜ         | W   | 0.988      | 0.450        | 0.025 (0.011)    | 0.235 (0.104)    | 0 (0.000) |    14.53 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           14 |      422 | 2024-06-08 | paiN        | L   | 0.982      | -            | -                | -                | -         |    -1.06 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           13 |      441 | 2024-06-08 | Sharks      | L   | 0.980      | -            | -                | -                | -         |    -7.72 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           12 |      479 | 2024-06-07 | inSanitY    | W   | 0.975      | 0.450        | 0.066 (0.029)    | 0.433 (0.190)    | 0 (0.000) |    20.98 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           11 |      745 | 2024-06-01 | Galorys     | W   | 0.934      | 0.371        | 0.026 (0.009)    | 0.519 (0.180)    | 0 (0.000) |    16.31 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           10 |      800 | 2024-05-30 | W7M         | W   | 0.922      | 0.371        | 0.001 (0.000)    | 0.404 (0.138)    | 0 (0.000) |    11.28 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            9 |      858 | 2024-05-28 | Corinthians | W   | 0.907      | 0.371        | 0.000 (0.000)    | 0.069 (0.023)    | 0 (0.000) |     4.17 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            8 |     1156 | 2024-05-17 | Case        | L   | 0.834      | -            | -                | -                | -         |   -10.99 | history, leo_drk, MaLLby, r1see, rainny      |
|            7 |     1187 | 2024-05-16 | Sharks      | L   | 0.827      | -            | -                | -                | -         |    -6.75 | BALEROSTYLE, history, leo_drk, r1see, rainny |
|            6 |     1233 | 2024-05-15 | Galorys     | L   | 0.821      | -            | -                | -                | -         |   -11.67 | history, leo_drk, MaLLby, r1see, rainny      |
|            5 |     1243 | 2024-05-15 | BESTIA      | W   | 0.820      | 0.371        | 0.050 (0.015)    | 0.657 (0.200)    | 0 (0.000) |    17.04 | history, leo_drk, MaLLby, r1see, rainny      |
|            4 |     1295 | 2024-05-14 | W7M         | W   | 0.814      | 0.371        | 0.001 (0.000)    | 0.404 (0.122)    | 0 (0.000) |    11.33 | history, leo_drk, MaLLby, r1see, rainny      |
|            3 |     1302 | 2024-05-14 | Case        | W   | 0.814      | 0.303        | 0.033 (0.008)    | 0.582 (0.143)    | 0 (0.000) |    14.05 | history, leo_drk, MaLLby, r1see, rainny      |
|            2 |     1325 | 2024-05-13 | Fluxo       | L   | 0.807      | -            | -                | -                | -         |    -3.51 | history, leo_drk, MaLLby, r1see, rainny      |
|            1 |     1984 | 2024-04-16 | Fluxo       | L   | 0.628      | -            | -                | -                | -         |    -3.26 | history, leo_drk, MaLLby, r1see, rainny      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
