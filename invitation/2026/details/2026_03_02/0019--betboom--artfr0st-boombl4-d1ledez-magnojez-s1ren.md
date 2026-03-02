### Roster Details<br />
Team Name: BetBoom<br />
Roster: ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren<br />
Global Rank: [19](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [16]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1416.6<br />
<br />
Final Rank Value (1416.6) = Starting Rank Value (1440.4) + Head To Head Adjustments (-23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.418[<sup>2</sup>](#table1)
- Opponent Network: 0.259[<sup>2</sup>](#table1)
- LAN Wins: 0.968[<sup>2</sup>](#table1)

The average of these factors is 0.550<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1440.4
- 400 + ( ( 0.550 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1440.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           73 |       30 | 2026-02-28 | Inner Circle       | L   | 1.000      | -            | -                | -                | -         |   -27.31 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           72 |       46 | 2026-02-28 | 9INE               | W   | 1.000      | -            | -                | -                | -         |     7.36 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           71 |       70 | 2026-02-27 | fnatic             | W   | 1.000      | -            | -                | -                | -         |     8.05 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           70 |      113 | 2026-02-26 | FOKUS              | L   | 1.000      | -            | -                | -                | -         |   -31.14 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           69 |      265 | 2026-02-22 | fnatic             | W   | 1.000      | 0.342        | 0.115 (0.039)    | -                | 1 (1.000) |     8.33 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           68 |      299 | 2026-02-22 | Gentle Mates       | L   | 1.000      | -            | -                | -                | -         |   -14.47 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           67 |      341 | 2026-02-21 | 100 Thieves        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.48 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           66 |      395 | 2026-02-20 | fnatic             | W   | 1.000      | 0.342        | 0.115 (0.039)    | -                | 1 (1.000) |     8.17 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           65 |      403 | 2026-02-20 | SAW                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.14 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           64 |      803 | 2026-02-12 | BET-M              | W   | 1.000      | -            | -                | -                | -         |     5.22 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           63 |      839 | 2026-02-11 | SINNERS            | W   | 1.000      | 0.143        | 0.248 (0.035)    | -                | -         |    13.15 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           62 |      884 | 2026-02-10 | ENCE               | W   | 1.000      | -            | -                | -                | -         |     6.11 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           61 |      893 | 2026-02-10 | BASEMENT BOYS      | W   | 1.000      | -            | -                | -                | -         |     0.62 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           60 |      987 | 2026-02-06 | magic              | L   | 1.000      | -            | -                | -                | -         |   -23.85 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           59 |     1003 | 2026-02-06 | ex-RUBY            | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     4.14 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           58 |     1028 | 2026-02-05 | KOLESIE            | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.720 (0.313)    | -         |     6.64 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           57 |     1043 | 2026-02-04 | FORZE Reload       | W   | 1.000      | 0.435        | -                | 0.799 (0.347)    | -         |     2.20 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           56 |     1248 | 2026-01-28 | HOTU               | W   | 0.980      | 0.310        | 0.104 (0.032)    | 0.702 (0.213)    | 1 (0.980) |    15.09 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           55 |     1264 | 2026-01-28 | HOTU               | W   | 0.978      | 0.310        | 0.104 (0.031)    | 0.702 (0.213)    | 1 (0.978) |    16.37 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           54 |     1281 | 2026-01-27 | Omega              | W   | 0.972      | 0.310        | -                | 0.650 (0.196)    | 1 (0.972) |     5.42 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           53 |     1289 | 2026-01-27 | GOOD GAME SPOT     | W   | 0.971      | -            | -                | -                | 1 (0.971) |     0.12 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           52 |     1367 | 2026-01-23 | Gentle Mates       | L   | 0.948      | -            | -                | -                | -         |   -12.74 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           51 |     1384 | 2026-01-23 | HOTU               | L   | 0.947      | -            | -                | -                | -         |   -14.33 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           50 |     1435 | 2026-01-22 | Ursa               | W   | 0.940      | -            | -                | -                | -         |     1.66 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           49 |     1466 | 2026-01-21 | KOLESIE            | W   | 0.935      | -            | -                | -                | -         |     6.38 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           48 |     1478 | 2026-01-21 | GenOne             | W   | 0.934      | -            | -                | -                | -         |     2.77 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           47 |     1642 | 2026-01-16 | paiN               | L   | 0.900      | -            | -                | -                | -         |   -18.55 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           46 |     1806 | 2026-01-04 | HOTU               | W   | 0.820      | 0.303        | 0.104 (0.026)    | 0.702 (0.174)    | 1 (0.820) |    12.21 | ArtFr0st, Ax1Le, d1Ledez, Magnojez, S1ren   |
|           45 |     1818 | 2026-01-04 | HOTU               | W   | 0.818      | -            | -                | -                | 1 (0.818) |    13.08 | ArtFr0st, Ax1Le, d1Ledez, Magnojez, S1ren   |
|           44 |     1852 | 2026-01-03 | Omega              | W   | 0.813      | -            | -                | -                | -         |     4.96 | ArtFr0st, Ax1Le, d1Ledez, Magnojez, S1ren   |
|           43 |     1856 | 2026-01-02 | Winners            | W   | 0.811      | -            | -                | -                | -         |     0.20 | ArtFr0st, Ax1Le, d1Ledez, Magnojez, S1ren   |
|           42 |     2011 | 2025-12-13 | magic              | L   | 0.673      | -            | -                | -                | -         |   -17.74 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           41 |     2025 | 2025-12-12 | Johnny Speeds      | W   | 0.668      | 0.435        | -                | 0.910 (0.264)    | -         |     4.15 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           40 |     2086 | 2025-12-08 | FUT                | L   | 0.640      | -            | -                | -                | -         |    -7.26 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           39 |     2112 | 2025-12-07 | Oramond            | W   | 0.631      | 0.435        | 0.102 (0.028)    | 0.867 (0.238)    | -         |     2.80 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           38 |     2132 | 2025-12-06 | ex-Fingers Crossed | W   | 0.626      | -            | -                | -                | -         |     1.56 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           37 |     2439 | 2025-11-23 | EYEBALLERS         | L   | 0.541      | -            | -                | -                | -         |   -12.26 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           36 |     2451 | 2025-11-23 | HEROIC             | W   | 0.540      | 0.435        | 0.443 (0.104)    | -                | -         |    10.00 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           35 |     2472 | 2025-11-22 | Oramond            | W   | 0.533      | 0.435        | -                | 0.867 (0.201)    | -         |     2.09 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           34 |     2537 | 2025-11-20 | JiJieHao           | W   | 0.521      | -            | -                | -                | -         |     1.38 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           33 |     2835 | 2025-11-08 | EYEBALLERS         | L   | 0.442      | -            | -                | -                | -         |   -10.38 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           32 |     2868 | 2025-11-08 | Sashi              | W   | 0.439      | -            | -                | -                | -         |     3.09 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           31 |     2881 | 2025-11-08 | Metizport          | W   | 0.438      | -            | -                | -                | -         |     1.94 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           30 |     2915 | 2025-11-07 | Sashi              | W   | 0.433      | -            | -                | -                | -         |     3.02 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           29 |     2933 | 2025-11-07 | Betclic            | W   | 0.433      | -            | -                | -                | -         |     3.62 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           28 |     2950 | 2025-11-07 | 777                | W   | 0.432      | -            | -                | -                | -         |     0.12 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           27 |     2959 | 2025-11-07 | Lilmix             | W   | 0.432      | -            | -                | -                | -         |     0.42 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           26 |     2982 | 2025-11-07 | Boys N Da HUD      | W   | 0.432      | -            | -                | -                | -         |     0.05 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           25 |     3216 | 2025-10-29 | Gentle Mates       | L   | 0.372      | -            | -                | -                | -         |    -5.12 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           24 |     3252 | 2025-10-28 | Liquid             | L   | 0.365      | -            | -                | -                | -         |    -6.41 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           23 |     3287 | 2025-10-27 | HEROIC             | L   | 0.359      | -            | -                | -                | -         |    -4.99 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           22 |     3339 | 2025-10-26 | MIBR               | W   | 0.353      | -            | -                | -                | -         |     0.16 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           21 |     3743 | 2025-10-13 | SINNERS            | W   | 0.268      | 0.487        | 0.248 (0.032)    | -                | -         |     3.35 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           20 |     3750 | 2025-10-13 | Spirit Academy     | W   | 0.265      | -            | -                | -                | -         |     0.19 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           19 |     3755 | 2025-10-12 | RUBY               | L   | 0.260      | -            | -                | -                | -         |    -7.92 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           18 |     3760 | 2025-10-12 | 1win               | W   | 0.259      | -            | -                | -                | -         |     1.00 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           17 |     3766 | 2025-10-12 | Johnny Speeds      | W   | 0.258      | -            | -                | -                | -         |     2.11 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           16 |     3785 | 2025-10-11 | Partizan           | W   | 0.252      | -            | -                | -                | -         |     0.16 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           15 |     3814 | 2025-10-10 | Sangal             | W   | 0.247      | -            | -                | -                | -         |     0.61 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           14 |     3852 | 2025-10-09 | Dziuseppe          | W   | 0.241      | -            | -                | -                | -         |     0.13 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           13 |     4255 | 2025-10-01 | CYBERSHOKE         | L   | 0.185      | -            | -                | -                | -         |    -4.58 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           12 |     4277 | 2025-09-30 | ex-Fingers Crossed | W   | 0.180      | -            | -                | -                | -         |     0.38 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           11 |     4323 | 2025-09-29 | KHAN               | W   | 0.173      | -            | -                | -                | -         |     0.04 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           10 |     4356 | 2025-09-28 | PARIVISION         | L   | 0.167      | -            | -                | -                | -         |    -0.30 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            9 |     4408 | 2025-09-27 | TDK                | W   | 0.160      | -            | -                | -                | -         |     0.35 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            8 |     4463 | 2025-09-26 | BET-M              | W   | 0.153      | -            | -                | -                | -         |     0.54 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            7 |     4518 | 2025-09-25 | magic              | W   | 0.146      | -            | -                | -                | -         |     0.60 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            6 |     4586 | 2025-09-22 | Partizan           | L   | 0.126      | -            | -                | -                | -         |    -3.89 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            5 |     4602 | 2025-09-21 | Friendly Campers   | L   | 0.120      | -            | -                | -                | -         |    -3.17 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            4 |     4615 | 2025-09-21 | Nemesis            | W   | 0.119      | -            | -                | -                | -         |     1.22 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            3 |     4643 | 2025-09-20 | Sashi              | W   | 0.112      | -            | -                | -                | -         |     0.82 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            2 |     4699 | 2025-09-18 | Oramond            | W   | 0.100      | -            | -                | -                | -         |     0.21 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            1 |     5063 | 2025-09-09 | 9z                 | L   | 0.041      | -            | -                | -                | -         |    -1.24 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,553.86)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $1,779.00      | $1,779.00       |
| 2026-02-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-01-28 |      0.980 | $2,954.00      | $2,895.86       |
| 2026-01-18 |      0.914 | $7,500.00      | $6,858.18       |
| 2026-01-04 |      0.820 | $2,500.00      | $2,049.48       |
| 2025-12-09 |      0.646 | $4,000.00      | $2,584.30       |
| 2025-11-23 |      0.541 | $10,000.00     | $5,409.73       |
| 2025-11-01 |      0.394 | $18,750.00     | $7,380.64       |
| 2025-10-13 |      0.268 | $41,093.00     | $10,992.79      |
| 2025-10-12 |      0.260 | $10,000.00     | $2,603.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
