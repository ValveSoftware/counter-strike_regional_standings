### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1179.7<br />
<br />
Final Rank Value (1179.7) = Starting Rank Value (1245.3) + Head To Head Adjustments (-65.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.595[<sup>1</sup>](#table2)
- Bounty Collected: 0.488[<sup>2</sup>](#table1)
- Opponent Network: 0.323[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.394<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1245.3
- 400 + ( ( 0.394 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1245.3


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
|           75 |       95 | 2024-07-15 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -22.77 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           74 |      222 | 2024-07-08 | Latvia            | L   | 1.000      | -            | -                | -                | -         |   -26.75 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           73 |      303 | 2024-06-17 | 5W                | L   | 0.999      | -            | -                | -                | -         |   -22.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |      317 | 2024-06-16 | B8                | L   | 0.994      | -            | -                | -                | -         |   -18.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |      324 | 2024-06-16 | Permitta          | W   | 0.993      | 0.435        | -                | 0.794 (0.343)    | 0 (0.000) |     5.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |      329 | 2024-06-16 | Enterprise        | W   | 0.992      | 0.450        | -                | 0.635 (0.284)    | 0 (0.000) |     5.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |      344 | 2024-06-15 | GUN5              | W   | 0.988      | 0.435        | 0.110 (0.047)    | -                | 0 (0.000) |     7.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |      362 | 2024-06-15 | BLEED             | W   | 0.986      | -            | -                | -                | 0 (0.000) |    15.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           67 |      395 | 2024-06-14 | Sashi             | W   | 0.980      | -            | -                | -                | 0 (0.000) |    15.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |      408 | 2024-06-14 | Passion UA        | W   | 0.978      | 0.435        | 0.087 (0.037)    | 0.847 (0.360)    | 0 (0.000) |     9.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |      421 | 2024-06-13 | 9INE              | W   | 0.974      | -            | -                | -                | 0 (0.000) |     3.76 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |      439 | 2024-06-13 | VP.Prodigy        | W   | 0.972      | -            | -                | -                | -         |     5.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |      470 | 2024-06-11 | SINNERS           | W   | 0.961      | -            | -                | -                | -         |     8.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |      481 | 2024-06-11 | BUHAWI            | W   | 0.960      | -            | -                | -                | -         |     0.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      497 | 2024-06-10 | EYEBALLERS        | W   | 0.954      | 0.450        | -                | 0.619 (0.266)    | -         |     5.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      504 | 2024-06-10 | SAW               | W   | 0.953      | -            | -                | -                | -         |    17.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      511 | 2024-06-10 | PARIVISION        | W   | 0.952      | -            | -                | -                | -         |     9.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |      515 | 2024-06-10 | 9 Pandas          | W   | 0.952      | -            | -                | -                | -         |    13.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |      538 | 2024-06-09 | 9INE              | L   | 0.947      | -            | -                | -                | -         |   -25.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |      553 | 2024-06-09 | Monte             | L   | 0.946      | -            | -                | -                | -         |   -21.54 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      561 | 2024-06-09 | SINNERS           | L   | 0.946      | -            | -                | -                | -         |   -21.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |      566 | 2024-06-09 | Aurora            | W   | 0.945      | 0.143        | 0.514 (0.069)    | -                | -         |    23.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |      575 | 2024-06-09 | RUSH B            | W   | 0.945      | -            | -                | -                | -         |     4.55 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |      610 | 2024-06-08 | Illuminar         | L   | 0.940      | -            | -                | -                | -         |   -25.28 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |      669 | 2024-06-07 | Gaimin Gladiators | W   | 0.933      | 0.450        | -                | 0.488 (0.205)    | -         |     9.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |      705 | 2024-06-06 | Nexus             | W   | 0.928      | -            | -                | -                | -         |     2.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      718 | 2024-06-06 | Sangal            | L   | 0.928      | -            | -                | -                | -         |   -15.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      787 | 2024-06-05 | KOI               | L   | 0.921      | -            | -                | -                | -         |   -18.06 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      833 | 2024-06-04 | Aurora            | W   | 0.914      | 0.500        | 0.514 (0.235)    | 0.813 (0.372)    | -         |    24.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      916 | 2024-06-01 | VP.Prodigy        | L   | 0.894      | -            | -                | -                | -         |   -22.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |      966 | 2024-05-30 | Sampi             | W   | 0.881      | 0.435        | -                | 0.975 (0.373)    | -         |     4.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1093 | 2024-05-25 | MOUZ NXT          | L   | 0.845      | -            | -                | -                | -         |   -18.74 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1118 | 2024-05-23 | Zero Tenacity     | W   | 0.833      | 0.435        | 0.154 (0.056)    | 1.000 (0.362)    | -         |     9.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1330 | 2024-05-17 | B8                | L   | 0.793      | -            | -                | -                | -         |   -14.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1416 | 2024-05-15 | Zero Tenacity     | L   | 0.779      | -            | -                | -                | -         |   -18.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1613 | 2024-05-08 | G2                | L   | 0.733      | -            | -                | -                | -         |    -0.58 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1754 | 2024-05-01 | Sashi             | L   | 0.686      | -            | -                | -                | -         |   -12.50 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1780 | 2024-04-30 | BetBoom           | W   | 0.679      | 0.384        | 0.403 (0.105)    | -                | -         |    17.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1787 | 2024-04-29 | PARIVISION        | W   | 0.674      | -            | -                | -                | -         |     4.39 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1835 | 2024-04-27 | Astralis          | L   | 0.660      | -            | -                | -                | -         |    -0.56 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1907 | 2024-04-24 | fnatic            | W   | 0.640      | 0.889        | 0.300 (0.171)    | 0.632 (0.360)    | 1 (0.640) |    17.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     1932 | 2024-04-23 | SAW               | W   | 0.633      | 0.889        | 0.147 (0.083)    | 0.544 (0.306)    | 1 (0.633) |    10.62 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     1942 | 2024-04-22 | ex-Guild Eagles   | W   | 0.627      | -            | -                | -                | -         |     3.16 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2127 | 2024-04-17 | BLEED             | W   | 0.593      | -            | -                | -                | -         |     6.62 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2195 | 2024-04-14 | BetBoom           | L   | 0.573      | -            | -                | -                | -         |    -2.30 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2210 | 2024-04-13 | ex-Preasy         | W   | 0.566      | -            | -                | -                | -         |     2.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2252 | 2024-04-11 | Passion UA        | L   | 0.553      | -            | -                | -                | -         |   -13.80 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2286 | 2024-04-10 | SINNERS           | L   | 0.548      | -            | -                | -                | -         |   -10.85 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2335 | 2024-04-09 | SAW               | W   | 0.541      | 0.500        | 0.147 (0.040)    | -                | -         |     9.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2412 | 2024-04-07 | Young Ninjas      | W   | 0.526      | -            | -                | -                | -         |     1.59 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2485 | 2024-04-04 | Space             | W   | 0.506      | -            | -                | -                | -         |     1.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2514 | 2024-04-03 | GUN5              | W   | 0.501      | -            | -                | -                | -         |     3.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     2565 | 2024-04-02 | Permitta          | W   | 0.493      | -            | -                | -                | -         |     3.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     2620 | 2024-03-28 | Apeks             | W   | 0.460      | -            | -                | -                | -         |     3.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     2743 | 2024-03-21 | fnatic            | L   | 0.413      | -            | -                | -                | -         |    -1.56 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           20 |     2785 | 2024-03-19 | GUN5              | W   | 0.400      | -            | -                | -                | -         |     0.12 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           19 |     2856 | 2024-03-15 | B8                | W   | 0.374      | 0.500        | 0.246 (0.046)    | -                | -         |     4.97 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           18 |     2924 | 2024-03-13 | PARIVISION        | L   | 0.360      | -            | -                | -                | -         |    -9.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           17 |     3137 | 2024-03-05 | FORZE             | L   | 0.307      | -            | -                | -                | -         |    -7.69 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           16 |     3159 | 2024-03-04 | fnatic            | L   | 0.300      | -            | -                | -                | -         |    -1.22 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           15 |     3197 | 2024-03-02 | Monte             | W   | 0.288      | -            | -                | -                | -         |     3.29 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           14 |     3234 | 2024-02-29 | Gaimin Gladiators | W   | 0.275      | -            | -                | -                | -         |     2.85 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           13 |     3531 | 2024-02-16 | 9 Pandas          | L   | 0.187      | -            | -                | -                | -         |    -3.95 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     3556 | 2024-02-15 | Into the Breach   | W   | 0.180      | -            | -                | -                | 1 (0.180) |     0.23 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     3593 | 2024-02-14 | KOI               | L   | 0.174      | -            | -                | -                | -         |    -3.07 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3599 | 2024-02-14 | Falcons           | L   | 0.173      | -            | -                | -                | -         |    -0.75 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3648 | 2024-02-11 | Apeks             | L   | 0.154      | -            | -                | -                | -         |    -3.67 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     3671 | 2024-02-09 | fnatic            | W   | 0.140      | -            | -                | -                | -         |     3.94 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     3674 | 2024-02-09 | Endpoint          | W   | 0.140      | -            | -                | -                | -         |     0.65 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     3677 | 2024-02-09 | ex-Sprout         | L   | 0.139      | -            | -                | -                | -         |    -4.30 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     3864 | 2024-01-30 | Permitta          | L   | 0.074      | -            | -                | -                | -         |    -1.92 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     4018 | 2024-01-21 | ex-sYnck          | W   | 0.015      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     4026 | 2024-01-21 | ex-Preasy         | L   | 0.013      | -            | -                | -                | -         |    -0.37 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     4051 | 2024-01-20 | 9 Pandas          | L   | 0.008      | -            | -                | -                | -         |    -0.17 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     4071 | 2024-01-20 | Zero Tenacity     | W   | 0.006      | -            | -                | -                | -         |     0.06 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($51,272.07)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.999 | $10,000.00     | $9,994.89       |
| 2024-06-16 |      0.994 | $10,000.00     | $9,937.82       |
| 2024-06-09 |      0.948 | $7,000.00      | $6,633.24       |
| 2024-06-02 |      0.900 | $2,000.00      | $1,800.03       |
| 2024-05-26 |      0.854 | $2,000.00      | $1,707.24       |
| 2024-05-12 |      0.760 | $23,500.00     | $17,865.76      |
| 2024-05-02 |      0.694 | $1,500.00      | $1,040.77       |
| 2024-04-14 |      0.573 | $4,000.00      | $2,292.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
