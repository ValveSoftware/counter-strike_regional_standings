### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [18](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [14]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  1341.9<br />
<br />
Final Rank Value (1341.9) = Starting Rank Value (1590.5) + Head To Head Adjustments (-248.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.734[<sup>1</sup>](#table2)
- Bounty Collected: 0.557[<sup>2</sup>](#table1)
- Opponent Network: 0.397[<sup>2</sup>](#table1)
- LAN Wins: 0.800[<sup>2</sup>](#table1)

The average of these factors is 0.622<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1590.5
- 400 + ( ( 0.622 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1590.5


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
|           90 |      110 | 2024-09-29 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -13.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           89 |      137 | 2024-09-28 | B8                | L   | 1.000      | -            | -                | -                | -         |   -24.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           88 |      151 | 2024-09-28 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -22.77 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           87 |      182 | 2024-09-27 | 9z                | W   | 1.000      | -            | -                | -                | -         |    11.25 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           86 |      194 | 2024-09-27 | Nemiga            | W   | 1.000      | -            | -                | -                | -         |     5.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           85 |      202 | 2024-09-27 | CYBERSHOKE        | W   | 1.000      | 0.435        | -                | 0.798 (0.347)    | -         |     3.39 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           84 |      232 | 2024-09-26 | Aurora            | W   | 1.000      | 0.384        | 0.191 (0.073)    | -                | -         |     7.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           83 |      253 | 2024-09-26 | Monte             | W   | 1.000      | 0.384        | -                | 0.821 (0.316)    | -         |     5.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           82 |      296 | 2024-09-25 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.125 (0.054)    | 1.000 (0.435)    | -         |     4.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           81 |      349 | 2024-09-24 | Zero Tenacity     | W   | 1.000      | 0.384        | 0.125 (0.048)    | 1.000 (0.384)    | -         |     5.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           80 |      670 | 2024-09-13 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -26.05 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           79 |      806 | 2024-09-08 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -8.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           78 |      835 | 2024-09-07 | Wildcard          | W   | 1.000      | 0.889        | 0.080 (0.071)    | 0.578 (0.514)    | 1 (1.000) |     6.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           77 |      853 | 2024-09-06 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -1.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           76 |      870 | 2024-09-06 | 9z                | W   | 1.000      | 0.889        | 0.254 (0.226)    | 0.428 (0.380)    | 1 (1.000) |    12.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           75 |      896 | 2024-09-05 | G2                | L   | 1.000      | -            | -                | -                | -         |    -1.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           74 |      942 | 2024-09-04 | The MongolZ       | W   | 1.000      | 0.889        | 0.676 (0.601)    | 0.528 (0.469)    | 1 (1.000) |    24.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           73 |     1199 | 2024-08-27 | HEROIC            | L   | 0.959      | -            | -                | -                | -         |   -15.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |     1251 | 2024-08-26 | Falcons           | L   | 0.953      | -            | -                | -                | -         |   -11.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |     1270 | 2024-08-26 | fnatic            | W   | 0.952      | -            | -                | -                | -         |     9.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |     1609 | 2024-08-16 | SINNERS           | L   | 0.884      | -            | -                | -                | -         |   -24.04 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |     1684 | 2024-08-13 | Zero Tenacity     | W   | 0.867      | 0.500        | 0.125 (0.054)    | 1.000 (0.433)    | -         |     2.94 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |     1732 | 2024-08-12 | Nemiga            | L   | 0.860      | -            | -                | -                | -         |   -22.12 | Djoko, Ex3rcice, Graviti, Maka, wasiNk |
|           67 |     1815 | 2024-08-09 | PARIVISION        | W   | 0.839      | -            | -                | -                | -         |     2.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |     1839 | 2024-08-08 | HEROIC            | L   | 0.832      | -            | -                | -                | -         |   -13.94 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |     1879 | 2024-08-07 | GUN5              | W   | 0.826      | 0.500        | -                | 1.000 (0.413)    | -         |     1.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |     1894 | 2024-08-07 | 9z                | L   | 0.825      | -            | -                | -                | -         |   -17.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |     1994 | 2024-08-04 | Johnny Speeds     | L   | 0.805      | -            | -                | -                | -         |   -22.06 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |     2019 | 2024-08-03 | fnatic            | W   | 0.800      | -            | -                | -                | -         |     5.99 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |     2061 | 2024-08-02 | BLEED             | W   | 0.792      | -            | -                | -                | -         |     3.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |     2098 | 2024-08-01 | Betera            | W   | 0.786      | -            | -                | -                | -         |     0.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |     2136 | 2024-07-31 | Cloud9            | W   | 0.780      | -            | -                | -                | -         |     1.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |     2259 | 2024-07-28 | The MongolZ       | W   | 0.759      | 0.650        | 0.676 (0.334)    | -                | 1 (0.759) |    17.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |     2267 | 2024-07-28 | Aurora            | W   | 0.758      | 0.650        | 0.191 (0.094)    | -                | 1 (0.758) |     6.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |     2285 | 2024-07-27 | ENCE              | W   | 0.752      | 0.650        | 0.096 (0.047)    | -                | 1 (0.752) |     3.50 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |     2312 | 2024-07-26 | Eternal Fire      | L   | 0.745      | -            | -                | -                | -         |    -2.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |     2354 | 2024-07-25 | Revenant          | W   | 0.738      | -            | -                | -                | 1 (0.738) |     1.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |     2363 | 2024-07-25 | DMS               | W   | 0.737      | 0.650        | -                | 0.587 (0.281)    | 1 (0.737) |     0.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |     2392 | 2024-07-24 | AMKAL             | W   | 0.731      | -            | -                | -                | 1 (0.731) |     2.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |     2649 | 2024-07-17 | 9 Pandas          | W   | 0.687      | -            | -                | -                | -         |     1.94 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |     2762 | 2024-07-15 | TSM               | L   | 0.673      | -            | -                | -                | -         |   -19.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |     2889 | 2024-07-08 | Latvia            | L   | 0.627      | -            | -                | -                | -         |   -19.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |     2970 | 2024-06-17 | 5W                | L   | 0.485      | -            | -                | -                | -         |   -14.77 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |     2984 | 2024-06-16 | B8                | L   | 0.479      | -            | -                | -                | -         |   -13.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |     2991 | 2024-06-16 | Permitta          | W   | 0.478      | -            | -                | -                | -         |     0.59 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     2996 | 2024-06-16 | ex-Enterprise     | W   | 0.478      | -            | -                | -                | -         |     0.46 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     3011 | 2024-06-15 | GUN5              | W   | 0.473      | -            | -                | -                | -         |     0.80 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     3029 | 2024-06-15 | BLEED             | W   | 0.471      | -            | -                | -                | -         |     1.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     3062 | 2024-06-14 | Sashi             | W   | 0.466      | -            | -                | -                | -         |     1.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     3075 | 2024-06-14 | Passion UA        | W   | 0.464      | -            | -                | -                | -         |     1.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     3088 | 2024-06-13 | 9INE              | W   | 0.460      | -            | -                | -                | -         |     0.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     3106 | 2024-06-13 | VP.Prodigy        | W   | 0.458      | -            | -                | -                | -         |     0.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     3137 | 2024-06-11 | SINNERS           | W   | 0.447      | -            | -                | -                | -         |     1.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     3148 | 2024-06-11 | BUHAWI            | W   | 0.445      | -            | -                | -                | -         |     0.03 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     3164 | 2024-06-10 | EYEBALLERS        | W   | 0.440      | -            | -                | -                | -         |     0.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     3171 | 2024-06-10 | SAW               | W   | 0.438      | -            | -                | -                | -         |     4.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     3178 | 2024-06-10 | PARIVISION        | W   | 0.438      | -            | -                | -                | -         |     0.99 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     3182 | 2024-06-10 | 9 Pandas          | W   | 0.437      | -            | -                | -                | -         |     0.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     3205 | 2024-06-09 | 9INE              | L   | 0.433      | -            | -                | -                | -         |   -12.88 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     3220 | 2024-06-09 | Monte             | L   | 0.432      | -            | -                | -                | -         |   -13.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     3228 | 2024-06-09 | SINNERS           | L   | 0.431      | -            | -                | -                | -         |   -12.03 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     3233 | 2024-06-09 | Aurora            | W   | 0.431      | -            | -                | -                | -         |     2.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     3242 | 2024-06-09 | RUSH B            | W   | 0.431      | -            | -                | -                | -         |     0.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     3277 | 2024-06-08 | Illuminar         | L   | 0.426      | -            | -                | -                | -         |   -13.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     3336 | 2024-06-07 | Gaimin Gladiators | W   | 0.419      | -            | -                | -                | -         |     0.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     3372 | 2024-06-06 | Nexus             | W   | 0.414      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     3385 | 2024-06-06 | Sangal            | L   | 0.413      | -            | -                | -                | -         |   -10.91 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     3454 | 2024-06-05 | KOI               | L   | 0.406      | -            | -                | -                | -         |   -12.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     3500 | 2024-06-04 | Aurora            | W   | 0.400      | -            | -                | -                | -         |     1.94 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     3583 | 2024-06-01 | VP.Prodigy        | L   | 0.379      | -            | -                | -                | -         |   -11.77 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     3633 | 2024-05-30 | Sampi             | W   | 0.367      | -            | -                | -                | -         |     0.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     3760 | 2024-05-25 | MOUZ NXT          | L   | 0.331      | -            | -                | -                | -         |   -10.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     3785 | 2024-05-23 | Zero Tenacity     | W   | 0.319      | -            | -                | -                | -         |     0.54 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     3997 | 2024-05-17 | B8                | L   | 0.278      | -            | -                | -                | -         |    -8.28 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           16 |     4083 | 2024-05-15 | Zero Tenacity     | L   | 0.265      | -            | -                | -                | -         |    -7.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           15 |     4280 | 2024-05-08 | G2                | L   | 0.219      | -            | -                | -                | -         |    -0.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           14 |     4421 | 2024-05-01 | Sashi             | L   | 0.172      | -            | -                | -                | -         |    -5.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           13 |     4447 | 2024-04-30 | BetBoom           | W   | 0.165      | -            | -                | -                | -         |     0.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           12 |     4454 | 2024-04-29 | PARIVISION        | W   | 0.160      | -            | -                | -                | -         |     0.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           11 |     4502 | 2024-04-27 | Astralis          | L   | 0.146      | -            | -                | -                | -         |    -3.54 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           10 |     4574 | 2024-04-24 | fnatic            | W   | 0.126      | -            | -                | -                | 1 (0.126) |     0.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            9 |     4599 | 2024-04-23 | SAW               | W   | 0.118      | -            | -                | -                | -         |     0.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            8 |     4609 | 2024-04-22 | ex-Guild Eagles   | W   | 0.113      | -            | -                | -                | -         |     0.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            7 |     4794 | 2024-04-17 | BLEED             | W   | 0.078      | -            | -                | -                | -         |     0.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            6 |     4862 | 2024-04-14 | BetBoom           | L   | 0.059      | -            | -                | -                | -         |    -1.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            5 |     4877 | 2024-04-13 | ex-Preasy         | W   | 0.052      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            4 |     4919 | 2024-04-11 | Passion UA        | L   | 0.039      | -            | -                | -                | -         |    -1.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            3 |     4953 | 2024-04-10 | SINNERS           | L   | 0.033      | -            | -                | -                | -         |    -0.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            2 |     5002 | 2024-04-09 | SAW               | W   | 0.027      | -            | -                | -                | -         |     0.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            1 |     5079 | 2024-04-07 | Young Ninjas      | W   | 0.012      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($142,159.18)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-28 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-26 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-09-22 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-09-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-09 |      0.840 | $2,500.00      | $2,100.54       |
| 2024-07-28 |      0.759 | $120,000.00    | $91,100.55      |
| 2024-06-17 |      0.485 | $10,000.00     | $4,851.60       |
| 2024-06-16 |      0.479 | $10,000.00     | $4,794.53       |
| 2024-06-09 |      0.433 | $7,000.00      | $3,032.94       |
| 2024-05-12 |      0.246 | $23,500.00     | $5,779.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
