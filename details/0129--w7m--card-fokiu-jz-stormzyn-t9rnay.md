### Roster Details<br />
Team Name: W7M<br />
Roster: card, fokiu, jz, stormzyn, t9rnay<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  786.5<br />
<br />
Final Rank Value (786.5) = Starting Rank Value (798.0) + Head To Head Adjustments (-11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.0
- 400 + ( ( 0.189 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 798.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |        1 | 2024-07-11 | Hype           | W   | 1.000      | 0.371        | -                | 0.303 (0.112)    | 0 (0.000) |    19.50 | card, fokiu, jz, stormzyn, t9rnay      |
|           80 |       13 | 2024-07-10 | Vikings KR     | W   | 1.000      | 0.371        | 0.012 (0.004)    | 0.432 (0.160)    | 0 (0.000) |    18.39 | card, fokiu, jz, stormzyn, t9rnay      |
|           79 |       19 | 2024-07-10 | 9z Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.88 | card, fokiu, jz, stormzyn, t9rnay      |
|           78 |       43 | 2024-07-09 | Case           | L   | 1.000      | -            | -                | -                | -         |   -11.92 | card, fokiu, jz, stormzyn, t9rnay      |
|           77 |       78 | 2024-07-06 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -7.76 | card, fokiu, jz, stormzyn, t9rnay      |
|           76 |      110 | 2024-06-27 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |    -9.33 | card, fokiu, jz, stormzyn, t9rnay      |
|           75 |      331 | 2024-06-10 | ODDIK          | L   | 0.994      | -            | -                | -                | -         |    -8.97 | card, fokiu, jz, stormzyn, t9rnay      |
|           74 |      371 | 2024-06-09 | Solid          | W   | 0.987      | 0.450        | 0.048 (0.021)    | 0.585 (0.260)    | 0 (0.000) |    19.72 | card, fokiu, jz, stormzyn, t9rnay      |
|           73 |      421 | 2024-06-08 | ODDIK          | L   | 0.982      | -            | -                | -                | -         |    -9.18 | card, fokiu, jz, stormzyn, t9rnay      |
|           72 |      429 | 2024-06-08 | Bounty Hunters | L   | 0.981      | -            | -                | -                | -         |    -9.34 | card, fokiu, jz, stormzyn, t9rnay      |
|           71 |      512 | 2024-06-07 | Galorys        | W   | 0.973      | 0.450        | 0.026 (0.011)    | 0.519 (0.227)    | 0 (0.000) |    18.40 | card, fokiu, jz, stormzyn, t9rnay      |
|           70 |      564 | 2024-06-06 | Fluxo          | L   | 0.967      | -            | -                | -                | -         |    -3.72 | card, fokiu, jz, stormzyn, t9rnay      |
|           69 |      693 | 2024-06-03 | Vikings KR     | W   | 0.949      | 0.371        | -                | 0.432 (0.152)    | 0 (0.000) |    15.96 | card, fokiu, jz, stormzyn, t9rnay      |
|           68 |      757 | 2024-06-01 | ex-Corinthians | W   | 0.933      | -            | -                | -                | 0 (0.000) |     7.54 | card, fokiu, jz, stormzyn, t9rnay      |
|           67 |      800 | 2024-05-30 | Hype           | L   | 0.922      | -            | -                | -                | -         |   -11.28 | card, fokiu, jz, stormzyn, t9rnay      |
|           66 |      853 | 2024-05-28 | Yawara         | W   | 0.908      | -            | -                | -                | 0 (0.000) |     5.67 | card, fokiu, jz, stormzyn, t9rnay      |
|           65 |      974 | 2024-05-22 | Solid          | L   | 0.868      | -            | -                | -                | -         |    -8.64 | card, fokiu, jz, stormzyn, t9rnay      |
|           64 |      980 | 2024-05-22 | Solid          | L   | 0.868      | -            | -                | -                | -         |    -9.24 | card, fokiu, stormzyn, t9rnay, zede    |
|           63 |     1057 | 2024-05-20 | 9z             | L   | 0.855      | -            | -                | -                | -         |    -0.28 | card, fokiu, stormzyn, t9rnay, zede    |
|           62 |     1061 | 2024-05-20 | 9z             | L   | 0.855      | -            | -                | -                | -         |    -0.28 | card, fokiu, stormzyn, t9rnay, zede    |
|           61 |     1182 | 2024-05-16 | Sharks         | L   | 0.828      | -            | -                | -                | -         |    -4.83 | card, fokiu, stormzyn, t9rnay, zede    |
|           60 |     1185 | 2024-05-16 | Sharks         | L   | 0.828      | -            | -                | -                | -         |    -5.05 | card, fokiu, stormzyn, t9rnay, zede    |
|           59 |     1279 | 2024-05-14 | Imperial       | L   | 0.815      | -            | -                | -                | -         |    -0.56 | card, fokiu, stormzyn, t9rnay, zede    |
|           58 |     1282 | 2024-05-14 | Imperial       | L   | 0.815      | -            | -                | -                | -         |    -0.56 | card, fokiu, stormzyn, t9rnay, zede    |
|           57 |     1295 | 2024-05-14 | Hype           | L   | 0.814      | -            | -                | -                | -         |   -11.33 | card, fokiu, stormzyn, t9rnay, zede    |
|           56 |     1329 | 2024-05-13 | Sharks         | L   | 0.807      | -            | -                | -                | -         |    -6.01 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           55 |     1378 | 2024-05-11 | Sharks         | L   | 0.794      | -            | -                | -                | -         |    -6.23 | card, fokiu, stormzyn, t9rnay, zede    |
|           54 |     1426 | 2024-05-09 | KRÜ            | L   | 0.780      | -            | -                | -                | -         |    -9.83 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           53 |     1460 | 2024-05-07 | paiN           | L   | 0.768      | -            | -                | -                | -         |    -0.36 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           52 |     1480 | 2024-05-06 | paiN           | L   | 0.760      | -            | -                | -                | -         |    -0.36 | fokiu, jz, saadzin, stormzyn, zede     |
|           51 |     1481 | 2024-05-06 | paiN           | L   | 0.760      | -            | -                | -                | -         |    -0.36 | fokiu, jz, saadzin, stormzyn, zede     |
|           50 |     1504 | 2024-05-05 | Galorys        | W   | 0.753      | 0.435        | 0.026 (0.009)    | 0.519 (0.170)    | 0 (0.000) |    14.66 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           49 |     1688 | 2024-04-26 | ODDIK          | L   | 0.694      | -            | -                | -                | -         |    -6.28 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           48 |     1690 | 2024-04-26 | ODDIK          | L   | 0.694      | -            | -                | -                | -         |    -6.60 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           47 |     1952 | 2024-04-17 | ODDIK          | L   | 0.634      | -            | -                | -                | -         |    -6.72 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           46 |     1985 | 2024-04-16 | Sharks         | W   | 0.628      | -            | -                | -                | 0 (0.000) |     9.42 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           45 |     2055 | 2024-04-12 | RED Canids     | L   | 0.601      | -            | -                | -                | -         |    -2.26 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           44 |     2164 | 2024-04-09 | RED Canids     | L   | 0.581      | -            | -                | -                | -         |    -2.25 | fokiu, jz, saadzin, stormzyn, zede     |
|           43 |     2169 | 2024-04-09 | RED Canids     | L   | 0.581      | -            | -                | -                | -         |    -2.30 | fokiu, jz, saadzin, stormzyn, zede     |
|           42 |     2202 | 2024-04-08 | MIBR           | L   | 0.575      | -            | -                | -                | -         |    -0.28 | fokiu, jz, saadzin, stormzyn, zede     |
|           41 |     2258 | 2024-04-06 | RED Canids     | W   | 0.560      | 0.435        | 0.115 (0.028)    | 0.698 (0.170)    | -         |    15.61 | fokiu, jz, saadzin, stormzyn, zede     |
|           40 |     2474 | 2024-03-27 | BESTIA         | W   | 0.495      | 0.450        | 0.050 (0.011)    | 0.657 (0.146)    | -         |    11.98 | fokiu, jz, saadzin, stormzyn, zede     |
|           39 |     2479 | 2024-03-27 | BESTIA         | L   | 0.495      | -            | -                | -                | -         |    -3.60 | fokiu, jz, saadzin, stormzyn, zede     |
|           38 |     2712 | 2024-03-14 | Galorys        | L   | 0.408      | -            | -                | -                | -         |    -5.32 | fokiu, jz, saadzin, stormzyn, zede     |
|           37 |     2715 | 2024-03-14 | Galorys        | L   | 0.408      | -            | -                | -                | -         |    -5.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           36 |     2808 | 2024-03-11 | Solid          | L   | 0.387      | -            | -                | -                | -         |    -4.56 | fokiu, jz, saadzin, stormzyn, zede     |
|           35 |     2843 | 2024-03-09 | RED Canids     | L   | 0.375      | -            | -                | -                | -         |    -1.43 | fokiu, jz, saadzin, stormzyn, zede     |
|           34 |     2903 | 2024-03-07 | Solid          | W   | 0.360      | 0.435        | 0.048 (0.008)    | 0.585 (0.092)    | -         |     7.30 | fokiu, jz, saadzin, stormzyn, zede     |
|           33 |     2957 | 2024-03-05 | ex-2GAME       | L   | 0.348      | -            | -                | -                | -         |    -6.62 | fokiu, jz, saadzin, stormzyn, zede     |
|           32 |     2959 | 2024-03-05 | ex-2GAME       | L   | 0.348      | -            | -                | -                | -         |    -6.81 | fokiu, jz, saadzin, stormzyn, zede     |
|           31 |     3164 | 2024-02-24 | Corinthians    | W   | 0.282      | -            | -                | -                | -         |     1.45 | fokiu, jz, saadzin, stormzyn, zede     |
|           30 |     3173 | 2024-02-24 | Corinthians    | W   | 0.282      | -            | -                | -                | -         |     1.47 | fokiu, jz, saadzin, stormzyn, zede     |
|           29 |     3225 | 2024-02-21 | Fluxo          | W   | 0.262      | 0.450        | 0.166 (0.020)    | 0.615 (0.072)    | -         |     6.75 | fokiu, jz, saadzin, stormzyn, zede     |
|           28 |     3229 | 2024-02-21 | Fluxo          | L   | 0.262      | -            | -                | -                | -         |    -1.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           27 |     3237 | 2024-02-21 | BESTIA         | L   | 0.260      | -            | -                | -                | -         |    -1.96 | fokiu, jz, saadzin, stormzyn, zede     |
|           26 |     3263 | 2024-02-20 | Case           | L   | 0.254      | -            | -                | -                | -         |    -2.98 | fokiu, jz, saadzin, stormzyn, zede     |
|           25 |     3327 | 2024-02-17 | Sharks         | W   | 0.236      | 0.435        | 0.046 (0.005)    | -                | -         |     5.44 | fokiu, jz, saadzin, stormzyn, zede     |
|           24 |     3358 | 2024-02-16 | Solid          | L   | 0.227      | -            | -                | -                | -         |    -2.58 | fokiu, jz, saadzin, stormzyn, zede     |
|           23 |     3361 | 2024-02-16 | Sharks         | L   | 0.227      | -            | -                | -                | -         |    -1.91 | fokiu, jz, saadzin, stormzyn, zede     |
|           22 |     3387 | 2024-02-15 | Fluxo          | L   | 0.221      | -            | -                | -                | -         |    -1.32 | fokiu, jz, saadzin, stormzyn, zede     |
|           21 |     3418 | 2024-02-14 | Genei Ryodan   | W   | 0.215      | -            | -                | -                | -         |     0.62 | fokiu, jz, saadzin, stormzyn, zede     |
|           20 |     3457 | 2024-02-13 | Case           | L   | 0.209      | -            | -                | -                | -         |    -2.55 | fokiu, jz, saadzin, stormzyn, zede     |
|           19 |     3461 | 2024-02-13 | Case           | W   | 0.208      | -            | -                | -                | -         |     4.08 | fokiu, jz, saadzin, stormzyn, zede     |
|           18 |     3467 | 2024-02-13 | Corinthians    | W   | 0.207      | -            | -                | -                | -         |     1.10 | fokiu, jz, saadzin, stormzyn, zede     |
|           17 |     3478 | 2024-02-12 | Corinthians    | W   | 0.201      | -            | -                | -                | -         |     1.08 | fokiu, jz, saadzin, stormzyn, zede     |
|           16 |     3580 | 2024-02-03 | 9z             | L   | 0.143      | -            | -                | -                | -         |    -0.02 | fokiu, jz, saadzin, stormzyn, zede     |
|           15 |     3643 | 2024-02-01 | paiN           | W   | 0.129      | 0.143        | 0.478 (0.009)    | -                | -         |     4.01 | fokiu, jz, saadzin, stormzyn, zede     |
|           14 |     3645 | 2024-02-01 | RED Canids     | W   | 0.129      | -            | -                | -                | -         |     3.59 | fokiu, jz, saadzin, stormzyn, zede     |
|           13 |     3650 | 2024-02-01 | MIBR           | L   | 0.128      | -            | -                | -                | -         |    -0.05 | fokiu, jz, saadzin, stormzyn, zede     |
|           12 |     3798 | 2024-01-23 | paiN           | L   | 0.068      | -            | -                | -                | -         |    -0.03 | fokiu, jz, saadzin, stormzyn, zede     |
|           11 |     3821 | 2024-01-22 | RED Canids     | W   | 0.062      | -            | -                | -                | -         |     1.73 | fokiu, jz, saadzin, stormzyn, zede     |
|           10 |     3849 | 2024-01-21 | 9z             | L   | 0.055      | -            | -                | -                | -         |    -0.01 | fokiu, jz, saadzin, stormzyn, zede     |
|            9 |     3852 | 2024-01-21 | BESTIA         | L   | 0.055      | -            | -                | -                | -         |    -0.39 | fokiu, jz, saadzin, stormzyn, zede     |
|            8 |     3893 | 2024-01-20 | TIMACETA       | W   | 0.047      | -            | -                | -                | -         |     0.23 | fokiu, jz, saadzin, stormzyn, zede     |
|            7 |     3929 | 2024-01-19 | Case           | W   | 0.042      | -            | -                | -                | -         |     0.23 | fokiu, jz, saadzin, stormzyn, zede     |
|            6 |     3949 | 2024-01-19 | paiN           | L   | 0.041      | -            | -                | -                | -         |    -0.01 | fokiu, jz, saadzin, stormzyn, zede     |
|            5 |     4100 | 2024-01-16 | Legacy         | L   | 0.021      | -            | -                | -                | -         |    -0.12 | fokiu, jz, saadzin, stormzyn, zede     |
|            4 |     4107 | 2024-01-16 | TIMACETA       | W   | 0.021      | -            | -                | -                | -         |     0.10 | fokiu, jz, saadzin, stormzyn, zede     |
|            3 |     4143 | 2024-01-15 | inSanitY       | W   | 0.015      | -            | -                | -                | -         |     0.05 | fokiu, jz, saadzin, stormzyn, zede     |
|            2 |     4180 | 2024-01-14 | BESTIA         | L   | 0.008      | -            | -                | -                | -         |    -0.06 | fokiu, jz, saadzin, stormzyn, zede     |
|            1 |     4198 | 2024-01-13 | Case           | W   | 0.002      | -            | -                | -                | -         |     0.01 | fokiu, jz, saadzin, stormzyn, zede     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($296.42)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
