### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, MaLLby, rainny, vinaabEAST<br />
Global Rank: [94](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
<br />
Final Rank Value:  878.3<br />
<br />
Final Rank Value (878.3) = Starting Rank Value (880.6) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 880.6
- 400 + ( ( 0.233 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 880.6


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
|           43 |       18 | 2024-07-31 | 9z Academy  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.49 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           42 |       38 | 2024-07-30 | Sharks      | L   | 1.000      | -            | -                | -                | -         |   -10.19 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           41 |      191 | 2024-07-25 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -5.17 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           40 |      195 | 2024-07-25 | inSanitY    | W   | 1.000      | 0.143        | 0.049 (0.007)    | -                | 0 (0.000) |    21.13 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           39 |      272 | 2024-07-23 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -9.95 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           38 |      285 | 2024-07-23 | Dusty Roots | L   | 1.000      | -            | -                | -                | -         |   -20.32 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           37 |      302 | 2024-07-22 | KRÜ         | L   | 1.000      | -            | -                | -                | -         |   -18.29 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           36 |      305 | 2024-07-22 | ODDIK       | W   | 1.000      | 0.333        | 0.096 (0.032)    | 0.781 (0.260)    | 0 (0.000) |    21.21 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           35 |      330 | 2024-07-21 | W7M         | W   | 1.000      | 0.333        | -                | 0.531 (0.177)    | 0 (0.000) |    13.69 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           34 |      352 | 2024-07-20 | Solid       | L   | 1.000      | -            | -                | -                | -         |   -15.74 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           33 |      357 | 2024-07-20 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -10.20 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           32 |      407 | 2024-07-19 | Sharks      | L   | 1.000      | -            | -                | -                | -         |   -12.43 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           31 |      433 | 2024-07-18 | KRÜ         | W   | 1.000      | 0.333        | 0.023 (0.008)    | -                | 0 (0.000) |    14.91 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           30 |      442 | 2024-07-18 | Case        | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.720 (0.267)    | 0 (0.000) |    15.08 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           29 |      504 | 2024-07-17 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -5.18 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           28 |      510 | 2024-07-17 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -5.45 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           27 |      560 | 2024-07-16 | KRÜ         | L   | 1.000      | -            | -                | -                | -         |   -17.69 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           26 |      565 | 2024-07-16 | KRÜ         | W   | 1.000      | 0.450        | 0.023 (0.010)    | 0.444 (0.200)    | 0 (0.000) |    13.64 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           25 |      573 | 2024-07-16 | W7M         | W   | 1.000      | 0.333        | -                | 0.531 (0.177)    | 0 (0.000) |    11.75 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           24 |      580 | 2024-07-16 | SPORT       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.44 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           23 |      610 | 2024-07-15 | Smoke       | L   | 1.000      | -            | -                | -                | -         |   -23.06 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           22 |      616 | 2024-07-15 | Smoke       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.95 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           21 |      690 | 2024-07-11 | Dusty Roots | W   | 1.000      | -            | -                | -                | -         |    11.64 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           20 |      695 | 2024-07-11 | W7M         | L   | 1.000      | -            | -                | -                | -         |   -20.06 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           19 |      717 | 2024-07-10 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -12.80 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           18 |      753 | 2024-07-08 | Galorys     | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.552 (0.205)    | -         |    11.96 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           17 |      768 | 2024-07-07 | Hawks       | W   | 1.000      | -            | -                | -                | -         |     3.67 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           16 |      955 | 2024-06-13 | ODDIK       | L   | 0.879      | -            | -                | -                | -         |   -11.97 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           15 |     1059 | 2024-06-09 | KRÜ         | W   | 0.854      | 0.450        | 0.023 (0.009)    | 0.444 (0.170)    | -         |    12.10 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           14 |     1116 | 2024-06-08 | paiN        | L   | 0.848      | -            | -                | -                | -         |    -2.03 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           13 |     1135 | 2024-06-08 | Sharks      | L   | 0.846      | -            | -                | -                | -         |    -8.89 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           12 |     1173 | 2024-06-07 | inSanitY    | W   | 0.841      | 0.450        | 0.049 (0.019)    | 0.419 (0.159)    | -         |    16.00 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           11 |     1439 | 2024-06-01 | Galorys     | W   | 0.800      | 0.371        | 0.030 (0.009)    | 0.552 (0.164)    | -         |    12.99 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           10 |     1494 | 2024-05-30 | W7M         | W   | 0.788      | -            | -                | -                | -         |     8.86 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            9 |     1552 | 2024-05-28 | Corinthians | W   | 0.773      | -            | -                | -                | -         |     2.68 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            8 |     1850 | 2024-05-17 | Case        | L   | 0.700      | -            | -                | -                | -         |   -10.09 | history, leo_drk, MaLLby, r1see, rainny      |
|            7 |     1881 | 2024-05-16 | Sharks      | L   | 0.693      | -            | -                | -                | -         |    -7.65 | BALEROSTYLE, history, leo_drk, r1see, rainny |
|            6 |     1927 | 2024-05-15 | Galorys     | L   | 0.687      | -            | -                | -                | -         |   -10.91 | history, leo_drk, MaLLby, r1see, rainny      |
|            5 |     1937 | 2024-05-15 | BESTIA      | W   | 0.686      | 0.371        | 0.093 (0.024)    | 0.731 (0.186)    | -         |    12.85 | history, leo_drk, MaLLby, r1see, rainny      |
|            4 |     1989 | 2024-05-14 | W7M         | W   | 0.680      | -            | -                | -                | -         |     8.54 | history, leo_drk, MaLLby, r1see, rainny      |
|            3 |     1996 | 2024-05-14 | Case        | W   | 0.679      | -            | -                | -                | -         |    10.97 | history, leo_drk, MaLLby, r1see, rainny      |
|            2 |     2019 | 2024-05-13 | Fluxo       | L   | 0.673      | -            | -                | -                | -         |    -4.75 | history, leo_drk, MaLLby, r1see, rainny      |
|            1 |     2678 | 2024-04-16 | Fluxo       | L   | 0.494      | -            | -                | -                | -         |    -3.99 | history, leo_drk, MaLLby, r1see, rainny      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,250.73)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-16 |      0.900 | $2,500.00      | $2,250.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
