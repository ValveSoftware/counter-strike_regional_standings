### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1179.0<br />
<br />
Final Rank Value (1179.0) = Starting Rank Value (1180.2) + Head To Head Adjustments (-1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.474[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.326[<sup>2</sup>](#table1)

The average of these factors is 0.384<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1180.2
- 400 + ( ( 0.384 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1180.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |       19 | 2024-06-16 | 9z              | L   | 1.000      | -            | -                | -                | -         |    -4.07 | adamS, dav1g, JUST, mopoz, stadodo |
|           53 |       71 | 2024-06-14 | RED Canids      | W   | 1.000      | 0.548        | 0.115 (0.063)    | 0.693 (0.380)    | 1 (1.000) |    18.80 | adamS, dav1g, JUST, mopoz, stadodo |
|           52 |       74 | 2024-06-14 | Imperial        | W   | 1.000      | 0.548        | 0.406 (0.223)    | 0.694 (0.381)    | 1 (1.000) |    26.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           51 |      231 | 2024-06-09 | Sangal          | L   | 1.000      | -            | -                | -                | -         |   -11.88 | adamS, dav1g, JUST, mopoz, stadodo |
|           50 |      425 | 2024-06-06 | SINNERS         | W   | 1.000      | 0.500        | 0.045 (0.023)    | 0.782 (0.391)    | 0 (0.000) |    10.39 | adamS, dav1g, JUST, mopoz, stadodo |
|           49 |      487 | 2024-06-05 | 3DMAX           | W   | 1.000      | 0.500        | 0.186 (0.093)    | 1.000 (0.500)    | 0 (0.000) |    19.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           48 |      621 | 2024-06-01 | ENCE            | L   | 1.000      | -            | -                | -                | -         |    -5.71 | adamS, dav1g, JUST, mopoz, stadodo |
|           47 |      629 | 2024-06-01 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -15.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           46 |     1296 | 2024-05-09 | B8              | L   | 0.934      | -            | -                | -                | -         |   -16.19 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |     1458 | 2024-05-01 | Zero Tenacity   | L   | 0.881      | -            | -                | -                | -         |   -17.65 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |     1778 | 2024-04-18 | ex-Guild Eagles | L   | 0.796      | -            | -                | -                | -         |   -19.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |     1787 | 2024-04-18 | fnatic          | W   | 0.795      | 0.143        | 0.290 (0.033)    | 0.666 (0.076)    | 0 (0.000) |    21.25 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |     1857 | 2024-04-16 | BLEED           | L   | 0.783      | -            | -                | -                | -         |    -6.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |     1990 | 2024-04-10 | RUSH B          | W   | 0.743      | 0.500        | -                | 0.315 (0.117)    | 0 (0.000) |     3.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |     2044 | 2024-04-09 | Aurora          | W   | 0.736      | 0.500        | 0.526 (0.194)    | 0.874 (0.322)    | 0 (0.000) |    21.40 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     2050 | 2024-04-09 | Apeks           | L   | 0.736      | -            | -                | -                | -         |   -13.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     2078 | 2024-04-08 | GUN5            | W   | 0.729      | -            | -                | -                | -         |     0.30 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     2083 | 2024-04-08 | fnatic          | L   | 0.728      | -            | -                | -                | -         |    -2.91 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     2184 | 2024-04-04 | NOM             | W   | 0.702      | -            | -                | -                | -         |     0.65 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     2218 | 2024-04-03 | 9INE            | W   | 0.696      | -            | -                | -                | -         |     0.58 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     2255 | 2024-04-02 | TSM             | W   | 0.690      | -            | -                | -                | -         |     1.95 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     2322 | 2024-03-28 | EYEBALLERS      | L   | 0.655      | -            | -                | -                | -         |   -16.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2494 | 2024-03-18 | FURIA           | L   | 0.589      | -            | -                | -                | -         |    -1.51 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2511 | 2024-03-17 | ENCE            | L   | 0.583      | -            | -                | -                | -         |    -2.32 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2526 | 2024-03-17 | SAW             | L   | 0.582      | -            | -                | -                | -         |    -5.11 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2617 | 2024-03-13 | Sangal          | W   | 0.557      | 0.500        | 0.216 (0.060)    | 0.884 (0.246)    | -         |     6.74 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2672 | 2024-03-11 | B8              | L   | 0.543      | -            | -                | -                | -         |    -9.34 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2678 | 2024-03-11 | Apeks           | L   | 0.542      | -            | -                | -                | -         |   -10.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2790 | 2024-03-06 | 9 Pandas        | W   | 0.510      | 0.500        | 0.114 (0.029)    | 0.663 (0.169)    | -         |     7.18 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2827 | 2024-03-05 | FORZE           | W   | 0.504      | -            | -                | -                | -         |     4.83 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2833 | 2024-03-05 | Nemiga          | W   | 0.503      | 0.143        | 0.486 (0.035)    | -                | -         |    10.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2842 | 2024-03-05 | ex-Sprout       | W   | 0.502      | -            | -                | -                | -         |     0.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2883 | 2024-03-03 | The Chosen Few  | L   | 0.489      | -            | -                | -                | -         |   -14.51 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2935 | 2024-02-29 | Aurora          | L   | 0.470      | -            | -                | -                | -         |    -1.23 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2941 | 2024-02-29 | HAVU            | W   | 0.468      | -            | -                | -                | -         |     1.20 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2949 | 2024-02-28 | FORZE           | L   | 0.463      | -            | -                | -                | -         |   -10.97 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2953 | 2024-02-28 | kONO            | W   | 0.462      | -            | -                | -                | -         |     1.70 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3243 | 2024-02-16 | fnatic          | W   | 0.381      | -            | -                | -                | 1 (0.381) |    10.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3270 | 2024-02-15 | 9 Pandas        | W   | 0.374      | -            | -                | -                | 1 (0.374) |     5.33 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3296 | 2024-02-14 | 3DMAX           | W   | 0.369      | 0.143        | -                | 1.000 (0.053)    | 1 (0.369) |     6.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3309 | 2024-02-14 | Natus Vincere   | L   | 0.368      | -            | -                | -                | -         |    -0.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3467 | 2024-02-03 | SAW             | L   | 0.295      | -            | -                | -                | -         |    -3.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3497 | 2024-02-02 | Rhyno           | W   | 0.289      | -            | -                | -                | -         |     2.66 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3503 | 2024-02-02 | ABT             | W   | 0.288      | -            | -                | -                | -         |     0.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3755 | 2024-01-20 | PERA            | W   | 0.203      | -            | -                | -                | -         |     1.57 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3763 | 2024-01-20 | Enterprise      | L   | 0.202      | -            | -                | -                | -         |    -4.62 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3821 | 2024-01-19 | HEROIC          | W   | 0.195      | -            | -                | -                | -         |     5.95 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3877 | 2024-01-18 | AMKAL           | L   | 0.189      | -            | -                | -                | -         |    -2.95 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3893 | 2024-01-18 | Spirit          | W   | 0.188      | 0.143        | 1.000 (0.027)    | -                | -         |     5.87 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4201 | 2024-01-09 | Enterprise      | L   | 0.131      | -            | -                | -                | -         |    -3.00 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4203 | 2024-01-09 | Entropiq        | W   | 0.131      | -            | -                | -                | -         |     0.16 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4207 | 2024-01-09 | 9INE            | W   | 0.130      | -            | -                | -                | -         |     0.10 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4223 | 2024-01-09 | Fraud5          | W   | 0.129      | -            | -                | -                | -         |     0.26 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4246 | 2024-01-09 | Betera          | W   | 0.129      | -            | -                | -                | -         |     0.28 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,026.17)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-06-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
