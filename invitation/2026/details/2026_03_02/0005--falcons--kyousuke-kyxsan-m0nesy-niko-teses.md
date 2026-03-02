### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [5](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [4]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1841.7<br />
<br />
Final Rank Value (1841.7) = Starting Rank Value (1855.5) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.769[<sup>2</sup>](#table1)
- Opponent Network: 0.420[<sup>2</sup>](#table1)
- LAN Wins: 0.889[<sup>2</sup>](#table1)

The average of these factors is 0.769<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1855.5
- 400 + ( ( 0.769 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1855.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      399 | 2026-02-20 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -15.33 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           38 |      582 | 2026-02-16 | FURIA         | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.536 (0.536)    | 1 (1.000) |    18.71 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           37 |      663 | 2026-02-15 | FaZe          | W   | 1.000      | 1.000        | 0.591 (0.591)    | 0.358 (0.358)    | 1 (1.000) |     5.95 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           36 |      706 | 2026-02-14 | 3DMAX         | W   | 1.000      | 1.000        | 0.401 (0.401)    | 0.298 (0.298)    | 1 (1.000) |     2.88 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           35 |     1060 | 2026-02-03 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -13.12 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           34 |     1077 | 2026-02-03 | 3DMAX         | W   | 1.000      | 1.000        | 0.401 (0.401)    | 0.298 (0.298)    | 1 (1.000) |     3.25 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |     1102 | 2026-02-02 | NRG           | W   | 1.000      | 1.000        | -                | 0.525 (0.525)    | 1 (1.000) |     2.79 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |     1135 | 2026-02-01 | Aurora        | L   | 1.000      | -            | -                | -                | -         |   -21.35 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           31 |     1312 | 2026-01-25 | PARIVISION    | L   | 0.960      | -            | -                | -                | -         |   -13.79 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           30 |     1345 | 2026-01-24 | Vitality      | W   | 0.953      | 0.899        | 1.000 (0.857)    | 0.577 (0.495)    | 1 (0.953) |    19.42 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           29 |     1438 | 2026-01-22 | Liquid        | W   | 0.940      | 0.899        | 0.441 (0.373)    | -                | 1 (0.940) |     2.32 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           28 |     1573 | 2026-01-17 | Monte         | W   | 0.908      | 0.895        | -                | 0.510 (0.415)    | -         |     2.01 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     1678 | 2026-01-15 | ECSTATIC      | W   | 0.894      | 0.895        | -                | 0.700 (0.560)    | -         |     1.51 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     2040 | 2025-12-11 | Spirit        | L   | 0.660      | -            | -                | -                | -         |   -13.81 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           25 |     2097 | 2025-12-07 | G2            | W   | 0.635      | 1.000        | 0.446 (0.283)    | -                | 1 (0.635) |     3.25 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |     2123 | 2025-12-06 | MOUZ          | L   | 0.627      | -            | -                | -                | -         |    -8.37 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |     2155 | 2025-12-05 | Imperial      | W   | 0.619      | 1.000        | -                | 0.670 (0.415)    | 1 (0.619) |     0.76 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           22 |     2178 | 2025-12-04 | Passion UA    | W   | 0.614      | 1.000        | -                | 0.480 (0.294)    | 1 (0.614) |     0.81 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           21 |     2183 | 2025-12-04 | B8            | L   | 0.613      | -            | -                | -                | -         |   -17.88 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           20 |     2625 | 2025-11-16 | FURIA         | L   | 0.492      | -            | -                | -                | -         |    -6.47 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     2651 | 2025-11-15 | Vitality      | W   | 0.485      | 0.687        | 1.000 (0.333)    | -                | -         |     9.82 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     2706 | 2025-11-12 | Passion UA    | W   | 0.470      | -            | -                | -                | -         |     0.54 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     2741 | 2025-11-12 | Spirit        | W   | 0.464      | -            | -                | -                | -         |     4.09 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     2826 | 2025-11-08 | MOUZ          | W   | 0.444      | 1.000        | 0.949 (0.421)    | -                | -         |     8.13 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     2871 | 2025-11-08 | FURIA         | L   | 0.439      | -            | -                | -                | -         |    -5.91 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     3039 | 2025-11-05 | Astralis      | W   | 0.419      | -            | -                | -                | -         |     2.61 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     3068 | 2025-11-04 | Spirit        | W   | 0.412      | 1.000        | 0.843 (0.347)    | -                | -         |     3.92 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     3101 | 2025-11-02 | TYLOO         | W   | 0.403      | -            | -                | -                | -         |     0.05 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     3757 | 2025-10-12 | Vitality      | L   | 0.260      | -            | -                | -                | -         |    -2.65 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     3781 | 2025-10-11 | MOUZ          | W   | 0.253      | -            | -                | -                | -         |     4.62 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     3826 | 2025-10-10 | 3DMAX         | W   | 0.245      | -            | -                | -                | -         |     0.75 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     4008 | 2025-10-06 | MOUZ          | W   | 0.221      | -            | -                | -                | -         |     4.10 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     4104 | 2025-10-05 | Natus Vincere | W   | 0.211      | -            | -                | -                | -         |     1.91 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     4142 | 2025-10-04 | Astralis      | W   | 0.205      | -            | -                | -                | -         |     1.44 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     4632 | 2025-09-20 | FURIA         | L   | 0.114      | -            | -                | -                | -         |    -1.41 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     4654 | 2025-09-19 | paiN          | W   | 0.108      | -            | -                | -                | -         |     0.13 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     4786 | 2025-09-15 | FaZe          | W   | 0.080      | -            | -                | -                | -         |     0.46 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     4835 | 2025-09-14 | Legacy        | W   | 0.072      | -            | -                | -                | -         |     0.14 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     4931 | 2025-09-12 | Virtus.pro    | W   | 0.060      | -            | -                | -                | -         |     0.01 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($364,369.77)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $50,000.00     | $50,000.00      |
| 2026-02-08 |      1.000 | $38,000.00     | $38,000.00      |
| 2026-01-25 |      0.960 | $111,563.00    | $107,135.08     |
| 2025-12-14 |      0.681 | $45,000.00     | $30,649.67      |
| 2025-11-16 |      0.492 | $75,000.00     | $36,916.28      |
| 2025-11-09 |      0.445 | $120,000.00    | $53,412.33      |
| 2025-10-12 |      0.260 | $125,000.00    | $32,526.33      |
| 2025-09-21 |      0.121 | $130,000.00    | $15,730.08      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
