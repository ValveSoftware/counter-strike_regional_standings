### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [90](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [66]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  926.6<br />
<br />
Final Rank Value (926.6) = Starting Rank Value (916.6) + Head To Head Adjustments (9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 916.6
- 400 + ( ( 0.258 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 916.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      403 | 2024-11-08 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -11.70 | Forester, Krad, nota, topo, TRAVIS   |
|           34 |      422 | 2024-11-07 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -10.38 | Forester, Krad, nota, topo, TRAVIS   |
|           33 |      462 | 2024-11-05 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |    -9.41 | Forester, Krad, nota, topo, TRAVIS   |
|           32 |      504 | 2024-11-03 | Into the Breach   | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.642 (0.247)    | 0 (0.000) |    20.80 | Forester, Krad, nota, topo, TRAVIS   |
|           31 |      603 | 2024-10-29 | 500               | L   | 1.000      | -            | -                | -                | -         |   -11.05 | Forester, Krad, nota, topo, TRAVIS   |
|           30 |     1537 | 2024-09-24 | Aurora            | L   | 0.789      | -            | -                | -                | -         |    -7.33 | Forester, Krad, nota, topo, TRAVIS   |
|           29 |     1584 | 2024-09-23 | Nemiga            | W   | 0.781      | 0.384        | 0.478 (0.144)    | 0.798 (0.240)    | 0 (0.000) |    22.57 | Forester, Krad, nota, topo, TRAVIS   |
|           28 |     1731 | 2024-09-18 | Into the Breach   | W   | 0.747      | 0.384        | 0.007 (0.002)    | 0.642 (0.184)    | 0 (0.000) |    13.56 | Forester, Krad, nota, topo, TRAVIS   |
|           27 |     1915 | 2024-09-12 | B8                | W   | 0.706      | 0.384        | 0.168 (0.045)    | 0.811 (0.220)    | 0 (0.000) |    19.62 | Forester, Krad, nota, topo, TRAVIS   |
|           26 |     2185 | 2024-09-03 | Passion UA        | W   | 0.646      | 0.384        | 0.103 (0.026)    | 1.000 (0.248)    | 0 (0.000) |    16.52 | Forester, Krad, nota, topo, TRAVIS   |
|           25 |     2222 | 2024-09-01 | Young Ninjas      | L   | 0.633      | -            | -                | -                | -         |   -11.13 | Forester, Krad, nota, topo, TRAVIS   |
|           24 |     2299 | 2024-08-29 | PARIVISION        | L   | 0.613      | -            | -                | -                | -         |    -5.03 | Forester, Krad, nota, topo, TRAVIS   |
|           23 |     2342 | 2024-08-28 | GUN5              | W   | 0.607      | 0.384        | 0.048 (0.011)    | 1.000 (0.233)    | 0 (0.000) |    12.21 | Forester, Krad, nota, topo, TRAVIS   |
|           22 |     2562 | 2024-08-23 | OG                | L   | 0.576      | -            | -                | -                | -         |    -5.37 | Forester, Krad, svyat, topo, TRAVIS  |
|           21 |     2595 | 2024-08-22 | Insilio           | L   | 0.568      | -            | -                | -                | -         |    -8.77 | Forester, Krad, nota, topo, TRAVIS   |
|           20 |     2632 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.562      | 0.535        | 0.090 (0.027)    | 0.313 (0.094)    | 0 (0.000) |    15.93 | Forester, Krad, svyat, topo, TRAVIS  |
|           19 |     2639 | 2024-08-21 | Sashi             | L   | 0.561      | -            | -                | -                | -         |    -4.78 | Forester, Krad, nota, topo, TRAVIS   |
|           18 |     2676 | 2024-08-21 | Permitta          | L   | 0.560      | -            | -                | -                | -         |    -3.04 | Forester, Krad, nota, topo, TRAVIS   |
|           17 |     2736 | 2024-08-19 | B8                | L   | 0.548      | -            | -                | -                | -         |    -1.91 | Forester, Krad, nota, topo, TRAVIS   |
|           16 |     2803 | 2024-08-16 | Young Ninjas      | L   | 0.529      | -            | -                | -                | -         |   -10.50 | Forester, Krad, nota, topo, TRAVIS   |
|           15 |     3052 | 2024-08-08 | MOUZ NXT          | L   | 0.473      | -            | -                | -                | -         |    -8.83 | Forester, Sdaim, svyat, topo, TRAVIS |
|           14 |     3206 | 2024-08-04 | Aurora Young Blud | L   | 0.446      | -            | -                | -                | -         |    -7.35 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           13 |     3295 | 2024-08-01 | Cloud9            | L   | 0.429      | -            | -                | -                | -         |    -4.61 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           12 |     3350 | 2024-07-31 | UNPAID            | L   | 0.421      | -            | -                | -                | -         |    -2.10 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           11 |     3493 | 2024-07-27 | The MongolZ       | L   | 0.393      | -            | -                | -                | -         |    -0.08 | Forester, Krad, Sdaim, shady, TRAVIS |
|           10 |     3527 | 2024-07-26 | DMS               | W   | 0.386      | 0.650        | -                | 0.519 (0.130)    | 1 (0.386) |     4.38 | Forester, Krad, Sdaim, shady, TRAVIS |
|            9 |     3561 | 2024-07-25 | Eternal Fire      | L   | 0.379      | -            | -                | -                | -         |    -0.21 | Forester, Krad, Sdaim, shady, TRAVIS |
|            8 |     3589 | 2024-07-24 | Revenant          | W   | 0.374      | 0.650        | 0.013 (0.003)    | 0.351 (0.085)    | 1 (0.374) |     4.75 | Forester, Krad, Sdaim, shady, TRAVIS |
|            7 |     3596 | 2024-07-24 | 3DMAX             | L   | 0.373      | -            | -                | -                | -         |    -0.34 | Forester, Krad, Sdaim, shady, TRAVIS |
|            6 |     4403 | 2024-06-09 | Monte             | W   | 0.075      | -            | -                | -                | 0 (0.000) |     0.47 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     4426 | 2024-06-09 | B8                | W   | 0.074      | 0.143        | 0.168 (0.002)    | 0.811 (0.009)    | -         |     2.08 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     4496 | 2024-06-08 | Monte             | W   | 0.067      | -            | -                | -                | -         |     0.41 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4499 | 2024-06-08 | 1WIN              | W   | 0.067      | -            | -                | -                | -         |     0.50 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     4795 | 2024-06-01 | MOUZ NXT          | L   | 0.020      | -            | -                | -                | -         |    -0.42 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     4813 | 2024-05-31 | Permitta          | W   | 0.015      | 0.435        | 0.062 (0.000)    | -                | -         |     0.45 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,286.36)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.801 | $1,000.00      | $801.25         |
| 2024-08-25 |      0.589 | $7,500.00      | $4,413.81       |
| 2024-07-28 |      0.401 | $15,000.00     | $6,016.13       |
| 2024-06-02 |      0.028 | $2,000.00      | $55.18          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
