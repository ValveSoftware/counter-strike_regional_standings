### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [82](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  931.1<br />
<br />
Final Rank Value (931.1) = Starting Rank Value (937.1) + Head To Head Adjustments (-6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.1
- 400 + ( ( 0.270 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 937.1


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
|           39 |      220 | 2024-12-14 | Aurora Young Blud | L   | 0.958      | -            | -                | -                | -         |   -12.49 | adamS, dav1g, mopoz, sausol, stadodo  |
|           38 |      247 | 2024-12-13 | GUN5              | L   | 0.950      | -            | -                | -                | -         |    -8.80 | adamS, dav1g, mopoz, sausol, stadodo  |
|           37 |      271 | 2024-12-11 | Endpoint          | L   | 0.939      | -            | -                | -                | -         |   -20.25 | adamS, dav1g, mopoz, sausol, stadodo  |
|           36 |      284 | 2024-12-10 | Spirit Academy    | L   | 0.932      | -            | -                | -                | -         |   -12.18 | adamS, dav1g, mopoz, sausol, stadodo  |
|           35 |      286 | 2024-12-10 | TSM               | W   | 0.931      | 0.371        | 0.034 (0.012)    | 0.401 (0.138)    | 0 (0.000) |    11.34 | adamS, dav1g, mopoz, sausol, stadodo  |
|           34 |      341 | 2024-12-07 | FAVBET            | W   | 0.912      | 0.435        | 0.073 (0.029)    | 0.894 (0.354)    | 0 (0.000) |    13.40 | adamS, dav1g, mopoz, sausol, stadodo  |
|           33 |      368 | 2024-12-06 | 9INE              | L   | 0.905      | -            | -                | -                | -         |   -15.43 | adamS, dav1g, mopoz, sausol, stadodo  |
|           32 |      389 | 2024-12-05 | Apogee            | W   | 0.898      | 0.371        | 0.025 (0.008)    | 0.418 (0.139)    | 0 (0.000) |    12.73 | adamS, dav1g, mopoz, sausol, stadodo  |
|           31 |      424 | 2024-12-04 | Gaimin Gladiators | W   | 0.891      | 0.435        | 0.080 (0.031)    | 0.875 (0.339)    | 0 (0.000) |    16.10 | adamS, dav1g, mopoz, sausol, stadodo  |
|           30 |      478 | 2024-12-01 | Gaimin Gladiators | W   | 0.871      | 0.371        | 0.080 (0.026)    | 0.875 (0.282)    | 0 (0.000) |    16.98 | adamS, dav1g, mopoz, sausol, stadodo  |
|           29 |      550 | 2024-11-28 | GUN5              | L   | 0.852      | -            | -                | -                | -         |    -7.50 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |      562 | 2024-11-27 | Gaimin Gladiators | L   | 0.845      | -            | -                | -                | -         |   -11.11 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |      565 | 2024-11-27 | TNL               | W   | 0.845      | 0.333        | 0.036 (0.010)    | 0.211 (0.059)    | 0 (0.000) |     8.55 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |      574 | 2024-11-26 | Gaimin Gladiators | W   | 0.840      | 0.333        | 0.080 (0.023)    | 0.875 (0.245)    | 0 (0.000) |    15.66 | adamS, dav1g, mopoz, sausol, stadodo  |
|           25 |      590 | 2024-11-25 | 9INE              | W   | 0.832      | 0.333        | 0.125 (0.035)    | 1.000 (0.277)    | 0 (0.000) |    15.08 | adamS, dav1g, mopoz, sausol, stadodo  |
|           24 |      743 | 2024-11-17 | Rhyno             | L   | 0.779      | -            | -                | -                | -         |    -9.78 | adamS, dav1g, deLonge, mopoz, stadodo |
|           23 |      771 | 2024-11-16 | EXSAD             | W   | 0.772      | -            | -                | -                | 1 (0.772) |     2.68 | adamS, dav1g, deLonge, mopoz, stadodo |
|           22 |     1166 | 2024-10-30 | ECSTATIC          | L   | 0.660      | -            | -                | -                | -         |    -8.42 | adamS, dav1g, JUST, mopoz, stadodo    |
|           21 |     1169 | 2024-10-30 | Illuminar         | W   | 0.659      | 0.333        | 0.018 (0.004)    | 0.483 (0.106)    | 0 (0.000) |    10.50 | adamS, dav1g, JUST, mopoz, stadodo    |
|           20 |     1173 | 2024-10-30 | Metizport         | L   | 0.658      | -            | -                | -                | -         |    -2.25 | adamS, dav1g, JUST, mopoz, stadodo    |
|           19 |     1701 | 2024-10-05 | Rhyno             | L   | 0.491      | -            | -                | -                | -         |   -10.70 | adamS, dav1g, JUST, mopoz, stadodo    |
|           18 |     1800 | 2024-10-02 | NAVI Junior       | L   | 0.473      | -            | -                | -                | -         |    -4.89 | adamS, dav1g, JUST, mopoz, stadodo    |
|           17 |     1846 | 2024-10-01 | Preasy            | W   | 0.466      | -            | -                | -                | -         |     4.13 | adamS, dav1g, JUST, mopoz, stadodo    |
|           16 |     2650 | 2024-09-06 | Wildcard          | L   | 0.299      | -            | -                | -                | -         |    -0.78 | adamS, dav1g, JUST, mopoz, stadodo    |
|           15 |     2706 | 2024-09-05 | The MongolZ       | L   | 0.291      | -            | -                | -                | -         |    -0.05 | adamS, dav1g, JUST, mopoz, stadodo    |
|           14 |     2755 | 2024-09-03 | G2                | L   | 0.279      | -            | -                | -                | -         |    -0.02 | adamS, dav1g, JUST, mopoz, stadodo    |
|           13 |     3159 | 2024-08-23 | TSM               | L   | 0.206      | -            | -                | -                | -         |    -3.65 | adamS, dav1g, JUST, mopoz, stadodo    |
|           12 |     3166 | 2024-08-23 | UNiTY             | L   | 0.205      | -            | -                | -                | -         |    -2.99 | adamS, dav1g, JUST, mopoz, stadodo    |
|           11 |     3201 | 2024-08-22 | SINNERS           | L   | 0.197      | -            | -                | -                | -         |    -1.75 | adamS, dav1g, JUST, mopoz, stadodo    |
|           10 |     3234 | 2024-08-21 | Monte             | W   | 0.192      | -            | -                | -                | -         |     3.72 | adamS, dav1g, JUST, mopoz, stadodo    |
|            9 |     3282 | 2024-08-21 | ENCE              | W   | 0.190      | 0.143        | 0.336 (0.009)    | -                | -         |     4.80 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     3325 | 2024-08-19 | Monte             | L   | 0.179      | -            | -                | -                | -         |    -2.16 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     3332 | 2024-08-19 | Gaimin Gladiators | W   | 0.178      | 0.143        | -                | 0.875 (0.022)    | -         |     2.91 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     3429 | 2024-08-15 | HOTU              | L   | 0.152      | -            | -                | -                | -         |    -3.65 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     3479 | 2024-08-13 | B8                | L   | 0.140      | -            | -                | -                | -         |    -1.12 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     3533 | 2024-08-12 | 9 Pandas          | L   | 0.133      | -            | -                | -                | -         |    -3.12 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     3721 | 2024-08-06 | Sashi             | L   | 0.093      | -            | -                | -                | -         |    -1.16 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     3943 | 2024-07-31 | Zero Tenacity     | L   | 0.052      | -            | -                | -                | -         |    -0.59 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     4104 | 2024-07-26 | EYEBALLERS        | W   | 0.018      | -            | -                | -                | -         |     0.23 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,580.72)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.845 | $5,000.00      | $4,225.14       |
| 2024-11-17 |      0.779 | $3,197.00      | $2,489.75       |
| 2024-10-20 |      0.592 | $1,500.00      | $887.52         |
| 2024-10-06 |      0.498 | $1,117.00      | $556.75         |
| 2024-09-22 |      0.406 | $3,500.00      | $1,421.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
