### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, MaLLby, rainny, vinaabEAST<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [24]( ../standings_americas.md)<br />
Final Rank Value:  897.3<br />
<br />
Final Rank Value (897.3) = Starting Rank Value (846.0) + Head To Head Adjustments (51.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.160[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 846.0
- 400 + ( ( 0.208 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 846.0


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
|           27 |       30 | 2024-07-16 | KRÜ         | L   | 1.000      | -            | -                | -                | -         |   -16.75 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           26 |       35 | 2024-07-16 | KRÜ         | W   | 1.000      | 0.450        | 0.034 (0.015)    | 0.324 (0.146)    | 0 (0.000) |    14.66 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           25 |       43 | 2024-07-16 | W7M         | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.418 (0.139)    | 0 (0.000) |    12.45 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           24 |       50 | 2024-07-16 | SPORT       | W   | 1.000      | 0.371        | 0.007 (0.002)    | -                | 0 (0.000) |    10.13 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           23 |       80 | 2024-07-15 | Smoke       | L   | 1.000      | -            | -                | -                | -         |   -23.23 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           22 |       86 | 2024-07-15 | Smoke       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.77 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           21 |      160 | 2024-07-11 | Dusty Roots | W   | 1.000      | 0.333        | 0.010 (0.003)    | -                | 0 (0.000) |    10.42 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           20 |      165 | 2024-07-11 | W7M         | L   | 1.000      | -            | -                | -                | -         |   -19.36 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           19 |      187 | 2024-07-10 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -11.32 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           18 |      223 | 2024-07-08 | Galorys     | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.535 (0.198)    | 0 (0.000) |    12.70 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           17 |      238 | 2024-07-07 | Hawks       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.04 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           16 |      425 | 2024-06-13 | ODDIK       | L   | 0.974      | -            | -                | -                | -         |   -11.62 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           15 |      529 | 2024-06-09 | KRÜ         | W   | 0.948      | 0.450        | 0.034 (0.014)    | 0.324 (0.138)    | 0 (0.000) |    14.53 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           14 |      586 | 2024-06-08 | paiN        | L   | 0.942      | -            | -                | -                | -         |    -1.16 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           13 |      605 | 2024-06-08 | Sharks      | L   | 0.941      | -            | -                | -                | -         |    -7.91 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           12 |      643 | 2024-06-07 | inSanitY    | W   | 0.936      | 0.450        | 0.069 (0.029)    | 0.470 (0.198)    | 0 (0.000) |    19.93 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           11 |      909 | 2024-06-01 | Galorys     | W   | 0.894      | 0.371        | 0.026 (0.009)    | 0.535 (0.177)    | 0 (0.000) |    15.59 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           10 |      964 | 2024-05-30 | W7M         | W   | 0.882      | 0.371        | -                | 0.418 (0.137)    | -         |    10.99 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            9 |     1022 | 2024-05-28 | Corinthians | W   | 0.868      | -            | -                | -                | -         |     3.51 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            8 |     1320 | 2024-05-17 | Case        | L   | 0.794      | -            | -                | -                | -         |    -9.97 | history, leo_drk, MaLLby, r1see, rainny      |
|            7 |     1351 | 2024-05-16 | Sharks      | L   | 0.788      | -            | -                | -                | -         |    -6.97 | BALEROSTYLE, history, leo_drk, r1see, rainny |
|            6 |     1397 | 2024-05-15 | Galorys     | L   | 0.782      | -            | -                | -                | -         |   -11.20 | history, leo_drk, MaLLby, r1see, rainny      |
|            5 |     1407 | 2024-05-15 | BESTIA      | W   | 0.781      | 0.371        | 0.050 (0.014)    | 0.645 (0.186)    | -         |    15.91 | history, leo_drk, MaLLby, r1see, rainny      |
|            4 |     1459 | 2024-05-14 | W7M         | W   | 0.775      | 0.371        | -                | 0.418 (0.120)    | -         |    10.98 | history, leo_drk, MaLLby, r1see, rainny      |
|            3 |     1466 | 2024-05-14 | Case        | W   | 0.774      | 0.303        | 0.034 (0.008)    | 0.697 (0.163)    | -         |    14.11 | history, leo_drk, MaLLby, r1see, rainny      |
|            2 |     1489 | 2024-05-13 | Fluxo       | L   | 0.768      | -            | -                | -                | -         |    -3.64 | history, leo_drk, MaLLby, r1see, rainny      |
|            1 |     2148 | 2024-04-16 | Fluxo       | L   | 0.589      | -            | -                | -                | -         |    -3.32 | history, leo_drk, MaLLby, r1see, rainny      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,487.02)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
