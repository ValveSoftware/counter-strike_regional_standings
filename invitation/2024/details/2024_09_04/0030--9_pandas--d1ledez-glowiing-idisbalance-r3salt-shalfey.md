### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [30](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  1151.1<br />
<br />
Final Rank Value (1151.1) = Starting Rank Value (1021.2) + Head To Head Adjustments (129.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1021.2
- 400 + ( ( 0.314 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 1021.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      273 | 2024-08-27 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -2.75 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      310 | 2024-08-26 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -1.05 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      382 | 2024-08-25 | FURIA             | W   | 1.000      | 0.143        | 0.317 (0.045)    | -                | 1 (1.000) |    29.05 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      442 | 2024-08-23 | Nemiga            | W   | 1.000      | 0.143        | 0.299 (0.043)    | -                | 0 (0.000) |    19.68 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      467 | 2024-08-22 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |   -21.61 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      507 | 2024-08-21 | Rebels            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      536 | 2024-08-21 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.37 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      571 | 2024-08-20 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -15.91 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      754 | 2024-08-13 | SINNERS           | W   | 1.000      | 0.500        | 0.084 (0.042)    | 1.000 (0.500)    | 0 (0.000) |    11.37 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           53 |      804 | 2024-08-12 | KOI               | W   | 1.000      | 0.500        | -                | 0.332 (0.166)    | 0 (0.000) |    10.05 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           52 |      884 | 2024-08-09 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -13.88 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           51 |      952 | 2024-08-07 | Zero Tenacity     | W   | 1.000      | 0.426        | 0.138 (0.059)    | 1.000 (0.426)    | 0 (0.000) |    15.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           50 |      999 | 2024-08-06 | GUN5              | W   | 1.000      | 0.500        | 0.090 (0.045)    | 0.828 (0.414)    | 0 (0.000) |     7.66 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           49 |     1034 | 2024-08-05 | Johnny Speeds     | W   | 0.999      | -            | -                | -                | 0 (0.000) |    20.34 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           48 |     1070 | 2024-08-04 | Insilio           | W   | 0.992      | -            | -                | -                | 0 (0.000) |     9.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           47 |     1096 | 2024-08-03 | GUN5              | W   | 0.986      | -            | -                | -                | -         |     8.29 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           46 |     1125 | 2024-08-02 | 9INE              | W   | 0.980      | 0.426        | -                | 0.723 (0.302)    | -         |    10.19 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           45 |     1138 | 2024-08-02 | Illuminar         | W   | 0.979      | -            | -                | -                | -         |     9.87 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           44 |     1159 | 2024-08-01 | PARIVISION        | L   | 0.974      | -            | -                | -                | -         |   -13.56 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           43 |     1251 | 2024-07-30 | TSM               | L   | 0.961      | -            | -                | -                | -         |   -17.53 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           42 |     1261 | 2024-07-30 | Insilio           | W   | 0.960      | -            | -                | -                | -         |     9.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           41 |     1319 | 2024-07-28 | QUAZAR            | W   | 0.948      | -            | -                | -                | -         |     1.22 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           40 |     1485 | 2024-07-23 | Betera            | W   | 0.914      | -            | -                | -                | -         |     2.17 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           39 |     1716 | 2024-07-17 | 3DMAX             | L   | 0.875      | -            | -                | -                | -         |    -3.68 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           38 |     2242 | 2024-06-10 | Aurora            | L   | 0.626      | -            | -                | -                | -         |    -3.67 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           37 |     2244 | 2024-06-10 | SINNERS           | W   | 0.626      | -            | -                | -                | -         |    10.51 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           36 |     2249 | 2024-06-10 | 3DMAX             | L   | 0.625      | -            | -                | -                | -         |    -1.94 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           35 |     2283 | 2024-06-09 | RUSH B            | L   | 0.620      | -            | -                | -                | -         |   -13.99 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           34 |     2292 | 2024-06-09 | PARIVISION        | L   | 0.619      | -            | -                | -                | -         |    -9.26 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           33 |     2298 | 2024-06-09 | SAW               | W   | 0.619      | 0.143        | 0.323 (0.029)    | -                | -         |    17.64 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           32 |     2308 | 2024-06-09 | Monte             | W   | 0.618      | -            | -                | -                | -         |     8.13 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           31 |     2571 | 2024-06-04 | Sangal            | L   | 0.587      | -            | -                | -                | -         |    -6.02 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           30 |     2795 | 2024-05-26 | MOUZ NXT          | W   | 0.527      | 0.435        | 0.112 (0.026)    | 0.853 (0.195)    | -         |     7.55 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           29 |     2799 | 2024-05-26 | 1WIN              | W   | 0.526      | -            | -                | -                | -         |     6.56 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           28 |     2813 | 2024-05-25 | Space             | W   | 0.521      | -            | -                | -                | -         |     4.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           27 |     2839 | 2024-05-24 | SINNERS           | W   | 0.512      | 0.435        | -                | 1.000 (0.223)    | -         |     9.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           26 |     2968 | 2024-05-20 | BLEED             | L   | 0.487      | -            | -                | -                | -         |    -6.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           25 |     3021 | 2024-05-18 | Passion UA        | W   | 0.474      | 0.500        | 0.147 (0.035)    | 1.000 (0.237)    | -         |     7.11 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           24 |     3093 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.460      | 0.500        | -                | 0.820 (0.189)    | -         |     7.19 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           23 |     3254 | 2024-05-12 | BetBoom           | L   | 0.433      | -            | -                | -                | -         |    -2.86 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           22 |     3280 | 2024-05-11 | RUBY              | W   | 0.427      | -            | -                | -                | -         |     4.56 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           21 |     3327 | 2024-05-09 | Zero Tenacity     | W   | 0.412      | 0.435        | 0.138 (0.025)    | 1.000 (0.179)    | -         |     6.88 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           20 |     3367 | 2024-05-07 | Sashi             | L   | 0.400      | -            | -                | -                | -         |    -4.30 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           19 |     3412 | 2024-05-05 | ARCRED            | W   | 0.385      | -            | -                | -                | -         |     4.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           18 |     3421 | 2024-05-04 | BetBoom           | L   | 0.379      | -            | -                | -                | -         |    -2.27 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           17 |     3427 | 2024-05-03 | fnatic            | W   | 0.375      | 0.435        | 0.293 (0.048)    | -                | -         |    10.27 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           16 |     3471 | 2024-05-02 | MOUZ NXT          | W   | 0.365      | -            | -                | -                | -         |     5.82 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           15 |     3517 | 2024-04-30 | Passion UA        | L   | 0.352      | -            | -                | -                | -         |    -5.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           14 |     3554 | 2024-04-28 | Gaimin Gladiators | W   | 0.339      | -            | -                | -                | -         |     4.26 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           13 |     3594 | 2024-04-26 | Passion UA        | L   | 0.327      | -            | -                | -                | -         |    -5.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           12 |     3783 | 2024-04-19 | Alliance          | L   | 0.279      | -            | -                | -                | -         |    -6.33 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma      |
|           11 |     3867 | 2024-04-17 | Sangal            | L   | 0.265      | -            | -                | -                | -         |    -2.00 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|           10 |     4017 | 2024-04-10 | SAW               | L   | 0.221      | -            | -                | -                | -         |    -0.33 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            9 |     4070 | 2024-04-09 | SINNERS           | L   | 0.215      | -            | -                | -                | -         |    -2.02 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            8 |     4093 | 2024-04-09 | Aurora            | L   | 0.212      | -            | -                | -                | -         |    -0.53 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            7 |     4107 | 2024-04-08 | 1WIN              | L   | 0.207      | -            | -                | -                | -         |    -4.36 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            6 |     4116 | 2024-04-08 | Metizport         | W   | 0.206      | -            | -                | -                | -         |     1.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            5 |     4177 | 2024-04-05 | Secret            | L   | 0.186      | -            | -                | -                | -         |    -5.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            4 |     4208 | 2024-04-04 | TSM               | W   | 0.181      | -            | -                | -                | -         |     0.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            3 |     4253 | 2024-04-03 | EYEBALLERS        | W   | 0.174      | -            | -                | -                | -         |     1.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            2 |     4261 | 2024-04-03 | 9INE              | W   | 0.173      | -            | -                | -                | -         |     0.30 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            1 |     4288 | 2024-04-02 | Sangal            | W   | 0.167      | -            | -                | -                | -         |     4.00 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,768.90)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.621 | $5,000.00      | $3,104.65       |
| 2024-05-26 |      0.527 | $22,000.00     | $11,592.79      |
| 2024-05-12 |      0.434 | $5,000.00      | $2,170.05       |
| 2024-05-04 |      0.380 | $5,000.00      | $1,901.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
