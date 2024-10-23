### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [95](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [67]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  874.2<br />
<br />
Final Rank Value (874.2) = Starting Rank Value (873.1) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.418[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 873.1
- 400 + ( ( 0.241 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 873.1


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
|           31 |      400 | 2024-10-05 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -14.29 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |      499 | 2024-10-02 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -11.39 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |      545 | 2024-10-01 | Preasy            | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.147 (0.049)    | 0 (0.000) |     6.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1349 | 2024-09-06 | Wildcard          | L   | 0.887      | -            | -                | -                | -         |    -3.72 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1405 | 2024-09-05 | The MongolZ       | L   | 0.878      | -            | -                | -                | -         |    -0.34 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1454 | 2024-09-03 | G2                | L   | 0.867      | -            | -                | -                | -         |    -0.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     1858 | 2024-08-23 | TSM               | L   | 0.793      | -            | -                | -                | -         |    -7.91 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     1865 | 2024-08-23 | UNiTY             | L   | 0.792      | -            | -                | -                | -         |    -7.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     1900 | 2024-08-22 | SINNERS           | L   | 0.785      | -            | -                | -                | -         |    -4.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     1933 | 2024-08-21 | Monte             | W   | 0.779      | 0.143        | 0.025 (0.003)    | 0.810 (0.090)    | 0 (0.000) |    15.23 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     1981 | 2024-08-21 | ENCE              | W   | 0.777      | 0.143        | 0.442 (0.049)    | 0.257 (0.029)    | 0 (0.000) |    23.07 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2024 | 2024-08-19 | Monte             | L   | 0.766      | -            | -                | -                | -         |    -8.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2031 | 2024-08-19 | Gaimin Gladiators | W   | 0.766      | 0.143        | 0.019 (0.002)    | 0.639 (0.070)    | 0 (0.000) |    12.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2128 | 2024-08-15 | HOTU              | L   | 0.739      | -            | -                | -                | -         |   -14.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     2178 | 2024-08-13 | B8                | L   | 0.727      | -            | -                | -                | -         |    -4.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     2232 | 2024-08-12 | 9 Pandas          | L   | 0.720      | -            | -                | -                | -         |    -5.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     2420 | 2024-08-06 | Sashi             | L   | 0.680      | -            | -                | -                | -         |    -7.23 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     2642 | 2024-07-31 | Zero Tenacity     | L   | 0.639      | -            | -                | -                | -         |    -5.05 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     2803 | 2024-07-26 | EYEBALLERS        | W   | 0.606      | 0.500        | 0.007 (0.002)    | 0.466 (0.141)    | 0 (0.000) |     7.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3073 | 2024-07-18 | Monte             | L   | 0.554      | -            | -                | -                | -         |    -8.55 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3214 | 2024-07-16 | Insilio           | W   | 0.540      | 0.500        | 0.040 (0.011)    | 0.696 (0.188)    | 0 (0.000) |     9.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3481 | 2024-06-16 | 9z                | L   | 0.339      | -            | -                | -                | -         |    -0.93 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3533 | 2024-06-14 | RED Canids        | W   | 0.329      | 0.548        | 0.146 (0.026)    | 0.544 (0.098)    | 1 (0.329) |     9.21 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3536 | 2024-06-14 | Imperial          | W   | 0.328      | 0.548        | 0.161 (0.029)    | 0.573 (0.103)    | 1 (0.328) |     8.81 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3693 | 2024-06-09 | Sangal            | L   | 0.293      | -            | -                | -                | -         |    -0.32 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3887 | 2024-06-06 | SINNERS           | W   | 0.273      | 0.500        | 0.177 (0.024)    | 0.957 (0.131)    | 0 (0.000) |     7.50 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     3949 | 2024-06-05 | 3DMAX             | W   | 0.266      | 0.500        | 0.473 (0.063)    | 0.873 (0.116)    | 0 (0.000) |     8.21 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4081 | 2024-06-01 | ENCE              | L   | 0.239      | -            | -                | -                | -         |    -0.26 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4089 | 2024-06-01 | Zero Tenacity     | L   | 0.238      | -            | -                | -                | -         |    -1.85 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4756 | 2024-05-09 | B8                | L   | 0.084      | -            | -                | -                | -         |    -0.40 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4918 | 2024-05-01 | Zero Tenacity     | L   | 0.032      | -            | -                | -                | -         |    -0.26 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,005.16)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $500.00        | $500.00         |
| 2024-10-06 |      1.000 | $1,117.00      | $1,117.00       |
| 2024-09-22 |      0.993 | $3,500.00      | $3,477.20       |
| 2024-06-16 |      0.342 | $7,000.00      | $2,390.69       |
| 2024-06-09 |      0.293 | $12,000.00     | $3,520.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
