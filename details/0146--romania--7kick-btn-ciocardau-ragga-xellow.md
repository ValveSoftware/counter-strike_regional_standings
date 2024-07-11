### Roster Details<br />
Team Name: Romania<br />
Roster: 7kick, BTN, Ciocardau, ragga, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  733.9<br />
<br />
Final Rank Value (733.9) = Starting Rank Value (861.4) + Head To Head Adjustments (-127.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 861.4
- 400 + ( ( 0.219 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 861.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |       16 | 2024-07-10 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -8.36 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           60 |       48 | 2024-07-09 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.04 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           59 |      286 | 2024-06-12 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -6.78 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           58 |      311 | 2024-06-11 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -11.08 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           57 |      406 | 2024-06-09 | EYEBALLERS        | L   | 0.985      | -            | -                | -                | -         |    -7.65 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           56 |      436 | 2024-06-08 | Enterprise        | L   | 0.980      | -            | -                | -                | -         |    -8.18 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           55 |      509 | 2024-06-07 | Astralis Talent   | W   | 0.973      | 0.450        | 0.008 (0.003)    | -                | 0 (0.000) |     9.57 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           54 |      519 | 2024-06-07 | 9INE              | L   | 0.972      | -            | -                | -                | -         |   -14.45 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           53 |      541 | 2024-06-06 | 3DMAX             | L   | 0.968      | -            | -                | -                | -         |    -2.56 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           52 |      639 | 2024-06-05 | BLEED             | L   | 0.959      | -            | -                | -                | -         |    -1.50 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           51 |      879 | 2024-05-27 | The Prodigies     | L   | 0.901      | -            | -                | -                | -         |   -22.44 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           50 |      890 | 2024-05-27 | MOUZ NXT          | L   | 0.898      | -            | -                | -                | -         |    -4.43 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |      924 | 2024-05-25 | Permitta          | L   | 0.885      | -            | -                | -                | -         |    -9.68 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |      953 | 2024-05-23 | RUBY              | L   | 0.873      | -            | -                | -                | -         |    -6.91 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |     1065 | 2024-05-20 | ALTERNATE aTTaX   | W   | 0.854      | 0.435        | 0.050 (0.018)    | 0.577 (0.214)    | 0 (0.000) |    18.61 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           46 |     1071 | 2024-05-20 | PERA              | L   | 0.853      | -            | -                | -                | -         |    -6.97 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           45 |     1168 | 2024-05-17 | Passion UA        | L   | 0.832      | -            | -                | -                | -         |    -6.93 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           44 |     1259 | 2024-05-15 | Space             | L   | 0.818      | -            | -                | -                | -         |   -10.57 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           43 |     1334 | 2024-05-13 | Slovakia          | L   | 0.805      | -            | -                | -                | -         |    -7.49 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           42 |     1544 | 2024-05-03 | ENCE Academy      | L   | 0.738      | -            | -                | -                | -         |   -14.11 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           41 |     1589 | 2024-05-01 | Insilio           | L   | 0.725      | -            | -                | -                | -         |    -7.53 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           40 |     1621 | 2024-04-30 | fnatic            | L   | 0.718      | -            | -                | -                | -         |    -0.52 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           39 |     1626 | 2024-04-29 | Endpoint          | L   | 0.713      | -            | -                | -                | -         |    -9.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           38 |     1629 | 2024-04-29 | VP.Prodigy        | L   | 0.713      | -            | -                | -                | -         |   -10.34 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           37 |     1636 | 2024-04-29 | LEON              | W   | 0.712      | 0.396        | -                | 0.167 (0.047)    | 0 (0.000) |     6.64 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           36 |     1640 | 2024-04-29 | Enterprise        | W   | 0.711      | 0.384        | 0.053 (0.015)    | 0.654 (0.179)    | 0 (0.000) |    13.82 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           35 |     1657 | 2024-04-28 | brazylijski luz   | L   | 0.705      | -            | -                | -                | -         |   -11.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           34 |     1721 | 2024-04-25 | Metizport         | W   | 0.687      | 0.384        | 0.065 (0.017)    | 0.489 (0.129)    | 0 (0.000) |    15.54 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           33 |     1728 | 2024-04-25 | Grannys Knockers  | L   | 0.686      | -            | -                | -                | -         |   -12.82 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     1750 | 2024-04-24 | AMKAL             | L   | 0.679      | -            | -                | -                | -         |    -3.66 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     1771 | 2024-04-23 | Illuminar         | L   | 0.672      | -            | -                | -                | -         |   -15.05 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     1784 | 2024-04-22 | Zero Tenacity     | L   | 0.665      | -            | -                | -                | -         |    -5.49 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     1794 | 2024-04-21 | Young Ninjas      | W   | 0.661      | 0.500        | 0.024 (0.008)    | -                | 0 (0.000) |     9.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     1797 | 2024-04-21 | PARIVISION        | L   | 0.660      | -            | -                | -                | -         |    -8.28 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     1833 | 2024-04-20 | Permitta          | W   | 0.652      | 0.500        | 0.038 (0.013)    | 0.837 (0.273)    | 0 (0.000) |    13.30 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     1902 | 2024-04-18 | Young Ninjas      | L   | 0.641      | -            | -                | -                | -         |   -11.36 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     1936 | 2024-04-18 | Enterprise        | L   | 0.638      | -            | -                | -                | -         |    -7.21 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     2133 | 2024-04-10 | B8                | W   | 0.586      | 0.384        | 0.242 (0.054)    | 1.000 (0.225)    | 0 (0.000) |    14.58 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2276 | 2024-04-05 | SINNERS           | L   | 0.553      | -            | -                | -                | -         |    -3.67 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2419 | 2024-04-01 | Sashi             | W   | 0.525      | 0.384        | 0.202 (0.041)    | 1.000 (0.202)    | 0 (0.000) |    13.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2527 | 2024-03-25 | Sashi             | L   | 0.480      | -            | -                | -                | -         |    -2.86 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2788 | 2024-03-12 | Nemiga            | W   | 0.394      | 0.372        | 0.498 (0.073)    | 0.678 (0.099)    | -         |    11.39 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2810 | 2024-03-11 | RUBY              | W   | 0.387      | 0.372        | 0.139 (0.020)    | 0.563 (0.081)    | -         |     8.28 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2849 | 2024-03-09 | INGLORIOUS        | W   | 0.374      | -            | -                | -                | -         |     1.93 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     2875 | 2024-03-08 | FAVBET            | W   | 0.367      | 0.372        | -                | 0.395 (0.054)    | -         |     4.86 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     3022 | 2024-03-03 | TSM               | L   | 0.333      | -            | -                | -                | -         |    -6.91 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     3268 | 2024-02-20 | ex-Guild Eagles   | L   | 0.253      | -            | -                | -                | -         |    -3.52 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     3290 | 2024-02-19 | Monte             | L   | 0.247      | -            | -                | -                | -         |    -0.63 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     3295 | 2024-02-19 | Astralis          | L   | 0.246      | -            | -                | -                | -         |    -0.02 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3595 | 2024-02-03 | 500               | L   | 0.140      | -            | -                | -                | -         |    -2.98 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3597 | 2024-02-03 | Serbia            | W   | 0.140      | -            | -                | -                | -         |     1.85 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3606 | 2024-02-03 | North Macedonia   | L   | 0.139      | -            | -                | -                | -         |    -3.88 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3863 | 2024-01-21 | ex-sYnck          | W   | 0.053      | -            | -                | -                | -         |     0.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3894 | 2024-01-20 | OG                | L   | 0.047      | -            | -                | -                | -         |    -0.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3906 | 2024-01-20 | BIG               | W   | 0.046      | -            | -                | -                | -         |     1.37 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3942 | 2024-01-19 | SINNERS           | W   | 0.041      | -            | -                | -                | -         |     1.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3999 | 2024-01-18 | Gaimin Gladiators | L   | 0.034      | -            | -                | -                | -         |    -0.19 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     4021 | 2024-01-18 | 9 Pandas          | L   | 0.033      | -            | -                | -                | -         |    -0.21 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4094 | 2024-01-16 | Endpoint          | W   | 0.022      | -            | -                | -                | -         |     0.40 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4109 | 2024-01-16 | FAVBET            | W   | 0.021      | -            | -                | -                | -         |     0.26 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            1 |     4120 | 2024-01-16 | Alliance          | W   | 0.021      | -            | -                | -                | -         |     0.37 | BTN, ERSIN, ragga, s0und, XELLOW     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,797.88)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.733 | $1,000.00      | $733.46         |
| 2024-03-25 |      0.480 | $4,300.00      | $2,064.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
