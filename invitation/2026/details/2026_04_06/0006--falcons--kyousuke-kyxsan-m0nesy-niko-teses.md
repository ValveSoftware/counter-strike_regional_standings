### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [6](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [5]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1769.4<br />
<br />
Final Rank Value (1769.4) = Starting Rank Value (1743.5) + Head To Head Adjustments (25.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.845[<sup>1</sup>](#table2)
- Bounty Collected: 0.704[<sup>2</sup>](#table1)
- Opponent Network: 0.339[<sup>2</sup>](#table1)
- LAN Wins: 0.860[<sup>2</sup>](#table1)

The average of these factors is 0.687<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1743.5
- 400 + ( ( 0.687 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1743.5


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
|           36 |      494 | 2026-03-27 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -14.62 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           35 |      699 | 2026-03-23 | FURIA         | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.389 (0.389)    | 1 (1.000) |    16.33 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           34 |      761 | 2026-03-22 | TYLOO         | W   | 1.000      | 1.000        | -                | 0.342 (0.342)    | 1 (1.000) |     5.39 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |      853 | 2026-03-20 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |   -10.86 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |      969 | 2026-03-18 | NRG           | W   | 1.000      | 1.000        | -                | 0.269 (0.269)    | 1 (1.000) |     3.42 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           31 |     2259 | 2026-02-20 | PARIVISION    | L   | 0.899      | -            | -                | -                | -         |   -11.45 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |     2445 | 2026-02-16 | FURIA         | W   | 0.875      | 1.000        | 1.000 (0.875)    | 0.389 (0.340)    | 1 (0.875) |    18.04 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |     2527 | 2026-02-15 | FaZe          | W   | 0.866      | 1.000        | 0.374 (0.324)    | 0.350 (0.304)    | 1 (0.866) |     6.58 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |     2572 | 2026-02-14 | 3DMAX         | W   | 0.860      | 1.000        | 0.215 (0.185)    | 0.492 (0.423)    | 1 (0.860) |     6.32 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     2930 | 2026-02-03 | MOUZ          | L   | 0.788      | -            | -                | -                | -         |   -12.31 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     2947 | 2026-02-03 | 3DMAX         | W   | 0.786      | 1.000        | 0.215 (0.169)    | 0.492 (0.387)    | 1 (0.786) |     6.45 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           25 |     2972 | 2026-02-02 | NRG           | W   | 0.781      | -            | -                | -                | 1 (0.781) |     3.14 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |     3007 | 2026-02-01 | Aurora        | L   | 0.773      | -            | -                | -                | -         |    -9.23 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |     3189 | 2026-01-25 | PARIVISION    | L   | 0.727      | -            | -                | -                | -         |    -8.56 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           22 |     3224 | 2026-01-24 | Vitality      | W   | 0.721      | 0.899        | 1.000 (0.648)    | 0.399 (0.259)    | 1 (0.721) |    17.66 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           21 |     3322 | 2026-01-22 | Liquid        | W   | 0.707      | 0.899        | 0.238 (0.151)    | -                | 1 (0.707) |     3.70 | kyxsan, m0NESY, NiKo, NucleonZ, TeSeS |
|           20 |     3459 | 2026-01-17 | Monte         | W   | 0.675      | 0.895        | -                | 0.487 (0.294)    | -         |     4.68 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     3570 | 2026-01-15 | ECSTATIC      | W   | 0.661      | 0.895        | -                | 0.643 (0.381)    | -         |     2.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     3940 | 2025-12-11 | Spirit        | L   | 0.427      | -            | -                | -                | -         |    -8.19 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     3997 | 2025-12-07 | G2            | W   | 0.402      | 1.000        | 0.349 (0.140)    | -                | -         |     5.56 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     4023 | 2025-12-06 | MOUZ          | L   | 0.394      | -            | -                | -                | -         |    -6.01 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     4055 | 2025-12-05 | Imperial      | W   | 0.387      | -            | -                | -                | -         |     1.04 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     4078 | 2025-12-04 | Passion UA    | W   | 0.381      | -            | -                | -                | -         |     1.36 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     4083 | 2025-12-04 | B8            | L   | 0.380      | -            | -                | -                | -         |    -8.71 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     4525 | 2025-11-16 | FURIA         | L   | 0.259      | -            | -                | -                | -         |    -2.89 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     4551 | 2025-11-15 | Vitality      | W   | 0.252      | 0.687        | 1.000 (0.173)    | -                | -         |     6.27 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     4606 | 2025-11-12 | Passion UA    | W   | 0.237      | -            | -                | -                | -         |     0.81 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     4641 | 2025-11-12 | Spirit        | W   | 0.231      | -            | -                | -                | -         |     2.66 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     4726 | 2025-11-08 | MOUZ          | W   | 0.211      | 1.000        | 0.664 (0.140)    | -                | -         |     3.44 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     4771 | 2025-11-08 | FURIA         | L   | 0.206      | -            | -                | -                | -         |    -2.33 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     4939 | 2025-11-05 | Astralis      | W   | 0.186      | -            | -                | -                | -         |     2.20 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     4968 | 2025-11-04 | Spirit        | W   | 0.179      | -            | -                | -                | -         |     2.12 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     5001 | 2025-11-02 | TYLOO         | W   | 0.170      | -            | -                | -                | -         |     0.90 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     5657 | 2025-10-12 | Vitality      | L   | 0.027      | -            | -                | -                | -         |    -0.17 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     5681 | 2025-10-11 | MOUZ          | W   | 0.020      | -            | -                | -                | -         |     0.32 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     5726 | 2025-10-10 | 3DMAX         | W   | 0.012      | -            | -                | -                | -         |     0.12 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($301,544.01)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.66) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $75,000.00     | $75,000.00      |
| 2026-02-22 |      0.914 | $50,000.00     | $45,712.73      |
| 2026-02-08 |      0.821 | $38,000.00     | $31,206.24      |
| 2026-01-25 |      0.727 | $111,563.00    | $81,146.64      |
| 2025-12-14 |      0.448 | $45,000.00     | $20,166.98      |
| 2025-11-16 |      0.259 | $75,000.00     | $19,445.14      |
| 2025-11-09 |      0.212 | $120,000.00    | $25,458.51      |
| 2025-10-12 |      0.027 | $125,000.00    | $3,407.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
