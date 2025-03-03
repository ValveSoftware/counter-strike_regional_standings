### Roster Details<br />
Team Name: Tricked<br />
Roster: Nodios, Queenix, roeJ, salazar, valde<br />
Global Rank: [85](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [57]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  825.2<br />
<br />
Final Rank Value (825.2) = Starting Rank Value (810.6) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.403[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.132[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 810.6
- 400 + ( ( 0.213 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 810.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |       18 | 2025-03-01 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -15.68 | Nodios, Queenix, roeJ, salazar, valde    |
|           64 |       25 | 2025-02-28 | ESC               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.02 | Nodios, Queenix, roeJ, salazar, valde    |
|           63 |       58 | 2025-02-25 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | -                | 0.474 (0.068)    | 0 (0.000) |     8.39 | Nodios, Queenix, roeJ, salazar, valde    |
|           62 |       75 | 2025-02-24 | OG                | L   | 1.000      | -            | -                | -                | -         |   -11.45 | Nodios, Queenix, roeJ, salazar, valde    |
|           61 |      140 | 2025-02-21 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -13.67 | leakz, niko, Queenix, salazar, valde     |
|           60 |      147 | 2025-02-21 | Dark Cloud        | W   | 1.000      | 0.143        | 0.027 (0.004)    | -                | 0 (0.000) |    10.30 | leakz, niko, Queenix, salazar, valde     |
|           59 |      157 | 2025-02-21 | CPH Wolves        | W   | 1.000      | 0.143        | -                | 0.684 (0.098)    | 0 (0.000) |    15.92 | leakz, niko, Queenix, salazar, valde     |
|           58 |      990 | 2024-12-09 | Apogee            | L   | 0.639      | -            | -                | -                | -         |    -9.95 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           57 |     1043 | 2024-12-07 | Fire Flux         | L   | 0.625      | -            | -                | -                | -         |   -10.17 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           56 |     1082 | 2024-12-05 | Chimera           | L   | 0.614      | -            | -                | -                | -         |   -10.54 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           55 |     1094 | 2024-12-05 | Sampi             | W   | 0.612      | 0.371        | 0.012 (0.003)    | -                | 0 (0.000) |     7.12 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           54 |     1120 | 2024-12-04 | Iberian Soul      | L   | 0.606      | -            | -                | -                | -         |   -10.25 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           53 |     1176 | 2024-12-01 | Iberian Soul      | L   | 0.586      | -            | -                | -                | -         |   -10.45 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           52 |     1196 | 2024-11-30 | Apogee            | W   | 0.581      | 0.354        | -                | 0.709 (0.146)    | 0 (0.000) |     8.90 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           51 |     1231 | 2024-11-29 | NAVI Junior       | W   | 0.574      | 0.354        | 0.089 (0.018)    | 0.996 (0.202)    | 0 (0.000) |    11.81 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           50 |     1237 | 2024-11-29 | BC.Game           | L   | 0.572      | -            | -                | -                | -         |   -10.96 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           49 |     1242 | 2024-11-28 | GUN5              | W   | 0.568      | 0.354        | 0.100 (0.020)    | 0.813 (0.163)    | 0 (0.000) |    11.54 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           48 |     1253 | 2024-11-28 | Chimera           | W   | 0.565      | 0.333        | 0.018 (0.003)    | 0.555 (0.104)    | 0 (0.000) |     8.62 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           47 |     1257 | 2024-11-27 | Apogee            | L   | 0.561      | -            | -                | -                | -         |    -8.83 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           46 |     1260 | 2024-11-27 | Iberian Soul      | W   | 0.560      | 0.354        | 0.015 (0.003)    | 0.636 (0.126)    | 0 (0.000) |     8.46 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           45 |     1265 | 2024-11-27 | Apogee            | W   | 0.558      | 0.333        | -                | 0.709 (0.132)    | -         |     8.91 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           44 |     1272 | 2024-11-26 | Iberian Soul      | L   | 0.554      | -            | -                | -                | -         |    -9.24 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           43 |     1280 | 2024-11-26 | Leo               | W   | 0.552      | 0.333        | 0.024 (0.004)    | 0.539 (0.099)    | -         |     7.26 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           42 |     1285 | 2024-11-25 | Fire Flux         | W   | 0.547      | 0.333        | -                | 0.973 (0.178)    | -         |     8.69 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           41 |     1308 | 2024-11-24 | Viperio           | W   | 0.538      | -            | -                | -                | -         |     4.18 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           40 |     1362 | 2024-11-22 | Apogee            | L   | 0.525      | -            | -                | -                | -         |    -8.00 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           39 |     1660 | 2024-11-10 | Zero Tenacity     | L   | 0.448      | -            | -                | -                | -         |    -6.54 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           38 |     1684 | 2024-11-09 | 9 Pandas          | L   | 0.440      | -            | -                | -                | -         |    -4.01 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           37 |     1720 | 2024-11-07 | AMKAL             | W   | 0.427      | -            | -                | -                | -         |     5.14 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           36 |     1723 | 2024-11-07 | 9INE              | W   | 0.426      | -            | -                | -                | -         |     5.58 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           35 |     1798 | 2024-11-03 | 9 Pandas          | L   | 0.399      | -            | -                | -                | -         |    -3.81 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           34 |     1859 | 2024-10-31 | ECSTATIC          | L   | 0.380      | -            | -                | -                | -         |    -5.51 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           33 |     1901 | 2024-10-29 | Johnny Speeds     | W   | 0.367      | 0.333        | 0.038 (0.005)    | -                | -         |     6.87 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           32 |     1905 | 2024-10-29 | Endpoint          | W   | 0.367      | -            | -                | -                | -         |     4.37 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           31 |     1925 | 2024-10-28 | Rebels            | W   | 0.358      | -            | -                | -                | -         |     3.78 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           30 |     1935 | 2024-10-27 | AMKAL             | W   | 0.353      | -            | -                | -                | -         |     2.98 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           29 |     1976 | 2024-10-26 | NAVI Junior       | L   | 0.345      | -            | -                | -                | -         |    -3.57 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           28 |     2016 | 2024-10-23 | ECLOT             | W   | 0.326      | -            | -                | -                | -         |     2.95 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           27 |     2054 | 2024-10-20 | FAVBET            | L   | 0.306      | -            | -                | -                | -         |    -5.18 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           26 |     2077 | 2024-10-19 | 9INE              | W   | 0.300      | -            | -                | -                | -         |     3.87 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           25 |     2197 | 2024-10-15 | GUN5              | W   | 0.271      | 0.143        | 0.100 (0.004)    | -                | -         |     5.82 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           24 |     2230 | 2024-10-12 | GTZ               | W   | 0.253      | 0.354        | 0.079 (0.007)    | -                | -         |     6.40 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           23 |     2245 | 2024-10-11 | HOTU              | W   | 0.246      | -            | -                | -                | -         |     2.33 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           22 |     2255 | 2024-10-10 | CYBERSHOKE        | W   | 0.239      | -            | -                | -                | -         |     3.98 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           21 |     2460 | 2024-10-04 | Sampi             | W   | 0.200      | -            | -                | -                | -         |     3.03 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           20 |     2544 | 2024-10-02 | ENCE Academy      | L   | 0.187      | -            | -                | -                | -         |    -3.36 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           19 |     2559 | 2024-10-02 | HOTU              | L   | 0.184      | -            | -                | -                | -         |    -4.06 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           18 |     2603 | 2024-10-01 | TSM               | L   | 0.179      | -            | -                | -                | -         |    -3.43 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           17 |     2629 | 2024-09-30 | Johnny Speeds     | W   | 0.172      | -            | -                | -                | -         |     3.30 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           16 |     2694 | 2024-09-28 | Nexus             | L   | 0.159      | -            | -                | -                | -         |    -0.73 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           15 |     2699 | 2024-09-28 | Passion UA        | L   | 0.158      | -            | -                | -                | -         |    -1.40 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           14 |     2778 | 2024-09-26 | Apogee            | L   | 0.147      | -            | -                | -                | -         |    -3.18 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           13 |     2792 | 2024-09-26 | Permitta          | W   | 0.145      | -            | -                | -                | -         |     2.92 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           12 |     2840 | 2024-09-25 | TSM               | L   | 0.139      | -            | -                | -                | -         |    -2.71 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           11 |     2985 | 2024-09-21 | kONO              | W   | 0.112      | -            | -                | -                | -         |     1.69 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           10 |     3167 | 2024-09-15 | GamerLegion       | L   | 0.072      | -            | -                | -                | -         |    -1.62 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            9 |     3207 | 2024-09-14 | ECSTATIC          | W   | 0.065      | -            | -                | -                | -         |     1.16 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            8 |     3232 | 2024-09-13 | Cloud9            | W   | 0.059      | -            | -                | -                | -         |     1.01 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            7 |     3331 | 2024-09-10 | Chimera           | W   | 0.038      | -            | -                | -                | -         |     0.62 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            6 |     3345 | 2024-09-09 | FAVBET            | L   | 0.033      | -            | -                | -                | -         |    -0.53 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            5 |     3387 | 2024-09-07 | Spirit Academy    | L   | 0.020      | -            | -                | -                | -         |    -0.24 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            4 |     3414 | 2024-09-06 | Passion UA        | L   | 0.014      | -            | -                | -                | -         |    -0.12 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            3 |     3462 | 2024-09-05 | BetBoom           | L   | 0.006      | -            | -                | -                | -         |    -0.06 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            2 |     3471 | 2024-09-05 | Revenant          | W   | 0.005      | -            | -                | -                | -         |     0.02 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            1 |     3473 | 2024-09-05 | Sampi             | L   | 0.005      | -            | -                | -                | -         |    -0.08 | kraghen, nicoodoz, Nodios, Queenix, roeJ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,961.68)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.581 | $12,000.00     | $6,968.86       |
| 2024-11-29 |      0.572 | $3,000.00      | $1,715.19       |
| 2024-11-27 |      0.560 | $1,000.00      | $559.80         |
| 2024-11-12 |      0.460 | $500.00        | $229.98         |
| 2024-11-10 |      0.447 | $2,500.00      | $1,118.43       |
| 2024-09-15 |      0.074 | $5,000.00      | $369.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
