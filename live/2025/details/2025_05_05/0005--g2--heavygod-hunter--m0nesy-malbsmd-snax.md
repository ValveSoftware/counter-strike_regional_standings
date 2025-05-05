### Roster Details<br />
Team Name: G2<br />
Roster: HeavyGod, huNter-, m0NESY, malbsMd, Snax<br />
Global Rank: [5](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [5]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1830.1<br />
<br />
Final Rank Value (1830.1) = Starting Rank Value (1875.2) + Head To Head Adjustments (-45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.928[<sup>1</sup>](#table2)
- Bounty Collected: 0.715[<sup>2</sup>](#table1)
- Opponent Network: 0.611[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.813<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1875.2
- 400 + ( ( 0.813 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 1875.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      345 | 2025-04-13 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -14.28 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           33 |      357 | 2025-04-12 | Complexity        | W   | 1.000      | 1.000        | 0.393 (0.393)    | 0.799 (0.799)    | 1 (1.000) |     5.36 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           32 |      380 | 2025-04-11 | Virtus.pro        | W   | 1.000      | 1.000        | 0.396 (0.396)    | 0.458 (0.458)    | 1 (1.000) |     7.15 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           31 |      432 | 2025-04-08 | Complexity        | W   | 1.000      | 1.000        | 0.393 (0.393)    | 0.799 (0.799)    | 1 (1.000) |     4.59 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           30 |      463 | 2025-04-07 | Rare Atom         | W   | 1.000      | 1.000        | -                | 0.975 (0.975)    | 1 (1.000) |     1.28 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           29 |      479 | 2025-04-06 | GamerLegion       | W   | 1.000      | 1.000        | 0.548 (0.548)    | 0.723 (0.723)    | 1 (1.000) |    10.97 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           28 |      744 | 2025-03-28 | MOUZ              | L   | 0.947      | -            | -                | -                | -         |    -9.82 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           27 |      897 | 2025-03-24 | The MongolZ       | W   | 0.921      | 0.715        | 0.944 (0.622)    | 0.561 (0.370)    | 1 (0.921) |    16.04 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           26 |      918 | 2025-03-23 | M80               | W   | 0.915      | -            | -                | -                | 1 (0.915) |     0.33 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           25 |      934 | 2025-03-22 | Aurora            | L   | 0.908      | -            | -                | -                | -         |   -15.56 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           24 |      984 | 2025-03-20 | Imperial          | W   | 0.892      | 0.715        | -                | 0.770 (0.492)    | 1 (0.892) |     0.39 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           23 |     1107 | 2025-03-13 | MOUZ              | L   | 0.848      | -            | -                | -                | -         |    -9.92 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           22 |     1141 | 2025-03-11 | GamerLegion       | W   | 0.834      | 1.000        | 0.548 (0.457)    | 0.723 (0.603)    | 1 (0.834) |     9.26 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           21 |     1176 | 2025-03-10 | Natus Vincere     | L   | 0.827      | -            | -                | -                | -         |   -19.55 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           20 |     1241 | 2025-03-09 | SAW               | W   | 0.819      | 1.000        | 0.190 (0.156)    | -                | 1 (0.819) |     1.16 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           19 |     1310 | 2025-03-08 | The MongolZ       | L   | 0.813      | -            | -                | -                | -         |   -11.70 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           18 |     1361 | 2025-03-07 | paiN              | W   | 0.807      | 1.000        | 0.293 (0.236)    | -                | -         |     1.67 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           17 |     2228 | 2025-02-03 | FaZe              | L   | 0.595      | -            | -                | -                | -         |    -8.97 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           16 |     2245 | 2025-02-02 | Falcons           | W   | 0.587      | 1.000        | 1.000 (0.587)    | 0.838 (0.492)    | -         |    12.21 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           15 |     2259 | 2025-02-01 | Virtus.pro        | L   | 0.580      | -            | -                | -                | -         |   -14.88 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           14 |     2320 | 2025-01-25 | Aurora            | L   | 0.534      | -            | -                | -                | -         |    -9.76 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           13 |     2340 | 2025-01-23 | BetBoom           | W   | 0.521      | 0.769        | -                | 1.000 (0.400)    | -         |     0.19 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           12 |     2380 | 2025-01-19 | BIG               | W   | 0.495      | -            | -                | -                | -         |     0.58 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           11 |     2388 | 2025-01-17 | B8                | W   | 0.482      | -            | -                | -                | -         |     0.35 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           10 |     2604 | 2024-12-14 | FaZe              | L   | 0.252      | -            | -                | -                | -         |    -3.78 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            9 |     2631 | 2024-12-13 | HEROIC            | W   | 0.245      | -            | -                | -                | -         |     0.02 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            8 |     2738 | 2024-12-06 | FaZe              | W   | 0.203      | 1.000        | 1.000 (0.203)    | -                | -         |     3.35 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            7 |     2763 | 2024-12-05 | 3DMAX             | W   | 0.197      | -            | -                | -                | -         |     1.72 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            6 |     2780 | 2024-12-05 | BIG               | W   | 0.192      | -            | -                | -                | -         |     0.23 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            5 |     2798 | 2024-12-04 | The MongolZ       | L   | 0.190      | -            | -                | -                | -         |    -2.89 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            4 |     3021 | 2024-11-23 | Spirit            | W   | 0.112      | -            | -                | -                | -         |     1.54 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            3 |     3053 | 2024-11-22 | 3DMAX             | L   | 0.105      | -            | -                | -                | -         |    -2.40 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            2 |     3073 | 2024-11-21 | 9 Pandas          | W   | 0.099      | -            | -                | -                | -         |     0.02 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            1 |     3088 | 2024-11-20 | Ninjas in Pyjamas | W   | 0.097      | -            | -                | -                | -         |     0.00 | huNter-, m0NESY, malbsMd, NiKo, Snax     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($301,764.36)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.84) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-13 |      1.000 | $187,500.00    | $187,500.00     |
| 2025-03-30 |      0.961 | $20,000.00     | $19,222.29      |
| 2025-03-16 |      0.867 | $58,000.00     | $50,297.32      |
| 2025-02-09 |      0.634 | $23,000.00     | $14,580.78      |
| 2025-01-26 |      0.541 | $17,500.00     | $9,461.65       |
| 2024-12-15 |      0.259 | $80,000.00     | $20,702.32      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
