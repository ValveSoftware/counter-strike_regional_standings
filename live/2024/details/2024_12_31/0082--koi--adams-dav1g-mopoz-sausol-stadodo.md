### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [82](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [58]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  940.3<br />
<br />
Final Rank Value (940.3) = Starting Rank Value (943.9) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.098[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.9
- 400 + ( ( 0.279 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 943.9


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
|           41 |      151 | 2024-12-14 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -12.96 | adamS, dav1g, mopoz, sausol, stadodo  |
|           40 |      178 | 2024-12-13 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -9.42 | adamS, dav1g, mopoz, sausol, stadodo  |
|           39 |      202 | 2024-12-11 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -20.93 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      215 | 2024-12-10 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -12.77 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      217 | 2024-12-10 | TSM               | W   | 1.000      | 0.371        | 0.037 (0.014)    | 0.519 (0.192)    | 0 (0.000) |    13.36 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      272 | 2024-12-07 | FAVBET            | W   | 1.000      | 0.435        | 0.061 (0.027)    | 0.937 (0.407)    | 0 (0.000) |    14.96 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      299 | 2024-12-06 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -17.16 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      320 | 2024-12-05 | Apogee            | W   | 1.000      | 0.371        | 0.020 (0.007)    | 0.387 (0.144)    | 0 (0.000) |    13.76 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      355 | 2024-12-04 | Gaimin Gladiators | W   | 1.000      | 0.435        | 0.071 (0.031)    | 0.923 (0.401)    | 0 (0.000) |    18.43 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      409 | 2024-12-01 | Gaimin Gladiators | W   | 1.000      | 0.371        | 0.071 (0.026)    | 0.923 (0.342)    | 0 (0.000) |    20.04 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      481 | 2024-11-28 | GUN5              | L   | 0.993      | -            | -                | -                | -         |    -8.86 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      493 | 2024-11-27 | Gaimin Gladiators | L   | 0.986      | -            | -                | -                | -         |   -12.21 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      496 | 2024-11-27 | TNL               | W   | 0.986      | 0.333        | 0.029 (0.009)    | 0.214 (0.070)    | 0 (0.000) |     9.61 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      505 | 2024-11-26 | Gaimin Gladiators | W   | 0.980      | 0.333        | 0.071 (0.023)    | 0.923 (0.302)    | 0 (0.000) |    18.98 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      521 | 2024-11-25 | 9INE              | W   | 0.973      | 0.333        | 0.108 (0.035)    | 1.000 (0.324)    | 0 (0.000) |    17.96 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      674 | 2024-11-17 | Rhyno             | L   | 0.920      | -            | -                | -                | -         |   -11.63 | adamS, dav1g, deLonge, mopoz, stadodo |
|           25 |      702 | 2024-11-16 | EXSAD             | W   | 0.913      | -            | -                | -                | 1 (0.913) |     3.07 | adamS, dav1g, deLonge, mopoz, stadodo |
|           24 |     1097 | 2024-10-30 | ECSTATIC          | L   | 0.801      | -            | -                | -                | -         |    -9.81 | adamS, dav1g, JUST, mopoz, stadodo    |
|           23 |     1100 | 2024-10-30 | Illuminar         | W   | 0.800      | 0.333        | 0.016 (0.004)    | 0.497 (0.133)    | 0 (0.000) |    12.71 | adamS, dav1g, JUST, mopoz, stadodo    |
|           22 |     1104 | 2024-10-30 | Metizport         | L   | 0.799      | -            | -                | -                | -         |    -3.20 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1632 | 2024-10-05 | Rhyno             | L   | 0.632      | -            | -                | -                | -         |   -13.11 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1731 | 2024-10-02 | NAVI Junior       | L   | 0.613      | -            | -                | -                | -         |    -6.31 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1777 | 2024-10-01 | Preasy            | W   | 0.607      | -            | -                | -                | -         |     4.60 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     2581 | 2024-09-06 | Wildcard          | L   | 0.440      | -            | -                | -                | -         |    -1.56 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     2637 | 2024-09-05 | The MongolZ       | L   | 0.432      | -            | -                | -                | -         |    -0.08 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2686 | 2024-09-03 | G2                | L   | 0.420      | -            | -                | -                | -         |    -0.04 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     3090 | 2024-08-23 | TSM               | L   | 0.346      | -            | -                | -                | -         |    -5.37 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     3097 | 2024-08-23 | UNiTY             | L   | 0.346      | -            | -                | -                | -         |    -4.86 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3132 | 2024-08-22 | SINNERS           | L   | 0.338      | -            | -                | -                | -         |    -2.69 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3165 | 2024-08-21 | Monte             | W   | 0.333      | -            | -                | -                | -         |     6.58 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3213 | 2024-08-21 | ENCE              | W   | 0.331      | 0.143        | 0.311 (0.015)    | -                | -         |     8.61 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3256 | 2024-08-19 | Monte             | L   | 0.320      | -            | -                | -                | -         |    -3.70 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3263 | 2024-08-19 | Gaimin Gladiators | W   | 0.319      | 0.143        | -                | 0.923 (0.042)    | -         |     5.28 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3360 | 2024-08-15 | HOTU              | L   | 0.293      | -            | -                | -                | -         |    -6.95 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3410 | 2024-08-13 | B8                | L   | 0.280      | -            | -                | -                | -         |    -2.08 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3464 | 2024-08-12 | 9 Pandas          | L   | 0.273      | -            | -                | -                | -         |    -2.18 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3652 | 2024-08-06 | Sashi             | L   | 0.233      | -            | -                | -                | -         |    -2.77 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3874 | 2024-07-31 | Zero Tenacity     | L   | 0.193      | -            | -                | -                | -         |    -1.99 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     4035 | 2024-07-26 | EYEBALLERS        | W   | 0.159      | -            | -                | -                | -         |     1.43 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     4305 | 2024-07-18 | Monte             | L   | 0.107      | -            | -                | -                | -         |    -1.31 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4446 | 2024-07-16 | Insilio           | W   | 0.093      | -            | -                | -                | -         |     0.96 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,597.12)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.986 | $5,000.00      | $4,929.49       |
| 2024-11-17 |      0.920 | $3,197.00      | $2,940.11       |
| 2024-10-20 |      0.733 | $1,500.00      | $1,098.83       |
| 2024-10-06 |      0.639 | $1,117.00      | $714.10         |
| 2024-09-22 |      0.547 | $3,500.00      | $1,914.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
