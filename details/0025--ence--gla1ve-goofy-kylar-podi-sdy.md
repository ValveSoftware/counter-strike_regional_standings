### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Global Rank: [25](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1289.7<br />
<br />
Final Rank Value (1289.7) = Starting Rank Value (1396.4) + Head To Head Adjustments (-106.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.557[<sup>1</sup>](#table2)
- Bounty Collected: 0.460[<sup>2</sup>](#table1)
- Opponent Network: 0.268[<sup>2</sup>](#table1)
- LAN Wins: 0.735[<sup>2</sup>](#table1)

The average of these factors is 0.505<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1396.4
- 400 + ( ( 0.505 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1396.4


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
|           45 |      304 | 2024-08-05 | PARIVISION         | L   | 1.000      | -            | -                | -                | -         |   -24.30 | gla1ve, Goofy, Kylar, podi, sdy    |
|           44 |      325 | 2024-08-04 | 9INE               | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.557 (0.242)    | -         |     3.21 | gla1ve, Goofy, Kylar, podi, sdy    |
|           43 |      629 | 2024-07-27 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -14.18 | gla1ve, Goofy, Kylar, podi, sdy    |
|           42 |      658 | 2024-07-26 | True Rippers       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.91 | gla1ve, Goofy, Kylar, podi, sdy    |
|           41 |      697 | 2024-07-25 | PARIVISION         | W   | 1.000      | 0.650        | 0.047 (0.031)    | 0.627 (0.408)    | 1 (1.000) |     6.97 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      706 | 2024-07-25 | Aurora             | L   | 1.000      | -            | -                | -                | -         |   -11.33 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      728 | 2024-07-24 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -3.38 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |      738 | 2024-07-24 | BLEED              | W   | 1.000      | 0.650        | 0.117 (0.076)    | 0.520 (0.338)    | 1 (1.000) |    13.27 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |     1338 | 2024-06-16 | Falcons            | L   | 0.805      | -            | -                | -                | -         |    -6.51 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |     1407 | 2024-06-14 | Complexity         | W   | 0.792      | 0.500        | 0.369 (0.146)    | 0.403 (0.160)    | 1 (0.792) |    20.83 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |     1414 | 2024-06-14 | MIBR               | W   | 0.791      | 0.500        | 0.204 (0.081)    | 0.655 (0.259)    | 1 (0.791) |    15.75 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |     1749 | 2024-06-06 | HEROIC             | L   | 0.739      | -            | -                | -                | -         |    -5.61 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1762 | 2024-06-06 | Astralis           | L   | 0.738      | -            | -                | -                | -         |    -2.51 | gla1ve, Goofy, Kylar, podi, sdy    |
|           32 |     1799 | 2024-06-05 | Sashi              | W   | 0.733      | 0.715        | 0.183 (0.096)    | 1.000 (0.524)    | 1 (0.733) |     7.96 | gla1ve, Goofy, Kylar, podi, sdy    |
|           31 |     1809 | 2024-06-05 | The MongolZ        | L   | 0.732      | -            | -                | -                | -         |    -0.85 | gla1ve, Goofy, Kylar, podi, sdy    |
|           30 |     1819 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.731      | -            | -                | -                | -         |    -6.31 | gla1ve, Goofy, Kylar, podi, sdy    |
|           29 |     1924 | 2024-06-01 | DMS                | L   | 0.706      | -            | -                | -                | -         |   -19.68 | gla1ve, Goofy, Kylar, podi, sdy    |
|           28 |     1930 | 2024-06-01 | KOI                | W   | 0.706      | -            | -                | -                | -         |     3.16 | gla1ve, Goofy, Kylar, podi, sdy    |
|           27 |     1939 | 2024-06-01 | DMS                | L   | 0.704      | -            | -                | -                | -         |   -19.98 | gla1ve, Goofy, Kylar, podi, sdy    |
|           26 |     2219 | 2024-05-21 | Liquid             | L   | 0.631      | -            | -                | -                | -         |    -2.50 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     2302 | 2024-05-18 | fnatic             | W   | 0.612      | 0.769        | 0.352 (0.165)    | 0.639 (0.301)    | -         |    11.49 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     2326 | 2024-05-17 | Gaimin Gladiators  | W   | 0.607      | 0.769        | 0.032 (0.015)    | 0.326 (0.152)    | -         |     2.00 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     2339 | 2024-05-17 | fnatic             | L   | 0.605      | -            | -                | -                | -         |    -7.31 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     2695 | 2024-05-04 | FURIA              | L   | 0.519      | -            | -                | -                | -         |    -2.73 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     2711 | 2024-05-03 | GamerLegion        | L   | 0.512      | -            | -                | -                | -         |   -13.21 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     2730 | 2024-05-02 | Monte              | W   | 0.506      | 0.889        | 0.101 (0.046)    | 0.425 (0.191)    | 1 (0.506) |     2.44 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     2757 | 2024-05-01 | Bad News Kangaroos | W   | 0.499      | -            | -                | -                | 1 (0.499) |     0.54 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     2788 | 2024-04-30 | GamerLegion        | L   | 0.491      | -            | -                | -                | -         |   -13.01 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     3053 | 2024-04-19 | AMKAL              | L   | 0.419      | -            | -                | -                | -         |   -10.70 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     3136 | 2024-04-17 | Enterprise         | W   | 0.405      | 0.384        | 0.042 (0.006)    | 0.687 (0.107)    | -         |     0.88 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     3305 | 2024-04-10 | OG                 | L   | 0.359      | -            | -                | -                | -         |   -10.33 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     3388 | 2024-04-08 | FORZE              | L   | 0.345      | -            | -                | -                | -         |   -10.30 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     3499 | 2024-04-04 | Aurora Young Blud  | W   | 0.318      | -            | -                | -                | -         |     0.66 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3794 | 2024-03-19 | FURIA              | L   | 0.213      | -            | -                | -                | -         |    -1.09 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3810 | 2024-03-18 | paiN               | L   | 0.204      | -            | -                | -                | -         |    -1.52 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3819 | 2024-03-17 | KOI                | W   | 0.200      | -            | -                | -                | 1 (0.200) |     0.73 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     3836 | 2024-03-17 | Imperial           | L   | 0.198      | -            | -                | -                | -         |    -4.79 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     3966 | 2024-03-12 | B8                 | L   | 0.166      | -            | -                | -                | -         |    -4.55 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3979 | 2024-03-11 | HEROIC             | L   | 0.160      | -            | -                | -                | -         |    -1.93 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3992 | 2024-03-11 | Metizport          | W   | 0.159      | -            | -                | -                | -         |     0.19 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     4392 | 2024-02-22 | Astralis           | W   | 0.038      | -            | -                | -                | 1 (0.038) |     0.99 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     4414 | 2024-02-21 | Vitality           | L   | 0.032      | -            | -                | -                | -         |    -0.08 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     4446 | 2024-02-20 | GamerLegion        | W   | 0.025      | -            | -                | -                | -         |     0.02 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     4467 | 2024-02-19 | ex-Guild Eagles    | W   | 0.019      | -            | -                | -                | -         |     0.02 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     4475 | 2024-02-19 | Spirit             | L   | 0.018      | -            | -                | -                | -         |    -0.05 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($51,194.48)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-28 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-16 |      0.805 | $10,000.00     | $8,053.08       |
| 2024-06-09 |      0.759 | $8,000.00      | $6,073.72       |
| 2024-05-23 |      0.646 | $12,500.00     | $8,075.01       |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |
| 2024-04-14 |      0.386 | $15,000.00     | $5,789.47       |
| 2024-03-20 |      0.220 | $10,000.00     | $2,195.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
