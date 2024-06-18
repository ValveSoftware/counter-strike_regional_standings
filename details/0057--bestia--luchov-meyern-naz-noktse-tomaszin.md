### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, meyern, naz, Noktse, tomaszin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [13]( ../standings_americas.md)<br />
Final Rank Value:  1069.4<br />
<br />
Final Rank Value (1069.4) = Starting Rank Value (1022.0) + Head To Head Adjustments (47.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.502[<sup>2</sup>](#table1)
- Opponent Network: 0.285[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.0
- 400 + ( ( 0.306 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1022.0


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
|           81 |       59 | 2024-06-15 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -2.55 | luchov, meyern, naz, Noktse, tomaszin  |
|           80 |       90 | 2024-06-14 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -2.87 | luchov, meyern, naz, Noktse, tomaszin  |
|           79 |      189 | 2024-06-10 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -2.96 | luchov, meyern, naz, Noktse, tomaszin  |
|           78 |      191 | 2024-06-10 | Bounty Hunters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.10 | luchov, meyern, naz, Noktse, tomaszin  |
|           77 |      223 | 2024-06-09 | RED Canids     | W   | 1.000      | 0.384        | 0.115 (0.044)    | 0.693 (0.266)    | 0 (0.000) |    23.18 | luchov, meyern, naz, Noktse, tomaszin  |
|           76 |      246 | 2024-06-09 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -14.60 | luchov, meyern, naz, Noktse, tomaszin  |
|           75 |      290 | 2024-06-08 | Solid          | W   | 1.000      | 0.384        | 0.051 (0.020)    | -                | 0 (0.000) |     8.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           74 |      309 | 2024-06-08 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -27.12 | luchov, meyern, naz, Noktse, tomaszin  |
|           73 |      350 | 2024-06-07 | ODDIK          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.95 | luchov, meyern, naz, Noktse, tomaszin  |
|           72 |      410 | 2024-06-06 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |   -22.65 | luchov, meyern, naz, Noktse, tomaszin  |
|           71 |      473 | 2024-06-05 | MIBR           | L   | 1.000      | -            | -                | -                | -         |    -1.78 | luchov, meyern, naz, Noktse, tomaszin  |
|           70 |      523 | 2024-06-04 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -17.60 | luchov, meyern, naz, Noktse, tomaszin  |
|           69 |      841 | 2024-05-22 | Case           | W   | 1.000      | 0.450        | -                | 0.579 (0.261)    | 0 (0.000) |     8.03 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |      845 | 2024-05-22 | Case           | W   | 1.000      | 0.450        | -                | 0.579 (0.261)    | 0 (0.000) |     8.60 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |      851 | 2024-05-22 | Fluxo          | W   | 1.000      | 0.450        | 0.159 (0.072)    | 0.627 (0.282)    | 0 (0.000) |    17.87 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |      852 | 2024-05-22 | Fluxo          | W   | 1.000      | 0.450        | 0.159 (0.072)    | 0.627 (0.282)    | 0 (0.000) |    19.46 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |      886 | 2024-05-21 | ex-2GAME       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.89 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |      889 | 2024-05-21 | ex-2GAME       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |      895 | 2024-05-21 | Imperial       | W   | 1.000      | 0.450        | 0.406 (0.183)    | 0.694 (0.312)    | -         |    28.72 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |      897 | 2024-05-21 | Imperial       | W   | 1.000      | 0.450        | 0.406 (0.183)    | 0.694 (0.312)    | -         |    29.45 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |      925 | 2024-05-20 | Corinthians    | W   | 1.000      | -            | -                | -                | -         |     4.49 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |      930 | 2024-05-20 | 9z             | W   | 1.000      | 0.450        | 0.525 (0.236)    | 0.749 (0.337)    | -         |    29.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |      932 | 2024-05-20 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -1.31 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |     1012 | 2024-05-17 | Solid          | L   | 0.991      | -            | -                | -                | -         |   -19.10 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |     1014 | 2024-05-17 | Solid          | W   | 0.991      | 0.450        | 0.051 (0.023)    | 0.566 (0.252)    | -         |    11.82 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |     1098 | 2024-05-15 | ODDIK          | W   | 0.977      | -            | -                | -                | -         |    14.62 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |     1100 | 2024-05-15 | ODDIK          | W   | 0.977      | -            | -                | -                | -         |    15.93 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |     1109 | 2024-05-15 | Hype           | L   | 0.976      | -            | -                | -                | -         |   -20.84 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |     1157 | 2024-05-14 | Imperial       | L   | 0.970      | -            | -                | -                | -         |    -1.64 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |     1170 | 2024-05-14 | RED Canids     | L   | 0.969      | -            | -                | -                | -         |    -7.86 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |     1210 | 2024-05-12 | Solid          | W   | 0.957      | -            | -                | -                | -         |    12.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |     1217 | 2024-05-12 | O PLANO        | W   | 0.956      | -            | -                | -                | -         |     2.68 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |     1241 | 2024-05-11 | paiN           | L   | 0.949      | -            | -                | -                | -         |    -1.14 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |     1267 | 2024-05-10 | Imperial       | W   | 0.943      | 0.435        | 0.406 (0.166)    | 0.694 (0.284)    | -         |    28.39 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |     1283 | 2024-05-09 | Sharks         | W   | 0.938      | -            | -                | -                | -         |    18.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1312 | 2024-05-08 | Vikings KR     | W   | 0.929      | -            | -                | -                | -         |     9.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |     1344 | 2024-05-06 | Sharks         | L   | 0.917      | -            | -                | -                | -         |   -10.32 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |     1582 | 2024-04-25 | RED Canids     | L   | 0.844      | -            | -                | -                | -         |    -5.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |     1584 | 2024-04-25 | RED Canids     | L   | 0.844      | -            | -                | -                | -         |    -5.41 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1849 | 2024-04-16 | O PLANO        | L   | 0.784      | -            | -                | -                | -         |   -22.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     1946 | 2024-04-11 | Galorys        | L   | 0.749      | -            | -                | -                | -         |   -13.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     2028 | 2024-04-09 | Galorys        | L   | 0.737      | -            | -                | -                | -         |   -14.64 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     2033 | 2024-04-09 | Galorys        | W   | 0.737      | -            | -                | -                | -         |     8.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     2069 | 2024-04-08 | RED Canids     | L   | 0.731      | -            | -                | -                | -         |    -6.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     2112 | 2024-04-07 | Sharks         | L   | 0.722      | -            | -                | -                | -         |   -17.01 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     2119 | 2024-04-06 | Fluxo          | W   | 0.717      | -            | -                | -                | -         |    15.10 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     2158 | 2024-04-04 | adalYamigos    | L   | 0.704      | -            | -                | -                | -         |   -17.82 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     2162 | 2024-04-04 | adalYamigos    | W   | 0.704      | -            | -                | -                | -         |     4.23 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     2174 | 2024-04-04 | Imperial       | L   | 0.703      | -            | -                | -                | -         |    -0.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     2211 | 2024-04-03 | Fluxo          | L   | 0.697      | -            | -                | -                | -         |    -8.24 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     2247 | 2024-04-02 | Sharks         | W   | 0.691      | -            | -                | -                | -         |     4.82 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     2252 | 2024-04-02 | Fluxo          | L   | 0.690      | -            | -                | -                | -         |    -8.47 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     2341 | 2024-03-27 | W7M            | L   | 0.651      | -            | -                | -                | -         |   -15.62 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     2346 | 2024-03-27 | W7M            | W   | 0.651      | -            | -                | -                | -         |     4.80 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     2656 | 2024-03-12 | RED Canids     | L   | 0.549      | -            | -                | -                | -         |    -5.34 | deco, luchov, meyern, Noktse, tomaszin |
|           26 |     2666 | 2024-03-11 | FURIA Academy  | W   | 0.544      | -            | -                | -                | -         |     1.23 | deco, luchov, meyern, Noktse, tomaszin |
|           25 |     2689 | 2024-03-10 | adalYamigos    | L   | 0.538      | -            | -                | -                | -         |   -14.26 | deco, luchov, meyern, Noktse, tomaszin |
|           24 |     2737 | 2024-03-08 | FURIA Academy  | W   | 0.524      | -            | -                | -                | -         |     1.09 | deco, luchov, meyern, Noktse, tomaszin |
|           23 |     2902 | 2024-03-02 | Wildcard       | L   | 0.483      | -            | -                | -                | -         |    -8.71 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     2919 | 2024-03-01 | Liquid         | L   | 0.477      | -            | -                | -                | -         |    -0.47 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     3043 | 2024-02-24 | Imperial       | L   | 0.436      | -            | -                | -                | -         |    -0.77 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     3062 | 2024-02-23 | 9z             | L   | 0.430      | -            | -                | -                | -         |    -0.48 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     3070 | 2024-02-22 | Imperial       | W   | 0.424      | 0.143        | 0.406 (0.025)    | -                | -         |    12.69 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     3079 | 2024-02-22 | 9z             | L   | 0.423      | -            | -                | -                | -         |    -0.42 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     3104 | 2024-02-21 | W7M            | W   | 0.416      | -            | -                | -                | -         |     3.21 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     3179 | 2024-02-18 | FURIA Academy  | W   | 0.396      | -            | -                | -                | -         |     0.85 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3219 | 2024-02-16 | Case           | L   | 0.384      | -            | -                | -                | -         |    -8.22 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3341 | 2024-02-12 | FURIA Academy  | W   | 0.358      | -            | -                | -                | -         |     0.71 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3476 | 2024-02-02 | Imperial       | L   | 0.291      | -            | -                | -                | -         |    -0.48 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3478 | 2024-02-02 | ODDIK          | W   | 0.291      | -            | -                | -                | -         |     4.00 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3482 | 2024-02-02 | Imperial       | L   | 0.290      | -            | -                | -                | -         |    -0.46 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3666 | 2024-01-23 | Imperial       | L   | 0.224      | -            | -                | -                | -         |    -0.37 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3684 | 2024-01-22 | AJF            | W   | 0.218      | -            | -                | -                | -         |     0.20 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3719 | 2024-01-21 | W7M            | W   | 0.210      | -            | -                | -                | -         |     1.45 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3752 | 2024-01-20 | MIBR           | L   | 0.204      | -            | -                | -                | -         |    -0.22 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3802 | 2024-01-19 | Imperial       | W   | 0.198      | -            | -                | -                | -         |     5.91 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3806 | 2024-01-19 | Flamengo       | W   | 0.197      | -            | -                | -                | -         |     0.38 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     4012 | 2024-01-15 | TIMACETA       | L   | 0.171      | -            | -                | -                | -         |    -5.08 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     4042 | 2024-01-14 | Sharks         | L   | 0.164      | -            | -                | -                | -         |    -2.90 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     4047 | 2024-01-14 | W7M            | W   | 0.163      | -            | -                | -                | -         |     1.11 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     4070 | 2024-01-13 | Intense        | W   | 0.157      | -            | -                | -                | -         |     0.15 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,501.75)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-10 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      0.957 | $5,000.00      | $4,784.96       |
| 2024-02-25 |      0.443 | $5,000.00      | $2,216.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
