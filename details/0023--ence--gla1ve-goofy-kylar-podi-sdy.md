### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Global Rank: [23](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1360.8<br />
<br />
Final Rank Value (1360.8) = Starting Rank Value (1491.1) + Head To Head Adjustments (-130.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.569[<sup>1</sup>](#table2)
- Bounty Collected: 0.467[<sup>2</sup>](#table1)
- Opponent Network: 0.249[<sup>2</sup>](#table1)
- LAN Wins: 0.829[<sup>2</sup>](#table1)

The average of these factors is 0.528<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1491.1
- 400 + ( ( 0.528 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1491.1


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
|           47 |      148 | 2024-07-27 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -15.66 | gla1ve, Goofy, Kylar, podi, sdy    |
|           46 |      177 | 2024-07-26 | True Rippers       | W   | 1.000      | 0.650        | -                | 0.173 (0.112)    | 1 (1.000) |     0.82 | gla1ve, Goofy, Kylar, podi, sdy    |
|           45 |      216 | 2024-07-25 | PARIVISION         | W   | 1.000      | 0.650        | 0.018 (0.012)    | 0.452 (0.294)    | 1 (1.000) |     5.25 | gla1ve, Goofy, Kylar, podi, sdy    |
|           44 |      225 | 2024-07-25 | Aurora             | L   | 1.000      | -            | -                | -                | -         |   -12.40 | gla1ve, Goofy, Kylar, podi, sdy    |
|           43 |      247 | 2024-07-24 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -3.96 | gla1ve, Goofy, Kylar, podi, sdy    |
|           42 |      257 | 2024-07-24 | BLEED              | W   | 1.000      | 0.650        | 0.128 (0.084)    | 0.512 (0.333)    | 1 (1.000) |    12.82 | gla1ve, Goofy, Kylar, podi, sdy    |
|           41 |      857 | 2024-06-16 | Falcons            | L   | 0.898      | -            | -                | -                | -         |   -11.02 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      926 | 2024-06-14 | Complexity         | W   | 0.885      | 0.500        | 0.319 (0.141)    | 0.367 (0.163)    | 1 (0.885) |    21.85 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      933 | 2024-06-14 | MIBR               | W   | 0.885      | 0.500        | 0.202 (0.089)    | 0.610 (0.270)    | 1 (0.885) |    16.44 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |     1268 | 2024-06-06 | HEROIC             | L   | 0.832      | -            | -                | -                | -         |    -6.01 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |     1281 | 2024-06-06 | Astralis           | L   | 0.831      | -            | -                | -                | -         |    -3.67 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |     1318 | 2024-06-05 | Sashi              | W   | 0.826      | 0.715        | 0.187 (0.110)    | 0.973 (0.575)    | 1 (0.826) |     8.42 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |     1328 | 2024-06-05 | The MongolZ        | L   | 0.825      | -            | -                | -                | -         |    -1.12 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |     1338 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.824      | -            | -                | -                | -         |    -7.55 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1443 | 2024-06-01 | DMS                | L   | 0.799      | -            | -                | -                | -         |   -22.75 | gla1ve, Goofy, Kylar, podi, sdy    |
|           32 |     1449 | 2024-06-01 | KOI                | W   | 0.799      | -            | -                | -                | -         |     3.63 | gla1ve, Goofy, Kylar, podi, sdy    |
|           31 |     1458 | 2024-06-01 | DMS                | L   | 0.798      | -            | -                | -                | -         |   -23.10 | gla1ve, Goofy, Kylar, podi, sdy    |
|           30 |     1738 | 2024-05-21 | Liquid             | L   | 0.724      | -            | -                | -                | -         |    -9.04 | dycha, gla1ve, Goofy, hades, Kylar |
|           29 |     1821 | 2024-05-18 | fnatic             | W   | 0.705      | 0.769        | 0.374 (0.203)    | 0.633 (0.343)    | -         |    13.88 | dycha, gla1ve, Goofy, hades, Kylar |
|           28 |     1845 | 2024-05-17 | Gaimin Gladiators  | W   | 0.700      | 0.769        | 0.040 (0.022)    | 0.363 (0.196)    | -         |     2.36 | dycha, gla1ve, Goofy, hades, Kylar |
|           27 |     1858 | 2024-05-17 | fnatic             | L   | 0.698      | -            | -                | -                | -         |    -7.66 | dycha, gla1ve, Goofy, hades, Kylar |
|           26 |     2214 | 2024-05-04 | FURIA              | L   | 0.612      | -            | -                | -                | -         |    -3.86 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     2230 | 2024-05-03 | GamerLegion        | L   | 0.605      | -            | -                | -                | -         |   -15.49 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     2249 | 2024-05-02 | Monte              | W   | 0.600      | 0.889        | 0.062 (0.033)    | 0.170 (0.091)    | 1 (0.600) |     1.85 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     2276 | 2024-05-01 | Bad News Kangaroos | W   | 0.592      | 0.889        | 0.017 (0.009)    | -                | 1 (0.592) |     0.56 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     2307 | 2024-04-30 | GamerLegion        | L   | 0.585      | -            | -                | -                | -         |   -15.46 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     2572 | 2024-04-19 | AMKAL              | L   | 0.512      | -            | -                | -                | -         |   -13.57 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     2655 | 2024-04-17 | Enterprise         | W   | 0.498      | 0.384        | -                | 0.622 (0.119)    | -         |     0.81 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     2824 | 2024-04-10 | OG                 | L   | 0.452      | -            | -                | -                | -         |   -13.07 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     2907 | 2024-04-08 | FORZE              | L   | 0.439      | -            | -                | -                | -         |   -13.14 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     3018 | 2024-04-04 | Aurora Young Blud  | W   | 0.411      | -            | -                | -                | -         |     0.33 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     3313 | 2024-03-19 | FURIA              | L   | 0.306      | -            | -                | -                | -         |    -1.82 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     3329 | 2024-03-18 | paiN               | L   | 0.298      | -            | -                | -                | -         |    -5.42 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     3338 | 2024-03-17 | KOI                | W   | 0.293      | -            | -                | -                | 1 (0.293) |     1.01 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     3355 | 2024-03-17 | Imperial           | L   | 0.292      | -            | -                | -                | -         |    -6.82 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3485 | 2024-03-12 | B8                 | L   | 0.259      | -            | -                | -                | -         |    -7.33 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3498 | 2024-03-11 | HEROIC             | L   | 0.253      | -            | -                | -                | -         |    -3.05 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3511 | 2024-03-11 | Metizport          | W   | 0.252      | -            | -                | -                | -         |     0.31 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     3911 | 2024-02-22 | Astralis           | W   | 0.131      | -            | -                | -                | 1 (0.131) |     3.13 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     3933 | 2024-02-21 | Vitality           | L   | 0.125      | -            | -                | -                | -         |    -0.48 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3965 | 2024-02-20 | GamerLegion        | W   | 0.118      | -            | -                | -                | -         |     0.08 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3986 | 2024-02-19 | ex-Guild Eagles    | W   | 0.112      | -            | -                | -                | -         |     0.08 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     3994 | 2024-02-19 | Spirit             | L   | 0.111      | -            | -                | -                | -         |    -0.29 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     4198 | 2024-02-09 | Falcons            | L   | 0.047      | -            | -                | -                | -         |    -0.83 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     4232 | 2024-02-06 | MOUZ               | L   | 0.026      | -            | -                | -                | -         |    -0.09 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     4243 | 2024-02-05 | G2                 | W   | 0.019      | 1.000        | 1.000 (0.019)    | -                | -         |     0.57 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     4279 | 2024-02-03 | Vitality           | W   | 0.007      | -            | -                | -                | -         |     0.20 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($57,399.11)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-16 |      0.899 | $10,000.00     | $8,985.52       |
| 2024-06-09 |      0.852 | $8,000.00      | $6,819.67       |
| 2024-05-23 |      0.739 | $12,500.00     | $9,240.55       |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |
| 2024-04-14 |      0.479 | $15,000.00     | $7,188.12       |
| 2024-03-20 |      0.313 | $10,000.00     | $3,128.21       |
| 2024-02-11 |      0.059 | $40,000.00     | $2,376.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
