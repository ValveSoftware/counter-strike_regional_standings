### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [54](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [36]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  1006.1<br />
<br />
Final Rank Value (1006.1) = Starting Rank Value (1035.7) + Head To Head Adjustments (-29.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.483[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.145[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1035.7
- 400 + ( ( 0.329 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1035.7


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
|           48 |      553 | 2024-09-24 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.40 | Forester, Krad, nota, topo, TRAVIS   |
|           47 |      600 | 2024-09-23 | Nemiga            | W   | 1.000      | 0.384        | 0.218 (0.084)    | 0.758 (0.291)    | 0 (0.000) |    21.52 | Forester, Krad, nota, topo, TRAVIS   |
|           46 |      747 | 2024-09-18 | Into the Breach   | W   | 1.000      | 0.384        | -                | 0.648 (0.249)    | 0 (0.000) |    15.16 | Forester, Krad, nota, topo, TRAVIS   |
|           45 |      931 | 2024-09-12 | B8                | W   | 1.000      | 0.384        | 0.194 (0.074)    | 1.000 (0.384)    | 0 (0.000) |    22.38 | Forester, Krad, nota, topo, TRAVIS   |
|           44 |     1201 | 2024-09-03 | Passion UA        | W   | 0.958      | 0.384        | 0.197 (0.073)    | 1.000 (0.368)    | 0 (0.000) |    19.07 | Forester, Krad, nota, topo, TRAVIS   |
|           43 |     1238 | 2024-09-01 | Young Ninjas      | L   | 0.946      | -            | -                | -                | -         |   -17.35 | Forester, Krad, nota, topo, TRAVIS   |
|           42 |     1315 | 2024-08-29 | PARIVISION        | L   | 0.926      | -            | -                | -                | -         |   -10.64 | Forester, Krad, nota, topo, TRAVIS   |
|           41 |     1358 | 2024-08-28 | GUN5              | W   | 0.920      | 0.384        | 0.096 (0.034)    | 1.000 (0.353)    | 0 (0.000) |    14.99 | Forester, Krad, nota, topo, TRAVIS   |
|           40 |     1578 | 2024-08-23 | OG                | L   | 0.889      | -            | -                | -                | -         |   -14.23 | Forester, Krad, svyat, topo, TRAVIS  |
|           39 |     1611 | 2024-08-22 | Insilio           | L   | 0.881      | -            | -                | -                | -         |   -17.49 | Forester, Krad, nota, topo, TRAVIS   |
|           38 |     1648 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.875      | 0.535        | 0.145 (0.068)    | -                | 0 (0.000) |    22.97 | Forester, Krad, svyat, topo, TRAVIS  |
|           37 |     1655 | 2024-08-21 | Sashi             | L   | 0.874      | -            | -                | -                | -         |   -11.32 | Forester, Krad, nota, topo, TRAVIS   |
|           36 |     1692 | 2024-08-21 | Permitta          | L   | 0.872      | -            | -                | -                | -         |   -17.58 | Forester, Krad, nota, topo, TRAVIS   |
|           35 |     1752 | 2024-08-19 | B8                | L   | 0.860      | -            | -                | -                | -         |   -10.46 | Forester, Krad, nota, topo, TRAVIS   |
|           34 |     1819 | 2024-08-16 | Young Ninjas      | L   | 0.841      | -            | -                | -                | -         |   -18.57 | Forester, Krad, nota, topo, TRAVIS   |
|           33 |     2068 | 2024-08-08 | MOUZ NXT          | L   | 0.786      | -            | -                | -                | -         |   -13.56 | Forester, Sdaim, svyat, topo, TRAVIS |
|           32 |     2222 | 2024-08-04 | Aurora Young Blud | L   | 0.759      | -            | -                | -                | -         |   -15.90 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           31 |     2311 | 2024-08-01 | Cloud9            | L   | 0.741      | -            | -                | -                | -         |   -15.94 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           30 |     2366 | 2024-07-31 | BLEED             | L   | 0.734      | -            | -                | -                | -         |    -9.40 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           29 |     2509 | 2024-07-27 | The MongolZ       | L   | 0.706      | -            | -                | -                | -         |    -0.83 | Forester, Krad, Sdaim, shady, TRAVIS |
|           28 |     2543 | 2024-07-26 | DMS               | W   | 0.698      | 0.650        | -                | 0.541 (0.246)    | 1 (0.698) |     5.21 | Forester, Krad, Sdaim, shady, TRAVIS |
|           27 |     2577 | 2024-07-25 | Eternal Fire      | L   | 0.692      | -            | -                | -                | -         |    -0.25 | Forester, Krad, Sdaim, shady, TRAVIS |
|           26 |     2605 | 2024-07-24 | Revenant          | W   | 0.686      | 0.650        | 0.033 (0.015)    | 0.530 (0.236)    | 1 (0.686) |     6.29 | Forester, Krad, Sdaim, shady, TRAVIS |
|           25 |     2612 | 2024-07-24 | 3DMAX             | L   | 0.685      | -            | -                | -                | -         |    -2.50 | Forester, Krad, Sdaim, shady, TRAVIS |
|           24 |     3419 | 2024-06-09 | Monte             | W   | 0.388      | -            | -                | -                | 0 (0.000) |     3.04 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           23 |     3442 | 2024-06-09 | B8                | W   | 0.386      | 0.143        | 0.194 (0.011)    | -                | 0 (0.000) |     6.43 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           22 |     3512 | 2024-06-08 | Monte             | W   | 0.380      | -            | -                | -                | -         |     2.86 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           21 |     3515 | 2024-06-08 | 1WIN              | W   | 0.379      | -            | -                | -                | -         |     2.79 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           20 |     3811 | 2024-06-01 | MOUZ NXT          | L   | 0.333      | -            | -                | -                | -         |    -6.84 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           19 |     3829 | 2024-05-31 | Permitta          | W   | 0.328      | 0.435        | -                | 0.918 (0.131)    | -         |     3.37 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           18 |     4076 | 2024-05-21 | GamerLegion       | L   | 0.262      | -            | -                | -                | -         |    -3.50 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           17 |     4147 | 2024-05-19 | paiN              | W   | 0.247      | 0.769        | 0.297 (0.056)    | 0.790 (0.150)    | -         |     7.29 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           16 |     4151 | 2024-05-19 | Liquid            | L   | 0.246      | -            | -                | -                | -         |    -0.26 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           15 |     4171 | 2024-05-18 | paiN              | W   | 0.241      | 0.769        | 0.297 (0.055)    | 0.790 (0.146)    | -         |     7.14 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           14 |     4569 | 2024-05-04 | BetBoom           | W   | 0.147      | 0.435        | 0.208 (0.013)    | -                | -         |     3.27 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           13 |     4579 | 2024-05-04 | Metizport         | W   | 0.145      | -            | -                | -                | -         |     0.55 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           12 |     4584 | 2024-05-03 | Gaimin Gladiators | W   | 0.140      | -            | -                | -                | -         |     1.47 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           11 |     4605 | 2024-05-02 | BLEED             | W   | 0.134      | -            | -                | -                | -         |     0.70 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           10 |     4632 | 2024-05-01 | fnatic            | L   | 0.127      | -            | -                | -                | -         |    -1.07 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            9 |     4655 | 2024-04-30 | Gaimin Gladiators | W   | 0.121      | -            | -                | -                | -         |     1.26 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            8 |     4678 | 2024-04-29 | Permitta          | W   | 0.113      | -            | -                | -                | -         |     1.30 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            7 |     4801 | 2024-04-24 | Nexus             | W   | 0.079      | -            | -                | -                | -         |     0.51 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            6 |     4850 | 2024-04-21 | Gaimin Gladiators | L   | 0.060      | -            | -                | -                | -         |    -1.25 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     4929 | 2024-04-19 | ENCE              | W   | 0.047      | -            | -                | -                | -         |     0.81 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     4971 | 2024-04-18 | Apeks             | L   | 0.040      | -            | -                | -                | -         |    -1.12 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4979 | 2024-04-18 | ex-Guild Eagles   | W   | 0.040      | -            | -                | -                | -         |     0.15 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     5053 | 2024-04-16 | B8                | W   | 0.025      | -            | -                | -                | -         |     0.43 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     5105 | 2024-04-12 | Aurora            | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,002.22)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-25 |      0.901 | $7,500.00      | $6,757.86       |
| 2024-07-28 |      0.714 | $15,000.00     | $10,704.23      |
| 2024-06-02 |      0.340 | $2,000.00      | $680.26         |
| 2024-05-23 |      0.274 | $12,500.00     | $3,423.41       |
| 2024-05-04 |      0.147 | $22,000.00     | $3,235.53       |
| 2024-05-02 |      0.134 | $1,500.00      | $200.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
