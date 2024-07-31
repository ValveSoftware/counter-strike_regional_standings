### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [10](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1637.1<br />
<br />
Final Rank Value (1637.1) = Starting Rank Value (1725.4) + Head To Head Adjustments (-88.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.893[<sup>1</sup>](#table2)
- Bounty Collected: 0.565[<sup>2</sup>](#table1)
- Opponent Network: 0.316[<sup>2</sup>](#table1)
- LAN Wins: 0.793[<sup>2</sup>](#table1)

The average of these factors is 0.642<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1725.4
- 400 + ( ( 0.642 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1725.4


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
|           40 |      138 | 2024-07-28 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |   -12.45 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      175 | 2024-07-26 | 3DMAX             | W   | 1.000      | 0.650        | 0.504 (0.328)    | 1.000 (0.650)    | 1 (1.000) |     5.40 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      220 | 2024-07-25 | AMKAL             | W   | 1.000      | 0.650        | 0.132 (0.086)    | 0.484 (0.315)    | 1 (1.000) |     2.65 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      252 | 2024-07-24 | DMS               | W   | 1.000      | 0.650        | -                | 0.447 (0.291)    | 1 (1.000) |     0.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      259 | 2024-07-24 | Revenant          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |     1267 | 2024-06-06 | BetBoom           | L   | 0.832      | -            | -                | -                | -         |   -20.45 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |     1284 | 2024-06-06 | BIG               | W   | 0.831      | 0.715        | -                | 0.300 (0.178)    | 1 (0.831) |     2.71 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1292 | 2024-06-06 | FURIA             | L   | 0.830      | -            | -                | -                | -         |   -16.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1320 | 2024-06-05 | fnatic            | L   | 0.826      | -            | -                | -                | -         |   -20.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1343 | 2024-06-05 | Complexity        | L   | 0.823      | -            | -                | -                | -         |   -14.81 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1645 | 2024-05-23 | Liquid            | W   | 0.739      | 0.769        | 0.323 (0.183)    | 0.430 (0.245)    | -         |     5.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1689 | 2024-05-22 | GamerLegion       | W   | 0.732      | 0.769        | 0.177 (0.099)    | -                | -         |     1.30 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1728 | 2024-05-21 | BetBoom           | W   | 0.726      | 0.769        | 0.259 (0.144)    | 0.554 (0.309)    | -         |     3.56 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1884 | 2024-05-16 | SAW               | W   | 0.693      | 0.769        | -                | 0.545 (0.290)    | -         |     1.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1896 | 2024-05-16 | PARIVISION        | W   | 0.692      | 0.769        | -                | 0.452 (0.240)    | -         |     0.64 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     2359 | 2024-04-27 | SAW               | L   | 0.566      | -            | -                | -                | -         |   -16.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     2387 | 2024-04-26 | FaZe              | L   | 0.559      | -            | -                | -                | -         |    -8.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2414 | 2024-04-25 | fnatic            | W   | 0.554      | 0.889        | 0.374 (0.184)    | 0.633 (0.311)    | 1 (0.554) |     4.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2434 | 2024-04-24 | Imperial          | W   | 0.546      | 0.889        | 0.245 (0.119)    | 0.685 (0.333)    | 1 (0.546) |     1.71 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2456 | 2024-04-23 | Astralis          | L   | 0.539      | -            | -                | -                | -         |    -9.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2511 | 2024-04-20 | Sashi             | L   | 0.520      | -            | -                | -                | -         |   -15.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2561 | 2024-04-19 | Sashi             | W   | 0.513      | -            | -                | -                | -         |     0.55 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2571 | 2024-04-19 | BetBoom           | W   | 0.512      | -            | -                | -                | -         |     2.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     3130 | 2024-03-29 | Natus Vincere     | L   | 0.373      | -            | -                | -                | -         |    -2.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     3238 | 2024-03-23 | Virtus.pro        | W   | 0.332      | 1.000        | 0.483 (0.160)    | -                | 1 (0.332) |     5.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     3253 | 2024-03-22 | FaZe              | W   | 0.325      | 1.000        | 0.643 (0.209)    | -                | 1 (0.325) |     4.96 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     3270 | 2024-03-21 | MOUZ              | L   | 0.319      | -            | -                | -                | -         |    -3.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3278 | 2024-03-21 | Vitality          | W   | 0.318      | 1.000        | 0.592 (0.188)    | -                | 1 (0.318) |     6.57 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3317 | 2024-03-19 | GamerLegion       | W   | 0.305      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3325 | 2024-03-18 | HEROIC            | L   | 0.299      | -            | -                | -                | -         |    -6.57 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3348 | 2024-03-17 | paiN              | W   | 0.293      | -            | -                | -                | -         |     1.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3359 | 2024-03-17 | The MongolZ       | W   | 0.291      | -            | -                | -                | -         |     7.21 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     4030 | 2024-02-17 | BetBoom           | W   | 0.099      | -            | -                | -                | -         |     0.54 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     4064 | 2024-02-16 | FaZe              | L   | 0.092      | -            | -                | -                | -         |    -1.47 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     4099 | 2024-02-15 | Falcons           | W   | 0.084      | -            | -                | -                | -         |     0.47 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     4122 | 2024-02-14 | G2                | L   | 0.080      | -            | -                | -                | -         |    -0.45 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     4132 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.078      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     4241 | 2024-02-05 | Natus Vincere     | L   | 0.020      | -            | -                | -                | -         |    -0.12 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4253 | 2024-02-04 | FaZe              | L   | 0.014      | -            | -                | -                | -         |    -0.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4298 | 2024-02-03 | Falcons           | W   | 0.005      | -            | -                | -                | -         |     0.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($249,634.85)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.76) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $35,000.00     | $35,000.00      |
| 2024-06-09 |      0.852 | $8,000.00      | $6,819.67       |
| 2024-05-23 |      0.739 | $250,000.00    | $184,811.09     |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |
| 2024-03-31 |      0.387 | $45,000.00     | $17,393.19      |
| 2024-02-11 |      0.059 | $16,000.00     | $950.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
