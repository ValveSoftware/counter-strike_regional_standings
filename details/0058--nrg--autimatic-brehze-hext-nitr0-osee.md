### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [13]( ../standings_americas.md)<br />
Final Rank Value:  1026.5<br />
<br />
Final Rank Value (1026.5) = Starting Rank Value (859.3) + Head To Head Adjustments (167.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 859.3
- 400 + ( ( 0.227 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 859.3


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
|           74 |       82 | 2024-07-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -15.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |       86 | 2024-07-21 | Nouns            | W   | 1.000      | 0.303        | 0.073 (0.022)    | 0.589 (0.178)    | 0 (0.000) |    14.39 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |      112 | 2024-07-20 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |      180 | 2024-07-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.301 (0.143)    | 0 (0.000) |     7.57 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |      184 | 2024-07-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.301 (0.143)    | 0 (0.000) |     8.08 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |      246 | 2024-07-17 | Mythic           | W   | 1.000      | 0.477        | -                | 0.310 (0.148)    | 0 (0.000) |     7.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |      251 | 2024-07-17 | Mythic           | W   | 1.000      | 0.477        | -                | 0.310 (0.148)    | 0 (0.000) |     7.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |      308 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |      313 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.14 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |      363 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |      366 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |      824 | 2024-06-09 | M80              | W   | 0.900      | 0.143        | 0.238 (0.031)    | -                | -         |    24.88 | autimatic, Brehze, HexT, oSee, Walco |
|           62 |      886 | 2024-06-08 | Party Astronauts | W   | 0.894      | -            | -                | -                | -         |    17.20 | autimatic, Brehze, HexT, oSee, Walco |
|           61 |      942 | 2024-06-07 | Party Astronauts | L   | 0.887      | -            | -                | -                | -         |   -10.77 | autimatic, Brehze, HexT, oSee, Walco |
|           60 |      985 | 2024-06-06 | Party Astronauts | L   | 0.882      | -            | -                | -                | -         |   -12.13 | autimatic, Brehze, HexT, oSee, Walco |
|           59 |      997 | 2024-06-06 | Wildcard         | W   | 0.881      | 0.143        | 0.069 (0.009)    | -                | -         |    16.54 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |      999 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.881      | -            | -                | -                | -         |     6.21 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |     1020 | 2024-06-06 | Wildcard         | L   | 0.880      | -            | -                | -                | -         |   -10.70 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |     1053 | 2024-06-05 | LAG              | W   | 0.876      | 0.477        | 0.017 (0.007)    | 0.385 (0.161)    | -         |    11.54 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |     1065 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.874      | -            | -                | -                | -         |     6.56 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |     1103 | 2024-06-04 | Nouns            | L   | 0.869      | -            | -                | -                | -         |   -10.56 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1398 | 2024-05-23 | Nouns            | L   | 0.789      | -            | -                | -                | -         |   -10.33 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1415 | 2024-05-22 | Elevate          | L   | 0.782      | -            | -                | -                | -         |    -9.58 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1420 | 2024-05-22 | Elevate          | L   | 0.782      | -            | -                | -                | -         |   -10.23 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1443 | 2024-05-22 | Legacy           | W   | 0.780      | 0.384        | 0.150 (0.045)    | 0.540 (0.162)    | -         |    15.49 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1466 | 2024-05-21 | Perseverance     | L   | 0.775      | -            | -                | -                | -         |   -18.24 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1468 | 2024-05-21 | Perseverance     | W   | 0.775      | -            | -                | -                | -         |     6.01 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1499 | 2024-05-20 | M80              | L   | 0.769      | -            | -                | -                | -         |    -2.98 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1504 | 2024-05-20 | M80              | L   | 0.769      | -            | -                | -                | -         |    -3.07 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1562 | 2024-05-18 | Nouns            | L   | 0.756      | -            | -                | -                | -         |   -12.27 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1567 | 2024-05-18 | Party Astronauts | W   | 0.754      | 0.303        | 0.053 (0.012)    | 0.591 (0.135)    | -         |    11.74 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1601 | 2024-05-17 | BOSS             | W   | 0.748      | -            | -                | -                | -         |     7.37 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1669 | 2024-05-15 | LAG              | W   | 0.735      | -            | -                | -                | -         |     8.53 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     1677 | 2024-05-15 | LAG              | W   | 0.735      | -            | -                | -                | -         |     9.07 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     1722 | 2024-05-14 | Take Flyte       | W   | 0.729      | -            | -                | -                | -         |     5.25 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     1728 | 2024-05-14 | Take Flyte       | W   | 0.729      | -            | -                | -                | -         |     5.49 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     1792 | 2024-05-12 | Perseverance     | W   | 0.715      | -            | -                | -                | -         |     6.91 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     1794 | 2024-05-12 | Elevate          | W   | 0.715      | 0.270        | 0.035 (0.007)    | -                | -         |    14.55 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     1824 | 2024-05-11 | Perseverance     | W   | 0.707      | -            | -                | -                | -         |     6.89 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     1826 | 2024-05-11 | BOSS             | W   | 0.707      | -            | -                | -                | -         |     9.28 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     1928 | 2024-05-06 | Party Astronauts | W   | 0.675      | 0.477        | 0.053 (0.017)    | 0.591 (0.191)    | -         |    13.31 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     1929 | 2024-05-06 | Party Astronauts | L   | 0.675      | -            | -                | -                | -         |    -8.01 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2164 | 2024-04-25 | Wildcard         | L   | 0.602      | -            | -                | -                | -         |    -8.18 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2166 | 2024-04-25 | Wildcard         | W   | 0.602      | 0.477        | 0.069 (0.020)    | 0.557 (0.160)    | -         |    11.06 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2402 | 2024-04-17 | OMiT             | L   | 0.548      | -            | -                | -                | -         |   -11.20 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2461 | 2024-04-15 | Mythic           | W   | 0.535      | -            | -                | -                | -         |     6.07 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2462 | 2024-04-15 | Mythic           | W   | 0.535      | -            | -                | -                | -         |     6.34 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     2548 | 2024-04-10 | BOSS             | W   | 0.502      | -            | -                | -                | -         |     7.50 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     2553 | 2024-04-10 | BOSS             | L   | 0.502      | -            | -                | -                | -         |    -8.51 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     2607 | 2024-04-09 | Carpe Diem       | W   | 0.495      | -            | -                | -                | -         |     3.83 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     2610 | 2024-04-09 | Carpe Diem       | W   | 0.495      | -            | -                | -                | -         |     3.96 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     2910 | 2024-03-27 | Nouns            | W   | 0.409      | 0.477        | 0.073 (0.014)    | -                | -         |     7.91 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     2915 | 2024-03-27 | Nouns            | L   | 0.409      | -            | -                | -                | -         |    -5.06 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     2962 | 2024-03-26 | MIGHT            | W   | 0.402      | -            | -                | -                | -         |     1.92 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     2967 | 2024-03-26 | MIGHT            | W   | 0.402      | -            | -                | -                | -         |     1.96 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     3133 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.329      | -            | -                | -                | -         |     4.17 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     3135 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.329      | -            | -                | -                | -         |    -6.32 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     3153 | 2024-03-14 | Limitless        | W   | 0.322      | -            | -                | -                | -         |     2.44 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     3158 | 2024-03-14 | Limitless        | W   | 0.322      | -            | -                | -                | -         |     2.49 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     3231 | 2024-03-12 | Carpe Diem       | L   | 0.309      | -            | -                | -                | -         |    -7.03 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     3486 | 2024-03-02 | MIBR             | L   | 0.240      | -            | -                | -                | -         |    -0.27 | Brehze, daps, FaNg, HexT, oSee       |
|           13 |     3505 | 2024-03-01 | Imperial         | L   | 0.234      | -            | -                | -                | -         |    -0.44 | Brehze, daps, FaNg, HexT, oSee       |
|           12 |     3611 | 2024-02-24 | Wildcard         | L   | 0.196      | -            | -                | -                | -         |    -2.54 | Brehze, daps, FaNg, HexT, oSee       |
|           11 |     3614 | 2024-02-24 | Limitless        | W   | 0.195      | -            | -                | -                | -         |     1.51 | Brehze, daps, FaNg, HexT, oSee       |
|           10 |     3620 | 2024-02-24 | Mythic           | W   | 0.195      | -            | -                | -                | -         |     2.66 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     3656 | 2024-02-22 | Party Astronauts | L   | 0.182      | -            | -                | -                | -         |    -2.21 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     3660 | 2024-02-22 | Wildcard         | W   | 0.181      | -            | -                | -                | -         |     3.38 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     3708 | 2024-02-20 | Party Astronauts | L   | 0.169      | -            | -                | -                | -         |    -2.08 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     3733 | 2024-02-19 | Party Astronauts | W   | 0.163      | -            | -                | -                | -         |     3.17 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     3735 | 2024-02-19 | Mythic           | W   | 0.162      | -            | -                | -                | -         |     2.26 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     4036 | 2024-02-03 | Elevate          | L   | 0.055      | -            | -                | -                | -         |    -0.46 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     4062 | 2024-02-02 | Party Astronauts | W   | 0.049      | -            | -                | -                | -         |     0.95 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     4066 | 2024-02-02 | Wildcard         | L   | 0.048      | -            | -                | -                | -         |    -0.61 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4068 | 2024-02-02 | Party Astronauts | W   | 0.048      | -            | -                | -                | -         |     0.94 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,020.59)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      0.902 | $4,250.00      | $3,834.73       |
| 2024-05-18 |      0.756 | $1,000.00      | $755.67         |
| 2024-05-12 |      0.715 | $2,000.00      | $1,430.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
