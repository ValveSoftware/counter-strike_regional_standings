### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [67](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [48]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  952.5<br />
<br />
Final Rank Value (952.5) = Starting Rank Value (952.9) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.9
- 400 + ( ( 0.282 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 952.9


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
|           37 |       24 | 2024-11-05 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -12.06 | Forester, Krad, nota, topo, TRAVIS   |
|           36 |       66 | 2024-11-03 | Into the Breach   | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.737 (0.283)    | 0 (0.000) |    17.62 | Forester, Krad, nota, topo, TRAVIS   |
|           35 |      165 | 2024-10-29 | 500               | L   | 1.000      | -            | -                | -                | -         |   -15.09 | Forester, Krad, nota, topo, TRAVIS   |
|           34 |     1099 | 2024-09-24 | Aurora            | L   | 0.915      | -            | -                | -                | -         |    -9.35 | Forester, Krad, nota, topo, TRAVIS   |
|           33 |     1146 | 2024-09-23 | Nemiga            | W   | 0.907      | 0.384        | 0.416 (0.145)    | 0.831 (0.290)    | 0 (0.000) |    24.56 | Forester, Krad, nota, topo, TRAVIS   |
|           32 |     1293 | 2024-09-18 | Into the Breach   | W   | 0.873      | 0.384        | -                | 0.737 (0.247)    | 0 (0.000) |    14.31 | Forester, Krad, nota, topo, TRAVIS   |
|           31 |     1477 | 2024-09-12 | B8                | W   | 0.832      | 0.384        | 0.158 (0.051)    | 1.000 (0.320)    | 0 (0.000) |    22.16 | Forester, Krad, nota, topo, TRAVIS   |
|           30 |     1747 | 2024-09-03 | Passion UA        | W   | 0.772      | 0.384        | 0.106 (0.032)    | 1.000 (0.297)    | 0 (0.000) |    16.38 | Forester, Krad, nota, topo, TRAVIS   |
|           29 |     1784 | 2024-09-01 | Young Ninjas      | L   | 0.759      | -            | -                | -                | -         |   -13.75 | Forester, Krad, nota, topo, TRAVIS   |
|           28 |     1861 | 2024-08-29 | PARIVISION        | L   | 0.739      | -            | -                | -                | -         |    -6.61 | Forester, Krad, nota, topo, TRAVIS   |
|           27 |     1904 | 2024-08-28 | GUN5              | W   | 0.733      | 0.384        | 0.050 (0.014)    | 1.000 (0.282)    | 0 (0.000) |    13.24 | Forester, Krad, nota, topo, TRAVIS   |
|           26 |     2124 | 2024-08-23 | OG                | L   | 0.702      | -            | -                | -                | -         |    -7.40 | Forester, Krad, svyat, topo, TRAVIS  |
|           25 |     2157 | 2024-08-22 | Insilio           | L   | 0.694      | -            | -                | -                | -         |   -12.13 | Forester, Krad, nota, topo, TRAVIS   |
|           24 |     2194 | 2024-08-21 | Ninjas in Pyjamas | W   | 0.688      | 0.535        | 0.071 (0.026)    | 0.217 (0.080)    | 0 (0.000) |    16.89 | Forester, Krad, svyat, topo, TRAVIS  |
|           23 |     2201 | 2024-08-21 | Sashi             | L   | 0.687      | -            | -                | -                | -         |    -8.70 | Forester, Krad, nota, topo, TRAVIS   |
|           22 |     2238 | 2024-08-21 | Permitta          | L   | 0.686      | -            | -                | -                | -         |    -9.41 | Forester, Krad, nota, topo, TRAVIS   |
|           21 |     2298 | 2024-08-19 | B8                | L   | 0.674      | -            | -                | -                | -         |    -2.98 | Forester, Krad, nota, topo, TRAVIS   |
|           20 |     2365 | 2024-08-16 | Young Ninjas      | L   | 0.655      | -            | -                | -                | -         |   -13.65 | Forester, Krad, nota, topo, TRAVIS   |
|           19 |     2614 | 2024-08-08 | MOUZ NXT          | L   | 0.599      | -            | -                | -                | -         |   -11.10 | Forester, Sdaim, svyat, topo, TRAVIS |
|           18 |     2768 | 2024-08-04 | Aurora Young Blud | L   | 0.572      | -            | -                | -                | -         |   -10.65 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           17 |     2857 | 2024-08-01 | Cloud9            | L   | 0.555      | -            | -                | -                | -         |   -11.11 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           16 |     2912 | 2024-07-31 | UNPAID            | L   | 0.547      | -            | -                | -                | -         |    -2.78 | Forester, Krad, Sdaim, topo, TRAVIS  |
|           15 |     3055 | 2024-07-27 | The MongolZ       | L   | 0.519      | -            | -                | -                | -         |    -0.15 | Forester, Krad, Sdaim, shady, TRAVIS |
|           14 |     3089 | 2024-07-26 | DMS               | W   | 0.512      | 0.650        | -                | 0.550 (0.183)    | 1 (0.512) |     5.17 | Forester, Krad, Sdaim, shady, TRAVIS |
|           13 |     3123 | 2024-07-25 | Eternal Fire      | L   | 0.505      | -            | -                | -                | -         |    -0.25 | Forester, Krad, Sdaim, shady, TRAVIS |
|           12 |     3151 | 2024-07-24 | Revenant          | W   | 0.500      | 0.650        | 0.015 (0.005)    | 0.450 (0.146)    | 1 (0.500) |     5.50 | Forester, Krad, Sdaim, shady, TRAVIS |
|           11 |     3158 | 2024-07-24 | 3DMAX             | L   | 0.499      | -            | -                | -                | -         |    -0.87 | Forester, Krad, Sdaim, shady, TRAVIS |
|           10 |     3965 | 2024-06-09 | Monte             | W   | 0.201      | -            | -                | -                | 0 (0.000) |     1.29 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            9 |     3988 | 2024-06-09 | B8                | W   | 0.200      | 0.143        | 0.158 (0.005)    | -                | -         |     5.53 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            8 |     4058 | 2024-06-08 | Monte             | W   | 0.193      | -            | -                | -                | -         |     1.21 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            7 |     4061 | 2024-06-08 | 1WIN              | W   | 0.193      | -            | -                | -                | -         |     1.34 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            6 |     4357 | 2024-06-01 | MOUZ NXT          | L   | 0.146      | -            | -                | -                | -         |    -3.07 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            5 |     4375 | 2024-05-31 | Permitta          | W   | 0.141      | 0.435        | -                | 1.000 (0.061)    | -         |     3.09 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            4 |     4622 | 2024-05-21 | GamerLegion       | L   | 0.075      | -            | -                | -                | -         |    -0.96 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            3 |     4693 | 2024-05-19 | paiN              | W   | 0.060      | 0.769        | 0.192 (0.009)    | -                | -         |     1.82 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            2 |     4697 | 2024-05-19 | Liquid            | L   | 0.060      | -            | -                | -                | -         |    -0.09 | Forester, ICY, Krad, Sdaim, TRAVIS   |
|            1 |     4717 | 2024-05-18 | paiN              | W   | 0.054      | 0.769        | 0.192 (0.008)    | -                | -         |     1.64 | Forester, ICY, Krad, Sdaim, TRAVIS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,589.16)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.927 | $1,000.00      | $927.20         |
| 2024-08-25 |      0.714 | $7,500.00      | $5,358.44       |
| 2024-07-28 |      0.527 | $15,000.00     | $7,905.40       |
| 2024-06-02 |      0.154 | $2,000.00      | $307.08         |
| 2024-05-23 |      0.087 | $12,500.00     | $1,091.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
