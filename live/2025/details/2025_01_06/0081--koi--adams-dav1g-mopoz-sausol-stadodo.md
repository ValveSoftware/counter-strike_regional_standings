### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [81](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  939.5<br />
<br />
Final Rank Value (939.5) = Starting Rank Value (944.4) + Head To Head Adjustments (-4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.4
- 400 + ( ( 0.275 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 944.4


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
|           41 |      166 | 2024-12-14 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -12.88 | adamS, dav1g, mopoz, sausol, stadodo  |
|           40 |      193 | 2024-12-13 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -9.33 | adamS, dav1g, mopoz, sausol, stadodo  |
|           39 |      217 | 2024-12-11 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -21.16 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      230 | 2024-12-10 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -12.96 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      232 | 2024-12-10 | TSM               | W   | 1.000      | 0.371        | 0.035 (0.013)    | 0.460 (0.170)    | 0 (0.000) |    12.85 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      287 | 2024-12-07 | FAVBET            | W   | 1.000      | 0.435        | 0.066 (0.029)    | 0.896 (0.390)    | 0 (0.000) |    14.80 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      314 | 2024-12-06 | 9INE              | L   | 0.993      | -            | -                | -                | -         |   -17.01 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      335 | 2024-12-05 | Apogee            | W   | 0.986      | 0.371        | 0.022 (0.008)    | 0.385 (0.141)    | 0 (0.000) |    13.65 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      370 | 2024-12-04 | Gaimin Gladiators | W   | 0.979      | 0.435        | 0.075 (0.032)    | 0.876 (0.373)    | 0 (0.000) |    17.92 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      424 | 2024-12-01 | Gaimin Gladiators | W   | 0.960      | 0.371        | 0.075 (0.027)    | 0.876 (0.311)    | 0 (0.000) |    19.07 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      496 | 2024-11-28 | GUN5              | L   | 0.940      | -            | -                | -                | -         |    -8.33 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      508 | 2024-11-27 | Gaimin Gladiators | L   | 0.934      | -            | -                | -                | -         |   -11.78 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      511 | 2024-11-27 | TNL               | W   | 0.933      | 0.333        | 0.032 (0.010)    | 0.207 (0.064)    | 0 (0.000) |     9.24 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      520 | 2024-11-26 | Gaimin Gladiators | W   | 0.928      | 0.333        | 0.075 (0.023)    | 0.876 (0.271)    | 0 (0.000) |    17.77 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      536 | 2024-11-25 | 9INE              | W   | 0.920      | 0.333        | 0.115 (0.035)    | 1.000 (0.307)    | 0 (0.000) |    16.86 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      689 | 2024-11-17 | Rhyno             | L   | 0.867      | -            | -                | -                | -         |   -11.01 | adamS, dav1g, deLonge, mopoz, stadodo |
|           25 |      717 | 2024-11-16 | EXSAD             | W   | 0.860      | -            | -                | -                | 1 (0.860) |     2.90 | adamS, dav1g, deLonge, mopoz, stadodo |
|           24 |     1112 | 2024-10-30 | ECSTATIC          | L   | 0.749      | -            | -                | -                | -         |    -9.32 | adamS, dav1g, JUST, mopoz, stadodo    |
|           23 |     1115 | 2024-10-30 | Illuminar         | W   | 0.747      | 0.333        | 0.017 (0.004)    | 0.477 (0.119)    | 0 (0.000) |    11.86 | adamS, dav1g, JUST, mopoz, stadodo    |
|           22 |     1119 | 2024-10-30 | Metizport         | L   | 0.747      | -            | -                | -                | -         |    -2.88 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1647 | 2024-10-05 | Rhyno             | L   | 0.579      | -            | -                | -                | -         |   -12.23 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1746 | 2024-10-02 | NAVI Junior       | L   | 0.561      | -            | -                | -                | -         |    -5.76 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1792 | 2024-10-01 | Preasy            | W   | 0.554      | -            | -                | -                | -         |     4.22 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     2596 | 2024-09-06 | Wildcard          | L   | 0.388      | -            | -                | -                | -         |    -1.40 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     2652 | 2024-09-05 | The MongolZ       | L   | 0.379      | -            | -                | -                | -         |    -0.06 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2701 | 2024-09-03 | G2                | L   | 0.368      | -            | -                | -                | -         |    -0.03 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     3105 | 2024-08-23 | TSM               | L   | 0.294      | -            | -                | -                | -         |    -4.85 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     3112 | 2024-08-23 | UNiTY             | L   | 0.293      | -            | -                | -                | -         |    -4.21 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3147 | 2024-08-22 | SINNERS           | L   | 0.285      | -            | -                | -                | -         |    -2.40 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3180 | 2024-08-21 | Monte             | W   | 0.280      | -            | -                | -                | -         |     5.48 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3228 | 2024-08-21 | ENCE              | W   | 0.278      | 0.143        | 0.324 (0.013)    | -                | -         |     7.17 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3271 | 2024-08-19 | Monte             | L   | 0.267      | -            | -                | -                | -         |    -3.16 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3278 | 2024-08-19 | Gaimin Gladiators | W   | 0.267      | 0.143        | -                | 0.876 (0.033)    | -         |     4.38 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3375 | 2024-08-15 | HOTU              | L   | 0.240      | -            | -                | -                | -         |    -5.75 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3425 | 2024-08-13 | B8                | L   | 0.228      | -            | -                | -                | -         |    -1.75 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3479 | 2024-08-12 | 9 Pandas          | L   | 0.221      | -            | -                | -                | -         |    -1.81 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3667 | 2024-08-06 | Sashi             | L   | 0.181      | -            | -                | -                | -         |    -2.19 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3889 | 2024-07-31 | Zero Tenacity     | L   | 0.140      | -            | -                | -                | -         |    -1.51 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     4050 | 2024-07-26 | EYEBALLERS        | W   | 0.107      | -            | -                | -                | -         |     0.96 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     4320 | 2024-07-18 | Monte             | L   | 0.055      | -            | -                | -                | -         |    -0.67 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4461 | 2024-07-16 | Insilio           | W   | 0.041      | -            | -                | -                | -         |     0.41 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,844.19)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.933 | $5,000.00      | $4,666.48       |
| 2024-11-17 |      0.867 | $3,197.00      | $2,771.94       |
| 2024-10-20 |      0.680 | $1,500.00      | $1,019.93       |
| 2024-10-06 |      0.587 | $1,117.00      | $655.35         |
| 2024-09-22 |      0.494 | $3,500.00      | $1,730.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
