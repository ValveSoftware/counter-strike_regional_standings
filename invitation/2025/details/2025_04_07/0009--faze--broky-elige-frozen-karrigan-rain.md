### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, EliGE, frozen, karrigan, rain<br />
Global Rank: [9](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1690.2<br />
<br />
Final Rank Value (1690.2) = Starting Rank Value (1698.0) + Head To Head Adjustments (-7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.877[<sup>1</sup>](#table2)
- Bounty Collected: 0.753[<sup>2</sup>](#table1)
- Opponent Network: 0.410[<sup>2</sup>](#table1)
- LAN Wins: 0.778[<sup>2</sup>](#table1)

The average of these factors is 0.705<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1698.0
- 400 + ( ( 0.705 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 1698.0


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
|           32 |      353 | 2025-03-23 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -7.18 | broky, EliGE, frozen, karrigan, rain |
|           31 |      392 | 2025-03-21 | Astralis      | W   | 1.000      | 0.715        | 0.638 (0.457)    | 0.710 (0.508)    | 1 (1.000) |     8.67 | broky, EliGE, frozen, karrigan, rain |
|           30 |      415 | 2025-03-19 | Virtus.pro    | L   | 1.000      | -            | -                | -                | -         |   -23.32 | broky, EliGE, frozen, karrigan, rain |
|           29 |     1038 | 2025-02-23 | Astralis      | L   | 0.913      | -            | -                | -                | -         |   -22.00 | broky, EliGE, frozen, karrigan, rain |
|           28 |     1057 | 2025-02-22 | Falcons       | L   | 0.908      | -            | -                | -                | -         |   -13.16 | broky, EliGE, frozen, karrigan, rain |
|           27 |     1081 | 2025-02-21 | SAW           | W   | 0.901      | 1.000        | 0.314 (0.283)    | 0.436 (0.393)    | 1 (0.901) |     2.43 | broky, EliGE, frozen, karrigan, rain |
|           26 |     1163 | 2025-02-16 | MOUZ          | W   | 0.866      | 1.000        | 1.000 (0.866)    | 0.654 (0.566)    | 1 (0.866) |    19.82 | broky, EliGE, frozen, karrigan, rain |
|           25 |     1194 | 2025-02-15 | Eternal Fire  | W   | 0.860      | 1.000        | 0.976 (0.840)    | 0.836 (0.719)    | 1 (0.860) |    18.71 | broky, EliGE, frozen, karrigan, rain |
|           24 |     1231 | 2025-02-14 | SAW           | W   | 0.852      | 1.000        | 0.314 (0.268)    | 0.436 (0.372)    | 1 (0.852) |     2.53 | broky, EliGE, frozen, karrigan, rain |
|           23 |     1535 | 2025-02-04 | Eternal Fire  | L   | 0.787      | -            | -                | -                | -         |    -7.06 | broky, EliGE, frozen, karrigan, rain |
|           22 |     1542 | 2025-02-03 | G2            | W   | 0.782      | 1.000        | 0.831 (0.649)    | 0.579 (0.453)    | 1 (0.782) |    14.07 | broky, EliGE, frozen, karrigan, rain |
|           21 |     1553 | 2025-02-02 | Vitality      | L   | 0.775      | -            | -                | -                | -         |    -4.26 | broky, EliGE, frozen, karrigan, rain |
|           20 |     1572 | 2025-02-01 | BIG           | W   | 0.767      | 1.000        | 0.206 (0.158)    | 0.415 (0.318)    | 1 (0.767) |     1.19 | broky, EliGE, frozen, karrigan, rain |
|           19 |     1634 | 2025-01-18 | paiN          | L   | 0.673      | -            | -                | -                | -         |   -16.20 | broky, EliGE, frozen, karrigan, rain |
|           18 |     1641 | 2025-01-16 | M80           | W   | 0.661      | -            | -                | -                | -         |     0.37 | broky, EliGE, frozen, karrigan, rain |
|           17 |     1828 | 2024-12-15 | Spirit        | L   | 0.446      | -            | -                | -                | -         |    -3.65 | broky, frozen, karrigan, rain, ropz  |
|           16 |     1852 | 2024-12-14 | G2            | W   | 0.439      | 1.000        | 0.831 (0.365)    | 0.579 (0.254)    | 1 (0.439) |     8.19 | broky, frozen, karrigan, rain, ropz  |
|           15 |     1876 | 2024-12-13 | Vitality      | W   | 0.432      | 1.000        | 1.000 (0.432)    | -                | 1 (0.432) |    11.41 | broky, frozen, karrigan, rain, ropz  |
|           14 |     1945 | 2024-12-08 | FURIA         | W   | 0.399      | -            | -                | -                | 1 (0.399) |     1.18 | broky, frozen, karrigan, rain, ropz  |
|           13 |     1986 | 2024-12-06 | G2            | L   | 0.390      | -            | -                | -                | -         |    -4.98 | broky, frozen, karrigan, rain, ropz  |
|           12 |     2010 | 2024-12-05 | MOUZ          | W   | 0.383      | 1.000        | 1.000 (0.383)    | 0.654 (0.251)    | -         |    10.11 | broky, frozen, karrigan, rain, ropz  |
|           11 |     2022 | 2024-12-05 | Falcons       | L   | 0.379      | -            | -                | -                | -         |    -4.70 | broky, frozen, karrigan, rain, ropz  |
|           10 |     2040 | 2024-12-04 | Wildcard      | W   | 0.377      | 1.000        | -                | 0.713 (0.269)    | -         |     0.36 | broky, frozen, karrigan, rain, ropz  |
|            9 |     2355 | 2024-11-19 | Cloud9        | W   | 0.273      | -            | -                | -                | -         |     0.04 | broky, frozen, karrigan, rain, ropz  |
|            8 |     2357 | 2024-11-19 | fnatic        | W   | 0.272      | -            | -                | -                | -         |     0.19 | broky, frozen, karrigan, rain, ropz  |
|            7 |     2368 | 2024-11-18 | Vitality      | L   | 0.265      | -            | -                | -                | -         |    -1.33 | broky, frozen, karrigan, rain, ropz  |
|            6 |     2383 | 2024-11-17 | Falcons       | W   | 0.259      | -            | -                | -                | -         |     0.02 | broky, frozen, karrigan, rain, ropz  |
|            5 |     2398 | 2024-11-16 | Cloud9        | W   | 0.257      | -            | -                | -                | -         |     0.04 | broky, frozen, karrigan, rain, ropz  |
|            4 |     2780 | 2024-11-01 | Spirit        | L   | 0.153      | -            | -                | -                | -         |    -1.11 | broky, frozen, karrigan, rain, ropz  |
|            3 |     2808 | 2024-10-31 | Natus Vincere | W   | 0.145      | -            | -                | -                | -         |     2.56 | broky, frozen, karrigan, rain, ropz  |
|            2 |     2828 | 2024-10-30 | MOUZ          | L   | 0.138      | -            | -                | -                | -         |    -0.68 | broky, frozen, karrigan, rain, ropz  |
|            1 |     3218 | 2024-10-09 | MOUZ          | L   | 0.002      | -            | -                | -                | -         |    -0.01 | broky, frozen, karrigan, rain, ropz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($198,787.49)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.72) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-30 |      1.000 | $7,500.00      | $7,500.00       |
| 2025-02-23 |      0.915 | $87,500.00     | $80,050.99      |
| 2025-02-09 |      0.821 | $38,000.00     | $31,187.61      |
| 2024-12-15 |      0.446 | $170,000.00    | $75,744.98      |
| 2024-11-03 |      0.165 | $25,000.00     | $4,136.09       |
| 2024-10-13 |      0.028 | $6,000.00      | $167.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
