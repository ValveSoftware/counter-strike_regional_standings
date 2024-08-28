### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Global Rank: [54](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_28.md)<br />
Regional Rank: [16]( ../../standings_americas_2024_08_28.md)<br />
<br />
Final Rank Value:  1013.1<br />
<br />
Final Rank Value (1013.1) = Starting Rank Value (862.3) + Head To Head Adjustments (150.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.3
- 400 + ( ( 0.233 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 862.3


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
|           80 |       50 | 2024-08-27 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -15.76 | autimatic, Brehze, HexT, nitr0, oSee |
|           79 |       98 | 2024-08-26 | Elevate          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.86 | autimatic, Brehze, HexT, nitr0, oSee |
|           78 |      119 | 2024-08-26 | Akimbo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.85 | autimatic, Brehze, HexT, nitr0, oSee |
|           77 |      431 | 2024-08-17 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -14.85 | autimatic, Brehze, HexT, nitr0, oSee |
|           76 |      433 | 2024-08-17 | LAG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.34 | autimatic, Brehze, HexT, nitr0, oSee |
|           75 |      435 | 2024-08-17 | DETONATE         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.16 | autimatic, Brehze, HexT, nitr0, oSee |
|           74 |      482 | 2024-08-15 | LAG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.47 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |      484 | 2024-08-15 | InControl        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.14 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |      592 | 2024-08-12 | Akimbo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.22 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |      780 | 2024-08-06 | Revenge Nation   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.24 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |      785 | 2024-08-06 | Revenge Nation   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |      840 | 2024-08-04 | Elevate          | W   | 1.000      | 0.303        | 0.031 (0.009)    | 0.565 (0.171)    | 0 (0.000) |    12.26 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |      845 | 2024-08-04 | Wildcard         | W   | 1.000      | 0.303        | 0.086 (0.026)    | 0.584 (0.177)    | -         |    17.86 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |      879 | 2024-08-03 | BOSS             | W   | 1.000      | -            | -                | -                | -         |     8.39 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |      986 | 2024-07-31 | BOSS             | W   | 1.000      | 0.477        | 0.015 (0.007)    | 0.370 (0.177)    | -         |     9.01 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |      990 | 2024-07-31 | BOSS             | W   | 1.000      | 0.477        | 0.015 (0.007)    | 0.370 (0.177)    | -         |     9.70 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |     1034 | 2024-07-30 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -15.68 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |     1039 | 2024-07-30 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -17.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           62 |     1327 | 2024-07-21 | Wildcard         | L   | 0.950      | -            | -                | -                | -         |   -14.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           61 |     1331 | 2024-07-21 | Nouns            | W   | 0.948      | 0.303        | 0.065 (0.019)    | 0.531 (0.152)    | -         |    13.88 | autimatic, Brehze, HexT, nitr0, oSee |
|           60 |     1357 | 2024-07-20 | BOSS             | W   | 0.942      | -            | -                | -                | -         |     9.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           59 |     1425 | 2024-07-18 | E-Xolos LAZER    | W   | 0.929      | 0.477        | -                | 0.465 (0.206)    | -         |     8.17 | autimatic, Brehze, HexT, nitr0, oSee |
|           58 |     1429 | 2024-07-18 | E-Xolos LAZER    | W   | 0.929      | 0.477        | -                | 0.465 (0.206)    | -         |     8.74 | autimatic, Brehze, HexT, nitr0, oSee |
|           57 |     1491 | 2024-07-17 | Mythic           | W   | 0.922      | 0.477        | -                | 0.292 (0.129)    | -         |     7.17 | autimatic, Brehze, HexT, nitr0, oSee |
|           56 |     1496 | 2024-07-17 | Mythic           | W   | 0.922      | -            | -                | -                | -         |     7.63 | autimatic, Brehze, HexT, nitr0, oSee |
|           55 |     1553 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.916      | 0.477        | -                | 0.422 (0.184)    | -         |     5.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           54 |     1558 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.916      | 0.477        | -                | 0.422 (0.184)    | -         |     6.15 | autimatic, Brehze, HexT, nitr0, oSee |
|           53 |     1608 | 2024-07-15 | Limitless        | W   | 0.909      | -            | -                | -                | -         |     2.58 | autimatic, Brehze, HexT, nitr0, oSee |
|           52 |     1611 | 2024-07-15 | Limitless        | W   | 0.909      | -            | -                | -                | -         |     2.65 | autimatic, Brehze, HexT, nitr0, oSee |
|           51 |     2069 | 2024-06-09 | M80              | W   | 0.667      | 0.143        | 0.196 (0.019)    | -                | -         |    17.36 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     2131 | 2024-06-08 | Party Astronauts | W   | 0.661      | -            | -                | -                | -         |    12.11 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     2187 | 2024-06-07 | Party Astronauts | L   | 0.654      | -            | -                | -                | -         |    -8.71 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     2230 | 2024-06-06 | Party Astronauts | L   | 0.649      | -            | -                | -                | -         |    -9.47 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     2242 | 2024-06-06 | Wildcard         | W   | 0.648      | 0.143        | 0.086 (0.008)    | -                | -         |    12.57 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     2244 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.648      | -            | -                | -                | -         |     5.39 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     2265 | 2024-06-06 | Wildcard         | L   | 0.647      | -            | -                | -                | -         |    -7.60 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     2298 | 2024-06-05 | LAG              | W   | 0.643      | -            | -                | -                | -         |     7.59 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     2310 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.641      | -            | -                | -                | -         |     5.62 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     2348 | 2024-06-04 | Nouns            | L   | 0.637      | -            | -                | -                | -         |    -8.17 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     2643 | 2024-05-23 | Nouns            | L   | 0.556      | -            | -                | -                | -         |    -7.52 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     2660 | 2024-05-22 | Elevate          | L   | 0.549      | -            | -                | -                | -         |    -7.17 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     2665 | 2024-05-22 | Elevate          | L   | 0.549      | -            | -                | -                | -         |    -7.51 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     2688 | 2024-05-22 | Legacy           | W   | 0.547      | 0.384        | 0.109 (0.023)    | -                | -         |     8.94 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     2711 | 2024-05-21 | Phoenix          | L   | 0.543      | -            | -                | -                | -         |   -12.68 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     2713 | 2024-05-21 | Phoenix          | W   | 0.542      | -            | -                | -                | -         |     4.40 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2744 | 2024-05-20 | M80              | L   | 0.536      | -            | -                | -                | -         |    -3.23 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     2749 | 2024-05-20 | M80              | L   | 0.536      | -            | -                | -                | -         |    -3.33 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     2807 | 2024-05-18 | Nouns            | L   | 0.523      | -            | -                | -                | -         |    -8.37 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2812 | 2024-05-18 | Party Astronauts | W   | 0.521      | -            | -                | -                | -         |     7.97 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2846 | 2024-05-17 | BOSS             | W   | 0.515      | -            | -                | -                | -         |     5.29 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2914 | 2024-05-15 | LAG              | W   | 0.503      | -            | -                | -                | -         |     5.17 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2922 | 2024-05-15 | LAG              | W   | 0.502      | -            | -                | -                | -         |     5.37 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2967 | 2024-05-14 | Take Flyte       | W   | 0.496      | -            | -                | -                | -         |     3.85 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     2973 | 2024-05-14 | Take Flyte       | W   | 0.496      | -            | -                | -                | -         |     3.98 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     3037 | 2024-05-12 | Phoenix          | W   | 0.482      | -            | -                | -                | -         |     4.44 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     3039 | 2024-05-12 | Elevate          | W   | 0.482      | -            | -                | -                | -         |     9.14 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     3069 | 2024-05-11 | Phoenix          | W   | 0.474      | -            | -                | -                | -         |     4.37 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     3071 | 2024-05-11 | BOSS             | W   | 0.474      | -            | -                | -                | -         |     5.86 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     3173 | 2024-05-06 | Party Astronauts | W   | 0.443      | 0.477        | 0.039 (0.008)    | -                | -         |     7.95 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     3174 | 2024-05-06 | Party Astronauts | L   | 0.442      | -            | -                | -                | -         |    -6.10 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     3409 | 2024-04-25 | Wildcard         | L   | 0.369      | -            | -                | -                | -         |    -4.59 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     3411 | 2024-04-25 | Wildcard         | W   | 0.369      | 0.477        | 0.086 (0.015)    | -                | -         |     7.20 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     3647 | 2024-04-17 | Akimbo           | L   | 0.315      | -            | -                | -                | -         |    -7.08 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     3706 | 2024-04-15 | Mythic           | W   | 0.302      | -            | -                | -                | -         |     3.46 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     3707 | 2024-04-15 | Mythic           | W   | 0.302      | -            | -                | -                | -         |     3.54 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     3793 | 2024-04-10 | BOSS             | W   | 0.269      | -            | -                | -                | -         |     3.60 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     3798 | 2024-04-10 | BOSS             | L   | 0.269      | -            | -                | -                | -         |    -4.96 | autimatic, Brehze, HexT, oSee, Walco |
|           13 |     3852 | 2024-04-09 | Carpe Diem       | W   | 0.263      | -            | -                | -                | -         |     2.46 | autimatic, Brehze, HexT, oSee, Walco |
|           12 |     3855 | 2024-04-09 | Carpe Diem       | W   | 0.262      | -            | -                | -                | -         |     2.51 | autimatic, Brehze, HexT, oSee, Walco |
|           11 |     4155 | 2024-03-27 | Nouns            | W   | 0.176      | -            | -                | -                | -         |     3.22 | autimatic, Brehze, HexT, oSee, Walco |
|           10 |     4160 | 2024-03-27 | Nouns            | L   | 0.176      | -            | -                | -                | -         |    -2.36 | autimatic, Brehze, HexT, oSee, Walco |
|            9 |     4207 | 2024-03-26 | MIGHT            | W   | 0.169      | -            | -                | -                | -         |     0.65 | autimatic, Brehze, HexT, oSee, Walco |
|            8 |     4212 | 2024-03-26 | MIGHT            | W   | 0.169      | -            | -                | -                | -         |     0.65 | autimatic, Brehze, HexT, oSee, Walco |
|            7 |     4378 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.096      | -            | -                | -                | -         |     0.92 | autimatic, Brehze, HexT, oSee, Walco |
|            6 |     4380 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.096      | -            | -                | -                | -         |    -2.12 | autimatic, Brehze, HexT, oSee, Walco |
|            5 |     4398 | 2024-03-14 | Limitless        | W   | 0.089      | -            | -                | -                | -         |     0.62 | autimatic, Brehze, HexT, oSee, Walco |
|            4 |     4403 | 2024-03-14 | Limitless        | W   | 0.089      | -            | -                | -                | -         |     0.62 | autimatic, Brehze, HexT, oSee, Walco |
|            3 |     4476 | 2024-03-12 | Carpe Diem       | L   | 0.076      | -            | -                | -                | -         |    -1.63 | autimatic, Brehze, HexT, oSee, Walco |
|            2 |     4731 | 2024-03-02 | MIBR             | L   | 0.007      | -            | -                | -                | -         |    -0.02 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4750 | 2024-03-01 | Imperial         | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,031.36)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $750.00        | $750.00         |
| 2024-08-04 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-07-21 |      0.950 | $1,000.00      | $949.54         |
| 2024-06-09 |      0.669 | $4,250.00      | $2,844.76       |
| 2024-05-18 |      0.523 | $1,000.00      | $522.74         |
| 2024-05-12 |      0.482 | $2,000.00      | $964.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
