### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [50](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [35]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  1007.9<br />
<br />
Final Rank Value (1007.9) = Starting Rank Value (1048.4) + Head To Head Adjustments (-40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.281[<sup>2</sup>](#table1)
- LAN Wins: 0.155[<sup>2</sup>](#table1)

The average of these factors is 0.339<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1048.4
- 400 + ( ( 0.339 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1048.4


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
|           51 |      333 | 2024-09-24 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.20 | Forester, Krad, nota, topo, TRAVIS   |
|           50 |      380 | 2024-09-23 | Nemiga            | W   | 1.000      | 0.384        | 0.228 (0.088)    | 0.821 (0.316)    | 0 (0.000) |    21.26 | Forester, Krad, nota, topo, TRAVIS   |
|           49 |      527 | 2024-09-18 | Into the Breach   | W   | 1.000      | 0.384        | -                | 0.687 (0.264)    | 0 (0.000) |    14.59 | Forester, Krad, nota, topo, TRAVIS   |
|           48 |      711 | 2024-09-12 | B8                | W   | 1.000      | 0.384        | 0.188 (0.072)    | 1.000 (0.384)    | 0 (0.000) |    22.00 | Forester, Krad, nota, topo, TRAVIS   |
|           47 |      981 | 2024-09-03 | Passion UA        | W   | 1.000      | 0.384        | 0.128 (0.049)    | 1.000 (0.384)    | 0 (0.000) |    18.43 | Forester, Krad, nota, topo, TRAVIS   |
|           46 |     1018 | 2024-09-01 | Young Ninjas      | L   | 0.991      | -            | -                | -                | -         |   -18.15 | Forester, Krad, nota, topo, TRAVIS   |
|           45 |     1095 | 2024-08-29 | PARIVISION        | L   | 0.972      | -            | -                | -                | -         |   -11.57 | Forester, Krad, nota, topo, TRAVIS   |
|           44 |     1138 | 2024-08-28 | GUN5              | W   | 0.965      | 0.384        | 0.071 (0.026)    | 1.000 (0.371)    | 0 (0.000) |    14.75 | Forester, Krad, nota, topo, TRAVIS   |
|           43 |     1358 | 2024-08-23 | OG                | L   | 0.935      | -            | -                | -                | -         |   -14.60 | Forester, Krad, svyat, topo, TRAVIS  |
|           42 |     1391 | 2024-08-22 | Insilio           | L   | 0.926      | -            | -                | -                | -         |   -19.03 | Forester, Krad, nota, topo, TRAVIS   |
|           41 |     1428 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.920      | 0.535        | 0.159 (0.078)    | -                | 0 (0.000) |    24.35 | Forester, Krad, svyat, topo, TRAVIS  |
|           40 |     1435 | 2024-08-21 | Sashi             | L   | 0.919      | -            | -                | -                | -         |   -12.10 | Forester, Krad, nota, topo, TRAVIS   |
|           39 |     1472 | 2024-08-21 | Permitta          | L   | 0.918      | -            | -                | -                | -         |   -19.23 | Forester, Krad, nota, topo, TRAVIS   |
|           38 |     1532 | 2024-08-19 | B8                | L   | 0.906      | -            | -                | -                | -         |   -11.47 | Forester, Krad, nota, topo, TRAVIS   |
|           37 |     1599 | 2024-08-16 | Young Ninjas      | L   | 0.887      | -            | -                | -                | -         |   -19.70 | Forester, Krad, nota, topo, TRAVIS   |
|           36 |     1848 | 2024-08-08 | MOUZ NXT          | L   | 0.831      | -            | -                | -                | -         |   -14.51 | Forester, Sdaim, svyat, topo, TRAVIS |
|           35 |     2002 | 2024-08-04 | Aurora Young Blud | L   | 0.805      | -            | -                | -                | -         |   -17.23 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           34 |     2091 | 2024-08-01 | Cloud9            | L   | 0.787      | -            | -                | -                | -         |   -17.41 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           33 |     2146 | 2024-07-31 | BLEED             | L   | 0.779      | -            | -                | -                | -         |   -10.03 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           32 |     2289 | 2024-07-27 | The MongolZ       | L   | 0.751      | -            | -                | -                | -         |    -1.24 | Forester, Krad, Sdaim, shady, TRAVIS |
|           31 |     2323 | 2024-07-26 | DMS               | W   | 0.744      | 0.650        | -                | 0.587 (0.284)    | 1 (0.744) |     5.30 | Forester, Krad, Sdaim, shady, TRAVIS |
|           30 |     2357 | 2024-07-25 | Eternal Fire      | L   | 0.738      | -            | -                | -                | -         |    -0.36 | Forester, Krad, Sdaim, shady, TRAVIS |
|           29 |     2385 | 2024-07-24 | Revenant          | W   | 0.732      | 0.650        | 0.032 (0.015)    | 0.575 (0.274)    | 1 (0.732) |     6.32 | Forester, Krad, Sdaim, shady, TRAVIS |
|           28 |     2392 | 2024-07-24 | 3DMAX             | L   | 0.731      | -            | -                | -                | -         |    -2.93 | Forester, Krad, Sdaim, shady, TRAVIS |
|           27 |     3199 | 2024-06-09 | Monte             | W   | 0.433      | -            | -                | -                | 0 (0.000) |     3.52 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           26 |     3222 | 2024-06-09 | B8                | W   | 0.432      | 0.143        | 0.188 (0.012)    | -                | 0 (0.000) |     6.81 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           25 |     3292 | 2024-06-08 | Monte             | W   | 0.425      | -            | -                | -                | -         |     3.33 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           24 |     3295 | 2024-06-08 | 1WIN              | W   | 0.425      | -            | -                | -                | -         |     3.14 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           23 |     3591 | 2024-06-01 | MOUZ NXT          | L   | 0.378      | -            | -                | -                | -         |    -7.81 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           22 |     3609 | 2024-05-31 | Permitta          | W   | 0.374      | 0.435        | -                | 0.964 (0.156)    | -         |     3.29 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           21 |     3856 | 2024-05-21 | GamerLegion       | L   | 0.307      | -            | -                | -                | -         |    -5.08 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           20 |     3927 | 2024-05-19 | paiN              | W   | 0.293      | 0.769        | 0.298 (0.067)    | 0.839 (0.189)    | -         |     8.59 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           19 |     3931 | 2024-05-19 | Liquid            | L   | 0.292      | -            | -                | -                | -         |    -0.38 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           18 |     3951 | 2024-05-18 | paiN              | W   | 0.286      | 0.769        | 0.298 (0.066)    | 0.839 (0.185)    | -         |     8.46 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           17 |     4349 | 2024-05-04 | BetBoom           | W   | 0.193      | 0.435        | 0.206 (0.017)    | -                | -         |     3.96 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           16 |     4359 | 2024-05-04 | Metizport         | W   | 0.191      | -            | -                | -                | -         |     0.72 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           15 |     4364 | 2024-05-03 | Gaimin Gladiators | W   | 0.186      | -            | -                | -                | -         |     1.86 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           14 |     4385 | 2024-05-02 | BLEED             | W   | 0.180      | -            | -                | -                | -         |     1.05 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           13 |     4412 | 2024-05-01 | fnatic            | L   | 0.173      | -            | -                | -                | -         |    -1.41 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           12 |     4435 | 2024-04-30 | Gaimin Gladiators | W   | 0.166      | -            | -                | -                | -         |     1.64 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           11 |     4458 | 2024-04-29 | Permitta          | W   | 0.159      | -            | -                | -                | -         |     1.62 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|           10 |     4581 | 2024-04-24 | Nexus             | W   | 0.125      | -            | -                | -                | -         |     0.74 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            9 |     4630 | 2024-04-21 | Gaimin Gladiators | L   | 0.106      | -            | -                | -                | -         |    -2.25 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            8 |     4709 | 2024-04-19 | ENCE              | W   | 0.092      | -            | -                | -                | -         |     1.66 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            7 |     4751 | 2024-04-18 | Apeks             | L   | 0.086      | -            | -                | -                | -         |    -2.39 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            6 |     4759 | 2024-04-18 | ex-Guild Eagles   | W   | 0.085      | -            | -                | -                | -         |     0.31 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     4833 | 2024-04-16 | B8                | W   | 0.071      | -            | -                | -                | -         |     1.13 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     4885 | 2024-04-12 | Aurora            | L   | 0.047      | -            | -                | -                | -         |    -0.35 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4921 | 2024-04-11 | BetBoom           | W   | 0.038      | -            | -                | -                | -         |     0.78 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     4954 | 2024-04-10 | Apeks             | W   | 0.033      | -            | -                | -                | -         |     0.12 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     4968 | 2024-04-10 | Enterprise        | L   | 0.031      | -            | -                | -                | -         |    -0.85 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,758.35)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-25 |      0.947 | $7,500.00      | $7,099.52       |
| 2024-07-28 |      0.759 | $15,000.00     | $11,387.57      |
| 2024-06-02 |      0.386 | $2,000.00      | $771.37         |
| 2024-05-23 |      0.319 | $12,500.00     | $3,992.85       |
| 2024-05-04 |      0.193 | $22,000.00     | $4,237.75       |
| 2024-05-02 |      0.180 | $1,500.00      | $269.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
