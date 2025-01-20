### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [82](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  933.6<br />
<br />
Final Rank Value (933.6) = Starting Rank Value (938.8) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.8
- 400 + ( ( 0.272 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 938.8


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
|           39 |      234 | 2024-12-14 | Aurora Young Blud | L   | 0.977      | -            | -                | -                | -         |   -12.62 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      261 | 2024-12-13 | GUN5              | L   | 0.970      | -            | -                | -                | -         |    -8.95 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      285 | 2024-12-11 | Endpoint          | L   | 0.959      | -            | -                | -                | -         |   -20.50 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      298 | 2024-12-10 | Spirit Academy    | L   | 0.952      | -            | -                | -                | -         |   -12.35 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      300 | 2024-12-10 | TSM               | W   | 0.951      | 0.371        | 0.034 (0.012)    | 0.412 (0.145)    | 0 (0.000) |    11.78 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      355 | 2024-12-07 | FAVBET            | W   | 0.932      | 0.435        | 0.073 (0.030)    | 0.894 (0.362)    | 0 (0.000) |    13.71 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      382 | 2024-12-06 | 9INE              | L   | 0.924      | -            | -                | -                | -         |   -15.71 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      403 | 2024-12-05 | Apogee            | W   | 0.917      | 0.371        | 0.025 (0.008)    | 0.408 (0.139)    | 0 (0.000) |    12.95 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      438 | 2024-12-04 | Gaimin Gladiators | W   | 0.911      | 0.435        | 0.080 (0.032)    | 0.873 (0.345)    | 0 (0.000) |    16.59 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      492 | 2024-12-01 | Gaimin Gladiators | W   | 0.891      | 0.371        | 0.080 (0.026)    | 0.873 (0.288)    | 0 (0.000) |    17.53 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      564 | 2024-11-28 | GUN5              | L   | 0.872      | -            | -                | -                | -         |    -7.65 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      576 | 2024-11-27 | Gaimin Gladiators | L   | 0.865      | -            | -                | -                | -         |   -11.16 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      579 | 2024-11-27 | TNL               | W   | 0.865      | 0.333        | 0.036 (0.010)    | 0.210 (0.061)    | 0 (0.000) |     8.72 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      588 | 2024-11-26 | Gaimin Gladiators | W   | 0.859      | 0.333        | 0.080 (0.023)    | 0.873 (0.250)    | 0 (0.000) |    16.25 | adamS, dav1g, mopoz, sausol, stadodo  |
|           25 |      604 | 2024-11-25 | 9INE              | W   | 0.851      | 0.333        | 0.125 (0.035)    | 1.000 (0.284)    | 0 (0.000) |    15.56 | adamS, dav1g, mopoz, sausol, stadodo  |
|           24 |      757 | 2024-11-17 | Rhyno             | L   | 0.798      | -            | -                | -                | -         |   -10.02 | adamS, dav1g, deLonge, mopoz, stadodo |
|           23 |      785 | 2024-11-16 | EXSAD             | W   | 0.792      | -            | -                | -                | 1 (0.792) |     2.73 | adamS, dav1g, deLonge, mopoz, stadodo |
|           22 |     1180 | 2024-10-30 | ECSTATIC          | L   | 0.680      | -            | -                | -                | -         |    -8.57 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1183 | 2024-10-30 | Illuminar         | W   | 0.679      | 0.333        | 0.018 (0.004)    | 0.480 (0.109)    | 0 (0.000) |    10.83 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1187 | 2024-10-30 | Metizport         | L   | 0.678      | -            | -                | -                | -         |    -2.33 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1715 | 2024-10-05 | Rhyno             | L   | 0.510      | -            | -                | -                | -         |   -10.98 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     1814 | 2024-10-02 | NAVI Junior       | L   | 0.492      | -            | -                | -                | -         |    -5.04 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     1860 | 2024-10-01 | Preasy            | W   | 0.486      | -            | -                | -                | -         |     4.29 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2664 | 2024-09-06 | Wildcard          | L   | 0.319      | -            | -                | -                | -         |    -0.83 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     2720 | 2024-09-05 | The MongolZ       | L   | 0.310      | -            | -                | -                | -         |    -0.05 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     2769 | 2024-09-03 | G2                | L   | 0.299      | -            | -                | -                | -         |    -0.03 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3173 | 2024-08-23 | TSM               | L   | 0.225      | -            | -                | -                | -         |    -3.91 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3180 | 2024-08-23 | UNiTY             | L   | 0.224      | -            | -                | -                | -         |    -3.25 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3215 | 2024-08-22 | SINNERS           | L   | 0.217      | -            | -                | -                | -         |    -1.82 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3248 | 2024-08-21 | Monte             | W   | 0.212      | -            | -                | -                | -         |     4.12 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3296 | 2024-08-21 | ENCE              | W   | 0.210      | 0.143        | 0.338 (0.010)    | -                | -         |     5.34 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3339 | 2024-08-19 | Monte             | L   | 0.198      | -            | -                | -                | -         |    -2.37 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3346 | 2024-08-19 | Gaimin Gladiators | W   | 0.198      | 0.143        | -                | 0.873 (0.025)    | -         |     3.25 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3443 | 2024-08-15 | HOTU              | L   | 0.172      | -            | -                | -                | -         |    -4.11 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3493 | 2024-08-13 | B8                | L   | 0.159      | -            | -                | -                | -         |    -1.25 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3547 | 2024-08-12 | 9 Pandas          | L   | 0.152      | -            | -                | -                | -         |    -3.54 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     3735 | 2024-08-06 | Sashi             | L   | 0.112      | -            | -                | -                | -         |    -1.40 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     3957 | 2024-07-31 | Zero Tenacity     | L   | 0.072      | -            | -                | -                | -         |    -0.81 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4118 | 2024-07-26 | EYEBALLERS        | W   | 0.038      | -            | -                | -                | -         |     0.48 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,862.38)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.865 | $5,000.00      | $4,323.52       |
| 2024-11-17 |      0.798 | $3,197.00      | $2,552.65       |
| 2024-10-20 |      0.611 | $1,500.00      | $917.04         |
| 2024-10-06 |      0.518 | $1,117.00      | $578.73         |
| 2024-09-22 |      0.426 | $3,500.00      | $1,490.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
