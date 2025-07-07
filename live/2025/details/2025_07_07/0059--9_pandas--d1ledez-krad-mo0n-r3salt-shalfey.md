### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, Krad, mo0N, r3salt, shalfey<br />
Global Rank: [59](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  967.1<br />
<br />
Final Rank Value (967.1) = Starting Rank Value (866.3) + Head To Head Adjustments (100.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.217[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.3
- 400 + ( ( 0.250 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 866.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |     1310 | 2025-04-19 | ENCE               | L   | 0.673      | -            | -                | -                | -         |    -6.95 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           49 |     1320 | 2025-04-18 | Nemiga             | L   | 0.667      | -            | -                | -                | -         |    -5.00 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           48 |     1325 | 2025-04-18 | GUN5               | W   | 0.666      | 0.657        | 0.034 (0.015)    | 0.655 (0.286)    | 0 (0.000) |    11.25 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           47 |     1336 | 2025-04-18 | ECLOT              | W   | 0.665      | 0.657        | 0.095 (0.042)    | 0.876 (0.382)    | 0 (0.000) |    10.94 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           46 |     1355 | 2025-04-17 | Partizan           | W   | 0.659      | 0.657        | 0.063 (0.027)    | 0.746 (0.323)    | 0 (0.000) |     9.97 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           45 |     1368 | 2025-04-17 | NAVI Junior        | L   | 0.658      | -            | -                | -                | -         |    -6.45 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           44 |     1387 | 2025-04-16 | B8                 | L   | 0.653      | -            | -                | -                | -         |    -2.50 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           43 |     1391 | 2025-04-16 | BetBoom            | L   | 0.652      | -            | -                | -                | -         |    -5.57 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           42 |     1414 | 2025-04-15 | SAW                | W   | 0.645      | -            | -                | -                | 0 (0.000) |    12.15 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           41 |     1429 | 2025-04-14 | OG                 | L   | 0.640      | -            | -                | -                | -         |    -5.90 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           40 |     1442 | 2025-04-14 | BIG                | W   | 0.638      | 0.143        | 0.175 (0.016)    | -                | 0 (0.000) |    15.90 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|           39 |     1696 | 2025-04-03 | Metizport          | W   | 0.567      | 0.471        | -                | 0.504 (0.134)    | 0 (0.000) |    10.22 | anarkez, d1Ledez, Krad, r3salt, shalfey  |
|           38 |     1711 | 2025-04-03 | Complexity         | L   | 0.565      | -            | -                | -                | -         |    -2.33 | anarkez, d1Ledez, Krad, r3salt, shalfey  |
|           37 |     1713 | 2025-04-03 | Nemiga             | L   | 0.565      | -            | -                | -                | -         |    -3.63 | anarkez, d1Ledez, Krad, r3salt, shalfey  |
|           36 |     1760 | 2025-04-02 | Passion UA         | W   | 0.559      | 0.471        | 0.095 (0.025)    | 0.974 (0.256)    | 0 (0.000) |    15.21 | anarkez, d1Ledez, Krad, r3salt, shalfey  |
|           35 |     1776 | 2025-04-02 | Imperial Valkyries | W   | 0.558      | 0.471        | 0.057 (0.015)    | -                | 0 (0.000) |     7.21 | anarkez, d1Ledez, Krad, r3salt, shalfey  |
|           34 |     1921 | 2025-03-29 | BetBoom            | L   | 0.533      | -            | -                | -                | -         |    -4.33 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           33 |     1969 | 2025-03-28 | Metizport          | L   | 0.527      | -            | -                | -                | -         |    -8.51 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           32 |     2045 | 2025-03-27 | Leo                | W   | 0.520      | -            | -                | -                | 0 (0.000) |     2.48 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           31 |     2425 | 2025-03-15 | ENCE               | L   | 0.439      | -            | -                | -                | -         |    -3.68 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           30 |     2456 | 2025-03-13 | Nexus              | W   | 0.427      | 0.435        | 0.087 (0.016)    | 1.000 (0.186)    | 0 (0.000) |     7.59 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           29 |     2491 | 2025-03-11 | Monte              | W   | 0.414      | -            | -                | -                | -         |     4.21 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           28 |     2536 | 2025-03-10 | 9INE               | L   | 0.406      | -            | -                | -                | -         |    -2.39 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           27 |     2542 | 2025-03-10 | fnatic             | L   | 0.405      | -            | -                | -                | -         |    -1.18 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           26 |     2573 | 2025-03-09 | HEROIC             | L   | 0.400      | -            | -                | -                | -         |    -0.34 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           25 |     2593 | 2025-03-09 | Iberian Soul       | W   | 0.399      | 0.435        | 0.077 (0.013)    | 0.974 (0.169)    | -         |     7.88 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           24 |     2646 | 2025-03-08 | BetBoom            | W   | 0.393      | 0.435        | 0.097 (0.017)    | -                | -         |     9.34 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           23 |     2669 | 2025-03-08 | ECLOT              | W   | 0.392      | -            | -                | -                | -         |     8.38 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           22 |     2728 | 2025-03-07 | 9INE               | W   | 0.386      | -            | -                | -                | -         |    10.16 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           21 |     2733 | 2025-03-07 | GUN5               | W   | 0.386      | -            | -                | -                | -         |     7.92 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           20 |     2790 | 2025-03-06 | PARIVISION         | W   | 0.379      | 0.435        | 0.076 (0.013)    | 1.000 (0.165)    | -         |     8.98 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           19 |     2812 | 2025-03-05 | PARIVISION         | L   | 0.374      | -            | -                | -                | -         |    -2.93 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           18 |     2828 | 2025-03-05 | GUN5               | L   | 0.372      | -            | -                | -                | -         |    -4.01 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           17 |     2850 | 2025-03-04 | 500                | L   | 0.365      | -            | -                | -                | -         |    -5.36 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           16 |     2862 | 2025-03-03 | 500                | L   | 0.360      | -            | -                | -                | -         |    -5.45 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           15 |     2921 | 2025-03-01 | Iberian Soul       | W   | 0.345      | 0.435        | -                | 0.974 (0.146)    | -         |     7.59 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           14 |     2963 | 2025-02-27 | Monte              | W   | 0.332      | -            | -                | -                | -         |     3.45 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           13 |     3037 | 2025-02-25 | PARIVISION         | L   | 0.321      | -            | -                | -                | -         |    -2.54 | Alv, d1Ledez, Krad, r3salt, shalfey      |
|           12 |     3115 | 2025-02-23 | B8                 | L   | 0.305      | -            | -                | -                | -         |    -0.62 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           11 |     3133 | 2025-02-22 | ECLOT              | W   | 0.298      | -            | -                | -                | -         |     6.69 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|           10 |     3179 | 2025-02-20 | Sashi              | W   | 0.285      | 0.435        | -                | 1.000 (0.124)    | -         |     6.75 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey  |
|            9 |     3205 | 2025-02-19 | SINNERS            | W   | 0.281      | -            | -                | -                | -         |     5.81 | Alv, d1Ledez, r3salt, shalfey, tonyblack |
|            8 |     3233 | 2025-02-18 | CPH Wolves         | L   | 0.274      | -            | -                | -                | -         |    -6.14 | Alv, d1Ledez, r3salt, shalfey, tonyblack |
|            7 |     3364 | 2025-02-13 | 500                | L   | 0.241      | -            | -                | -                | -         |    -3.68 | d1Ledez, Krad, mo0N, r3salt, shalfey     |
|            6 |     3869 | 2025-01-23 | JiJieHao           | W   | 0.101      | -            | -                | -                | -         |     2.42 | Alv, d1Ledez, r3salt, shalfey, tonyblack |
|            5 |     3934 | 2025-01-21 | Monte              | L   | 0.088      | -            | -                | -                | -         |    -1.99 | Alv, d1Ledez, Krad, r3salt, shalfey      |
|            4 |     3968 | 2025-01-14 | Liquid             | L   | 0.040      | -            | -                | -                | -         |    -0.09 | Alv, d1Ledez, Krad, r3salt, shalfey      |
|            3 |     3972 | 2025-01-12 | Wildcard           | L   | 0.026      | -            | -                | -                | -         |    -0.28 | Alv, d1Ledez, Krad, r3salt, shalfey      |
|            2 |     3976 | 2025-01-11 | EYEBALLERS         | W   | 0.019      | -            | -                | -                | -         |     0.13 | Alv, d1Ledez, Krad, r3salt, shalfey      |
|            1 |     3982 | 2025-01-10 | Mousquetaires      | W   | 0.013      | -            | -                | -                | -         |     0.05 | Alv, d1Ledez, Krad, r3salt, shalfey      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,805.10)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.821 | $1,000.00      | $821.03         |
| 2025-04-20 |      0.681 | $15,000.00     | $10,209.30      |
| 2025-04-03 |      0.567 | $7,500.00      | $4,253.08       |
| 2025-03-16 |      0.447 | $2,000.00      | $893.94         |
| 2025-03-11 |      0.414 | $2,000.00      | $827.65         |
| 2025-02-23 |      0.307 | $5,000.00      | $1,536.00       |
| 2025-01-12 |      0.026 | $10,000.00     | $264.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
