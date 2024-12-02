### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [77](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [56]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1002.0<br />
<br />
Final Rank Value (1002.0) = Starting Rank Value (958.3) + Head To Head Adjustments (43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.3
- 400 + ( ( 0.278 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 958.3


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
|           72 |        3 | 2024-12-02 | Endpoint          | W   | 1.000      | 0.371        | 0.038 (0.014)    | 0.627 (0.232)    | 0 (0.000) |    13.14 | acoR, niko, sirah, valde, Zyphon  |
|           71 |      182 | 2024-11-23 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -7.91 | acoR, niko, sirah, valde, Zyphon  |
|           70 |      210 | 2024-11-22 | PARIVISION        | W   | 1.000      | -            | -                | -                | 1 (1.000) |    19.04 | acoR, niko, sirah, valde, Zyphon  |
|           69 |      224 | 2024-11-21 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -2.00 | acoR, niko, sirah, valde, Zyphon  |
|           68 |      234 | 2024-11-21 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -2.23 | acoR, niko, sirah, valde, Zyphon  |
|           67 |      970 | 2024-10-17 | HOTU              | L   | 0.892      | -            | -                | -                | -         |   -19.27 | acoR, niko, sirah, valde, Zyphon  |
|           66 |      989 | 2024-10-16 | 9 Pandas          | L   | 0.888      | -            | -                | -                | -         |    -7.39 | acoR, niko, sirah, valde, Zyphon  |
|           65 |     1016 | 2024-10-15 | 3DMAX             | L   | 0.881      | -            | -                | -                | -         |    -2.35 | acoR, niko, sirah, valde, Zyphon  |
|           64 |     1083 | 2024-10-10 | SovvyKiNG         | L   | 0.846      | -            | -                | -                | -         |   -23.13 | acoR, niko, sirah, valde, Zyphon  |
|           63 |     1157 | 2024-10-08 | FAVBET            | L   | 0.834      | -            | -                | -                | -         |   -16.71 | acoR, niko, sirah, valde, Zyphon  |
|           62 |     1199 | 2024-10-06 | G2 Ares           | W   | 0.820      | -            | -                | -                | 0 (0.000) |     2.60 | acoR, niko, sirah, valde, Zyphon  |
|           61 |     1247 | 2024-10-05 | Passion UA        | L   | 0.812      | -            | -                | -                | -         |    -8.10 | acoR, niko, sirah, valde, Zyphon  |
|           60 |     1272 | 2024-10-04 | ECSTATIC          | L   | 0.807      | -            | -                | -                | -         |   -13.01 | acoR, niko, sirah, valde, Zyphon  |
|           59 |     1284 | 2024-10-04 | Apogee            | W   | 0.805      | -            | -                | -                | 0 (0.000) |     8.56 | acoR, niko, sirah, valde, Zyphon  |
|           58 |     1305 | 2024-10-03 | ALTERNATE aTTaX   | L   | 0.801      | -            | -                | -                | -         |   -13.60 | acoR, niko, sirah, valde, Zyphon  |
|           57 |     1322 | 2024-10-03 | Illuminar         | W   | 0.798      | 0.371        | -                | 0.523 (0.155)    | 0 (0.000) |     9.56 | acoR, niko, sirah, valde, Zyphon  |
|           56 |     1406 | 2024-10-01 | Apogee            | L   | 0.785      | -            | -                | -                | -         |   -17.38 | acoR, niko, sirah, valde, Zyphon  |
|           55 |     1427 | 2024-09-30 | DRILLAS           | W   | 0.779      | -            | -                | -                | 0 (0.000) |     6.09 | acoR, niko, sirah, valde, Zyphon  |
|           54 |     1451 | 2024-09-29 | Illuminar         | W   | 0.773      | 0.371        | -                | 0.523 (0.150)    | 0 (0.000) |     8.32 | acoR, niko, sirah, valde, Zyphon  |
|           53 |     1631 | 2024-09-25 | Gaimin Gladiators | W   | 0.746      | 0.371        | 0.061 (0.017)    | 0.921 (0.255)    | 0 (0.000) |    10.55 | acoR, niko, sirah, valde, Zyphon  |
|           52 |     1776 | 2024-09-21 | Permitta          | W   | 0.718      | 0.371        | 0.064 (0.017)    | 1.000 (0.266)    | 0 (0.000) |    13.98 | acoR, niko, sirah, valde, Zyphon  |
|           51 |     2038 | 2024-09-12 | Sashi             | L   | 0.660      | -            | -                | -                | -         |    -9.74 | acoR, Altekz, niko, sirah, Zyphon |
|           50 |     2100 | 2024-09-10 | ALTERNATE aTTaX   | W   | 0.646      | 0.384        | 0.072 (0.018)    | 0.795 (0.197)    | 0 (0.000) |    13.03 | acoR, Altekz, niko, valde, Zyphon |
|           49 |     2106 | 2024-09-10 | SAW               | L   | 0.646      | -            | -                | -                | -         |    -0.74 | acoR, Altekz, niko, valde, Zyphon |
|           48 |     2281 | 2024-09-04 | Young Ninjas      | L   | 0.606      | -            | -                | -                | -         |   -14.55 | acoR, Altekz, niko, valde, Zyphon |
|           47 |     2307 | 2024-09-03 | B8                | W   | 0.600      | 0.384        | 0.172 (0.040)    | 0.787 (0.181)    | -         |    14.41 | acoR, Altekz, niko, valde, Zyphon |
|           46 |     2339 | 2024-09-02 | Into the Breach   | W   | 0.592      | -            | -                | -                | -         |     6.89 | acoR, Altekz, niko, valde, Zyphon |
|           45 |     2430 | 2024-08-29 | MOUZ NXT          | L   | 0.566      | -            | -                | -                | -         |   -13.34 | acoR, Altekz, niko, valde, Zyphon |
|           44 |     2529 | 2024-08-27 | Monte Gen         | L   | 0.554      | -            | -                | -                | -         |   -12.99 | acoR, Altekz, niko, valde, Zyphon |
|           43 |     2540 | 2024-08-27 | Sampi             | W   | 0.553      | -            | -                | -                | -         |     9.24 | acoR, Altekz, niko, valde, Zyphon |
|           42 |     2611 | 2024-08-26 | ECSTATIC          | W   | 0.546      | 0.435        | -                | 0.812 (0.193)    | -         |     6.28 | acoR, Altekz, niko, valde, Zyphon |
|           41 |     2700 | 2024-08-23 | KOI               | W   | 0.527      | -            | -                | -                | -         |     5.57 | acoR, Altekz, niko, valde, Zyphon |
|           40 |     2719 | 2024-08-23 | BC.Game           | W   | 0.525      | -            | -                | -                | -         |     5.26 | acoR, Altekz, niko, valde, Zyphon |
|           39 |     2732 | 2024-08-22 | 1WIN              | W   | 0.520      | -            | -                | -                | -         |     1.90 | acoR, Altekz, niko, valde, Zyphon |
|           38 |     2786 | 2024-08-21 | GamerLegion       | L   | 0.513      | -            | -                | -                | -         |    -2.30 | acoR, Altekz, niko, valde, Zyphon |
|           37 |     2819 | 2024-08-21 | UNPAID            | L   | 0.512      | -            | -                | -                | -         |    -5.28 | acoR, Altekz, niko, valde, Zyphon |
|           36 |     2851 | 2024-08-20 | Metizport         | W   | 0.505      | 0.384        | 0.120 (0.023)    | -                | -         |    13.89 | acoR, Altekz, niko, valde, Zyphon |
|           35 |     2999 | 2024-08-14 | ALTERNATE aTTaX   | W   | 0.466      | -            | -                | -                | -         |    10.29 | acoR, Altekz, niko, valde, Zyphon |
|           34 |     3075 | 2024-08-12 | Aurora            | W   | 0.454      | 0.500        | 0.090 (0.020)    | -                | -         |     9.06 | acoR, Altekz, niko, valde, Zyphon |
|           33 |     3087 | 2024-08-12 | Johnny Speeds     | W   | 0.453      | 0.333        | 0.100 (0.015)    | 1.000 (0.151)    | -         |    10.84 | acoR, Altekz, niko, valde, Zyphon |
|           32 |     3108 | 2024-08-11 | kONO              | L   | 0.447      | -            | -                | -                | -         |    -8.03 | acoR, Altekz, niko, valde, Zyphon |
|           31 |     3114 | 2024-08-11 | ex-Enterprise     | W   | 0.446      | -            | -                | -                | -         |     6.48 | acoR, Altekz, niko, valde, Zyphon |
|           30 |     3115 | 2024-08-11 | Illuminar         | W   | 0.445      | -            | -                | -                | -         |     7.61 | acoR, Altekz, niko, valde, Zyphon |
|           29 |     3136 | 2024-08-10 | Into the Breach   | W   | 0.438      | -            | -                | -                | -         |     5.81 | acoR, Altekz, niko, valde, Zyphon |
|           28 |     3159 | 2024-08-09 | Revenant          | L   | 0.433      | -            | -                | -                | -         |    -9.55 | acoR, Altekz, niko, valde, Zyphon |
|           27 |     3166 | 2024-08-09 | Permitta          | W   | 0.432      | -            | -                | -                | -         |    11.23 | acoR, Altekz, niko, valde, Zyphon |
|           26 |     3181 | 2024-08-08 | Johnny Speeds     | L   | 0.427      | -            | -                | -                | -         |    -3.08 | acoR, Altekz, niko, valde, Zyphon |
|           25 |     3224 | 2024-08-07 | Metizport         | L   | 0.420      | -            | -                | -                | -         |    -1.21 | acoR, Altekz, niko, valde, Zyphon |
|           24 |     3245 | 2024-08-07 | ex-Enterprise     | W   | 0.418      | -            | -                | -                | -         |     6.43 | acoR, Altekz, niko, valde, Zyphon |
|           23 |     3268 | 2024-08-06 | Betera            | W   | 0.414      | -            | -                | -                | -         |     2.48 | acoR, Altekz, niko, valde, Zyphon |
|           22 |     3286 | 2024-08-06 | ECSTATIC          | W   | 0.412      | -            | -                | -                | -         |     6.11 | acoR, Altekz, niko, valde, Zyphon |
|           21 |     3300 | 2024-08-05 | Sashi             | W   | 0.406      | -            | -                | -                | -         |     8.29 | acoR, Altekz, niko, valde, Zyphon |
|           20 |     3302 | 2024-08-05 | 777               | W   | 0.406      | -            | -                | -                | -         |     0.77 | acoR, Altekz, niko, valde, Zyphon |
|           19 |     3325 | 2024-08-04 | 1WIN              | L   | 0.401      | -            | -                | -                | -         |    -9.75 | acoR, Altekz, niko, valde, Zyphon |
|           18 |     3332 | 2024-08-04 | TALON             | W   | 0.400      | -            | -                | -                | -         |     1.55 | acoR, Altekz, niko, valde, Zyphon |
|           17 |     3388 | 2024-08-02 | PARIVISION        | L   | 0.388      | -            | -                | -                | -         |    -5.14 | acoR, Altekz, niko, valde, Zyphon |
|           16 |     3521 | 2024-07-30 | 9 Pandas          | W   | 0.368      | 0.500        | 0.099 (0.018)    | 0.899 (0.165)    | -         |     9.04 | acoR, Altekz, niko, valde, Zyphon |
|           15 |     3577 | 2024-07-29 | GUN5              | L   | 0.359      | -            | -                | -                | -         |    -6.16 | acoR, Altekz, niko, valde, Zyphon |
|           14 |     3605 | 2024-07-28 | 1WIN              | L   | 0.353      | -            | -                | -                | -         |    -8.99 | acoR, Altekz, niko, valde, Zyphon |
|           13 |     3777 | 2024-07-22 | CPH Wolves        | L   | 0.315      | -            | -                | -                | -         |    -7.52 | acoR, Altekz, niko, valde, Zyphon |
|           12 |     3821 | 2024-07-21 | Preasy            | W   | 0.305      | -            | -                | -                | -         |     2.23 | acoR, Altekz, niko, valde, Zyphon |
|           11 |     3925 | 2024-07-18 | Nexus             | L   | 0.287      | -            | -                | -                | -         |    -0.58 | acoR, Altekz, niko, valde, Zyphon |
|           10 |     3949 | 2024-07-18 | LEON              | W   | 0.285      | -            | -                | -                | -         |     0.71 | acoR, Altekz, niko, valde, Zyphon |
|            9 |     3992 | 2024-07-17 | GUN5              | W   | 0.281      | -            | -                | -                | -         |     4.21 | acoR, Altekz, niko, valde, Zyphon |
|            8 |     4019 | 2024-07-17 | Into the Breach   | L   | 0.279      | -            | -                | -                | -         |    -5.28 | acoR, Altekz, niko, valde, Zyphon |
|            7 |     4066 | 2024-07-16 | 500               | W   | 0.273      | -            | -                | -                | -         |     3.94 | acoR, Altekz, niko, valde, Zyphon |
|            6 |     4099 | 2024-07-15 | 3DMAX             | W   | 0.268      | 0.500        | 0.409 (0.055)    | -                | -         |     8.10 | acoR, Altekz, niko, valde, Zyphon |
|            5 |     4145 | 2024-07-13 | Sashi             | W   | 0.253      | -            | -                | -                | -         |     5.05 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     4157 | 2024-07-12 | Johnny Speeds     | W   | 0.245      | -            | -                | -                | -         |     5.74 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     4217 | 2024-07-09 | Passion UA        | W   | 0.226      | -            | -                | -                | -         |     6.09 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     4236 | 2024-07-08 | FLuffy Gangsters  | L   | 0.220      | -            | -                | -                | -         |    -5.32 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     4240 | 2024-07-08 | Passion UA        | W   | 0.218      | -            | -                | -                | -         |     5.91 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,856.02)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.913 | $6,000.00      | $5,480.61       |
| 2024-10-05 |      0.812 | $5,000.00      | $4,058.57       |
| 2024-09-14 |      0.674 | $1,000.00      | $674.21         |
| 2024-08-28 |      0.561 | $2,000.00      | $1,121.97       |
| 2024-08-12 |      0.453 | $5,000.00      | $2,263.23       |
| 2024-07-13 |      0.253 | $12,864.00     | $3,257.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
