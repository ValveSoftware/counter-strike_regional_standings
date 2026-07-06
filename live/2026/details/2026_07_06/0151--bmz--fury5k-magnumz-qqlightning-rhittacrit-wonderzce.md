### Roster Details<br />
Team Name: BMZ<br />
Roster: fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce<br />
Global Rank: [151](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [15]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  837.7<br />
<br />
Final Rank Value (837.7) = Starting Rank Value (858.5) + Head To Head Adjustments (-20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.330[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.5
- 400 + ( ( 0.243 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 858.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1622 | 2026-05-02 | Last Bullet         | L   | 0.764      | -            | -                | -                | -         |   -13.46 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|           33 |     1660 | 2026-05-01 | WYDO                | W   | 0.760      | -            | -                | -                | 1 (0.760) |     1.75 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|           32 |     1710 | 2026-04-30 | ZEVS                | L   | 0.752      | -            | -                | -                | -         |   -18.40 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|           31 |     1786 | 2026-04-28 | The QUBE            | L   | 0.740      | -            | -                | -                | -         |   -14.87 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|           30 |     1845 | 2026-04-27 | The Huns            | L   | 0.731      | -            | -                | -                | -         |    -5.83 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|           29 |     1888 | 2026-04-26 | Last Bullet         | W   | 0.727      | 0.333        | 0.002 (0.001)    | 0.206 (0.050)    | 0 (0.000) |     9.02 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|           28 |     2401 | 2026-04-07 | NEXVOID             | L   | 0.600      | -            | -                | -                | -         |    -6.99 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           27 |     2436 | 2026-04-06 | The QUBE            | W   | 0.593      | 0.333        | 0.003 (0.001)    | 0.201 (0.040)    | 0 (0.000) |     6.66 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           26 |     2482 | 2026-04-05 | FengDa              | L   | 0.587      | -            | -                | -                | -         |   -12.51 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           25 |     2659 | 2026-04-03 | TYLOO               | W   | 0.572      | 0.333        | 0.098 (0.019)    | 0.629 (0.120)    | 0 (0.000) |    17.27 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           24 |     2736 | 2026-04-02 | BORING PLAYERS      | W   | 0.567      | 0.333        | -                | 0.168 (0.032)    | -         |     5.27 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           23 |     3223 | 2026-03-27 | FengDa              | L   | 0.527      | -            | -                | -                | -         |   -11.65 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|           22 |     3313 | 2026-03-25 | FengDa              | W   | 0.513      | 0.333        | 0.010 (0.002)    | -                | -         |     4.62 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|           21 |     3441 | 2026-03-23 | Just Swing          | W   | 0.500      | 0.333        | -                | 0.236 (0.039)    | -         |     5.43 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|           20 |     3504 | 2026-03-22 | Chinggis Warriors   | L   | 0.492      | -            | -                | -                | -         |    -5.08 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           19 |     3549 | 2026-03-21 | Kaleido             | W   | 0.487      | 0.333        | 0.015 (0.003)    | 0.238 (0.039)    | -         |     7.80 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|           18 |     3555 | 2026-03-21 | NEXVOID             | W   | 0.486      | 0.308        | 0.010 (0.002)    | 0.322 (0.048)    | 1 (0.486) |     9.76 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           17 |     3566 | 2026-03-21 | Chinggis Warriors   | L   | 0.485      | -            | -                | -                | -         |    -4.63 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           16 |     3617 | 2026-03-20 | Last Bullet         | W   | 0.480      | 0.333        | -                | 0.206 (0.033)    | -         |     7.77 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|           15 |     3671 | 2026-03-19 | The Huns            | W   | 0.471      | 0.308        | 0.043 (0.006)    | 0.413 (0.060)    | 1 (0.471) |    12.02 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           14 |     3702 | 2026-03-18 | 5star               | L   | 0.466      | -            | -                | -                | -         |    -3.27 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           13 |     3751 | 2026-03-17 | The QUBE            | W   | 0.459      | 0.308        | 0.003 (0.000)    | -                | 1 (0.459) |     5.27 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           12 |     3760 | 2026-03-17 | The MongolZ Academy | W   | 0.458      | -            | -                | -                | 1 (0.458) |     1.12 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           11 |     3762 | 2026-03-16 | The QUBE            | L   | 0.457      | -            | -                | -                | -         |    -9.36 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhittacrit      |
|           10 |     4582 | 2026-02-27 | Chinggis Warriors   | L   | 0.344      | -            | -                | -                | -         |    -3.17 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|            9 |     4614 | 2026-02-27 | The Huns            | L   | 0.340      | -            | -                | -                | -         |    -2.13 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|            8 |     4698 | 2026-02-26 | NEXVOID             | W   | 0.332      | 0.284        | 0.010 (0.001)    | 0.322 (0.030)    | 1 (0.332) |     6.73 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|            7 |     5040 | 2026-02-19 | Arise               | L   | 0.287      | -            | -                | -                | -         |    -7.39 | BestronG, fury5k, MagnumZ, sideffect, Wonderzce     |
|            6 |     5091 | 2026-02-18 | Last Bullet         | L   | 0.280      | -            | -                | -                | -         |    -4.28 | fury5k, MagnumZ, sideffect, Wonderzce, xenization   |
|            5 |     5622 | 2026-02-06 | The Huns            | L   | 0.198      | -            | -                | -                | -         |    -1.34 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|            4 |     5639 | 2026-02-05 | 5star               | W   | 0.193      | 0.284        | 0.019 (0.001)    | -                | 1 (0.193) |     4.84 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|            3 |     5647 | 2026-02-04 | NEXVOID             | L   | 0.190      | -            | -                | -                | -         |    -2.28 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce        |
|            2 |     6018 | 2026-01-23 | Lynn Vision         | L   | 0.107      | -            | -                | -                | -         |    -0.22 | fury5k, MagnumZ, sideffect, Wonderzce, xenization   |
|            1 |     6160 | 2026-01-18 | FengDa              | W   | 0.078      | -            | -                | -                | -         |     0.69 | fury5k, MagnumZ, sideffect, Wonderzce, xenization   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,996.35)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.613 | $1,000.00      | $613.18         |
| 2026-03-27 |      0.527 | $2,500.00      | $1,316.81       |
| 2026-03-22 |      0.492 | $1,405.00      | $691.23         |
| 2026-02-28 |      0.345 | $375.00        | $129.32         |
| 2026-02-06 |      0.200 | $375.00        | $74.82          |
| 2026-01-25 |      0.119 | $1,433.00      | $170.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
