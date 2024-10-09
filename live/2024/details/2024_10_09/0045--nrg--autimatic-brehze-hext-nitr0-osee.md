### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Global Rank: [45](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [15]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  1055.9<br />
<br />
Final Rank Value (1055.9) = Starting Rank Value (898.1) + Head To Head Adjustments (157.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.1
- 400 + ( ( 0.258 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 898.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           90 |        9 | 2024-10-08 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -14.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           89 |       15 | 2024-10-08 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -16.29 | autimatic, Brehze, HexT, nitr0, oSee |
|           88 |      170 | 2024-10-03 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -24.68 | autimatic, Brehze, HexT, nitr0, oSee |
|           87 |      248 | 2024-10-01 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -12.81 | autimatic, Brehze, HexT, nitr0, oSee |
|           86 |      253 | 2024-10-01 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -13.96 | autimatic, Brehze, HexT, nitr0, oSee |
|           85 |      383 | 2024-09-27 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -16.48 | autimatic, Brehze, HexT, nitr0, oSee |
|           84 |      388 | 2024-09-27 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.43 | autimatic, Brehze, HexT, nitr0, oSee |
|           83 |      477 | 2024-09-25 | M80              | L   | 1.000      | -            | -                | -                | -         |    -8.22 | autimatic, Brehze, HexT, nitr0, oSee |
|           82 |      482 | 2024-09-25 | M80              | W   | 1.000      | 0.477        | 0.230 (0.110)    | 0.589 (0.281)    | 0 (0.000) |    23.82 | autimatic, Brehze, HexT, nitr0, oSee |
|           81 |      534 | 2024-09-24 | timbermen        | W   | 1.000      | 0.477        | 0.030 (0.014)    | 0.534 (0.255)    | 0 (0.000) |     6.92 | autimatic, Brehze, HexT, nitr0, oSee |
|           80 |      537 | 2024-09-24 | timbermen        | W   | 1.000      | 0.477        | 0.030 (0.014)    | 0.534 (0.255)    | 0 (0.000) |     7.36 | autimatic, Brehze, HexT, nitr0, oSee |
|           79 |      613 | 2024-09-22 | Nouns            | W   | 1.000      | 0.303        | 0.062 (0.019)    | 0.614 (0.186)    | 0 (0.000) |    15.57 | autimatic, Brehze, HexT, nitr0, oSee |
|           78 |      617 | 2024-09-22 | FLUFFY AIMERS    | W   | 1.000      | 0.303        | -                | 0.516 (0.156)    | 0 (0.000) |     6.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           77 |      642 | 2024-09-21 | Party Astronauts | W   | 1.000      | 0.303        | -                | 0.522 (0.158)    | 0 (0.000) |     9.15 | autimatic, Brehze, HexT, nitr0, oSee |
|           76 |      689 | 2024-09-19 | Wildcard         | W   | 1.000      | 0.477        | 0.114 (0.054)    | 0.572 (0.273)    | 0 (0.000) |    19.95 | autimatic, Brehze, HexT, nitr0, oSee |
|           75 |      693 | 2024-09-19 | Wildcard         | W   | 1.000      | 0.477        | 0.114 (0.054)    | 0.572 (0.273)    | 0 (0.000) |    21.60 | autimatic, Brehze, HexT, nitr0, oSee |
|           74 |      722 | 2024-09-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.57 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |      725 | 2024-09-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     4.78 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |      758 | 2024-09-17 | LAG              | W   | 1.000      | -            | -                | -                | -         |     4.05 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |      759 | 2024-09-17 | LAG              | W   | 1.000      | -            | -                | -                | -         |     4.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |     1258 | 2024-08-30 | Wildcard         | L   | 0.936      | -            | -                | -                | -         |    -7.89 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |     1259 | 2024-08-30 | Nouns            | W   | 0.935      | -            | -                | -                | -         |    17.55 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |     1284 | 2024-08-29 | Wildcard         | L   | 0.930      | -            | -                | -                | -         |    -7.78 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |     1288 | 2024-08-29 | Nouns            | W   | 0.929      | -            | -                | -                | -         |    18.19 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |     1340 | 2024-08-28 | Legacy           | L   | 0.922      | -            | -                | -                | -         |   -14.40 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |     1404 | 2024-08-27 | Nouns            | L   | 0.915      | -            | -                | -                | -         |   -11.28 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |     1452 | 2024-08-26 | timbermen        | W   | 0.909      | -            | -                | -                | -         |    12.63 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |     1473 | 2024-08-26 | Akimbo           | W   | 0.908      | -            | -                | -                | -         |     1.61 | autimatic, Brehze, HexT, nitr0, oSee |
|           62 |     1785 | 2024-08-17 | Wildcard         | L   | 0.850      | -            | -                | -                | -         |    -9.45 | autimatic, Brehze, HexT, nitr0, oSee |
|           61 |     1787 | 2024-08-17 | LAG              | W   | 0.849      | -            | -                | -                | -         |     4.35 | autimatic, Brehze, HexT, nitr0, oSee |
|           60 |     1789 | 2024-08-17 | DETONATE         | W   | 0.848      | -            | -                | -                | -         |     1.56 | autimatic, Brehze, HexT, nitr0, oSee |
|           59 |     1836 | 2024-08-15 | LAG              | W   | 0.835      | -            | -                | -                | -         |     4.38 | autimatic, Brehze, HexT, nitr0, oSee |
|           58 |     1838 | 2024-08-15 | InControl        | W   | 0.835      | -            | -                | -                | -         |     3.61 | autimatic, Brehze, HexT, nitr0, oSee |
|           57 |     1946 | 2024-08-12 | Akimbo           | W   | 0.815      | -            | -                | -                | -         |     1.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           56 |     2134 | 2024-08-06 | Revenge Nation   | W   | 0.776      | -            | -                | -                | -         |     2.41 | autimatic, Brehze, HexT, nitr0, oSee |
|           55 |     2139 | 2024-08-06 | Revenge Nation   | W   | 0.776      | -            | -                | -                | -         |     2.47 | autimatic, Brehze, HexT, nitr0, oSee |
|           54 |     2194 | 2024-08-04 | timbermen        | W   | 0.764      | -            | -                | -                | -         |    12.02 | autimatic, Brehze, HexT, nitr0, oSee |
|           53 |     2199 | 2024-08-04 | Wildcard         | W   | 0.762      | 0.303        | 0.114 (0.026)    | -                | -         |    16.54 | autimatic, Brehze, HexT, nitr0, oSee |
|           52 |     2233 | 2024-08-03 | BOSS             | W   | 0.755      | -            | -                | -                | -         |     7.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           51 |     2340 | 2024-07-31 | BOSS             | W   | 0.736      | 0.477        | 0.041 (0.014)    | -                | -         |     7.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           50 |     2344 | 2024-07-31 | BOSS             | W   | 0.736      | 0.477        | 0.041 (0.014)    | -                | -         |     7.96 | autimatic, Brehze, HexT, nitr0, oSee |
|           49 |     2388 | 2024-07-30 | Party Astronauts | L   | 0.730      | -            | -                | -                | -         |   -12.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     2393 | 2024-07-30 | Party Astronauts | L   | 0.729      | -            | -                | -                | -         |   -13.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     2681 | 2024-07-21 | Wildcard         | L   | 0.670      | -            | -                | -                | -         |    -6.99 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     2685 | 2024-07-21 | Nouns            | W   | 0.668      | -            | -                | -                | -         |    13.30 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     2711 | 2024-07-20 | BOSS             | W   | 0.662      | -            | -                | -                | -         |     7.32 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     2779 | 2024-07-18 | E-Xolos LAZER    | W   | 0.650      | -            | -                | -                | -         |     5.76 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     2783 | 2024-07-18 | E-Xolos LAZER    | W   | 0.649      | -            | -                | -                | -         |     6.04 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     2845 | 2024-07-17 | Mythic           | W   | 0.643      | -            | -                | -                | -         |     4.64 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     2850 | 2024-07-17 | Mythic           | W   | 0.643      | -            | -                | -                | -         |     4.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     2907 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.636      | 0.477        | -                | 0.516 (0.156)    | -         |     5.76 | autimatic, Brehze, HexT, nitr0, oSee |
|           39 |     2912 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.636      | 0.477        | -                | 0.516 (0.156)    | -         |     6.04 | autimatic, Brehze, HexT, nitr0, oSee |
|           38 |     2962 | 2024-07-15 | Limitless        | W   | 0.629      | -            | -                | -                | -         |     6.77 | autimatic, Brehze, HexT, nitr0, oSee |
|           37 |     2965 | 2024-07-15 | Limitless        | W   | 0.629      | -            | -                | -                | -         |     7.12 | autimatic, Brehze, HexT, nitr0, oSee |
|           36 |     3423 | 2024-06-09 | M80              | W   | 0.387      | 0.143        | 0.230 (0.013)    | -                | -         |    11.19 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     3485 | 2024-06-08 | Party Astronauts | W   | 0.381      | -            | -                | -                | -         |     6.12 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     3541 | 2024-06-07 | Party Astronauts | L   | 0.374      | -            | -                | -                | -         |    -5.95 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     3584 | 2024-06-06 | Party Astronauts | L   | 0.370      | -            | -                | -                | -         |    -6.22 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     3596 | 2024-06-06 | Wildcard         | W   | 0.368      | -            | -                | -                | -         |     8.81 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     3598 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.368      | -            | -                | -                | -         |     4.14 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     3619 | 2024-06-06 | Wildcard         | L   | 0.367      | -            | -                | -                | -         |    -2.71 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     3652 | 2024-06-05 | LAG              | W   | 0.363      | -            | -                | -                | -         |     2.32 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     3664 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.361      | -            | -                | -                | -         |     4.19 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     3702 | 2024-06-04 | Nouns            | L   | 0.357      | -            | -                | -                | -         |    -2.86 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     3997 | 2024-05-23 | Nouns            | L   | 0.277      | -            | -                | -                | -         |    -2.25 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     4014 | 2024-05-22 | timbermen        | L   | 0.270      | -            | -                | -                | -         |    -2.53 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     4019 | 2024-05-22 | timbermen        | L   | 0.269      | -            | -                | -                | -         |    -2.58 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     4042 | 2024-05-22 | Legacy           | W   | 0.267      | -            | -                | -                | -         |     4.50 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     4065 | 2024-05-21 | Phoenix          | L   | 0.263      | -            | -                | -                | -         |    -6.48 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     4067 | 2024-05-21 | Phoenix          | W   | 0.263      | -            | -                | -                | -         |     1.81 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     4098 | 2024-05-20 | M80              | L   | 0.256      | -            | -                | -                | -         |    -0.67 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     4103 | 2024-05-20 | M80              | L   | 0.256      | -            | -                | -                | -         |    -0.67 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     4161 | 2024-05-18 | Nouns            | L   | 0.243      | -            | -                | -                | -         |    -2.12 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     4166 | 2024-05-18 | Party Astronauts | W   | 0.241      | -            | -                | -                | -         |     2.06 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     4200 | 2024-05-17 | BOSS             | W   | 0.235      | -            | -                | -                | -         |     2.95 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     4268 | 2024-05-15 | LAG              | W   | 0.223      | -            | -                | -                | -         |     1.28 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     4276 | 2024-05-15 | LAG              | W   | 0.223      | -            | -                | -                | -         |     1.29 | autimatic, Brehze, HexT, oSee, Walco |
|           13 |     4321 | 2024-05-14 | Take Flyte       | W   | 0.216      | -            | -                | -                | -         |     2.55 | autimatic, Brehze, HexT, oSee, Walco |
|           12 |     4327 | 2024-05-14 | Take Flyte       | W   | 0.216      | -            | -                | -                | -         |     2.59 | autimatic, Brehze, HexT, oSee, Walco |
|           11 |     4391 | 2024-05-12 | Phoenix          | W   | 0.202      | -            | -                | -                | -         |     1.46 | autimatic, Brehze, HexT, oSee, Walco |
|           10 |     4393 | 2024-05-12 | Elevate          | W   | 0.202      | -            | -                | -                | -         |     0.72 | autimatic, Brehze, HexT, oSee, Walco |
|            9 |     4423 | 2024-05-11 | Phoenix          | W   | 0.195      | -            | -                | -                | -         |     1.37 | autimatic, Brehze, HexT, oSee, Walco |
|            8 |     4425 | 2024-05-11 | BOSS             | W   | 0.194      | -            | -                | -                | -         |     2.60 | autimatic, Brehze, HexT, oSee, Walco |
|            7 |     4527 | 2024-05-06 | Party Astronauts | W   | 0.163      | -            | -                | -                | -         |     1.40 | autimatic, Brehze, HexT, oSee, Walco |
|            6 |     4528 | 2024-05-06 | Party Astronauts | L   | 0.163      | -            | -                | -                | -         |    -3.76 | autimatic, Brehze, HexT, oSee, Walco |
|            5 |     4763 | 2024-04-25 | Wildcard         | L   | 0.090      | -            | -                | -                | -         |    -0.63 | autimatic, Brehze, HexT, oSee, Walco |
|            4 |     4765 | 2024-04-25 | Wildcard         | W   | 0.089      | -            | -                | -                | -         |     2.19 | autimatic, Brehze, HexT, oSee, Walco |
|            3 |     5001 | 2024-04-17 | Akimbo           | L   | 0.035      | -            | -                | -                | -         |    -0.70 | autimatic, Brehze, HexT, oSee, Walco |
|            2 |     5060 | 2024-04-15 | Mythic           | W   | 0.022      | -            | -                | -                | -         |     0.21 | autimatic, Brehze, HexT, oSee, Walco |
|            1 |     5061 | 2024-04-15 | Mythic           | W   | 0.022      | -            | -                | -                | -         |     0.21 | autimatic, Brehze, HexT, oSee, Walco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,421.29)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-05 |      1.000 | $750.00        | $750.00         |
| 2024-09-22 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-08-18 |      0.857 | $750.00        | $642.51         |
| 2024-08-04 |      0.764 | $4,000.00      | $3,055.16       |
| 2024-07-21 |      0.670 | $1,000.00      | $669.82         |
| 2024-06-09 |      0.390 | $4,250.00      | $1,655.92       |
| 2024-05-18 |      0.243 | $1,000.00      | $243.01         |
| 2024-05-12 |      0.202 | $2,000.00      | $404.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
