### Roster Details<br />
Team Name: ENCE<br />
Roster: myltsi, Neityu, podi, rigoN, sdy<br />
Global Rank: [29](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [21]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1220.7<br />
<br />
Final Rank Value (1220.7) = Starting Rank Value (1342.0) + Head To Head Adjustments (-121.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.549[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 0.705[<sup>2</sup>](#table1)

The average of these factors is 0.491<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1342.0
- 400 + ( ( 0.491 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1342.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           84 |        9 | 2025-08-31 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -21.18 | myltsi, Neityu, podi, rigoN, sdy      |
|           83 |       19 | 2025-08-30 | 9INE              | W   | 1.000      | 0.333        | -                | 1.000 (0.333)    | 1 (1.000) |    11.76 | myltsi, Neityu, podi, rigoN, sdy      |
|           82 |       25 | 2025-08-30 | Gentle Mates      | W   | 1.000      | 0.333        | 0.158 (0.053)    | 1.000 (0.333)    | 1 (1.000) |    19.62 | myltsi, Neityu, podi, rigoN, sdy      |
|           81 |       27 | 2025-08-30 | Ninjas in Pyjamas | W   | 1.000      | 0.333        | 0.163 (0.054)    | 0.684 (0.228)    | 1 (1.000) |    20.81 | myltsi, Neityu, podi, rigoN, sdy      |
|           80 |       44 | 2025-08-29 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -11.15 | myltsi, Neityu, podi, rigoN, sdy      |
|           79 |       59 | 2025-08-29 | MANA              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.27 | myltsi, Neityu, podi, rigoN, sdy      |
|           78 |       66 | 2025-08-29 | Insiders          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.34 | myltsi, Neityu, podi, rigoN, sdy      |
|           77 |       81 | 2025-08-28 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -26.75 | myltsi, Neityu, podi, rigoN, sdy      |
|           76 |      208 | 2025-08-20 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -24.60 | myltsi, Neityu, podi, rigoN, sdy      |
|           75 |      291 | 2025-08-16 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -13.00 | myltsi, Neityu, podi, rigoN, sdy      |
|           74 |      357 | 2025-08-14 | SINNERS           | W   | 1.000      | 0.384        | -                | 0.615 (0.236)    | 0 (0.000) |     4.32 | myltsi, Neityu, podi, rigoN, sdy      |
|           73 |      376 | 2025-08-14 | Betclic           | W   | 1.000      | 0.384        | -                | 0.588 (0.226)    | 0 (0.000) |     7.07 | myltsi, Neityu, podi, rigoN, sdy      |
|           72 |      395 | 2025-08-13 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -20.28 | myltsi, Neityu, podi, rigoN, sdy      |
|           71 |      402 | 2025-08-13 | Partizan          | W   | 1.000      | 0.384        | 0.063 (0.024)    | 1.000 (0.384)    | 0 (0.000) |     7.92 | myltsi, Neityu, podi, rigoN, sdy      |
|           70 |      414 | 2025-08-13 | BetBoom           | W   | 1.000      | 0.143        | 0.429 (0.061)    | -                | -         |    19.09 | myltsi, Neityu, podi, rigoN, sdy      |
|           69 |      502 | 2025-08-11 | SPARTA            | W   | 1.000      | -            | -                | -                | -         |     3.64 | myltsi, Neityu, podi, rigoN, sdy      |
|           68 |      554 | 2025-08-09 | OG                | L   | 1.000      | -            | -                | -                | -         |   -19.87 | myltsi, Neityu, podi, rigoN, sdy      |
|           67 |      575 | 2025-08-08 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.89 | myltsi, Neityu, podi, rigoN, sdy      |
|           66 |      590 | 2025-08-07 | Monte             | W   | 1.000      | 0.435        | -                | 0.947 (0.411)    | -         |     8.04 | myltsi, Neityu, podi, rigoN, sdy      |
|           65 |     1003 | 2025-07-14 | PARIVISION        | L   | 0.875      | -            | -                | -                | -         |   -21.09 | gla1ve, myltsi, Neityu, podi, sdy     |
|           64 |     1112 | 2025-07-10 | SENZA             | L   | 0.847      | -            | -                | -                | -         |   -25.05 | gla1ve, myltsi, Neityu, podi, sdy     |
|           63 |     1607 | 2025-06-04 | Reason            | W   | 0.608      | -            | -                | -                | -         |     1.67 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           62 |     1628 | 2025-06-03 | Gentle Mates      | W   | 0.601      | 0.389        | 0.158 (0.037)    | 1.000 (0.234)    | -         |    10.01 | gla1ve, myltsi, podi, sdy, xKacpersky |
|           61 |     1638 | 2025-06-01 | fnatic            | L   | 0.587      | -            | -                | -                | -         |    -6.88 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           60 |     1646 | 2025-05-31 | fnatic            | W   | 0.581      | 0.402        | 0.111 (0.026)    | -                | 1 (0.581) |    11.68 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           59 |     1656 | 2025-05-30 | 500               | W   | 0.574      | -            | -                | -                | 1 (0.574) |     1.47 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           58 |     1666 | 2025-05-29 | PARIVISION        | L   | 0.566      | -            | -                | -                | -         |   -14.21 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           57 |     1686 | 2025-05-27 | Passion UA        | W   | 0.553      | 0.435        | -                | 0.949 (0.228)    | -         |     5.34 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           56 |     1694 | 2025-05-26 | Sashi             | W   | 0.548      | -            | -                | -                | -         |     2.38 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           55 |     1789 | 2025-05-21 | 1win              | W   | 0.513      | -            | -                | -                | -         |     0.81 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           54 |     1842 | 2025-05-19 | Nexus             | W   | 0.500      | -            | -                | -                | -         |     2.18 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           53 |     1854 | 2025-05-18 | PARIVISION        | W   | 0.494      | 0.435        | 0.123 (0.026)    | 0.977 (0.210)    | -         |     3.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           52 |     1858 | 2025-05-18 | Nemiga            | W   | 0.493      | -            | -                | -                | -         |     5.06 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           51 |     1874 | 2025-05-17 | SAW               | W   | 0.487      | 0.435        | 0.253 (0.053)    | -                | -         |     8.67 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           50 |     1888 | 2025-05-16 | Nexus             | W   | 0.481      | -            | -                | -                | -         |     2.25 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           49 |     1934 | 2025-05-14 | Passion UA        | L   | 0.468      | -            | -                | -                | -         |    -9.95 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           48 |     1941 | 2025-05-14 | LA MASIA          | W   | 0.467      | -            | -                | -                | -         |     0.39 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           47 |     1977 | 2025-05-13 | Inner Circle      | W   | 0.461      | -            | -                | -                | -         |     0.26 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           46 |     2002 | 2025-05-12 | CYBERSHOKE        | W   | 0.454      | -            | -                | -                | -         |     1.65 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           45 |     2027 | 2025-05-11 | Inner Circle      | L   | 0.448      | -            | -                | -                | -         |   -13.88 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           44 |     2031 | 2025-05-11 | ECSTATIC          | L   | 0.447      | -            | -                | -                | -         |    -8.91 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           43 |     2063 | 2025-05-10 | Spirit Academy    | W   | 0.440      | -            | -                | -                | -         |     2.56 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           42 |     2127 | 2025-05-07 | Partizan          | W   | 0.422      | -            | -                | -                | -         |     1.94 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           41 |     2151 | 2025-05-07 | ECSTATIC          | L   | 0.418      | -            | -                | -                | -         |    -8.56 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           40 |     2169 | 2025-05-06 | Eternal Fire      | L   | 0.414      | -            | -                | -                | -         |   -12.35 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           39 |     2180 | 2025-05-06 | fnatic            | W   | 0.413      | -            | -                | -                | -         |     8.34 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           38 |     2204 | 2025-05-05 | CYBERSHOKE        | W   | 0.406      | -            | -                | -                | -         |     1.31 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           37 |     2219 | 2025-05-04 | 9INE              | W   | 0.400      | -            | -                | -                | -         |     5.71 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           36 |     2344 | 2025-04-29 | TPuDCATb TPu      | W   | 0.368      | -            | -                | -                | -         |     0.81 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           35 |     2349 | 2025-04-29 | Reason            | L   | 0.366      | -            | -                | -                | -         |   -10.71 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           34 |     2384 | 2025-04-27 | Zero Tenacity     | W   | 0.353      | -            | -                | -                | -         |     0.93 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           33 |     2413 | 2025-04-26 | FUT               | L   | 0.348      | -            | -                | -                | -         |    -9.09 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           32 |     2443 | 2025-04-25 | 500               | W   | 0.340      | -            | -                | -                | -         |     0.71 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           31 |     2481 | 2025-04-22 | Maestro           | W   | 0.320      | -            | -                | -                | -         |     0.11 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           30 |     2510 | 2025-04-20 | FUT               | L   | 0.308      | -            | -                | -                | -         |    -8.17 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           29 |     2513 | 2025-04-20 | BetBoom           | W   | 0.306      | 0.657        | 0.429 (0.086)    | -                | -         |     6.26 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           28 |     2527 | 2025-04-19 | 9 Pandas          | W   | 0.300      | -            | -                | -                | -         |     0.53 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           27 |     2541 | 2025-04-18 | BetBoom           | L   | 0.293      | -            | -                | -                | -         |    -3.27 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           26 |     2546 | 2025-04-18 | Metizport         | L   | 0.293      | -            | -                | -                | -         |    -8.35 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           25 |     2555 | 2025-04-18 | Spirit Academy    | W   | 0.292      | -            | -                | -                | -         |     1.25 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           24 |     2563 | 2025-04-17 | LA MASIA          | W   | 0.288      | -            | -                | -                | -         |     0.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           23 |     2566 | 2025-04-17 | Nexus             | L   | 0.287      | -            | -                | -                | -         |    -8.09 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           22 |     2578 | 2025-04-17 | B8                | L   | 0.286      | -            | -                | -                | -         |    -5.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           21 |     2601 | 2025-04-16 | SAW               | W   | 0.281      | 0.525        | 0.253 (0.037)    | -                | -         |     4.59 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           20 |     2614 | 2025-04-16 | fnatic            | W   | 0.278      | -            | -                | -                | -         |     5.35 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           19 |     2630 | 2025-04-15 | Astralis          | L   | 0.273      | -            | -                | -                | -         |    -1.09 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           18 |     2651 | 2025-04-14 | HEROIC            | L   | 0.266      | -            | -                | -                | -         |    -1.72 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           17 |     2661 | 2025-04-14 | 500               | W   | 0.265      | -            | -                | -                | -         |     0.19 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           16 |     2915 | 2025-04-03 | ECLOT             | W   | 0.194      | -            | -                | -                | -         |     0.46 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           15 |     2922 | 2025-04-03 | Nexus             | W   | 0.193      | -            | -                | -                | -         |     0.67 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           14 |     2972 | 2025-04-02 | Partizan          | W   | 0.187      | -            | -                | -                | -         |     0.71 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |     2974 | 2025-04-02 | LA MASIA          | W   | 0.187      | -            | -                | -                | -         |     0.13 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |     3000 | 2025-04-02 | BetBoom           | L   | 0.185      | -            | -                | -                | -         |    -2.17 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |     3148 | 2025-03-29 | B8                | L   | 0.159      | -            | -                | -                | -         |    -2.82 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |     3204 | 2025-03-28 | ECSTATIC          | W   | 0.153      | -            | -                | -                | -         |     1.39 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |     3258 | 2025-03-27 | PARIVISION        | L   | 0.148      | -            | -                | -                | -         |    -4.01 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            8 |     3615 | 2025-03-16 | 500               | L   | 0.072      | -            | -                | -                | -         |    -2.23 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |     3642 | 2025-03-15 | 9 Pandas          | W   | 0.066      | -            | -                | -                | -         |     0.08 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |     3680 | 2025-03-13 | ECSTATIC          | W   | 0.052      | -            | -                | -                | -         |     0.47 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |     3795 | 2025-03-09 | FUT               | L   | 0.027      | -            | -                | -                | -         |    -0.74 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |     3812 | 2025-03-09 | BIG               | W   | 0.026      | -            | -                | -                | -         |     0.19 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |     3842 | 2025-03-08 | BC.Game           | W   | 0.021      | -            | -                | -                | -         |     0.02 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |     3890 | 2025-03-08 | FUT               | L   | 0.019      | -            | -                | -                | -         |    -0.52 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |     3948 | 2025-03-07 | OG                | L   | 0.013      | -            | -                | -                | -         |    -0.32 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($63,677.49)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      1.000 | $1,475.00      | $1,475.00       |
| 2025-08-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-08-10 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-06-04 |      0.608 | $12,568.00     | $7,640.21       |
| 2025-06-01 |      0.587 | $7,083.00      | $4,161.15       |
| 2025-05-31 |      0.580 | $1,500.00      | $870.03         |
| 2025-05-18 |      0.494 | $22,000.00     | $10,872.47      |
| 2025-05-11 |      0.447 | $4,000.00      | $1,788.04       |
| 2025-04-20 |      0.308 | $42,000.00     | $12,927.93      |
| 2025-04-03 |      0.194 | $10,000.00     | $1,942.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
