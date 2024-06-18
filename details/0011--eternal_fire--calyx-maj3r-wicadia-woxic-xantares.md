### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1709.5<br />
<br />
Final Rank Value (1709.5) = Starting Rank Value (1799.3) + Head To Head Adjustments (-89.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.654[<sup>2</sup>](#table1)
- Opponent Network: 0.406[<sup>2</sup>](#table1)
- LAN Wins: 0.695[<sup>2</sup>](#table1)

The average of these factors is 0.689<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1799.3
- 400 + ( ( 0.689 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1799.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      437 | 2024-06-06 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -23.82 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      454 | 2024-06-06 | BIG               | W   | 1.000      | 0.715        | 0.225 (0.161)    | 0.433 (0.310)    | 1 (1.000) |     5.14 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      462 | 2024-06-06 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -25.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      490 | 2024-06-05 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -27.96 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      513 | 2024-06-05 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -15.80 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      817 | 2024-05-23 | Liquid            | W   | 1.000      | 0.769        | 0.498 (0.382)    | 0.629 (0.484)    | -         |    10.67 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      861 | 2024-05-22 | GamerLegion       | W   | 1.000      | 0.769        | 0.239 (0.183)    | 0.336 (0.258)    | -         |     2.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      900 | 2024-05-21 | BetBoom           | W   | 1.000      | 0.769        | 0.414 (0.318)    | 0.798 (0.613)    | -         |     5.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1056 | 2024-05-16 | SAW               | W   | 0.983      | 0.769        | -                | 0.571 (0.431)    | -         |     2.84 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1068 | 2024-05-16 | PARIVISION        | W   | 0.981      | 0.769        | -                | 0.462 (0.349)    | -         |     0.46 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1531 | 2024-04-27 | SAW               | L   | 0.856      | -            | -                | -                | -         |   -25.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1559 | 2024-04-26 | FaZe              | L   | 0.849      | -            | -                | -                | -         |    -7.64 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1586 | 2024-04-25 | fnatic            | W   | 0.843      | 0.889        | 0.290 (0.217)    | 0.666 (0.499)    | 1 (0.843) |     3.58 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1606 | 2024-04-24 | Imperial          | W   | 0.836      | 0.889        | 0.406 (0.302)    | 0.694 (0.516)    | 1 (0.836) |     4.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1628 | 2024-04-23 | Astralis          | L   | 0.829      | -            | -                | -                | -         |   -10.10 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1683 | 2024-04-20 | Sashi             | L   | 0.810      | -            | -                | -                | -         |   -24.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1733 | 2024-04-19 | Sashi             | W   | 0.803      | -            | -                | -                | -         |     0.53 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1743 | 2024-04-19 | BetBoom           | W   | 0.802      | -            | -                | -                | -         |     4.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2303 | 2024-03-29 | Natus Vincere     | L   | 0.662      | -            | -                | -                | -         |    -7.93 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2411 | 2024-03-23 | Virtus.pro        | W   | 0.621      | 1.000        | 0.345 (0.215)    | 0.427 (0.266)    | 1 (0.621) |     8.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2426 | 2024-03-22 | FaZe              | W   | 0.614      | 1.000        | 1.000 (0.614)    | 0.540 (0.332)    | 1 (0.614) |    13.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2443 | 2024-03-21 | MOUZ              | L   | 0.609      | -            | -                | -                | -         |    -5.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2451 | 2024-03-21 | Vitality          | W   | 0.608      | 1.000        | 0.738 (0.448)    | -                | 1 (0.608) |    13.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2490 | 2024-03-19 | GamerLegion       | W   | 0.595      | -            | -                | -                | 1 (0.595) |     0.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2498 | 2024-03-18 | HEROIC            | L   | 0.588      | -            | -                | -                | -         |   -10.44 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2521 | 2024-03-17 | paiN              | W   | 0.582      | -            | -                | -                | 1 (0.582) |     4.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2532 | 2024-03-17 | The MongolZ       | W   | 0.581      | -            | -                | -                | 1 (0.581) |    12.24 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3203 | 2024-02-17 | BetBoom           | W   | 0.389      | -            | -                | -                | 1 (0.389) |     3.48 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3237 | 2024-02-16 | FaZe              | L   | 0.382      | -            | -                | -                | -         |    -3.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3272 | 2024-02-15 | Falcons           | W   | 0.374      | -            | -                | -                | -         |     3.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3295 | 2024-02-14 | G2                | L   | 0.369      | -            | -                | -                | -         |    -3.88 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3305 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.368      | -            | -                | -                | -         |     0.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3414 | 2024-02-05 | Natus Vincere     | L   | 0.310      | -            | -                | -                | -         |    -3.16 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3426 | 2024-02-04 | FaZe              | L   | 0.304      | -            | -                | -                | -         |    -2.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3471 | 2024-02-03 | Falcons           | W   | 0.295      | 1.000        | 0.381 (0.112)    | -                | -         |     2.28 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3540 | 2024-01-31 | Rebels            | W   | 0.276      | -            | -                | -                | -         |     0.15 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3548 | 2024-01-31 | BetBoom           | W   | 0.275      | -            | -                | -                | -         |     2.81 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3818 | 2024-01-19 | MOUZ              | W   | 0.196      | -            | -                | -                | -         |     4.66 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3878 | 2024-01-18 | IKLA              | W   | 0.189      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3895 | 2024-01-18 | PERA              | W   | 0.188      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($300,710.22)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-05-23 |      1.000 | $250,000.00    | $250,000.00     |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-03-31 |      0.676 | $45,000.00     | $30,434.02      |
| 2024-02-11 |      0.349 | $16,000.00     | $5,587.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
