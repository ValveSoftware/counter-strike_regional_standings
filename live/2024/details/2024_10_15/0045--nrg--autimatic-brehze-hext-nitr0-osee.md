### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Global Rank: [45](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [15]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  1056.0<br />
<br />
Final Rank Value (1056.0) = Starting Rank Value (895.4) + Head To Head Adjustments (160.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.408[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.4
- 400 + ( ( 0.255 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 895.4


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
|           87 |      106 | 2024-10-08 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -14.88 | autimatic, Brehze, HexT, nitr0, oSee |
|           86 |      112 | 2024-10-08 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -16.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           85 |      267 | 2024-10-03 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -24.17 | autimatic, Brehze, HexT, nitr0, oSee |
|           84 |      345 | 2024-10-01 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -12.81 | autimatic, Brehze, HexT, nitr0, oSee |
|           83 |      350 | 2024-10-01 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -13.97 | autimatic, Brehze, HexT, nitr0, oSee |
|           82 |      480 | 2024-09-27 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -16.47 | autimatic, Brehze, HexT, nitr0, oSee |
|           81 |      485 | 2024-09-27 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           80 |      574 | 2024-09-25 | M80              | L   | 1.000      | -            | -                | -                | -         |    -8.65 | autimatic, Brehze, HexT, nitr0, oSee |
|           79 |      579 | 2024-09-25 | M80              | W   | 1.000      | 0.477        | 0.216 (0.103)    | 0.601 (0.287)    | 0 (0.000) |    23.38 | autimatic, Brehze, HexT, nitr0, oSee |
|           78 |      631 | 2024-09-24 | timbermen        | W   | 1.000      | 0.477        | 0.028 (0.013)    | 0.519 (0.247)    | 0 (0.000) |     7.07 | autimatic, Brehze, HexT, nitr0, oSee |
|           77 |      634 | 2024-09-24 | timbermen        | W   | 1.000      | 0.477        | 0.028 (0.013)    | 0.519 (0.247)    | 0 (0.000) |     7.53 | autimatic, Brehze, HexT, nitr0, oSee |
|           76 |      710 | 2024-09-22 | Nouns            | W   | 1.000      | 0.303        | 0.057 (0.017)    | 0.635 (0.192)    | 0 (0.000) |    15.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           75 |      714 | 2024-09-22 | FLUFFY AIMERS    | W   | 1.000      | 0.303        | -                | 0.536 (0.162)    | 0 (0.000) |     6.95 | autimatic, Brehze, HexT, nitr0, oSee |
|           74 |      739 | 2024-09-21 | Party Astronauts | W   | 1.000      | 0.303        | -                | 0.515 (0.156)    | 0 (0.000) |     9.02 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |      786 | 2024-09-19 | Wildcard         | W   | 1.000      | 0.477        | 0.109 (0.052)    | 0.563 (0.268)    | 0 (0.000) |    19.82 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |      790 | 2024-09-19 | Wildcard         | W   | 1.000      | 0.477        | 0.109 (0.052)    | 0.563 (0.268)    | 0 (0.000) |    21.47 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |      819 | 2024-09-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.89 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |      822 | 2024-09-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     5.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |      855 | 2024-09-17 | LAG              | W   | 1.000      | -            | -                | -                | -         |     4.40 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |      856 | 2024-09-17 | LAG              | W   | 1.000      | -            | -                | -                | -         |     4.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |     1355 | 2024-08-30 | Wildcard         | L   | 0.897      | -            | -                | -                | -         |    -7.67 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |     1356 | 2024-08-30 | Nouns            | W   | 0.896      | -            | -                | -                | -         |    16.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |     1381 | 2024-08-29 | Wildcard         | L   | 0.890      | -            | -                | -                | -         |    -7.58 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |     1385 | 2024-08-29 | Nouns            | W   | 0.889      | -            | -                | -                | -         |    17.31 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |     1437 | 2024-08-28 | Legacy           | L   | 0.882      | -            | -                | -                | -         |   -14.02 | autimatic, Brehze, HexT, nitr0, oSee |
|           62 |     1501 | 2024-08-27 | Nouns            | L   | 0.875      | -            | -                | -                | -         |   -10.93 | autimatic, Brehze, HexT, nitr0, oSee |
|           61 |     1549 | 2024-08-26 | timbermen        | W   | 0.869      | -            | -                | -                | -         |    12.08 | autimatic, Brehze, HexT, nitr0, oSee |
|           60 |     1570 | 2024-08-26 | Akimbo           | W   | 0.868      | -            | -                | -                | -         |     1.57 | autimatic, Brehze, HexT, nitr0, oSee |
|           59 |     1882 | 2024-08-17 | Wildcard         | L   | 0.810      | -            | -                | -                | -         |    -9.05 | autimatic, Brehze, HexT, nitr0, oSee |
|           58 |     1884 | 2024-08-17 | LAG              | W   | 0.809      | -            | -                | -                | -         |     4.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           57 |     1886 | 2024-08-17 | DETONATE         | W   | 0.809      | -            | -                | -                | -         |     1.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           56 |     1933 | 2024-08-15 | LAG              | W   | 0.796      | -            | -                | -                | -         |     4.55 | autimatic, Brehze, HexT, nitr0, oSee |
|           55 |     1935 | 2024-08-15 | InControl        | W   | 0.796      | -            | -                | -                | -         |     3.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           54 |     2043 | 2024-08-12 | Akimbo           | W   | 0.776      | -            | -                | -                | -         |     1.48 | autimatic, Brehze, HexT, nitr0, oSee |
|           53 |     2231 | 2024-08-06 | Revenge Nation   | W   | 0.736      | -            | -                | -                | -         |     4.89 | autimatic, Brehze, HexT, nitr0, oSee |
|           52 |     2236 | 2024-08-06 | Revenge Nation   | W   | 0.736      | -            | -                | -                | -         |     5.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           51 |     2291 | 2024-08-04 | timbermen        | W   | 0.724      | -            | -                | -                | -         |    11.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           50 |     2296 | 2024-08-04 | Wildcard         | W   | 0.722      | 0.303        | 0.109 (0.024)    | -                | -         |    15.79 | autimatic, Brehze, HexT, nitr0, oSee |
|           49 |     2330 | 2024-08-03 | BOSS             | W   | 0.716      | -            | -                | -                | -         |     7.56 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     2437 | 2024-07-31 | BOSS             | W   | 0.697      | 0.477        | 0.039 (0.013)    | -                | -         |     7.79 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     2441 | 2024-07-31 | BOSS             | W   | 0.696      | 0.477        | 0.039 (0.013)    | -                | -         |     8.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     2485 | 2024-07-30 | Party Astronauts | L   | 0.690      | -            | -                | -                | -         |   -11.66 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     2490 | 2024-07-30 | Party Astronauts | L   | 0.690      | -            | -                | -                | -         |   -12.39 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     2778 | 2024-07-21 | Wildcard         | L   | 0.630      | -            | -                | -                | -         |    -6.42 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     2782 | 2024-07-21 | Nouns            | W   | 0.628      | 0.303        | 0.057 (0.011)    | -                | -         |    12.55 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     2808 | 2024-07-20 | BOSS             | W   | 0.622      | -            | -                | -                | -         |     7.58 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     2876 | 2024-07-18 | E-Xolos LAZER    | W   | 0.610      | -            | -                | -                | -         |     5.46 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     2880 | 2024-07-18 | E-Xolos LAZER    | W   | 0.610      | -            | -                | -                | -         |     5.71 | autimatic, Brehze, HexT, nitr0, oSee |
|           39 |     2942 | 2024-07-17 | Mythic           | W   | 0.603      | -            | -                | -                | -         |     4.42 | autimatic, Brehze, HexT, nitr0, oSee |
|           38 |     2947 | 2024-07-17 | Mythic           | W   | 0.603      | -            | -                | -                | -         |     4.60 | autimatic, Brehze, HexT, nitr0, oSee |
|           37 |     3004 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.597      | 0.477        | -                | 0.536 (0.152)    | -         |     5.58 | autimatic, Brehze, HexT, nitr0, oSee |
|           36 |     3009 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.596      | 0.477        | -                | 0.536 (0.152)    | -         |     5.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           35 |     3059 | 2024-07-15 | Limitless        | W   | 0.590      | -            | -                | -                | -         |     7.29 | autimatic, Brehze, HexT, nitr0, oSee |
|           34 |     3062 | 2024-07-15 | Limitless        | W   | 0.590      | -            | -                | -                | -         |     7.67 | autimatic, Brehze, HexT, nitr0, oSee |
|           33 |     3520 | 2024-06-09 | M80              | W   | 0.348      | -            | -                | -                | -         |     9.99 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     3582 | 2024-06-08 | Party Astronauts | W   | 0.341      | -            | -                | -                | -         |     5.41 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     3638 | 2024-06-07 | Party Astronauts | L   | 0.335      | -            | -                | -                | -         |    -5.39 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     3681 | 2024-06-06 | Party Astronauts | L   | 0.330      | -            | -                | -                | -         |    -5.59 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     3693 | 2024-06-06 | Wildcard         | W   | 0.329      | -            | -                | -                | -         |     7.90 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     3695 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.328      | -            | -                | -                | -         |     3.77 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     3716 | 2024-06-06 | Wildcard         | L   | 0.327      | -            | -                | -                | -         |    -2.39 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     3749 | 2024-06-05 | LAG              | W   | 0.323      | -            | -                | -                | -         |     2.05 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     3761 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.322      | -            | -                | -                | -         |     3.79 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     3799 | 2024-06-04 | Nouns            | L   | 0.317      | -            | -                | -                | -         |    -2.59 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     4094 | 2024-05-23 | Nouns            | L   | 0.237      | -            | -                | -                | -         |    -1.96 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     4111 | 2024-05-22 | timbermen        | L   | 0.230      | -            | -                | -                | -         |    -2.20 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     4116 | 2024-05-22 | timbermen        | L   | 0.230      | -            | -                | -                | -         |    -2.24 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     4139 | 2024-05-22 | Legacy           | W   | 0.228      | -            | -                | -                | -         |     3.86 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     4162 | 2024-05-21 | Phoenix          | L   | 0.223      | -            | -                | -                | -         |    -5.50 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     4164 | 2024-05-21 | Phoenix          | W   | 0.223      | -            | -                | -                | -         |     1.54 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     4195 | 2024-05-20 | M80              | L   | 0.217      | -            | -                | -                | -         |    -0.60 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     4200 | 2024-05-20 | M80              | L   | 0.216      | -            | -                | -                | -         |    -0.60 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     4258 | 2024-05-18 | Nouns            | L   | 0.203      | -            | -                | -                | -         |    -1.79 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     4263 | 2024-05-18 | Party Astronauts | W   | 0.202      | -            | -                | -                | -         |     1.65 | autimatic, Brehze, HexT, oSee, Walco |
|           13 |     4297 | 2024-05-17 | BOSS             | W   | 0.196      | -            | -                | -                | -         |     2.73 | autimatic, Brehze, HexT, oSee, Walco |
|           12 |     4365 | 2024-05-15 | LAG              | W   | 0.183      | -            | -                | -                | -         |     1.06 | autimatic, Brehze, HexT, oSee, Walco |
|           11 |     4373 | 2024-05-15 | LAG              | W   | 0.183      | -            | -                | -                | -         |     1.07 | autimatic, Brehze, HexT, oSee, Walco |
|           10 |     4418 | 2024-05-14 | Take Flyte       | W   | 0.176      | -            | -                | -                | -         |     2.18 | autimatic, Brehze, HexT, oSee, Walco |
|            9 |     4424 | 2024-05-14 | Take Flyte       | W   | 0.176      | -            | -                | -                | -         |     2.21 | autimatic, Brehze, HexT, oSee, Walco |
|            8 |     4488 | 2024-05-12 | Phoenix          | W   | 0.163      | -            | -                | -                | -         |     1.16 | autimatic, Brehze, HexT, oSee, Walco |
|            7 |     4490 | 2024-05-12 | Elevate          | W   | 0.162      | -            | -                | -                | -         |     0.57 | autimatic, Brehze, HexT, oSee, Walco |
|            6 |     4520 | 2024-05-11 | Phoenix          | W   | 0.155      | -            | -                | -                | -         |     1.09 | autimatic, Brehze, HexT, oSee, Walco |
|            5 |     4522 | 2024-05-11 | BOSS             | W   | 0.155      | -            | -                | -                | -         |     2.27 | autimatic, Brehze, HexT, oSee, Walco |
|            4 |     4624 | 2024-05-06 | Party Astronauts | W   | 0.123      | -            | -                | -                | -         |     1.01 | autimatic, Brehze, HexT, oSee, Walco |
|            3 |     4625 | 2024-05-06 | Party Astronauts | L   | 0.123      | -            | -                | -                | -         |    -2.89 | autimatic, Brehze, HexT, oSee, Walco |
|            2 |     4860 | 2024-04-25 | Wildcard         | L   | 0.050      | -            | -                | -                | -         |    -0.35 | autimatic, Brehze, HexT, oSee, Walco |
|            1 |     4862 | 2024-04-25 | Wildcard         | W   | 0.050      | -            | -                | -                | -         |     1.22 | autimatic, Brehze, HexT, oSee, Walco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,906.22)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-05 |      1.000 | $750.00        | $750.00         |
| 2024-09-22 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-08-18 |      0.817 | $750.00        | $612.79         |
| 2024-08-04 |      0.724 | $4,000.00      | $2,896.68       |
| 2024-07-21 |      0.630 | $1,000.00      | $630.20         |
| 2024-06-09 |      0.350 | $4,250.00      | $1,487.53       |
| 2024-05-18 |      0.203 | $1,000.00      | $203.39         |
| 2024-05-12 |      0.163 | $2,000.00      | $325.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
