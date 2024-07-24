### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  1019.4<br />
<br />
Final Rank Value (1019.4) = Starting Rank Value (1037.7) + Head To Head Adjustments (-18.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.514[<sup>1</sup>](#table2)
- Bounty Collected: 0.474[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1037.7
- 400 + ( ( 0.315 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1037.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           93 |       26 | 2024-07-23 | Fluxo            | L   | 1.000      | -            | -                | -                | -         |    -8.65 | luchov, naz, Noktse, tomaszin, zock    |
|           92 |       30 | 2024-07-23 | Hype             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.60 | luchov, naz, Noktse, tomaszin, zock    |
|           91 |       65 | 2024-07-22 | Fluxo            | W   | 1.000      | 0.384        | 0.157 (0.060)    | 0.685 (0.263)    | 0 (0.000) |    24.34 | luchov, naz, Noktse, tomaszin, zock    |
|           90 |       90 | 2024-07-21 | RED Canids       | W   | 1.000      | 0.384        | 0.102 (0.039)    | 0.793 (0.305)    | 0 (0.000) |    24.39 | luchov, naz, Noktse, tomaszin, zock    |
|           89 |      147 | 2024-07-19 | KRÜ              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.90 | luchov, naz, Noktse, tomaszin, zock    |
|           88 |      155 | 2024-07-19 | W7M              | L   | 1.000      | -            | -                | -                | -         |   -21.83 | luchov, naz, Noktse, tomaszin, zock    |
|           87 |      206 | 2024-07-18 | Imperial         | L   | 1.000      | -            | -                | -                | -         |    -5.74 | luchov, naz, Noktse, tomaszin, zock    |
|           86 |      208 | 2024-07-18 | Amigos de T2M4SS | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.14 | luchov, naz, Noktse, tomaszin, zock    |
|           85 |      212 | 2024-07-18 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -13.73 | luchov, naz, Noktse, tomaszin, zock    |
|           84 |      260 | 2024-07-17 | Fluxo            | L   | 1.000      | -            | -                | -                | -         |    -8.50 | luchov, naz, Noktse, tomaszin, zock    |
|           83 |      266 | 2024-07-17 | Fluxo            | L   | 1.000      | -            | -                | -                | -         |    -9.13 | luchov, naz, Noktse, tomaszin, zock    |
|           82 |      278 | 2024-07-17 | Vikings KR       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.96 | luchov, naz, Noktse, tomaszin, zock    |
|           81 |      326 | 2024-07-16 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -13.72 | luchov, naz, Noktse, tomaszin, zock    |
|           80 |      330 | 2024-07-16 | ODDIK            | W   | 1.000      | 0.450        | 0.083 (0.037)    | 0.694 (0.312)    | 0 (0.000) |    17.97 | luchov, naz, Noktse, tomaszin, zock    |
|           79 |      341 | 2024-07-16 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -13.34 | luchov, naz, Noktse, tomaszin, zock    |
|           78 |      389 | 2024-07-15 | Vikings KR       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.09 | luchov, naz, Noktse, tomaszin, zock    |
|           77 |      421 | 2024-07-13 | Intense          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.67 | luchov, naz, Noktse, tomaszin, zock    |
|           76 |      433 | 2024-07-12 | SPORT            | L   | 1.000      | -            | -                | -                | -         |   -26.24 | luchov, naz, Noktse, tomaszin, zock    |
|           75 |      464 | 2024-07-10 | Sharks           | L   | 1.000      | -            | -                | -                | -         |   -17.14 | luchov, naz, Noktse, tomaszin, zock    |
|           74 |      490 | 2024-07-09 | SPORT            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.30 | luchov, naz, Noktse, tomaszin, zock    |
|           73 |      507 | 2024-07-08 | Intense          | W   | 1.000      | -            | -                | -                | -         |     3.03 | luchov, naz, Noktse, tomaszin, zock    |
|           72 |      514 | 2024-07-08 | Bounty Hunters   | L   | 1.000      | -            | -                | -                | -         |   -19.70 | luchov, naz, Noktse, tomaszin, zock    |
|           71 |      647 | 2024-06-15 | 9z               | L   | 0.939      | -            | -                | -                | -         |    -2.39 | luchov, meyern, naz, Noktse, tomaszin  |
|           70 |      678 | 2024-06-14 | paiN             | L   | 0.933      | -            | -                | -                | -         |    -3.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           69 |      777 | 2024-06-10 | paiN             | L   | 0.908      | -            | -                | -                | -         |    -3.77 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |      779 | 2024-06-10 | Bounty Hunters   | W   | 0.907      | -            | -                | -                | -         |     9.20 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |      811 | 2024-06-09 | RED Canids       | W   | 0.902      | 0.371        | 0.102 (0.034)    | 0.793 (0.265)    | -         |    19.82 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |      834 | 2024-06-09 | Sharks           | L   | 0.899      | -            | -                | -                | -         |   -13.73 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |      878 | 2024-06-08 | Solid            | W   | 0.895      | 0.371        | -                | 0.791 (0.262)    | -         |     8.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |      897 | 2024-06-08 | Vikings KR       | L   | 0.893      | -            | -                | -                | -         |   -22.66 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |      938 | 2024-06-07 | ODDIK            | W   | 0.887      | 0.450        | -                | 0.694 (0.277)    | -         |     9.22 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |      998 | 2024-06-06 | inSanitY         | L   | 0.881      | -            | -                | -                | -         |   -17.27 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |     1061 | 2024-06-05 | MIBR             | L   | 0.875      | -            | -                | -                | -         |    -2.50 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |     1111 | 2024-06-04 | Sharks           | L   | 0.869      | -            | -                | -                | -         |   -15.53 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |     1427 | 2024-05-22 | Case             | W   | 0.781      | 0.450        | -                | 0.751 (0.264)    | -         |     7.14 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |     1431 | 2024-05-22 | Case             | W   | 0.781      | 0.450        | -                | 0.751 (0.264)    | -         |     7.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |     1437 | 2024-05-22 | Fluxo            | W   | 0.781      | 0.450        | 0.157 (0.055)    | 0.685 (0.240)    | -         |    13.74 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |     1438 | 2024-05-22 | Fluxo            | W   | 0.780      | 0.450        | 0.157 (0.055)    | -                | -         |    14.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |     1472 | 2024-05-21 | Smoke            | W   | 0.775      | -            | -                | -                | -         |     3.23 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |     1475 | 2024-05-21 | Smoke            | W   | 0.774      | -            | -                | -                | -         |     3.33 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |     1481 | 2024-05-21 | Imperial         | W   | 0.774      | 0.450        | 0.317 (0.111)    | -                | -         |    20.79 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |     1483 | 2024-05-21 | Imperial         | W   | 0.774      | 0.450        | 0.317 (0.111)    | -                | -         |    21.45 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |     1511 | 2024-05-20 | Corinthians      | W   | 0.768      | -            | -                | -                | -         |     1.39 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |     1516 | 2024-05-20 | 9z               | W   | 0.767      | 0.450        | 0.511 (0.176)    | -                | -         |    23.02 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |     1518 | 2024-05-20 | 9z               | L   | 0.767      | -            | -                | -                | -         |    -1.05 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |     1598 | 2024-05-17 | Solid            | L   | 0.748      | -            | -                | -                | -         |   -14.71 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |     1600 | 2024-05-17 | Solid            | W   | 0.748      | 0.450        | -                | 0.791 (0.266)    | -         |     8.86 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1684 | 2024-05-15 | ODDIK            | W   | 0.734      | -            | -                | -                | -         |    11.28 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |     1686 | 2024-05-15 | ODDIK            | W   | 0.734      | -            | -                | -                | -         |    12.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |     1695 | 2024-05-15 | Hype             | L   | 0.733      | -            | -                | -                | -         |   -13.85 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |     1743 | 2024-05-14 | Imperial         | L   | 0.728      | -            | -                | -                | -         |    -2.55 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1756 | 2024-05-14 | RED Canids       | L   | 0.727      | -            | -                | -                | -         |    -7.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     1796 | 2024-05-12 | Solid            | W   | 0.714      | -            | -                | -                | -         |     8.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     1803 | 2024-05-12 | O PLANO          | W   | 0.713      | -            | -                | -                | -         |     1.81 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     1827 | 2024-05-11 | paiN             | L   | 0.707      | -            | -                | -                | -         |    -1.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     1853 | 2024-05-10 | Imperial         | W   | 0.700      | 0.435        | 0.317 (0.097)    | -                | -         |    19.89 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     1869 | 2024-05-09 | Sharks           | W   | 0.695      | -            | -                | -                | -         |    12.14 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     1898 | 2024-05-08 | Vikings KR       | W   | 0.687      | -            | -                | -                | -         |     7.83 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     1930 | 2024-05-06 | Sharks           | L   | 0.675      | -            | -                | -                | -         |    -9.34 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     2168 | 2024-04-25 | RED Canids       | L   | 0.601      | -            | -                | -                | -         |    -5.02 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     2170 | 2024-04-25 | RED Canids       | L   | 0.601      | -            | -                | -                | -         |    -5.24 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     2435 | 2024-04-16 | O PLANO          | L   | 0.542      | -            | -                | -                | -         |   -15.71 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     2532 | 2024-04-11 | Galorys          | L   | 0.507      | -            | -                | -                | -         |   -10.11 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     2614 | 2024-04-09 | Galorys          | L   | 0.495      | -            | -                | -                | -         |   -10.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     2619 | 2024-04-09 | Galorys          | W   | 0.494      | -            | -                | -                | -         |     5.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     2655 | 2024-04-08 | RED Canids       | L   | 0.488      | -            | -                | -                | -         |    -5.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     2698 | 2024-04-07 | Sharks           | L   | 0.479      | -            | -                | -                | -         |   -11.77 | luchov, meyern, naz, Noktse, tomaszin  |
|           26 |     2705 | 2024-04-06 | Fluxo            | W   | 0.475      | -            | -                | -                | -         |     9.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           25 |     2744 | 2024-04-04 | adalYamigos      | L   | 0.462      | -            | -                | -                | -         |   -12.89 | luchov, meyern, naz, Noktse, tomaszin  |
|           24 |     2748 | 2024-04-04 | adalYamigos      | W   | 0.461      | -            | -                | -                | -         |     1.63 | luchov, meyern, naz, Noktse, tomaszin  |
|           23 |     2760 | 2024-04-04 | Imperial         | L   | 0.461      | -            | -                | -                | -         |    -1.73 | luchov, meyern, naz, Noktse, tomaszin  |
|           22 |     2797 | 2024-04-03 | Fluxo            | L   | 0.454      | -            | -                | -                | -         |    -5.96 | luchov, meyern, naz, Noktse, tomaszin  |
|           21 |     2833 | 2024-04-02 | Sharks           | W   | 0.449      | -            | -                | -                | -         |     2.83 | luchov, meyern, naz, Noktse, tomaszin  |
|           20 |     2838 | 2024-04-02 | Fluxo            | L   | 0.447      | -            | -                | -                | -         |    -6.02 | luchov, meyern, naz, Noktse, tomaszin  |
|           19 |     2926 | 2024-03-27 | W7M              | L   | 0.408      | -            | -                | -                | -         |    -9.65 | luchov, meyern, naz, Noktse, tomaszin  |
|           18 |     2931 | 2024-03-27 | W7M              | W   | 0.408      | -            | -                | -                | -         |     3.23 | luchov, meyern, naz, Noktse, tomaszin  |
|           17 |     3241 | 2024-03-12 | RED Canids       | L   | 0.307      | -            | -                | -                | -         |    -3.68 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     3251 | 2024-03-11 | FURIA Academy    | W   | 0.302      | -            | -                | -                | -         |     0.54 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3274 | 2024-03-10 | adalYamigos      | L   | 0.295      | -            | -                | -                | -         |    -8.41 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3322 | 2024-03-08 | FURIA Academy    | W   | 0.282      | -            | -                | -                | -         |     0.48 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3487 | 2024-03-02 | Wildcard         | L   | 0.240      | -            | -                | -                | -         |    -4.92 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3504 | 2024-03-01 | Liquid           | L   | 0.235      | -            | -                | -                | -         |    -0.70 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3628 | 2024-02-24 | Imperial         | L   | 0.194      | -            | -                | -                | -         |    -0.87 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3647 | 2024-02-23 | 9z               | L   | 0.187      | -            | -                | -                | -         |    -0.22 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3655 | 2024-02-22 | Imperial         | W   | 0.182      | -            | -                | -                | -         |     4.94 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3664 | 2024-02-22 | 9z               | L   | 0.181      | -            | -                | -                | -         |    -0.21 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3689 | 2024-02-21 | W7M              | W   | 0.173      | -            | -                | -                | -         |     1.42 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3764 | 2024-02-18 | FURIA Academy    | W   | 0.153      | -            | -                | -                | -         |     0.26 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3804 | 2024-02-16 | Case             | L   | 0.142      | -            | -                | -                | -         |    -2.81 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     3926 | 2024-02-12 | FURIA Academy    | W   | 0.115      | -            | -                | -                | -         |     0.19 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     4061 | 2024-02-02 | Imperial         | L   | 0.049      | -            | -                | -                | -         |    -0.22 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     4063 | 2024-02-02 | ODDIK            | W   | 0.049      | -            | -                | -                | -         |     0.69 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     4067 | 2024-02-02 | Imperial         | L   | 0.048      | -            | -                | -                | -         |    -0.21 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,435.31)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-16 |      0.949 | $1,500.00      | $1,422.83       |
| 2024-06-10 |      0.908 | $4,000.00      | $3,633.37       |
| 2024-06-09 |      0.901 | $2,000.00      | $1,802.45       |
| 2024-05-12 |      0.714 | $5,000.00      | $3,572.41       |
| 2024-02-25 |      0.201 | $5,000.00      | $1,004.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
