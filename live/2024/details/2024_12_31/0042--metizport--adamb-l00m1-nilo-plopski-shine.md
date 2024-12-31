### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [42](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [31]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1153.8<br />
<br />
Final Rank Value (1153.8) = Starting Rank Value (1377.5) + Head To Head Adjustments (-223.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.763[<sup>2</sup>](#table1)

The average of these factors is 0.502<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1377.5
- 400 + ( ( 0.502 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1377.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |       32 | 2024-12-22 | PORTUGAL          | L   | 1.000      | -            | -                | -                | -         |   -27.64 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           58 |       36 | 2024-12-22 | Zero Tenacity     | W   | 1.000      | 0.387        | 0.080 (0.031)    | 0.650 (0.252)    | 0 (0.000) |    10.58 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           57 |      149 | 2024-12-14 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -23.60 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           56 |      176 | 2024-12-13 | Monte             | W   | 1.000      | 0.435        | 0.070 (0.030)    | 0.674 (0.293)    | 0 (0.000) |    12.96 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           55 |      205 | 2024-12-11 | Insilio           | W   | 1.000      | -            | -                | -                | -         |     3.16 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           54 |      218 | 2024-12-10 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -24.00 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           53 |      247 | 2024-12-08 | FLuffy Gangsters  | W   | 1.000      | 0.435        | -                | 0.563 (0.245)    | -         |     2.88 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           52 |      321 | 2024-12-05 | Fire Flux         | W   | 1.000      | 0.435        | -                | 0.609 (0.265)    | -         |     4.63 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           51 |      375 | 2024-12-03 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -24.54 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           50 |      676 | 2024-11-17 | Partizan          | L   | 0.919      | -            | -                | -                | -         |   -15.70 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           49 |      681 | 2024-11-17 | Nexus             | L   | 0.918      | -            | -                | -                | -         |   -15.18 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           48 |      707 | 2024-11-16 | The Huns          | W   | 0.912      | 0.617        | 0.048 (0.027)    | 0.347 (0.195)    | 1 (0.912) |     4.65 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           47 |      736 | 2024-11-15 | Canada            | W   | 0.905      | -            | -                | -                | 1 (0.905) |     0.80 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           46 |      742 | 2024-11-15 | Norway            | W   | 0.904      | -            | -                | -                | 1 (0.904) |     1.20 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           45 |      754 | 2024-11-14 | los kogutos       | W   | 0.900      | 0.617        | 0.066 (0.037)    | 0.989 (0.550)    | 1 (0.900) |     5.53 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           44 |      800 | 2024-11-13 | Turkey            | L   | 0.892      | -            | -                | -                | -         |   -27.02 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           43 |      807 | 2024-11-13 | Mindfreak         | W   | 0.892      | -            | -                | -                | 1 (0.892) |     1.30 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           42 |      903 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.867      | 0.432        | 0.077 (0.029)    | -                | 1 (0.867) |     7.92 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |      922 | 2024-11-08 | Johnny Speeds     | W   | 0.861      | 0.432        | 0.102 (0.038)    | 0.869 (0.323)    | 1 (0.861) |     7.29 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      938 | 2024-11-07 | Kappa Bar         | W   | 0.855      | -            | -                | -                | 1 (0.855) |     1.85 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |     1080 | 2024-10-31 | Johnny Speeds     | L   | 0.807      | -            | -                | -                | -         |   -18.88 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |     1099 | 2024-10-30 | ECSTATIC          | W   | 0.800      | 0.333        | -                | 1.000 (0.267)    | -         |     4.74 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |     1104 | 2024-10-30 | KOI               | W   | 0.799      | -            | -                | -                | -         |     3.20 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |     1451 | 2024-10-12 | Aurora            | L   | 0.678      | -            | -                | -                | -         |   -17.61 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |     1475 | 2024-10-10 | fnatic            | W   | 0.665      | 0.435        | 0.189 (0.055)    | -                | -         |     7.28 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           34 |     1552 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.651      | 0.435        | 0.073 (0.021)    | 0.760 (0.215)    | -         |     3.83 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           33 |     1578 | 2024-10-07 | Monte             | L   | 0.645      | -            | -                | -                | -         |   -15.07 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           32 |     1659 | 2024-10-04 | CYBERSHOKE        | W   | 0.626      | -            | -                | -                | -         |     2.08 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           31 |     1704 | 2024-10-03 | Zero Tenacity     | L   | 0.619      | -            | -                | -                | -         |   -14.13 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           30 |     1781 | 2024-10-01 | G2 Ares           | W   | 0.607      | -            | -                | -                | -         |     0.42 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           29 |     2118 | 2024-09-23 | Into the Breach   | L   | 0.551      | -            | -                | -                | -         |   -15.19 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     2306 | 2024-09-16 | 9INE              | W   | 0.505      | 0.384        | 0.108 (0.021)    | 1.000 (0.194)    | -         |     2.33 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     2462 | 2024-09-11 | Zero Tenacity     | L   | 0.472      | -            | -                | -                | -         |   -11.49 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     2516 | 2024-09-09 | Zero Tenacity     | L   | 0.458      | -            | -                | -                | -         |   -11.47 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     2662 | 2024-09-04 | Sampi             | W   | 0.426      | -            | -                | -                | -         |     1.82 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     2724 | 2024-09-02 | FAVBET            | W   | 0.412      | -            | -                | -                | -         |     1.28 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     2876 | 2024-08-28 | Nemiga            | W   | 0.378      | 0.384        | 0.474 (0.069)    | -                | -         |     5.32 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2941 | 2024-08-27 | ex-Enterprise     | W   | 0.371      | -            | -                | -                | -         |     0.96 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     3121 | 2024-08-22 | Complexity        | L   | 0.340      | -            | -                | -                | -         |    -4.43 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     3192 | 2024-08-21 | 9INE              | L   | 0.332      | -            | -                | -                | -         |    -9.05 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     3241 | 2024-08-20 | TSM               | L   | 0.324      | -            | -                | -                | -         |    -9.26 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     3258 | 2024-08-19 | Sashi             | L   | 0.319      | -            | -                | -                | -         |    -8.56 | adamb, L00m1, nilo, Plopski, Sapec    |
|           17 |     3374 | 2024-08-15 | PARIVISION        | L   | 0.291      | -            | -                | -                | -         |    -8.35 | adamb, L00m1, nilo, Plopski, Sapec    |
|           16 |     3475 | 2024-08-12 | Sampi             | W   | 0.272      | -            | -                | -                | -         |     1.03 | adamb, L00m1, nilo, Plopski, Sapec    |
|           15 |     3576 | 2024-08-08 | Into the Breach   | W   | 0.245      | -            | -                | -                | -         |     0.58 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     3605 | 2024-08-07 | Johnny Speeds     | W   | 0.240      | -            | -                | -                | -         |     1.50 | adamb, L00m1, nilo, Plopski, Sapec    |
|           13 |     3614 | 2024-08-07 | TSM               | W   | 0.239      | -            | -                | -                | -         |     0.58 | adamb, L00m1, nilo, Plopski, Sapec    |
|           12 |     3661 | 2024-08-06 | UNPAID            | W   | 0.232      | -            | -                | -                | -         |     1.20 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     3665 | 2024-08-06 | HAVU              | W   | 0.232      | -            | -                | -                | -         |     0.06 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     3670 | 2024-08-06 | Johnny Speeds     | L   | 0.231      | -            | -                | -                | -         |    -5.92 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     3826 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.200      | -            | -                | -                | -         |     1.38 | adamb, L00m1, nilo, Plopski, Sapec    |
|            8 |     3836 | 2024-08-01 | Insilio           | L   | 0.198      | -            | -                | -                | -         |    -5.96 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3933 | 2024-07-30 | QUAZAR            | W   | 0.185      | -            | -                | -                | -         |     0.10 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3988 | 2024-07-28 | Insilio           | L   | 0.173      | -            | -                | -                | -         |    -5.20 | adamb, Jackinho, nilo, Plopski, Sapec |
|            5 |     4154 | 2024-07-23 | RUBY              | L   | 0.138      | -            | -                | -                | -         |    -4.30 | adamb, Jackinho, nilo, Plopski, Sapec |
|            4 |     4172 | 2024-07-22 | los kogutos       | L   | 0.133      | -            | -                | -                | -         |    -2.93 | adamb, Jackinho, nilo, Plopski, Sapec |
|            3 |     4273 | 2024-07-19 | Sampi             | W   | 0.113      | -            | -                | -                | -         |     0.41 | adamb, Jackinho, nilo, Plopski, Sapec |
|            2 |     4329 | 2024-07-18 | BC.Game           | L   | 0.106      | -            | -                | -                | -         |    -3.14 | adamb, Jackinho, nilo, Plopski, Sapec |
|            1 |     4452 | 2024-07-16 | Endpoint          | W   | 0.092      | -            | -                | -                | -         |     0.15 | adamb, Jackinho, nilo, Plopski, Sapec |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,068.05)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $6,557.00      | $6,557.00       |
| 2024-12-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-11-17 |      0.920 | $15,000.00     | $13,796.80      |
| 2024-11-09 |      0.867 | $24,239.00     | $21,006.37      |
| 2024-10-13 |      0.687 | $2,000.00      | $1,373.59       |
| 2024-09-26 |      0.573 | $500.00        | $286.48         |
| 2024-09-14 |      0.493 | $500.00        | $246.66         |
| 2024-08-25 |      0.360 | $5,000.00      | $1,801.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
