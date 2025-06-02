### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [60](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  958.7<br />
<br />
Final Rank Value (958.7) = Starting Rank Value (905.5) + Head To Head Adjustments (53.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.5
- 400 + ( ( 0.276 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 905.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      383 | 2025-05-10 | Alliance           | L   | 1.000      | -            | -                | -                | -         |   -19.65 | adamb, hampus, isak, L00m1, Plopski |
|           50 |      531 | 2025-05-04 | Astrum             | L   | 1.000      | -            | -                | -                | -         |   -14.72 | adamb, hampus, isak, L00m1, Plopski |
|           49 |      679 | 2025-04-28 | TNL                | L   | 0.970      | -            | -                | -                | -         |   -11.98 | adamb, hampus, isak, L00m1, Plopski |
|           48 |      723 | 2025-04-26 | Northern Lights    | W   | 0.958      | -            | -                | -                | 0 (0.000) |     1.07 | adamb, hampus, isak, L00m1, Plopski |
|           47 |      729 | 2025-04-26 | Viperio            | W   | 0.957      | -            | -                | -                | 0 (0.000) |     0.98 | adamb, hampus, isak, L00m1, Plopski |
|           46 |      733 | 2025-04-26 | CYBERSHOKE         | W   | 0.957      | 0.435        | -                | 1.000 (0.416)    | 0 (0.000) |    12.47 | hampus, isak, L00m1, Plopski, Ro1f  |
|           45 |      846 | 2025-04-18 | Nexus              | L   | 0.904      | -            | -                | -                | -         |   -16.54 | adamb, hampus, isak, L00m1, Plopski |
|           44 |      853 | 2025-04-18 | ENCE               | W   | 0.903      | 0.657        | 0.197 (0.117)    | 0.870 (0.516)    | 0 (0.000) |    18.93 | adamb, hampus, isak, L00m1, Plopski |
|           43 |      856 | 2025-04-18 | Spirit Academy     | L   | 0.903      | -            | -                | -                | -         |   -10.89 | adamb, hampus, isak, L00m1, Plopski |
|           42 |      880 | 2025-04-17 | BetBoom            | L   | 0.897      | -            | -                | -                | -         |    -9.65 | adamb, hampus, isak, L00m1, Plopski |
|           41 |      888 | 2025-04-17 | LA MASIA           | L   | 0.897      | -            | -                | -                | -         |   -24.84 | adamb, hampus, isak, L00m1, Plopski |
|           40 |      914 | 2025-04-16 | Astralis           | W   | 0.890      | 0.143        | 0.699 (0.089)    | -                | 0 (0.000) |    26.89 | adamb, hampus, isak, L00m1, Plopski |
|           39 |      933 | 2025-04-15 | OG                 | L   | 0.884      | -            | -                | -                | -         |   -10.64 | adamb, hampus, isak, L00m1, Plopski |
|           38 |      956 | 2025-04-14 | BC.Game            | W   | 0.878      | -            | -                | -                | 0 (0.000) |    14.48 | adamb, hampus, isak, L00m1, Plopski |
|           37 |      967 | 2025-04-14 | B8                 | W   | 0.876      | 0.143        | 0.214 (0.027)    | 0.814 (0.102)    | 0 (0.000) |    20.85 | adamb, hampus, isak, L00m1, Plopski |
|           36 |     1220 | 2025-04-03 | 9 Pandas           | L   | 0.805      | -            | -                | -                | -         |   -12.88 | adamb, hampus, isak, L00m1, Plopski |
|           35 |     1230 | 2025-04-03 | Imperial Valkyries | W   | 0.804      | 0.471        | 0.077 (0.029)    | -                | 0 (0.000) |     8.09 | adamb, hampus, isak, L00m1, Plopski |
|           34 |     1278 | 2025-04-02 | Complexity         | L   | 0.798      | -            | -                | -                | -         |    -2.89 | adamb, hampus, isak, L00m1, Plopski |
|           33 |     1282 | 2025-04-02 | Nemiga             | L   | 0.797      | -            | -                | -                | -         |   -12.51 | adamb, hampus, isak, L00m1, Plopski |
|           32 |     1303 | 2025-04-02 | Passion UA         | W   | 0.796      | 0.471        | 0.112 (0.042)    | 0.888 (0.333)    | 0 (0.000) |    12.13 | adamb, hampus, isak, L00m1, Plopski |
|           31 |     1338 | 2025-04-01 | Ninjas in Pyjamas  | L   | 0.792      | -            | -                | -                | -         |    -5.74 | adamb, hampus, isak, L00m1, Plopski |
|           30 |     1358 | 2025-03-31 | Nemiga             | W   | 0.785      | -            | -                | -                | 0 (0.000) |    12.94 | adamb, hampus, isak, L00m1, Plopski |
|           29 |     1362 | 2025-03-31 | Astrum             | L   | 0.784      | -            | -                | -                | -         |   -12.00 | adamb, hampus, isak, L00m1, Plopski |
|           28 |     1382 | 2025-03-30 | BetBoom            | W   | 0.778      | 0.143        | 0.127 (0.014)    | -                | -         |    14.96 | adamb, hampus, isak, L00m1, Plopski |
|           27 |     1391 | 2025-03-30 | ECSTATIC           | W   | 0.777      | 0.396        | 0.163 (0.050)    | 1.000 (0.308)    | -         |    16.57 | adamb, hampus, isak, L00m1, Plopski |
|           26 |     1431 | 2025-03-29 | TNL                | W   | 0.772      | 0.143        | -                | 1.000 (0.110)    | -         |    15.38 | adamb, hampus, isak, L00m1, Plopski |
|           25 |     1450 | 2025-03-29 | GUN5               | W   | 0.770      | 0.396        | 0.052 (0.016)    | 0.612 (0.187)    | -         |    14.69 | adamb, hampus, isak, L00m1, Plopski |
|           24 |     1493 | 2025-03-28 | 9 Pandas           | W   | 0.765      | -            | -                | -                | -         |    14.28 | adamb, hampus, isak, L00m1, Plopski |
|           23 |     1561 | 2025-03-27 | Sangal             | W   | 0.759      | -            | -                | -                | -         |     4.71 | adamb, hampus, isak, L00m1, Plopski |
|           22 |     1595 | 2025-03-27 | Fire Flux          | W   | 0.756      | 0.396        | -                | 0.758 (0.227)    | -         |    11.22 | adamb, hampus, isak, L00m1, Plopski |
|           21 |     1970 | 2025-03-14 | Betclic            | L   | 0.671      | -            | -                | -                | -         |    -5.54 | adamb, hampus, isak, L00m1, Plopski |
|           20 |     2025 | 2025-03-11 | BC.Game            | L   | 0.650      | -            | -                | -                | -         |    -7.89 | adamb, hampus, isak, L00m1, Plopski |
|           19 |     2048 | 2025-03-10 | Nemiga             | W   | 0.645      | 0.435        | 0.066 (0.018)    | 0.693 (0.194)    | -         |    13.20 | adamb, hampus, isak, L00m1, Plopski |
|           18 |     2121 | 2025-03-09 | GUN5               | W   | 0.636      | 0.435        | 0.052 (0.014)    | 0.612 (0.169)    | -         |    12.50 | adamb, hampus, isak, L00m1, Plopski |
|           17 |     2201 | 2025-03-08 | Partizan           | L   | 0.630      | -            | -                | -                | -         |    -8.86 | adamb, hampus, isak, L00m1, Plopski |
|           16 |     2270 | 2025-03-07 | Leo                | L   | 0.623      | -            | -                | -                | -         |   -15.90 | adamb, hampus, isak, L00m1, Plopski |
|           15 |     2939 | 2025-02-11 | HEROIC             | L   | 0.465      | -            | -                | -                | -         |    -0.40 | adamb, hampus, isak, L00m1, Plopski |
|           14 |     2948 | 2025-02-11 | Nemiga             | W   | 0.463      | -            | -                | -                | -         |     8.91 | adamb, hampus, isak, L00m1, Plopski |
|           13 |     2960 | 2025-02-10 | GamerLegion        | L   | 0.459      | -            | -                | -                | -         |    -0.15 | adamb, hampus, isak, L00m1, Plopski |
|           12 |     2979 | 2025-02-10 | Nexus              | W   | 0.457      | -            | -                | -                | -         |     9.49 | adamb, hampus, isak, L00m1, Plopski |
|           11 |     3164 | 2025-02-05 | Ninjas in Pyjamas  | L   | 0.424      | -            | -                | -                | -         |    -1.22 | adamb, hampus, isak, L00m1, Plopski |
|           10 |     3175 | 2025-02-05 | Passion UA         | L   | 0.423      | -            | -                | -                | -         |    -4.39 | adamb, hampus, isak, L00m1, Plopski |
|            9 |     3487 | 2025-01-15 | Vitality           | L   | 0.285      | -            | -                | -                | -         |    -0.02 | adamb, hampus, isak, L00m1, Plopski |
|            8 |     3572 | 2024-12-22 | PORTUGAL           | L   | 0.126      | -            | -                | -                | -         |    -3.21 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            7 |     3576 | 2024-12-22 | Zero Tenacity      | W   | 0.125      | -            | -                | -                | -         |     2.01 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            6 |     3691 | 2024-12-14 | 9INE               | L   | 0.071      | -            | -                | -                | -         |    -0.70 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            5 |     3718 | 2024-12-13 | KOMNATA            | W   | 0.063      | -            | -                | -                | -         |     0.45 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            4 |     3748 | 2024-12-11 | Insilio            | W   | 0.050      | -            | -                | -                | -         |     0.14 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            3 |     3761 | 2024-12-10 | Chimera            | L   | 0.043      | -            | -                | -                | -         |    -1.08 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            2 |     3790 | 2024-12-08 | FLuffy Gangsters   | W   | 0.029      | -            | -                | -                | -         |     0.07 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            1 |     3864 | 2024-12-05 | Fire Flux          | W   | 0.010      | -            | -                | -                | -         |     0.14 | adamb, L00m1, nilo, Plopski, SHiNE  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,965.77)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-01 |      0.990 | $1,500.00      | $1,485.75       |
| 2025-04-20 |      0.919 | $6,000.00      | $5,511.89       |
| 2025-04-03 |      0.805 | $5,000.00      | $4,025.53       |
| 2025-03-31 |      0.784 | $6,000.00      | $4,701.99       |
| 2025-03-11 |      0.652 | $5,000.00      | $3,259.27       |
| 2024-12-22 |      0.126 | $6,557.00      | $825.31         |
| 2024-12-15 |      0.078 | $2,000.00      | $156.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
