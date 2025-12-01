### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, jcobbb, karrigan, Twistzz<br />
Global Rank: [17](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1544.7<br />
<br />
Final Rank Value (1544.7) = Starting Rank Value (1599.9) + Head To Head Adjustments (-55.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.632[<sup>1</sup>](#table2)
- Bounty Collected: 0.699[<sup>2</sup>](#table1)
- Opponent Network: 0.303[<sup>2</sup>](#table1)
- LAN Wins: 0.888[<sup>2</sup>](#table1)

The average of these factors is 0.630<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1599.9
- 400 + ( ( 0.630 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1599.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       61 | 2025-11-27 | Fluxo             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.43 | broky, frozen, jcobbb, karrigan, Twistzz |
|           36 |       65 | 2025-11-26 | RED Canids        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.42 | broky, frozen, jcobbb, karrigan, Twistzz |
|           35 |       83 | 2025-11-25 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -23.76 | broky, frozen, jcobbb, karrigan, Twistzz |
|           34 |       95 | 2025-11-24 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -24.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|           33 |      111 | 2025-11-24 | Lynn Vision       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.87 | broky, frozen, jcobbb, karrigan, Twistzz |
|           32 |      733 | 2025-11-03 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -26.73 | broky, frozen, jcobbb, karrigan, Twistzz |
|           31 |      759 | 2025-11-02 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -8.79 | broky, frozen, jcobbb, karrigan, Twistzz |
|           30 |     1316 | 2025-10-16 | FUT               | L   | 0.892      | -            | -                | -                | -         |   -19.66 | broky, frozen, jcobbb, karrigan, Twistzz |
|           29 |     1323 | 2025-10-15 | TYLOO             | W   | 0.890      | 1.000        | 0.263 (0.234)    | -                | 1 (0.890) |     4.12 | broky, frozen, jcobbb, karrigan, Twistzz |
|           28 |     1362 | 2025-10-15 | B8                | W   | 0.884      | 1.000        | 0.220 (0.195)    | 0.341 (0.301)    | 1 (0.884) |    10.22 | broky, frozen, jcobbb, karrigan, Twistzz |
|           27 |     1388 | 2025-10-14 | FUT               | L   | 0.877      | -            | -                | -                | -         |   -20.45 | broky, frozen, jcobbb, karrigan, Twistzz |
|           26 |     1423 | 2025-10-12 | MOUZ              | L   | 0.865      | -            | -                | -                | -         |    -9.06 | broky, frozen, karrigan, rain, Twistzz   |
|           25 |     1432 | 2025-10-11 | Vitality          | L   | 0.861      | -            | -                | -                | -         |    -5.63 | broky, frozen, karrigan, rain, Twistzz   |
|           24 |     1472 | 2025-10-10 | Spirit            | W   | 0.853      | 1.000        | 0.818 (0.698)    | 0.337 (0.287)    | 1 (0.853) |    16.51 | broky, frozen, karrigan, rain, Twistzz   |
|           23 |     1564 | 2025-10-08 | Aurora            | W   | 0.840      | 1.000        | 1.000 (0.840)    | 0.436 (0.366)    | 1 (0.840) |    20.69 | broky, frozen, karrigan, rain, Twistzz   |
|           22 |     1618 | 2025-10-07 | Inner Circle      | W   | 0.834      | 1.000        | -                | 0.665 (0.554)    | 1 (0.834) |     7.27 | broky, frozen, karrigan, rain, Twistzz   |
|           21 |     1686 | 2025-10-06 | Astralis          | W   | 0.826      | 1.000        | 0.438 (0.362)    | 0.358 (0.296)    | 1 (0.826) |    14.21 | broky, frozen, karrigan, rain, Twistzz   |
|           20 |     1738 | 2025-10-05 | 3DMAX             | L   | 0.820      | -            | -                | -                | -         |   -10.90 | broky, frozen, karrigan, rain, Twistzz   |
|           19 |     1801 | 2025-10-04 | G2                | L   | 0.812      | -            | -                | -                | -         |    -9.69 | broky, frozen, jcobbb, karrigan, Twistzz |
|           18 |     2411 | 2025-09-17 | Liquid            | L   | 0.698      | -            | -                | -                | -         |    -8.71 | broky, frozen, jcobbb, karrigan, rain    |
|           17 |     2426 | 2025-09-16 | The MongolZ       | L   | 0.693      | -            | -                | -                | -         |    -4.39 | broky, frozen, jcobbb, karrigan, rain    |
|           16 |     2446 | 2025-09-15 | Falcons           | L   | 0.687      | -            | -                | -                | -         |    -4.53 | broky, frozen, jcobbb, karrigan, rain    |
|           15 |     2507 | 2025-09-14 | 3DMAX             | W   | 0.678      | 1.000        | 0.521 (0.353)    | 0.493 (0.334)    | 1 (0.678) |    13.06 | broky, frozen, jcobbb, karrigan, rain    |
|           14 |     2542 | 2025-09-13 | paiN              | W   | 0.673      | 1.000        | 0.353 (0.237)    | 0.353 (0.238)    | -         |     9.11 | broky, frozen, jcobbb, karrigan, rain    |
|           13 |     2863 | 2025-09-05 | G2                | L   | 0.621      | -            | -                | -                | -         |    -8.09 | broky, frozen, jcobbb, karrigan, rain    |
|           12 |     2915 | 2025-09-01 | Vitality          | L   | 0.592      | -            | -                | -                | -         |    -3.42 | broky, frozen, jcobbb, karrigan, rain    |
|           11 |     2981 | 2025-08-29 | Natus Vincere     | W   | 0.574      | 0.561        | 0.699 (0.225)    | -                | -         |    11.19 | broky, frozen, jcobbb, karrigan, rain    |
|           10 |     3054 | 2025-08-27 | ECSTATIC          | W   | 0.560      | 0.561        | -                | 0.727 (0.229)    | -         |     3.89 | broky, frozen, jcobbb, karrigan, rain    |
|            9 |     3181 | 2025-08-20 | Aurora            | L   | 0.514      | -            | -                | -                | -         |    -3.00 | broky, EliGE, frozen, karrigan, rain     |
|            8 |     3604 | 2025-08-09 | Virtus.pro        | L   | 0.440      | -            | -                | -                | -         |   -12.50 | broky, EliGE, frozen, karrigan, rain     |
|            7 |     3659 | 2025-08-05 | BetBoom           | W   | 0.414      | 0.624        | -                | 1.000 (0.258)    | -         |     5.22 | broky, EliGE, frozen, karrigan, rain     |
|            6 |     3760 | 2025-07-29 | Natus Vincere     | L   | 0.367      | -            | -                | -                | -         |    -4.38 | broky, EliGE, frozen, karrigan, rain     |
|            5 |     3766 | 2025-07-29 | Aurora            | W   | 0.365      | 1.000        | 1.000 (0.365)    | -                | -         |     9.44 | broky, EliGE, frozen, karrigan, rain     |
|            4 |     3785 | 2025-07-28 | Liquid            | W   | 0.359      | 1.000        | 0.536 (0.192)    | 0.450 (0.162)    | -         |     7.55 | broky, EliGE, frozen, karrigan, rain     |
|            3 |     3840 | 2025-07-26 | Natus Vincere     | L   | 0.347      | -            | -                | -                | -         |    -3.96 | broky, EliGE, frozen, karrigan, rain     |
|            2 |     3872 | 2025-07-24 | Liquid            | W   | 0.334      | -            | -                | -                | -         |     7.21 | broky, EliGE, frozen, karrigan, rain     |
|            1 |     3887 | 2025-07-23 | BIG               | W   | 0.327      | -            | -                | -                | -         |     0.12 | broky, EliGE, frozen, karrigan, rain     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($150,497.93)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2025-10-19 |      0.912 | $30,000.00     | $27,348.87      |
| 2025-10-12 |      0.867 | $72,000.00     | $62,404.15      |
| 2025-09-21 |      0.728 | $23,330.00     | $16,972.91      |
| 2025-09-07 |      0.634 | $20,000.00     | $12,676.63      |
| 2025-08-24 |      0.539 | $20,000.00     | $10,775.76      |
| 2025-08-10 |      0.447 | $2,500.00      | $1,117.03       |
| 2025-08-03 |      0.400 | $38,000.00     | $15,202.58      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
