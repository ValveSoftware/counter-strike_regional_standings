### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1452.9<br />
<br />
Final Rank Value (1452.9) = Starting Rank Value (1515.2) + Head To Head Adjustments (-62.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.677[<sup>1</sup>](#table2)
- Bounty Collected: 0.585[<sup>2</sup>](#table1)
- Opponent Network: 0.285[<sup>2</sup>](#table1)
- LAN Wins: 0.657[<sup>2</sup>](#table1)

The average of these factors is 0.551<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1515.2
- 400 + ( ( 0.551 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1515.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      958 | 2024-06-07 | Astralis          | L   | 0.886      | -            | -                | -                | -         |    -5.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           65 |     1025 | 2024-06-06 | Eternal Fire      | W   | 0.879      | 0.715        | 0.833 (0.524)    | 0.443 (0.279)    | 1 (0.879) |    19.88 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           64 |     1037 | 2024-06-06 | Complexity        | W   | 0.878      | 0.715        | 0.405 (0.254)    | 0.378 (0.237)    | 1 (0.878) |    22.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           63 |     1073 | 2024-06-05 | BIG               | W   | 0.873      | 0.715        | 0.173 (0.108)    | 0.347 (0.217)    | 1 (0.873) |    10.72 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           62 |     1083 | 2024-06-05 | FURIA             | L   | 0.873      | -            | -                | -                | -         |    -7.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           61 |     1095 | 2024-06-05 | fnatic            | W   | 0.872      | 0.715        | 0.428 (0.267)    | 0.666 (0.415)    | 1 (0.872) |    15.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           60 |     1371 | 2024-05-25 | B8                | L   | 0.800      | -            | -                | -                | -         |   -19.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           59 |     1397 | 2024-05-24 | DMS               | W   | 0.791      | -            | -                | -                | 0 (0.000) |     1.31 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           58 |     1486 | 2024-05-21 | Eternal Fire      | L   | 0.773      | -            | -                | -                | -         |    -5.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           57 |     1512 | 2024-05-20 | MIBR              | W   | 0.768      | 0.769        | 0.257 (0.152)    | 0.561 (0.331)    | -         |    14.28 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           56 |     1521 | 2024-05-20 | Astralis          | L   | 0.767      | -            | -                | -                | -         |    -3.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           55 |     1534 | 2024-05-20 | MIBR              | W   | 0.765      | 0.769        | 0.257 (0.151)    | 0.561 (0.330)    | -         |    14.88 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           54 |     1691 | 2024-05-15 | Falcons           | L   | 0.734      | -            | -                | -                | -         |   -10.89 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           53 |     1762 | 2024-05-14 | MOUZ              | L   | 0.726      | -            | -                | -                | -         |    -1.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           52 |     1801 | 2024-05-12 | B8                | L   | 0.713      | -            | -                | -                | -         |   -19.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           51 |     1808 | 2024-05-12 | 9 Pandas          | W   | 0.712      | -            | -                | -                | -         |     2.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           50 |     1840 | 2024-05-11 | Metizport         | W   | 0.706      | -            | -                | -                | -         |     1.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           49 |     1858 | 2024-05-10 | Enterprise        | W   | 0.699      | 0.435        | -                | 0.646 (0.196)    | -         |     1.20 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           48 |     1918 | 2024-05-07 | FlyQuest          | L   | 0.680      | -            | -                | -                | -         |   -14.92 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           47 |     1970 | 2024-05-04 | AMKAL             | L   | 0.660      | -            | -                | -                | -         |   -17.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           46 |     1975 | 2024-05-04 | 9 Pandas          | W   | 0.659      | -            | -                | -                | -         |     1.80 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           45 |     1998 | 2024-05-03 | Insilio           | W   | 0.651      | -            | -                | -                | -         |     1.25 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           44 |     2038 | 2024-05-01 | EYEBALLERS        | W   | 0.639      | -            | -                | -                | -         |     0.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           43 |     2068 | 2024-04-30 | 3DMAX             | L   | 0.632      | -            | -                | -                | -         |   -15.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           42 |     2141 | 2024-04-26 | M80               | W   | 0.608      | 0.889        | 0.238 (0.128)    | 0.614 (0.332)    | 1 (0.608) |     5.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           41 |     2155 | 2024-04-26 | Falcons           | W   | 0.605      | 0.889        | 0.276 (0.148)    | -                | 1 (0.605) |     8.90 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           40 |     2179 | 2024-04-25 | Vitality          | L   | 0.599      | -            | -                | -                | -         |    -1.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           39 |     2210 | 2024-04-23 | M80               | W   | 0.587      | 0.889        | 0.238 (0.124)    | 0.614 (0.320)    | 1 (0.587) |     5.46 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           38 |     2314 | 2024-04-19 | Cloud9            | L   | 0.560      | -            | -                | -                | -         |   -14.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           37 |     2329 | 2024-04-19 | Eternal Fire      | L   | 0.559      | -            | -                | -                | -         |    -3.98 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           36 |     2356 | 2024-04-18 | Apeks             | W   | 0.554      | -            | -                | -                | -         |     1.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           35 |     2361 | 2024-04-18 | brazylijski luz   | W   | 0.553      | -            | -                | -                | -         |     0.52 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           34 |     2366 | 2024-04-18 | Serbia            | W   | 0.553      | -            | -                | -                | -         |     0.36 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           33 |     2483 | 2024-04-14 | 3DMAX             | W   | 0.526      | 0.358        | -                | 1.000 (0.188)    | -         |     3.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           32 |     2490 | 2024-04-13 | OG                | L   | 0.520      | -            | -                | -                | -         |   -14.58 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           31 |     2495 | 2024-04-13 | Aurora            | L   | 0.520      | -            | -                | -                | -         |    -6.08 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           30 |     2502 | 2024-04-13 | Sampi             | W   | 0.518      | -            | -                | -                | -         |     0.78 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           29 |     2529 | 2024-04-11 | Aurora            | L   | 0.507      | -            | -                | -                | -         |    -6.21 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           28 |     2537 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.506      | 0.684        | 0.287 (0.099)    | -                | -         |    12.14 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           27 |     2542 | 2024-04-11 | AMKAL             | L   | 0.506      | -            | -                | -                | -         |   -14.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           26 |     2583 | 2024-04-10 | Aurora            | W   | 0.499      | -            | -                | -                | -         |     9.77 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           25 |     2638 | 2024-04-09 | BIG               | W   | 0.493      | -            | -                | -                | -         |     4.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           24 |     2713 | 2024-04-06 | Alliance          | W   | 0.472      | -            | -                | -                | -         |     0.49 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           23 |     2727 | 2024-04-05 | BLEED             | W   | 0.467      | -            | -                | -                | -         |     1.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           22 |     2765 | 2024-04-04 | Alliance          | W   | 0.460      | -            | -                | -                | -         |     0.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           21 |     2777 | 2024-04-04 | BLEED             | W   | 0.459      | -            | -                | -                | -         |     1.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           20 |     2946 | 2024-03-27 | FAVBET            | L   | 0.407      | -            | -                | -                | -         |   -12.59 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           19 |     2983 | 2024-03-24 | FORZE             | L   | 0.386      | -            | -                | -                | -         |   -11.57 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           18 |     2998 | 2024-03-23 | fnatic            | W   | 0.379      | -            | -                | -                | -         |     7.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           17 |     3037 | 2024-03-21 | B8                | W   | 0.365      | -            | -                | -                | -         |     1.18 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           16 |     3433 | 2024-03-05 | BLEED             | L   | 0.259      | -            | -                | -                | -         |    -7.66 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           15 |     3451 | 2024-03-04 | Gaimin Gladiators | W   | 0.251      | -            | -                | -                | -         |     0.58 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           14 |     3466 | 2024-03-03 | ex-Preasy         | L   | 0.247      | -            | -                | -                | -         |    -7.59 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           13 |     3470 | 2024-03-03 | ex-Sprout         | W   | 0.246      | -            | -                | -                | -         |     0.03 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |     3510 | 2024-03-01 | ex-Preasy         | W   | 0.234      | -            | -                | -                | -         |     0.17 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |     3542 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.219      | -            | -                | -                | -         |     0.41 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |     3649 | 2024-02-23 | ex-Guild Eagles   | L   | 0.186      | -            | -                | -                | -         |    -5.70 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |     3788 | 2024-02-17 | Eternal Fire      | L   | 0.146      | -            | -                | -                | -         |    -1.40 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |     3812 | 2024-02-16 | Natus Vincere     | L   | 0.140      | -            | -                | -                | -         |    -0.27 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |     3850 | 2024-02-15 | Enterprise        | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.17 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |     3885 | 2024-02-14 | Into the Breach   | W   | 0.126      | -            | -                | -                | 1 (0.126) |     0.03 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |     3888 | 2024-02-14 | fnatic            | L   | 0.126      | -            | -                | -                | -         |    -1.45 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |     3971 | 2024-02-08 | FORZE             | L   | 0.087      | -            | -                | -                | -         |    -2.66 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |     3977 | 2024-02-08 | Nemiga            | L   | 0.086      | -            | -                | -                | -         |    -2.31 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |     4106 | 2024-02-01 | Cloud9            | L   | 0.040      | -            | -                | -                | -         |    -1.14 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |     4133 | 2024-01-31 | Eternal Fire      | L   | 0.032      | -            | -                | -                | -         |    -0.32 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($92,002.18)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $20,000.00     | $17,994.94      |
| 2024-05-26 |      0.806 | $2,000.00      | $1,612.79       |
| 2024-05-23 |      0.787 | $12,500.00     | $9,831.65       |
| 2024-05-12 |      0.713 | $10,000.00     | $7,134.60       |
| 2024-05-12 |      0.713 | $17,500.00     | $12,477.85      |
| 2024-05-04 |      0.660 | $10,000.00     | $6,597.29       |
| 2024-05-02 |      0.647 | $1,000.00      | $646.62         |
| 2024-04-14 |      0.526 | $52,500.00     | $27,641.03      |
| 2024-04-14 |      0.526 | $9,000.00      | $4,732.71       |
| 2024-03-06 |      0.267 | $12,500.00     | $3,332.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
