### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [3](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [3]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1822.7<br />
<br />
Final Rank Value (1822.7) = Starting Rank Value (1775.4) + Head To Head Adjustments (47.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.876[<sup>1</sup>](#table2)
- Bounty Collected: 0.825[<sup>2</sup>](#table1)
- Opponent Network: 0.377[<sup>2</sup>](#table1)
- LAN Wins: 0.887[<sup>2</sup>](#table1)

The average of these factors is 0.741<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1775.4
- 400 + ( ( 0.741 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1775.4


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
|           35 |      489 | 2026-04-19 | FURIA         | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.401 (0.401)    | 1 (1.000) |    14.60 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           34 |      512 | 2026-04-18 | Spirit        | L   | 1.000      | -            | -                | -                | -         |   -16.22 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |      550 | 2026-04-15 | Vitality      | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.471 (0.471)    | 1 (1.000) |    25.02 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |      574 | 2026-04-14 | Spirit        | W   | 1.000      | 1.000        | 0.838 (0.838)    | 0.334 (0.334)    | 1 (1.000) |    15.16 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           31 |      593 | 2026-04-13 | 3DMAX         | W   | 1.000      | 1.000        | 0.367 (0.367)    | 0.557 (0.557)    | 1 (1.000) |     7.11 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |     1568 | 2026-03-27 | PARIVISION    | L   | 0.947      | -            | -                | -                | -         |   -14.71 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |     1789 | 2026-03-23 | FURIA         | W   | 0.920      | 1.000        | 1.000 (0.920)    | 0.401 (0.369)    | 1 (0.920) |    14.07 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |     1853 | 2026-03-22 | TYLOO         | W   | 0.912      | 1.000        | -                | 0.447 (0.408)    | 1 (0.912) |     3.63 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     1947 | 2026-03-20 | Natus Vincere | L   | 0.901      | -            | -                | -                | -         |   -10.26 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     2065 | 2026-03-18 | NRG           | W   | 0.885      | -            | -                | -                | 1 (0.885) |     2.78 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           25 |     3356 | 2026-02-20 | PARIVISION    | L   | 0.712      | -            | -                | -                | -         |   -10.26 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |     3542 | 2026-02-16 | FURIA         | W   | 0.688      | 1.000        | 1.000 (0.688)    | 0.401 (0.276)    | 1 (0.688) |    12.56 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |     3624 | 2026-02-15 | FaZe          | W   | 0.679      | 1.000        | 0.563 (0.383)    | 0.366 (0.249)    | 1 (0.679) |     5.48 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           22 |     3669 | 2026-02-14 | 3DMAX         | W   | 0.673      | 1.000        | 0.367 (0.247)    | 0.557 (0.375)    | 1 (0.673) |     7.43 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           21 |     4027 | 2026-02-03 | MOUZ          | L   | 0.601      | -            | -                | -                | -         |   -11.93 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           20 |     4044 | 2026-02-03 | 3DMAX         | W   | 0.599      | 1.000        | 0.367 (0.220)    | 0.557 (0.334)    | -         |     7.17 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     4069 | 2026-02-02 | NRG           | W   | 0.594      | -            | -                | -                | -         |     2.13 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     4104 | 2026-02-01 | Aurora        | L   | 0.586      | -            | -                | -                | -         |    -9.21 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     4286 | 2026-01-25 | PARIVISION    | L   | 0.540      | -            | -                | -                | -         |    -7.74 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           16 |     4321 | 2026-01-24 | Vitality      | W   | 0.534      | 0.899        | 1.000 (0.480)    | -                | -         |    13.06 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           15 |     4419 | 2026-01-22 | Liquid        | W   | 0.520      | -            | -                | -                | -         |     1.10 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           14 |     4556 | 2026-01-17 | Monte         | W   | 0.488      | -            | -                | -                | -         |     2.50 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     4667 | 2026-01-15 | ECSTATIC      | W   | 0.474      | -            | -                | -                | -         |     0.85 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     5037 | 2025-12-11 | Spirit        | L   | 0.240      | -            | -                | -                | -         |    -3.76 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     5094 | 2025-12-07 | G2            | W   | 0.215      | -            | -                | -                | -         |     3.00 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     5120 | 2025-12-06 | MOUZ          | L   | 0.207      | -            | -                | -                | -         |    -4.16 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     5152 | 2025-12-05 | Imperial      | W   | 0.200      | -            | -                | -                | -         |     0.38 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     5175 | 2025-12-04 | Passion UA    | W   | 0.194      | -            | -                | -                | -         |     0.56 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     5180 | 2025-12-04 | B8            | L   | 0.193      | -            | -                | -                | -         |    -4.33 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     5622 | 2025-11-16 | FURIA         | L   | 0.072      | -            | -                | -                | -         |    -1.10 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     5648 | 2025-11-15 | Vitality      | W   | 0.065      | -            | -                | -                | -         |     1.60 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     5703 | 2025-11-12 | Passion UA    | W   | 0.050      | -            | -                | -                | -         |     0.14 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     5738 | 2025-11-12 | Spirit        | W   | 0.044      | -            | -                | -                | -         |     0.68 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     5823 | 2025-11-08 | MOUZ          | W   | 0.024      | -            | -                | -                | -         |     0.27 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     5868 | 2025-11-08 | FURIA         | L   | 0.019      | -            | -                | -                | -         |    -0.29 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($337,876.74)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.72) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      1.000 | $125,000.00    | $125,000.00     |
| 2026-03-29 |      0.959 | $75,000.00     | $71,933.76      |
| 2026-02-22 |      0.727 | $50,000.00     | $36,363.30      |
| 2026-02-08 |      0.634 | $38,000.00     | $24,100.67      |
| 2026-01-25 |      0.540 | $111,563.00    | $60,285.63      |
| 2025-12-14 |      0.261 | $45,000.00     | $11,752.50      |
| 2025-11-16 |      0.072 | $75,000.00     | $5,421.00       |
| 2025-11-09 |      0.025 | $120,000.00    | $3,019.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
