### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [95](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [67]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  878.6<br />
<br />
Final Rank Value (878.6) = Starting Rank Value (867.5) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.5
- 400 + ( ( 0.235 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 867.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      261 | 2024-12-12 | 9INE              | L   | 0.944      | -            | -                | -                | -         |   -11.84 | acoR, niko, sirah, valde, Zyphon  |
|           62 |      286 | 2024-12-10 | KOI               | L   | 0.931      | -            | -                | -                | -         |   -11.34 | acoR, niko, sirah, valde, Zyphon  |
|           61 |      315 | 2024-12-08 | Illuminar         | W   | 0.917      | 0.371        | 0.018 (0.006)    | 0.483 (0.164)    | 0 (0.000) |    13.60 | acoR, niko, sirah, valde, Zyphon  |
|           60 |      369 | 2024-12-06 | NAVI Junior       | L   | 0.904      | -            | -                | -                | -         |    -7.13 | acoR, niko, sirah, valde, Zyphon  |
|           59 |      462 | 2024-12-02 | Endpoint          | W   | 0.877      | 0.371        | 0.033 (0.011)    | 0.511 (0.166)    | 0 (0.000) |    12.44 | acoR, niko, sirah, valde, Zyphon  |
|           58 |      641 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.816      | -            | -                | -                | -         |    -6.61 | acoR, niko, sirah, valde, Zyphon  |
|           57 |      669 | 2024-11-22 | PARIVISION        | W   | 0.810      | -            | -                | -                | 1 (0.810) |    13.40 | acoR, niko, sirah, valde, Zyphon  |
|           56 |      683 | 2024-11-21 | Virtus.pro        | L   | 0.804      | -            | -                | -                | -         |    -2.31 | acoR, niko, sirah, valde, Zyphon  |
|           55 |      693 | 2024-11-21 | 3DMAX             | L   | 0.803      | -            | -                | -                | -         |    -1.64 | acoR, niko, sirah, valde, Zyphon  |
|           54 |     1429 | 2024-10-17 | HOTU              | L   | 0.571      | -            | -                | -                | -         |   -11.76 | acoR, niko, sirah, valde, Zyphon  |
|           53 |     1448 | 2024-10-16 | 9 Pandas          | L   | 0.566      | -            | -                | -                | -         |    -3.92 | acoR, niko, sirah, valde, Zyphon  |
|           52 |     1475 | 2024-10-15 | 3DMAX             | L   | 0.559      | -            | -                | -                | -         |    -1.24 | acoR, niko, sirah, valde, Zyphon  |
|           51 |     1542 | 2024-10-10 | SovvyKiNG         | L   | 0.524      | -            | -                | -                | -         |   -14.13 | acoR, niko, sirah, valde, Zyphon  |
|           50 |     1616 | 2024-10-08 | FAVBET            | L   | 0.512      | -            | -                | -                | -         |    -8.56 | acoR, niko, sirah, valde, Zyphon  |
|           49 |     1658 | 2024-10-06 | G2 Ares           | W   | 0.499      | -            | -                | -                | 0 (0.000) |     2.36 | acoR, niko, sirah, valde, Zyphon  |
|           48 |     1706 | 2024-10-05 | Passion UA        | L   | 0.490      | -            | -                | -                | -         |    -3.49 | acoR, niko, sirah, valde, Zyphon  |
|           47 |     1731 | 2024-10-04 | ECSTATIC          | L   | 0.485      | -            | -                | -                | -         |    -6.04 | acoR, niko, sirah, valde, Zyphon  |
|           46 |     1743 | 2024-10-04 | Apogee            | W   | 0.483      | 0.371        | -                | 0.306 (0.055)    | 0 (0.000) |     6.01 | acoR, niko, sirah, valde, Zyphon  |
|           45 |     1764 | 2024-10-03 | ALTERNATE aTTaX   | L   | 0.479      | -            | -                | -                | -         |    -5.43 | acoR, niko, sirah, valde, Zyphon  |
|           44 |     1781 | 2024-10-03 | Illuminar         | W   | 0.476      | 0.371        | -                | 0.483 (0.085)    | 0 (0.000) |     8.59 | acoR, niko, sirah, valde, Zyphon  |
|           43 |     1865 | 2024-10-01 | Apogee            | L   | 0.464      | -            | -                | -                | -         |    -9.18 | acoR, niko, sirah, valde, Zyphon  |
|           42 |     1886 | 2024-09-30 | DRILLAS           | W   | 0.457      | -            | -                | -                | 0 (0.000) |     5.42 | acoR, niko, sirah, valde, Zyphon  |
|           41 |     1910 | 2024-09-29 | Illuminar         | W   | 0.451      | 0.371        | -                | 0.483 (0.081)    | 0 (0.000) |     7.98 | acoR, niko, sirah, valde, Zyphon  |
|           40 |     2090 | 2024-09-25 | Gaimin Gladiators | W   | 0.424      | 0.371        | 0.080 (0.013)    | 0.875 (0.138)    | 0 (0.000) |     7.69 | acoR, niko, sirah, valde, Zyphon  |
|           39 |     2235 | 2024-09-21 | los kogutos       | W   | 0.397      | 0.371        | 0.071 (0.010)    | 0.836 (0.123)    | 0 (0.000) |     9.91 | acoR, niko, sirah, valde, Zyphon  |
|           38 |     2497 | 2024-09-12 | Sashi             | L   | 0.338      | -            | -                | -                | -         |    -3.76 | acoR, Altekz, niko, sirah, Zyphon |
|           37 |     2559 | 2024-09-10 | ALTERNATE aTTaX   | W   | 0.325      | 0.384        | 0.074 (0.009)    | 0.680 (0.085)    | -         |     7.81 | acoR, Altekz, niko, valde, Zyphon |
|           36 |     2565 | 2024-09-10 | SAW               | L   | 0.324      | -            | -                | -                | -         |    -0.73 | acoR, Altekz, niko, valde, Zyphon |
|           35 |     2740 | 2024-09-04 | Young Ninjas      | L   | 0.284      | -            | -                | -                | -         |    -6.43 | acoR, Altekz, niko, valde, Zyphon |
|           34 |     2766 | 2024-09-03 | B8                | W   | 0.278      | 0.384        | 0.162 (0.017)    | -                | -         |     6.89 | acoR, Altekz, niko, valde, Zyphon |
|           33 |     2798 | 2024-09-02 | Into the Breach   | W   | 0.270      | -            | -                | -                | -         |     4.19 | acoR, Altekz, niko, valde, Zyphon |
|           32 |     2889 | 2024-08-29 | MOUZ NXT          | L   | 0.244      | -            | -                | -                | -         |    -5.82 | acoR, Altekz, niko, valde, Zyphon |
|           31 |     2988 | 2024-08-27 | Monte Gen         | L   | 0.232      | -            | -                | -                | -         |    -4.38 | acoR, Altekz, niko, valde, Zyphon |
|           30 |     2999 | 2024-08-27 | Sampi             | W   | 0.231      | -            | -                | -                | -         |     4.70 | acoR, Altekz, niko, valde, Zyphon |
|           29 |     3070 | 2024-08-26 | ECSTATIC          | W   | 0.225      | 0.435        | 0.079 (0.008)    | 1.000 (0.098)    | -         |     4.26 | acoR, Altekz, niko, valde, Zyphon |
|           28 |     3159 | 2024-08-23 | KOI               | W   | 0.206      | -            | -                | -                | -         |     3.65 | acoR, Altekz, niko, valde, Zyphon |
|           27 |     3178 | 2024-08-23 | BC.Game           | W   | 0.203      | -            | -                | -                | -         |     3.13 | acoR, Altekz, niko, valde, Zyphon |
|           26 |     3191 | 2024-08-22 | 1WIN              | W   | 0.198      | -            | -                | -                | -         |     1.59 | acoR, Altekz, niko, valde, Zyphon |
|           25 |     3245 | 2024-08-21 | GamerLegion       | L   | 0.191      | -            | -                | -                | -         |    -3.62 | acoR, Altekz, niko, valde, Zyphon |
|           24 |     3278 | 2024-08-21 | UNPAID            | L   | 0.190      | -            | -                | -                | -         |    -2.09 | acoR, Altekz, niko, valde, Zyphon |
|           23 |     3310 | 2024-08-20 | Metizport         | W   | 0.183      | 0.384        | 0.182 (0.013)    | 0.793 (0.056)    | -         |     5.40 | acoR, Altekz, niko, valde, Zyphon |
|           22 |     3458 | 2024-08-14 | ALTERNATE aTTaX   | W   | 0.144      | 0.384        | 0.074 (0.004)    | -                | -         |     3.60 | acoR, Altekz, niko, valde, Zyphon |
|           21 |     3534 | 2024-08-12 | Aurora            | W   | 0.133      | -            | -                | -                | -         |     1.11 | acoR, Altekz, niko, valde, Zyphon |
|           20 |     3546 | 2024-08-12 | Johnny Speeds     | W   | 0.131      | 0.333        | 0.108 (0.005)    | -                | -         |     3.12 | acoR, Altekz, niko, valde, Zyphon |
|           19 |     3567 | 2024-08-11 | kONO              | L   | 0.125      | -            | -                | -                | -         |    -1.65 | acoR, Altekz, niko, valde, Zyphon |
|           18 |     3573 | 2024-08-11 | ex-Enterprise     | W   | 0.124      | -            | -                | -                | -         |     1.92 | acoR, Altekz, niko, valde, Zyphon |
|           17 |     3574 | 2024-08-11 | Illuminar         | W   | 0.123      | -            | -                | -                | -         |     0.94 | acoR, Altekz, niko, valde, Zyphon |
|           16 |     3595 | 2024-08-10 | Into the Breach   | W   | 0.117      | -            | -                | -                | -         |     1.89 | acoR, Altekz, niko, valde, Zyphon |
|           15 |     3618 | 2024-08-09 | Revenant          | L   | 0.111      | -            | -                | -                | -         |    -2.43 | acoR, Altekz, niko, valde, Zyphon |
|           14 |     3625 | 2024-08-09 | los kogutos       | W   | 0.110      | -            | -                | -                | -         |     2.99 | acoR, Altekz, niko, valde, Zyphon |
|           13 |     3640 | 2024-08-08 | Johnny Speeds     | L   | 0.105      | -            | -                | -                | -         |    -0.80 | acoR, Altekz, niko, valde, Zyphon |
|           12 |     3683 | 2024-08-07 | Metizport         | L   | 0.098      | -            | -                | -                | -         |    -0.18 | acoR, Altekz, niko, valde, Zyphon |
|           11 |     3704 | 2024-08-07 | ex-Enterprise     | W   | 0.096      | -            | -                | -                | -         |     1.51 | acoR, Altekz, niko, valde, Zyphon |
|           10 |     3727 | 2024-08-06 | Betera            | W   | 0.092      | -            | -                | -                | -         |     0.74 | acoR, Altekz, niko, valde, Zyphon |
|            9 |     3745 | 2024-08-06 | ECSTATIC          | W   | 0.090      | -            | -                | -                | -         |     1.82 | acoR, Altekz, niko, valde, Zyphon |
|            8 |     3759 | 2024-08-05 | Sashi             | W   | 0.084      | -            | -                | -                | -         |     1.85 | acoR, Altekz, niko, valde, Zyphon |
|            7 |     3761 | 2024-08-05 | 777               | W   | 0.084      | -            | -                | -                | -         |     0.18 | acoR, Altekz, niko, valde, Zyphon |
|            6 |     3784 | 2024-08-04 | 1WIN              | L   | 0.079      | -            | -                | -                | -         |    -1.92 | acoR, Altekz, niko, valde, Zyphon |
|            5 |     3791 | 2024-08-04 | TALON             | W   | 0.078      | -            | -                | -                | -         |     0.43 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     3847 | 2024-08-02 | PARIVISION        | L   | 0.066      | -            | -                | -                | -         |    -1.07 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     3980 | 2024-07-30 | 9 Pandas          | W   | 0.046      | -            | -                | -                | -         |     0.46 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     4036 | 2024-07-29 | GUN5              | L   | 0.037      | -            | -                | -                | -         |    -0.27 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     4064 | 2024-07-28 | 1WIN              | L   | 0.031      | -            | -                | -                | -         |    -0.76 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,485.28)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.592 | $6,000.00      | $3,550.09       |
| 2024-10-05 |      0.490 | $5,000.00      | $2,449.81       |
| 2024-09-14 |      0.352 | $1,000.00      | $352.46         |
| 2024-08-28 |      0.239 | $2,000.00      | $478.46         |
| 2024-08-12 |      0.131 | $5,000.00      | $654.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
