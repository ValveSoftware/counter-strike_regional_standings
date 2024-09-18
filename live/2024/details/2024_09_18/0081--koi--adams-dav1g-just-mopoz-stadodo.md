### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [81](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [60]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  933.0<br />
<br />
Final Rank Value (933.0) = Starting Rank Value (947.3) + Head To Head Adjustments (-14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 947.3
- 400 + ( ( 0.280 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 947.3


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
|           40 |      331 | 2024-09-06 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -6.14 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |      387 | 2024-09-05 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |      436 | 2024-09-03 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |      840 | 2024-08-23 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -10.14 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |      847 | 2024-08-23 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -15.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |      882 | 2024-08-22 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -8.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |      915 | 2024-08-21 | Monte             | W   | 1.000      | 0.143        | 0.025 (0.004)    | 0.685 (0.098)    | 0 (0.000) |    18.11 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |      963 | 2024-08-21 | ENCE              | W   | 1.000      | 0.143        | 0.138 (0.020)    | 0.298 (0.043)    | 0 (0.000) |    24.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     1006 | 2024-08-19 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1013 | 2024-08-19 | Gaimin Gladiators | W   | 1.000      | 0.143        | 0.031 (0.004)    | 0.534 (0.076)    | 0 (0.000) |    14.28 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1110 | 2024-08-15 | HOTU              | L   | 0.974      | -            | -                | -                | -         |   -21.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1160 | 2024-08-13 | B8                | L   | 0.962      | -            | -                | -                | -         |    -9.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1214 | 2024-08-12 | 9 Pandas          | L   | 0.955      | -            | -                | -                | -         |    -9.12 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1402 | 2024-08-06 | Sashi             | L   | 0.915      | -            | -                | -                | -         |    -9.77 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1624 | 2024-07-31 | Zero Tenacity     | L   | 0.874      | -            | -                | -                | -         |    -8.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     1785 | 2024-07-26 | EYEBALLERS        | W   | 0.840      | 0.500        | -                | 0.469 (0.197)    | 0 (0.000) |     4.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2055 | 2024-07-18 | Monte             | L   | 0.788      | -            | -                | -                | -         |   -14.39 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2196 | 2024-07-16 | Insilio           | W   | 0.774      | 0.500        | 0.041 (0.016)    | 0.799 (0.310)    | 0 (0.000) |    11.83 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2463 | 2024-06-16 | 9z                | L   | 0.574      | -            | -                | -                | -         |    -1.42 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2515 | 2024-06-14 | RED Canids        | W   | 0.563      | 0.548        | 0.090 (0.028)    | 0.660 (0.204)    | 1 (0.563) |    13.11 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2518 | 2024-06-14 | Imperial          | W   | 0.562      | 0.548        | 0.133 (0.041)    | 0.629 (0.194)    | 1 (0.562) |    14.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2675 | 2024-06-09 | Sangal            | L   | 0.528      | -            | -                | -                | -         |    -1.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2869 | 2024-06-06 | SINNERS           | W   | 0.508      | 0.500        | 0.176 (0.045)    | 1.000 (0.254)    | 0 (0.000) |    11.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     2931 | 2024-06-05 | 3DMAX             | W   | 0.501      | 0.500        | 0.521 (0.131)    | 0.869 (0.218)    | 0 (0.000) |    15.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3063 | 2024-06-01 | ENCE              | L   | 0.474      | -            | -                | -                | -         |    -2.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3071 | 2024-06-01 | Zero Tenacity     | L   | 0.473      | -            | -                | -                | -         |    -4.32 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3738 | 2024-05-09 | B8                | L   | 0.319      | -            | -                | -                | -         |    -3.07 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3900 | 2024-05-01 | Zero Tenacity     | L   | 0.266      | -            | -                | -                | -         |    -2.72 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     4220 | 2024-04-18 | ex-Guild Eagles   | L   | 0.181      | -            | -                | -                | -         |    -4.40 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     4229 | 2024-04-18 | fnatic            | W   | 0.180      | 0.143        | 0.321 (0.008)    | -                | 0 (0.000) |     5.19 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     4299 | 2024-04-16 | BLEED             | L   | 0.168      | -            | -                | -                | -         |    -3.48 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4432 | 2024-04-10 | RUSH B            | W   | 0.128      | -            | -                | -                | -         |     1.50 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4486 | 2024-04-09 | Aurora            | W   | 0.121      | 0.500        | 0.268 (0.016)    | 0.527 (0.032)    | -         |     3.50 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4492 | 2024-04-09 | Apeks             | L   | 0.121      | -            | -                | -                | -         |    -2.90 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4520 | 2024-04-08 | GUN5              | W   | 0.114      | -            | -                | -                | -         |     0.16 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4525 | 2024-04-08 | fnatic            | L   | 0.113      | -            | -                | -                | -         |    -0.31 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4626 | 2024-04-04 | NOM               | W   | 0.087      | -            | -                | -                | -         |     0.26 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4660 | 2024-04-03 | 9INE              | W   | 0.081      | -            | -                | -                | -         |     0.21 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4697 | 2024-04-02 | TSM               | W   | 0.075      | -            | -                | -                | -         |     0.34 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4763 | 2024-03-28 | EYEBALLERS        | L   | 0.041      | -            | -                | -                | -         |    -0.89 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,370.45)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-18 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-09-12 |      1.000 | $500.00        | $500.00         |
| 2024-06-16 |      0.576 | $7,000.00      | $4,033.66       |
| 2024-06-09 |      0.528 | $12,000.00     | $6,336.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
