### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [83](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  937.6<br />
<br />
Final Rank Value (937.6) = Starting Rank Value (942.3) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 942.3
- 400 + ( ( 0.273 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 942.3


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
|           40 |      207 | 2024-12-14 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -12.84 | adamS, dav1g, mopoz, sausol, stadodo  |
|           39 |      234 | 2024-12-13 | GUN5              | L   | 0.992      | -            | -                | -                | -         |    -9.15 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      258 | 2024-12-11 | Endpoint          | L   | 0.981      | -            | -                | -                | -         |   -20.74 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      271 | 2024-12-10 | Spirit Academy    | L   | 0.974      | -            | -                | -                | -         |   -12.11 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      273 | 2024-12-10 | TSM               | W   | 0.973      | 0.371        | 0.035 (0.013)    | 0.425 (0.153)    | 0 (0.000) |    12.18 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      328 | 2024-12-07 | FAVBET            | W   | 0.954      | 0.435        | 0.072 (0.030)    | 0.894 (0.370)    | 0 (0.000) |    14.15 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      355 | 2024-12-06 | 9INE              | L   | 0.947      | -            | -                | -                | -         |   -16.10 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      376 | 2024-12-05 | Apogee            | W   | 0.940      | 0.371        | 0.024 (0.008)    | 0.399 (0.139)    | 0 (0.000) |    13.19 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      411 | 2024-12-04 | Gaimin Gladiators | W   | 0.933      | 0.435        | 0.080 (0.032)    | 0.871 (0.353)    | 0 (0.000) |    17.06 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      465 | 2024-12-01 | Gaimin Gladiators | W   | 0.913      | 0.371        | 0.080 (0.027)    | 0.871 (0.295)    | 0 (0.000) |    18.07 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      537 | 2024-11-28 | GUN5              | L   | 0.894      | -            | -                | -                | -         |    -7.81 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      549 | 2024-11-27 | Gaimin Gladiators | L   | 0.887      | -            | -                | -                | -         |   -11.32 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      552 | 2024-11-27 | TNL               | W   | 0.887      | 0.333        | 0.035 (0.010)    | 0.209 (0.062)    | 0 (0.000) |     8.93 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      561 | 2024-11-26 | Gaimin Gladiators | W   | 0.882      | 0.333        | 0.080 (0.023)    | 0.871 (0.256)    | 0 (0.000) |    16.79 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      577 | 2024-11-25 | 9INE              | W   | 0.874      | 0.333        | 0.123 (0.036)    | 1.000 (0.291)    | 0 (0.000) |    16.04 | adamS, dav1g, mopoz, sausol, stadodo  |
|           25 |      730 | 2024-11-17 | Rhyno             | L   | 0.821      | -            | -                | -                | -         |   -10.27 | adamS, dav1g, deLonge, mopoz, stadodo |
|           24 |      758 | 2024-11-16 | EXSAD             | W   | 0.814      | -            | -                | -                | 1 (0.814) |     2.77 | adamS, dav1g, deLonge, mopoz, stadodo |
|           23 |     1153 | 2024-10-30 | ECSTATIC          | L   | 0.702      | -            | -                | -                | -         |    -8.72 | adamS, dav1g, JUST, mopoz, stadodo    |
|           22 |     1156 | 2024-10-30 | Illuminar         | W   | 0.701      | 0.333        | 0.018 (0.004)    | 0.478 (0.112)    | 0 (0.000) |    11.20 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1160 | 2024-10-30 | Metizport         | L   | 0.701      | -            | -                | -                | -         |    -2.51 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1688 | 2024-10-05 | Rhyno             | L   | 0.533      | -            | -                | -                | -         |   -11.39 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1787 | 2024-10-02 | NAVI Junior       | L   | 0.515      | -            | -                | -                | -         |    -5.22 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     1833 | 2024-10-01 | Preasy            | W   | 0.508      | -            | -                | -                | -         |     4.43 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     2637 | 2024-09-06 | Wildcard          | L   | 0.341      | -            | -                | -                | -         |    -0.88 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2693 | 2024-09-05 | The MongolZ       | L   | 0.333      | -            | -                | -                | -         |    -0.06 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     2742 | 2024-09-03 | G2                | L   | 0.321      | -            | -                | -                | -         |    -0.03 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     3146 | 2024-08-23 | TSM               | L   | 0.248      | -            | -                | -                | -         |    -4.24 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3153 | 2024-08-23 | UNiTY             | L   | 0.247      | -            | -                | -                | -         |    -3.54 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3188 | 2024-08-22 | SINNERS           | L   | 0.239      | -            | -                | -                | -         |    -1.96 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3221 | 2024-08-21 | Monte             | W   | 0.234      | -            | -                | -                | -         |     4.59 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3269 | 2024-08-21 | ENCE              | W   | 0.232      | 0.143        | 0.338 (0.011)    | -                | -         |     5.95 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3312 | 2024-08-19 | Monte             | L   | 0.221      | -            | -                | -                | -         |    -2.61 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3319 | 2024-08-19 | Gaimin Gladiators | W   | 0.220      | 0.143        | -                | 0.871 (0.027)    | -         |     3.63 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3416 | 2024-08-15 | HOTU              | L   | 0.194      | -            | -                | -                | -         |    -4.64 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3466 | 2024-08-13 | B8                | L   | 0.182      | -            | -                | -                | -         |    -1.40 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3520 | 2024-08-12 | 9 Pandas          | L   | 0.175      | -            | -                | -                | -         |    -4.02 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3708 | 2024-08-06 | Sashi             | L   | 0.135      | -            | -                | -                | -         |    -1.66 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     3930 | 2024-07-31 | Zero Tenacity     | L   | 0.094      | -            | -                | -                | -         |    -1.05 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     4091 | 2024-07-26 | EYEBALLERS        | W   | 0.060      | -            | -                | -                | -         |     0.75 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4361 | 2024-07-18 | Monte             | L   | 0.008      | -            | -                | -                | -         |    -0.10 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,182.46)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.887 | $5,000.00      | $4,435.33       |
| 2024-11-17 |      0.821 | $3,197.00      | $2,624.14       |
| 2024-10-20 |      0.634 | $1,500.00      | $950.58         |
| 2024-10-06 |      0.540 | $1,117.00      | $603.71         |
| 2024-09-22 |      0.448 | $3,500.00      | $1,568.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
