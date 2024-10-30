### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [65](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [46]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  1011.8<br />
<br />
Final Rank Value (1011.8) = Starting Rank Value (1022.9) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.460[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.9
- 400 + ( ( 0.314 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1022.9


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
|           37 |       24 | 2024-10-29 | 500               | L   | 1.000      | -            | -                | -                | -         |   -17.27 | Forester, Krad, nota, topo, TRAVIS   |
|           36 |      958 | 2024-09-24 | Aurora            | L   | 0.961      | -            | -                | -                | -         |    -9.31 | Forester, Krad, nota, topo, TRAVIS   |
|           35 |     1005 | 2024-09-23 | Nemiga            | W   | 0.953      | 0.384        | 0.838 (0.307)    | 0.786 (0.288)    | 0 (0.000) |    26.47 | Forester, Krad, nota, topo, TRAVIS   |
|           34 |     1152 | 2024-09-18 | Into the Breach   | W   | 0.919      | 0.384        | -                | 0.648 (0.229)    | 0 (0.000) |    14.34 | Forester, Krad, nota, topo, TRAVIS   |
|           33 |     1336 | 2024-09-12 | B8                | W   | 0.878      | 0.384        | 0.324 (0.109)    | 1.000 (0.338)    | 0 (0.000) |    23.70 | Forester, Krad, nota, topo, TRAVIS   |
|           32 |     1606 | 2024-09-03 | Passion UA        | W   | 0.818      | 0.384        | 0.221 (0.070)    | 1.000 (0.314)    | 0 (0.000) |    17.47 | Forester, Krad, nota, topo, TRAVIS   |
|           31 |     1643 | 2024-09-01 | Young Ninjas      | L   | 0.806      | -            | -                | -                | -         |   -15.05 | Forester, Krad, nota, topo, TRAVIS   |
|           30 |     1720 | 2024-08-29 | PARIVISION        | L   | 0.786      | -            | -                | -                | -         |    -7.22 | Forester, Krad, nota, topo, TRAVIS   |
|           29 |     1763 | 2024-08-28 | GUN5              | W   | 0.779      | 0.384        | 0.106 (0.032)    | 1.000 (0.299)    | 0 (0.000) |    13.52 | Forester, Krad, nota, topo, TRAVIS   |
|           28 |     1983 | 2024-08-23 | OG                | L   | 0.749      | -            | -                | -                | -         |   -10.34 | Forester, Krad, svyat, topo, TRAVIS  |
|           27 |     2016 | 2024-08-22 | Insilio           | L   | 0.740      | -            | -                | -                | -         |   -13.67 | Forester, Krad, nota, topo, TRAVIS   |
|           26 |     2053 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.734      | 0.535        | 0.156 (0.061)    | 0.225 (0.089)    | 0 (0.000) |    18.78 | Forester, Krad, svyat, topo, TRAVIS  |
|           25 |     2060 | 2024-08-21 | Sashi             | L   | 0.733      | -            | -                | -                | -         |    -9.58 | Forester, Krad, nota, topo, TRAVIS   |
|           24 |     2097 | 2024-08-21 | Permitta          | L   | 0.732      | -            | -                | -                | -         |   -10.77 | Forester, Krad, nota, topo, TRAVIS   |
|           23 |     2157 | 2024-08-19 | B8                | L   | 0.720      | -            | -                | -                | -         |    -2.79 | Forester, Krad, nota, topo, TRAVIS   |
|           22 |     2224 | 2024-08-16 | Young Ninjas      | L   | 0.701      | -            | -                | -                | -         |   -15.24 | Forester, Krad, nota, topo, TRAVIS   |
|           21 |     2473 | 2024-08-08 | MOUZ NXT          | L   | 0.645      | -            | -                | -                | -         |   -11.88 | Forester, Sdaim, svyat, topo, TRAVIS |
|           20 |     2627 | 2024-08-04 | Aurora Young Blud | L   | 0.619      | -            | -                | -                | -         |   -12.07 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           19 |     2716 | 2024-08-01 | Cloud9            | L   | 0.601      | -            | -                | -                | -         |   -12.23 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           18 |     2771 | 2024-07-31 | UNPAID            | L   | 0.593      | -            | -                | -                | -         |    -2.79 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           17 |     2914 | 2024-07-27 | The MongolZ       | L   | 0.566      | -            | -                | -                | -         |    -0.36 | Forester, Krad, Sdaim, shady, TRAVIS |
|           16 |     2948 | 2024-07-26 | DMS               | W   | 0.558      | 0.650        | -                | 0.524 (0.190)    | 1 (0.558) |     4.88 | Forester, Krad, Sdaim, shady, TRAVIS |
|           15 |     2982 | 2024-07-25 | Eternal Fire      | L   | 0.552      | -            | -                | -                | -         |    -0.14 | Forester, Krad, Sdaim, shady, TRAVIS |
|           14 |     3010 | 2024-07-24 | Revenant          | W   | 0.546      | 0.650        | 0.032 (0.011)    | 0.453 (0.161)    | 1 (0.546) |     5.52 | Forester, Krad, Sdaim, shady, TRAVIS |
|           13 |     3017 | 2024-07-24 | 3DMAX             | L   | 0.545      | -            | -                | -                | -         |    -1.27 | Forester, Krad, Sdaim, shady, TRAVIS |
|           12 |     3824 | 2024-06-09 | Monte             | W   | 0.247      | -            | -                | -                | 0 (0.000) |     1.51 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           11 |     3847 | 2024-06-09 | B8                | W   | 0.246      | 0.143        | 0.324 (0.011)    | -                | 0 (0.000) |     6.98 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           10 |     3917 | 2024-06-08 | Monte             | W   | 0.239      | -            | -                | -                | -         |     1.42 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            9 |     3920 | 2024-06-08 | 1WIN              | W   | 0.239      | -            | -                | -                | -         |     1.54 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            8 |     4216 | 2024-06-01 | MOUZ NXT          | L   | 0.192      | -            | -                | -                | -         |    -4.07 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            7 |     4234 | 2024-05-31 | Permitta          | W   | 0.188      | 0.435        | 0.060 (0.005)    | 1.000 (0.082)    | -         |     3.97 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            6 |     4481 | 2024-05-21 | GamerLegion       | L   | 0.121      | -            | -                | -                | -         |    -1.44 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     4552 | 2024-05-19 | paiN              | W   | 0.107      | 0.769        | 0.397 (0.032)    | 0.766 (0.063)    | -         |     3.25 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     4556 | 2024-05-19 | Liquid            | L   | 0.106      | -            | -                | -                | -         |    -0.10 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4576 | 2024-05-18 | paiN              | W   | 0.100      | 0.769        | 0.397 (0.031)    | -                | -         |     3.06 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     4974 | 2024-05-04 | BetBoom           | W   | 0.007      | -            | -                | -                | -         |     0.14 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     4984 | 2024-05-04 | Metizport         | W   | 0.005      | -            | -                | -                | -         |     0.01 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,491.56)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.973 | $1,000.00      | $973.39         |
| 2024-08-25 |      0.761 | $7,500.00      | $5,704.92       |
| 2024-07-28 |      0.573 | $15,000.00     | $8,598.36       |
| 2024-06-02 |      0.200 | $2,000.00      | $399.48         |
| 2024-05-23 |      0.133 | $12,500.00     | $1,668.51       |
| 2024-05-04 |      0.007 | $22,000.00     | $146.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
