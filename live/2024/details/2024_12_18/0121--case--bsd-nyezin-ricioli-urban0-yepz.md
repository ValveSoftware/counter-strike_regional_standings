### Roster Details<br />
Team Name: Case<br />
Roster: bsd, nyezin, RICIOLI, urban0, yepz<br />
Global Rank: [121](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [29]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  804.6<br />
<br />
Final Rank Value (804.6) = Starting Rank Value (777.6) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.6
- 400 + ( ( 0.197 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 777.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |      729 | 2024-11-13 | RED Canids        | L   | 0.965      | -            | -                | -                | -         |    -5.49 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           73 |      760 | 2024-11-12 | FURIA             | L   | 0.958      | -            | -                | -                | -         |    -0.37 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           72 |      769 | 2024-11-12 | Imperial          | L   | 0.957      | -            | -                | -                | -         |    -3.12 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           71 |     1411 | 2024-10-09 | Hype              | W   | 0.735      | 0.450        | 0.006 (0.002)    | 0.283 (0.094)    | 0 (0.000) |    11.52 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           70 |     1417 | 2024-10-09 | Hype              | L   | 0.735      | -            | -                | -                | -         |   -11.83 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           69 |     1448 | 2024-10-08 | Sharks            | L   | 0.728      | -            | -                | -                | -         |    -3.40 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           68 |     1454 | 2024-10-08 | Sharks            | L   | 0.728      | -            | -                | -                | -         |    -3.51 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           67 |     1646 | 2024-10-02 | BESTIA            | L   | 0.687      | -            | -                | -                | -         |    -4.21 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           66 |     1653 | 2024-10-02 | BESTIA            | L   | 0.687      | -            | -                | -                | -         |    -4.38 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           65 |     1681 | 2024-10-01 | MIBR              | L   | 0.682      | -            | -                | -                | -         |    -0.63 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           64 |     1684 | 2024-10-01 | MIBR              | W   | 0.682      | 0.450        | 0.184 (0.056)    | 0.681 (0.209)    | 0 (0.000) |    20.93 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           63 |     1806 | 2024-09-27 | Solid             | L   | 0.655      | -            | -                | -                | -         |    -7.07 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           62 |     1816 | 2024-09-27 | Bad News Chickens | W   | 0.655      | -            | -                | -                | 0 (0.000) |     7.04 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           61 |     1859 | 2024-09-26 | Vikings KR        | W   | 0.648      | -            | -                | -                | 0 (0.000) |     7.51 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           60 |     1927 | 2024-09-25 | Dusty Roots       | W   | 0.640      | 0.450        | -                | 0.365 (0.105)    | 0 (0.000) |    10.57 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           59 |     1929 | 2024-09-25 | Dusty Roots       | L   | 0.640      | -            | -                | -                | -         |    -9.79 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           58 |     1964 | 2024-09-24 | Galorys           | W   | 0.635      | 0.450        | -                | 0.127 (0.036)    | 0 (0.000) |     7.66 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           57 |     1973 | 2024-09-24 | Galorys           | L   | 0.635      | -            | -                | -                | -         |   -12.66 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           56 |     2657 | 2024-09-01 | Galorys           | L   | 0.480      | -            | -                | -                | -         |    -9.83 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           55 |     2840 | 2024-08-27 | W7M               | W   | 0.446      | -            | -                | -                | 0 (0.000) |     4.74 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           54 |     2889 | 2024-08-26 | Solid             | W   | 0.441      | 0.143        | 0.027 (0.002)    | 0.574 (0.036)    | 0 (0.000) |     8.93 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           53 |     2922 | 2024-08-26 | RED Canids        | W   | 0.439      | 0.143        | 0.067 (0.004)    | -                | 0 (0.000) |    11.85 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           52 |     3067 | 2024-08-21 | inSanitY          | L   | 0.408      | -            | -                | -                | -         |    -6.18 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           51 |     3071 | 2024-08-21 | inSanitY          | L   | 0.408      | -            | -                | -                | -         |    -6.40 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           50 |     3246 | 2024-08-16 | Sharks            | L   | 0.374      | -            | -                | -                | -         |    -1.28 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           49 |     3258 | 2024-08-15 | Bounty Hunters    | W   | 0.368      | -            | -                | -                | 1 (0.368) |     4.39 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           48 |     3298 | 2024-08-14 | Sharks            | L   | 0.361      | -            | -                | -                | -         |    -1.17 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           47 |     3317 | 2024-08-13 | ODDIK             | L   | 0.355      | -            | -                | -                | -         |    -2.73 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           46 |     3323 | 2024-08-13 | ODDIK             | W   | 0.355      | 0.450        | 0.094 (0.015)    | 0.495 (0.079)    | -         |     8.59 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           45 |     3367 | 2024-08-12 | Patins da Ferrari | L   | 0.348      | -            | -                | -                | -         |    -7.60 | betinho, nyezin, RICIOLI, urban0, yepz |
|           44 |     3407 | 2024-08-11 | BESTIA            | L   | 0.340      | -            | -                | -                | -         |    -2.47 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           43 |     3457 | 2024-08-09 | KRÜ               | W   | 0.327      | -            | -                | -                | -         |     5.22 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           42 |     3509 | 2024-08-07 | RED Canids        | L   | 0.315      | -            | -                | -                | -         |    -1.41 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           41 |     3511 | 2024-08-07 | RED Canids        | L   | 0.315      | -            | -                | -                | -         |    -1.43 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           40 |     3564 | 2024-08-06 | Dusty Roots       | W   | 0.308      | 0.333        | -                | 0.365 (0.038)    | -         |     5.46 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           39 |     3689 | 2024-08-02 | BESTIA            | L   | 0.282      | -            | -                | -                | -         |    -1.97 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           38 |     3692 | 2024-08-02 | inSanitY          | W   | 0.281      | -            | -                | -                | -         |     4.47 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           37 |     3721 | 2024-08-01 | ODDIK             | L   | 0.275      | -            | -                | -                | -         |    -2.27 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           36 |     3731 | 2024-08-01 | Bad News Chickens | W   | 0.275      | -            | -                | -                | -         |     2.96 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           35 |     3771 | 2024-07-31 | Legacy            | L   | 0.269      | -            | -                | -                | -         |    -2.30 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           34 |     3779 | 2024-07-31 | KRÜ               | L   | 0.268      | -            | -                | -                | -         |    -4.18 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           33 |     3781 | 2024-07-31 | KRÜ               | L   | 0.267      | -            | -                | -                | -         |    -4.28 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           32 |     3789 | 2024-07-31 | Dusty Roots       | W   | 0.267      | -            | -                | -                | -         |     4.76 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           31 |     3839 | 2024-07-30 | paiN              | L   | 0.259      | -            | -                | -                | -         |    -0.14 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           30 |     3902 | 2024-07-28 | Solid             | W   | 0.246      | -            | -                | -                | -         |     4.91 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           29 |     3927 | 2024-07-27 | Patins da Ferrari | W   | 0.240      | -            | -                | -                | -         |     2.35 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           28 |     3939 | 2024-07-26 | Galorys           | L   | 0.236      | -            | -                | -                | -         |    -4.66 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           27 |     4056 | 2024-07-23 | KRÜ               | L   | 0.215      | -            | -                | -                | -         |    -3.41 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           26 |     4058 | 2024-07-23 | Fluxo             | W   | 0.214      | 0.143        | 0.110 (0.003)    | -                | -         |     5.76 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           25 |     4065 | 2024-07-23 | Sharks Youngsters | W   | 0.213      | -            | -                | -                | -         |     1.82 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           24 |     4087 | 2024-07-22 | Intense           | W   | 0.207      | -            | -                | -                | -         |     2.12 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           23 |     4144 | 2024-07-20 | RED Canids        | L   | 0.194      | -            | -                | -                | -         |    -0.79 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           22 |     4171 | 2024-07-19 | Dusty Roots       | W   | 0.188      | -            | -                | -                | -         |     3.42 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           21 |     4183 | 2024-07-19 | Vikings KR        | L   | 0.187      | -            | -                | -                | -         |    -3.62 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           20 |     4185 | 2024-07-19 | Fluxo             | L   | 0.187      | -            | -                | -                | -         |    -0.88 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           19 |     4209 | 2024-07-18 | Players           | W   | 0.182      | -            | -                | -                | -         |     2.30 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           18 |     4213 | 2024-07-18 | Players           | W   | 0.182      | -            | -                | -                | -         |     2.33 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           17 |     4218 | 2024-07-18 | ODDIK             | W   | 0.181      | 0.384        | 0.094 (0.007)    | -                | -         |     4.28 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           16 |     4223 | 2024-07-18 | Hype              | L   | 0.181      | -            | -                | -                | -         |    -3.10 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           15 |     4284 | 2024-07-17 | paiN              | L   | 0.175      | -            | -                | -                | -         |    -0.09 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           14 |     4286 | 2024-07-17 | paiN              | L   | 0.175      | -            | -                | -                | -         |    -0.09 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           13 |     4311 | 2024-07-17 | Vikings KR        | L   | 0.173      | -            | -                | -                | -         |    -3.35 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           12 |     4344 | 2024-07-16 | Solid             | L   | 0.168      | -            | -                | -                | -         |    -2.03 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           11 |     4350 | 2024-07-16 | Solid             | W   | 0.168      | 0.450        | 0.027 (0.002)    | 0.574 (0.043)    | -         |     3.31 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           10 |     4393 | 2024-07-15 | 9z Academy        | W   | 0.162      | -            | -                | -                | -         |     0.87 | bsd, nyezin, RICIOLI, urban0, yepz     |
|            9 |     4401 | 2024-07-15 | ODDIK             | L   | 0.161      | -            | -                | -                | -         |    -1.36 | nyezin, paqueta, RICIOLI, urban0, yepz |
|            8 |     4408 | 2024-07-15 | Imperial          | W   | 0.160      | 0.450        | 0.142 (0.010)    | 0.537 (0.039)    | -         |     4.55 | bsd, nyezin, RICIOLI, urban0, yepz     |
|            7 |     4411 | 2024-07-15 | Imperial          | W   | 0.160      | 0.450        | 0.142 (0.010)    | 0.537 (0.039)    | -         |     4.57 | bsd, nyezin, RICIOLI, urban0, yepz     |
|            6 |     4448 | 2024-07-13 | Dusty Roots       | W   | 0.147      | -            | -                | -                | -         |     2.83 | nyezin, paqueta, RICIOLI, urban0, yepz |
|            5 |     4469 | 2024-07-11 | W7M               | L   | 0.135      | -            | -                | -                | -         |    -2.81 | nyezin, paqueta, RICIOLI, urban0, yepz |
|            4 |     4474 | 2024-07-11 | Hawks             | W   | 0.134      | -            | -                | -                | -         |     1.34 | nyezin, paqueta, RICIOLI, urban0, yepz |
|            3 |     4475 | 2024-07-11 | Galorys           | W   | 0.133      | -            | -                | -                | -         |     1.66 | nyezin, paqueta, RICIOLI, urban0, yepz |
|            2 |     4492 | 2024-07-10 | Legacy            | L   | 0.127      | -            | -                | -                | -         |    -1.04 | nyezin, paqueta, RICIOLI, urban0, yepz |
|            1 |     4518 | 2024-07-09 | W7M               | W   | 0.120      | -            | -                | -                | -         |     1.27 | nyezin, paqueta, RICIOLI, urban0, yepz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,905.20)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.808 | $1,500.00      | $1,211.80       |
| 2024-08-16 |      0.375 | $4,500.00      | $1,685.61       |
| 2024-08-13 |      0.354 | $1,000.00      | $354.15         |
| 2024-07-27 |      0.242 | $2,700.00      | $653.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
