### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [2](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [1]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1914.4<br />
<br />
Final Rank Value (1914.4) = Starting Rank Value (1852.4) + Head To Head Adjustments (62.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.926[<sup>1</sup>](#table2)
- Bounty Collected: 0.809[<sup>2</sup>](#table1)
- Opponent Network: 0.355[<sup>2</sup>](#table1)
- LAN Wins: 0.962[<sup>2</sup>](#table1)

The average of these factors is 0.763<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1852.4
- 400 + ( ( 0.763 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1852.4


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
|           31 |      299 | 2025-11-16 | FURIA         | L   | 1.000      | -            | -                | -                | -         |   -12.52 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |      324 | 2025-11-15 | Vitality      | W   | 1.000      | 0.687        | 1.000 (0.687)    | 0.529 (0.364)    | 1 (1.000) |    14.46 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |      375 | 2025-11-12 | Passion UA    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.85 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |      405 | 2025-11-12 | Spirit        | W   | 1.000      | 0.687        | 0.818 (0.562)    | -                | 1 (1.000) |     7.92 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |      486 | 2025-11-08 | MOUZ          | W   | 1.000      | 1.000        | 0.562 (0.562)    | 0.403 (0.403)    | 1 (1.000) |    11.77 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |      531 | 2025-11-08 | FURIA         | L   | 1.000      | -            | -                | -                | -         |   -13.42 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           25 |      699 | 2025-11-05 | Astralis      | W   | 1.000      | 1.000        | -                | 0.358 (0.358)    | 1 (1.000) |     6.15 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |      728 | 2025-11-04 | Spirit        | W   | 1.000      | 1.000        | 0.818 (0.818)    | 0.337 (0.337)    | 1 (1.000) |     8.67 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |      761 | 2025-11-02 | TYLOO         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.20 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           22 |     1417 | 2025-10-12 | Vitality      | L   | 0.867      | -            | -                | -                | -         |   -13.59 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           21 |     1441 | 2025-10-11 | MOUZ          | W   | 0.859      | 1.000        | 0.562 (0.483)    | 0.403 (0.347)    | 1 (0.859) |     8.85 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           20 |     1486 | 2025-10-10 | 3DMAX         | W   | 0.852      | 1.000        | 0.521 (0.444)    | 0.493 (0.420)    | 1 (0.852) |     6.27 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     1668 | 2025-10-06 | MOUZ          | W   | 0.827      | 1.000        | 0.562 (0.465)    | 0.403 (0.334)    | 1 (0.827) |     8.61 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     1764 | 2025-10-05 | Natus Vincere | W   | 0.818      | 1.000        | 0.699 (0.572)    | -                | -         |     7.17 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     1802 | 2025-10-04 | Astralis      | W   | 0.812      | 1.000        | -                | 0.358 (0.291)    | -         |     5.77 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     2292 | 2025-09-20 | FURIA         | L   | 0.720      | -            | -                | -                | -         |    -8.47 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     2314 | 2025-09-19 | paiN          | W   | 0.714      | -            | -                | -                | -         |     3.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     2446 | 2025-09-15 | FaZe          | W   | 0.687      | 1.000        | -                | 0.448 (0.308)    | -         |     4.53 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     2495 | 2025-09-14 | Legacy        | W   | 0.679      | 1.000        | 1.000 (0.679)    | 0.577 (0.391)    | -         |     9.81 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     2591 | 2025-09-12 | Virtus.pro    | W   | 0.666      | -            | -                | -                | -         |     0.58 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     3118 | 2025-08-24 | Vitality      | W   | 0.538      | 1.000        | 1.000 (0.538)    | -                | -         |     9.42 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     3121 | 2025-08-23 | Aurora        | L   | 0.534      | -            | -                | -                | -         |    -7.73 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     3137 | 2025-08-22 | MOUZ          | W   | 0.528      | -            | -                | -                | -         |     6.07 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     3167 | 2025-08-21 | G2            | W   | 0.519      | -            | -                | -                | -         |     4.31 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     3780 | 2025-07-28 | FURIA         | L   | 0.360      | -            | -                | -                | -         |    -3.68 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     3817 | 2025-07-27 | The MongolZ   | L   | 0.353      | -            | -                | -                | -         |    -5.45 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     3848 | 2025-07-26 | GamerLegion   | W   | 0.346      | -            | -                | -                | -         |     1.93 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     4588 | 2025-06-09 | MIBR          | L   | 0.035      | -            | -                | -                | -         |    -1.05 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            3 |     4600 | 2025-06-08 | OG            | W   | 0.028      | -            | -                | -                | -         |     0.00 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            2 |     4616 | 2025-06-07 | Lynn Vision   | L   | 0.021      | -            | -                | -                | -         |    -0.64 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|            1 |     4629 | 2025-06-07 | B8            | L   | 0.019      | -            | -                | -                | -         |    -0.50 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($477,574.59)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.83) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      1.000 | $75,000.00     | $75,000.00      |
| 2025-11-09 |      1.000 | $120,000.00    | $120,000.00     |
| 2025-10-12 |      0.867 | $125,000.00    | $108,340.54     |
| 2025-09-21 |      0.728 | $130,000.00    | $94,576.86      |
| 2025-08-24 |      0.539 | $130,000.00    | $70,042.47      |
| 2025-08-03 |      0.400 | $23,000.00     | $9,201.56       |
| 2025-06-10 |      0.041 | $10,000.00     | $413.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
