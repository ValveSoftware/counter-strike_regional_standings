### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Global Rank: [66](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [47]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  958.3<br />
<br />
Final Rank Value (958.3) = Starting Rank Value (1045.2) + Head To Head Adjustments (-86.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.123[<sup>2</sup>](#table1)
- LAN Wins: 0.344[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.2
- 400 + ( ( 0.332 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1045.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      979 | 2024-09-13 | ATOX               | L   | 0.988      | -            | -                | -                | -         |   -17.76 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |     1014 | 2024-09-12 | RED Canids         | L   | 0.981      | -            | -                | -                | -         |    -8.29 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |     1078 | 2024-09-10 | Liquid             | L   | 0.967      | -            | -                | -                | -         |    -0.63 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |     1361 | 2024-08-30 | Young Ninjas       | L   | 0.894      | -            | -                | -                | -         |   -19.30 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |     1696 | 2024-08-23 | Monte              | L   | 0.846      | -            | -                | -                | -         |   -14.79 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1713 | 2024-08-22 | ex-Enterprise      | W   | 0.840      | 0.143        | 0.025 (0.003)    | 0.463 (0.056)    | 0 (0.000) |     8.30 | gla1ve, Goofy, Kylar, podi, sdy    |
|           32 |     1751 | 2024-08-21 | UNiTY              | L   | 0.834      | -            | -                | -                | -         |   -12.94 | gla1ve, Goofy, Kylar, podi, sdy    |
|           31 |     1803 | 2024-08-21 | KOI                | L   | 0.832      | -            | -                | -                | -         |   -18.48 | gla1ve, Goofy, Kylar, podi, sdy    |
|           30 |     1847 | 2024-08-19 | kONO               | L   | 0.821      | -            | -                | -                | -         |   -19.87 | gla1ve, Goofy, Kylar, podi, sdy    |
|           29 |     2277 | 2024-08-05 | PARIVISION         | L   | 0.727      | -            | -                | -                | -         |   -13.20 | gla1ve, Goofy, Kylar, podi, sdy    |
|           28 |     2298 | 2024-08-04 | 9INE               | W   | 0.722      | 0.435        | 0.095 (0.030)    | 0.686 (0.215)    | 0 (0.000) |     7.72 | gla1ve, Goofy, Kylar, podi, sdy    |
|           27 |     2602 | 2024-07-27 | 3DMAX              | L   | 0.667      | -            | -                | -                | -         |    -2.57 | gla1ve, Goofy, Kylar, podi, sdy    |
|           26 |     2631 | 2024-07-26 | True Rippers       | W   | 0.660      | 0.650        | -                | 0.146 (0.063)    | 1 (0.660) |     1.81 | gla1ve, Goofy, Kylar, podi, sdy    |
|           25 |     2670 | 2024-07-25 | PARIVISION         | W   | 0.653      | 0.650        | 0.039 (0.017)    | 0.507 (0.215)    | 1 (0.653) |     9.11 | gla1ve, Goofy, Kylar, podi, sdy    |
|           24 |     2679 | 2024-07-25 | Aurora             | L   | 0.652      | -            | -                | -                | -         |    -5.95 | gla1ve, Goofy, Kylar, podi, sdy    |
|           23 |     2701 | 2024-07-24 | The MongolZ        | L   | 0.647      | -            | -                | -                | -         |    -0.72 | gla1ve, Goofy, Kylar, podi, sdy    |
|           22 |     2711 | 2024-07-24 | BLEED              | W   | 0.645      | 0.650        | 0.067 (0.028)    | 0.470 (0.197)    | 1 (0.645) |    11.43 | gla1ve, Goofy, Kylar, podi, sdy    |
|           21 |     3311 | 2024-06-16 | Falcons            | L   | 0.393      | -            | -                | -                | -         |    -1.61 | gla1ve, Goofy, Kylar, podi, sdy    |
|           20 |     3380 | 2024-06-14 | Complexity         | W   | 0.380      | 0.500        | 0.300 (0.057)    | 0.356 (0.068)    | 1 (0.380) |    11.51 | gla1ve, Goofy, Kylar, podi, sdy    |
|           19 |     3387 | 2024-06-14 | MIBR               | W   | 0.380      | 0.500        | 0.205 (0.039)    | 0.598 (0.113)    | 1 (0.380) |    10.43 | gla1ve, Goofy, Kylar, podi, sdy    |
|           18 |     3722 | 2024-06-06 | HEROIC             | L   | 0.327      | -            | -                | -                | -         |    -0.57 | gla1ve, Goofy, Kylar, podi, sdy    |
|           17 |     3735 | 2024-06-06 | Astralis           | L   | 0.326      | -            | -                | -                | -         |    -1.29 | gla1ve, Goofy, Kylar, podi, sdy    |
|           16 |     3772 | 2024-06-05 | Sashi              | W   | 0.321      | 0.715        | 0.100 (0.023)    | 0.634 (0.146)    | 1 (0.321) |     4.77 | gla1ve, Goofy, Kylar, podi, sdy    |
|           15 |     3782 | 2024-06-05 | The MongolZ        | L   | 0.320      | -            | -                | -                | -         |    -0.18 | gla1ve, Goofy, Kylar, podi, sdy    |
|           14 |     3792 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.319      | -            | -                | -                | -         |    -2.74 | gla1ve, Goofy, Kylar, podi, sdy    |
|           13 |     3897 | 2024-06-01 | DMS                | L   | 0.294      | -            | -                | -                | -         |    -6.75 | gla1ve, Goofy, Kylar, podi, sdy    |
|           12 |     3903 | 2024-06-01 | KOI                | W   | 0.294      | -            | -                | -                | -         |     2.56 | gla1ve, Goofy, Kylar, podi, sdy    |
|           11 |     3912 | 2024-06-01 | DMS                | L   | 0.293      | -            | -                | -                | -         |    -6.79 | gla1ve, Goofy, Kylar, podi, sdy    |
|           10 |     4192 | 2024-05-21 | Liquid             | L   | 0.219      | -            | -                | -                | -         |    -0.24 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     4275 | 2024-05-18 | fnatic             | W   | 0.200      | 0.769        | 0.217 (0.033)    | 0.438 (0.068)    | -         |     4.32 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     4299 | 2024-05-17 | Gaimin Gladiators  | W   | 0.195      | 0.769        | 0.018 (0.003)    | 0.586 (0.088)    | -         |     1.99 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     4312 | 2024-05-17 | fnatic             | L   | 0.193      | -            | -                | -                | -         |    -1.90 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     4668 | 2024-05-04 | FURIA              | L   | 0.107      | -            | -                | -                | -         |    -0.09 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     4684 | 2024-05-03 | GamerLegion        | L   | 0.100      | -            | -                | -                | -         |    -2.75 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     4703 | 2024-05-02 | Monte              | W   | 0.095      | 0.889        | 0.035 (0.003)    | -                | 1 (0.095) |     0.63 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     4730 | 2024-05-01 | Bad News Kangaroos | W   | 0.087      | -            | -                | -                | 1 (0.087) |     0.22 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     4761 | 2024-04-30 | GamerLegion        | L   | 0.080      | -            | -                | -                | -         |    -2.19 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     5026 | 2024-04-19 | AMKAL              | L   | 0.007      | -            | -                | -                | -         |    -0.12 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,847.04)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-08-06 |      0.734 | $2,000.00      | $1,468.50       |
| 2024-07-28 |      0.674 | $15,000.00     | $10,109.91      |
| 2024-06-16 |      0.394 | $10,000.00     | $3,935.59       |
| 2024-06-09 |      0.347 | $8,000.00      | $2,779.73       |
| 2024-05-23 |      0.234 | $12,500.00     | $2,928.14       |
| 2024-05-12 |      0.161 | $7,000.00      | $1,125.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
