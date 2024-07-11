### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  904.3<br />
<br />
Final Rank Value (904.3) = Starting Rank Value (1069.4) + Head To Head Adjustments (-165.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.229[<sup>2</sup>](#table1)

The average of these factors is 0.317<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1069.4
- 400 + ( ( 0.317 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1069.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |        9 | 2024-07-11 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -11.28 | ArroW, awzek, FreeZe, hyped, PerX  |
|           76 |       66 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.66 | ArroW, awzek, FreeZe, hyped, PerX  |
|           75 |      187 | 2024-06-15 | Sissi State Punks | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.06 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      292 | 2024-06-12 | Versager trupp    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.75 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      453 | 2024-06-08 | Kosovo            | L   | 0.980      | -            | -                | -                | -         |   -18.24 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      492 | 2024-06-07 | Kubix             | W   | 0.974      | -            | -                | -                | 1 (0.974) |     1.56 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      940 | 2024-05-24 | Endpoint          | L   | 0.879      | -            | -                | -                | -         |   -13.25 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |      957 | 2024-05-23 | Entropiq          | W   | 0.872      | -            | -                | -                | 0 (0.000) |     1.31 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |      981 | 2024-05-22 | VP.Prodigy        | L   | 0.868      | -            | -                | -                | -         |   -14.32 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |     1065 | 2024-05-20 | Romania           | L   | 0.854      | -            | -                | -                | -         |   -18.61 | ArroW, awzek, FreeZe, hyped, PerX  |
|           67 |     1103 | 2024-05-19 | Passion UA        | L   | 0.845      | -            | -                | -                | -         |   -12.31 | ArroW, awzek, FreeZe, hyped, PerX  |
|           66 |     1138 | 2024-05-18 | Sashi             | L   | 0.838      | -            | -                | -                | -         |    -4.67 | ArroW, awzek, FreeZe, hyped, PerX  |
|           65 |     1158 | 2024-05-17 | EYEBALLERS        | L   | 0.834      | -            | -                | -                | -         |   -15.58 | ArroW, awzek, FreeZe, hyped, PerX  |
|           64 |     1195 | 2024-05-16 | 9 Pandas          | L   | 0.827      | -            | -                | -                | -         |    -9.16 | ArroW, awzek, FreeZe, hyped, PerX  |
|           63 |     1210 | 2024-05-16 | SINNERS           | L   | 0.825      | -            | -                | -                | -         |   -10.94 | ArroW, awzek, FreeZe, hyped, PerX  |
|           62 |     1300 | 2024-05-14 | PERA              | L   | 0.814      | -            | -                | -                | -         |   -14.48 | ArroW, awzek, FreeZe, hyped, PerX  |
|           61 |     1312 | 2024-05-14 | Endpoint          | W   | 0.812      | 0.435        | -                | 0.524 (0.185)    | 0 (0.000) |    11.13 | ArroW, awzek, FreeZe, hyped, PerX  |
|           60 |     1483 | 2024-05-06 | Sashi             | L   | 0.760      | -            | -                | -                | -         |    -5.31 | ArroW, awzek, FreeZe, hyped, PerX  |
|           59 |     1568 | 2024-05-02 | MOUZ NXT          | L   | 0.732      | -            | -                | -                | -         |    -9.01 | ArroW, awzek, FreeZe, hyped, PerX  |
|           58 |     1587 | 2024-05-01 | Slovakia          | W   | 0.726      | 0.396        | 0.045 (0.013)    | 0.891 (0.256)    | 0 (0.000) |    10.13 | ArroW, awzek, FreeZe, hyped, PerX  |
|           57 |     1596 | 2024-05-01 | Sangal            | W   | 0.725      | 0.500        | 0.231 (0.084)    | 0.853 (0.309)    | 0 (0.000) |    15.59 | ArroW, awzek, FreeZe, hyped, PerX  |
|           56 |     1605 | 2024-04-30 | Endpoint          | L   | 0.720      | -            | -                | -                | -         |   -13.66 | ArroW, awzek, FreeZe, hyped, PerX  |
|           55 |     1617 | 2024-04-30 | Slovakia          | W   | 0.718      | 0.396        | 0.045 (0.013)    | 0.891 (0.254)    | 0 (0.000) |    10.38 | ArroW, awzek, FreeZe, hyped, PerX  |
|           54 |     1646 | 2024-04-28 | Passion UA        | W   | 0.707      | 0.500        | 0.087 (0.031)    | 0.821 (0.290)    | 0 (0.000) |    10.18 | ArroW, awzek, FreeZe, hyped, PerX  |
|           53 |     1705 | 2024-04-26 | Gaimin Gladiators | W   | 0.691      | 0.500        | 0.069 (0.024)    | 0.528 (0.183)    | -         |    16.57 | ArroW, awzek, FreeZe, hyped, skyye |
|           52 |     1773 | 2024-04-23 | Enterprise        | W   | 0.672      | 0.384        | 0.053 (0.014)    | 0.654 (0.169)    | -         |    10.63 | ArroW, FreeZe, hyped, PerX, skyye  |
|           51 |     1775 | 2024-04-23 | Permitta          | L   | 0.671      | -            | -                | -                | -         |   -10.07 | ArroW, FreeZe, hyped, PerX, skyye  |
|           50 |     1785 | 2024-04-22 | ENCE Academy      | W   | 0.665      | -            | -                | -                | -         |     5.74 | ArroW, FreeZe, hyped, PerX, skyye  |
|           49 |     1798 | 2024-04-21 | MOUZ NXT          | L   | 0.660      | -            | -                | -                | -         |    -7.19 | ArroW, awzek, FreeZe, hyped, skyye |
|           48 |     1808 | 2024-04-21 | Slovakia          | L   | 0.658      | -            | -                | -                | -         |   -10.70 | ArroW, awzek, FreeZe, hyped, skyye |
|           47 |     1815 | 2024-04-20 | Space             | L   | 0.654      | -            | -                | -                | -         |   -14.30 | ArroW, awzek, FreeZe, hyped, skyye |
|           46 |     1839 | 2024-04-20 | Enterprise        | W   | 0.651      | 0.500        | 0.053 (0.017)    | 0.654 (0.213)    | -         |     9.85 | ArroW, awzek, FreeZe, hyped, skyye |
|           45 |     1875 | 2024-04-19 | Passion UA        | W   | 0.646      | 0.371        | 0.087 (0.021)    | 0.821 (0.197)    | -         |    10.27 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     1881 | 2024-04-19 | Zero Tenacity     | L   | 0.645      | -            | -                | -                | -         |    -8.69 | ArroW, awzek, FreeZe, hyped, skyye |
|           43 |     1931 | 2024-04-18 | HAVU              | L   | 0.639      | -            | -                | -                | -         |   -16.48 | ArroW, awzek, FreeZe, hyped, skyye |
|           42 |     1939 | 2024-04-18 | BLEED             | L   | 0.638      | -            | -                | -                | -         |    -2.54 | ArroW, awzek, FreeZe, hyped, skyye |
|           41 |     2000 | 2024-04-16 | Aurora Young Blud | W   | 0.625      | -            | -                | -                | -         |     3.62 | ArroW, awzek, FreeZe, hyped, skyye |
|           40 |     2013 | 2024-04-15 | Zero Tenacity     | L   | 0.620      | -            | -                | -                | -         |    -9.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           39 |     2049 | 2024-04-13 | Alliance          | W   | 0.605      | -            | -                | -                | -         |     7.19 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     2192 | 2024-04-09 | Czech Republic    | W   | 0.579      | 0.371        | 0.104 (0.022)    | -                | -         |    13.28 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2226 | 2024-04-08 | SINNERS           | L   | 0.571      | -            | -                | -                | -         |    -6.20 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2317 | 2024-04-04 | Rebels            | L   | 0.547      | -            | -                | -                | -         |    -7.26 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2408 | 2024-04-02 | AMKAL             | L   | 0.531      | -            | -                | -                | -         |    -6.21 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2484 | 2024-03-27 | FAVBET            | L   | 0.494      | -            | -                | -                | -         |   -12.31 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2491 | 2024-03-27 | ex-Guild Eagles   | W   | 0.494      | -            | -                | -                | -         |     4.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2524 | 2024-03-25 | ex-Sprout         | W   | 0.480      | -            | -                | -                | -         |     1.01 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2539 | 2024-03-23 | Aurora            | L   | 0.467      | -            | -                | -                | -         |    -0.44 | ArroW, awzek, FreeZe, hyped, skyye |
|           30 |     2728 | 2024-03-14 | Metizport         | W   | 0.406      | -            | -                | -                | -         |     6.11 | ArroW, awzek, FreeZe, hyped, skyye |
|           29 |     2756 | 2024-03-13 | SINNERS           | L   | 0.400      | -            | -                | -                | -         |    -5.19 | ArroW, awzek, FreeZe, hyped, skyye |
|           28 |     2838 | 2024-03-10 | Entropiq          | L   | 0.379      | -            | -                | -                | -         |   -11.00 | ArroW, awzek, FreeZe, hyped, skyye |
|           27 |     2841 | 2024-03-10 | MOUZ NXT          | L   | 0.378      | -            | -                | -                | -         |    -5.04 | ArroW, awzek, FreeZe, hyped, skyye |
|           26 |     2885 | 2024-03-08 | Sashi             | W   | 0.365      | 0.371        | 0.202 (0.027)    | 1.000 (0.135)    | -         |     7.03 | ArroW, awzek, FreeZe, hyped, skyye |
|           25 |     2925 | 2024-03-06 | brazylijski luz   | W   | 0.354      | -            | -                | -                | -         |     2.44 | ArroW, awzek, FreeZe, hyped, skyye |
|           24 |     2984 | 2024-03-05 | Sashi             | W   | 0.345      | -            | -                | -                | -         |     6.82 | ArroW, awzek, FreeZe, hyped, skyye |
|           23 |     2997 | 2024-03-04 | Passion UA        | L   | 0.339      | -            | -                | -                | -         |    -5.40 | ArroW, awzek, FreeZe, hyped, skyye |
|           22 |     3037 | 2024-03-02 | 500               | L   | 0.327      | -            | -                | -                | -         |    -8.58 | ArroW, awzek, FreeZe, hyped, skyye |
|           21 |     3064 | 2024-03-01 | fnatic            | L   | 0.319      | -            | -                | -                | -         |    -0.47 | ArroW, awzek, FreeZe, hyped, skyye |
|           20 |     3090 | 2024-02-28 | BetBoom           | L   | 0.306      | -            | -                | -                | -         |    -0.34 | ArroW, awzek, FreeZe, hyped, skyye |
|           19 |     3107 | 2024-02-27 | RUBY              | L   | 0.300      | -            | -                | -                | -         |    -5.49 | ArroW, awzek, FreeZe, hyped, skyye |
|           18 |     3130 | 2024-02-26 | Endpoint          | W   | 0.292      | -            | -                | -                | -         |     2.98 | ArroW, awzek, FreeZe, hyped, skyye |
|           17 |     3147 | 2024-02-25 | Alliance          | L   | 0.287      | -            | -                | -                | -         |    -6.25 | ArroW, awzek, FreeZe, hyped, skyye |
|           16 |     3310 | 2024-02-18 | Young Ninjas      | L   | 0.241      | -            | -                | -                | -         |    -6.08 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           15 |     3482 | 2024-02-11 | Entropiq          | W   | 0.194      | -            | -                | -                | -         |     0.40 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           14 |     3542 | 2024-02-06 | 500               | W   | 0.160      | -            | -                | -                | -         |     0.73 | awzek, FreeZe, Goody, PANIX, PerX  |
|           13 |     3568 | 2024-02-04 | brazylijski luz   | W   | 0.147      | -            | -                | -                | -         |     0.94 | awzek, FreeZe, Goody, PANIX, PerX  |
|           12 |     3579 | 2024-02-04 | Sangal            | L   | 0.145      | -            | -                | -                | -         |    -1.61 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|           11 |     3607 | 2024-02-03 | TSM               | L   | 0.139      | -            | -                | -                | -         |    -3.78 | awzek, FreeZe, Goody, PANIX, PerX  |
|           10 |     3668 | 2024-02-01 | Sangal            | L   | 0.125      | -            | -                | -                | -         |    -1.39 | awzek, FreeZe, Goody, PANIX, PerX  |
|            9 |     3706 | 2024-01-30 | ex-Sprout         | W   | 0.112      | -            | -                | -                | -         |     0.19 | awzek, FreeZe, Goody, PANIX, PerX  |
|            8 |     3755 | 2024-01-26 | Entropiq          | W   | 0.085      | -            | -                | -                | -         |     0.17 | awzek, FreeZe, Goody, PANIX, PerX  |
|            7 |     3782 | 2024-01-24 | ex-Guild Eagles   | L   | 0.074      | -            | -                | -                | -         |    -1.66 | awzek, FreeZe, Goody, PANIX, PerX  |
|            6 |     3802 | 2024-01-23 | PERA              | L   | 0.067      | -            | -                | -                | -         |    -1.26 | awzek, FreeZe, Goody, PANIX, PerX  |
|            5 |     3806 | 2024-01-23 | ex-Guild Eagles   | L   | 0.066      | -            | -                | -                | -         |    -1.50 | awzek, FreeZe, Goody, PANIX, PerX  |
|            4 |     3826 | 2024-01-22 | Viperio           | W   | 0.060      | -            | -                | -                | -         |     0.08 | awzek, FreeZe, Goody, PANIX, PerX  |
|            3 |     3830 | 2024-01-22 | Rebels            | L   | 0.060      | -            | -                | -                | -         |    -0.93 | awzek, FreeZe, Goody, PANIX, PerX  |
|            2 |     3833 | 2024-01-22 | Slovakia          | W   | 0.060      | -            | -                | -                | -         |     0.60 | awzek, FreeZe, Goody, PANIX, PerX  |
|            1 |     4188 | 2024-01-14 | Lilmix            | L   | 0.005      | -            | -                | -                | -         |    -0.15 | awzek, FreeZe, Goody, PANIX, PerX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,792.22)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      1.000 | $810.00        | $810.00         |
| 2024-06-09 |      0.987 | $1,000.00      | $987.22         |
| 2024-06-08 |      0.980 | $1,087.00      | $1,065.63       |
| 2024-05-03 |      0.740 | $12,500.00     | $9,244.29       |
| 2024-04-25 |      0.685 | $1,000.00      | $685.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
