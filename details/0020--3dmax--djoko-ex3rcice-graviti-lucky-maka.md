### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [20](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1423.7<br />
<br />
Final Rank Value (1423.7) = Starting Rank Value (1700.4) + Head To Head Adjustments (-276.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.770[<sup>1</sup>](#table2)
- Bounty Collected: 0.567[<sup>2</sup>](#table1)
- Opponent Network: 0.359[<sup>2</sup>](#table1)
- LAN Wins: 0.824[<sup>2</sup>](#table1)

The average of these factors is 0.630<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1700.4
- 400 + ( ( 0.630 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1700.4


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
|           78 |      122 | 2024-07-28 | The MongolZ       | W   | 1.000      | 0.650        | 1.000 (0.650)    | 0.719 (0.467)    | 1 (1.000) |    26.62 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           77 |      130 | 2024-07-28 | Aurora            | W   | 1.000      | 0.650        | 0.433 (0.282)    | 0.800 (0.520)    | 1 (1.000) |    18.67 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           76 |      148 | 2024-07-27 | ENCE              | W   | 1.000      | 0.650        | 0.175 (0.114)    | -                | 1 (1.000) |    15.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           75 |      175 | 2024-07-26 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -5.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           74 |      217 | 2024-07-25 | Revenant          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           73 |      226 | 2024-07-25 | DMS               | W   | 1.000      | 0.650        | -                | 0.447 (0.291)    | 1 (1.000) |     2.19 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |      255 | 2024-07-24 | AMKAL             | W   | 1.000      | 0.650        | 0.132 (0.086)    | 0.484 (0.315)    | 1 (1.000) |     9.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |      512 | 2024-07-17 | 9 Pandas          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |      625 | 2024-07-15 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -27.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |      752 | 2024-07-08 | Latvia            | L   | 1.000      | -            | -                | -                | -         |   -29.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |      833 | 2024-06-17 | 5W                | L   | 0.905      | -            | -                | -                | -         |   -25.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           67 |      847 | 2024-06-16 | B8                | L   | 0.899      | -            | -                | -                | -         |   -23.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |      854 | 2024-06-16 | Permitta          | W   | 0.898      | 0.435        | -                | 0.799 (0.312)    | -         |     1.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |      859 | 2024-06-16 | Enterprise        | W   | 0.897      | -            | -                | -                | -         |     1.56 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |      874 | 2024-06-15 | GUN5              | W   | 0.893      | -            | -                | -                | -         |     2.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |      892 | 2024-06-15 | BLEED             | W   | 0.891      | -            | -                | -                | -         |    10.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |      925 | 2024-06-14 | Sashi             | W   | 0.885      | -            | -                | -                | -         |     6.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      938 | 2024-06-14 | Passion UA        | W   | 0.884      | 0.435        | 0.172 (0.066)    | 1.000 (0.384)    | -         |     3.10 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      951 | 2024-06-13 | 9INE              | W   | 0.880      | -            | -                | -                | -         |     1.65 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      969 | 2024-06-13 | VP.Prodigy        | W   | 0.878      | -            | -                | -                | -         |     1.39 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |     1000 | 2024-06-11 | SINNERS           | W   | 0.867      | -            | -                | -                | -         |     2.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |     1011 | 2024-06-11 | BUHAWI            | W   | 0.865      | -            | -                | -                | -         |     0.09 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |     1027 | 2024-06-10 | EYEBALLERS        | W   | 0.859      | -            | -                | -                | -         |     1.37 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |     1034 | 2024-06-10 | SAW               | W   | 0.858      | -            | -                | -                | -         |     5.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |     1041 | 2024-06-10 | PARIVISION        | W   | 0.858      | -            | -                | -                | -         |     3.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |     1045 | 2024-06-10 | 9 Pandas          | W   | 0.857      | -            | -                | -                | -         |     3.38 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |     1068 | 2024-06-09 | 9INE              | L   | 0.853      | -            | -                | -                | -         |   -25.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |     1083 | 2024-06-09 | Monte             | L   | 0.852      | -            | -                | -                | -         |   -24.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |     1091 | 2024-06-09 | SINNERS           | L   | 0.851      | -            | -                | -                | -         |   -25.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |     1096 | 2024-06-09 | Aurora            | W   | 0.851      | 0.143        | 0.433 (0.053)    | -                | -         |    13.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |     1105 | 2024-06-09 | RUSH B            | W   | 0.851      | -            | -                | -                | -         |     0.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |     1140 | 2024-06-08 | Illuminar         | L   | 0.846      | -            | -                | -                | -         |   -25.84 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |     1199 | 2024-06-07 | Gaimin Gladiators | W   | 0.839      | -            | -                | -                | -         |     1.58 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1235 | 2024-06-06 | Nexus             | W   | 0.834      | -            | -                | -                | -         |     0.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1248 | 2024-06-06 | Sangal            | L   | 0.833      | -            | -                | -                | -         |   -23.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1317 | 2024-06-05 | KOI               | L   | 0.826      | -            | -                | -                | -         |   -24.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1363 | 2024-06-04 | Aurora            | W   | 0.820      | 0.500        | 0.433 (0.177)    | 0.800 (0.328)    | -         |    12.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1446 | 2024-06-01 | VP.Prodigy        | L   | 0.799      | -            | -                | -                | -         |   -24.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1496 | 2024-05-30 | Sampi             | W   | 0.787      | 0.435        | -                | 1.000 (0.342)    | -         |     0.65 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1623 | 2024-05-25 | MOUZ NXT          | L   | 0.750      | -            | -                | -                | -         |   -22.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1648 | 2024-05-23 | Zero Tenacity     | W   | 0.739      | 0.435        | -                | 1.000 (0.321)    | -         |     1.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1860 | 2024-05-17 | B8                | L   | 0.698      | -            | -                | -                | -         |   -20.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1946 | 2024-05-15 | Zero Tenacity     | L   | 0.685      | -            | -                | -                | -         |   -20.58 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     2143 | 2024-05-08 | G2                | L   | 0.639      | -            | -                | -                | -         |    -2.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     2284 | 2024-05-01 | Sashi             | L   | 0.591      | -            | -                | -                | -         |   -17.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     2310 | 2024-04-30 | BetBoom           | W   | 0.584      | 0.384        | 0.259 (0.058)    | -                | -         |     4.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2317 | 2024-04-29 | PARIVISION        | W   | 0.580      | -            | -                | -                | -         |     0.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2365 | 2024-04-27 | Astralis          | L   | 0.565      | -            | -                | -                | -         |    -6.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2437 | 2024-04-24 | fnatic            | W   | 0.545      | 0.889        | 0.374 (0.181)    | 0.633 (0.307)    | 1 (0.545) |     6.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2462 | 2024-04-23 | SAW               | W   | 0.538      | 0.889        | 0.108 (0.052)    | -                | 1 (0.538) |     1.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2472 | 2024-04-22 | ex-Guild Eagles   | W   | 0.533      | -            | -                | -                | -         |     0.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2657 | 2024-04-17 | BLEED             | W   | 0.498      | -            | -                | -                | -         |     0.51 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2725 | 2024-04-14 | BetBoom           | L   | 0.479      | -            | -                | -                | -         |   -11.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2740 | 2024-04-13 | ex-Preasy         | W   | 0.472      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2782 | 2024-04-11 | Passion UA        | L   | 0.458      | -            | -                | -                | -         |   -13.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     2816 | 2024-04-10 | SINNERS           | L   | 0.453      | -            | -                | -                | -         |   -13.77 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     2865 | 2024-04-09 | SAW               | W   | 0.447      | -            | -                | -                | -         |     0.94 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     2942 | 2024-04-07 | Young Ninjas      | W   | 0.432      | -            | -                | -                | -         |     0.09 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     3015 | 2024-04-04 | Space             | W   | 0.412      | -            | -                | -                | -         |     0.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     3044 | 2024-04-03 | GUN5              | W   | 0.406      | -            | -                | -                | -         |     0.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     3095 | 2024-04-02 | Permitta          | W   | 0.398      | -            | -                | -                | -         |     0.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     3150 | 2024-03-28 | Apeks             | W   | 0.365      | -            | -                | -                | -         |     0.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           16 |     3273 | 2024-03-21 | fnatic            | L   | 0.319      | -            | -                | -                | -         |    -6.40 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           15 |     3315 | 2024-03-19 | GUN5              | W   | 0.305      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           14 |     3386 | 2024-03-15 | B8                | W   | 0.279      | -            | -                | -                | -         |     0.35 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           13 |     3454 | 2024-03-13 | PARIVISION        | L   | 0.266      | -            | -                | -                | -         |    -8.07 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     3667 | 2024-03-05 | FORZE             | L   | 0.213      | -            | -                | -                | -         |    -6.61 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     3689 | 2024-03-04 | fnatic            | L   | 0.205      | -            | -                | -                | -         |    -4.32 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3727 | 2024-03-02 | Monte             | W   | 0.193      | -            | -                | -                | -         |     0.14 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3764 | 2024-02-29 | Gaimin Gladiators | W   | 0.180      | -            | -                | -                | -         |     0.11 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     4061 | 2024-02-16 | 9 Pandas          | L   | 0.092      | -            | -                | -                | -         |    -2.84 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     4086 | 2024-02-15 | Into the Breach   | W   | 0.086      | -            | -                | -                | 1 (0.086) |     0.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     4123 | 2024-02-14 | KOI               | L   | 0.079      | -            | -                | -                | -         |    -2.41 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     4129 | 2024-02-14 | Falcons           | L   | 0.078      | -            | -                | -                | -         |    -1.98 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     4178 | 2024-02-11 | Apeks             | L   | 0.059      | -            | -                | -                | -         |    -1.84 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     4201 | 2024-02-09 | fnatic            | W   | 0.046      | -            | -                | -                | -         |     0.50 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     4204 | 2024-02-09 | Endpoint          | W   | 0.046      | -            | -                | -                | -         |     0.02 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     4207 | 2024-02-09 | ex-Sprout         | L   | 0.045      | -            | -                | -                | -         |    -1.41 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($165,601.30)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $120,000.00    | $120,000.00     |
| 2024-06-17 |      0.905 | $10,000.00     | $9,049.76       |
| 2024-06-16 |      0.899 | $10,000.00     | $8,992.69       |
| 2024-06-09 |      0.853 | $7,000.00      | $5,971.65       |
| 2024-06-02 |      0.806 | $2,000.00      | $1,611.00       |
| 2024-05-26 |      0.759 | $2,000.00      | $1,518.21       |
| 2024-05-12 |      0.666 | $23,500.00     | $15,644.71      |
| 2024-05-02 |      0.599 | $1,500.00      | $899.00         |
| 2024-04-14 |      0.479 | $4,000.00      | $1,914.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
