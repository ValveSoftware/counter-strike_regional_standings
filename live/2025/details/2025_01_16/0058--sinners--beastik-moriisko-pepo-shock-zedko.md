### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, MoriiSko, Pepo, SHOCK, ZEDKO<br />
Global Rank: [58](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [40]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1045.2<br />
<br />
Final Rank Value (1045.2) = Starting Rank Value (1110.7) + Head To Head Adjustments (-65.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.502[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.318[<sup>2</sup>](#table1)

The average of these factors is 0.359<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1110.7
- 400 + ( ( 0.359 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1110.7


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
|           85 |       42 | 2025-01-11 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -5.09 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           84 |       51 | 2025-01-10 | kONO              | W   | 1.000      | 0.417        | -                | 0.735 (0.306)    | 0 (0.000) |    11.43 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           83 |      250 | 2024-12-13 | ECSTATIC          | L   | 0.973      | -            | -                | -                | -         |   -16.39 | beastik, majky, MoriiSko, oskar, SHOCK |
|           82 |      262 | 2024-12-13 | Spirit Academy    | L   | 0.970      | -            | -                | -                | -         |   -15.42 | beastik, majky, MoriiSko, oskar, SHOCK |
|           81 |      268 | 2024-12-12 | NAVI Junior       | L   | 0.966      | -            | -                | -                | -         |   -13.78 | beastik, majky, MoriiSko, oskar, SHOCK |
|           80 |      723 | 2024-11-20 | GamerLegion       | L   | 0.817      | -            | -                | -                | -         |    -5.70 | beastik, majky, MoriiSko, oskar, SHOCK |
|           79 |      739 | 2024-11-18 | Cloud9            | L   | 0.808      | -            | -                | -                | -         |   -12.05 | beastik, majky, MoriiSko, oskar, SHOCK |
|           78 |      751 | 2024-11-17 | ECLOT             | W   | 0.801      | 0.143        | 0.286 (0.033)    | -                | 1 (0.801) |    16.09 | beastik, majky, MoriiSko, oskar, SHOCK |
|           77 |      771 | 2024-11-17 | Natus Vincere     | L   | 0.796      | -            | -                | -                | -         |    -0.52 | beastik, majky, MoriiSko, oskar, SHOCK |
|           76 |      775 | 2024-11-16 | SAW               | W   | 0.795      | 0.143        | 0.259 (0.029)    | -                | 1 (0.795) |    20.52 | beastik, majky, MoriiSko, oskar, SHOCK |
|           75 |      974 | 2024-11-10 | ECLOT             | L   | 0.751      | -            | -                | -                | -         |    -6.60 | beastik, majky, MoriiSko, oskar, SHOCK |
|           74 |     1033 | 2024-11-07 | 500               | W   | 0.730      | 0.384        | -                | 0.852 (0.239)    | 0 (0.000) |     9.68 | beastik, majky, MoriiSko, oskar, SHOCK |
|           73 |     1042 | 2024-11-06 | PARIVISION        | L   | 0.725      | -            | -                | -                | -         |   -16.00 | beastik, majky, MoriiSko, oskar, SHOCK |
|           72 |     1049 | 2024-11-06 | los kogutos       | L   | 0.723      | -            | -                | -                | -         |   -13.79 | beastik, majky, MoriiSko, oskar, SHOCK |
|           71 |     1064 | 2024-11-05 | 9INE              | W   | 0.718      | 0.384        | 0.125 (0.034)    | 1.000 (0.276)    | 0 (0.000) |     8.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|           70 |     1069 | 2024-11-05 | ECLOT             | L   | 0.716      | -            | -                | -                | -         |    -7.43 | beastik, majky, MoriiSko, oskar, SHOCK |
|           69 |     1095 | 2024-11-03 | ECSTATIC          | W   | 0.705      | 0.426        | 0.079 (0.024)    | 1.000 (0.301)    | 0 (0.000) |     9.39 | beastik, majky, MoriiSko, oskar, SHOCK |
|           68 |     1106 | 2024-11-03 | ARCRED            | W   | 0.704      | -            | -                | -                | -         |     3.05 | beastik, majky, MoriiSko, oskar, SHOCK |
|           67 |     1149 | 2024-11-01 | Endpoint          | W   | 0.691      | 0.371        | -                | 0.566 (0.145)    | -         |     4.99 | beastik, majky, MoriiSko, oskar, SHOCK |
|           66 |     1165 | 2024-10-31 | Rebels            | W   | 0.685      | -            | -                | -                | -         |     4.56 | beastik, majky, MoriiSko, oskar, SHOCK |
|           65 |     1214 | 2024-10-29 | HOTU              | L   | 0.671      | -            | -                | -                | -         |   -17.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|           64 |     1248 | 2024-10-27 | Insilio           | W   | 0.657      | -            | -                | -                | -         |     2.23 | beastik, majky, MoriiSko, oskar, SHOCK |
|           63 |     1517 | 2024-10-13 | Spirit Academy    | L   | 0.564      | -            | -                | -                | -         |    -9.29 | beastik, majky, MoriiSko, oskar, SHOCK |
|           62 |     1523 | 2024-10-12 | GUN5              | W   | 0.559      | 0.435        | 0.224 (0.054)    | 1.000 (0.243)    | -         |     9.26 | beastik, majky, MoriiSko, oskar, SHOCK |
|           61 |     1541 | 2024-10-11 | Monte             | W   | 0.552      | 0.435        | -                | 0.583 (0.140)    | -         |     8.45 | beastik, majky, MoriiSko, oskar, SHOCK |
|           60 |     1776 | 2024-10-03 | los kogutos       | L   | 0.499      | -            | -                | -                | -         |    -8.18 | beastik, majky, MoriiSko, oskar, SHOCK |
|           59 |     2112 | 2024-09-25 | CYBERSHOKE        | L   | 0.443      | -            | -                | -                | -         |   -10.81 | beastik, majky, MoriiSko, oskar, SHOCK |
|           58 |     2188 | 2024-09-23 | Zero Tenacity     | L   | 0.432      | -            | -                | -                | -         |    -7.32 | beastik, majky, MoriiSko, oskar, SHOCK |
|           57 |     2213 | 2024-09-22 | UNiTY             | L   | 0.425      | -            | -                | -                | -         |    -9.50 | beastik, majky, MoriiSko, oskar, SHOCK |
|           56 |     2216 | 2024-09-22 | Sampi             | W   | 0.424      | -            | -                | -                | 1 (0.424) |     4.42 | beastik, majky, MoriiSko, oskar, SHOCK |
|           55 |     2234 | 2024-09-21 | UNiTY             | L   | 0.419      | -            | -                | -                | -         |    -9.58 | beastik, majky, MoriiSko, oskar, SHOCK |
|           54 |     2257 | 2024-09-20 | ECLOT             | W   | 0.412      | 0.346        | 0.286 (0.041)    | 1.000 (0.143)    | 1 (0.412) |     9.48 | beastik, majky, MoriiSko, oskar, SHOCK |
|           53 |     2297 | 2024-09-19 | 9INE              | W   | 0.405      | 0.384        | 0.125 (0.019)    | 1.000 (0.156)    | -         |     4.39 | beastik, majky, MoriiSko, oskar, SHOCK |
|           52 |     2329 | 2024-09-18 | Nemiga            | L   | 0.398      | -            | -                | -                | -         |    -3.66 | beastik, majky, MoriiSko, oskar, SHOCK |
|           51 |     2401 | 2024-09-15 | GamerLegion       | W   | 0.379      | 0.435        | 0.200 (0.033)    | -                | -         |     9.39 | beastik, majky, MoriiSko, oskar, SHOCK |
|           50 |     2411 | 2024-09-15 | Insilio           | W   | 0.378      | -            | -                | -                | -         |     2.28 | beastik, majky, MoriiSko, oskar, SHOCK |
|           49 |     2438 | 2024-09-14 | Revenant          | L   | 0.371      | -            | -                | -                | -         |   -10.17 | beastik, majky, MoriiSko, oskar, SHOCK |
|           48 |     2447 | 2024-09-14 | GUN5              | W   | 0.371      | 0.435        | 0.224 (0.036)    | 1.000 (0.161)    | -         |     5.81 | beastik, majky, MoriiSko, oskar, SHOCK |
|           47 |     2522 | 2024-09-12 | FAVBET            | W   | 0.356      | -            | -                | -                | -         |     3.00 | beastik, majky, MoriiSko, oskar, SHOCK |
|           46 |     2593 | 2024-09-09 | Sampi             | W   | 0.338      | -            | -                | -                | -         |     3.78 | beastik, majky, MoriiSko, oskar, SHOCK |
|           45 |     2619 | 2024-09-08 | Insilio           | L   | 0.330      | -            | -                | -                | -         |    -8.74 | beastik, majky, MoriiSko, oskar, SHOCK |
|           44 |     2690 | 2024-09-05 | B8                | L   | 0.313      | -            | -                | -                | -         |    -4.59 | beastik, majky, MoriiSko, oskar, SHOCK |
|           43 |     2723 | 2024-09-05 | Monte             | L   | 0.310      | -            | -                | -                | -         |    -6.04 | beastik, majky, MoriiSko, oskar, SHOCK |
|           42 |     2757 | 2024-09-04 | Zero Tenacity     | L   | 0.303      | -            | -                | -                | -         |    -5.79 | beastik, majky, MoriiSko, oskar, SHOCK |
|           41 |     2788 | 2024-09-03 | Gaimin Gladiators | L   | 0.297      | -            | -                | -                | -         |    -6.74 | beastik, majky, MoriiSko, oskar, SHOCK |
|           40 |     2811 | 2024-09-02 | Revenant          | W   | 0.290      | -            | -                | -                | -         |     1.07 | beastik, majky, MoriiSko, oskar, SHOCK |
|           39 |     2840 | 2024-08-31 | Gaimin Gladiators | L   | 0.278      | -            | -                | -                | -         |    -6.47 | beastik, majky, MoriiSko, oskar, SHOCK |
|           38 |     2865 | 2024-08-30 | HOTU              | W   | 0.270      | -            | -                | -                | -         |     0.80 | beastik, majky, MoriiSko, oskar, SHOCK |
|           37 |     2917 | 2024-08-29 | Alliance          | W   | 0.263      | -            | -                | -                | -         |     2.24 | beastik, majky, MoriiSko, oskar, SHOCK |
|           36 |     2947 | 2024-08-28 | B8                | L   | 0.258      | -            | -                | -                | -         |    -4.07 | beastik, majky, MoriiSko, oskar, SHOCK |
|           35 |     2967 | 2024-08-28 | AMKAL             | W   | 0.257      | -            | -                | -                | -         |     0.66 | beastik, majky, MoriiSko, oskar, SHOCK |
|           34 |     3011 | 2024-08-27 | Zero Tenacity     | W   | 0.251      | -            | -                | -                | -         |     2.84 | beastik, majky, MoriiSko, oskar, SHOCK |
|           33 |     3082 | 2024-08-26 | GamerLegion       | W   | 0.245      | -            | -                | -                | -         |     6.21 | beastik, majky, MoriiSko, oskar, SHOCK |
|           32 |     3106 | 2024-08-26 | AMKAL             | W   | 0.243      | -            | -                | -                | -         |     0.66 | beastik, majky, MoriiSko, oskar, SHOCK |
|           31 |     3127 | 2024-08-25 | Young Ninjas      | W   | 0.239      | -            | -                | -                | -         |     0.74 | beastik, majky, MoriiSko, oskar, SHOCK |
|           30 |     3215 | 2024-08-22 | KOI               | W   | 0.217      | -            | -                | -                | -         |     1.82 | beastik, majky, MoriiSko, oskar, SHOCK |
|           29 |     3251 | 2024-08-21 | PARIVISION        | W   | 0.211      | -            | -                | -                | -         |     1.48 | beastik, majky, MoriiSko, oskar, SHOCK |
|           28 |     3287 | 2024-08-21 | B8                | W   | 0.210      | -            | -                | -                | -         |     3.53 | beastik, majky, MoriiSko, oskar, SHOCK |
|           27 |     3310 | 2024-08-20 | ARCRED            | W   | 0.206      | -            | -                | -                | -         |     0.90 | beastik, majky, MoriiSko, oskar, SHOCK |
|           26 |     3316 | 2024-08-20 | EYEBALLERS        | W   | 0.204      | -            | -                | -                | -         |     1.23 | beastik, majky, MoriiSko, oskar, SHOCK |
|           25 |     3366 | 2024-08-18 | BetBoom           | L   | 0.192      | -            | -                | -                | -         |    -3.14 | beastik, majky, MoriiSko, oskar, SHOCK |
|           24 |     3372 | 2024-08-18 | GamerLegion       | W   | 0.190      | -            | -                | -                | -         |     4.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           23 |     3389 | 2024-08-17 | GamerLegion       | L   | 0.185      | -            | -                | -                | -         |    -0.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           22 |     3398 | 2024-08-17 | UNPAID            | W   | 0.185      | -            | -                | -                | -         |     2.12 | beastik, majky, MoriiSko, oskar, SHOCK |
|           21 |     3401 | 2024-08-17 | CYBERSHOKE        | W   | 0.184      | -            | -                | -                | -         |     1.08 | beastik, majky, MoriiSko, oskar, SHOCK |
|           20 |     3419 | 2024-08-16 | 3DMAX             | W   | 0.177      | 0.435        | 0.433 (0.033)    | -                | -         |     4.75 | beastik, majky, MoriiSko, oskar, SHOCK |
|           19 |     3497 | 2024-08-13 | 9 Pandas          | L   | 0.159      | -            | -                | -                | -         |    -4.39 | beastik, majky, MoriiSko, oskar, SHOCK |
|           18 |     3503 | 2024-08-13 | FLuffy Gangsters  | W   | 0.158      | -            | -                | -                | -         |     0.62 | beastik, majky, MoriiSko, oskar, SHOCK |
|           17 |     3513 | 2024-08-13 | Illuminar         | W   | 0.157      | -            | -                | -                | -         |     0.40 | beastik, majky, MoriiSko, oskar, SHOCK |
|           16 |     3546 | 2024-08-12 | B8                | W   | 0.152      | -            | -                | -                | -         |     2.59 | beastik, majky, MoriiSko, oskar, SHOCK |
|           15 |     3556 | 2024-08-12 | Endpoint          | L   | 0.151      | -            | -                | -                | -         |    -3.82 | beastik, majky, MoriiSko, oskar, SHOCK |
|           14 |     3626 | 2024-08-09 | Kosovo            | W   | 0.132      | -            | -                | -                | -         |     0.17 | beastik, majky, MoriiSko, oskar, SHOCK |
|           13 |     3692 | 2024-08-07 | Project G         | W   | 0.118      | -            | -                | -                | -         |     0.07 | beastik, majky, MoriiSko, oskar, SHOCK |
|           12 |     3706 | 2024-08-07 | PARIVISION        | L   | 0.117      | -            | -                | -                | -         |    -2.92 | beastik, majky, MoriiSko, oskar, SHOCK |
|           11 |     3743 | 2024-08-06 | Apogee            | W   | 0.111      | -            | -                | -                | -         |     0.43 | beastik, majky, MoriiSko, oskar, SHOCK |
|           10 |     3764 | 2024-08-05 | Rebels            | W   | 0.105      | -            | -                | -                | -         |     0.55 | beastik, majky, MoriiSko, oskar, SHOCK |
|            9 |     3796 | 2024-08-04 | ECLOT             | L   | 0.099      | -            | -                | -                | -         |    -0.62 | beastik, majky, MoriiSko, oskar, SHOCK |
|            8 |     3806 | 2024-08-04 | AVEZ              | W   | 0.097      | -            | -                | -                | 1 (0.097) |     0.17 | beastik, majky, MoriiSko, oskar, SHOCK |
|            7 |     3841 | 2024-08-03 | SINNERS Academy   | W   | 0.091      | -            | -                | -                | 1 (0.091) |     0.42 | beastik, majky, MoriiSko, oskar, SHOCK |
|            6 |     3864 | 2024-08-02 | ECLOT             | L   | 0.085      | -            | -                | -                | -         |    -0.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|            5 |     4008 | 2024-07-30 | HEROIC            | L   | 0.064      | -            | -                | -                | -         |    -0.78 | beastik, majky, MoriiSko, oskar, SHOCK |
|            4 |     4044 | 2024-07-29 | Alliance          | W   | 0.057      | -            | -                | -                | -         |     0.52 | beastik, majky, MoriiSko, oskar, SHOCK |
|            3 |     4153 | 2024-07-25 | B8                | L   | 0.032      | -            | -                | -                | -         |    -0.48 | beastik, majky, MoriiSko, oskar, SHOCK |
|            2 |     4226 | 2024-07-23 | RUSH B            | L   | 0.019      | -            | -                | -                | -         |    -0.47 | beastik, majky, MoriiSko, oskar, SHOCK |
|            1 |     4261 | 2024-07-22 | CPH Wolves        | W   | 0.011      | -            | -                | -                | -         |     0.04 | beastik, majky, MoriiSko, oskar, SHOCK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,119.34)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-11-12 |      0.765 | $500.00        | $382.43         |
| 2024-10-20 |      0.611 | $2,500.00      | $1,528.40       |
| 2024-10-13 |      0.566 | $5,000.00      | $2,828.02       |
| 2024-09-26 |      0.452 | $500.00        | $225.89         |
| 2024-09-22 |      0.425 | $3,083.00      | $1,310.51       |
| 2024-09-15 |      0.379 | $22,000.00     | $8,333.38       |
| 2024-08-28 |      0.259 | $5,000.00      | $1,294.54       |
| 2024-08-18 |      0.192 | $10,000.00     | $1,918.59       |
| 2024-08-04 |      0.099 | $3,016.00      | $297.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
