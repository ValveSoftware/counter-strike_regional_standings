### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [29](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [20]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1213.3<br />
<br />
Final Rank Value (1213.3) = Starting Rank Value (1130.5) + Head To Head Adjustments (82.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.498[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.335[<sup>2</sup>](#table1)
- LAN Wins: 0.253[<sup>2</sup>](#table1)

The average of these factors is 0.381<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1130.5
- 400 + ( ( 0.381 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1130.5


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
|           65 |      463 | 2024-11-23 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -19.65 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           64 |      492 | 2024-11-22 | Aurora            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           63 |      523 | 2024-11-21 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -10.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           62 |      534 | 2024-11-21 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.45 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      544 | 2024-11-20 | Astralis          | W   | 1.000      | 0.143        | 0.293 (0.042)    | -                | 1 (1.000) |    22.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      794 | 2024-11-11 | ECLOT             | W   | 0.952      | 0.371        | 0.230 (0.081)    | 1.000 (0.353)    | 0 (0.000) |    14.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      806 | 2024-11-10 | ECLOT             | W   | 0.947      | 0.384        | 0.230 (0.084)    | 1.000 (0.364)    | 0 (0.000) |    16.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      810 | 2024-11-10 | 500               | L   | 0.945      | -            | -                | -                | -         |   -20.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      828 | 2024-11-09 | Gaimin Gladiators | W   | 0.940      | 0.384        | -                | 0.931 (0.336)    | 0 (0.000) |     8.82 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      832 | 2024-11-09 | NAVI Junior       | W   | 0.939      | 0.371        | 0.169 (0.059)    | 1.000 (0.348)    | 0 (0.000) |    11.89 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      847 | 2024-11-08 | Fire Flux         | W   | 0.932      | -            | -                | -                | 0 (0.000) |     4.04 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      861 | 2024-11-07 | Aurora            | L   | 0.927      | -            | -                | -                | -         |   -21.89 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           53 |      866 | 2024-11-07 | ECLOT             | W   | 0.925      | 0.371        | 0.230 (0.079)    | 1.000 (0.343)    | 0 (0.000) |    14.44 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           52 |      892 | 2024-11-05 | Insilio           | W   | 0.914      | -            | -                | -                | 0 (0.000) |     2.51 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           51 |      901 | 2024-11-05 | los kogutos       | W   | 0.912      | 0.371        | -                | 0.981 (0.332)    | -         |     7.27 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           50 |      939 | 2024-11-03 | Gaimin Gladiators | W   | 0.899      | 0.384        | -                | 0.931 (0.321)    | -         |     8.95 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           49 |      962 | 2024-11-02 | Endpoint          | W   | 0.893      | -            | -                | -                | -         |     4.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |      988 | 2024-11-01 | NAVI Junior       | W   | 0.885      | 0.371        | 0.169 (0.055)    | 1.000 (0.328)    | -         |    11.86 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |     1009 | 2024-10-31 | 9INE              | W   | 0.878      | -            | -                | -                | -         |    10.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |     1028 | 2024-10-30 | Johnny Speeds     | W   | 0.872      | 0.384        | 0.097 (0.032)    | 0.952 (0.319)    | -         |    11.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |     1062 | 2024-10-28 | Verdant           | W   | 0.859      | -            | -                | -                | -         |     4.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |     1124 | 2024-10-25 | Fire Flux         | W   | 0.839      | -            | -                | -                | -         |     4.41 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |     1197 | 2024-10-20 | ECLOT             | L   | 0.805      | -            | -                | -                | -         |   -10.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |     1263 | 2024-10-17 | SAW               | L   | 0.787      | -            | -                | -                | -         |    -3.98 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |     1296 | 2024-10-16 | TSM               | W   | 0.781      | -            | -                | -                | -         |     6.63 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |     1322 | 2024-10-15 | Zero Tenacity     | W   | 0.774      | 0.500        | 0.079 (0.031)    | -                | -         |    11.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     1364 | 2024-10-12 | NewBALLS          | W   | 0.753      | -            | -                | -                | -         |     0.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1507 | 2024-10-06 | GamerLegion       | L   | 0.713      | -            | -                | -                | -         |    -6.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1538 | 2024-10-05 | ECSTATIC          | W   | 0.706      | 0.435        | -                | 1.000 (0.307)    | -         |     8.42 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1578 | 2024-10-04 | DMS               | W   | 0.700      | -            | -                | -                | -         |     3.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     2054 | 2024-09-22 | Nemiga            | L   | 0.618      | -            | -                | -                | -         |    -5.42 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     2071 | 2024-09-21 | Nexus             | L   | 0.613      | -            | -                | -                | -         |    -6.71 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     2078 | 2024-09-21 | devils.one        | W   | 0.612      | -            | -                | -                | -         |     2.13 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     2125 | 2024-09-19 | CPH Wolves        | L   | 0.601      | -            | -                | -                | -         |   -15.33 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     2139 | 2024-09-19 | Nemiga            | L   | 0.599      | -            | -                | -                | -         |    -5.62 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     2193 | 2024-09-17 | Kosovo            | W   | 0.587      | -            | -                | -                | -         |     0.97 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     2216 | 2024-09-16 | los kogutos       | L   | 0.579      | -            | -                | -                | -         |    -9.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     2239 | 2024-09-15 | K27               | W   | 0.573      | -            | -                | -                | -         |     0.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     2247 | 2024-09-15 | Johnny Speeds     | L   | 0.572      | -            | -                | -                | -         |   -11.26 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     2257 | 2024-09-15 | Spotless          | W   | 0.571      | -            | -                | -                | -         |     0.25 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     2496 | 2024-09-06 | B8                | W   | 0.514      | 0.500        | 0.156 (0.040)    | -                | -         |     8.41 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     2850 | 2024-08-27 | FURIA             | L   | 0.445      | -            | -                | -                | -         |    -1.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     2887 | 2024-08-26 | Eternal Fire      | L   | 0.441      | -            | -                | -                | -         |    -2.06 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           22 |     2959 | 2024-08-25 | FURIA             | W   | 0.434      | -            | -                | -                | 1 (0.434) |    12.69 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           21 |     3019 | 2024-08-23 | Nemiga            | W   | 0.419      | 0.143        | 0.455 (0.027)    | -                | -         |     9.58 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           20 |     3044 | 2024-08-22 | Cloud9            | L   | 0.412      | -            | -                | -                | -         |    -7.33 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     3084 | 2024-08-21 | Rebels            | W   | 0.406      | -            | -                | -                | -         |     2.41 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     3113 | 2024-08-21 | Insilio           | W   | 0.405      | -            | -                | -                | -         |     1.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     3148 | 2024-08-20 | PARIVISION        | L   | 0.400      | -            | -                | -                | -         |    -9.00 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     3331 | 2024-08-13 | SINNERS           | W   | 0.354      | -            | -                | -                | -         |     5.36 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           15 |     3381 | 2024-08-12 | KOI               | W   | 0.347      | -            | -                | -                | -         |     2.57 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           14 |     3461 | 2024-08-09 | Nemiga            | L   | 0.326      | -            | -                | -                | -         |    -3.01 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           13 |     3529 | 2024-08-07 | Zero Tenacity     | W   | 0.313      | -            | -                | -                | -         |     4.22 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           12 |     3576 | 2024-08-06 | GUN5              | W   | 0.306      | -            | -                | -                | -         |     3.29 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           11 |     3611 | 2024-08-05 | Johnny Speeds     | W   | 0.298      | -            | -                | -                | -         |     4.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           10 |     3647 | 2024-08-04 | Insilio           | W   | 0.291      | -            | -                | -                | -         |     1.53 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            9 |     3673 | 2024-08-03 | GUN5              | W   | 0.286      | -            | -                | -                | -         |     3.17 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            8 |     3702 | 2024-08-02 | 9INE              | W   | 0.280      | -            | -                | -                | -         |     2.61 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            7 |     3715 | 2024-08-02 | Illuminar         | W   | 0.278      | -            | -                | -                | -         |     0.79 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            6 |     3736 | 2024-08-01 | PARIVISION        | L   | 0.274      | -            | -                | -                | -         |    -6.37 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            5 |     3828 | 2024-07-30 | TSM               | L   | 0.261      | -            | -                | -                | -         |    -6.34 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            4 |     3838 | 2024-07-30 | Insilio           | W   | 0.260      | -            | -                | -                | -         |     1.32 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            3 |     3896 | 2024-07-28 | QUAZAR            | W   | 0.247      | -            | -                | -                | -         |     0.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            2 |     4062 | 2024-07-23 | Betera            | W   | 0.214      | -            | -                | -                | -         |     0.52 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            1 |     4293 | 2024-07-17 | 3DMAX             | L   | 0.174      | -            | -                | -                | -         |    -0.64 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,724.27)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.960 | $500.00        | $479.84         |
| 2024-11-11 |      0.952 | $11,000.00     | $10,468.92      |
| 2024-11-10 |      0.947 | $12,500.00     | $11,838.69      |
| 2024-10-20 |      0.806 | $6,000.00      | $4,837.05       |
| 2024-10-06 |      0.714 | $5,000.00      | $3,570.44       |
| 2024-09-24 |      0.632 | $4,000.00      | $2,529.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
