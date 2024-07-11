### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, HEN1, noway, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1403.2<br />
<br />
Final Rank Value (1403.2) = Starting Rank Value (1499.2) + Head To Head Adjustments (-95.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.710[<sup>1</sup>](#table2)
- Bounty Collected: 0.565[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.541[<sup>2</sup>](#table1)

The average of these factors is 0.521<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1499.2
- 400 + ( ( 0.521 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1499.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           96 |      183 | 2024-06-15 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -13.41 | decenty, felps, HEN1, noway, VINI |
|           95 |      210 | 2024-06-14 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -25.93 | decenty, felps, HEN1, noway, VINI |
|           94 |      335 | 2024-06-10 | paiN              | L   | 0.993      | -            | -                | -                | -         |   -14.63 | decenty, felps, HEN1, noway, VINI |
|           93 |      363 | 2024-06-09 | RED Canids        | W   | 0.988      | 0.450        | 0.115 (0.051)    | 0.698 (0.310)    | -         |     7.70 | decenty, felps, HEN1, noway, VINI |
|           92 |      379 | 2024-06-09 | ODDIK             | W   | 0.986      | 0.371        | -                | 0.602 (0.220)    | -         |     1.58 | decenty, felps, HEN1, noway, VINI |
|           91 |      424 | 2024-06-08 | 9z                | W   | 0.981      | 0.450        | 0.586 (0.259)    | 0.749 (0.331)    | -         |    21.58 | decenty, felps, HEN1, noway, VINI |
|           90 |      484 | 2024-06-07 | Galorys           | W   | 0.974      | -            | -                | -                | -         |     1.08 | decenty, felps, HEN1, noway, VINI |
|           89 |      538 | 2024-06-06 | RED Canids        | L   | 0.968      | -            | -                | -                | -         |   -22.74 | decenty, felps, HEN1, noway, VINI |
|           88 |      607 | 2024-06-05 | Sharks            | W   | 0.962      | 0.450        | -                | 0.520 (0.225)    | -         |     3.17 | decenty, felps, HEN1, noway, VINI |
|           87 |      976 | 2024-05-22 | 9z                | W   | 0.868      | 0.450        | 0.586 (0.229)    | 0.749 (0.293)    | -         |    17.98 | decenty, felps, HEN1, noway, VINI |
|           86 |      978 | 2024-05-22 | 9z                | W   | 0.868      | 0.450        | 0.586 (0.229)    | 0.749 (0.292)    | -         |    19.22 | decenty, felps, HEN1, noway, VINI |
|           85 |      988 | 2024-05-22 | Sharks            | L   | 0.867      | -            | -                | -                | -         |   -24.53 | decenty, felps, HEN1, noway, VINI |
|           84 |      992 | 2024-05-22 | Sharks            | W   | 0.867      | -            | -                | -                | -         |     2.55 | decenty, felps, HEN1, noway, VINI |
|           83 |     1029 | 2024-05-21 | BESTIA            | L   | 0.861      | -            | -                | -                | -         |   -24.68 | decenty, felps, HEN1, noway, VINI |
|           82 |     1031 | 2024-05-21 | BESTIA            | L   | 0.861      | -            | -                | -                | -         |   -25.23 | decenty, felps, HEN1, noway, VINI |
|           81 |     1188 | 2024-05-16 | 9z                | W   | 0.827      | 0.384        | 0.586 (0.186)    | 0.749 (0.238)    | -         |    18.72 | decenty, felps, HEN1, noway, VINI |
|           80 |     1245 | 2024-05-15 | Fluxo             | W   | 0.820      | 0.384        | 0.166 (0.052)    | -                | -         |     3.96 | decenty, felps, HEN1, noway, VINI |
|           79 |     1279 | 2024-05-14 | W7M               | W   | 0.815      | -            | -                | -                | -         |     0.56 | decenty, felps, HEN1, noway, VINI |
|           78 |     1282 | 2024-05-14 | W7M               | W   | 0.815      | -            | -                | -                | -         |     0.56 | decenty, felps, HEN1, noway, VINI |
|           77 |     1291 | 2024-05-14 | BESTIA            | W   | 0.815      | 0.384        | -                | 0.657 (0.206)    | -         |     1.56 | decenty, felps, HEN1, noway, VINI |
|           76 |     1332 | 2024-05-13 | KRÜ               | W   | 0.806      | -            | -                | -                | -         |     1.01 | decenty, felps, HEN1, noway, VINI |
|           75 |     1401 | 2024-05-10 | BESTIA            | L   | 0.787      | -            | -                | -                | -         |   -23.52 | decenty, felps, HEN1, noway, VINI |
|           74 |     1459 | 2024-05-07 | ODDIK             | W   | 0.768      | -            | -                | -                | -         |     1.36 | decenty, felps, HEN1, noway, VINI |
|           73 |     1499 | 2024-05-05 | inSanitY          | W   | 0.753      | -            | -                | -                | -         |     1.10 | decenty, felps, HEN1, noway, VINI |
|           72 |     1697 | 2024-04-26 | SAW               | L   | 0.693      | -            | -                | -                | -         |   -16.91 | decenty, felps, HEN1, noway, VINI |
|           71 |     1740 | 2024-04-24 | Eternal Fire      | L   | 0.681      | -            | -                | -                | -         |    -4.17 | decenty, felps, HEN1, noway, VINI |
|           70 |     1759 | 2024-04-23 | FaZe              | L   | 0.674      | -            | -                | -                | -         |    -1.74 | decenty, felps, HEN1, noway, VINI |
|           69 |     1811 | 2024-04-20 | paiN              | L   | 0.655      | -            | -                | -                | -         |    -8.34 | decenty, felps, HEN1, noway, VINI |
|           68 |     1842 | 2024-04-20 | paiN              | W   | 0.650      | 0.589        | 0.478 (0.183)    | 0.768 (0.294)    | 1 (0.650) |    12.18 | decenty, felps, HEN1, noway, VINI |
|           67 |     1856 | 2024-04-19 | paiN              | L   | 0.648      | -            | -                | -                | -         |    -8.10 | decenty, felps, HEN1, noway, VINI |
|           66 |     1893 | 2024-04-18 | MIBR              | L   | 0.643      | -            | -                | -                | -         |    -7.46 | decenty, felps, HEN1, noway, VINI |
|           65 |     1896 | 2024-04-18 | 9z                | W   | 0.642      | 0.589        | 0.586 (0.222)    | 0.749 (0.283)    | 1 (0.642) |    15.45 | decenty, felps, HEN1, noway, VINI |
|           64 |     1897 | 2024-04-18 | Fluxo             | W   | 0.641      | -            | -                | -                | -         |     2.19 | decenty, felps, HEN1, noway, VINI |
|           63 |     1908 | 2024-04-18 | Metizport         | W   | 0.640      | -            | -                | -                | 1 (0.640) |     1.39 | decenty, felps, HEN1, noway, VINI |
|           62 |     2011 | 2024-04-15 | MIBR              | L   | 0.621      | -            | -                | -                | -         |    -7.47 | decenty, felps, HEN1, noway, VINI |
|           61 |     2026 | 2024-04-14 | paiN              | W   | 0.614      | 0.435        | 0.478 (0.127)    | -                | -         |    11.88 | decenty, felps, HEN1, noway, VINI |
|           60 |     2036 | 2024-04-13 | RED Canids        | W   | 0.609      | -            | -                | -                | -         |     2.79 | decenty, felps, HEN1, noway, VINI |
|           59 |     2072 | 2024-04-11 | adalYamigos       | W   | 0.595      | -            | -                | -                | -         |     0.22 | decenty, felps, HEN1, noway, VINI |
|           58 |     2082 | 2024-04-11 | paiN              | L   | 0.593      | -            | -                | -                | -         |    -6.99 | decenty, felps, HEN1, noway, VINI |
|           57 |     2109 | 2024-04-10 | Fluxo             | L   | 0.588      | -            | -                | -                | -         |   -16.71 | decenty, felps, HEN1, noway, VINI |
|           56 |     2113 | 2024-04-10 | Fluxo             | W   | 0.588      | -            | -                | -                | -         |     1.76 | decenty, felps, HEN1, noway, VINI |
|           55 |     2129 | 2024-04-10 | MIBR              | L   | 0.586      | -            | -                | -                | -         |    -7.90 | decenty, felps, HEN1, noway, VINI |
|           54 |     2175 | 2024-04-09 | Solid             | W   | 0.581      | -            | -                | -                | -         |     0.59 | decenty, felps, HEN1, noway, VINI |
|           53 |     2180 | 2024-04-09 | Solid             | W   | 0.580      | -            | -                | -                | -         |     0.59 | decenty, felps, HEN1, noway, VINI |
|           52 |     2185 | 2024-04-09 | paiN              | W   | 0.580      | -            | -                | -                | -         |    11.14 | decenty, felps, HEN1, noway, VINI |
|           51 |     2239 | 2024-04-07 | RED Canids        | W   | 0.568      | -            | -                | -                | -         |     2.29 | decenty, felps, HEN1, noway, VINI |
|           50 |     2242 | 2024-04-07 | FURIA Academy     | W   | 0.567      | -            | -                | -                | -         |     0.09 | decenty, felps, HEN1, noway, VINI |
|           49 |     2300 | 2024-04-04 | ODDIK             | W   | 0.548      | -            | -                | -                | -         |     0.80 | decenty, felps, HEN1, noway, VINI |
|           48 |     2305 | 2024-04-04 | ODDIK             | W   | 0.548      | -            | -                | -                | -         |     0.81 | decenty, felps, HEN1, noway, VINI |
|           47 |     2308 | 2024-04-04 | BESTIA            | W   | 0.547      | -            | -                | -                | -         |     0.94 | decenty, felps, HEN1, noway, VINI |
|           46 |     2338 | 2024-04-03 | Case              | W   | 0.542      | -            | -                | -                | -         |     0.51 | decenty, felps, HEN1, noway, VINI |
|           45 |     2341 | 2024-04-03 | Case              | W   | 0.541      | -            | -                | -                | -         |     0.51 | decenty, felps, HEN1, noway, VINI |
|           44 |     2545 | 2024-03-23 | FaZe              | L   | 0.466      | -            | -                | -                | -         |    -1.42 | decenty, felps, HEN1, noway, VINI |
|           43 |     2558 | 2024-03-22 | Vitality          | L   | 0.459      | -            | -                | -                | -         |    -0.99 | decenty, felps, HEN1, noway, VINI |
|           42 |     2568 | 2024-03-21 | Spirit            | L   | 0.454      | -            | -                | -                | -         |    -0.78 | decenty, felps, HEN1, noway, VINI |
|           41 |     2586 | 2024-03-21 | Virtus.pro        | W   | 0.452      | 1.000        | 0.347 (0.157)    | -                | 1 (0.452) |    11.69 | decenty, felps, HEN1, noway, VINI |
|           40 |     2605 | 2024-03-20 | GamerLegion       | W   | 0.446      | -            | -                | -                | 1 (0.446) |     0.90 | decenty, felps, HEN1, noway, VINI |
|           39 |     2618 | 2024-03-19 | Gaimin Gladiators | L   | 0.441      | -            | -                | -                | -         |   -11.94 | decenty, felps, HEN1, noway, VINI |
|           38 |     2634 | 2024-03-18 | Apeks             | W   | 0.432      | -            | -                | -                | 1 (0.432) |     1.18 | decenty, felps, HEN1, noway, VINI |
|           37 |     2652 | 2024-03-17 | HEROIC            | L   | 0.427      | -            | -                | -                | -         |    -2.52 | decenty, felps, HEN1, noway, VINI |
|           36 |     2661 | 2024-03-17 | ENCE              | W   | 0.426      | -            | -                | -                | 1 (0.426) |     6.71 | decenty, felps, HEN1, noway, VINI |
|           35 |     2891 | 2024-03-07 | Monte             | L   | 0.361      | -            | -                | -                | -         |    -8.89 | decenty, felps, HEN1, noway, VINI |
|           34 |     3009 | 2024-03-03 | paiN              | W   | 0.334      | -            | -                | -                | 1 (0.334) |     6.51 | decenty, felps, HEN1, noway, VINI |
|           33 |     3040 | 2024-03-02 | M80               | W   | 0.327      | -            | -                | -                | 1 (0.327) |     2.20 | decenty, felps, HEN1, noway, VINI |
|           32 |     3053 | 2024-03-01 | NRG               | W   | 0.321      | -            | -                | -                | 1 (0.321) |     0.35 | decenty, felps, HEN1, noway, VINI |
|           31 |     3144 | 2024-02-25 | Fluxo             | L   | 0.288      | -            | -                | -                | -         |    -8.29 | decenty, felps, HEN1, noway, VINI |
|           30 |     3176 | 2024-02-24 | BESTIA            | W   | 0.280      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           29 |     3203 | 2024-02-22 | BESTIA            | L   | 0.269      | -            | -                | -                | -         |    -7.95 | decenty, felps, HEN1, noway, VINI |
|           28 |     3213 | 2024-02-22 | FURIA             | L   | 0.268      | -            | -                | -                | -         |    -2.62 | decenty, felps, HEN1, noway, VINI |
|           27 |     3228 | 2024-02-21 | ex-2GAME          | W   | 0.262      | -            | -                | -                | -         |     0.10 | decenty, felps, HEN1, noway, VINI |
|           26 |     3232 | 2024-02-21 | ex-2GAME          | W   | 0.262      | -            | -                | -                | -         |     0.10 | decenty, felps, HEN1, noway, VINI |
|           25 |     3241 | 2024-02-21 | LA RUGONETA       | W   | 0.259      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           24 |     3333 | 2024-02-17 | adalYamigos       | W   | 0.234      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           23 |     3362 | 2024-02-16 | Galorys           | W   | 0.227      | -            | -                | -                | -         |     0.20 | decenty, felps, HEN1, noway, VINI |
|           22 |     3365 | 2024-02-16 | Galorys           | W   | 0.227      | -            | -                | -                | -         |     0.20 | decenty, felps, HEN1, noway, VINI |
|           21 |     3382 | 2024-02-15 | 9z                | W   | 0.222      | -            | -                | -                | -         |     5.51 | decenty, felps, HEN1, noway, VINI |
|           20 |     3384 | 2024-02-15 | Fluxo             | W   | 0.221      | -            | -                | -                | -         |     0.57 | decenty, felps, HEN1, noway, VINI |
|           19 |     3389 | 2024-02-15 | Solid             | W   | 0.221      | -            | -                | -                | -         |     0.24 | decenty, felps, HEN1, noway, VINI |
|           18 |     3419 | 2024-02-14 | Yawara            | W   | 0.215      | -            | -                | -                | -         |     0.03 | decenty, felps, HEN1, noway, VINI |
|           17 |     3456 | 2024-02-13 | RED Canids        | W   | 0.209      | -            | -                | -                | -         |     0.88 | decenty, felps, HEN1, noway, VINI |
|           16 |     3460 | 2024-02-13 | RED Canids        | L   | 0.208      | -            | -                | -                | -         |    -5.72 | decenty, felps, HEN1, noway, VINI |
|           15 |     3463 | 2024-02-13 | Solid             | W   | 0.208      | -            | -                | -                | -         |     0.23 | decenty, felps, HEN1, noway, VINI |
|           14 |     3560 | 2024-02-04 | 9z                | W   | 0.148      | -            | -                | -                | -         |     3.69 | decenty, felps, HEN1, noway, VINI |
|           13 |     3583 | 2024-02-03 | MIBR              | W   | 0.142      | -            | -                | -                | -         |     2.77 | decenty, felps, HEN1, noway, VINI |
|           12 |     3609 | 2024-02-02 | BESTIA            | W   | 0.136      | -            | -                | -                | -         |     0.27 | decenty, felps, HEN1, noway, VINI |
|           11 |     3613 | 2024-02-02 | 9z                | L   | 0.135      | -            | -                | -                | -         |    -0.88 | decenty, felps, HEN1, noway, VINI |
|           10 |     3615 | 2024-02-02 | BESTIA            | W   | 0.135      | -            | -                | -                | -         |     0.27 | decenty, felps, HEN1, noway, VINI |
|            9 |     3779 | 2024-01-24 | 9z                | W   | 0.075      | -            | -                | -                | -         |     1.89 | decenty, felps, HEN1, noway, VINI |
|            8 |     3799 | 2024-01-23 | BESTIA            | W   | 0.068      | -            | -                | -                | -         |     0.14 | decenty, felps, HEN1, noway, VINI |
|            7 |     3819 | 2024-01-22 | Hype              | W   | 0.062      | -            | -                | -                | -         |     0.00 | decenty, felps, HEN1, noway, VINI |
|            6 |     3853 | 2024-01-21 | paiN              | W   | 0.055      | -            | -                | -                | -         |     1.08 | decenty, felps, HEN1, noway, VINI |
|            5 |     3892 | 2024-01-20 | Fluxo             | W   | 0.047      | -            | -                | -                | -         |     0.12 | decenty, felps, HEN1, noway, VINI |
|            4 |     3935 | 2024-01-19 | BESTIA            | L   | 0.042      | -            | -                | -                | -         |    -1.24 | decenty, felps, HEN1, noway, VINI |
|            3 |     3944 | 2024-01-19 | Galorys           | W   | 0.041      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|            2 |     4102 | 2024-01-16 | Legacy            | L   | 0.021      | -            | -                | -                | -         |    -0.61 | decenty, felps, HEN1, noway, VINI |
|            1 |     4147 | 2024-01-15 | Corinthians       | W   | 0.015      | -            | -                | -                | -         |     0.00 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100,792.44)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-10 |      0.995 | $1,500.00      | $1,492.77       |
| 2024-06-09 |      0.988 | $20,000.00     | $19,761.20      |
| 2024-05-16 |      0.827 | $20,000.00     | $16,546.81      |
| 2024-05-12 |      0.800 | $3,500.00      | $2,799.49       |
| 2024-04-20 |      0.655 | $50,000.00     | $32,740.04      |
| 2024-04-15 |      0.621 | $15,000.00     | $9,319.11       |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |
| 2024-02-25 |      0.288 | $15,000.00     | $4,315.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
