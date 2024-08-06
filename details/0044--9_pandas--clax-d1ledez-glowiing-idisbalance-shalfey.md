### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [44](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1114.4<br />
<br />
Final Rank Value (1114.4) = Starting Rank Value (1003.2) + Head To Head Adjustments (111.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.478[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.244[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1003.2
- 400 + ( ( 0.293 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1003.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |        3 | 2024-08-06 | GUN5              | W   | 1.000      | 0.500        | 0.072 (0.036)    | 0.550 (0.275)    | 0 (0.000) |     6.66 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           61 |       38 | 2024-08-05 | Johnny Speeds     | W   | 1.000      | 0.143        | 0.122 (0.017)    | -                | 0 (0.000) |    22.23 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           60 |       74 | 2024-08-04 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           59 |      100 | 2024-08-03 | GUN5              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.32 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           58 |      129 | 2024-08-02 | 9INE              | W   | 1.000      | 0.426        | -                | 0.523 (0.223)    | 0 (0.000) |    10.40 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           57 |      142 | 2024-08-02 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.82 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           56 |      163 | 2024-08-01 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -13.37 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           55 |      255 | 2024-07-30 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.27 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           54 |      265 | 2024-07-30 | Insilio           | W   | 1.000      | -            | -                | -                | -         |    11.06 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      323 | 2024-07-28 | QUAZAR            | W   | 1.000      | -            | -                | -                | -         |     0.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      489 | 2024-07-23 | Betera            | W   | 1.000      | -            | -                | -                | -         |     2.24 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           51 |      720 | 2024-07-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.13 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           50 |     1246 | 2024-06-10 | Aurora            | L   | 0.819      | -            | -                | -                | -         |    -3.40 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           49 |     1248 | 2024-06-10 | SINNERS           | W   | 0.819      | -            | -                | -                | -         |    12.74 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           48 |     1253 | 2024-06-10 | 3DMAX             | L   | 0.818      | -            | -                | -                | -         |    -3.05 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           47 |     1287 | 2024-06-09 | RUSH B            | L   | 0.813      | -            | -                | -                | -         |   -17.89 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           46 |     1296 | 2024-06-09 | PARIVISION        | L   | 0.812      | -            | -                | -                | -         |   -12.51 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           45 |     1302 | 2024-06-09 | SAW               | W   | 0.812      | -            | -                | -                | -         |    15.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           44 |     1312 | 2024-06-09 | Monte             | W   | 0.811      | -            | -                | -                | -         |    10.88 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           43 |     1575 | 2024-06-04 | Sangal            | L   | 0.780      | -            | -                | -                | -         |   -10.26 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           42 |     1799 | 2024-05-26 | MOUZ NXT          | W   | 0.720      | 0.435        | 0.139 (0.043)    | 0.961 (0.301)    | -         |    11.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1803 | 2024-05-26 | 1WIN              | W   | 0.719      | 0.435        | -                | 0.718 (0.224)    | -         |    10.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1817 | 2024-05-25 | Space             | W   | 0.714      | -            | -                | -                | -         |     6.08 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1843 | 2024-05-24 | SINNERS           | W   | 0.705      | 0.435        | 0.047 (0.014)    | 0.800 (0.245)    | -         |    12.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1972 | 2024-05-20 | BLEED             | L   | 0.680      | -            | -                | -                | -         |    -2.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     2025 | 2024-05-18 | Passion UA        | W   | 0.667      | 0.500        | 0.173 (0.058)    | 1.000 (0.333)    | -         |    10.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     2097 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.653      | 0.500        | -                | 0.537 (0.175)    | -         |     8.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     2258 | 2024-05-12 | BetBoom           | L   | 0.626      | -            | -                | -                | -         |    -2.31 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     2284 | 2024-05-11 | RUBY              | W   | 0.620      | 0.435        | 0.095 (0.026)    | -                | -         |     7.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           33 |     2331 | 2024-05-09 | Zero Tenacity     | W   | 0.605      | 0.435        | 0.143 (0.038)    | 1.000 (0.263)    | -         |    10.78 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     2371 | 2024-05-07 | Sashi             | L   | 0.593      | -            | -                | -                | -         |    -4.66 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     2416 | 2024-05-05 | ARCRED            | W   | 0.578      | -            | -                | -                | -         |     7.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           30 |     2425 | 2024-05-04 | BetBoom           | L   | 0.572      | -            | -                | -                | -         |    -1.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     2431 | 2024-05-03 | fnatic            | W   | 0.568      | 0.435        | 0.370 (0.091)    | 0.680 (0.168)    | -         |    16.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     2475 | 2024-05-02 | MOUZ NXT          | W   | 0.558      | 0.435        | 0.139 (0.034)    | 0.961 (0.233)    | -         |    10.78 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           27 |     2521 | 2024-04-30 | Passion UA        | L   | 0.545      | -            | -                | -                | -         |    -7.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     2558 | 2024-04-28 | Gaimin Gladiators | W   | 0.532      | -            | -                | -                | -         |     9.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           25 |     2598 | 2024-04-26 | Passion UA        | L   | 0.520      | -            | -                | -                | -         |    -7.20 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2787 | 2024-04-19 | Alliance          | L   | 0.472      | -            | -                | -                | -         |   -10.12 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           23 |     2871 | 2024-04-17 | Sangal            | L   | 0.458      | -            | -                | -                | -         |    -4.34 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     3021 | 2024-04-10 | SAW               | L   | 0.414      | -            | -                | -                | -         |    -3.61 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     3074 | 2024-04-09 | SINNERS           | L   | 0.408      | -            | -                | -                | -         |    -3.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     3097 | 2024-04-09 | Aurora            | L   | 0.405      | -            | -                | -                | -         |    -0.31 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     3111 | 2024-04-08 | 1WIN              | L   | 0.400      | -            | -                | -                | -         |    -7.52 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     3120 | 2024-04-08 | Metizport         | W   | 0.399      | -            | -                | -                | -         |     5.34 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     3181 | 2024-04-05 | Secret            | L   | 0.379      | -            | -                | -                | -         |   -11.17 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     3212 | 2024-04-04 | TSM               | W   | 0.374      | -            | -                | -                | -         |     1.52 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     3257 | 2024-04-03 | EYEBALLERS        | W   | 0.367      | -            | -                | -                | -         |     4.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3265 | 2024-04-03 | 9INE              | W   | 0.366      | -            | -                | -                | -         |     0.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3292 | 2024-04-02 | Sangal            | W   | 0.360      | 0.500        | 0.219 (0.039)    | -                | -         |     7.79 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3825 | 2024-03-06 | KOI               | L   | 0.181      | -            | -                | -                | -         |    -2.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3965 | 2024-03-01 | Aurora            | L   | 0.146      | -            | -                | -                | -         |    -0.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3971 | 2024-02-29 | FORZE             | L   | 0.141      | -            | -                | -                | -         |    -2.90 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3985 | 2024-02-28 | Spirit Academy    | W   | 0.134      | -            | -                | -                | -         |     0.30 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3991 | 2024-02-28 | Croatia           | W   | 0.133      | -            | -                | -                | -         |     0.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     4083 | 2024-02-24 | GamerLegion       | W   | 0.106      | -            | -                | -                | 1 (0.106) |     0.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     4100 | 2024-02-23 | Astralis          | W   | 0.099      | -            | -                | -                | 1 (0.099) |     3.05 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     4247 | 2024-02-17 | AMKAL             | L   | 0.059      | -            | -                | -                | -         |    -0.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     4269 | 2024-02-16 | 3DMAX             | W   | 0.053      | -            | -                | -                | 1 (0.053) |     1.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     4305 | 2024-02-15 | KOI               | L   | 0.045      | -            | -                | -                | -         |    -0.56 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     4336 | 2024-02-14 | SAW               | W   | 0.040      | -            | -                | -                | 1 (0.040) |     0.88 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     4348 | 2024-02-14 | FaZe              | L   | 0.038      | -            | -                | -                | -         |    -0.03 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,909.81)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.814 | $5,000.00      | $4,069.64       |
| 2024-05-26 |      0.720 | $22,000.00     | $15,838.74      |
| 2024-05-12 |      0.627 | $5,000.00      | $3,135.04       |
| 2024-05-04 |      0.573 | $5,000.00      | $2,866.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
