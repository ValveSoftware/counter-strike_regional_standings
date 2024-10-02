### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [44](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [30]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  1029.8<br />
<br />
Final Rank Value (1029.8) = Starting Rank Value (961.2) + Head To Head Adjustments (68.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 961.2
- 400 + ( ( 0.293 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 961.2


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
|           56 |       69 | 2024-10-01 | Apogee            | L   | 1.000      | -            | -                | -                | -         |   -20.57 | acoR, niko, sirah, valde, Zyphon  |
|           55 |       90 | 2024-09-30 | DRILLAS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.17 | acoR, niko, sirah, valde, Zyphon  |
|           54 |      114 | 2024-09-29 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.51 | acoR, niko, sirah, valde, Zyphon  |
|           53 |      294 | 2024-09-25 | Gaimin Gladiators | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.54 | acoR, niko, sirah, valde, Zyphon  |
|           52 |      439 | 2024-09-21 | Permitta          | W   | 1.000      | 0.371        | -                | 0.964 (0.357)    | 0 (0.000) |    10.04 | acoR, niko, sirah, valde, Zyphon  |
|           51 |      701 | 2024-09-12 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -15.60 | acoR, Altekz, niko, sirah, Zyphon |
|           50 |      763 | 2024-09-10 | ALTERNATE aTTaX   | W   | 1.000      | 0.384        | 0.084 (0.032)    | 0.847 (0.326)    | 0 (0.000) |    12.49 | acoR, Altekz, niko, valde, Zyphon |
|           49 |      769 | 2024-09-10 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -3.03 | acoR, Altekz, niko, valde, Zyphon |
|           48 |      944 | 2024-09-04 | Young Ninjas      | L   | 1.000      | -            | -                | -                | -         |   -21.64 | acoR, Altekz, niko, valde, Zyphon |
|           47 |      970 | 2024-09-03 | B8                | W   | 1.000      | 0.384        | 0.188 (0.072)    | 1.000 (0.384)    | 0 (0.000) |    18.18 | acoR, Altekz, niko, valde, Zyphon |
|           46 |     1002 | 2024-09-02 | Into the Breach   | W   | 0.997      | 0.384        | -                | 0.687 (0.263)    | 0 (0.000) |    11.20 | acoR, Altekz, niko, valde, Zyphon |
|           45 |     1093 | 2024-08-29 | MOUZ NXT          | L   | 0.972      | -            | -                | -                | -         |   -17.48 | acoR, Altekz, niko, valde, Zyphon |
|           44 |     1192 | 2024-08-27 | Monte Gen         | L   | 0.959      | -            | -                | -                | -         |   -19.86 | acoR, Altekz, niko, valde, Zyphon |
|           43 |     1203 | 2024-08-27 | Sampi             | W   | 0.958      | 0.384        | -                | 0.797 (0.294)    | 0 (0.000) |    10.37 | acoR, Altekz, niko, valde, Zyphon |
|           42 |     1274 | 2024-08-26 | ECSTATIC          | W   | 0.952      | 0.435        | -                | 0.701 (0.290)    | 0 (0.000) |     9.27 | acoR, Altekz, niko, valde, Zyphon |
|           41 |     1363 | 2024-08-23 | KOI               | W   | 0.933      | -            | -                | -                | 0 (0.000) |     9.49 | acoR, Altekz, niko, valde, Zyphon |
|           40 |     1382 | 2024-08-23 | BC.Game           | W   | 0.931      | -            | -                | -                | -         |     9.77 | acoR, Altekz, niko, valde, Zyphon |
|           39 |     1395 | 2024-08-22 | 1WIN              | W   | 0.926      | -            | -                | -                | -         |    10.05 | acoR, Altekz, niko, valde, Zyphon |
|           38 |     1449 | 2024-08-21 | GamerLegion       | L   | 0.919      | -            | -                | -                | -         |   -12.46 | acoR, Altekz, niko, valde, Zyphon |
|           37 |     1482 | 2024-08-21 | BLEED             | L   | 0.917      | -            | -                | -                | -         |   -13.05 | acoR, Altekz, niko, valde, Zyphon |
|           36 |     1514 | 2024-08-20 | Metizport         | W   | 0.911      | -            | -                | -                | -         |    10.07 | acoR, Altekz, niko, valde, Zyphon |
|           35 |     1662 | 2024-08-14 | ALTERNATE aTTaX   | W   | 0.872      | 0.384        | 0.084 (0.028)    | 0.847 (0.284)    | -         |     8.27 | acoR, Altekz, niko, valde, Zyphon |
|           34 |     1738 | 2024-08-12 | Aurora            | W   | 0.860      | 0.500        | 0.191 (0.082)    | -                | -         |    20.50 | acoR, Altekz, niko, valde, Zyphon |
|           33 |     1750 | 2024-08-12 | Johnny Speeds     | W   | 0.858      | 0.333        | 0.094 (0.027)    | -                | -         |    18.80 | acoR, Altekz, niko, valde, Zyphon |
|           32 |     1771 | 2024-08-11 | kONO              | L   | 0.852      | -            | -                | -                | -         |   -18.22 | acoR, Altekz, niko, valde, Zyphon |
|           31 |     1777 | 2024-08-11 | ex-Enterprise     | W   | 0.851      | -            | -                | -                | -         |     9.82 | acoR, Altekz, niko, valde, Zyphon |
|           30 |     1778 | 2024-08-11 | Illuminar         | W   | 0.850      | -            | -                | -                | -         |     8.39 | acoR, Altekz, niko, valde, Zyphon |
|           29 |     1799 | 2024-08-10 | Into the Breach   | W   | 0.844      | -            | -                | -                | -         |    11.21 | acoR, Altekz, niko, valde, Zyphon |
|           28 |     1822 | 2024-08-09 | Revenant          | L   | 0.838      | -            | -                | -                | -         |   -15.78 | acoR, Altekz, niko, valde, Zyphon |
|           27 |     1829 | 2024-08-09 | Permitta          | W   | 0.837      | 0.333        | -                | 0.964 (0.269)    | -         |    10.61 | acoR, Altekz, niko, valde, Zyphon |
|           26 |     1844 | 2024-08-08 | Johnny Speeds     | L   | 0.832      | -            | -                | -                | -         |    -7.75 | acoR, Altekz, niko, valde, Zyphon |
|           25 |     1887 | 2024-08-07 | Metizport         | L   | 0.825      | -            | -                | -                | -         |   -16.59 | acoR, Altekz, niko, valde, Zyphon |
|           24 |     1908 | 2024-08-07 | ex-Enterprise     | W   | 0.824      | -            | -                | -                | -         |     9.83 | acoR, Altekz, niko, valde, Zyphon |
|           23 |     1931 | 2024-08-06 | Betera            | W   | 0.819      | -            | -                | -                | -         |     3.29 | acoR, Altekz, niko, valde, Zyphon |
|           22 |     1949 | 2024-08-06 | ECSTATIC          | W   | 0.817      | -            | -                | -                | -         |    11.07 | acoR, Altekz, niko, valde, Zyphon |
|           21 |     1963 | 2024-08-05 | Sashi             | W   | 0.812      | -            | -                | -                | -         |    16.16 | acoR, Altekz, niko, valde, Zyphon |
|           20 |     1965 | 2024-08-05 | 777               | W   | 0.811      | -            | -                | -                | -         |     3.50 | acoR, Altekz, niko, valde, Zyphon |
|           19 |     1988 | 2024-08-04 | 1WIN              | L   | 0.806      | -            | -                | -                | -         |   -14.42 | acoR, Altekz, niko, valde, Zyphon |
|           18 |     1995 | 2024-08-04 | TALON             | W   | 0.805      | -            | -                | -                | -         |     2.44 | acoR, Altekz, niko, valde, Zyphon |
|           17 |     2051 | 2024-08-02 | PARIVISION        | L   | 0.793      | -            | -                | -                | -         |   -10.00 | acoR, Altekz, niko, valde, Zyphon |
|           16 |     2184 | 2024-07-30 | 9 Pandas          | W   | 0.773      | -            | -                | -                | -         |    13.99 | acoR, Altekz, niko, valde, Zyphon |
|           15 |     2240 | 2024-07-29 | GUN5              | L   | 0.764      | -            | -                | -                | -         |   -14.62 | acoR, Altekz, niko, valde, Zyphon |
|           14 |     2268 | 2024-07-28 | 1WIN              | L   | 0.758      | -            | -                | -                | -         |   -15.30 | acoR, Altekz, niko, valde, Zyphon |
|           13 |     2440 | 2024-07-22 | CPH Wolves        | L   | 0.721      | -            | -                | -                | -         |   -14.13 | acoR, Altekz, niko, valde, Zyphon |
|           12 |     2484 | 2024-07-21 | Preasy            | W   | 0.711      | -            | -                | -                | -         |     3.98 | acoR, Altekz, niko, valde, Zyphon |
|           11 |     2588 | 2024-07-18 | Nexus             | L   | 0.693      | -            | -                | -                | -         |   -17.74 | acoR, Altekz, niko, valde, Zyphon |
|           10 |     2612 | 2024-07-18 | LEON              | W   | 0.691      | -            | -                | -                | -         |     2.25 | acoR, Altekz, niko, valde, Zyphon |
|            9 |     2655 | 2024-07-17 | GUN5              | W   | 0.687      | 0.500        | 0.071 (0.024)    | 1.000 (0.343)    | -         |     8.93 | acoR, Altekz, niko, valde, Zyphon |
|            8 |     2682 | 2024-07-17 | Into the Breach   | L   | 0.684      | -            | -                | -                | -         |   -13.40 | acoR, Altekz, niko, valde, Zyphon |
|            7 |     2729 | 2024-07-16 | 500               | W   | 0.678      | -            | -                | -                | -         |     1.60 | acoR, Altekz, niko, valde, Zyphon |
|            6 |     2762 | 2024-07-15 | 3DMAX             | W   | 0.673      | 0.500        | 0.433 (0.146)    | 0.799 (0.269)    | -         |    19.48 | acoR, Altekz, niko, valde, Zyphon |
|            5 |     2808 | 2024-07-13 | Sashi             | W   | 0.659      | 0.358        | 0.114 (0.027)    | -                | -         |    12.29 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     2820 | 2024-07-12 | Johnny Speeds     | W   | 0.651      | -            | -                | -                | -         |    13.39 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     2880 | 2024-07-09 | Passion UA        | W   | 0.632      | 0.358        | 0.128 (0.029)    | -                | -         |    11.38 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     2899 | 2024-07-08 | FLuffy Gangsters  | L   | 0.625      | -            | -                | -                | -         |   -15.26 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     2903 | 2024-07-08 | Passion UA        | W   | 0.624      | 0.358        | 0.128 (0.029)    | -                | -         |    11.22 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,697.35)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-28 |      0.966 | $2,000.00      | $1,932.95       |
| 2024-08-12 |      0.858 | $5,000.00      | $4,290.69       |
| 2024-07-13 |      0.659 | $12,864.00     | $8,473.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
