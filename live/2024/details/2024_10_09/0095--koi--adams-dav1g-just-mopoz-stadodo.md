### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [95](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [68]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  868.8<br />
<br />
Final Rank Value (868.8) = Starting Rank Value (884.4) + Head To Head Adjustments (-15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 884.4
- 400 + ( ( 0.251 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 884.4


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
|           34 |      125 | 2024-10-05 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -14.92 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |      224 | 2024-10-02 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -12.19 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |      270 | 2024-10-01 | Preasy            | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.128 (0.043)    | 0 (0.000) |     6.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1074 | 2024-09-06 | Wildcard          | L   | 0.981      | -            | -                | -                | -         |    -4.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1130 | 2024-09-05 | The MongolZ       | L   | 0.972      | -            | -                | -                | -         |    -0.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1179 | 2024-09-03 | G2                | L   | 0.961      | -            | -                | -                | -         |    -0.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1583 | 2024-08-23 | TSM               | L   | 0.887      | -            | -                | -                | -         |    -8.87 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1590 | 2024-08-23 | UNiTY             | L   | 0.886      | -            | -                | -                | -         |    -8.90 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1625 | 2024-08-22 | SINNERS           | L   | 0.879      | -            | -                | -                | -         |    -6.01 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     1658 | 2024-08-21 | Monte             | W   | 0.874      | 0.143        | 0.025 (0.003)    | 0.834 (0.104)    | 0 (0.000) |    16.95 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     1706 | 2024-08-21 | ENCE              | W   | 0.872      | 0.143        | 0.092 (0.011)    | 0.200 (0.025)    | 0 (0.000) |    19.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     1749 | 2024-08-19 | Monte             | L   | 0.860      | -            | -                | -                | -         |    -9.78 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     1756 | 2024-08-19 | Gaimin Gladiators | W   | 0.860      | 0.143        | 0.020 (0.002)    | 0.500 (0.061)    | 0 (0.000) |    13.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     1853 | 2024-08-15 | HOTU              | L   | 0.834      | -            | -                | -                | -         |   -16.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     1903 | 2024-08-13 | B8                | L   | 0.821      | -            | -                | -                | -         |    -7.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     1957 | 2024-08-12 | 9 Pandas          | L   | 0.814      | -            | -                | -                | -         |    -7.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2145 | 2024-08-06 | Sashi             | L   | 0.774      | -            | -                | -                | -         |    -8.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     2367 | 2024-07-31 | Zero Tenacity     | L   | 0.734      | -            | -                | -                | -         |    -6.55 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     2528 | 2024-07-26 | EYEBALLERS        | W   | 0.700      | 0.500        | 0.007 (0.002)    | 0.482 (0.169)    | 0 (0.000) |     8.12 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     2798 | 2024-07-18 | Monte             | L   | 0.648      | -            | -                | -                | -         |   -10.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     2939 | 2024-07-16 | Insilio           | W   | 0.634      | 0.500        | 0.040 (0.013)    | 0.678 (0.215)    | 0 (0.000) |    10.79 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3206 | 2024-06-16 | 9z                | L   | 0.434      | -            | -                | -                | -         |    -1.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3258 | 2024-06-14 | RED Canids        | W   | 0.423      | 0.548        | 0.122 (0.028)    | 0.573 (0.133)    | 1 (0.423) |    11.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3261 | 2024-06-14 | Imperial          | W   | 0.422      | 0.548        | 0.159 (0.037)    | 0.554 (0.128)    | 1 (0.422) |    11.19 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3418 | 2024-06-09 | Sangal            | L   | 0.388      | -            | -                | -                | -         |    -1.38 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3612 | 2024-06-06 | SINNERS           | W   | 0.367      | 0.500        | 0.156 (0.029)    | 1.000 (0.184)    | 0 (0.000) |     9.62 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3674 | 2024-06-05 | 3DMAX             | W   | 0.361      | 0.500        | 0.454 (0.082)    | 0.768 (0.138)    | 0 (0.000) |    11.08 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3806 | 2024-06-01 | ENCE              | L   | 0.334      | -            | -                | -                | -         |    -2.77 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3814 | 2024-06-01 | Zero Tenacity     | L   | 0.333      | -            | -                | -                | -         |    -2.83 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4481 | 2024-05-09 | B8                | L   | 0.179      | -            | -                | -                | -         |    -1.54 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4643 | 2024-05-01 | Zero Tenacity     | L   | 0.126      | -            | -                | -                | -         |    -1.16 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4963 | 2024-04-18 | ex-Guild Eagles   | L   | 0.040      | -            | -                | -                | -         |    -0.97 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4972 | 2024-04-18 | fnatic            | W   | 0.040      | -            | -                | -                | -         |     1.09 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     5042 | 2024-04-16 | BLEED             | L   | 0.028      | -            | -                | -                | -         |    -0.62 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,820.89)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $1,117.00      | $1,117.00       |
| 2024-10-02 |      1.000 | $500.00        | $500.00         |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-06-16 |      0.436 | $7,000.00      | $3,051.24       |
| 2024-06-09 |      0.388 | $12,000.00     | $4,652.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
