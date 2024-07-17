### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1661.4<br />
<br />
Final Rank Value (1661.4) = Starting Rank Value (1717.3) + Head To Head Adjustments (-55.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.602[<sup>2</sup>](#table1)
- Opponent Network: 0.290[<sup>2</sup>](#table1)
- LAN Wins: 0.562[<sup>2</sup>](#table1)

The average of these factors is 0.613<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1717.3
- 400 + ( ( 0.613 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1717.3


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
|           38 |      737 | 2024-06-06 | BetBoom           | L   | 0.927      | -            | -                | -                | -         |   -20.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      754 | 2024-06-06 | BIG               | W   | 0.925      | 0.715        | 0.212 (0.140)    | 0.382 (0.253)    | 1 (0.925) |     5.13 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      762 | 2024-06-06 | FURIA             | L   | 0.924      | -            | -                | -                | -         |   -21.14 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      790 | 2024-06-05 | fnatic            | L   | 0.920      | -            | -                | -                | -         |   -23.46 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      813 | 2024-06-05 | Complexity        | L   | 0.918      | -            | -                | -                | -         |   -11.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1115 | 2024-05-23 | Liquid            | W   | 0.834      | 0.769        | 0.494 (0.316)    | 0.510 (0.327)    | -         |     9.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1159 | 2024-05-22 | GamerLegion       | W   | 0.827      | 0.769        | 0.244 (0.155)    | 0.333 (0.211)    | -         |     2.23 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1198 | 2024-05-21 | BetBoom           | W   | 0.820      | 0.769        | 0.403 (0.254)    | 0.704 (0.444)    | -         |     6.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1354 | 2024-05-16 | SAW               | W   | 0.788      | 0.769        | 0.147 (0.089)    | 0.544 (0.330)    | -         |     2.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1366 | 2024-05-16 | PARIVISION        | W   | 0.786      | 0.769        | -                | 0.424 (0.256)    | -         |     0.48 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1829 | 2024-04-27 | SAW               | L   | 0.661      | -            | -                | -                | -         |   -19.28 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1857 | 2024-04-26 | FaZe              | L   | 0.654      | -            | -                | -                | -         |    -5.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1884 | 2024-04-25 | fnatic            | W   | 0.648      | 0.889        | 0.300 (0.173)    | 0.632 (0.364)    | 1 (0.648) |     5.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1904 | 2024-04-24 | Imperial          | W   | 0.641      | 0.889        | 0.386 (0.220)    | 0.607 (0.346)    | 1 (0.641) |     4.10 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1926 | 2024-04-23 | Astralis          | L   | 0.633      | -            | -                | -                | -         |    -5.91 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1981 | 2024-04-20 | Sashi             | L   | 0.614      | -            | -                | -                | -         |   -18.64 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2031 | 2024-04-19 | Sashi             | W   | 0.607      | -            | -                | -                | -         |     0.63 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2041 | 2024-04-19 | BetBoom           | W   | 0.606      | -            | -                | -                | -         |     5.16 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2600 | 2024-03-29 | Natus Vincere     | L   | 0.467      | -            | -                | -                | -         |    -4.69 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2708 | 2024-03-23 | Virtus.pro        | W   | 0.426      | 1.000        | 0.349 (0.149)    | -                | 1 (0.426) |     6.76 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2723 | 2024-03-22 | FaZe              | W   | 0.419      | 1.000        | 0.902 (0.378)    | 0.479 (0.201)    | 1 (0.419) |     9.44 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2740 | 2024-03-21 | MOUZ              | L   | 0.414      | -            | -                | -                | -         |    -2.41 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2748 | 2024-03-21 | Vitality          | W   | 0.413      | 1.000        | 0.733 (0.302)    | 0.416 (0.171)    | 1 (0.413) |    10.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2787 | 2024-03-19 | GamerLegion       | W   | 0.399      | -            | -                | -                | 1 (0.399) |     0.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2795 | 2024-03-18 | HEROIC            | L   | 0.393      | -            | -                | -                | -         |    -5.91 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2818 | 2024-03-17 | paiN              | W   | 0.387      | -            | -                | -                | 1 (0.387) |     3.64 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2829 | 2024-03-17 | The MongolZ       | W   | 0.386      | -            | -                | -                | 1 (0.386) |     9.77 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3500 | 2024-02-17 | BetBoom           | W   | 0.194      | -            | -                | -                | 1 (0.194) |     2.35 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3534 | 2024-02-16 | FaZe              | L   | 0.186      | -            | -                | -                | -         |    -1.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3569 | 2024-02-15 | Falcons           | W   | 0.179      | -            | -                | -                | -         |     1.70 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3592 | 2024-02-14 | G2                | L   | 0.174      | -            | -                | -                | -         |    -1.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3602 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.173      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3711 | 2024-02-05 | Natus Vincere     | L   | 0.115      | -            | -                | -                | -         |    -1.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3723 | 2024-02-04 | FaZe              | L   | 0.108      | -            | -                | -                | -         |    -0.89 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3768 | 2024-02-03 | Falcons           | W   | 0.099      | -            | -                | -                | -         |     0.92 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3837 | 2024-01-31 | Rebels            | W   | 0.081      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3845 | 2024-01-31 | BetBoom           | W   | 0.080      | -            | -                | -                | -         |     1.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4115 | 2024-01-19 | MOUZ              | W   | 0.001      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($245,446.02)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.947 | $8,000.00      | $7,575.78       |
| 2024-05-23 |      0.834 | $250,000.00    | $208,439.29     |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-03-31 |      0.481 | $45,000.00     | $21,646.27      |
| 2024-02-11 |      0.154 | $16,000.00     | $2,462.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
