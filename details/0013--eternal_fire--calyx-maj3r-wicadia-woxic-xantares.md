### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1674.3<br />
<br />
Final Rank Value (1674.3) = Starting Rank Value (1737.2) + Head To Head Adjustments (-63.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.613[<sup>2</sup>](#table1)
- Opponent Network: 0.316[<sup>2</sup>](#table1)
- LAN Wins: 0.606[<sup>2</sup>](#table1)

The average of these factors is 0.634<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1737.2
- 400 + ( ( 0.634 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1737.2


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
|           40 |      573 | 2024-06-06 | BetBoom           | L   | 0.966      | -            | -                | -                | -         |   -21.13 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      590 | 2024-06-06 | BIG               | W   | 0.965      | 0.715        | 0.215 (0.148)    | 0.405 (0.279)    | 1 (0.965) |     5.46 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      598 | 2024-06-06 | FURIA             | L   | 0.964      | -            | -                | -                | -         |   -22.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      626 | 2024-06-05 | fnatic            | L   | 0.960      | -            | -                | -                | -         |   -24.91 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      649 | 2024-06-05 | Complexity        | L   | 0.958      | -            | -                | -                | -         |   -12.94 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      951 | 2024-05-23 | Liquid            | W   | 0.873      | 0.769        | 0.494 (0.332)    | 0.546 (0.367)    | -         |     9.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      995 | 2024-05-22 | GamerLegion       | W   | 0.866      | 0.769        | 0.243 (0.161)    | 0.345 (0.229)    | -         |     2.26 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1034 | 2024-05-21 | BetBoom           | W   | 0.860      | 0.769        | 0.406 (0.268)    | 0.745 (0.493)    | -         |     6.26 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1190 | 2024-05-16 | SAW               | W   | 0.827      | 0.769        | 0.147 (0.094)    | 0.526 (0.334)    | -         |     2.31 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1202 | 2024-05-16 | PARIVISION        | W   | 0.826      | 0.769        | -                | 0.446 (0.283)    | -         |     0.48 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1665 | 2024-04-27 | SAW               | L   | 0.700      | -            | -                | -                | -         |   -20.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1693 | 2024-04-26 | FaZe              | L   | 0.694      | -            | -                | -                | -         |    -6.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1720 | 2024-04-25 | fnatic            | W   | 0.688      | 0.889        | 0.298 (0.182)    | 0.623 (0.381)    | 1 (0.688) |     5.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1740 | 2024-04-24 | Imperial          | W   | 0.681      | 0.889        | 0.390 (0.236)    | 0.646 (0.391)    | 1 (0.681) |     4.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1762 | 2024-04-23 | Astralis          | L   | 0.673      | -            | -                | -                | -         |    -6.40 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1817 | 2024-04-20 | Sashi             | L   | 0.654      | -            | -                | -                | -         |   -19.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1867 | 2024-04-19 | Sashi             | W   | 0.647      | -            | -                | -                | -         |     0.60 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1877 | 2024-04-19 | BetBoom           | W   | 0.646      | -            | -                | -                | -         |     5.28 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2436 | 2024-03-29 | Natus Vincere     | L   | 0.507      | -            | -                | -                | -         |    -5.20 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2544 | 2024-03-23 | Virtus.pro        | W   | 0.466      | 1.000        | 0.347 (0.162)    | 0.391 (0.182)    | 1 (0.466) |     7.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2559 | 2024-03-22 | FaZe              | W   | 0.459      | 1.000        | 0.936 (0.429)    | 0.491 (0.225)    | 1 (0.459) |     9.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2576 | 2024-03-21 | MOUZ              | L   | 0.453      | -            | -                | -                | -         |    -3.55 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2584 | 2024-03-21 | Vitality          | W   | 0.452      | 1.000        | 0.733 (0.331)    | -                | 1 (0.452) |    10.92 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2623 | 2024-03-19 | GamerLegion       | W   | 0.439      | -            | -                | -                | 1 (0.439) |     0.21 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2631 | 2024-03-18 | HEROIC            | L   | 0.433      | -            | -                | -                | -         |    -6.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2654 | 2024-03-17 | paiN              | W   | 0.427      | -            | -                | -                | 1 (0.427) |     3.68 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2665 | 2024-03-17 | The MongolZ       | W   | 0.425      | -            | -                | -                | 1 (0.425) |    10.56 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3336 | 2024-02-17 | BetBoom           | W   | 0.233      | -            | -                | -                | 1 (0.233) |     2.75 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3370 | 2024-02-16 | FaZe              | L   | 0.226      | -            | -                | -                | -         |    -1.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3405 | 2024-02-15 | Falcons           | W   | 0.218      | -            | -                | -                | -         |     2.15 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3428 | 2024-02-14 | G2                | L   | 0.214      | -            | -                | -                | -         |    -1.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3438 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.212      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3547 | 2024-02-05 | Natus Vincere     | L   | 0.154      | -            | -                | -                | -         |    -1.37 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3559 | 2024-02-04 | FaZe              | L   | 0.148      | -            | -                | -                | -         |    -1.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3604 | 2024-02-03 | Falcons           | W   | 0.139      | -            | -                | -                | -         |     1.31 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3673 | 2024-01-31 | Rebels            | W   | 0.121      | -            | -                | -                | -         |     0.09 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3681 | 2024-01-31 | BetBoom           | W   | 0.119      | -            | -                | -                | -         |     1.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3951 | 2024-01-19 | MOUZ              | W   | 0.040      | -            | -                | -                | -         |     0.98 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4011 | 2024-01-18 | IKLA              | W   | 0.033      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4028 | 2024-01-18 | PERA              | W   | 0.033      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($258,358.97)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $8,000.00      | $7,892.66       |
| 2024-05-23 |      0.873 | $250,000.00    | $218,341.86     |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-03-31 |      0.521 | $45,000.00     | $23,428.73      |
| 2024-02-11 |      0.194 | $16,000.00     | $3,096.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
