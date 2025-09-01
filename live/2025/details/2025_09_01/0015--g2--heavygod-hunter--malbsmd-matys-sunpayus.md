### Roster Details<br />
Team Name: G2<br />
Roster: HeavyGod, huNter-, malbsMd, MATYS, SunPayus<br />
Global Rank: [15](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1515.2<br />
<br />
Final Rank Value (1515.2) = Starting Rank Value (1444.4) + Head To Head Adjustments (70.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.700[<sup>1</sup>](#table2)
- Bounty Collected: 0.608[<sup>2</sup>](#table1)
- Opponent Network: 0.273[<sup>2</sup>](#table1)
- LAN Wins: 0.597[<sup>2</sup>](#table1)

The average of these factors is 0.544<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1444.4
- 400 + ( ( 0.544 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1444.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      181 | 2025-08-21 | Falcons       | L   | 1.000      | -            | -                | -                | -         |    -7.49 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           32 |      545 | 2025-08-09 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -1.82 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           31 |      609 | 2025-08-05 | Nemiga        | W   | 1.000      | 0.624        | -                | 0.489 (0.305)    | -         |     4.18 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           30 |      704 | 2025-07-29 | FURIA         | L   | 0.974      | -            | -                | -                | -         |    -8.91 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           29 |      728 | 2025-07-28 | 3DMAX         | W   | 0.967      | 1.000        | 0.440 (0.425)    | 0.533 (0.515)    | 1 (0.967) |    20.15 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           28 |      758 | 2025-07-27 | Vitality      | L   | 0.961      | -            | -                | -                | -         |    -1.51 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           27 |      794 | 2025-07-26 | FURIA         | W   | 0.953      | 1.000        | 0.412 (0.393)    | 0.556 (0.529)    | 1 (0.953) |    21.28 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           26 |     1380 | 2025-06-15 | The MongolZ   | L   | 0.681      | -            | -                | -                | -         |    -1.84 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           25 |     1405 | 2025-06-14 | Natus Vincere | L   | 0.675      | -            | -                | -                | -         |    -5.21 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           24 |     1459 | 2025-06-13 | Aurora        | W   | 0.667      | 1.000        | 1.000 (0.667)    | 0.435 (0.290)    | 1 (0.667) |    17.18 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           23 |     1475 | 2025-06-12 | paiN          | W   | 0.662      | 1.000        | 0.233 (0.154)    | 0.330 (0.219)    | 1 (0.662) |     9.87 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           22 |     1490 | 2025-06-12 | 3DMAX         | L   | 0.660      | -            | -                | -                | -         |    -4.70 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           21 |     1771 | 2025-05-21 | GamerLegion   | L   | 0.516      | -            | -                | -                | -         |    -8.13 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           20 |     1775 | 2025-05-21 | 3DMAX         | W   | 0.515      | 1.000        | 0.440 (0.226)    | 0.533 (0.274)    | 1 (0.515) |    12.74 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           19 |     1797 | 2025-05-20 | The MongolZ   | L   | 0.509      | -            | -                | -                | -         |    -1.00 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           18 |     1828 | 2025-05-19 | Lynn Vision   | W   | 0.502      | 1.000        | 0.252 (0.127)    | 0.612 (0.307)    | 1 (0.502) |     9.63 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           17 |     2671 | 2025-04-13 | Falcons       | L   | 0.260      | -            | -                | -                | -         |    -1.24 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           16 |     2683 | 2025-04-12 | Passion UA    | W   | 0.254      | 1.000        | 0.195 (0.049)    | -                | 1 (0.254) |     1.97 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           15 |     2708 | 2025-04-11 | Virtus.pro    | W   | 0.247      | 1.000        | 0.230 (0.057)    | 0.389 (0.096)    | 1 (0.247) |     3.79 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           14 |     2799 | 2025-04-08 | Passion UA    | W   | 0.226      | -            | -                | -                | 1 (0.226) |     1.70 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           13 |     2840 | 2025-04-07 | Rare Atom     | W   | 0.218      | 1.000        | -                | 0.532 (0.116)    | 1 (0.218) |     1.27 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           12 |     2856 | 2025-04-06 | GamerLegion   | W   | 0.212      | 1.000        | 0.393 (0.083)    | 0.359 (0.076)    | -         |     3.48 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           11 |     3194 | 2025-03-28 | MOUZ          | L   | 0.154      | -            | -                | -                | -         |    -0.28 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           10 |     3389 | 2025-03-24 | The MongolZ   | W   | 0.128      | 0.715        | 1.000 (0.091)    | -                | -         |     3.83 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            9 |     3410 | 2025-03-23 | M80           | W   | 0.122      | -            | -                | -                | -         |     0.70 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            8 |     3430 | 2025-03-22 | Aurora        | L   | 0.114      | -            | -                | -                | -         |    -0.44 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            7 |     3486 | 2025-03-20 | Imperial      | W   | 0.099      | -            | -                | -                | -         |     0.61 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            6 |     3669 | 2025-03-13 | MOUZ          | L   | 0.055      | -            | -                | -                | -         |    -0.10 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            5 |     3703 | 2025-03-11 | GamerLegion   | W   | 0.041      | -            | -                | -                | -         |     0.69 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            4 |     3740 | 2025-03-10 | Natus Vincere | L   | 0.034      | -            | -                | -                | -         |    -0.21 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            3 |     3809 | 2025-03-09 | SAW           | W   | 0.026      | -            | -                | -                | -         |     0.31 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            2 |     3879 | 2025-03-08 | The MongolZ   | L   | 0.020      | -            | -                | -                | -         |    -0.03 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            1 |     3934 | 2025-03-07 | paiN          | W   | 0.014      | -            | -                | -                | -         |     0.25 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($156,991.82)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.37) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-24 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-08-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-08-03 |      1.000 | $38,000.00     | $38,000.00      |
| 2025-06-22 |      0.728 | $20,000.00     | $14,565.68      |
| 2025-05-25 |      0.542 | $47,000.00     | $25,462.67      |
| 2025-04-13 |      0.260 | $187,500.00    | $48,816.02      |
| 2025-03-30 |      0.168 | $20,000.00     | $3,357.63       |
| 2025-03-16 |      0.074 | $58,000.00     | $4,289.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
