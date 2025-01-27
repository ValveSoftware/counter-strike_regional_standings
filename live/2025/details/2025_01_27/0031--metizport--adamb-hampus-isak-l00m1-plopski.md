### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [31](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1179.6<br />
<br />
Final Rank Value (1179.6) = Starting Rank Value (1349.8) + Head To Head Adjustments (-170.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.576[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.240[<sup>2</sup>](#table1)
- LAN Wins: 0.737[<sup>2</sup>](#table1)

The average of these factors is 0.486<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1349.8
- 400 + ( ( 0.486 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1349.8


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
|           49 |      219 | 2025-01-15 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.22 | adamb, hampus, isak, L00m1, Plopski |
|           48 |      304 | 2024-12-22 | PORTUGAL          | L   | 0.961      | -            | -                | -                | -         |   -26.72 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           47 |      308 | 2024-12-22 | Zero Tenacity     | W   | 0.960      | 0.387        | 0.081 (0.030)    | 0.719 (0.267)    | 0 (0.000) |     8.13 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           46 |      421 | 2024-12-14 | 9INE              | L   | 0.906      | -            | -                | -                | -         |   -22.85 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           45 |      448 | 2024-12-13 | Monte             | W   | 0.899      | 0.435        | 0.077 (0.030)    | 0.600 (0.234)    | 0 (0.000) |     8.98 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           44 |      477 | 2024-12-11 | Insilio           | W   | 0.885      | 0.435        | -                | 0.570 (0.219)    | -         |     1.88 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           43 |      490 | 2024-12-10 | Chimera           | L   | 0.879      | -            | -                | -                | -         |   -22.66 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           42 |      519 | 2024-12-08 | FLuffy Gangsters  | W   | 0.865      | 0.435        | -                | 0.605 (0.227)    | -         |     1.95 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           41 |      593 | 2024-12-05 | Fire Flux         | W   | 0.845      | 0.435        | -                | 0.822 (0.302)    | -         |     3.35 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           40 |      647 | 2024-12-03 | Into the Breach   | L   | 0.832      | -            | -                | -                | -         |   -22.34 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           39 |      948 | 2024-11-17 | Partizan          | L   | 0.726      | -            | -                | -                | -         |   -13.95 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           38 |      953 | 2024-11-17 | Nexus             | L   | 0.725      | -            | -                | -                | -         |   -10.36 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           37 |      979 | 2024-11-16 | The Huns          | W   | 0.719      | 0.617        | 0.057 (0.025)    | 0.569 (0.252)    | 1 (0.719) |     4.74 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           36 |     1008 | 2024-11-15 | Canada            | W   | 0.712      | -            | -                | -                | 1 (0.712) |     0.40 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           35 |     1014 | 2024-11-15 | Norway            | W   | 0.712      | -            | -                | -                | 1 (0.712) |     0.75 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           34 |     1026 | 2024-11-14 | los kogutos       | W   | 0.707      | 0.617        | 0.070 (0.031)    | 0.808 (0.353)    | 1 (0.707) |     4.22 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           33 |     1072 | 2024-11-13 | Turkey            | L   | 0.699      | -            | -                | -                | -         |   -21.35 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           32 |     1079 | 2024-11-13 | Mindfreak         | W   | 0.699      | -            | -                | -                | 1 (0.699) |     0.86 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           31 |     1175 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.674      | 0.432        | 0.074 (0.022)    | -                | 1 (0.674) |     4.36 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           30 |     1194 | 2024-11-08 | Johnny Speeds     | W   | 0.668      | 0.432        | 0.107 (0.031)    | 0.736 (0.212)    | 1 (0.668) |     4.50 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           29 |     1210 | 2024-11-07 | Kappa Bar         | W   | 0.662      | -            | -                | -                | 1 (0.662) |     1.26 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           28 |     1352 | 2024-10-31 | Johnny Speeds     | L   | 0.614      | -            | -                | -                | -         |   -15.44 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           27 |     1371 | 2024-10-30 | ECSTATIC          | W   | 0.607      | 0.333        | 0.080 (0.016)    | 1.000 (0.202)    | -         |     2.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           26 |     1376 | 2024-10-30 | Iberian Soul      | W   | 0.606      | -            | -                | -                | -         |     2.13 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           25 |     1723 | 2024-10-12 | Aurora            | L   | 0.485      | -            | -                | -                | -         |   -13.35 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           24 |     1747 | 2024-10-10 | fnatic            | W   | 0.472      | 0.435        | 0.177 (0.036)    | -                | -         |     3.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           23 |     1824 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.458      | 0.435        | -                | 0.666 (0.133)    | -         |     2.44 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           22 |     1850 | 2024-10-07 | Monte             | L   | 0.452      | -            | -                | -                | -         |   -11.51 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           21 |     1931 | 2024-10-04 | CYBERSHOKE        | W   | 0.433      | -            | -                | -                | -         |     0.92 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           20 |     1976 | 2024-10-03 | Zero Tenacity     | L   | 0.426      | -            | -                | -                | -         |   -10.71 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           19 |     2053 | 2024-10-01 | G2 Ares           | W   | 0.414      | -            | -                | -                | -         |     0.22 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           18 |     2390 | 2024-09-23 | Into the Breach   | L   | 0.358      | -            | -                | -                | -         |   -10.39 | adamb, L00m1, nilo, Plopski, Sapec  |
|           17 |     2578 | 2024-09-16 | 9INE              | W   | 0.312      | 0.384        | 0.125 (0.015)    | -                | -         |     1.19 | adamb, L00m1, nilo, Plopski, Sapec  |
|           16 |     2734 | 2024-09-11 | Zero Tenacity     | L   | 0.279      | -            | -                | -                | -         |    -7.22 | adamb, L00m1, nilo, Plopski, Sapec  |
|           15 |     2788 | 2024-09-09 | Zero Tenacity     | L   | 0.265      | -            | -                | -                | -         |    -6.96 | adamb, L00m1, nilo, Plopski, Sapec  |
|           14 |     2934 | 2024-09-04 | Sampi             | W   | 0.233      | -            | -                | -                | -         |     0.81 | adamb, L00m1, nilo, Plopski, Sapec  |
|           13 |     2996 | 2024-09-02 | FAVBET            | W   | 0.219      | -            | -                | -                | -         |     0.57 | adamb, L00m1, nilo, Plopski, Sapec  |
|           12 |     3148 | 2024-08-28 | Nemiga            | W   | 0.185      | 0.384        | 0.492 (0.035)    | -                | -         |     2.25 | adamb, L00m1, nilo, Plopski, Sapec  |
|           11 |     3213 | 2024-08-27 | ex-Enterprise     | W   | 0.178      | -            | -                | -                | -         |     0.34 | adamb, L00m1, nilo, Plopski, Sapec  |
|           10 |     3393 | 2024-08-22 | Complexity        | L   | 0.147      | -            | -                | -                | -         |    -2.63 | adamb, L00m1, nilo, Plopski, Sapec  |
|            9 |     3464 | 2024-08-21 | 9INE              | L   | 0.139      | -            | -                | -                | -         |    -3.87 | adamb, L00m1, nilo, Plopski, Sapec  |
|            8 |     3513 | 2024-08-20 | TSM               | L   | 0.131      | -            | -                | -                | -         |    -3.88 | adamb, L00m1, nilo, Plopski, Sapec  |
|            7 |     3530 | 2024-08-19 | Sashi             | L   | 0.126      | -            | -                | -                | -         |    -3.45 | adamb, L00m1, nilo, Plopski, Sapec  |
|            6 |     3646 | 2024-08-15 | PARIVISION        | L   | 0.098      | -            | -                | -                | -         |    -2.92 | adamb, L00m1, nilo, Plopski, Sapec  |
|            5 |     3747 | 2024-08-12 | Sampi             | W   | 0.079      | -            | -                | -                | -         |     0.26 | adamb, L00m1, nilo, Plopski, Sapec  |
|            4 |     3848 | 2024-08-08 | Into the Breach   | W   | 0.052      | -            | -                | -                | -         |     0.10 | adamb, L00m1, nilo, Plopski, Sapec  |
|            3 |     3877 | 2024-08-07 | Johnny Speeds     | W   | 0.047      | -            | -                | -                | -         |     0.23 | adamb, L00m1, nilo, Plopski, Sapec  |
|            2 |     3886 | 2024-08-07 | TSM               | W   | 0.046      | -            | -                | -                | -         |     0.08 | adamb, L00m1, nilo, Plopski, Sapec  |
|            1 |     4098 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.007      | -            | -                | -                | -         |     0.04 | adamb, L00m1, nilo, Plopski, Sapec  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,524.53)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.961 | $6,557.00      | $6,302.67       |
| 2024-12-15 |      0.913 | $2,000.00      | $1,826.71       |
| 2024-11-17 |      0.727 | $15,000.00     | $10,902.20      |
| 2024-11-09 |      0.674 | $24,239.00     | $16,328.88      |
| 2024-10-13 |      0.494 | $2,000.00      | $987.64         |
| 2024-09-26 |      0.380 | $500.00        | $190.00         |
| 2024-09-14 |      0.300 | $500.00        | $150.18         |
| 2024-08-25 |      0.167 | $5,000.00      | $836.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
