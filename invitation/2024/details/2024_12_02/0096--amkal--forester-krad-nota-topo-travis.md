### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [96](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [72]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  916.7<br />
<br />
Final Rank Value (916.7) = Starting Rank Value (902.9) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 902.9
- 400 + ( ( 0.250 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 902.9


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
|           33 |      536 | 2024-11-08 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -11.23 | Forester, Krad, nota, topo, TRAVIS   |
|           32 |      555 | 2024-11-07 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -9.34 | Forester, Krad, nota, topo, TRAVIS   |
|           31 |      595 | 2024-11-05 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |    -8.79 | Forester, Krad, nota, topo, TRAVIS   |
|           30 |      637 | 2024-11-03 | Into the Breach   | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.639 (0.245)    | 0 (0.000) |    21.14 | Forester, Krad, nota, topo, TRAVIS   |
|           29 |      736 | 2024-10-29 | 500               | L   | 0.974      | -            | -                | -                | -         |   -10.31 | Forester, Krad, nota, topo, TRAVIS   |
|           28 |     1670 | 2024-09-24 | Aurora            | L   | 0.741      | -            | -                | -                | -         |    -7.06 | Forester, Krad, nota, topo, TRAVIS   |
|           27 |     1717 | 2024-09-23 | Nemiga            | W   | 0.734      | 0.384        | 0.490 (0.138)    | 0.784 (0.221)    | 0 (0.000) |    21.32 | Forester, Krad, nota, topo, TRAVIS   |
|           26 |     1864 | 2024-09-18 | Into the Breach   | W   | 0.699      | 0.384        | 0.007 (0.002)    | 0.639 (0.172)    | 0 (0.000) |    12.95 | Forester, Krad, nota, topo, TRAVIS   |
|           25 |     2048 | 2024-09-12 | B8                | W   | 0.659      | 0.384        | 0.172 (0.043)    | 0.787 (0.199)    | 0 (0.000) |    18.41 | Forester, Krad, nota, topo, TRAVIS   |
|           24 |     2318 | 2024-09-03 | Passion UA        | W   | 0.598      | 0.384        | 0.101 (0.023)    | 1.000 (0.230)    | 0 (0.000) |    16.52 | Forester, Krad, nota, topo, TRAVIS   |
|           23 |     2355 | 2024-09-01 | Young Ninjas      | L   | 0.586      | -            | -                | -                | -         |   -10.34 | Forester, Krad, nota, topo, TRAVIS   |
|           22 |     2432 | 2024-08-29 | PARIVISION        | L   | 0.566      | -            | -                | -                | -         |    -4.63 | Forester, Krad, nota, topo, TRAVIS   |
|           21 |     2475 | 2024-08-28 | GUN5              | W   | 0.560      | 0.384        | 0.048 (0.010)    | 1.000 (0.215)    | 0 (0.000) |    11.49 | Forester, Krad, nota, topo, TRAVIS   |
|           20 |     2695 | 2024-08-23 | OG                | L   | 0.529      | -            | -                | -                | -         |    -4.72 | Forester, Krad, svyat, topo, TRAVIS  |
|           19 |     2728 | 2024-08-22 | Insilio           | L   | 0.521      | -            | -                | -                | -         |    -7.78 | Forester, Krad, nota, topo, TRAVIS   |
|           18 |     2765 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.515      | 0.535        | 0.086 (0.024)    | 0.306 (0.084)    | 0 (0.000) |    14.49 | Forester, Krad, svyat, topo, TRAVIS  |
|           17 |     2772 | 2024-08-21 | Sashi             | L   | 0.514      | -            | -                | -                | -         |    -4.27 | Forester, Krad, nota, topo, TRAVIS   |
|           16 |     2809 | 2024-08-21 | Permitta          | L   | 0.512      | -            | -                | -                | -         |    -2.48 | Forester, Krad, nota, topo, TRAVIS   |
|           15 |     2869 | 2024-08-19 | B8                | L   | 0.500      | -            | -                | -                | -         |    -1.71 | Forester, Krad, nota, topo, TRAVIS   |
|           14 |     2936 | 2024-08-16 | Young Ninjas      | L   | 0.481      | -            | -                | -                | -         |    -9.50 | Forester, Krad, nota, topo, TRAVIS   |
|           13 |     3185 | 2024-08-08 | MOUZ NXT          | L   | 0.426      | -            | -                | -                | -         |    -7.99 | Forester, Sdaim, svyat, topo, TRAVIS |
|           12 |     3339 | 2024-08-04 | Aurora Young Blud | L   | 0.399      | -            | -                | -                | -         |    -6.35 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           11 |     3428 | 2024-08-01 | Cloud9            | L   | 0.381      | -            | -                | -                | -         |    -2.87 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           10 |     3483 | 2024-07-31 | UNPAID            | L   | 0.374      | -            | -                | -                | -         |    -1.91 | Forester, Krad, Sdaim, topo, TRAVIS  |
|            9 |     3626 | 2024-07-27 | The MongolZ       | L   | 0.346      | -            | -                | -                | -         |    -0.06 | Forester, Krad, Sdaim, shady, TRAVIS |
|            8 |     3660 | 2024-07-26 | DMS               | W   | 0.338      | 0.650        | 0.000 (0.000)    | 0.516 (0.113)    | 1 (0.338) |     3.88 | Forester, Krad, Sdaim, shady, TRAVIS |
|            7 |     3694 | 2024-07-25 | Eternal Fire      | L   | 0.332      | -            | -                | -                | -         |    -0.19 | Forester, Krad, Sdaim, shady, TRAVIS |
|            6 |     3722 | 2024-07-24 | Revenant          | W   | 0.327      | 0.650        | 0.012 (0.003)    | 0.333 (0.071)    | 1 (0.327) |     4.23 | Forester, Krad, Sdaim, shady, TRAVIS |
|            5 |     3729 | 2024-07-24 | 3DMAX             | L   | 0.325      | -            | -                | -                | -         |    -0.28 | Forester, Krad, Sdaim, shady, TRAVIS |
|            4 |     4536 | 2024-06-09 | Monte             | W   | 0.028      | -            | -                | -                | 0 (0.000) |     0.17 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4559 | 2024-06-09 | B8                | W   | 0.026      | 0.143        | 0.172 (0.001)    | 0.787 (0.003)    | -         |     0.74 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     4629 | 2024-06-08 | Monte             | W   | 0.020      | -            | -                | -                | -         |     0.12 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     4632 | 2024-06-08 | 1WIN              | W   | 0.019      | -            | -                | -                | -         |     0.15 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,117.34)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.754 | $1,000.00      | $753.85         |
| 2024-08-25 |      0.541 | $7,500.00      | $4,058.32       |
| 2024-07-28 |      0.354 | $15,000.00     | $5,305.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
