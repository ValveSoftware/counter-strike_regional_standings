### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [116](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  820.9<br />
<br />
Final Rank Value (820.9) = Starting Rank Value (840.5) + Head To Head Adjustments (-19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.5
- 400 + ( ( 0.222 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 840.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |      259 | 2024-12-12 | ENCE              | L   | 0.945      | -            | -                | -                | -         |    -3.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      267 | 2024-12-11 | Fire Flux         | L   | 0.940      | -            | -                | -                | -         |   -11.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |      271 | 2024-12-11 | KOI               | W   | 0.939      | 0.435        | 0.043 (0.018)    | 0.387 (0.158)    | 0 (0.000) |    20.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |      280 | 2024-12-10 | JiJieHao          | L   | 0.933      | -            | -                | -                | -         |   -20.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |      291 | 2024-12-09 | CYBERSHOKE        | W   | 0.926      | 0.435        | 0.017 (0.007)    | 0.624 (0.251)    | 0 (0.000) |    15.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |      311 | 2024-12-08 | Insilio           | L   | 0.918      | -            | -                | -                | -         |   -17.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |      365 | 2024-12-06 | Into the Breach   | L   | 0.906      | -            | -                | -                | -         |    -9.40 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |      371 | 2024-12-06 | Illuminar         | L   | 0.904      | -            | -                | -                | -         |   -13.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |      420 | 2024-12-04 | Fire Flux         | W   | 0.892      | 0.435        | 0.018 (0.007)    | 0.635 (0.246)    | 0 (0.000) |    14.90 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |      462 | 2024-12-02 | TSM               | L   | 0.877      | -            | -                | -                | -         |   -12.44 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |      601 | 2024-11-24 | Fire Flux         | W   | 0.826      | 0.333        | -                | 0.635 (0.175)    | 0 (0.000) |    14.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |      627 | 2024-11-23 | PCIFIC            | W   | 0.819      | -            | -                | -                | 0 (0.000) |     4.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1012 | 2024-11-07 | Sashi             | L   | 0.712      | -            | -                | -                | -         |    -6.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1084 | 2024-11-03 | Aurora Young Blud | W   | 0.685      | 0.384        | 0.045 (0.012)    | 0.837 (0.220)    | 0 (0.000) |    13.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1114 | 2024-11-02 | 9 Pandas          | L   | 0.678      | -            | -                | -                | -         |    -3.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1119 | 2024-11-02 | Rebels            | L   | 0.677      | -            | -                | -                | -         |   -10.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     1135 | 2024-11-01 | SINNERS           | L   | 0.672      | -            | -                | -                | -         |    -5.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     1188 | 2024-10-29 | Johnny Speeds     | L   | 0.653      | -            | -                | -                | -         |    -5.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     1193 | 2024-10-29 | Rare Atom         | W   | 0.652      | 0.333        | 0.060 (0.013)    | -                | 0 (0.000) |    14.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     1196 | 2024-10-29 | Gaimin Gladiators | L   | 0.652      | -            | -                | -                | -         |    -6.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     1229 | 2024-10-27 | Rebels            | W   | 0.638      | 0.371        | 0.034 (0.008)    | 0.299 (0.071)    | 0 (0.000) |    10.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     1293 | 2024-10-24 | NewBALLS          | W   | 0.617      | -            | -                | -                | 0 (0.000) |     3.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     1339 | 2024-10-20 | DMS               | L   | 0.592      | -            | -                | -                | -         |   -11.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     1531 | 2024-10-11 | ARCRED            | W   | 0.531      | 0.384        | 0.047 (0.010)    | -                | 0 (0.000) |     6.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     1997 | 2024-09-27 | WW                | L   | 0.437      | -            | -                | -                | -         |   -11.59 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     2078 | 2024-09-25 | Aurora            | L   | 0.426      | -            | -                | -                | -         |    -5.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     2091 | 2024-09-25 | CPH Wolves        | L   | 0.424      | -            | -                | -                | -         |    -7.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     2130 | 2024-09-24 | Into the Breach   | L   | 0.419      | -            | -                | -                | -         |    -5.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2242 | 2024-09-20 | CYBERSHOKE        | W   | 0.392      | 0.435        | -                | 0.624 (0.106)    | -         |     6.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2310 | 2024-09-18 | Insilio           | W   | 0.379      | -            | -                | -                | -         |     5.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2371 | 2024-09-16 | FAVBET            | L   | 0.365      | -            | -                | -                | -         |    -4.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2404 | 2024-09-15 | Nexus             | W   | 0.358      | -            | -                | -                | -         |     0.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2576 | 2024-09-09 | NAVI Junior       | L   | 0.319      | -            | -                | -                | -         |    -2.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2628 | 2024-09-07 | CPH Wolves        | W   | 0.305      | -            | -                | -                | -         |     3.60 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2656 | 2024-09-06 | GamerLegion       | L   | 0.299      | -            | -                | -                | -         |    -5.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2685 | 2024-09-05 | GL Academy        | W   | 0.292      | -            | -                | -                | -         |     0.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2758 | 2024-09-03 | Anonymo           | W   | 0.279      | 0.372        | 0.064 (0.007)    | -                | -         |     4.15 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2786 | 2024-09-02 | 9INE              | W   | 0.272      | 0.435        | 0.125 (0.015)    | 1.000 (0.118)    | -         |     5.95 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     2839 | 2024-08-30 | CPH Wolves        | W   | 0.252      | -            | -                | -                | -         |     3.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     2846 | 2024-08-30 | OG                | L   | 0.251      | -            | -                | -                | -         |    -2.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     2944 | 2024-08-28 | EYEBALLERS        | W   | 0.237      | -            | -                | -                | -         |     3.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     2984 | 2024-08-27 | B8                | L   | 0.233      | -            | -                | -                | -         |    -1.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     2996 | 2024-08-27 | Revenant          | L   | 0.231      | -            | -                | -                | -         |    -4.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     3061 | 2024-08-26 | Passion UA        | W   | 0.225      | 0.435        | 0.107 (0.010)    | 0.826 (0.081)    | -         |     6.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3203 | 2024-08-22 | DASH              | L   | 0.197      | -            | -                | -                | -         |    -4.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3350 | 2024-08-18 | los kogutos       | W   | 0.173      | 0.435        | -                | 0.836 (0.063)    | -         |     4.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3356 | 2024-08-18 | BetBoom           | L   | 0.171      | -            | -                | -                | -         |    -1.05 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3379 | 2024-08-17 | Insilio           | W   | 0.165      | -            | -                | -                | -         |     2.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3396 | 2024-08-16 | RUBY              | W   | 0.159      | -            | -                | -                | -         |     0.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3446 | 2024-08-15 | Rhyno             | L   | 0.150      | -            | -                | -                | -         |    -2.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3492 | 2024-08-13 | DMS               | W   | 0.138      | -            | -                | -                | -         |     1.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3542 | 2024-08-12 | SINNERS           | W   | 0.131      | -            | -                | -                | -         |     3.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3568 | 2024-08-11 | Nemiga            | L   | 0.124      | -            | -                | -                | -         |    -0.34 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3581 | 2024-08-10 | CYBERSHOKE        | L   | 0.119      | -            | -                | -                | -         |    -1.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     3588 | 2024-08-10 | Sashi             | W   | 0.118      | -            | -                | -                | -         |     2.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     3615 | 2024-08-09 | MOUZ NXT          | W   | 0.111      | -            | -                | -                | -         |     0.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     3634 | 2024-08-08 | SovvyKiNG         | W   | 0.105      | -            | -                | -                | -         |     0.56 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     3649 | 2024-08-08 | Passion UA        | W   | 0.103      | -            | -                | -                | -         |     2.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     3732 | 2024-08-06 | DMS               | W   | 0.091      | -            | -                | -                | -         |     0.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     3946 | 2024-07-31 | K27               | W   | 0.052      | -            | -                | -                | -         |     0.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     3953 | 2024-07-31 | los kogutos       | W   | 0.051      | -            | -                | -                | -         |     1.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     4003 | 2024-07-30 | GUN5              | L   | 0.044      | -            | -                | -                | -         |    -0.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     4069 | 2024-07-28 | SovvyKiNG         | W   | 0.031      | -            | -                | -                | -         |     0.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4102 | 2024-07-26 | Sampi             | L   | 0.019      | -            | -                | -                | -         |    -0.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4155 | 2024-07-25 | Monte             | L   | 0.010      | -            | -                | -                | -         |    -0.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,211.16)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.826 | $5,000.00      | $4,129.24       |
| 2024-09-21 |      0.398 | $1,250.00      | $497.92         |
| 2024-08-28 |      0.239 | $2,000.00      | $478.46         |
| 2024-08-18 |      0.172 | $5,000.00      | $860.91         |
| 2024-08-11 |      0.124 | $10,000.00     | $1,244.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
