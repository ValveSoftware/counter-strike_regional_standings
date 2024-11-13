### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [32](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1183.1<br />
<br />
Final Rank Value (1183.1) = Starting Rank Value (1066.1) + Head To Head Adjustments (117.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.362[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.334<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1066.1
- 400 + ( ( 0.334 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 1066.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |       85 | 2024-11-11 | ECLOT             | W   | 1.000      | 0.371        | 0.077 (0.029)    | 1.000 (0.371)    | 0 (0.000) |    13.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           73 |       97 | 2024-11-10 | ECLOT             | W   | 1.000      | 0.384        | 0.077 (0.030)    | 1.000 (0.384)    | 0 (0.000) |    14.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           72 |      101 | 2024-11-10 | 500               | L   | 1.000      | -            | -                | -                | -         |   -20.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           71 |      119 | 2024-11-09 | Gaimin Gladiators | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.59 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           70 |      123 | 2024-11-09 | NAVI Junior       | W   | 1.000      | 0.371        | 0.129 (0.048)    | 0.920 (0.341)    | 0 (0.000) |    13.56 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           69 |      138 | 2024-11-08 | Fire Flux         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           68 |      152 | 2024-11-07 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -19.17 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           67 |      157 | 2024-11-07 | ECLOT             | W   | 1.000      | 0.371        | 0.077 (0.029)    | 1.000 (0.371)    | 0 (0.000) |    12.43 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           66 |      183 | 2024-11-05 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.36 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           65 |      192 | 2024-11-05 | Permitta          | W   | 1.000      | 0.371        | -                | 1.000 (0.371)    | 0 (0.000) |     6.81 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           64 |      230 | 2024-11-03 | Gaimin Gladiators | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.19 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           63 |      253 | 2024-11-02 | Endpoint          | W   | 1.000      | -            | -                | -                | -         |     6.48 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           62 |      279 | 2024-11-01 | NAVI Junior       | W   | 1.000      | 0.371        | 0.129 (0.048)    | 0.920 (0.341)    | -         |    14.08 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      300 | 2024-10-31 | 9INE              | W   | 1.000      | -            | -                | -                | -         |    13.49 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      319 | 2024-10-30 | Johnny Speeds     | W   | 1.000      | 0.384        | 0.071 (0.027)    | 1.000 (0.384)    | -         |    12.70 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      353 | 2024-10-28 | Verdant           | W   | 1.000      | -            | -                | -                | -         |     5.11 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      415 | 2024-10-25 | Fire Flux         | W   | 1.000      | -            | -                | -                | -         |     1.69 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      488 | 2024-10-20 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -17.42 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      554 | 2024-10-17 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -2.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      587 | 2024-10-16 | TSM               | W   | 1.000      | -            | -                | -                | -         |     9.87 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      613 | 2024-10-15 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.059 (0.029)    | 0.753 (0.377)    | -         |    15.04 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           53 |      655 | 2024-10-12 | NewBALLS          | W   | 0.986      | -            | -                | -                | -         |     1.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           52 |      798 | 2024-10-06 | GamerLegion       | L   | 0.946      | -            | -                | -                | -         |   -13.46 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           51 |      829 | 2024-10-05 | ECSTATIC          | W   | 0.940      | 0.435        | -                | 0.848 (0.346)    | -         |    13.26 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           50 |      869 | 2024-10-04 | DMS               | W   | 0.933      | -            | -                | -                | -         |     7.38 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           49 |     1345 | 2024-09-22 | Nemiga            | L   | 0.851      | -            | -                | -                | -         |    -5.28 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |     1362 | 2024-09-21 | Nexus             | L   | 0.846      | -            | -                | -                | -         |   -22.36 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |     1369 | 2024-09-21 | devils.one        | W   | 0.845      | -            | -                | -                | -         |     4.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |     1416 | 2024-09-19 | CPH Wolves        | L   | 0.834      | -            | -                | -                | -         |   -20.00 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |     1430 | 2024-09-19 | Nemiga            | L   | 0.832      | -            | -                | -                | -         |    -5.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |     1484 | 2024-09-17 | The Suspect       | W   | 0.820      | -            | -                | -                | -         |     3.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |     1507 | 2024-09-16 | Permitta          | L   | 0.813      | -            | -                | -                | -         |   -16.00 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |     1530 | 2024-09-15 | K27               | W   | 0.806      | -            | -                | -                | -         |     1.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |     1538 | 2024-09-15 | Johnny Speeds     | L   | 0.806      | -            | -                | -                | -         |   -17.04 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |     1548 | 2024-09-15 | Spotless          | W   | 0.805      | -            | -                | -                | -         |     0.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     1787 | 2024-09-06 | B8                | W   | 0.747      | 0.500        | 0.162 (0.061)    | 0.888 (0.332)    | -         |    15.07 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     2141 | 2024-08-27 | FURIA             | L   | 0.679      | -            | -                | -                | -         |    -1.71 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     2178 | 2024-08-26 | Eternal Fire      | L   | 0.674      | -            | -                | -                | -         |    -0.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     2250 | 2024-08-25 | FURIA             | W   | 0.667      | -            | -                | -                | 1 (0.667) |    19.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     2310 | 2024-08-23 | Nemiga            | W   | 0.652      | 0.143        | 0.457 (0.043)    | -                | -         |    16.98 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     2335 | 2024-08-22 | Cloud9            | L   | 0.645      | -            | -                | -                | -         |   -13.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     2375 | 2024-08-21 | Rebels            | W   | 0.640      | -            | -                | -                | -         |     5.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     2404 | 2024-08-21 | Insilio           | W   | 0.638      | -            | -                | -                | -         |     4.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     2439 | 2024-08-20 | PARIVISION        | L   | 0.633      | -            | -                | -                | -         |   -10.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     2622 | 2024-08-13 | SINNERS           | W   | 0.587      | 0.500        | 0.090 (0.027)    | -                | -         |     9.47 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           29 |     2672 | 2024-08-12 | KOI               | W   | 0.580      | -            | -                | -                | -         |     3.32 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           28 |     2752 | 2024-08-09 | Nemiga            | L   | 0.560      | -            | -                | -                | -         |    -3.20 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           27 |     2820 | 2024-08-07 | Zero Tenacity     | W   | 0.546      | -            | -                | -                | -         |     7.15 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           26 |     2867 | 2024-08-06 | GUN5              | W   | 0.540      | -            | -                | -                | -         |     4.82 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           25 |     2902 | 2024-08-05 | Johnny Speeds     | W   | 0.532      | -            | -                | -                | -         |     7.71 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           24 |     2938 | 2024-08-04 | Insilio           | W   | 0.525      | -            | -                | -                | -         |     4.93 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           23 |     2964 | 2024-08-03 | GUN5              | W   | 0.519      | -            | -                | -                | -         |     4.84 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           22 |     2993 | 2024-08-02 | 9INE              | W   | 0.513      | -            | -                | -                | -         |     5.89 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           21 |     3006 | 2024-08-02 | Illuminar         | W   | 0.511      | -            | -                | -                | -         |     7.92 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           20 |     3027 | 2024-08-01 | PARIVISION        | L   | 0.507      | -            | -                | -                | -         |    -7.72 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           19 |     3119 | 2024-07-30 | TSM               | L   | 0.494      | -            | -                | -                | -         |   -10.82 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           18 |     3129 | 2024-07-30 | Insilio           | W   | 0.493      | -            | -                | -                | -         |     4.80 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           17 |     3187 | 2024-07-28 | QUAZAR            | W   | 0.481      | -            | -                | -                | -         |     1.43 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           16 |     3353 | 2024-07-23 | Betera            | W   | 0.447      | -            | -                | -                | -         |     0.91 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           15 |     3584 | 2024-07-17 | 3DMAX             | L   | 0.408      | -            | -                | -                | -         |    -1.14 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           14 |     4110 | 2024-06-10 | Aurora            | L   | 0.159      | -            | -                | -                | -         |    -2.20 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           13 |     4112 | 2024-06-10 | SINNERS           | W   | 0.158      | -            | -                | -                | -         |     3.10 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           12 |     4117 | 2024-06-10 | 3DMAX             | L   | 0.158      | -            | -                | -                | -         |    -0.38 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           11 |     4151 | 2024-06-09 | RUSH B            | L   | 0.153      | -            | -                | -                | -         |    -3.87 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           10 |     4160 | 2024-06-09 | PARIVISION        | L   | 0.152      | -            | -                | -                | -         |    -2.49 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            9 |     4166 | 2024-06-09 | SAW               | W   | 0.152      | -            | -                | -                | -         |     4.56 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            8 |     4176 | 2024-06-09 | Monte             | W   | 0.151      | -            | -                | -                | -         |     0.53 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            7 |     4439 | 2024-06-04 | Sangal            | L   | 0.120      | -            | -                | -                | -         |    -0.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            6 |     4663 | 2024-05-26 | MOUZ NXT          | W   | 0.060      | -            | -                | -                | -         |     0.36 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            5 |     4667 | 2024-05-26 | 1WIN              | W   | 0.059      | -            | -                | -                | -         |     0.23 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            4 |     4681 | 2024-05-25 | SovvyKiNG         | W   | 0.054      | -            | -                | -                | -         |     0.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            3 |     4707 | 2024-05-24 | SINNERS           | W   | 0.045      | -            | -                | -                | -         |     0.91 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            2 |     4836 | 2024-05-20 | BLEED             | L   | 0.020      | -            | -                | -                | -         |    -0.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            1 |     4889 | 2024-05-18 | Passion UA        | W   | 0.006      | -            | -                | -                | -         |     0.09 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,285.28)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $500.00        | $500.00         |
| 2024-11-11 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-11-10 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-10-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-06 |      0.947 | $5,000.00      | $4,736.97       |
| 2024-09-24 |      0.866 | $4,000.00      | $3,462.56       |
| 2024-06-09 |      0.154 | $5,000.00      | $769.15         |
| 2024-05-26 |      0.060 | $22,000.00     | $1,316.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
