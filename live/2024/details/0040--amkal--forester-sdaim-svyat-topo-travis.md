### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Sdaim, svyat, topo, TRAVIS<br />
Global Rank: [40](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [29]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  1101.0<br />
<br />
Final Rank Value (1101.0) = Starting Rank Value (1097.0) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1097.0
- 400 + ( ( 0.353 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1097.0


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
|           42 |      192 | 2024-08-08 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -16.63 | Forester, Sdaim, svyat, topo, TRAVIS |
|           41 |      346 | 2024-08-04 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -22.40 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           40 |      435 | 2024-08-01 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |   -28.75 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           39 |      490 | 2024-07-31 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -10.59 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           38 |      633 | 2024-07-27 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.73 | Forester, Krad, Sdaim, shady, TRAVIS |
|           37 |      667 | 2024-07-26 | DMS               | W   | 1.000      | 0.650        | -                | 0.514 (0.334)    | 1 (1.000) |     5.42 | Forester, Krad, Sdaim, shady, TRAVIS |
|           36 |      701 | 2024-07-25 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.84 | Forester, Krad, Sdaim, shady, TRAVIS |
|           35 |      729 | 2024-07-24 | Revenant          | W   | 1.000      | 0.650        | 0.045 (0.029)    | 0.402 (0.262)    | 1 (1.000) |     5.64 | Forester, Krad, Sdaim, shady, TRAVIS |
|           34 |      736 | 2024-07-24 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -8.89 | Forester, Krad, Sdaim, shady, TRAVIS |
|           33 |     1543 | 2024-06-09 | Monte             | W   | 0.760      | -            | -                | -                | 0 (0.000) |     8.74 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           32 |     1566 | 2024-06-09 | B8                | W   | 0.758      | 0.143        | 0.174 (0.019)    | 0.903 (0.098)    | 0 (0.000) |     9.90 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           31 |     1636 | 2024-06-08 | Monte             | W   | 0.752      | -            | -                | -                | 0 (0.000) |     8.75 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           30 |     1639 | 2024-06-08 | 1WIN              | W   | 0.751      | -            | -                | -                | 0 (0.000) |     6.20 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           29 |     1935 | 2024-06-01 | MOUZ NXT          | L   | 0.705      | -            | -                | -                | -         |   -13.85 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           28 |     1953 | 2024-05-31 | Permitta          | W   | 0.700      | 0.435        | 0.036 (0.011)    | 0.957 (0.291)    | 0 (0.000) |     4.40 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           27 |     2200 | 2024-05-21 | GamerLegion       | L   | 0.634      | -            | -                | -                | -         |   -11.61 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           26 |     2271 | 2024-05-19 | paiN              | W   | 0.619      | 0.769        | 0.369 (0.176)    | 0.874 (0.416)    | 0 (0.000) |    17.00 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           25 |     2275 | 2024-05-19 | Liquid            | L   | 0.618      | -            | -                | -                | -         |    -0.97 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           24 |     2295 | 2024-05-18 | paiN              | W   | 0.613      | 0.769        | 0.369 (0.174)    | 0.874 (0.412)    | 0 (0.000) |    17.20 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           23 |     2693 | 2024-05-04 | BetBoom           | W   | 0.519      | 0.435        | 0.223 (0.050)    | 0.456 (0.103)    | 0 (0.000) |    12.30 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           22 |     2703 | 2024-05-04 | Metizport         | W   | 0.518      | -            | -                | -                | -         |     3.21 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           21 |     2708 | 2024-05-03 | Gaimin Gladiators | W   | 0.513      | -            | -                | -                | -         |     4.33 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           20 |     2729 | 2024-05-02 | BLEED             | W   | 0.507      | 0.435        | 0.077 (0.017)    | -                | -         |     5.96 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           19 |     2756 | 2024-05-01 | fnatic            | L   | 0.499      | -            | -                | -                | -         |    -2.21 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           18 |     2779 | 2024-04-30 | Gaimin Gladiators | W   | 0.493      | -            | -                | -                | -         |     4.13 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           17 |     2802 | 2024-04-29 | Permitta          | W   | 0.486      | 0.384        | -                | 0.957 (0.179)    | -         |     4.47 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           16 |     2925 | 2024-04-24 | Nexus             | W   | 0.451      | 0.384        | -                | 0.548 (0.095)    | -         |     2.55 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           15 |     2974 | 2024-04-21 | Gaimin Gladiators | L   | 0.432      | -            | -                | -                | -         |    -9.54 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           14 |     3053 | 2024-04-19 | ENCE              | W   | 0.419      | 0.384        | 0.160 (0.026)    | -                | -         |    10.70 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           13 |     3095 | 2024-04-18 | Apeks             | L   | 0.412      | -            | -                | -                | -         |   -10.40 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           12 |     3103 | 2024-04-18 | ex-Guild Eagles   | W   | 0.412      | -            | -                | -                | -         |     1.84 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           11 |     3177 | 2024-04-16 | B8                | W   | 0.398      | 0.384        | 0.174 (0.027)    | 0.903 (0.138)    | -         |     4.68 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           10 |     3229 | 2024-04-12 | Aurora            | L   | 0.373      | -            | -                | -                | -         |    -0.84 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            9 |     3265 | 2024-04-11 | BetBoom           | W   | 0.365      | 0.143        | 0.223 (0.012)    | -                | -         |     8.93 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            8 |     3298 | 2024-04-10 | Apeks             | W   | 0.360      | -            | -                | -                | -         |     2.41 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            7 |     3312 | 2024-04-10 | Enterprise        | L   | 0.357      | -            | -                | -                | -         |    -8.55 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            6 |     3522 | 2024-04-03 | Insilio           | W   | 0.313      | -            | -                | -                | -         |     2.26 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     3531 | 2024-04-03 | ex-Guild Eagles   | W   | 0.312      | -            | -                | -                | -         |     1.36 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     3541 | 2024-04-03 | Alliance          | W   | 0.311      | -            | -                | -                | -         |     1.84 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     3570 | 2024-04-02 | PARIVISION        | W   | 0.306      | -            | -                | -                | -         |     5.08 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     3575 | 2024-04-02 | ex-Guild Eagles   | L   | 0.305      | -            | -                | -                | -         |    -8.30 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     3583 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.304      | -            | -                | -                | -         |     2.84 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,681.01)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-02 |      0.712 | $2,000.00      | $1,424.52       |
| 2024-05-23 |      0.646 | $12,500.00     | $8,075.01       |
| 2024-05-04 |      0.519 | $22,000.00     | $11,422.35      |
| 2024-05-02 |      0.506 | $1,500.00      | $759.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
