### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [35](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1179.3<br />
<br />
Final Rank Value (1179.3) = Starting Rank Value (1368.2) + Head To Head Adjustments (-188.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.574[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.742[<sup>2</sup>](#table1)

The average of these factors is 0.488<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1368.2
- 400 + ( ( 0.488 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1368.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |        7 | 2025-01-15 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.91 | adamb, hampus, isak, L00m1, Plopski |
|           48 |       92 | 2024-12-22 | PORTUGAL          | L   | 1.000      | -            | -                | -                | -         |   -27.72 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           47 |       96 | 2024-12-22 | Zero Tenacity     | W   | 1.000      | 0.387        | 0.083 (0.032)    | 0.570 (0.221)    | 0 (0.000) |     8.71 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           46 |      209 | 2024-12-14 | 9INE              | L   | 0.972      | -            | -                | -                | -         |   -24.03 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           45 |      236 | 2024-12-13 | Monte             | W   | 0.964      | 0.435        | 0.078 (0.033)    | 0.579 (0.243)    | 0 (0.000) |    10.03 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           44 |      265 | 2024-12-11 | Insilio           | W   | 0.951      | 0.435        | -                | 0.535 (0.221)    | -         |     2.26 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           43 |      278 | 2024-12-10 | Aurora Young Blud | L   | 0.944      | -            | -                | -                | -         |   -23.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           42 |      307 | 2024-12-08 | FLuffy Gangsters  | W   | 0.930      | 0.435        | -                | 0.588 (0.238)    | -         |     2.18 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           41 |      381 | 2024-12-05 | Fire Flux         | W   | 0.911      | 0.435        | -                | 0.629 (0.249)    | -         |     3.50 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           40 |      435 | 2024-12-03 | Into the Breach   | L   | 0.897      | -            | -                | -                | -         |   -23.54 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           39 |      736 | 2024-11-17 | Partizan          | L   | 0.792      | -            | -                | -                | -         |   -14.73 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           38 |      741 | 2024-11-17 | Nexus             | L   | 0.791      | -            | -                | -                | -         |   -11.57 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           37 |      767 | 2024-11-16 | The Huns          | W   | 0.785      | 0.617        | 0.056 (0.027)    | 0.355 (0.172)    | 1 (0.785) |     4.09 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           36 |      796 | 2024-11-15 | Canada            | W   | 0.778      | -            | -                | -                | 1 (0.778) |     0.61 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           35 |      802 | 2024-11-15 | Norway            | W   | 0.777      | -            | -                | -                | 1 (0.777) |     0.85 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           34 |      814 | 2024-11-14 | los kogutos       | W   | 0.773      | 0.617        | 0.072 (0.034)    | 0.841 (0.401)    | 1 (0.773) |     4.54 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           33 |      860 | 2024-11-13 | Turkey            | L   | 0.765      | -            | -                | -                | -         |   -23.33 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           32 |      867 | 2024-11-13 | Mindfreak         | W   | 0.764      | -            | -                | -                | 1 (0.764) |     0.95 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           31 |      963 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.739      | 0.432        | 0.079 (0.025)    | -                | 1 (0.739) |     5.40 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           30 |      982 | 2024-11-08 | Johnny Speeds     | W   | 0.733      | 0.432        | 0.109 (0.034)    | 0.770 (0.244)    | 1 (0.733) |     5.25 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           29 |      998 | 2024-11-07 | Kappa Bar         | W   | 0.727      | -            | -                | -                | 1 (0.727) |     1.40 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           28 |     1140 | 2024-10-31 | Johnny Speeds     | L   | 0.679      | -            | -                | -                | -         |   -16.82 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           27 |     1159 | 2024-10-30 | ECSTATIC          | W   | 0.673      | 0.333        | 0.079 (0.018)    | 1.000 (0.224)    | -         |     3.30 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           26 |     1164 | 2024-10-30 | KOI               | W   | 0.672      | -            | -                | -                | -         |     2.31 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           25 |     1511 | 2024-10-12 | Aurora            | L   | 0.551      | -            | -                | -                | -         |   -15.03 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           24 |     1535 | 2024-10-10 | fnatic            | W   | 0.538      | 0.435        | 0.182 (0.042)    | -                | -         |     4.72 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           23 |     1612 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.524      | 0.435        | -                | 0.683 (0.155)    | -         |     2.85 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           22 |     1638 | 2024-10-07 | Monte             | L   | 0.517      | -            | -                | -                | -         |   -13.19 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           21 |     1719 | 2024-10-04 | CYBERSHOKE        | W   | 0.499      | -            | -                | -                | -         |     1.21 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           20 |     1764 | 2024-10-03 | Zero Tenacity     | L   | 0.491      | -            | -                | -                | -         |   -12.37 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           19 |     1841 | 2024-10-01 | G2 Ares           | W   | 0.480      | -            | -                | -                | -         |     0.26 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           18 |     2178 | 2024-09-23 | Into the Breach   | L   | 0.423      | -            | -                | -                | -         |   -12.17 | adamb, L00m1, nilo, Plopski, Sapec  |
|           17 |     2366 | 2024-09-16 | 9INE              | W   | 0.378      | 0.384        | 0.125 (0.018)    | -                | -         |     1.50 | adamb, L00m1, nilo, Plopski, Sapec  |
|           16 |     2522 | 2024-09-11 | Zero Tenacity     | L   | 0.345      | -            | -                | -                | -         |    -9.00 | adamb, L00m1, nilo, Plopski, Sapec  |
|           15 |     2576 | 2024-09-09 | Zero Tenacity     | L   | 0.331      | -            | -                | -                | -         |    -8.78 | adamb, L00m1, nilo, Plopski, Sapec  |
|           14 |     2722 | 2024-09-04 | Sampi             | W   | 0.299      | -            | -                | -                | -         |     1.09 | adamb, L00m1, nilo, Plopski, Sapec  |
|           13 |     2784 | 2024-09-02 | FAVBET            | W   | 0.285      | -            | -                | -                | -         |     0.74 | adamb, L00m1, nilo, Plopski, Sapec  |
|           12 |     2936 | 2024-08-28 | Nemiga            | W   | 0.251      | 0.384        | 0.507 (0.049)    | -                | -         |     3.08 | adamb, L00m1, nilo, Plopski, Sapec  |
|           11 |     3001 | 2024-08-27 | ex-Enterprise     | W   | 0.244      | -            | -                | -                | -         |     0.50 | adamb, L00m1, nilo, Plopski, Sapec  |
|           10 |     3181 | 2024-08-22 | Complexity        | L   | 0.212      | -            | -                | -                | -         |    -3.49 | adamb, L00m1, nilo, Plopski, Sapec  |
|            9 |     3252 | 2024-08-21 | 9INE              | L   | 0.204      | -            | -                | -                | -         |    -5.68 | adamb, L00m1, nilo, Plopski, Sapec  |
|            8 |     3301 | 2024-08-20 | TSM               | L   | 0.197      | -            | -                | -                | -         |    -5.79 | adamb, L00m1, nilo, Plopski, Sapec  |
|            7 |     3318 | 2024-08-19 | Sashi             | L   | 0.192      | -            | -                | -                | -         |    -5.31 | adamb, L00m1, nilo, Plopski, Sapec  |
|            6 |     3434 | 2024-08-15 | PARIVISION        | L   | 0.164      | -            | -                | -                | -         |    -4.86 | adamb, L00m1, nilo, Plopski, Sapec  |
|            5 |     3535 | 2024-08-12 | Sampi             | W   | 0.145      | -            | -                | -                | -         |     0.48 | adamb, L00m1, nilo, Plopski, Sapec  |
|            4 |     3636 | 2024-08-08 | Into the Breach   | W   | 0.118      | -            | -                | -                | -         |     0.23 | adamb, L00m1, nilo, Plopski, Sapec  |
|            3 |     3665 | 2024-08-07 | Johnny Speeds     | W   | 0.112      | -            | -                | -                | -         |     0.58 | adamb, L00m1, nilo, Plopski, Sapec  |
|            2 |     3674 | 2024-08-07 | TSM               | W   | 0.112      | -            | -                | -                | -         |     0.21 | adamb, L00m1, nilo, Plopski, Sapec  |
|            1 |     3886 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.072      | -            | -                | -                | -         |     0.46 | adamb, L00m1, nilo, Plopski, Sapec  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,012.62)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $6,557.00      | $6,557.00       |
| 2024-12-15 |      0.979 | $2,000.00      | $1,958.06       |
| 2024-11-17 |      0.792 | $15,000.00     | $11,887.32      |
| 2024-11-09 |      0.739 | $24,239.00     | $17,920.77      |
| 2024-10-13 |      0.559 | $2,000.00      | $1,118.99       |
| 2024-09-26 |      0.446 | $500.00        | $222.83         |
| 2024-09-14 |      0.366 | $500.00        | $183.01         |
| 2024-08-25 |      0.233 | $5,000.00      | $1,164.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
