### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [96](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [68]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  860.1<br />
<br />
Final Rank Value (860.1) = Starting Rank Value (872.0) + Head To Head Adjustments (-12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.0
- 400 + ( ( 0.243 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 872.0


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
|           33 |      222 | 2024-10-05 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -14.58 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |      321 | 2024-10-02 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -11.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |      367 | 2024-10-01 | Preasy            | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.121 (0.040)    | 0 (0.000) |     6.65 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1171 | 2024-09-06 | Wildcard          | L   | 0.941      | -            | -                | -                | -         |    -4.20 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1227 | 2024-09-05 | The MongolZ       | L   | 0.933      | -            | -                | -                | -         |    -0.52 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1276 | 2024-09-03 | G2                | L   | 0.921      | -            | -                | -                | -         |    -0.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1680 | 2024-08-23 | TSM               | L   | 0.848      | -            | -                | -                | -         |    -8.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1687 | 2024-08-23 | UNiTY             | L   | 0.847      | -            | -                | -                | -         |    -8.12 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     1722 | 2024-08-22 | SINNERS           | L   | 0.839      | -            | -                | -                | -         |    -5.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     1755 | 2024-08-21 | Monte             | W   | 0.834      | 0.143        | 0.024 (0.003)    | 0.822 (0.098)    | 0 (0.000) |    16.38 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     1803 | 2024-08-21 | ENCE              | W   | 0.832      | 0.143        | 0.084 (0.010)    | 0.185 (0.022)    | 0 (0.000) |    18.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     1846 | 2024-08-19 | Monte             | L   | 0.821      | -            | -                | -                | -         |    -9.20 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     1853 | 2024-08-19 | Gaimin Gladiators | W   | 0.820      | 0.143        | 0.018 (0.002)    | 0.586 (0.069)    | 0 (0.000) |    13.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     1950 | 2024-08-15 | HOTU              | L   | 0.794      | -            | -                | -                | -         |   -15.38 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2000 | 2024-08-13 | B8                | L   | 0.782      | -            | -                | -                | -         |    -6.95 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2054 | 2024-08-12 | 9 Pandas          | L   | 0.775      | -            | -                | -                | -         |    -7.01 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     2242 | 2024-08-06 | Sashi             | L   | 0.735      | -            | -                | -                | -         |    -8.14 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     2464 | 2024-07-31 | Zero Tenacity     | L   | 0.694      | -            | -                | -                | -         |    -6.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     2625 | 2024-07-26 | EYEBALLERS        | W   | 0.660      | 0.500        | 0.006 (0.002)    | 0.474 (0.157)    | 0 (0.000) |     7.90 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     2895 | 2024-07-18 | Monte             | L   | 0.608      | -            | -                | -                | -         |    -9.55 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3036 | 2024-07-16 | Insilio           | W   | 0.594      | 0.500        | 0.038 (0.011)    | 0.690 (0.205)    | 0 (0.000) |    10.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3303 | 2024-06-16 | 9z                | L   | 0.394      | -            | -                | -                | -         |    -1.32 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3355 | 2024-06-14 | RED Canids        | W   | 0.383      | 0.548        | 0.117 (0.025)    | 0.559 (0.118)    | 1 (0.383) |    10.34 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3358 | 2024-06-14 | Imperial          | W   | 0.383      | 0.548        | 0.144 (0.030)    | 0.550 (0.115)    | 1 (0.383) |    10.20 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3515 | 2024-06-09 | Sangal            | L   | 0.348      | -            | -                | -                | -         |    -1.22 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3709 | 2024-06-06 | SINNERS           | W   | 0.328      | 0.500        | 0.165 (0.027)    | 1.000 (0.164)    | 0 (0.000) |     8.87 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3771 | 2024-06-05 | 3DMAX             | W   | 0.321      | 0.500        | 0.426 (0.068)    | 0.739 (0.119)    | 0 (0.000) |     9.85 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3903 | 2024-06-01 | ENCE              | L   | 0.294      | -            | -                | -                | -         |    -2.56 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     3911 | 2024-06-01 | Zero Tenacity     | L   | 0.293      | -            | -                | -                | -         |    -2.43 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4578 | 2024-05-09 | B8                | L   | 0.139      | -            | -                | -                | -         |    -1.19 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4740 | 2024-05-01 | Zero Tenacity     | L   | 0.086      | -            | -                | -                | -         |    -0.77 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     5060 | 2024-04-18 | ex-Guild Eagles   | L   | 0.001      | -            | -                | -                | -         |    -0.02 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     5069 | 2024-04-18 | fnatic            | W   | 0.001      | -            | -                | -                | -         |     0.01 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,068.08)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $1,117.00      | $1,117.00       |
| 2024-10-02 |      1.000 | $500.00        | $500.00         |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-06-16 |      0.396 | $7,000.00      | $2,773.89       |
| 2024-06-09 |      0.348 | $12,000.00     | $4,177.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
