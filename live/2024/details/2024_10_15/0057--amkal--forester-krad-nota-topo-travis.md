### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [57](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [39]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  994.1<br />
<br />
Final Rank Value (994.1) = Starting Rank Value (1018.4) + Head To Head Adjustments (-24.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.472[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.139[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.4
- 400 + ( ( 0.318 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1018.4


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
|           45 |      650 | 2024-09-24 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.98 | Forester, Krad, nota, topo, TRAVIS   |
|           44 |      697 | 2024-09-23 | Nemiga            | W   | 1.000      | 0.384        | 0.192 (0.074)    | 0.736 (0.283)    | 0 (0.000) |    21.62 | Forester, Krad, nota, topo, TRAVIS   |
|           43 |      844 | 2024-09-18 | Into the Breach   | W   | 1.000      | 0.384        | -                | 0.640 (0.246)    | 0 (0.000) |    15.44 | Forester, Krad, nota, topo, TRAVIS   |
|           42 |     1028 | 2024-09-12 | B8                | W   | 0.979      | 0.384        | 0.179 (0.067)    | 1.000 (0.376)    | 0 (0.000) |    22.09 | Forester, Krad, nota, topo, TRAVIS   |
|           41 |     1298 | 2024-09-03 | Passion UA        | W   | 0.919      | 0.384        | 0.192 (0.068)    | 1.000 (0.353)    | 0 (0.000) |    18.58 | Forester, Krad, nota, topo, TRAVIS   |
|           40 |     1335 | 2024-09-01 | Young Ninjas      | L   | 0.906      | -            | -                | -                | -         |   -16.66 | Forester, Krad, nota, topo, TRAVIS   |
|           39 |     1412 | 2024-08-29 | PARIVISION        | L   | 0.886      | -            | -                | -                | -         |   -10.06 | Forester, Krad, nota, topo, TRAVIS   |
|           38 |     1455 | 2024-08-28 | GUN5              | W   | 0.880      | 0.384        | 0.096 (0.033)    | 1.000 (0.338)    | 0 (0.000) |    14.97 | Forester, Krad, nota, topo, TRAVIS   |
|           37 |     1675 | 2024-08-23 | OG                | L   | 0.849      | -            | -                | -                | -         |   -13.70 | Forester, Krad, svyat, topo, TRAVIS  |
|           36 |     1708 | 2024-08-22 | Insilio           | L   | 0.841      | -            | -                | -                | -         |   -16.06 | Forester, Krad, nota, topo, TRAVIS   |
|           35 |     1745 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.835      | 0.535        | 0.133 (0.059)    | -                | 0 (0.000) |    21.74 | Forester, Krad, svyat, topo, TRAVIS  |
|           34 |     1752 | 2024-08-21 | Sashi             | L   | 0.834      | -            | -                | -                | -         |   -10.88 | Forester, Krad, nota, topo, TRAVIS   |
|           33 |     1789 | 2024-08-21 | Permitta          | L   | 0.833      | -            | -                | -                | -         |   -16.34 | Forester, Krad, nota, topo, TRAVIS   |
|           32 |     1849 | 2024-08-19 | B8                | L   | 0.821      | -            | -                | -                | -         |    -9.70 | Forester, Krad, nota, topo, TRAVIS   |
|           31 |     1916 | 2024-08-16 | Young Ninjas      | L   | 0.802      | -            | -                | -                | -         |   -17.59 | Forester, Krad, nota, topo, TRAVIS   |
|           30 |     2165 | 2024-08-08 | MOUZ NXT          | L   | 0.746      | -            | -                | -                | -         |   -12.91 | Forester, Sdaim, svyat, topo, TRAVIS |
|           29 |     2319 | 2024-08-04 | Aurora Young Blud | L   | 0.719      | -            | -                | -                | -         |   -14.68 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           28 |     2408 | 2024-08-01 | Cloud9            | L   | 0.702      | -            | -                | -                | -         |   -14.80 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           27 |     2463 | 2024-07-31 | BLEED             | L   | 0.694      | -            | -                | -                | -         |    -8.78 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           26 |     2606 | 2024-07-27 | The MongolZ       | L   | 0.666      | -            | -                | -                | -         |    -0.75 | Forester, Krad, Sdaim, shady, TRAVIS |
|           25 |     2640 | 2024-07-26 | DMS               | W   | 0.659      | 0.650        | -                | 0.557 (0.238)    | 1 (0.659) |     5.29 | Forester, Krad, Sdaim, shady, TRAVIS |
|           24 |     2674 | 2024-07-25 | Eternal Fire      | L   | 0.652      | -            | -                | -                | -         |    -0.22 | Forester, Krad, Sdaim, shady, TRAVIS |
|           23 |     2702 | 2024-07-24 | Revenant          | W   | 0.647      | 0.650        | 0.030 (0.013)    | 0.511 (0.215)    | 1 (0.647) |     6.30 | Forester, Krad, Sdaim, shady, TRAVIS |
|           22 |     2709 | 2024-07-24 | 3DMAX             | L   | 0.646      | -            | -                | -                | -         |    -2.21 | Forester, Krad, Sdaim, shady, TRAVIS |
|           21 |     3516 | 2024-06-09 | Monte             | W   | 0.348      | -            | -                | -                | 0 (0.000) |     2.69 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           20 |     3539 | 2024-06-09 | B8                | W   | 0.347      | 0.143        | 0.179 (0.009)    | -                | 0 (0.000) |     5.89 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           19 |     3609 | 2024-06-08 | Monte             | W   | 0.340      | -            | -                | -                | -         |     2.54 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           18 |     3612 | 2024-06-08 | 1WIN              | W   | 0.340      | -            | -                | -                | -         |     2.48 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           17 |     3908 | 2024-06-01 | MOUZ NXT          | L   | 0.293      | -            | -                | -                | -         |    -6.00 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           16 |     3926 | 2024-05-31 | Permitta          | W   | 0.288      | 0.435        | -                | 1.000 (0.125)    | -         |     3.19 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           15 |     4173 | 2024-05-21 | GamerLegion       | L   | 0.222      | -            | -                | -                | -         |    -2.90 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           14 |     4244 | 2024-05-19 | paiN              | W   | 0.207      | 0.769        | 0.265 (0.042)    | 0.773 (0.123)    | -         |     6.12 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           13 |     4248 | 2024-05-19 | Liquid            | L   | 0.207      | -            | -                | -                | -         |    -0.20 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           12 |     4268 | 2024-05-18 | paiN              | W   | 0.201      | 0.769        | 0.265 (0.041)    | 0.773 (0.120)    | -         |     5.96 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           11 |     4666 | 2024-05-04 | BetBoom           | W   | 0.107      | 0.435        | 0.191 (0.009)    | -                | -         |     2.35 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           10 |     4676 | 2024-05-04 | Metizport         | W   | 0.106      | -            | -                | -                | -         |     0.40 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            9 |     4681 | 2024-05-03 | Gaimin Gladiators | W   | 0.101      | -            | -                | -                | -         |     1.10 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            8 |     4702 | 2024-05-02 | BLEED             | W   | 0.095      | -            | -                | -                | -         |     0.43 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            7 |     4729 | 2024-05-01 | fnatic            | L   | 0.088      | -            | -                | -                | -         |    -0.78 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            6 |     4752 | 2024-04-30 | Gaimin Gladiators | W   | 0.081      | -            | -                | -                | -         |     0.88 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     4775 | 2024-04-29 | Permitta          | W   | 0.074      | -            | -                | -                | -         |     0.88 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     4898 | 2024-04-24 | Nexus             | W   | 0.040      | -            | -                | -                | -         |     0.27 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4947 | 2024-04-21 | Gaimin Gladiators | L   | 0.020      | -            | -                | -                | -         |    -0.42 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     5026 | 2024-04-19 | ENCE              | W   | 0.007      | -            | -                | -                | -         |     0.12 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     5068 | 2024-04-18 | Apeks             | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,605.14)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-25 |      0.861 | $7,500.00      | $6,460.70       |
| 2024-07-28 |      0.674 | $15,000.00     | $10,109.91      |
| 2024-06-02 |      0.301 | $2,000.00      | $601.02         |
| 2024-05-23 |      0.234 | $12,500.00     | $2,928.14       |
| 2024-05-04 |      0.107 | $22,000.00     | $2,363.86       |
| 2024-05-02 |      0.094 | $1,500.00      | $141.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
