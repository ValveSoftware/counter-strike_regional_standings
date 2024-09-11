### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, Altekz, niko, valde, Zyphon<br />
Global Rank: [45](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [32]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  1059.6<br />
<br />
Final Rank Value (1059.6) = Starting Rank Value (1009.2) + Head To Head Adjustments (50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.468[<sup>2</sup>](#table1)
- Opponent Network: 0.339[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.2
- 400 + ( ( 0.314 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1009.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       35 | 2024-09-10 | ALTERNATE aTTaX  | W   | 1.000      | 0.384        | 0.103 (0.040)    | 0.812 (0.312)    | 0 (0.000) |    11.59 | acoR, Altekz, niko, valde, Zyphon |
|           49 |       41 | 2024-09-10 | SAW              | L   | 1.000      | -            | -                | -                | -         |    -2.09 | acoR, Altekz, niko, valde, Zyphon |
|           48 |      216 | 2024-09-04 | Young Ninjas     | L   | 1.000      | -            | -                | -                | -         |   -21.64 | acoR, Altekz, niko, valde, Zyphon |
|           47 |      242 | 2024-09-03 | B8               | W   | 1.000      | 0.384        | 0.247 (0.095)    | 1.000 (0.384)    | 0 (0.000) |    18.48 | acoR, Altekz, niko, valde, Zyphon |
|           46 |      274 | 2024-09-02 | Into the Breach  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.03 | acoR, Altekz, niko, valde, Zyphon |
|           45 |      365 | 2024-08-29 | MOUZ NXT         | L   | 1.000      | -            | -                | -                | -         |   -17.73 | acoR, Altekz, niko, valde, Zyphon |
|           44 |      464 | 2024-08-27 | Monte Gen        | L   | 1.000      | -            | -                | -                | -         |   -22.47 | acoR, Altekz, niko, valde, Zyphon |
|           43 |      475 | 2024-08-27 | Sampi            | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | 0 (0.000) |     9.64 | acoR, Altekz, niko, valde, Zyphon |
|           42 |      546 | 2024-08-26 | ECSTATIC         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.76 | acoR, Altekz, niko, valde, Zyphon |
|           41 |      635 | 2024-08-23 | KOI              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.35 | acoR, Altekz, niko, valde, Zyphon |
|           40 |      654 | 2024-08-23 | BC.Game          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.93 | acoR, Altekz, niko, valde, Zyphon |
|           39 |      667 | 2024-08-22 | 1WIN             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.50 | acoR, Altekz, niko, valde, Zyphon |
|           38 |      721 | 2024-08-21 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -13.55 | acoR, Altekz, niko, valde, Zyphon |
|           37 |      754 | 2024-08-21 | BLEED            | L   | 1.000      | -            | -                | -                | -         |   -13.58 | acoR, Altekz, niko, valde, Zyphon |
|           36 |      786 | 2024-08-20 | Metizport        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.01 | acoR, Altekz, niko, valde, Zyphon |
|           35 |      934 | 2024-08-14 | ALTERNATE aTTaX  | W   | 1.000      | 0.384        | 0.103 (0.040)    | 0.812 (0.312)    | 0 (0.000) |     7.98 | acoR, Altekz, niko, valde, Zyphon |
|           34 |     1010 | 2024-08-12 | Aurora           | W   | 1.000      | 0.500        | 0.282 (0.141)    | 0.571 (0.285)    | -         |    25.46 | acoR, Altekz, niko, valde, Zyphon |
|           33 |     1022 | 2024-08-12 | Johnny Speeds    | W   | 0.999      | 0.333        | 0.102 (0.034)    | 0.919 (0.306)    | -         |    22.43 | acoR, Altekz, niko, valde, Zyphon |
|           32 |     1043 | 2024-08-11 | kONO             | L   | 0.993      | -            | -                | -                | -         |   -21.75 | acoR, Altekz, niko, valde, Zyphon |
|           31 |     1049 | 2024-08-11 | Enterprise       | W   | 0.992      | -            | -                | -                | -         |    10.61 | acoR, Altekz, niko, valde, Zyphon |
|           30 |     1050 | 2024-08-11 | Illuminar        | W   | 0.991      | -            | -                | -                | -         |     9.17 | acoR, Altekz, niko, valde, Zyphon |
|           29 |     1071 | 2024-08-10 | Into the Breach  | W   | 0.985      | -            | -                | -                | -         |    10.08 | acoR, Altekz, niko, valde, Zyphon |
|           28 |     1094 | 2024-08-09 | Revenant         | L   | 0.979      | -            | -                | -                | -         |   -18.80 | acoR, Altekz, niko, valde, Zyphon |
|           27 |     1101 | 2024-08-09 | Permitta         | W   | 0.978      | 0.333        | -                | 0.936 (0.305)    | -         |    11.71 | acoR, Altekz, niko, valde, Zyphon |
|           26 |     1116 | 2024-08-08 | Johnny Speeds    | L   | 0.973      | -            | -                | -                | -         |    -8.50 | acoR, Altekz, niko, valde, Zyphon |
|           25 |     1159 | 2024-08-07 | Metizport        | L   | 0.966      | -            | -                | -                | -         |   -19.39 | acoR, Altekz, niko, valde, Zyphon |
|           24 |     1180 | 2024-08-07 | Enterprise       | W   | 0.964      | -            | -                | -                | -         |    10.45 | acoR, Altekz, niko, valde, Zyphon |
|           23 |     1203 | 2024-08-06 | Betera           | W   | 0.960      | -            | -                | -                | -         |     3.40 | acoR, Altekz, niko, valde, Zyphon |
|           22 |     1221 | 2024-08-06 | ECSTATIC         | W   | 0.958      | -            | -                | -                | -         |     5.59 | acoR, Altekz, niko, valde, Zyphon |
|           21 |     1235 | 2024-08-05 | Sashi            | W   | 0.952      | -            | -                | -                | -         |    19.45 | acoR, Altekz, niko, valde, Zyphon |
|           20 |     1237 | 2024-08-05 | 777              | W   | 0.952      | -            | -                | -                | -         |     3.82 | acoR, Altekz, niko, valde, Zyphon |
|           19 |     1260 | 2024-08-04 | 1WIN             | L   | 0.947      | -            | -                | -                | -         |   -15.97 | acoR, Altekz, niko, valde, Zyphon |
|           18 |     1267 | 2024-08-04 | TALON            | W   | 0.946      | -            | -                | -                | -         |     2.35 | acoR, Altekz, niko, valde, Zyphon |
|           17 |     1323 | 2024-08-02 | PARIVISION       | L   | 0.934      | -            | -                | -                | -         |   -10.78 | acoR, Altekz, niko, valde, Zyphon |
|           16 |     1456 | 2024-07-30 | 9 Pandas         | W   | 0.914      | 0.500        | -                | 0.705 (0.322)    | -         |    17.10 | acoR, Altekz, niko, valde, Zyphon |
|           15 |     1512 | 2024-07-29 | GUN5             | L   | 0.905      | -            | -                | -                | -         |   -18.12 | acoR, Altekz, niko, valde, Zyphon |
|           14 |     1540 | 2024-07-28 | 1WIN             | L   | 0.899      | -            | -                | -                | -         |   -17.09 | acoR, Altekz, niko, valde, Zyphon |
|           13 |     1712 | 2024-07-22 | CPH Wolves       | L   | 0.861      | -            | -                | -                | -         |   -20.28 | acoR, Altekz, niko, valde, Zyphon |
|           12 |     1756 | 2024-07-21 | Preasy           | W   | 0.852      | -            | -                | -                | -         |     4.22 | acoR, Altekz, niko, valde, Zyphon |
|           11 |     1860 | 2024-07-18 | Nexus            | L   | 0.834      | -            | -                | -                | -         |   -22.53 | acoR, Altekz, niko, valde, Zyphon |
|           10 |     1884 | 2024-07-18 | LEON             | W   | 0.832      | -            | -                | -                | -         |     2.29 | acoR, Altekz, niko, valde, Zyphon |
|            9 |     1927 | 2024-07-17 | GUN5             | W   | 0.828      | 0.500        | 0.092 (0.038)    | 0.972 (0.402)    | -         |     9.72 | acoR, Altekz, niko, valde, Zyphon |
|            8 |     1954 | 2024-07-17 | Into the Breach  | L   | 0.825      | -            | -                | -                | -         |   -19.98 | acoR, Altekz, niko, valde, Zyphon |
|            7 |     2001 | 2024-07-16 | 500              | W   | 0.819      | -            | -                | -                | -         |     1.13 | acoR, Altekz, niko, valde, Zyphon |
|            6 |     2034 | 2024-07-15 | 3DMAX            | W   | 0.814      | 0.500        | 0.512 (0.208)    | 0.913 (0.372)    | -         |    23.50 | acoR, Altekz, niko, valde, Zyphon |
|            5 |     2080 | 2024-07-13 | Sashi            | W   | 0.799      | 0.358        | 0.150 (0.043)    | -                | -         |    15.33 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     2092 | 2024-07-12 | Johnny Speeds    | W   | 0.792      | -            | -                | -                | -         |    16.37 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     2152 | 2024-07-09 | Passion UA       | W   | 0.772      | 0.358        | 0.164 (0.045)    | -                | -         |    13.01 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     2171 | 2024-07-08 | FLuffy Gangsters | L   | 0.766      | -            | -                | -                | -         |   -21.55 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     2175 | 2024-07-08 | Passion UA       | W   | 0.765      | 0.358        | 0.164 (0.045)    | -                | -         |    12.73 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,278.87)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-12 |      0.999 | $5,000.00      | $4,994.48       |
| 2024-07-13 |      0.799 | $12,864.00     | $10,284.39      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
