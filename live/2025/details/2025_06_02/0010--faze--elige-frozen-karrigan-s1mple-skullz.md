### Roster Details<br />
Team Name: FaZe<br />
Roster: EliGE, frozen, karrigan, s1mple, skullz<br />
Global Rank: [10](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1609.0<br />
<br />
Final Rank Value (1609.0) = Starting Rank Value (1688.2) + Head To Head Adjustments (-79.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.850[<sup>1</sup>](#table2)
- Bounty Collected: 0.659[<sup>2</sup>](#table1)
- Opponent Network: 0.376[<sup>2</sup>](#table1)
- LAN Wins: 0.923[<sup>2</sup>](#table1)

The average of these factors is 0.702<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1688.2
- 400 + ( ( 0.702 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 1688.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      125 | 2025-05-21 | HEROIC      | L   | 1.000      | -            | -                | -                | -         |   -18.73 | EliGE, frozen, karrigan, s1mple, skullz |
|           32 |      149 | 2025-05-20 | BC.Game     | W   | 1.000      | 1.000        | -                | 0.512 (0.512)    | 1 (1.000) |     0.84 | EliGE, frozen, karrigan, s1mple, skullz |
|           31 |      171 | 2025-05-19 | Liquid      | L   | 1.000      | -            | -                | -                | -         |   -19.96 | EliGE, frozen, karrigan, s1mple, skullz |
|           30 |      586 | 2025-05-02 | MOUZ        | L   | 0.997      | -            | -                | -                | -         |    -5.83 | broky, EliGE, frozen, karrigan, rain    |
|           29 |      601 | 2025-05-01 | FlyQuest    | W   | 0.991      | 0.687        | 0.193 (0.131)    | -                | 1 (0.991) |     2.34 | broky, EliGE, frozen, karrigan, rain    |
|           28 |      625 | 2025-04-30 | Falcons     | L   | 0.985      | -            | -                | -                | -         |    -7.06 | broky, EliGE, frozen, karrigan, rain    |
|           27 |      779 | 2025-04-23 | GamerLegion | L   | 0.935      | -            | -                | -                | -         |   -15.62 | broky, EliGE, frozen, karrigan, rain    |
|           26 |      784 | 2025-04-22 | 3DMAX       | W   | 0.934      | 1.000        | 0.357 (0.334)    | 0.359 (0.335)    | 1 (0.934) |    12.81 | broky, EliGE, frozen, karrigan, rain    |
|           25 |      798 | 2025-04-21 | The MongolZ | L   | 0.928      | -            | -                | -                | -         |   -10.07 | broky, EliGE, frozen, karrigan, rain    |
|           24 |      813 | 2025-04-20 | paiN        | W   | 0.921      | 1.000        | 0.226 (0.208)    | 0.235 (0.216)    | 1 (0.921) |     3.18 | broky, EliGE, frozen, karrigan, rain    |
|           23 |      981 | 2025-04-13 | Complexity  | W   | 0.870      | 1.000        | 0.273 (0.238)    | 0.520 (0.452)    | 1 (0.870) |     5.93 | broky, EliGE, frozen, karrigan, rain    |
|           22 |      994 | 2025-04-12 | Falcons     | L   | 0.864      | -            | -                | -                | -         |    -7.55 | broky, EliGE, frozen, karrigan, rain    |
|           21 |     1018 | 2025-04-11 | 3DMAX       | W   | 0.856      | 1.000        | 0.357 (0.306)    | 0.359 (0.307)    | 1 (0.856) |    12.88 | broky, EliGE, frozen, karrigan, rain    |
|           20 |     1029 | 2025-04-10 | Betclic     | W   | 0.849      | 1.000        | -                | 0.523 (0.444)    | 1 (0.849) |     1.22 | broky, EliGE, frozen, karrigan, rain    |
|           19 |     1066 | 2025-04-09 | Complexity  | L   | 0.843      | -            | -                | -                | -         |   -21.61 | broky, EliGE, frozen, karrigan, rain    |
|           18 |     1115 | 2025-04-08 | Rare Atom   | W   | 0.836      | 1.000        | -                | 0.703 (0.588)    | 1 (0.836) |     2.62 | broky, EliGE, frozen, karrigan, rain    |
|           17 |     1142 | 2025-04-07 | paiN        | W   | 0.831      | 1.000        | 0.226 (0.187)    | -                | 1 (0.831) |     2.88 | broky, EliGE, frozen, karrigan, rain    |
|           16 |     1155 | 2025-04-06 | Astralis    | L   | 0.824      | -            | -                | -                | -         |   -13.62 | broky, EliGE, frozen, karrigan, rain    |
|           15 |     1720 | 2025-03-23 | Spirit      | L   | 0.731      | -            | -                | -                | -         |    -5.22 | broky, EliGE, frozen, karrigan, rain    |
|           14 |     1770 | 2025-03-21 | Astralis    | W   | 0.717      | 0.715        | 0.699 (0.358)    | 0.588 (0.301)    | 1 (0.717) |    10.65 | broky, EliGE, frozen, karrigan, rain    |
|           13 |     1826 | 2025-03-19 | Virtus.pro  | L   | 0.706      | -            | -                | -                | -         |   -16.21 | broky, EliGE, frozen, karrigan, rain    |
|           12 |     2627 | 2025-02-23 | Astralis    | L   | 0.544      | -            | -                | -                | -         |    -9.53 | broky, EliGE, frozen, karrigan, rain    |
|           11 |     2646 | 2025-02-22 | Falcons     | L   | 0.539      | -            | -                | -                | -         |    -3.90 | broky, EliGE, frozen, karrigan, rain    |
|           10 |     2670 | 2025-02-21 | SAW         | W   | 0.532      | -            | -                | -                | -         |     0.63 | broky, EliGE, frozen, karrigan, rain    |
|            9 |     2812 | 2025-02-16 | MOUZ        | W   | 0.497      | 1.000        | 1.000 (0.497)    | 0.508 (0.252)    | -         |    11.53 | broky, EliGE, frozen, karrigan, rain    |
|            8 |     2843 | 2025-02-15 | Aurora      | W   | 0.491      | 1.000        | 0.990 (0.486)    | 0.718 (0.352)    | -         |    12.04 | broky, EliGE, frozen, karrigan, rain    |
|            7 |     2880 | 2025-02-14 | SAW         | W   | 0.483      | -            | -                | -                | -         |     0.54 | broky, EliGE, frozen, karrigan, rain    |
|            6 |     3186 | 2025-02-04 | Aurora      | L   | 0.418      | -            | -                | -                | -         |    -2.78 | broky, EliGE, frozen, karrigan, rain    |
|            5 |     3195 | 2025-02-03 | G2          | W   | 0.412      | 1.000        | 0.719 (0.296)    | -                | -         |     7.29 | broky, EliGE, frozen, karrigan, rain    |
|            4 |     3206 | 2025-02-02 | Vitality    | L   | 0.406      | -            | -                | -                | -         |    -1.89 | broky, EliGE, frozen, karrigan, rain    |
|            3 |     3225 | 2025-02-01 | BIG         | W   | 0.398      | -            | -                | -                | -         |     1.65 | broky, EliGE, frozen, karrigan, rain    |
|            2 |     3477 | 2025-01-18 | paiN        | L   | 0.304      | -            | -                | -                | -         |    -8.76 | broky, EliGE, frozen, karrigan, rain    |
|            1 |     3484 | 2025-01-16 | M80         | W   | 0.291      | -            | -                | -                | -         |     0.11 | broky, EliGE, frozen, karrigan, rain    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($296,697.79)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.67) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      1.000 | $25,000.00     | $25,000.00      |
| 2025-05-04 |      1.000 | $25,000.00     | $25,000.00      |
| 2025-04-27 |      0.963 | $47,000.00     | $45,270.93      |
| 2025-04-13 |      0.871 | $150,000.00    | $130,678.91     |
| 2025-03-30 |      0.779 | $7,500.00      | $5,840.42       |
| 2025-02-23 |      0.546 | $87,500.00     | $47,748.46      |
| 2025-02-09 |      0.452 | $38,000.00     | $17,159.08      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
