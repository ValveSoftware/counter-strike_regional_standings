### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [82](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [57]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  935.9<br />
<br />
Final Rank Value (935.9) = Starting Rank Value (930.4) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.4
- 400 + ( ( 0.277 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 930.4


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
|           41 |       68 | 2024-12-14 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -13.08 | adamS, dav1g, mopoz, sausol, stadodo  |
|           40 |       95 | 2024-12-13 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -9.40 | adamS, dav1g, mopoz, sausol, stadodo  |
|           39 |      119 | 2024-12-11 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -20.13 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      132 | 2024-12-10 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -12.34 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      134 | 2024-12-10 | TSM               | W   | 1.000      | 0.371        | 0.039 (0.014)    | 0.587 (0.217)    | 0 (0.000) |    14.11 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      189 | 2024-12-07 | FAVBET            | W   | 1.000      | 0.435        | 0.056 (0.024)    | 0.972 (0.423)    | 0 (0.000) |    15.58 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      216 | 2024-12-06 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -17.22 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      237 | 2024-12-05 | Apogee            | W   | 1.000      | 0.371        | -                | 0.248 (0.092)    | 0 (0.000) |    11.53 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      272 | 2024-12-04 | Gaimin Gladiators | W   | 1.000      | 0.435        | 0.063 (0.027)    | 0.931 (0.404)    | 0 (0.000) |    18.29 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      326 | 2024-12-01 | Gaimin Gladiators | W   | 1.000      | 0.371        | 0.063 (0.023)    | 0.931 (0.345)    | 0 (0.000) |    19.90 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      398 | 2024-11-28 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -8.94 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      410 | 2024-11-27 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -12.33 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      413 | 2024-11-27 | TNL               | W   | 1.000      | 0.333        | 0.024 (0.008)    | 0.216 (0.072)    | 0 (0.000) |     9.45 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      422 | 2024-11-26 | Gaimin Gladiators | W   | 1.000      | 0.333        | 0.063 (0.021)    | 0.931 (0.310)    | 0 (0.000) |    19.52 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      438 | 2024-11-25 | 9INE              | W   | 1.000      | 0.333        | 0.065 (0.022)    | 0.906 (0.302)    | 0 (0.000) |    18.42 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      591 | 2024-11-17 | GTZ               | L   | 0.993      | -            | -                | -                | -         |   -11.34 | adamS, dav1g, deLonge, mopoz, stadodo |
|           25 |      619 | 2024-11-16 | EXSAD             | W   | 0.986      | -            | -                | -                | 1 (0.986) |     3.35 | adamS, dav1g, deLonge, mopoz, stadodo |
|           24 |     1014 | 2024-10-30 | ECSTATIC          | L   | 0.875      | -            | -                | -                | -         |   -10.51 | adamS, dav1g, JUST, mopoz, stadodo    |
|           23 |     1017 | 2024-10-30 | Illuminar         | W   | 0.874      | 0.333        | 0.015 (0.004)    | 0.509 (0.148)    | 0 (0.000) |    13.68 | adamS, dav1g, JUST, mopoz, stadodo    |
|           22 |     1021 | 2024-10-30 | Metizport         | L   | 0.873      | -            | -                | -                | -         |    -3.77 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1549 | 2024-10-05 | Rhyno             | L   | 0.705      | -            | -                | -                | -         |    -5.94 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1648 | 2024-10-02 | NAVI Junior       | L   | 0.687      | -            | -                | -                | -         |    -6.83 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1694 | 2024-10-01 | Preasy            | W   | 0.681      | -            | -                | -                | -         |     5.34 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     2498 | 2024-09-06 | Wildcard          | L   | 0.514      | -            | -                | -                | -         |    -1.67 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     2554 | 2024-09-05 | The MongolZ       | L   | 0.505      | -            | -                | -                | -         |    -0.10 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2603 | 2024-09-03 | G2                | L   | 0.494      | -            | -                | -                | -         |    -0.04 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     3007 | 2024-08-23 | TSM               | L   | 0.420      | -            | -                | -                | -         |    -5.86 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     3014 | 2024-08-23 | UNiTY             | L   | 0.419      | -            | -                | -                | -         |    -5.49 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3049 | 2024-08-22 | SINNERS           | L   | 0.412      | -            | -                | -                | -         |    -2.92 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3082 | 2024-08-21 | Monte             | W   | 0.406      | 0.143        | 0.065 (0.004)    | -                | -         |     8.36 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3130 | 2024-08-21 | ENCE              | W   | 0.404      | 0.143        | 0.296 (0.017)    | -                | -         |    10.74 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3173 | 2024-08-19 | Monte             | L   | 0.393      | -            | -                | -                | -         |    -4.20 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3180 | 2024-08-19 | Gaimin Gladiators | W   | 0.393      | 0.143        | -                | 0.931 (0.052)    | -         |     6.61 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3277 | 2024-08-15 | HOTU              | L   | 0.366      | -            | -                | -                | -         |    -8.46 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3327 | 2024-08-13 | B8                | L   | 0.354      | -            | -                | -                | -         |    -2.35 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3381 | 2024-08-12 | 9 Pandas          | L   | 0.347      | -            | -                | -                | -         |    -2.57 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3569 | 2024-08-06 | Sashi             | L   | 0.307      | -            | -                | -                | -         |    -3.49 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3791 | 2024-07-31 | Zero Tenacity     | L   | 0.267      | -            | -                | -                | -         |    -2.48 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     3952 | 2024-07-26 | EYEBALLERS        | W   | 0.233      | -            | -                | -                | -         |     2.21 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     4222 | 2024-07-18 | Monte             | L   | 0.181      | -            | -                | -                | -         |    -2.08 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4363 | 2024-07-16 | Insilio           | W   | 0.167      | -            | -                | -                | -         |     1.91 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,353.37)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-11-17 |      0.993 | $3,197.00      | $3,175.48       |
| 2024-10-20 |      0.806 | $1,500.00      | $1,209.26       |
| 2024-10-06 |      0.713 | $1,117.00      | $796.34         |
| 2024-09-22 |      0.621 | $3,500.00      | $2,172.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
