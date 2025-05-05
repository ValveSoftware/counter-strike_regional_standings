### Roster Details<br />
Team Name: Falcons<br />
Roster: kyxsan, m0NESY, Magisk, NiKo, TeSeS<br />
Global Rank: [3](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [3]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1926.9<br />
<br />
Final Rank Value (1926.9) = Starting Rank Value (2000.0) + Head To Head Adjustments (-73.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.903[<sup>2</sup>](#table1)
- Opponent Network: 0.626[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.882<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.882 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |        3 | 2025-05-04 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -8.38 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           38 |       21 | 2025-05-03 | MOUZ          | W   | 1.000      | 0.687        | 1.000 (0.687)    | 0.658 (0.452)    | 1 (1.000) |    16.25 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           37 |       36 | 2025-05-01 | Spirit        | W   | 1.000      | 0.687        | 1.000 (0.687)    | -                | 1 (1.000) |    13.65 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           36 |       50 | 2025-04-30 | FaZe          | W   | 1.000      | 0.687        | 1.000 (0.687)    | -                | 1 (1.000) |     9.94 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           35 |       85 | 2025-04-27 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -8.11 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           34 |      124 | 2025-04-26 | MOUZ          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.658 (0.658)    | 1 (1.000) |    18.44 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           33 |      136 | 2025-04-25 | GamerLegion   | W   | 1.000      | 1.000        | -                | 0.723 (0.723)    | 1 (1.000) |     7.58 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           32 |      149 | 2025-04-23 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -7.96 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           31 |      161 | 2025-04-22 | Natus Vincere | W   | 1.000      | 1.000        | 0.560 (0.560)    | -                | 1 (1.000) |     6.81 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           30 |      173 | 2025-04-21 | SAW           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.95 | kyxsan, m0NESY, Magisk, NiKo, TeSeS  |
|           29 |      345 | 2025-04-13 | G2            | W   | 1.000      | 1.000        | 0.836 (0.836)    | 0.584 (0.584)    | 1 (1.000) |    14.28 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           28 |      360 | 2025-04-12 | FaZe          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.590 (0.590)    | 1 (1.000) |    12.75 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           27 |      385 | 2025-04-11 | GamerLegion   | W   | 1.000      | 1.000        | -                | 0.723 (0.723)    | 1 (1.000) |    10.83 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           26 |      391 | 2025-04-10 | The MongolZ   | W   | 1.000      | 1.000        | 0.944 (0.944)    | 0.561 (0.561)    | -         |    13.97 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           25 |      404 | 2025-04-09 | Rare Atom     | W   | 1.000      | 1.000        | -                | 0.975 (0.975)    | -         |     1.31 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           24 |      431 | 2025-04-08 | paiN          | W   | 1.000      | -            | -                | -                | -         |     2.49 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           23 |      464 | 2025-04-07 | GamerLegion   | L   | 1.000      | -            | -                | -                | -         |   -20.83 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           22 |      477 | 2025-04-06 | Complexity    | L   | 1.000      | -            | -                | -                | -         |   -27.82 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           21 |      921 | 2025-03-23 | Virtus.pro    | L   | 0.913      | -            | -                | -                | -         |   -23.29 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           20 |      963 | 2025-03-21 | The Huns      | W   | 0.899      | 0.715        | -                | 0.714 (0.459)    | -         |     0.33 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           19 |     1001 | 2025-03-19 | MOUZ          | L   | 0.886      | -            | -                | -                | -         |   -12.60 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           18 |     1148 | 2025-03-11 | Aurora        | L   | 0.834      | -            | -                | -                | -         |   -18.29 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           17 |     1167 | 2025-03-10 | FURIA         | W   | 0.828      | -            | -                | -                | -         |     0.48 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           16 |     1246 | 2025-03-09 | 3DMAX         | L   | 0.819      | -            | -                | -                | -         |   -21.11 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           15 |     1302 | 2025-03-08 | MOUZ          | L   | 0.813      | -            | -                | -                | -         |   -14.14 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           14 |     1349 | 2025-03-07 | Liquid        | W   | 0.808      | -            | -                | -                | -         |     2.94 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           13 |     1694 | 2025-02-23 | MOUZ          | L   | 0.728      | -            | -                | -                | -         |   -13.48 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           12 |     1721 | 2025-02-22 | FaZe          | W   | 0.721      | 1.000        | 1.000 (0.721)    | -                | -         |     8.97 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           11 |     1751 | 2025-02-21 | Aurora        | W   | 0.713      | 1.000        | -                | 0.747 (0.533)    | -         |     7.18 | degster, kyxsan, Magisk, NiKo, TeSeS |
|           10 |     1837 | 2025-02-17 | MOUZ          | W   | 0.686      | 1.000        | 1.000 (0.686)    | -                | -         |     9.24 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            9 |     1850 | 2025-02-16 | Astralis      | W   | 0.679      | -            | -                | -                | -         |     1.53 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            8 |     1867 | 2025-02-15 | paiN          | L   | 0.674      | -            | -                | -                | -         |   -20.38 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            7 |     1912 | 2025-02-14 | FlyQuest      | W   | 0.666      | -            | -                | -                | -         |     0.12 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            6 |     2009 | 2025-02-10 | BetBoom       | W   | 0.640      | -            | -                | -                | -         |     0.13 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            5 |     2016 | 2025-02-10 | TNL           | W   | 0.639      | -            | -                | -                | -         |     0.09 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            4 |     2245 | 2025-02-02 | G2            | L   | 0.587      | -            | -                | -                | -         |   -12.21 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            3 |     2262 | 2025-02-01 | Aurora        | L   | 0.579      | -            | -                | -                | -         |   -13.02 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            2 |     2383 | 2025-01-19 | Aurora        | L   | 0.492      | -            | -                | -                | -         |   -11.81 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            1 |     2397 | 2025-01-15 | ENCE          | W   | 0.467      | -            | -                | -                | -         |     0.06 | degster, kyxsan, Magisk, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($808,451.48)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $75,000.00     | $75,000.00      |
| 2025-04-27 |      1.000 | $150,000.00    | $150,000.00     |
| 2025-04-13 |      1.000 | $400,000.00    | $400,000.00     |
| 2025-03-30 |      0.961 | $7,500.00      | $7,208.36       |
| 2025-03-16 |      0.867 | $38,500.00     | $33,387.01      |
| 2025-02-23 |      0.728 | $187,500.00    | $136,516.64     |
| 2025-02-09 |      0.634 | $10,000.00     | $6,339.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
