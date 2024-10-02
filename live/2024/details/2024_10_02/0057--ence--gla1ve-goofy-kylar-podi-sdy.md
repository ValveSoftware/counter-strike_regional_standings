### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Global Rank: [57](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [40]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  977.0<br />
<br />
Final Rank Value (977.0) = Starting Rank Value (1099.5) + Head To Head Adjustments (-122.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.495[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.411[<sup>2</sup>](#table1)

The average of these factors is 0.365<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1099.5
- 400 + ( ( 0.365 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1099.5


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
|           41 |      662 | 2024-09-13 | ATOX               | L   | 1.000      | -            | -                | -                | -         |   -22.05 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      697 | 2024-09-12 | RED Canids         | L   | 1.000      | -            | -                | -                | -         |   -11.65 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      761 | 2024-09-10 | Liquid             | L   | 1.000      | -            | -                | -                | -         |    -0.83 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |     1044 | 2024-08-30 | Young Ninjas       | L   | 0.979      | -            | -                | -                | -         |   -21.57 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |     1379 | 2024-08-23 | Monte              | L   | 0.931      | -            | -                | -                | -         |   -17.39 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |     1396 | 2024-08-22 | ex-Enterprise      | W   | 0.926      | 0.143        | 0.028 (0.004)    | 0.502 (0.066)    | 0 (0.000) |     8.27 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |     1434 | 2024-08-21 | UNiTY              | L   | 0.919      | -            | -                | -                | -         |   -16.15 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |     1486 | 2024-08-21 | KOI                | L   | 0.917      | -            | -                | -                | -         |   -21.21 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1530 | 2024-08-19 | kONO               | L   | 0.906      | -            | -                | -                | -         |   -22.86 | gla1ve, Goofy, Kylar, podi, sdy    |
|           32 |     1960 | 2024-08-05 | PARIVISION         | L   | 0.812      | -            | -                | -                | -         |   -16.08 | gla1ve, Goofy, Kylar, podi, sdy    |
|           31 |     1981 | 2024-08-04 | 9INE               | W   | 0.807      | 0.435        | 0.091 (0.032)    | 0.726 (0.255)    | 0 (0.000) |     7.05 | gla1ve, Goofy, Kylar, podi, sdy    |
|           30 |     2285 | 2024-07-27 | 3DMAX              | L   | 0.752      | -            | -                | -                | -         |    -3.50 | gla1ve, Goofy, Kylar, podi, sdy    |
|           29 |     2314 | 2024-07-26 | True Rippers       | W   | 0.745      | 0.650        | -                | 0.170 (0.082)    | 1 (0.745) |     1.64 | gla1ve, Goofy, Kylar, podi, sdy    |
|           28 |     2353 | 2024-07-25 | PARIVISION         | W   | 0.738      | 0.650        | 0.035 (0.017)    | 0.550 (0.264)    | 1 (0.738) |     8.96 | gla1ve, Goofy, Kylar, podi, sdy    |
|           27 |     2362 | 2024-07-25 | Aurora             | L   | 0.737      | -            | -                | -                | -         |    -7.36 | gla1ve, Goofy, Kylar, podi, sdy    |
|           26 |     2384 | 2024-07-24 | The MongolZ        | L   | 0.732      | -            | -                | -                | -         |    -1.25 | gla1ve, Goofy, Kylar, podi, sdy    |
|           25 |     2394 | 2024-07-24 | BLEED              | W   | 0.731      | 0.650        | 0.077 (0.037)    | 0.536 (0.255)    | 1 (0.731) |    12.32 | gla1ve, Goofy, Kylar, podi, sdy    |
|           24 |     2994 | 2024-06-16 | Falcons            | L   | 0.478      | -            | -                | -                | -         |    -2.08 | gla1ve, Goofy, Kylar, podi, sdy    |
|           23 |     3063 | 2024-06-14 | Complexity         | W   | 0.466      | 0.500        | 0.307 (0.071)    | 0.366 (0.085)    | 1 (0.466) |    13.84 | gla1ve, Goofy, Kylar, podi, sdy    |
|           22 |     3070 | 2024-06-14 | MIBR               | W   | 0.465      | 0.500        | 0.223 (0.052)    | 0.550 (0.128)    | 1 (0.465) |    12.52 | gla1ve, Goofy, Kylar, podi, sdy    |
|           21 |     3405 | 2024-06-06 | HEROIC             | L   | 0.412      | -            | -                | -                | -         |    -1.85 | gla1ve, Goofy, Kylar, podi, sdy    |
|           20 |     3418 | 2024-06-06 | Astralis           | L   | 0.411      | -            | -                | -                | -         |    -2.10 | gla1ve, Goofy, Kylar, podi, sdy    |
|           19 |     3455 | 2024-06-05 | Sashi              | W   | 0.406      | 0.715        | 0.114 (0.033)    | 0.722 (0.210)    | 1 (0.406) |     5.89 | gla1ve, Goofy, Kylar, podi, sdy    |
|           18 |     3465 | 2024-06-05 | The MongolZ        | L   | 0.405      | -            | -                | -                | -         |    -0.32 | gla1ve, Goofy, Kylar, podi, sdy    |
|           17 |     3475 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.405      | -            | -                | -                | -         |    -3.46 | gla1ve, Goofy, Kylar, podi, sdy    |
|           16 |     3580 | 2024-06-01 | DMS                | L   | 0.380      | -            | -                | -                | -         |    -9.10 | gla1ve, Goofy, Kylar, podi, sdy    |
|           15 |     3586 | 2024-06-01 | KOI                | W   | 0.379      | -            | -                | -                | -         |     2.87 | gla1ve, Goofy, Kylar, podi, sdy    |
|           14 |     3595 | 2024-06-01 | DMS                | L   | 0.378      | -            | -                | -                | -         |    -9.20 | gla1ve, Goofy, Kylar, podi, sdy    |
|           13 |     3875 | 2024-05-21 | Liquid             | L   | 0.304      | -            | -                | -                | -         |    -0.46 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3958 | 2024-05-18 | fnatic             | W   | 0.286      | 0.769        | 0.236 (0.052)    | 0.519 (0.114)    | -         |     6.15 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3982 | 2024-05-17 | Gaimin Gladiators  | W   | 0.281      | 0.769        | 0.020 (0.004)    | 0.542 (0.117)    | -         |     2.43 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3995 | 2024-05-17 | fnatic             | L   | 0.279      | -            | -                | -                | -         |    -2.71 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     4351 | 2024-05-04 | FURIA              | L   | 0.192      | -            | -                | -                | -         |    -0.32 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     4367 | 2024-05-03 | GamerLegion        | L   | 0.186      | -            | -                | -                | -         |    -5.12 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     4386 | 2024-05-02 | Monte              | W   | 0.180      | 0.889        | 0.046 (0.007)    | -                | 1 (0.180) |     1.15 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     4413 | 2024-05-01 | Bad News Kangaroos | W   | 0.172      | -            | -                | -                | 1 (0.172) |     0.38 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     4444 | 2024-04-30 | GamerLegion        | L   | 0.165      | -            | -                | -                | -         |    -4.58 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     4709 | 2024-04-19 | AMKAL              | L   | 0.092      | -            | -                | -                | -         |    -1.66 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     4792 | 2024-04-17 | Enterprise         | W   | 0.079      | -            | -                | -                | -         |     0.24 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     4961 | 2024-04-10 | OG                 | L   | 0.032      | -            | -                | -                | -         |    -0.79 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     5044 | 2024-04-08 | FORZE              | L   | 0.019      | -            | -                | -                | -         |    -0.53 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,380.07)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-08-06 |      0.819 | $2,000.00      | $1,638.85       |
| 2024-07-28 |      0.759 | $15,000.00     | $11,387.57      |
| 2024-06-16 |      0.479 | $10,000.00     | $4,787.36       |
| 2024-06-09 |      0.433 | $8,000.00      | $3,461.14       |
| 2024-05-23 |      0.319 | $12,500.00     | $3,992.85       |
| 2024-05-12 |      0.246 | $7,000.00      | $1,721.41       |
| 2024-04-14 |      0.059 | $15,000.00     | $890.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
