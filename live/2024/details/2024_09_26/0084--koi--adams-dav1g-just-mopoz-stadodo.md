### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [84](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [62]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  895.7<br />
<br />
Final Rank Value (895.7) = Starting Rank Value (898.6) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.6
- 400 + ( ( 0.264 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 898.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      621 | 2024-09-06 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -6.18 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |      677 | 2024-09-05 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |      726 | 2024-09-03 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.14 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1130 | 2024-08-23 | TSM               | L   | 0.974      | -            | -                | -                | -         |    -9.90 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     1137 | 2024-08-23 | UNiTY             | L   | 0.973      | -            | -                | -                | -         |   -10.30 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     1172 | 2024-08-22 | SINNERS           | L   | 0.965      | -            | -                | -                | -         |    -7.34 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     1205 | 2024-08-21 | Monte             | W   | 0.960      | 0.143        | 0.024 (0.003)    | 0.896 (0.123)    | 0 (0.000) |    18.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     1253 | 2024-08-21 | ENCE              | W   | 0.958      | 0.143        | 0.103 (0.014)    | 0.277 (0.038)    | 0 (0.000) |    22.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1296 | 2024-08-19 | Monte             | L   | 0.947      | -            | -                | -                | -         |   -10.67 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1303 | 2024-08-19 | Gaimin Gladiators | W   | 0.947      | 0.143        | 0.020 (0.003)    | 0.583 (0.079)    | 0 (0.000) |    14.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1400 | 2024-08-15 | HOTU              | L   | 0.920      | -            | -                | -                | -         |   -19.23 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1450 | 2024-08-13 | B8                | L   | 0.908      | -            | -                | -                | -         |    -8.42 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1504 | 2024-08-12 | 9 Pandas          | L   | 0.901      | -            | -                | -                | -         |    -8.50 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1692 | 2024-08-06 | Sashi             | L   | 0.861      | -            | -                | -                | -         |    -9.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     1914 | 2024-07-31 | Zero Tenacity     | L   | 0.820      | -            | -                | -                | -         |    -7.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2075 | 2024-07-26 | EYEBALLERS        | W   | 0.787      | 0.500        | -                | 0.498 (0.196)    | 0 (0.000) |     5.28 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2345 | 2024-07-18 | Monte             | L   | 0.734      | -            | -                | -                | -         |   -12.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2486 | 2024-07-16 | Insilio           | W   | 0.720      | 0.500        | 0.032 (0.012)    | 0.804 (0.290)    | 0 (0.000) |    11.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2753 | 2024-06-16 | 9z                | L   | 0.520      | -            | -                | -                | -         |    -1.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2805 | 2024-06-14 | RED Canids        | W   | 0.509      | 0.548        | 0.070 (0.020)    | 0.624 (0.174)    | 1 (0.509) |    11.86 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2808 | 2024-06-14 | Imperial          | W   | 0.509      | 0.548        | 0.158 (0.044)    | 0.606 (0.169)    | 1 (0.509) |    13.20 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2965 | 2024-06-09 | Sangal            | L   | 0.474      | -            | -                | -                | -         |    -1.88 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3159 | 2024-06-06 | SINNERS           | W   | 0.454      | 0.500        | 0.151 (0.034)    | 1.000 (0.227)    | 0 (0.000) |    11.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3221 | 2024-06-05 | 3DMAX             | W   | 0.447      | 0.500        | 0.401 (0.090)    | 0.849 (0.190)    | 0 (0.000) |    13.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3353 | 2024-06-01 | ENCE              | L   | 0.420      | -            | -                | -                | -         |    -2.87 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3361 | 2024-06-01 | Zero Tenacity     | L   | 0.419      | -            | -                | -                | -         |    -3.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     4028 | 2024-05-09 | B8                | L   | 0.265      | -            | -                | -                | -         |    -2.51 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     4190 | 2024-05-01 | Zero Tenacity     | L   | 0.212      | -            | -                | -                | -         |    -2.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     4510 | 2024-04-18 | ex-Guild Eagles   | L   | 0.127      | -            | -                | -                | -         |    -3.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     4519 | 2024-04-18 | fnatic            | W   | 0.127      | 0.143        | 0.248 (0.004)    | -                | 0 (0.000) |     3.55 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4589 | 2024-04-16 | BLEED             | L   | 0.114      | -            | -                | -                | -         |    -2.40 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4722 | 2024-04-10 | RUSH B            | W   | 0.074      | -            | -                | -                | -         |     0.90 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4776 | 2024-04-09 | Aurora            | W   | 0.068      | 0.500        | 0.188 (0.006)    | 0.585 (0.020)    | -         |     1.90 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4782 | 2024-04-09 | Apeks             | L   | 0.067      | -            | -                | -                | -         |    -1.59 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4810 | 2024-04-08 | GUN5              | W   | 0.060      | -            | -                | -                | -         |     0.11 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4815 | 2024-04-08 | fnatic            | L   | 0.059      | -            | -                | -                | -         |    -0.20 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4916 | 2024-04-04 | NOM               | W   | 0.033      | -            | -                | -                | -         |     0.12 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4950 | 2024-04-03 | 9INE              | W   | 0.027      | -            | -                | -                | -         |     0.09 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4987 | 2024-04-02 | TSM               | W   | 0.021      | -            | -                | -                | -         |     0.11 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,346.94)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-09-20 |      1.000 | $500.00        | $500.00         |
| 2024-06-16 |      0.522 | $7,000.00      | $3,656.57       |
| 2024-06-09 |      0.474 | $12,000.00     | $5,690.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
