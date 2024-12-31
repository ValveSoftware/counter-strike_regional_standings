### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [30](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1205.8<br />
<br />
Final Rank Value (1205.8) = Starting Rank Value (1128.0) + Head To Head Adjustments (77.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.504[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.243[<sup>2</sup>](#table1)

The average of these factors is 0.374<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1128.0
- 400 + ( ( 0.374 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1128.0


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
|           65 |      546 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.963      | -            | -                | -                | -         |   -19.09 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           64 |      575 | 2024-11-22 | Aurora            | W   | 0.956      | -            | -                | -                | 1 (0.956) |     7.03 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           63 |      606 | 2024-11-21 | Virtus.pro        | L   | 0.949      | -            | -                | -                | -         |   -10.46 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           62 |      617 | 2024-11-21 | G2                | L   | 0.945      | -            | -                | -                | -         |    -0.40 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      627 | 2024-11-20 | Astralis          | W   | 0.943      | 0.143        | 0.305 (0.041)    | -                | 1 (0.943) |    20.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      877 | 2024-11-11 | ECLOT             | W   | 0.878      | 0.371        | 0.252 (0.082)    | 1.000 (0.325)    | 0 (0.000) |    14.26 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      889 | 2024-11-10 | ECLOT             | W   | 0.873      | 0.384        | 0.252 (0.084)    | 1.000 (0.336)    | 0 (0.000) |    15.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      893 | 2024-11-10 | 500               | L   | 0.872      | -            | -                | -                | -         |   -18.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      911 | 2024-11-09 | Gaimin Gladiators | W   | 0.866      | 0.384        | -                | 0.923 (0.307)    | 0 (0.000) |     8.14 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      915 | 2024-11-09 | NAVI Junior       | W   | 0.865      | 0.371        | 0.180 (0.058)    | 1.000 (0.321)    | 0 (0.000) |    11.12 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      930 | 2024-11-08 | Fire Flux         | W   | 0.858      | -            | -                | -                | 0 (0.000) |     4.04 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      944 | 2024-11-07 | Aurora            | L   | 0.853      | -            | -                | -                | -         |   -20.19 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           53 |      949 | 2024-11-07 | ECLOT             | W   | 0.852      | 0.371        | 0.252 (0.079)    | 1.000 (0.316)    | 0 (0.000) |    13.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           52 |      975 | 2024-11-05 | Insilio           | W   | 0.840      | -            | -                | -                | 0 (0.000) |     2.25 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           51 |      984 | 2024-11-05 | los kogutos       | W   | 0.838      | 0.371        | -                | 0.989 (0.307)    | -         |     7.24 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           50 |     1022 | 2024-11-03 | Gaimin Gladiators | W   | 0.825      | 0.384        | -                | 0.923 (0.293)    | -         |     8.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           49 |     1045 | 2024-11-02 | Endpoint          | W   | 0.819      | -            | -                | -                | -         |     4.13 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |     1071 | 2024-11-01 | NAVI Junior       | W   | 0.812      | 0.371        | 0.180 (0.054)    | 1.000 (0.301)    | -         |    11.06 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |     1092 | 2024-10-31 | 9INE              | W   | 0.805      | 0.384        | 0.108 (0.033)    | 1.000 (0.309)    | -         |     9.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |     1111 | 2024-10-30 | Johnny Speeds     | W   | 0.799      | 0.384        | 0.102 (0.031)    | -                | -         |    10.34 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |     1145 | 2024-10-28 | Verdant           | W   | 0.785      | -            | -                | -                | -         |     4.83 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |     1207 | 2024-10-25 | Fire Flux         | W   | 0.766      | -            | -                | -                | -         |     4.29 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |     1280 | 2024-10-20 | ECLOT             | L   | 0.732      | -            | -                | -                | -         |    -8.75 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |     1346 | 2024-10-17 | SAW               | L   | 0.714      | -            | -                | -                | -         |    -4.14 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |     1379 | 2024-10-16 | TSM               | W   | 0.707      | -            | -                | -                | -         |     5.75 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |     1405 | 2024-10-15 | Zero Tenacity     | W   | 0.700      | 0.500        | 0.080 (0.028)    | -                | -         |    10.47 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     1447 | 2024-10-12 | NewBALLS          | W   | 0.679      | -            | -                | -                | -         |     0.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1590 | 2024-10-06 | GamerLegion       | L   | 0.640      | -            | -                | -                | -         |    -5.25 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1621 | 2024-10-05 | ECSTATIC          | W   | 0.633      | 0.435        | -                | 1.000 (0.275)    | -         |     7.47 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1661 | 2024-10-04 | DMS               | W   | 0.626      | -            | -                | -                | -         |     2.94 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     2137 | 2024-09-22 | Nemiga            | L   | 0.544      | -            | -                | -                | -         |    -4.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     2154 | 2024-09-21 | Nexus             | L   | 0.540      | -            | -                | -                | -         |    -4.44 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     2161 | 2024-09-21 | devils.one        | W   | 0.538      | -            | -                | -                | -         |     1.89 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     2208 | 2024-09-19 | CPH Wolves        | L   | 0.527      | -            | -                | -                | -         |   -13.44 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     2222 | 2024-09-19 | Nemiga            | L   | 0.525      | -            | -                | -                | -         |    -4.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     2276 | 2024-09-17 | Kosovo            | W   | 0.513      | -            | -                | -                | -         |     0.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     2299 | 2024-09-16 | los kogutos       | L   | 0.506      | -            | -                | -                | -         |    -8.31 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     2322 | 2024-09-15 | K27               | W   | 0.499      | -            | -                | -                | -         |     0.77 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     2330 | 2024-09-15 | Johnny Speeds     | L   | 0.499      | -            | -                | -                | -         |    -9.71 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     2340 | 2024-09-15 | Spotless          | W   | 0.498      | -            | -                | -                | -         |     0.23 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     2579 | 2024-09-06 | B8                | W   | 0.440      | 0.500        | 0.159 (0.035)    | -                | -         |     7.05 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     2933 | 2024-08-27 | FURIA             | L   | 0.372      | -            | -                | -                | -         |    -0.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     2970 | 2024-08-26 | Eternal Fire      | L   | 0.367      | -            | -                | -                | -         |    -2.01 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           22 |     3042 | 2024-08-25 | FURIA             | W   | 0.360      | -            | -                | -                | 1 (0.360) |    10.56 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           21 |     3102 | 2024-08-23 | Nemiga            | W   | 0.345      | -            | -                | -                | -         |     7.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           20 |     3127 | 2024-08-22 | Cloud9            | L   | 0.339      | -            | -                | -                | -         |    -6.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     3167 | 2024-08-21 | Rebels            | W   | 0.333      | -            | -                | -                | -         |     1.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     3196 | 2024-08-21 | Insilio           | W   | 0.332      | -            | -                | -                | -         |     1.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     3231 | 2024-08-20 | PARIVISION        | L   | 0.326      | -            | -                | -                | -         |    -7.63 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     3414 | 2024-08-13 | SINNERS           | W   | 0.280      | -            | -                | -                | -         |     4.16 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           15 |     3464 | 2024-08-12 | KOI               | W   | 0.273      | -            | -                | -                | -         |     2.18 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           14 |     3544 | 2024-08-09 | Nemiga            | L   | 0.253      | -            | -                | -                | -         |    -2.38 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           13 |     3612 | 2024-08-07 | Zero Tenacity     | W   | 0.239      | -            | -                | -                | -         |     3.13 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           12 |     3659 | 2024-08-06 | GUN5              | W   | 0.233      | -            | -                | -                | -         |     2.81 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           11 |     3694 | 2024-08-05 | Johnny Speeds     | W   | 0.225      | -            | -                | -                | -         |     3.23 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           10 |     3730 | 2024-08-04 | Insilio           | W   | 0.218      | -            | -                | -                | -         |     1.07 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            9 |     3756 | 2024-08-03 | GUN5              | W   | 0.212      | -            | -                | -                | -         |     2.63 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            8 |     3785 | 2024-08-02 | 9INE              | W   | 0.206      | -            | -                | -                | -         |     2.12 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            7 |     3798 | 2024-08-02 | Illuminar         | W   | 0.205      | -            | -                | -                | -         |     0.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            6 |     3819 | 2024-08-01 | PARIVISION        | L   | 0.200      | -            | -                | -                | -         |    -4.81 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            5 |     3911 | 2024-07-30 | TSM               | L   | 0.187      | -            | -                | -                | -         |    -4.62 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            4 |     3921 | 2024-07-30 | Insilio           | W   | 0.186      | -            | -                | -                | -         |     0.89 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            3 |     3979 | 2024-07-28 | QUAZAR            | W   | 0.174      | -            | -                | -                | -         |     0.35 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            2 |     4145 | 2024-07-23 | Betera            | W   | 0.140      | -            | -                | -                | -         |     0.34 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            1 |     4376 | 2024-07-17 | 3DMAX             | L   | 0.101      | -            | -                | -                | -         |    -0.41 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,852.97)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.886 | $500.00        | $443.03         |
| 2024-11-11 |      0.878 | $11,000.00     | $9,659.07       |
| 2024-11-10 |      0.873 | $12,500.00     | $10,918.40      |
| 2024-10-20 |      0.733 | $6,000.00      | $4,395.31       |
| 2024-10-06 |      0.640 | $5,000.00      | $3,202.32       |
| 2024-09-24 |      0.559 | $4,000.00      | $2,234.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
