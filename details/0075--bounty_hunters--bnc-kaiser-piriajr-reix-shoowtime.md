### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, KAISER, piriajr, reix, SHOOWTiME<br />
Global Rank: [75](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
<br />
Final Rank Value:  942.4<br />
<br />
Final Rank Value (942.4) = Starting Rank Value (900.5) + Head To Head Adjustments (41.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 900.5
- 400 + ( ( 0.242 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 900.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       45 | 2024-07-30 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.38 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           39 |      111 | 2024-07-28 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -16.21 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           38 |      116 | 2024-07-28 | Vikings KR        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.53 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           37 |      199 | 2024-07-25 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -22.10 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           36 |      205 | 2024-07-25 | SENSEI            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.28 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           35 |      211 | 2024-07-25 | Vikings KR        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.24 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           34 |      311 | 2024-07-22 | Vikings KR        | W   | 1.000      | 0.371        | -                | 0.458 (0.170)    | 0 (0.000) |    10.83 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           33 |      375 | 2024-07-20 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -2.90 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           32 |      388 | 2024-07-19 | 9z Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.39 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           31 |      430 | 2024-07-18 | Intense           | L   | 1.000      | -            | -                | -                | -         |   -26.20 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           30 |      506 | 2024-07-17 | Solid             | W   | 1.000      | 0.384        | 0.027 (0.010)    | 0.817 (0.314)    | 0 (0.000) |    10.21 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           29 |      632 | 2024-07-15 | FURIA Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.35 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           28 |      676 | 2024-07-12 | Legacy            | L   | 1.000      | -            | -                | -                | -         |   -12.05 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           27 |      691 | 2024-07-11 | Sharks            | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.558 (0.207)    | 0 (0.000) |    16.77 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           26 |      720 | 2024-07-10 | Solid             | W   | 1.000      | 0.371        | 0.027 (0.010)    | 0.817 (0.303)    | 0 (0.000) |    11.00 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           25 |      727 | 2024-07-09 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.41 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           24 |      756 | 2024-07-08 | BESTIA            | W   | 1.000      | 0.371        | 0.093 (0.034)    | 0.731 (0.271)    | 0 (0.000) |    19.34 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           23 |      779 | 2024-07-03 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.56 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           22 |      780 | 2024-07-02 | Vikings KR        | W   | 1.000      | 0.333        | -                | 0.458 (0.153)    | -         |    10.92 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           21 |      782 | 2024-07-01 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -12.08 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           20 |      794 | 2024-06-29 | Patins da Ferrari | W   | 0.986      | 0.333        | 0.012 (0.004)    | -                | -         |    10.92 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           19 |      799 | 2024-06-28 | Sharks            | W   | 0.980      | 0.278        | 0.029 (0.008)    | -                | -         |    19.23 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           18 |      804 | 2024-06-27 | W7M               | W   | 0.974      | -            | -                | -                | -         |     9.86 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           17 |      810 | 2024-06-26 | Vikings KR        | W   | 0.967      | -            | -                | -                | -         |    10.60 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           16 |     1006 | 2024-06-11 | KRÜ               | L   | 0.866      | -            | -                | -                | -         |   -15.21 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           15 |     1021 | 2024-06-10 | BESTIA            | L   | 0.860      | -            | -                | -                | -         |    -9.00 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           14 |     1056 | 2024-06-09 | inSanitY          | W   | 0.854      | 0.371        | 0.049 (0.015)    | -                | -         |    15.89 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           13 |     1064 | 2024-06-09 | inSanitY          | L   | 0.853      | -            | -                | -                | -         |   -10.96 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           12 |     1123 | 2024-06-08 | W7M               | W   | 0.847      | 0.450        | -                | 0.531 (0.203)    | -         |     8.94 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           11 |     1172 | 2024-06-07 | MIBR              | W   | 0.841      | 0.371        | 0.202 (0.063)    | 0.610 (0.190)    | -         |    25.26 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           10 |     1195 | 2024-06-07 | Fluxo             | L   | 0.839      | -            | -                | -                | -         |    -6.80 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            9 |     1228 | 2024-06-06 | Case              | W   | 0.835      | 0.371        | 0.030 (0.009)    | 0.720 (0.223)    | -         |    13.08 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            8 |     1266 | 2024-06-06 | Case              | W   | 0.832      | 0.450        | 0.030 (0.011)    | 0.720 (0.270)    | -         |    14.04 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            7 |     1412 | 2024-06-02 | Hawks             | W   | 0.806      | -            | -                | -                | -         |     3.62 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            6 |     1467 | 2024-05-31 | Intense           | L   | 0.795      | -            | -                | -                | -         |   -20.25 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            5 |     1532 | 2024-05-29 | FURIA Academy     | W   | 0.780      | -            | -                | -                | -         |     2.92 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            4 |     1568 | 2024-05-27 | inSanitY          | L   | 0.767      | -            | -                | -                | -         |   -10.36 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            3 |     2684 | 2024-04-16 | MIBR              | L   | 0.494      | -            | -                | -                | -         |    -0.68 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            2 |     2905 | 2024-04-08 | RED Canids        | L   | 0.439      | -            | -                | -                | -         |    -3.50 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            1 |     2948 | 2024-04-06 | MIBR              | L   | 0.428      | -            | -                | -                | -         |    -0.71 | bnc, KAISER, reix, SHOOWTiME, Tomate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,251.32)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-07-03 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-28 |      0.980 | $2,000.00      | $1,959.74       |
| 2024-06-10 |      0.861 | $1,500.00      | $1,291.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
