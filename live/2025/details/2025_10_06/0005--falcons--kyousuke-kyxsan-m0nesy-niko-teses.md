### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [5](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [3]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1811.4<br />
<br />
Final Rank Value (1811.4) = Starting Rank Value (1807.1) + Head To Head Adjustments (4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.959[<sup>1</sup>](#table2)
- Bounty Collected: 0.715[<sup>2</sup>](#table1)
- Opponent Network: 0.366[<sup>2</sup>](#table1)
- LAN Wins: 0.834[<sup>2</sup>](#table1)

The average of these factors is 0.718<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1807.1
- 400 + ( ( 0.718 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1807.1


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
|           35 |      399 | 2025-09-20 | FURIA         | L   | 1.000      | -            | -                | -                | -         |   -11.10 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           34 |      421 | 2025-09-19 | paiN          | W   | 1.000      | 1.000        | 0.341 (0.341)    | 0.295 (0.295)    | 1 (1.000) |     5.85 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |      541 | 2025-09-15 | FaZe          | W   | 1.000      | 1.000        | 0.340 (0.340)    | 0.395 (0.395)    | 1 (1.000) |     9.05 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |      590 | 2025-09-14 | Legacy        | W   | 1.000      | 1.000        | 0.123 (0.123)    | 0.519 (0.519)    | 1 (1.000) |     2.85 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           31 |      686 | 2025-09-12 | Virtus.pro    | W   | 1.000      | 1.000        | 0.235 (0.235)    | 0.281 (0.281)    | 1 (1.000) |     2.90 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |     1198 | 2025-08-24 | Vitality      | W   | 0.912      | 1.000        | 1.000 (0.912)    | 0.493 (0.450)    | 1 (0.912) |    17.44 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |     1201 | 2025-08-23 | Aurora        | L   | 0.908      | -            | -                | -                | -         |   -14.79 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |     1217 | 2025-08-22 | MOUZ          | W   | 0.901      | 1.000        | 0.982 (0.885)    | 0.493 (0.444)    | 1 (0.901) |    15.51 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     1247 | 2025-08-21 | G2            | W   | 0.892      | 1.000        | 0.781 (0.697)    | 0.592 (0.528)    | 1 (0.892) |    16.05 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     1858 | 2025-07-28 | FURIA         | L   | 0.734      | -            | -                | -                | -         |    -6.90 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           25 |     1895 | 2025-07-27 | The MongolZ   | L   | 0.727      | -            | -                | -                | -         |    -5.91 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |     1926 | 2025-07-26 | GamerLegion   | W   | 0.719      | 1.000        | 0.333 (0.239)    | 0.391 (0.282)    | 1 (0.719) |     5.25 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |     2666 | 2025-06-09 | MIBR          | L   | 0.408      | -            | -                | -                | -         |   -10.66 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           22 |     2678 | 2025-06-08 | OG            | W   | 0.402      | 0.769        | -                | 1.000 (0.309)    | 1 (0.402) |     2.33 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           21 |     2694 | 2025-06-07 | Lynn Vision   | L   | 0.395      | -            | -                | -                | -         |   -11.54 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           20 |     2707 | 2025-06-07 | B8            | L   | 0.393      | -            | -                | -                | -         |   -10.46 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           19 |     2850 | 2025-05-24 | Vitality      | L   | 0.302      | -            | -                | -                | -         |    -4.41 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           18 |     2864 | 2025-05-23 | GamerLegion   | W   | 0.296      | -            | -                | -                | 1 (0.296) |     1.80 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           17 |     2905 | 2025-05-21 | MOUZ          | L   | 0.282      | -            | -                | -                | -         |    -4.61 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           16 |     2930 | 2025-05-20 | HEROIC        | W   | 0.275      | -            | -                | -                | -         |     0.75 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           15 |     2960 | 2025-05-19 | NRG           | W   | 0.269      | 1.000        | -                | 0.591 (0.159)    | -         |     0.35 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           14 |     3345 | 2025-05-04 | Vitality      | L   | 0.168      | -            | -                | -                | -         |    -2.56 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           13 |     3381 | 2025-05-03 | MOUZ          | W   | 0.160      | 0.687        | 0.982 (0.108)    | -                | -         |     2.41 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           12 |     3413 | 2025-05-01 | Spirit        | W   | 0.148      | -            | -                | -                | -         |     2.19 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           11 |     3441 | 2025-04-30 | FaZe          | W   | 0.141      | -            | -                | -                | -         |     0.94 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           10 |     3521 | 2025-04-27 | Vitality      | L   | 0.119      | -            | -                | -                | -         |    -1.84 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            9 |     3565 | 2025-04-26 | MOUZ          | W   | 0.111      | 1.000        | 0.982 (0.109)    | -                | -         |     1.70 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            8 |     3581 | 2025-04-25 | GamerLegion   | W   | 0.105      | -            | -                | -                | -         |     0.61 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            7 |     3602 | 2025-04-23 | Vitality      | L   | 0.092      | -            | -                | -                | -         |    -1.43 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            6 |     3618 | 2025-04-22 | Natus Vincere | W   | 0.085      | -            | -                | -                | -         |     1.32 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            5 |     3630 | 2025-04-21 | SAW           | W   | 0.079      | -            | -                | -                | -         |     0.36 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            4 |     3802 | 2025-04-13 | G2            | W   | 0.027      | -            | -                | -                | -         |     0.50 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            3 |     3818 | 2025-04-12 | FaZe          | W   | 0.020      | -            | -                | -                | -         |     0.14 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            2 |     3844 | 2025-04-11 | GamerLegion   | W   | 0.012      | -            | -                | -                | -         |     0.07 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            1 |     3850 | 2025-04-10 | The MongolZ   | W   | 0.006      | -            | -                | -                | -         |     0.14 | degster, kyxsan, Magisk, NiKo, TeSeS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($344,242.65)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.91) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-21 |      1.000 | $130,000.00    | $130,000.00     |
| 2025-08-24 |      0.913 | $130,000.00    | $118,634.54     |
| 2025-08-03 |      0.774 | $23,000.00     | $17,798.62      |
| 2025-06-10 |      0.415 | $10,000.00     | $4,151.02       |
| 2025-05-25 |      0.308 | $105,000.00    | $32,391.43      |
| 2025-05-04 |      0.168 | $75,000.00     | $12,568.65      |
| 2025-04-27 |      0.119 | $150,000.00    | $17,865.21      |
| 2025-04-13 |      0.027 | $400,000.00    | $10,833.18      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
