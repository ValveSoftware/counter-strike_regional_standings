### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1240.8<br />
<br />
Final Rank Value (1240.8) = Starting Rank Value (1252.9) + Head To Head Adjustments (-12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.578[<sup>1</sup>](#table2)
- Bounty Collected: 0.514[<sup>2</sup>](#table1)
- Opponent Network: 0.375[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.420<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1252.9
- 400 + ( ( 0.420 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1252.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |        3 | 2024-06-17 | 5W                | L   | 1.000      | -            | -                | -                | -         |   -23.46 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           75 |       17 | 2024-06-16 | B8                | L   | 1.000      | -            | -                | -                | -         |   -17.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           74 |       24 | 2024-06-16 | Permitta          | W   | 1.000      | 0.435        | -                | 0.885 (0.385)    | 0 (0.000) |     5.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           73 |       29 | 2024-06-16 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |       44 | 2024-06-15 | GUN5              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.74 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |       62 | 2024-06-15 | BLEED             | W   | 1.000      | 0.143        | 0.347 (0.050)    | -                | 0 (0.000) |    17.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |       95 | 2024-06-14 | Sashi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |      108 | 2024-06-14 | Passion UA        | W   | 1.000      | 0.435        | -                | 0.803 (0.349)    | 0 (0.000) |     9.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |      121 | 2024-06-13 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.09 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           67 |      139 | 2024-06-13 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | -         |     5.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |      170 | 2024-06-11 | SINNERS           | W   | 1.000      | -            | -                | -                | -         |     8.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |      181 | 2024-06-11 | BUHAWI            | W   | 1.000      | -            | -                | -                | -         |     3.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |      197 | 2024-06-10 | EYEBALLERS        | W   | 1.000      | 0.450        | -                | 0.653 (0.294)    | -         |     5.56 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |      204 | 2024-06-10 | SAW               | W   | 1.000      | -            | -                | -                | -         |    19.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |      211 | 2024-06-10 | PARIVISION        | W   | 1.000      | -            | -                | -                | -         |    11.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      215 | 2024-06-10 | 9 Pandas          | W   | 1.000      | -            | -                | -                | -         |    15.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      238 | 2024-06-09 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -27.68 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      253 | 2024-06-09 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -15.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |      261 | 2024-06-09 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -22.64 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |      266 | 2024-06-09 | Aurora            | W   | 1.000      | 0.143        | 0.526 (0.075)    | -                | -         |    23.65 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |      275 | 2024-06-09 | RUSH B            | W   | 1.000      | -            | -                | -                | -         |     4.72 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      310 | 2024-06-08 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -27.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |      369 | 2024-06-07 | Gaimin Gladiators | W   | 1.000      | -            | -                | -                | -         |    12.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |      405 | 2024-06-06 | Nexus             | W   | 1.000      | -            | -                | -                | -         |     2.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |      418 | 2024-06-06 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -16.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |      487 | 2024-06-05 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -19.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |      533 | 2024-06-04 | Aurora            | W   | 1.000      | 0.500        | 0.526 (0.263)    | 0.874 (0.437)    | -         |    25.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      618 | 2024-06-01 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -25.57 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      668 | 2024-05-30 | Sampi             | W   | 1.000      | 0.435        | -                | 0.837 (0.364)    | -         |     5.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      795 | 2024-05-25 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -22.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      820 | 2024-05-23 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.153 (0.067)    | 1.000 (0.435)    | -         |    10.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1032 | 2024-05-17 | B8                | L   | 0.988      | -            | -                | -                | -         |   -17.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1118 | 2024-05-15 | Zero Tenacity     | L   | 0.975      | -            | -                | -                | -         |   -22.76 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1315 | 2024-05-08 | G2                | L   | 0.929      | -            | -                | -                | -         |    -1.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1456 | 2024-05-01 | Sashi             | L   | 0.881      | -            | -                | -                | -         |   -15.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1482 | 2024-04-30 | BetBoom           | W   | 0.874      | 0.384        | 0.414 (0.139)    | -                | -         |    22.25 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1489 | 2024-04-29 | PARIVISION        | W   | 0.869      | -            | -                | -                | -         |     5.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1537 | 2024-04-27 | Astralis          | L   | 0.855      | -            | -                | -                | -         |    -0.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1609 | 2024-04-24 | fnatic            | W   | 0.835      | 0.889        | 0.290 (0.215)    | 0.666 (0.495)    | 1 (0.835) |    20.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1634 | 2024-04-23 | SAW               | W   | 0.828      | 0.889        | 0.140 (0.103)    | 0.571 (0.420)    | 1 (0.828) |    15.76 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1644 | 2024-04-22 | ex-Guild Eagles   | W   | 0.823      | -            | -                | -                | -         |     5.06 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1829 | 2024-04-17 | BLEED             | W   | 0.788      | 0.384        | 0.347 (0.105)    | 0.946 (0.286)    | -         |    17.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     1897 | 2024-04-14 | BetBoom           | L   | 0.768      | -            | -                | -                | -         |    -3.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     1912 | 2024-04-13 | ex-Preasy         | W   | 0.761      | -            | -                | -                | -         |     5.62 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     1954 | 2024-04-11 | Passion UA        | L   | 0.748      | -            | -                | -                | -         |   -18.59 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     1988 | 2024-04-10 | SINNERS           | L   | 0.743      | -            | -                | -                | -         |   -14.59 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2037 | 2024-04-09 | SAW               | W   | 0.737      | 0.500        | 0.140 (0.052)    | -                | -         |    15.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2114 | 2024-04-07 | Young Ninjas      | W   | 0.721      | -            | -                | -                | -         |     2.68 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2187 | 2024-04-04 | Space             | W   | 0.702      | -            | -                | -                | -         |     2.46 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2216 | 2024-04-03 | GUN5              | W   | 0.696      | -            | -                | -                | -         |     4.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2267 | 2024-04-02 | Permitta          | W   | 0.688      | -            | -                | -                | -         |     4.80 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2323 | 2024-03-28 | Apeks             | W   | 0.655      | -            | -                | -                | -         |     7.67 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2446 | 2024-03-21 | fnatic            | L   | 0.609      | -            | -                | -                | -         |    -2.88 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           23 |     2488 | 2024-03-19 | GUN5              | W   | 0.595      | -            | -                | -                | -         |     0.19 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           22 |     2559 | 2024-03-15 | B8                | W   | 0.569      | 0.500        | 0.229 (0.065)    | 1.000 (0.285)    | -         |     8.09 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           21 |     2627 | 2024-03-13 | PARIVISION        | L   | 0.556      | -            | -                | -                | -         |   -13.30 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           20 |     2840 | 2024-03-05 | FORZE             | L   | 0.502      | -            | -                | -                | -         |   -11.84 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           19 |     2862 | 2024-03-04 | fnatic            | L   | 0.495      | -            | -                | -                | -         |    -2.67 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           18 |     2900 | 2024-03-02 | Monte             | W   | 0.483      | -            | -                | -                | -         |     9.63 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           17 |     2937 | 2024-02-29 | Gaimin Gladiators | W   | 0.470      | -            | -                | -                | -         |     7.09 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           16 |     3234 | 2024-02-16 | 9 Pandas          | L   | 0.382      | -            | -                | -                | -         |    -7.07 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           15 |     3259 | 2024-02-15 | Into the Breach   | W   | 0.376      | -            | -                | -                | 1 (0.376) |     0.68 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           14 |     3296 | 2024-02-14 | KOI               | L   | 0.369      | -            | -                | -                | -         |    -6.44 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           13 |     3302 | 2024-02-14 | Falcons           | L   | 0.368      | -            | -                | -                | -         |    -1.12 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     3351 | 2024-02-11 | Apeks             | L   | 0.349      | -            | -                | -                | -         |    -7.13 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     3374 | 2024-02-09 | fnatic            | W   | 0.336      | -            | -                | -                | -         |     9.23 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3377 | 2024-02-09 | Endpoint          | W   | 0.335      | -            | -                | -                | -         |     1.62 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3380 | 2024-02-09 | ex-Sprout         | L   | 0.335      | -            | -                | -                | -         |   -10.28 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     3567 | 2024-01-30 | Permitta          | L   | 0.269      | -            | -                | -                | -         |    -7.07 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     3721 | 2024-01-21 | ex-sYnck          | W   | 0.210      | -            | -                | -                | -         |     0.12 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     3729 | 2024-01-21 | ex-Preasy         | L   | 0.208      | -            | -                | -                | -         |    -5.75 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     3754 | 2024-01-20 | 9 Pandas          | L   | 0.203      | -            | -                | -                | -         |    -4.10 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     3774 | 2024-01-20 | Zero Tenacity     | W   | 0.201      | -            | -                | -                | -         |     1.99 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     3828 | 2024-01-19 | OG                | L   | 0.195      | -            | -                | -                | -         |    -3.60 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     3873 | 2024-01-18 | Cloud9            | L   | 0.189      | -            | -                | -                | -         |    -2.42 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     3886 | 2024-01-18 | JANO              | W   | 0.189      | -            | -                | -                | -         |     0.09 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,862.07)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      0.956 | $23,500.00     | $22,454.92      |
| 2024-05-02 |      0.889 | $1,500.00      | $1,333.69       |
| 2024-04-14 |      0.768 | $4,000.00      | $3,073.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
