### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [87](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [64]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  878.3<br />
<br />
Final Rank Value (878.3) = Starting Rank Value (887.6) + Head To Head Adjustments (-9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.6
- 400 + ( ( 0.255 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 887.6


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
|           38 |        4 | 2024-10-02 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -13.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |       50 | 2024-10-01 | Preasy            | W   | 1.000      | 0.333        | -                | 0.144 (0.048)    | 0 (0.000) |     6.21 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |      854 | 2024-09-06 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -6.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |      910 | 2024-09-05 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.70 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |      959 | 2024-09-03 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     1363 | 2024-08-23 | TSM               | L   | 0.933      | -            | -                | -                | -         |    -9.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     1370 | 2024-08-23 | UNiTY             | L   | 0.932      | -            | -                | -                | -         |    -9.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1405 | 2024-08-22 | SINNERS           | L   | 0.924      | -            | -                | -                | -         |    -6.82 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1438 | 2024-08-21 | Monte             | W   | 0.919      | 0.143        | 0.024 (0.003)    | 0.821 (0.108)    | 0 (0.000) |    17.80 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1486 | 2024-08-21 | ENCE              | W   | 0.917      | 0.143        | 0.096 (0.013)    | 0.229 (0.030)    | 0 (0.000) |    21.21 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1529 | 2024-08-19 | Monte             | L   | 0.906      | -            | -                | -                | -         |   -10.20 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1536 | 2024-08-19 | Gaimin Gladiators | W   | 0.906      | 0.143        | 0.020 (0.003)    | 0.542 (0.070)    | 0 (0.000) |    13.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1633 | 2024-08-15 | HOTU              | L   | 0.879      | -            | -                | -                | -         |   -17.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     1683 | 2024-08-13 | B8                | L   | 0.867      | -            | -                | -                | -         |    -7.87 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     1737 | 2024-08-12 | 9 Pandas          | L   | 0.860      | -            | -                | -                | -         |    -8.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     1925 | 2024-08-06 | Sashi             | L   | 0.820      | -            | -                | -                | -         |    -8.85 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2147 | 2024-07-31 | Zero Tenacity     | L   | 0.779      | -            | -                | -                | -         |    -7.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2308 | 2024-07-26 | EYEBALLERS        | W   | 0.746      | 0.500        | -                | 0.479 (0.178)    | 0 (0.000) |     5.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2578 | 2024-07-18 | Monte             | L   | 0.693      | -            | -                | -                | -         |   -11.33 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2719 | 2024-07-16 | Insilio           | W   | 0.680      | 0.500        | 0.039 (0.013)    | 0.731 (0.248)    | 0 (0.000) |    11.32 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2986 | 2024-06-16 | 9z                | L   | 0.479      | -            | -                | -                | -         |    -1.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3038 | 2024-06-14 | RED Canids        | W   | 0.469      | 0.548        | 0.068 (0.017)    | 0.559 (0.144)    | 1 (0.469) |    11.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3041 | 2024-06-14 | Imperial          | W   | 0.468      | 0.548        | 0.146 (0.038)    | 0.526 (0.135)    | 1 (0.468) |    12.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3198 | 2024-06-09 | Sangal            | L   | 0.433      | -            | -                | -                | -         |    -1.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3392 | 2024-06-06 | SINNERS           | W   | 0.413      | 0.500        | 0.149 (0.031)    | 1.000 (0.206)    | 0 (0.000) |    10.59 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3454 | 2024-06-05 | 3DMAX             | W   | 0.406      | 0.500        | 0.433 (0.088)    | 0.799 (0.162)    | 0 (0.000) |    12.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3586 | 2024-06-01 | ENCE              | L   | 0.379      | -            | -                | -                | -         |    -2.87 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3594 | 2024-06-01 | Zero Tenacity     | L   | 0.378      | -            | -                | -                | -         |    -3.30 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     4261 | 2024-05-09 | B8                | L   | 0.224      | -            | -                | -                | -         |    -2.03 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4423 | 2024-05-01 | Zero Tenacity     | L   | 0.171      | -            | -                | -                | -         |    -1.63 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4743 | 2024-04-18 | ex-Guild Eagles   | L   | 0.086      | -            | -                | -                | -         |    -2.05 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4752 | 2024-04-18 | fnatic            | W   | 0.086      | 0.143        | 0.236 (0.003)    | -                | -         |     2.37 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4822 | 2024-04-16 | BLEED             | L   | 0.073      | -            | -                | -                | -         |    -1.57 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4955 | 2024-04-10 | RUSH B            | W   | 0.033      | -            | -                | -                | -         |     0.41 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     5009 | 2024-04-09 | Aurora            | W   | 0.027      | 0.500        | 0.191 (0.003)    | -                | -         |     0.74 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     5015 | 2024-04-09 | Apeks             | L   | 0.026      | -            | -                | -                | -         |    -0.62 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     5043 | 2024-04-08 | GUN5              | W   | 0.019      | -            | -                | -                | -         |     0.04 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     5048 | 2024-04-08 | fnatic            | L   | 0.019      | -            | -                | -                | -         |    -0.07 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,569.45)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-02 |      1.000 | $500.00        | $500.00         |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-06-16 |      0.481 | $7,000.00      | $3,370.13       |
| 2024-06-09 |      0.433 | $12,000.00     | $5,199.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
