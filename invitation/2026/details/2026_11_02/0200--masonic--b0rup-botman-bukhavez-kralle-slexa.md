### Roster Details<br />
Team Name: MASONIC<br />
Roster: b0RUP, Botman, Bukhavez, kralle, Slexa<br />
Global Rank: [200](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [140]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  709.7<br />
<br />
Final Rank Value (709.7) = Starting Rank Value (698.4) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.4
- 400 + ( ( 0.159 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 698.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1041 | 2026-10-06 | ex-Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -4.29 | b0RUP, Botman, Bukhavez, kralle, Slexa |
|           24 |     1083 | 2026-10-04 | Phantom Academy      | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.493 (0.189)    | 0 (0.000) |    19.56 | b0RUP, Botman, Bukhavez, kralle, Slexa |
|           23 |     1139 | 2026-10-02 | PCIFIC               | L   | 0.994      | -            | -                | -                | -         |    -8.07 | b0RUP, Botman, Bukhavez, kralle, Slexa |
|           22 |     1270 | 2026-10-01 | Lavked               | L   | 0.985      | -            | -                | -                | -         |    -9.23 | b0RUP, Botman, Bukhavez, kralle, Slexa |
|           21 |     1340 | 2026-09-29 | Enjoy                | W   | 0.973      | 0.384        | 0.001 (0.000)    | 0.400 (0.150)    | 0 (0.000) |    19.94 | b0RUP, Botman, Bukhavez, kralle, Slexa |
|           20 |     3065 | 2026-08-24 | HYPERSPIRIT          | L   | 0.732      | -            | -                | -                | -         |    -5.01 | b0RUP, Botman, Frøslev, kralle, Slexa  |
|           19 |     3089 | 2026-08-23 | Drip Too Hard        | L   | 0.725      | -            | -                | -                | -         |   -11.85 | b0RUP, Botman, Frøslev, kralle, Slexa  |
|           18 |     3131 | 2026-08-21 | ex-Zero Tenacity     | L   | 0.713      | -            | -                | -                | -         |    -5.22 | b0RUP, Botman, Frøslev, kralle, Slexa  |
|           17 |     3221 | 2026-08-18 | Bebop                | W   | 0.692      | 0.384        | -                | 0.199 (0.053)    | 0 (0.000) |     8.38 | b0RUP, Botman, Bukhavez, kralle, Slexa |
|           16 |     4720 | 2026-06-13 | Washed               | L   | 0.254      | -            | -                | -                | -         |    -4.38 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|           15 |     4735 | 2026-06-13 | STATE                | W   | 0.253      | 0.357        | 0.022 (0.002)    | 0.289 (0.026)    | 1 (0.253) |     6.55 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|           14 |     4753 | 2026-06-13 | struggletony         | W   | 0.251      | 0.357        | 0.000 (0.000)    | 0.008 (0.001)    | 1 (0.251) |     2.77 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|           13 |     4769 | 2026-06-12 | MASQ                 | L   | 0.248      | -            | -                | -                | -         |    -4.86 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|           12 |     4779 | 2026-06-12 | struggletony         | W   | 0.247      | 0.357        | 0.000 (0.000)    | 0.008 (0.001)    | 1 (0.247) |     2.69 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|           11 |     5366 | 2026-05-23 | ASTRAL               | L   | 0.114      | -            | -                | -                | -         |    -0.40 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|           10 |     5518 | 2026-05-20 | UPGRADE              | L   | 0.094      | -            | -                | -                | -         |    -0.14 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            9 |     5548 | 2026-05-19 | overTIME             | W   | 0.087      | 0.344        | 0.002 (0.000)    | 0.058 (0.002)    | 0 (0.000) |     1.09 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            8 |     5593 | 2026-05-17 | Inner Circle Academy | L   | 0.073      | -            | -                | -                | -         |    -0.16 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            7 |     5604 | 2026-05-17 | Honvéd               | W   | 0.071      | 0.341        | 0.005 (0.000)    | 0.404 (0.010)    | 1 (0.071) |     1.30 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            6 |     5615 | 2026-05-16 | A Great Chaos        | W   | 0.067      | 0.341        | 0.000 (0.000)    | -                | 1 (0.067) |     0.52 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            5 |     5620 | 2026-05-16 | BASEMENT BOYS        | L   | 0.066      | -            | -                | -                | -         |    -0.11 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            4 |     5628 | 2026-05-16 | Azuolas              | W   | 0.065      | 0.341        | 0.001 (0.000)    | 0.188 (0.004)    | 1 (0.065) |     1.38 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            3 |     5630 | 2026-05-16 | Rune Eaters          | L   | 0.065      | -            | -                | -                | -         |    -0.18 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            2 |     5695 | 2026-05-13 | G2 Ares              | L   | 0.047      | -            | -                | -                | -         |    -0.11 | b0RUP, Botman, Frøslev, kralle, Noruyp |
|            1 |     5739 | 2026-05-12 | Rune Eaters          | W   | 0.041      | 0.344        | 0.033 (0.000)    | 0.411 (0.006)    | -         |     1.17 | b0RUP, Botman, Frøslev, kralle, Noruyp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($932.77)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.254 | $3,155.00      | $801.52         |
| 2026-05-17 |      0.074 | $1,766.00      | $131.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
