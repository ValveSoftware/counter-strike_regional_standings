### Roster Details<br />
Team Name: Case<br />
Roster: nyezin, paqueta, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  854.0<br />
<br />
Final Rank Value (854.0) = Starting Rank Value (893.4) + Head To Head Adjustments (-39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.4
- 400 + ( ( 0.234 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 893.4


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
|           88 |        0 | 2024-07-11 | Galorys        | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.519 (0.192)    | 0 (0.000) |    13.70 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           87 |       17 | 2024-07-10 | Legacy         | L   | 1.000      | -            | -                | -                | -         |    -4.89 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           86 |       43 | 2024-07-09 | W7M            | W   | 1.000      | 0.371        | -                | 0.404 (0.150)    | 0 (0.000) |    11.92 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           85 |      133 | 2024-06-19 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -8.57 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           84 |      135 | 2024-06-18 | Solid          | W   | 1.000      | 0.337        | 0.048 (0.016)    | 0.585 (0.197)    | 0 (0.000) |    16.78 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           83 |      451 | 2024-06-08 | Galorys        | L   | 0.980      | -            | -                | -                | -         |   -15.05 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           82 |      500 | 2024-06-07 | Vikings KR     | L   | 0.974      | -            | -                | -                | -         |   -19.16 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           81 |      534 | 2024-06-06 | Bounty Hunters | L   | 0.969      | -            | -                | -                | -         |   -14.22 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           80 |      572 | 2024-06-06 | Bounty Hunters | L   | 0.966      | -            | -                | -                | -         |   -15.45 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           79 |      694 | 2024-06-03 | Solid          | L   | 0.948      | -            | -                | -                | -         |   -14.75 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           78 |      741 | 2024-06-01 | ex-2GAME       | W   | 0.935      | -            | -                | -                | 0 (0.000) |     7.43 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           77 |      828 | 2024-05-29 | Dusty Roots    | W   | 0.915      | -            | -                | -                | 0 (0.000) |     8.84 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           76 |      880 | 2024-05-27 | Hawks          | L   | 0.901      | -            | -                | -                | -         |   -24.82 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           75 |      975 | 2024-05-22 | BESTIA         | L   | 0.868      | -            | -                | -                | -         |    -7.34 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           74 |      979 | 2024-05-22 | BESTIA         | L   | 0.868      | -            | -                | -                | -         |    -7.80 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           73 |     1018 | 2024-05-21 | Sharks         | W   | 0.862      | 0.450        | 0.046 (0.018)    | 0.520 (0.202)    | 0 (0.000) |    17.95 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           72 |     1019 | 2024-05-21 | Sharks         | L   | 0.862      | -            | -                | -                | -         |    -9.03 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           71 |     1028 | 2024-05-21 | ODDIK          | W   | 0.861      | 0.303        | 0.042 (0.011)    | 0.602 (0.157)    | 0 (0.000) |    15.37 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           70 |     1067 | 2024-05-20 | Galorys        | W   | 0.854      | -            | -                | -                | 0 (0.000) |    13.04 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           69 |     1085 | 2024-05-19 | ODDIK          | L   | 0.848      | -            | -                | -                | -         |   -11.08 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           68 |     1113 | 2024-05-18 | Solid          | W   | 0.841      | 0.303        | 0.048 (0.012)    | 0.585 (0.149)    | 0 (0.000) |    13.50 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           67 |     1150 | 2024-05-17 | Fluxo          | L   | 0.835      | -            | -                | -                | -         |    -5.08 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           66 |     1156 | 2024-05-17 | Hype           | W   | 0.834      | -            | -                | -                | 0 (0.000) |    10.99 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           65 |     1189 | 2024-05-16 | KRÜ            | W   | 0.827      | -            | -                | -                | -         |    13.36 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           64 |     1197 | 2024-05-16 | Yawara         | W   | 0.826      | -            | -                | -                | -         |     3.06 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           63 |     1235 | 2024-05-15 | Corinthians    | W   | 0.821      | -            | -                | -                | -         |     3.19 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           62 |     1237 | 2024-05-15 | Corinthians    | W   | 0.821      | -            | -                | -                | -         |     3.29 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           61 |     1244 | 2024-05-15 | Galorys        | W   | 0.820      | 0.371        | 0.026 (0.008)    | 0.519 (0.158)    | -         |    14.14 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           60 |     1285 | 2024-05-14 | Galorys        | W   | 0.815      | 0.450        | 0.026 (0.010)    | 0.519 (0.190)    | -         |    15.09 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           59 |     1289 | 2024-05-14 | Galorys        | L   | 0.815      | -            | -                | -                | -         |   -10.59 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           58 |     1302 | 2024-05-14 | Hype           | L   | 0.814      | -            | -                | -                | -         |   -14.05 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           57 |     1324 | 2024-05-13 | Intense        | W   | 0.808      | -            | -                | -                | -         |     4.23 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           56 |     1352 | 2024-05-12 | Solid          | L   | 0.800      | -            | -                | -                | -         |   -10.97 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           55 |     1385 | 2024-05-11 | Galorys        | L   | 0.793      | -            | -                | -                | -         |   -12.36 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           54 |     1463 | 2024-05-07 | inSanitY       | L   | 0.767      | -            | -                | -                | -         |   -10.12 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           53 |     1491 | 2024-05-05 | ODDIK          | L   | 0.755      | -            | -                | -                | -         |    -9.35 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           52 |     1550 | 2024-05-02 | ODDIK          | W   | 0.735      | 0.450        | 0.042 (0.014)    | 0.602 (0.199)    | -         |    14.39 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           51 |     1551 | 2024-05-02 | ODDIK          | L   | 0.735      | -            | -                | -                | -         |    -8.77 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           50 |     1575 | 2024-05-01 | 9z             | L   | 0.727      | -            | -                | -                | -         |    -0.27 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           49 |     1577 | 2024-05-01 | 9z             | L   | 0.727      | -            | -                | -                | -         |    -0.27 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           48 |     1951 | 2024-04-17 | MIBR           | L   | 0.634      | -            | -                | -                | -         |    -0.39 | RCF, RICIOLI, snow, urban0, yepz       |
|           47 |     1988 | 2024-04-16 | Galorys        | W   | 0.628      | -            | -                | -                | -         |    10.48 | RCF, RICIOLI, snow, urban0, yepz       |
|           46 |     2039 | 2024-04-13 | MIBR           | L   | 0.607      | -            | -                | -                | -         |    -0.37 | pr1sma, RCF, RICIOLI, urban0, yepz     |
|           45 |     2052 | 2024-04-12 | adalYamigos    | W   | 0.602      | -            | -                | -                | -         |     5.03 | RCF, RICIOLI, snow, urban0, yepz       |
|           44 |     2087 | 2024-04-11 | FURIA Academy  | W   | 0.593      | -            | -                | -                | -         |     2.61 | RCF, RICIOLI, snow, urban0, yepz       |
|           43 |     2160 | 2024-04-09 | paiN           | L   | 0.582      | -            | -                | -                | -         |    -0.35 | RCF, RICIOLI, snow, urban0, yepz       |
|           42 |     2166 | 2024-04-09 | paiN           | L   | 0.581      | -            | -                | -                | -         |    -0.35 | RCF, RICIOLI, snow, urban0, yepz       |
|           41 |     2237 | 2024-04-07 | adalYamigos    | L   | 0.569      | -            | -                | -                | -         |   -13.44 | RCF, RICIOLI, snow, urban0, yepz       |
|           40 |     2299 | 2024-04-04 | RED Canids     | W   | 0.548      | 0.450        | 0.115 (0.028)    | 0.698 (0.172)    | -         |    14.67 | RCF, RICIOLI, snow, urban0, yepz       |
|           39 |     2302 | 2024-04-04 | RED Canids     | L   | 0.548      | -            | -                | -                | -         |    -2.55 | RCF, RICIOLI, snow, urban0, yepz       |
|           38 |     2338 | 2024-04-03 | Imperial       | L   | 0.542      | -            | -                | -                | -         |    -0.51 | RCF, RICIOLI, snow, urban0, yepz       |
|           37 |     2341 | 2024-04-03 | Imperial       | L   | 0.541      | -            | -                | -                | -         |    -0.51 | RCF, RICIOLI, snow, urban0, yepz       |
|           36 |     2471 | 2024-03-27 | MIBR           | L   | 0.495      | -            | -                | -                | -         |    -0.33 | RCF, RICIOLI, snow, urban0, yepz       |
|           35 |     2477 | 2024-03-27 | MIBR           | L   | 0.495      | -            | -                | -                | -         |    -0.33 | RCF, RICIOLI, snow, urban0, yepz       |
|           34 |     2647 | 2024-03-17 | ODDIK          | L   | 0.427      | -            | -                | -                | -         |    -5.08 | RCF, RICIOLI, snow, urban0, yepz       |
|           33 |     2671 | 2024-03-16 | MIBR Academy   | W   | 0.421      | -            | -                | -                | -         |     1.69 | RCF, RICIOLI, snow, urban0, yepz       |
|           32 |     2686 | 2024-03-15 | RED Canids     | L   | 0.415      | -            | -                | -                | -         |    -2.23 | RCF, RICIOLI, snow, urban0, yepz       |
|           31 |     2726 | 2024-03-14 | FURIA Academy  | W   | 0.407      | -            | -                | -                | -         |     1.75 | RCF, RICIOLI, snow, urban0, yepz       |
|           30 |     2745 | 2024-03-13 | RED Canids     | L   | 0.401      | -            | -                | -                | -         |    -2.08 | RCF, RICIOLI, snow, urban0, yepz       |
|           29 |     2755 | 2024-03-13 | Yawara         | L   | 0.400      | -            | -                | -                | -         |   -11.23 | RCF, RICIOLI, snow, urban0, yepz       |
|           28 |     2759 | 2024-03-13 | ODDIK          | L   | 0.400      | -            | -                | -                | -         |    -5.09 | RCF, RICIOLI, snow, urban0, yepz       |
|           27 |     2795 | 2024-03-12 | LA RUGONETA    | W   | 0.393      | -            | -                | -                | -         |     1.94 | RCF, RICIOLI, snow, urban0, yepz       |
|           26 |     2824 | 2024-03-10 | FURIA Academy  | W   | 0.381      | -            | -                | -                | -         |     1.46 | RCF, RICIOLI, snow, urban0, yepz       |
|           25 |     2844 | 2024-03-09 | Sharks         | W   | 0.374      | -            | -                | -                | -         |     7.71 | RCF, RICIOLI, snow, urban0, yepz       |
|           24 |     2894 | 2024-03-07 | Fluxo          | W   | 0.361      | 0.435        | 0.166 (0.026)    | -                | -         |     8.60 | RCF, RICIOLI, snow, urban0, yepz       |
|           23 |     2956 | 2024-03-05 | adalYamigos    | L   | 0.349      | -            | -                | -                | -         |    -8.66 | RCF, RICIOLI, snow, urban0, yepz       |
|           22 |     2958 | 2024-03-05 | adalYamigos    | L   | 0.348      | -            | -                | -                | -         |    -8.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           21 |     2986 | 2024-03-04 | Fluxo          | L   | 0.342      | -            | -                | -                | -         |    -2.79 | RCF, RICIOLI, snow, urban0, yepz       |
|           20 |     2987 | 2024-03-04 | Fluxo          | L   | 0.342      | -            | -                | -                | -         |    -2.85 | RCF, RICIOLI, snow, urban0, yepz       |
|           19 |     3163 | 2024-02-24 | ex-2GAME       | W   | 0.282      | -            | -                | -                | -         |     2.46 | RCF, RICIOLI, snow, urban0, yepz       |
|           18 |     3170 | 2024-02-24 | ex-2GAME       | L   | 0.282      | -            | -                | -                | -         |    -6.52 | RCF, RICIOLI, snow, urban0, yepz       |
|           17 |     3223 | 2024-02-21 | Solid          | W   | 0.262      | -            | -                | -                | -         |     4.31 | RCF, RICIOLI, snow, urban0, yepz       |
|           16 |     3224 | 2024-02-21 | Solid          | L   | 0.262      | -            | -                | -                | -         |    -4.02 | RCF, RICIOLI, snow, urban0, yepz       |
|           15 |     3231 | 2024-02-21 | Sharks         | L   | 0.262      | -            | -                | -                | -         |    -3.21 | RCF, RICIOLI, snow, urban0, yepz       |
|           14 |     3260 | 2024-02-20 | 9z             | L   | 0.255      | -            | -                | -                | -         |    -0.08 | RCF, RICIOLI, snow, urban0, yepz       |
|           13 |     3263 | 2024-02-20 | W7M            | W   | 0.254      | -            | -                | -                | -         |     2.98 | RCF, RICIOLI, snow, urban0, yepz       |
|           12 |     3267 | 2024-02-20 | Sharks         | L   | 0.253      | -            | -                | -                | -         |    -3.09 | RCF, RICIOLI, snow, urban0, yepz       |
|           11 |     3307 | 2024-02-18 | Galorys        | L   | 0.241      | -            | -                | -                | -         |    -4.09 | RCF, RICIOLI, snow, urban0, yepz       |
|           10 |     3328 | 2024-02-17 | Solid          | W   | 0.235      | -            | -                | -                | -         |     3.76 | RCF, RICIOLI, snow, urban0, yepz       |
|            9 |     3352 | 2024-02-16 | BESTIA         | W   | 0.228      | -            | -                | -                | -         |     4.72 | RCF, RICIOLI, snow, urban0, yepz       |
|            8 |     3385 | 2024-02-15 | 9z             | L   | 0.221      | -            | -                | -                | -         |    -0.06 | RCF, RICIOLI, snow, urban0, yepz       |
|            7 |     3386 | 2024-02-15 | Sharks         | W   | 0.221      | -            | -                | -                | -         |     4.39 | RCF, RICIOLI, snow, urban0, yepz       |
|            6 |     3393 | 2024-02-15 | Flamengo       | W   | 0.220      | -            | -                | -                | -         |     0.72 | RCF, RICIOLI, snow, urban0, yepz       |
|            5 |     3414 | 2024-02-14 | O PLANO C      | W   | 0.215      | -            | -                | -                | -         |     0.39 | RCF, RICIOLI, snow, urban0, yepz       |
|            4 |     3457 | 2024-02-13 | W7M            | W   | 0.209      | -            | -                | -                | -         |     2.55 | RCF, RICIOLI, snow, urban0, yepz       |
|            3 |     3461 | 2024-02-13 | W7M            | L   | 0.208      | -            | -                | -                | -         |    -4.08 | RCF, RICIOLI, snow, urban0, yepz       |
|            2 |     3466 | 2024-02-13 | Galorys        | W   | 0.207      | -            | -                | -                | -         |     3.16 | RCF, RICIOLI, snow, urban0, yepz       |
|            1 |     3479 | 2024-02-12 | Dusty Roots    | W   | 0.200      | -            | -                | -                | -         |     2.08 | RCF, RICIOLI, snow, urban0, yepz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,643.86)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      1.000 | $2,150.00      | $2,150.00       |
| 2024-06-09 |      0.988 | $600.00        | $592.84         |
| 2024-05-21 |      0.861 | $3,500.00      | $3,013.32       |
| 2024-05-19 |      0.848 | $1,000.00      | $848.05         |
| 2024-03-14 |      0.408 | $5,000.00      | $2,039.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
