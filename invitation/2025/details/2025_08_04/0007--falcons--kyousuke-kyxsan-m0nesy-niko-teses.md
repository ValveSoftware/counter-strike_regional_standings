### Roster Details<br />
Team Name: Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [7](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [5]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1678.2<br />
<br />
Final Rank Value (1678.2) = Starting Rank Value (1698.8) + Head To Head Adjustments (-20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.689[<sup>2</sup>](#table1)
- Opponent Network: 0.311[<sup>2</sup>](#table1)
- LAN Wins: 0.743[<sup>2</sup>](#table1)

The average of these factors is 0.686<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1698.8
- 400 + ( ( 0.686 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1698.8


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
|           47 |       55 | 2025-07-28 | FURIA         | L   | 1.000      | -            | -                | -                | -         |   -16.63 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           46 |       87 | 2025-07-27 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |   -10.54 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           45 |      113 | 2025-07-26 | GamerLegion   | W   | 1.000      | 1.000        | 0.450 (0.450)    | 0.420 (0.420)    | 1 (1.000) |    10.64 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           44 |      845 | 2025-06-09 | MIBR          | L   | 0.828      | -            | -                | -                | -         |   -23.78 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           43 |      857 | 2025-06-08 | OG            | W   | 0.821      | -            | -                | -                | 1 (0.821) |     0.77 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           42 |      873 | 2025-06-07 | Lynn Vision   | L   | 0.815      | -            | -                | -                | -         |   -21.15 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           41 |      886 | 2025-06-07 | B8            | L   | 0.813      | -            | -                | -                | -         |   -23.73 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           40 |     1029 | 2025-05-24 | Vitality      | L   | 0.722      | -            | -                | -                | -         |    -3.66 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           39 |     1043 | 2025-05-23 | GamerLegion   | W   | 0.715      | 1.000        | 0.450 (0.322)    | 0.420 (0.300)    | 1 (0.715) |     6.21 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           38 |     1084 | 2025-05-21 | MOUZ          | L   | 0.702      | -            | -                | -                | -         |    -6.33 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           37 |     1109 | 2025-05-20 | HEROIC        | W   | 0.695      | 1.000        | 0.404 (0.281)    | 0.655 (0.455)    | 1 (0.695) |     4.35 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           36 |     1139 | 2025-05-19 | NRG           | W   | 0.688      | 1.000        | -                | 0.686 (0.472)    | 1 (0.688) |     0.67 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           35 |     1524 | 2025-05-04 | Vitality      | L   | 0.587      | -            | -                | -                | -         |    -3.10 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           34 |     1560 | 2025-05-03 | MOUZ          | W   | 0.580      | 0.687        | 1.000 (0.398)    | 0.567 (0.226)    | 1 (0.580) |    13.36 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           33 |     1592 | 2025-05-01 | Spirit        | W   | 0.568      | 0.687        | 1.000 (0.390)    | -                | 1 (0.568) |    13.93 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           32 |     1620 | 2025-04-30 | FaZe          | W   | 0.561      | 0.687        | -                | 0.592 (0.228)    | 1 (0.561) |     8.18 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           31 |     1700 | 2025-04-27 | Vitality      | L   | 0.539      | -            | -                | -                | -         |    -2.63 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           30 |     1744 | 2025-04-26 | MOUZ          | W   | 0.531      | 1.000        | 1.000 (0.531)    | 0.567 (0.301)    | 1 (0.531) |    13.05 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           29 |     1760 | 2025-04-25 | GamerLegion   | W   | 0.524      | 1.000        | 0.450 (0.236)    | 0.420 (0.220)    | 1 (0.524) |     5.40 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           28 |     1781 | 2025-04-23 | Vitality      | L   | 0.512      | -            | -                | -                | -         |    -2.39 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           27 |     1797 | 2025-04-22 | Natus Vincere | W   | 0.505      | 1.000        | 0.549 (0.277)    | 0.454 (0.229)    | -         |     9.69 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           26 |     1809 | 2025-04-21 | SAW           | W   | 0.499      | -            | -                | -                | -         |     2.03 | kyxsan, m0NESY, Magisk, NiKo, TeSeS   |
|           25 |     1981 | 2025-04-13 | G2            | W   | 0.447      | -            | -                | -                | -         |     5.13 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           24 |     1997 | 2025-04-12 | FaZe          | W   | 0.440      | 1.000        | 0.494 (0.217)    | 0.592 (0.261)    | -         |     7.38 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           23 |     2023 | 2025-04-11 | GamerLegion   | W   | 0.431      | -            | -                | -                | -         |     5.24 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           22 |     2029 | 2025-04-10 | The MongolZ   | W   | 0.426      | 1.000        | 1.000 (0.426)    | -                | -         |     9.38 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           21 |     2061 | 2025-04-09 | Rare Atom     | W   | 0.419      | -            | -                | -                | -         |     0.72 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           20 |     2108 | 2025-04-08 | paiN          | W   | 0.413      | -            | -                | -                | -         |     4.24 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           19 |     2151 | 2025-04-07 | GamerLegion   | L   | 0.404      | -            | -                | -                | -         |    -7.87 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           18 |     2164 | 2025-04-06 | Complexity    | L   | 0.399      | -            | -                | -                | -         |   -10.86 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           17 |     2725 | 2025-03-23 | Virtus.pro    | L   | 0.306      | -            | -                | -                | -         |    -7.32 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           16 |     2775 | 2025-03-21 | The Huns      | W   | 0.292      | -            | -                | -                | -         |     0.17 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           15 |     2837 | 2025-03-19 | MOUZ          | L   | 0.280      | -            | -                | -                | -         |    -1.79 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           14 |     3020 | 2025-03-11 | Aurora        | L   | 0.227      | -            | -                | -                | -         |    -3.81 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           13 |     3041 | 2025-03-10 | FURIA         | W   | 0.221      | -            | -                | -                | -         |     4.04 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           12 |     3125 | 2025-03-09 | 3DMAX         | L   | 0.212      | -            | -                | -                | -         |    -3.80 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           11 |     3181 | 2025-03-08 | MOUZ          | L   | 0.207      | -            | -                | -                | -         |    -1.36 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           10 |     3231 | 2025-03-07 | Liquid        | W   | 0.201      | -            | -                | -                | -         |     0.56 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            9 |     3622 | 2025-02-23 | MOUZ          | L   | 0.121      | -            | -                | -                | -         |    -0.81 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            8 |     3649 | 2025-02-22 | FaZe          | W   | 0.114      | -            | -                | -                | -         |     1.95 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            7 |     3679 | 2025-02-21 | Aurora        | W   | 0.107      | -            | -                | -                | -         |     1.62 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            6 |     3805 | 2025-02-17 | MOUZ          | W   | 0.079      | -            | -                | -                | -         |     1.98 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            5 |     3818 | 2025-02-16 | Astralis      | W   | 0.072      | -            | -                | -                | -         |     1.35 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            4 |     3835 | 2025-02-15 | paiN          | L   | 0.067      | -            | -                | -                | -         |    -1.46 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            3 |     3880 | 2025-02-14 | FlyQuest      | W   | 0.059      | -            | -                | -                | -         |     0.17 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            2 |     3977 | 2025-02-10 | BetBoom       | W   | 0.034      | -            | -                | -                | -         |     0.15 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            1 |     3984 | 2025-02-10 | TNL           | W   | 0.032      | -            | -                | -                | -         |     0.04 | degster, kyxsan, Magisk, NiKo, TeSeS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($446,937.98)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $23,000.00     | $23,000.00      |
| 2025-06-10 |      0.835 | $10,000.00     | $8,349.32       |
| 2025-05-25 |      0.728 | $105,000.00    | $76,473.60      |
| 2025-05-04 |      0.587 | $75,000.00     | $44,055.91      |
| 2025-04-27 |      0.539 | $150,000.00    | $80,839.73      |
| 2025-04-13 |      0.447 | $400,000.00    | $178,765.25     |
| 2025-03-30 |      0.354 | $7,500.00      | $2,658.32       |
| 2025-03-16 |      0.261 | $38,500.00     | $10,030.15      |
| 2025-02-23 |      0.121 | $187,500.00    | $22,765.70      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
