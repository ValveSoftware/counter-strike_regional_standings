### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, MaLLby, rainny, vinaabEAST<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  848.0<br />
<br />
Final Rank Value (848.0) = Starting Rank Value (780.1) + Head To Head Adjustments (67.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 780.1
- 400 + ( ( 0.187 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 780.1


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
|           16 |      125 | 2024-06-13 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -11.95 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           15 |      229 | 2024-06-09 | KRÜ         | W   | 1.000      | 0.450        | 0.024 (0.011)    | 0.150 (0.068)    | 0 (0.000) |    13.87 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           14 |      286 | 2024-06-08 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -0.98 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           13 |      305 | 2024-06-08 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -7.13 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           12 |      343 | 2024-06-07 | inSanitY    | W   | 1.000      | 0.450        | 0.020 (0.009)    | 0.315 (0.142)    | 0 (0.000) |    19.40 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           11 |      611 | 2024-06-01 | Galorys     | W   | 1.000      | 0.384        | 0.023 (0.009)    | 0.517 (0.199)    | 0 (0.000) |    17.73 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           10 |      666 | 2024-05-30 | W7M         | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.364 (0.140)    | 0 (0.000) |    12.80 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            9 |      724 | 2024-05-28 | Corinthians | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.191 (0.073)    | 0 (0.000) |    10.05 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            8 |     1022 | 2024-05-17 | Case        | L   | 0.989      | -            | -                | -                | -         |   -11.92 | history, leo_drk, MaLLby, r1see, rainny      |
|            7 |     1053 | 2024-05-16 | Sharks      | L   | 0.983      | -            | -                | -                | -         |    -7.02 | BALEROSTYLE, history, leo_drk, r1see, rainny |
|            6 |     1099 | 2024-05-15 | Galorys     | L   | 0.977      | -            | -                | -                | -         |   -13.24 | history, leo_drk, MaLLby, r1see, rainny      |
|            5 |     1109 | 2024-05-15 | BESTIA      | W   | 0.976      | 0.371        | 0.052 (0.019)    | 0.594 (0.215)    | 0 (0.000) |    20.84 | history, leo_drk, MaLLby, r1see, rainny      |
|            4 |     1161 | 2024-05-14 | W7M         | W   | 0.970      | 0.371        | 0.001 (0.000)    | 0.364 (0.131)    | 0 (0.000) |    14.74 | history, leo_drk, MaLLby, r1see, rainny      |
|            3 |     1168 | 2024-05-14 | Case        | W   | 0.969      | 0.303        | 0.026 (0.008)    | 0.579 (0.170)    | 0 (0.000) |    17.34 | history, leo_drk, MaLLby, r1see, rainny      |
|            2 |     1191 | 2024-05-13 | Fluxo       | L   | 0.963      | -            | -                | -                | -         |    -3.30 | history, leo_drk, MaLLby, r1see, rainny      |
|            1 |     1850 | 2024-04-16 | Fluxo       | L   | 0.784      | -            | -                | -                | -         |    -3.31 | history, leo_drk, MaLLby, r1see, rainny      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
