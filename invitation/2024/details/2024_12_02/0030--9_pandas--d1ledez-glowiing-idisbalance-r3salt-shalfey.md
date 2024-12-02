### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [30](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1273.3<br />
<br />
Final Rank Value (1273.3) = Starting Rank Value (1194.2) + Head To Head Adjustments (79.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.499[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.364[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

The average of these factors is 0.396<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1194.2
- 400 + ( ( 0.396 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1194.2


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
|           72 |      156 | 2024-11-23 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -19.30 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           71 |      185 | 2024-11-22 | Aurora            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.76 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           70 |      216 | 2024-11-21 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -8.53 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           69 |      227 | 2024-11-21 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.65 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           68 |      237 | 2024-11-20 | Astralis          | W   | 1.000      | 0.143        | 0.317 (0.045)    | -                | 1 (1.000) |    24.33 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           67 |      487 | 2024-11-11 | ECLOT             | W   | 1.000      | 0.371        | 0.198 (0.073)    | 1.000 (0.371)    | 0 (0.000) |    14.72 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           66 |      499 | 2024-11-10 | ECLOT             | W   | 1.000      | 0.384        | 0.198 (0.076)    | 1.000 (0.384)    | 0 (0.000) |    16.08 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           65 |      503 | 2024-11-10 | 500               | L   | 1.000      | -            | -                | -                | -         |   -22.11 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           64 |      521 | 2024-11-09 | Gaimin Gladiators | W   | 1.000      | 0.384        | -                | 0.921 (0.354)    | 0 (0.000) |     8.81 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           63 |      525 | 2024-11-09 | NAVI Junior       | W   | 1.000      | 0.371        | 0.149 (0.055)    | 0.999 (0.370)    | 0 (0.000) |    11.48 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           62 |      540 | 2024-11-08 | Fire Flux         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.18 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      554 | 2024-11-07 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -21.83 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      559 | 2024-11-07 | ECLOT             | W   | 1.000      | 0.371        | 0.198 (0.073)    | 1.000 (0.371)    | 0 (0.000) |    14.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      585 | 2024-11-05 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.65 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      594 | 2024-11-05 | Permitta          | W   | 1.000      | 0.371        | -                | 1.000 (0.371)    | -         |     7.03 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      632 | 2024-11-03 | Gaimin Gladiators | W   | 1.000      | 0.384        | -                | 0.921 (0.354)    | -         |     9.35 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      655 | 2024-11-02 | Endpoint          | W   | 1.000      | -            | -                | -                | -         |     5.05 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      681 | 2024-11-01 | NAVI Junior       | W   | 0.992      | 0.371        | 0.149 (0.055)    | 0.999 (0.367)    | -         |    11.69 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      702 | 2024-10-31 | 9INE              | W   | 0.986      | -            | -                | -                | -         |    10.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           53 |      721 | 2024-10-30 | Johnny Speeds     | W   | 0.979      | 0.384        | 0.100 (0.038)    | 1.000 (0.376)    | -         |    12.58 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           52 |      755 | 2024-10-28 | Verdant           | W   | 0.966      | -            | -                | -                | -         |     3.47 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           51 |      817 | 2024-10-25 | Fire Flux         | W   | 0.947      | -            | -                | -                | -         |     2.47 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           50 |      890 | 2024-10-20 | ECLOT             | L   | 0.912      | -            | -                | -                | -         |   -12.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           49 |      956 | 2024-10-17 | SAW               | L   | 0.894      | -            | -                | -                | -         |    -3.30 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |      989 | 2024-10-16 | TSM               | W   | 0.888      | -            | -                | -                | -         |     7.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |     1015 | 2024-10-15 | Zero Tenacity     | W   | 0.881      | 0.500        | 0.082 (0.036)    | 0.724 (0.319)    | -         |    13.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |     1057 | 2024-10-12 | NewBALLS          | W   | 0.860      | -            | -                | -                | -         |     0.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |     1200 | 2024-10-06 | GamerLegion       | L   | 0.820      | -            | -                | -                | -         |    -8.56 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |     1231 | 2024-10-05 | ECSTATIC          | W   | 0.814      | -            | -                | -                | -         |     8.85 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |     1271 | 2024-10-04 | DMS               | W   | 0.807      | -            | -                | -                | -         |     4.37 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |     1747 | 2024-09-22 | Nemiga            | L   | 0.725      | -            | -                | -                | -         |    -5.48 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |     1764 | 2024-09-21 | Nexus             | L   | 0.720      | -            | -                | -                | -         |   -10.67 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |     1771 | 2024-09-21 | devils.one        | W   | 0.719      | -            | -                | -                | -         |     2.17 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     1818 | 2024-09-19 | CPH Wolves        | L   | 0.708      | -            | -                | -                | -         |   -20.68 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1832 | 2024-09-19 | Nemiga            | L   | 0.706      | -            | -                | -                | -         |    -5.87 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1886 | 2024-09-17 | Kosovo            | W   | 0.694      | -            | -                | -                | -         |     1.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1909 | 2024-09-16 | Permitta          | L   | 0.687      | -            | -                | -                | -         |   -12.31 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     1932 | 2024-09-15 | K27               | W   | 0.680      | -            | -                | -                | -         |     0.82 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     1940 | 2024-09-15 | Johnny Speeds     | L   | 0.680      | -            | -                | -                | -         |   -13.40 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     1950 | 2024-09-15 | Spotless          | W   | 0.679      | -            | -                | -                | -         |     0.20 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     2189 | 2024-09-06 | B8                | W   | 0.621      | 0.500        | 0.172 (0.053)    | -                | -         |    10.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     2543 | 2024-08-27 | FURIA             | L   | 0.552      | -            | -                | -                | -         |    -2.35 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     2580 | 2024-08-26 | Eternal Fire      | L   | 0.548      | -            | -                | -                | -         |    -1.71 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     2652 | 2024-08-25 | FURIA             | W   | 0.541      | -            | -                | -                | 1 (0.541) |    14.93 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     2712 | 2024-08-23 | Nemiga            | W   | 0.526      | 0.143        | 0.490 (0.037)    | -                | -         |    12.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     2737 | 2024-08-22 | Cloud9            | L   | 0.519      | -            | -                | -                | -         |    -9.01 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     2777 | 2024-08-21 | Rebels            | W   | 0.514      | -            | -                | -                | -         |     3.02 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     2806 | 2024-08-21 | Insilio           | W   | 0.512      | -            | -                | -                | -         |     2.61 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     2841 | 2024-08-20 | PARIVISION        | L   | 0.507      | -            | -                | -                | -         |   -11.04 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     3024 | 2024-08-13 | SINNERS           | W   | 0.461      | -            | -                | -                | -         |     7.03 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           22 |     3074 | 2024-08-12 | KOI               | W   | 0.454      | -            | -                | -                | -         |     2.35 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           21 |     3154 | 2024-08-09 | Nemiga            | L   | 0.434      | -            | -                | -                | -         |    -3.33 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           20 |     3222 | 2024-08-07 | Zero Tenacity     | W   | 0.420      | -            | -                | -                | -         |     5.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           19 |     3269 | 2024-08-06 | GUN5              | W   | 0.414      | -            | -                | -                | -         |     2.49 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           18 |     3304 | 2024-08-05 | Johnny Speeds     | W   | 0.406      | -            | -                | -                | -         |     6.32 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           17 |     3340 | 2024-08-04 | Insilio           | W   | 0.399      | -            | -                | -                | -         |     2.30 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           16 |     3366 | 2024-08-03 | GUN5              | W   | 0.393      | -            | -                | -                | -         |     2.43 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           15 |     3395 | 2024-08-02 | 9INE              | W   | 0.387      | -            | -                | -                | -         |     2.91 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           14 |     3408 | 2024-08-02 | Illuminar         | W   | 0.385      | -            | -                | -                | -         |     3.94 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           13 |     3429 | 2024-08-01 | PARIVISION        | L   | 0.381      | -            | -                | -                | -         |    -8.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           12 |     3521 | 2024-07-30 | TSM               | L   | 0.368      | -            | -                | -                | -         |    -9.04 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           11 |     3531 | 2024-07-30 | Insilio           | W   | 0.367      | -            | -                | -                | -         |     2.05 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           10 |     3589 | 2024-07-28 | QUAZAR            | W   | 0.355      | -            | -                | -                | -         |     0.62 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            9 |     3755 | 2024-07-23 | Betera            | W   | 0.321      | -            | -                | -                | -         |     0.63 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            8 |     3986 | 2024-07-17 | 3DMAX             | L   | 0.281      | -            | -                | -                | -         |    -1.10 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            7 |     4512 | 2024-06-10 | Aurora            | L   | 0.033      | -            | -                | -                | -         |    -0.66 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            6 |     4514 | 2024-06-10 | SINNERS           | W   | 0.032      | -            | -                | -                | -         |     0.55 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            5 |     4519 | 2024-06-10 | 3DMAX             | L   | 0.032      | -            | -                | -                | -         |    -0.12 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            4 |     4553 | 2024-06-09 | RUSH B            | L   | 0.026      | -            | -                | -                | -         |    -0.75 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            3 |     4562 | 2024-06-09 | PARIVISION        | L   | 0.026      | -            | -                | -                | -         |    -0.61 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            2 |     4568 | 2024-06-09 | SAW               | W   | 0.026      | -            | -                | -                | -         |     0.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            1 |     4578 | 2024-06-09 | Monte             | W   | 0.025      | -            | -                | -                | -         |     0.04 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,545.72)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $500.00        | $500.00         |
| 2024-11-11 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-11-10 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-10-20 |      0.913 | $6,000.00      | $5,480.61       |
| 2024-10-06 |      0.821 | $5,000.00      | $4,106.74       |
| 2024-09-24 |      0.740 | $4,000.00      | $2,958.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
