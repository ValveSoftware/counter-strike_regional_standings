### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: Alv, d1Ledez, Krad, r3salt, shalfey<br />
Global Rank: [31](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1185.2<br />
<br />
Final Rank Value (1185.2) = Starting Rank Value (1132.2) + Head To Head Adjustments (53.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.258[<sup>2</sup>](#table1)
- LAN Wins: 0.229[<sup>2</sup>](#table1)

The average of these factors is 0.369<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1132.2
- 400 + ( ( 0.369 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1132.2


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
|           53 |       12 | 2025-01-14 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -2.42 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           52 |       16 | 2025-01-12 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -9.23 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           51 |       20 | 2025-01-11 | EYEBALLERS        | W   | 1.000      | 0.417        | -                | 0.563 (0.235)    | 0 (0.000) |     4.16 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           50 |       26 | 2025-01-10 | GenOne            | W   | 1.000      | 0.417        | -                | 0.573 (0.239)    | 0 (0.000) |     4.12 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           49 |      606 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.835      | -            | -                | -                | -         |   -16.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |      635 | 2024-11-22 | Aurora            | W   | 0.829      | -            | -                | -                | 1 (0.829) |     5.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |      666 | 2024-11-21 | Virtus.pro        | L   | 0.822      | -            | -                | -                | -         |   -10.12 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |      677 | 2024-11-21 | G2                | L   | 0.817      | -            | -                | -                | -         |    -0.33 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |      687 | 2024-11-20 | Astralis          | W   | 0.816      | 0.143        | 0.327 (0.038)    | -                | 1 (0.816) |    17.14 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |      937 | 2024-11-11 | ECLOT             | W   | 0.751      | 0.371        | 0.286 (0.080)    | 1.000 (0.278)    | 0 (0.000) |    13.11 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |      949 | 2024-11-10 | ECLOT             | W   | 0.746      | 0.384        | 0.286 (0.082)    | 1.000 (0.287)    | 0 (0.000) |    13.91 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |      953 | 2024-11-10 | 500               | L   | 0.744      | -            | -                | -                | -         |   -16.35 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |      971 | 2024-11-09 | Gaimin Gladiators | W   | 0.739      | 0.384        | -                | 0.873 (0.248)    | 0 (0.000) |     6.67 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |      975 | 2024-11-09 | NAVI Junior       | W   | 0.738      | 0.371        | 0.204 (0.056)    | 1.000 (0.273)    | 0 (0.000) |     9.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |      990 | 2024-11-08 | Fire Flux         | W   | 0.731      | -            | -                | -                | 0 (0.000) |     3.59 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1004 | 2024-11-07 | Aurora            | L   | 0.726      | -            | -                | -                | -         |   -17.45 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1009 | 2024-11-07 | ECLOT             | W   | 0.724      | 0.371        | 0.286 (0.077)    | 1.000 (0.268)    | -         |    13.01 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1035 | 2024-11-05 | Insilio           | W   | 0.713      | -            | -                | -                | -         |     1.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     1044 | 2024-11-05 | los kogutos       | W   | 0.711      | -            | -                | -                | -         |     7.12 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     1082 | 2024-11-03 | Gaimin Gladiators | W   | 0.698      | 0.384        | -                | 0.873 (0.234)    | -         |     6.65 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     1105 | 2024-11-02 | Endpoint          | W   | 0.692      | -            | -                | -                | -         |     3.24 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     1131 | 2024-11-01 | NAVI Junior       | W   | 0.684      | 0.371        | 0.204 (0.052)    | 1.000 (0.254)    | -         |     9.36 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     1152 | 2024-10-31 | 9INE              | W   | 0.677      | 0.384        | 0.125 (0.032)    | 1.000 (0.260)    | -         |     7.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     1171 | 2024-10-30 | Johnny Speeds     | W   | 0.671      | 0.384        | 0.109 (0.028)    | -                | -         |     8.61 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     1205 | 2024-10-28 | Verdant           | W   | 0.658      | -            | -                | -                | -         |     4.53 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     1267 | 2024-10-25 | Fire Flux         | W   | 0.638      | -            | -                | -                | -         |     3.67 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     1340 | 2024-10-20 | ECLOT             | L   | 0.604      | -            | -                | -                | -         |    -6.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     1406 | 2024-10-17 | SAW               | L   | 0.586      | -            | -                | -                | -         |    -4.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     1439 | 2024-10-16 | TSM               | W   | 0.580      | -            | -                | -                | -         |     4.06 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     1465 | 2024-10-15 | Zero Tenacity     | W   | 0.573      | 0.500        | 0.083 (0.024)    | -                | -         |     7.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     1507 | 2024-10-12 | NewBALLS          | W   | 0.552      | -            | -                | -                | -         |     0.66 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           22 |     1650 | 2024-10-06 | GamerLegion       | L   | 0.512      | -            | -                | -                | -         |    -3.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           21 |     1681 | 2024-10-05 | ECSTATIC          | W   | 0.505      | -            | -                | -                | -         |     5.70 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           20 |     1721 | 2024-10-04 | DMS               | W   | 0.499      | -            | -                | -                | -         |     1.97 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     2197 | 2024-09-22 | Nemiga            | L   | 0.417      | -            | -                | -                | -         |    -3.94 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     2214 | 2024-09-21 | Nexus             | L   | 0.412      | -            | -                | -                | -         |    -2.42 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     2221 | 2024-09-21 | devils.one        | W   | 0.411      | -            | -                | -                | -         |     1.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     2268 | 2024-09-19 | CPH Wolves        | L   | 0.400      | -            | -                | -                | -         |   -10.75 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           15 |     2282 | 2024-09-19 | Nemiga            | L   | 0.398      | -            | -                | -                | -         |    -3.91 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           14 |     2336 | 2024-09-17 | Kosovo            | W   | 0.386      | -            | -                | -                | -         |     0.54 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           13 |     2359 | 2024-09-16 | los kogutos       | L   | 0.379      | -            | -                | -                | -         |    -5.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           12 |     2382 | 2024-09-15 | K27               | W   | 0.372      | -            | -                | -                | -         |     0.54 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           11 |     2390 | 2024-09-15 | Johnny Speeds     | L   | 0.371      | -            | -                | -                | -         |    -7.25 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           10 |     2400 | 2024-09-15 | Spotless          | W   | 0.371      | -            | -                | -                | -         |     0.18 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            9 |     2639 | 2024-09-06 | B8                | W   | 0.313      | 0.500        | 0.163 (0.026)    | -                | -         |     4.85 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            8 |     2993 | 2024-08-27 | FURIA             | L   | 0.244      | -            | -                | -                | -         |    -0.57 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            7 |     3030 | 2024-08-26 | Eternal Fire      | L   | 0.240      | -            | -                | -                | -         |    -1.77 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            6 |     3102 | 2024-08-25 | FURIA             | W   | 0.233      | -            | -                | -                | 1 (0.233) |     6.82 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            5 |     3162 | 2024-08-23 | Nemiga            | W   | 0.218      | -            | -                | -                | -         |     4.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            4 |     3187 | 2024-08-22 | Cloud9            | L   | 0.211      | -            | -                | -                | -         |    -3.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            3 |     3227 | 2024-08-21 | Rebels            | W   | 0.205      | -            | -                | -                | -         |     0.98 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            2 |     3256 | 2024-08-21 | Insilio           | W   | 0.204      | -            | -                | -                | -         |     0.83 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            1 |     3291 | 2024-08-20 | PARIVISION        | L   | 0.199      | -            | -                | -                | -         |    -5.02 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,888.30)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-12 |      0.759 | $500.00        | $379.38         |
| 2024-11-11 |      0.751 | $11,000.00     | $8,258.78       |
| 2024-11-10 |      0.746 | $12,500.00     | $9,327.16       |
| 2024-10-20 |      0.605 | $6,000.00      | $3,631.52       |
| 2024-10-06 |      0.513 | $5,000.00      | $2,565.82       |
| 2024-09-24 |      0.431 | $4,000.00      | $1,725.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
