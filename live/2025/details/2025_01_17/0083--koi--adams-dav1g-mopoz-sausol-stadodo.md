### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [83](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  932.2<br />
<br />
Final Rank Value (932.2) = Starting Rank Value (938.4) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.199[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.4
- 400 + ( ( 0.271 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 938.4


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
|           39 |      211 | 2024-12-14 | Aurora Young Blud | L   | 0.971      | -            | -                | -                | -         |   -12.62 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      238 | 2024-12-13 | GUN5              | L   | 0.964      | -            | -                | -                | -         |    -8.93 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      262 | 2024-12-11 | Endpoint          | L   | 0.953      | -            | -                | -                | -         |   -20.49 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      275 | 2024-12-10 | Spirit Academy    | L   | 0.946      | -            | -                | -                | -         |   -12.31 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      277 | 2024-12-10 | TSM               | W   | 0.945      | 0.371        | 0.034 (0.012)    | 0.409 (0.143)    | 0 (0.000) |    11.58 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      332 | 2024-12-07 | FAVBET            | W   | 0.926      | 0.435        | 0.073 (0.029)    | 0.894 (0.360)    | 0 (0.000) |    13.62 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      359 | 2024-12-06 | 9INE              | L   | 0.918      | -            | -                | -                | -         |   -15.67 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      380 | 2024-12-05 | Apogee            | W   | 0.911      | 0.371        | 0.025 (0.008)    | 0.411 (0.139)    | 0 (0.000) |    12.88 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      415 | 2024-12-04 | Gaimin Gladiators | W   | 0.905      | 0.435        | 0.080 (0.032)    | 0.873 (0.343)    | 0 (0.000) |    16.38 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      469 | 2024-12-01 | Gaimin Gladiators | W   | 0.885      | 0.371        | 0.080 (0.026)    | 0.873 (0.286)    | 0 (0.000) |    17.30 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      541 | 2024-11-28 | GUN5              | L   | 0.866      | -            | -                | -                | -         |    -7.62 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      553 | 2024-11-27 | Gaimin Gladiators | L   | 0.859      | -            | -                | -                | -         |   -11.22 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      556 | 2024-11-27 | TNL               | W   | 0.859      | 0.333        | 0.036 (0.010)    | 0.210 (0.060)    | 0 (0.000) |     8.67 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      565 | 2024-11-26 | Gaimin Gladiators | W   | 0.853      | 0.333        | 0.080 (0.023)    | 0.873 (0.248)    | 0 (0.000) |    15.97 | adamS, dav1g, mopoz, sausol, stadodo  |
|           25 |      581 | 2024-11-25 | 9INE              | W   | 0.845      | 0.333        | 0.125 (0.035)    | 1.000 (0.282)    | 0 (0.000) |    15.36 | adamS, dav1g, mopoz, sausol, stadodo  |
|           24 |      734 | 2024-11-17 | Rhyno             | L   | 0.792      | -            | -                | -                | -         |    -9.94 | adamS, dav1g, deLonge, mopoz, stadodo |
|           23 |      762 | 2024-11-16 | EXSAD             | W   | 0.786      | -            | -                | -                | 1 (0.786) |     2.71 | adamS, dav1g, deLonge, mopoz, stadodo |
|           22 |     1157 | 2024-10-30 | ECSTATIC          | L   | 0.674      | -            | -                | -                | -         |    -8.55 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1160 | 2024-10-30 | Illuminar         | W   | 0.673      | 0.333        | 0.018 (0.004)    | 0.481 (0.108)    | 0 (0.000) |    10.71 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1164 | 2024-10-30 | Metizport         | L   | 0.672      | -            | -                | -                | -         |    -2.31 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1692 | 2024-10-05 | Rhyno             | L   | 0.504      | -            | -                | -                | -         |   -10.95 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     1791 | 2024-10-02 | NAVI Junior       | L   | 0.486      | -            | -                | -                | -         |    -5.00 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     1837 | 2024-10-01 | Preasy            | W   | 0.480      | -            | -                | -                | -         |     4.23 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2641 | 2024-09-06 | Wildcard          | L   | 0.313      | -            | -                | -                | -         |    -0.82 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     2697 | 2024-09-05 | The MongolZ       | L   | 0.304      | -            | -                | -                | -         |    -0.05 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     2746 | 2024-09-03 | G2                | L   | 0.293      | -            | -                | -                | -         |    -0.03 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3150 | 2024-08-23 | TSM               | L   | 0.219      | -            | -                | -                | -         |    -3.86 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3157 | 2024-08-23 | UNiTY             | L   | 0.218      | -            | -                | -                | -         |    -3.17 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3192 | 2024-08-22 | SINNERS           | L   | 0.211      | -            | -                | -                | -         |    -1.85 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3225 | 2024-08-21 | Monte             | W   | 0.205      | -            | -                | -                | -         |     3.99 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3273 | 2024-08-21 | ENCE              | W   | 0.203      | 0.143        | 0.337 (0.010)    | -                | -         |     5.17 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3316 | 2024-08-19 | Monte             | L   | 0.192      | -            | -                | -                | -         |    -2.31 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3323 | 2024-08-19 | Gaimin Gladiators | W   | 0.192      | 0.143        | -                | 0.873 (0.024)    | -         |     3.14 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3420 | 2024-08-15 | HOTU              | L   | 0.165      | -            | -                | -                | -         |    -3.97 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3470 | 2024-08-13 | B8                | L   | 0.153      | -            | -                | -                | -         |    -1.22 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3524 | 2024-08-12 | 9 Pandas          | L   | 0.146      | -            | -                | -                | -         |    -3.41 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     3712 | 2024-08-06 | Sashi             | L   | 0.106      | -            | -                | -                | -         |    -1.33 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     3934 | 2024-07-31 | Zero Tenacity     | L   | 0.066      | -            | -                | -                | -         |    -0.74 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4095 | 2024-07-26 | EYEBALLERS        | W   | 0.032      | -            | -                | -                | -         |     0.40 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,774.96)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.859 | $5,000.00      | $4,292.99       |
| 2024-11-17 |      0.792 | $3,197.00      | $2,533.13       |
| 2024-10-20 |      0.605 | $1,500.00      | $907.88         |
| 2024-10-06 |      0.512 | $1,117.00      | $571.91         |
| 2024-09-22 |      0.420 | $3,500.00      | $1,469.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
